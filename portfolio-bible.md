# Paula Elffman — Portfolio OS · Design Bible

*Última actualización: Septiembre 2026 — rediseño de "My superpower" (tercera iteración, ver sección dedicada dentro de DASHBOARD VIEW): título "I bridge the gap." ahora con efecto scramble/decrypt (referencia: oscarhernandez.vercel.app), eyebrow "My superpower" agrandado (`.hs-eyebrow-lg`), `.hs-bridge` (línea + 3 nodos) reemplazado por `.hs-super-flow` (3 chips unidos por flechas), y el trigger de la animación se desacopló del `IntersectionObserver` de "Beyond the work" — ahora tiene el suyo propio sobre `#hsFeature`. `#hsBridge` ya no existe en el DOM.*

*Última actualización previa: Septiembre 2026 — segundo bug de dark mode corregido en los 12 case studies: `.back-nav` sticky y su meta (`.nav-right`/`.back-nav-right`) tenían fondo/color hardcodeados al valor de light sin contraparte dark (literales, no variables — el script de auditoría del bug anterior no los detectaba), ver sección "BUG CONOCIDO Y CORREGIDO — .back-nav" dentro de CASE STUDIES; además, cuatro ajustes puntuales en `smartpass-case.html` (único case con su propio token `--green` en paralelo a `var(--accent)`): `--green` sin par dark agregado, wordmark ".dim" mode-aware, contraste de `--ash` subido a AA, tarjetas de `.flow-node` con texto fijo (fondo blanco fijo en los dos modos), y scroll-reveal escalonado en "The design process" — ver sección "smartpass-case.html — ajustes puntuales".*

*Última actualización previa: Septiembre 2026 — 'JetBrains Mono' reemplazada por 'Space Grotesk' en labels/eyebrows/metadata de los 11 case studies standalone (ver sección "Septiembre 2026" en DESIGN TOKENS); bug de texto invisible en dark mode corregido en 8 case studies (`--ink`/`--ash2` sin override en `body.dark-mode{}`, ver sección "BUG CONOCIDO Y CORREGIDO" dentro de CASE STUDIES) —*

*Última actualización previa: Septiembre 2026 — tile hover reveal ralentizado a pedido (referencia: calebixca.com) con gradient teal nuevo en la zona del título (`.tile-ui::after`, quinta excepción de color fijo — mismo motivo que el spotlight glow), timing en cascada scrim→categoría→nombre→gradient→headline (ver sección dedicada en PROJECTS VIEW).*

