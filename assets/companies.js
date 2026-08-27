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
    blurb: "The world's dominant EV battery and energy-storage maker — #1 for nine straight years, holding roughly 40% of the global market, more than double the #2 player (BYD). Revenue and profit have both compounded above 30% annually since 2021 despite a rare 2024 revenue dip, the balance sheet is comfortably net cash, and the current P/E sits well below its own 10-year median. One of the strongest scorecards on this site — the main structural miss is heavy capex intensity from gigafactory buildout, plus two data-availability N/As (FCF CAGR, FCF conversion) and real geopolitical exposure as a China-domiciled, strategically sensitive supply-chain company.",
    file: "companies/catl.html",
    personalNote: "I recently advised CATL to my girlfriend — we were probably a bit late to the show, buying well after the 2023 low, but I still believe in this company for the long run. Roughly 40% of the world's EV and grid-storage battery market, more than double its nearest rival, with revenue and profit both compounding above 30% a year since 2021 and a comfortably net-cash balance sheet. The honest complications: real export-control and sanctions-list risk as a China-domiciled company, and genuinely heavy capex from gigafactory buildout — this isn't an asset-light compounder. One worry I had going in was CATL getting squeezed by the brutal price war among Chinese EV makers, but its own margins have kept expanding right through that, which says a lot about its pricing power. Free cash flow wasn't reliably verifiable from public sources either, so two criteria are marked N/A rather than guessed at. Fundamentals look solid; the geopolitical and capex risks are the parts I still can't fully price."
  },

  // Add the next company below this line, as a new {...} block ⬇

];
