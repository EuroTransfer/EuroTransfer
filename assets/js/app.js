/* =============================================================================
   EUROTRANSFER — Logique du site
   Rendu partagé (header/footer), cartes, recherche, filtres, tri, pagination.
   ============================================================================= */
(function () {
  "use strict";

  /* ----------------------------- Configuration --------------------------- */
  const CATEGORIES = {
    "Transferts":   { label: "Transferts",            file: "transferts.html",           media: "m-transferts", emoji: "🔁" },
    "Mercato":      { label: "Mercato",               file: "mercato.html",              media: "m-mercato",    emoji: "📝" },
    "Matchs":       { label: "Matchs & Résultats",    file: "matchs.html",               media: "m-matchs",     emoji: "⚽" },
    "Faits divers": { label: "Faits divers",          file: "faits-divers.html",         media: "m-faits",      emoji: "⚠️" },
    "Compétitions": { label: "Compétitions",          file: "competitions.html",         media: "m-compet",     emoji: "🏆" },
    "Locale":       { label: "Actualité locale",      file: "actualites-locales.html",   media: "m-locale",     emoji: "📍" }
  };

  const NAV = [
    { label: "Accueil",                 file: "index.html",              page: "accueil" },
    { label: "Transferts",              file: "transferts.html",         page: "transferts" },
    { label: "Mercato",                 file: "mercato.html",            page: "mercato" },
    { label: "Matchs & Résultats",      file: "matchs.html",             page: "matchs" },
    { label: "Faits divers",            file: "faits-divers.html",       page: "faits-divers" },
    { label: "Compétitions européennes",file: "competitions.html",       page: "competitions" },
    { label: "Actualités locales",      file: "actualites-locales.html", page: "locale" },
    { label: "À propos",                file: "a-propos.html",           page: "apropos" }
  ];

  const PAGE_SIZE = 6;
  const data = (window.ARTICLES || []).slice();

  /* Date de référence = article le plus récent (rend les filtres de date
     cohérents avec les données d'exemple). */
  const REF_TS = data.reduce((m, a) => Math.max(m, ts(a)), 0);

  /* ------------------------------- Utilitaires --------------------------- */
  function ts(a) { return Date.parse(a.date + "T" + (a.time || "00:00") + ":00"); }

  function catMeta(cat) { return CATEGORIES[cat] || { label: cat, media: "m-transferts", emoji: "📰", file: "index.html" }; }

  function esc(s) {
    return String(s == null ? "" : s)
      .replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;").replace(/'/g, "&#39;");
  }

  function formatViews(n) {
    if (n >= 1000) return (n / 1000).toFixed(1).replace(/\.0$/, "") + "k";
    return String(n);
  }

  function articleUrl(a) { return "article.html?id=" + encodeURIComponent(a.id); }

  function mediaHtml(a, extraClass) {
    const m = catMeta(a.category);
    if (a.image) {
      return (
        '<div class="media has-img ' + (extraClass || "") + '">' +
          '<img src="' + esc(a.image) + '" alt="' + esc(a.title) + '" loading="lazy" />' +
        "</div>"
      );
    }
    return (
      '<div class="media ' + m.media + " " + (extraClass || "") + '" data-label="' + esc(a.category) + '">' +
        '<span class="media-emoji">' + m.emoji + "</span>" +
      "</div>"
    );
  }

  function badgeHtml(cat) {
    const cls = cat === "Locale" ? "badge badge-local" : "badge";
    const m = catMeta(cat);
    return '<span class="' + cls + '">' + esc(cat === "Locale" ? "Actu locale" : m.label) + "</span>";
  }

  function sourceMetaHtml(a) {
    return '<span class="src">Source&nbsp;: <b>' + esc(a.source) + "</b></span>";
  }

  /* --------------------------- Composants de rendu ----------------------- */
  function cardHtml(a) {
    return (
      '<article class="card">' +
        '<a href="' + articleUrl(a) + '" class="card-media" aria-label="' + esc(a.title) + '">' +
          mediaHtml(a) +
        "</a>" +
        '<div class="card-body">' +
          '<div class="card-cat">' + badgeHtml(a.category) +
            '<span class="li-meta">' + esc(shortDate(a)) + "</span>" +
          "</div>" +
          '<a href="' + articleUrl(a) + '"><h3>' + esc(a.title) + "</h3></a>" +
          '<p class="card-lead">' + esc(a.lead) + "</p>" +
          '<div class="card-foot">' +
            sourceMetaHtml(a) +
            '<span class="views">👁 ' + formatViews(a.views) + "</span>" +
          "</div>" +
        "</div>" +
      "</article>"
    );
  }

  function listItemHtml(a) {
    return (
      '<a class="list-item" href="' + articleUrl(a) + '">' +
        '<div class="li-media">' + mediaHtml(a) + "</div>" +
        '<div class="li-body">' +
          badgeHtml(a.category) +
          "<h4>" + esc(a.title) + "</h4>" +
          '<div class="li-meta">' + esc(a.dateLabel) + " · " + esc(a.source) + "</div>" +
        "</div>" +
      "</a>"
    );
  }

  function rankItemHtml(a, i) {
    return (
      '<a class="rank-item" href="' + articleUrl(a) + '">' +
        '<span class="rank-num">' + (i + 1) + "</span>" +
        '<div class="rank-body">' +
          "<h4>" + esc(a.title) + "</h4>" +
          '<div class="rank-meta">👁 ' + formatViews(a.views) + " lectures · " + esc(catMeta(a.category).label) + "</div>" +
        "</div>" +
      "</a>"
    );
  }

  function shortDate(a) {
    // "15/07 · 18h30"
    const parts = a.date.split("-");
    return parts[2] + "/" + parts[1] + " · " + (a.time || "").replace(":", "h");
  }

  /* ------------------------------ Header / Footer ------------------------ */
  function buildHeader() {
    const holder = document.getElementById("site-header");
    if (!holder) return;
    const current = document.body.getAttribute("data-page") || "";

    const navLinks = NAV.map(function (n) {
      const active = n.page === current ? " class=\"active\"" : "";
      return '<li><a href="' + n.file + '"' + active + ">" + esc(n.label) + "</a></li>";
    }).join("");

    const tickerItems = data.slice()
      .sort(function (a, b) { return ts(b) - ts(a); })
      .slice(0, 8)
      .map(function (a) { return "<span>" + esc(a.title) + "</span>"; }).join("");

    holder.innerHTML =
      '<div class="ticker">' +
        '<span class="ticker-label">Direct</span>' +
        '<div class="ticker-track">' + tickerItems + tickerItems + "</div>" +
      "</div>" +
      '<header class="site-header">' +
        '<div class="container">' +
          '<div class="topbar">' +
            '<a href="index.html" class="brand"><span class="logo-mark">⚽</span>' +
              '<span><span class="euro">EURO</span><span class="transfer">TRANSFER</span></span></a>' +
            '<div class="header-actions">' +
              '<form class="search-box" role="search" id="header-search">' +
                '<span class="search-icon">🔍</span>' +
                '<input type="search" name="q" placeholder="Rechercher un article..." aria-label="Rechercher" autocomplete="off">' +
              "</form>" +
              '<button class="icon-btn menu-toggle" id="menu-toggle" aria-label="Ouvrir le menu">☰</button>' +
            "</div>" +
          "</div>" +
        "</div>" +
        '<nav class="main-nav" id="main-nav"><div class="container">' +
          '<ul class="nav-list">' + navLinks + "</ul>" +
        "</div></nav>" +
      "</header>" +
      '<div class="nav-backdrop" id="nav-backdrop"></div>';

    // Recherche -> page de résultats
    const form = document.getElementById("header-search");
    form.addEventListener("submit", function (e) {
      e.preventDefault();
      const q = form.querySelector("input").value.trim();
      window.location.href = "recherche.html" + (q ? "?q=" + encodeURIComponent(q) : "");
    });

    // Menu mobile
    const toggle = document.getElementById("menu-toggle");
    const nav = document.getElementById("main-nav");
    const backdrop = document.getElementById("nav-backdrop");
    function closeMenu() { nav.classList.remove("open"); backdrop.classList.remove("show"); }
    toggle.addEventListener("click", function () {
      nav.classList.toggle("open"); backdrop.classList.toggle("show");
    });
    backdrop.addEventListener("click", closeMenu);
  }

  function buildFooter() {
    const holder = document.getElementById("site-footer");
    if (!holder) return;
    const catLinks = Object.keys(CATEGORIES).map(function (c) {
      return '<li><a href="' + CATEGORIES[c].file + '">' + esc(CATEGORIES[c].label) + "</a></li>";
    }).join("");
    const year = new Date().getFullYear();

    holder.innerHTML =
      '<footer class="site-footer"><div class="container">' +
        '<div class="footer-grid">' +
          '<div class="footer-col">' +
            '<div class="footer-brand"><span>EURO</span><span class="transfer">TRANSFER</span></div>' +
            "<p>Média d'information football indépendant. Un espace privé, sans publicité, sans abonnement et sans monétisation, qui rassemble l'actualité du ballon rond issue de sources reconnues et relaie ponctuellement des informations locales.</p>" +
            '<p style="font-size:0.8rem;">Les articles reprenant des informations de médias tiers sont réécrits et citent systématiquement leur source d\'origine.</p>' +
          "</div>" +
          '<div class="footer-col"><h4>Rubriques</h4><ul>' + catLinks + "</ul></div>" +
          '<div class="footer-col"><h4>Le site</h4><ul>' +
            '<li><a href="index.html">Accueil</a></li>' +
            '<li><a href="a-propos.html">À propos</a></li>' +
            '<li><a href="recherche.html">Recherche</a></li>' +
          "</ul></div>" +
          '<div class="footer-col"><h4>Sources citées</h4><ul>' +
            "<li>L'Équipe</li><li>RMC Sport</li><li>Foot Mercato</li>" +
            "<li>Sky Sports</li><li>The Athletic</li><li>Fabrizio Romano</li>" +
          "</ul></div>" +
        "</div>" +
        '<div class="footer-bottom">' +
          "<span>© " + year + " EUROTRANSFER — Projet à but non lucratif, non affilié aux médias cités.</span>" +
          '<span class="no-ads"><b>0</b> publicité · <b>0</b> abonnement · <b>0</b> traceur</span>' +
        "</div>" +
      "</div></footer>";
  }

  function buildToTop() {
    const btn = document.createElement("button");
    btn.className = "to-top";
    btn.setAttribute("aria-label", "Retour en haut");
    btn.innerHTML = "↑";
    document.body.appendChild(btn);
    btn.addEventListener("click", function () { window.scrollTo({ top: 0, behavior: "smooth" }); });
    window.addEventListener("scroll", function () {
      if (window.scrollY > 500) btn.classList.add("show");
      else btn.classList.remove("show");
    }, { passive: true });
  }

  /* ------------------------ Filtres / tri / recherche -------------------- */
  function applyDateFilter(list, range) {
    if (!range || range === "all") return list;
    const day = 86400000;
    const ranges = { today: 1, "7": 7, "30": 30, "90": 90 };
    const d = ranges[range];
    if (!d) return list;
    const min = REF_TS - (d - 1) * day;
    if (range === "today") {
      const refDay = new Date(REF_TS); refDay.setHours(0, 0, 0, 0);
      return list.filter(function (a) { const t = new Date(ts(a)); t.setHours(0, 0, 0, 0); return t.getTime() === refDay.getTime(); });
    }
    return list.filter(function (a) { return ts(a) >= min; });
  }

  function applySearch(list, q) {
    if (!q) return list;
    const needle = q.toLowerCase();
    return list.filter(function (a) {
      return (
        a.title.toLowerCase().indexOf(needle) !== -1 ||
        a.lead.toLowerCase().indexOf(needle) !== -1 ||
        a.category.toLowerCase().indexOf(needle) !== -1 ||
        a.source.toLowerCase().indexOf(needle) !== -1 ||
        (a.body || []).join(" ").toLowerCase().indexOf(needle) !== -1
      );
    });
  }

  function applySort(list, sort) {
    const l = list.slice();
    if (sort === "views") l.sort(function (a, b) { return b.views - a.views; });
    else l.sort(function (a, b) { return ts(b) - ts(a); }); // recent
    return l;
  }

  /* ------------------------------ Page: listing -------------------------- */
  function initListing(opts) {
    opts = opts || {};
    const root = document.getElementById("listing");
    if (!root) return;

    const params = new URLSearchParams(window.location.search);
    const state = {
      cat: opts.category || params.get("cat") || "all",
      q: params.get("q") || "",
      sort: params.get("sort") || "recent",
      date: params.get("date") || "all",
      page: parseInt(params.get("page"), 10) || 1
    };

    // Champ de recherche pré-rempli
    const headerInput = document.querySelector("#header-search input");
    if (headerInput && state.q) headerInput.value = state.q;

    const showCatChips = !opts.category; // uniquement quand la catégorie n'est pas verrouillée

    function render() {
      // 1. filtrage
      let list = data.slice();
      if (opts.category) list = list.filter(function (a) { return a.category === opts.category; });
      else if (state.cat !== "all") list = list.filter(function (a) { return a.category === state.cat; });
      list = applySearch(list, state.q);
      list = applyDateFilter(list, state.date);
      list = applySort(list, state.sort);

      const total = list.length;
      const pages = Math.max(1, Math.ceil(total / PAGE_SIZE));
      if (state.page > pages) state.page = pages;
      const start = (state.page - 1) * PAGE_SIZE;
      const pageItems = list.slice(start, start + PAGE_SIZE);

      // 2. toolbar
      const catChips = showCatChips
        ? '<div class="filters">' +
            chip("all", "Toutes", state.cat === "all") +
            Object.keys(CATEGORIES).map(function (c) {
              return chip(c, CATEGORIES[c].label, state.cat === c);
            }).join("") +
          "</div>"
        : '<div class="filters"></div>';

      const controls =
        '<div class="controls">' +
          (state.q ? '<span class="control-label">Recherche : « ' + esc(state.q) + ' »</span>' : "") +
          '<span class="control-label">Date</span>' +
          '<select class="select" id="f-date">' +
            optionTag("all", "Toutes", state.date) +
            optionTag("today", "Aujourd'hui", state.date) +
            optionTag("7", "7 derniers jours", state.date) +
            optionTag("30", "30 derniers jours", state.date) +
            optionTag("90", "90 derniers jours", state.date) +
          "</select>" +
          '<span class="control-label">Trier</span>' +
          '<select class="select" id="f-sort">' +
            optionTag("recent", "Plus récents", state.sort) +
            optionTag("views", "Plus consultés", state.sort) +
          "</select>" +
        "</div>";

      // 3. résultats
      let body;
      if (total === 0) {
        body =
          '<div class="empty-state">' +
            '<div class="big">🔎</div>' +
            "<h3>Aucun article trouvé</h3>" +
            "<p>Essayez de modifier votre recherche, la catégorie ou la période.</p>" +
          "</div>";
      } else {
        body = '<div class="cards">' + pageItems.map(cardHtml).join("") + "</div>";
      }

      const countLabel = total + (total > 1 ? " articles" : " article");

      root.innerHTML =
        '<div class="toolbar">' + catChips + controls + "</div>" +
        '<div class="section-title">Résultats <span class="count">' + countLabel + "</span></div>" +
        body +
        paginationHtml(state.page, pages);

      // 4. écouteurs
      root.querySelectorAll(".chip").forEach(function (el) {
        el.addEventListener("click", function () {
          state.cat = el.getAttribute("data-val"); state.page = 1; syncUrl(); render();
        });
      });
      const fd = document.getElementById("f-date");
      const fs = document.getElementById("f-sort");
      if (fd) fd.addEventListener("change", function () { state.date = fd.value; state.page = 1; syncUrl(); render(); });
      if (fs) fs.addEventListener("change", function () { state.sort = fs.value; state.page = 1; syncUrl(); render(); });
      root.querySelectorAll(".pagination button[data-page]").forEach(function (el) {
        el.addEventListener("click", function () {
          state.page = parseInt(el.getAttribute("data-page"), 10);
          syncUrl(); render();
          window.scrollTo({ top: root.offsetTop - 120, behavior: "smooth" });
        });
      });
    }

    function chip(val, label, active) {
      return '<button class="chip' + (active ? " active" : "") + '" data-val="' + esc(val) + '">' + esc(label) + "</button>";
    }
    function optionTag(val, label, cur) {
      return '<option value="' + val + '"' + (cur === val ? " selected" : "") + ">" + esc(label) + "</option>";
    }
    function syncUrl() {
      const p = new URLSearchParams();
      if (!opts.category && state.cat !== "all") p.set("cat", state.cat);
      if (state.q) p.set("q", state.q);
      if (state.sort !== "recent") p.set("sort", state.sort);
      if (state.date !== "all") p.set("date", state.date);
      if (state.page > 1) p.set("page", state.page);
      const qs = p.toString();
      history.replaceState(null, "", window.location.pathname + (qs ? "?" + qs : ""));
    }

    render();
  }

  function paginationHtml(page, pages) {
    if (pages <= 1) return "";
    let html = '<div class="pagination">';
    html += '<button data-page="' + (page - 1) + '"' + (page === 1 ? " disabled" : "") + ">‹ Préc.</button>";
    for (let i = 1; i <= pages; i++) {
      html += '<button data-page="' + i + '"' + (i === page ? ' class="active"' : "") + ">" + i + "</button>";
    }
    html += '<button data-page="' + (page + 1) + '"' + (page === pages ? " disabled" : "") + ">Suiv. ›</button>";
    html += "</div>";
    return html;
  }

  /* ------------------------------ Page: accueil -------------------------- */
  function initHome() {
    if (!document.getElementById("home-root")) return;
    const sorted = data.slice().sort(function (a, b) { return ts(b) - ts(a); });

    // Article principal (featured ou le plus récent)
    const hero = data.filter(function (a) { return a.featured; })[0] || sorted[0];

    const heroEl = document.getElementById("home-hero");
    if (heroEl) {
      heroEl.innerHTML =
        '<a class="hero" href="' + articleUrl(hero) + '">' +
          '<div class="hero-media">' + mediaHtml(hero, "") + "</div>" +
          '<div class="hero-content">' +
            '<div class="hero-kicker">' + badgeHtml(hero.category) +
              '<span class="hero-time">🕒 ' + esc(hero.dateLabel) + "</span></div>" +
            "<h2>" + esc(hero.title) + "</h2>" +
            '<p class="hero-lead">' + esc(hero.lead) + "</p>" +
            '<div class="hero-meta meta-line">' + sourceMetaHtml(hero) + "</div>" +
          "</div>" +
        "</a>";
    }

    // Dernières informations (hors hero)
    fill("home-latest", sorted.filter(function (a) { return a.id !== hero.id; }).slice(0, 4).map(cardHtml).join(""));

    // Transferts du jour (Transferts + Mercato récents)
    const transf = sorted.filter(function (a) { return a.category === "Transferts" || a.category === "Mercato"; }).slice(0, 4);
    fill("home-transfers", transf.map(cardHtml).join(""));

    // Matchs récents
    const matchs = sorted.filter(function (a) { return a.category === "Matchs" || a.category === "Compétitions"; }).slice(0, 4);
    fill("home-matches", matchs.map(cardHtml).join(""));

    // Actualité locale
    const locale = sorted.filter(function (a) { return a.category === "Locale"; }).slice(0, 3);
    fill("home-local", locale.map(cardHtml).join(""));

    // Sidebar : les plus lus
    const mostRead = data.slice().sort(function (a, b) { return b.views - a.views; }).slice(0, 6);
    fill("home-mostread", mostRead.map(rankItemHtml).join(""));

    // Sidebar : fil des dernières infos (compact)
    fill("home-feed", sorted.slice(0, 5).map(listItemHtml).join(""));
  }

  function fill(id, html) { const el = document.getElementById(id); if (el) el.innerHTML = html; }

  /* ------------------------------ Page: article -------------------------- */
  function initArticle() {
    const root = document.getElementById("article-root");
    if (!root) return;
    const id = new URLSearchParams(window.location.search).get("id");
    const a = data.filter(function (x) { return x.id === id; })[0];

    if (!a) {
      root.innerHTML =
        '<div class="empty-state"><div class="big">🚫</div><h3>Article introuvable</h3>' +
        '<p>Cet article n\'existe pas ou a été déplacé.</p>' +
        '<p style="margin-top:14px;"><a class="chip active" href="index.html">← Retour à l\'accueil</a></p></div>';
      return;
    }

    document.title = a.title + " — EUROTRANSFER";
    const m = catMeta(a.category);
    const isLocal = a.category === "Locale";
    // Article rédigé par EUROTRANSFER (local OU contenu original signé la rédaction)
    const isOriginal = isLocal || a.source === "Rédaction EUROTRANSFER" || !a.sourceUrl;

    const paragraphs = (a.body || []).map(function (p) { return "<p>" + esc(p) + "</p>"; }).join("");

    const sourceBox = isOriginal
      ? '<div class="source-box">' +
          '<div class="sb-label">' + (isLocal ? "Information locale" : "Article EUROTRANSFER") + "</div>" +
          "<p>Cet article a été rédigé et publié directement par la rédaction d'EUROTRANSFER. Il ne reprend pas l'information d'un média tiers.</p>" +
        "</div>"
      : '<div class="source-box">' +
          '<div class="sb-label">Source originale</div>' +
          "<p>Cet article est une réécriture réalisée par EUROTRANSFER à partir d'une information publiée par <b>" + esc(a.source) + "</b>. Les faits appartiennent au média d'origine ; retrouvez leur publication ci-dessous.</p>" +
          (a.sourceUrl
            ? '<a href="' + esc(a.sourceUrl) + '" target="_blank" rel="noopener noreferrer nofollow">Lire sur ' + esc(a.source) + " ↗</a>"
            : "<span>" + esc(a.source) + "</span>") +
        "</div>";

    const disclaimer = isOriginal
      ? '<div class="disclaimer-inline">Publié par la Rédaction EUROTRANSFER.</div>'
      : '<div class="disclaimer-inline">EUROTRANSFER n\'est pas l\'auteur de l\'information d\'origine. Contenu réécrit à des fins d\'agrégation, sans reproduction intégrale de l\'article source. Crédit : ' + esc(a.source) + ".</div>";

    root.innerHTML =
      '<article class="article-wrap">' +
        '<nav class="breadcrumb"><a href="index.html">Accueil</a><span class="sep">›</span>' +
          '<a href="' + esc(m.file) + '">' + esc(m.label) + "</a><span class=\"sep\">›</span>" +
          "<span>" + esc(a.title.slice(0, 42)) + (a.title.length > 42 ? "…" : "") + "</span></nav>" +
        '<header class="article-header">' +
          badgeHtml(a.category) +
          "<h1>" + esc(a.title) + "</h1>" +
          '<div class="article-meta-bar">' +
            '<span class="mi"><span class="lab">Catégorie&nbsp;:</span> <b>' + esc(m.label) + "</b></span>" +
            '<span class="mi"><span class="lab">Publié le&nbsp;:</span> <b>' + esc(a.dateLabel) + "</b></span>" +
            '<span class="mi"><span class="lab">Source&nbsp;:</span> <b>' + esc(a.source) + "</b></span>" +
            '<span class="mi">👁 ' + formatViews(a.views) + " lectures</span>" +
          "</div>" +
        "</header>" +
        '<div class="article-figure">' + mediaHtml(a, "") + "</div>" +
        '<p class="article-lead">' + esc(a.lead) + "</p>" +
        '<div class="article-body">' + paragraphs + "</div>" +
        sourceBox +
        disclaimer +
      "</article>";

    // Articles liés (même catégorie)
    const related = data.filter(function (x) { return x.category === a.category && x.id !== a.id; })
      .sort(function (x, y) { return ts(y) - ts(x); }).slice(0, 3);
    if (related.length) {
      const rel = document.getElementById("article-related");
      if (rel) {
        rel.innerHTML =
          '<div class="related article-wrap">' +
            '<div class="section-title">À lire aussi</div>' +
            '<div class="cards">' + related.map(cardHtml).join("") + "</div>" +
          "</div>";
      }
    }
  }

  /* -------------------------------- Bootstrap ---------------------------- */
  document.addEventListener("DOMContentLoaded", function () {
    buildHeader();
    buildFooter();
    buildToTop();

    initHome();
    initArticle();

    // Pages listing : lisent leur config depuis data-listing sur #listing
    const listing = document.getElementById("listing");
    if (listing) {
      const cat = listing.getAttribute("data-category") || "";
      initListing(cat ? { category: cat } : {});
    }
  });

  // Expose (pour extension éventuelle)
  window.EUROTRANSFER = { CATEGORIES: CATEGORIES, data: data };
})();
