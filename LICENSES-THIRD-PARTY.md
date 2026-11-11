# Licencias de Terceros (Third-Party Licenses) — RoRoGarden

Este documento lista las licencias de todas las librerías y componentes de terceros utilizados en RoRoGarden, tanto en producción como en desarrollo.

---

## 1. Tipografías

### Press Start 2P
- **Autor:** CodeMan38 (coyier.net / fontlibrary.org)
- **Licencia:** SIL Open Font License 1.1 (OFL-1.1)
- **Ubicación en el repositorio:** `public/fonts/OFL.txt` y `LICENSE-PRESS-START-2P.txt`
- **Condición de distribución:** Permite distribución libre con aplicaciones y sitios web sin costo, manteniendo el copyright y texto de la licencia. No se vende de manera aislada.
- **Estado:** ✅ Apta para distribución.

---

## 2. Dependencias de Producción (Runtime)

### `@fortawesome/fontawesome-free` (v7.3.1)
- **Licencia:** `(CC-BY-4.0 AND OFL-1.1 AND MIT)`
  - Iconos SVG: Creative Commons Attribution 4.0 International (CC-BY-4.0)
  - Fuentes de iconos: SIL OFL 1.1
  - Código y utilidades: MIT License
- **Uso:** Iconos vectoriales mínimos embebidos como SVG en cliente (`src/icons.ts`).
- **Estado:** ✅ Apta para distribución web.

---

## 3. Dependencias de Desarrollo (Build / Test / Tooling)

Estas dependencias solo se ejecutan durante el desarrollo y la compilación; no se distribuyen al usuario final ni se ejecutan en su navegador:

| Paquete | Versión | Licencia | Propósito |
|---|---|---|---|
| `vite` | 6.4.5 | MIT | Empaquetador y servidor de desarrollo |
| `vite-plugin-pwa` | 0.21.2 | MIT | Generación de Service Worker y Web App Manifest |
| `typescript` | 5.9.3 | Apache-2.0 | Compilador y verificación de tipos estáticos |
| `vitest` | 5.0.5 | MIT | Ejecutor de tests unitarios |
| `happy-dom` | 21.0.4 | MIT | Entorno DOM ligero para ejecución de tests sin navegador real |
| `node-ical` | 0.27.3 | Apache-2.0 | Verificación y parseo de calendarios `.ics` en tests unitarios |

---

## 4. Conclusión de Compatibilidad

Ninguna de las dependencias utiliza licencias virales restrictivas (como GPL o AGPL estricto que obliguen a licenciar el código propio de forma específica). Todas son licencias permisivas estándar en el ecosistema web moderno (MIT, Apache 2.0, SIL OFL 1.1 y CC-BY 4.0).

