#!/usr/bin/env python3
"""
Daily price refresh for notyourfinancialadvisor.com.

Reads scripts/tickers.json (slug -> Yahoo symbol), fetches the latest close,
previous close and (where Yahoo has them) trailing/forward P/E, and writes
assets/prices.json. The dashboards and homepage read that one file in the
browser (assets/live.js, assets/site.js) and update the "Now" point of the
price chart, the headline price and the live P/E.

Designed to fail soft: a ticker that cannot be fetched is simply left out
(the page keeps its static snapshot). If NOTHING can be fetched the file is
left untouched, so a Yahoo outage never wipes good data.
"""
import json
import sys
import time
import datetime as dt
from pathlib import Path

import yfinance as yf

ROOT = Path(__file__).resolve().parent.parent
TICKERS = json.loads((ROOT / "scripts" / "tickers.json").read_text(encoding="utf-8"))
OUT = ROOT / "assets" / "prices.json"


def num(x):
    try:
        v = float(x)
        return v if v == v and v not in (float("inf"), float("-inf")) else None
    except (TypeError, ValueError):
        return None


def fetch_one(slug, spec):
    sym, div = spec["sym"], spec.get("div", 1)
    t = yf.Ticker(sym)
    hist = t.history(period="7d", interval="1d", auto_adjust=False)
    hist = hist.dropna(subset=["Close"])
    if hist.empty:
        return None
    price = num(hist["Close"].iloc[-1])
    prev = num(hist["Close"].iloc[-2]) if len(hist) > 1 else None
    day = hist.index[-1].strftime("%Y-%m-%d")
    pe = fpe = cur = None
    try:
        info = t.info or {}
        pe = num(info.get("trailingPE"))
        fpe = num(info.get("forwardPE"))
        cur = info.get("currency")
    except Exception:
        pass  # P/E is optional; price is what matters
    if price is None:
        return None
    q = {
        "sym": sym,
        "p": round(price / div, 4),
        "d": day,
    }
    if prev:
        q["prev"] = round(prev / div, 4)
    if pe and 0 < pe < 1000:
        q["pe"] = round(pe, 1)
    if fpe and 0 < fpe < 1000:
        q["fpe"] = round(fpe, 1)
    if cur:
        q["cur"] = cur
    return q


def main():
    quotes, failed = {}, []
    for slug, spec in TICKERS.items():
        if slug.startswith("_"):
            continue
        try:
            q = fetch_one(slug, spec)
        except Exception as e:  # network, delisted, rate limit...
            q = None
            print(f"  ! {slug} ({spec['sym']}): {e}", file=sys.stderr)
        if q:
            quotes[slug] = q
        else:
            failed.append(f"{slug} ({spec['sym']})")
        time.sleep(0.4)  # be polite

    print(f"fetched {len(quotes)} / {len(quotes) + len(failed)}")
    if failed:
        print("could not fetch: " + ", ".join(failed))

    if len(quotes) < 10:
        print("Too few quotes - leaving prices.json untouched.", file=sys.stderr)
        sys.exit(1)

    # Keep yesterday's value for any ticker that failed today (marked by its own date 'd').
    if OUT.exists():
        try:
            old = json.loads(OUT.read_text(encoding="utf-8")).get("quotes", {})
            for slug, q in old.items():
                quotes.setdefault(slug, q)
        except Exception:
            pass

    payload = {
        "asOf": dt.datetime.now(dt.timezone.utc).strftime("%Y-%m-%dT%H:%MZ"),
        "source": "Yahoo Finance via yfinance",
        "quotes": dict(sorted(quotes.items())),
    }
    OUT.write_text(json.dumps(payload, separators=(",", ":")), encoding="utf-8")


if __name__ == "__main__":
    main()
