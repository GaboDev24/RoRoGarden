# 🐸 RoRoGarden

Un jardín de bienestar para docentes. PWA offline-first con estética pixel art.

## ¿Qué es?

RoRoGarden es un espacio tranquilo y sin presiones para que una maestra jardinera pueda parar un ratito en su día. Sin rachas que perder, sin castigos, sin datos que salen del dispositivo.

## Cómo correrlo

### Requisitos

- Node.js 18 o superior
- npm 9 o superior

### Instalar dependencias

```bash
npm install
```

### Correr en desarrollo

```bash
npm run dev
```

Abrí `http://localhost:5173` en el navegador.

### Probarlo en el celular por la red local

```bash
npm run dev -- --host
```

Luego desde el celular conectado a la misma red Wi-Fi, abrí la URL que aparece en la terminal (algo como `http://192.168.x.x:5173`).

### Compilar para producción

```bash
npm run build
```

### Vista previa de la build

```bash
npm run preview
```

## Experiencia en PC y Celular

- **En celular:** Experiencia nativa PWA a pantalla completa con soporte táctil, safe areas y base 360x640px.
- **En PC / Escritorio:** Marco centrado tipo jardín/dispositivo sobre fondo calmo de estanque nocturno, con soporte completo para mouse y teclado (`Enter` / `Espacio` para interactuar, `Escape` para volver desde `/sprites`). En `/sprites`, la interfaz aprovecha monitores anchos con una cuadrícula responsiva.

## Páginas

| URL       | Descripción                                    |
|-----------|------------------------------------------------|
| `/`       | Pantalla de inicio (sapo animado + botón)      |
| `/sprites`| Laboratorio de sprites (solo en desarrollo)    |

## Estructura del proyecto

```
src/
  palette/
    colors.ts        — Paleta tipada (fuente de verdad TS)
    variables.css    — Variables CSS (fuente de verdad CSS)
  sprites/
    renderer.ts      — Motor de renderizado canvas pixel-art
    definitions.ts   — Definiciones ASCII de los 5 sprites
  views/
    Home.ts          — Pantalla de inicio
    SpritesLab.ts    — Laboratorio de sprites
  main.ts            — Punto de entrada y enrutador
  style.css          — Estilos globales
```

## Sprites incluidos

- `frog-idle` — Sapo sentado, animación de respiración (2 frames)
- `frog-sleeping` — Sapo dormido
- `mushroom` — Hongo con sombrero
- `lilypad` — Nenúfar flotante
- `moon-crescent` — Luna creciente con 3 estrellas parpadeantes

## Supuestos tomados (etapa 1)

1. Stack vanilla TypeScript sin frameworks (Vite + vite-plugin-pwa).
2. Enrutamiento básico via `pathname` sin router externo.
3. Los sprites son diseños pixel-art 100% originales; las referencias en `/referencias` se usaron solo para la paleta de ánimo (niebla, musgo, agua).
4. Hallmark se usa en modo custom: paleta y estilo ya definidos; se ignoran reglas de fotos, landing y `theme.mjs deal` (motivos documentados en `design.md`).
5. La fuente Press Start 2P se carga desde Google Fonts; en offline usa fallback monospace.
6. El botón "Entrar al jardín" no tiene destino todavía (etapa 1).

## Principios de diseño

Ver `design.md` y `AGENTS.md` en la raíz del proyecto.

