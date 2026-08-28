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
    blurb: "The honest weak point of this GRANOLAS batch's pharma names — a real, structural gap rather than a one-off distortion. ROIC has sat in the 8-10% range every year since FY2021, never approaching this framework's 15% bar, and revenue/EBIT/FCF growth have all been modest-to-flat over five years. Two genuine one-off items are worth flagging: FY2022's elevated margins reflect Regeneron-related equity stake gains, and FY2025's net income includes a €2.61bn gain from divesting Opella (consumer healthcare) to CD&R. What's working: Dupixent just crossed €5B in quarterly sales for the first time (+37.6%), leverage is moderate, and the share count is down a real 18% over five years. Current valuation (23.85x) sits about 30% above its own recent average — the richest gap in this batch.",
    file: "companies/sanofi.html",
    personalNote: "Sanofi is the batch's reality check — after AstraZeneca and SAP both turned into pleasant surprises, this one reminded me that not every GRANOLAS name is a hidden gem. The honest story here is a return-on-capital problem: ROIC has been stuck in the high single digits for five straight years, never getting close to my usual bar, and it's not explained away by any one-off charge — it's just a genuinely lower-return business than the other pharma names in this batch. I did find two real distortions worth flagging: 2022's margins were flattered by Regeneron stake-sale gains, and 2025's net income got a real boost from selling the Opella consumer health business, which is worth remembering if the headline numbers look better than they are. What keeps me from writing this off completely is Dupixent — crossing €5 billion in quarterly sales for the first time is a genuinely big deal, and the buyback funded by the Opella proceeds has meaningfully shrunk the share count. But at nearly 30% above its own recent average multiple for a business growing this slowly, I don't see the value case here right now — this is one I'd want to see re-rate lower, or the returns genuinely improve, before getting interested."
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
    blurb: "The world's largest crude oil producer and one of its most profitable companies by any measure — a 44% operating margin, a 20.8% ROIC against an estimated 8.3% cost of capital, and net debt/EBITDA of just 0.09x. Ownership is concentrated in the Saudi state (government + PIF, ~90% combined) rather than a founder. The scorecard's main miss is growth: revenue, operating income and free cash flow have all been roughly flat-to-declining since FY2021, and FY2026's strong headline results are meaningfully inflated by a real but unusual Strait of Hormuz supply disruption tied to the ongoing regional conflict — a geopolitical tailwind that could reverse just as quickly as it appeared.",
    file: "companies/aramco.html",
    personalNote: "Aramco is a strange one to hold up against the rest of this list — it's not a growth story, it's not founder-led, and its profits are currently juiced by a geopolitical event I'd rather not see continue. But strip all that away and what's left is genuinely the most profitable, least levered business on this entire site: a 44% operating margin, ROIC miles above its cost of capital, and almost no net debt. The dividend yield (over 5%) is real income, backed by a state that has every incentive to keep paying it. What keeps me cautious is growth — revenue and free cash flow have barely moved since 2021, and long-term I'd want to see how Aramco navigates the energy transition, since this isn't a business I'd want to hold for 20 years on autopilot. Right now feels like buying deep, reliable cash flow at a fair price, not buying compounding growth — worth remembering which of those two things I'm actually getting."
  },

  // Add the next company below this line, as a new {...} block ⬇

];
