(() => {
'use strict';
const RM = matchMedia('(prefers-reduced-motion: reduce)').matches;
const FINE = matchMedia('(hover:hover) and (pointer:fine)').matches;

/* ==================================================================
   1. CURSOR — lerped so it trails with weight
   ================================================================== */

/* ==================================================================
   2. REVEAL ON SCROLL
   ================================================================== */
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

/* ==================================================================
   3b. HERO HEADLINE — split into words, each masked up on a stagger
   ================================================================== */
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

/* ==================================================================
   3c. HERO FAN — cards spring out of the stack, arc, and react
   ================================================================== */
const fan = document.getElementById('fan');
if (fan) {
  const cards = [...fan.querySelectorAll('.fan-card')];
  const mid = (cards.length - 1) / 2;
  let held = -1;

  function place(){
    const w = fan.clientWidth;
    const step = Math.min(w / (cards.length + 1.7), 104);
    cards.forEach((c,i) => {
      const o = i - mid;                       /* signed distance from centre */
      const push = held < 0 ? 0
                 : (i === held ? 0 : (i < held ? -16 : 16));
      const lift = i === held ? -20 : 0;
      c.style.setProperty('--x', (o*step + push).toFixed(1) + 'px');
      c.style.setProperty('--y', (Math.pow(Math.abs(o),1.65)*4.2 + 8 + lift).toFixed(1) + 'px');
      c.style.setProperty('--r', (i === held ? 0 : o*6.4).toFixed(2) + 'deg');
      c.style.setProperty('--s', (i === held ? 1.06 : 1).toFixed(3));
      c.style.zIndex = String(i === held ? 40 : 10 + i);
      c.style.opacity = '1';
    });
  }

  new IntersectionObserver((es,o) => {
    es.forEach(e => {
      if (!e.isIntersecting) return;
      cards.forEach((c,i) => {
        /* stagger outward from the middle */
        c.style.transitionDelay = (Math.abs(i - mid) * 70 + 420) + 'ms';
      });
      fan.classList.remove('armed');
      place();
      setTimeout(() => {
        cards.forEach(c => c.style.transitionDelay = '0ms');
        fan.classList.add('ready');                    /* snappy from here on */
      }, 1900);
      o.unobserve(e.target);
    });
  }, {threshold:.2}).observe(fan);

  addEventListener('resize', place);

  if (FINE && !RM) {
    /* Hover is resolved from the pointer's x inside the fan, NOT from
       pointerenter on each card. The cards move when one is picked, so
       listening on the cards themselves made the hit area slide out from
       under the cursor, which fired enter/leave in a loop and made the
       whole arc judder. Hit-testing a container that never moves kills
       that feedback loop outright. */
    const holder = document.getElementById('fanCards');
    let tX = 0, tY = 0, sX = 0, sY = 0, raf = 0;

    function pick(e){
      const r = fan.getBoundingClientRect();
      const step = Math.min(r.width / (cards.length + 1.7), 104);
      const span = step * (cards.length - 1) + 170;          /* arc + card width */
      const rel  = (e.clientX - (r.left + r.width / 2)) / span + 0.5;
      const idx  = rel < 0 || rel > 1 ? -1
                 : Math.max(0, Math.min(cards.length - 1, Math.floor(rel * cards.length)));
      if (idx !== held) { held = idx; place(); }

      tY = ((e.clientX - r.left) / r.width  - .5) * 8;
      tX = ((e.clientY - r.top)  / r.height - .5) * -5;
      if (!raf) raf = requestAnimationFrame(lean);
    }
    fan.addEventListener('pointermove', pick, {passive:true});
    fan.addEventListener('pointerleave', () => {
      if (held !== -1) { held = -1; place(); }
      tX = 0; tY = 0; if (!raf) raf = requestAnimationFrame(lean);
    });

    function lean(){
      sX += (tX-sX)*.08; sY += (tY-sY)*.08;
      holder.style.transform = `rotateX(${sX.toFixed(2)}deg) rotateY(${sY.toFixed(2)}deg)`;
      raf = (Math.abs(tX-sX) > .02 || Math.abs(tY-sY) > .02) ? requestAnimationFrame(lean) : 0;
    }
  }
}

/* ==================================================================
   3d. LIQUID — a continuous, ambient flow. Plays like a looping video.

   No cursor attraction. The previous build pulled the forms toward the
   pointer, which felt grabby and nervous. This is pure ambient motion:
   a sum of sine terms on non-harmonic periods (~19s to ~52s) driving
   translate, gentle rotate, skew and a faint non-uniform scale. Because
   the periods never divide into each other the loop never visibly
   repeats. It just breathes.

   The pointer does exactly one thing now: click to release a bubble
   that rises and pops. Nothing chases the cursor.
   ================================================================== */
const hero = document.querySelector('.hero');
const liquids = [...document.querySelectorAll('.liquid')];
if (hero && liquids.length && !RM) {

  const forms = liquids.map((el, i) => ({
    el,
    inner: el.querySelector('.liquid__inner'),
    sheen: el.querySelector('.liquid__sheen'),
    r0: parseFloat(getComputedStyle(el).getPropertyValue('--r0')) || 0,
    ph: i * 2.399,                            /* phase offset so forms desync */
    amp: el.classList.contains('liquid--b') ? 1.22 : 1.0,
    depth: el.classList.contains('liquid--b') ? 24 : 14,   /* parallax reach */
    ox:0, oy:0,                               /* eased pointer offset */
    corner: el.classList.contains('liquid--b') ? -1 : 1,   /* drift-in direction */
    introDelay: el.classList.contains('liquid--b') ? 220 : 0, /* matches CSS stagger */
    docks: el.classList.contains('liquid--a')   /* the one that parks under the word */
  }));
  const INTRO_MS = 1500;

  let visible = true, t0 = performance.now();
  /* how much of the ambient lean is allowed through: 1 while the mark is
     floating in the hero, 0 once it has docked under the headline word. */
  let lean = 1;

  /* a whisper of parallax: the forms lean a few px toward the pointer,
     heavily eased, so it feels like the surface noticing you rather than
     chasing you. Off entirely for coarse pointers. */
  let pmx = 0.5, pmy = 0.5;
  if (FINE) hero.addEventListener('pointermove', e => {
    const r = hero.getBoundingClientRect();
    pmx = (e.clientX - r.left) / r.width;
    pmy = (e.clientY - r.top)  / r.height;
  }, {passive:true});
  hero.addEventListener('pointerleave', () => { pmx = 0.5; pmy = 0.5; });

  /* --- governor: shed work only if the device genuinely can't keep up -- */
  let tier = 2, slow = 0, fast = 0, lastT = performance.now();
  function applyTier(){
    forms.forEach(f => { if (f.sheen) f.sheen.style.display = tier >= 2 ? '' : 'none'; });
    const b = forms.find(f => f.el.classList.contains('liquid--b'));
    if (b) b.el.style.visibility = tier >= 1 ? '' : 'hidden';
  }

  /* --- specular drifts on its own slow path, no pointer needed ---------- */
  let sheenX = 50, sheenY = 44;

  function frame(now){
    const t = (now - t0) / 1000;

    /* Docked, the crown sits beside type and any lean reads as a wonky crown
       rather than as motion, so the rotation and skew fade out while the drift
       in x and y carries on - it still breathes, it just stops leaning. Eased,
       not switched: snapping away whatever tilt it happened to be holding
       would be a visible jolt. */
    const wantLean = document.body.classList.contains('crown-docked') ? 0 : 1;
    lean += (wantLean - lean) * 0.035;

    const dt = now - lastT; lastT = now;
    if (t > 3) {
      if (dt > 40) { slow++; fast = 0; } else if (dt < 20) { fast++; slow = 0; }
      if (slow > 60 && tier > 0) { tier--; slow = 0; applyTier(); }
      else if (fast > 240 && tier < 2) { tier++; fast = 0; applyTier(); }
    }

    for (const f of forms) {
      const p = f.ph, a = f.amp;

      /* eased entrance: the crown settles into its resting spot while the
         ambient float ramps up from still, so the reveal and the drift are
         one gesture. easeOutCubic. g gates the ambient; the (1-e) terms are
         the settle offset that decays to nothing. */
      const ip = Math.min(1, Math.max(0, (now - t0 - f.introDelay) / INTRO_MS));
      const e  = 1 - Math.pow(1 - ip, 3);
      const g  = e;
      const introX = (1 - e) * 34 * f.corner;   /* drifts in from its corner  */
      const introY = (1 - e) * 20;              /* rises up into place         */
      const introR = (1 - e) * 9 * -f.corner;   /* settles into its tilt       */
      const introS = 0.9 + 0.1 * e;             /* scales 0.9 -> 1             */

      const wx = g * a * (14 * Math.sin(t * 0.121 + p)      + 7 * Math.sin(t * 0.263 + p * 1.7));
      const wy = g * a * (10 * Math.cos(t * 0.097 + p * 1.3) + 5 * Math.sin(t * 0.211 + p * 2.1));
      const wr = g * a * (1.4 * Math.sin(t * 0.076 + p)      + 0.6 * Math.sin(t * 0.181 + p * 0.6));
      const wk = tier > 0 ? g * a * 1.0 * Math.sin(t * 0.139 + p * 1.9) : 0;
      const sx = tier > 0 ? 1 + g * a * 0.014 * Math.sin(t * 0.151 + p)       : 1;
      const sy = tier > 0 ? 1 + g * a * 0.011 * Math.cos(t * 0.197 + p * 1.4) : 1;

      /* ease the parallax offset toward its target very slowly */
      const tx = (pmx - 0.5) * f.depth, ty = (pmy - 0.5) * f.depth * 0.7;
      f.ox += (tx - f.ox) * 0.028;
      f.oy += (ty - f.oy) * 0.028;

      f.inner.style.transform =
        `translate3d(${(wx + f.ox * g + introX).toFixed(2)}px, ${(wy + f.oy * g + introY).toFixed(2)}px, 0) ` +
        `rotate(${(f.r0 + wr * (f.docks ? lean : 1) + introR).toFixed(2)}deg) ` +
        `skewY(${(wk * (f.docks ? lean : 1)).toFixed(2)}deg) ` +
        `scale(${(sx * introS).toFixed(4)}, ${(sy * introS).toFixed(4)})`;
    }

    if (tier >= 2) {
      /* one-time specular sweep as the metal is cast, then the slow drift */
      const gi = Math.min(1, t / 1.72);
      sheenX = gi < 1 ? -20 + 150 * gi : 50 + 26 * Math.sin(t * 0.083);
      sheenY = 44 + 20 * Math.cos(t * 0.061);
      for (const f of forms) if (f.sheen) {
        f.sheen.style.setProperty('--sx', sheenX.toFixed(1) + '%');
        f.sheen.style.setProperty('--sy', sheenY.toFixed(1) + '%');
      }
    }

    if (visible && !document.hidden) requestAnimationFrame(frame);
  }
  hero.classList.add('lit');                 /* specular is always on now */
  requestAnimationFrame(frame);

  new IntersectionObserver(es => {
    const was = visible;
    visible = es[0].isIntersecting;
    if (visible && !was && !document.hidden) requestAnimationFrame(frame);
  }, {threshold:0}).observe(hero);
  document.addEventListener('visibilitychange', () => {
    if (!document.hidden && visible) requestAnimationFrame(frame);
  });
}

/* 3e. Crown click/hold interactions removed - clicking or holding the hero
   no longer sprays crowns from the cursor. The layer they rendered into
   was created here in JS, so nothing is left orphaned in the markup. */

/* ==================================================================
   4. SERVICE DECK — fan, cycle, pointer tilt
   ================================================================== */
const deck = document.getElementById('deck');
if (deck) {
  const cards = [...deck.querySelectorAll('.card')];
  const items = [...document.querySelectorAll('#svcIndex li')];
  let active = 0;

  const n = cards.length;
  function lay(){
    cards.forEach((c,i) => {
      const order = (i - active + n) % n;              /* 0 = front */
      const side  = order % 2 === 1 ? 1 : -1;
      const depth = Math.ceil(order / 2);
      c.style.setProperty('--rot', (side * depth * 7.5) + 'deg');
      c.style.setProperty('--dx',  (side * depth * 30) + 'px');
      c.style.setProperty('--sc',  (1 - depth*.05).toFixed(3));
      c.style.setProperty('--bl',  (depth * 1.6).toFixed(1) + 'px');
      c.style.zIndex = String(30 - order);
      c.style.opacity = depth > 2 ? '0' : String(1 - depth*.22);
    });
    items.forEach((li,i) => li.setAttribute('aria-selected', String(i === active)));
  }
  const go = i => { active = (i + cards.length) % cards.length; lay(); };

  cards.forEach((c,i) => c.addEventListener('click', () => go(i === active ? active+1 : i)));
  items.forEach((li,i) => li.querySelector('button').addEventListener('click', () => go(i)));

  new IntersectionObserver((es,o) => {
    es.forEach(e => {
      if (!e.isIntersecting) return;
      deck.classList.remove('armed');
      lay();
      o.unobserve(e.target);
    });
  }, {threshold:.3}).observe(deck);

  if (FINE && !RM) {
    let tX = 0, tY = 0, sX = 0, sY = 0, raf = 0;
    deck.addEventListener('pointermove', e => {
      const r = deck.getBoundingClientRect();
      tY = ((e.clientX - r.left)/r.width - .5) * 13;
      tX = ((e.clientY - r.top)/r.height - .5) * -9;
      if (!raf) raf = requestAnimationFrame(spring);
    });
    deck.addEventListener('pointerleave', () => { tX = 0; tY = 0; if (!raf) raf = requestAnimationFrame(spring); });
    function spring(){
      sX += (tX-sX)*.09; sY += (tY-sY)*.09;
      deck.style.transform = `rotateX(${sX.toFixed(2)}deg) rotateY(${sY.toFixed(2)}deg)`;
      raf = (Math.abs(tX-sX) > .02 || Math.abs(tY-sY) > .02) ? requestAnimationFrame(spring) : 0;
    }
  }
}

/* ==================================================================
   5. PACKAGES — one open at a time
   ================================================================== */
const packs = [...document.querySelectorAll('.pack')];
packs.forEach(p => {
  const open = () => packs.forEach(q => q.setAttribute('aria-expanded', String(q === p)));
  p.addEventListener('click', open);
  if (FINE) p.addEventListener('pointerenter', open);
});

/* ==================================================================
   6. COUNTERS
   ================================================================== */
const cio = new IntersectionObserver((es,o) => {
  es.forEach(e => {
    if (!e.isIntersecting) return;
    const el = e.target;
    const to = parseFloat(el.dataset.count);
    const dec = parseInt(el.dataset.dec || '0', 10);
    const pre = el.dataset.prefix || '', suf = el.dataset.suffix || '';
    const dur = RM ? 0 : 1500, t0 = performance.now();
    (function step(now){
      const p = dur ? Math.min((now - t0)/dur, 1) : 1;
      const e2 = 1 - Math.pow(1 - p, 3);
      el.textContent = pre + (to*e2).toFixed(dec) + suf;
      if (p < 1) requestAnimationFrame(step);
    })(t0);
    o.unobserve(el);
  });
}, {threshold:.6});
document.querySelectorAll('[data-count]').forEach(el => cio.observe(el));

/* ==================================================================
   6b. NAV COLLAPSE — shrinks to just the logo once scrolled; click the
   logo to reopen it in place. Resets the next time you scroll back up.
   ================================================================== */
(() => {
  const navBrand = document.querySelector('.nav .brand');
  if (!navBrand) return;
  /* On a phone the links live in a panel the brand opens, so the brand is a
     menu button at any scroll position. On desktop it is only a control once
     the pill has collapsed to the badge. */
  const isMobileNav = () => window.matchMedia('(max-width:860px)').matches;
  navBrand.addEventListener('click', (e) => {
    if (!isMobileNav() && !document.body.classList.contains('nav-tucked')) return;
    e.preventDefault();
    document.body.classList.toggle('nav-open');
    navBrand.setAttribute('aria-expanded',
      document.body.classList.contains('nav-open') ? 'true' : 'false');
  });
  navBrand.setAttribute('aria-expanded', 'false');
  document.querySelectorAll('.nav-links a, .nav .btn--dark').forEach(a => {
    a.addEventListener('click', () => {
      document.body.classList.remove('nav-open');
      navBrand.setAttribute('aria-expanded', 'false');
    });
  });
  /* tapping away closes it — on a phone there is no hover to hint otherwise */
  document.addEventListener('click', (e) => {
    if (!document.body.classList.contains('nav-open')) return;
    if (e.target.closest('.nav-pill')) return;
    document.body.classList.remove('nav-open');
    navBrand.setAttribute('aria-expanded', 'false');
  });
  addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && document.body.classList.contains('nav-open')) {
      document.body.classList.remove('nav-open');
      navBrand.setAttribute('aria-expanded', 'false');
    }
  });
  /* The page ships with .nav-boot on <body> so the nav paints closed, then
     opens with the same motion it uses on scroll. crown.js drops the class
     when the mark docks; this is the backstop if that never fires. */
  setTimeout(() => document.body.classList.remove('nav-boot'), 9000);
})();

