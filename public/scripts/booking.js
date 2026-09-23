/* Booking modal.
 *
 * Anything carrying data-book is a real link to /contact#book. This upgrades
 * that link to an overlay so someone finishing the matcher can pick a slot
 * without losing the result they just got. Every failure path - no JS, a
 * modifier-click, a blocked iframe - falls back to the link doing what it says.
 */
(function () {
  var CAL = 'https://calendly.com/theemcreativestudio-info/30min'
          + '?hide_gdpr_banner=1&background_color=F6F4F1&text_color=3B2912&primary_color=EC905B';

  var modal = document.getElementById('bookModal');
  var frame = document.getElementById('bookModalFrame');
  if (!modal || !frame) return;

  var lastFocus = null;
  var loaded = false;

  function open(trigger) {
    lastFocus = trigger || document.activeElement;
    modal.hidden = false;
    // Calendly is only fetched the first time someone actually asks for it.
    if (!loaded) { frame.src = CAL; loaded = true; }
    // next frame, so the transition has a start state to run from
    requestAnimationFrame(function () {
      requestAnimationFrame(function () { modal.classList.add('is-open'); });
    });
    document.body.style.overflow = 'hidden';
    var x = modal.querySelector('.bookm__x');
    if (x) x.focus();
  }

  function close() {
    modal.classList.remove('is-open');
    document.body.style.overflow = '';
    var done = function () {
      modal.hidden = true;
      modal.removeEventListener('transitionend', done);
    };
    // transitionend will not fire under reduced motion, so time it out too
    modal.addEventListener('transitionend', done);
    setTimeout(done, 400);
    if (lastFocus && lastFocus.focus) lastFocus.focus();
  }

  // Delegated: the matcher's CTA is injected long after this script runs.
  document.addEventListener('click', function (e) {
    var t = e.target.closest ? e.target.closest('[data-book]') : null;
    if (!t) return;
    // Leave modified clicks alone - they mean "open the page, elsewhere".
    if (e.metaKey || e.ctrlKey || e.shiftKey || e.altKey || e.button !== 0) return;
    e.preventDefault();
    open(t);
  });

  document.addEventListener('click', function (e) {
    if (e.target.closest && e.target.closest('[data-book-close]')) close();
  });

  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape' && !modal.hidden) close();
    if (e.key !== 'Tab' || modal.hidden) return;
    // Keep tabbing inside the dialog while it owns the screen.
    var f = modal.querySelectorAll('button, a[href], iframe, [tabindex]:not([tabindex="-1"])');
    if (!f.length) return;
    var first = f[0], last = f[f.length - 1];
    if (e.shiftKey && document.activeElement === first) { e.preventDefault(); last.focus(); }
    else if (!e.shiftKey && document.activeElement === last) { e.preventDefault(); first.focus(); }
  });
})();