*Última actualización previa: Agosto 2026 — tiles simplificados (sin categoría teal, solo título + descripción + CTA), CTA "View case study" con Shiny Text sweep (react-bits → vanilla, hover-triggered, fix legibilidad vs gradiente teal→#005043), "Beyond the work" cards compactadas (5 en fila, grid 5-col, emoji hover fix), Core Strengths chips unificados (todos accent, sin fondo gris), dock rediseñado (dark: verde accent, light: blanco + negro), link a LinkedIn en hero, filtros de categoría removidos del gallery, light mode default, hero copy (Hi I'm Pau + roles tachados), carousel horizontal (5 imgs), dock unificado visible en cases (Home / About Me / LinkedIn / light-dark toggle), top-nav eliminado, accent dual (#009D71 light / #22F0A4 dark), colores hardcodeados limpiados, chips de experiencia (.dv-tag) en verde accent light/dark, nueva sección "AI in my workflow" (carousel interactivo con auto-avance) arriba de Core strengths, About con statement de posicionamiento (reemplazó las passions), cierre "Beyond the work" rediseñado a bento con superpower bridge (5 facetas), timeline corregida desde LinkedIn (7 entries), tile spotlight glow (mouse-tracking, react-bits → vanilla) en las 11 tiles del gallery, título/categoría de tile pasan a reveal-en-hover sin chip (default en las 11, antes solo sukupay-ds), fondos hardcodeados por tile eliminados (todas caen a var(--ghost)), título de sukupay-ds mode-aware (verde dark / blanco light, segunda excepción a var(--accent)), spotlight glow fijado a #22F0A4 en ambos modos (tercera excepción — el scrim de la tile es oscuro fijo, no cambia con el modo), título/categoría de tile fijados a blanco/#22F0A4 en ambos modos (cuarta excepción, mismo motivo — eran invisibles en light)*

---

## ARCHIVOS


| Archivo                 | Peso         | Función                                                                  |
| ----------------------- | ------------ | ------------------------------------------------------------------------ |
| `index.html`            | ~3MB         | Archivo principal (antes `paula-elffman-portfolio.html`). Contiene todo. |
| `portfolio-images.js`   | ~6MB         | Imágenes de tiles (lazy load)                                            |
| `muv-images.js`         | ~6MB         | Imágenes del case study muv                                              |
| `muv-case.html`         | ~6MB         | Case study muv completo + Design System section                          |
| `muv-case-images.js`    | lazy         | Imágenes de `muv-case.html`                                              |
| `monchis-case.html`     | ~4MB         | Case study monchis completo                                              |
| `monchis-ds-home.html`  | standalone   | Design system + home monchis                                             |
| `everyone-case.html`    | standalone   | Case study Everyone (light)                                              |
| `smartpass-case.html`   | standalone   | Case study Smartpass (light)                                             |
| `sukupay-case.html`     | standalone   | Case study SukuPay (light)                                               |
| `vendor-tool-case.html` | standalone   | Case study Vendor Tool / Monchis (light)                                 |
| `hugo-case.html`        | ~100KB       | Case study hugo completo (light) — hackathon, no Design System section   |
| `hugo-case-images.js`   | ~375KB, lazy | Imágenes de `hugo-case.html` (screenshots reales del producto)           |


> Todos los archivos deben estar en la **misma carpeta** para que los links funcionen.

---

## DESIGN TOKENS

```css
/* === DARK MODE (default en :root) === */
--void:    #24242C   /* Background principal */
--ghost:   #2C2C36   /* Background secundario */
--ghost-2: #32323E   /* Background hover */
--paper:   #F4F4F6   /* Texto principal */
--ash:     rgba(244,244,246,.5)   /* Texto secundario */
--ash-2:   rgba(244,244,246,.25)  /* Texto terciario */
--accent:  #22F0A4   /* Emerald Bright — acento en dark */
--accent-2:#42E8A8
--line:    rgba(244,244,246,.08)  /* Bordes sutiles */
--line-md: rgba(244,244,246,.15)  /* Bordes medios */
--surface:     var(--ghost-2)     /* Fondo de tarjeta elevada (ej. .ai-lab) */
--shadow-card: 0 24px 60px -20px rgba(0,0,0,.6), 0 2px 10px rgba(0,0,0,.35)  /* Sombra de tarjeta elevada */

/* === LIGHT MODE (body.light-mode) === */
--void:    #F5F4F0   /* Background principal claro */
--ghost:   #E8E7E3   /* Background secundario */
--ghost-2: #DDDCDA   /* Background hover */
--paper:   #1A1A22   /* Texto principal oscuro */
--paper-2: #2C2C36
--ash:     #6B6B7A   /* Texto secundario */
--ash-2:   #9090A0   /* Texto terciario */
--accent:  #009D71   /* Emerald Dark — acento en light */
--accent-2:#00875F
--line:    rgba(26,26,34,.07)
--line-md: rgba(26,26,34,.13)
--surface:     #FFFFFF   /* Fondo de tarjeta elevada (ej. .ai-lab) — blanco puro, no --ghost */
--shadow-card: 0 24px 48px -18px rgba(20,20,35,.18), 0 3px 12px rgba(20,20,35,.07)

```

**Regla de color accent:**

- **Dark mode:** Emerald Bright `#22F0A4` — brilla sobre fondos oscuros.
- **Light mode:** Emerald Dark `#009D71` — tiene suficiente contraste sobre fondos claros.
- Usar siempre `var(--accent)` en el código. El cambio entre `#22F0A4` y `#009D71` es automático vía los overrides de `body.light-mode`.
- "Product Designer" en el hero usa `color: var(--accent)` (emerald en ambos modos).

**Colores hardcodeados eliminados (Julio 2026):** Se reemplazaron todos los `#22F0A4` y `rgba(244,244,246,...)` hardcodeados por `var(--accent)`, `var(--ash)`, `var(--ash-2)` y `var(--paper)` para que el About Me y el Home se adapten automáticamente a light/dark. Los elementos corregidos: `.dv-word-accent` (nombre "Pau"), `.dv-roles` y `.dv-roles s`, `.dv-story p` y `.dv-story b`, `.ph-title em`, `.ph-msep`, `.ph-filter-toggle.active`, y el inline style de SmartPass.

**Regla:** nunca usar hex o rgba hardcodeados para colores que deban cambiar entre modos. Siempre usar `var(--accent)`, `var(--paper)`, `var(--ash)`, etc.

**Tipografías:**

- `'Geist'` — Display, títulos, nombres (700–800)
- `'Muli'` — Body, párrafos (300–400)
- `'Space Grotesk'` — Labels, metadata, categorías, uppercase (reemplaza a `'JetBrains Mono'` en los 11 case studies, ver nota Septiembre 2026 abajo)

**✅ Septiembre 2026 — JetBrains Mono reemplazada por Space Grotesk en labels/eyebrows de los case studies**

Se sacó `'JetBrains Mono'` de las labels (eyebrows, section labels, back-nav, metadata uppercase) porque se sentía "de código" incluso para textos cortos. Se probaron variantes mono más suaves y también la opción de unificar todo con Geist, pero se optó por una familia sans distinta y con personalidad: **Space Grotesk** (Google Fonts, pesos 300/400/500/600/700). Mantiene el aire técnico-editorial del uppercase + letter-spacing pero sin el look "terminal".

- **Aplicado en:** los 11 case studies standalone — `theforkreviewscase.html`, `theforkshortlistcase.html`, `sukupay-case.html`, `sukupay-ds-case.html`, `muv-case.html`, `hugo-case.html`, `monchis-case.html`, `memorable-case.html`, `everyone-case.html`, `monchis-drivers-case.html`, `smartpass-case.html`.
- **Cambio mecánico:** en el `<link>` de Google Fonts, `family=JetBrains+Mono:wght@...` → `family=Space+Grotesk:wght@300;400;500;600;700`; y todo `font-family:'JetBrains Mono',monospace;` → `font-family:'Space Grotesk',sans-serif;`. Reemplazo 1:1, ninguna otra propiedad (tamaño, spacing, color, uppercase) se tocó.
- **Pendiente / fuera de este alcance:** `index.html` (home) todavía usa `'JetBrains Mono'` en varios lugares — tokens `dv-`* (AI in my workflow, prompt), design system embebido de `muv`/`sukupay-ds` dentro del home, etc. No se tocó porque no forma parte de los archivos de case study standalone. Si se decide extender el cambio al home, aplicar el mismo swap ahí (buscar `JetBrains` en `index.html`).

---

## DECISIÓN — Portfolio dark / Cases light + Wipe Transition

*Julio 2026 — ✅ APROBADO, no tocar sin pedido explícito*

### El contraste dark → light es intencional

El home (`index.html`) vive en dark (`--void #24242C`). Los 6 case studies viven en light (`--bg ~#F5F4F0`). **Se decidió no unificar todo a un solo modo** — el dark da impacto a la primera impresión, el light da legibilidad a contenido largo (texto, screens, data). Lo que faltaba no era eliminar el contraste, sino hacerlo sentir a propósito en vez de accidental. La solución: una transición que hace de puente entre ambos modos.

### Wipe Transition — cómo funciona

Al hacer click en un tile, un círculo (`clip-path: circle()`) crece desde el punto exacto del click hasta cubrir toda la pantalla, y recién ahí ocurre el cambio de contenido. Al volver, el mismo círculo se abre desde donde estaba el botón "← Back to portfolio", revelando el home.

Como los cases son páginas separadas (navegación real, no SPA), el punto de click se pasa de una página a otra vía `sessionStorage` (`key: 'wipeEntry'`, valor `{x, y}`) para que el círculo "continúe" en el mismo lugar aunque sea un load nuevo del browser.

**Regla de color:** el overlay de cada página usa **su propio color de fondo** — nunca el de la página destino. El portfolio cubre con `var(--void)`, cada case cubre con su propio `var(--bg)` (o `#24242C` cuando el case hace el wipe de salida hacia el portfolio, vía la clase `.dark` en `#wipe-overlay`). Esto evita tener que coordinar colores entre archivos: cada página solo necesita saber su propio bg.

**Timing:** 600ms, `cubic-bezier(.65,0,.35,1)`. Es el único número a tocar si el efecto se siente lento/rápido (aparece 2 veces por archivo: el `600` del `setTimeout` y el `.6s` del CSS `.animate`).

### Código (idéntico en los 6 case HTML)

```css
#wipe-overlay{
  position:fixed; inset:0; z-index:99999;
  background:var(--bg);   /* el bg propio de cada case */
  pointer-events:none;
  clip-path:circle(0% at 50% 50%);
}
#wipe-overlay.animate{ transition:clip-path .6s cubic-bezier(.65,0,.35,1); }
#wipe-overlay.dark{ background:#24242C; }  /* usado al volver al portfolio */

```

```js
/* WIPE TRANSITION — bloque autocontenido, va en su propio <script> */
(function(){
  var overlay=document.getElementById('wipe-overlay');
  function coverFrom(x,y,dark,cb){ /* cubre la pantalla creciendo desde x,y */ }
  function revealFrom(x,y){ /* revela el contenido abriendo desde x,y */ }
  var entry=sessionStorage.getItem('wipeEntry');
  if(entry){ /* si venimos de un wipe: revealFrom(x,y) y borra el storage */ }
  var backBtn=document.getElementById('back-to-portfolio');
  if(backBtn){ /* al click: coverFrom(x,y,true,...) y navega */ }
})();

```

En `index.html` el mismo patrón vive en `wipeCoverFrom()` / `wipeRevealFrom()` / `wipeAndNavigate(url,x,y)`, más un mapa `CASE_PAGE_MAP` que decide a qué `.html` navegar según el `data-case` del tile clickeado.

### Para agregar el efecto a un case nuevo

1. Copiar el bloque CSS de arriba, adaptando `var(--bg)` al token real del archivo (algunos usan `--paper`, otros `--ink` para texto — el overlay siempre usa el bg, no el texto).
2. Agregar `<div id="wipe-overlay"></div>` como primer hijo de `<body>`.
3. Agregar `id="back-to-portfolio"` al `<a class="back-btn">`.
4. Pegar el bloque JS en un `<script>` propio, antes del script de lazy-load de imágenes.
5. En `index.html`, agregar la entrada correspondiente a `CASE_PAGE_MAP`.

---

## ESTRUCTURA DE VISTAS

```
Body
├── #page-loader        "Hi! 👊" — aparece 900ms, luego se elimina
├── #cur + #cur-ring    Custom cursor
├── #section-label      Label vertical izquierda
├── #projects-view      Vista activa por defecto (.view.active)
│   ├── .hello-hero     Sección "Hi, I'm Pau." + roles + subtítulo
│   ├── .project-carousel  Carousel horizontal infinito de imágenes de proyectos
│   ├── .projects-header  Marquee + filtros (ya no es sticky)
│   └── .gallery        Grid de tiles
├── #dashboard-view     Vista de about/experiencia (.view)
├── #case-panel         Panel overlay para cases (display:none / .open)
├── Templates           <template id="tpl-*"> para cases overlay
└── #dock               Navegación bottom (Home / About Me / LinkedIn / Light-Dark toggle)

```

**Cambio de vista:** `switchView('projects')` / `switchView('dashboard')` — agrega/quita `.active`.

---

## TOP NAV + HELLO HERO + LIGHT/DARK MODE ✅ APROBADO

*Julio 2026 — inspirado en sriramph.com*

### Top Nav (`#top-nav`) — ELIMINADO

La barra fija superior fue eliminada. Todo su contenido (LinkedIn, theme toggle) se consolidó en el dock bottom. El elemento `#top-nav` queda en el HTML como `display:none` por retrocompatibilidad.

### Hello Hero (`.hello-hero`)

Sección dentro de `#projects-view`, **antes** del `.project-carousel`. Tres líneas:

1. **Título:** `<h1 class="hello-word">Hi, I'm Pau.</h1>` — `font-size:clamp(2rem,6vw,4.5rem)`, `font-weight:800`, `letter-spacing:-.03em`.
2. **Roles:** `<p class="hello-roles">` — Los roles anteriores van tachados con `<s>` (Graphic, Web, UI, UX) en `color:var(--ash-2)` con `opacity:.6`. "Product Designer." va en `<em>` con `font-weight:600`, `color:var(--paper)`. Font-size: `clamp(1.25rem,3vw,2rem)`.
3. **Subtítulo:** "Based in Buenos Aires · who thinks, tinkers, and breaks boundaries. I design products people actually love using." — `font-size:clamp(1rem,2.5vw,1.375rem)`, `color:var(--ash)`.

- `min-height:55vh`, `padding:10rem 3.5rem 4rem` (mobile: `6rem 1.5rem 2rem`, `min-height:35vh`).

### Carousel horizontal de proyectos (`.project-carousel`)

Sección dentro de `#projects-view`, **entre** el `.hello-hero` y el `.projects-header` (marquee + filtros). Inspirado en el scroll horizontal de sriramph.com.

**Estructura HTML:**

```html
<div class="project-carousel">
  <div class="carousel-track">
    <div class="carousel-card"><img src="..." alt="..."></div>
    <!-- cards duplicadas para loop infinito -->
  </div>
</div>

```

**Comportamiento:**

- Scroll horizontal infinito con `@keyframes carouselScroll` (30s linear infinite).
- Las cards se duplican en el HTML para que el loop sea seamless (`translateX(-50%)` al 100%).
- Hover sobre el track pausa la animación (`animation-play-state: paused`).
- Hover sobre una card individual: `scale(1.02)`.

**Dimensiones:**

- Desktop: imágenes a `height: 440px`, ancho auto (cada imagen determina su propio ancho). Padding del contenedor: `2rem 0 4.5rem`.
- Mobile (`max-width:768px`): imágenes a `height: 250px`.
- Las imágenes usan `border-radius: 1rem` directamente en el `<img>` (no en el contenedor), sin `overflow: hidden`, para que las esquinas redondeadas originales se respeten al 100%.
- **Exportar imágenes a 1520px de alto** (760 × 2 para retina), ancho libre. Formatos actuales: 01 Memorable (1420×1520), 02 Monchis app (744×1520), 03 Monchis desktop (2400×1520), 04 MUV (1198×1520).

**Fade edges:** pseudo-elementos `::before` y `::after` con gradientes de `var(--void)` a transparente (6rem de ancho) para que las cards se desvanezcan en los bordes.

**Imágenes actuales:** 01.png (Memorable), 02.png (Monchis app), 03.png (Monchis desktop), 04.png (MUV). Están embebidas como base64 JPEG a resolución completa 2x (1520px alto), quality 80.

**Regla para el futuro:** para agregar un proyecto al carousel, agregar un `<div class="carousel-card"><img>` nuevo en **ambas mitades** del track (la original y la duplicada) para mantener el loop. Para quitar los placeholders grises, reemplazar las imágenes 02 y 04 con covers reales de proyectos.

### Carousel clickeable — cada card lleva a su case

*Agosto 2026 — ✅ nuevo, a pedido*

Las 10 `.carousel-card` (5 imágenes × 2 copias del loop) ahora son clickeables y navegan al case study correspondiente, igual que los tiles del `#gallery`.

**Mapeo imagen →** `data-case` **→ página:**


| Alt de la imagen                | `data-case` | Página                                           |
| ------------------------------- | ----------- | ------------------------------------------------ |
| SukuPay — Fintech               | `suku`      | `sukupay-case.html`                              |
| Memorable — AI creative pretest | `memorable` | `memorable-case.html`                            |
| Monchis — Food delivery app     | `monchis`   | `monchis-case.html`                              |
| Monchis — Store management      | `monchis`   | `monchis-case.html` (mismo case que la anterior) |
| MUV — Ride-hailing              | `muv`       | `muv-case.html`                                  |


**Implementación:**

- Cada `.carousel-card` suma `data-case="…"`, `role="button"`, `tabindex="0"` y `aria-label="… case study"`.
- CSS: `.carousel-card{cursor:pointer;}` + `.carousel-card:focus-visible{outline:2px solid var(--accent);...}`.
- JS: nuevo listener `carouselTrack.addEventListener('click', ...)` (dentro del mismo `DOMContentLoaded` que ya maneja el `#gallery`) que reutiliza `CASE_PAGE_MAP` + `wipeAndNavigate()` — la misma lógica y transición que usan los tiles del home. No hay lógica de doble-tap (eso es solo para los tiles con hover-reveal); acá el click navega directo.
- El teclado (Enter/Espacio) ya funciona solo, porque el handler existente `document.querySelectorAll('[data-case]').forEach(...)` no está scopeado al gallery — agarra cualquier elemento con `data-case` en el documento, carousel incluido.

**Regla para el futuro:** si se agrega un proyecto nuevo al carousel (ver regla arriba), sumarle también `data-case`/`role`/`tabindex`/`aria-label` apuntando a su entry en `CASE_PAGE_MAP` — si no, la card queda decorativa y no clickeable.

### Dock unificado (bottom)

El dock bottom (`bottom:2rem`) es ahora el único elemento de navegación fijo. Contiene:

- **Home** / **About Me** — botones de vista con pill animada.
- **Separador** (`<div class="dock-sep">`) — línea vertical de 1px.
- **LinkedIn** — `<a class="dock-link">` que abre `https://www.linkedin.com/in/paula-elffman/` en nueva pestaña.
- **Theme toggle** — botón sol/luna para alternar light/dark.

**Regla para el futuro:** para agregar un link nuevo (Resume, Dribbble, email), agregarlo como `<a class="dock-link">` después del separador y antes del theme toggle.

### Dock visible en Case Studies

El dock se muestra por encima de los case studies (`z-index:9700`, arriba del `#case-panel` que tiene `z-index:9500`). Esto permite al usuario volver a Home o About Me sin tener que cerrar el case con la X.

- `switchView()` ahora llama a `closeCase()` automáticamente si hay un case abierto.
- El botón de cerrar case (`.panel-close`) sigue disponible en `z-index:9600`.

**Regla:** cualquier overlay futuro que deba cubrir el dock necesita `z-index > 9700`.

### Dock en Case Studies (archivos separados)

Los cases son archivos HTML independientes (`memorable-case.html`, `monchis-case.html`, etc.). Cada uno tiene su propio dock inyectado antes de `</body>` con id `#portfolio-dock`. Es una versión simplificada del dock principal:

- **Home** — link a `index.html`
- **About Me** — link a `index.html#about`
- **Separador** + **LinkedIn**
- Sin theme toggle (los cases son siempre light).
- Estilos inline en un `<style>` dentro del mismo bloque, no depende de CSS externo.
- `z-index:9700`, `background:rgba(240,239,236,0.85)` con backdrop-blur.

**Regla para el futuro:** al crear un case nuevo, copiar el bloque `<!-- Portfolio Navigation Dock -->` desde cualquier case existente y pegarlo antes de `</body>`. O usar el script de inyección que agrega el dock a todos los `*-case.html` de una vez.

### Light/Dark Mode

**Default: LIGHT.** El `<body>` arranca con `class="light-mode"` hardcodeado en el HTML para evitar flash de dark mode antes de que cargue el JS.

**Decisión:** el home alterna entre light (default) y dark con el toggle del dock. Los case studies siguen siendo siempre light.

**Implementación:**

- `body.light-mode` overridea los CSS custom properties en `:root` con una paleta invertida:
  - `--void: #F5F4F0` (fondo claro)
  - `--paper: #1A1A22` (texto oscuro)
  - `--ghost/#ghost-2` ajustados a grises claros
  - `--line/--line-md` ajustados para contraste sobre fondo claro
- `toggleTheme()` en JS hace `body.classList.toggle('light-mode')` y guarda en `localStorage('pe-theme')`.
- Al cargar, se lee `localStorage` y se aplica si corresponde.
- El botón usa dos SVGs (sol y luna), uno visible en cada modo via CSS (`body.light-mode .icon-sun { display:none }` etc.).
- El dock también tiene un override para `body.light-mode` (background y border ajustados).

**Regla para el futuro:** cualquier elemento nuevo que use `var(--void)`, `var(--paper)`, `var(--ghost)`, `var(--ash)`, `var(--line)` o `var(--line-md)` se adapta automáticamente al light mode sin CSS adicional. Si un componente necesita un color **fijo** que no cambie con el tema, usar el hex directo, no el custom property.

---

## PROJECTS VIEW — REGLAS

### Grid

- 12 columnas en desktop, 6 en tablet, 1 en mobile
- Gap: `1rem`
- Padding: `2rem 3.5rem 4rem`

### Tiles actuales


| Tile            | Clase                                          | Columnas | Fila | Estado                                                                                                                                                                                     |
| --------------- | ----------------------------------------------- | -------- | ---- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| sukupay DS      | `.tile-sukupay-ds`                             | 1/6      | 1    | ✅ Placeholder con headline propio · `data-case="sukuds"`                                                                                                                                   |
| muv             | `.tile-muv`                                    | 6/13     | 1    | 🧪 Cover animado (GIF, en prueba — ver decisión abajo) · `data-case="muv"`                                                                                                                 |
| hugo            | `.tile-monchis-home` (reusa clase/posición)    | 1/6      | 2    | ✅ Cover = video (`hugo.webm`) · `data-case="hugo"` — ver nota Agosto 2026 más abajo                                                                                                        |
| smartpass       | `.tile-smartpass`                              | 6/13     | 2    | ✅ Placeholder gris, estirado para tapar el hueco que dejó `.tile-drivers` · `data-case="smart"`                                                                                            |
| monchis drivers | `.tile-monchis-drivers` (reusa clase/posición) | 1/5      | 3    | ✅ Real · `data-case="drivers"` — ver nota Agosto 2026 más abajo                                                                                                                             |
| everyone        | `.tile-everyone`                               | 5/9      | 3    | ✅ Placeholder gris · `data-case="everyone"`                                                                                                                                                 |
| sukupay         | `.tile-sukupay`                                | span 4   | 3    | 🔲 Placeholder · `data-case="suku"`                                                                                                                                                        |
| memorable       | `.tile-memorable` (reusa clase/posición)       | span 4   | 3    | ✅ Real · `data-case="memorable"` — ver nota Agosto 2026 más abajo                                                                                                                           |
| vendor          | `.tile-vendor`                                 | auto     | 3    | ⚠️ Sin regla CSS de grid propia (cae al tamaño default de `.tile`) · `data-case="vendor"` — pendiente, ver TODO                                                                            |
| autocloud       | `.tile-ph`                                     | span 4   | 3    | 🔲 Placeholder                                                                                                                                                                             |
| thefork         | `.tile-ph`                                     | span 4   | 3    | 🔲 Placeholder                                                                                                                                                                             |


> ✅ **Resuelto (Julio 2026):** `.tile-drivers` ya no tiene `data-case="suku"` duplicado. **Actualización Agosto 2026:** ese slot dejó de usarse (ver nota abajo) — `.tile-drivers` quedó como CSS muerto, candidato a limpieza. **Falta:** no hay ningún tile con `data-case="vendor"` en el gallery con una posición de grid propia — `vendor-tool-case.html` ya tiene el Wipe Transition listo pero el tile cae al tamaño default de `.tile` (ver fila arriba).

> **Agosto 2026 — ✅ Home recortado a 11 tiles, a pedido:** se **eliminó** la fila "ROW 4 — Placeholders" completa (`project x`, `project y`, `project z`, `project w`, `project v` — 5 tiles `.tile-ph.tile-ph-sm`, filler genérico sin marca real). Quedan **9 cases reales + 2 placeholders con nombre real** (`autocloud`, `thefork`), total **11 tiles** en el home. El grid es auto-flow (sin `grid-row` fijo en estos tiles finales), así que quitar tiles del final no rompe el layout ni deja huecos — simplemente el grid termina antes.
>
> **Regla para el futuro:** si se necesita volver a mostrar placeholders genéricos ("coming soon" sin nombre de marca), agregarlos al final del `#gallery`, después de `thefork`, y duplicar la card en ambos lugares no aplica acá (esto no es el carousel) — es un tile único, no hace falta duplicar nada.

> **Agosto 2026 — ✅ Tile de monchis home eliminado del gallery, hugo ocupa su lugar (a pedido):** el tile `.tile-monchis-home` (search bar animado + `monchis-tile.jpg`) se **sacó** del `#gallery` — el case de monchis ya está representado arriba, en el carousel horizontal, así que quedaba duplicado. El div de **hugo** (antes con clase `.tile-drivers`, 6/9 fila 2, 440px) **pasó a usar la clase `.tile-monchis-home`**, quedando en la posición grande (1/6, fila 2, 560px) que dejó monchis. Contenido del tile de hugo sin cambios (mismo `data-case="hugo"`, mismo cover en video). El hueco que dejó `.tile-drivers` (6/9, fila 2) se tapó estirando `.tile-smartpass` de `9/13` a `6/13` (7 columnas), así la fila 2 queda sin huecos: hugo (1/6) + smartpass (6/13).
>
> **Patrón usado — "reusar clase para heredar posición":** en vez de escribir una regla de grid nueva, se **intercambió qué `<div>` lleva cada clase de posicionamiento** (`data-case`, contenido y cover de cada tile no se tocan). Es el mismo patrón que ya existía para hugo/`.tile-drivers` desde Julio 2026 (ver nota arriba) — se repitió acá y en el swap de memorable/monchis drivers (nota siguiente). **Para replicar:** si un tile A debe ocupar la posición de un tile B, cambiarle a A la clase de posicionamiento de B, y darle a B la clase que tenía A (o una de auto-flow tipo `.tile-sukupay`/`.tile-ph` si A no tenía posición fija). Los media queries de tablet/mobile que referencian esas clases por nombre siguen aplicando correctamente sin tocarlos, porque van atados a la clase, no al tile específico.

> **Agosto 2026 — ✅ monchis drivers ocupa el lugar de memorable, a pedido:** mismo patrón que arriba. El div de **monchis drivers** (headline "Shift management for 1,200+ drivers.") pasó a usar la clase `.tile-memorable` (1/5, fila 3 — la posición grande de esa fila). El div de **memorable** pasó a usar la clase `.tile-monchis-drivers`, que ahora es auto-flow `span 4` (la posición que dejó monchis drivers, después de sukupay en la fila 3). `data-case` y contenido de ambos tiles sin cambios.

### Para agregar imagen real a un tile

1. Encodear PNG/JPG a base64
2. Reemplazar el `src` del `.tile-cover-wrap img` correspondiente
3. Si pesa +500KB → moverlo a `portfolio-images.js` con lazy load

### Regla: NO encimar imágenes

- Cada tile tiene: `tile-bg` (color) → `tile-cover-wrap` (imagen) → `tile-ui` (info+gradient)
- El gradient del `tile-ui` va de `rgba(8,8,12,.96)` abajo a `transparent` 70% arriba
- Nunca usar `position:absolute` doble sin z-index claro

### Tile de Monchis — Search Animado

- El search bar está `position:absolute; top:1.5rem; left:1.5rem; z-index:10`
- Las frases rotan cada **2800ms** con slide vertical (entra desde abajo, sale hacia arriba)
- Easing entrada: `cubic-bezier(0.22,1,0.36,1)` (iOS-like)
- Easing salida: `cubic-bezier(0.55,0,1,0.45)` (rápido)
- Frases: "¿Una comida rica?" / "Hamburguesas o pizza" / "¿Algo fresco?" / "¿Ya desayunaste?" / "Sushi con delivery gratis" / "Pizzas al 50% OFF"

### Filtros

- `filterProjects(cat, btn)` — filtra por `data-category` en cada tile
- Categorías: `all`, `mobility`, `food`, `fintech`, `ecommerce`, `saas`

### Título del header ("Thinker. Tinkerer. Boundary breaker.") vs `#identity`

*Julio 2026 — ✅ APROBADO, no tocar sin pedido explícito*

`#identity` (nombre + rol, "Paula Elffman / Senior Product Designer") es `position:fixed;top:2rem;right:2.5rem` — flota independiente del flujo del header. El `.ph-title` vive en el mismo header, por eso en algún momento se lo achicó a mano para que no lo pisara, en vez de resolver el espacio real.

**Fix aplicado:**

- `.ph-title-row` tiene `padding-right:15rem` (240px) — una reserva **fija** que el título nunca cruza, sin importar el ancho de pantalla. Deja siempre ≥40px libres antes de `#identity`.
- Gracias a esa reserva, `.ph-title` pudo crecer: `clamp(2.5rem,6vw,6.5rem)` (antes `clamp(2.25rem,5.2vw,5.5rem)`).
- Trade-off intencional: el título ocupa **menos ancho** (envuelve en más líneas) a cambio de **más tamaño de fuente**.
- En mobile (`@media max-width:768px`) el `padding-right` se resetea a `0` en `.ph-title-row` — ahí `#identity` se reposiciona más chico (`top:1.25rem;right:1.25rem`) y el layout ya wrappea distinto, no hace falta la reserva.

**Regla para el futuro:** si el título necesita crecer más, subir el `15rem` de reserva junto con el tamaño, nunca el tamaño solo — así no vuelve a pisar `#identity`.

---

### Legibilidad — `.tile-category` y `.ph-mitem` (marquee)

*Julio 2026 — ✅ APROBADO, no tocar sin pedido explícito*

> ⚠️ **Actualización Julio 2026:** la parte de `.tile-category` de esta decisión (opacity 1, siempre visible) quedó **superada** por la decisión "Texto de tiles solo en hover" más abajo, a pedido explícito. `.ph-mitem` (marquee) sigue vigente sin cambios.

Dos elementos de texto secundario quedaron demasiado chicos/tenues para leerse en uso real (detectado por captura de pantalla):

`.tile-category` (label tipo "Fintech · Web3 · 2024" arriba del nombre en cada tile)

- Antes: `font-size:.5rem` (8px), `letter-spacing:.14em`, `opacity:.85`
- Ahora: `font-size:.6875rem` (11px), `letter-spacing:.12em`, `opacity:1`
- El tracking se redujo un poco porque con más tamaño una tracking tan ancha vuelve a costar lectura.

`.ph-mitem` (ítems del marquee que se desliza bajo el título — "Access control · E-commerce · Design systems...")

- Antes: `font-size:.5rem` (8px), `color:var(--ash-2)` (25% opacidad)
- Ahora: `font-size:.6875rem` (11px), `color:var(--ash)` (50% opacidad)
- Mismo criterio de tamaño que `.tile-category`, para que el sistema quede consistente.

**Pendiente, no resuelto todavía:** en la captura se ve `#section-label` (el texto vertical "Paula Elffman — Portfolio OS" pegado al borde izquierdo) pisando el primer ítem del marquee. Es `position:fixed;top:50%` — siempre centrado verticalmente en el viewport — así que se cruza con cualquier contenido que caiga a media altura de la pantalla, no solo el marquee. No se tocó porque implica una decisión de layout (reposicionar o resolver z-index/color), no solo de tamaño. Queda anotado en PRÓXIMOS PASOS.

**Nota de mantenimiento:** tanto `.ph-title` como `.tile-category` como `.ph-marquee`/`.ph-mitem` tienen **definiciones CSS duplicadas** en el archivo (misma selector declarado dos veces en distintas zonas del `<style>`). La última definición es la que gana por cascada, así que los fixes de arriba se aplicaron sobre la que efectivamente renderiza — pero las versiones viejas siguen ahí como código muerto. Candidato a limpieza general en una pasada futura.

---

### Covers de tiles animados (video/GIF) — EN PRUEBA

*Julio 2026 — 🧪 en prueba sobre* `muv`*, no replicado al resto todavía*

Se reemplazó el cover estático de `.tile-muv` por un asset animado exportado desde Jitter, para dar más vida al home.

- **Tamaño del cover:** `800×600px` (mismo tamaño que usaban los covers estáticos, no cambia el layout).
- **Export actual:** GIF, 89 frames, ~7.5MB (`muv-teal.gif`), archivo separado — **no** va embebido en base64 dentro del HTML, va referenciado por `src` relativo. Por eso `muv-teal.gif` tiene que vivir en la misma carpeta que `index.html` (ver tabla de ARCHIVOS al principio de este doc).
- **Pendiente antes de dar por bueno:** pasar de `.gif` a `.mp4` (`<video autoplay loop muted playsinline>`) — mismo contenido, mucho menos peso. El GIF es válido solo para prueba visual.
- **Limitación de Jitter (plan free):** "Video · 1x" está bloqueado, solo está disponible "Video · 0.5x" (cámara lenta). Si el resultado final se ve raro en 0.5x, hay que exportar pensando la animación para esa velocidad, o pagar el plan para 1x.

**Para replicar en otro tile:** reemplazar el `src` del `img` (o pasar a `<video>`) dentro de `.tile-cover-wrap` del tile correspondiente — mismo punto que "Para agregar imagen real a un tile" más arriba.

---

### Texto de tiles — solo "View case study" visible, resto en hover

*Julio 2026 — ✅ APROBADO, no tocar sin pedido explícito* *(revisión de la decisión original "Texto de tiles solo en hover" — el arrow dejó de ocultarse)*

**Decisión:** de los 4 elementos de texto del tile, solo `.tile-arrow` ("View case study ↗") queda visible por defecto — ahora como **botón pill**, fondo negro semitransparente con blur, no como texto plano. `.tile-category`, `.tile-name` y `.tile-headline` siguen ocultos hasta el hover.

```css
/* categoría y nombre — ocultos hasta hover (headline ya se comportaba así) */
.tile .tile-category,
.tile .tile-name {
  opacity:0;
  transform:translateY(6px);
  transition:opacity .35s var(--ease), transform .35s var(--ease);
}
.tile:hover .tile-category,
.tile:hover .tile-name {
  opacity:1;
  transform:translateY(0);
}

/* arrow → botón siempre visible */
.tile-arrow {
  opacity:1;
  align-self:flex-start;
  background:rgba(0,0,0,.55);
  backdrop-filter:blur(6px);
  -webkit-backdrop-filter:blur(6px);
  padding:.5rem .875rem;
  border-radius:999px;
  margin-top:.875rem;
  transition:background .3s var(--ease), gap .3s var(--ease);
}
.tile:hover .tile-arrow {
  background:rgba(0,0,0,.75);
  gap:.75rem;
}
.tile-arrow.coming-soon {
  background:rgba(0,0,0,.3); /* fondo más tenue para diferenciar de casos con case study real */
}

```

Este bloque se agregó **al final del** `<style>`, después de todo lo demás, para ganar por cascada sin tener que tocar/borrar las reglas duplicadas viejas de `.tile-category` y `.tile-arrow` que ya estaban dando vueltas en el archivo (ver nota de mantenimiento arriba). Sigue siendo código muerto acumulado, no se limpió.

**Razón del cambio de enfoque:** con category+name+arrow todos ocultos (versión anterior), el tile quedaba sin ningún indicio de interactividad hasta pasar el mouse — no había affordance de "esto es clickeable". Con el botón siempre visible, el tile comunica "hay algo acá" incluso en reposo, y el resto de la info (nombre, categoría, headline) se reserva para cuando el usuario ya mostró intención.

**Nota de posición:** el arrow vive dentro del mismo `.tile-info` que category/name/headline (que siguen ocupando espacio en el flujo aunque estén en `opacity:0`), así que su posición vertical no salta al hacer hover — queda fijo abajo a la izquierda del tile en ambos estados.

**Ya no hace falta la excepción de "Coming soon" que tenía la versión anterior** (forzar opacity 1 solo en ese caso) — ahora el arrow siempre está visible para todos los tiles por igual, `.tile-arrow.coming-soon` solo ajusta el color de fondo del botón para diferenciarlo visualmente.

---

### Tile hover reveal — gradient teal en zona de título + timing en cascada

*Septiembre 2026 — ✅ APROBADO, no tocar sin pedido explícito*

**Pedido:** replicar cómo revela sus tiles calebixca.com — un gradient sutil detrás del título del proyecto que aparece muy lento, y no solo el gradient: todo el hover se sentía rápido/golpeado en comparación.

**Gradient nuevo — `.tile-ui::after`:** capa hermana de `.tile-ui::before` (el scrim oscuro), con un teal fijo — no `var(--accent)`, mismo motivo que el spotlight glow y las otras excepciones de esta sección: el scrim de fondo es oscuro fijo en ambos modos, así que el acento mode-aware (`#009D71` en light) se perdería contra él.

```css
.tile-ui::after{
  content:'';
  position:absolute; inset:0; z-index:-1;
  background:linear-gradient(0deg,
    rgba(34,240,164,.20) 0%,
    rgba(34,240,164,.11) 24%,
    rgba(34,240,164,.03) 46%,
    transparent 66%);
  opacity:0;
  transform:translateY(14px);
  transition:opacity 1.8s var(--ease), transform 1.8s var(--ease);
}
.tile:hover .tile-ui::after,
.tile.tile-tapped .tile-ui::after{
  opacity:1;
  transform:translateY(0);
  transition-delay:.15s;
}
```

Se pinta encima del scrim oscuro (mismo `z-index:-1`, pero declarado después de `::before` → gana el orden de pintado dentro de ese stacking context), así el teal queda como un brillo residual sobre el oscurecimiento en vez de competir con él por contraste.

**Todo el hover se hizo más lento — tabla de timings:**

| Elemento | Antes | Ahora |
| --- | --- | --- |
| `.tile-glow` (spotlight que sigue el mouse) | opacity `.5s` | opacity `1.3s` |
| `.tile-cover` (zoom de la imagen) | transform `.7s` | transform `1.6s` |
| `.tile-ui::before` (scrim oscuro) | opacity `.7s` base / `.45s` en hover (aparecer era más rápido que desaparecer) | opacity `1s` base / `1.5s` en hover (ahora aparecer es lo lento) |
| `.tile-category` / `.tile-name` | opacity+transform `.35s` | opacity+transform `1.1s` — `.tile-name` con `.06s` de delay extra sobre `.tile-category` |
| `.tile-headline` | opacity+transform `.3s` | opacity+transform `1.1s`, delay `.18s` (llega última de las tres) |
| `.tile-ui::after` (nuevo, teal) | — | opacity+transform `1.8s`, delay `.15s` |

**Orden de llegada en el hover, de más rápido a más lento:** scrim oscuro → categoría → nombre → gradient teal → headline. Cada elemento tiene su propio timing para que la revelación se sienta en capas y no como un solo golpe de opacity — es la parte de "aparece muy slow, todo" del pedido.

**⚠️ Nota de mantenimiento:** el snippet de código en "Texto de tiles — solo View case study visible, resto en hover" (más arriba) todavía muestra `transition:opacity .35s var(--ease)` para `.tile-category`/`.tile-name` — quedó **desactualizado** por este cambio; no se reescribió ese bloque para no tocar el resto de esa sección. La regla que efectivamente gana por cascada y renderiza es la de acá (misma lógica de "última definición gana" que ya aplica al resto de duplicados del archivo, ver nota de mantenimiento en "Legibilidad — `.tile-category`" más arriba).

**Para replicar en un tile nuevo:** no hace falta tocar nada por tile — `.tile-ui::after`, igual que el scrim y el spotlight glow, es una regla global sobre `.tile-ui` y aplica sola a cualquier tile nuevo que use esa estructura.

---

### Headlines de tiles — acortados

*Julio 2026 — ✅ APROBADO*

Se simplificaron los `.tile-headline` para que se lean rápido en la ventana de hover (antes eran oraciones largas pensadas para estar siempre visibles).


| Tile                    | Antes                                                                       | Ahora                                     |
| ----------------------- | --------------------------------------------------------------------------- | ----------------------------------------- |
| muv                     | End-to-end ride-hailing for 2M+ trips across Paraguay.                      | Ride-hailing for 2M+ trips in Paraguay.   |
| monchis (home)          | New home experience driving 44.6% CVR for 61K users.                        | Food delivery redesign. 44.6% CVR.        |
| monchis (drivers)       | Real-time shift management for 1,200+ active drivers.                       | Shift management for 1,200+ drivers.      |
| smartpass               | Digital ticketing where great experiences begin.                            | Digital ticketing & access.               |
| everyone                | End-to-end e-commerce for a global multi-brand fashion platform.            | E-commerce for a global fashion platform. |
| sukupay                 | Redesigning trust and speed in crypto remittances from the US to Guatemala. | Crypto remittances, US → Guatemala.       |
| hugo                    | — (nuevo, sin versión "antes")                                              | AI Customer Success agent, vibe coded.    |
| autocloud (placeholder) | Fleet management and automotive workflow design.                            | Fleet management for automotive teams.    |
| thefork (placeholder)   | Restaurant discovery and booking for 8M+ users.                             | Restaurant discovery for 8M+ users.       |


**Criterio:** priorizar "qué es" + un número de impacto cuando existía, descartar el resto.

---

### Imagen real en tile de monchis home

*Julio 2026 — ✅ APROBADO*

Se reemplazó el cover estático de `.tile-monchis-home` (mockup de la app, screenshot con logo) por `monchis-tile.jpg`.

- **Original:** PNG 1600×1200, 692KB.
- **Procesado:** mismo tamaño (1600×1200 = 4:3, coincide exacto con el cover 800×600 del tile, no hizo falta recortar), comprimido a JPG calidad 82 → **~88KB**.
- Referenciado como archivo externo (`<img src="monchis-tile.jpg">`), mismo patrón que `muv-teal.gif` — no embebido en base64 pese a pesar menos de 300KB.
- **Excepción al protocolo:** el protocolo de IMÁGENES (ver esa sección) dice que <300KB debería ir inline en base64. Se dejó como archivo externo por consistencia con el tile de muv y porque simplifica iterar mientras estamos probando covers. Ver decisión "¿Creamos `portfolio-images.js`?" justo abajo.

---

### ¿Creamos `portfolio-images.js`? — Por ahora NO

*Julio 2026 — decisión activa, revisar cuando cambien las condiciones*

`portfolio-images.js` figura en la tabla de ARCHIVOS y en el protocolo de imágenes, pero **todavía no existe como archivo real**. Se evaluó crearlo ahora y se decidió posponerlo.

**Razón:** el lazy-load con `IntersectionObserver` se justifica cuando hay varios tiles con imágenes en el rango 300KB–1MB (suficiente peso como para que valga la pena no cargarlas todas de entrada). Hoy solo hay 2 tiles con imagen real:

- `muv-teal.gif` → 7.5MB (temporal, va a pasar a `.mp4`, no aplica al rango del lazy load igual)
- `monchis-tile.jpg` → 88KB (por debajo del umbral, no lo necesita)

Ninguno de los dos justifica construir el sistema todavía. Se optó por seguir con archivos externos simples (`src` relativo) mientras se está en fase de prueba de covers.

**Cuándo reconsiderar:** cuando haya 3-4+ tiles con imagen real, y/o alguna pese específicamente 300KB–1MB. Hasta entonces, `portfolio-images.js` sigue siendo un archivo planeado, no uno real — si algo en el proyecto asume que existe, hay que corregirlo.

---

### Tiles en mobile — tap-to-reveal (no hay `:hover` en touch)

*Julio 2026 — ✅ APROBADO*

**Problema:** con el botón "View case study" como único elemento visible por defecto (ver decisión de arriba) y el resto del texto detrás de `:hover`, en touch (sin mouse) el usuario nunca vería a qué proyecto correspondía cada tile — `:hover` no se dispara en mobile.

**Decisión:** primer tap revela la info (igual que el hover en desktop), sin navegar. Segundo tap sobre el mismo tile, o tap directo sobre el botón "View case study", navega al case study.

```js
gallery.addEventListener('click', function(e){
  var tile = e.target.closest('[data-case]');
  if(!tile) return;
  var onArrow = e.target.closest('.tile-arrow');
  if(isTouch && !onArrow && !tile.classList.contains('tile-tapped')){
    e.preventDefault();
    document.querySelectorAll('.tile.tile-tapped').forEach(function(t){
      if(t!==tile) t.classList.remove('tile-tapped');
    });
    tile.classList.add('tile-tapped');
    return;
  }
  // ...navegación normal (ya existía)
});

// tap afuera de cualquier tile cierra el que estaba revelado
document.addEventListener('click', function(e){
  if(!e.target.closest('.tile')){
    document.querySelectorAll('.tile.tile-tapped').forEach(function(t){
      t.classList.remove('tile-tapped');
    });
  }
});

```

```css
/* .tile-tapped replica el estado :hover para category, name, headline, arrow y el zoom del cover */
.tile:hover .tile-category, .tile.tile-tapped .tile-category,
.tile:hover .tile-name,     .tile.tile-tapped .tile-name     { opacity:1; transform:translateY(0); }
.tile:hover .tile-headline, .tile.tile-tapped .tile-headline { opacity:1; transform:translateY(0); }
.tile:hover .tile-cover,    .tile.tile-tapped .tile-cover    { transform:scale(1.04); }
.tile:hover .tile-arrow,    .tile.tile-tapped .tile-arrow    { background:rgba(0,0,0,.75); gap:.75rem; }

```

**Detección de touch:** `window.matchMedia('(hover:none)').matches` — en desktop con mouse esto es `false`, así que el comportamiento de click normal (un solo click navega) no cambia.

**Por qué el botón navega directo sin el paso intermedio:** es una call-to-action explícita ("View case study ↗"), no ambigua — tocarlo comunica intención clara de entrar, a diferencia de tocar la imagen/fondo del tile genérico.

**Alcance de la revisión mobile (Julio 2026):** se pidió mobile de "todo el sitio" (home + dashboard + case studies). El archivo principal (`index.html`) ya tenía cobertura `@media` para home (grid de tiles, header de proyectos), About (`.av-`*) y Dashboard (`.db-*`, `.dv-*`) desde antes de esta sesión — no se reconstruyó de cero, se sumó el tap-to-reveal sobre esa base existente.

**Pendiente:** los 6 case studies (`muv-case.html`, `monchis-case.html`, `everyone-case.html`, `smartpass-case.html`, `sukupay-case.html`, `vendor-tool-case.html`) no están disponibles todavía para revisar/ajustar su mobile — hay que subirlos.

---

## DASHBOARD VIEW — REGLAS

### APROBADO — No tocar sin pedido explícito

**Secciones (en orden):**

1. `.dv-avatar` — Foto + título "About me" · *simplificado Agosto 2026*
2. `.dv-section` — About (story + positioning statement) · *statement Agosto 2026*
3. `.dv-section` — AI in my workflow (carousel interactivo — ver subsección abajo) · *nuevo Agosto 2026*
4. `.dv-section.dv-bg` — Core strengths (pills) + My superpower (bridge), **misma sección** · *fusionadas Agosto 2026, ver nota abajo*
5. `.dv-section` — Experience (timeline)
6. `.dv-section.dv-bg` — Human side (bento: facetas de Pau) · *rediseñado Agosto 2026, superpower removida*

### About — statement de posicionamiento

*Agosto 2026 — ✅ a pedido (reemplaza el grid de passions)*

En el About, tras el `.dv-story` (los 4 párrafos, sin cambios), se **quitó la grilla "What I'm especially passionate about"** (`.dv-passions-label` + 6 `.dv-passion`) y se puso un **statement de posicionamiento** (`.dv-statement`):

- `.dv-statement-h` (Geist, ~2.375rem) — frase con las partes clave en verde accent (`em` → `var(--accent)`): *"I design **complex digital products** and use **AI** to accelerate research, exploration, prototyping and iteration — without losing the **human judgment** behind the work."*
- `.dv-statement-tags` (mono, `--ash-2`) — tagline *Product Designer · AI-native workflows · FinTech · B2B SaaS*, con los separadores `·` en `var(--accent)` (`.dv-statement-tags span`).

Highlights vía `var(--accent)` → bright #22F0A4 en dark, teal #009D71 en light. Separado del story por `border-top` (mismo patrón que tenían las passions).

> **Nota de limpieza:** las reglas `.dv-passions`* / `.dv-passion*` quedaron como **código muerto** (ya no se usan). Candidato a borrar junto con `.dv-card`*.

### Avatar

*Agosto 2026 — ✅ simplificado a pedido*

- Foto embebida directamente como `data:image/jpeg;base64,...` (NO lazy load)
- Círculo con `box-shadow: 0 0 0 3px rgba(38,216,151,.3), 0 0 0 7px rgba(38,216,151,.08)`
- Título: `<h1 id="dv-name-anim">"About <span class='dv-word-accent'>me</span>"` — mismo mask-reveal animation que antes (word-by-word), solo cambió el texto.
- **Se quitaron:** el `<p class="dv-roles">` (roles tachados: Graphic, Web, UI, UX, Product Designer) y el `<p class="dv-location">` ("Based in Buenos Aires · Open to remote"). El `.dv-avatar` ahora es solo foto + título "About me", sin subtítulos.
- Las clases `.dv-roles` / `.dv-location` quedaron en el CSS como **código muerto** (ya no se usan en este bloque) — no borrar sin confirmar que no se reusan en otro lado.

### Timeline de experiencia (en orden cronológico inverso)

*Actualizada Agosto 2026 desde LinkedIn — 7 entries reales*

1. **SukuPay** — Mar 2026–Present · Senior PD · Miami Beach, FL · Remote
2. **itti** — Aug 2024–Mar 2026 · Senior PD · Asunción, Paraguay · Remote (Muv, Monchis, Vendoor Tool, Drivers App, Smart Pass)
3. **Beyond Art Group** — Aug 2021–Aug 2024 · Product Designer Consultant · Seasonal · Buenos Aires
4. **AutoCloud** — Jul 2023–Apr 2024 · Principal PD · US · Remote
5. **TheFork · TripAdvisor** — Apr 2019–Jun 2023 · Senior PD · Remote
6. **Hotaru App** — Mar 2020–Jun 2022 · Principal PD & Co-Founder · Seasonal · Buenos Aires
7. **Restorando** — Oct 2016–Apr 2019 · Product Designer · Buenos Aires (adquirida por TheFork · TripAdvisor en 2019)

> **Cambios Agosto 2026 (a pedido):** se corrigieron fechas/rol/ubicación de **itti** (antes figuraba "2021–Present · Buenos Aires", real Aug 2024–Mar 2026 · Asunción), **TheFork** (antes "2019–2021 · Product Designer", real Apr 2019–Jun 2023 · Senior PD) y **Restorando** (antes "2017–2019 · UX/UI", real Oct 2016–Apr 2019 · Product Designer). Se **agregó Hotaru App** (Co-Founder) y se **eliminó** el entry fantasma "AutoCloud 2015–2017 · UX Designer" que no existe en el LinkedIn real. Orden = cronológico inverso por fecha de fin (= orden del LinkedIn).

> **Títulos del About Me (Agosto 2026, a pedido):** el `.dv-exp-h` pasó de "10 years. *Four chapters.*" → **"10 years *in product.*"**. El `.dv-human-h` de la sección "Beyond the work" pasó de "What feeds *the work.*" → **"Besides being a *product designer…*"** (el label mono "Beyond the work" no cambió).

### Chips de experiencia (`.dv-tag`) — verde accent en light/dark

*Agosto 2026 — ✅ corregido a pedido*

Los 21 chips de estado bajo cada empleo del timeline (ej. `Web3 · Fintech`, `Muv — 2.2M+ trips Q4`) usaban `color:var(--ash-2)` + borde `var(--line-md)` → en **light** quedaban casi invisibles (contraste ~2.6:1 sobre `#F5F4F0`). Ahora toman el verde de acento en ambos modos:

- `color:var(--accent)` → `#009D71` en light, `#22F0A4` (bright) en dark. Automático, sin hardcode.
- Relleno + borde tintados con `color-mix(in srgb, var(--accent) N%, transparent)` (9% fill / 38% borde), con **fallback sólido** (`border:1px solid var(--accent)` / `background:transparent`) para browsers sin `color-mix`.
- Estado `:hover` nuevo (borde 60% / fill 15%).

**Regla:** los chips derivan su color del token `--accent` vía `color-mix`, así que respetan la regla de "nunca hardcodear colores que cambian entre modos". Es el mismo criterio que `.dv-pill-g`.

### AI in my workflow — carousel interactivo (arriba de Core strengths)

*Agosto 2026 — ✅ nuevo, a pedido*

Sección nueva en el About Me, **entre About y Core strengths**. Muestra cómo Pau integra AI (Claude) en su flujo de diseño, en formato módulo interactivo tipo "stories" (patrón Linear/Stripe), no como texto plano.

**Estructura HTML:** `.dv-section` (sin `dv-bg`) → `.dv-label` "AI in my workflow" → `.dv-human-h` "AI as a *force multiplier.*" → `.ai-intro` (2 párrafos) → `.ai-lab` (el módulo).

**Módulo** `.ai-lab`**:**

- `.ai-bar` — barra de ventana: 3 dots (el 3° `.live` en accent) + título mono `claude · design-workflow`. *(Ya no tiene flechas — ver rediseño abajo.)*
- `.ai-progress` — segmentos (uno por slide) que se llenan solos y **auto-avanzan** (~5.2s c/u). Generados por JS a partir de los slides.
- `.ai-stage` > `.ai-track` — carousel horizontal (`translateX(-i*100%)`, transición .5s). 6 `.ai-slide`, cada una con eyebrow mono (`01 · …`), título Geist, descripción Muli y un `.ai-prompt` que **se tipea solo** (typewriter con cursor que parpadea).
- `.ai-nav-row` → `#aiPrev` + `.ai-nav` (pills) + `#aiNext` — fila inferior con las flechas a cada costado de las pills (ver rediseño abajo).

**Las 6 capacidades (**`data-nav`**):** Research · Prototyping · Exploration · UX writing · Critique · Production (Claude Design).

### `.ai-lab` — rediseño visual (tarjeta elevada, centrada, flechas abajo)

*Agosto 2026 — ✅ a pedido*

**Problema/pedido:** el módulo ocupaba **todo el ancho** del `.dv-section` (sin límite propio), tenía el mismo gris de fondo que el resto de la página (`var(--ghost)`, sin contraste) y las flechas ‹ › vivían arriba a la derecha, dentro de la barra de ventana.

**Cambios:**

1. **Ancho y centrado:** `.ai-lab` ahora tiene `max-width:860px; margin:0 auto` — deja de ocupar el ancho completo del `.dv-section` y queda centrado en desktop, igual que `.ai-intro` (780px) pero un poco más ancho.
2. **Fondo + elevación:** se agregaron dos tokens nuevos en `:root` (dark) y `body.light-mode` (light):
  - `--surface` — el fondo de la tarjeta. Dark: `var(--ghost-2)` (sin cambios de fondo, ya elevaba bien). Light: `#FFFFFF` (antes `var(--ghost)` = `#E8E7E3`, un gris que casi no se despegaba del `--void` de fondo `#F5F4F0`).
  - `--shadow-card` — sombra sutil para despegarlo del fondo. Light: `0 24px 48px -18px rgba(20,20,35,.18), 0 3px 12px rgba(20,20,35,.07)`. Dark: `0 24px 60px -20px rgba(0,0,0,.6), 0 2px 10px rgba(0,0,0,.35)`.
  - `.ai-lab` pasa a `background:var(--surface); box-shadow:var(--shadow-card);` (antes `background:var(--ghost)`, sin shadow).
3. **Flechas abajo, a los costados de las pills:** se sacaron del `.ai-bar` (ya no hay `.ai-bar-ctrl`) y se movieron a una fila nueva `.ai-nav-row` al final de la tarjeta: `‹ [pills de temas] ›`, todo centrado como grupo (`justify-content:center`). `.ai-nav` (las pills) también se centra (`justify-content:center`, antes alineado a la izquierda).

**Por qué "a cada costado" y no una fila propia:** agrupar navegación de tema (pills) + navegación de slide (flechas) en una sola fila inferior evita sumar altura al componente y deja la barra superior (`.ai-bar`) limpia, solo con la identidad de la ventana (dots + título).

**Archivos tocados:** `index.html` — tokens en `:root`/`body.light-mode`, CSS de `.ai-lab`/`.ai-bar`/`.ai-nav`/`.ai-nav-row`/`.ai-arrow`, HTML del bloque `#aiLab` (arrows movidos), media query mobile (`.ai-nav{padding:1rem}` → `.ai-nav-row{padding:1rem;gap:.5rem}`).

**IDs sin cambios:** `#aiPrev`, `#aiNext`, `#aiProgress`, `#aiTrack`, `#aiNav` — el JS (`getElementById`) sigue funcionando igual, solo cambió dónde viven los botones en el DOM.

**Regla para el futuro:** `--surface`/`--shadow-card` quedaron como tokens genéricos para "tarjeta elevada sobre el fondo" — reutilizables si se necesita otro componente con el mismo tratamiento (ej. si `.hs-feature` necesitara despegarse del fondo más adelante), en vez de inventar un tercer par de valores.

**Interacción / JS (bloque autocontenido, IIFE sobre** `#aiLab`**):**

- Auto-avance con `setTimeout`; el fill del segmento y el avance están sincronizados. `DUR = 5200ms` es **la única variable a tocar** para cambiar la velocidad.
- **Pausa al hover** (congela el segmento activo por su ancho computado) y **resume** con el tiempo restante exacto.
- Arranca cuando la sección entra en viewport (`IntersectionObserver`), así el typewriter dispara recién al verse.
- Respeta `prefers-reduced-motion`: sin auto-avance ni tipeo (prompt completo estático, sin parpadeo).

**Tokens / tipografías:** todo con tokens `dv-`* (`--accent`, `--paper`, `--ash`, `--ash-2`, `--ghost`, `--void`, `--line*`) + `color-mix` para los tints → light/dark automático. Fuentes: Geist (títulos), Muli (body), JetBrains Mono (labels + prompt).

**Copy:** condensado del texto original de Pau (se mantuvo la idea de "force multiplier" y la mención a Claude / Claude Design). Los prompts de ejemplo por slide son ilustrativos.

**Preview aislado:** se generó `ai-section-preview.html` (standalone, con toggle light/dark y los mismos tokens/fuentes) para revisar solo esta sección sin abrir todo el portfolio. **No es parte del deploy** — es solo para review, no va en la tabla de ARCHIVOS.

**Regla para el futuro:** para sumar/quitar una capacidad, agregar/quitar un `.ai-slide` con su `data-nav` y `data-prompt` dentro de `#aiTrack` — los segmentos de progreso y las pills de nav se generan solos a partir de los slides, no hay que tocar el JS.

### Core strengths (13 pills, 4 en Emerald)

- Emerald: User Research, Design Systems, Visual Design, AI-assisted Design
- Clase: `.dv-pill-g`

### My superpower — combinada dentro de la sección Core strengths

*Agosto 2026 — ✅ movida y fusionada a pedido (dos iteraciones). Septiembre 2026 — ✅ tercera iteración: contenido interno rediseñado (scramble title + chip flow), ver más abajo.*

**Iteración 1:** `.hs-feature` (el bloque "I bridge the gap.") vivía **dentro** del bento `.hs-grid` de "Beyond the work", como primera celda (span 6). Se sacó de ahí y pasó a ser su propia `.dv-section.dv-bg`, entre Core strengths y Experience.

**Iteración 2:** esa sección propia se **fusionó con la de Core strengths** — ya no son dos `.dv-section.dv-bg` consecutivas, sino **una sola**: `.dv-label` "Core strengths" → `.dv-pills` → `.hs-feature`, todo dentro del mismo `<div class="dv-section dv-bg">`. Motivo: las dos secciones separadas dejaban un espacio vertical grande entre las pills y la card (dos paddings de `.dv-section` sumados, `5rem` cada uno). Al fusionarlas, ese espacio pasó a ser un solo `margin-top:2.5rem` en `.hs-feature` — mucho más ajustado, se leen como un conjunto.

- `.hs-feature` — eyebrow mono "My superpower" → `.hs-super-title` "I bridge the gap." → subtítulo → (en esta iteración) `.hs-bridge`: visualización literal del bridge, 3 nodos (`Stakeholder language` → `Dev handoff` → `Shipped product`) unidos por una línea (`.hs-line > i`) que se **dibuja** (scaleX 0→1) y nodos (`.hs-node-dot`) que se **encienden en secuencia** (delays 0 / .5s / 1s) al entrar en viewport. *(Reemplazado en Iteración 3, ver abajo.)*
- **Fondo blanco + sombra (Agosto 2026, a pedido):** `.hs-feature` usaba `background:var(--ghost-2)` — en light mode eso es un gris que casi no se distingue del `--void` de fondo de la sección (mismo problema que tuvo `.ai-lab`, ver esa sección). Se cambió a los mismos tokens reutilizables `--surface` (blanco puro en light) + `box-shadow:var(--shadow-card)`, para que la card se despegue del fondo. También se quitó el `grid-column:span 5` (CSS muerto — ya no vive dentro de un grid).
- ~~El id `#hsBridge` sigue siendo único en el documento...~~ *(obsoleto, ver "IDs" en Iteración 3 — `#hsBridge` ya no existe.)*

**Iteración 3 (actual, Septiembre 2026):** rediseño completo del contenido interno de `.hs-feature`, a pedido — Pau no quería el diagrama de línea+nodos y pidió que el título apareciera con el efecto de scramble/decrypt del hero de **oscarhernandez.vercel.app**.

- `.hs-eyebrow` — nuevo modificador `.hs-eyebrow-lg` (se agrega junto a `.hs-eyebrow`, no la reemplaza): sube `font-size` de `.5625rem` a `clamp(.8125rem,1.1vw,.9375rem)` y `font-weight` a 700. Es exclusivo de este eyebrow — el resto de los eyebrows del sitio (Experience, Beyond the work, etc.) siguen en el tamaño base.
- `.hs-super-title` ("I bridge the gap.") tiene ahora efecto **scramble/decrypt**: al entrar en viewport arranca vacío y cada carácter cicla por un charset random (`!<>-_\/[]{}—=+*^?#$%&01`) antes de resolverse al carácter final; el timing de inicio/fin de cada carácter es aleatorio por índice (no todos resuelven a la vez, efecto "cascada"). Mientras un carácter está scrambleando queda envuelto en `<span class="hs-scramble-char">` (accent, 75% opacidad) para distinguirlo del texto ya resuelto.
  - Implementación: clase `Scrambler` en vanilla JS (`requestAnimationFrame`, cero dependencias) instanciada sobre `#hsSuperTitle`. El texto final vive en `data-text="I bridge the gap."` — **si el copy cambia, actualizar ahí**, no solo el texto visible dentro del `<h3>`.
- `.hs-bridge` (línea + nodos) fue **reemplazado** por `.hs-super-flow`: 3 chips pill (`.hs-super-chip`, mono uppercase, mismo tratamiento visual que `.dv-pill`) unidos por flechas (`.hs-super-arrow`, `→` en accent) — `Stakeholder language → Dev handoff → Shipped product`. Aparecen con fade + rise escalonado (delays 0 / .15s / .3s) al agregarse `.is-live` al contenedor `#hsSuperFlow`.
- **Trigger único y desacoplado:** scramble del título y `.is-live` de los chips disparan juntos, desde un solo `IntersectionObserver` nuevo sobre `#hsFeature` (threshold .4, se desconecta tras disparar una vez). Antes, el `.is-live` del bridge dependía del observer de `#hsGrid` ("Beyond the work") — es decir, la animación de esta sección solo corría cuando el usuario llegaba a *otra* sección más abajo. Quedó corregido: ahora dispara con su propia sección.
- Mobile (`≤768px`): `.hs-super-flow` pasa a columna (`flex-direction:column`) y `.hs-super-arrow` se oculta — mismo criterio que tenía `.hs-bridge` (perdía la línea horizontal en mobile).
- `prefers-reduced-motion`: el scramble se salta (texto final directo, sin animación) y chips/flechas quedan fijos en `opacity:1`, sin transición.

**IDs — qué cambió:**
- `#hsBridge` **ya no existe.** La regla de "no duplicarlo" de la Iteración 2 queda obsoleta.
- Nuevos: `#hsFeature` (contenedor, target del `IntersectionObserver`), `#hsSuperTitle` (el `<h3>`, con `data-text`), `#hsSuperFlow` (contenedor de chips, recibe `.is-live`).
- El script viejo debajo de "Beyond the work" (el que escucha `#hsGrid`) todavía tiene `var bridge=document.getElementById('hsBridge')` — queda como código muerto inofensivo (`if(bridge)` da `false` siempre). No rompe nada; si en algún momento se limpia ese script, se puede borrar esa línea junto con el `bridge.classList.add('is-live')` de adentro de su `reveal()`.

**Regla para el futuro:** si se necesita otra card "elevada" en el About Me, reusar `--surface`/`--shadow-card` (mismo criterio que `.ai-lab` y `.hs-feature`) en vez de inventar un tercer tratamiento de fondo. Si se agrega un cuarto paso al flow (más allá de los 3 chips), sumar el delay correspondiente en `.hs-super-flow.is-live .hs-super-chip:nth-of-type(n)` — los delays actuales solo cubren el 3° y 5° hijo (los chips; los pares son las flechas).

### Human side — bento "Beyond the work" (rediseñado)

*Agosto 2026 — ✅ nuevo formato, a pedido (reemplaza el grid 4×2 de* `.dv-card`*); superpower removida en revisión posterior*

La sección de cierre pasó del grid estático `.dv-cards` (8 cards iguales, emoji + nombre + insight) a un **bento animado** (`.hs-grid`, 6 columnas).

**Estructura:**

- `.hs-cell-travel` + `.hs-cell-food` (span 3 c/u) — las dos que Pau destacó, más grandes.
- 3 `.hs-cell-sm` (span 2) — AI, Photography, Cultures. *(Agosto 2026: se quitaron Books, Architecture y Music a pedido; las 3 restantes ocupan exactamente una fila de 6 col, así que el bento sigue balanceado sin tocar el grid.)*
- Cada `.hs-cell`: emoji + nombre (Geist) + insight (Muli). **Reveal escalonado** al scroll (fade + rise, delay = índice × 60ms) y **hover** (lift −4px, borde accent, emoji scale 1.15).

> **Nota:** el bloque `.hs-feature` (superpower) ya **no vive acá** — ver sección "My superpower" arriba. Solo quedan las celdas de facetas.

**JS (IIFE autocontenido sobre** `#hsGrid`**):** un `IntersectionObserver` dispara el reveal de las cells cuando la sección entra en viewport; los `transition-delay` inline se limpian tras el reveal para que el hover no quede retrasado. Respeta `prefers-reduced-motion` (todo en estado final, sin animación). *(Septiembre 2026: este mismo IIFE también intentaba disparar el `.is-live` de `#hsBridge` — quedó como línea muerta inofensiva desde que "My superpower" se rediseñó con su propio trigger, ver Iteración 3 en la sección "My superpower" arriba.)*

**Tokens/tipografías:** `dv-`* tokens + `color-mix` para tints → light/dark automático. Geist (títulos), Muli (body), JetBrains Mono (eyebrow/labels).

**Mobile:** el bento colapsa a 2 col (`768px`) y 1 col (`480px`); el bridge pasa a lista vertical (línea oculta, nodos apilados con dot + label en fila).

**Regla para el futuro:** para sumar/quitar una faceta, agregar/quitar un `.hs-cell.hs-cell-sm` dentro de `#hsGrid` — el reveal escalonado se calcula solo por índice, no hay que tocar el JS. Para cambiar cuál faceta va grande, usar `hs-cell-travel`/`hs-cell-food` (span 3) o `hs-cell-sm` (span 2).

> **Ajuste Agosto 2026 (labels del bridge):** los 3 nodos van en **una sola línea** (`.hs-node-label` con `white-space:nowrap`). Al principio tenían saltos forzados (`Stakeholder<br>language`, etc.) que partían las palabras y se veían raro; se quitaron los `<br>` y se subió el `max-width` del `.hs-bridge` a 620px para que las labels entren cómodas. Alternativa punchier si en algún momento se quiere acortar: keywords sueltos (Stakeholders → Handoff → Shipped), ya que el subtítulo de arriba dice la frase completa.

> **Fix Agosto 2026 (dots del bridge):** `.hs-node-dot` y `.hs-node-label` eran `<span>` (inline) y en desktop `.hs-node` no era flex, así que el navegador **ignoraba el** `width/height/margin` del dot (los inline no respetan dimensiones) → los círculos casi no se veían y la label quedaba al costado en vez de debajo. Fix: `display:block` en ambos. En mobile ya funcionaba porque ahí `.hs-node` es flex.

> **Nota de limpieza:** las reglas `.dv-cards` / `.dv-card`* quedaron como **código muerto** (ya no se usan). Candidato a borrar en una pasada futura.

---

## CASE STUDIES

### ✅ Julio 2026 — Todos los cases son ahora páginas separadas (light), con Wipe Transition

Se migraron `smartpass` y `sukupay` de overlay dark (`<template id="tpl-*">` dentro del portfolio) a páginas `.html` independientes en light, igual que `muv` y `monchis`. Esto resuelve la inconsistencia visual dark/light documentada arriba: ahora todo case entra/sale con el mismo wipe, sin importar cuál sea.


| Case        | Archivo                 | data-case → CASE_PAGE_MAP |
| ----------- | ----------------------- | ------------------------- |
| muv         | `muv-case.html`         | `muv`                     |
| monchis     | `monchis-case.html`     | `monchis`                 |
| sukupay     | `sukupay-case.html`     | `suku`                    |
| smartpass   | `smartpass-case.html`   | `smart`                   |
| everyone    | `everyone-case.html`    | `everyone`                |
| vendor tool | `vendor-tool-case.html` | `vendor`                  |
| hugo        | `hugo-case.html`        | `hugo`                    |


**Pendiente de limpieza:** `<template id="tpl-smart">` y `<template id="tpl-suku">` quedaron huérfanos dentro de `index.html` (ya no se usan, `openCase()` solo corre como fallback si un `data-case` no está en `CASE_PAGE_MAP`). Se pueden borrar en una pasada futura sin romper nada.

### Para agregar un nuevo case como página

1. Crear `nombre-case.html` con el mismo back nav + Wipe Transition (ver sección arriba)
2. Agregar la entrada en `CASE_PAGE_MAP` dentro de `index.html`
3. Verificar que el tile en el gallery tenga el `data-case` correcto (ver bug conocido abajo)

### 🐛 BUG CONOCIDO Y CORREGIDO (Septiembre 2026) — texto invisible en dark mode dentro de los cases

**Síntoma:** títulos, labels y porcentajes ilegibles (texto negro sobre fondo oscuro) al activar el toggle dark del dock — o directamente al entrar a un case si `localStorage.pe-theme` ya venía en `'dark'` desde otra página del portfolio.

**Causa raíz:** cada case tiene su propio `:root{}` con tokens en light y un bloque `body.dark-mode{}` que los reescribe para dark. Ese bloque de override se copió y pegó entre todos los cases, pero **nunca incluyó `--ink` ni `--ash2`** — dos tokens de texto que sí existen en el `:root` de varios cases (son remanentes de una convención de nombres más vieja; los cases más nuevos ya usan `--paper`/`--ash-2`, que sí estaban bien cubiertos). Resultado: en dark mode, `--bg` pasaba a oscuro pero `--ink`/`--ash2` seguían apuntando a su valor claro-sobre-fondo-claro original (`#1A1814` / `rgba(26,24,20,.15)`), casi negro — invisible sobre el nuevo fondo oscuro.

**Regla para cualquier case nuevo o edición futura de tokens:** cada variable de texto/label definida en `:root` (cualquiera usada como `color:var(--x)` sobre grandes bloques de contenido, no solo accents puntuales) **debe tener su contraparte en `body.dark-mode{}`**. Antes de dar por cerrado un case, correr este chequeo:

```bash
# Compara variables de :root vs las que el bloque body.dark-mode realmente sobreescribe
comm -23 <(sed -n '/^:root{/,/^}/p' archivo.html | grep -oP '(?<=  --)[a-zA-Z0-9_-]+(?=:)' | sort -u) \
         <(sed -n '/body\.dark-mode{/,/^}/p' archivo.html | grep -oP '(?<=--)[a-zA-Z0-9_-]+(?=:)' | sort -u)
```

Lo que aparezca en el resultado y sea un color de **texto** (no un accent de marca puntual tipo `--red`/`--orange`/`--navy`/`--purple`/`--teal`/`--amber`/`--lime`, que se dejan fijos a propósito porque son colores saturados con contraste suficiente en ambos fondos — mismo criterio que las excepciones de color fijo documentadas en DESIGN TOKENS) hay que agregarlo al bloque `body.dark-mode{}`, típicamente:
```css
--ink:#F4F4F6;
--ash2:rgba(244,244,246,0.15);
```

**Estado por archivo (auditado y corregido):**

| Archivo | Usaba `--ink` | Usaba `--ash2` | Fix aplicado |
| --- | --- | --- | --- |
| `theforkreviewscase.html` | Sí | Sí | ✅ `--ink` + `--ash2` agregados |
| `theforkshortlistcase.html` | Sí | Sí | ✅ `--ink` + `--ash2` agregados |
| `monchis-case.html` | Sí | Sí | ✅ `--ink` + `--ash2` agregados |
| `monchis-drivers-case.html` | Sí | Sí | ✅ `--ink` + `--ash2` agregados |
| `smartpass-case.html` | Sí | Sí | ✅ `--ink` + `--ash2` agregados |
| `muv-case.html` | No (usa `--paper`, ya cubierto) | Sí | ✅ `--ash2` agregado |
| `hugo-case.html` | No (usa `--paper`, ya cubierto) | Sí | ✅ `--ash2` agregado |
| `everyone-case.html` | No (usa `--paper`, ya cubierto) | Sí | ✅ `--ash2` agregado |
| `sukupay-case.html` | No | No | Sin cambios — ya estaba bien |
| `sukupay-ds-case.html` | No | No | Sin cambios — ya estaba bien |
| `memorable-case.html` | No | No | Sin cambios — ya estaba bien |

---

### 🐛 BUG CONOCIDO Y CORREGIDO (Septiembre 2026) — `.back-nav` sticky y su meta (`.nav-right` / `.back-nav-right`) fijos al valor de light, sin contraparte en dark

**Síntoma:** con el toggle dark activo, el header sticky de arriba (el que tiene "← Back to portfolio" y el nombre del case) se quedaba con el fondo crema de light mode mientras el resto de la página ya estaba oscuro — banda clara pegada arriba de una página oscura. El texto de la derecha del nav ("Paula Elffman · Sr Product Designer") además desaparecía: era un gris oscuro fijo, invisible sobre cualquier fondo oscuro.

**Causa raíz:** mismo patrón que el bug de `--ink`/`--ash2` de la sección anterior, pero en dos propiedades que ni siquiera pasan por una variable:
- `.back-nav{ background:rgba(245,244,240,.92); }` (o su variante por-case: `rgba(246,244,237,.92)` en everyone, `rgba(245,244,240,.92)` en el resto) — literal hardcodeado, nunca tuvo override en `body.dark-mode{}`.
- `.nav-right` / `.back-nav-right{ color:rgba(26,24,20,.3); }` (sukupay y sukupay-ds usan `rgba(21,33,25,.3)`, su propio "ink" de marca) — mismo problema, literal fijo sin contraparte dark.

Como no son `var(--x)`, el script de auditoría de la sección anterior (que compara tokens de `:root` vs `body.dark-mode{}`) no los detecta — hay que grepear literales hardcodeados a mano, no solo variables.

**Fix aplicado — en los 12 case studies standalone:**
```css
/* después del bloque body.dark-mode{...} de cada archivo */
body.dark-mode .back-nav{background:rgba(30,30,38,.85);}
```
y en `.nav-right`/`.back-nav-right`, se reemplazó el literal fijo por `color:var(--ash);` (mismo tratamiento que ya tenía `.nav-title`/`.back-nav-title` al otro lado del nav — quedan con el mismo peso visual entre los dos lados).

**Estado por archivo (auditado y corregido, Septiembre 2026):**

| Archivo | `.back-nav` bg fijo | `.nav-right`/`.back-nav-right` color fijo | Fix aplicado |
| --- | --- | --- | --- |
| `smartpass-case.html` | Sí | Sí (ya usaba `.nav-right`) | ✅ dark override + `var(--ash)` |
| `everyone-case.html` | Sí | Sí (`.back-nav-right`) | ✅ dark override + `var(--ash)` |
| `hugo-case.html` | Sí | Sí (`.back-nav-right`) | ✅ dark override + `var(--ash)` |
| `memorable-case.html` | Sí | No tiene nav-right (solo `.back-nav-title`) | ✅ solo dark override |
| `monchis-case.html` | Sí | Sí (`.nav-right`) | ✅ dark override + `var(--ash)` |
| `monchis-drivers-case.html` | Sí | Sí (`.nav-right`) | ✅ dark override + `var(--ash)` |
| `muv-case.html` | Sí | Sí (`.back-nav-right`) | ✅ dark override + `var(--ash)` |
| `sukupay-case.html` | Sí | Sí (`.back-nav-right`, `rgba(21,33,25,.3)`) | ✅ dark override + `var(--ash)` |
| `sukupay-ds-case.html` | Sí | Sí (`.back-nav-right`, `rgba(21,33,25,.3)`) | ✅ dark override + `var(--ash)` |
| `thefork-reviews-case.html` | Sí | Sí (`.nav-right`) | ✅ dark override + `var(--ash)` |
| `theforkshortlistcase.html` | Sí | Sí (`.nav-right`) | ✅ dark override + `var(--ash)` |
| `vendor-tool-case.html` | Sí | Sí (`.nav-right`) | ✅ dark override + `var(--ash)` |

**Regla para cualquier case nuevo:** el chequeo de la sección anterior (`--ink`/`--ash2`) no alcanza — hay que además grepear `background:rgba(24[5-6],244,2[3-4]0` y `color:rgba(2[16],2[43],2[05],.3)` (los literales de fondo/texto de light que se copian-pegan al armar el nav de un case nuevo) y confirmar que ambos tengan salida en `body.dark-mode{}`, ya sea vía variable o vía selector `body.dark-mode .clase{...}` explícito.

---

### smartpass-case.html — ajustes puntuales (Septiembre 2026)

Durante la misma revisión aparecieron cuatro problemas específicos de este case (no compartidos con los otros 11, porque smartpass es el único que usa `--green` como su propio token de acento en vez de sumarse al `var(--accent)` del resto del sistema):

- **`--green` sin contraparte dark:** a diferencia de `var(--accent)` (que sí tiene el par `#009D71` light / `#22F0A4` dark automático), `--green:#17A25D` se definía solo en `:root` y nunca se sobreescribía en `body.dark-mode{}`. Resultado: "experiences", "Security", los dots de los pillars/use-cases, el eyebrow y la leyenda del flow quedaban en el verde oscuro de light dentro de dark mode, sin el brillo que sí tiene el resto del portfolio. Fix: `--green:#22F0A4; --green2:rgba(34,240,164,.12);` agregado al bloque `body.dark-mode{}` de este archivo.
- **`.cover-title .dim` (la "pass" del wordmark):** no usa variable, es un literal `rgba(20,21,26,.12)` — pensado como texto fantasma sobre fondo claro. En dark, ese mismo literal es casi negro sobre casi negro. Fix: `body.dark-mode .cover-title .dim{ color:var(--green); text-shadow:0 0 28px rgba(34,240,164,.35); }` — mismo patrón que el título mode-aware de sukupay-ds.
- **Contraste de `--ash` insuficiente:** `rgba(20,21,26,.5)` sobre `--bg:#F5F4F0` da ~3.4:1, por debajo del 4.5:1 que exige AA para texto normal (afectaba, entre otros, "Reduction / elimination of fraud in access to spaces" en los pillars). Subido a `rgba(20,21,26,.62)` (~4.9:1). Este token es de uso amplio en el case (`.ov-body`, `.pillar li`, `.cm-label`, `.footer-l/r`, etc.), así que el fix corrige todo el texto secundario de una vez.
- **`.flow-node` (Flow & Roles):** el fondo de estas tarjetas es blanco fijo en los dos modos (representan pantallas de UI, no chrome de página), pero `.flow-node-title` usaba `var(--ink)` — que en dark pasa a blanco, texto blanco sobre tarjeta blanca, invisible. Fix: título y subtítulo pasan a color fijo oscuro (`#14151A` / `rgba(20,21,26,.62)`), con una excepción para `.flow-node.mail` (cuyo fondo sí es adaptable vía `--green2`) que mantiene `var(--ash)`.
- **"The design process" — más peso visual:** los números ahora entran con scroll-reveal escalonado (`IntersectionObserver`, `.1s` de stagger entre pasos) y el paso 01 aterriza primero, más grande (44px vs 34px) y relleno de verde, en vez de los seis círculos estáticos e iguales de antes.

Ninguno de estos cuatro es un patrón a replicar en los otros 11 cases — son consecuencia directa de que smartpass es el único archivo con un segundo sistema de acento (`--green`) en paralelo al `var(--accent)` compartido.

---

### 🐛 BUG CONOCIDO Y CORREGIDO (Septiembre 2026) — token de marca por-case sin contraste AA en dark

**Síntoma:** en varios cases, el color de marca del case (el que reemplaza a `var(--accent)` porque cada case tiene su propia paleta — azul de Hugo, rojo de Vendor Tool, violeta de Everyone/Memorable, verde de SukuPay) se ve apagado o directamente invisible en dark mode. A diferencia del bug de `.back-nav`, acá el token sí tiene overrides en `body.dark-mode{}` — el problema es que ese override **repite el mismo valor de light**, que nunca fue pensado para un fondo oscuro.

**Causa raíz:** estos tokens se heredan del branding del proyecto real (el azul exacto de Hugo, el rojo exacto de Vendor Tool), sampleado en su versión "de marca" — pensada para fondos claros o para imprenta. Contraste medido contra `--bg:#24242C` (dark):

| Archivo | Token | Valor original | Contraste en dark | Fix |
| --- | --- | --- | --- | --- |
| `hugo-case.html` | `--orange` (alias interno del azul de Hugo) | `#0033A0` | <1.5:1 | `#7CA6FF` |
| `vendor-tool-case.html` | `--red` | `#E8143C` | ~3.4:1 | `#E6224F` |
| `everyone-case.html` | `--purple` / `--purple-2` | `#8B5CF6` / `#964BFE` | ~3.6:1 / ~3.5:1 | `#C6A6F6` / `#D6B6FF` |
| `memorable-case.html` | `--accent` (+ `--grad`, literal aparte) | `#9846FF` | ~3.4:1 | `#C699FF` (tint 45% hacia blanco del original — sin valor pedido, derivado) |
| `monchis-case.html` / `monchis-drivers-case.html` | `--red` (mismo hex que vendor-tool) | `#E8143C` | ~3.4:1 | `#F06680` |
| `thefork-reviews-case.html` / `theforkshortlistcase.html` | `--red` (verde de marca reusando el alias `--red`) | `#0B8457` | ~3.3:1 | `#6DB59A` |
| `sukupay-case.html` / `sukupay-ds-case.html` | `--accent` | `#0E6B4A` / `#005043` | casi 1:1 | `#61FF61` (el lime que sukupay-ds ya tenía hardcodeado en otro lugar) |

Todos por encima de 4.5:1 sobre `--bg:#24242C` salvo donde el token ya pasaba (ej. `--orange` de muv `#FF6B2C` en 5.4:1, `--teal` de monchis-drivers en 6.6:1 — esos quedaron sin tocar).

**Nota sobre sukupay-ds:** `.cover-title .combo` pinta un gradiente de texto `linear-gradient(90deg, var(--lime) 0%, var(--accent) 100%)` — con `--accent` ahora también en `#61FF61`, ese degradé se ve sólido en dark (los dos extremos son el mismo verde) en vez de bicolor. Es una consecuencia cosmética menor del fix, no un error — si se quiere mantener el efecto de dos tonos en dark habría que darle a `--accent` un verde distinto (más claro o más oscuro) en vez de igualarlo al lime.

**Bug relacionado encontrado de paso:** `sukupay-case.html` y `sukupay-ds-case.html` tenían el mismo bug de ".dim" que smartpass (`.cover-title .dim` con `rgba(21,33,25,.15)` fijo, invisible en dark) — corregido con el mismo patrón: `body.dark-mode .cover-title .dim{ color:var(--accent-o-lime); text-shadow:... }`.

---

## REGLAS DE JS — NO ROMPER

```js
// Script único — 1 <script> / 1 </script>
// Orden obligatorio:
1. Cursor (var cur, ring, tick)
2. openCase() / closeCase()
3. DOMContentLoaded (gallery clicks, keyboard, tile stagger, parallax)
4. switchView()
5. revealObserver
6. Panel scroll
7. Sticky header
8. filterProjects()
9. Loader (window load)
10. loadMuvImages() + openCase wrapper
11. MC phrase rotator (DOMContentLoaded)

```

**Regla crítica:** Ningún carácter especial (═ ─ — etc.) dentro del `<script>`. Solo ASCII básico en comentarios JS.

**Regla crítica:** No usar `opacity:0` en elementos del dashboard. Todo visible desde CSS puro.

---

## IMÁGENES — PROTOCOLO


| Peso           | Estrategia                                                    |
| -------------- | ------------------------------------------------------------- |
| < 300KB        | Embeber inline como base64                                    |
| 300KB–1MB      | Mover a `portfolio-images.js` con lazy load via `data-img-id` |
| > 1MB en tiles | Placeholder SVG gris hasta tener versión optimizada           |


**Lazy load system:**

- `portfolio-images.js` define `window.PORTFOLIO_IMAGES = {}`
- Los `<img>` tienen `data-img-id="portfolio_img_N"` como placeholder
- `IntersectionObserver` carga la imagen cuando entra al viewport

---

## MUV CASE STUDY — Design System Section ✅ APROBADO

*Julio 2026 — No tocar sin pedido explícito*

### Estructura de la sección (orden)

1. **01 Driver Card · States** — 2 columnas lado a lado
2. **02 Category Card · States** — 2 columnas + listado completo debajo
3. **03 Push Notifications · Real-time States** — 2 columnas: texto izquierda, imágenes apiladas derecha
4. **04 Toast Alerts · Feedback System** — 2 columnas lado a lado
5. **DS Principles** — grid 3 columnas al final

### Tamaños de imágenes

- Driver cards: `max-width:50%` centrado en contenedor gris
- Category cards: `max-width:60%`
- Push notifications: `max-width:50%` (las 3 apiladas a la derecha)
- Toasts: `max-width:50%`

### Push Notifications — layout específico

```
[texto + 3 bullets]    |    [Searching img]
                       |    [In transit img]
                       |    [Permission img]

```

- CSS class: `.ds-pn-layout` → `grid-template-columns:1fr 1fr`
- Imágenes en `.ds-pn-img-area img` → `max-width:50%`
- Mobile: colapsa a 1 columna

### Componentes incluidos


| Componente        | Archivo fuente                | Estados                |
| ----------------- | ----------------------------- | ---------------------- |
| Driver Card       | `Conductor.png`               | Pre-trip (naranja)     |
| Driver Card       | `Conductor_en_viaje.png`      | In-trip (neutro)       |
| Category Card     | `Category_card.png`           | Selected / Recomendado |
| Category Card     | `Category_card_unelected.png` | Unselected             |
| Category Listing  | `false.png`                   | All options            |
| Push · Loading    | `loading.png`                 | Searching state        |
| Push · In transit | `en_caminp.png`               | ETA + driver name      |
| Push · Alert      | `alerts.png`                  | Permission request     |
| Toast · Success   | `Success.png`                 | Green                  |
| Toast · Error     | `Alert.png`                   | Red                    |


### CSS classes clave

```css
.ds-group          /* cada grupo de componentes */
.ds-group-label    /* número + título del grupo */
.ds-comp-grid.ds-2col  /* grid 2 columnas para componentes */
.ds-comp           /* card individual de componente */
.ds-comp-img       /* área de imagen — padding 1.25rem */
.ds-comp-img img   /* max-width:50% */
.ds-comp-img-wide img  /* max-width:60% */
.ds-tag            /* etiqueta de metadata */
.ds-tag-accent     /* etiqueta en verde lima */
.ds-tag-green      /* etiqueta verde success */
.ds-tag-red        /* etiqueta roja error */
.ds-principles     /* grid 3col de principios al final */
.ds-pn-layout      /* 2col específico para push notifications */
.ds-pn-img-area img /* max-width:50% */

```

---

## MONCHIS CASE STUDY — Reestructurado alrededor de los dos caminos (Agosto 2026)

### Qué cambió

El case pasó de ser "before/after + design system + métricas" a un caso de **proceso de decisión**. El eje ahora es: mandato abierto → research → hallazgos → wireframes → **dos caminos (V1 / V2)** → versión final → search dinámico → design system → métricas.

### Estructura (orden de secciones)

1. **Cover** — se sumó `Mandate: Open scope — asked to take the lead`.
2. **Context & Problem** — solo el *before* + card "The mandate". El *after* se movió a "The final version" para que el payoff llegue después de los caminos.
3. **Research · Discovery** — 4 métodos + datos de Amplitude + quotes de usuarios (absorbió la vieja sección "Active Listening").
4. **Findings** — 5 hallazgos (F01–F05), cada uno con su *Constraint*. Los caminos y la matriz de decisión referencian estos códigos.
5. **Wireframes · Exploration** — se eliminó el link externo. Ahora muestra la exploración real del *box del momento del día*: `1a` (dónde vive el box en la página + regla de dismiss), `1e` (mismo componente en 4 momentos + reglas y fallback) y `1c` (un solo motor de contexto: las sugerencias del search sheet son las del box — el antecesor directo del search dinámico). El `1b` (box como hero) se descartó del case. Debajo, el wireframe del sistema de banners personalizados (`monchis_case_013`) con su explicación de los 3 tipos. El wireframe 01 (`monchis_case_012`) se eliminó del case y del store de imágenes. Imágenes: `monchis_wf_1a`, `monchis_wf_1e`, `monchis_wf_1c`. Clases nuevas: `.wf-hero` `.wf-explore` `.wf-card` `.wf-code` `.wf-note` — el violeta `#5B3DF5` es el color de anotación de wireframe, no un token del portfolio.
6. **The two paths · V1 vs V2** ★ — el corazón del case. V1 brand-led / V2 task-led, wins & costs, bloque de estados de V1 (alerta de proximidad), bloque de scroll de V2, matriz de decisión y "The call". **Regla:** los dos caminos se muestran con el mismo formato — un teléfono hero al 58% de ancho en la card, y los estados en un bloque propio debajo. No mezclar composites de varios teléfonos dentro de la card.
7. **The final version** — V2 spine + V1 safeguards + capa de personalización.
8. **Feature Focus · Animated Dynamic Search** — con intro que lo conecta a la decisión entre caminos.
9. Design System → Full Flow → Metrics → Decisions & Learnings.

### Imágenes nuevas

`monchis_path_v1` (hero de V1, recortado del composite), `monchis_path_v1_states` (alerta de proximidad + skeleton/offline), `monchis_path_v2`, `monchis_path_v2b`, `monchis_wf_1a`, `monchis_wf_1e`, `monchis_wf_1c` — agregadas; además `monchis_case_001` fue reemplazada por el screenshot completo de la home vieja (780×2776, contenida a 560px con fade) al final de `monchis-case-images.js` (webp, alpha, ~74–210KB c/u). Vienen de los exports V1_2 / V2 / V2_2.

### CSS classes nuevas

`.rs-methods` `.rs-m` `.rs-split` (research) · `.find-list` `.find` `.find-imp` (hallazgos) · `.paths-grid` `.path` `.path-head` `.path-tag` `.path-img` `.path-body` `.pb-list` (caminos) · `.matrix` (matriz de decisión) · `.verdict` (la decisión final). Todas en un `<style>` local antes de la sección de Research, con breakpoint a 1 columna en ≤1000px.

### Regla de escritura del case

Cada hallazgo tiene código (F01–F05) y la matriz de decisión los cita. Si se agrega un hallazgo, hay que agregar su fila en la matriz — si no, el argumento se rompe.

---

## HUGO CASE STUDY ✅ APROBADO

*Julio 2026 — armado en varias pasadas dentro de la misma sesión, documentado acá recién al final*

### Qué es

Case de **hugo** — agente de AI Customer Success (WhatsApp), armado en un hackathon en equipo (4 personas: Paula + Jerónimo Balestra, Ivo Spironello, Máximo Pacheco), con `from021.io` y `v0`. Fuentes usadas para armar el contenido: landing de Vercel (`hugo-psi-topaz.vercel.app`), demo de YouTube, post de LinkedIn del lanzamiento, y screenshots reales del producto (backoffice + WhatsApp + llamada de voz) que Paula fue subiendo a medida que se armaba el case.

### Estructura (orden de secciones)

1. Cover — "hugo / vibe coded"
2. **Watch It Work** — video embebido (ver "Video facade" abajo), a propósito ubicado casi al principio, no al final
3. Showcase — imagen real backoffice ↔ WhatsApp lado a lado
4. Overview & Context — el problema (56% churn, 73% espera <5min, 89% timing de mercado)
5. Process · Vibe Coded, Start to Finish — timeline en "Stage 01–05", sin horas específicas
6. Core Mechanic · The Loop — "Evals is our Moat", 6 pasos + slide real del deck + screenshot real de la llamada de voz
7. Product · How It Works — 4 feature cards (Onboarding, WhatsApp-native, Respuestas, Memoria)
8. Beyond the Demo · GTM & Business Model — mercado (+500K LATAM), pricing ($25→$299+), buyer segments
9. Results — +47%, −30%, 0 tickets
10. Learnings
11. **The Team** — créditos con links a LinkedIn de cada uno + herramientas usadas
12. Closing — imagen real de WhatsApp (con frame de smartphone propio) + links (demo, live, LinkedIn)

### Decisión — "Vibe coded", no "8 horas"

*Julio 2026 — ✅ APROBADO, no tocar sin pedido explícito*

La primera versión del case usaba "8 hours" como el hook principal (cover, timeline con horas, footer). A pedido explícito se reemplazó por **"vibe coded"** en todos lados — el timeline de proceso pasó de `Hour 0–1 / 1–3 / etc.` a `Stage 01–05` (mismo contenido, sin comprometerse con una cifra de horas). Motivo: Paula va a explicar el concepto de "vibe coding" con más precisión más adelante; mientras tanto el copy no debe afirmar una duración específica.

**Regla para el futuro:** si se agrega contenido nuevo al case, no reintroducir referencias a "N horas" — usar "vibe coded" / "the sprint" / "Stage NN" como vocabulario del proceso.

### Decisión — Equipo, no solo

*Julio 2026 — ✅ APROBADO*

El case se armó primero asumiendo que era un proyecto solista de Paula (así lo dio a entender el pedido inicial). Se corrigió después a pedido explícito: fue un hackathon en equipo de 4. Se ajustó todo el copy que decía "Solo Build" / "Solo — Product, Design..." / "1 Person team" (cover eyebrow, rol, accent-card stats, footer) y se agregó la sección **The Team** con los 3 nombres + links de LinkedIn.

**Regla para el futuro:** si se suma info nueva de otros proyectos en equipo, chequear que el copy no asuma "solista" por default solo porque el resto de los cases de Paula sí lo son.

### Paleta — reuso del token `--orange`

En vez de renombrar todas las clases compartidas con `muv-case.html` (que usan `var(--orange)` como color de acento), se dejó el nombre de variable `--orange` en el `:root` pero con el valor del azul de Hugo (`#0033A0`, sacado por muestreo de píxeles del logo). Comentario en el CSS lo aclara. **Ventaja:** permite copiar/pegar CSS entero de un case a otro sin tener que rebuscar cada clase que referencia el color de acento. **Para el próximo case con color de marca distinto:** repetir el mismo patrón (dejar `--orange` como alias interno, no renombrar).

### Patrón — Video facade (click-to-play)

*Julio 2026 — nuevo patrón, replicable en otros cases*

Embeber un `<iframe>` de YouTube directo rompe con error 153 cuando el HTML se abre como `file://` local (YouTube no valida el origen). Se resolvió con un **facade**: se muestra el thumbnail de YouTube (`img.youtube.com/vi/{ID}/hqdefault.jpg`) con un botón de play dibujado en CSS, y recién al hacer click se inyecta el `<iframe>` real vía JS (`id="hugo-video-wrap"` + listener). Ventajas: no rompe la vista inicial en local, es más liviano (no carga el player de YouTube hasta que hacen click), y funciona sin cambios una vez deployado a un dominio real. Se dejó además un link de texto de respaldo ("Watch it directly on YouTube ↗") por si el embed sigue sin andar.

**Para replicar en otro case:** copiar el bloque `#hugo-video-wrap` + su script asociado, cambiar el video ID y el color del triángulo de play (usa `var(--orange)`, se ajusta solo).

### Imágenes — todas reales, ninguna inventada

A diferencia de muv (que usa screenshots de Figma/producto real de una consultora), las imágenes de hugo son **screenshots reales que Paula fue subiendo durante la sesión**: backoffice de texto, backoffice de llamada de voz, WhatsApp con notas de voz, y el WhatsApp final con frame de smartphone. Ninguna es un mockup armado por Claude — se descartaron placeholders/recreaciones apenas hubo un screenshot real disponible para reemplazarlas. `hugo-case-images.js` pesa ~375KB por tener 5 imágenes reales comprimidas a JPG; sigue siendo lazy-load así que no bloquea el render inicial, pero es candidato a revisar si se agregan más.

### Fuente — código real del landing (`page.tsx` + config)

*Julio 2026*

Paula subió el repo real de la landing de hugo (Next.js 15 + React 19 + Tailwind + shadcn/ui, generado con v0.dev — confirma la historia de "vibe coded" con evidencia técnica, no solo de palabra). Sirvió para **corregir/enriquecer copy**, no para embeber código:

- El hook real de la landing ("Cada semana, millones de mensajes de clientes se pierden...") se sumó como pull-quote entre el hero visual y Overview — traducido al inglés para consistencia con el resto del case.
- La frase de visión de cierre ("Que cada empresa pueda brindar atención de primera...") se sumó al final de Closing.
- El azul `#0033A0` que se había sampleado a ojo del logo coincide exacto con `hugo-blue` en `tailwind.config.ts` — confirmado, no hace falta resamplear.
- Se agregó una mención al stack real (Next.js, Tailwind, shadcn/ui) en la sección The Team, sin dumpear código.

**Regla para el futuro:** si aparece código fuente de algún otro proyecto de Paula, tratarlo igual — como fuente de verdad para copy/paleta/stack, nunca para mostrar el código en sí en el portfolio.

---

### "Beyond the work" — cards compactadas + emoji hover fix

*Agosto 2026 — ✅ APROBADO*

**Problema:** las 5 tarjetas de intereses (Travel, Food & Culture, AI, Photography, Cultures) se dividían en 2 filas (3+3 cols y 2+2+2 cols) y ocupaban demasiado espacio vertical. Los emojis al hacer hover usaban `transform: scale(1.15)` que causaba un desplazamiento visual (se corrían de posición).

**Solución:**

- Grid pasa de `repeat(6,1fr)` a `repeat(5,1fr)`.
- Las 5 celdas ahora usan `grid-column: span 1` (todas iguales, una sola fila).
- Feature card (superpower) sigue `span 5` (ocupa toda la fila).
- Padding reducido de `1.75rem` a `1.25rem`.
- Tipografía ligeramente más compacta: `.hs-cell-name` baja a `.875rem`, `.hs-cell-icon` baja a `1.25rem`.
- **Emoji hover fix:** se eliminó `transform: scale(1.15)` del hover — ahora solo cambia `filter: grayscale(40%) → grayscale(0%)`. Se agregó `line-height: 1` para evitar espacio extra.
- También se eliminó el `transform: translateY(-4px)` del hover de la celda (causaba salto).
- Fix aplicado tanto en `.hs-cell-icon` (bento) como en `.hc-icon` (human-cards viejo).

**Responsive:**

- 768px: grid baja a `repeat(3,1fr)`, las celdas se acomodan en 2 filas.
- 480px: grid baja a `1fr` (stack vertical).

### Core Strengths — chips unificados, fondo removido

*Agosto 2026 — ✅ APROBADO*

**Problema:** la sección Core Strengths tenía dos estilos de chips: los base (fondo gris, borde gris, texto gris) parecían deshabilitados al lado de los accent (borde y texto verde). La sección también tenía un fondo gris que pesaba.

**Solución:**

- Todos los chips usan `color: var(--accent)`, `border: 1px solid color-mix(in srgb, var(--accent) 35%, transparent)`, `background: transparent`.
- Las clases `-g` / `-accent` quedan vacías.
- El fondo de `.dv-bg`, `.about-strengths`, `.db-strengths` pasa a `transparent`.

### Dock — rediseño de visibilidad

*Agosto 2026 — ✅ APROBADO*

**Dark mode:** textos en `var(--accent)`, activo `font-weight: 700` + `opacity: 1`, inactivos `500` + `opacity: .7`. **Light mode:** fondo `rgba(255,255,255,0.9)` con sombra, textos en `var(--paper)`, activo bold + opacity 1, inactivos medium + `.45`.

### Link a LinkedIn en el hero

*Agosto 2026 — ✅ APROBADO*

Link "Go to LinkedIn ↗" debajo de la bajada en `hello-hero`. Clase `.hello-linkedin`, `var(--accent)`, Muli 400 `.9375rem`.

### Filtros de categoría removidos

*Agosto 2026 — ✅ APROBADO*

Se eliminó la barra de filtros. JS y CSS quedan como código muerto — candidato a limpieza.

---

- [ ] Limpieza de CSS/JS muerto: filtros, clases vacías (`.dv-pill-g`, `.sp-accent`, `.db-pill-accent`)
- [ ] Imágenes reales para: monchis drivers, smartpass, everyone (optimizadas <300KB)
- [ ] Subir los 6 case studies para revisar/ajustar su mobile (`muv-case.html`, `monchis-case.html`, `everyone-case.html`, `smartpass-case.html`, `sukupay-case.html`, `vendor-tool-case.html`)
- [ ] Probar tap-to-reveal en un dispositivo touch real (hoy solo verificado por lógica/CSS, no en pantalla)
- [ ] Revisar `portfolio-images.js` cuando haya 3-4+ tiles con imagen real (ver decisión "¿Creamos portfolio-images.js?")
- [ ] Pasar `muv-teal.gif` a `.mp4` (video loop mudo) y confirmar que el resultado se banca 0.5x de Jitter free
- [ ] Si el cover animado de muv convence, replicar en monchis, smartpass, sukupay
- [x] ~~Decidir si "Coming soon" en placeholders también pasa a hover-only~~ — resuelto: el arrow quedó siempre visible para todos los tiles por igual (ver "Texto de tiles — solo View case study visible")
- [x] ~~Resolver bug de `.tile-drivers` con `data-case="suku"` duplicado~~ — resuelto originalmente reutilizando el slot para hugo; **Agosto 2026:** hugo se movió de nuevo (ahora usa `.tile-monchis-home`, ver PROJECTS VIEW), así que `.tile-drivers` quedó sin ningún tile usándola — CSS muerto, candidato a limpieza
- [ ] Crear una posición de grid propia para `.tile-vendor` (hoy cae al tamaño default de `.tile`, no tiene regla en el grid) — ver tabla de tiles en PROJECTS VIEW
- [ ] Agregar tile para Vendor Tool (`data-case="vendor"`) al gallery
- [ ] Borrar `<template id="tpl-smart">` y `<template id="tpl-suku">` huérfanos del portfolio
- [ ] Resolver overlap de `#section-label` (vertical, fixed top:50%) con contenido que cae a media pantalla — hoy pisa el marquee en algunos scrolls
- [ ] Limpieza general de reglas CSS duplicadas (`.ph-title`, `.tile-category`, `.ph-marquee`/`.ph-mitem` tienen versiones viejas sin usar dando vueltas en el archivo)
- [ ] AutoCloud, TheFork como case studies nuevos (con Wipe Transition desde el vamos)
- [ ] hugo: si aparece la imagen del splash (fondo azul, logo blanco) que se subió al principio de la sesión, sumarla al cierre junto a la del WhatsApp con frame
- [ ] hugo: revisar peso de `hugo-case-images.js` (~375KB) si se agregan más screenshots reales
- [ ] hugo: replicar el patrón de "Video facade" (click-to-play) en muv si en algún momento se agrega un video de demo ahí
- [ ] CV/resume PDF descargable (link placeholder en top-nav, falta el archivo real)
- [ ] Deploy (Netlify / Vercel / GitHub Pages)
- [ ] Meta tags OG para preview en redes
- [x] ~~Formulario de contacto o link a email/LinkedIn~~ — resuelto: link a LinkedIn en dock + link "Go to LinkedIn ↗" en hero (`https://www.linkedin.com/in/paula-elffman/`)

---

### Intro animation: solo en primera visita de la sesión

*Agosto 2026 — ✅ APROBADO*

**Problema:** la animación "Hi, I'm Pau 👊" (mask reveal) se replayeaba cada vez que el usuario volvía del case study a la home. La experiencia se sentía repetitiva y rompía el flow.

**Solución:** se usa `sessionStorage` con la key `pe-intro-played` para trackear si la animación ya corrió en esta sesión del browser.

**Comportamiento:**

- **Primera visita** (tab nuevo, refresh, nueva sesión): la animación se reproduce normalmente con delay y mask reveal.
- **Volviendo de un caso** (o switching views): el nombre aparece inmediatamente, sin animación. La clase `dv-name-in` se aplica sin reflow, así que no hay "flash" ni delay.

**Archivos tocados:**

- `index.html` — función `switchView('dashboard')` y el listener `DOMContentLoaded`.

**Key de sessionStorage:** `pe-intro-played` — se setea a `'1'` tras la primera animación. Se borra automáticamente cuando el usuario cierra el tab (sessionStorage es per-tab).

**Notas técnicas:**

- Se usa `sessionStorage` (no `localStorage`) porque queremos que la animación corra una vez por tab/sesión, no una vez para siempre. Si el usuario vuelve al portfolio mañana, la ve de nuevo.
- El `try/catch` protege contra browsers con storage deshabilitado (modo privado en algunos browsers).

> **Actualización Agosto 2026:** el texto animado de `#dv-name-anim` ya **no** es "Hi, I'm Pau 👊" — pasó a **"About me"** (ver sección Avatar más arriba). El mecanismo de `pe-intro-played` sigue igual, solo cambió el copy.

---

### Page loader "Hi! 👊": solo en la primera visita a la home (no confundir con la anterior)

*Agosto 2026 — ✅ corregido a pedido*

**No es el mismo elemento que la entrada anterior.** Este es `#page-loader` (`.loader-word` = "Hi! 👊"), un **overlay full-screen** (`z-index:9000`, fondo `var(--void)`) que tapa toda la pantalla al cargar `index.html` — no tiene relación con `#dv-name-anim` del About Me.

**Problema:** `#page-loader` se disparaba en **todo** `window.addEventListener('load', ...)`, sin ningún chequeo de sesión. Como los case studies son páginas HTML separadas, volver de un caso a la home (`index.html`) es una navegación de página completa → dispara `load` de nuevo → el overlay negro con "Hi! 👊" tapaba la pantalla otra vez, encima incluso de la wipe transition (`#wipe-overlay`, ver "Wipe Transition" arriba), tapándola por completo mientras el loader estaba visible.

**Solución:** mismo patrón que `pe-intro-played`, pero con su propia key de `sessionStorage`: `pe-hi-shown`.

- Se agregó un `<script>` inline **inmediatamente después** del `<div id="page-loader">` (primer elemento del `<body>`), que corre de forma síncrona antes de que el resto de la página pinte: 
  ```html
  <div id="page-loader"><div class="loader-word">Hi! 👊</div></div><script>(function(){  var l=document.getElementById('page-loader');  if(!l) return;  if(sessionStorage.getItem('pe-hi-shown')){    l.style.display='none';  } else {    sessionStorage.setItem('pe-hi-shown','1');  }})();</script>

  ```
- Si la key ya existe (volviendo de un caso, o refresh dentro de la misma sesión), el loader se oculta con `display:none` **al instante**, sin flash de negro ni animación. Si no existe, se deja visible y se marca la key — el `window.load` listener existente sigue encargándose del fade-out (`opacity:0` a los 900ms) y de removerlo del DOM (a los 1500ms), sin cambios ahí.

**Comportamiento resultante:**

- **Primera visita** (tab nuevo / nueva sesión): se ve "Hi! 👊" con su animación normal.
- **Volviendo de un case study a la home:** no se ve el loader — se ve directamente la wipe transition circular (la que ya existía) revelando la home. Antes quedaba tapada por el overlay negro del loader.

**Archivos tocados:** `index.html` únicamente (el loader "Hi! 👊" no existe en los `*-case.html`, solo en la home).

**Key de sessionStorage:** `pe-hi-shown` (independiente de `pe-intro-played`, son dos animaciones distintas con dos keys distintas).

**Regla para el futuro:** cualquier overlay full-screen nuevo que se dispare en `window.load` debe chequear su propia key de `sessionStorage` **antes** de mostrarse (idealmente en un script inline apenas después del elemento, no esperar al `load` event), para no repetirse en navegaciones de vuelta a la home.

---

### CTA "View case study" — Shiny Text sweep (reemplaza el gradiente teal)

*Agosto 2026 — ✅ APROBADO · ✅ IMPLEMENTADO en `index.html` (9 tiles reales envueltos en `.tile-arrow-label`; los 2 `coming-soon` sin efecto)*

**Problema:** el "View case study ↗" tenía un gradiente sobre el texto que iba de teal claro → teal oscuro (`#005043`). El extremo oscuro perdía contraste justo en la parte baja de las tarjetas, donde el fondo del tile ya cae a casi negro — sobre todo en SmartPass (verde). Legibilidad comprometida: teal oscuro sobre fondo oscuro se apaga.

**Solución:** efecto **Shiny Text** — base sólida legible + un highlight claro que barre. Los dos stops del gradiente son claros (mint sobre mint), así que **nunca** baja de contraste, a diferencia del gradiente viejo. El movimiento le da vida sin arriesgar legibilidad.

**Origen y por qué vanilla:** el efecto viene de **react-bits** (`Shiny Text`), que es una librería **React**. El portfolio es un monolito **vanilla JS** — no vale meter React entero por un CTA de texto. El efecto es en el fondo una animación CSS, así que se portó a vanilla en pocas líneas y queda idéntico. Regla para el futuro: cualquier cosa que se quiera "traer de react-bits" hay que portarla a CSS/JS vanilla, no importar el componente.

**⚠️ Dónde se aplica — no en** `.tile-arrow`**:** el shiny va en el elemento de **texto dentro** del pill, NO en `.tile-arrow`. `.tile-arrow` es el botón pill y tiene su propio `background:rgba(0,0,0,.55)` + blur (ver "Texto de tiles — solo View case study visible"). Si le aplicás `background-clip:text` al pill, le clippeás **su** fondo a la forma del texto y le borrás el pill. Hay que envolver el label en un `.tile-arrow-label` (o el span que ya exista adentro) y aplicar el efecto ahí. La flecha `↗` puede ir en el mismo span para que barra junto al texto.

**Excepción justificada a la regla de tokens:** este CTA **no** usa `var(--accent)`, y es a propósito. El pill es siempre oscuro (`rgba(0,0,0,.55)`, hardcodeado, igual en light y dark), así que el texto vive siempre sobre fondo oscuro. Si usara `var(--accent)`, en **light mode** el texto sería `#009D71` (Emerald Dark) sobre el pill negro → contraste pobre. Por eso la base se fija en **Emerald Bright** `#22F0A4` (= `--accent` de dark) en ambos modos. Es la única excepción aprobada a "siempre `var(--accent)`", y existe porque el fondo del elemento no cambia entre modos.

```css
/* reposo: sólido y legible en ambos modos (el pill es siempre oscuro) */
.tile-arrow-label{
  color:#22F0A4;
  display:inline-block;
}
/* hover / tap: gradiente + barrido se montan enteros solo acá (no en loop) */
.tile:hover .tile-arrow-label,
.tile.tile-tapped .tile-arrow-label{
  background:linear-gradient(110deg,#22F0A4 0%,#22F0A4 45%,#CFFBEA 50%,#22F0A4 55%,#22F0A4 100%);
  background-size:200% 100%;
  -webkit-background-clip:text; background-clip:text;
  -webkit-text-fill-color:transparent; color:transparent;
  animation:tileShine 2.4s linear infinite;
}
@keyframes tileShine{ 0%{background-position:200% 0} 100%{background-position:-200% 0} }
/* reduced-motion: sólido, sin barrido */
@media (prefers-reduced-motion:reduce){
  .tile:hover .tile-arrow-label,
  .tile.tile-tapped .tile-arrow-label{
    animation:none; background:none;
    -webkit-text-fill-color:#22F0A4; color:#22F0A4;
  }
}

```

**Loop vs hover — se eligió hover:** el shimmer se dispara en `:hover` (y en `.tile-tapped` para touch, ver "Tap-to-reveal en tiles") en lugar de correr en loop infinito. Razón: en la grilla hay hasta **5 tiles visibles a la vez**, y 5 shimmers barriendo en loop simultáneo se sentía inquieto y "auto-generado" (menos es más). En reposo el label queda en base sólida `#22F0A4` — perfectamente legible; el brillo solo aparece cuando el tile está activo. Engancha limpio con el `.tile:hover .tile-arrow` que ya existía.

**Colores:** base `#22F0A4` (Emerald Bright, el `--accent` de dark) para matchear el resto de los tiles en el home; highlight `#CFFBEA` (mint muy claro). Esto reemplaza el placeholder `#3FE0A8` del demo comparador (`cta-teal-comparador.html`) — se alineó al token real del sistema.

**Diferencia con el borrador inicial:** en vez de aplicar el gradiente siempre y solo animar en hover, el reposo quedó **sólido `#22F0A4`** y el gradiente + animación se montan **enteros** solo en hover/tap. Evita cualquier sliver de brillo estático en reposo y deja la grilla limpia sin interacción.

**Markup:** el label se envolvió en `<span class="tile-arrow-label">` dentro de cada `<div class="tile-arrow">` (antes era nodo de texto suelto). 9 tiles reales; los `coming-soon` no se tocaron.

**Pendiente — lime hardcodeado de SukuPay:** el tile de SukuPay DS tiene `<div class="tile-arrow" style="color:#61FF61;">`. Con el span, ese inline queda override-eado (el label usa `#22F0A4`), así que SukuPay ahora muestra el mismo teal que el resto → CTA uniforme en toda la grilla. El `style="color:#61FF61"` quedó como código muerto. Si se quiere que SukuPay conserve su lime de marca, pasar la base del label a un token por-tile (ej. `--cta`) en vez de fijar `#22F0A4`.

**Posición en el archivo:** al final del `<style>`, junto al bloque de `.tile-arrow`, misma lógica de ganar por cascada sin tocar las reglas viejas.

---

### Tiles simplificados — sin categoría, solo título + descripción + CTA

*Agosto 2026 — ✅ APROBADO · ✅ IMPLEMENTADO*

**Decisión:** se removió la línea `.tile-category` (el label teal monospace tipo "FOOD DELIVERY · 2025") de los 10 tiles. Cada tile queda con: **título** (`.tile-name`, ej. "monchis") + **descripción** (`.tile-headline`, ej. "Food delivery redesign. 44.6% CVR.") + **CTA** (`.tile-arrow`).

**Razón:** simplificar. Menos texto por tile y un solo elemento teal por tile (el CTA) en vez de dos (categoría + CTA). El año/rubro no aportaba lo suficiente para justificar el peso visual.

**Qué se tocó:** solo el markup — se borraron los 10 `<div class="tile-category">…</div>` de `index.html`. No hay JS que dependa de `.tile-category` (verificado: las únicas referencias eran reglas CSS). La categoría vivía dentro de `.tile-info`, así que su remoción no afecta a los demás elementos.

**Código muerto resultante:** las reglas CSS de `.tile-category` (reveal en hover, color accent) quedan sin uso — candidatas a limpieza junto al resto de reglas viejas (aparecen 3 veces en el `<style>`).

---

### Tile Spotlight Glow + título/categoría en hover + bg neutro unificado

*Agosto 2026 — ✅ APROBADO · ✅ IMPLEMENTADO*

**Origen:** pedido explícito de sumar un efecto de "spotlight card" (inspirado en react-bits, ver la sección de CTA Shiny más arriba para el precedente de "portar a vanilla, no importar el componente"). Se armó primero como demo standalone y después se aplicó directo a las 11 tiles reales del `#gallery`.

**1) Spotlight Glow — halo que sigue el mouse**

