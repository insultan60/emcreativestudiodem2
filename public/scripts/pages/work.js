/* Behaviour for /work, lifted from em-creative-studio-work_3.html. */
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

/* ==================================================================
   SELECTED WORK — fanned deck (identical mechanic to the homepage's
   services deck, re-skinned with case studies)
   ================================================================== */
const wrailView = document.getElementById('wrailView');
if (wrailView) {
  const track   = document.getElementById('wrailTrack');
  const cards   = [...track.children];
  const fill    = document.getElementById('wrailFill');
  const nowEl   = document.getElementById('wrailNow');
  const totalEl = document.getElementById('wrailTotal');
  const prevBtn = document.getElementById('wrailPrev');
  const nextBtn = document.getElementById('wrailNext');
  const n = cards.length;
  totalEl.textContent = String(n).padStart(2, '0');

  function step(){
    const r = cards[0].getBoundingClientRect();
    const g = parseFloat(getComputedStyle(track).columnGap || getComputedStyle(track).gap || '0') || 0;
    return r.width + g;
  }
  function currentIndex(){
    return Math.min(n - 1, Math.max(0, Math.round(wrailView.scrollLeft / step())));
  }
  function update(){
    const i = currentIndex();
    nowEl.textContent = String(i + 1).padStart(2, '0');
    fill.style.width = (((i + 1) / n) * 100).toFixed(2) + '%';
    prevBtn.disabled = i <= 0;
    nextBtn.disabled = wrailView.scrollLeft >= (wrailView.scrollWidth - wrailView.clientWidth - 4);
  }
  function goTo(i){
    wrailView.scrollTo({ left: Math.min(n - 1, Math.max(0, i)) * step(), behavior: RM ? 'auto' : 'smooth' });
  }

  prevBtn.addEventListener('click', () => goTo(currentIndex() - 1));
  nextBtn.addEventListener('click', () => goTo(currentIndex() + 1));

  let scrollTimer;
  wrailView.addEventListener('scroll', () => {
    clearTimeout(scrollTimer);
    scrollTimer = setTimeout(update, 60);
  }, { passive: true });
  window.addEventListener('resize', update);

  new IntersectionObserver((es, o) => {
    es.forEach(e => {
      if (!e.isIntersecting) return;
      update();
      o.unobserve(e.target);
    });
  }, { threshold: .2 }).observe(wrailView);

  /* pointer drag-to-scroll for mouse/trackpad users (touch scrolls natively) */
  if (FINE) {
    let dragging = false, movedFar = false, startX = 0, startScroll = 0;
    wrailView.addEventListener('pointerdown', e => {
      if (e.pointerType === 'touch') return;
      dragging = true; movedFar = false;
      startX = e.clientX; startScroll = wrailView.scrollLeft;
      wrailView.setPointerCapture(e.pointerId);
    });
    wrailView.addEventListener('pointermove', e => {
      if (!dragging) return;
      const dx = e.clientX - startX;
      if (Math.abs(dx) > 4) movedFar = true;
      wrailView.scrollLeft = startScroll - dx;
    });
    const endDrag = () => { dragging = false; };
    wrailView.addEventListener('pointerup', endDrag);
    wrailView.addEventListener('pointercancel', endDrag);
    wrailView.addEventListener('click', e => { if (movedFar) e.stopPropagation(); }, true);
  }

  update();
}

/* ==================================================================
   PORTFOLIO — filter grid
   ================================================================== */
