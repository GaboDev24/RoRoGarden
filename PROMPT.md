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

ETAPA 4: El jardín que cambia

Contexto
Seguimos el proyecto de las etapas 1, 2 y 3. Leé primero AGENTS.md y design.md: sus principios (nunca castiga, todo opcional, privacidad total, recompensas solo estéticas, voz rioplatense, paleta única) siguen vigentes y mandan sobre cualquier decisión de esta etapa. Usá las skills instaladas que apliquen (create-game-assets, game-ui-ux, game-feel, save-systems, audio-design, hallmark). Hallmark se usa con las reglas de design.md (modo custom, sin fotos, sin secciones de landing, piso de calidad obligatorio, reglas ignoradas anotadas con motivo). Si algo es ambiguo, anotá tu supuesto en una línea y seguí.

Objetivo
Que #/jardin deje de ser un escenario placeholder y sea un jardín vivo, bonito y calmo, que la maestra pueda decorar a su gusto y que se vaya llenando de visitantes y objetos como regalo por cuidarse. Nada se pierde, nada se marchita, nada se mide.

Reglas de diseño de esta etapa (innegociables)
- El jardín NUNCA empeora: no hay plantas que se secan, visitantes que se van, objetos que desaparecen ni escenas "tristes" por faltar. Todos los climas y momentos del día se ven lindos.
- Sin contadores visibles: nada de "x de y objetos", siluetas de lo que falta, rachas, niveles, puntos ni porcentajes. Lo que no tiene no se muestra (evita la presión de completar la colección).
- Sin mensajes sobre ausencias: nunca mencionar cuánto tiempo pasó ni "hace X días". Si vuelve tras un tiempo, el jardín la recibe igual, con una frase cálida y sin números.
- Recompensas solo estéticas y predecibles: un regalo garantizado por día al hacer cualquier actividad. Nada de azar que enganche (cajas sorpresa, probabilidades, "casi lo conseguís").
- Todo opcional: se puede usar la app entera sin tocar la decoración.

Tareas (solo esto)

1. Escena del jardín en #/jardin
   - Escena en <canvas> en pixel art, por capas (cielo, fondo lejano de juncos y árboles, agua con nenúfares, primer plano con musgo y piedras), mobile-first 360x640. Los botones existentes ("¿Cómo llegás hoy?", "Cerrar el día", "Una pausa", "Mis días") quedan abajo, al alcance del pulgar, sin tapar la escena.
   - Animaciones sutiles, de 2 a 4 cuadros y lentas: juncos que se mecen, ondas en el agua, parpadeo y salto ocasional de los sapos, luciérnagas de noche.
   - Rendimiento: dibujar solo con la pestaña visible (requestAnimationFrame + visibilitychange), tope de 30 fps, sin trabajo cuando la escena no se ve. Pensado para celulares modestos.
   - prefers-reduced-motion: escena estática. Más un interruptor propio en Ajustes: "Animaciones del jardín" (activado por defecto).

2. Momento del día y estación (según el reloj del dispositivo)
   - Función pura en src/world: dada una fecha y un hemisferio devuelve momento del día (amanecer, día, atardecer, noche) y estación. Por defecto hemisferio sur (Argentina), con selector en Ajustes.
   - Cada momento y estación cambia la paleta de la escena (cielo, luz, hojas) usando SOLO colores de la paleta del proyecto. Si necesitás matices extra, agregalos a la paleta y a design.md, con el motivo, siempre en pastel y coherentes, y avisame en el resumen.
   - La noche usa la luna y las estrellas de la etapa 1. Nada de oscuridad pesada: tiene que seguir siendo acogedora y legible.
   - Pequeños detalles por estación (hojitas cayendo en otoño, flores en primavera, etc.). Máximo uno o dos por estación.

