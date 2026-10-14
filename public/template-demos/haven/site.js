/* Haven template: shared behavior for every page (header, mobile menu,
   reveal-on-scroll, testimonial carousel, demo forms). */
(function () {
  var d = document, root = d.documentElement, hdr = d.getElementById('hdr'), burger = d.getElementById('burger');
  var fixed = hdr && hdr.hasAttribute('data-solid');
  // header turns solid on scroll (or always, on pages without a photo hero)
  function onScroll() { if (hdr) hdr.classList.toggle('solid', fixed || window.scrollY > 60 || root.classList.contains('menu-open')); }
  window.addEventListener('scroll', onScroll, { passive: true }); onScroll();
  // mobile menu
  function setMenu(open) { root.classList.toggle('menu-open', open); if (burger) burger.setAttribute('aria-expanded', open); d.body.style.overflow = open ? 'hidden' : ''; onScroll(); }
  if (burger) burger.addEventListener('click', function () { setMenu(!root.classList.contains('menu-open')); });
  d.querySelectorAll('#mnav a').forEach(function (a, i) { a.style.transitionDelay = (i * 0.04) + 's'; a.addEventListener('click', function () { setMenu(false); }); });
  d.addEventListener('keydown', function (e) { if (e.key === 'Escape' && root.classList.contains('menu-open')) setMenu(false); });
  window.addEventListener('resize', function () { if (window.innerWidth >= 1024 && root.classList.contains('menu-open')) setMenu(false); });
  // reveal on scroll
  var els = d.querySelectorAll('.rv');
  if ('IntersectionObserver' in window) {
    root.classList.add('js');
    var io = new IntersectionObserver(function (es) { es.forEach(function (e) { if (e.isIntersecting) { var dl = +(e.target.getAttribute('data-d') || 0); e.target.style.transitionDelay = (dl * 0.12) + 's'; e.target.classList.add('in'); io.unobserve(e.target); } }); }, { rootMargin: '0px 0px -50px 0px' });
    els.forEach(function (el) { io.observe(el); });
  }
  // testimonial carousel (home)
  var figs = d.querySelectorAll('#tq figure'), dots = d.querySelectorAll('#tdots button'), cur = 0, timer;
  if (figs.length) {
    var show = function (i) { cur = i; figs.forEach(function (f, k) { f.classList.toggle('on', k === i); }); dots.forEach(function (x, k) { x.classList.toggle('on', k === i); }); };
    var auto = function () { clearInterval(timer); timer = setInterval(function () { show((cur + 1) % figs.length); }, 7000); };
    dots.forEach(function (x, k) { x.addEventListener('click', function () { show(k); auto(); }); }); auto();
  }
  // Available / Sold style tab groups: <div class="tabs" data-tabs> buttons with data-tab="paneId"
  d.querySelectorAll('[data-tabs]').forEach(function (g) {
    var bs = g.querySelectorAll('button[data-tab]');
    bs.forEach(function (b) {
      b.addEventListener('click', function () {
        bs.forEach(function (x) { x.classList.toggle('on', x === b); x.setAttribute('aria-selected', x === b); var p = d.getElementById(x.getAttribute('data-tab')); if (p) p.hidden = x !== b; });
        var p = d.getElementById(b.getAttribute('data-tab')); if (p) { p.querySelectorAll('.rv').forEach(function (r) { r.classList.add('in'); }); }
      });
    });
  });
  // demo forms: never submit, show the preview note
  d.querySelectorAll('form:not([data-live])').forEach(function (f) {
    f.addEventListener('submit', function (e) {
      e.preventDefault();
      var n = f.querySelector('.fnote');
      if (!n) { n = d.createElement('p'); n.className = 'fnote'; n.setAttribute('role', 'status'); n.textContent = 'This is a template preview. Forms connect when your site is built.'; f.appendChild(n); }
      n.hidden = false;
    });
  });
  d.querySelectorAll('.dots').forEach(function (b) { b.addEventListener('click', function (e) { e.preventDefault(); }); });
})();