/* ==================================================================
   7. SCROLL LOOP — nav state, manifesto fill, step stack scaling
   ================================================================== */
const steps = [...document.querySelectorAll('.step')];
let queued = false;
function onScroll(){
  const isScrolled = scrollY > 24;
  document.body.classList.toggle('scrolled', isScrolled);
  /* the nav tucks away later than the shadow appears, so a nudge of scroll
     doesn't shut it in your face */
  const tucked = scrollY > 160;
  document.body.classList.toggle('nav-tucked', tucked);
  if (!tucked) document.body.classList.remove('nav-open');

  /* The crown used to bloom bigger and fade as the hero scrolled away, by
     scaling .liquid on every scroll frame. That worked while the mark was a
     decorative form parked in the corner by the stylesheet. It is now part of
     the headline lockup, and crown.js places it there with a large translate
     on .liquid__stage — which sits INSIDE .liquid, so scaling the parent
     multiplied that translate and swung the mark down and across the hero as
     you scrolled. It belongs to the headline now: it scrolls with it, and
     nothing here moves it. */

  if (!RM) {
    steps.forEach((s,i) => {
      if (i === steps.length - 1) return;
      const top = parseFloat(getComputedStyle(s).top);
      const d = top - s.getBoundingClientRect().top;
      const k = Math.max(0, Math.min(d / 620, 1));
      s.style.transform = `scale(${(1 - k*.055).toFixed(4)}) translateY(${(-k*10).toFixed(2)}px)`;
      s.style.filter = `brightness(${(1 - k*.10).toFixed(3)})`;
    });
  }
  queued = false;
}
addEventListener('scroll', () => { if (!queued) { queued = true; requestAnimationFrame(onScroll); } }, {passive:true});
onScroll();

