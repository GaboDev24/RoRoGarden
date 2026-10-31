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

ETAPA 3: Respiración guiada y micro-desafíos

Contexto
Seguimos el proyecto de las etapas 1 y 2. Leé primero AGENTS.md y design.md: sus principios (nunca castiga, todo opcional, privacidad total, voz rioplatense, paleta única) siguen vigentes y mandan sobre cualquier decisión de esta etapa. Usá las skills instaladas que apliquen (game-ui-ux, game-feel, audio-design, save-systems, hallmark). Hallmark se usa con las reglas de design.md (modo custom, sin fotos, sin secciones de landing, piso de calidad obligatorio, reglas ignoradas anotadas con motivo). Si algo es ambiguo, anotá tu supuesto en una línea y seguí.

Objetivo
Que la maestra tenga, en el jardín, un botón de "Una pausa" que le ofrezca en 1 o 2 minutos algo concreto para cuidar su voz, su cuerpo, su cabeza o su ánimo, y una respiración guiada que pueda usar sola o con su sala.

Tareas (solo esto)

1. Pantalla "Una pausa"
   - Nuevo botón en #/jardin: "Una pausa". Lleva a #/pausa.
   - Ahí se ofrecen 3 micro-desafíos distintos elegidos al azar entre los disponibles (cada uno con título, categoría y duración), más un botón "Otras ideas" que cambia las tres. También un acceso directo a "Respirar un rato".
   - Filtro opcional por categoría (Voz, Cuerpo, Silencio, Respiración, Ánimo). Sin filtro por defecto.
   - Nunca obligar a elegir ni a completar. Botón "Ahora no" siempre visible, con el mismo peso visual que "Empezar".

2. Banco de micro-desafíos
   - Datos en src/challenges.js (un objeto por desafío: id, categoría, título, duración en segundos, pasos cortos, nota opcional). Tiene que poder editarlo alguien que no programa.
   - Escribí entre 14 y 18 desafíos originales, repartidos en estas categorías pensadas para una maestra de jardín:
     * Voz: pausa vocal en silencio, bostezo suave para soltar la mandíbula, tomar agua despacio, calentamiento con zumbido suave (sonido "mmm" cómodo), hablar más grave y más lento durante un minuto.
     * Cuerpo: estirar cuello y hombros, soltar la espalda después de agacharse o estar en sillas bajas, mover las muñecas y los pies, apoyar los pies en el piso y sentir el peso.
     * Silencio: un momento de silencio intencional después de un pico de ruido, bajar la guardia de los oídos tapándolos con las palmas unos segundos.
     * Respiración: versiones cortas para hacer sola.
     * Ánimo: "nombrá una cosa que hiciste bien hoy", "dejá de compararte con otra sala por un minuto", "agradecé algo de este día".
   - Cada desafío: máximo 4 pasos, de una línea cada uno, instrucciones en voseo, tono cálido, nada de promesas médicas ("cura", "elimina el estrés").
   - Ninguno puede requerir contener la respiración por más de unos segundos, hiperventilar ni forzar la voz. Incluí en los de Voz una nota breve: "Si la ronquera te dura varios días, consultá con una fonoaudióloga o un médico."
   - No es consejo médico: ninguna pantalla debe sonar a tratamiento.

3. Ejecución de un desafío
   - Pantalla con los pasos de a uno por vez, texto grande, sapo acompañando con una animación simple y un temporizador visual suave (sin cuenta regresiva numérica agresiva).
   - Botones: "Siguiente paso", "Pausar", "Terminar antes". Terminar antes no es fallar: mensaje neutro y cálido.
   - Al terminar, una frase de cierre breve y volver al jardín.
   - Que el temporizador sea correcto aunque la pantalla se bloquee o la app pase a segundo plano: calcular el tiempo con marcas de tiempo (Date.now / performance.now), no contando ticks.
   - Mantener la pantalla encendida durante el desafío usando la Screen Wake Lock API si está disponible (con fallback silencioso si no).

