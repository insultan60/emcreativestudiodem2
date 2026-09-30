/* Stat numbers roll into place like a counter wheel.
 *
 * The markup ships the real number as text - 240, 3.4, 98 - so a visit with no
 * JS, or one that arrives before this runs, reads the correct figure. This
 * replaces that text with a column of digits per place and rolls each one
 * through a full 0-9 cycle before it lands, then puts the original string back
 * on the element as its accessible name so the rolling strips never reach a
 * screen reader as "zero one two three...".
 *
 * Each digit's strip carries 0-9 twice. Resting at the top shows the first 0;
 * landing on -(10 + d) shows the same digit one cycle down, so every place
 * spins once whatever it is counting to - including a 0, which would otherwise
 * be the one digit that never moved.
 */
(function () {
  var nums = document.querySelectorAll('.stats__num');
  if (!nums.length) return;

  var reduce = window.matchMedia
    && window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  function build(el) {
    // The figure is the leading text node; the suffix lives in <small> and is
    // left alone - "+" and "%" are not things that count up to anything.
    var first = el.firstChild;
    if (!first || first.nodeType !== 3) return null;
    var raw = first.nodeValue.trim();
    if (!/^[\d.,]+$/.test(raw)) return null;

    el.setAttribute('aria-label', raw + (el.querySelector('small') ? el.querySelector('small').textContent : ''));

    var wrap = document.createElement('span');
    wrap.className = 'odo';
    wrap.setAttribute('aria-hidden', 'true');

    var strips = [];
    for (var i = 0; i < raw.length; i++) {
      var ch = raw[i];
      if (ch < '0' || ch > '9') {
        // A decimal point or separator: static, and it keeps its own width.
        var sep = document.createElement('span');
        sep.className = 'odo__sep';
        sep.textContent = ch;
        wrap.appendChild(sep);
        continue;
      }
      var cell = document.createElement('span');
      cell.className = 'odo__d';
      var strip = document.createElement('span');
      strip.className = 'odo__s';
      for (var c = 0; c < 20; c++) {
        var d = document.createElement('b');
        d.textContent = String(c % 10);
        strip.appendChild(d);
      }
      cell.appendChild(strip);
      wrap.appendChild(cell);
      strips.push({ strip: strip, digit: +ch, i: strips.length });
    }

    el.replaceChild(wrap, first);
    return strips;
  }

  function roll(strips) {
    strips.forEach(function (s) {
      // Landing one cycle down guarantees a full turn for every place.
      var y = -(10 + s.digit);
      if (!reduce) s.strip.style.transitionDelay = (s.i * 90) + 'ms';
      s.strip.style.transform = 'translateY(' + y + 'em)';
    });
  }

  var pending = [];
  nums.forEach(function (el) {
    var strips = build(el);
    if (strips && strips.length) pending.push({ el: el, strips: strips });
  });
  if (!pending.length) return;

  if (reduce || !window.IntersectionObserver) {
    pending.forEach(function (p) { roll(p.strips); });
    return;
  }

  var io = new IntersectionObserver(function (es) {
    es.forEach(function (e) {
      if (!e.isIntersecting) return;
      var hit = pending.filter(function (p) { return p.el === e.target; })[0];
      if (hit) roll(hit.strips);
      io.unobserve(e.target);
    });
  }, { threshold: 0.6 });

  pending.forEach(function (p) { io.observe(p.el); });
})();