/* ==================================================================
   8a. FAN CARD ART — miniature brand artefacts, drawn once.
       Deliberately not abstract gradients: a web studio's hero should
       show the kind of thing it makes. Swap any canvas for an <img>
       when real screenshots exist.
   ================================================================== */
const MOCK = [
  { bg:[30,21,9],    ink:[244,243,239], acc:[178,32,38]   },
  { bg:[244,243,239], ink:[30,21,9],    acc:[201,168,132] },
  { bg:[217,196,177], ink:[30,21,9],    acc:[76,53,21]    },
  { bg:[76,53,21],    ink:[244,239,228], acc:[196,148,96] },
  { bg:[235,231,223], ink:[42,30,13],   acc:[140,152,126] },
  { bg:[30,21,9],     ink:[217,196,177], acc:[244,243,239] },
  { bg:[201,168,132], ink:[30,21,9],    acc:[244,243,239] }
];

function paintMock(cv, m, variant){
  const dpr = Math.min(devicePixelRatio || 1, 2);
  const box = cv.getBoundingClientRect();
  const W = cv.width  = Math.max(120, Math.round((box.width  || 150) * dpr));
  const H = cv.height = Math.max(144, Math.round((box.height || 180) * dpr));
  const g = cv.getContext('2d');
  const u = W / 150;                                   /* one design unit */
  const rgb = (c,a) => `rgba(${c[0]},${c[1]},${c[2]},${a === undefined ? 1 : a})`;
  const bar = (x,y,w,h,c,a) => {
    g.fillStyle = rgb(c,a);
    g.beginPath();
    const r = Math.min(h/2, 3*u);
    g.roundRect(x*u, y*u, w*u, h*u, r);
    g.fill();
  };

  g.fillStyle = rgb(m.bg); g.fillRect(0,0,W,H);

  if (variant === 0){                                  /* banded brand sheet */
    for (let i = 0; i < 4; i++){
      g.fillStyle = rgb(i % 2 ? m.acc : m.ink, 0.14 + i*0.24);
      g.fillRect(0, (36 + i*36)*u, W, 34*u);
    }
    bar(14, 14, 46, 7, m.ink, .9);
  } else if (variant === 1){                           /* landing page */
    g.fillStyle = rgb(m.acc, .92); g.fillRect(0, 0, W, 78*u);
    bar(14, 22, 76, 11, m.bg, .95);
    bar(14, 38, 54, 6,  m.bg, .6);
    bar(14, 54, 40, 12, m.ink, .92);
    bar(14, 92, 100, 6, m.ink, .34);
    bar(14, 104, 84, 6, m.ink, .28);
    bar(14, 116, 92, 6, m.ink, .22);
    bar(14, 140, 122, 26, m.acc, .3);
  } else if (variant === 2){                           /* editorial split */
    g.fillStyle = rgb(m.acc, .85); g.fillRect(0, 0, 72*u, H);
    bar(84, 20, 50, 9,  m.ink, .9);
    bar(84, 36, 42, 5,  m.ink, .45);
    bar(84, 46, 46, 5,  m.ink, .35);
    bar(84, 62, 34, 11, m.ink, .9);
    for (let i = 0; i < 5; i++) bar(12, 24 + i*28, 48, 16, m.bg, .22 + i*.1);
  } else {                                             /* monogram */
    g.fillStyle = rgb(m.acc, .18); g.fillRect(0, 0, W, H);
    g.fillStyle = rgb(m.ink, .92);
    g.font = `800 ${58*u}px "Plus Jakarta Sans", "Helvetica Neue", Helvetica, Arial, sans-serif`;
    g.textAlign = 'center'; g.textBaseline = 'middle';
    g.fillText('em', W/2, H*0.46);
    bar(38, 132, 74, 6, m.ink, .35);
  }

  /* grain, then a soft top light */
  const im = g.getImageData(0,0,W,H), d = im.data;
  for (let i = 0; i < d.length; i += 4){
    const n = (Math.random()-.5) * 13;
    d[i] += n; d[i+1] += n; d[i+2] += n;
  }
  g.putImageData(im,0,0);
  const lg = g.createLinearGradient(0,0,0,H);
  lg.addColorStop(0,'rgba(255,255,255,.14)');
  lg.addColorStop(.5,'rgba(255,255,255,0)');
  lg.addColorStop(1,'rgba(0,0,0,.10)');
  g.fillStyle = lg; g.fillRect(0,0,W,H);
}

