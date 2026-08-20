#!/usr/bin/env python3
"""
Verification checks for company dashboard files (companies/*.html).
See DASHBOARD-CHECKLIST.md for the full spec this supports.

Usage:
    python3 verify_dashboard.py companies/sandisk.html
    python3 verify_dashboard.py companies/*.html     # check all of them
"""
import re
import sys
import glob
from html.parser import HTMLParser

VOID = {'circle', 'line', 'rect', 'text', 'path', 'stop', 'polyline',
        'br', 'img', 'input', 'meta', 'link', 'defs'}

QUARTER_PAT = re.compile(r"Q[1-4]\s*(?:FY)?['\s]?\d{2}")


class TagBalanceChecker(HTMLParser):
    def __init__(self):
        super().__init__()
        self.stack = []
        self.mismatches = []

    def handle_starttag(self, tag, attrs):
        if tag not in VOID:
            self.stack.append(tag)

    def handle_endtag(self, tag):
        if tag in VOID:
            return
        if not self.stack or self.stack[-1] != tag:
            self.mismatches.append((tag, list(self.stack[-5:])))
        else:
            self.stack.pop()


def check_structural(src):
    c = TagBalanceChecker()
    c.feed(src)
    if c.mismatches:
        return False, f"tag mismatches: {c.mismatches[:3]}"
    if c.stack:
        return False, f"unclosed tags at EOF: {c.stack}"
    return True, "OK"


def check_clipped_labels(src):
    # A <text> element whose y is within 0-4px of the top of its own
    # viewBox will typically render off-canvas / invisible.
    clipped = re.findall(r'text x="[0-9.]+" y="-?[0-4](\.[0-9]+)?"', src)
    return len(clipped) == 0, f"{len(clipped)} label(s) with y in 0-4px range (likely clipped)"


def check_quarter_consistency(src):
    problems = []
    cards = re.split(r'(?=<div class="chart-card">)', src)
    for card in cards:
        if '<svg' not in card:
            continue
        svg_m = re.search(r'<svg.*?</svg>', card, re.S)
        if not svg_m:
            continue
        svg = svg_m.group(0)
        svg_q = set(QUARTER_PAT.findall(svg))
        if not svg_q:
            continue
        idx = src.find(svg)
        rest = src[idx: idx + 4000]
        tbl_m = re.search(r'<tr><th>.*?</tr>', rest)
        table_q = set(QUARTER_PAT.findall(tbl_m.group(0))) if tbl_m else set()
        if table_q and svg_q != table_q:
            problems.append((sorted(svg_q), sorted(table_q)))
    return len(problems) == 0, problems


def check_scorecard_total(src):
    met = src.count('status-pill status-met')
    notmet = src.count('status-pill status-not')
    na = src.count('status-pill status-na')
    score = src.count('status-pill status-score')
    total = met + notmet + na + score
    ok = total == 13
    detail = f"met={met} not_met={notmet} n/a={na} score={score} sum={total} (expect 13)"
    return ok, detail


def check_bullet_list_font(src):
    if '.bullet-list {' not in src and '.bullet-list{' not in src:
        return True, "no .bullet-list rule used in this file"
    rule_m = re.search(r'\.bullet-list\s*\{[^}]*\}', src)
    if not rule_m:
        return True, "no .bullet-list rule found"
    has_font_size = 'font-size' in rule_m.group(0)
    if has_font_size:
        return True, "font-size set on .bullet-list"
    return False, "missing font-size on .bullet-list (will fall back to browser default, looks oversized)"


def check_responsive_width(src):
    ok = '@media screen' in src and '@media print' in src and 'margin:0 auto' in src
    if ok:
        return True, "present"
    return False, "missing @media screen/print width rules or .page{margin:0 auto;}"


def run_all(path):
    src = open(path, encoding='utf-8').read()
    checks = [
        ("Structural HTML", check_structural),
        ("Clipped chart labels", check_clipped_labels),
        ("Quarter/period consistency (chart vs table)", check_quarter_consistency),
        ("Scorecard sums to 13", check_scorecard_total),
        ("Bullet-list font-size set", check_bullet_list_font),
        ("Responsive width rules present", check_responsive_width),
    ]
    print(f"\n=== {path} ===")
    all_ok = True
    for name, fn in checks:
        ok, detail = fn(src)
        status = "PASS" if ok else "FAIL"
        if not ok:
            all_ok = False
        print(f"  [{status}] {name}: {detail}")
    return all_ok


if __name__ == "__main__":
    if len(sys.argv) < 2:
        print(__doc__)
        sys.exit(1)
    paths = []
    for arg in sys.argv[1:]:
        paths.extend(glob.glob(arg))
    if not paths:
        print("No matching files.")
        sys.exit(1)
    overall_ok = True
    for p in paths:
        if not run_all(p):
            overall_ok = False
    sys.exit(0 if overall_ok else 1)
