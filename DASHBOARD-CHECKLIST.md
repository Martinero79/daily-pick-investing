# Dashboard build checklist

This is the reference spec for every company dashboard (`companies/*.html`). Use it two ways:

1. **Before starting a new dashboard**, skim this so the research pass gathers everything the template needs (don't stop at "N/A" if real data exists somewhere — see the note at the bottom).
2. **Before calling any dashboard done** (new build or edit), check it against this list and run `verify_dashboard.py` on the file.

Visa (`companies/visa.html`) and SanDisk (`companies/sandisk.html`, after its Aug 21 rebuild) are the current reference examples of a fully-built dashboard — when in doubt, match their structure and density.

## Required pages (6, in this order)

1. **Cover / Summary** — badges, price + 52-wk range + market cap + analyst PT, 4 metric cards, 13-criteria donut + legend, narrative paragraph, thesis callout.
2. **Five-Year Financials** — a real 5-column table (5 fiscal years) with Revenue, EBIT/Operating Income, EBIT margin, Net Income, EPS, FCF, Capex or Net cash/debt, Dividend per share. Plus **two charts**: (a) Revenue vs. EBIT (and FCF if available) bar chart, (b) a margin trend line chart. Plus 3 CAGR summary cards.
3. **Quarterly Trend** — at least 6-8 quarters (not 4) in both the chart and the data table, so the chart shows before/after a turning point, not just the most recent ramp. Headline box for the "what actually moved the stock" story. Guidance callout if available.
4. **Valuation / Balance Sheet / Ownership** — a valuation chart (P/E trend or comparison), ownership donut, balance sheet note, any concentration/crowding risk callout.
5. **13-Criterion Scorecard** — the full fixed table (see below), What's Working / What to Watch two-column bullet lists, sourced footer.
6. **Share Price — Last 5 Years** — a price chart with at least 5-6 data points across the real trading history. If the company hasn't traded for 5 years (recent spin-off/IPO), don't fake it or silently relabel it — title it accurately (e.g. "Share Price Since Spin-Off") and say why in the sec-sub, but still make it as data-rich as the real history allows (use real daily closes for recent inflection points, not just 3-4 milestone dots).

## The 13 criteria (fixed list, always this order)

1. Revenue CAGR (5yr) ≥15%
2. EBIT CAGR (5yr) ≥15%
3. EBIT margin, latest FY ≥20%
4. FCF CAGR (5yr) ≥15%
5. Market share — #1 or #2 in category
6. Market concentration (1=monopoly, 5=open) — score 1-5, 1-2 = Met
7. ROIC vs WACC
8. Net debt/EBITDA <2x
9. FCF conversion (FCF/EBIT) ≥80%
10. Entry multiple vs. own trading history
11. Share count trend — flat/declining
12. Insider/founder ownership — meaningful
13. Capex intensity — low/asset-light

Donut + corner badge always show "X/13 criteria met." If a criterion is genuinely undisclosed/untestable, score it **N/A** (add a gray third donut slice) rather than guessing — but N/A should be the exception, not the default. Before marking something N/A, check one level deeper: predecessor-entity filings (e.g. a former parent company's segment disclosures), peer comparisons, or a reasonable proxy metric with a clear caveat usually get you to a real MET/NOT MET instead.

## Formatting rules (apply to every file)

- CSS: reuse the standard `<style>` block from an existing dashboard (don't redesign it). Font sizes stay in the 11-13px range for body/table text — no jumps like 10px→30px.
- `.page{ margin:0 auto; }` + the `@media screen`/`@media print` width rules must be present so the page isn't pinned to a fixed A4 width on screen.
- `.bullet-list` (used for What's Working/Watch when bullets read better than prose) must inherit `font-size:12px; color:#cbd5e1; line-height:1.55;` explicitly — it does NOT inherit from `.info-box p` since it's a `<ul>`, not a `<p>`. This bug has recurred twice (Novo, NKT) — check it every time `.bullet-list` is used.
- SVG chart labels need at least ~10-15px of headroom between a bar/point's top and the viewBox edge, or the label clips off-canvas invisibly. Always sanity-check the tallest value in a series against its viewBox height before writing the file.
- Every quarterly/annual chart's set of periods must match the data table under it exactly — don't drop the most recent period from the chart while it's still in the table.
- Personal note (optional, `personalNote` field in `companies.js`) is a site-level feature, not baked into the dashboard HTML — leave dashboard files untouched for that.

## Verification (run every time, not just when something looks off)

```
python3 verify_dashboard.py companies/<file>.html
```

Checks: HTML tag balance, clipped SVG chart labels (label too close to viewBox edge), chart-vs-table period mismatches, and scorecard row count (should always sum to 13 across Met/Not Met/N/A). This catches the exact bugs that have shipped before — it should be a always-run step, not a fallback for when the user complains.