Nueva capa `.tile-glow` por tile, entre la imagen (`z-index:1`) y el texto (`z-index:3`):

```css
.tile:hover {
  transform:translateY(-6px);
  box-shadow:0 0 0 1px var(--accent), 0 24px 64px rgba(0,0,0,.4), 0 0 48px -14px var(--accent);
}
.tile-glow{
  position:absolute; inset:0; z-index:2; pointer-events:none;
  border-radius:inherit;
  background:radial-gradient(440px circle at var(--mx,50%) var(--my,50%), color-mix(in srgb, var(--accent) 30%, transparent), transparent 62%);
  opacity:0;
  transition:opacity .35s var(--ease);
}
.tile:hover .tile-glow{ opacity:1; }
@media (prefers-reduced-motion:reduce){ .tile-glow{ display:none; } }

```

- `<div class="tile-glow"></div>` se agregó como hijo de cada `.tile`, inmediatamente después de `.tile-bg`.
- No se agregó un listener nuevo: se reutilizó el `mousemove` que ya existía para el parallax de `.tile-bg`/`.tile-cover`, sumándole `tile.style.setProperty('--mx', ...)` / `--my` con la posición del cursor en %. Así el glow queda sincronizado con el parallax sin duplicar lógica.
- Usa `var(--accent)`, así que en dark es `#22F0A4` y en light `#009D71` automáticamente.
- Respeta `prefers-reduced-motion` (se oculta directo).

