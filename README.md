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

| Ruta             | Pantalla  | Descripción |
|------------------|-----------|-------------|
| `#/`             | Portada   | Pantalla de inicio con sapo animado y botón "Entrar al jardín". |
| `#/jardin`       | Jardín        | Escenario central vivo con sapo según mood, ciclo día/noche y decoraciones. |
| `#/micoleccion`  | Mi colección  | Galería de visitantes y objetos descubiertos (sin contadores de falta). |
| `#/semana`       | Mi semana     | Resumen a demanda: tira de días con sapo u hojita neutra, lo lindo y pausas. |
| `#/recordatorios`| Recordatorios | Configuración de 3 momentos suaves y exportación a calendario (.ics). |
| `#/ayuda`        | Ayuda         | Teléfonos oficiales y líneas gratuitas de escucha (135, 911). |
| `#/pausa`        | Una pausa     | Selección de 3 micro-desafíos al azar, filtro por categoría y acceso a respiración. |
| `#/desafio/:id`  | Desafío   | Ejecución paso a paso con temporizador continuo, Wake Lock y sapo animado. |
| `#/respirar`     | Respirar  | Respiración guiada en 3 patrones, 3 duraciones y modo "Con mi sala". |
| `#/checkin`      | Check-in  | Selector de 5 estados emocionales (32x32), nota opcional y botón Saltar. |
| `#/diario`       | Diario    | Reflexión nocturna en 3 preguntas saltables y ritual de cierre con luna. |
| `#/historial`    | Mis días  | Historial cronológico con vista, edición y borrado (sin culpas ni rachas). |
| `#/ajustes`      | Ajustes   | Respaldo JSON, sonido/vibración, borrado total y notas de privacidad. |
| `#/sprites`      | Dev Lab   | Laboratorio de desarrollo para inspección de todos los sprites. |

## Persistencia y Privacidad de Datos

### ¿Dónde y cómo se guardan los datos?
Se eligió **`localStorage`** por las siguientes razones de arquitectura:
1. **Privacidad absoluta:** Los datos viven únicamente en el almacenamiento local del navegador del dispositivo. No hay servidores, APIs externas, analytics ni rastreo.
2. **Ligereza y sincronía:** Evita dependencias de librerías asíncronas pesadas, garantizando una carga instantánea (cold start < 100ms) y rendimiento óptimo en celulares de gama media y baja.
3. **Capacidad adecuada:** Una entrada diaria ocupa menos de 1 KB en JSON. La cuota estándar de 5 MB de `localStorage` permite más de 10 años ininterrumpidos de registros diarios.
4. **Respaldo portable:** A través de la pantalla de Ajustes, la usuaria puede exportar e importar todos sus datos en un archivo JSON portable.
5. **Esquema versionado y tolerancia a fallos:** Cada registro incluye el campo `version` (`CURRENT_SCHEMA_VERSION = 2`) y una cadena de migraciones automáticas (`1 -> 2`). Si el almacenamiento local es bloqueado por el navegador o modo incógnito, el sistema conmuta automáticamente a un búfer en memoria sin interrumpir la sesión de la usuaria.
6. **Registros silenciosos sin métricas (Etapa 3):** Al concluir o abandonar un micro-desafío o una sesión de respiración, se guarda en silencio un registro mínimo con fines de uso futuro. **No se muestra ningún contador, racha, porcentaje ni 'veces que hiciste X'**, preservando la promesa de una experiencia 100% libre de culpa o presión de logro. Estos registros se incluyen íntegramente en la exportación e importación de Ajustes.
7. **Sonido y vibración opcionales:** La campana y la vibración háptica se sintetizan procedimentalmente mediante Web Audio API y la API de vibración, permanecen apagadas por defecto y pueden activarse desde Ajustes.

## Recordatorios, Notificaciones y Privacidad (Etapa 5)

### ¿Por qué no usamos Web Push ni notificaciones remotas?
1. **Privacidad total sin backend:** RoRoGarden no tiene servidores ni cuentas de usuario. Implementar Web Push exigiría un servidor remoto que almacene suscripciones y datos de presencia, violando el principio innegociable de privacidad absoluta en el dispositivo.
2. **Limitaciones de las PWAs sin servidor:** Los navegadores móviles modernos suspenden o terminan los Service Workers inactivos y no permiten temporizadores precisos en segundo plano (`setTimeout` o alarmas de larga duración se pausan cuando el celular apaga la pantalla). Las APIs de notificaciones locales puras del navegador (como la Notification API) no pueden despertarse a sí mismas si la PWA está cerrada o en segundo plano prolongado.
3. **La solución elegida: doble mecanismo respetuoso y autónomo:**
   - **En la app:** Banner suave y descartable si la usuaria está usando la aplicación en el momento configurado (sin sonido intrusivo).
   - **En el dispositivo (offline):** Exportación de un archivo de calendario universal `.ics` (RFC 5545) que se importa en un toque en Google Calendar (Android) o Calendario de Apple (iOS). De esta forma, el reloj nativo del sistema operativo gestiona las alarmas con confiabilidad del 100%, incluso con la app cerrada y sin gastar batería ni transmitir ningún dato.

### Ruta futura recomendada (Capacitor)
Para una eventual distribución en tiendas (Google Play Store o Apple App Store) con notificaciones locales periódicas sin servidor, la arquitectura técnica recomendada es empaquetar la aplicación con **Capacitor** (`@capacitor/local-notifications`). Este plugin interactúa directamente con el `AlarmManager` de Android y el `UNUserNotificationCenter` de iOS, permitiendo programar avisos locales recurrentes directamente desde el cliente sin requerir ningún servidor remoto.

---

## Sprites incluidos

- `frog-idle` — Sapo sentado sobre nenúfar, animación de respiración (2 frames)
- `frog-sleeping` — Sapo dormido
- `mushroom` — Hongo con sombrero
- `lilypad` — Nenúfar flotante (28x12)
- `moon-crescent` — Luna creciente con 3 estrellas titilantes
- `frog-contenta` — Sapo contento (32x32, expresión alegre)
- `frog-tranquila` — Sapo tranquilo (32x32, expresión serena)
- `frog-cansada` — Sapo cansado (32x32, párpados caídos)
- `frog-tensa` — Sapo tenso (32x32, ojos alerta, línea apretada)
- `frog-triste` — Sapo triste (32x32, ojos caídos y lágrima suave)
- `frog-inhaling` — Sapo inhalando con pecho y vientre inflado (32x32)
- `frog-exhaling` — Sapo exhalando con aliento suave (32x32)
- `frog-breathing` — Ciclo de respiración animado de 2 cuadros (32x32)
- `frog-stretching` — Sapo estirando brazos y cuello (32x32)
- `frog-ears` — Sapo tapándose los oídos en momento de silencio (32x32)

## Principios del proyecto

Ver `AGENTS.md` y `design.md` en la raíz del proyecto.