3. Su sapo
   - Un sapo protagonista que la representa. Su expresión sigue suavemente el último check-in del día (y es "tranquilo" por defecto). Todas las expresiones se ven simpáticas, ninguna "mala".
   - Opcional: ponerle nombre (se guarda local, máx. 20 caracteres, validar el texto). Si no lo nombra, no se le pide de nuevo.
   - Tocar al sapo hace una animación breve y tierna (y sonido solo si los sonidos están activados en Ajustes).

4. Regalos
   - Módulo src/gifts con lógica pura (sin DOM), generador de azar inyectable para poder testear.
   - Se da como máximo un regalo por día calendario local, al guardar cualquier registro (check-in, cierre del día, desafío terminado o terminado antes, respiración). Saltar una pantalla no da ni quita nada. Terminar antes SÍ cuenta.
   - Los regalos salen del catálogo de objetos que aún no tiene. Si ya los tiene todos, no se da más nada y no se anuncia (sin mensaje de "completaste todo").
   - El regalo aparece con una animación corta y una frase cálida ("Alguien pasó a visitarte."). El mensaje aparece una sola vez y se puede cerrar o saltar.
   - Nunca se muestra el límite diario ni un cartel de "ya recibiste hoy". Si hoy ya hubo regalo, simplemente no hay otro.
   - Si vuelve tras días sin entrar: una frase de bienvenida cálida y SIN números, y el regalo del día como siempre.

5. Catálogo de objetos y visitantes (src/catalog.js, editable por alguien que no programa)
   - Entre 24 y 30 elementos originales en categorías: Visitantes (sapos de otros tonos de la paleta, sapos pequeños, una rana-lunita), Hongos (varios tamaños y sombreros, con el acento cálido usado con moderación), Plantas (juncos, flores acuáticas, helechos), Agua (nenúfares, ondas, una hojita-barco), Cielo (estrellas, nubes, luna con distintos brillos), Cositas (piedras, troncos, faroles de luciérnagas, un pequeño cartel sin texto).
   - Cada elemento: id, categoría, nombre en voseo cálido, sprite, tamaño en celdas, si va en agua o en tierra.
   - Sprites originales (16x16 y 32x32, hasta 6 colores más transparente, misma paleta, ojos grandes y tiernos en los animales). NO copiar personajes de las imágenes de referencia.
   - Cada visitante tiene un comportamiento idle simple y distinto (parpadear, saltar, dormir, mirar la luna).

6. Decorar ("Mi jardín")
   - Modo decoración desde un botón discreto en el jardín: "Acomodar".
   - Grilla de celdas de al menos 48 px de lado. Elegís un objeto de tu colección y tocás una celda para ponerlo; tocás un objeto puesto para moverlo o guardarlo. Funciona con toque simple (NO depender de arrastrar) y con teclado.
   - Reglas de colocación en lógica pura (src/placement): dentro de la grilla, sin superponer, agua y tierra respetadas, una pieza puede guardarse y volver a la colección sin perderse.
   - Botón "Listo" y salida siempre visibles. Cambios guardados automáticamente.
   - Vista "Mi colección": lista de lo que tiene, con nombre, sin números ni totales, sin mostrar lo que no tiene.

7. Guardado
   - Estado del jardín en src/storage: objetos obtenidos, objetos colocados con posición, fecha del último regalo, nombre del sapo, preferencias. Subir la versión del esquema y escribir la migración desde la de la etapa 3 (con test).
   - Incluirlo en exportar e importar. Validar el archivo importado: rechazar posiciones fuera de grilla, ids desconocidos o textos demasiado largos, sin pisar nada si algo falla.
   - Ajustes nuevos: "Animaciones del jardín", "Hemisferio" y "Reiniciar solo el jardín" (doble confirmación, separado de "Borrar todo").
   - Todo acceso al almacenamiento dentro de try/catch, como en las etapas anteriores.

8. Textos
   - Todos los textos nuevos en src/copy.js (voseo, cálidos, breves, sin jerga de autoayuda). Ejemplos de tono: "Alguien pasó a visitarte.", "El jardín te estaba esperando.", "Acomodalo como más te guste."

