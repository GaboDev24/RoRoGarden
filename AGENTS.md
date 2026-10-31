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

## 📁 Alcance de Etapa 3 (Completada)

Se implementó:
- Pantalla "Una pausa" (`#/pausa`) con 3 micro-desafíos al azar, filtro por categoría, botón "Otras ideas", acceso a respiración y botón "Ahora no"
- Banco de 18 micro-desafíos originales en `src/challenges.ts` (Voz, Cuerpo, Silencio, Respiración, Ánimo) con notas de cuidado
- Pantalla de ejecución de desafíos (`#/desafio/:id`) paso a paso con temporizador continuo por timestamps, Screen Wake Lock API y sapo acompañante
- Respiración guiada (`#/respirar`) en 3 patrones (Suave, Cuadrada, Corta), 3 duraciones, modo "Con mi sala", guía visual pixel art con respeto a `prefers-reduced-motion` y accesibilidad `aria-live`
- Síntesis de sonido de campana suave y vibración háptica con Web Audio API (`src/audio/index.ts`), desactivados por defecto y configurables en Ajustes
- Módulo de selección pura desacoplado del DOM (`src/pick.ts`)
- Esquema de almacenamiento versionado v2 (`src/storage/`), con migraciones automáticas v1 -> v2 y guardado silencioso sin métricas ni culpas
- 4 nuevos sprites 32x32: sapo inhalando, sapo exhalando, sapo estirándose y sapo con manos en los oídos
- Tests unitarios completos en Vitest para respiración, selección y persistencia (18 tests pasando)

**No implementar todavía:** jardín que crece o cambia según las pausas, resumen semanal, recordatorios o notificaciones, cuentas o sincronización, funciones específicas para niños más allá del modo de visualización de la respiración.

