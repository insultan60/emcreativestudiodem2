/* ==================================================================
   MOBILE MENU — full-screen panel that slides in from the right.

   The nav's own link list cannot become a real full-screen panel: .nav
   carries a transform and .nav-pill a backdrop-filter, and either one turns
   position:fixed into "fixed to that box", so the panel stayed pill-sized.
   This builds a separate panel on <body> from the same links instead.

   Open/closed is still the body.nav-open class that main.js / nav.js already
   own (brand tap, tap-away, Escape, link clicks); this only adds the panel,
   a close button inside it, and a scroll lock. Desktop never sees
   either: both are display:none above 860px in app/mobile.css.
   ================================================================== */
(() => {
  if (window.__navMenu) return;
  const brand = document.querySelector('.nav .brand');
  /* Home leads the panel: on a phone the logo opens the menu rather than
     linking home, so without it there was no way back to the home page. */
  const links = [{ href: '/', label: 'Home' }].concat(
    [...document.querySelectorAll('.nav .nav-links a')]
      .map(a => ({ href: a.getAttribute('href'), label: a.textContent.trim() })));
  if (!brand || links.length < 2) return;
  window.__navMenu = true;

  /* On a phone the nav is the logo badge alone: main.js / nav.js already make
     a tap on it toggle the menu, so it is the menu button. The panel carries
     its own close button, since the badge sits apart from it. */
  const isMobileNav = () => window.matchMedia('(max-width:860px)').matches;
  brand.setAttribute('aria-controls', 'mnav');

  const here = location.pathname.replace(/\/$/, '') || '/';
  const panel = document.createElement('div');
  panel.id = 'mnav';
  panel.className = 'mnav';
  panel.setAttribute('role', 'dialog');
  panel.setAttribute('aria-modal', 'true');
  panel.setAttribute('aria-label', 'Menu');
  panel.innerHTML =
    '<button class="mnav__close" type="button" aria-label="Close menu">' +
      '<span></span><span></span></button>' +
    '<nav class="mnav__links" aria-label="Primary">' +
    links.map(({ href, label }, i) => {
      const cur = (href.replace(/\/$/, '') || '/') === here ? ' aria-current="page"' : '';
      return '<a href="' + href + '" style="--i:' + i + '"' + cur + '>' +
        '<span class="mnav__no">' + String(i + 1).padStart(2, '0') + '</span>' +
        label + '</a>';
    }).join('') +
    '</nav>' +
    '<div class="mnav__foot">' +
      '<a class="mnav__cta" href="/contact">Start a project <span aria-hidden="true">&rarr;</span></a>' +
      '<a class="mnav__contact" href="mailto:info@theemcreativestudio.com">info@theemcreativestudio.com</a>' +
      '<a class="mnav__contact" href="tel:+18184841031">(818) 484-1031</a>' +
    '</div>';
  document.body.appendChild(panel);

  const close = () => {
    document.body.classList.remove('nav-open');
    brand.setAttribute('aria-expanded', 'false');
  };
  panel.querySelectorAll('a, .mnav__close').forEach(a => a.addEventListener('click', close));

  /* keep the badge's label and the page scroll in step with the open state.
     The label only on a phone: on desktop the badge is the logo link home. */
  const sync = () => {
    const open = document.body.classList.contains('nav-open');
    if (isMobileNav()) brand.setAttribute('aria-label', open ? 'Close menu' : 'Open menu');
    else brand.removeAttribute('aria-label');
    document.documentElement.classList.toggle('mnav-lock', open && isMobileNav());
  };
  new MutationObserver(sync).observe(document.body, { attributes: true, attributeFilter: ['class'] });
  sync();
})();