9. Accesibilidad
   - El canvas es decorativo: darle un aria-label corto y estático que describa la escena (por ejemplo: "Tu jardín, con un estanque, hongos y sapos") que se actualice cuando se agregan visitantes, sin leer cada animación.
   - Todo el modo "Acomodar" operable con teclado y lector de pantalla (los objetos y celdas como controles reales con etiquetas, no solo dibujados en el canvas).
   - Foco visible, contraste AA para los textos sobre la escena (usar fondos o sombras de la paleta si hace falta), botones de al menos 48px.

10. Calidad
   - Diseñar cada pantalla nueva con Hallmark según las reglas del proyecto y correr su revisión (audit/sloplint) sobre todas las pantallas. Informar qué marcó y qué corregiste. Si no se puede correr la parte con navegador, decirlo y correr las estáticas.
   - Ningún color hardcodeado: todo sale de la paleta.
   - Medir y reportar el rendimiento: fps en la escena animada y que no haya trabajo cuando la pestaña está oculta.

Tests (Vitest)
- Regalos: máximo uno por día local, sin repetir objetos ya obtenidos, determinista con azar inyectado, sin regalo cuando ya tiene todo, nunca da nada por saltar una pantalla.
- Mundo: momento del día y estación correctos en ambos hemisferios y en los bordes de horario y de fecha.
- Colocación: dentro de la grilla, sin superposiciones, agua y tierra, guardar y volver a colocar.
- Migración del esquema de la etapa 3 a esta.
- Importación: rechazo de archivos inválidos sin modificar los datos existentes.

Criterios de aceptación
- Se ve hermoso y calmo en los cuatro momentos del día y las cuatro estaciones, y ninguna combinación se ve "triste" ni "mala".
- Se puede usar la app entera sin tocar la decoración ni "Acomodar".
- No hay ningún contador, total, racha, silueta de lo faltante ni mención a la cantidad de días de ausencia en ninguna pantalla.
- Funciona offline, y los objetos, posiciones y nombre persisten al recargar y al reabrir la app instalada.
- La escena anda fluida a 360x640 en un celular modesto y no consume cuando la pestaña no está visible.
- Exportar e importar funcionan de punta a punta con el jardín incluido.
- Los tests pasan (npm test).
- Resumen final de 5 líneas máximo: qué hiciste, supuestos tomados, colores agregados a la paleta (si hubo) y reglas de Hallmark ignoradas (si hubo).

ETAPA 5: Mi semana, recordatorios suaves y ayuda siempre disponible

Contexto
Seguimos el proyecto de las etapas 1 a 4. Leé primero AGENTS.md y design.md: sus principios (nunca castiga, todo opcional, privacidad total, sin contadores ni métricas de culpa, voz rioplatense, paleta única) siguen vigentes y mandan sobre cualquier decisión de esta etapa. Usá las skills instaladas que apliquen (game-ui-ux, save-systems, hallmark). Hallmark se usa con las reglas de design.md (modo custom, sin fotos, sin secciones de landing, piso de calidad obligatorio, reglas ignoradas anotadas con motivo). Si algo es ambiguo, anotá tu supuesto en una línea y seguí.

Objetivo
Tres cosas: (1) "Mi semana", un resumen amable y a demanda de lo que la usuaria registró; (2) recordatorios suaves que ella elige y controla; (3) una pantalla de ayuda siempre disponible y un aviso de apoyo muy cuidadoso para cuando los días vengan pesados. Esta etapa es sensible: ante cualquier duda, elegí la opción más discreta, más suave y menos intrusiva.

