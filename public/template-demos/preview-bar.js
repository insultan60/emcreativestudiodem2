/* Shared by every template demo in this folder. Inside the /templates/<slug>
   viewer the studio bar is already on screen, so this does nothing. Opened
   on its own (a shared link, a new tab), it adds a small pill so the visitor
   can find their way back to the templates and the studio. */
(function () {
  if (window.self !== window.top) return;
  var slug = (location.pathname.match(/template-demos\/([^/]+)/) || [])[1] || '';
  var name = slug ? slug.charAt(0).toUpperCase() + slug.slice(1) : 'Template';
  var bar = document.createElement('div');
  bar.setAttribute('role', 'note');
  bar.style.cssText = [
    'position:fixed', 'left:50%', 'bottom:16px', 'transform:translateX(-50%)', 'z-index:2147483647',
    'display:flex', 'align-items:center', 'gap:12px', 'padding:8px 8px 8px 16px',
    'background:#3B2912', 'color:#F6F4F1', 'border-radius:999px',
    'font:500 13px/1.2 "Plus Jakarta Sans",Helvetica,Arial,sans-serif',
    'box-shadow:0 12px 30px rgba(0,0,0,.3)', 'white-space:nowrap', 'max-width:calc(100vw - 24px)'
  ].join(';');
  bar.innerHTML =
    '<span>' + name + ' template preview</span>' +
    '<a href="/templates" style="color:#3B2912;background:#A1D7D6;text-decoration:none;padding:7px 14px;border-radius:999px;font-weight:600">All templates</a>';
  document.body.appendChild(bar);
})();
