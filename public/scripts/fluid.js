/* ==================================================================
   HERO FLUID — cloud bank that the pointer pushes through.

   The model is "a standing pattern, disturbed" rather than "dye,
   injected and dissipated". The first version did the latter and it
   does not hold up: semi-Lagrangian advection resamples the whole
   field bilinearly every frame, which is a blur, so over a few hundred
   frames every structure smears into a flat haze. Measured, it went
   from 51% coverage at 0.186 mean alpha to 67% at 0.133 over fifty
   seconds — spreading out and thinning until the hero read as empty.

   So instead: a fixed target cloud field is built once (value-noise
   fbm, weighted toward the margins), the velocity field advects the
   dye away from it, and every frame the dye is pulled a little way
   back toward the target. The clouds therefore always exist, the
   pointer smears them, and they heal over a couple of seconds. There
   is nothing to run out of, and no accumulation to run away with.

   The velocity field is a real fluid — advected through itself and
   made divergence-free by Jacobi pressure iterations, which is what
   produces curling rather than sliding — but it now runs in a closed
   box. Without wall conditions the flow could leave through the edges,
   carrying the dye out with it.

   Three dye channels carry the studio's warm neutrals, mixed by
   weight, so the clouds read as the same material as the 3D crown.
   ================================================================== */