/* The photographs are the design. These canvases only ever paint if a
   photo fails to load, so a dropped request degrades to an on-brand
   panel instead of a broken-image icon. */
document.querySelectorAll('.fan-card__img').forEach(img => {
  const fb = img.parentElement.querySelector('.fan-card__fb');
  const i  = +fb.dataset.fb;
  const draw = () => paintMock(fb, MOCK[i % MOCK.length], i % 4);
  const reveal = () => img.classList.add('loaded');
  const fail = () => { img.style.display = 'none'; draw(); };

  img.addEventListener('error', fail);
  if (img.complete) {
    if (img.naturalWidth === 0) fail();
    else (img.decode ? img.decode().then(reveal, reveal) : reveal());
  } else {
    img.addEventListener('load', () => (img.decode ? img.decode().then(reveal, reveal) : reveal()), {once:true});
  }
  /* fallback panels should also fade rather than pop */
  fb.style.transition = 'opacity 620ms var(--ease-soft)';
});

/* ==================================================================
   8b. PROJECT ART — generated duotone fields, drawn once
   ================================================================== */
const PAL = [
  [[30,21,9],   [76,53,21],   [217,196,177]],
  [[76,53,21],  [217,196,177],[244,243,239]],
  [[30,21,9],   [192,164,137],[235,231,223]],
  [[24,17,7],   [96,68,28],   [186,158,130]],
  [[46,32,14],  [140,110,80], [226,210,192]],
  [[168,140,112],[236,224,208],[255,253,248]],
  [[30,21,9],   [150,120,90], [244,243,239]],
  /* fan cards 10-15 */
  [[30,21,9],   [178,32,38],   [230,214,196]],
  [[42,30,13],  [201,168,132], [250,247,240]],
  [[70,48,20],  [140,152,126], [238,232,220]],
  [[24,17,7],   [196,148,96],  [244,239,228]],
  [[54,38,18],  [166,120,74],  [236,226,208]],
  [[36,25,11],  [214,196,177], [252,250,246]]
];
document.querySelectorAll('canvas[data-art]').forEach(cv => {
  const idx = +cv.dataset.art;
  const box = cv.parentElement.getBoundingClientRect();
  const dpr = Math.min(window.devicePixelRatio || 1, 2);
  const W = cv.width  = Math.max(320, Math.round(box.width)) * dpr;
  const H = cv.height = Math.max(240, Math.round(box.height)) * dpr;
  cv.style.width  = Math.round(W/dpr) + 'px';
  cv.style.height = Math.round(H/dpr) + 'px';
  const g = cv.getContext('2d');
  g.scale(dpr, dpr);
  const w = W/dpr, h = H/dpr;

  /* brand palette */
  const C = {
    cream:'#F4F3EF', champagne:'#D9C4B1', cocoa:'#4C3515',
    espresso:'#1E1509', amber:'#B8975A', warm:'#C4A882',
    dark:'#2A1E0E', darkMid:'#3A2A12', paper:'#F4F3EF'
  };

  /* per-card background + tube color sets */
  const configs = [
    /* idx 0,1,2 = work section; idx 3-6 = process steps */
    { bg:C.dark,     tubes:[[C.champagne,C.cream],[C.amber,C.warm],[C.cream,C.paper]] },
    { bg:C.darkMid,  tubes:[[C.warm,C.cream],[C.champagne,C.paper],[C.amber,C.champagne]] },
    { bg:C.dark,     tubes:[[C.cream,C.paper],[C.amber,C.champagne],[C.warm,C.cream]] },
    { bg:C.darkMid,  tubes:[[C.champagne,C.cream],[C.amber,C.warm],[C.cream,C.champagne]] },
    { bg:'#3A2A12',  tubes:[[C.warm,C.paper],[C.amber,C.cream],[C.champagne,C.warm]] },
    { bg:C.champagne,tubes:[[C.espresso,C.cocoa],[C.dark,C.espresso],[C.cocoa,C.darkMid]] },
    { bg:C.cream,    tubes:[[C.cocoa,C.espresso],[C.amber,C.cocoa],[C.espresso,C.dark]] },
  ];
  const cfg = configs[idx % configs.length];

  /* fill background */
  g.fillStyle = cfg.bg; g.fillRect(0,0,w,h);

  /* subtle radial glow center */
  const glow = g.createRadialGradient(w*0.5,h*0.5,0,w*0.5,h*0.5,w*0.6);
  glow.addColorStop(0, 'rgba(255,255,255,.06)');
  glow.addColorStop(1, 'transparent');
  g.fillStyle = glow; g.fillRect(0,0,w,h);

  /* seeded random */
  let _s = idx * 9973 + 137;
  function sr(){ _s = (_s * 16807 + 0) % 2147483647; return (_s & 0x7fffffff) / 0x7fffffff; }

  /* ---- draw a single flowing 3D tube along a bezier path ---- */
  function drawFlowingTube(points, radius, baseColor, highlightColor, shadow) {
    /* sample many points along the cubic bezier chain */
    const samples = [];
    for (let i = 0; i < points.length - 1; i++) {
      const p0 = points[i], p1 = points[i+1];
      const cp1x = p0.x + (p1.x - p0.x) * 0.5 + (sr()-0.5) * radius * 3;
      const cp1y = p0.y + (sr()-0.5) * radius * 4;
      const cp2x = p1.x - (p1.x - p0.x) * 0.5 + (sr()-0.5) * radius * 3;
      const cp2y = p1.y + (sr()-0.5) * radius * 4;
      const steps = 24;
      for (let t = 0; t <= steps; t++) {
        const u = t / steps;
        const iu = 1-u;
        const x = iu*iu*iu*p0.x + 3*iu*iu*u*cp1x + 3*iu*u*u*cp2x + u*u*u*p1.x;
        const y = iu*iu*iu*p0.y + 3*iu*iu*u*cp1y + 3*iu*u*u*cp2y + u*u*u*p1.y;
        if (i > 0 && t === 0) continue;
        samples.push({x, y});
      }
    }

    if (samples.length < 3) return;

    /* draw tube as a series of circles along the path with 3D shading */
    if (shadow) {
      g.save();
      g.globalAlpha = 0.15;
      for (let i = 0; i < samples.length; i++) {
        const p = samples[i];
        const r = radius * (0.7 + 0.3 * Math.sin(i * 0.15));
        g.beginPath();
        g.arc(p.x + r*0.3, p.y + r*0.5, r * 1.1, 0, Math.PI*2);
        g.fillStyle = '#000';
        g.fill();
      }
      g.restore();
    }

    /* main tube body */
    for (let i = 0; i < samples.length; i++) {
      const p = samples[i];
      const t = i / (samples.length - 1);
      const r = radius * (0.6 + 0.4 * Math.sin(t * Math.PI));

      /* 3D gradient per circle slice */
      const grad = g.createRadialGradient(
        p.x - r*0.3, p.y - r*0.3, r*0.05,
        p.x, p.y, r
      );
      grad.addColorStop(0, highlightColor);
      grad.addColorStop(0.35, baseColor);
      grad.addColorStop(0.8, baseColor);
      grad.addColorStop(1, 'rgba(0,0,0,.3)');

      g.beginPath();
      g.arc(p.x, p.y, r, 0, Math.PI*2);
      g.fillStyle = grad;
      g.fill();
    }

    /* specular highlight along the top */
    g.save();
    g.globalAlpha = 0.3;
    g.beginPath();
    g.moveTo(samples[0].x, samples[0].y - radius*0.4);
    for (let i = 1; i < samples.length; i++) {
      const p = samples[i];
      const r = radius * (0.6 + 0.4 * Math.sin((i/(samples.length-1)) * Math.PI));
      g.lineTo(p.x, p.y - r*0.5);
    }
    g.strokeStyle = '#fff';
    g.lineWidth = radius * 0.15;
    g.lineCap = 'round';
    g.stroke();
    g.restore();
  }

  /* ---- draw 3-4 intertwining tubes per card ---- */
  const tubeCount = 3 + (idx % 2);
  for (let t = 0; t < tubeCount; t++) {
    const cols = cfg.tubes[t % cfg.tubes.length];
    const ptCount = 3 + Math.floor(sr() * 2);
    const pts = [];
    for (let p = 0; p < ptCount; p++) {
      pts.push({
        x: w * (-0.1 + (p/(ptCount-1)) * 1.2),
        y: h * (0.2 + sr() * 0.6)
      });
    }
    const r = 10 + sr() * 18;
    drawFlowingTube(pts, r, cols[0], cols[1], t === 0);
  }

  /* ---- add 2-3 glossy spheres for depth ---- */
  const sphereCount = 2 + (idx % 2);
  for (let i = 0; i < sphereCount; i++) {
    const sx = w * (0.15 + sr() * 0.7);
    const sy = h * (0.2 + sr() * 0.6);
    const sr2 = 12 + sr() * 24;
    const cols = cfg.tubes[(i+1) % cfg.tubes.length];

    g.save();
    g.shadowColor = 'rgba(0,0,0,.3)';
    g.shadowBlur = sr2;
    g.shadowOffsetY = sr2 * 0.3;

    const sg = g.createRadialGradient(sx-sr2*0.3, sy-sr2*0.35, sr2*0.05, sx, sy, sr2);
    sg.addColorStop(0, '#fff');
    sg.addColorStop(0.2, cols[1]);
    sg.addColorStop(0.6, cols[0]);
    sg.addColorStop(1, 'rgba(0,0,0,.25)');
    g.beginPath();
    g.arc(sx, sy, sr2, 0, Math.PI*2);
    g.fillStyle = sg;
    g.fill();

    /* specular highlight */
    const spec = g.createRadialGradient(sx-sr2*0.25, sy-sr2*0.3, 0, sx-sr2*0.25, sy-sr2*0.3, sr2*0.4);
    spec.addColorStop(0, 'rgba(255,255,255,.55)');
    spec.addColorStop(1, 'rgba(255,255,255,0)');
    g.fillStyle = spec;
    g.fill();
    g.restore();
  }

  /* fine grain */
  const im = g.getImageData(0,0,W,H), d = im.data;
  for (let i = 0; i < d.length; i += 4){
    const n = (Math.random()-.5) * 8;
    d[i] += n; d[i+1] += n; d[i+2] += n;
  }
  g.putImageData(im,0,0);
});

