Contexto del proyecto
Estoy construyendo una PWA de bienestar para una maestra jardinera (la usuaria es la docente, NO los niños). Es un "jardín" personal con check-in diario, micro-desafíos (voz, cuerpo, respiración), diario mínimo y recompensas solo estéticas. Estética: pixel art de sapos y hongos, tono calmo y cálido, voz argentina.

Antes de escribir código:
1. Mirá las imágenes en /referencias. Son referencias de ánimo, luz y paleta (bosque húmedo, agua, niebla, noche con luna). NO copies personajes ni composiciones de esas ilustraciones: los sapos, hongos y escenas deben ser diseños originales.
2. Usá las skills instaladas que apliquen (create-game-assets, game-ui-ux, prototype-fast y hallmark). Si alguna no aplica a un proyecto web sin motor, ignorala y decímelo.
3. Si algo es ambiguo, anotá tu supuesto en una línea y seguí, no me interrumpas con preguntas.

Principios no negociables (guardalos en AGENTS.md en la raíz)
- Nunca castiga: sin rachas que se pierden, sin plantas que mueren, sin culpa. Si la usuaria falta días, el jardín la espera. Aunque hay dias de racha opcionales, la usuaria no pierde nada si no los completa.
- Todo es opcional y saltable. Sesiones de 3 a 5 minutos, usable con una mano.
- Privacidad total: datos solo en el dispositivo (localStorage/IndexedDB), sin backend, sin analytics, sin nombres de alumnos ni familias.
- Recompensas solo estéticas.
- Textos en español rioplatense, cálidos, sin jerga de autoayuda.
- No es terapia ni consejo médico.
- Stack: Vite + TypeScript, PWA offline, sin dependencias pesadas. Mobile-first (base 360x640), safe areas, botones táctiles de al menos 48px.

Paleta (definila como variables CSS y como objeto JS, única fuente de verdad)
- tinta (contornos y texto): #2B3A42
- agua profunda: #3E5C7A
- azul niebla: #A9C8E8
- celeste agua: #BFE6EE
- turquesa pastel: #8ED1CF
- menta clara: #D9F2E6
- verde salvia: #A8D5BA
- verde sapo: #8CC9A1
- verde musgo: #6FA98A
- verde bosque: #3F6F5E
- crema luna (brillos y panza): #F6EFC9
- acento cálido OPCIONAL, usar con muchísima moderación (sombreros de hongo): #E8A987
Reglas: texto siempre en tinta sobre fondos claros (contraste mínimo WCAG AA). Nada de negro puro ni blanco puro. Pocos colores por sprite (máx. 6 más transparente).

Estilo de los sprites
- Formas redondeadas y simples, ojos grandes y tiernos, expresión serena. Sapos regordetes; hongos con tallo en forma de gota y sombrero grande.
- Resolución base 16x16 y 32x32. Sin antialiasing, sin degradados.

Uso de la skill Hallmark (diseño de interfaz)
- Hallmark está pensada para landing pages. Acá se usa para la interfaz de la app, con estas reglas:
  a) Modo CUSTOM. No repartas temas del catálogo. La paleta, la tipografía pixel y el estilo ya están decididos por mí en este prompt: no los cambies ni propongas otros.
  b) Antes de invocarla, creá un design.md bloqueado con la paleta, la regla "nunca castiga" y el estilo pixel art. Leé la documentación de la skill para usar el formato que su paso previo espera.
  c) No uses fotografías ni su librería de fotos. Todo el arte es pixel art original.
  d) No agregues secciones de landing (suscripción por email, testimonios, precios, llamados a la acción comerciales). Es una app, no un sitio.
  e) El "piso" de calidad sí es obligatorio: contraste, foco visible, respeto de prefers-reduced-motion, diseño correcto en celular, sin datos inventados, sin formularios que "agradecen" sin guardar nada.
  f) Si alguna regla "de reflejo" choca con el proyecto, podés ignorarla pero dejá anotado el motivo en un comentario y en tu resumen final.
  g) Usala para la pantalla de inicio y para cada pantalla nueva. No la uses en /sprites (es solo de desarrollo).
  h) Al terminar, corré su revisión (audit/sloplint) sobre la pantalla de inicio e informá qué marcó y qué corregiste. Si no podés correr la parte con navegador (falta Chrome o puppeteer-core), decímelo y corré solo las revisiones estáticas.

