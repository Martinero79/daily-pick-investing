// ============================================================
// Rendering logic — you shouldn't need to touch this file.
// It reads assets/companies.js and fills in whichever page
// you're on (index.html, archive.html, or view.html).
// ============================================================

function fmtDate(iso) {
  const dt = new Date(iso + "T00:00:00");
  return dt.toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric" });
}

function personalNoteHTML(c) {
  if (!c.personalNote) return "";
  return `
    <div class="personal-note">
      <div class="kicker">Why I picked this one</div>
      <p>${c.personalNote}<span class="signoff">— Maarten</span></p>
    </div>`;
}

// Builds the clickable Industry / Sub-Industry / Special-tag chips for a
// company. Each chip links to archive.html filtered to that label —
// see the "label" query param handling in the archive-page block below.
function labelHref(type, value) {
  return `archive.html?label=${type}:${encodeURIComponent(value)}`;
}

function labelChipsHTML(c) {
  const chips = [];
  if (c.industry) chips.push(`<a class="label-chip industry-chip" href="${labelHref("industry", c.industry)}">${c.industry}</a>`);
  if (c.subIndustry) chips.push(`<a class="label-chip sub-chip" href="${labelHref("sub", c.subIndustry)}">${c.subIndustry}</a>`);
  (c.tags || []).forEach(t => chips.push(`<a class="label-chip tag-chip" href="${labelHref("tag", t)}">${t}</a>`));
  return chips.length ? `<div class="label-row">${chips.join("")}</div>` : "";
}

function cardHTML(c) {
  const martineroChip = (c.martinero !== undefined)
    ? `<span class="score-chip martinero-chip">Martinero ${c.martinero}/100</span>` : "";
  return `
    <div class="company-card" data-href="view.html?c=${encodeURIComponent(c.slug)}">
      <div class="card-top">
        <span class="pill">${c.ticker}</span>
        <span class="card-date">${fmtDate(c.dateFeatured)}</span>
      </div>
      <h3>${c.name}</h3>
      <div class="card-sector">${c.sector}</div>
      ${labelChipsHTML(c)}
      <p class="card-blurb">${c.blurb}</p>
      <div class="card-bottom">
        <span class="chip-row">
          <span class="score-chip">${c.score} criteria met</span>
          ${martineroChip}
        </span>
        <a class="card-link" href="view.html?c=${encodeURIComponent(c.slug)}">View dashboard →</a>
      </div>
    </div>`;
}

// company-card is a <div> (not <a>) because it now contains real <a> label
// chips inside it, and browsers don't allow nested links. Clicking anywhere
// on the card that isn't itself a link navigates to the dashboard instead.
document.addEventListener("click", (e) => {
  if (e.target.closest("a")) return; // let real links (chips, "View dashboard") behave normally
  const card = e.target.closest(".company-card");
  if (card && card.dataset.href) window.location.href = card.dataset.href;
});

