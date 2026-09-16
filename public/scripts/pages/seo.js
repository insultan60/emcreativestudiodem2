/* Behaviour for /services/seo.

   The reveal, headline split, nav shadow and FAQ accordion are the same
   behaviours as /packages (public/scripts/pages/packages.js), because this page
   reuses that page's markup and stylesheet.

   There is deliberately no pack accordion here. On /packages the tiers are a
   fixed-height horizontal accordion; these tiers carry their full scope, which
   that row would clip, so the stylesheet lays them out three-up and always
   open. The cards are <article> elements, not buttons, and need no script.

   The audience toggle at the bottom is the only thing unique to this route. */
(() => {
'use strict';

/* reveal on scroll */
const io = new IntersectionObserver((es) => {
  es.forEach(e => {
    if (!e.isIntersecting) return;
    const sibs = [...e.target.parentElement.querySelectorAll('[data-rise]')];
    e.target.style.transitionDelay = Math.min(sibs.indexOf(e.target), 4) * 70 + 'ms';
    e.target.classList.add('in');
    io.unobserve(e.target);
  });
}, {rootMargin:'0px 0px -12% 0px', threshold:.12});
/* Elements inside the hidden plan set never intersect, so they stay observed
   and animate in the first time their set is switched on. */
document.querySelectorAll('[data-rise]').forEach(el => io.observe(el));

/* headline: split into words, each masked up on a stagger */
const hl = document.querySelector('[data-words]');
if (hl) {
  const walk = node => {
    const out = [];
    node.childNodes.forEach(n => {
      if (n.nodeType === 3) {
        n.textContent.split(/(\s+)/).forEach(t => {
          if (!t.trim()) { out.push(document.createTextNode(' ')); return; }
          const w = document.createElement('span'); w.className = 'w';
          const i = document.createElement('i'); i.textContent = t;
          w.appendChild(i); out.push(w);
        });
      } else {
        const clone = n.cloneNode(false);
        walk(n).forEach(c => clone.appendChild(c));
        out.push(clone);
      }
    });
    return out;
  };
  const parts = walk(hl);
  hl.textContent = '';
  parts.forEach(p => hl.appendChild(p));
  [...hl.querySelectorAll('.w > i')].forEach((i,n) => {
    i.style.animationDelay = (320 + n*52) + 'ms';
  });
  /* the line is held back by html.js-words until this point, so that the
     unsplit text is never painted - see the stylesheet */
  hl.classList.add('words-in');
}

/* nav scroll shadow */
addEventListener('scroll', () => {
  document.body.classList.toggle('scrolled', scrollY > 24);
}, {passive:true});

/* faq accordion — one open at a time */
const faqs = [...document.querySelectorAll('.faq-item')];
faqs.forEach(item => {
  const q = item.querySelector('.faq-item__q');
  q.addEventListener('click', () => {
    const willOpen = item.dataset.open !== 'true';
    faqs.forEach(f => f.dataset.open = 'false');
    item.dataset.open = String(willOpen);
  });
});

/* ------------------------------------------------------------------
   audience toggle — real estate vs everything else
   ------------------------------------------------------------------
   Both plan sets ship in the markup, so a crawler and a visitor with no JS get
   all six tiers rather than an empty pricing page. The `js-seg` class on <html>
   is what actually lets the stylesheet hide a set, and it is only added here,
   once we know the switching works. Two sections carry .plan-set blocks (the
   cards and the comparison tables) and both follow the same choice. */
const seg = document.getElementById('seg');
const sets = [...document.querySelectorAll('.plan-set[data-set]')];

if (seg && sets.length) {
  const tabs = [...seg.querySelectorAll('.seg__btn')];

  const show = (name) => {
    sets.forEach(s => s.classList.toggle('plan-set--off', s.dataset.set !== name));
    tabs.forEach(t => t.setAttribute('aria-selected', String(t.dataset.set === name)));
  };

  document.documentElement.classList.add('js-seg');
  show(tabs.find(t => t.getAttribute('aria-selected') === 'true')?.dataset.set || tabs[0].dataset.set);

  tabs.forEach(t => t.addEventListener('click', () => show(t.dataset.set)));

  /* left/right arrows move between tracks, which is what a tablist is expected
     to do once role="tab" is on the buttons */
  seg.addEventListener('keydown', (e) => {
    const dir = e.key === 'ArrowRight' ? 1 : e.key === 'ArrowLeft' ? -1 : 0;
    if (!dir) return;
    e.preventDefault();
    const i = tabs.findIndex(t => t.getAttribute('aria-selected') === 'true');
    const next = tabs[(i + dir + tabs.length) % tabs.length];
    show(next.dataset.set);
    next.focus();
  });

  /* /services/seo#general opens straight onto the non-real-estate plans, which
     makes the track linkable from an email or a proposal */
  const wanted = location.hash.replace('#', '');
  if (tabs.some(t => t.dataset.set === wanted)) show(wanted);
}

})();
