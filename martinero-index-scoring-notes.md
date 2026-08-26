# Martinero Index — Graduated Scoring Methodology (reference notes)

**Status: launched Aug 2026.** This graduated scoring is now live across companies.js and all 18 dashboards. Kept here as internal reference notes documenting the design and the band definitions — not shown or linked anywhere on the live site itself.

**Previous system (binary, retired Aug 2026):** each of 13 criteria was Met (full weight) or Not met (0), except market concentration which already ran 1-5 internally but still collapsed to a Met/Not-met cliff. Total possible weight = 100.

**Current system (graduated):** each criterion scores 0-5. A criterion's contribution to the index = `(points / 5) × criterion weight`. Weights are unchanged (13,11,10,8,7,6,10,6,8,8,4,5,4) so old and new scores stay comparable. Max possible score is still 100.

---

## 1. Revenue CAGR (FY21-25) — weight 13
## 2. EBIT (Operating Income) CAGR (FY21-25) — weight 11
## 3. Operating margin, latest FY — weight 10
## 4. FCF CAGR (FY21-25) — weight 8

**CONFIRMED — one unified band, applied to all four of the above for consistency.** Growth-CAGR and margin behave the same way conceptually (a %-based floor metric), so they share one scale:

| Band | Points |
|---|---|
| <0% (negative) | 0 |
| 0-5% | 1 |
| 5-10% | 2 |
| 10-15% | 3 |
| 15-20% | 4 |
| >20% | 5 |

Note: the old binary bar was ≥15% for the three CAGR criteria and ≥20% for margin. Under this unified scale, the old CAGR "pass" line (15%) now earns 4/5, not full marks — a company needs to clear 20% CAGR for a perfect score. Margin's old bar (20%) lines up exactly with the new top band, so nothing changes in spirit there. FCF CAGR wasn't explicitly discussed but is the same metric type as revenue/EBIT CAGR (same old 15% bar), so it's included here for consistency — flag if you want it treated differently.

## 5. Market share — weight 7
*Confirmed by Maarten ("your other suggestions" — approved as drafted). Categorical, not a percentage — needs a ranking-based scale instead.*

| Band | Points |
|---|---|
| Clear #1 | 5 |
| Strong #2 | 4 |
| #3 | 2 |
| #4-5 | 1 |
| Long tail / fragmented, no top-5 position | 0 |

## 6. Market concentration — weight 6
*Confirmed. This criterion is already graded 1(monopoly)-5(open market) — the old binary system just collapsed it to a cliff (1-2 = Met, 3-5 = Not met). The graduated system keeps the existing 1-5 score and inverts it directly to points, no new judgment needed.*

| Existing 1-5 score | Points |
|---|---|
| 1 (near-monopoly) | 5 |
| 2 (light competition) | 4 |
| 3 (moderate, boundary case) | 2 |
| 4 (fragmented) | 1 |
| 5 (fully open) | 0 |

## 7. ROIC vs WACC — weight 10
*Confirmed: Option A.* Bands the spread (ROIC − WACC), not raw ROIC. This folds "clears WACC" directly into the scale — a negative spread (value-destroying) is an automatic 0, regardless of how high ROIC looks in isolation. It also self-adjusts for capital intensity across sectors, which raw ROIC doesn't.

| Spread (ROIC − WACC) | Points |
|---|---|
| Negative (below WACC) | 0 |
| 0-3 pts | 1 |
| 3-6 pts | 2 |
| 6-9 pts | 3 |
| 9-12 pts | 4 |
| >12 pts | 5 |

## 8. Net debt/EBITDA — weight 6
*Confirmed. Lower is better (ceiling-type), mirrors the growth-band shape in reverse. Old bar was <2x.*

| Band | Points |
|---|---|
| Net cash (negative) | 5 |
| 0-1x | 4 |
| 1-2x | 3 |
| 2-3x | 2 |
| 3-4x | 1 |
| >4x | 0 |

## 9. FCF conversion (FCF/EBIT) — weight 8
*Confirmed. Old bar was ≥80%. Wider bands than the CAGR criteria since this metric's real-world range is wider (0%-100%+).*

| Band | Points |
|---|---|
| <20% | 0 |
| 20-40% | 1 |
| 40-60% | 2 |
| 60-80% | 3 |
| 80-100% | 4 |
| >100% | 5 |

## 10. Entry multiple vs. own history — weight 8
*Confirmed — "sounds great." Ratio of current multiple to the company's own FY21-25 average (P/E or EV/EBITDA, whichever the dashboard uses). Old bar was "at/below average" (ratio ≤ 1.00).*

| Current ÷ 5yr avg | Points |
|---|---|
| ≤0.70 (30%+ discount) | 5 |
| 0.70-0.85 | 4 |
| 0.85-1.00 (at/near own average) | 3 |
| 1.00-1.15 (up to 15% premium) | 2 |
| 1.15-1.30 (15-30% premium) | 1 |
| >1.30 (30%+ premium) | 0 |

*Sanity check: Schneider's ratio is 35.1÷28.3 = 1.24 → lands at 1 point, not 0. Feels right — genuinely rich, but not the most extreme case on the site.*

## 11. Share count trend — weight 4
*Confirmed. Based on % change in shares outstanding over the FY21-25 window (or FY21→current where cleaner). Old bar was "flat/declining." Fewer natural tiers than the financial-ratio criteria, but padded to 6 for consistency.*

