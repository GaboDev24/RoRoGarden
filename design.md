# design.md — Especificación Visual de RoRoGarden
<!-- LOCKED: Este archivo define el sistema de diseño. No modificar sin consenso explícito. -->
<!-- Hallmark mode: CUSTOM. Paleta y estilo ya definidos por el prompt original. -->

## ⚠️ Sistema Bloqueado

Este archivo es la fuente de verdad visual. Ningún agente, skill ni herramienta puede:
- Cambiar los colores de la paleta
- Proponer tipografías alternativas
- Introducir colores fuera de los tokens definidos aquí
- Usar fotografías o ilustraciones de terceros (todo es pixel art original)

---

## 🎨 Paleta Cromática

Fuente de verdad: `src/palette/colors.ts` (TypeScript) y `src/palette/variables.css` (CSS).

| Token CSS               | Nombre               | Hex       | Uso principal                        |
|-------------------------|----------------------|-----------|--------------------------------------|
| `--color-tinta`         | Tinta                | `#2B3A42` | Contornos, texto principal           |
| `--color-agua-profunda` | Agua Profunda        | `#3E5C7A` | Fondos oscuros, agua profunda        |
| `--color-azul-niebla`   | Azul Niebla          | `#A9C8E8` | Niebla, cielo noche, fondos medios   |
| `--color-celeste-agua`  | Celeste Agua         | `#BFE6EE` | Fondos claros, agua superficial      |
| `--color-turquesa`      | Turquesa Pastel      | `#8ED1CF` | Agua animada, reflejos               |
| `--color-menta`         | Menta Clara          | `#D9F2E6` | Fondos muy claros, áreas de descanso |
| `--color-salvia`        | Verde Salvia         | `#A8D5BA` | Hojas, nenúfares, vegetación media   |
| `--color-sapo`          | Verde Sapo           | `#8CC9A1` | Cuerpo principal del sapo            |
| `--color-musgo`         | Verde Musgo          | `#6FA98A` | Sombras del sapo, musgo, detalles    |
| `--color-bosque`        | Verde Bosque         | `#3F6F5E` | Contornos oscuros vegetación         |
| `--color-crema`         | Crema Luna           | `#F6EFC9` | Vientre sapo, luna, brillos, fondos  |
| `--color-acento`        | Acento Cálido        | `#E8A987` | Sombrero hongo — uso muy moderado    |

**Regla de contraste:** texto siempre en `--color-tinta` (#2B3A42) sobre fondos claros. Mínimo WCAG AA (ratio 4.5:1 para texto normal, 3:1 para grande). Nunca negro puro ni blanco puro.

---

## ✏️ Tipografía

- **Familia principal:** Press Start 2P (Google Fonts, pixel font) para títulos y elementos de juego.
- **Familia secundaria:** sistema UI (`system-ui, -apple-system, sans-serif`) para textos corridos y UI funcional.
- **Tamaño mínimo:** 14px en español (16px recomendado para lectura).
- **Nunca:** texto en cursiva dentro de títulos en roman, ni texto en capitalización rastreada.

---

## 🖼️ Arte y Sprites

- **Estilo:** Pixel art original. Sin antialiasing. Sin degradados. Sin fotografías.
- **Resolución base:** grillas de 16x16 y 32x32 píxeles.
- **Paleta por sprite:** máximo 6 colores + transparente.
- **`image-rendering: pixelated`** siempre en canvas de sprites.
- **Formas:** redondeadas y simples, ojos grandes y tiernos, expresión serena.
- **Sapos:** regordetes, cuerpo en verde sapo, vientre en crema luna.
- **Hongos:** tallo en forma de gota/pera, sombrero amplio, acento cálido en el sombrero.
- **Inspiración de ánimo:** bosque húmedo, agua, niebla, noche con luna. NO copiar personajes ni composiciones de las referencias en `/referencias`.

---

## 📱 Layout y Responsive

- **Mobile-first:** diseño base para 360x640px en portrait.
- **Safe areas:** siempre respetar `env(safe-area-inset-*)`.
- **Botones táctiles:** mínimo 48x48px de área de toque.
- **Contenedor máximo:** 480px centrado.
- **Sin `overflow-x: hidden` en `html`/`body`:** usar `overflow-x: clip`.
- **Sin posiciones absolutas en píxeles fijos:** usar porcentajes, flex, grid.

---

## 🎞️ Movimiento y Animación

- **Regla principal:** `prefers-reduced-motion: reduce` pausa o elimina todas las animaciones.
- **Solo `transform` y `opacity`** en transiciones (nunca animar `width`, `height`, `top`, `left`).
- **Nunca `transition: all`.**
- **Cadencia de sprites:** 500ms–800ms por frame para ritmo calmo.
- **Contenido siempre visible** sin JavaScript (no depender de JS para mostrar contenido esencial).

---

## 🔲 Tokens CSS

Todos los tokens están en `src/palette/variables.css` e importados globalmente. Ningún valor de color puede aparecer hardcodeado fuera de ese archivo.

---

## 📝 Notas Hallmark (Modo Custom)

Reglas de la skill Hallmark que aplican aquí:
- **Piso obligatorio:** contraste, foco visible, `prefers-reduced-motion`, diseño correcto en celular, sin datos inventados.
- **Ignoradas con motivo:**
  - Regla de fotografías (§ imagery): no aplica, todo es pixel art original. *Motivo: proyecto de pixel art sin fotografías.*
  - Regla de landing page sections (suscripción, testimonios, precios): no aplica. *Motivo: es una app, no un sitio de marketing.*
  - Regla de `theme.mjs deal` y themes del catálogo: no aplica. *Motivo: tema custom definido explícitamente por el usuario.*

