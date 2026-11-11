# Notas de Diseño, Pendientes y Futuras Ideas (NOTAS.md)

Este archivo reúne anotaciones, decisiones diferidas, ideas fuera de alcance y pendientes para el autor/desarrollador de RoRoGarden.

---

## ⚖️ Elección de Licencia del Repositorio (Acción pendiente para el Autor)

- **Situación:** De acuerdo con las instrucciones del proyecto, no se ha añadido ningún archivo `LICENSE` general al repositorio.
- **Acción requerida:** El autor del proyecto debe seleccionar y añadir el archivo de licencia que prefiera para el código fuente original (por ejemplo: MIT para código abierto permisivo, GNU AGPLv3 para software libre comunitario, o licencia privativa/propietaria de uso personal).
- **Nota sobre terceros:** Las licencias de las librerías utilizadas (MIT, Apache 2.0, SIL OFL 1.1 y CC-BY 4.0) están completamente inventariadas en `LICENSES-THIRD-PARTY.md` y `LICENSE-PRESS-START-2P.txt`.

---

## 💡 Ideas Fuera de Alcance Registradas Durante el Desarrollo

Estas ideas surgieron durante las etapas 1 a 6 pero **se mantuvieron deliberadamente fuera de la implementación** para respetar los principios no negociables de RoRoGarden (privacidad total, sin servidores, sin funciones invasivas, no es terapia):

1. **Empaquetado nativo con Capacitor para tiendas (Google Play / App Store):**
   - Si en el futuro se desea publicar la app en Google Play o la App Store, la herramienta recomendada es `@capacitor/core` + `@capacitor/local-notifications`.
   - Permitiría que los recordatorios sean notificaciones locales programadas en el sistema operativo del teléfono sin necesidad de un backend ni Web Push.
2. **Exportación de respaldos a archivo cifrado opcional:**
   - Para docentes que compartan el dispositivo con familiares o alumnos, permitir poner una contraseña simple (PBKDF2/AES-GCM en el cliente) al archivo `.json` de respaldo exportado.
3. **Selector de sapo acompañante alternativo:**
   - Permitir elegir entre un sapito de tono verde tradicional y una ranita de tonos ocres o azulados desde Ajustes, como variante estética puramente visual sin requerir logros ni niveles.
4. **Modo oscuro de alto contraste:**
   - Aunque la paleta actual ya cumple con los ratios WCAG AA (texto `#2B3A42` sobre fondos claros), una versión de contraste invertido basada en `--color-agua-profunda` para uso exclusivo en la noche en salas a oscuras.
5. **Selector de más ejercicios de respiración:**
   - Ejercicios adicionales como respiración pranayama o conteo 4-7-8, manteniendo la sencillez actual.

---

## 🚫 Lo que NUNCA debe agregarse a RoRoGarden

Para proteger la esencia del rincón de la maestra:
- ❌ Cuentas de usuario o inicios de sesión (Google, Apple, etc.).
- ❌ Bases de datos remotas o sincronización en la nube pública.
- ❌ Notificaciones Web Push a través de servidores externos.
- ❌ Métricas de rachas, días consecutivos perdidos o plantas que se marchiten.
- ❌ Modelos de lenguaje (IA generativa o chat dentro de la app que simulen consejo o terapia).
- ❌ Analíticas de seguimiento o telemetría (Google Analytics, Mixpanel, etc.).
- ❌ Funciones de compartir en redes sociales que fomenten comparación o exposición.