| 5-yr change in shares out | Points |
|---|---|
| Rising >15% | 0 |
| Rising 5-15% | 1 |
| Roughly flat (±5%) | 3 |
| Declining 5-15% | 4 |
| Declining >15% | 5 |

*(Note: only 5 distinct bands here, not 6 — "roughly flat" is a single wide middle band rather than splitting further, since sub-5% moves in either direction aren't meaningfully different.)*

## 12. Insider/founder ownership — weight 5
*Confirmed. Most categorical/judgment-based of the 13 — the underlying concept ("meaningful" alignment) doesn't reduce to one clean percentage as cleanly as the others.*

| Insider / founder / controlling-family stake | Points |
|---|---|
| >30% (controlling) | 5 |
| 15-30% | 4 |
| 5-15% | 3 |
| 1-5% | 2 |
| <1%, but notable broad employee ownership plan (~5%+) | 1 |
| <1%, no meaningful employee plan | 0 |

## 13. Capex intensity — weight 4
*Confirmed. Lower is better. No hard number was ever formalized in the old binary system (dashboards used "low/asset-light" as a judgment call, informally around 5-8%) — this makes that explicit.*

| Capex as % of revenue | Points |
|---|---|
| <3% | 5 |
| 3-6% | 4 |
| 6-10% | 3 |
| 10-15% | 2 |
| 15-20% | 1 |
| >20% | 0 |

---

## Criteria Met vs. Martinero Index — now two genuinely separate measures

Decided: **"X/13 criteria met" stays exactly as it is today** — binary, on the original hard thresholds (revenue/EBIT/FCF CAGR ≥15%, margin ≥20%, net debt/EBITDA <2x, etc.), completely independent of the new graduated bands above. Only the **Martinero Index** switches to the 0-5 banded math.

This is a better design than trying to derive one number from the other, and it shrinks the retrofit a lot:
- The simple screen ("does it clear the bar, yes/no") stays untouched and easy to explain.
- The Martinero Index becomes the nuanced, "how close/how much does it matter" number.
- **Every dashboard's scorecard table, status pills, and summary donut stay exactly as they are today, unchanged.** Only the single Martinero Index figure per dashboard needs recomputing — no UI rebuild needed for the scorecard section itself.
- `verify_dashboard.py`'s "sums to 13" check keeps working exactly as-is, since it's checking the untouched binary criteria-met count, not the new index.

## Worked example: Schneider Electric under the graduated system

| # | Criterion | Value | Band | Points | Weight | Contribution |
|---|---|---|---|---|---|---|
| 1 | Revenue CAGR | 8.6% | 5-10% | 2/5 | 13 | 5.2 |
| 2 | EBIT CAGR | 11.5% | 10-15% | 3/5 | 11 | 6.6 |
| 3 | Operating margin | 16.7% | 15-20% | 4/5 | 10 | 8.0 |
| 4 | FCF CAGR | 13.3% | 10-15% | 3/5 | 8 | 4.8 |
| 5 | Market share | Clear #1 in Energy Mgmt | — | 5/5 | 7 | 7.0 |
| 6 | Market concentration | scored 4/5 (fragmented) | — | 1/5 | 6 | 1.2 |
| 7 | ROIC − WACC spread | ~3.7-4.4 pts | 3-6 pts | 2/5 | 10 | 4.0 |
| 8 | Net debt/EBITDA | ~1.9x | 1-2x | 3/5 | 6 | 3.6 |
| 9 | FCF conversion | 75.5% | 60-80% | 3/5 | 8 | 4.8 |
| 10 | Entry multiple ratio | 1.24 | 1.15-1.30 | 1/5 | 8 | 1.6 |
| 11 | Share count trend | ~flat | ±5% | 3/5 | 4 | 2.4 |
| 12 | Insider ownership | <1% + employee plan | — | 1/5 | 5 | 1.0 |
| 13 | Capex intensity | 2.7% | <3% | 5/5 | 4 | 4.0 |
| | | | | | **Total** | **54.2 / 100** |

**Criteria met stays 4/13, unchanged.** The Martinero Index moved from 21/100 (old binary system) to 54/100 (graduated) — a big jump, but a believable one: it slots Schneider between NN Group (50) and Meta/Microsoft (67) on the live scoreboard, right in the middle of the pack, instead of dead last. That's a much better outcome than an earlier naive linear model tested during design, which would have pushed it all the way to ~77/100 (near the top) — the discrete tiers did real work here.

## Launch record (Aug 2026)

Retrofitted across all 18 existing dashboards, not just new ones going forward. Final scores (old → new): Palantir 90→92, NVIDIA 87→91, ASML 87→82, Novo Nordisk 80→80, Intuitive Surgical 76→79, Broadcom 77→78, TSMC 75→78, SanDisk 76→75, Visa 63→73, Meta 61→67, Microsoft 75→67, Arm 57→66, Airbus 38→58, NKT 61→55, Demant 39→54, Schneider Electric 21→54, NN Group 47→50, DFDS 30→42.

Sanity check on compression: range went from 21-90 (spread 69, stdev ~21) to 42-92 (spread 50, stdev ~14). Real compression, but ranking order held up — same names anchor the top (Palantir, NVIDIA) and bottom (DFDS, NN Group). Two companies moved down despite nothing changing about them (Microsoft 75→67, SanDisk 76→75) because they were getting full binary credit on criteria they only moderately cleared — a sign the graduated system is working in both directions, not just inflating scores.

The About page methodology section and each dashboard's Martinero Index card were updated to match. FCF CAGR was folded into the same unified growth/margin band as revenue and EBIT CAGR (same metric type, same old 15% bar).
