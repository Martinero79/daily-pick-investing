// ============================================================
// Tiny Cloudflare Worker: serves the static site exactly as before,
// and adds one small cached API route for live share price / P/E.
//
// Everything except /api/quote is untouched — it's handed straight
// to the static assets, same as when this site had no Worker at all.
//
// ONE-TIME SETUP REQUIRED before live prices turn on — see
// HOW-TO-LIVE-PRICES.md. Until that's done, /api/quote quietly
// returns {error:"not_configured"} and the site falls back to the
// static prices already baked into companies.js — nothing breaks.
// ============================================================

const QUOTE_TTL_SECONDS = 30 * 60;          // price: refresh every 30 min
const OVERVIEW_TTL_SECONDS = 24 * 60 * 60;  // P/E: refresh once a day (moves slowly, and
                                             // OVERVIEW calls count against the same daily
                                             // API quota as price calls, so this is deliberately
                                             // cached much longer)

export default {
  async fetch(request, env, ctx) {
    const url = new URL(request.url);

    if (url.pathname === "/api/quote") {
      return handleQuote(url, env);
    }

    // Not an API route — serve the static site exactly as before.
    return env.ASSETS.fetch(request);
  }
};

async function handleQuote(url, env) {
  const symbol = (url.searchParams.get("symbol") || "").trim().toUpperCase();
  if (!symbol) {
    return json({ error: "missing_symbol" }, 400);
  }
  if (!env.ALPHA_VANTAGE_KEY) {
    // Key hasn't been configured yet (see HOW-TO-LIVE-PRICES.md).
    // Not an error the visitor should see — the site just uses the
    // static price already in companies.js.
    return json({ error: "not_configured" }, 200);
  }

  const cache = caches.default;

  let price = null, pe = null;
  try {
    [price, pe] = await Promise.all([
      cachedFetch(cache, `quote:${symbol}`, QUOTE_TTL_SECONDS, () => fetchPrice(symbol, env.ALPHA_VANTAGE_KEY)),
      cachedFetch(cache, `overview:${symbol}`, OVERVIEW_TTL_SECONDS, () => fetchPE(symbol, env.ALPHA_VANTAGE_KEY)),
    ]);
  } catch (e) {
    // Any upstream hiccup (network error, rate limit, bad symbol) —
    // fail quietly, the client falls back to the static price.
    return json({ error: "upstream_failed", symbol }, 200);
  }

  return json({ symbol, price, pe, asOf: new Date().toISOString() }, 200);
}

// Wraps a fetcher with Cloudflare's built-in edge Cache API (no KV
// namespace or other provisioning needed). Keyed by a synthetic
// same-origin URL, since Cache API requires a Request/URL as the key.
async function cachedFetch(cache, key, ttlSeconds, fetcher) {
  const cacheKey = new Request(`https://cache.internal/${encodeURIComponent(key)}`);

  const cached = await cache.match(cacheKey);
  if (cached) {
    const data = await cached.json();
    return data.value;
  }

  const value = await fetcher();

  const resp = new Response(JSON.stringify({ value }), {
    headers: {
      "Cache-Control": `max-age=${ttlSeconds}`,
      "Content-Type": "application/json"
    }
  });
  // A caching failure shouldn't break the response to the visitor —
  // worst case, the next request just re-fetches from Alpha Vantage.
  try { await cache.put(cacheKey, resp.clone()); } catch (e) { /* ignore */ }

  return value;
}

async function fetchPrice(symbol, apiKey) {
  const u = `https://www.alphavantage.co/query?function=GLOBAL_QUOTE&symbol=${encodeURIComponent(symbol)}&apikey=${apiKey}`;
  const r = await fetch(u);
  if (!r.ok) return null;
  const data = await r.json();
  if (data.Note || data.Information) return null; // rate-limited or otherwise unavailable
  const raw = data && data["Global Quote"] && data["Global Quote"]["05. price"];
  const num = raw ? Number(raw) : null;
  return Number.isFinite(num) ? num : null;
}

async function fetchPE(symbol, apiKey) {
  const u = `https://www.alphavantage.co/query?function=OVERVIEW&symbol=${encodeURIComponent(symbol)}&apikey=${apiKey}`;
  const r = await fetch(u);
  if (!r.ok) return null;
  const data = await r.json();
  if (data.Note || data.Information) return null;
  const raw = data && data.PERatio;
  if (!raw || raw === "None") return null;
  const num = Number(raw);
  return Number.isFinite(num) ? num : null;
}

function json(obj, status) {
  return new Response(JSON.stringify(obj), {
    status,
    headers: { "Content-Type": "application/json" }
  });
}
