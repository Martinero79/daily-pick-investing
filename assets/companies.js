// ============================================================
// COMPANY LIST
// This is the ONLY file you normally need to edit to update the site.
//
// TO ADD TODAY'S NEW HIGHLIGHT:
//   1. Save the new dashboard HTML file (exactly as generated,
//      no edits needed) into the "companies" folder.
//   2. Copy one {...} block below, paste it at the BOTTOM of the
//      list (after the last entry, before the closing "];").
//   3. Fill in the fields for the new company.
//   4. Set "file" to match the filename you saved in step 1.
//   5. Save this file and commit the change on GitHub.
//      The homepage always shows whichever entry is LAST in this
//      list, and the archive lists everything, newest first.
//
// Nothing else on the site needs to change.
// ============================================================

const COMPANIES = [
  {
    slug: "arm-holdings",                 // short id, lowercase-with-dashes, must be unique
    name: "Arm Holdings plc",             // full company name
    ticker: "NASDAQ: ARM",                // exchange + ticker
    sector: "Semiconductor IP / AI Compute",
    dateFeatured: "2026-08-11",           // YYYY-MM-DD, the day you're posting this
    price: "$274.58",
    score: "6 / 11",                      // criteria met, from the dashboard's scorecard
    blurb: "Near-monopoly architecture licensor behind 99% of smartphone CPUs, now pushing into AI datacenter compute.",
    file: "companies/arm-holdings.html"   // path to the dashboard file you saved
  },

  {
    slug: "asml-holding",
    name: "ASML Holding N.V.",
    ticker: "NASDAQ: ASML (ADR) / AMS: ASML",
    sector: "Semiconductor Lithography Equipment",
    dateFeatured: "2026-08-12",
    price: "$1,733.48",
    score: "10 / 12",
    blurb: "Sole supplier of EUV lithography systems — the irreplaceable chokepoint behind every leading-edge chip. Clears growth, margin, ROIC and balance-sheet bars comfortably; the one real miss is valuation, up 140% over the last year to well above its own trading history.",
    file: "companies/asml-holding.html"
  },

  {
    slug: "nvidia",
    name: "NVIDIA Corporation",
    ticker: "NASDAQ: NVDA",
    sector: "AI Compute / Data Center Semiconductors",
    dateFeatured: "2026-08-13",
    price: "$217.55",
    score: "10 / 12",
    blurb: "Dominant AI accelerator GPU supplier — data-center AI/GPU now ~90% of revenue, up from ~41% five years ago. Growth, margin, ROIC and valuation-vs-history all clear the bar; misses are FCF conversion and thin insider ownership.",
    file: "companies/nvidia.html"
  },

  // Add the next company below this line, as a new {...} block ⬇

];
