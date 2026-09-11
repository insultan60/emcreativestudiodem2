/* Behaviour for /blog, lifted from em-creative-studio-blog_2.html. */
(() => {
'use strict';
const RM = matchMedia('(prefers-reduced-motion: reduce)').matches;
const FINE = matchMedia('(hover:hover) and (pointer:fine)').matches;

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

/* category filters */
const filters = [...document.querySelectorAll('.filter')];
const cards = [...document.querySelectorAll('.post-card')];
const countEl = document.querySelector('[data-count]');
const plural = n => n === 1 ? 'story' : 'stories';

filters.forEach(btn => {
  btn.addEventListener('click', () => {
    const cat = btn.dataset.filter;
    filters.forEach(f => f.setAttribute('aria-pressed', String(f === btn)));
    let shown = 0;
    cards.forEach(card => {
      const match = cat === 'all' || card.dataset.cat === cat;
      card.classList.toggle('is-hidden', !match);
      if (match) shown++;
    });
    if (countEl) {
      countEl.textContent = cat === 'all'
        ? `Showing all ${shown} ${plural(shown)}`
        : `Showing ${shown} ${plural(shown)} in ${btn.textContent.trim()}`;
    }
  });
});

})();