document.addEventListener("DOMContentLoaded", () => {
  const hasData = typeof COMPANIES !== "undefined" && COMPANIES.length > 0;

  // ---- Homepage hero: most recently added company ----
  const heroEl = document.getElementById("today-highlight");
  if (heroEl) {
    if (!hasData) {
      heroEl.innerHTML = `<div class="kicker">No highlight yet</div><h1>Add your first company</h1><p class="hero-blurb">Edit assets/companies.js to add today's pick.</p>`;
    } else {
      const c = COMPANIES[COMPANIES.length - 1];
      heroEl.innerHTML = `
        <div class="kicker">Today's Highlight — ${fmtDate(c.dateFeatured)}</div>
        <h1>${c.name}</h1>
        <div class="badge-row">
          <span class="pill">${c.ticker}</span>
          <span class="pill pill-muted">${c.sector}</span>
        </div>
        ${labelChipsHTML(c)}
        <p class="hero-blurb">${c.blurb}</p>
        <div class="hero-stats">
          <div class="hero-stat"><div class="stat-label">Price</div><div class="stat-value">${c.price}</div></div>
          <div class="hero-stat"><div class="stat-label">Screen Score</div><div class="stat-value">${c.score}</div></div>
          ${c.martinero !== undefined ? `<div class="hero-stat"><div class="stat-label">Martinero Index</div><div class="stat-value stat-value-martinero">${c.martinero}/100</div></div>` : ""}
        </div>
        ${personalNoteHTML(c)}
        <a class="btn" href="view.html?c=${encodeURIComponent(c.slug)}">View full dashboard →</a>`;
    }
  }

  // ---- Homepage: recently featured strip (up to 4, excluding today's) ----
  const recentEl = document.getElementById("recent-list");
  if (recentEl) {
    const recent = hasData ? COMPANIES.slice(0, -1).slice(-4).reverse() : [];
    recentEl.innerHTML = recent.length
      ? recent.map(cardHTML).join("")
      : `<p class="muted">More companies will show up here as they're added.</p>`;
  }

  // ---- Archive page: everything, newest first — filterable by label ----
  const archiveEl = document.getElementById("archive-list");
  if (archiveEl) {
    const all = hasData ? [...COMPANIES].reverse() : [];

    // Parse ?label=type:value (type is "industry", "sub", or "tag")
    const params = new URLSearchParams(window.location.search);
    const labelParam = params.get("label");
    let activeType = null, activeValue = null;
    if (labelParam) {
      const idx = labelParam.indexOf(":");
      if (idx > -1) {
        activeType = labelParam.slice(0, idx);
        activeValue = decodeURIComponent(labelParam.slice(idx + 1));
      }
    }

    // Browse-by-label panel: every Industry / Sub-Industry / Special tag
    // in use, each clickable, with a count and highlighted if active.
    const browseEl = document.getElementById("browse-panel");
    if (browseEl && hasData) {
      const industries = new Map(), subs = new Map(), tags = new Map();
      COMPANIES.forEach(c => {
        if (c.industry) industries.set(c.industry, (industries.get(c.industry) || 0) + 1);
        if (c.subIndustry) subs.set(c.subIndustry, (subs.get(c.subIndustry) || 0) + 1);
        (c.tags || []).forEach(t => tags.set(t, (tags.get(t) || 0) + 1));
      });
      const chipGroup = (map, type, cls) => [...map.entries()]
        .sort((a, b) => b[1] - a[1] || a[0].localeCompare(b[0]))
        .map(([name, count]) => {
          const active = activeType === type && activeValue === name;
          return `<a class="label-chip ${cls}${active ? " active" : ""}" href="${labelHref(type, name)}">${name} <span class="chip-count">${count}</span></a>`;
        }).join("");
      browseEl.innerHTML = `
        <div class="browse-group"><span class="browse-label">Industry</span>${chipGroup(industries, "industry", "industry-chip")}</div>
        <div class="browse-group"><span class="browse-label">Sub-Industry</span>${chipGroup(subs, "sub", "sub-chip")}</div>
        ${tags.size ? `<div class="browse-group"><span class="browse-label">Special</span>${chipGroup(tags, "tag", "tag-chip")}</div>` : ""}
      `;
    }

    // Apply the filter (if any) and show a banner explaining it
    let filtered = all;
    const bannerEl = document.getElementById("filter-banner");
    if (activeType && activeValue) {
      filtered = all.filter(c => {
        if (activeType === "industry") return c.industry === activeValue;
        if (activeType === "sub") return c.subIndustry === activeValue;
        if (activeType === "tag") return (c.tags || []).includes(activeValue);
        return true;
      });
      if (bannerEl) {
        bannerEl.innerHTML = `<div class="filter-banner">Showing <b>${activeValue}</b> — ${filtered.length} compan${filtered.length === 1 ? "y" : "ies"} · <a href="archive.html">Clear filter</a></div>`;
      }
    } else if (bannerEl) {
      bannerEl.innerHTML = "";
    }

    archiveEl.innerHTML = filtered.length
      ? filtered.map(cardHTML).join("")
      : `<p class="muted">No companies match this label yet.</p>`;
  }

  // ---- View page: load the right dashboard into the iframe ----
  const frame = document.getElementById("dashboard-frame");
  if (frame) {
    const slug = new URLSearchParams(window.location.search).get("c");
    const c = hasData ? COMPANIES.find(x => x.slug === slug) : null;
    const titleEl = document.getElementById("view-title");
    const openEl = document.getElementById("open-new-tab");
    if (c) {
      document.title = c.name + " — Not Your Financial Advisor";
      if (titleEl) titleEl.textContent = c.name;
      if (openEl) openEl.href = c.file;
      frame.src = c.file;
      const noteEl = document.getElementById("view-personal-note");
      if (noteEl) noteEl.innerHTML = personalNoteHTML(c);
      const labelsEl = document.getElementById("view-labels");
      if (labelsEl) labelsEl.innerHTML = labelChipsHTML(c);
    } else if (titleEl) {
      titleEl.textContent = "Company not found";
    }
  }
});
