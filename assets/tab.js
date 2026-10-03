/* ─────────────────────────────────────────────────────────────
   Paula Elffman · identidad de pestaña (el mismo icono en todo el sitio)
   1. Al abrir la página el punto del favicon "enciende" con dos pulsos
      y queda fijo.
   2. La barra del navegador en mobile toma el color de fondo de la página
      (y lo sigue al cambiar entre claro y oscuro).
   Uso, dentro del <head>:  <script src="assets/tab.js" defer></script>
   Sin JS queda el favicon fijo de assets/favicon.svg.
   ───────────────────────────────────────────────────────────── */
(function () {
  var TILE = '#24242C', INK = '#F4F4F6', DOT = '#22F0A4';

  function svg(dotOpacity) {
    return '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32">' +
      '<rect width="32" height="32" rx="8" fill="' + TILE + '"/>' +
      '<path d="M10.5 24.5V8h6.25a5.25 5.25 0 0 1 0 10.5H10.5" fill="none" stroke="' + INK + '" stroke-width="4" stroke-linejoin="round"/>' +
      '<circle cx="23.2" cy="22.5" r="2.9" fill="' + DOT + '" opacity="' + dotOpacity + '"/></svg>';
  }

  /* 1 · encendido: apagado → pulso → tenue → fijo (con pausa, no abrupto) */
  var still = window.matchMedia && matchMedia('(prefers-reduced-motion: reduce)').matches;
  if (!still && !document.hidden) {
    var link;
    var paint = function (dotOpacity) {
      if (!link) {
        [].forEach.call(document.querySelectorAll('link[rel~="icon"]'), function (l) { l.parentNode.removeChild(l); });
        link = document.createElement('link'); link.rel = 'icon'; link.type = 'image/svg+xml';
        document.head.appendChild(link);
      }
      link.href = 'data:image/svg+xml,' + encodeURIComponent(svg(dotOpacity));
    };
    paint(0);
    [[450, 1], [800, .3], [1150, 1]].forEach(function (f) { setTimeout(function () { paint(f[1]); }, f[0]); });
  }

  /* 2 · color de la barra del navegador = fondo de la página */
  var meta = document.querySelector('meta[name="theme-color"]');
  if (!meta) { meta = document.createElement('meta'); meta.name = 'theme-color'; document.head.appendChild(meta); }
  function syncBar() {
    if (!document.body) return;
    var bg = getComputedStyle(document.body).backgroundColor;
    if (bg && bg !== 'transparent' && bg !== 'rgba(0, 0, 0, 0)') meta.content = bg;
  }
  function watch() {
    syncBar();
    if ('MutationObserver' in window) new MutationObserver(syncBar).observe(document.body, { attributes: true, attributeFilter: ['class'] });
  }
  if (document.body) watch(); else document.addEventListener('DOMContentLoaded', watch);
})();
