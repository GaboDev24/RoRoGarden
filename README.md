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

### Correr los tests

```bash
npm test
```

Ejecuta la suite de pruebas unitarias de persistencia, migración y ordenamiento con Vitest.

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

## Navegación y Rutas (Hash Router)

| Ruta          | Pantalla | Descripción |
|---------------|----------|-------------|
| `#/`          | Portada  | Pantalla de inicio con sapo animado y botón "Entrar al jardín". |
| `#/jardin`    | Jardín   | Escenario central con accesos a Check-in, Diario, Historial y Ajustes. |
| `#/checkin`   | Check-in | Selector de 5 estados emocionales (32x32), nota opcional y botón Saltar. |
| `#/diario`    | Diario   | Reflexión nocturna en 3 preguntas saltables y ritual de cierre con luna. |
| `#/historial` | Mis días | Historial cronológico con vista, edición y borrado (sin culpas ni rachas). |
| `#/ajustes`   | Ajustes  | Respaldo JSON (exportar/importar), borrado total y notas de privacidad. |
| `#/sprites`   | Dev Lab  | Laboratorio de desarrollo para inspección de todos los sprites. |

## Persistencia y Privacidad de Datos

### ¿Dónde y cómo se guardan los datos?
Se eligió **`localStorage`** por las siguientes razones de arquitectura:
1. **Privacidad absoluta:** Los datos viven únicamente en el almacenamiento local del navegador del dispositivo. No hay servidores, APIs externas, analytics ni rastreo.
2. **Ligereza y sincronía:** Evita dependencias de librerías asíncronas pesadas, garantizando una carga instantánea (cold start < 100ms) y rendimiento óptimo en celulares de gama media y baja.
3. **Capacidad adecuada:** Una entrada diaria ocupa menos de 1 KB en JSON. La cuota estándar de 5 MB de `localStorage` permite más de 10 años ininterrumpidos de registros diarios.
4. **Respaldo portable:** A través de la pantalla de Ajustes, la usuaria puede exportar e importar todos sus datos en un archivo JSON portable.
5. **Esquema versionado y tolerancia a fallos:** Cada registro incluye el campo `version` (`CURRENT_SCHEMA_VERSION = 1`) y una función de migración extensible. Si el almacenamiento local es bloqueado por el navegador o modo incógnito, el sistema conmuta automáticamente a un búfer en memoria sin interrumpir la sesión de la usuaria.

## Sprites incluidos

- `frog-idle` — Sapo sentado, animación de respiración (2 frames)
- `frog-sleeping` — Sapo dormido
- `mushroom` — Hongo con sombrero
- `lilypad` — Nenúfar flotante
- `moon-crescent` — Luna creciente con 3 estrellas titilantes
- `frog-contenta` — Sapo contento (32x32, expresión alegre)
- `frog-tranquila` — Sapo tranquilo (32x32, expresión serena)
- `frog-cansada` — Sapo cansado (32x32, párpados caídos)
- `frog-tensa` — Sapo tenso (32x32, ojos alerta, línea apretada)
- `frog-triste` — Sapo triste (32x32, ojos caídos y lágrima suave)

## Principios del proyecto

Ver `AGENTS.md` y `design.md` en la raíz del proyecto.
