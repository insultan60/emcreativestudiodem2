/* ==================================================================
   SHOWREEL - click to play  (home page)

   The <video> ships with preload="none", so the 26 MB file is not touched
   until this runs. That is what lets the reel sit high on the home page
   without costing anything to the readers who scroll past it.

   The cover is faded out and then removed from the flow: left in place it
   would sit over the native controls and eat every click.

   The opening animation is not here. The frame carries [data-rise] and
   main.js's reveal observer adds .in the same way it does for every other
   element on the page; globals.css reads that class and clips the panel open.
   ================================================================== */
(function () {
  var video = document.getElementById('showreelVideo');
  var cover = document.getElementById('showreelPlay');
  if (!video || !cover) return;

  cover.addEventListener('click', function () {
    cover.classList.add('is-going');
    // Match the CSS fade, then take it out of the flow for good.
    window.setTimeout(function () { cover.hidden = true; }, 420);

    var p = video.play();
    // Autoplay policy allows this - it is a direct response to a click - but a
    // refusal is still survivable: the controls are already there to play from.
    if (p && typeof p.catch === 'function') {
      p.catch(function () { cover.hidden = true; });
    }
    video.focus({ preventScroll: true });
  });
})();
