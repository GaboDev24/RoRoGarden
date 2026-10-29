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

No hagas todavía: check-in, diario, respiración, guardado de datos, notificaciones ni nada fuera de la lista.