const filterPills = [...document.querySelectorAll('.filter-pill')];
const workCards = [...document.querySelectorAll('.work-card')];
filterPills.forEach(pill => {
  pill.addEventListener('click', () => {
    filterPills.forEach(p => p.setAttribute('aria-pressed', String(p === pill)));
    const cat = pill.dataset.filter;
    workCards.forEach(card => {
      const match = cat === 'All' || card.dataset.cat === cat;
      if (match) {
        card.hidden = false;
        requestAnimationFrame(() => {
          card.style.transition = 'opacity 320ms ease, transform 320ms var(--ease-out)';
          card.style.opacity = '1'; card.style.transform = 'none';
        });
      } else {
        card.style.transition = 'opacity 220ms ease, transform 220ms ease';
        card.style.opacity = '0'; card.style.transform = 'scale(.96)';
        setTimeout(() => { if (card.style.opacity === '0') card.hidden = true; }, 220);
      }
    });
  });
});

/* ==================================================================
   TESTIMONIAL — word-wave fade-in + floating bubbles + auto-rotate
   ================================================================== */
;(function(){
  const textEl = document.getElementById('quoteText');
  const citeEl = document.getElementById('quoteCite');
  const dotsEl = document.getElementById('quoteDots');
  const floatsEl = document.getElementById('quoteFloats');
  if (!textEl) return;

  /* generate floating profile bubbles */
  const BUBBLES = [
    { img:'/images/pg/08f79927c5b83a0e.webp', x:7, y:16, size:54 },
    { img:'/images/pg/7b6f5900d30e5548.webp', x:89, y:22, size:46 },
    { img:'/images/pg/d856844d86685d00.webp', x:13, y:68, size:42 },
    { img:'/images/pg/1f8e857d54aa3427.webp', x:91, y:62, size:50 },
    { img:'/images/pg/a007141c01d20b87.webp', x:5, y:42, size:34 },
    { img:'/images/pg/3ead7daf06fc1569.webp', x:94, y:42, size:38 },
    { img:'/images/pg/062039f64ca830d5.webp', x:19, y:86, size:36 },
    { img:'/images/pg/99a12565d267ce84.webp', x:83, y:80, size:40 },
  ];

  const bubbleEls = BUBBLES.map(b => {
    const el = document.createElement('div');
    el.className = 'quote__bubble';
    el.style.cssText = `left:${b.x}%;top:${b.y}%;width:${b.size}px;height:${b.size}px;`;
    el.dataset.homeX = b.x;
    el.dataset.homeY = b.y;
    const img = document.createElement('img');
    img.src = b.img;
    img.alt = '';
    img.loading = 'lazy';
    el.appendChild(img);
    floatsEl.appendChild(el);
    return el;
  });

  /* cursor attraction: bubbles gently pull toward mouse */
  let mouseX = -1, mouseY = -1, raf = null;
  const section = document.querySelector('.quote');

  section.addEventListener('mousemove', e => {
    const rect = section.getBoundingClientRect();
    mouseX = e.clientX - rect.left;
    mouseY = e.clientY - rect.top;
    if (!raf) raf = requestAnimationFrame(attractLoop);
  });
  section.addEventListener('mouseleave', () => {
    mouseX = -1; mouseY = -1;
    bubbleEls.forEach(el => { el.style.transform = 'translate(0,0)'; });
    raf = null;
  });

  function attractLoop() {
    if (mouseX < 0) { raf = null; return; }
    const rect = section.getBoundingClientRect();
    bubbleEls.forEach(el => {
      const elRect = el.getBoundingClientRect();
      const cx = elRect.left - rect.left + elRect.width / 2;
      const cy = elRect.top - rect.top + elRect.height / 2;
      const dx = mouseX - cx;
      const dy = mouseY - cy;
      const dist = Math.sqrt(dx * dx + dy * dy);
      const maxDist = 280;
      if (dist < maxDist) {
        const strength = (1 - dist / maxDist) * 18;
        const tx = (dx / dist) * strength;
        const ty = (dy / dist) * strength;
        el.style.transform = `translate(${tx.toFixed(1)}px,${ty.toFixed(1)}px)`;
        el.style.transition = 'opacity 800ms ease, transform 180ms ease-out, box-shadow 400ms ease, border-color 400ms ease';
      } else {
        el.style.transform = 'translate(0,0)';
        el.style.transition = 'opacity 800ms ease, transform 600ms ease-out, box-shadow 400ms ease, border-color 400ms ease';
      }
    });
    raf = requestAnimationFrame(attractLoop);
  }

  const REVIEWS = [
    { text: 'They gave us a brand our competitors keep quietly borrowing. The attention to detail was unlike anything we have experienced with other agencies.', cite: 'Dana Reyes, Founder, Marchetti & Co.' },
    { text: 'EM Creative completely transformed our online presence. Within three months our listings were getting twice the engagement and our brand finally felt like us.', cite: 'Michael Torres, Broker, Westside Realty Group' },
    { text: 'Working with Seda and her team felt like having an in-house creative department. They understood our market from day one and delivered beyond expectations.', cite: 'Rachel Kim, Team Lead, Luxe Properties LA' },
  ];

  let current = 0, animating = false, autoTimer = null;

  REVIEWS.forEach((_, i) => {
    const dot = document.createElement('button');
    dot.className = 'quote__dot' + (i === 0 ? ' active' : '');
    dot.setAttribute('aria-label', 'Review ' + (i + 1));
    dot.addEventListener('click', () => { if (!animating) goTo(i); });
    dotsEl.appendChild(dot);
  });

  function waveIn(text, cb) {
    animating = true;
    const words = text.split(' ');
    textEl.innerHTML = '\u201C' + words.map(w =>
      '<span class="quote__word">' + w + '</span>'
    ).join(' ') + '\u201D';

    const spans = textEl.querySelectorAll('.quote__word');
    spans.forEach((span, i) => {
      setTimeout(() => {
        span.classList.add('show');
        if (i === spans.length - 1) {
          setTimeout(() => { animating = false; if (cb) cb(); }, 400);
        }
      }, i * 60);
    });
  }

  function fadeOut(cb) {
    const spans = textEl.querySelectorAll('.quote__word');
    spans.forEach((span, i) => {
      setTimeout(() => {
        span.style.transition = 'opacity 300ms ease, transform 300ms ease, filter 300ms ease';
        span.classList.remove('show');
        span.style.transform = 'translateY(-10px)';
      }, i * 25);
    });
    citeEl.style.transition = 'opacity 300ms ease';
    citeEl.style.opacity = '0';
    setTimeout(cb, Math.min(spans.length * 25 + 300, 800));
  }

  function goTo(idx) {
    if (autoTimer) clearTimeout(autoTimer);
    current = idx;
    const r = REVIEWS[current];
    dotsEl.querySelectorAll('.quote__dot').forEach((d, i) => d.classList.toggle('active', i === current));

    const doReveal = () => {
      citeEl.style.transform = 'translateY(6px)';
      waveIn(r.text, () => {
        citeEl.textContent = r.cite;
        citeEl.style.transition = 'opacity 500ms ease, transform 500ms ease';
        citeEl.style.opacity = '1';
        citeEl.style.transform = 'translateY(0)';
        autoTimer = setTimeout(() => goTo((current + 1) % REVIEWS.length), 6000);
      });
    };

    if (textEl.querySelector('.quote__word')) {
      fadeOut(doReveal);
    } else {
      doReveal();
    }
  }

  const io = new IntersectionObserver((entries) => {
    if (entries[0].isIntersecting) {
      goTo(0);
      bubbleEls.forEach((el, i) => {
        setTimeout(() => el.classList.add('show'), i * 120 + 200);
      });
      io.unobserve(section);
    }
  }, { threshold: 0.3 });
  io.observe(section);

  if (window.matchMedia('(prefers-reduced-motion:reduce)').matches) {
    io.disconnect();
    textEl.textContent = '\u201C' + REVIEWS[0].text + '\u201D';
    citeEl.textContent = REVIEWS[0].cite; citeEl.style.opacity = '1';
  }
})();

})();
