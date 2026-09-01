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
    industry: "Semiconductors",
    subIndustry: "Semiconductor IP & Design",
    tags: ["Near-Monopoly", "Geopolitically Critical"],
    dateFeatured: "2026-08-11",          // YYYY-MM-DD, the day you're posting this
    price: "$274.58",
    score: "8 / 13",
    martinero: 66,                    // Martinero Index (weighted 1-100 score, see About)
    momentum: { status: "steady", recent: 22.8, prior: 23.9 },  // revenue growth, most recent FY vs prior FY (non-scored)
    blurb: "Near-monopoly architecture licensor behind 99% of smartphone CPUs, now pushing into AI datacenter compute.",
    file: "companies/arm-holdings.html"   // path to the dashboard file you saved
  },

  {
    slug: "asml-holding",
    name: "ASML Holding N.V.",
    ticker: "NASDAQ: ASML (ADR) / AMS: ASML",
    sector: "Semiconductor Lithography Equipment",
    industry: "Semiconductors",
    subIndustry: "Semiconductor Equipment",
    tags: ["Near-Monopoly", "Geopolitically Critical"],
    dateFeatured: "2026-08-12",
    price: "$1,733.48",
    score: "11 / 13",
    martinero: 82,                    // Martinero Index (weighted 1-100 score, see About)
    momentum: { status: "accelerating", recent: 15.6, prior: 2.6 },  // revenue growth, most recent FY vs prior FY (non-scored)
    blurb: "Sole supplier of EUV lithography systems — the irreplaceable chokepoint behind every leading-edge chip. Clears growth, margin, ROIC and balance-sheet bars comfortably; the one real miss is valuation, up 140% over the last year to well above its own trading history.",
    file: "companies/asml-holding.html",
    personalNote: "ASML is where my portfolio started, 13 years ago, and it taught me a lesson. It nearly doubled fast, so I sold a chunk around €100 to bank some profit — a mistake in hindsight, given it's now trading above €1,600. ASML holds a near-monopoly on the EUV lithography machines behind every leading-edge chip, which is exactly why the US leans on the EU over what it can export, and to whom. It's one leg of the ASML-TSMC-NVIDIA chain driving the AI buildout — boom or bust, I honestly don't know."
  },

  {
    slug: "nvidia",
    name: "NVIDIA Corporation",
    ticker: "NASDAQ: NVDA",
    sector: "AI Compute / Data Center Semiconductors",
    industry: "Semiconductors",
    subIndustry: "AI Compute / GPU Design",
    tags: ["Magnificent Seven", "Geopolitically Critical"],
    dateFeatured: "2026-08-13",
    price: "$217.55",
    score: "11 / 13",
    martinero: 91,                    // Martinero Index (weighted 1-100 score, see About)
    momentum: { status: "decelerating", recent: 65.5, prior: 114.2 },  // revenue growth, most recent FY vs prior FY (non-scored)
    blurb: "Dominant AI accelerator GPU supplier — data-center AI/GPU now ~90% of revenue, up from ~41% five years ago. Growth, margin, ROIC and valuation-vs-history all clear the bar; misses are FCF conversion and thin insider ownership.",
    file: "companies/nvidia.html"
  },

  {
    slug: "broadcom",
    name: "Broadcom Inc.",
    ticker: "NASDAQ: AVGO",
    sector: "Semiconductors + Enterprise Infrastructure Software",
    industry: "Semiconductors",
    subIndustry: "Diversified Semiconductors & Infrastructure Software",
    tags: [],
    dateFeatured: "2026-08-14",
    price: "$416.08",
    score: "9 / 13",
    martinero: 78,                    // Martinero Index (weighted 1-100 score, see About)
    momentum: { status: "decelerating", recent: 23.9, prior: 44.0 },  // revenue growth, most recent FY vs prior FY (non-scored)
    blurb: "Diversified semiconductor and enterprise software conglomerate — custom AI accelerators (ASICs) alongside VMware virtualization. Clears growth, margin, ROIC and balance-sheet bars comfortably; misses are mostly structural, including a concentrated customer base and thin insider ownership.",
    file: "companies/broadcom.html"
  },

  {
    slug: "demant",
    name: "Demant A/S",
    ticker: "CPH: DEMANT",
    sector: "Hearing Healthcare / MedTech",
    industry: "MedTech",
    subIndustry: "Hearing Aids",
    tags: [],
    dateFeatured: "2026-08-15",
    price: "DKK 282.20",
    score: "6 / 13",
    martinero: 54,                    // Martinero Index (weighted 1-100 score, see About)
    momentum: { status: "steady", recent: 2.5, prior: 3.8 },  // revenue growth, most recent FY vs prior FY (non-scored)
    blurb: "Danish hearing-aid and hearing-healthcare manufacturer. A more mixed scorecard — margins have swung year to year, and only about half the criteria clear the bar.",
    file: "companies/demant.html",
    personalNote: "As an ex-employee, I hold an oversized position in my portfolio. Somewhere between growth and blue chip: it grows mid-single digits, but the share price swings far more than the business does — maybe a case for buying low and selling high, if you can time it. The sector behaves like an oligopoly and is consolidating — GN just sold its hearing business to Amplifon, and Demant bought a retail chain of its own. Major launch years tend to be strong; the year after, more moderate. Right now it's riding real momentum — a multi-month rally, strong H1 2026 results and upgraded guidance, a well-received launch with another coming, cost cuts behind it, and that acquisition settling in. Let's see how far it goes."
  },

  {
    slug: "meta",
    name: "Meta Platforms, Inc.",
    ticker: "NASDAQ: META",
    sector: "Social Media / Digital Advertising + AI Infrastructure",
    industry: "Technology",
    subIndustry: "Social Media & Digital Advertising",
    tags: ["Magnificent Seven"],
    dateFeatured: "2026-08-16",
    price: "$599.12",
    score: "8 / 13",
    martinero: 67,                    // Martinero Index (weighted 1-100 score, see About)
    momentum: { status: "steady", recent: 22.2, prior: 21.9 },  // revenue growth, most recent FY vs prior FY (non-scored)
    blurb: "Dominant in social media and digital advertising, now pouring capital into AI infrastructure. Margins, returns on capital and valuation-vs-history clear the bar; growth has cooled and capex is running hot as the AI buildout ramps.",
    file: "companies/meta.html"
  },

  {
    slug: "microsoft",
    name: "Microsoft Corporation",
    ticker: "NASDAQ: MSFT",
    sector: "Cloud Computing / Enterprise Software",
    industry: "Technology",
    subIndustry: "Cloud Computing & Enterprise Software",
    tags: ["Magnificent Seven"],
    dateFeatured: "2026-08-17",
    price: "$503.81",
    score: "8 / 13",
    martinero: 67,                    // Martinero Index (weighted 1-100 score, see About)
    momentum: { status: "accelerating", recent: 17.8, prior: 14.9 },  // revenue growth, most recent FY vs prior FY (non-scored)
    blurb: "Cloud and enterprise software giant, still compounding on Azure and Copilot-driven AI demand. Operating margin has expanded every year on the model's own numbers, though free cash flow has been squeezed by heavy AI capex.",
    file: "companies/microsoft.html"
  },

  {
    slug: "nkt",
    name: "NKT A/S",
    ticker: "CPH: NKT",
    sector: "Power Cables / Energy Transition Infrastructure",
    industry: "Industrials",
    subIndustry: "Power Cables & Electrical Equipment",
    tags: [],
    dateFeatured: "2026-08-18",
    price: "DKK 966.50",
    score: "5 / 13",
    martinero: 55,                    // Martinero Index (weighted 1-100 score, see About)
    momentum: { status: "decelerating", recent: 9.6, prior: 26.7 },  // revenue growth, most recent FY vs prior FY (non-scored)
    blurb: "Danish manufacturer of power cables for the subsea and land grid buildout tied to the energy transition. Margins have improved sharply from a low base, but the scorecard is still more miss than hit at this stage.",
    file: "companies/nkt.html"
  },

  {
    slug: "nn-group",
    name: "NN Group N.V.",
    ticker: "AMS: NN",
    sector: "Insurance / Asset Management",
    industry: "Financial Services",
    subIndustry: "Insurance",
    tags: [],
    dateFeatured: "2026-08-18",
    price: "€77.94",
    score: "6 / 13",
    martinero: 50,                    // Martinero Index (weighted 1-100 score, see About)
    blurb: "Dutch insurance and asset manager, mostly Netherlands-focused life and pension products. Solid capital generation and a high dividend yield, but growth and market-position criteria keep it under half the checklist met.",
    file: "companies/nn-group.html"
  },

  {
    slug: "visa",
    name: "Visa Inc.",
    ticker: "NYSE: V",
    sector: "Global Payments Network",
    industry: "Financial Services",
    subIndustry: "Payments Networks",
    tags: ["Duopoly"],
    dateFeatured: "2026-08-18",
    price: "$362.82",
    score: "9 / 13",
    martinero: 73,                    // Martinero Index (weighted 1-100 score, see About)
    momentum: { status: "steady", recent: 11.3, prior: 10.0 },  // revenue growth, most recent FY vs prior FY (non-scored)
    blurb: "The toll-booth on global card payments, alongside Mastercard in a genuine duopoly. Margins, returns on capital and valuation all clear the bar; growth has simply slowed as card payment volumes mature.",
    file: "companies/visa.html",
    personalNote: "Visa caught my attention for the sub-sector — Visa and Mastercard run a genuine duopoly on card-payment rails, with Amex as a small, closed-loop niche player. Merchants have complained about the fees for years, and they just pass them on — we're all quietly overpaying on every card swipe. It used to feel like a pure blue-chip compounder. Now real-time rails like Pix, UPI and FedNow are built to cut Visa out entirely. Are Visa's golden days ending, or do I just hold and let it grow conservatively?"
  },

  {
    slug: "novo-nordisk",
    name: "Novo Nordisk A/S",
    ticker: "CPH: NOVO-B / NYSE: NVO",
    sector: "Pharmaceuticals / GLP-1 Obesity &amp; Diabetes Care",
    industry: "Pharmaceuticals",
    subIndustry: "GLP-1 & Metabolic Health",
    tags: [],
    dateFeatured: "2026-08-19",
    price: "DKK 294.70",
    score: "10 / 13",
    martinero: 80,                    // Martinero Index (weighted 1-100 score, see About)
    momentum: { status: "decelerating", recent: 6.4, prior: 25.0 },  // revenue growth, most recent FY vs prior FY (non-scored)
    blurb: "The maker of Ozempic and Wegovy — still growing revenue and earnings every year, but down roughly 75% from its June 2024 peak after two clinical setbacks for its next-gen drug CagriSema and a resurgent Eli Lilly. Clears growth, margin, ROIC and balance-sheet bars; misses are capex intensity and weak free-cash-flow conversion as it builds out manufacturing capacity.",
    file: "companies/novo-nordisk.html",
    personalNote: "Today's pick is partly thanks to the media attention Novo Nordisk has gotten since its Q2 results — but there's a personal angle too. I used to own this stock. Over Christmas break in 2023, I reshuffled my portfolio and bought three names at once: Arm, NVIDIA, and Novo Nordisk. All three took off early on. Arm and NVIDIA kept climbing, but Novo went the other way — from a peak around DKK 1,033 on June 25, 2024, down to a low near DKK 225 in March 2026. It wasn't a winner for me, and I don't hold any Novo shares today. But that's a story about my timing, not necessarily the company's potential — which is exactly why it's worth a clear-eyed look."
  },

  {
    slug: "sandisk",
    name: "SanDisk Corporation",
    ticker: "NASDAQ: SNDK",
    sector: "NAND Flash Memory / AI Data Storage",
    industry: "Semiconductors",
    subIndustry: "Memory & Storage",
    tags: [],
    dateFeatured: "2026-08-21",
    price: "$1,568.87",
    score: "7 / 13",
    martinero: 75,                    // Martinero Index (weighted 1-100 score, see About)
    momentum: { status: "accelerating", recent: 175.3, prior: 10.0 },  // revenue growth, most recent FY vs prior FY (non-scored)
    blurb: "The NAND flash memory maker behind SD cards and enterprise SSDs, spun off from Western Digital in Feb 2025 — up roughly 570% year-to-date on a structural memory shortage colliding with AI-datacenter demand, though the stock has been on a wild round trip: an all-time-high close of $2,335 on June 25, a 56% plunge to $1,015.89 by July 29, and a partial recovery since. Genuinely strong numbers on most criteria, but two can't be tested at all given the short standalone trading history.",
    file: "companies/sandisk.html",
    personalNote: "I didn't see this one coming. To me, SanDisk was always just the name on the memory card in my old camera — not a stock I'd ever think to check. Then a friend mentioned it to me, already deep into a run I'd completely missed: from around $235 at the start of the year to a peak near $2,354 by late June, on a genuine shortage of the NAND flash memory that AI data centers need for storage. It's cooled off since — down to around $1,569 now, roughly a third off that peak, as the memory-chip trade caught some profit-taking. Still up something like 570% since January, though. I don't own it — I'm overwhelmingly overexposed to AI as it is. But I expect he serves me a good Malbec at our next asado."
  },

  {
    slug: "palantir",
    name: "Palantir Technologies Inc.",
    ticker: "NASDAQ: PLTR",
    sector: "AI Data Platform / Government &amp; Commercial Analytics",
    industry: "Technology",
    subIndustry: "AI & Data Analytics Software",
    tags: [],
    dateFeatured: "2026-08-21",
    price: "$173.96",
    score: "11 / 13",
    martinero: 92,                    // Martinero Index (weighted 1-100 score, see About)
    momentum: { status: "accelerating", recent: 56.1, prior: 28.8 },  // revenue growth, most recent FY vs prior FY (non-scored)
    blurb: "AI data-fusion platform that started in classified government work and has pushed hard into commercial AI deployment — revenue growth has accelerated to +93% YoY, with GAAP operating margin scaling from -26.7% (FY2021) to 47.1% (Q2 2026). Clears growth, margin, cash and even entry-multiple-vs-history bars; misses are commercial-side competition and continued share dilution. Still expensive at 149x trailing earnings.",
    file: "companies/palantir.html",
    personalNote: "I briefly owned this one. Palantir got hyped hard — at the technological forefront, deeply embedded with the US government and defense establishment, with an outspoken CEO in Alex Karp you either love or can't stand. I bought at the end of that run and sold for a tiny profit — I was late to the show, and if I'm honest, the company never quite felt right for me. The stock showed the hype: from around $16 in late January 2024 to an all-time high of $207 on November 3, 2025 — roughly 13x in under two years, before cooling to around $174 today. On the financial KPIs and business success alone, it might be a good company to own — but at 150x earnings and 74x sales, you're paying almost entirely for growth that hasn't happened yet."
  },

  {
    slug: "tsmc",
    name: "Taiwan Semiconductor Manufacturing Company",
    ticker: "NYSE: TSM (ADR) / TWSE: 2330",
    sector: "Semiconductor Foundry / Advanced Chip Manufacturing",
    industry: "Semiconductors",
    subIndustry: "Semiconductor Foundry",
    tags: ["Near-Monopoly", "Geopolitically Critical"],
    dateFeatured: "2026-08-22",
    price: "$418.95",
    score: "9 / 13",
    martinero: 78,                    // Martinero Index (weighted 1-100 score, see About)
    momentum: { status: "accelerating", recent: 35.9, prior: 30.0 },  // revenue growth, most recent FY vs prior FY (non-scored)
    blurb: "World's dominant contract chipmaker — a near-monopoly (74-77% of wafer revenue) at the leading edge, manufacturing for NVIDIA, Apple, AMD and nearly every fabless chip designer. Clears growth, margin, ROIC and balance-sheet bars comfortably; misses are the extreme capex intensity of the foundry model, FCF conversion, a valuation re-rated above its own recent average, and no controlling founder-CEO since Morris Chang's retirement.",
    file: "companies/tsmc.html",
    personalNote: "I don't own TSMC myself, but it's closer to home than you'd think. I've held ASML for over 13 years, and ASML builds the extreme-UV lithography machines that make TSMC's most advanced chips possible in the first place. Pair that with NVIDIA, which I also own, and the chain is hard to miss: ASML supplies TSMC, TSMC manufactures for NVIDIA, and NVIDIA's chips are what every AI datacenter is racing to secure. Companies like these have become so central to the technology arms race that they're starting to feel less like ordinary stock picks and more like geopolitical pawns — Taiwan alone produces the overwhelming majority of the world's most advanced chips, which is exactly the point. I hold NVIDIA and ASML; my girlfriend holds TSMC. Between the two of us, we're thoroughly overexposed to semiconductors and AI — though that's partly because the growth has been genuinely stellar, not just hype. These are the previous generation's 'must-haves,' now priced accordingly. Still a buy from here? You decide."
  },

  {
    slug: "airbus",
    name: "Airbus SE",
    ticker: "Euronext Paris: AIR / OTC ADR: EADSY",
    sector: "Commercial Aircraft Manufacturing",
    industry: "Industrials",
    subIndustry: "Commercial Aircraft Manufacturing",
    tags: ["Duopoly", "Geopolitically Critical"],
    dateFeatured: "2026-08-23",
    price: "€203.70",
    score: "6 / 13",
    martinero: 58,                    // Martinero Index (weighted 1-100 score, see About)
    momentum: { status: "steady", recent: 6.1, prior: 5.8 },  // revenue growth, most recent FY vs prior FY (non-scored)
    blurb: "One half of the commercial-aircraft duopoly with Boeing, sitting on a record backlog of over 9,200 aircraft — more than a decade of production already locked in. Clears market-share, balance-sheet and ownership-alignment bars; misses are thin margins for the order book it commands, capex intensity, and a valuation that's run well ahead of its own history.",
    file: "companies/airbus.html",
    personalNote: "I filled out the papers for a pilot academy early in my studies — never sent them. Airbus and Boeing run something close to a duopoly, just over 70% of the commercial aircraft market between them, and Airbus's own backlog runs past 9,200 aircraft — over a decade of production already locked in. Does that make it a good investment? Not automatically — a duopoly helps, but Boeing's own execution problems show it can still burn one of the two members. On new entrants: China's COMAC is the real one to watch, already flying commercially and just made its first international flight, though it's still years from EU/US certification. Brazil's Embraer plays a real but smaller game in regional jets. Canada's actually out of it entirely now — Bombardier sold its whole commercial jet program to Airbus back in 2018."
  },

  {
    slug: "intuitive-surgical",
    name: "Intuitive Surgical, Inc.",
    ticker: "NASDAQ: ISRG",
    sector: "Surgical Robotics",
    industry: "MedTech",
    subIndustry: "Surgical Robotics",
    tags: ["Near-Monopoly", "Robotics"],
    dateFeatured: "2026-08-24",
    price: "$378.81",
    score: "10 / 13",
    martinero: 79,                    // Martinero Index (weighted 1-100 score, see About)
    momentum: { status: "accelerating", recent: 20.6, prior: 17.3 },  // revenue growth, most recent FY vs prior FY (non-scored)
    blurb: "Two-decade near-monopoly in robotic surgery — 60%+ market share, a recurring-revenue model, and one of the highest scorecards on this site. Clears growth, margin, ROIC, balance-sheet and even valuation bars; the misses are EBIT/FCF growth during a 2023-24 capacity build and a lack of any founder-anchored ownership. 2025-26 also marks the first year of real, FDA-cleared competition after twenty years unchallenged.",
    file: "companies/intuitive-surgical.html",
    personalNote: "I used to own a robotics ETF that did reasonably well, but I prefer picking my own stocks — and robotics is a sector I believe will only become more relevant, even without deep technical knowledge of it. Intuitive Surgical is how I'd want to express that belief: instead of the cyclical, lower-margin world of industrial robot makers like FANUC or Yaskawa, it's a near-monopoly in one defensible niche — robotic surgery — with a recurring-revenue model built around every da Vinci system placed. For two decades it had the operating room to itself; 2025-26 is the first year real rivals — Medtronic, J&J — show up. It's also just been through a real de-rating, from a P/E in the 70s-80s down to the low 40s — could this be a good buying moment?"
  },

  {
    slug: "dfds",
    name: "DFDS A/S",
    ticker: "Nasdaq Copenhagen: DFDS",
    sector: "Ferry & Freight Shipping",
    industry: "Industrials",
    subIndustry: "Ferry & Freight Shipping",
    tags: [],
    dateFeatured: "2026-08-24",
    price: "DKK 145.60",
    score: "5 / 13",
    martinero: 42,                    // Martinero Index (weighted 1-100 score, see About)
    momentum: { status: "decelerating", recent: 4.0, prior: 9.2 },  // revenue growth, most recent FY vs prior FY (non-scored)
    blurb: "Northern Europe's largest integrated ferry and logistics operator, but a genuinely rough scorecard: EBIT margin collapsed from 9.2% to under 1% between FY2022 and FY2025 on competitive pressure and a Mediterranean misstep, before Q1-Q2 2026 marked a real sequential turnaround with EBIT more than doubling and guidance raised twice. Clears market share, valuation-vs-history, share count and foundation ownership; misses growth, margin, ROIC and leverage badly — a textbook case of the framework's bias against capital-intensive, thin-margin transport.",
    file: "companies/dfds.html",
    personalNote: "DFDS isn't a classic growth stock — a regular year sees single-digit organic revenue growth; the bigger 2021-22 jumps were mostly a COVID rebound and acquisitions. I grew up sailing most summer weekends — my family loves everything maritime, and there was something nice as a kid about dreaming where those ships were headed. DFDS is Northern Europe's largest ferry and logistics operator, still 40%-controlled by the Lauritzen Fonden foundation. I assumed shipping returns would be gradual, not dramatic — sailing, not space travel — but the stock fell roughly 70% over four years as margins collapsed, and even last quarter's sharp EBIT rebound came off a thin base, still under the FY2022 peak margin. Dividends stayed suspended, but buybacks never stopped — a possible positive signal. The shares have already rallied off the bottom, so this may no longer be clearly cheap — is there still a case for modest, patient returns here?"
  },

  {
    slug: "schneider-electric",
    name: "Schneider Electric S.E.",
    ticker: "Euronext Paris: SU",
    sector: "Energy Management & Industrial Automation",
    industry: "Industrials",
    subIndustry: "Electrification & Automation",
    tags: [],
    dateFeatured: "2026-08-25",
    price: "€291.80",
    score: "4 / 13",
    martinero: 54,                    // Martinero Index (weighted 1-100 score, see About)
    momentum: { status: "steady", recent: 5.2, prior: 6.3 },  // revenue growth, most recent FY vs prior FY (non-scored)
    blurb: "A genuinely excellent, well-run French industrial — #1 on Gartner's supply chain ranking for ten straight years, twice named World's Most Sustainable Company, and sitting at the center of AI-driven data-center demand and grid electrification. But the scorecard comes out low regardless: too large to clear a 15% growth bar, competing in a genuinely fragmented market rather than a monopoly, and richly valued after the 2025-26 AI-driven re-rating. Clears market share, net debt/EBITDA, share count and capex intensity; misses growth, margin, ROIC, FCF conversion, valuation-vs-history and insider ownership — a case study in the score measuring something narrower than overall quality.",
    file: "companies/schneider-electric.html",
    personalNote: "Schneider Electric has been on my watch list for almost two years, and I think it's one of the stars of European companies — Gartner's #1 supply chain ten years running, twice named World's Most Sustainable Company. The electrification and renewables thesis checks out: it's genuinely at the center of grid modernization and the AI-driven data-center buildout, with H1 2026 organic revenue growth accelerating to 14%. But I want to be honest about timing — today's P/E of ~35x sits well above Schneider's own five-year average of ~28x, so this isn't a classic 'wait for a dip' entry, and it competes in a genuinely crowded field against Siemens, ABB, Eaton and Legrand rather than holding any kind of monopoly. Net debt has also crept up funding recent acquisitions. None of that changes the long-term story — it's more a question of whether I buy the quality now at a premium, or wait for a better entry point."
  },

  {
    slug: "apple",
    name: "Apple Inc.",
    ticker: "NASDAQ: AAPL",
    sector: "Consumer Hardware & Digital Services",
    industry: "Technology",
    subIndustry: "Consumer Hardware & Digital Services",
    tags: ["Magnificent Seven"],
    dateFeatured: "2026-08-20",
    price: "$310.34",
    score: "7 / 13",
    martinero: 56,                    // Martinero Index (weighted 1-100 score, see About)
    momentum: { status: "accelerating", recent: 6.4, prior: 2.0 },  // revenue growth, most recent FY vs prior FY (non-scored)
    blurb: "Extraordinary quality, mature growth. A 32% operating margin, a ROIC-WACC spread few companies can match, and a genuinely net-cash balance sheet despite hundreds of billions in buybacks. What holds the score back: revenue has compounded at just 3.3% a year since FY2021 and free cash flow hasn't grown at all over that span — this framework's heavy growth weighting catching a mature mega-cap exactly as designed. Clears margin, market position (an effective Apple-Samsung duopoly at the premium tier), ROIC, balance sheet, share count and capex intensity; misses growth, FCF growth, FCF conversion, valuation-vs-history and insider ownership.",
    file: "companies/apple.html",
    personalNote: "Apple's probably the most obvious 'everyone already owns this' stock on this list, but running it through the same checklist as everything else here was still worth doing. The operating numbers are genuinely exceptional — a 32% margin, a ROIC-WACC spread most companies can't touch, and a net-cash balance sheet even after Apple's spent hundreds of billions buying back stock. What the checklist makes hard to ignore is that revenue has barely grown in five years and free cash flow hasn't grown at all, even as the stock itself has kept compounding at a healthy clip. That's not really an 'undervalued' story — the market already prices in the quality — it's more a question of whether I'm comfortable paying up for a wonderful, slow-growing business, or whether that capital is better spent finding the next thing still early in its growth curve."
  },

  {
    slug: "alphabet",
    name: "Alphabet Inc.",
    ticker: "NASDAQ: GOOGL / GOOG",
    sector: "Internet Search, Advertising & Cloud",
    industry: "Technology",
    subIndustry: "Internet Search & Cloud Computing",
    tags: ["Magnificent Seven", "Near-Monopoly"],
    dateFeatured: "2026-08-21",
    price: "$346.96",
    score: "8 / 13",
    martinero: 71,                    // Martinero Index (weighted 1-100 score, see About)
    momentum: { status: "steady", recent: 15.1, prior: 13.9 },  // revenue growth, most recent FY vs prior FY (non-scored)
    blurb: "A genuine near-monopoly (global search, ~89-90% share) paired with founder-controlled governance and, after years of AI-disruption fears, a trailing P/E that's actually cheap relative to its own five-year average. The scorecard's real drag is the current AI infrastructure buildout: capex jumped 74% YoY to $91.4B in FY2025, pulling capex intensity and FCF conversion below this framework's bars. Clears margin, market position, ROIC, balance sheet, valuation-vs-history, share count and founder ownership; misses growth, FCF growth, FCF conversion and capex intensity.",
    file: "companies/alphabet.html",
    personalNote: "Alphabet is the one on this list where the checklist and my gut actually agree for once. A near-monopoly in search, founders who still control the votes even after selling down most of their economic stake, and — this is the part that surprised me — a P/E that's actually below its own five-year average, because the market spent years worried ChatGPT would eat Google's lunch. Meanwhile Google Cloud is growing 82% a year and the core ad business hasn't missed a step. The honest complication is the AI capex ramp: it's eating free cash flow and pushing capex intensity well past what I'd normally call asset-light, and I don't think anyone — including Alphabet — really knows yet when that spending levels off. I like the setup, but I'm watching the capex trajectory closely before adding."
  },

  {
    slug: "amazon",
    name: "Amazon.com, Inc.",
    ticker: "NASDAQ: AMZN",
    sector: "E-Commerce, Cloud Computing & Logistics",
    industry: "Consumer Discretionary",
    subIndustry: "E-Commerce & Cloud Infrastructure",
    tags: ["Magnificent Seven"],
    dateFeatured: "2026-08-24",
    price: "$261.06",
    score: "7 / 13",
    martinero: 54,                    // Martinero Index (weighted 1-100 score, see About)
    momentum: { status: "steady", recent: 12.4, prior: 11.0 },  // revenue growth, most recent FY vs prior FY (non-scored)
    blurb: "A commanding #1 in US e-commerce (~35.7% share, ~6x #2 Walmart) with a genuinely dominant, high-margin cloud business in AWS (39%+ segment margin, growing 37% YoY). Operating income has recovered dramatically off a depressed FY2021 base. The scorecard's real drag is the current AI infrastructure buildout: FY2025 capex hit $131B, pushing capex intensity well past this framework's bar, collapsing free cash flow 71% YoY, and pulling ROIC below WACC on a trailing basis. Clears market share, market concentration, net debt/EBITDA, valuation-vs-history, share count and founder ownership; misses growth, margin, FCF growth, ROIC/WACC, FCF conversion and capex intensity.",
    file: "companies/amazon.html",
    personalNote: "Amazon is the trickiest one on this list to score honestly, because the two halves of the business pull in different directions. AWS on its own would ace this checklist — dominant, high-margin, growing 37% a year — but it's bolted onto a much thinner-margin retail business, so the consolidated numbers land in the middle. The part I take most seriously is that ROIC has actually dipped below WACC right now, and free cash flow is down 71% year-over-year, both driven by a genuinely enormous AI capex ramp ($131B in FY2025 alone). That's not a red flag in the sense of something being broken — it's a deliberate, disclosed bet on AWS/AI infrastructure — but it does mean I'm being asked to trust that the payoff shows up later, and I don't think anyone outside Amazon really knows yet when that is. Jeff Bezos is still selling down his stake gradually too, which I note without reading too much into it."
  },

  {
    slug: "tesla",
    name: "Tesla, Inc.",
    ticker: "NASDAQ: TSLA",
    sector: "Electric Vehicles, Energy Storage & Robotics",
    industry: "Consumer Discretionary",
    subIndustry: "Electric Vehicles & Energy Storage",
    tags: ["Magnificent Seven"],
    dateFeatured: "2026-08-26",
    price: "$347.70",
    score: "6 / 13",
    martinero: 45,                    // Martinero Index (weighted 1-100 score, see About)
    momentum: { status: "decelerating", recent: -3.0, prior: 0.9 },  // revenue growth, most recent FY vs prior FY (non-scored)
    blurb: "Revenue has genuinely compounded at over 15% a year for four years, and Tesla still commands roughly half the US EV market. But nearly everything downstream of the top line has weakened: operating margin has fallen every year since its FY2022 peak, EBIT has shrunk on net, ROIC now sits well below Tesla's cost of capital, and the stock trades at close to double its own 5-year average P/E. Clears growth, market share, net debt/EBITDA, FCF conversion, founder ownership and capex intensity; misses EBIT growth, margin, FCF growth, market concentration, ROIC/WACC, valuation-vs-history and share count trend.",
    file: "companies/tesla.html",
    personalNote: "Tesla is the one on this list where I have to separate the story I want to believe from what the numbers actually say right now. Revenue growth is real, and the US EV dominance is real — roughly half the market, more some months. But margins have fallen every year since 2022, ROIC is now below Tesla's own cost of capital, and the stock is priced at close to double its own five-year average multiple. That combination — declining profitability plus a rich valuation — is exactly the setup I try to be careful about. Q2 2026's operating margin dropping to 1.4% while AI/robotaxi/Optimus spending ramps is the clearest sign yet that this is a real bet on a future business, not a business that's already there. I'm not writing Tesla off — Musk still owns a large, aligned stake, and the balance sheet is clean — but I'd want to see margins stabilize before this becomes more than a watch."
  },

  {
    slug: "catl",
    name: "Contemporary Amperex Technology Co., Limited (CATL)",
    ticker: "SZSE: 300750 · HKEX: 3750",
    sector: "EV Battery & Energy Storage Manufacturing",
    industry: "Industrials",
    subIndustry: "Batteries & Energy Storage",
    tags: ["Near-Monopoly", "Geopolitically Critical"],
    dateFeatured: "2026-08-27",
    price: "CNY 376.73",
    score: "10 / 13",
    martinero: 85,                    // Martinero Index (weighted 1-100 score, see About)
    momentum: { status: "accelerating", recent: 17.0, prior: -9.7 },  // revenue growth, most recent FY vs prior FY (non-scored)
    blurb: "The world's dominant EV battery and energy-storage maker — #1 for nine straight years, holding roughly 40% of the global market, more than double the #2 player (BYD). Revenue and profit have both compounded above 30% annually since 2021 despite a rare 2024 revenue dip, the balance sheet is comfortably net cash, and the current P/E sits modestly below its own FY21-25 average. One of the strongest scorecards on this site — the main structural miss is heavy capex intensity from gigafactory buildout, plus two data-availability N/As (FCF CAGR, FCF conversion) and real geopolitical exposure as a China-domiciled, strategically sensitive supply-chain company.",
    file: "companies/catl.html",
    personalNote: "I recently advised CATL to my girlfriend — we were probably a bit late to the show, buying well after the 2023 low, but I still believe in this company for the long run. Roughly 40% of the world's EV and grid-storage battery market, more than double its nearest rival, with revenue and profit both compounding above 30% a year since 2021 and a comfortably net-cash balance sheet. The honest complications: real export-control and sanctions-list risk as a China-domiciled company, and genuinely heavy capex from gigafactory buildout — this isn't an asset-light compounder. One worry I had going in was CATL getting squeezed by the brutal price war among Chinese EV makers, but its own margins have kept expanding right through that, which says a lot about its pricing power. Free cash flow wasn't reliably verifiable from public sources either, so two criteria are marked N/A rather than guessed at. Fundamentals look solid; the geopolitical and capex risks are the parts I still can't fully price."
  },

  {
    slug: "gsk",
    name: "GSK plc",
    ticker: "LON: GSK",
    sector: "Healthcare",
    industry: "Healthcare",
    subIndustry: "Pharmaceuticals & Vaccines",
    tags: ["GRANOLAS"],
    dateFeatured: "2026-08-28",
    price: "£18.49",
    score: "6 / 13",
    martinero: 57,                    // Martinero Index (weighted 1-100 score, see About)
    momentum: { status: "steady", recent: 4.1, prior: 3.6 },  // revenue growth, most recent FY vs prior FY (non-scored)
    blurb: "A well-run diversified pharma with genuine category leadership in HIV (via majority-owned ViiV Healthcare) and shingles vaccines (Shingrix), a 28.5% ROIC well clear of its cost of capital, and moderate leverage. Growth is the main weak spot — revenue, EBIT and free cash flow have all grown below this framework's bar since FY2021 — and FY2022's net income is skewed by a one-off gain on the Haleon Consumer Healthcare demerger, clearly flagged throughout this dashboard. No founder or anchor shareholder; ownership is broadly institutional, typical of a FTSE 100 major. Current valuation sits almost exactly at its own FY21-25 average.",
    file: "companies/gsk.html",
    personalNote: "GSK is the first of the GRANOLAS I'm adding — Europe's answer to the Magnificent Seven, a set of large, steady, quality-compounder stocks. It's a good example of why I like this framework: the headline FY2022 net income of £15B looks amazing until you realize it's almost entirely a one-off accounting gain from spinning off Haleon, not real operating profit. Strip that out and what's left is a solid, unglamorous pharma business — genuine leadership in HIV treatment and the Shingrix shingles vaccine, strong returns on capital, manageable debt — but growth in the high single digits, not the double digits I usually look for. There's no founder or big insider holder here either, which is normal for a company this size but still something I note. Not a name I'd expect to double quickly, but a reasonable, fairly-priced compounder to own for the dividend and the steady cash generation."
  },

  {
    slug: "roche",
    name: "Roche Holding AG",
    ticker: "OTC: RHHBY (ADR) · SIX: ROG",
    sector: "Healthcare",
    industry: "Healthcare",
    subIndustry: "Pharmaceuticals & Diagnostics",
    tags: ["GRANOLAS", "Founder-Controlled"],
    dateFeatured: "2026-08-28",
    price: "$56.39",
    score: "7 / 13",
    martinero: 53,                    // Martinero Index (weighted 1-100 score, see About)
    momentum: { status: "steady", recent: 1.6, prior: 3.3 },  // revenue growth, most recent FY vs prior FY (non-scored)
    blurb: "Exceptional profitability (33% operating margin, 30.8% ROIC) and low leverage from the global #1 in in-vitro diagnostics and a top-3 oncology pharma franchise. Genuinely rare governance: 130 years after founding, the Hoffmann-Oeri family pool still controls ~45% of voting shares. The main weakness is growth — revenue, EBIT and FCF have all been roughly flat since FY2021 as the pandemic-era Diagnostics boom faded and older oncology blockbusters faced biosimilar competition — and the current P/E sits about 14% above its own FY21-25 average.",
    file: "companies/roche.html",
    personalNote: "Roche is the GRANOLAS name I find most interesting from a governance angle — a 130-year-old Swiss pharma giant where the founding Hoffmann-Oeri family still controls roughly 45% of the voting shares through a formal shareholder pool. That's genuinely rare at this scale, and it shows up in the numbers: a 33% operating margin and 30.8% ROIC are about as good as it gets anywhere on this site. The catch is growth — revenue has barely moved in four years as the COVID-testing boom in Diagnostics faded and older oncology blockbusters lost ground to biosimilars. The current price is also running a bit ahead of Roche's own recent valuation history, so I wouldn't call this a screaming bargain today. Still, a business this profitable and this durably family-aligned earns a place on my watchlist even without exciting growth."
  },

  {
    slug: "nestle",
    name: "Nestlé S.A.",
    ticker: "OTC: NSRGY (ADR) · SIX: NESN",
    sector: "Consumer Staples",
    industry: "Consumer Staples",
    subIndustry: "Packaged Foods & Beverages",
    tags: ["GRANOLAS"],
    dateFeatured: "2026-08-28",
    price: "$97.19",
    score: "4 / 13",
    martinero: 41,                    // Martinero Index (weighted 1-100 score, see About)
    momentum: { status: "steady", recent: -2.0, prior: -1.8 },  // revenue growth, most recent FY vs prior FY (non-scored)
    blurb: "The world's largest food & beverage company by revenue, but the weakest scorecard in the GRANOLAS batch so far — genuine, structural struggles rather than a one-off distortion. Revenue has declined for four straight years, operating margin has never once reached this framework's 20% bar across the last five years, and net debt/EBITDA at 3.10x is the highest leverage seen in this batch. Free cash flow is a real bright spot (+6.08% CAGR), the share count has declined meaningfully, and H1 2026 organic growth accelerated to 3.6% — an early but genuine sign of a turnaround. Ownership is fully dispersed with no founder or controlling family.",
    file: "companies/nestle.html",
    personalNote: "Nestlé is the honest miss in this batch — I went in expecting another steady, boring GRANOLAS compounder and came out with the weakest scorecard I've built so far. Revenue has actually shrunk for four straight years, and operating margin has sat stubbornly in the 15-17% range without ever clearing my 20% bar, which is a real structural gap, not a one-year blip like GSK's or Roche's distortions. What keeps me from writing it off entirely is the cash generation — free cash flow is up meaningfully since 2022, the share count keeps shrinking, and the first half of 2026 showed the clearest sign yet that the volume-led turnaround under the new CEO might actually be working. Leverage is the highest I've seen in this batch too, which is worth watching. This isn't a stock I'd rush into at nearly 18% above its own five-year average valuation while it's still proving the turnaround is real — but it's one I'll keep watching for the moment the numbers start confirming the story."
  },

  {
    slug: "novartis",
    name: "Novartis AG",
    ticker: "NYSE: NVS · SIX: NOVN",
    sector: "Healthcare",
    industry: "Healthcare",
    subIndustry: "Pharmaceuticals",
    tags: ["GRANOLAS"],
    dateFeatured: "2026-08-28",
    price: "$157.54",
    score: "7 / 13",
    martinero: 65,                    // Martinero Index (weighted 1-100 score, see About)
    momentum: { status: "steady", recent: 9.7, prior: 10.7 },  // revenue growth, most recent FY vs prior FY (non-scored)
    blurb: "By far the strongest scorecard in the GRANOLAS batch: since completing the Sandoz generics spin-off in 2023, operating margin has expanded to 33.5%, ROIC sits near 25% against a modest cost of capital, leverage is low, and the share count has declined ~27% since FY2021. Two large one-off gains (the 2021 Roche-stake sale and the 2023 Sandoz spin-off) inflate net income in those years and are flagged throughout; the current P/E also sits meaningfully above its own recent average. The real near-term risk is Entresto's patent cliff (sales down ~50% YoY in Q2 2026), which newer growth drivers (Kisqali, Cosentyx, Pluvicto) are so far offsetting.",
    file: "companies/novartis.html",
    personalNote: "Novartis is the pleasant surprise of this GRANOLAS batch — I expected another steady-but-unspectacular European pharma like GSK, and instead found the strongest scorecard I've built in weeks. The Sandoz spin-off in 2023 really did clean the business up: margins have jumped from the low 20s to the mid-30s, ROIC is nearly 25%, and they've bought back more than a quarter of the share count since 2021. The two big one-off gains — selling the old Roche stake back in 2021, then the Sandoz separation gain in 2023 — took some real digging to untangle and flag properly, since they distort both net income and the P/E chart if you're not careful. What keeps this from being an obvious buy for me is timing: Entresto, still one of their biggest products, just lost patent protection and sales are down about half year-over-year, and the stock has already re-rated a lot on the story I like, trading noticeably above its own recent average multiple. I want to see a couple more quarters of the growth drivers actually absorbing that Entresto hole before I'd feel good paying today's price for it."
  },

  {
    slug: "loreal",
    name: "L'Oréal S.A.",
    ticker: "EPA: OR · OTC: LRLCY (ADR)",
    sector: "Consumer Staples",
    industry: "Consumer Staples",
    subIndustry: "Beauty & Personal Care",
    tags: ["GRANOLAS", "Founder-Controlled"],
    dateFeatured: "2026-08-28",
    price: "€386.60",
    score: "8 / 13",
    martinero: 63,                    // Martinero Index (weighted 1-100 score, see About)
    momentum: { status: "decelerating", recent: 1.4, prior: 5.6 },  // revenue growth, most recent FY vs prior FY (non-scored)
    blurb: "The world's largest beauty company by revenue, and the highest binary criteria count (8/13) in the GRANOLAS batch — anchored by genuine founder-descendant control (the Bettencourt Meyers family holds ~34.8%, the strongest founder alignment on this site among the GRANOLAS names). Financials are unusually clean for this batch, with no one-off gains or charges to flag: very low leverage (0.19x net debt/EBITDA), FCF conversion clearing 80%, and — unusually — a current P/E (32.8x) sitting below its own 5-year average. Growth is steady but never approaches this framework's 15% bar, and ROIC (13.3%) falls just short of the 15% threshold despite clearing an estimated cost of capital comfortably.",
    file: "companies/loreal.html",
    personalNote: "L'Oréal turned out to be the cleanest read of this whole GRANOLAS batch — no accounting gains to untangle, no writedowns to explain away, just five years of steady, if unspectacular, growth. What stands out to me is the ownership: the Bettencourt Meyers family still controls about 35% of the company, which is real, durable founder alignment at a scale most consumer companies this size simply don't have anymore. There's also a neat thread connecting back to Nestlé's dashboard in this same batch — Nestlé still owns roughly 20% of L'Oréal, a relationship going back to 1974, and the one-off gain I flagged on Nestlé's 2021 numbers was literally Nestlé selling part of this exact stake back to L'Oréal. The one thing holding this back from a higher score is that growth has just never cleared my usual bar, and ROIC sits just under 15% despite otherwise excellent capital discipline. Still, for a founder-anchored compounder trading slightly below its own five-year average multiple, this is one of the more straightforward, high-quality names I've looked at in a while."
  },

  {
    slug: "lvmh",
    name: "LVMH Moët Hennessy - Louis Vuitton",
    ticker: "EPA: MC · OTC: LVMUY (ADR)",
    sector: "Consumer Discretionary",
    industry: "Consumer Discretionary",
    subIndustry: "Luxury Goods & Fashion",
    tags: ["GRANOLAS", "Founder-Controlled"],
    dateFeatured: "2026-08-28",
    price: "$105.10",
    score: "8 / 13",
    martinero: 58,                    // Martinero Index (weighted 1-100 score, see About)
    momentum: { status: "decelerating", recent: -4.6, prior: -1.7 },  // revenue growth, most recent FY vs prior FY (non-scored)
    blurb: "The unambiguous global #1 in luxury goods, matching L'Oréal's 8/13 binary criteria count but scoring lower on the weighted index because the misses run deeper: revenue has declined for two straight years from a FY2023 peak and free cash flow is down outright since FY2021 — a real, well-documented luxury demand slowdown, not a distortion. Leverage is moderate (1.13x net debt/EBITDA), FCF conversion clears 80%, and the current P/E (20.87x) sits about 22% below its own five-year average, the deepest discount in this batch. The Arnault family crossed 50% ownership of LVMH's capital in February 2026 (65.9% of voting rights) — the strongest, most direct founder control of any GRANOLAS name.",
    file: "companies/lvmh.html",
    personalNote: "LVMH is the batch's clearest lesson in separating a real cyclical slowdown from an accounting distortion — there's no one-off gain to flag here, just two straight years of declining revenue and margin compression as the global luxury boom of 2021-2023 normalized lower. What keeps me interested is what didn't change: this is still the undisputed #1 in luxury by a wide margin, leverage is comfortable, and the stock is trading about 22% below its own five-year average multiple, the biggest discount I've found in this whole batch. The ownership story is also unlike anything else here — Bernard Arnault and family crossed 50% of the company's capital and hold nearly 66% of the voting rights, which is about as direct as founder control gets at this scale. H1 2026 gave the first real hint of stabilization, with organic growth turning positive and accelerating through the second quarter even as currency effects kept the reported numbers negative. I'd want to see that organic recovery hold for another quarter or two, especially in the Fashion & Leather Goods division, before treating this as a confirmed turn rather than a cheaper entry into an ongoing downcycle."
  },

  {
    slug: "astrazeneca",
    name: "AstraZeneca PLC",
    ticker: "NYSE: AZN · LSE: AZN (primary)",
    sector: "Healthcare",
    industry: "Healthcare",
    subIndustry: "Pharmaceuticals",
    tags: ["GRANOLAS"],
    dateFeatured: "2026-08-28",
    price: "$164.52",
    score: "9 / 13",
    martinero: 73,                    // Martinero Index (weighted 1-100 score, see About)
    momentum: { status: "decelerating", recent: 8.5, prior: 18.1 },  // revenue growth, most recent FY vs prior FY (non-scored)
    blurb: "The strongest scorecard in the GRANOLAS batch, but only after untangling a real distortion: the 2021 Alexion acquisition loaded that year's income statement with one-off charges that crushed operating margin to 7.74% and net income to near-zero, making both the FY2021 P/E (1625x) and naive CAGRs statistically meaningless. Adjusting for this, operating income has compounded at roughly 17.5% annually since 2022, operating margin has expanded to 24.3%, ROIC (17.0%) comfortably clears an estimated cost of capital, leverage is moderate (1.24x net debt/EBITDA), and the stock trades at a 37% discount to its own recent average multiple — the largest valuation gap found anywhere in this batch. Oncology, now 44% of revenue, ranks a strong #2 globally. No founder or controlling shareholder; insiders hold well under 1%.",
    file: "companies/astrazeneca.html",
    personalNote: "AstraZeneca turned into the most rewarding puzzle of this whole GRANOLAS batch. My first pass at the numbers looked almost broken — a P/E of 1625x in 2021 and net income of basically zero that same year — until I traced it back to the Alexion acquisition and realized the entire income statement that year was loaded with one-off deal charges, not a real operating problem. Once I rebuilt the growth rates from a cleaner 2022 base, this turned into the strongest scorecard I've built in this entire batch: margins expanding every year since, ROIC comfortably above cost of capital, leverage cut by more than two-thirds, and Oncology growing into a genuine #2 global franchise behind Merck. What really caught my attention is the valuation — at 24x earnings against a recent average north of 30x, this is trading at the widest discount to its own history I've found in any GRANOLAS name so far, which is unusual for a company executing this well. The honest caveats: there's no founder or controlling family here, growth still falls a bit short of my usual bars even after adjusting for the distortion, and the July 2026 Phase III miss on Wainua is a reminder that pipeline risk never fully goes away in this industry. Still, this is the batch's biggest positive surprise for me."
  },

  {
    slug: "sap",
    name: "SAP SE",
    ticker: "FWB (Xetra): SAP · NYSE: SAP (ADS)",
    sector: "Technology",
    industry: "Technology",
    subIndustry: "Enterprise Software",
    tags: ["GRANOLAS", "Founder-Influenced"],
    dateFeatured: "2026-08-28",
    price: "$221.17",
    score: "9 / 13",
    martinero: 73,                    // Martinero Index (weighted 1-100 score, see About)
    momentum: { status: "decelerating", recent: 7.6, prior: 9.6 },  // revenue growth, most recent FY vs prior FY (non-scored)
    blurb: "Ties AstraZeneca for the strongest scorecard in the GRANOLAS batch. Operating margin has expanded every year to a record 28.31% in FY2025, the balance sheet sits in a genuine net cash position — the strongest in this batch — and ROIC (16.82%) comfortably clears an estimated cost of capital. The one real distortion: a disclosed €3.14bn FY2024 restructuring charge (SAP's Business AI transformation program) crushed that year's net income and pushed its P/E to an absurd 88x, excluded here from the entry-multiple average. On the resulting adjusted average, the current 28.67x multiple sits about 17% below its own recent history. Growth is genuinely strong (cloud revenue +23-24%) but still falls short of this framework's 15% bar. Co-founder Hasso Plattner remains SAP's largest individual shareholder at ~6.1%, and active as Supervisory Board Chairman Emeritus.",
    file: "companies/sap.html",
    personalNote: "SAP quietly turned into one of the best all-around scorecards I've built in this entire GRANOLAS batch, and I didn't expect that going in — I had it filed mentally as 'steady enterprise software, nothing dramatic.' Instead I found a company with a genuine net cash balance sheet, margins expanding every single year to a record 28%, and ROIC comfortably above what I'd estimate its cost of capital to be. The one thing that needed real digging was 2024: net income collapsed and the P/E briefly hit 88x, which looked alarming until I traced it to a disclosed €3.1 billion restructuring charge tied to their AI transformation push — a real cost, but a one-time one, sitting below the line where operating income actually grew. Once I excluded that year from the valuation average, the stock is trading at a real discount to its own recent history, which is not something I expected to find in a name that's up double digits annually over five years. I also liked finding that Hasso Plattner, one of the original 1972 founders, still holds a real stake and an active board role — it's a much smaller percentage than LVMH's or L'Oréal's founder families, but it's genuine, ongoing skin in the game from someone who built the company. My main hesitation is that growth, while clearly strong and cloud-led, still hasn't crossed my usual 15% bar on any of the three growth measures — this is a high-quality compounder, not a hypergrowth story."
  },

  {
    slug: "sanofi",
    name: "Sanofi",
    ticker: "EPA: SAN · NASDAQ: SNY (ADS)",
    sector: "Healthcare",
    industry: "Healthcare",
    subIndustry: "Pharmaceuticals",
    tags: ["GRANOLAS"],
    dateFeatured: "2026-08-28",
    price: "$44.84",
    score: "6 / 13",
    martinero: 47,                    // Martinero Index (weighted 1-100 score, see About)
    momentum: { status: "decelerating", recent: 5.4, prior: 7.8 },  // revenue growth, most recent FY vs prior FY (non-scored)
    blurb: "The honest weak point of this GRANOLAS batch's pharma names — a real, structural gap rather than a one-off distortion. ROIC has sat in the 8-10% range every year since FY2021, never approaching this framework's 15% bar, and revenue/EBIT/FCF growth have all been modest-to-flat over five years. Two genuine one-off items are worth flagging: FY2022's elevated margins reflect Regeneron-related equity stake gains, and FY2025's net income includes a €2.61bn gain from divesting Opella (consumer healthcare) to CD&R. What's working: Dupixent just crossed €5B in quarterly sales for the first time (+37.6%), leverage is moderate, and the share count is down a real 18% over five years. Current valuation (23.85x) sits about 30% above its own recent average — the richest gap in this batch.",
    file: "companies/sanofi.html",
    personalNote: "Sanofi is the batch's reality check — after AstraZeneca and SAP both turned into pleasant surprises, this one reminded me that not every GRANOLAS name is a hidden gem. The honest story here is a return-on-capital problem: ROIC has been stuck in the high single digits for five straight years, never getting close to my usual bar, and it's not explained away by any one-off charge — it's just a genuinely lower-return business than the other pharma names in this batch. I did find two real distortions worth flagging: 2022's margins were flattered by Regeneron stake-sale gains, and 2025's net income got a real boost from selling the Opella consumer health business, which is worth remembering if the headline numbers look better than they are. What keeps me from writing this off completely is Dupixent — crossing €5 billion in quarterly sales for the first time is a genuinely big deal, and the buyback funded by the Opella proceeds has meaningfully shrunk the share count. But at nearly 30% above its own recent average multiple for a business growing this slowly, I don't see the value case here right now — this is one I'd want to see re-rate lower, or the returns genuinely improve, before getting interested."
  },

  {
    slug: "crwd",
    name: "CrowdStrike Holdings",
    ticker: "NASDAQ: CRWD",
    sector: "Technology",
    industry: "Technology",
    subIndustry: "Cybersecurity",
    tags: ["AI/SaaS"],
    dateFeatured: "2026-08-28",
    price: "$227.96",
    score: "4 / 13",
    martinero: 49,                    // Martinero Index (weighted 1-100 score, see About)
    momentum: { status: "decelerating", recent: 21.8, prior: 29.1 },  // revenue growth, most recent FY vs prior FY (non-scored)
    blurb: "The fastest, most consistent revenue growth found anywhere on this site — +34.9% CAGR over FY2022-26, never below +21% in any single year — funded almost entirely by strong free cash flow (+29.7% CAGR, 27-32% FCF margin every year) rather than GAAP profit. GAAP operating income has never been positive in five fiscal years due to heavy stock-based compensation, which drags this framework's score down hard: no valid EBIT CAGR to compute, no ROIC reading, and a P/FCF of 145x that's roughly double its own 5-year average after the Aug 27, 2026 earnings-beat pop (+20.5% in one day on record net-new ARR). The 49/100 undersells the underlying business quality — read it alongside the FCF story, not instead of it. Balance sheet carries no net debt and $4.41B in net cash.",
    file: "companies/crwd.html",
    personalNote: "CrowdStrike is the first name where this framework's limits really showed up. By GAAP the picture looks rough — never once profitable at the operating-income line in five years — but free cash flow tells a completely different story: 27-32% margins every single year, growing almost 30% annually, funding a debt-free balance sheet with $4.4 billion in net cash. That gap is just what a hyper-growth SaaS business with heavy stock-based comp looks like, and I don't think the low binary score here should be read as 'weak company' — it's 'wrong yardstick for this particular shape of business.' What actually gives me pause is entirely about price and timing: the stock popped 20% in a single day right before I built this, on a genuinely excellent quarter, which means today's multiple (145x P/FCF, about double its own history) reflects a lot of very recent enthusiasm. I'd want to see this settle before getting interested at these levels, not because the business is bad, but because I'd rather not pay for a one-day pop."
  },

  {
    slug: "panw",
    name: "Palo Alto Networks",
    ticker: "NASDAQ: PANW",
    sector: "Technology",
    industry: "Technology",
    subIndustry: "Cybersecurity",
    tags: ["AI/SaaS"],
    dateFeatured: "2026-08-29",
    price: "$371.59",
    score: "8 / 13",
    martinero: 74,                    // Martinero Index (weighted 1-100 score, see About)
    momentum: { status: "steady", recent: 14.8, prior: 16.5 },  // revenue growth, most recent FY vs prior FY (non-scored)
    blurb: "The strongest scorecard in this site's AI/SaaS batch so far — 8/13, real and growing GAAP operating margins since FY2023, a comfortable net-cash balance sheet even after its largest deal ever, and a clear #1-or-#2 platform position that just added identity security via the $25B CyberArk acquisition (closed Feb 11, 2026). Revenue just accelerated to +31% YoY with Next-Gen Security ARR up 60% YoY. The catch is entirely about timing and price: the stock has roughly tripled since April 2026, pushing P/FCF to 79.8x against a 30.4x five-year average — the richest premium-to-history found anywhere in this project — while CyberArk integration costs pushed the most recent quarter to a rare GAAP operating loss. Share count is up 35% over five years, mostly from the CyberArk stock issuance.",
    file: "companies/panw.html",
    personalNote: "Palo Alto Networks is the flip side of CrowdStrike in this batch — a real, mature GAAP earner rather than a pure cash-flow story, and it shows in the score: 8/13 versus CRWD's 4/13. What holds it back isn't business quality, it's price and dilution. The stock has essentially tripled since April on a mix of genuine AI-security demand and a broad cybersecurity re-rating, and CyberArk added 112 million new shares on top of ordinary stock comp. I like the direction of this business a lot — CEO Nikesh Arora has actually been buying shares in the open market rather than selling, which is the opposite signal from what I usually see — but I'd rather wait for the CyberArk integration dust to settle and the multiple to cool off than chase it at 2.6x its own historical valuation."
  },

  {
    slug: "zs",
    name: "Zscaler",
    ticker: "NASDAQ: ZS",
    sector: "Technology",
    industry: "Technology",
    subIndustry: "Cybersecurity",
    tags: ["AI/SaaS"],
    dateFeatured: "2026-08-29",
    price: "$184.23",
    score: "7 / 13",
    martinero: 66,                    // Martinero Index (weighted 1-100 score, see About)
    momentum: { status: "decelerating", recent: 23.0, prior: 34.0 },  // revenue growth, most recent FY vs prior FY (non-scored)
    blurb: "Sits between CrowdStrike and Palo Alto Networks in this AI/SaaS batch — never GAAP operating-profitable, but the loss has narrowed every single year for five straight years (-30.7% to -4.6% operating margin), while free cash flow has compounded at +51.4% CAGR and margins held 22-30%. Two things set this dashboard apart: founder & CEO Jay Chaudhry's family trusts control roughly 35% of shares outstanding, the strongest insider alignment anywhere in this batch, and the stock is down -32.5% over the past year even as revenue kept growing above 20% — pushing the current 31.0x P/FCF to well under half its own five-year average of 91.8x. Market share is real (Gartner SASE/SSE Leader) but the competitive field is genuinely tightening, and share count is up 17% over five years from stock-based comp.",
    file: "companies/zs.html",
    personalNote: "Zscaler is the one in this batch where the price and the business seem to be telling different stories. The fundamentals are steadily converging on GAAP profitability — five years running of narrowing losses is not a fluke — and free cash flow has been compounding faster than revenue. Meanwhile the stock is down almost a third over the past year. Some of that is a genuine growth deceleration (management itself guided FY2027 ARR growth down to 16-17%), so I don't think it's simply 'the market is wrong.' But a 35% founder stake and a P/FCF multiple sitting at a third of its own five-year average is a combination I don't see very often, and it's enough to put this one on my watchlist for a closer look rather than filing it away next to CrowdStrike."
  },

  {
    slug: "ddog",
    name: "Datadog",
    ticker: "NASDAQ: DDOG",
    sector: "Technology",
    industry: "Technology",
    subIndustry: "Observability & Monitoring",
    tags: ["AI/SaaS"],
    dateFeatured: "2026-08-29",
    price: "$236.98",
    score: "7 / 13",
    martinero: 64,                    // Martinero Index (weighted 1-100 score, see About)
    momentum: { status: "accelerating", recent: 28.0, prior: 25.8 },  // revenue growth, most recent FY vs prior FY (non-scored)
    blurb: "The strongest market-position claim in this AI/SaaS batch — a Gartner Magic Quadrant Leader for Observability Platforms for six consecutive years, positioned highest in Ability to Execute in 2026 — paired with the messiest GAAP profitability path: operating income has flipped sign three times in five years, never building the clean trend seen at Palo Alto Networks or Zscaler. Free cash flow is the cleaner story, compounding at +37.9% CAGR with 22-35% margins every year. The stock is up +79.9% over the past year but fell -17% in a single day in August 2026 after management flagged a usage reduction from its largest customer, despite an otherwise beat-and-raise quarter. Insider ownership is thin at 5.48%, and share count is up 21% over five years.",
    file: "companies/ddog.html",
    personalNote: "Datadog is an interesting case because the market-position story is genuinely the best in this batch — six years running as the Gartner-recognized Observability leader is not a small thing — but the profit-and-loss statement refuses to settle into a trend. It's not deteriorating, it's just bouncing around zero year after year, which makes we wonder whether that's really a temporary phase or closer to where this business structurally sits given how competitive and price-sensitive observability tooling has become. The August drop on a single large customer trimming usage is the kind of thing I'd want to watch resolve over a couple more quarters before getting more constructive — not because the business is broken, but because it's a reminder that even a 33,000-customer SaaS company can still have concentration risk hiding in the guidance language."
  },

  {
    slug: "snow",
    name: "Snowflake",
    ticker: "NYSE: SNOW",
    sector: "Technology",
    industry: "Technology",
    subIndustry: "Data Cloud & Analytics",
    tags: ["AI/SaaS"],
    dateFeatured: "2026-08-29",
    price: "$328.00",
    score: "6 / 13",
    martinero: 64,                    // Martinero Index (weighted 1-100 score, see About)
    momentum: { status: "steady", recent: 28.9, prior: 29.2 },  // revenue growth, most recent FY vs prior FY (non-scored)
    blurb: "The lowest binary score in this site's AI/SaaS batch — 6/13 — driven by the widest GAAP gap of the group: revenue and free cash flow have both compounded at 40%+ annually, but operating margin remains deeply negative (-28.32% in FY2026, the worst in this batch, though improving from -58.64% in FY2022). The competitive picture has genuinely shifted too — private rival Databricks has overtaken Snowflake in ARR and is growing faster (65% vs. 29%), a real reversal from 2023. Insider ownership is the thinnest here at 2.64%, reflecting a diffuse ownership structure after multiple CEO transitions. Current valuation (97.2x P/FCF) sits within its recent multi-year trading range rather than at either extreme.",
    file: "companies/snow.html",
    personalNote: "Snowflake is the toughest read in this batch for me. The growth numbers are genuinely excellent — 40% revenue CAGR, 86% FCF CAGR — but the GAAP losses aren't shrinking in dollar terms even as the margin percentage improves, and Databricks overtaking it in ARR is the kind of competitive shift I don't want to wave away as noise. I don't think this is a broken business by any means, but between the deepest losses in this batch, the thinnest insider ownership, and a well-funded private competitor now growing faster, this is one I'd want to see the FY2027 numbers on before getting more constructive. The valuation isn't demanding me to rush in either way — it's sitting in the middle of its own recent range, not screaming cheap or expensive."
  },

  {
    slug: "aramco",
    name: "Saudi Aramco (Saudi Arabian Oil Company)",
    ticker: "Tadawul: 2222",
    sector: "Energy",
    industry: "Energy",
    subIndustry: "Integrated Oil & Gas",
    tags: ["State-Owned", "Geopolitically Critical"],
    dateFeatured: "2026-08-28",
    price: "SAR 26.10",
    score: "7 / 13",
    martinero: 53,                    // Martinero Index (weighted 1-100 score, see About)
    momentum: { status: "decelerating", recent: -7.2, prior: -2.9 },  // revenue growth, most recent FY vs prior FY (non-scored)
    blurb: "The world's largest crude oil producer and one of its most profitable companies by any measure — a 44% operating margin, a 20.8% ROIC against an estimated 8.3% cost of capital, and net debt/EBITDA of just 0.09x. Ownership is concentrated in the Saudi state (government + PIF, ~90% combined) rather than a founder. The scorecard's main miss is growth: revenue, operating income and free cash flow have all been roughly flat-to-declining since FY2021, and FY2026's strong headline results are meaningfully inflated by a real but unusual Strait of Hormuz supply disruption tied to the ongoing regional conflict — a geopolitical tailwind that could reverse just as quickly as it appeared.",
    file: "companies/aramco.html",
    personalNote: "Aramco is a strange one to hold up against the rest of this list — it's not a growth story, it's not founder-led, and its profits are currently juiced by a geopolitical event I'd rather not see continue. But strip all that away and what's left is genuinely the most profitable, least levered business on this entire site: a 44% operating margin, ROIC miles above its cost of capital, and almost no net debt. The dividend yield (over 5%) is real income, backed by a state that has every incentive to keep paying it. What keeps me cautious is growth — revenue and free cash flow have barely moved since 2021, and long-term I'd want to see how Aramco navigates the energy transition, since this isn't a business I'd want to hold for 20 years on autopilot. Right now feels like buying deep, reliable cash flow at a fair price, not buying compounding growth — worth remembering which of those two things I'm actually getting."
  },

  {
    slug: "app",
    name: "AppLovin",
    ticker: "NASDAQ: APP",
    sector: "Technology",
    industry: "Technology",
    subIndustry: "Mobile App-Install / AI Ad-Tech Platform",
    tags: ["AI/SaaS"],
    dateFeatured: "2026-08-29",
    price: "$317.76",
    score: "12 / 13",
    martinero: 89,                    // Martinero Index (weighted 1-100 score, see About)
    momentum: { status: "decelerating", recent: 70.2, prior: 75.0 },  // revenue growth, most recent FY vs prior FY (non-scored)
    blurb: "The highest scorecard on this entire site — 12/13 criteria met, Martinero Index 89 — but it comes with real context. AppLovin divested its legacy mobile-games/apps business (closed June 30, 2025) to become a pure AI ad-tech platform built around AXON, its ad-recommendation engine; what's left runs at 75.75% operating margin and 132.73% ROIC against 17.73% WACC, the widest capital-efficiency spread of any company covered here. Because the divestiture changed the business, only FY2023-25 are used as the comparable base for growth and valuation math. The stock has been rough despite the fundamentals: short-seller Muddy Waters alleged Terms-of-Service violations in March 2025 (-20% that day), and Q2 2026 earnings on Aug 5 — despite 53% revenue growth — sent shares down another 16-21% on concerns about the pace of AppLovin's newer e-commerce ad push. The stock is down 53% from its FY2025 close of $673.82. The lone scorecard miss is market concentration, in a genuinely crowded ad-tech field (Meta, Google, Unity, Digital Turbine, and others).",
    file: "companies/app.html",
    personalNote: "AppLovin is the highest score I've ever put on this site, and that number alone makes me want to slow down rather than get excited. This one genuinely could go both ways, and I think it's worth being honest about both sides rather than picking one. The bull case is real: a 53% drop from the FY2025 peak looks a lot more like sentiment and noise than a fundamentals problem — Q2 2026 EBITDA and net income both beat and grew 58% and 55% respectively, the stock fell mainly on the CEO's 'lumpy timing' comments rather than an actual miss, and today's valuation sits below AppLovin's own two-year average. If AXON's edge is real and durable, that's the kind of gap between price and business quality I'd normally want to lean into. But the bear case is just as real. The economics are extraordinary — software-platform margins on what used to be a lower-margin mobile ad business — but that's only true because AppLovin sold off half the company in mid-2025, so I'm judging a two-year-old version of this business against a 13-criteria framework built for companies with a much longer track record. The stock has round-tripped hard: up roughly 7x from its 2022 low to its 2025 peak, then down more than half from that peak into today. And the Muddy Waters allegations aren't resolved — if Foroughi's independent review finds real ToS violations with Meta, Google or TikTok, that's a risk to AXON's actual data pipeline, not just a PR headache. So: could be a fun, genuinely mispriced opportunity, could also be a value trap dressed up as one. I want to watch how the next couple of quarters land and how that independent review resolves before treating a 12/13 score as anything close to a sure thing."
  },

  {
    slug: "crm",
    name: "Salesforce",
    ticker: "NYSE: CRM",
    sector: "Technology",
    industry: "Technology",
    subIndustry: "CRM / Core Enterprise SaaS",
    tags: ["AI/SaaS"],
    dateFeatured: "2026-08-29",
    price: "$256.00",
    score: "9 / 13",
    martinero: 77,                    // Martinero Index (weighted 1-100 score, see About)
    momentum: { status: "steady", recent: 9.6, prior: 8.7 },  // revenue growth, most recent FY vs prior FY (non-scored)
    blurb: "The clearest 'core enterprise OS' name on this site — #1 in global CRM for 13 straight years, roughly 4x the market share of nearest rival Microsoft, and an AI story (Agentforce) that's now showing up as real revenue rather than roadmap talk: $1.5B annualized, up 240% YoY, with agentic workflow actions up 97% quarter-over-quarter. Margins have expanded cleanly and continuously from a 2022 trough of 2.07% to 21.47% today, and free cash flow has grown every single year. What holds the score back: overall revenue growth has structurally decelerated below this framework's 15% bar as the company has scaled past $40B, ROIC still hasn't cleared 15% despite real improvement, and a $25B debt-funded buyback in March 2026 flipped the balance sheet from net cash to a 2.40x leveraged position overnight — a deliberate capital-allocation call under investor pressure, not distress, but worth watching. Trades at 13.9x trailing free cash flow versus its own 27.7x five-year average, the cheapest relative entry point of any name covered here.",
    file: "companies/crm.html",
    personalNote: "Salesforce is the steady, unglamorous complement to the AI story on this site so far — no single quarter of dramatic AI-native growth, just a genuinely dominant, 27-year-old market leader that's finally converting Agentforce into real dollars while margins have marched upward for five straight years without a stumble. What I like: this is about as close to a durable moat as software gets, and the valuation is the cheapest relative to its own history of anything I've covered. What gives me pause: the $25B debt-funded buyback is a real trade-off, not free money, and I want to see net debt actually come back down rather than just admire the buyback math. Growth has also cooled to a level that's healthy for a $200B company but doesn't clear my own bar — that's normal maturation, not a red flag, but it means this is more of a 'compounds steadily while I wait' name than a high-conviction re-rating story."
  },

  {
    slug: "now",
    name: "ServiceNow",
    ticker: "NYSE: NOW",
    sector: "Technology",
    industry: "Technology",
    subIndustry: "IT Workflow / Core Enterprise SaaS",
    tags: ["AI/SaaS"],
    dateFeatured: "2026-08-29",
    price: "$144.71",
    score: "10 / 13",
    martinero: 81,                    // Martinero Index (weighted 1-100 score, see About)
    momentum: { status: "steady", recent: 20.9, prior: 22.4 },  // revenue growth, most recent FY vs prior FY (non-scored)
    blurb: "The strongest scorecard of any core-enterprise-SaaS name on this site — 10/13 criteria met, Martinero Index 81 — built on genuinely rare growth durability: five straight years of 20%+ revenue growth that's now accelerating (Q2 2026 was +24.0% YoY, the fastest in two years) despite already being past $13B in revenue. ServiceNow holds roughly 44% of the global ITSM market, more than 2.5x its nearest rival, and its AI product line crossed $1B in annual contract value this quarter with agentic AI deployments up 9x in nine months. The balance sheet stayed conservatively levered (net debt/EBITDA 0.60x) even after the $7.75B Armis Security acquisition. What holds it back: GAAP operating margin (15.06%) is still below this framework's 20% bar and just had a sharp one-quarter compression tied to acquisition costs and stock comp; ROIC hasn't cleared 15%; and insider ownership is the thinnest on the site (0.14%) since CEO Bill McDermott is a professional hire, not a founder. The stock is down 18.5% over the past year despite the growth acceleration — a real disconnect between fundamentals and price.",
    file: "companies/now.html",
    personalNote: "ServiceNow might be the single best 'boring compounder' case I've built on this site. There's nothing flashy about IT workflow software, but the numbers are genuinely unusual: 20%+ revenue growth sustained for five years and now speeding up, not slowing down, at a size where deceleration is normal. The AI angle here is also more concrete than most — $1B in AI-specific contract value isn't a projection, it's booked. What I keep coming back to is the valuation disconnect: the stock is down almost a fifth over the past year while the business has only gotten stronger, which is either the market rightly worried about something I'm not weighing enough (the margin compression this quarter, thin insider ownership, a McDermott-not-founder leadership structure) or a genuine mispricing from macro software-sector jitters that had nothing to do with ServiceNow specifically. I want to see next quarter's GAAP margin before I fully trust that the Q2 dip was a one-off. But on growth quality and balance-sheet discipline alone, this is one of the more convincing setups I've put together."
  },

  {
    slug: "baba",
    name: "Alibaba",
    ticker: "NYSE: BABA",
    sector: "Consumer Discretionary",
    industry: "Internet Retail",
    subIndustry: "China E-Commerce / Cloud Platform",
    tags: ["E-Commerce"],
    dateFeatured: "2026-08-30",
    price: "$118.90",
    score: "3 / 13",
    martinero: 31,                    // Martinero Index (weighted 1-100 score, see About)
    momentum: { status: "decelerating", recent: 2.8, prior: 5.8 },  // revenue growth, most recent FY vs prior FY (non-scored)
    blurb: "By far the weakest scorecard on this site — 3/13 criteria met, Martinero Index 31 — but driven almost entirely by two live, real events rather than a broken business. First, Alibaba committed roughly ¥50B ($7B) to a quick-commerce subsidy war against Meituan and JD.com, taking GAAP operating margin from 15.22% (FY2025) to 6.15% (FY2026) and 4.56% TTM. Second, capex more than tripled to fund AI/cloud infrastructure, pushing free cash flow negative (-$11.38B TTM) for the first time in years. Set against that: Alibaba remains net cash ($17.5B), has cut its share count over 13% since FY2022, and trades at a PEG ratio of just 0.44. Taobao+Tmall remain China's largest combined e-commerce group (~40-46% GMV share) but the market has become genuinely four-way contested, unlike a decade ago.",
    file: "companies/baba.html",
    personalNote: "Alibaba is the hardest scorecard I've had to sit with on this site, because the number (31) looks like a broken business and the reality is a lot messier than that. Two things are doing basically all the damage: a subsidy war Alibaba chose to fight, and an AI capex ramp every hyperscaler is running through right now. Neither is a sign the core business is failing — quarterly operating margin already bounced off its March 2026 low (1.01% to 7.29%) — but neither has fully resolved either, and I don't know yet whether management can dial the subsidy spend back without just handing share back to Meituan and JD. What keeps me interested despite the ugly number: net cash balance sheet, a shrinking share count even through this mess, and a PEG of 0.44 that says the market is pricing in less growth than analysts still expect. What keeps me cautious: real, multi-way competition in a market that used to be Alibaba's alone, plus the structural China-ADR considerations that don't apply to anything else in this batch. I'd want to see two more quarters of margin recovery before treating this as a value opportunity rather than a business genuinely losing ground."
  },

  {
    slug: "pdd",
    name: "PDD Holdings",
    ticker: "NASDAQ: PDD",
    sector: "Consumer Discretionary",
    industry: "Internet Retail",
    subIndustry: "China Discount E-Commerce / Global Cross-Border (Temu)",
    tags: ["E-Commerce"],
    dateFeatured: "2026-08-30",
    price: "$85.69",
    score: "11 / 13",
    martinero: 90,                    // Martinero Index (weighted 1-100 score, see About)
    momentum: { status: "decelerating", recent: 9.6, prior: 58.9 },  // revenue growth, most recent FY vs prior FY (non-scored)
    blurb: "One of the strongest scorecards on this entire site — 11/13 criteria met, Martinero Index 90 — yet the stock is down nearly 30% over the past year. Pinduoduo has overtaken JD.com by domestic GMV, operating margin sits at 21.56%, ROIC-WACC spread is a huge 10.7 points, and net cash of $66.5B is worth more than half the market cap. The drag is Temu: the US ended its de minimis tariff exemption (May 2025) and the EU added its own per-item duty (Jul 2026), pushing Temu's global MAU down from ~525M to ~467M and cooling overall revenue growth from 89.68% (FY2023) to 9.65% (FY2025). ROIC missed this framework's 15% bar by just 0.08pt. Trades at 7.4x P/FCF against a 13.3x five-year average.",
    file: "companies/pdd.html",
    personalNote: "PDD is the sharpest gap I've found yet between what the scorecard says and what the stock price says — 11 of 13 criteria met, a Martinero Index of 90, and the stock is still down almost 30% over the last year. The business itself is genuinely excellent: Pinduoduo has grown past JD.com domestically, the balance sheet carries more cash than half the market cap, and founder Colin Huang still holds nearly 32% of the company, the strongest founder alignment of any e-commerce name I've built. What's actually weighing on the stock is real, not sentiment-only — Temu lost its US tariff exemption, the EU just added its own duty on top, and Temu's user base has genuinely shrunk as the company retools its shipping model from direct-from-China to local warehousing. That's a real headwind to the growth story, not a made-up one. The ROIC miss is almost comically close — 14.92% against a 15% bar — which tells me this framework's binary cutoffs can occasionally punish a company for being a hair on the wrong side of an arbitrary line. Cheap for a real reason, or genuinely mispriced? I lean toward the latter, but I'd want to see Temu's MAU trend stabilize before calling this an obvious buy."
  },

  {
    slug: "se",
    name: "Sea Limited",
    ticker: "NYSE: SE",
    sector: "Consumer Discretionary",
    industry: "Internet Retail",
    subIndustry: "Southeast Asia E-Commerce, Digital Entertainment & Fintech",
    tags: ["E-Commerce"],
    dateFeatured: "2026-08-30",
    price: "$119.36",
    score: "7 / 13",
    martinero: 72,                    // Martinero Index (weighted 1-100 score, see About)
    momentum: { status: "accelerating", recent: 36.3, prior: 28.2 },  // revenue growth, most recent FY vs prior FY (non-scored)
    blurb: "A genuine multi-year turnaround — Shopee (#1 in Southeast Asia e-commerce, ~52-53% share), Garena and Monee are now all GAAP operating-profitable at once for the first time in Sea's history. Operating margin has climbed cleanly from -15.90% (FY2021) to 8.65% (FY2025), free cash flow has compounded to $4.51B, and revenue growth has actually re-accelerated to +43% TTM. What holds the score to 7/13: operating margin is still thin, TikTok Shop is closing the gap in a genuinely three-way contested market, share count keeps drifting up from stock-based comp, and the current valuation sits slightly above Sea's own recent trading history. EBIT and FCF CAGR are marked N/A since FY2021 was a loss year for both, making a standard growth-rate calculation undefined.",
    file: "companies/se.html",
    personalNote: "Sea Limited is the most literal turnaround story in this whole e-commerce batch. This isn't a company still promising future profitability — Shopee, Garena and Monee are all making money at the same time right now, after years of Sea deliberately burning cash to win share. The margin chart alone tells the story: a clean, uninterrupted five-year climb from -15.9% to +8.65%, no zigzagging. What keeps this at a 72 rather than higher is that the margin, while genuinely improving, is still thin by this framework's standards, and TikTok Shop is a real, fast-growing threat in Sea's home market rather than a hypothetical one. There's also a fun connection to the rest of this batch: Sea just launched a 'Turbo Delivery' service in Brazil aimed squarely at Amazon and MercadoLibre, both of which I've covered elsewhere on this site. I like this business more than the score alone suggests — a genuine, working turnaround with a founder who still controls the company through multi-class voting shares — but I'd want to see operating margin actually clear double digits before calling this cheap rather than fairly priced."
  },

  {
    slug: "cpng",
    name: "Coupang, Inc.",
    ticker: "NYSE: CPNG",
    sector: "Consumer Discretionary",
    industry: "Internet Retail",
    subIndustry: "South Korea E-Commerce & Fast Delivery Logistics",
    tags: ["E-Commerce"],
    dateFeatured: "2026-08-30",
    price: "$16.52",
    score: "6 / 13",
    martinero: 45,                    // Martinero Index (weighted 1-100 score, see About)
    momentum: { status: "decelerating", recent: 13.9, prior: 24.2 },  // revenue growth, most recent FY vs prior FY (non-scored)
    blurb: "Korea's clear #1 e-commerce platform (37.7% usage share vs Naver's 27.2%) built on a genuine Rocket Delivery logistics moat — but the financial picture right now is the weakest in this batch outside Alibaba. A $410M Korean privacy-regulator fine over a November 2025 data breach (37M+ customers) drove Coupang's largest-ever quarterly operating loss in Q2 2026, and revenue growth has decelerated to just 3.90% YoY, the slowest in its public history. ROIC is deeply negative, net cash has shrunk to a thin $477M buffer, and free cash flow has collapsed toward breakeven. Clears market share, net cash, share count trend, insider ownership and capex intensity; misses margin, market concentration, ROIC/WACC, FCF conversion and entry multiple. EBIT and FCF CAGR are marked N/A since FY2021 was a loss year for both.",
    file: "companies/cpng.html",
    personalNote: "Coupang is the batch's clearest lesson in separating market position from financial health right now — those are two very different questions here. The market position is genuinely excellent: Coupang built a real logistics moat with Rocket Delivery and it shows in the usage numbers, clearly ahead of Naver. But the financials are rough. A $410 million fine over a data breach that exposed 37 million customers' data drove the company's worst quarter since its 2021 listing — and that's disclosed and one-off, easy enough to look past. What actually gives me pause is that Q1 2026 was already posting a loss before the fine hit, and revenue growth has slowed to the weakest pace in Coupang's history as a public company. Founder Bom Kim controls about 76% of the vote through 29-to-1 super-voting shares despite owning only about 9% of the economics, which is worth knowing given the breach happened on his watch. I'd want to see at least two clean quarters, with the fine fully behind them, before treating the current cheap-looking price as an opportunity rather than a warning."
  },

  {
    slug: "jd",
    name: "JD.com, Inc.",
    ticker: "NASDAQ: JD",
    sector: "Consumer Discretionary",
    industry: "Internet Retail",
    subIndustry: "China E-Commerce, Logistics & Retail (1P Model)",
    tags: ["E-Commerce"],
    dateFeatured: "2026-08-30",
    price: "$28.74",
    score: "6 / 13",
    martinero: 44,                    // Martinero Index (weighted 1-100 score, see About)
    momentum: { status: "accelerating", recent: 12.9, prior: 6.8 },  // revenue growth, most recent FY vs prior FY (non-scored)
    blurb: "China's largest retailer by revenue, running a first-party logistics model that leaves it with thin margins but a genuinely enormous net cash position ($22.78B, more than half the market cap). The weak score here is largely self-inflicted: JD launched an aggressive push into food delivery in February 2025, directly challenging Meituan, and the resulting subsidy war cost JD three straight quarterly operating losses (Q2-Q4 2025) before a modest recovery in Q1-Q2 2026. Revenue CAGR, EBIT CAGR, operating margin, FCF CAGR, market concentration, ROIC/WACC and entry multiple all miss; market share, net debt/EBITDA, FCF conversion, share count trend, insider ownership and capex intensity all clear. Unlike the rest of this batch's China/SE Asia names, no criteria needed N/A treatment — FY2021 was already a thin profit and positive-FCF year for JD, so every growth rate is directly computable, including the very poor ones.",
    file: "companies/jd.html",
    personalNote: "JD is the batch's best example of a company hurting itself on purpose. Alibaba and PDD are both dealing with pressure that's largely external — tariffs, a subsidy war Alibaba got pulled into. JD actually started this one: it chose to go after Meituan's food-delivery business in February 2025, and three quarters of real operating losses followed. I don't think that makes it a bad decision necessarily — JD is reportedly aiming for 30% food-delivery share by 2026, and the last two quarters show a real return to profit — but it's a choice, not something that happened to them, and that changes how I read the weak scorecard. What keeps me interested despite the 44 is the balance sheet: $22.78B of net cash against a $38.63B market cap is about as clean a margin of safety as this framework finds anywhere, and buybacks have already cut share count by 13% since 2021. I'd also flag a real contradiction I can't resolve from here: one source puts JD clearly at #2 in China e-commerce by GMV, but PDD's own dashboard on this site claims Pinduoduo has already passed JD domestically. Both can't be fully right, and I'm not going to pretend I know which one is."
  },

  {
    slug: "meli",
    name: "MercadoLibre, Inc.",
    ticker: "NASDAQ: MELI",
    sector: "Consumer Discretionary",
    industry: "Internet Retail",
    subIndustry: "Latin America E-Commerce, Fintech & Logistics",
    tags: ["E-Commerce"],
    dateFeatured: "2026-08-30",
    price: "$1,966.25",
    score: "11 / 13",
    martinero: 86,                    // Martinero Index (weighted 1-100 score, see About)
    momentum: { status: "steady", recent: 38.9, prior: 37.7 },  // revenue growth, most recent FY vs prior FY (non-scored)
    blurb: "The strongest scorecard in this entire e-commerce batch: MercadoLibre is the clear, widening #1 in Latin American e-commerce and fintech across 18 countries, with revenue compounding at a 42.18% CAGR (FY21-25) and free cash flow growing even faster at 128.96% CAGR. Q2 2026 revenue grew 49.76% YoY, the fastest pace in nearly four years, yet the stock is down 18.53% over the past 52 weeks — a real gap between price and fundamentals. Current P/E of 53.5x sits below its own FY22-25 average of 66.3x. Only two misses, both close calls: operating margin (11.08%, reinvesting into logistics and lending) and ROIC (14.20%, just under the 15% bar despite clearing WACC). No criteria needed N/A treatment — MELI was already profitable and FCF-positive in FY2021.",
    file: "companies/meli.html",
    personalNote: "MercadoLibre is the easiest story to like in this whole batch, and I mean that as a genuine compliment, not a knock on the framework's rigor. There's no tariff fight, no self-inflicted price war, no supervoting founder drama — just a dominant platform in a region growing faster than the global e-commerce average, compounding both revenue and free cash flow at rates nothing else here comes close to. And unlike most 'great business' stories, this one currently trades at a P/E below its own recent average, while the stock is actually down over the past year despite the business just posting its fastest growth in nearly four years. That combination — accelerating fundamentals, compressing valuation — is rare enough that I wanted it to be the batch's closing pick. The two things keeping this from a perfect score are worth taking seriously, though: margin has been drifting down for several quarters straight as they lean into logistics and Mercado Crédito, and I'd want to see that stabilize before assuming it's purely growth investment and not competitive pressure. I'd also flag the debt structure for what it is — most of it funds their own lending book, not the core commerce business — but it's exactly the kind of thing worth re-checking each quarter as that credit portfolio keeps scaling."
  },

  {
    slug: "samsung",
    name: "Samsung Electronics Co., Ltd.",
    ticker: "KRX: 005930",
    sector: "Technology",
    industry: "Semiconductors",
    subIndustry: "Memory Semiconductors, Foundry & Consumer Electronics",
    tags: ["Memory Cycle", "TSMC Competitor"],
    dateFeatured: "2026-08-31",
    price: "₩256,250",
    score: "9 / 13",
    martinero: 65,                    // Martinero Index (weighted 1-100 score, see About)
    momentum: { status: "decelerating", recent: 11.0, prior: 16.2 },  // revenue growth, most recent FY vs prior FY (non-scored)
    blurb: "TSMC's only real foundry rival, but really two businesses in one: a genuinely dominant #1 memory franchise (39% DRAM share, 29% NAND share) riding an AI-driven supercycle — quarterly operating margin rocketed from 6.27% to 52.18% in a year — and a distant, widening-gap #2 in foundry at just 6.5-7% vs TSMC's 72-73%. The 5-year revenue and EBIT CAGRs both miss badly, but only because the window captures FY2023's brutal memory-industry trough; FCF CAGR, ROIC/WACC, entry multiple, net cash position and market share all clear comfortably. Stock is up 264% over the past 52 weeks. Control runs through a Korean chaebol cross-shareholding pyramid (Lee family → Samsung C&T → Samsung Life → 8.51% of Samsung Electronics) rather than direct ownership.",
    file: "companies/samsung.html",
    personalNote: "Samsung is the most timing-sensitive dashboard I've built so far, and I want to be upfront about that. Everything about this scorecard depends on which five years you look at: the trailing CAGRs are ugly because FY2023 was a genuine trough, but the last five quarters have been about as good as memory chip results get, with margin going from 6% to 52% in a year. That's not a typo, and it's also not something I'd assume just continues in a straight line — memory has burned people who did that before, including Samsung itself in 2022-23. What I find most interesting isn't the memory story though, it's the foundry story: this whole dashboard exists because someone might read 'Samsung' as 'the other TSMC,' and the numbers say that's not really true right now — the gap to TSMC in foundry share actually widened this year, not narrowed. So I'd hold two separate views on this one: memory Samsung looks like a genuine, currently-undervalued compounder given how little the multiple has moved despite the stock's own rally; foundry Samsung still looks like a distant second place with no clear sign of catching up. Worth watching both threads separately rather than treating this as a single story."
  },

  {
    slug: "intel",
    name: "Intel Corporation",
    ticker: "NASDAQ: INTC",
    sector: "Technology",
    industry: "Semiconductors",
    subIndustry: "CPUs, Data Center & Foundry",
    tags: ["Turnaround Bet", "TSMC Competitor"],
    dateFeatured: "2026-08-31",
    price: "$89.47",
    score: "3 / 13",
    martinero: 24,                    // Martinero Index (weighted 1-100 score, see About)
    momentum: { status: "steady", recent: -0.4, prior: -2.0 },  // revenue growth, most recent FY vs prior FY (non-scored)
    blurb: "The most dramatic risk/reward story in this batch: stock up 260% over the past year on the U.S. government's 10% equity stake, a $5B Nvidia investment, Apple foundry talks, and 18A finally reaching high-volume production under new CEO Lip-Bu Tan — while the actual scorecard is one of the weakest on the whole site. Revenue is still 28% below its FY2021 peak, ROIC (3.42%) badly misses its own cost of capital (15.14%), FCF was negative for four straight years, and funding the turnaround has diluted shareholders by roughly a quarter over five years. Q2 2026 showed real operating improvement (12.19% margin, the best quarter in years) — genuinely encouraging, but one quarter against years of decline. Intel Foundry itself remains a distant, unproven challenger to TSMC (roughly single-digit share vs. TSMC's ~70%+); Intel's real day-to-day fight is still against AMD in core x86 CPUs.",
    file: "companies/intel.html",
    personalNote: "Intel is the one where I most want to flag the gap between the stock chart and the scorecard, because it's genuinely the widest gap on the whole site. Up 260% in a year, and simultaneously one of the worst-scoring dashboards I've built — both things are true at once, and I don't think either one cancels the other out. The bull case here isn't really a financial-statement case yet; it's a bet on a specific turnaround story with unusually credible backers: the U.S. government taking an equity stake to keep leading-edge chipmaking domestic, Nvidia putting in real money and a real partnership, Apple reportedly in talks about foundry capacity. That's a different kind of signal than a normal 'insider buying' data point, and I didn't want to just score it as a zero and move on — there's a governance note on the ownership page walking through why. But I also don't want to talk myself into ignoring what the numbers say: negative economic returns, heavy dilution, capex eating over a fifth of revenue, and a valuation multiple that's almost impossible to read meaningfully off a still-thin FCF base. Q2 2026's operating margin was the best in years, and if that holds up over a few more quarters I'd want to revisit this scorecard rather than treat it as fixed. For now, this is a stock I'd watch closely and a business I wouldn't yet call cheap or proven — those are different questions, and Intel is a good reminder to keep asking them separately."
  },

  {
    slug: "micron",
    name: "Micron Technology, Inc.",
    ticker: "NASDAQ: MU",
    sector: "Technology",
    industry: "Semiconductors",
    subIndustry: "Memory Semiconductors (DRAM, NAND & HBM)",
    tags: ["Memory Cycle", "AI Infrastructure"],
    dateFeatured: "2026-08-31",
    price: "$932.86",
    score: "7 / 13",
    martinero: 56,                    // Martinero Index (weighted 1-100 score, see About)
    momentum: { status: "decelerating", recent: 49.0, prior: 61.9 },  // revenue growth, most recent FY vs prior FY (non-scored)
    blurb: "The US-based leg of the memory trio alongside Samsung and SK hynix, and the one whose stock has actually run the hardest: +692% over the last 52 weeks, even more than SK hynix's +536%. A genuine #2 in HBM (~21% share) and closely contesting DRAM's #2 spot, with the widest ROIC/WACC spread and strongest balance sheet (Altman Z 9.42) of the three names — but also the weakest FCF conversion, the highest capex intensity (28% of revenue), and no anchor shareholder to fall back on. The 5-year revenue/EBIT/FCF CAGRs all miss this framework's bar, mostly because the window ends just before FY2026's real explosion: a single recent quarter (Q3 FY2026, +345.72% YoY, 80.37% margin) already exceeds most of FY2025's full-year total.",
    file: "companies/micron.html",
    personalNote: "Micron is a useful check on how much a stock chart alone can mislead you. It's up more than SK hynix over the past year, and yet this is clearly the weaker of the two scorecards — 7/13 versus 10/13, Martinero 56 versus 89. None of that is because Micron's business is bad; if anything, the most recent quarter here is the single most explosive number in this whole memory batch, an 80% operating margin on revenue that's up 3.5x year-over-year. The gap comes down to a few specific, real things: Micron is burning more of its cash flow on capex than SK hynix is right now, its market position is a genuine #2 rather than a clear #1, and it doesn't have the kind of anchor shareholder structure that gave Samsung and SK hynix a pass on the insider-ownership criterion — Micron really is just a widely-held public company with no founder backstop. I don't think that makes Micron a worse investment necessarily, but I do think it makes it a more purely momentum-driven one right now, where more of the case rests on the trend continuing rather than on a moat that's already fully priced in. Between the two, if I had to hold only one through a memory-cycle downturn, SK hynix's scorecard gives me more comfort — but Micron is the one I'd watch most closely for a re-rating if that gap closes."
  },

  {
    slug: "rigetti",
    name: "Rigetti Computing, Inc.",
    ticker: "NASDAQ: RGTI",
    sector: "Technology",
    industry: "Quantum Computing",
    subIndustry: "Superconducting-Qubit Quantum Computing Hardware",
    tags: ["Speculative Growth", "Pre-Profit", "Quantum Computing"],
    dateFeatured: "2026-09-01",
    price: "$15.59",
    score: "2 / 13",
    martinero: 11,                    // Martinero Index (weighted 1-100 score, see About)
    momentum: { status: "decelerating", recent: -34.3, prior: -10.0 },  // revenue growth, most recent FY vs prior FY (non-scored)
    blurb: "The weakest of four quantum-computing names covered in this batch, scored on this site's standard 13-criterion scorecard: revenue actually shrank over FY2021-FY2025 (-5.6% CAGR, the only decline among the four), operating losses have widened rather than narrowed, latest-FY capex ran at roughly 2.6x revenue, and market position is a distant follower to Google and IBM in superconducting-qubit hardware. Q2 2026 did show real sequential and YoY acceleration (+185% YoY on Novera system shipments) plus a $100M CHIPS Act letter of intent, and the balance sheet carries $436M in net cash from a large 2025 raise. Result: 2 of 13 criteria met, Martinero Index 11/100.",
    file: "companies/rigetti.html",
    personalNote: "Rigetti is the one company in this batch where the standard scorecard caught something I don't think I'd have seen otherwise: revenue actually went down over the FY2021-2025 window, even though the stock has had a wild multi-year run and just landed a $100M CHIPS Act letter of intent. That's a real, mechanical finding from plugging the same numbers into the same framework every other company here gets — exactly what a bespoke, gentler scorecard for early-stage names might have talked around. Q2 2026 looks like a genuine inflection (+185% YoY on actual system shipments), but one good quarter against a five-year decline is a start, not a trend. Of the four quantum names here, this is the one I'd want two or three more quarters of real growth from before taking the recent momentum at face value."
  },

  {
    slug: "d-wave",
    name: "D-Wave Quantum Inc.",
    ticker: "NYSE: QBTS",
    sector: "Technology",
    industry: "Quantum Computing",
    subIndustry: "Quantum Annealing Hardware & Cloud Services",
    tags: ["Speculative Growth", "Pre-Profit", "Quantum Computing"],
    dateFeatured: "2026-09-01",
    price: "$17.20",
    score: "3 / 13",
    martinero: 28,                    // Martinero Index (weighted 1-100 score, see About)
    momentum: { status: "accelerating", recent: 179.5, prior: 0.0 },  // revenue growth, most recent FY vs prior FY (non-scored)
    blurb: "The second-strongest of four quantum-computing names in this batch on the site's standard scorecard, helped by a genuinely distinct competitive position: D-Wave is essentially the only commercial-scale public vendor of quantum annealing hardware, a narrower niche than the crowded gate-model race. FY2025 revenue grew 178.5% YoY to $24.59M and the balance sheet holds $841M in net cash, but EBIT and FCF losses have both widened, insider ownership is thin (~0.88%), and shares outstanding have roughly tripled since the 2022 SPAC merger. Result: 3 of 13 criteria met, Martinero Index 28/100.",
    file: "companies/d-wave.html",
    personalNote: "D-Wave is the one name in this batch where I think the market-share criterion genuinely deserves a Met: quantum annealing is a real, distinct architecture from the gate-model approach IonQ, Rigetti, Google and IBM are all racing on, and D-Wave is close to the only commercial-scale public company selling it. That's a meaningfully different, more defensible position than 'one of many gate-model startups.' Q2 2026 revenue of $3.1M looks like a slowdown next to Q2 2025's $15.0M, but that prior quarter included a lumpy system sale, not a sustainable run-rate — the real story is still deepening losses and thin insider alignment (under 1%). A Martinero Index of 28 puts this second of the four, behind IonQ on scale but ahead of Rigetti and Quantum Computing Inc on a cleaner niche story."
  },

  {
    slug: "quantum-computing-inc",
    name: "Quantum Computing Inc.",
    ticker: "NASDAQ: QUBT",
    sector: "Technology",
    industry: "Quantum Computing",
    subIndustry: "Photonic Quantum Computing & Semiconductor Foundry Services",
    tags: ["Speculative Growth", "Pre-Profit", "Quantum Computing"],
    dateFeatured: "2026-09-01",
    price: "$8.15",
    score: "3 / 13",
    martinero: 23,                    // Martinero Index (weighted 1-100 score, see About)
    momentum: { status: "accelerating", recent: 75.0, prior: 0.0 },  // revenue growth, most recent FY vs prior FY (non-scored)
    blurb: "The smallest and most acquisition-driven of four quantum-computing names in this batch. Three 2026 acquisitions (most recently NHanced Semiconductors, an advanced-packaging foundry) took quarterly revenue from $61K to $5.6M, and the balance sheet carries $1.12B in net cash after large capital raises — but revenue is still tiny relative to that cash pile, capex now runs at roughly 10x annual revenue, and share count is up nearly 7x since FY2021, the heaviest dilution of the four. Founder/Chief Scientist Yuping Huang's ~10% personal stake is a genuine positive. Result: 3 of 13 criteria met, Martinero Index 23/100.",
    file: "companies/quantum-computing-inc.html",
    personalNote: "Quantum Computing Inc is the hardest of the four to get an honest read on, because the most important fact about its recent numbers isn't really about quantum computing at all: the jump from a $61K quarter to a $5.6M quarter is mostly M&A, not photonics demand, after three 2026 acquisitions including a semiconductor foundry that has nothing to do with the core photonics product line. I don't think that makes the revenue fake, but the growth rate is measuring roll-up activity more than organic traction. The one real positive: founder and Chief Scientist Yuping Huang's roughly 10% personal stake, a genuine alignment signal rare among these four names. But capex running at something like 10x annual revenue, on a business still generating single-digit millions in sales, is the number I keep coming back to. A Martinero Index of 23 feels right: real cash, a real founder stake, and a genuinely uncertain path from here."
  },

  {
    slug: "ionq",
    name: "IonQ, Inc.",
    ticker: "NYSE: IONQ",
    sector: "Technology",
    industry: "Quantum Computing",
    subIndustry: "Trapped-Ion Quantum Computing Hardware & Cloud Services",
    tags: ["Speculative Growth", "Pre-Profit", "Quantum Computing"],
    dateFeatured: "2026-09-01",
    price: "$39.31",
    score: "4 / 13",
    martinero: 30,                    // Martinero Index (weighted 1-100 score, see About) — corrected onto this site's STANDARD scorecard; see dashboard page 5
    momentum: { status: "accelerating", recent: 201.6, prior: 95.9 },  // revenue growth, most recent FY vs prior FY (non-scored)
    blurb: "The lead name in this corrected four-company Quantum batch, and the largest by a wide margin (2025 revenue $130.02M vs. $24.59M, $7.09M and $0.68M for D-Wave, Rigetti and Quantum Computing Inc respectively) — but scored on the exact same 13-criterion standard scorecard as every other dashboard on this site, replacing an earlier custom \"speculative-risk\" version built the same day. Revenue is up 287% YoY in the latest quarter (fifth straight record) with backlog up 297% YoY, and the balance sheet carries $2.36B in net cash. Against the standard scorecard, though: operating margin is -487%, EBIT and FCF losses have both widened sharply, shares outstanding have roughly doubled since 2021, and capex intensity and market concentration both miss. Result: 4 of 13 criteria met, Martinero Index 30/100.",
    file: "companies/ionq.html",
    personalNote: "Earlier today I built IonQ's first dashboard using a custom scorecard designed specifically for early-stage quantum names, on the theory that judging a pre-profit hardware company by the same yardstick as Novo Nordisk or ASML would be unfair. I've reversed that and rebuilt this one on the site's standard scorecard, the same one every other company gets, and I think that was the right call: the whole point of a consistent framework is that a low score on it IS the finding, not a flaw in the test. Under the standard lens, IonQ is genuinely the strongest of the four quantum names I'm covering — by far the most revenue, the clearest realistic market position, a large net-cash cushion — and it still only clears 4 of 13 criteria for a Martinero Index of 30. That's not a knock on the business; it's an honest description of what pre-profit, capital-intensive, early-stage hardware looks like when you refuse to grade it on a curve. I'd still call this the most investable of the four on fundamentals, but investable-among-speculative and objectively strong are different claims, and conflating them was exactly the mistake the custom scorecard let me make this morning."
  },

  {
    slug: "sk-hynix",
    name: "SK hynix Inc.",
    ticker: "KRX: 000660",
    sector: "Technology",
    industry: "Semiconductors",
    subIndustry: "Memory Semiconductors (DRAM, NAND & HBM)",
    tags: ["Memory Cycle", "AI Infrastructure"],
    dateFeatured: "2026-08-31",
    price: "₩1,648,000",
    score: "10 / 13",
    martinero: 89,                    // Martinero Index (weighted 1-100 score, see About)
    momentum: { status: "decelerating", recent: 46.7, prior: 101.8 },  // revenue growth, most recent FY vs prior FY (non-scored)
    blurb: "The real supplier behind the AI buildout: the #1 maker of HBM (high-bandwidth memory) at 58-62% share, the component Nvidia's GPUs physically depend on. Revenue nearly quadrupled year-over-year last quarter, operating margin climbed from 41% to 76% across five straight quarters, and the balance sheet flipped from net debt to a ₩66.87T net cash cushion in under two years. ROIC of 61.59% clears its 17.27% cost of capital by more than 44 points — genuine current profitability, not a hoped-for turnaround. Valuation is the exception: the headline 7.26x trailing P/E is inflated by a one-off gain, and normalized on real operating earnings the multiple runs closer to 27.3x, roughly 2.2x its own recent average — a real premium for a stock up 536% in a year, not a discount. Scorecard isn't flawless — FCF conversion, entry multiple and capex intensity all miss — but 10/13 met is one of the strongest results on this site, backed by real numbers rather than narrative alone.",
    file: "companies/sk-hynix.html",
    personalNote: "Of the two names to come out of the TSMC-competitor detour, SK hynix is the one I'd actually want to own, and I think it's worth being explicit about why: Intel's case was 'the turnaround might work,' Samsung's was 'two different businesses pulling in different directions,' and SK hynix's is just... the numbers are good. Really good. Revenue nearly quadrupling in a year and margin going from 41% to 76% would normally make me suspicious of a one-off, but this maps directly onto something concrete and ongoing — every major AI accelerator needs HBM stacked next to the compute die, and SK hynix has held the lead in that specific product for a while now. What surprised me most building this one was the valuation math: at first glance the trailing P/E of 7.26x after a 536% year looks almost too good to be true — and it is. That figure is inflated by a one-off non-operating gain; strip it out and the normalized multiple is running around 27x, more than double the stock's own recent average. So the entry-multiple criterion does fail here, just not for the reason I expected going in — it's not that the market ignored the rally, it's that the cheap-looking headline number was hiding the real one. I'm not pretending this is risk-free — memory is savagely cyclical (FY2023 was a loss year for the whole industry, not just SK hynix), and Micron and Samsung are both racing to close the HBM gap. But of everything I've built recently, this is the dashboard where the fundamentals do the most work and the narrative does the least, and that's usually the combination I trust more."
  }

  // Add the next company below this line, as a new {...} block ⬇

];