4. Respiración guiada
   - Pantalla #/respirar con un círculo (o el cuerpo del sapo hinchándose y soltándose) como guía visual en pixel art y la indicación escrita de cada fase.
   - Tres patrones suaves: "Suave" (inhalar 4, exhalar 6), "Cuadrada" (inhalar 4, pausa 4, exhalar 4, pausa 4) y "Corta" (inhalar 3, exhalar 5, ideal para entre actividades). Duración elegible: 1, 2 o 3 minutos.
   - Opción "Con mi sala": modo de pantalla grande con una guía visual más simple y una sola frase por fase ("Inflamos como un globo", "Soltamos el aire despacito"), pensado para mostrarlo con el celular a los chicos. No agregar funciones extra para niños: es solo un modo de visualización.
   - Aviso inicial breve: "Si sentís mareo o incomodidad, volvé a respirar normal." Sin tecnicismos.
   - prefers-reduced-motion: reemplazar la animación por una versión sin movimiento (cambio de texto y de forma estática), pero que siga siendo guiada.

5. Sonido y vibración (todo opcional y apagado por defecto)
   - Sonidos suaves generados por código con Web Audio (sin archivos pesados): una campana tranquila al empezar y terminar una fase o un desafío. Volumen bajo.
   - El audio solo arranca tras un gesto de la usuaria (política de los navegadores).
   - Interruptor en Ajustes: "Sonidos" (apagado) y "Vibración" (apagado; usar navigator.vibrate solo si existe; recordar que iPhone no la soporta, y no mostrar error si falta).
   - Todo debe funcionar igual sin sonido.

6. Selección de desafíos
   - Lógica pura en src/pick (sin DOM): elegir N desafíos al azar, sin repetir el último ofrecido, filtrando por categoría y por duración máxima. Lista para reutilizar después en recordatorios.
   - No usar historial para "obligar" variedad ni para premiar nada.

7. Registro opcional
   - Cuando termina un desafío o una respiración, guardar en silencio un registro mínimo (tipo, id, fecha, duración real) con el módulo src/storage de la etapa 2.
   - Subir la versión del esquema y escribir la migración correspondiente (con test) usando la función de migración que dejó preparada la etapa 2.
   - No mostrar ningún contador, racha, porcentaje ni "veces que hiciste X". Estos registros quedan guardados para uso futuro. Aclarar esto en el README.
   - Incluirlos en la exportación e importación de datos de Ajustes.

8. Textos y estilo
   - Todos los textos nuevos en src/copy.js (voseo, cálidos, breves). Los desafíos viven en src/challenges.js.
   - Sprites nuevos originales: sapo inhalando y sapo exhalando (2 cuadros), sapo estirándose, sapo con las manos en los oídos. 32x32, misma paleta.

9. Calidad
   - Diseñar cada pantalla nueva con Hallmark según las reglas del proyecto y correr su revisión (audit/sloplint) sobre todas las pantallas. Informar qué marcó y qué corregiste. Si no se puede correr la parte con navegador, decirlo y correr las estáticas.
   - Accesibilidad: los cambios de fase de la respiración se anuncian con aria-live (sin ser invasivos), foco visible, navegación por teclado, botones de al menos 48px, contraste AA.
   - Ningún color hardcodeado: todo sale de la paleta.

Tests (Vitest)
- Lógica de fases de la respiración (que cada patrón recorra las fases con la duración correcta y termine a tiempo).
- Selección de desafíos (sin repetir el último, respeta categoría y duración).
- Migración del esquema de datos de la etapa 2 a la de esta etapa.

Criterios de aceptación
- Se puede hacer una pausa completa en menos de 2 minutos desde que se abre la app.
- Todo se puede saltar, pausar o abandonar sin perder nada ni recibir ningún reproche.
- Funciona offline y con la pantalla bloqueada a mitad de un desafío (el tiempo sigue siendo correcto al volver).
- Se ve y se usa bien a 360x640, con una sola mano.
- Con sonido y vibración apagados, nada falla ni avisa de nada.
- Exportar e importar siguen funcionando, ahora con los registros nuevos.
- Los tests pasan (npm test).
- Resumen final de 5 líneas máximo: qué hiciste, supuestos tomados y reglas de Hallmark ignoradas (si hubo).

No hagas todavía: jardín que crece o cambia según las pausas, resumen semanal, recordatorios o notificaciones, cuentas o sincronización, funciones específicas para niños más allá del modo de visualización de la respiración.