(function () {
  'use strict';

  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

  /* One solver per surface.

     Everything below this point used to be the body of a single IIFE bound to
     the hero. It is a factory now, so the shot plate can run a field of its
     own: two instances, each with its own grid, pointer and frame loop, which
     is the only honest way to do it — the solver's state is the grid, and a
     grid cannot straddle two elements of different sizes.

     Density is per-instance because the same numbers do not read the same on
     both surfaces: what looks like weather over white paper looks like fog
     over a photograph. */
  function makeFluid(host, cv, opts) {
    if (!host || !cv || !cv.getContext) return;
    var ctx = cv.getContext('2d', { alpha: true });
    if (!ctx) return;
    opts = opts || {};
    /* The box the field measures itself against is not always the box that can
       hear the pointer: the sky sits behind both sections, so events land on
       their content, not on it. Geometry comes from `host`, events from
       `pointerHost`. Coordinates outside the grid are harmless — splat clamps
       to the field's bounds. */
    var ptrHost = opts.pointerHost || host;

    /* --- the palette the dye mixes between ------------------------- */
    var C = [
      [227, 210, 190],   /* light sand   */
      [201, 172, 139],   /* champagne    */
      [158, 123, 82]     /* deep tan     */
    ];
    /* the cloud plate underneath carries the base density; this layer is the
       part that moves, so it needs enough weight to be seen doing it */
    var ALPHA_GAIN = opts.gain != null ? opts.gain : 0.66;   /* dye amount -> opacity */
    var MAX_ALPHA = opts.maxAlpha != null ? opts.maxAlpha : 0.58;    /* never so dense the headline has to fight it */

    var HEAL = 0.011;        /* per frame pull back toward the target field */
    var VEL_KEEP = 0.982;    /* per-frame velocity decay */
    var VMAX = 4.0;          /* cells/frame — past this, advection teleports  */
    /* Five passes instead of eight. The field is blurred by 9-11px and
       upscaled from a low-res grid, so the extra divergence the shorter solve
       leaves behind is far below what the blur resolves — measured, the two
       are indistinguishable, and the projection is the hot loop. */
    var ITER = opts.iter != null ? opts.iter : 5;

    /* --- grid ------------------------------------------------------ */
    var COLS = 0, ROWS = 0, CELLS = 0;
    var u, v, u0, v0, d0, d1, d2, t0, t1, t2, g0, g1, g2, pres, dvg;
    var mesh = document.createElement('canvas');
    var mctx = mesh.getContext('2d');
    var img = null;

    function alloc(cols, rows) {
      COLS = cols; ROWS = rows; CELLS = cols * rows;
      u = new Float32Array(CELLS); v = new Float32Array(CELLS);
      u0 = new Float32Array(CELLS); v0 = new Float32Array(CELLS);
      d0 = new Float32Array(CELLS); d1 = new Float32Array(CELLS); d2 = new Float32Array(CELLS);
      t0 = new Float32Array(CELLS); t1 = new Float32Array(CELLS); t2 = new Float32Array(CELLS);
      g0 = new Float32Array(CELLS); g1 = new Float32Array(CELLS); g2 = new Float32Array(CELLS);
      pres = new Float32Array(CELLS); dvg = new Float32Array(CELLS);
      mesh.width = cols; mesh.height = rows;
      img = mctx.createImageData(cols, rows);
      buildTarget();
    }

    /* --- the standing cloud field ---------------------------------- */
    /* Every shift here must be unsigned. With an arithmetic >>, the sign bit
       XORs against itself and is always cleared, so the hash can only ever
       return 0..0.5 with a mean of 0.25 — which quietly starved the whole
       target field below its threshold and left the hero empty. */
    function hash2(i, j) {
      var h = (Math.imul(i, 374761393) ^ Math.imul(j, 668265263)) | 0;
      h = Math.imul(h ^ (h >>> 15), 1274126177);
      h = Math.imul(h ^ (h >>> 13), 1103515245);
      return ((h ^ (h >>> 16)) >>> 0) / 4294967295;
    }
    function vnoise(x, y) {
      var i = Math.floor(x), j = Math.floor(y);
      var fx = x - i, fy = y - j;
      fx = fx * fx * (3 - 2 * fx); fy = fy * fy * (3 - 2 * fy);
      var a = hash2(i, j), b = hash2(i + 1, j), c = hash2(i, j + 1), e = hash2(i + 1, j + 1);
      return (a + (b - a) * fx) * (1 - fy) + (c + (e - c) * fx) * fy;
    }
    function fbm(x, y) {
      return vnoise(x, y) * 0.55
           + vnoise(x * 2.1 + 9.3, y * 2.1 + 4.7) * 0.28
           + vnoise(x * 4.3 + 2.1, y * 4.3 + 7.9) * 0.17;
    }
    function clamp01(x) { return x < 0 ? 0 : (x > 1 ? 1 : x); }

    /* Weighted toward the margins: the headline wants clean white under
       it, and weather gathering at the edges frames the copy rather than
       sitting on top of it. The CSS mask hollows the middle as well —
       this keeps the solver from wasting dye there in the first place. */
    function buildTarget() {
      var S = 5.5;                      /* noise features across the width */
      var asp = ROWS / COLS;
      var i, j, k;

      /* Normalise against the field's own range before shaping it. fbm's
         actual spread depends on how many lattice points the domain covers,
         so a fixed threshold against raw noise is a coin toss — normalising
         means the cloud cover is what the numbers below say it is. */
      var raw = new Float32Array(CELLS), lo = 1e9, hi = -1e9;
      for (j = 0; j < ROWS; j++) {
        for (i = 0; i < COLS; i++) {
          var n0 = fbm((i / COLS) * S, (j / ROWS) * S * asp);
          raw[j * COLS + i] = n0;
          if (n0 < lo) lo = n0;
          if (n0 > hi) hi = n0;
        }
      }
      var span = (hi - lo) || 1;

      for (j = 0; j < ROWS; j++) {
        for (i = 0; i < COLS; i++) {
          k = j * COLS + i;
          var nx = (i / COLS) * S, ny = (j / ROWS) * S * asp;

          var n = (raw[k] - lo) / span;
          var body = clamp01((n - 0.40) / 0.34);
          body = body * body * (3 - 2 * body);

          var ax = (i / (COLS - 1) - 0.5) * 2;
          var ay = (j / (ROWS - 1) - 0.5) * 2;
          var r = Math.sqrt(ax * ax * 0.82 + ay * ay);
          var edge = clamp01((r - 0.34) / 0.52);
          edge = edge * edge * (3 - 2 * edge);

          var amt = body * edge * 1.15;
          if (amt <= 0) { g0[k] = 0; g1[k] = 0; g2[k] = 0; continue; }

          var t = fbm(nx * 0.7 + 31.2, ny * 0.7 + 17.6);
          var w2 = clamp01((t - 0.54) / 0.26);
          var w0 = clamp01((0.46 - t) / 0.26);
          var w1 = 1 - w0 - w2; if (w1 < 0) w1 = 0;

          g0[k] = amt * w0; g1[k] = amt * w1; g2[k] = amt * w2;
        }
      }
    }

    /* bilinear read with clamped edges */
    function sample(f, x, y) {
      if (x < 0) x = 0; else if (x > COLS - 1.001) x = COLS - 1.001;
      if (y < 0) y = 0; else if (y > ROWS - 1.001) y = ROWS - 1.001;
      var i = x | 0, j = y | 0;
      var fx = x - i, fy = y - j;
      var a = j * COLS + i, b = a + 1, c = a + COLS, e = c + 1;
      var top = f[a] + (f[b] - f[a]) * fx;
      var bot = f[c] + (f[e] - f[c]) * fx;
      return top + (bot - top) * fy;
    }

    function advect(dst, src, dt) {
      for (var j = 0; j < ROWS; j++) {
        var row = j * COLS;
        for (var i = 0; i < COLS; i++) {
          var k = row + i;
          dst[k] = sample(src, i - dt * u[k], j - dt * v[k]);
        }
      }
    }

    /* no flow through the walls; tangential flow slips freely along them.
       Without this the field can develop a net drift that carries
       everything out through an edge. */
    function velBounds() {
      var j, i, l, r, t, b;
      for (j = 0; j < ROWS; j++) {
        l = j * COLS; r = l + COLS - 1;
        u[l] = 0; u[r] = 0;
        v[l] = v[l + 1]; v[r] = v[r - 1];
      }
      for (i = 0; i < COLS; i++) {
        t = i; b = (ROWS - 1) * COLS + i;
        v[t] = 0; v[b] = 0;
        u[t] = u[t + COLS]; u[b] = u[b - COLS];
      }
    }
    /* pressure mirrors outward at the walls (Neumann). Left at zero it
       behaves as a hole for the solver to push flow through. */
    function presBounds() {
      var j, i, l, r, t, b;
      for (j = 0; j < ROWS; j++) {
        l = j * COLS; r = l + COLS - 1;
        pres[l] = pres[l + 1]; pres[r] = pres[r - 1];
      }
      for (i = 0; i < COLS; i++) {
        t = i; b = (ROWS - 1) * COLS + i;
        pres[t] = pres[t + COLS]; pres[b] = pres[b - COLS];
      }
    }

    /* remove the divergence, which is what makes it swirl instead of blow */
    function project() {
      var i, j, k, n;
      for (j = 1; j < ROWS - 1; j++) {
        for (i = 1; i < COLS - 1; i++) {
          k = j * COLS + i;
          dvg[k] = 0.5 * (u[k + 1] - u[k - 1] + v[k + COLS] - v[k - COLS]);
          pres[k] = 0;
        }
      }
      for (n = 0; n < ITER; n++) {
        for (j = 1; j < ROWS - 1; j++) {
          for (i = 1; i < COLS - 1; i++) {
            k = j * COLS + i;
            pres[k] = (pres[k - 1] + pres[k + 1] + pres[k - COLS] + pres[k + COLS] - dvg[k]) * 0.25;
          }
        }
        presBounds();
      }
      for (j = 1; j < ROWS - 1; j++) {
        for (i = 1; i < COLS - 1; i++) {
          k = j * COLS + i;
          u[k] -= 0.5 * (pres[k + 1] - pres[k - 1]);
          v[k] -= 0.5 * (pres[k + COLS] - pres[k - COLS]);
        }
      }
      velBounds();
    }

    /* a fast swipe can otherwise ask advection to backtrace half the grid
       in one step, which does not smear — it teleports */
    function clampVel() {
      for (var k = 0; k < CELLS; k++) {
        var a = u[k]; if (a > VMAX) u[k] = VMAX; else if (a < -VMAX) u[k] = -VMAX;
        var b = v[k]; if (b > VMAX) v[k] = VMAX; else if (b < -VMAX) v[k] = -VMAX;
      }
    }

    /* a soft round push, in grid coordinates */
    function splat(x, y, dx, dy, tone, amount, radius) {
      var r2 = radius * radius;
      var i0 = Math.max(0, (x - radius) | 0), i1 = Math.min(COLS - 1, (x + radius) | 0);
      var j0 = Math.max(0, (y - radius) | 0), j1 = Math.min(ROWS - 1, (y + radius) | 0);
      var dye = amount ? (tone === 0 ? d0 : (tone === 1 ? d1 : d2)) : null;
      for (var j = j0; j <= j1; j++) {
        for (var i = i0; i <= i1; i++) {
          var ax = i - x, ay = j - y;
          var q = (ax * ax + ay * ay) / r2;
          if (q > 1) continue;
          var f = Math.exp(-q * 3.2);
          var k = j * COLS + i;
          u[k] += dx * f;
          v[k] += dy * f;
          if (dye) dye[k] += amount * f;
        }
      }
    }

    function render() {
      var px = img.data;
      var c0r = C[0][0], c0g = C[0][1], c0b = C[0][2];
      var c1r = C[1][0], c1g = C[1][1], c1b = C[1][2];
      var c2r = C[2][0], c2g = C[2][1], c2b = C[2][2];
      for (var k = 0, o = 0; k < CELLS; k++, o += 4) {
        var a0 = d0[k], a1 = d1[k], a2 = d2[k];
        var sum = a0 + a1 + a2;
        if (sum < 0.0015) { px[o + 3] = 0; continue; }
        var inv = 1 / sum;
        px[o]     = (a0 * c0r + a1 * c1r + a2 * c2r) * inv;
        px[o + 1] = (a0 * c0g + a1 * c1g + a2 * c2g) * inv;
        px[o + 2] = (a0 * c0b + a1 * c1b + a2 * c2b) * inv;
        var a = sum * ALPHA_GAIN;
        px[o + 3] = (a > MAX_ALPHA ? MAX_ALPHA : a) * 255;
      }
      mctx.putImageData(img, 0, 0);
      ctx.clearRect(0, 0, cv.width, cv.height);
      ctx.drawImage(mesh, 0, 0, cv.width, cv.height);
    }

    /* --- ambient: slow stirrers. Velocity only — the dye they would once
       have injected is now the target field's job, and these exist purely
       so the bank keeps breathing when nobody is touching it. ---------- */
    var EM = [
      { p: 0.00, sx: 0.80, sy: 0.30, ax: 0.16, ay: 0.20, sp: 0.052 },
      { p: 2.10, sx: 0.86, sy: 0.70, ax: 0.12, ay: 0.16, sp: 0.038 },
      { p: 4.20, sx: 0.17, sy: 0.72, ax: 0.15, ay: 0.17, sp: 0.031 },
      { p: 1.05, sx: 0.14, sy: 0.28, ax: 0.12, ay: 0.16, sp: 0.045 }
    ];
    var emPrev = [];

    function ambient(time, dt) {
      for (var n = 0; n < EM.length; n++) {
        var e = EM[n];
        var a = e.p + time * e.sp;
        var x = (e.sx + Math.cos(a) * e.ax) * COLS;
        var y = (e.sy + Math.sin(a * 1.37) * e.ay) * ROWS;
        var prev = emPrev[n];
        if (prev) splat(x, y, (x - prev[0]) * 2.6, (y - prev[1]) * 2.6, 0, 0, COLS * 0.13);
        emPrev[n] = [x, y];
      }
    }

    /* --- pointer ---------------------------------------------------- */
    var px0 = -1, py0 = -1, pending = null;
    ptrHost.addEventListener('pointermove', function (ev) {
      var r = host.getBoundingClientRect();
      pending = [((ev.clientX - r.left) / r.width) * COLS, ((ev.clientY - r.top) / r.height) * ROWS];
    }, { passive: true });
    ptrHost.addEventListener('pointerleave', function () { px0 = -1; py0 = -1; pending = null; }, { passive: true });

    function pointer() {
      if (!pending) return;
      var x = pending[0], y = pending[1];
      if (px0 >= 0) {
        var dx = x - px0, dy = y - py0;
        var travel = Math.sqrt(dx * dx + dy * dy);
        if (travel > 0.05) {
          /* scale the push, but cap it: past a point a faster swipe should
             not keep hitting harder, or one flick wipes the bank out */
          var g = Math.min(1, 7 / travel);
          splat(x, y, dx * 1.5 * g, dy * 1.5 * g, 2, Math.min(0.09, travel * 0.010), COLS * 0.065);
        }
      }
      px0 = x; py0 = y;
      pending = null;
    }

    /* --- sizing ----------------------------------------------------- */
    /* Grid width. This is the single biggest lever on cost: the solve is
       O(cells) with a multiplier of roughly (advections + ITER), so halving
       the cells halves the per-frame work. 150 was chosen when one field
       covered only the hero; two fields, one of them nearly three viewports
       tall, do not have that budget. */
    var TARGET_COLS = opts.cols != null ? opts.cols : 112;
    function resize() {
      var r = host.getBoundingClientRect();
      if (!r.width || !r.height) return;
      var cols = Math.min(TARGET_COLS, Math.max(60, Math.round(r.width / 9)));
      var rows = Math.max(40, Math.round(cols * (r.height / r.width)));
      /* The display canvas stays deliberately low-res: it is upscaled and
         blurred, so full DPR here would be pixels thrown away. Dropped from
         0.5 to 0.38 — the bilinear upscale is itself a blur, so pushing the
         softening into it lets the CSS blur radius come down, and that blur
         measured as the single most expensive thing on the page: 370ms/frame
         with it, 211ms without, 101ms with no canvas at all. Fewer pixels
         to rasterise on both counts. */
      cv.width = Math.round(r.width * 0.38);
      cv.height = Math.round(r.height * 0.38);
      if (cols !== COLS || rows !== ROWS) {
        alloc(cols, rows);
        emPrev = [];
        if (started) fill();
      }
    }

    /* start from the formed clouds, so the reveal lands on weather rather
       than on an empty sky that slowly fills */
    function fill() { d0.set(g0); d1.set(g1); d2.set(g2); }

    /* --- loop ------------------------------------------------------- */
    var started = false, running = false, onScreen = true, last = 0, clock = 0;

    function frame(now) {
      if (!running) return;
      var dt = last ? (now - last) / 16.667 : 1;
      last = now;
      if (dt > 2.5) dt = 2.5;      /* a backgrounded tab must not explode */
      clock += dt * 0.0167;

      pointer();
      ambient(clock, dt);
      clampVel();

      /* advect velocity through itself, then make it divergence-free */
      advect(u0, u, dt);
      advect(v0, v, dt);
      for (var q = 0; q < CELLS; q++) { u[q] = u0[q] * VEL_KEEP; v[q] = v0[q] * VEL_KEEP; }
      project();

      advect(t0, d0, dt);
      advect(t1, d1, dt);
      advect(t2, d2, dt);

      /* pull back toward the standing field. This is what stops the
         advection blur from flattening everything into a uniform haze:
         structure is continuously restored instead of only decaying. */
      var h = HEAL * dt; if (h > 0.5) h = 0.5;
      for (var k = 0; k < CELLS; k++) {
        d0[k] = t0[k] + (g0[k] - t0[k]) * h;
        d1[k] = t1[k] + (g1[k] - t1[k]) * h;
        d2[k] = t2[k] + (g2[k] - t2[k]) * h;
      }

      render();
      requestAnimationFrame(frame);
    }

    function start() {
      if (started) return;
      started = true;
      fill();
      cv.classList.add('is-live');
      resume();
    }
    function resume() {
      if (!started || running || !onScreen || document.hidden) return;
      running = true; last = 0;
      requestAnimationFrame(frame);
    }
    function pause() { running = false; }

    resize();
    var rt = 0;
    addEventListener('resize', function () {
      clearTimeout(rt);
      rt = setTimeout(resize, 180);
    }, { passive: true });

    document.addEventListener('visibilitychange', function () {
      if (document.hidden) pause(); else resume();
    });

    if (window.IntersectionObserver) {
      new IntersectionObserver(function (es) {
        onScreen = es[0].isIntersecting;
        if (onScreen) resume(); else pause();
      }, { threshold: 0 }).observe(host);
    }

    /* hold off until the crown mark has docked — the intro owns the screen
       until then, and the solver has no business competing with it */
    if (document.body.classList.contains('hero-revealed')) {
      start();
    } else {
      var mo = new MutationObserver(function () {
        if (document.body.classList.contains('hero-revealed')) { mo.disconnect(); start(); }
      });
      mo.observe(document.body, { attributes: true, attributeFilter: ['class'] });
    }
  }

  makeFluid(document.querySelector('.atmos__sky'), document.getElementById('heroFluid'),
            { pointerHost: document.querySelector('.atmos'), cols: 112 });
  makeFluid(document.querySelector('.shot__frame'), document.getElementById('shotFluid'),
            { gain: 0.44, maxAlpha: 0.32, cols: 96 });
})();
