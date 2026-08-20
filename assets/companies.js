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
    score: "8 / 13",                      // criteria met, from the dashboard's scorecard
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
    score: "11 / 13",
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
    score: "11 / 13",
    blurb: "Dominant AI accelerator GPU supplier — data-center AI/GPU now ~90% of revenue, up from ~41% five years ago. Growth, margin, ROIC and valuation-vs-history all clear the bar; misses are FCF conversion and thin insider ownership.",
    file: "companies/nvidia.html"
  },

  {
    slug: "broadcom",
    name: "Broadcom Inc.",
    ticker: "NASDAQ: AVGO",
    sector: "Semiconductors + Enterprise Infrastructure Software",
    dateFeatured: "2026-08-14",
    price: "$416.08",
    score: "9 / 13",
    blurb: "Diversified semiconductor and enterprise software conglomerate — custom AI accelerators (ASICs) alongside VMware virtualization. Clears growth, margin, ROIC and balance-sheet bars comfortably; misses are mostly structural, including a concentrated customer base and thin insider ownership.",
    file: "companies/broadcom.html"
  },

  {
    slug: "demant",
    name: "Demant A/S",
    ticker: "CPH: DEMANT",
    sector: "Hearing Healthcare / MedTech",
    dateFeatured: "2026-08-15",
    price: "DKK 282.20",
    score: "6 / 13",
    blurb: "Danish hearing-aid and hearing-healthcare manufacturer. A more mixed scorecard — margins have swung year to year, and only about half the criteria clear the bar.",
    file: "companies/demant.html"
  },

  {
    slug: "meta",
    name: "Meta Platforms, Inc.",
    ticker: "NASDAQ: META",
    sector: "Social Media / Digital Advertising + AI Infrastructure",
    dateFeatured: "2026-08-16",
    price: "$599.12",
    score: "8 / 13",
    blurb: "Dominant in social media and digital advertising, now pouring capital into AI infrastructure. Margins, returns on capital and valuation-vs-history clear the bar; growth has cooled and capex is running hot as the AI buildout ramps.",
    file: "companies/meta.html"
  },

  {
    slug: "microsoft",
    name: "Microsoft Corporation",
    ticker: "NASDAQ: MSFT",
    sector: "Cloud Computing / Enterprise Software",
    dateFeatured: "2026-08-17",
    price: "$503.81",
    score: "8 / 13",
    blurb: "Cloud and enterprise software giant, still compounding on Azure and Copilot-driven AI demand. Operating margin has expanded every year on the model's own numbers, though free cash flow has been squeezed by heavy AI capex.",
    file: "companies/microsoft.html"
  },

  {
    slug: "nkt",
    name: "NKT A/S",
    ticker: "CPH: NKT",
    sector: "Power Cables / Energy Transition Infrastructure",
    dateFeatured: "2026-08-18",
    price: "DKK 966.50",
    score: "5 / 13",
    blurb: "Danish manufacturer of power cables for the subsea and land grid buildout tied to the energy transition. Margins have improved sharply from a low base, but the scorecard is still more miss than hit at this stage.",
    file: "companies/nkt.html"
  },

  {
    slug: "nn-group",
    name: "NN Group N.V.",
    ticker: "AMS: NN",
    sector: "Insurance / Asset Management",
    dateFeatured: "2026-08-18",
    price: "€77.94",
    score: "6 / 13",
    blurb: "Dutch insurance and asset manager, mostly Netherlands-focused life and pension products. Solid capital generation and a high dividend yield, but growth and market-position criteria keep it under half the checklist met.",
    file: "companies/nn-group.html"
  },

  {
    slug: "visa",
    name: "Visa Inc.",
    ticker: "NYSE: V",
    sector: "Global Payments Network",
    dateFeatured: "2026-08-18",
    price: "$362.82",
    score: "9 / 13",
    blurb: "The toll-booth on global card payments, alongside Mastercard in a genuine duopoly. Margins, returns on capital and valuation all clear the bar; growth has simply slowed as card payment volumes mature.",
    file: "companies/visa.html"
  },

  {
    slug: "novo-nordisk",
    name: "Novo Nordisk A/S",
    ticker: "CPH: NOVO-B / NYSE: NVO",
    sector: "Pharmaceuticals / GLP-1 Obesity &amp; Diabetes Care",
    dateFeatured: "2026-08-19",
    price: "DKK 294.70",
    score: "10 / 13",
    blurb: "The maker of Ozempic and Wegovy — still growing revenue and earnings every year, but down roughly 75% from its June 2024 peak after two clinical setbacks for its next-gen drug CagriSema and a resurgent Eli Lilly. Clears growth, margin, ROIC and balance-sheet bars; misses are capex intensity and weak free-cash-flow conversion as it builds out manufacturing capacity.",
    file: "companies/novo-nordisk.html",
    personalNote: "Today's pick is partly thanks to the media attention Novo Nordisk has gotten since its Q2 results — but there's a personal angle too. I used to own this stock. Over Christmas break in 2023, I reshuffled my portfolio and bought three names at once: Arm, NVIDIA, and Novo Nordisk. All three took off early on. Arm and NVIDIA kept climbing, but Novo went the other way — from a peak around DKK 1,033 on June 25, 2024, down to a low near DKK 225 in March 2026. It wasn't a winner for me, and I don't hold any Novo shares today. But that's a story about my timing, not necessarily the company's potential — which is exactly why it's worth a clear-eyed look."
  },

  {
    slug: "sandisk",
    name: "SanDisk Corporation",
    ticker: "NASDAQ: SNDK",
    sector: "NAND Flash Memory / AI Data Storage",
    dateFeatured: "2026-08-21",
    price: "$1,568.87",
    score: "7 / 13",
    blurb: "The NAND flash memory maker behind SD cards and enterprise SSDs, spun off from Western Digital in Feb 2025 — up roughly 570% year-to-date on a structural memory shortage colliding with AI-datacenter demand, though the stock has been on a wild round trip: an all-time-high close of $2,335 on June 25, a 56% plunge to $1,015.89 by July 29, and a partial recovery since. Genuinely strong numbers on most criteria, but two can't be tested at all given the short standalone trading history.",
    file: "companies/sandisk.html",
    personalNote: "I didn't see this one coming. To me, SanDisk was always just the name on the memory card in my old camera — not a stock I'd ever think to check. Then a friend mentioned it to me, already deep into a run I'd completely missed: from around $235 at the start of the year to a peak near $2,354 by late June, on a genuine shortage of the NAND flash memory that AI data centers need for storage. It's cooled off since — down to around $1,569 now, roughly a third off that peak, as the memory-chip trade caught some profit-taking. Still up something like 570% since January, though. I don't own it — I'm overwhelmingly overexposed to AI as it is. But I expect he serves me a good Malbec at our next asado."
  },

  // Add the next company below this line, as a new {...} block ⬇

];
