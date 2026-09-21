/* Hero intro - the crown draws itself on, then settles into the page.
 *
 * The mark is the same artwork the hero already carried in its corner, so the
 * intro and the resting mark are one element: it starts big and centred with
 * nothing drawn, the stroke traces it in (see .crown-draw in the stylesheet),
 * and then a single transform carries it home - which is behind the headline,
 * not the top corner. Nothing is swapped or cross-faded at the end, because
 * there is only ever one crown.
 *
 * This owns exactly one property on .liquid__art - its transform. The float
 * loop in main.js owns .liquid__inner and the scroll-grow owns .liquid, so the
 * three can run at once without writing over each other.
 */
(function () {
  var stage = document.querySelector('.liquid--a .liquid__stage');
  var art   = document.querySelector('.liquid--a .liquid__art');
  var hero  = document.getElementById('top');
  var body = document.body;
  /* The mark rests behind the headline, so the headline is what it measures.
     Deliberately re-queried on every measurement rather than held in a
     variable: main.js splits the headline by emptying the <h1> and appending
     CLONES of its children, so any element captured from inside it before that
     runs is left detached, and a detached node measures 0x0. That was the
     "crown jumps to the right" bug - a zero rect makes restTransform() give up
     and return '', the transform never gets written, and an untransformed
     stage sits where the stylesheet parks it, which is the hero's top-right
     corner. The <h1> itself is only ever emptied, never replaced, so looking
     it up fresh each time is always a live node. */
  function headlineRect() {
    var hl = document.querySelector('.hero__hl');
    if (!hl) return null;
    var r = hl.getBoundingClientRect();
    /* mid-split the <h1> is empty and collapses; wait for the next measure */
    return (r.width && r.height) ? r : null;
  }

  /* Everything the page shows after the hero is gated on this class, so it has
     to be set on every path out of here - including the ones where the intro
     never runs at all. */
  function reveal() {
    body.classList.add('hero-revealed');
    /* the nav has been sitting closed as a bare logo through the intro -
       let it open now that the page itself has arrived */
    body.classList.remove('nav-boot');
  }

  if (!stage || !art || !hero) { reveal(); return; }


  /* ---- where the intro parks it ----------------------------------------
     Sat a little below the hero's middle so it clears the nav pill, then made
     as large as that position allows. The hero clips, so the limit is the
     distance from the chosen centre to the NEARER edge - centring lower buys
     width but spends height, and the size has to respect what is left.
     Everything is measured against the mark's extent AT ITS REST ANGLE: off
     the square, the corners reach past the artwork's own box (at 12 degrees a
     500-wide mark needed 560 of room). The angle is read from --r0 rather than
     written down twice - the float loop in main.js applies that same custom
     property, so a change there cannot leave these two disagreeing. */
  var CENTRE_Y = 0.54;  /* of the hero's height, from its top */
  var INTRO_W  = 0.46;  /* widest the tilted mark may get, as a fraction of the hero */
  var FIT      = 0.94;  /* never let the spikes touch the edge */
  /* What the float loop in main.js adds to the mark's reach, in the stage's
     own units. That loop owns .liquid__inner and keeps nudging the mark
     INSIDE the box this file places, so its travel is invisible to a
     measurement of .liquid__stage - and it only ever travels DOWN: introY
     starts the mark 20px low and rises it, and the ambient wy adds up to 11
     more. Sampled every 80ms across the whole intro at five viewports, the
     artwork reached 29-32px below the stage's layout box and never one pixel
     above it.
     The hero clips, so as far as fitting goes that reach is part of the
     mark's height and has to come out of the room before the mark is sized.
     Left out - which it was - the mark overran the hero's foot by 36px at
     1920x1080, 31px at 1600x900 and 24-28px at 1366x768 and 1280x720, and
     the artwork is cropped tight to its own alpha, so every one of those
     pixels was a flat cut across the bottom of the crown. */
  var FLOAT    = 34;
  var AR = 900 / 625;
  var LIQ  = document.querySelector('.liquid--a');
  var TILT = (parseFloat(getComputedStyle(LIQ).getPropertyValue('--r0')) || 0)
             * Math.PI / 180;

  /* A mark of upright width W, tilted, needs this much room each way. */
  var CO = Math.cos(TILT), SI = Math.sin(TILT);
  var SPAN_X = CO + SI / AR;
  var SPAN_Y = SI + CO / AR;

  /* The stage's LAYOUT box - where the page would put the mark with no
     transform of ours on it. Every placement below is a delta from that, so it
     has to be the untransformed box.
     getBoundingClientRect cannot give it: the stage carries a transform
     transition, so assigning transform:none does not change the used value,
     it only starts an animation towards it - and the rect that comes back is
     still the mark's current, already-scaled box. Placements measured that way
     compound a little further off on every re-measure.
     offsetWidth/offsetLeft are layout values and ignore transforms entirely,
     on this element and on its transformed ancestors, so they give the answer
     directly and without touching a single style. */
  function stageBox() {
    var h = hero.getBoundingClientRect();
    var liquid = stage.parentNode;          /* .liquid--a, positioned in .hero */
    return {
      left:   h.left + liquid.offsetLeft + stage.offsetLeft,
      top:    h.top  + liquid.offsetTop  + stage.offsetTop,
      width:  stage.offsetWidth,
      height: stage.offsetHeight
    };
  }

  function place(s, cx, cy, k) {
    var dx = cx - (s.left + s.width  / 2);
    var dy = cy - (s.top  + s.height / 2);
    return 'translate(' + dx.toFixed(1) + 'px,' + dy.toFixed(1) + 'px) scale(' + k.toFixed(4) + ')';
  }

  function introTransform() {
    var s = stageBox();
    var h = hero.getBoundingClientRect();
    if (!s.width || !h.width) return null;

    var cx = h.left + h.width / 2;
    /* narrow screens have height to spare and no width, so the mark is
       allowed to take much more of it */
    var wFrac = h.width < 720 ? 0.78 : INTRO_W;

    /* Sized against the hero's WHOLE height, not the distance from CENTRE_Y
       down to the nearer edge. Those are the same number only while the mark
       can actually sit at CENTRE_Y; on a 16:9 hero it cannot, and measuring
       to the nearer edge threw away all the room on the other side - which
       is the room this needs. */
    var kW = h.width * wFrac / SPAN_X / s.width;
    var kH = h.height * FIT / (s.width * SPAN_Y + FLOAT);
    var k  = Math.min(kW, kH);

    /* Then place it. CENTRE_Y is where it WANTS to sit; it rides up from
       there by however much the float's reach would otherwise hang past the
       hero's foot, and no further than its own top edge allows. On a 16:9
       hero that lifts it about 65px and it passes behind the nav pill, which
       it already did at 1600x900 and below. The size is what matters here -
       it is the same on every screen as it was. */
    var half = k * s.width * SPAN_Y / 2;
    var pad  = h.height * (1 - FIT) / 2;
    var cy   = h.top + h.height * CENTRE_Y;
    cy = Math.min(cy, h.bottom - pad - half - k * FLOAT);
    cy = Math.max(cy, h.top + pad + half);

    return place(s, cx, cy, k);
  }

  /* ---- where it comes to rest -------------------------------------------
     Behind the headline, centred on it, so the type reads over the mark and
     the two sit as one lockup. */
  var REST_W   = 0.78;   /* widest the tilted mark may get, against the headline */
  /* Clearance at the hero's foot. It has to cover the ambient float as well as
     the mark itself - the loop in main.js keeps nudging and breathing the form
     by a few pixels after it lands, and the hero clips. */
  var REST_FIT = 0.93;
  var REST_MIN = 0.68;   /* share of the hero's height the mark may fill */

  /* Centred on the headline and sitting behind it, rather than tucked under the
     last word. .hero__inner is z-index 5 and .liquid is 1, so the type already
     paints over the mark - this only has to put the two in the same place.

     Both axes are the headline's own centre, so the mark cannot drift off to
     one side: there is no separate word to measure and nothing that can wrap
     out from under it. Capped against the hero's height as well as the
     headline's width, because the hero clips and the float loop in main.js
     keeps nudging the mark a few pixels after it lands. */
  function restTransform() {
    var s = stageBox();
    var h = hero.getBoundingClientRect();
    if (!s.width || !h.width) return '';

    /* If the headline cannot be measured this instant - mid-split, or the font
       still swapping - fall back to the hero's own centre instead of returning
       nothing. Returning nothing leaves the transform unwritten, and an
       untransformed stage sits where the stylesheet parks it, out at
       right:2%; top:4%. Centred on the hero is off by a few pixels and
       corrects itself on the next measure; parked in the corner is off by half
       a page and stays there. The mark must never be the thing that looks
       broken. */
    var hl = headlineRect() || {
      left: h.left, width: h.width,
      top:  h.top + h.height * 0.30, height: h.height * 0.30
    };

    var cx = hl.left + hl.width / 2;
    var cy = hl.top  + hl.height / 2;

    /* Three caps, tightest wins. The first two are the old pair - the
       headline's own width, and a share of the hero's height. The third is
       the one that was missing: the real distance from the headline's centre
       down to the hero's foot, with the float's reach taken off it.
       REST_FIT was meant to be that ("it has to cover the ambient float as
       well as the mark itself") but it is a flat 7% of a height cap, not a
       measurement of the gap that actually has to hold the mark, so it did
       not cover it - the resting mark overran the foot by 6-8px on every
       16:9 viewport and sat there cut for the rest of the visit. Unlike the
       intro this one cannot ride up to make room: it belongs behind the
       headline, so the only thing left to give is size. */
    var kHl   = hl.width * REST_W / SPAN_X / s.width;
    var kMin  = h.height * REST_FIT * REST_MIN / SPAN_Y / s.width;
    var kFoot = 2 * (h.bottom - cy) * REST_FIT / (s.width * SPAN_Y + 2 * FLOAT);

    return place(s, cx, cy, Math.min(kHl, kMin, kFoot));
  }

  /* Reduced motion skips the draw and goes straight to the resting placement.
     This check sat at the top of the file, above the constants - and settle()
     measures with SPAN_X, REST_W, REST_FIT and REST_MIN. `var` hoists the
     declaration but not the assignment, so up there all four were still
     undefined: the scale came out NaN, the browser threw the whole transform
     away, and an untransformed stage sits where the stylesheet parks it, out
     at right:2%. Every visitor with reduce-motion turned on got the mark stuck
     in the top-right corner. It has to run after the numbers it depends on
     exist, and before any of the intro work below. */
  if (window.matchMedia && matchMedia('(prefers-reduced-motion: reduce)').matches) {
    settle();
    return;
  }

  var t = introTransform();
  if (!t) { settle(); return; }

  /* Placed with transitions off: the transition exists for the journey home,
     and letting it play here would show the mark growing into position. */
  stage.style.transition = 'none';
  stage.style.transform = t;
  stage.offsetHeight;                   /* flush, so the next write animates */
  stage.style.transition = '';

  var docked = false;

  /* Re-place it if the hero changes shape mid-draw - a rotation, or a phone's
     address bar collapsing. Harmless once docked, because by then nothing is
     writing the transform any more. */
  /* Both placements are measured rather than styled, so they have to be taken
     again whenever the hero changes shape or the headline rewraps. */
  var reflow;
  function replace() {
    clearTimeout(reflow);
    reflow = setTimeout(function () {
      if (docked) { applyRest(); return; }
      var next = introTransform();
      if (next) stage.style.transform = next;
    }, 120);
  }
  addEventListener('resize', replace, { passive: true });
  addEventListener('orientationchange', function () { setTimeout(replace, 300); });
  /* The headline is measured in whatever font has loaded so far. Plus Jakarta
     Sans arriving later rewraps it and changes both its width and its centre,
     so the mark has to be placed again once the real font is in. */
  if (document.fonts && document.fonts.ready) {
    document.fonts.ready.then(replace).catch(function () {});
  }
  if (window.ResizeObserver) {
    var hl = document.querySelector('.hero__hl');
    if (hl) new ResizeObserver(replace).observe(hl);
  }

  body.classList.add('crown-drawing');

  /* restTransform() returns '' when the headline cannot be measured - empty
     for an instant while main.js's splitter rebuilds it. Assigning that CLEARS
     the transform, and an untransformed stage sits where the stylesheet parks
     it: the hero's top-right corner. That is the mark "jumping to the side".
     So never write an empty transform - keep what is on screen and measure
     again shortly. */
  function applyRest() {
    var t = restTransform();
    if (t) stage.style.transform = t;
    return !!t;
  }

  function settle() {
    body.classList.add('crown-docked');
    reveal();
    if (applyRest()) return;
    /* One retry was not enough. Whatever stops the first measurement - the
       headline mid-split, the webfont still landing, a hero that has not
       settled its height - can easily outlast a single 220ms wait, and when it
       did the mark stayed in the corner for the rest of the visit. Keep
       measuring on a short interval, then give up quietly: by then the resize,
       fonts.ready and ResizeObserver hooks below are all still watching. */
    var tries = 0;
    (function retry() {
      if (applyRest() || ++tries > 40) return;
      setTimeout(retry, 100);
    })();
  }

  function dock() {
    if (docked) return;
    docked = true;
    settle();                           /* the transition carries it there */
  }

  /* An animation finishing is the honest signal, and it stays honest in a
     backgrounded tab where a timer would not. Which animation matters.

     This listened on .crown-draw__rev, the stroke - which ends at 2600ms,
     the exact moment .crown-draw__full BEGINS fading in. So docking started
     on the frame the last piece of the mark started arriving, and that piece
     then completed underneath a 1050ms stage transform and a 900ms drop to
     .40 opacity. The ending looked cut because it was: the swoosh's tip, the
     one part the reversed draw saves for last, was never once on screen
     whole, still and at full strength.

     The clean copy landing is the real end of the intro, so wait for that.
     Kept in step with the stylesheet by hand: the draw runs 2600ms, the copy
     settles from 2600ms over 800ms, and the fallback sits just past 3400. */
  var full = art.querySelector('.crown-draw__full');
  if (full) full.addEventListener('animationend', dock);
  setTimeout(dock, 3600);
})();
