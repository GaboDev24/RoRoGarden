# Control de Calidad y Verificación (QA.md) — RoRoGarden

Este documento detalla los procedimientos de verificación técnica, pruebas de migración de datos, auditorías de accesibilidad y rendimiento ejecutadas para la versión 1.0.0 (Etapa 6).

---

## 1. Verificación de Migración y Conservación de Datos

### Procedimiento de Prueba
1. **Datos de prueba generados con esquema anterior (v3 / Etapa 5):**
   - Registros de Check-in con notas personales.
   - Registros de Diario con reflexiones nocturnas (lindo, pesó, suelto).
   - Micro-desafíos y pausas de respiración registradas en silencio.
   - Estado del jardín: sapo con nombre personalizado, hemisferio sur, 6 decoraciones colocadas en la grilla 5x5, configuración de recordatorios y modo vacaciones activo.
2. **Actualización a v1.0.0:**
   - La función `importBackup()` y la inicialización de `loadGardenState()` detectan automáticamente esquemas anteriores (v1, v2, v3) y ejecutan la cadena de migraciones en `src/storage/index.ts`.
3. **Resultado:**
   - **100% de los datos preservados:** ningún campo se descartó ni se sobrescribió.
   - Se verificó en `tests/storage.test.ts` con pruebas de exportación/importación cruzada y en `tests/etapa6.test.ts`.

---

## 2. Auditoría de Seguridad y Solicitudes de Red

- **Solicitudes externas en ejecución:** 0 (cero).
- **Tipografías:** Servidas localmente desde `public/fonts/press-start-2p-*.woff2`.
- **Iconos:** SVGs puros embebidos en el bundle (`src/icons.ts`) sin librerías externas en runtime.
- **Content-Security-Policy (CSP):**
  `default-src 'self'; script-src 'self'; style-src 'self' 'unsafe-inline'; img-src 'self' data: blob:; font-src 'self'; connect-src 'self'; media-src 'self'; manifest-src 'self'; worker-src 'self'; object-src 'none'; base-uri 'self';`
- **Permissions-Policy:**
  `camera=(), microphone=(), geolocation=(), payment=(), usb=(), screen-wake-lock=(self)`
- **npm audit:** 0 vulnerabilidades (reportado en terminal: `found 0 vulnerabilities`).

---

## 3. Rendimiento y Tamaño de Entrega

- **Presupuesto establecido:** Máximo 150 KB de JavaScript inicial comprimido (gzip).
- **Medición real en `npm run build`:**
  - `dist/assets/index-*.js`: **54.91 kB gzip** (264.71 kB sin comprimir). Muy por debajo del presupuesto (36% del límite).
  - `dist/assets/index-*.css`: **1.58 kB gzip** (4.09 kB sin comprimir).
  - Total inicial: **~56.5 kB gzip**.
- **Service Worker / Precache:** 17 entradas cacheadas (300.2 kB total incluyendo fuentes y sprites), permitiendo cold start offline en menos de 100 ms.
- **FPS en animación del jardín:** Limitado a 30 FPS (`src/views/Jardin.ts`), con pausa automática cuando la pestaña está oculta (`visibilitychange`) y respeto estricto a `prefers-reduced-motion: reduce`.

---

## 4. Auditoría de Accesibilidad (A11y) y Calidad Visual (Hallmark)

- **Foco dinámico:** Al cambiar de ruta por hash, `main.ts` traslada el foco al `<h1>` principal con `tabIndex = -1`, anunciando el contexto al lector de pantalla sin trampas de foco.
- **Contraste de colores:** Todo el texto principal utiliza `--color-tinta` (`#2B3A42`) sobre fondos claros (`--color-menta`, `--color-crema`, `--color-celeste-agua`), garantizando ratios de contraste superiores a 6.5:1 (superando el mínimo WCAG AA de 4.5:1).
- **Botones táctiles:** Mínimo 48x48 px en todos los elementos interactivos primarios y secundarios.
- **Sloplint / Hallmark:**
  - Modo: `CUSTOM` (paleta y lineamientos bloqueados por `design.md`).
  - Reglas de Hallmark ignoradas intencionalmente con motivo:
    - *Imagery*: sin fotografías de stock (todo es pixel art original).
    - *Marketing sections*: sin landing pages de ventas ni testimonios (es una PWA de bienestar).
- **Comprobación manual pendiente:** Recorrido con TalkBack (Android) y VoiceOver (iOS) según la guía detallada en `A11Y-CHECKLIST.md`.

