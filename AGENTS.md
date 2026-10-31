# AGENTS.md — Principios No Negociables de RoRoGarden

Este archivo es el contrato de proyecto. Todo agente o desarrollador que toque este repo debe leerlo antes de escribir código.

## 🐸 ¿Qué es RoRoGarden?

Una PWA de bienestar para una **maestra jardinera** (la usuaria es la docente, no los niños). Es un "jardín" personal con check-in diario, micro-desafíos y recompensas solo estéticas. Estética pixel art de sapos y hongos, tono calmo y cálido.

---

## 🚫 Principios No Negociables

### 1. NUNCA CASTIGA
- Sin rachas que se pierden. Sin plantas que mueren. Sin culpa.
- Si la usuaria falta días, el jardín la espera, sin juicio.
- Los días de racha son opcionales: la usuaria no pierde nada si no los completa.

### 2. TODO ES OPCIONAL Y SALTABLE
- Sesiones de 3 a 5 minutos como máximo.
- Usable con una sola mano (táctil, mobile-first).
- Ningún flujo obliga a completar algo para salir o continuar.

### 3. PRIVACIDAD TOTAL
- Datos solo en el dispositivo: `localStorage` / `IndexedDB`.
- Sin backend. Sin analytics. Sin tracking.
- Sin nombres de alumnos, familias ni datos sensibles de ningún tipo.
- Nunca solicitar permisos innecesarios.

### 4. RECOMPENSAS SOLO ESTÉTICAS
- Las recompensas son visuales: nuevos sprites, decoraciones del jardín, variantes de color.
- Nada que genere presión de logro o comparación.

### 5. LENGUAJE CÁLIDO, RIOPLATENSE
- Español de Argentina. Tuteo (vos). Tono cálido y cercano.
- Sin jerga de autoayuda, sin frases motivacionales genéricas.
- Sin anglicismos innecesarios.
- Ejemplos correctos: "¿Qué tal estuvo el día?", "Tomáte un ratito", "Tu jardín te espera."
- Ejemplos incorrectos: "¡Felicitaciones por tu logro!", "Hoy completaste tu streak", "Wellness check-in".

### 6. NO ES TERAPIA
- No diagnostica. No da consejos médicos ni psicológicos.
- Si la usuaria expresa malestar grave, no responder con "ayuda profesional" de manera intrusiva: simplemente ofrecer calma.

### 7. ACCESIBILIDAD
- Contraste mínimo WCAG AA en todo el texto.
- `prefers-reduced-motion` siempre respetado: pausar o eliminar animaciones si está activo.
- Botones táctiles mínimo 48x48px de área de toque.
- Foco visible en todos los elementos interactivos.
- Sin negro puro (`#000`) ni blanco puro (`#FFF`): usar siempre los tokens de paleta.

---

## 🛠️ Stack Técnico

- **Vite** + **TypeScript** (vanilla, sin frameworks pesados)
- **PWA** offline-first con Service Worker
- **Mobile-first**: base 360x640, safe areas, portrait
- **Sin dependencias pesadas**: ninguna librería de más de 50kb salvo Vite/TS
- **Sin backend**: todo en el dispositivo

---

## 🎨 Diseño

La paleta, tipografía y reglas visuales están en `design.md`. Nunca hardcodear colores: usar siempre las variables CSS o el objeto `palette` de TypeScript.

---

## 📁 Alcance de Etapa 2 (Completada)

Se implementó:
- Router nativo por hash (`#/`, `#/jardin`, `#/checkin`, `#/diario`, `#/historial`, `#/ajustes`, `#/sprites`)
- Módulo centralizado de textos `src/copy.ts` en español rioplatense
- 5 sprites originales 32x32 de expresiones emocionales (contenta, tranquila, cansada, tensa, triste)
- Pantalla Check-in con selector de estados, nota opcional y botón Saltar con igual peso
- Pantalla Diario de cierre con 3 preguntas reflexivas saltables y ritual nocturno con luna
- Módulo de almacenamiento local `src/storage` (localStorage) con esquema versionado (`version: 1`), tolerancia a fallos y tests en Vitest
- Pantalla Mis Días (historial con ver, editar y borrar sin culpas ni métricas de rachas)
- Pantalla de Ajustes con exportar/importar JSON y borrado total con doble confirmación

**No implementar todavía:** respiración guiada, micro-desafíos, jardín que crece o cambia, resumen semanal, recordatorios o notificaciones, cuentas o sincronización, detección automática de estados de ánimo.