/* ==================================================================
   TEAM — horizontal carousel with scroll entrance + click modal
   ================================================================== */
;(function(){
  const stage = document.getElementById('teamStage');
  const modal = document.getElementById('teamModal');
  if (!stage || !modal) return;

  const TEAM = [
    {
      name:'Darius Cho', role:'Lead Designer',
      img:'https://cdn.pixabay.com/photo/2019/11/07/10/46/portrait-4608718_640.jpg',
      bio:'Type nerd, grid obsessive, and the reason every EM site loads in under a second. Darius turns wireframes into experiences people remember.',
      tags:['Web Design','Typography','Motion Design'],
      quote:'"Good design is invisible. Great design makes you feel something."'
    },
    {
      name:'Sofia Reyes', role:'Content Strategist',
      img:'https://cdn.pixabay.com/photo/2021/07/22/01/26/woman-6484766_640.jpg',
      bio:'Writes the words that rank and the captions that convert. Sofia connects SEO strategy with genuine storytelling so nothing reads like it was written by a machine.',
      tags:['SEO','Copywriting','Social Strategy'],
      quote:'"Content is the bridge between what you sell and what people actually search for."'
    },
    {
      name:'Marcus Webb', role:'Paid Media Lead',
      img:'https://cdn.pixabay.com/photo/2020/06/20/17/54/man-5321485_640.jpg',
      bio:'Runs Meta, Google and TikTok campaigns against tracked revenue, not vanity impressions. Marcus refreshes creative every two weeks because algorithms reward the new.',
      tags:['Paid Social','Google Ads','Analytics'],
      quote:'"If your ad budget is not making you money, it is making someone else money."'
    },
    {
      name:'Ava Chen', role:'Brand Photographer',
      img:'https://cdn.pixabay.com/photo/2017/08/01/08/29/woman-2563491_640.jpg',
      bio:'Ava shoots the listing photos, lifestyle content, and headshots that stop the scroll. Her eye for light and composition gives every EM client a visual edge.',
      tags:['Photography','Visual Identity','Content Production'],
      quote:'"Light is everything. Get that right and the brand follows."'
    }
  ];

  /* create cards in flex row */
  const cards = TEAM.map((m, i) => {
    const card = document.createElement('div');
    card.className = 'team__card';
    card.innerHTML = `<img src="${m.img}" alt="${m.name}" loading="lazy"><h4>${m.name}</h4><p>${m.role}</p>`;
    card.dataset.idx = i;
    stage.appendChild(card);
    card.addEventListener('click', () => openModal(i));
    return card;
  });

  /* scroll-triggered entrance */
  const io = new IntersectionObserver((entries) => {
    entries.forEach(e => {
      if (e.isIntersecting) {
        cards.forEach(c => c.classList.add('visible'));
        io.unobserve(e.target);
      }
    });
  }, { threshold: 0.2 });
  io.observe(stage);

  /* modal */
  const tmImg = document.getElementById('tmImg');
  const tmName = document.getElementById('tmName');
  const tmRole = document.getElementById('tmRole');
  const tmBio = document.getElementById('tmBio');
  const tmTags = document.getElementById('tmTags');
  const tmQuote = document.getElementById('tmQuote');

  function openModal(idx) {
    const m = TEAM[idx];
    tmImg.src = m.img; tmImg.alt = m.name;
    tmName.textContent = m.name;
    tmRole.textContent = m.role;
    tmBio.textContent = m.bio;
    tmTags.innerHTML = m.tags.map(t => `<span>${t}</span>`).join('');
    tmQuote.textContent = m.quote;
    modal.classList.add('open');
    document.body.style.overflow = 'hidden';
  }
  function closeModal() {
    modal.classList.remove('open');
    document.body.style.overflow = '';
  }
  modal.querySelector('.team-modal__bg').addEventListener('click', closeModal);
  modal.querySelector('.team-modal__close').addEventListener('click', closeModal);
  addEventListener('keydown', e => { if (e.key === 'Escape') closeModal(); });
})();

