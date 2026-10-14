/* Lumen template: shared behaviour (nav, drawer, reveals, counters, carousel, demo forms). */
(function(){
  var reduced = window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  var root = document.documentElement;

  /* Scroll reveals (hidden state only exists when .js-reveal was set in head) */
  window.lumenReveal = function(scope){
    if (!root.classList.contains("js-reveal")) return;
    try {
      if (!window.__lumenIO) {
        window.__lumenIO = new IntersectionObserver(function(entries){
          entries.forEach(function(e){ if (e.isIntersecting) { e.target.classList.add("is-in"); window.__lumenIO.unobserve(e.target); } });
        }, { rootMargin: "0px 0px -60px 0px" });
      }
      (scope || document).querySelectorAll(".reveal:not(.is-in)").forEach(function(el){ window.__lumenIO.observe(el); });
    } catch (err) { root.classList.remove("js-reveal"); }
  };
  window.lumenReveal();

  /* Nav: transparent over the home hero, frosted once scrolled (inner pages stay solid) */
  var nav = document.querySelector(".nav");
  if (nav && !nav.classList.contains("nav--solid")) {
    var onScroll = function(){ nav.classList.toggle("is-solid", window.scrollY > 40); };
    window.addEventListener("scroll", onScroll, { passive: true }); onScroll();
  }

  /* Drawer */
  var burger = document.querySelector(".nav__burger"), drawer = document.getElementById("sideMenu");
  if (burger && drawer) {
    var closeBtn = drawer.querySelector(".drawer__close");
    var openDrawer = function(){ drawer.hidden = false; void drawer.offsetHeight; drawer.classList.add("is-open"); document.body.style.overflow = "hidden"; burger.setAttribute("aria-expanded","true"); closeBtn.focus(); };
    var closeDrawer = function(){ drawer.classList.remove("is-open"); document.body.style.overflow = ""; burger.setAttribute("aria-expanded","false"); setTimeout(function(){ drawer.hidden = true; }, reduced ? 0 : 300); burger.focus(); };
    burger.addEventListener("click", openDrawer);
    drawer.addEventListener("click", function(e){
      if (e.target.closest("[data-drawer-close]")) { closeDrawer(); return; }
      if (e.target.closest("a")) closeDrawer();
    });
    document.addEventListener("keydown", function(e){ if (e.key === "Escape" && !drawer.hidden) closeDrawer(); });
    drawer.querySelectorAll(".drawer__toggle").forEach(function(btn){
      var g = btn.closest(".drawer__group");
      if (g.querySelector('[aria-current="page"]')) { g.classList.add("is-open"); btn.setAttribute("aria-expanded","true"); }
      btn.addEventListener("click", function(){ var o = g.classList.toggle("is-open"); btn.setAttribute("aria-expanded", String(o)); });
    });
  }

  /* Eased stat counters */
  var nums = document.querySelectorAll(".stat__num[data-count]");
  function count(el){
    var target = parseFloat(el.dataset.count), pre = el.dataset.prefix || "", suf = el.dataset.suffix || "", start = null, dur = 1600;
    function step(t){ if (!start) start = t; var p = Math.min((t - start) / dur, 1), v = Math.round(target * (1 - Math.pow(1 - p, 5)));
      el.textContent = pre + v.toLocaleString("en-US") + suf; if (p < 1) requestAnimationFrame(step); }
    requestAnimationFrame(step);
  }
  if (nums.length && !reduced && "IntersectionObserver" in window) {
    var cio = new IntersectionObserver(function(es){ es.forEach(function(e){ if (e.isIntersecting) { count(e.target); cio.unobserve(e.target); } }); }, { threshold: .6 });
    nums.forEach(function(n){ cio.observe(n); });
  }

  /* Testimonial carousel */
  document.querySelectorAll(".carousel").forEach(function(car){
    var slides = car.querySelectorAll(".carousel__slide"), dots = car.querySelector(".carousel__dots"), idx = 0, timer;
    if (!slides.length || !dots) return;
    slides.forEach(function(_, i){
      var b = document.createElement("button"); b.type = "button"; b.setAttribute("role","tab"); b.setAttribute("aria-label","Testimonial " + (i + 1));
      b.addEventListener("click", function(){ go(i); restart(); }); dots.appendChild(b);
    });
    function go(i){
      idx = (i + slides.length) % slides.length;
      slides.forEach(function(s, k){ s.classList.toggle("is-active", k === idx); });
      dots.querySelectorAll("button").forEach(function(d, k){ d.setAttribute("aria-selected", String(k === idx)); });
    }
    function restart(){ clearInterval(timer); if (!reduced) timer = setInterval(function(){ go(idx + 1); }, 7000); }
    car.querySelectorAll(".carousel__btn").forEach(function(b){ b.addEventListener("click", function(){ go(idx + parseInt(b.dataset.dir, 10)); restart(); }); });
    go(0); restart();
  });

  /* Demo forms: never submit, show the preview note */
  window.lumenForms = function(scope){
    (scope || document).querySelectorAll("form[data-demo-form]:not([data-bound])").forEach(function(f){
      f.setAttribute("data-bound", "");
      f.addEventListener("submit", function(e){
        e.preventDefault();
        var s = f.querySelector("[role=status]");
        if (s) { s.textContent = "This is a template preview. Forms connect when your site is built."; s.classList.add("is-note"); }
      });
    });
  };
  window.lumenForms();

  /* Office hours: highlight today */
  var today = new Date().getDay();
  document.querySelectorAll(".hours tr[data-day]").forEach(function(tr){
    if (tr.getAttribute("data-day").split(",").indexOf(String(today)) > -1) tr.classList.add("is-today");
  });
})();
