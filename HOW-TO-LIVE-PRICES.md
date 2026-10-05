# Live prices (daily refresh)

Every weekday after the US close a GitHub Action (`.github/workflows/update-prices.yml`) runs
`scripts/update_prices.py`, which pulls closing prices (and Yahoo's trailing/forward P/E) for every
company in `scripts/tickers.json` and writes `assets/prices.json`.

In the browser:
- `assets/live.js` (loaded by every dashboard) updates the headline price, adds a "Live" line
  (day change + Yahoo P/E) and moves the final "Now" point of the share-price chart + its CAGR.
- `assets/site.js` updates the homepage hero and "recently featured" cards.

Everything else (financials, scorecard, valuation history) stays as researched. If prices.json is
empty, older than 10 days, or a ticker is missing, pages simply show their built values.

## One-time setup
1. Upload to GitHub (keep paths): `scripts/`, `.github/workflows/update-prices.yml`, `assets/live.js`,
   `assets/prices.json`, `assets/site.js`, `companies/*.html`.
2. Repo -> Settings -> Actions -> General -> Workflow permissions -> **Read and write permissions**.
3. Actions tab -> "Update share prices" -> **Run workflow**. Open the log: the line
   `could not fetch: ...` lists tickers whose Yahoo symbol needs fixing in `scripts/tickers.json`.
4. Purge the Cloudflare cache once.

## Adding a new company
Add `"slug": {"sym": "YAHOO.SYMBOL"}` to `scripts/tickers.json` (use `"div": 100` when Yahoo quotes pence).

`worker.js` / the old `/api/quote` route is no longer used by the site and can be left alone or deleted.
