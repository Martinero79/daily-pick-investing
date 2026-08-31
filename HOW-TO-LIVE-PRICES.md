# Turning on live share price / P/E (one-time, ~5 minutes)

The homepage highlight and the "recently featured" strip (up to 5
companies total) can show a live share price and P/E instead of the
static snapshot baked into `companies.js`. Everything else on the
site — the full archive, every dashboard's financials and scorecard —
stays exactly as it is today; those are hand-researched and only
change when you ask for a new company or an update.

This is deliberately scoped to just those 5 tickers. Free market-data
APIs have small daily request limits, and 5 tickers with caching
comfortably fits inside that; all ~75 companies would not.

Nothing breaks if you skip this. Until it's set up, the site just
keeps showing the static prices exactly like before.

## What you're setting up

A free Alpha Vantage API key, stored as a secret on your Cloudflare
project (not in the GitHub repo, so it's never publicly visible).
`worker.js` (already in this folder) uses it to fetch price + P/E and
caches the result at Cloudflare's edge — price refreshes every 30
minutes, P/E once a day — so a handful of visitors a day costs only a
few actual API calls, not one per pageview.

## Steps

1. **Get a free API key**: go to
   https://www.alphavantage.co/support/#api-key, enter your email,
   and copy the key it gives you. Takes under a minute, no card
   required.

2. **Add it as a Cloudflare secret** (not to any file — this keeps it
   out of the public GitHub repo):
   - Go to your project in the Cloudflare dashboard
     (dash.cloudflare.com → Workers & Pages → this project).
   - Go to **Settings → Variables and Secrets**.
   - Click **Add**, name it exactly `ALPHA_VANTAGE_KEY`, paste the
     key, mark it as **Secret** (encrypted), save.
   - Redeploy (or just wait for your next commit) so the Worker picks
     it up.

3. **Push the three changed/new files to GitHub** the same way you
   always upload updates: `wrangler.jsonc` (updated), `worker.js`
   (new), `assets/site.js` and `assets/style.css` (updated). That's
   it — the next deploy will have live prices on.

## How to tell it's working

Open the homepage. The Price stat next to today's highlight will get
a small dot next to it — grey means "still loading or falling back to
the static price," green means "this is live," and hovering it shows
the exact time it last refreshed. The same dot appears on each card in
the "recently featured" strip.

## If a ticker doesn't show live data

Some exchanges (particularly Korean/KRX listings like Samsung and
SK hynix) aren't reliably covered by Alpha Vantage's free tier. If a
ticker doesn't resolve, that company's card just keeps showing its
static price — nothing looks broken, it just won't have the live dot.

## If you want this on more than 5 companies later

Two changes needed: (1) an Alpha Vantage paid tier, since the free
25-requests/day limit is what caps this at ~5 tickers; (2) applying
the same `data-ticker` + live-quote pattern used in `site.js`'s
`cardHTML()` to the archive/scoreboard rendering too. Ask and this
can be extended.