Reglas innegociables de esta etapa
- Mi semana es a demanda. Nunca hay avisos del tipo "tu resumen está listo", ni insignias, ni números en íconos.
- Los días sin registro se ven como un espacio neutro (una hojita), nunca como "faltó". No existe ningún texto, color ni ícono que marque ausencias.
- Prohibido: rachas, porcentajes visibles, totales, puntajes, gráficos de tendencia, comparaciones entre semanas, "mejor/peor semana".
- Lo difícil no se amplifica: el resumen abre con lo lindo. Lo que "pesó" o "solté" NO aparece en el resumen (solo en el detalle del día en "Mis días").
- NUNCA analizar el texto libre del diario (nada de palabras clave, sentimiento, NLP). Todo se calcula solo con los estados que ella eligió explícitamente.
- Sin diagnósticos ni etiquetas ("depresión", "ansiedad", "burnout"). El lenguaje siempre es "lo que anotaste", nunca "estás".
- Prohibido en cualquier texto: "no entraste", "te extrañamos", "hace X días", "no te olvides", "tenés que", "detectamos", "alerta".
- Todo lo nuevo es opcional y se puede desactivar.

Tareas (solo esto)

1. Mi semana (#/semana)
   - Botón discreto en #/jardin. Se puede ocultar con el interruptor "Mi semana" en Ajustes (activado por defecto).
   - Semana de lunes a domingo según fecha local del dispositivo. Ajuste "Días a mostrar": "Lunes a viernes" (por defecto) o "Toda la semana". Flechas para ver semanas anteriores; no se puede navegar al futuro. Semana sin registros: estado vacío cálido, sin mencionar la ausencia.
   - Tira de días: por cada día, el sapo con la expresión del último registro de estado de ese día (sprite reducido de la etapa 2) y su etiqueta de texto accesible ("Lunes: tranquila"). Sin registro: una hojita neutra con la etiqueta del día ("Martes"), sin ninguna marca de falta.
   - Sección "Lo lindo de la semana": hasta 3 respuestas de "Algo lindo de hoy", en sus propias palabras, sin editar, con el día. Las más recientes primero. Si no hay, la sección no aparece y no se dice nada.
   - Sección "Lo que cuidaste": solo los NOMBRES de las categorías de pausas que hizo esa semana (Voz, Cuerpo, Silencio, Respiración, Ánimo), sin cantidades. Si no hizo ninguna, la sección no aparece.
   - Frase de cierre rotativa de src/copy.js, cálida, sin ninguna referencia a cantidades ni a lo que falta.
   - Lógica pura en src/week (sin DOM): armar la semana, agrupar registros por día, seleccionar lo lindo. Ojo con cambios de mes y de año.

2. Patrones (opcional, apagado por defecto)
   - Ajuste "Mostrar cosas que noté" (desactivado). Si se activa, aparece en Mi semana una sección "Cosas que noté" con como máximo UNA observación a la vez.
   - Lógica pura en src/patterns. Solo mira día de la semana vs. estados de check-in. Umbrales conservadores en constantes comentadas: un día de la semana con al menos 5 registros y al menos el 70% en estados "cansada" o "tensa" o "triste" genera una observación suave; con "contenta" o "tranquila" genera una positiva. Si hay positiva y difícil a la vez, mostrar primero la positiva. Los porcentajes se calculan por dentro y NO se muestran.
   - Redacción siempre como "lo que anotaste", sin causalidad ni predicción. Ejemplo: "Parece que los jueves llegás más cansada. Es solo lo que fuiste anotando." Si es una observación difícil, ofrecer una acción concreta: "¿Querés ponerte una pausa ese día?" que lleva a #/recordatorios con ese día preseleccionado.
   - Botón "No mostrar más esta observación" (guardar ids descartados).

3. Recordatorios suaves (#/recordatorios, desde Ajustes y desde el patrón)
   - Restricción técnica: no hay servidor ni cuentas. Chequeá brevemente el estado actual de las APIs del navegador, pero NO implementes Web Push, ni nada que requiera backend, ni polling en segundo plano. Documentá en el README por qué (una PWA sin servidor no puede programar avisos locales de forma confiable).
   - Dos mecanismos:
     A) Aviso dentro de la app: si la app está abierta en el horario elegido, un banner suave y descartable (sin sonido salvo que los sonidos estén activados), una sola vez por momento y por día.
     B) Exportar al calendario del celular: generar un único archivo .ics descargable con los eventos activos, recurrentes y con alarma. Al abrirlo, el calendario del teléfono avisa aunque la app esté cerrada. Pantalla con pasos breves y claros para Android y para iPhone.
   - Hasta 3 momentos: "Antes de entrar", "Pausa de media jornada" y "Cierre del día". Cada uno con: activar, hora, días de la semana (por defecto lunes a viernes) y texto del evento editable (máx. 40 caracteres, validado; por defecto neutro: "Una pausa para mí"). Aclarar en pantalla que ese texto se va a ver en su calendario.
   - Todos apagados por defecto. Nada se activa solo.
   - Requisitos del .ics (RFC 5545): saltos de línea CRLF, plegado de líneas a 75 octetos, escape de caracteres especiales, UID estable y determinista por momento (para que reimportar actualice y no duplique), DTSTAMP, hora flotante sin TZID (para que siga el reloj del teléfono), RRULE:FREQ=WEEKLY;BYDAY=..., y VALARM con TRIGGER:PT0S.
   - Ajuste "Descansar de los avisos" (vacaciones, receso): silencia banners y sugerencias de apoyo sin borrar ninguna configuración.
   - Documentar en el README la ruta futura con Capacitor para notificaciones locales nativas. No implementarla.

