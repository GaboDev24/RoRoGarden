# Lista de Verificación de Accesibilidad Manual (A11Y-CHECKLIST.md)

> **⚠️ AVISO IMPORTANTE:** Esta lista **debe ser recorrida por una persona en un dispositivo real** utilizando lectores de pantalla físicos (TalkBack en Android o VoiceOver en iOS). Las herramientas automatizadas de testing no pueden evaluar la cadencia de voz, la naturalidad de la navegación gestual ni la comprensión humana de la experiencia auditiva.

---

## 🎧 Instrucciones Generales para la Prueba

1. Activá el lector de pantalla:
   - **Android:** Ajustes > Accesibilidad > **TalkBack** (o combinaciones de teclas de volumen).
   - **iPhone:** Ajustes > Accesibilidad > **VoiceOver** (o triple clic en el botón lateral).
2. Navegá exclusivamente mediante gestos de deslizamiento (swipe horizontal para avanzar elemento por elemento) y doble toque para activar.
3. Verificá que:
   - Al cambiar de pantalla, el lector anuncie automáticamente el título principal (`<h1>`) o el nuevo contexto sin tener que buscarlo manualmente.
   - No existan "trampas de foco" (lugares donde el cursor quede atrapado sin poder retroceder).
   - Los botones interactivos anuncien su propósito claro ("Volver", "Saltar", "Iniciar respiración"), nunca "botón sin etiqueta" ni nombres de archivo.

---

## 📱 Flujos Concretos a Recorrer

### 1. Primera vez y Bienvenida (`#/bienvenida`)
- **Gesto:** Deslizar elemento por elemento por los 3 pasos.
- **Qué se debería escuchar:**
  - *"Bienvenida, paso 1 de 3: Hola, bienvenida. RoRoGarden es tu rincón personal..."*
  - Anuncio claro de los botones: *"Siguiente, botón"* y *"Saltar, botón"*.
  - En el paso 3: el campo de texto opcional para el sapo anuncia claramente: *"¿Le querés poner un nombre a tu sapo? (opcional), cuadro de edición"*.

### 2. Check-in Diario (`#/checkin`)
- **Gesto:** Entrar desde el jardín y seleccionar un estado de ánimo.
- **Qué se debería escuchar:**
  - *"¿Cómo llegás hoy? Encabezado de nivel 1"*.
  - Cada sapito anuncia su estado y descripción: por ejemplo, *"Contenta: Con energía linda y el corazón liviano, botón"*.
  - Al seleccionar uno y guardar: el mensaje de cierre anuncia *"Gracias por registrar cómo estás. Tu jardín te acompaña"*.

### 3. Diario / Cerrar el Día (`#/diario`)
- **Gesto:** Completar o saltar los 3 pasos de reflexión nocturna.
- **Qué se debería escuchar:**
  - Títulos de cada paso: *"Algo lindo de hoy"*, *"Algo que me pesó"*, *"Algo que suelto"*.
  - Los campos de texto indican que son opcionales y su etiqueta asociada.
  - Al presionar *"Cerrar la noche"*: el ritual anuncia *"El día ya terminó. Dejalo acá, el jardín lo guarda. Que descanses lindo"*.

### 4. Una Pausa y Desafío (`#/pausa`, `#/desafio/:id`)
- **Gesto:** Elegir una pausa y completarla.
- **Qué se debería escuchar:**
  - Las 3 tarjetas de desafíos anuncian título, categoría (Voz, Silencio, Respiración, etc.) y tiempo estimado en minutos.
  - En la pantalla del desafío: el temporizador anuncia el progreso sin saturar constantemente la voz (se anuncian cambios de fase significativos).

### 5. Respiración Guiada (`#/respirar`)
- **Gesto:** Seleccionar un patrón y hacer un ciclo de respiración.
- **Qué se debería escuchar:**
  - Selector accesible de patrón: *"Suave (4-4)"*, *"Cuadrada (4-4-4-4)"*, *"Corta (3-3)"*.
  - Durante el ejercicio: las instrucciones de fase se anuncian a través de `aria-live="polite"`: *"Inhalá"*, *"Sostené"*, *"Exhalá"*, *"Pausa"*, con tiempo suficiente para respirar sin apuro.

### 6. Acomodar el Jardín y Mi Colección (`#/micoleccion`, `#/jardin`)
- **Gesto:** Explorar la colección y activar el modo Acomodar.
- **Qué se debería escuchar:**
  - En la colección: se leen los nombres de los objetos conseguidos (ej: *"Hongo sonriente, Hongo"*).
  - En el modo Acomodar: la grilla táctil identifica las coordenadas o celdas (ej: *"Casillero fila 3, columna 3: Lugar del sapo"* o *"Casillero disponible"*).
  - Botón claro para finalizar: *"Listo, botón"*.

### 7. Mi Semana (`#/semana`)
- **Gesto:** Recorrer la tira de días y las reflexiones.
- **Qué se debería escuchar:**
  - Cada día anuncia el nombre del día y cómo estuvo (ej: *"Lunes 10: Contenta"* o *"Martes 11: Día sin registro, hojita tranquila"*).
  - Cero juicios o anuncios de rachas rotas.
  - Las citas de "Lo lindo de la semana" se leen de corrido.

### 8. Pantalla de Ayuda y Contactos (`#/ayuda`)
- **Gesto:** Leer los recursos y teléfonos.
- **Qué se debería escuchar:**
  - Aclaración inicial: *"RoRoGarden es solo un rincón de bienestar y no reemplaza a un profesional de la salud"*.
  - Cada línea telefónica anuncia el nombre de la institución, la gratuidad y el botón de llamada: ej. *"Línea 135, Centro de Asistencia al Suicida, botón Llamar"*.

---

## 👁️ Pruebas Visuales Complementarias

- [ ] **Texto al 200% y fuente grande:** En Ajustes del sistema > Pantalla > Tamaño de fuente (al máximo), ningún texto se corta ni se solapa con botones.
- [ ] **Modo de contraste forzado (forced-colors / high contrast):** En Windows o Android con alto contraste activado, los bordes de los botones y los textos se distinguen con claridad.
- [ ] **Modo horizontal (Landscape):** Al rotar el celular horizontalmente, la pantalla se adapta sin cortar contenido ni bloquear la orientación.
- [ ] **Áreas de toque táctil:** Todos los botones interactivos miden como mínimo 48x48 píxeles de área sensible al dedo.

