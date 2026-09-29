/* Showreel - autoplays itself once the section is on screen.
 *
 * The film is a 26 MB 60-second cut with an audio track, so it is spent on the
 * same terms heroVideo.js spends the atmosphere loop: not on phones, not on
 * metered or slow connections, and not when motion is unwelcome. Every one of
 * those paths falls back to the click-to-play cover that was here before, so
 * nobody loses the reel - they just have to ask for it, and nothing is fetched
 * until they do.
 *
 * There is no autoplay attribute on the <video> on purpose. That would start
 * the fetch at page load and undo preload="none"; play() is called here
 * instead, and not merely when the section enters view - the frame is pinned
 * in a tall track, so it is technically "in view" for a long while before it
 * has opened. Playback waits on the open-out itself: shot.js writes --sp on
 * the section as an inline style, and the film starts once that passes START,
 * by which point the frame is wide and the wording has resolved. Reading an
 * inline style is cheap, so this can sit on a plain scroll listener.
 *
 * Autoplay is only permitted muted, so the reel starts silent and the chip in
 * the corner offers the sound back. The native controls stay on, which is the
 * other way to reach it.
 */
(function () {
  var video = document.getElementById('showreelVideo');
  var cover = document.getElementById('showreelPlay');
  var sound = document.getElementById('showreelSound');
  if (!video || !cover) return;

  /* --- click to play: always wired, whatever happens below ------------ */

  function dismissCover() {
    if (cover.hidden) return;
    cover.classList.add('is-going');
    window.setTimeout(function () { cover.hidden = true; }, 420);
  }

  cover.addEventListener('click', function () {
    dismissCover();
    video.muted = false;          // a real click, so the sound can come with it
    syncSound();
    var p = video.play();
    if (p && typeof p.catch === 'function') {
      p.catch(function () { cover.hidden = true; });
    }
    video.focus({ preventScroll: true });
  });

  /* --- the sound chip -------------------------------------------------- */

  function syncSound() {
    if (!sound) return;
    var label = sound.querySelector('span');
    if (label) label.textContent = video.muted ? 'Sound off' : 'Sound on';
    sound.classList.toggle('is-on', !video.muted);
  }
  if (sound) {
    sound.addEventListener('click', function () {
      video.muted = !video.muted;
      if (!video.muted && video.volume === 0) video.volume = 1;
      syncSound();
    });
  }

  /* --- should this visit get it unasked? ------------------------------ */

  var mq = window.matchMedia;
  if (mq && mq('(prefers-reduced-motion: reduce)').matches) return;
  /* Phones keep the cover. Autoplaying 26 MB over cellular to a reader who
     has not asked for it is the one case where this is plainly rude. */
  if (mq && mq('(max-width: 760px)').matches) return;

  var conn = navigator.connection || navigator.mozConnection || navigator.webkitConnection;
  if (conn) {
    if (conn.saveData) return;
    if (/(^|-)2g$/.test(conn.effectiveType || '') || conn.effectiveType === 'slow-2g') return;
  }

  /* --- autoplay -------------------------------------------------------- */

  var started = false;
  var onScreen = false;

  // Fade the cover on the first painted frame, not on canplay: canplay only
  // means enough is buffered, and lifting the cover then can show a blank one.
  video.addEventListener('playing', function () {
    dismissCover();
    if (sound) { sound.hidden = false; syncSound(); }
  }, { once: true });

  function start() {
    if (started) return;
    started = true;
    var p = video.play();
    // A refusal is survivable: the cover is still there to play from.
    if (p && typeof p.catch === 'function') {
      p.catch(function () { started = false; });
    }
  }

  function pause() { if (started && !video.paused) video.pause(); }
  function resume() {
    if (!onScreen || document.hidden) return;
    if (!started) { start(); return; }
    var p = video.play();
    if (p && typeof p.catch === 'function') p.catch(function () {});
  }

  document.addEventListener('visibilitychange', function () {
    if (document.hidden) pause(); else resume();
  });

  // Decoding a 26 MB film behind sections that have been scrolled past is pure
  // waste, and a reel running unheard in a background tab is worse. This only
  // governs pause/resume; what governs the FIRST play is the open-out below.
  if (window.IntersectionObserver) {
    new IntersectionObserver(function (es) {
      onScreen = es[0].isIntersecting;
      if (started) { if (onScreen) resume(); else pause(); }
    }, { threshold: 0 }).observe(video);
  } else {
    onScreen = true;
  }

  /* --- start when the reveal has finished -------------------------------
     The four items on the cover resolve by --sp .59 (see the ramp in
     globals.css: .18 start, .07 stagger, speed 5). Starting at .6 means the
     play mark has arrived and been read before the film takes over, rather
     than the cover flashing up and being dismissed in the same breath. */
  var START = 0.6;
  var sec = document.getElementById('showreel');

  function checkOpen() {
    if (started || !sec) return;
    var sp = parseFloat(sec.style.getPropertyValue('--sp'));
    if (!(sp >= START)) return;
    removeEventListener('scroll', checkOpen);
    onScreen = true;
    start();
  }

  if (sec) {
    addEventListener('scroll', checkOpen, { passive: true });
    checkOpen();   // in case the section is already open on load
  }
})();