4. Ayuda y contactos (#/ayuda, siempre disponible)
   - Acceso desde Ajustes y un enlace discreto al pie de Mi semana. Nunca condicionado a nada.
   - Texto cálido y breve: la app no es terapia ni reemplaza a un profesional; si estás pasando un momento difícil, hablar con alguien de confianza o con un profesional puede ayudar; si estás en peligro o pensás en hacerte daño, llamá ahora.
   - Recursos en src/resources.js, editable por alguien que no programa. Cada uno con nombre, qué es, teléfono, alcance y nota. Incluir exactamente estos, con un comentario "verificar antes de publicar" y la fecha de hoy:
     * Emergencias: 911.
     * Línea 135 (Centro de Asistencia al Suicida, Buenos Aires): gratuita desde CABA y Gran Buenos Aires. Desde el resto del país: (011) 5275-1135 y 0800 345 1435.
   - Cada teléfono con enlace tel: para llamar con un toque.
   - NO inventar otros teléfonos ni servicios. Dejar una sección "Recursos de mi zona" vacía, con un comentario en el archivo que explique cómo agregar los de su provincia y su obra social, después de verificarlos.
   - NO afirmar confidencialidad, anonimato, gratuidad fuera de lo indicado, ni horarios de atención.
   - Todo estático, funciona offline, no envía nada.

5. Aviso de apoyo (muy cuidadoso)
   - Lógica pura en src/support: devuelve si corresponde mostrar el aviso.
   - Usa SOLO los estados que ella eligió en check-ins y cierres. "Día difícil" = el último registro del día es "triste" o "tensa" ("cansada" NO cuenta: es común y no queremos alarmar).
   - Condición por defecto (constantes comentadas y fáciles de ajustar): al menos 6 días difíciles dentro de los últimos 10 días calendario, Y los últimos 3 días con registro son difíciles.
   - Cuando se cumple, al abrir #/jardin aparece una tarjeta suave, descartable, sin animación llamativa, sin colores de alarma. Texto de ejemplo: "Estuvieron pesados estos días. No tenés que poder sola. Si querés, hay gente que puede acompañarte." Botones de igual peso: "Ver opciones" (lleva a #/ayuda) y "Ahora no". Más un enlace "No mostrar más este aviso".
   - Enfriamiento: no volver a mostrarla antes de 21 días desde la última vez (fecha local guardada), aunque la condición siga cumpliéndose. "No mostrar más" la desactiva (Ajustes: "Sugerencias de apoyo", reactivable).
   - No mostrarla justo después de guardar un registro, ni durante una pausa o respiración. Respetar "Descansar de los avisos".
   - Prohibido en la tarjeta: preguntas, pedirle que evalúe cómo está, etiquetas, la palabra "suicidio" o "crisis", mensajes de alarma. Al guardar un estado difícil, la respuesta es la misma frase cálida de siempre.

6. Guardado
   - Subir la versión del esquema y escribir la migración desde la etapa 4 (con test). Guardar: ajustes de Mi semana, patrones y sus descartados, recordatorios, fecha del último aviso de apoyo, preferencia de sugerencias y "descansar de los avisos".
   - Incluir todo en exportar e importar. Validar el archivo importado: rechazar horas inválidas, días fuera de rango, textos demasiado largos o ids desconocidos, sin pisar nada si algo falla.
   - Todo acceso al almacenamiento dentro de try/catch, como antes.

7. Textos
   - Todos los textos nuevos en src/copy.js (voseo, cálidos, breves). Frases de cierre de la semana: al menos 8, para rotar.

8. Calidad y accesibilidad
   - Diseñar cada pantalla nueva con Hallmark según las reglas del proyecto y correr su revisión (audit/sloplint) sobre todas las pantallas. Informar qué marcó y qué corregiste. Si no se puede correr la parte con navegador, decirlo y correr las estáticas.
   - La tira de días es una lista real con etiquetas de texto (no depender del dibujo ni del color). La tarjeta de apoyo y el banner de recordatorio NO usan role="alert" (para no alarmar): usar una región con etiqueta, sin anunciar de forma invasiva.
   - Foco visible, teclado completo, botones de al menos 48px, contraste AA, ningún color hardcodeado.

Tests (Vitest)
- Semana: arranca en lunes, agrupa por día, cambios de mes y de año, no navega al futuro.
- Patrones: respeta umbrales, prioriza lo positivo, nunca devuelve más de una observación, respeta descartes.
- Aviso de apoyo: casos límite de la condición, "cansada" no cuenta, enfriamiento de 21 días, "No mostrar más", "Descansar de los avisos", nunca lee texto libre.
- Generación del .ics: CRLF, plegado a 75 octetos, escapes, BYDAY correcto, UID determinista, hora flotante, y que un parser de iCalendar (como dependencia de desarrollo) lo lea sin errores.
- Validación de recordatorios (horas, días, longitud del texto).
- Migración de la etapa 4 a esta e importación de archivos inválidos sin modificar los datos.

Criterios de aceptación
- Ninguna pantalla muestra racha, porcentaje, total, gráfico de tendencia ni mención a días de ausencia.
- El resumen abre con lo lindo y nunca muestra "lo que pesó" ni "lo que solté".
- Un archivo .ics real, importado en el calendario de un Android y de un iPhone, genera los avisos en los horarios correctos aunque la app esté cerrada.
- La pantalla de ayuda funciona offline, muestra solo los recursos verificados indicados y los teléfonos se pueden tocar para llamar.
- El aviso de apoyo aparece solo bajo la condición definida, una vez, y respeta enfriamiento, "Ahora no" y "No mostrar más".
- Todo lo nuevo se puede apagar desde Ajustes.
- Se ve y se usa bien a 360x640, con una sola mano.
- Exportar e importar funcionan de punta a punta con lo nuevo.
- Los tests pasan (npm test).
- Resumen final de 5 líneas máximo: qué hiciste, supuestos tomados, umbrales usados y reglas de Hallmark ignoradas (si hubo).

No hagas todavía: cuentas o sincronización, Web Push o cualquier servidor, análisis del texto libre, estadísticas o gráficos de tendencia, compartir el resumen, exportar informes para un profesional, notificaciones nativas, chat o IA dentro de la app.