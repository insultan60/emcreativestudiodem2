/* ==================================================================
   NAV — the homepage's floating pill, for every other route.

   The pill collapses to a round badge once you are past the fold; clicking
   the badge reopens it in place, and scrolling back to the top resets it.
   Below 860px the links live in a panel the badge opens, so the badge is a
   menu button at any scroll position.

   The homepage runs this same behaviour from inside main.js, which it alone
   loads. This is that block, lifted out so the twelve inner routes get it
   too. It is a no-op on a page with no .nav .brand, and guards against being
   loaded twice.
   ================================================================== */
(() => {
  if (window.__navWired) return;
  const navBrand = document.querySelector('.nav .brand');
  if (!navBrand) return;
  window.__navWired = true;

  const isMobileNav = () => window.matchMedia('(max-width:860px)').matches;
  const close = () => {
    document.body.classList.remove('nav-open');
    navBrand.setAttribute('aria-expanded', 'false');
  };

  navBrand.addEventListener('click', (e) => {
    /* at the top of a desktop page the pill is already open and the badge is
       just the logo link home, so let the click through */
    if (!isMobileNav() && !document.body.classList.contains('nav-tucked')) return;
    e.preventDefault();
    document.body.classList.toggle('nav-open');
    navBrand.setAttribute('aria-expanded',
      document.body.classList.contains('nav-open') ? 'true' : 'false');
  });
  navBrand.setAttribute('aria-expanded', 'false');

  document.querySelectorAll('.nav-links a, .nav .btn--dark').forEach(a => {
    a.addEventListener('click', close);
  });

  /* tapping away closes it — on a phone there is no hover to hint otherwise */
  document.addEventListener('click', (e) => {
    if (!document.body.classList.contains('nav-open')) return;
    if (e.target.closest('.nav-pill')) return;
    close();
  });
  addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && document.body.classList.contains('nav-open')) close();
  });

  /* The routes' own scripts already toggle .scrolled at 24px. The tuck comes
     later, so a nudge of scroll doesn't shut the nav in your face. */
  let queued = false;
  const onScroll = () => {
    queued = false;
    const tucked = scrollY > 160;
    document.body.classList.toggle('nav-tucked', tucked);
    if (!tucked) close();
  };
  addEventListener('scroll', () => {
    if (queued) return;
    queued = true;
    requestAnimationFrame(onScroll);
  }, { passive: true });
  onScroll();
})();
