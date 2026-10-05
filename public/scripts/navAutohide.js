/* ==================================================================
   NAV AUTO-HIDE — phones only (max-width 860px).

   On a phone the tucked nav is a badge pinned over the page, and every
   section heading eventually scrolls straight underneath it. So while you
   are reading down the page it slides out of the way, and it comes back the
   moment you scroll up (the usual "I am looking for the menu" gesture) or
   return near the top. It never hides while its menu is open.

   Loaded once from the root layout, so it covers the home page (main.js) and
   every inner route (nav.js) alike; it only ever toggles body.nav-hidden,
   which the stylesheet reads, and leaves the nav's own state classes alone.
   ================================================================== */
(() => {
  if (window.__navAutohide) return;
  window.__navAutohide = true;

  const mq = window.matchMedia('(max-width:860px)');
  const SHOW_ABOVE = 200; // always visible this close to the top
  const THRESHOLD = 8;    // ignore jitter smaller than this
  let lastY = window.scrollY;
  let queued = false;

  const update = () => {
    queued = false;
    const y = window.scrollY;
    const body = document.body;
    if (!mq.matches || y < SHOW_ABOVE || body.classList.contains('nav-open')) {
      body.classList.remove('nav-hidden');
      lastY = y;
      return;
    }
    const dy = y - lastY;
    if (Math.abs(dy) < THRESHOLD) return;
    body.classList.toggle('nav-hidden', dy > 0);
    lastY = y;
  };

  addEventListener('scroll', () => {
    if (!queued) { queued = true; requestAnimationFrame(update); }
  }, { passive: true });
  mq.addEventListener('change', update);
})();