**2) Título y categoría — reveal en hover, sin chip**

Antes `.tile-name`/`.tile-category` estaban siempre visibles con un chip oscuro (`background:rgba(6,6,10,.6)` + `backdrop-filter:blur`) detrás para asegurar legibilidad sobre cualquier imagen de fondo. Se sacó ese chip y se les aplicó el mismo patrón de reveal que ya tenía `.tile-headline`:

```css
.tile-category, .tile-name {
  opacity:0; transform:translateY(6px);
  transition:opacity .3s, transform .3s;
  /* + text-shadow en vez de chip, para legibilidad sin tapar */
}
.tile:hover .tile-name,
.tile:hover .tile-category { opacity:1; transform:translateY(0); }

```

**Resultado:** en reposo la tile queda limpia — solo se ve el pill "View case study" (siempre visible, no está gateado por hover). Al hacer hover aparecen juntos: glow + título + categoría + descripción. Este era el look de sukupay-ds ("el que quedó bien") — ahora es el default de las 11 tiles, no una excepción.

**3) Fondos de tile — se sacaron los colores hardcodeados por tile**

Se quitó el `style="background:..."` inline de `.tile-bg` en las 11 tiles (`#EDE8E0`, `#F5F5F5`, `#0B1B3D`, `#38B47D`, `#1A1A1F`, `#1A0A28`, `#0D1F16`, `#1a1a22`, `#1C1C22` ×2, más el gradient de 3 stops que tenía sukupay-ds). Todas caen ahora al mismo `background:var(--ghost)` de la regla base `.tile{}` — consistencia total en vez de que cada tile tuviera su propio color de marca de fondo. Las tiles con imagen real (muv, monchis-home, hugo, monchis-drivers) no se ven afectadas en la práctica porque la imagen cubre el 100% del tile.