/* ==================================================================
   QUIZ — 3-step package finder
   ================================================================== */
;(function(){
  const questions = [
    { q:'What best describes your current setup?', opts:['Solo Agent','Small Team (2-5)','Growing Team (6-10)','Brokerage'] },
    { q:'What is your biggest marketing goal right now?', opts:['Build my brand','Get more leads','Save time on content','All of the above'] },
    { q:'What is your monthly marketing budget?', opts:['$1,500 - $2,000','$2,000 - $3,000','$3,000 - $5,000','$5,000+'] }
  ];
  let step = 0;
  const card  = document.getElementById('quizCard');
  if (!card) return;
  const label = document.getElementById('qLabel');
  const pctEl = document.getElementById('qPct');
  const bar   = document.getElementById('qBar');
  const title = document.getElementById('qTitle');
  const grid  = document.getElementById('qOpts');

  function render() {
    const d = questions[step];
    label.textContent = 'Question ' + (step+1) + ' of ' + questions.length;
    const p = Math.round(((step+1)/questions.length)*100);
    pctEl.textContent = p + '%';
    bar.style.width = p + '%';
    title.textContent = d.q;
    grid.innerHTML = '';
    d.opts.forEach(o => {
      const btn = document.createElement('button');
      btn.type = 'button';
      btn.innerHTML = o + '<span style="width:22px;height:22px;border-radius:50%;border:1.5px solid rgba(76,53,21,.25);flex:none;display:flex;align-items:center;justify-content:center;transition:all 260ms ease;"></span>';
      btn.style.cssText = 'display:flex;align-items:center;justify-content:space-between;padding:18px 22px;border-radius:14px;min-height:62px;border:1.5px solid rgba(76,53,21,.15);background:transparent;color:var(--ink);font:inherit;font-size:16px;cursor:pointer;transition:all 260ms ease;';
      btn.onmouseenter = () => { if(!btn.dataset.on) btn.style.borderColor='rgba(76,53,21,.35)'; };
      btn.onmouseleave = () => { if(!btn.dataset.on) btn.style.borderColor='rgba(76,53,21,.15)'; };
      btn.onclick = () => {
        grid.querySelectorAll('button').forEach(b => {
          delete b.dataset.on; b.style.background='transparent'; b.style.color='var(--ink)';
          b.style.borderColor='rgba(76,53,21,.15)';
          b.querySelector('span').style.cssText='width:22px;height:22px;border-radius:50%;border:1.5px solid rgba(76,53,21,.25);flex:none;display:flex;align-items:center;justify-content:center;';
          b.querySelector('span').innerHTML='';
        });
        btn.dataset.on='1'; btn.style.background='var(--cta)'; btn.style.color='var(--paper)';
        btn.style.borderColor='var(--cta)';
        const c=btn.querySelector('span');
        c.style.background='rgba(255,255,255,.3)'; c.style.borderColor='rgba(255,255,255,.5)';
        c.innerHTML='<svg width="12" height="12" viewBox="0 0 12 12" fill="none"><path d="M2 6l3 3 5-5" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg>';
        setTimeout(()=>{
          if(step<questions.length-1){
            step++;
            card.style.transition='opacity 200ms ease,transform 200ms ease';
            card.style.opacity='0'; card.style.transform='translateY(8px)';
            setTimeout(()=>{ render(); card.style.opacity='1'; card.style.transform='translateY(0)'; },220);
          } else {
            card.style.opacity='0'; card.style.transform='translateY(8px)';
            setTimeout(()=>{
              label.textContent='Complete'; pctEl.textContent='100%'; bar.style.width='100%';
              title.textContent='We have your perfect match.';
              grid.innerHTML='<p style="opacity:.7;margin:0 0 18px;grid-column:1/-1;">Based on your answers, we\'ll prepare a tailored recommendation. Book a call to walk through it together.</p><a href="#" class="btn btn--dark" style="display:inline-flex;align-items:center;gap:8px;grid-column:1/-1;" data-hot>Book a 30-minute call <span>&rarr;</span></a>';
              card.style.opacity='1'; card.style.transform='translateY(0)';
            },220);
          }
        },480);
      };
      grid.appendChild(btn);
    });
  }
  render();
})();

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
    { img:'data:image/webp;base64,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', x:7, y:16, size:54 },
    { img:'data:image/webp;base64,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', x:89, y:22, size:46 },
    { img:'data:image/webp;base64,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', x:91, y:62, size:50 },
    { img:'data:image/webp;base64,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', x:5, y:42, size:34 },
    { img:'data:image/webp;base64,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', x:19, y:86, size:36 },
    { img:'data:image/webp;base64,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', x:83, y:80, size:40 },
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
