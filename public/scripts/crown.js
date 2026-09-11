/* Hero intro - the crown draws itself on, then settles into the page.
 *
 * The mark is the same artwork the hero already carried in its corner, so the
 * intro and the resting mark are one element: it starts big and centred with
 * nothing drawn, the stroke traces it in (see .crown-draw in the stylesheet),
 * and then a single transform carries it home - which is the space under the
 * headline's last word, not the top corner. Nothing is swapped or cross-faded
 * at the end, because there is only ever one crown.
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
  /* The headline is split into per-word spans by main.js; this id survives
     that (the splitter clones elements and rebuilds their text inside), so it
     stays a reliable handle on the one word the mark has to sit under. */
  var word  = document.getElementById('crownWord');

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

  var RM = window.matchMedia && matchMedia('(prefers-reduced-motion: reduce)').matches;
  if (RM) { settle(); return; }

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
    var cy = h.top  + h.height * CENTRE_Y;

    var room = 2 * Math.min(cy - h.top, h.bottom - cy) * FIT;
    /* narrow screens have height to spare and no width, so the mark is
       allowed to take much more of it */
    var wFrac = h.width < 720 ? 0.78 : INTRO_W;
    var k = Math.min(h.width * wFrac / SPAN_X, room / SPAN_Y) / s.width;
    return place(s, cx, cy, k);
  }

  /* ---- where it comes to rest -------------------------------------------
     Centred under the word it belongs to, filling the gap between the foot of
     the headline and the foot of the hero. The hero clips, so that gap is the
     entire budget; the mark is capped against the word's own width too, so the
     two read as one lockup rather than a mark with a caption above it. */
  /* Negative on purpose: the measured box is the word's INLINE box, which
     hangs well below the glyphs, so a zero gap already reads as a wide one.
     Pulling up into that slack is what buys the mark its size, because the
     hero's foot is the hard limit and every pixel above is one it can use. */
  var REST_GAP = -0.16;  /* of the word's height, between word and mark */
  var REST_W   = 1.55;   /* widest the tilted mark may get, against the word */
  /* Clearance at the hero's foot. It has to cover the ambient float as well as
     the mark itself - the loop in main.js keeps nudging and breathing the form
     by a few pixels after it lands, and the hero clips. */
  var REST_FIT = 0.93;
  var REST_MIN = 0.55;   /* never shrink below this much of the word */

  function restTransform() {
    var s = stageBox();
    var h = hero.getBoundingClientRect();
    var w = word && word.getBoundingClientRect();
    /* nothing to hang it on (copy changed, or main.js never split the
       headline): leave the mark wherever the stylesheet puts it */
    if (!s.width || !h.width || !w || !w.width) return '';

    var top = w.bottom + w.height * REST_GAP;
    /* A hero short enough to leave no room under the headline would otherwise
       send the mark back to the corner the stylesheet parks it in, which reads
       as a bug rather than a fallback. Floor the room instead and let the hero
       clip a few pixels: still under the word, just tight. */
    var room = Math.max((h.bottom - top) * REST_FIT, w.width * REST_MIN * SPAN_Y);

    var wUp = Math.min(w.width * REST_W / SPAN_X, room / SPAN_Y);
    return place(s, w.left + w.width / 2, top + wUp * SPAN_Y / 2, wUp / s.width);
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
  /* The word is measured in whatever font has loaded so far. Plus Jakarta Sans
     arriving later rewraps the headline and moves it, which is the difference
     between the mark sitting under the word and sitting beside it. */
  if (document.fonts && document.fonts.ready) {
    document.fonts.ready.then(replace).catch(function () {});
  }
  if (window.ResizeObserver) {
    var hl = document.querySelector('.hero__hl');
    if (hl) new ResizeObserver(replace).observe(hl);
  }

  body.classList.add('crown-drawing');

  /* restTransform() returns '' when the word cannot be measured - the headline
     mid-rewrap, or main.js's splitter holding the span in pieces. Assigning
     that CLEARS the transform, and an untransformed stage sits where the
     stylesheet parks it: the hero's top-right corner. That is the mark
     "jumping to the side" instead of centring under the word. So never write
     an empty transform - keep what is on screen and measure again shortly. */
  function applyRest() {
    var t = restTransform();
    if (t) stage.style.transform = t;
    return !!t;
  }

  function settle() {
    if (!applyRest()) setTimeout(applyRest, 220);
    body.classList.add('crown-docked');
    reveal();
  }

  function dock() {
    if (docked) return;
    docked = true;
    settle();                           /* the transition carries it there */
  }

  /* The stroke finishing is the honest signal, and it stays honest in a
     backgrounded tab where a timer would not. Kept in step with the
     stylesheet by hand: the draw runs 2200ms and the clean copy settles from
     1980ms, so the fallback sits just past the end of both. */
  var rev = art.querySelector('.crown-draw__rev');
  if (rev) rev.addEventListener('animationend', dock);
  setTimeout(dock, 2600);
})();