**4) Color del título de sukupay-ds — mode-aware, excepción con hex fijo**

`.tile-name` en general hereda `color:var(--paper)` (blanco en dark, oscuro en light — funciona bien para tiles con foto de fondo oscura). Para **sukupay-ds** se pidió lo inverso a lo que daría `var(--accent)`: **verde en dark, blanco en light** (no el verde oscuro `#009D71` que tendría `var(--accent)` en light).

```css
.tile-sukupay-ds .tile-name {
  font-size:2.25rem;
  color:#22F0A4;               /* dark (default) */
}
body.light-mode .tile-sukupay-ds .tile-name {
  color:#FFFFFF;                /* light */
}

```

**Excepción aprobada a "siempre `var(--accent)`":** ya existía un precedente idéntico con el CTA shiny (ver más arriba, "no usa `var(--accent)` a propósito"). Esta es la segunda excepción registrada — mismo criterio: cuando el resultado deseado no matchea 1:1 los dos valores del token, se fija el hex por modo vía `body.light-mode`, no se inventa un token nuevo de un solo uso.

**También se sacó** el `color:#f6faf6` que estaba inline en el HTML del `.tile-name` de sukupay-ds — ahora el color lo controla el CSS, no el markup.

---

### Fix — Spotlight Glow invisible en light mode (tercera excepción a `var(--accent)`)

