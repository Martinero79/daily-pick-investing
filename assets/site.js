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

function cardHTML(c) {
  const martineroChip = (c.martinero !== undefined)
    ? `<span class="score-chip martinero-chip">Martinero ${c.martinero}/100</span>` : "";
  return `
    <a class="company-card" href="view.html?c=${encodeURIComponent(c.slug)}">
      <div class="card-top">
        <span class="pill">${c.ticker}</span>
        <span class="card-date">${fmtDate(c.dateFeatured)}</span>
      </div>
      <h3>${c.name}</h3>
      <div class="card-sector">${c.sector}</div>
      <p class="card-blurb">${c.blurb}</p>
      <div class="card-bottom">
        <span class="chip-row">
          <span class="score-chip">${c.score} criteria met</span>
          ${martineroChip}
        </span>
        <span class="card-link">View dashboard →</span>
      </div>
    </a>`;
}

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

  // ---- Archive page: everything, newest first ----
  const archiveEl = document.getElementById("archive-list");
  if (archiveEl) {
    const all = hasData ? [...COMPANIES].reverse() : [];
    archiveEl.innerHTML = all.length
      ? all.map(cardHTML).join("")
      : `<p class="muted">No companies added yet.</p>`;
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
    } else if (titleEl) {
      titleEl.textContent = "Company not found";
    }
  }
});
