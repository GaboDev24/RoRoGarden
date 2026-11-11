# Registro de Cambios (CHANGELOG.md) — RoRoGarden

Todas las modificaciones notables de este proyecto están documentadas en este archivo.
El formato sigue las convenciones de [Keep a Changelog](https://keepachangelog.com/es-ES/1.0.0/) y se adhiere a [Semantic Versioning](https://semver.org/lang/es/).

---

## [1.0.0] — 2026-11-11

### Agregado
- **Primera vez cuidada (`#/bienvenida`):** Flujo introductorio de 3 pantallas breves y saltables: explicación cálida de la app, privacidad honesta ("tus datos viven en tu celular"), carácter opcional de la experiencia, nombre opcional para el sapo y aclaración de que la app no es terapia ni reemplaza a un profesional. Acceso permanente desde Ajustes ("Ver la bienvenida").
- **Instalación PWA (`#/instalar`):** Pantalla dedicada con pasos específicos para Android (Chrome) e iPhone (Safari), botón nativo de instalación cuando está disponible el evento `beforeinstallprompt`, detección de estado ya instalado (`display-mode: standalone`) y explicación simple de los beneficios de instalar.
- **Íconos y Manifest PWA completo:** Script generador `scripts/make-icons.py` que crea íconos adaptativos pixel art `pwa-512-maskable.png` (con zona segura del 10%) y `apple-touch-icon.png` (180x180) con fondo menta de la paleta. Manifest con `lang: es-AR`, shortcuts directos (Check-in, Una pausa, Cerrar el día) y propósito explícito `any` y `maskable`.
- **Actualizaciones seguras y amables (Service Worker):** Modo de actualización suave ("avisar, no forzar") con tarjeta no intrusiva en Ajustes y el Jardín cuando hay una nueva versión lista, sin recargas automáticas ni interrupción de actividades.
- **Acerca de y privacidad (`#/acerca`):** Pantalla informativa con número de versión (1.0.0), detalle transparente de almacenamiento local, nota de servicios de hosting, aclaración médica/psicológica, créditos de arte pixel art original y tipografía Press Start 2P con licencia SIL OFL 1.1. Constante `FEEDBACK_URL` configurable.
- **Captura global de errores (`#/error`):** Pantalla amigable ante cualquier fallo inesperado ("Algo no salió bien. Tus datos están a salvo.") con botones para volver al jardín o recargar, sin pantallas en blanco ni envío de datos a servidores externos.
- **Fuentes 100% locales:** Descarga y empaquetado local de los archivos WOFF2 de `Press Start 2P` (`public/fonts/`), eliminando toda dependencia de Google Fonts CDN y garantizando cero peticiones a servidores de terceros en ejecución.
- **Seguridad estricta (CSP y Headers):** Meta etiquetas y archivo `public/_headers` con `Content-Security-Policy`, `Referrer-Policy: no-referrer` y `Permissions-Policy` restrictiva (bloqueo total de cámara, micrófono, geolocalización, usb y pagos).
- **Publicación y automatización:** Workflow de GitHub Actions (`.github/workflows/deploy.yml`) para despliegue automatizado en GitHub Pages, soporte de subrutas configurables vía `VITE_BASE`, guías completas de despliegue (`DEPLOY.md`) y verificación (`POSTDEPLOY.md`).
- **Guías humanas:** `GUIA-MAESTRA.md` escrita en español rioplatense para la docente, `PRUEBA.md` con 6 tareas y preguntas de observación para quien la acompañe, y `A11Y-CHECKLIST.md` para verificación con TalkBack y VoiceOver.
- **Licencias de terceros:** Documento `LICENSES-THIRD-PARTY.md` con inventario completo de dependencias y fuentes.

### Cambiado
- **Vite PWA:** Configurado `registerType: 'prompt'` y limpieza automática de cachés antiguas.
- **Enrutador:** Manejo de rutas desconocidas redirigiendo automáticamente a `#/jardin`.
- **Accesibilidad:** En cada cambio de ruta se traslada el foco automáticamente al encabezado principal (`<h1>`) y se actualiza el `document.title`.
- **Exclusión de desarrollo:** Exclusión de herramientas de desarrollo (`/sprites`) del camino de ejecución de producción.

---

## [0.5.0] — Etapa 5
- Tira de días "Mi semana" a demanda con sapo o hojita neutra y citas de "Lo lindo de hoy".
- Detección suave de patrones opcional con umbral conservador (mínimo 5 registros, >= 70% tendencia).
- Recordatorios suaves con exportación a calendario universal `.ics` (RFC 5545).
- Pantalla de Ayuda con líneas gratuitas verificadas de Argentina (135, 911).
- Aviso sensible de apoyo con enfriamiento de 21 días.
- Migración de almacenamiento v4 y validación estricta de respaldos.

## [0.4.0] — Etapa 4
- Jardín vivo dinámico con ciclo día/noche, estaciones y paleta adaptativa.
- Sapo protagonista interactivo con salto, sonidos y nombre opcional.
- Catálogo de 26 decoraciones y visitantes originales en pixel art 16x16.
- Grilla táctil 5x5 accesible y modo Acomodar.
- Sistema de regalo diario tras registrar bienestar.
- Pantalla Mi Colección organizada por categorías sin siluetas faltantes.
- Migración de almacenamiento v3.

## [0.3.0] — Etapa 3
- Pantalla "Una pausa" con 18 micro-desafíos en 5 categorías.
- Temporizador continuo por timestamps, Screen Wake Lock API y sapo acompañante.
- Respiración guiada en 3 patrones, 3 duraciones y modo "Con mi sala".
- Síntesis de audio de campana suave y vibración háptica opcionales.
- Migración de almacenamiento v2.

## [0.2.0] — Etapa 2
- Check-in de 5 estados emocionales (32x32 pixel art).
- Diario nocturno con reflexión en 3 pasos y ritual de cierre.
- Historial cronológico con edición y borrado.

## [0.1.0] — Etapa 1
- Estructura base Vite + TypeScript vanilla.
- Paleta cromática oficial de 12 colores en CSS y TS.
- Renderizador de sprites pixel art por grilla ASCII.
- Pantalla de portada y laboratorio de sprites.

