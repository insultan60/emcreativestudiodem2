/* ==================================================================
   SECTION DOTS — a dot matrix that only exists where the cursor is.

   The reveal itself is pure CSS: each section paints dots into its own
   background, then paints a disc of its own background colour back over
   it with a hole at the pointer. Doing it in the element background
   rather than an overlay matters here — the team modal is a fixed
   overlay nested inside a section, and any pseudo-element approach
   needs a stacking context on the section that would trap it.

   This file only feeds the pointer position in, rAF-throttled so a fast
   sweep repaints once per frame rather than once per event.
   ================================================================== */
(function () {
  'use strict';

  /* hover-only: on a touch screen the pool would sit wherever the last
     tap landed, which reads as a smudge rather than as a cursor */
  if (!window.matchMedia('(hover: hover) and (pointer: fine)').matches) return;
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

  var POOL = 300;   /* px radius of the revealed patch */
  var nodes = document.querySelectorAll('.sec, .quote');
  if (!nodes.length) return;

  Array.prototype.forEach.call(nodes, function (el) {
    var qx = 0, qy = 0, queued = false;

    function paint() {
      queued = false;
      el.style.setProperty('--gx', qx + 'px');
      el.style.setProperty('--gy', qy + 'px');
    }

    el.addEventListener('pointermove', function (ev) {
      var r = el.getBoundingClientRect();
      qx = ev.clientX - r.left;
      qy = ev.clientY - r.top;
      if (!queued) { queued = true; requestAnimationFrame(paint); }
    }, { passive: true });

    el.addEventListener('pointerenter', function (ev) {
      var r = el.getBoundingClientRect();
      /* seed the position before opening, or the pool blooms from
         wherever it was last left and slides across to meet the cursor */
      el.style.setProperty('--gx', (ev.clientX - r.left) + 'px');
      el.style.setProperty('--gy', (ev.clientY - r.top) + 'px');
      el.style.setProperty('--gpool', POOL + 'px');
    }, { passive: true });

    el.addEventListener('pointerleave', function () {
      el.style.setProperty('--gpool', '0px');
    }, { passive: true });
  });
})();