Tarea de esta primera etapa (solo esto, nada más)
1. Crear el proyecto Vite como PWA (manifest + service worker, instalable, funciona offline) con AGENTS.md y design.md según lo de arriba.
2. Crear src/palette con la paleta.
3. Crear un sistema de sprites: cada sprite se define en código como una grilla de texto donde cada carácter es una clave de la paleta ('.' = transparente). Un renderer lo dibuja en <canvas> con image-rendering: pixelated, escala entera y respeto de devicePixelRatio. Soportar animaciones simples de 2 a 4 cuadros.
4. Dibujar estos sprites originales: (a) sapo sentado con animación idle de 2 cuadros (respiración), (b) sapo dormido, (c) hongo con sombrero, (d) nenúfar, (e) luna creciente con 3 estrellas.
5. Una página /sprites (solo para desarrollo) que muestre todos los sprites a x8, sobre fondos claro y oscuro, y a tamaño real en un contenedor de 360px de ancho.
6. Una pantalla de inicio mínima, diseñada con Hallmark según las reglas de arriba: fondo en celeste/menta, un sapo animado sobre un nenúfar y un botón grande "Entrar al jardín" que por ahora no hace nada.

Criterios de aceptación
- npm run dev funciona y la app se ve bien a 360x640.
- Los sprites se ven nítidos, sin borrosidad, en pantallas retina.
- Todos los colores salen de la paleta, ninguno hardcodeado.
- La pantalla de inicio pasó la revisión de Hallmark (o dice qué quedó sin correr y por qué).
- Hay un README corto con cómo correrlo y cómo probarlo en el celular por la red local.
- Al final, resumime qué hiciste y qué supuestos tomaste, en 5 líneas máximo (más las reglas de Hallmark que ignoraste, si hubo).

ETAPA 2: Check-in, diario y guardado local

Contexto
Seguimos el proyecto de la etapa 1. Leé primero AGENTS.md y design.md: sus principios (nunca castiga, todo opcional, privacidad total, voz rioplatense, paleta única) siguen vigentes y mandan sobre cualquier decisión de esta etapa. Usá las skills instaladas que apliquen (game-ui-ux, save-systems, hallmark). Hallmark se usa con las reglas de design.md (modo custom, sin fotos, sin secciones de landing, piso de calidad obligatorio, reglas ignoradas anotadas con motivo). Si algo es ambiguo, anotá tu supuesto en una línea y seguí.

Objetivo
Que la maestra pueda entrar al jardín, registrar cómo llega, escribir un diario mínimo al cierre del día y que todo quede guardado en su celular.

Tareas (solo esto)

