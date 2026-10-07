/* ============================================================
   live.js — keeps share-price items on every company dashboard fresh.

   Reads assets/prices.json (refreshed once a day by the GitHub Action in
   .github/workflows/update-prices.yml) and, for the current dashboard:
     1. updates the headline price,
     2. adds a small "live" line (day change, trailing/forward P/E),
     3. re-draws the "Share Price — Last 5 Years" chart so its final
        "Now" point, the labels, the area and the 5-Yr CAGR use today's price.

   Everything else on the page (financials, scorecard, valuation history)
   stays as researched. If prices.json is empty, missing, or looks wrong,
   the page is left exactly as it was built.
   ============================================================ */
(function () {
  "use strict";

  var slug = (location.pathname.split("/").pop() || "").replace(/\.html$/, "");
  if (!slug) return;

  var base = "";
  try { base = document.currentScript.src.replace(/live\.js.*$/, ""); } catch (e) { base = "/assets/"; }

  var UNITS = { K: 1e3, M: 1e6, B: 1e9 };
  function parseNum(s) {
    var str = String(s).replace(/,/g, "");
    var m = str.match(/-?\d+(\.\d+)?/);
    if (!m) return NaN;
    var v = parseFloat(m[0]);
    var u = str.slice(m.index + m[0].length).match(/^\s*([KMB])\b/);
    return u ? v * UNITS[u[1]] : v;
  }
  function decimalsOf(s) {
    var m = String(s).match(/\.(\d+)/);
    return m ? m[1].length : 0;
  }
  function unitOf(s) {
    var m = String(s).replace(/,/g, "").match(/\d\s*([KMB])\b/);
    return m ? m[1] : "";
  }
  function fmt(value, like) {
    var pre = (String(like).match(/^[^\d\-]*/) || [""])[0];
    var u = unitOf(like);
    var shown = u ? value / UNITS[u] : value;
    var d = decimalsOf(like);
    var tail = String(like).replace(/^[^\d\-]*[\d.,]+/, ""); // whatever followed the number (K, M, p, %, ...)
    return pre + shown.toLocaleString("en-US", { minimumFractionDigits: d, maximumFractionDigits: d }) + tail;
  }
  function f(n, dp) { return (Math.round(n * Math.pow(10, dp)) / Math.pow(10, dp)).toFixed(dp); }
  function dpOf(str) { var m = String(str).match(/\.(\d+)$/); return m ? m[1].length : 1; }

  /* ---------- price chart ---------- */
  function updateChart(price) {
    var svg = null;
    [].slice.call(document.querySelectorAll("svg")).forEach(function (el) {
      if (svg) return;
      var card = el.closest ? el.closest(".chart-card") : null;
      var tEl = card && card.querySelector(".chart-title");
      var title = tEl ? tEl.textContent : "";
      var isPrice = /Close/i.test(title) && !/P\/E|P\/FCF|Price\/Sales|multiple/i.test(title);
      var hasNow = [].slice.call(el.querySelectorAll("text")).some(function (t) { return t.textContent.trim() === "Now"; });
      if (isPrice && hasNow && el.querySelectorAll("circle").length >= 3) svg = el;
    });
    if (!svg) return false;

    var circles = [].slice.call(svg.querySelectorAll("circle"));
    var texts = [].slice.call(svg.querySelectorAll("text"));

    var pts = circles.map(function (c) {
      var cx = parseFloat(c.getAttribute("cx")), cy = parseFloat(c.getAttribute("cy"));
      var lab = null, best = 1e9;
      texts.forEach(function (t) {
        if (t.getAttribute("font-weight") !== "700") return;
        if (!/\d/.test(t.textContent) || /CAGR|%|\/yr/i.test(t.textContent)) return;
        var dx = Math.abs(parseFloat(t.getAttribute("x")) - cx);
        var dy = Math.abs(parseFloat(t.getAttribute("y")) - cy);
        if (dx < 26 && dy < 30 && dx + dy < best) { best = dx + dy; lab = t; }
      });
      return { c: c, cx: cx, cy: cy, lab: lab };
    });
    if (pts.some(function (p) { return !p.lab; })) return false;
    pts.sort(function (a, b) { return a.cx - b.cx; });

    var vals = pts.map(function (p) { return parseNum(p.lab.textContent); });
    var n = pts.length, last = pts[n - 1], oldNow = vals[n - 1];
    if (!isFinite(oldNow) || !(price / oldNow > 0.25 && price / oldNow < 4)) return false; // unit/ticker mismatch guard

    // Keep every historical point where the page put it; only the "Now" point moves.
    // Its y comes from piecewise-linear interpolation (by value) between the page's own points,
    // so the result is exact when the price is unchanged and faithful to this page's scale.
    var oldYs = pts.map(function (p) { return p.cy; });
    var hist = pts.slice(0, -1).map(function (p, i) { return { v: vals[i], y: p.cy }; })
      .sort(function (a, b) { return a.v - b.v; });
    function interp(v) {
      var i = 0;
      while (i < hist.length - 2 && v > hist[i + 1].v) i++;
      var p0 = hist[i], p1 = hist[i + 1];
      if (p1.v === p0.v) return p0.y;
      return p0.y + (v - p0.v) * (p1.y - p0.y) / (p1.v - p0.v);
    }
    var ys = oldYs.slice();
    var yNow = interp(price);
    var ytop = Math.min.apply(null, oldYs), ybot = Math.max.apply(null, oldYs);
    if (price === oldNow) yNow = oldYs[n - 1];
    if (!isFinite(yNow) || yNow < 22 || yNow > 172) {
      // outside the frame: re-frame all points inside this page's own vertical range
      var nv = vals.slice(0, -1).concat([price]);
      var mn = Math.min.apply(null, nv), mx = Math.max.apply(null, nv), span = (mx - mn) || 1;
      ys = nv.map(function (v) { return ybot - (v - mn) / span * (ybot - ytop); });
    } else {
      ys[n - 1] = yNow;
    }
    var dp = dpOf(last.c.getAttribute("cy"));

    pts.forEach(function (p, i) {
      var dy = parseFloat(p.lab.getAttribute("y")) - p.cy;          // keep label offset (above/below)
      p.c.setAttribute("cy", f(ys[i], dp));
      p.lab.setAttribute("y", f(ys[i] + dy, dp));
    });
    last.lab.textContent = fmt(price, last.lab.textContent);

    // paths: rewrite y of the first n coordinate pairs (series line and area share the same points)
    [].slice.call(svg.querySelectorAll("path")).forEach(function (p) {
      var d = p.getAttribute("d") || "";
      var fill = p.getAttribute("fill") || "";
      var isArea = fill.indexOf("url(#") === 0 && p.getAttribute("stroke") === "none";
      var isLine = fill === "none" && !p.getAttribute("stroke-dasharray") && /^M/.test(d) && (d.match(/L/g) || []).length === n - 1;
      if (!isArea && !isLine) return;
      p.setAttribute("d", d.replace(/(-?\d+(?:\.\d+)?),(-?\d+(?:\.\d+)?)/g, function (m0, x, y) {
        var xv = parseFloat(x);
        for (var k = 0; k < n; k++) {
          if (Math.abs(pts[k].cx - xv) < 0.6 && Math.abs(oldYs[k] - parseFloat(y)) < 0.6) return x + "," + f(ys[k], dpOf(y));
        }
        return m0;
      }));
    });

    // dashed CAGR line (if any): move its endpoints with the first and last points
    var dash = [].slice.call(svg.querySelectorAll("line")).filter(function (l) { return !!l.getAttribute("stroke-dasharray"); })[0];
    if (dash) {
      var y1o = parseFloat(dash.getAttribute("y1")), y2o = parseFloat(dash.getAttribute("y2"));
      dash.setAttribute("y1", f(ys[0] + (y1o - oldYs[0]), 2));
      dash.setAttribute("y2", f(ys[n - 1] + (y2o - oldYs[n - 1]), 2));
    }

    // CAGR text: scale the page's own CAGR by the change in the Now price
    var cagrEl = texts.filter(function (t) { return /CAGR|\/yr/i.test(t.textContent) && /%/.test(t.textContent); })[0] ||
      texts.filter(function (t) { return t.getAttribute("font-weight") === "700" && /^[+\-−]\d+(\.\d+)?%\*?$/.test(t.textContent.trim()); })[0];
    if (cagrEl) {
      var tx = cagrEl.textContent;
      var gm = tx.match(/([+\-−])?(\d+(?:\.\d+)?)%/);
      var gOld = gm ? (gm[1] === "-" || gm[1] === "−" ? -1 : 1) * parseFloat(gm[2]) / 100 : NaN;
      var years = NaN, ym;
      if ((ym = tx.match(/(?:FY)?(20\d\d|\d\d)\s*(?:→|->|to)\s*Now/i))) {
        var y0 = parseInt(ym[1], 10); if (y0 < 100) y0 += 2000;
        years = new Date().getFullYear() - y0;
      } else if ((ym = tx.match(/(\d+)-Yr|~(\d+)\s*yr/i))) years = parseInt(ym[1] || ym[2], 10);
      if (!isFinite(years) || years < 1 || years > 12) years = 5;
      if (isFinite(gOld)) {
        var g = ((1 + gOld) * Math.pow(price / oldNow, 1 / years) - 1) * 100;
        var dpc = (gm[2].split(".")[1] || "").length;
        var neg = gm[1] === "−" ? "−" : "-";
        cagrEl.textContent = tx.replace(/[+\-−]?\d+(\.\d+)?%/, (g >= 0 ? "+" : neg) + Math.abs(g).toFixed(dpc) + "%");
      }
    }
    return svg;
  }

  function noteOnChart(svg, q) {
    if (!svg) return;
    var card = svg.closest ? (svg.closest(".chart-card") || svg.parentNode) : svg.parentNode;
    var sub = card.querySelector(".chart-sub");
    var msg = "The final “Now” point is the live market price (close of " + (q.d || "") + ", refreshed daily); " +
              "earlier points are fixed. Other valuation figures on this page are as of the dashboard’s build date.";
    if (sub) {
      sub.innerHTML = sub.innerHTML.replace(/Current price matches[^.]*\./i, "").replace(/\s+$/, "") + " " + msg;
    }
  }

  /* ---------- headline price + live line ---------- */
  function updateCover(q) {
    var priceEl = document.querySelector(".price");
    if (!priceEl) return;
    var old = parseNum(priceEl.textContent);
    if (!isFinite(old) || !(q.p / old > 0.25 && q.p / old < 4)) return;
    var snapshot = priceEl.textContent;
    priceEl.textContent = fmt(q.p, snapshot);

    var parts = [];
    if (q.prev) {
      var ch = (q.p / q.prev - 1) * 100;
      parts.push((ch >= 0 ? "▲ +" : "▼ ") + ch.toFixed(2).replace("-", "") + "% on the day");
    }
    if (q.pe) parts.push("trailing P/E " + q.pe.toFixed(1) + "x");
    if (q.fpe) parts.push("forward P/E " + q.fpe.toFixed(1) + "x");

    var line = document.createElement("div");
    line.className = "live-line";
    line.innerHTML = '<span class="live-dot-g"></span><b>Latest</b> · close ' + (q.d || "") +
      (parts.length ? " · " + parts.join(" · ") : "") +
      '<span class="live-fine"> · Yahoo Finance daily close, refreshed each weekday evening (not real-time). P/E is trailing and can differ from the valuation figures below (as of this page’s build date: ' +
      snapshot + ')</span>';
    priceEl.parentNode.insertBefore(line, priceEl.nextSibling);
  }

  function injectStyle() {
    var s = document.createElement("style");
    s.textContent =
      ".live-line{font-size:11.5px;color:#cbd5e1;margin:2px 0 6px;}" +
      ".live-line b{color:#34d399;margin-right:2px;}" +
      ".live-dot-g{display:inline-block;width:7px;height:7px;border-radius:50%;background:#34d399;margin-right:6px;vertical-align:middle;box-shadow:0 0 6px #34d399;}" +
      ".live-fine{color:#7c8aa5;font-size:10.5px;}";
    document.head.appendChild(s);
  }

  fetch(base + "prices.json?v=" + Math.floor(Date.now() / 600000), { cache: "no-store" })
    .then(function (r) { return r.ok ? r.json() : null; })
    .then(function (data) {
      var q = data && data.quotes && data.quotes[slug];
      if (!q || !isFinite(q.p)) return;
      var age = data.asOf ? (Date.now() - Date.parse(data.asOf)) / 86400000 : 99;
      if (age > 10) return; // stale file: leave the static page alone
      injectStyle();
      updateCover(q);
      var svg = updateChart(q.p);
      noteOnChart(svg, q);
    })
    .catch(function () { /* silent: static page stays as built */ });
})();
