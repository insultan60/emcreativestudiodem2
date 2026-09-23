/* Atmosphere film.
 *
 * The <video> behind the hero ships with no source: it carries the file on
 * data-src and this attaches it only once we know the visit should have it.
 * It sits on the white .atmos__ground, so every path out of here leaves the
 * page looking the way it did before the film existed - plain paper under the
 * clouds, the fluid field and the grain.
 *
 * The file is a 25 MB 720p H.264 loop. That is a lot to spend, so it is spent
 * deliberately: not on phones, not on metered or slow connections, not when
 * motion is unwelcome, and never before the crown has docked and the intro has
 * finished owning the screen.
 */
(function () {
  var video = document.getElementById('atmosFilm');
  if (!video || !video.getAttribute('data-src')) return;

  var mq = window.matchMedia;

  /* --- should this visit get the film at all? ------------------------- */

  if (mq && mq('(prefers-reduced-motion: reduce)').matches) return;

  /* Phones keep the plain ground. The film would be the single largest thing
     on the page and most of it would arrive over cellular, to sit behind copy
     that reads perfectly well on paper. */
  if (mq && mq('(max-width: 760px)').matches) return;

  var conn = navigator.connection || navigator.mozConnection || navigator.webkitConnection;
  if (conn) {
    if (conn.saveData) return;
    if (/(^|-)2g$/.test(conn.effectiveType || '') || conn.effectiveType === 'slow-2g') return;
  }

  /* --- playback ------------------------------------------------------- */

  var started = false;
  var onScreen = true;

  function attach() {
    if (started) return;
    started = true;

    // Fade in on the first painted frame, not on canplay: canplay only means
    // enough is buffered, and fading then can show one frame of blank video.
    video.addEventListener('playing', function () {
      video.classList.add('is-live');
      // The dark veil and the cream hero type both hang off this class, so they
      // arrive with the first painted frame and never before it. Every path
      // that returns early above leaves it unset, and the hero stays ink on
      // paper - which is the only thing that reads without a film behind it.
      document.body.classList.add('film-on');
    }, { once: true });

    video.src = video.getAttribute('data-src');
    video.load();

    var p = video.play();
    // Autoplay can still be refused (some desktop power-saving modes do).
    // Nothing to recover: the still is already there and correct.
    if (p && typeof p.catch === 'function') p.catch(function () {});
  }

  function pause() { if (started && !video.paused) video.pause(); }
  function resume() {
    if (!started || !onScreen || document.hidden) return;
    var p = video.play();
    if (p && typeof p.catch === 'function') p.catch(function () {});
  }

  document.addEventListener('visibilitychange', function () {
    if (document.hidden) pause(); else resume();
  });

  // Decoding a 720p loop behind three sections of scrolled-past page is pure
  // waste; the plate is tall, so this fires well before it leaves the screen.
  if (window.IntersectionObserver) {
    new IntersectionObserver(function (es) {
      onScreen = es[0].isIntersecting;
      if (onScreen) resume(); else pause();
    }, { threshold: 0 }).observe(video);
  }

  /* --- wait for the intro to finish ----------------------------------- */

  function whenIdle(fn) {
    if (window.requestIdleCallback) requestIdleCallback(fn, { timeout: 1200 });
    else setTimeout(fn, 400);
  }

  function go() { whenIdle(attach); }

  // Same hold-off as the fluid fields: the crown intro owns the screen until
  // it docks, and a 25 MB fetch has no business competing with it for
  // bandwidth or for main-thread time while the mark is still drawing.
  if (document.body.classList.contains('hero-revealed')) {
    go();
  } else {
    var mo = new MutationObserver(function () {
      if (document.body.classList.contains('hero-revealed')) { mo.disconnect(); go(); }
    });
    mo.observe(document.body, { attributes: true, attributeFilter: ['class'] });
  }
})();
