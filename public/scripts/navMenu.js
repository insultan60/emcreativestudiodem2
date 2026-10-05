/* ==================================================================
   MOBILE MENU — full-screen panel that slides in from the right.

   The nav's own link list cannot become a real full-screen panel: .nav
   carries a transform and .nav-pill a backdrop-filter, and either one turns
   position:fixed into "fixed to that box", so the panel stayed pill-sized.
   This builds a separate panel on <body> from the same links instead.

   Open/closed is still the body.nav-open class that main.js / nav.js already
   own (brand tap, tap-away, Escape, link clicks); this only adds the panel,
   a visible menu button in the pill, and a scroll lock. Desktop never sees
   either: both are display:none above 860px in app/mobile.css.
   ================================================================== */
(() => {
  if (window.__navMenu) return;
  const pill = document.querySelector('.nav .nav-pill');
  const brand = document.querySelector('.nav .brand');
  const links = [...document.querySelectorAll('.nav .nav-links a')];
  if (!pill || !brand || !links.length) return;
  window.__navMenu = true;

  /* menu button in the pill: the brand already toggles the menu, but nothing
     about a logo says "menu" */
  const btn = document.createElement('button');
  btn.type = 'button';
  btn.className = 'nav-burger';
  btn.setAttribute('aria-label', 'Open menu');
  btn.setAttribute('aria-controls', 'mnav');
  btn.innerHTML = '<span></span><span></span>';
  btn.addEventListener('click', () => brand.click());
  pill.appendChild(btn);

  const here = location.pathname.replace(/\/$/, '') || '/';
  const panel = document.createElement('div');
  panel.id = 'mnav';
  panel.className = 'mnav';
  panel.setAttribute('role', 'dialog');
  panel.setAttribute('aria-modal', 'true');
  panel.setAttribute('aria-label', 'Menu');
  panel.innerHTML =
    '<nav class="mnav__links" aria-label="Primary">' +
    links.map((a, i) => {
      const href = a.getAttribute('href');
      const cur = href.replace(/\/$/, '') === here ? ' aria-current="page"' : '';
      return '<a href="' + href + '" style="--i:' + i + '"' + cur + '>' +
        '<span class="mnav__no">' + String(i + 1).padStart(2, '0') + '</span>' +
        a.textContent.trim() + '</a>';
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
  panel.querySelectorAll('a').forEach(a => a.addEventListener('click', close));

  /* keep the button label and the page scroll in step with the open state */
  const sync = () => {
    const open = document.body.classList.contains('nav-open');
    btn.setAttribute('aria-label', open ? 'Close menu' : 'Open menu');
    btn.setAttribute('aria-expanded', open ? 'true' : 'false');
    document.documentElement.classList.toggle('mnav-lock',
      open && window.matchMedia('(max-width:860px)').matches);
  };
  new MutationObserver(sync).observe(document.body, { attributes: true, attributeFilter: ['class'] });
  sync();
})();