1. Navegación mínima
   - Routing simple por hash (#/jardin, #/checkin, #/diario, #/historial, #/ajustes), sin librerías de routing.
   - "Entrar al jardín" de la pantalla de inicio lleva a #/jardin: un escenario placeholder con el sapo animado y tres botones grandes: "¿Cómo llegás hoy?", "Cerrar el día" y "Mis días". Un acceso discreto a Ajustes.
   - Botón de volver visible y consistente. Nada obliga a pasar por ninguna pantalla.

2. Check-in ("¿Cómo llegás hoy?")
   - Cinco estados representados por el sapo con cinco expresiones distintas, dibujadas por vos como sprites originales 32x32: contenta, tranquila, cansada, tensa, triste. Cada uno con etiqueta de texto (no depender solo del dibujo ni del color).
   - Un campo de texto corto y opcional ("¿Querés dejar algo escrito?").
   - Botón "Saltar" siempre visible y con el mismo peso visual que "Guardar".
   - Después de guardar, una frase cálida breve (sin consejos ni diagnóstico) y volver al jardín.

3. Diario de cierre ("Cerrar el día")
   - Mismo selector de estado que el check-in.
   - Tres preguntas, una por pantalla, todas opcionales y saltables: "Algo lindo de hoy", "Algo que me pesó", "Algo que suelto".
   - Al terminar, un pequeño ritual de salida: una animación corta de 2 a 3 segundos (el sapo se acomoda a dormir, aparece la luna) y una frase de cierre. Respetar prefers-reduced-motion (versión sin animación).

4. Guardado local
   - Módulo src/storage con una API simple: guardar, leer, listar, borrar un registro y borrar todo. Esquema versionado (campo "version") y función de migración vacía lista para usar.
   - Persistencia en localStorage o IndexedDB (elegí uno y anotá por qué en el README). Un registro por tipo y fecha (fecha local del dispositivo), sin nombres de alumnos ni familias.
   - Todo acceso al almacenamiento dentro de try/catch: si falla o está bloqueado, la app sigue funcionando y avisa con un mensaje amable.
   - Tests básicos del módulo (Vitest): guardar y leer, listar ordenado por fecha, borrar, almacenamiento no disponible.

5. Mis días (historial)
   - Lista simple de registros pasados, de más nuevo a más viejo, con estado, fecha y texto.
   - Poder ver, editar y borrar un registro individual, con confirmación al borrar.
   - Si no hay registros, un estado vacío cálido ("Todavía no hay nada acá. Cuando quieras, este espacio te espera.").
   - PROHIBIDO: contar días seguidos, mostrar "días sin registrar", porcentajes de cumplimiento o cualquier señal de culpa.

6. Ajustes
   - "Exportar mis datos" (descarga un archivo JSON) e "Importar" (con validación del archivo antes de pisar nada y confirmación). Esto es el respaldo: si se borran los datos del navegador, se pierden.
   - "Borrar todo" con doble confirmación.
   - Una nota breve y clara: "Tus datos viven solo en este celular. Nadie más los ve."

7. Textos
   - Todos los textos de la app en un único archivo src/copy.js, en español rioplatense (voseo), cálidos y breves, sin jerga de autoayuda ni diagnóstico. Ejemplos de tono: "¿Cómo llegás hoy?", "No hace falta que hoy tengas ganas.", "Dejalo acá, el jardín lo guarda."
   - Que sea fácil de editar por alguien que no programa.

8. Calidad
   - Diseñar cada pantalla nueva con Hallmark según las reglas del proyecto y correr su revisión (audit/sloplint) sobre todas las pantallas de la app. Informar qué marcó y qué corregiste. Si no se puede correr la parte con navegador, decirlo y correr las estáticas.
   - Accesibilidad: todos los controles con etiqueta, foco visible, navegable con teclado, botones de al menos 48px, contraste AA con la paleta del proyecto.
   - Ningún color hardcodeado: todo sale de la paleta.

Criterios de aceptación
- Funciona offline (probar en modo avión) y los datos persisten al recargar y al cerrar y reabrir la app instalada.
- Se ve y se usa bien a 360x640, con una sola mano.
- Cada pantalla se puede saltar o abandonar sin perder nada ni recibir ningún reproche.
- Exportar e importar funcionan de punta a punta con un archivo real.
- Los tests pasan (npm test).
- El README explica cómo correr, probar en el celular por red local y dónde y cómo se guardan los datos.
- Resumen final de 5 líneas máximo: qué hiciste, supuestos tomados y reglas de Hallmark ignoradas (si hubo).

No hagas todavía: respiración guiada, micro-desafíos, jardín que crece o cambia, resumen semanal, recordatorios o notificaciones, cuentas o sincronización, detección automática de estados de ánimo.