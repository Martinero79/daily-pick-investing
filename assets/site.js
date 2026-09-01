// ============================================================
// Rendering logic — you shouldn't need to touch this file.
// It reads assets/companies.js and fills in whichever page
// you're on (index.html, archive.html, or view.html).
// ============================================================

function fmtDate(iso) {
  const dt = new Date(iso + "T00:00:00");
  return dt.toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric" });
}

function personalNoteHTML(c) {
  if (!c.personalNote) return "";
  return `
    <div class="personal-note">
      <div class="kicker">Why I picked this one</div>
      <p>${c.personalNote}<span class="signoff">— Maarten</span></p>
    </div>`;
}

// Builds the clickable Industry / Sub-Industry / Special-tag chips for a
// company. Each chip links to archive.html filtered to that label —
// see the "label" query param handling in the archive-page block below.
function labelHref(type, value) {
  return `archive.html?label=${type}:${encodeURIComponent(value)}`;
}

function labelChipsHTML(c) {
  const chips = [];
  if (c.industry) chips.push(`<a class="label-chip industry-chip" href="${labelHref("industry", c.industry)}">${c.industry}</a>`);
  if (c.subIndustry) chips.push(`<a class="label-chip sub-chip" href="${labelHref("sub", c.subIndustry)}">${c.subIndustry}</a>`);
  (c.tags || []).forEach(t => chips.push(`<a class="label-chip tag-chip" href="${labelHref("tag", t)}">${t}</a>`));
  return chips.length ? `<div class="label-row">${chips.join("")}</div>` : "";
}

// ============================================================
// Live price / P/E — see worker.js and HOW-TO-LIVE-PRICES.md.
// Deliberately scoped to just the homepage hero + the up-to-4
// "recently featured" cards (5 tickers max), not the full archive —
// that's what keeps this light on the free API tier. Every element
// starts showing the static price already baked into companies.js;
// hydrateLiveQuotes() only replaces it if a live value comes back,
// and silently leaves the static value alone otherwise.
// ============================================================

function tickerSymbol(ticker) {
  const idx = (ticker || "").indexOf(": ");
  return idx > -1 ? ticker.slice(idx + 2) : (ticker || "");
}

function liveQuoteHTML(c) {
  const sym = tickerSymbol(c.ticker);
  return `<div class="live-quote" data-ticker="${sym}">
    <span class="live-quote-price">${c.price}</span>
    <span class="live-quote-pe"></span>
    <span class="live-dot" title="Live price not loaded yet"></span>
  </div>`;
}