*Agosto 2026 — ✅ APROBADO · ✅ IMPLEMENTADO*

**Problema detectado por captura de pantalla:** el glow (sección anterior) usaba `var(--accent)` como se documentó al implementarlo. En dark se ve perfecto (`#22F0A4`, brillante). En light, `var(--accent)` pasa a `#009D71` (verde oscuro) — pero el interior de la tile **no** se aclara en light mode: el scrim `.tile-ui` (`rgba(8,8,12,...)`) está hardcodeado oscuro en ambos modos (ver "TILE UI LAYER"), así que el borde y el spotlight quedaban verde oscuro sobre fondo casi negro → prácticamente invisibles.

**Solución:** el glow (`box-shadow` del `.tile:hover` y el `radial-gradient` de `.tile-glow`) pasa de `var(--accent)` a un hex fijo `#22F0A4` / `rgba(34,240,164,...)`, igual en los dos modos.

**Por qué es una excepción válida:** mismo criterio que las dos anteriores (CTA shiny y título de sukupay-ds) — la regla "siempre `var(--accent)`" asume que el elemento vive sobre una superficie que sí cambia entre modos. Acá la superficie (el scrim oscuro de la tile) es fija, así que el color que se le monta encima también debe serlo. **Tercera excepción registrada.**

---

### Fix — Título y categoría de tile invisibles en light mode (cuarta excepción)

*Agosto 2026 — ✅ APROBADO · ✅ IMPLEMENTADO*

**Mismo problema, mismo origen que el glow:** `.tile-name` usaba `color:var(--paper)` y `.tile-category` usaba `color:var(--accent)`. En light mode, `var(--paper)` cae a `#1A1A22` (casi negro) — pero el scrim de la tile (`.tile-ui`) sigue siendo `rgba(8,8,12,...)` fijo oscuro en los dos modos. Resultado: texto casi negro sobre fondo casi negro, ilegible en light.

**Solución:** `.tile-name` pasa a `#F4F4F6` fijo (blanco) y `.tile-category` a `#22F0A4` fijo (verde), en vez de `var(--paper)`/`var(--accent)`. El override de sukupay-ds (verde dark / blanco light) sigue funcionando igual porque solo pisa `.tile-name`, no toca `.tile-category`.

**Cuarta excepción registrada** — mismo criterio que las tres anteriores: la superficie no cambia entre modos, así que el color que va encima tampoco debería.

---

*Este documento es la fuente de verdad del portfolio. Cualquier cambio aprobado debe reflejarse aquí.*
