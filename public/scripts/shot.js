/* Hero shot — writes the open/closed progress of the plate under the hero.
 *
 * The stage is sticky inside a track two-and-a-bit viewports tall, so while
 * the track passes the top of the screen the plate is pinned and the only
 * thing changing is this one number. Everything visual (margin, corner
 * radius, height, veil, buttons) is a function of it in CSS, so the stages
 * cannot drift apart the way separately-timed animations do.
 *
 * The number reaches 1 well before the end of the pinned distance — at HOLD —
 * and the remaining scroll is spent held wide open. Without that beat the plate
 * finishes opening exactly as it leaves and the payoff is never actually on
 * screen; the track is sized so the held part is roughly half a viewport.
 */
(function () {
  var sec = document.getElementById('shot');
  if (!sec) return;

  // The CSS already presents a static, fully legible plate in this case.
  if (window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

  var track = sec.querySelector('.shot__track');
  if (!track) return;

  // Fraction of the pinned run spent opening; the rest is the held beat.
  var HOLD = 0.62;

  /* The plate used to take its progress straight from the scroll position, so
     the opening was only ever as smooth as the input: a wheel notch is a
     discrete jump of many pixels, and the clip jumped with it. The scroll
     position is now a TARGET, and what actually gets written chases it a
     fraction of the remaining distance each frame. Continuous input (a
     trackpad, a touch drag) is unaffected; a notched wheel becomes a glide.

     Everything visual is a function of these two numbers, so smoothing them
     here smooths the clip, the veil, the copy and the buttons together, and
     they still cannot drift apart. */
  var CATCH = 0.18;          // of the remaining gap, per 60fps frame
  var SETTLED = 0.0004;      // close enough to snap and stop the loop

  var tp = 0, te = 0;        // where the scroll says we are
  var sp = 0, se = 0;        // what is actually on screen
  var raf = 0, last = 0;
  var lastP = -1, lastE = -1;

  function clamp01(n) { return n < 0 ? 0 : n > 1 ? 1 : n; }

  function measure() {
    var r = track.getBoundingClientRect();
    var vh = window.innerHeight;

    /* Entry: 0 while the plate is still below the fold, 1 by the time it has
       climbed to the top of the screen. This is the phase that happens at the
       bottom of the hero, before anything is pinned, and it is what fades the
       dark ground in — without it the veil would appear out of nowhere the
       moment the pin engaged. */
    te = clamp01(1 - r.top / vh);

    /* Open: how far through the pinned run we are. Reaching 1 at HOLD leaves
       the last (1 - HOLD) of the run as a held beat of full bleed, so the
       finished plate sits still for a moment before the next section. */
    var span = (r.height - vh) * HOLD;
    tp = span > 0 ? clamp01(-r.top / span) : 0;
  }

  function paint() {
    // sub-pixel churn isn't worth a style recalc
    if (Math.abs(sp - lastP) > 0.0015) {
      lastP = sp;
      sec.style.setProperty('--sp', sp.toFixed(4));
    }
    if (Math.abs(se - lastE) > 0.0015) {
      lastE = se;
      sec.style.setProperty('--se', se.toFixed(4));
    }
  }

  function frame(now) {
    /* dt-scaled so the catch-up takes the same TIME on a 60Hz and a 144Hz
       screen; capped so a backgrounded tab doesn't come back and jump. */
    var dt = last ? Math.min(now - last, 64) : 16.667;
    last = now;
    var k = 1 - Math.pow(1 - CATCH, dt / 16.667);

    sp += (tp - sp) * k;
    se += (te - se) * k;

    if (Math.abs(tp - sp) < SETTLED && Math.abs(te - se) < SETTLED) {
      sp = tp; se = te;
      paint();
      raf = 0; last = 0;
      return;
    }
    paint();
    raf = requestAnimationFrame(frame);
  }

  function schedule() {
    measure();
    if (!raf) { last = 0; raf = requestAnimationFrame(frame); }
  }

  function snap() {
    measure();
    sp = tp; se = te;
    paint();
  }

  addEventListener('scroll', schedule, { passive: true });
  addEventListener('resize', snap, { passive: true });
  addEventListener('orientationchange', function () { setTimeout(snap, 300); });
  snap();   // first paint is exact, not eased in from zero
})();