function cssEscape(s) {
  return (window.CSS && CSS.escape) ? CSS.escape(s) : String(s).replace(/["\\]/g, "\\$&");
}

function formatLivePrice(rawNumber, originalText) {
  if (rawNumber == null || isNaN(rawNumber)) return originalText;
  const m = (originalText || "").match(/^([^\d\-]*)/);
  const prefix = m ? m[1] : "";
  const hadDecimals = /\.\d/.test(originalText || "");
  const decimals = hadDecimals ? 2 : 0;
  const formatted = Number(rawNumber).toLocaleString("en-US", { minimumFractionDigits: decimals, maximumFractionDigits: decimals });
  return prefix + formatted;
}

function applyLiveQuote(sym, data) {
  const heroPriceEl = document.getElementById("hero-live-price");
  if (heroPriceEl && heroPriceEl.dataset.ticker === sym && data.price != null) {
    heroPriceEl.textContent = formatLivePrice(data.price, heroPriceEl.textContent);
    const dot = document.getElementById("hero-live-dot");
    if (dot) { dot.classList.add("is-live"); dot.title = "Live price, as of " + new Date(data.asOf).toLocaleString(); }
    if (data.pe != null) {
      const peStat = document.getElementById("hero-pe-stat");
      const peEl = document.getElementById("hero-live-pe");
      if (peStat) peStat.style.display = "";
      if (peEl) peEl.textContent = data.pe.toFixed(1) + "x";
    }
  }

  document.querySelectorAll(`.live-quote[data-ticker="${cssEscape(sym)}"]`).forEach(block => {
    if (data.price == null) return;
    const priceEl = block.querySelector(".live-quote-price");
    const peEl = block.querySelector(".live-quote-pe");
    const dot = block.querySelector(".live-dot");
    if (priceEl) priceEl.textContent = formatLivePrice(data.price, priceEl.textContent);
    if (peEl && data.pe != null) peEl.textContent = " · P/E " + data.pe.toFixed(1) + "x";
    if (dot) { dot.classList.add("is-live"); dot.title = "Live price, as of " + new Date(data.asOf).toLocaleString(); }
  });
}

async function hydrateLiveQuotes() {
  const els = document.querySelectorAll("[data-ticker]");
  if (!els.length) return;

  const symbols = new Set();
  els.forEach(el => { if (el.dataset.ticker) symbols.add(el.dataset.ticker); });

  await Promise.allSettled([...symbols].map(async (sym) => {
    try {
      const r = await fetch(`/api/quote?symbol=${encodeURIComponent(sym)}`);
      if (!r.ok) return;
      const data = await r.json();
      if (data.error || data.price == null) return; // static fallback already showing — nothing to do
      applyLiveQuote(sym, data);
    } catch (e) {
      // Network hiccup, ticker not covered by the API, etc. — the
      // static price from companies.js is already showing, so there's
      // nothing more to do here.
    }
  }));
}

// Annual revenue growth trend — non-scored, not part of the Martinero Index.
// Compares the most recent FULL FISCAL YEAR's revenue growth rate to the prior
// fiscal year's: faster = accelerating, slower = decelerating, roughly flat
// (within ~2pp) = steady. This is an annual measure, not a real-time or
// quarterly signal — labeled explicitly as "(FY)" wherever it's shown so it
// isn't mistaken for current-quarter momentum. See About page.
function momentumChipHTML(c) {
  if (!c.momentum) return "";
  const m = c.momentum;
  const arrow = m.status === "accelerating" ? "&#9650;" : m.status === "decelerating" ? "&#9660;" : "&#8213;";
  const label = m.status === "accelerating" ? "Accelerating" : m.status === "decelerating" ? "Decelerating" : "Steady";
  const detail = (m.recent != null && m.prior != null) ? ` (FY ${m.prior.toFixed(0)}%&rarr;${m.recent.toFixed(0)}%)` : "";
  return `<span class="momentum-chip momentum-${m.status}" title="Annual revenue growth trend — most recent full fiscal year's growth rate vs the year before. Not real-time, not part of the Martinero Index.">${arrow} ${label}${detail}</span>`;
}

function cardHTML(c, opts) {
  opts = opts || {};
  const martineroChip = (c.martinero !== undefined)
    ? `<span class="score-chip martinero-chip">Martinero ${c.martinero}/100</span>` : "";
  const liveBlock = opts.live ? liveQuoteHTML(c) : "";
  return `
    <div class="company-card" data-href="view.html?c=${encodeURIComponent(c.slug)}">
      <div class="card-top">
        <span class="pill">${c.ticker}</span>
        <span class="card-date">${fmtDate(c.dateFeatured)}</span>
      </div>
      <h3>${c.name}</h3>
      <div class="card-sector">${c.sector}</div>
      ${labelChipsHTML(c)}
      ${liveBlock}
      <p class="card-blurb">${c.blurb}</p>
      <div class="card-bottom">
        <span class="chip-row">
          <span class="score-chip">${c.score} criteria met</span>
          ${martineroChip}
          ${momentumChipHTML(c)}
        </span>
        <a class="card-link" href="view.html?c=${encodeURIComponent(c.slug)}">View dashboard →</a>
      </div>
    </div>`;
}

// company-card is a <div> (not <a>) because it now contains real <a> label
// chips inside it, and browsers don't allow nested links. Clicking anywhere
// on the card that isn't itself a link navigates to the dashboard instead.
document.addEventListener("click", (e) => {
  if (e.target.closest("a")) return; // let real links (chips, "View dashboard") behave normally
  const card = e.target.closest(".company-card");
  if (card && card.dataset.href) window.location.href = card.dataset.href;
});

document.addEventListener("DOMContentLoaded", () => {
  const hasData = typeof COMPANIES !== "undefined" && COMPANIES.length > 0;

  // ---- Homepage hero: most recently added company ----
  const heroEl = document.getElementById("today-highlight");
  if (heroEl) {
    if (!hasData) {
      heroEl.innerHTML = `<div class="kicker">No highlight yet</div><h1>Add your first company</h1><p class="hero-blurb">Edit assets/companies.js to add today's pick.</p>`;
    } else {
      const c = COMPANIES[COMPANIES.length - 1];
      heroEl.innerHTML = `
        <div class="kicker">Today's Highlight — ${fmtDate(c.dateFeatured)}</div>
        <h1>${c.name}</h1>
        <div class="badge-row">
          <span class="pill">${c.ticker}</span>
          <span class="pill pill-muted">${c.sector}</span>
        </div>
        ${labelChipsHTML(c)}
        <p class="hero-blurb">${c.blurb}</p>
        <div class="hero-stats">
          <div class="hero-stat"><div class="stat-label">Price</div><div class="stat-value"><span id="hero-live-price" data-ticker="${tickerSymbol(c.ticker)}">${c.price}</span><span class="live-dot" id="hero-live-dot" title="Live price not loaded yet"></span></div></div>
          <div class="hero-stat" id="hero-pe-stat" style="display:none;"><div class="stat-label">P/E (live)</div><div class="stat-value" id="hero-live-pe">—</div></div>
          <div class="hero-stat"><div class="stat-label">Screen Score</div><div class="stat-value">${c.score}</div></div>
          ${c.martinero !== undefined ? `<div class="hero-stat"><div class="stat-label">Martinero Index</div><div class="stat-value stat-value-martinero">${c.martinero}/100</div></div>` : ""}
        </div>
        ${c.momentum ? `<div style="margin:2px 0 4px 0;">${momentumChipHTML(c)}</div>` : ""}
        ${personalNoteHTML(c)}
        <a class="btn" href="view.html?c=${encodeURIComponent(c.slug)}">View full dashboard →</a>`;
    }
  }

  // ---- Homepage: recently featured strip (up to 4, excluding today's) ----
  const recentEl = document.getElementById("recent-list");
  if (recentEl) {
    const recent = hasData ? COMPANIES.slice(0, -1).slice(-4).reverse() : [];
    recentEl.innerHTML = recent.length
      ? recent.map(c => cardHTML(c, { live: true })).join("")
      : `<p class="muted">More companies will show up here as they're added.</p>`;
  }

  // ---- Archive page: everything, newest first — filterable by label ----
  const archiveEl = document.getElementById("archive-list");
  if (archiveEl) {
    const all = hasData ? [...COMPANIES].reverse() : [];

    // Parse ?label=type:value (type is "industry", "sub", or "tag")
    const params = new URLSearchParams(window.location.search);
    const labelParam = params.get("label");
    let activeType = null, activeValue = null;
    if (labelParam) {
      const idx = labelParam.indexOf(":");
      if (idx > -1) {
        activeType = labelParam.slice(0, idx);
        activeValue = decodeURIComponent(labelParam.slice(idx + 1));
      }
    }

    // Browse-by-label panel: every Industry / Sub-Industry / Special tag
    // in use, each clickable, with a count and highlighted if active.
    const browseEl = document.getElementById("browse-panel");
    if (browseEl && hasData) {
      const industries = new Map(), subs = new Map(), tags = new Map();
      COMPANIES.forEach(c => {
        if (c.industry) industries.set(c.industry, (industries.get(c.industry) || 0) + 1);
        if (c.subIndustry) subs.set(c.subIndustry, (subs.get(c.subIndustry) || 0) + 1);
        (c.tags || []).forEach(t => tags.set(t, (tags.get(t) || 0) + 1));
      });
      const chipGroup = (map, type, cls) => [...map.entries()]
        .sort((a, b) => b[1] - a[1] || a[0].localeCompare(b[0]))
        .map(([name, count]) => {
          const active = activeType === type && activeValue === name;
          return `<a class="label-chip ${cls}${active ? " active" : ""}" href="${labelHref(type, name)}">${name} <span class="chip-count">${count}</span></a>`;
        }).join("");
      browseEl.innerHTML = `
        <div class="browse-group"><span class="browse-label">Industry</span>${chipGroup(industries, "industry", "industry-chip")}</div>
        <div class="browse-group"><span class="browse-label">Sub-Industry</span>${chipGroup(subs, "sub", "sub-chip")}</div>
        ${tags.size ? `<div class="browse-group"><span class="browse-label">Special</span>${chipGroup(tags, "tag", "tag-chip")}</div>` : ""}
      `;
    }

    // Apply the filter (if any) and show a banner explaining it
    let filtered = all;
    const bannerEl = document.getElementById("filter-banner");
    if (activeType && activeValue) {
      filtered = all.filter(c => {
        if (activeType === "industry") return c.industry === activeValue;
        if (activeType === "sub") return c.subIndustry === activeValue;
        if (activeType === "tag") return (c.tags || []).includes(activeValue);
        return true;
      });
      if (bannerEl) {
        bannerEl.innerHTML = `<div class="filter-banner">Showing <b>${activeValue}</b> — ${filtered.length} compan${filtered.length === 1 ? "y" : "ies"} · <a href="archive.html">Clear filter</a></div>`;
      }
    } else if (bannerEl) {
      bannerEl.innerHTML = "";
    }

    archiveEl.innerHTML = filtered.length
      ? filtered.map(cardHTML).join("")
      : `<p class="muted">No companies match this label yet.</p>`;
  }

  // ---- Scoreboard page: ranked by Martinero Index (default) or Annual Growth Trend (click column header) ----
  // Growth Trend sort key = annual acceleration delta (recent FY growth % − prior FY growth %), highest first.
  // This is a separate, non-scored ranking — it is NOT folded into the Martinero Index.
  const scoreboardEl = document.getElementById("scoreboard-table");
  if (scoreboardEl) {
    let sortKey = "martinero"; // "martinero" | "momentum"

    function momentumDelta(c) {
      if (!c.momentum || c.momentum.recent == null || c.momentum.prior == null) return null;
      return c.momentum.recent - c.momentum.prior;
    }

    function momentumCellHTML(c) {
      const d = momentumDelta(c);
      if (d === null) return `<span class="muted">—</span>`;
      const m = c.momentum;
      const arrow = d > 0 ? "&#9650;" : d < 0 ? "&#9660;" : "&#8213;";
      const label = m.status === "accelerating" ? "Accelerating" : m.status === "decelerating" ? "Decelerating" : "Steady";
      // Show the two actual growth rates, not just the raw pp delta — a bare
      // "+27.3pp" means nothing without the numbers behind it. "FY" prefix
      // makes clear this is annual, not a current-quarter reading.
      return `<span class="momentum-chip momentum-${m.status}">${arrow} ${label} (FY ${m.prior.toFixed(0)}%&rarr;${m.recent.toFixed(0)}%)</span>`;
    }

    function renderScoreboard() {
      const scored = hasData ? COMPANIES.filter(c => c.martinero !== undefined) : [];
      let ranked;
      if (sortKey === "momentum") {
        ranked = [...scored].sort((a, b) => {
          const da = momentumDelta(a), db = momentumDelta(b);
          if (da === null && db === null) return 0;
          if (da === null) return 1;   // companies without momentum data sink to the bottom
          if (db === null) return -1;
          return db - da;
        });
      } else {
        ranked = [...scored].sort((a, b) => b.martinero - a.martinero);
      }

      if (!ranked.length) {
        scoreboardEl.innerHTML = `<p class="muted">No scored companies yet.</p>`;
        return;
      }

      const rows = ranked.map((c, i) => `
        <tr>
          <td class="num">${i + 1}</td>
          <td><a class="card-link" href="view.html?c=${encodeURIComponent(c.slug)}">${c.name}</a><div class="card-date">${c.ticker}</div></td>
          <td>${c.sector || ""}</td>
          <td class="num">${c.score || ""}</td>
          <td class="num"><span class="score-chip martinero-chip">${c.martinero}/100</span></td>
          <td class="num">${momentumCellHTML(c)}</td>
        </tr>`).join("");

      scoreboardEl.innerHTML = `
        <table class="holdings-table">
          <tr>
            <th>#</th>
            <th>Company</th>
            <th>Sector</th>
            <th>Criteria Met</th>
            <th class="sortable-th${sortKey === "martinero" ? " sort-active" : ""}" data-sort="martinero">Martinero Index${sortKey === "martinero" ? " &#9660;" : ""}</th>
            <th class="sortable-th${sortKey === "momentum" ? " sort-active" : ""}" data-sort="momentum" title="Annual revenue growth trend — most recent full fiscal year's growth rate minus the year before's. Not real-time, not part of the Martinero Index.">Growth Trend (Annual)${sortKey === "momentum" ? " &#9660;" : ""}</th>
          </tr>
          ${rows}
        </table>`;

      scoreboardEl.querySelectorAll(".sortable-th").forEach(th => {
        th.addEventListener("click", () => {
          sortKey = th.getAttribute("data-sort");
          renderScoreboard();
        });
      });
    }

    renderScoreboard();
  }

  // ---- View page: load the right dashboard into the iframe ----
  const frame = document.getElementById("dashboard-frame");
  if (frame) {
    const slug = new URLSearchParams(window.location.search).get("c");
    const c = hasData ? COMPANIES.find(x => x.slug === slug) : null;
    const titleEl = document.getElementById("view-title");
    const openEl = document.getElementById("open-new-tab");
    if (c) {
      document.title = c.name + " — Not Your Financial Advisor";
      if (titleEl) titleEl.textContent = c.name;
      if (openEl) openEl.href = c.file;
      frame.src = c.file;
      const noteEl = document.getElementById("view-personal-note");
      if (noteEl) noteEl.innerHTML = personalNoteHTML(c);
      const labelsEl = document.getElementById("view-labels");
      if (labelsEl) labelsEl.innerHTML = labelChipsHTML(c);
    } else if (titleEl) {
      titleEl.textContent = "Company not found";
    }
  }

  // ---- Live price / P/E, hero + recent-strip only (see above) ----
  // No-ops harmlessly on pages with no [data-ticker] elements
  // (archive.html, scoreboard.html, view.html).
  hydrateLiveQuotes();
});
