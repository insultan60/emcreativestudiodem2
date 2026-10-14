/* Reyes Realty Group template preview: shared rendering helpers + site runtime.
   The render helpers are pure string builders so pages can be pre-rendered
   (content stays visible without JS) and re-rendered client-side. */
(function (root) {
  var S = root.Summit = root.Summit || {};

  function esc(s) { return String(s).replace(/[&<>"]/g, function (c) { return { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c]; }); }
  function money(n) { return "$" + Math.round(n).toLocaleString("en-US"); }
  function short(n) { return n >= 1e6 ? "$" + (n / 1e6).toFixed(n >= 1e7 ? 0 : 2).replace(/\.?0+$/, "") + "M" : "$" + Math.round(n / 1e3) + "K"; }
  function num(n) { return Number(n).toLocaleString("en-US"); }
  function icon(id, cls) { return '<svg' + (cls ? ' class="' + cls + '"' : '') + ' aria-hidden="true"><use href="#' + id + '"/></svg>'; }
  function statusClass(s) { return s === "Sold" ? "is-sold" : s === "Pending" ? "is-pending" : s === "Coming Soon" ? "is-soon" : s === "New Listing" ? "is-new" : ""; }
  S.esc = esc; S.money = money; S.short = short; S.num = num; S.icon = icon;

  S.cardHTML = function (L, extra) {
    return '<a class="pl-card' + (extra ? " " + extra : "") + '" href="listing.html?id=' + L.id + '" data-id="' + L.id + '">' +
      '<div class="pl-media"><img src="' + L.images[0] + '" alt="' + esc(L.address) + ', ' + esc(L.neighborhood) + '" loading="lazy" width="800" height="533">' +
      '<span class="badge badge-dark pl-badge ' + statusClass(L.status) + '">' + esc(L.status) + '</span>' +
      '<span class="pl-type">' + esc(L.type) + '</span></div>' +
      '<div class="pl-body"><div class="pl-toprow"><span class="pl-loc">' + esc(L.neighborhood) + '</span><span class="pl-dots" aria-hidden="true">' + icon("i-dots") + '</span></div>' +
      '<span class="pl-price">' + money(L.price) + '</span><h3 class="pl-addr">' + esc(L.address) + '</h3>' +
      '<p class="pl-meta"><span>' + icon("i-bed") + L.beds + ' Beds</span><span>' + icon("i-bath") + L.baths + ' Baths</span><span>' + icon("i-area") + num(L.sqft) + ' SqFt</span></p>' +
      '<span class="pl-link">View Details' + icon("i-arrow") + '</span></div></a>';
  };

  /* Stylized city map (no tiles). Shapes stretch to fit; labels and pins are HTML. */
  S.mapArt = function () {
    return '<svg class="mp-art" viewBox="0 0 1000 700" preserveAspectRatio="none" aria-hidden="true">' +
      '<rect width="1000" height="700" fill="#f1eee6"/>' +
      '<path d="M0 0H390V300C300 320 200 290 120 330 60 360 20 340 0 330Z" fill="#ebe7da"/>' +
      '<path d="M120 60C180 40 260 70 300 120S280 230 210 240 90 200 90 140 100 70 120 60Z" fill="#d6e8cc"/>' +
      '<path d="M600 120C640 100 690 120 700 160S660 230 620 220 570 180 580 150Z" fill="#dcebd2"/>' +
      '<path d="M40 520C90 500 150 530 170 580S130 660 80 650 20 600 30 560Z" fill="#d6e8cc"/>' +
      '<path d="M1000 120C930 150 890 230 900 330S960 520 940 600 980 700 1000 700Z" fill="#cfe3ef"/>' +
      '<path d="M-20 520C150 470 300 560 470 540S720 470 1000 520" stroke="#cfe3ef" stroke-width="26" fill="none" vector-effect="non-scaling-stroke"/>' +
      '<g stroke="#fff" stroke-width="7" fill="none" vector-effect="non-scaling-stroke">' +
      '<path d="M0 90H1000M0 230H1000M0 380H1000M0 620H1000" vector-effect="non-scaling-stroke"/>' +
      '<path d="M110 0V700M300 0V700M460 0V700M620 0V700M780 0V700" vector-effect="non-scaling-stroke"/></g>' +
      '<g stroke="#e6e0d1" stroke-width="2" fill="none">' +
      '<path d="M0 160H1000M0 305H1000M0 450H1000M0 680H1000M205 0V700M380 0V700M540 0V700M700 0V700M860 0V700" vector-effect="non-scaling-stroke"/></g>' +
      '<path d="M-20 420C200 380 380 300 560 320S820 380 1020 250" stroke="#f3c0b6" stroke-width="12" fill="none" vector-effect="non-scaling-stroke"/>' +
      '<path d="M-20 420C200 380 380 300 560 320S820 380 1020 250" stroke="#e79a8c" stroke-width="1.5" fill="none" vector-effect="non-scaling-stroke"/>' +
      '<path d="M560 -10C540 160 600 330 560 710" stroke="#f6dc9a" stroke-width="8" fill="none" vector-effect="non-scaling-stroke"/>' +
      '</svg>' +
      '<span class="mp-label" style="left:24%;top:5%">Hillcrest</span><span class="mp-label" style="left:57%;top:7%">Oak Park</span>' +
      '<span class="mp-label" style="left:83%;top:22%">Lakeview</span><span class="mp-label" style="left:48%;top:44%">Downtown</span>' +
      '<span class="mp-label" style="left:13%;top:55%">Westbrook</span><span class="mp-label" style="left:52%;top:93%">Riverside</span>';
  };
  S.pinHTML = function (L) {
    return '<a class="mp-pin' + (L.status === "Sold" ? " is-sold" : "") + '" href="listing.html?id=' + L.id + '" data-id="' + L.id + '" style="left:' + L.x + '%;top:' + L.y + '%" aria-label="' + esc(L.address) + ', ' + money(L.price) + '">' + short(L.price) + '</a>';
  };

  S.similar = function (L, all) {
    return all.filter(function (o) { return o.id !== L.id; }).map(function (o) {
      var s = (o.neighborhood === L.neighborhood ? 3 : 0) + (o.status !== "Sold" ? 2 : 0) + (o.type === L.type ? 1 : 0) - Math.abs(o.price - L.price) / L.price;
      return { o: o, s: s };
    }).sort(function (a, b) { return b.s - a.s; }).slice(0, 3).map(function (x) { return x.o; });
  };

  S.mortgage = function (price, downPct, rate, years, taxYr, insYr, hoa) {
    var loan = price * (1 - downPct / 100), r = rate / 100 / 12, n = years * 12;
    var pi = r > 0 ? loan * r / (1 - Math.pow(1 + r, -n)) : loan / n;
    var tax = taxYr / 12, ins = insYr / 12;
    return { loan: loan, down: price - loan, pi: pi, tax: tax, ins: ins, hoa: hoa, total: pi + tax + ins + hoa };
  };

  S.listingHTML = function (L, all) {
    var imgs = L.images, n = imgs.length;
    var ins = Math.round(L.price * 0.0035 / 10) * 10;
    var m = S.mortgage(L.price, 20, 6.5, 30, L.tax, ins, L.hoa);
    var pct = function (v) { return (v / m.total * 100).toFixed(1) + "%"; };
    var cells = imgs.slice(0, 3).map(function (src, i) {
      return '<button type="button" class="pd-cell" data-lb="' + i + '" aria-label="Open photo ' + (i + 1) + ' of ' + n + '"><img src="' + src + '" alt="' + esc(L.address) + ' photo ' + (i + 1) + '"' + (i ? ' loading="lazy"' : '') + '>' +
        (i === 2 && n > 3 ? '<span class="pd-more">' + icon("i-camera") + '+' + (n - 3) + ' more</span>' : '') + '</button>';
    }).join("");
    var thumbs = imgs.map(function (src, i) { return '<button type="button" class="pd-thumb" data-lb="' + i + '" aria-label="Open photo ' + (i + 1) + '"><img src="' + src + '" alt="" loading="lazy"></button>'; }).join("");
    var facts = [["Listing ID", "RRG-" + (1000 + L.id)], ["Status", L.status], ["Property type", L.type], ["Neighborhood", L.neighborhood], ["Year built", L.year], ["Interior", num(L.sqft) + " sq ft"], ["Lot size", L.lot], ["Parking", L.garage], ["Price per sq ft", money(L.price / L.sqft)], ["HOA dues", L.hoa ? money(L.hoa) + " / mo" : "None"], ["Est. annual taxes", money(L.tax)], ["Days on market", L.days]];
    var sim = S.similar(L, all);
    return '' +
      '<section class="pd-gallery-wrap"><div class="container">' +
      '<a href="search.html" class="pd-back">' + icon("i-arrow-l") + 'Back to search</a>' +
      '<div class="pd-gallery">' + cells + '<span class="pd-count">' + icon("i-camera") + n + ' photos</span></div>' +
      '<div class="pd-thumbs" aria-label="Photo thumbnails">' + thumbs + '</div></div></section>' +
      '<nav class="pd-subnav" aria-label="Section navigation"><div class="container pd-subnav-inner"><a href="#overview">Overview</a><a href="#features">Features</a><a href="#facts">Facts</a><a href="#payment">Payment</a><a href="#location">Location</a><a href="#similar">Similar Homes</a></div></nav>' +
      '<div class="container pd-layout"><div class="pd-main">' +
      '<div class="pd-head" id="overview"><div><div class="pd-status-row"><span class="pd-status ' + statusClass(L.status) + '">' + esc(L.status) + '</span><span class="pd-listed">' + (L.status === "Sold" ? "Closed after " + L.days + " days" : "Listed " + L.days + (L.days === 1 ? " day" : " days") + " ago") + '</span></div>' +
      '<h1 class="pd-title">' + esc(L.address) + '</h1><p class="pd-addr">' + icon("i-pin") + esc(L.neighborhood) + ' &middot; Reyes Realty Group listing</p></div>' +
      '<div class="pd-price"><b>' + money(L.price) + '</b><span>Est. <span data-calc-mini>' + money(m.total) + '</span>/mo &middot; <a href="#payment">Calculate</a></span></div></div>' +
      '<div class="pd-stats"><div class="pd-stat"><b>' + L.beds + '</b><span>' + icon("i-bed") + 'Beds</span></div><div class="pd-stat"><b>' + L.baths + '</b><span>' + icon("i-bath") + 'Baths</span></div><div class="pd-stat"><b>' + num(L.sqft) + '</b><span>' + icon("i-area") + 'Sq Ft</span></div><div class="pd-stat"><b>' + L.year + '</b><span>' + icon("i-cal") + 'Built</span></div><div class="pd-stat"><b>' + esc(L.type) + '</b><span>' + icon("i-home") + 'Type</span></div></div>' +
      '<div class="pd-actions"><button type="button" class="pd-act" data-act="save">' + icon("i-heart") + '<span>Save</span></button><button type="button" class="pd-act" data-act="share">' + icon("i-share") + 'Share</button><button type="button" class="pd-act" data-act="print">' + icon("i-print") + 'Print</button></div>' +
      '<section class="pd-section"><h2 class="pd-section-title">About This Home</h2><p class="pd-desc">' + esc(L.description) + '</p><p class="pd-desc">Showings are by appointment. Reach out to Daniel for disclosures, recent comparable sales and a walk-through of what similar homes in ' + esc(L.neighborhood) + ' have sold for this year.</p></section>' +
      '<section class="pd-section" id="features"><h2 class="pd-section-title">Features &amp; Amenities</h2><ul class="pd-features">' + L.features.map(function (f) { return '<li>' + icon("i-check") + esc(f) + '</li>'; }).join("") + '</ul></section>' +
      '<section class="pd-section" id="facts"><h2 class="pd-section-title">Facts &amp; Details</h2><dl class="pd-facts">' + facts.map(function (f) { return '<div><dt>' + f[0] + '</dt><dd>' + esc(f[1]) + '</dd></div>'; }).join("") + '</dl></section>' +
      '<section class="pd-section" id="payment"><h2 class="pd-section-title">Mortgage Calculator</h2><div class="calc" data-calc>' +
      '<form class="calc-form" onsubmit="return false"><div class="calc-field"><label for="c-price">Home price</label><div class="calc-input"><span>$</span><input id="c-price" type="number" inputmode="numeric" min="0" step="1000" value="' + L.price + '"></div></div>' +
      '<div class="calc-field"><label for="c-down">Down payment <b data-out="down">20% &middot; ' + money(m.down) + '</b></label><input id="c-down" type="range" min="0" max="60" step="1" value="20"></div>' +
      '<div class="calc-row"><div class="calc-field"><label for="c-rate">Interest rate</label><div class="calc-input"><input id="c-rate" type="number" min="0" max="20" step="0.05" value="6.5"><span>%</span></div></div>' +
      '<div class="calc-field"><label for="c-term">Loan term</label><select id="c-term"><option value="30">30-year fixed</option><option value="20">20-year fixed</option><option value="15">15-year fixed</option></select></div></div>' +
      '<div class="calc-row calc-row3"><div class="calc-field"><label for="c-tax">Taxes / yr</label><div class="calc-input"><span>$</span><input id="c-tax" type="number" min="0" step="100" value="' + L.tax + '"></div></div>' +
      '<div class="calc-field"><label for="c-ins">Insurance / yr</label><div class="calc-input"><span>$</span><input id="c-ins" type="number" min="0" step="100" value="' + ins + '"></div></div>' +
      '<div class="calc-field"><label for="c-hoa">HOA / mo</label><div class="calc-input"><span>$</span><input id="c-hoa" type="number" min="0" step="10" value="' + L.hoa + '"></div></div></div></form>' +
      '<div class="calc-out"><p class="calc-label">Estimated monthly payment</p><p class="calc-total" data-out="total">' + money(m.total) + '</p>' +
      '<div class="calc-bar" aria-hidden="true"><i class="c1" style="width:' + pct(m.pi) + '"></i><i class="c2" style="width:' + pct(m.tax) + '"></i><i class="c3" style="width:' + pct(m.ins) + '"></i><i class="c4" style="width:' + pct(m.hoa) + '"></i></div>' +
      '<ul class="calc-legend"><li><i class="c1"></i>Principal &amp; interest<b data-out="pi">' + money(m.pi) + '</b></li><li><i class="c2"></i>Property taxes<b data-out="tax">' + money(m.tax) + '</b></li><li><i class="c3"></i>Home insurance<b data-out="ins">' + money(m.ins) + '</b></li><li><i class="c4"></i>HOA dues<b data-out="hoa">' + money(m.hoa) + '</b></li></ul>' +
      '<p class="calc-loan">Loan amount <b data-out="loan">' + money(m.loan) + '</b></p><p class="calc-note">Estimates only. Your lender will confirm rates and costs.</p></div></div></section>' +
      '<section class="pd-section" id="location"><h2 class="pd-section-title">Location</h2><p class="pd-addr">' + esc(L.address) + ', ' + esc(L.neighborhood) + '</p><div class="mp-frame pd-map">' + S.mapArt() + '<span class="mp-pin is-here" style="left:' + L.x + '%;top:' + L.y + '%">' + short(L.price) + '</span></div></section>' +
      '</div>' +
      '<aside class="pd-sidebar"><div class="pd-agent-box" id="tour"><div class="pd-agent-top"><img src="img/agent.jpg" alt="Daniel Reyes" loading="lazy"><div><p class="pd-agent-name">Daniel Reyes</p><p class="pd-agent-role">Realtor&reg; &amp; Founder, Reyes Realty Group</p><a href="tel:5550100142" class="pd-agent-phone">' + icon("i-call") + '(555) 010-0142</a></div></div>' +
      '<h2 class="pd-form-title">Schedule a Tour</h2>' +
      '<form class="pd-form demo-form" novalidate><div class="seg" role="radiogroup" aria-label="Tour type"><label><input type="radio" name="tour" value="in-person" checked><span>In person</span></label><label><input type="radio" name="tour" value="video"><span>Video chat</span></label></div>' +
      '<div class="pd-form-row"><div class="field"><label for="t-date">Date</label><input id="t-date" type="date"></div><div class="field"><label for="t-time">Time</label><select id="t-time"><option>Morning</option><option>Midday</option><option>Afternoon</option><option>Evening</option></select></div></div>' +
      '<div class="field"><label for="t-name">Full name <span>*</span></label><input id="t-name" type="text" placeholder="Jane Smith" autocomplete="off"></div>' +
      '<div class="field"><label for="t-email">Email <span>*</span></label><input id="t-email" type="email" placeholder="jane@email.com" autocomplete="off"></div>' +
      '<div class="field"><label for="t-phone">Phone</label><input id="t-phone" type="tel" placeholder="(555) 000-0000" autocomplete="off"></div>' +
      '<div class="field"><label for="t-msg">Message</label><textarea id="t-msg" rows="3">I would like to see ' + esc(L.address) + '.</textarea></div>' +
      '<button type="submit" class="btn btn-primary pd-submit"><span>Request a Tour</span>' + icon("i-arrow", "arr") + '</button><a href="contact.html" class="btn btn-secondary pd-submit">Ask a Question</a>' +
      '<p class="form-status" role="status" aria-live="polite"></p></form></div></aside></div>' +
      '<section class="pd-similar" id="similar"><div class="container"><div class="pd-similar-head"><h2 class="section-title">Similar Homes</h2><a href="search.html" class="btn btn-secondary"><span>View All Homes</span>' + icon("i-arrow", "arr") + '</a></div><div class="prop-grid">' + sim.map(function (o) { return S.cardHTML(o); }).join("") + '</div></div></section>';
  };

  if (typeof document === "undefined") return;

  /* ===================== runtime ===================== */
  var reduce = root.matchMedia && matchMedia("(prefers-reduced-motion: reduce)").matches;
  var fine = root.matchMedia && matchMedia("(pointer: fine)").matches;
  var $ = function (s, c) { return (c || document).querySelector(s); };
  var $$ = function (s, c) { return Array.prototype.slice.call((c || document).querySelectorAll(s)); };

  function toast(msg) {
    var t = $("#toast"); if (!t) { t = document.createElement("div"); t.id = "toast"; t.className = "toast"; t.setAttribute("role", "status"); document.body.appendChild(t); }
    t.textContent = msg; t.classList.add("is-show"); clearTimeout(t._h); t._h = setTimeout(function () { t.classList.remove("is-show"); }, 2600);
  }
  S.toast = toast;

  /* header shrink + mobile bar */
  var header = $("#site-header"), hero = $(".hero"), footer = $(".site-footer"), bar = $("#mobile-cta");
  function onScroll() {
    var y = root.scrollY || 0;
    if (header) header.classList.toggle("is-scrolled", y > 24);
    if (!bar) return;
    var past = hero ? hero.getBoundingClientRect().bottom < 0 : y > 420;
    var footVis = footer && footer.getBoundingClientRect().top < innerHeight;
    bar.classList.toggle("is-visible", past && !footVis);
  }
  addEventListener("scroll", onScroll, { passive: true }); onScroll();

  /* drawer */
  var drawer = $("#side-drawer"), scrim = $("#side-scrim"), toggle = $("#menu-toggle");
  function setMenu(open) {
    if (!drawer) return;
    drawer.classList.toggle("is-open", open); scrim.classList.toggle("is-open", open);
    toggle.setAttribute("aria-expanded", open); document.body.style.overflow = open ? "hidden" : "";
  }
  if (toggle) {
    toggle.addEventListener("click", function () { setMenu(!drawer.classList.contains("is-open")); });
    $("#side-close").addEventListener("click", function () { setMenu(false); });
    scrim.addEventListener("click", function () { setMenu(false); });
    drawer.addEventListener("click", function (e) { if (e.target.closest("a")) setMenu(false); });
  }
  document.addEventListener("keydown", function (e) { if (e.key === "Escape") setMenu(false); });

  /* reveal */
  function observeReveals(scope) {
    var reveals = $$(".reveal:not(.is-visible)", scope);
    if (reduce || !("IntersectionObserver" in root)) { reveals.forEach(function (el) { el.classList.add("is-visible"); }); return; }
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (en) { if (en.isIntersecting) { en.target.classList.add("is-visible"); io.unobserve(en.target); } });
    }, { threshold: 0.12, rootMargin: "0px 0px -6% 0px" });
    reveals.forEach(function (el) { io.observe(el); });
    setTimeout(function () { reveals.forEach(function (el) { if (el.getBoundingClientRect().top < innerHeight) el.classList.add("is-visible"); }); }, 1200);
  }
  observeReveals();

  /* testimonials carousel (home) */
  var items = $$(".t-item"), dots = $$(".t-dot"), cur = 0, timer = null;
  if (items.length && $("#t-prev")) {
    var go = function (i) {
      cur = (i + items.length) % items.length;
      items.forEach(function (el, k) { el.classList.toggle("is-active", k === cur); });
      dots.forEach(function (el, k) { el.classList.toggle("is-active", k === cur); el.setAttribute("aria-selected", k === cur); });
    };
    var stop = function () { if (timer) clearInterval(timer); timer = null; };
    var start = function () { if (reduce) return; stop(); timer = setInterval(function () { go(cur + 1); }, 6000); };
    $("#t-prev").addEventListener("click", function () { go(cur - 1); start(); });
    $("#t-next").addEventListener("click", function () { go(cur + 1); start(); });
    dots.forEach(function (d, k) { d.addEventListener("click", function () { go(k); start(); }); });
    var stage = $("#t-stage"); stage.addEventListener("mouseenter", stop); stage.addEventListener("mouseleave", start);
    start();
  }

  /* demo forms (delegated so re-rendered forms work too) */
  document.addEventListener("submit", function (e) {
    var f = e.target; if (!f.classList || !f.classList.contains("demo-form")) return;
    e.preventDefault();
    var s = $(".form-status", f);
    if (s) s.textContent = "This is a template preview. Forms connect when your site is built.";
  });

  /* ===================== search page ===================== */
  var app = $("#search-app");
  if (app && root.LISTINGS) (function () {
    var ALL = root.LISTINGS, PAGE = 8, shown = PAGE;
    var f = { q: $("#f-q"), min: $("#f-min"), max: $("#f-max"), beds: $("#f-beds"), baths: $("#f-baths"), type: $("#f-type"), status: $("#f-status"), sort: $("#f-sort") };
    var grid = $("#results-grid"), pins = $("#map-pins"), count = $("#results-count"), more = $("#load-more"), empty = $("#empty-state"), chips = $("#active-chips");
    try {
      var p = new URLSearchParams(location.search);
      Object.keys(f).forEach(function (k) { if (p.get(k) != null) f[k].value = p.get(k); });
    } catch (err) {}
    function results() {
      var q = f.q.value.trim().toLowerCase(), min = +f.min.value || 0, max = +f.max.value || Infinity, beds = +f.beds.value || 0, baths = +f.baths.value || 0, type = f.type.value, st = f.status.value;
      var r = ALL.filter(function (L) {
        if (q && (L.address + " " + L.neighborhood + " " + L.type + " " + L.features.join(" ")).toLowerCase().indexOf(q) === -1) return false;
        if (L.price < min || L.price > max) return false;
        if (L.beds < beds || L.baths < baths) return false;
        if (type && L.type !== type) return false;
        if (st === "active" && L.status === "Sold") return false;
        if (st === "sold" && L.status !== "Sold") return false;
        return true;
      });
      var s = f.sort.value;
      var cmp = { "price-asc": function (a, b) { return a.price - b.price; }, "price-desc": function (a, b) { return b.price - a.price; }, "newest": function (a, b) { return a.days - b.days; }, "sqft-desc": function (a, b) { return b.sqft - a.sqft; }, "beds-desc": function (a, b) { return b.beds - a.beds || b.price - a.price; } }[s];
      return cmp ? r.slice().sort(cmp) : r;
    }
    function render() {
      var r = results(), vis = r.slice(0, shown);
      grid.innerHTML = vis.map(function (L) { return S.cardHTML(L); }).join("");
      pins.innerHTML = r.map(S.pinHTML).join("");
      count.textContent = r.length + (r.length === 1 ? " home" : " homes") + (r.length > vis.length ? " · showing " + vis.length : "");
      more.hidden = r.length <= vis.length;
      empty.hidden = r.length > 0;
      var labels = { min: "Min ", max: "Max " }, active = [];
      ["q", "min", "max", "beds", "baths", "type", "status"].forEach(function (k) {
        if (!f[k].value) return;
        var el = f[k], txt = el.tagName === "SELECT" ? el.options[el.selectedIndex].text : "“" + el.value + "”";
        active.push('<button type="button" class="chip" data-clear="' + k + '">' + (labels[k] || "") + S.esc(txt) + icon("i-x") + '</button>');
      });
      chips.innerHTML = active.join("");
      chips.hidden = !active.length;
      try { var u = new URLSearchParams(); Object.keys(f).forEach(function (k) { if (f[k].value) u.set(k, f[k].value); }); history.replaceState(null, "", location.pathname + (u.toString() ? "?" + u : "")); } catch (err) {}
    }
    var deb;
    Object.keys(f).forEach(function (k) {
      f[k].addEventListener(k === "q" ? "input" : "change", function () { shown = PAGE; clearTimeout(deb); deb = setTimeout(render, k === "q" ? 140 : 0); });
    });
    $("#filter-form").addEventListener("submit", function (e) { e.preventDefault(); render(); });
    more.addEventListener("click", function () { shown += PAGE; render(); });
    function reset() { Object.keys(f).forEach(function (k) { if (k !== "sort") f[k].value = ""; }); shown = PAGE; render(); }
    $$("[data-reset]").forEach(function (b) { b.addEventListener("click", reset); });
    chips.addEventListener("click", function (e) { var b = e.target.closest("[data-clear]"); if (!b) return; f[b.getAttribute("data-clear")].value = ""; shown = PAGE; render(); });
    /* card <-> pin highlight */
    function hl(id, on) { $$('[data-id="' + id + '"]', app).forEach(function (el) { el.classList.toggle("is-hl", on); }); }
    app.addEventListener("mouseover", function (e) { var t = e.target.closest("[data-id]"); if (t) hl(t.getAttribute("data-id"), true); });
    app.addEventListener("mouseout", function (e) { var t = e.target.closest("[data-id]"); if (t) hl(t.getAttribute("data-id"), false); });
    /* list / map view */
    $$(".view-btn").forEach(function (b) {
      b.addEventListener("click", function () {
        var v = b.getAttribute("data-view");
        $$(".view-btn").forEach(function (x) { x.classList.toggle("is-active", x === b); x.setAttribute("aria-selected", x === b); });
        app.classList.toggle("is-map", v === "map");
      });
    });
    /* mobile filter toggle */
    var ft = $("#filters-toggle");
    if (ft) ft.addEventListener("click", function () { var o = app.classList.toggle("filters-open"); ft.setAttribute("aria-expanded", o); });
    render();
  })();

  /* ===================== listing page ===================== */
  var pd = $("#pd-root");
  if (pd && root.LISTINGS) (function () {
    var ALL = root.LISTINGS, id = 1;
    try { id = parseInt(new URLSearchParams(location.search).get("id"), 10) || 1; } catch (err) {}
    var L = ALL.filter(function (x) { return x.id === id; })[0] || ALL[0];
    if (String(L.id) !== pd.getAttribute("data-id")) { pd.innerHTML = S.listingHTML(L, ALL); pd.setAttribute("data-id", L.id); }
    document.title = L.address + " | " + S.money(L.price) + " | Summit Template";
    var bc = $("#pd-crumb"); if (bc) bc.textContent = L.address;

    /* lightbox */
    var lb = document.createElement("div"); lb.className = "pd-lightbox"; lb.hidden = true; lb.setAttribute("role", "dialog"); lb.setAttribute("aria-modal", "true"); lb.setAttribute("aria-label", "Photo gallery");
    lb.innerHTML = '<span class="pd-lb-counter"></span><button type="button" class="pd-lb-close" aria-label="Close gallery"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><path d="M18 6 6 18M6 6l12 12"/></svg></button>' +
      '<button type="button" class="pd-lb-nav pd-lb-prev" aria-label="Previous photo">' + icon("i-arrow-l") + '</button><div class="pd-lb-stage"><img class="pd-lb-img" src="' + L.images[0] + '" alt=""></div><button type="button" class="pd-lb-nav pd-lb-next" aria-label="Next photo">' + icon("i-arrow") + '</button>' +
      '<div class="pd-lb-thumbs">' + L.images.map(function (src, i) { return '<button type="button" class="pd-lb-thumb" data-i="' + i + '" aria-label="Photo ' + (i + 1) + '"><img src="' + src + '" alt=""></button>'; }).join("") + '</div>';
    document.body.appendChild(lb);
    var li = 0, lastFocus = null;
    function show(i) {
      li = (i + L.images.length) % L.images.length;
      $(".pd-lb-img", lb).src = L.images[li]; $(".pd-lb-img", lb).alt = L.address + " photo " + (li + 1);
      $(".pd-lb-counter", lb).textContent = (li + 1) + " / " + L.images.length;
      $$(".pd-lb-thumb", lb).forEach(function (t, k) { t.classList.toggle("is-active", k === li); });
    }
    function open(i) { lastFocus = document.activeElement; lb.hidden = false; document.body.style.overflow = "hidden"; show(i); $(".pd-lb-close", lb).focus(); }
    function close() { lb.hidden = true; document.body.style.overflow = ""; if (lastFocus) lastFocus.focus(); }
    pd.addEventListener("click", function (e) { var c = e.target.closest("[data-lb]"); if (c) open(+c.getAttribute("data-lb")); });
    $(".pd-lb-close", lb).addEventListener("click", close);
    $(".pd-lb-prev", lb).addEventListener("click", function () { show(li - 1); });
    $(".pd-lb-next", lb).addEventListener("click", function () { show(li + 1); });
    $(".pd-lb-thumbs", lb).addEventListener("click", function (e) { var t = e.target.closest("[data-i]"); if (t) show(+t.getAttribute("data-i")); });
    lb.addEventListener("click", function (e) { if (e.target === lb) close(); });
    document.addEventListener("keydown", function (e) {
      if (lb.hidden) return;
      if (e.key === "Escape") close(); else if (e.key === "ArrowLeft") show(li - 1); else if (e.key === "ArrowRight") show(li + 1);
    });

    /* mortgage calculator */
    var calc = $("[data-calc]", pd);
    if (calc) {
      var g = function (s) { return $(s, calc); }, out = function (k, v) { $('[data-out="' + k + '"]', calc).textContent = v; };
      var upd = function () {
        var price = +g("#c-price").value || 0, dp = +g("#c-down").value || 0;
        var m = S.mortgage(price, dp, +g("#c-rate").value || 0, +g("#c-term").value, +g("#c-tax").value || 0, +g("#c-ins").value || 0, +g("#c-hoa").value || 0);
        out("down", dp + "% · " + S.money(m.down)); out("total", S.money(m.total)); out("pi", S.money(m.pi)); out("tax", S.money(m.tax)); out("ins", S.money(m.ins)); out("hoa", S.money(m.hoa)); out("loan", S.money(m.loan));
        var mini = $("[data-calc-mini]", pd); if (mini) mini.textContent = S.money(m.total);
        var parts = [m.pi, m.tax, m.ins, m.hoa];
        $$(".calc-bar i", calc).forEach(function (el, k) { el.style.width = (m.total ? parts[k] / m.total * 100 : 0) + "%"; });
      };
      calc.addEventListener("input", upd); calc.addEventListener("change", upd); upd();
    }

    /* actions */
    pd.addEventListener("click", function (e) {
      var a = e.target.closest("[data-act]"); if (!a) return;
      var act = a.getAttribute("data-act");
      if (act === "save") { var on = a.classList.toggle("is-on"); a.querySelector("span").textContent = on ? "Saved" : "Save"; toast(on ? "Saved to your favorites (preview only)" : "Removed from favorites"); }
      if (act === "share") toast("Share links connect when your site is built.");
      if (act === "print") root.print();
    });
    var d = $("#t-date", pd); if (d) { var t = new Date(Date.now() + 864e5); d.value = t.toISOString().slice(0, 10); d.min = new Date().toISOString().slice(0, 10); }
  })();

  if (reduce) return;

  /* hero parallax + hood parallax */
  var heroImg = $("[data-parallax]"), hoods = $$("[data-hood-parallax]");
  if (heroImg || hoods.length) addEventListener("scroll", function () {
    var y = scrollY;
    if (heroImg && y < innerHeight * 1.2) heroImg.style.transform = "translateY(" + (y * -0.08) + "px)";
    hoods.forEach(function (img) {
      var r = img.closest(".hood-card").getBoundingClientRect();
      if (r.bottom < 0 || r.top > innerHeight) return;
      var p = (r.top + r.height / 2 - innerHeight / 2) / innerHeight;
      img.style.transform = "translateY(" + (p * -26).toFixed(2) + "px)";
    });
  }, { passive: true });

  if (!fine) return;

  /* cursor */
  var dot = $(".cursor-dot"), glow = $(".cursor-glow"), mx = -100, my = -100, gx = -100, gy = -100;
  if (dot && glow) {
    document.addEventListener("mousemove", function (e) {
      mx = e.clientX; my = e.clientY; document.body.classList.add("has-cursor");
      dot.style.transform = "translate(" + mx + "px," + my + "px) translate(-50%,-50%)";
    }, { passive: true });
    (function trail() { gx += (mx - gx) * 0.16; gy += (my - gy) * 0.16; glow.style.transform = "translate(" + gx + "px," + gy + "px) translate(-50%,-50%)"; requestAnimationFrame(trail); })();
    document.addEventListener("mouseover", function (e) { glow.classList.toggle("is-hover", !!e.target.closest("a, button, input, label, summary, select")); });
    document.addEventListener("mouseleave", function () { document.body.classList.remove("has-cursor"); });
  }

  /* magnetic buttons */
  $$(".btn-magnetic").forEach(function (b) {
    b.addEventListener("mousemove", function (e) { var r = b.getBoundingClientRect(); b.style.transform = "translate(" + ((e.clientX - (r.left + r.width / 2)) * 0.22) + "px," + ((e.clientY - (r.top + r.height / 2)) * 0.22) + "px)"; });
    b.addEventListener("mouseleave", function () { b.style.transform = ""; });
  });
  /* tilt */
  $$(".tilt-card").forEach(function (c) {
    c.addEventListener("mousemove", function (e) { var r = c.getBoundingClientRect(); var rx = ((e.clientY - r.top) / r.height - 0.5) * -3.5, ry = ((e.clientX - r.left) / r.width - 0.5) * 3.5; c.style.transform = "perspective(900px) rotateX(" + rx.toFixed(2) + "deg) rotateY(" + ry.toFixed(2) + "deg)"; });
    c.addEventListener("mouseleave", function () { c.style.transform = ""; });
  });
})(typeof window !== "undefined" ? window : this);
