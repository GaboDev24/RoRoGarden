var qa=Object.defineProperty;var Ba=(t,e,a)=>e in t?qa(t,e,{enumerable:!0,configurable:!0,writable:!0,value:a}):t[e]=a;var ut=(t,e,a)=>Ba(t,typeof e!="symbol"?e+"":e,a);(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))r(o);new MutationObserver(o=>{for(const i of o)if(i.type==="childList")for(const d of i.addedNodes)d.tagName==="LINK"&&d.rel==="modulepreload"&&r(d)}).observe(document,{childList:!0,subtree:!0});function a(o){const i={};return o.integrity&&(i.integrity=o.integrity),o.referrerPolicy&&(i.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?i.credentials="include":o.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function r(o){if(o.ep)return;o.ep=!0;const i=a(o);fetch(o.href,i)}})();const ce={tinta:"#2B3A42",aguaProfunda:"#3E5C7A",azulNiebla:"#A9C8E8",celesteAgua:"#BFE6EE",turquesa:"#8ED1CF",menta:"#D9F2E6",salvia:"#A8D5BA",sapo:"#8CC9A1",musgo:"#6FA98A",bosque:"#3F6F5E",crema:"#F6EFC9",acento:"#E8A987",transparent:"transparent"},Da={".":"transparent",T:"tinta","#":"tinta",P:"aguaProfunda",N:"azulNiebla",A:"celesteAgua",U:"turquesa",M:"menta",V:"salvia",S:"sapo",G:"musgo",B:"bosque",C:"crema",H:"acento"},n={app:{back:"← Volver",skip:"Saltar",save:"Guardar",next:"Siguiente",cancel:"Cancelar",delete:"Borrar",edit:"Editar"},home:{loading:"Ya viene...",peaceNote:"Solo vos, sin presiones"},jardin:{title:"Tu Jardín",pausaBtn:"Una pausa",checkinBtn:"¿Cómo llegás hoy?",diarioBtn:"Cerrar el día",historialBtn:"Mis días",semanaBtn:"Semana",decorarBtn:"Acomodar",coleccionBtn:"Colección",frogNamePrompt:"¿Le querés poner un nombre a tu sapo?",frogNamePlaceholder:"Hasta 20 letras...",frogNameSkip:"Dejarlo sin nombre",frogNameSave:"Guardarlo",frogTap:["¡Hola!","Un salto chiquito.","¿Buen día?","¡Croac!"],giftTitle:"Alguien pasó a visitarte.",giftDismiss:"¡Qué lindo!",gridDoneBtn:"Listo",gridHint:"Tocá un casillero para colocar o mover."},coleccion:{title:"Mi colección",emptyHint:"Acá van a aparecer los visitantes y objetos que conseguís.",back:"← Volver",placedBadge:"En el jardín"},moods:{contenta:{id:"contenta",label:"Contenta",description:"Con energía linda y el corazón liviano"},tranquila:{id:"tranquila",label:"Tranquila",description:"En paz, con calma en el cuerpo"},cansada:{id:"cansada",label:"Cansada",description:"El cuerpo pide aflojar y descansar"},tensa:{id:"tensa",label:"Tensa",description:"Con la cabeza a mil o el cuello cargado"},triste:{id:"triste",label:"Triste",description:"Con ganas de un abrazo y silencio"}},checkin:{title:"¿Cómo llegás hoy?",subtitle:"Elegí el sapito que mejor te acompañe ahora.",promptText:"¿Querés dejar algo escrito? (opcional)",placeholder:"Escribí lo que sientas, o dejalo vacío...",savedWarmth:"Gracias por registrar cómo estás. Tu jardín te acompaña.",skippedWarmth:"No pasa nada, está perfecto pasar de largo."},diario:{title:"Cerrar el día",stepMoodTitle:"¿Cómo terminás este día?",stepMoodSubtitle:"No hace falta que hoy tengas ganas de mucho.",step1Title:"Algo lindo de hoy",step1Subtitle:"Un detalle chiquito, una risa, un rayito de sol.",step1Placeholder:"Lo que se te venga a la mente...",step2Title:"Algo que me pesó",step2Subtitle:"Eso que te dejó cansada o te dio vueltas.",step2Placeholder:"Dejalo acá un momento...",step3Title:"Algo que suelto",step3Subtitle:"Lo que ya pasó y hoy no te tenés que llevar a la cama.",step3Placeholder:"Lo suelto para descansar...",finishBtn:"Cerrar la noche",ritualTitle:"El día ya terminó",ritualMessage:"Dejalo acá, el jardín lo guarda.",ritualGoodnight:"Que descanses lindo."},historial:{title:"Mis días",subtitle:"Tus registros guardados, a tu ritmo.",empty:"Todavía no hay nada acá. Cuando quieras, este espacio te espera.",checkinBadge:"Check-in",diarioBadge:"Diario",confirmDelete:"¿Querés borrar este registro? Esta acción no se puede deshacer.",editNoteTitle:"Editar anotación"},pausa:{title:"Una pausa",subtitle:"Elegí algo chiquito para este momento.",otherIdeasBtn:"Otras ideas",respirarCardTitle:"Respirar un rato",respirarCardDesc:"Guía visual con ritmo calmo para vos o con la sala.",respirarBtn:"Ir a respirar",nowNotBtn:"Ahora no",startBtn:"Empezar",filterAll:"Todas"},desafio:{stepLabel:"Paso",stepOf:"de",nextBtn:"Siguiente paso",finishBtn:"Terminar",pauseBtn:"Pausar",resumeBtn:"Reanudar",quitBtn:"Terminar antes",quitWarmth:"Está perfecto. Hasta acá estuvo bien.",doneTitle:"Pausa completada",doneMessage:"Hiciste un ratito para vos. Tu cuerpo y tu voz lo agradecen.",backToGarden:"Volver al jardín"},respirar:{title:"Respirar",subtitle:"Seguí el ritmo del sapito para aflojar.",patternLabel:"Elegí el ritmo:",durationLabel:"Duración:",minute1:"1 minuto",minute2:"2 minutos",minute3:"3 minutos",salaModeTitle:"Con mi sala",salaModeDesc:"Visualización más simple para mostrar con el celu a los chicos.",warning:"Si sentís mareo o incomodidad, volvé a respirar normal.",startBtn:"Empezar a respirar",pauseBtn:"Pausar",resumeBtn:"Reanudar",quitBtn:"Terminar antes",quitWarmth:"Muy bien. Respirar a tu ritmo siempre es lo mejor.",doneTitle:"Hermoso momento",doneMessage:"Volvé a tu ritmo cuando quieras. El jardín te acompaña.",doneMessageSala:"¡Qué lindo respiramos juntos! Ya estamos listos.",backToGarden:"Volver al jardín"},semana:{title:"Mi semana",niceTitle:"Lo lindo de la semana",caredTitle:"Lo que cuidaste",caredSubtitle:"Pausas que te regalaste esta semana:",patternsTitle:"Cosas que noté",dismissPatternBtn:"No mostrar más esta observación",helpLink:"Ayuda y contactos de escucha",closingQuotes:["Cada día tiene su propio ritmo. Gracias por acompañarte.","Un ratito a la vez es más que suficiente.","El jardín te espera siempre con la misma calma.","Hacer una pausa también es parte de avanzar.","A tu tiempo, a tu manera.","Lo que pudiste hoy estuvo bien.","Respirar y soltar un ratito cambia el día.","Tu bienestar vale la pena."]},recordatorios:{title:"Recordatorios suaves",subtitle:"Elegí momentos del día para aflojar. Vos tenés el control total.",backToSettings:"← Volver",vacationLabel:"Descansar de los avisos",vacationDesc:"Silencia los avisos en vacaciones o recesos sin borrar tu configuración.",exportIcsBtn:"Descargar para mi calendario (.ics)",exportIcsDesc:"Agrega estos momentos al calendario de tu celular para que te avise con la app cerrada.",instructionsTitle:"Cómo agregarlo al calendario",instructionsAndroid:'En Android: abrí el archivo .ics descargado con Google Calendar u otra app de calendario y tocá "Agregar todo".',instructionsIos:'En iPhone: tocá el archivo .ics descargado y elegí "Agregar todos los eventos" a tu Calendario de Apple.',timeLabel:"Hora:",daysLabel:"Días:",textLabel:"Mensaje en tu calendario (máx. 40 letras):",saveSuccess:"Configuración guardada."},ayuda:{title:"Ayuda y contactos",subtitle:"RoRoGarden es solo un rincón de bienestar y no reemplaza a un profesional de la salud.",talkWarmth:"Si estás pasando un momento difícil, hablar con alguien de confianza o con un profesional puede ayudar mucho.",emergencyNote:"Si estás en peligro o necesitás ayuda urgente, podés comunicarte ahora con estas líneas gratuitas y oficiales:",localResourcesTitle:"Recursos de mi zona",localResourcesEmpty:"Por ahora no hay recursos locales agregados. Podés consultar en tu centro de salud más cercano."},apoyo:{cardTitle:"Un momento para vos",cardMessage:"Estuvieron pesados estos días. No tenés que poder sola. Si querés, hay gente que puede acompañarte.",cardHelpBtn:"Ver opciones",cardDismissBtn:"Ahora no",cardNeverBtn:"No mostrar más este aviso"},ajustes:{title:"Ajustes y Respaldo",privacyNote:"Tus datos viven solo en este celular. Nadie más los ve.",audioTitle:"Sonido y vibración",soundLabel:"Campana suave al cambiar de fase",vibrationLabel:"Vibración suave (si el celular la soporta)",gardenTitle:"Jardín",gardenAnimationsLabel:"Animaciones del jardín",hemisphereLabel:"Hemisferio",hemisphereSur:"Sur (Argentina)",hemisphereNorte:"Norte",handModeLabel:"Uso con una sola mano (botones del jardín):",handModeDesc:"Agrupa los botones principales para que llegues cómodo con el pulgar sin forzar la mano.",handModeRight:"Mano derecha (botones hacia la derecha)",handModeLeft:"Mano izquierda (botones hacia la izquierda)",handModeCenter:"Centrado (botones en el centro)",weekTitle:"Mi semana y recordatorios",showWeekLabel:'Mostrar "Mi semana" en el jardín',weekDaysLabel:"Días a mostrar en Mi semana:",weekDaysWork:"Lunes a viernes",weekDaysAll:"Toda la semana",showPatternsLabel:'Mostrar "Cosas que noté" (observaciones suaves)',remindersBtn:"Configurar recordatorios y calendario",vacationLabel:"Descansar de los avisos (receso/vacaciones)",supportSuggestionsLabel:"Sugerencias de apoyo cuando los días vengan pesados",helpBtn:"Ayuda y contactos de escucha",exportTitle:"Exportar mis datos",exportDesc:"Descarga un archivo con todos tus registros para guardarlos de respaldo.",exportBtn:"Descargar respaldo (JSON)",importTitle:"Importar respaldo",importDesc:"Si cambiaste de celular o querés recuperar un archivo anterior.",importBtn:"Seleccionar archivo JSON",importConfirm:"Se importarán los registros encontrados. ¿Deseás continuar?",importSuccess:"Se importaron los registros correctamente.",importError:"El archivo seleccionado no tiene un formato válido de RoRoGarden.",resetGardenTitle:"Reiniciar solo el jardín",resetGardenDesc:"Elimina las decoraciones, la colección y el nombre del sapo. No borra los registros de bienestar.",resetGardenBtn:"Reiniciar jardín",resetGardenConfirm1:"¿Seguro que querés reiniciar el jardín? Se pierden los objetos y las decoraciones.",resetGardenConfirm2:"Última confirmación. ¿Continuar?",resetGardenSuccess:"El jardín se reinició.",clearTitle:"Borrar todo",clearDesc:"Elimina permanentemente todos los registros guardados en este dispositivo.",clearBtn:"Borrar todos mis datos",clearFirstConfirm:"¿Seguro que querés borrar todos tus registros? No se podrán recuperar.",clearSecondConfirm:"Última confirmación: se borrará todo definitivamente. ¿Continuar?",clearSuccess:"Se han eliminado todos los datos locales.",storageWarning:"Atención: el almacenamiento local no está disponible o está bloqueado en este navegador. Tus datos no podrán guardarse entre sesiones.",welcomeBtn:"Ver la bienvenida",installBtn:"Instalar la app",aboutBtn:"Acerca de y privacidad"},bienvenida:{step1Title:"Hola, bienvenida 🐸",step1Text:"RoRoGarden es tu rincón personal para aflojar un ratito entre clase y clase. Un jardín tranquilo solo para vos, sin presiones ni obligaciones.",step2Title:"Tus datos son tuyos",step2Text:"Tus datos viven solo en este celular. La app no los envía a ningún lado ni los comparte con nadie.",step2Note:"El servicio que aloja la página puede registrar que alguien la visitó, como cualquier sitio web, pero sin ver lo que escribís adentro.",step3Title:"Todo es opcional",step3Text:"Podés usar lo que quieras y saltear lo que no. Esta app no es terapia ni reemplaza a un profesional de la salud: si necesitás ayuda, siempre podés buscar a alguien de confianza.",step3NameLabel:"¿Le querés poner un nombre a tu sapo? (opcional)",step3NamePlaceholder:"Hasta 20 letras...",step3Disclaimer:"RoRoGarden no es terapia ni consejo médico. Ante cualquier dificultad, hablar con un profesional es la mejor opción.",skipBtn:"Saltar",nextBtn:"Siguiente →",enterBtn:"Entrar al jardín",finishBtn:"Ir al jardín"},instalar:{title:"Instalá la app",whyText:"Cuando instalás RoRoGarden, funciona como una app del celular: se abre a pantalla completa, carga más rápido y tus datos quedan mejor guardados incluso sin conexión.",androidTitle:"En Android (Chrome)",androidSteps:["Abrí esta página en Chrome.","Tocá los tres puntos arriba a la derecha.",'Elegí "Agregar a pantalla de inicio".','Confirmá con "Agregar".'],iosTitle:"En iPhone (Safari)",iosSteps:["Abrí esta página en Safari.","Tocá el ícono de Compartir (el cuadrado con la flecha).",'Elegí "Agregar a pantalla de inicio".','Confirmá con "Agregar".'],installBtnLabel:"Instalar",alreadyInstalled:"✓ Ya está instalada. Podés cerrar esta pantalla.",back:"← Volver"},acerca:{title:"Acerca de y privacidad",versionLabel:"Versión",privacyTitle:"Qué se guarda y dónde",privacyText:"RoRoGarden guarda tus check-ins, diario, decoraciones y preferencias solo en este dispositivo, en el almacenamiento del navegador (localStorage). La app no tiene servidor propio ni envía tus registros a ningún lado.",hostingNote:"El servicio que aloja la página (como GitHub Pages o Cloudflare) puede registrar las visitas al sitio como cualquier sitio web, pero sin recibir el contenido de tus registros.",notTherapy:"Esta app no es terapia ni consejo médico. Ante cualquier dificultad, hablar con un profesional de la salud es siempre la mejor opción.",creditsTitle:"Créditos",creditsText:"Arte y sprites: pixel art original creado para RoRoGarden.",fontCredit:"Tipografía: Press Start 2P, diseñada por CodeMan38, bajo licencia SIL Open Font License 1.1.",licenseNote:"El código fuente no tiene licencia asignada todavía. Ver NOTAS.md.",back:"← Volver"},error:{title:"Algo no salió bien",text:"Tus datos están a salvo. Podés volver al jardín o recargar la página.",gardenBtn:"Volver al jardín",reloadBtn:"Recargar"},updateReady:{text:"Actualizá cuando quieras.",updateBtn:"Actualizar"},storageFullWarning:"El almacenamiento de este dispositivo está lleno o no disponible. Te recomendamos exportar una copia de tus datos desde Ajustes."},ha={frog:{viewBox:"0 0 576 512",path:"M368 32c41.7 0 75.9 31.8 79.7 72.5l85.6 26.3c25.4 7.8 42.8 31.3 42.8 57.9 0 21.8-11.7 41.9-30.7 52.7l-144.5 82.1 92.5 92.5 50.7 0c17.7 0 32 14.3 32 32s-14.3 32-32 32l-64 0c-8.5 0-16.6-3.4-22.6-9.4L346.9 360.2c11.7-36 3.2-77.1-25.4-105.7-40.6-40.6-106.3-40.6-146.9-.1L101 324.4c-6.4 6.1-6.7 16.2-.6 22.6s16.2 6.6 22.6 .6l73.8-70.2 .1-.1 .1-.1c3.5-3.5 7.3-6.6 11.3-9.2 27.9-18.5 65.9-15.4 90.5 9.2 24.7 24.7 27.7 62.9 9 90.9-2.6 3.8-5.6 7.5-9 10.9L261.8 416 352 416c17.7 0 32 14.3 32 32s-14.3 32-32 32L64 480C28.7 480 0 451.3 0 416 0 249.6 127 112.9 289.3 97.5 296.2 60.2 328.8 32 368 32zm0 104a24 24 0 1 0 0-48 24 24 0 1 0 0 48z"},heart:{viewBox:"0 0 512 512",path:"M241 87.1l15 20.7 15-20.7C296 52.5 336.2 32 378.9 32 452.4 32 512 91.6 512 165.1l0 2.6c0 112.2-139.9 242.5-212.9 298.2-12.4 9.4-27.6 14.1-43.1 14.1s-30.8-4.6-43.1-14.1C139.9 410.2 0 279.9 0 167.7l0-2.6C0 91.6 59.6 32 133.1 32 175.8 32 216 52.5 241 87.1z"},moon:{viewBox:"0 0 512 512",path:"M256 0C114.6 0 0 114.6 0 256S114.6 512 256 512c68.8 0 131.3-27.2 177.3-71.4 7.3-7 9.4-17.9 5.3-27.1s-13.7-14.9-23.8-14.1c-4.9 .4-9.8 .6-14.8 .6-101.6 0-184-82.4-184-184 0-72.1 41.5-134.6 102.1-164.8 9.1-4.5 14.3-14.3 13.1-24.4S322.6 8.5 312.7 6.3C294.4 2.2 275.4 0 256 0z"},bookOpen:{viewBox:"0 0 512 512",path:"M256 141.3l0 309.3 .5-.2C311.1 427.7 369.7 416 428.8 416l19.2 0 0-320-19.2 0c-42.2 0-84.1 8.4-123.1 24.6-16.8 7-33.4 13.9-49.7 20.7zM230.9 61.5L256 72 281.1 61.5C327.9 42 378.1 32 428.8 32L464 32c26.5 0 48 21.5 48 48l0 352c0 26.5-21.5 48-48 48l-35.2 0c-50.7 0-100.9 10-147.7 29.5l-12.8 5.3c-7.9 3.3-16.7 3.3-24.6 0l-12.8-5.3C184.1 490 133.9 480 83.2 480L48 480c-26.5 0-48-21.5-48-48L0 80C0 53.5 21.5 32 48 32l35.2 0c50.7 0 100.9 10 147.7 29.5z"},gear:{viewBox:"0 0 512 512",path:"M195.1 9.5C198.1-5.3 211.2-16 226.4-16l59.8 0c15.2 0 28.3 10.7 31.3 25.5L332 79.5c14.1 6 27.3 13.7 39.3 22.8l67.8-22.5c14.4-4.8 30.2 1.2 37.8 14.4l29.9 51.8c7.6 13.2 4.9 29.8-6.5 39.9L447 233.3c.9 7.4 1.3 15 1.3 22.7s-.5 15.3-1.3 22.7l53.4 47.5c11.4 10.1 14 26.8 6.5 39.9l-29.9 51.8c-7.6 13.1-23.4 19.2-37.8 14.4l-67.8-22.5c-12.1 9.1-25.3 16.7-39.3 22.8l-14.4 69.9c-3.1 14.9-16.2 25.5-31.3 25.5l-59.8 0c-15.2 0-28.3-10.7-31.3-25.5l-14.4-69.9c-14.1-6-27.2-13.7-39.3-22.8L73.5 432.3c-14.4 4.8-30.2-1.2-37.8-14.4L5.8 366.1c-7.6-13.2-4.9-29.8 6.5-39.9l53.4-47.5c-.9-7.4-1.3-15-1.3-22.7s.5-15.3 1.3-22.7L12.3 185.8c-11.4-10.1-14-26.8-6.5-39.9L35.7 94.1c7.6-13.2 23.4-19.2 37.8-14.4l67.8 22.5c12.1-9.1 25.3-16.7 39.3-22.8L195.1 9.5zM256.3 336a80 80 0 1 0 -.6-160 80 80 0 1 0 .6 160z"},pen:{viewBox:"0 0 512 512",path:"M471.6 21.7c-21.9-21.9-57.3-21.9-79.2 0L368 46.1 465.9 144 490.3 119.6c21.9-21.9 21.9-57.3 0-79.2L471.6 21.7zm-299.2 220c-6.1 6.1-10.8 13.6-13.5 21.9l-29.6 88.8c-2.9 8.6-.6 18.1 5.8 24.6s15.9 8.7 24.6 5.8l88.8-29.6c8.2-2.7 15.7-7.4 21.9-13.5L432 177.9 334.1 80 172.4 241.7zM96 64C43 64 0 107 0 160L0 416c0 53 43 96 96 96l256 0c53 0 96-43 96-96l0-96c0-17.7-14.3-32-32-32s-32 14.3-32 32l0 96c0 17.7-14.3 32-32 32L96 448c-17.7 0-32-14.3-32-32l0-256c0-17.7 14.3-32 32-32l96 0c17.7 0 32-14.3 32-32s-14.3-32-32-32L96 64z"},trash:{viewBox:"0 0 448 512",path:"M136.7 5.9C141.1-7.2 153.3-16 167.1-16l113.9 0c13.8 0 26 8.8 30.4 21.9L320 32 416 32c17.7 0 32 14.3 32 32s-14.3 32-32 32L32 96C14.3 96 0 81.7 0 64S14.3 32 32 32l96 0 8.7-26.1zM32 144l384 0 0 304c0 35.3-28.7 64-64 64L96 512c-35.3 0-64-28.7-64-64l0-304zm88 64c-13.3 0-24 10.7-24 24l0 192c0 13.3 10.7 24 24 24s24-10.7 24-24l0-192c0-13.3-10.7-24-24-24zm104 0c-13.3 0-24 10.7-24 24l0 192c0 13.3 10.7 24 24 24s24-10.7 24-24l0-192c0-13.3-10.7-24-24-24zm104 0c-13.3 0-24 10.7-24 24l0 192c0 13.3 10.7 24 24 24s24-10.7 24-24l0-192c0-13.3-10.7-24-24-24z"},lock:{viewBox:"0 0 384 512",path:"M128 96l0 64 128 0 0-64c0-35.3-28.7-64-64-64s-64 28.7-64 64zM64 160l0-64C64 25.3 121.3-32 192-32S320 25.3 320 96l0 64c35.3 0 64 28.7 64 64l0 224c0 35.3-28.7 64-64 64L64 512c-35.3 0-64-28.7-64-64L0 224c0-35.3 28.7-64 64-64z"},flask:{viewBox:"0 0 448 512",path:"M288 0L128 0C110.3 0 96 14.3 96 32s14.3 32 32 32L128 215.5 7.5 426.3C2.6 435 0 444.7 0 454.7 0 486.4 25.6 512 57.3 512l333.4 0c31.6 0 57.3-25.6 57.3-57.3 0-10-2.6-19.8-7.5-28.4L320 215.5 320 64c17.7 0 32-14.3 32-32S337.7 0 320 0L288 0zM192 215.5l0-151.5 64 0 0 151.5c0 11.1 2.9 22.1 8.4 31.8l41.6 72.7-164 0 41.6-72.7c5.5-9.7 8.4-20.6 8.4-31.8z"},wind:{viewBox:"0 0 512 512",path:"M288 32c0 17.7 14.3 32 32 32l40 0c13.3 0 24 10.7 24 24s-10.7 24-24 24L32 112c-17.7 0-32 14.3-32 32s14.3 32 32 32l328 0c48.6 0 88-39.4 88-88S408.6 0 360 0L320 0c-17.7 0-32 14.3-32 32zm64 352c0 17.7 14.3 32 32 32l32 0c53 0 96-43 96-96s-43-96-96-96L32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l384 0c17.7 0 32 14.3 32 32s-14.3 32-32 32l-32 0c-17.7 0-32 14.3-32 32zM128 512l40 0c48.6 0 88-39.4 88-88s-39.4-88-88-88L32 336c-17.7 0-32 14.3-32 32s14.3 32 32 32l136 0c13.3 0 24 10.7 24 24s-10.7 24-24 24l-40 0c-17.7 0-32 14.3-32 32s14.3 32 32 32z"},rotate:{viewBox:"0 0 512 512",path:"M480.1 192l7.9 0c13.3 0 24-10.7 24-24l0-144c0-9.7-5.8-18.5-14.8-22.2S477.9 .2 471 7L419.3 58.8C375 22.1 318 0 256 0 127 0 20.3 95.4 2.6 219.5 .1 237 12.2 253.2 29.7 255.7s33.7-9.7 36.2-27.1C79.2 135.5 159.3 64 256 64 300.4 64 341.2 79 373.7 104.3L327 151c-6.9 6.9-8.9 17.2-5.2 26.2S334.3 192 344 192l136.1 0zm29.4 100.5c2.5-17.5-9.7-33.7-27.1-36.2s-33.7 9.7-36.2 27.1c-13.3 93-93.4 164.5-190.1 164.5-44.4 0-85.2-15-117.7-40.3L185 361c6.9-6.9 8.9-17.2 5.2-26.2S177.7 320 168 320L24 320c-13.3 0-24 10.7-24 24L0 488c0 9.7 5.8 18.5 14.8 22.2S34.1 511.8 41 505l51.8-51.8C137 489.9 194 512 256 512 385 512 491.7 416.6 509.4 292.5z"},play:{viewBox:"0 0 448 512",path:"M91.2 36.9c-12.4-6.8-27.4-6.5-39.6 .7S32 57.9 32 72l0 368c0 14.1 7.5 27.2 19.6 34.4s27.2 7.5 39.6 .7l336-184c12.8-7 20.8-20.5 20.8-35.1s-8-28.1-20.8-35.1l-336-184z"},pause:{viewBox:"0 0 384 512",path:"M48 32C21.5 32 0 53.5 0 80L0 432c0 26.5 21.5 48 48 48l64 0c26.5 0 48-21.5 48-48l0-352c0-26.5-21.5-48-48-48L48 32zm224 0c-26.5 0-48 21.5-48 48l0 352c0 26.5 21.5 48 48 48l64 0c26.5 0 48-21.5 48-48l0-352c0-26.5-21.5-48-48-48l-64 0z"},stop:{viewBox:"0 0 448 512",path:"M64 32l320 0c35.3 0 64 28.7 64 64l0 320c0 35.3-28.7 64-64 64L64 480c-35.3 0-64-28.7-64-64L0 96C0 60.7 28.7 32 64 32z"},bell:{viewBox:"0 0 448 512",path:"M224 0c-17.7 0-32 14.3-32 32l0 3.2C119 50 64 114.6 64 192l0 21.7c0 48.1-16.4 94.8-46.4 132.4L7.8 358.3C2.7 364.6 0 372.4 0 380.5 0 400.1 15.9 416 35.5 416l376.9 0c19.6 0 35.5-15.9 35.5-35.5 0-8.1-2.7-15.9-7.8-22.2l-9.8-12.2C400.4 308.5 384 261.8 384 213.7l0-21.7c0-77.4-55-142-128-156.8l0-3.2c0-17.7-14.3-32-32-32zM162 464c7.1 27.6 32.2 48 62 48s54.9-20.4 62-48l-124 0z"},child:{viewBox:"0 0 320 512",path:"M96 64A64 64 0 1 1 224 64 64 64 0 1 1 96 64zm48 320l0 96c0 17.7-14.3 32-32 32s-32-14.3-32-32L80 287.8 59.1 321c-9.4 15-29.2 19.4-44.1 10S-4.5 301.9 4.9 287l39.9-63.3C69.7 184 113.2 160 160 160s90.3 24 115.2 63.6L315.1 287c9.4 15 4.9 34.7-10 44.1s-34.7 4.9-44.1-10L240 287.8 240 480c0 17.7-14.3 32-32 32s-32-14.3-32-32l0-96-32 0z"},spa:{viewBox:"0 0 576 512",path:"M169.7 227.5c34.3 18.7 64.5 44.1 88.8 74.5 11.1 13.9 21 28.9 29.4 44.8 8.5-15.9 18.3-30.8 29.4-44.8 24.3-30.5 54.5-55.9 88.8-74.5 41.7-22.7 89.4-35.5 139.7-35.5l9.9 0c11.1 0 20.1 9 20.1 20.1 0 148-119.9 267.9-267.9 267.9l-40.2 0C119.9 480 0 360.1 0 212.1 0 201 9 192 20.1 192l9.9 0c50.4 0 98.1 12.8 139.7 35.5zM303.9 38c16.9 15.9 61.4 63.4 89 142.3-40.1 20.2-75.8 48.2-104.9 82.1-29.2-33.9-64.8-61.8-104.9-82.1 27.6-78.9 72.2-126.4 89-142.3 4.3-4.1 10-6 15.9-6s11.6 2 15.9 6z"}};function te(t,e={}){const a=ha[t],r=document.createElementNS("http://www.w3.org/2000/svg","svg"),o=e.size??"1em";r.setAttribute("viewBox",a.viewBox),r.setAttribute("width",typeof o=="number"?`${o}px`:o),r.setAttribute("height",typeof o=="number"?`${o}px`:o),r.setAttribute("fill","currentColor"),e.className?r.setAttribute("class",`fa-icon ${e.className}`):r.setAttribute("class","fa-icon"),e.ariaLabel?(r.setAttribute("role","img"),r.setAttribute("aria-label",e.ariaLabel)):r.setAttribute("aria-hidden","true");const i=document.createElementNS("http://www.w3.org/2000/svg","path");return i.setAttribute("d",a.path),r.appendChild(i),r}function Ia(t,e={}){const a=ha[t],r=e.size??"1em",o=typeof r=="number"?`${r}px`:r,i=e.className?`fa-icon ${e.className}`:"fa-icon",d=e.ariaLabel?`role="img" aria-label="${e.ariaLabel}"`:'aria-hidden="true"';return`<svg xmlns="http://www.w3.org/2000/svg" viewBox="${a.viewBox}" width="${o}" height="${o}" fill="currentColor" class="${i}" ${d}><path d="${a.path}"/></svg>`}const Pa=[".......TTTTTT.......",".....TTSSSSSSTT.....","....TSSSSSSSSSST....","...TSSSSSSSSSSSST...","..TSTCCTSSSSTCCTST..","..TSCTTCSSSSCTTCST..",".TSSCTTCSSSSCTTCSST.",".TSSTCCTSSSSTCCTSST.",".TSSHHSSSSSSSSHHSST.",".TSSSSSSSTSSTSSSSST.",".TSSSSSSSTTSSSSSSST.",".TSSGSSMMMMMMSSGSST.",".TSSSMMMMMMMMMMSSST.","TSSSSMMMMMMMMMMSSSST","TSGSSMMMMMMMMMMSSGST",".TSSSTTMMMMMMTTSSST.","..TTSSSTSSSSTSSSTT..","...TTTT.TTTT.TTTT..."],Va=[".......TTTTTT.......",".....TTSSSSSSTT.....","....TSSSSSSSSSST....","...TSSSSSSSSSSSST...","..TSSSSSSSSSSSSSST..","..TSSTTSSSSSSTTSST..",".TSSTSSTSSSSTSSTSST.",".TSSSSSSSSSSSSSSSST.",".TSSHHSSSSSSSSHHSST.",".TSSSSSSSTSSTSSSSST.",".TSSSSSSSTTSSSSSSST.",".TSSGSSMMMMMMSSGSST.",".TSSSMMMMMMMMMMSSST.","TSSSSMMMMMMMMMMSSSST","TSGSSMMMMMMMMMMSSGST",".TSSSTTMMMMMMTTSSST.","..TTSSSTSSSSTSSSTT..","...TTTT.TTTT.TTTT..."],va={id:"frog-idle",frames:[Pa,Va],frameMs:1200},_a={id:"frog-sleeping",frames:[["......TTTTTTTT......","....TTSSSSSSSSTT....","...TSSSSSSSSSSSST...","..TSSSSSSSSSSSSSST..",".TSSTTTSSSSSSTTTSST.",".TSHHSSSSSSSSSSHHST.",".TSSSSSSSTTSSSSSSST.",".TSSGSSSSSSSSSSGSST.","..TSSSSSSSSSSSSSST..","...TSSSSSSSSSSSST...","....TTSSSSSSSSTT....","......TTTTTTTT......"]]},ga={id:"lilypad",frames:[["........TTTTTTTTTTTT........",".....TTTSSSSSSSSSSSSSTT.....","...TTSSSSVVVVVSSSSSSSSSTT...","..TSSSSVVVVSSSSSSSSSSSSSST..",".TSSSSSVVSSSSSSSSSSSSSSSSST.","TSSSSSSSSSSSSSSSSSTTTTT.....","TSSGGGGGGGGGGGGSTT..........","TSSSSSSSSSSSSSSSSSTTTTT.....",".TSSSSSSSSGSSSSSSSSSSSSSSST.","..TTSSSSSSSGSSSSSSSSSSSSSTT.","....TTTBBBBBBBBBBBBBBTTT....",".......TTTTTTTTTTTTTT......."]]},Oa=["........TTTTTT..........","......TTCCCCTTTT.....H..","....TTCCCCTT............","...TCCCCCT..............","...TCCCCT..........H....","..TCCCCT................","..TCHCCT................",".TCCCCT.................",".TCHCCT.......H.........",".TCHCCT......HHH........",".TCCCCT.......H.........",".TCCCCT.................",".THCCCT.................","..TCCCCT................","..TCCCCT..........H.....","...TCCCCT........HHH....","...TCCCCCT........H.....","....TTCCCCTT............","......TTCCCCTTTT........","........TTTTTT.........."],$a=["........TTTTTT..........","......TTCCCCTTTT.....H..","....TTCCCCTT............","...TCCCCCT.........H....","...TCCCCT.........HHH...","..TCCCCT...........H....","..TCHCCT................",".TCCCCT.................",".TCHCCT.................",".TCHCCT.......H.........",".TCCCCT.................",".TCCCCT.................",".THCCCT.................","..TCCCCT................","..TCCCCT................","...TCCCCT.........H.....","...TCCCCCT..............","....TTCCCCTT............","......TTCCCCTTTT........","........TTTTTT.........."],ba={id:"moon-crescent",frames:[Oa,$a],frameMs:900},Wa={id:"frog-contenta",frames:[["................................","................................","................................","...H.......TTTTTTTTTT.......H...","..HHH....TTSSGSSSSGSSTT....HHH..","...H...TTSGSSSSSSSSSSGSTT...H...","......TSSSSSSSSSSSSSSSSSST......",".....TSSSSSSSSSSSSSSSSSSSST.....","....TSSSTTTTSSSSSSSSTTTTSSST....","....TSSTCCCCTSSSSSSTCCCCTSST....","...TSSSTCCTCTSSSSSSTCCTCTSSST...","...TSSSTCTTCTSSSSSSTCTTCTSSST...","..TSSSSTCCCCTSSSSSSTCCCCTSSSST..","..TSSSSSTTTTSSSSSSSSTTTTSSSSST..","..TSSSSSSSSSSSSSSSSSSSSSSSSSST..","..TSSSHHHSSSSSSSSSSSSSSHHHSSST..","..TSSSSSSSSSTTTTTTTTSSSSSSSSST..","..TSSSSSSSSSSTHHHHTSSSSSSSSSST..","..TSGSSSSSSSSSTTTTSSSSSSSSSGST..","...TSSSSSSSSMMMMMMMMSSSSSSSST...","...TSSSSSSMMMMMMMMMMMMSSSSSST...","....TGSSSMMMMMMMMMMMMMMSSSGT....","....TSSSSMMMMMMMMMMMMMMSSSST....",".....TSSSMMMMMMMMMMMMMMSSST.....","......TSSMMMMMMMMMMMMMMSST......",".....TSSSSMMMMMMMMMMMMSSST......","....TSSSSSSSMMMMMMMMSSSSSST.....","....TSSSSSSSSTTTTTSSSSSSSST.....",".....TGSSSSGT.....TSGSSSST......","......TTTTTT.......TTTTTT.......","................................","................................"]]},ta={id:"frog-tranquila",frames:[["................................","................................","................................","...........TTTTTTTTTT...........",".........TTSSGSSSSGSSTT.........",".......TTSGSSSSSSSSSSGSTT.......","......TSSSSSSSSSSSSSSSSSST......",".....TSSSSSSSSSSSSSSSSSSSST.....","....TSSSSSSSSSSSSSSSSSSSSSST....","....TSSSSSSSSSSSSSSSSSSSSSST....","...TSSSSSSSSSSSSSSSSSSSSSSSST...","...TSSSTSSSSTSSSSSSTSSSSTSSST...","..TSSSSSTTTTSSSSSSSSTTTTSSSSST..","..TSSSSSSSSSSSSSSSSSSSSSSSSSST..","..TSSSSSSSSSSSSSSSSSSSSSSSSSST..","..TSSSHHHSSSSSSSSSSSSSSHHHSSST..","..TSSSSSSSSSSTSSSSTSSSSSSSSSST..","..TSSSSSSSSSSSTTTTSSSSSSSSSSST..","..TSGSSSSSSSSSSSSSSSSSSSSSSGST..","...TSSSSSSSSMMMMMMMMSSSSSSSST...","...TSSSSSSMMMMMMMMMMMMSSSSSST...","....TGSSSMMMMMMMMMMMMMMSSSGT....","....TSSSSMMMMMMMMMMMMMMSSSST....",".....TSSSMMMMMMMMMMMMMMSSST.....","......TSSMMMMMMMMMMMMMMSST......",".....TSSSSMMMMMMMMMMMMSSST......","....TSSSSSSSMMMMMMMMSSSSSST.....","....TSSSSSSSSTTTTTSSSSSSSST.....",".....TGSSSSGT.....TSGSSSST......","......TTTTTT.......TTTTTT.......","................................","................................"]]},Fa={id:"frog-cansada",frames:[["................................","..........................PPPP..","............................P...","...........TTTTTTTTTT......P....",".........TTSSGSSSSGSSTT...PPPP..",".......TTSGSSSSSSSSSSGSTT.......","......TSSSSSSSSSSSSSSSSSST......",".....TSSSSSSSSSSSSSSSSSSSST.....","....TSSSSSSSSSSSSSSSSSSSSSST....","....TSSSSSSSSSSSSSSSSSSSSSST....","...TSSSTTTTTTSSSSSSTTTTTTSSST...","...TSSSTCTTCTSSSSSSTCTTCTSSST...","..TSSSSTCCCCTSSSSSSTCCCCTSSSST..","..TSSSSSTTTTSSSSSSSSTTTTSSSSST..","..TSSSSSGGGGSSSSSSSSGGGGSSSSST..","..TSSSHHHSSSSSSSSSSSSSSHHHSSST..","..TSSSSSSSSSSSSTTSSSSSSSSSSSST..","..TSSSSSSSSSSSTHHTSSSSSSSSSSST..","..TSGSSSSSSSSSSTTSSSSSSSSSSGST..","...TSSSSSSSSMMMMMMMMSSSSSSSST...","...TSSSSSSMMMMMMMMMMMMSSSSSST...","....TGSSSMMMMMMMMMMMMMMSSSGT....","....TSSSSMMMMMMMMMMMMMMSSSST....",".....TSSSMMMMMMMMMMMMMMSSST.....","......TSSMMMMMMMMMMMMMMSST......",".....TSSSSMMMMMMMMMMMMSSST......","....TSSSSSSSMMMMMMMMSSSSSST.....","....TSSSSSSSSTTTTTSSSSSSSST.....",".....TGSSSSGT.....TSGSSSST......","......TTTTTT.......TTTTTT.......","................................","................................"]]},Ua={id:"frog-tensa",frames:[["................................","................................","................................","...........TTTTTTTTTT.......T...",".........TTSSGSSSSGSSTT....TAT..",".......TTSGSSSSSSSSSSGSTT..TAT..","......TTTSSSSSSSSSSSSSSTTT..T...",".....TSSSTTTTSSSSSSTTTTSSST.....","....TSSSTTTTSSSSSSSSTTTTSSST....","....TSSTCCCCTSSSSSSTCCCCTSST....","...TSSSTCCCCTSSSSSSTCCCCTSSST...","...TSSSTCTTCTSSSSSSTCTTCTSSST...","..TSSSSTCCCCTSSSSSSTCCCCTSSSST..","..TSSSSSTTTTSSSSSSSSTTTTSSSSST..","..TSSSSSSSSSSSSSSSSSSSSSSSSSST..","..TSSSHHHSSSSSSSSSSSSSSHHHSSST..","..TSSSSSSSSSSSSSSSSSSSSSSSSSST..","..TSSSSSSSSSTSTSTSTSSSSSSSSSST..","..TSGSSSSSSSSTSTSTSTSSSSSSSGST..","...TSSSSSSSSMMMMMMMMSSSSSSSST...","...TSSSSSSMMMMMMMMMMMMSSSSSST...","....TGSSSMMMMMMMMMMMMMMSSSGT....","....TSSSSMMMMMMMMMMMMMMSSSST....",".....TSSSMMMMMMMMMMMMMMSSST.....","......TSSMMMMMMMMMMMMMMSST......",".....TSSSSMMMMMMMMMMMMSSST......","....TSSSSSSSMMMMMMMMSSSSSST.....","....TSSSSSSSSTTTTTSSSSSSSST.....",".....TGSSSSGT.....TSGSSSST......","......TTTTTT.......TTTTTT.......","................................","................................"]]},Ya={id:"frog-triste",frames:[["................................","................................","................................","...........TTTTTTTTTT...........",".........TTSSGSSSSGSSTT.........",".......TTSGSSSSSSSSSSGSTT.......","......TSSTTTTSSSSSSTTTTSST......",".....TSTTSSSSSSSSSSSSSSTTST.....","....TSSSTTTTSSSSSSSSTTTTSSST....","....TSSTCCCCTSSSSSSTCCCCTSST....","...TSSSTCCTCTSSSSSSTCCTCTSSST...","...TSSSTCTTCTSSSSSSTCTTCTSSST...","..TSSSSTAAAATSSSSSSTAAAATSSSST..","..TSSSSSTTTTSSSSSSSSTTTTSSSSST..","..TSSSSSSASSSSSSSSSSSSASSSSSST..","..TSSSHHHASSSSSSSSSSSSAHHHSSST..","..TSSSSSSASSSSSSSSSSSSASSSSSST..","..TSSSSSSSSSSSTTTTSSSSSSSSSSST..","..TSGSSSSSSSSTSSSSTSSSSSSSSGST..","...TSSSSSSSSMMMMMMMMSSSSSSSST...","...TSSSSSSMMMMMMMMMMMMSSSSSST...","....TGSSSMMMMMMMMMMMMMMSSSGT....","....TSSSSMMMMMMMMMMMMMMSSSST....",".....TSSSMMMMMMMMMMMMMMSSST.....","......TSSMMMMMMMMMMMMMMSST......",".....TSSSSMMMMMMMMMMMMSSST......","....TSSSSSSSMMMMMMMMSSSSSST.....","....TSSSSSSSSTTTTTSSSSSSSST.....",".....TGSSSSGT.....TSGSSSST......","......TTTTTT.......TTTTTT.......","................................","................................"]]},rt={contenta:Wa,tranquila:ta,cansada:Fa,tensa:Ua,triste:Ya},xa=["................................","................................","...........TTTTTTTTTT...........",".........TTSSGSSSSGSSTT.........",".......TTSGSSSSSSSSSSGSTT.......","......TSSSSSSSSSSSSSSSSSST......",".....TSSSSSSSSSSSSSSSSSSSST.....","....TSSSSSSSSSSSSSSSSSSSSSST....","....TSSSTSSSSTSSSSSSTSSSSTSSST..","...TSSSSSTTTTSSSSSSSSTTTTSSSSST.","..TSSSSSSSSSSSSSSSSSSSSSSSSSSST.","..TSSSHHHSSSSSSSSSSSSSSHHHSSSST.","..TSSSSSSSSSTTTTTTTTSSSSSSSSSST.","..TSSSSSSSSSSSTTTTSSSSSSSSSSSST.",".TSGSSSSSSSSSSSSSSSSSSSSSSSSGST.",".TSSSSSSSSMMMMMMMMMMSSSSSSSSST..","TSSSSSSSMMMMMMMMMMMMMMSSSSSSSST.","TSSSSSSMMMMMMMMMMMMMMMMSSSSSSST.","TSSGSSMMMMMMMMMMMMMMMMMMSSGSSST.","TSSSSMMMMMMMMMMMMMMMMMMMMSSSSST.","TSSSSMMMMMMMMMMMMMMMMMMMMSSSSST.","TSSGSSMMMMMMMMMMMMMMMMMMSSGSSST.",".TSSSSMMMMMMMMMMMMMMMMMMSSSSST..",".TSSSSSSMMMMMMMMMMMMMMSSSSSSST..","..TSSSSSSMMMMMMMMMMMMSSSSSSST...","...TGSSSSSSMMMMMMMMSSSSSSGT.....","...TSSSSSSSSSTTTTSSSSSSSSST.....","....TSSSSSSGT....TGSSSSSSST.....",".....TTTTTT........TTTTTT.......","................................","................................","................................"],Ca=["................................","................................","................................","...........TTTTTTTTTT...........",".........TTSSGSSSSGSSTT.........",".......TTSGSSSSSSSSSSGSTT.......","......TSSSSSSSSSSSSSSSSSST......",".....TSSSSSSSSSSSSSSSSSSSST.....","....TSSSSSSSSSSSSSSSSSSSSSST....","....TSSSTSSSSTSSSSSSTSSSSTSSST..","...TSSSSSTTTTSSSSSSSSTTTTSSSSST.","..TSSSSSSSSSSSSSSSSSSSSSSSSSSST.","..TSSSHHHSSSSSSSSSSSSSSHHHSSSST.","..TSSSSSSSSSSSTTTTSSSSSSSSSSSST.","..TSSSSSSSSSSTACASTSSSSSSSSSSST.","..TSGSSSSSSSSSTTTTSSSSSSSSSGST..","...TSSSSSSSSMMMMMMMMSSSSSSSST...","...TSSSSSSMMMMMMMMMMMMSSSSSST...","....TGSSSMMMMMMMMMMMMMMSSSGT....","....TSSSSMMMMMMMMMMMMMMSSSST....",".....TSSSMMMMMMMMMMMMMMSSST.....","......TSSMMMMMMMMMMMMMMSST......",".....TSSSSMMMMMMMMMMMMSSST......","....TSSSSSSSMMMMMMMMSSSSSST.....","....TSSSSSSSSTTTTTSSSSSSSST.....",".....TGSSSSGT.....TSGSSSST......","......TTTTTT.......TTTTTT.......","................................","................................","................................","................................","................................"],Ja={id:"frog-inhaling",frames:[xa]},Qa={id:"frog-exhaling",frames:[Ca]},Xa={id:"frog-breathing",frames:[xa,Ca],frameMs:4e3},Za={id:"frog-stretching",frames:[["....TTTT..............TTTT......","...TSSSSST..........TSSSSST.....","...TSGSSST..........TSGSSST.....","....TSSSSST........TSSSSST......",".....TSSSSSTTTTTTTTSSSSST.......","......TTSGSSGSSSSGSSTTST........","......TSSSSSSSSSSSSSSSSSST......",".....TSSSSSSSSSSSSSSSSSSSST.....","....TSSSSSSSSSSSSSSSSSSSSSST....","....TSSSTSSSSTSSSSSSTSSSSTSSST..","...TSSSSSTTTTSSSSSSSSTTTTSSSSST.","..TSSSSSSSSSSSSSSSSSSSSSSSSSSST.","..TSSSHHHSSSSSSSSSSSSSSHHHSSSST.","..TSSSSSSSSSTTTTTTTTSSSSSSSSSST.","..TSSSSSSSSSTHHHHHHTSSSSSSSSSST.","..TSGSSSSSSSSTTTTTTSSSSSSSSGST..","...TSSSSSSSSMMMMMMMMSSSSSSSST...","...TSSSSSSMMMMMMMMMMMMSSSSSST...","....TGSSSMMMMMMMMMMMMMMSSSGT....","....TSSSSMMMMMMMMMMMMMMSSSST....",".....TSSSMMMMMMMMMMMMMMSSST.....","......TSSMMMMMMMMMMMMMMSST......",".....TSSSSMMMMMMMMMMMMSSST......","....TSSSSSSSMMMMMMMMSSSSSST.....","....TSSSSSSSSTTTTTSSSSSSSST.....",".....TGSSSSGT.....TSGSSSST......","......TTTTTT.......TTTTTT.......","................................","................................","................................","................................","................................"]]},Ka={id:"frog-ears",frames:[["................................","................................","................................","...........TTTTTTTTTT...........",".........TTSSGSSSSGSSTT.........",".......TTSGSSSSSSSSSSGSTT.......","......TSSSSSSSSSSSSSSSSSST......","..TTTTSSSSSSSSSSSSSSSSSSSSTTTT..",".TSSSSTSSSSSSSSSSSSSSSSSSSTSSSST",".TSGSSTTSSSSTSSSSSSTSSSSTTTSGSST",".TSSSSSTTTTTSSSSSSSSTTTTTSSSSST.","..TSSSTSSSSSSSSSSSSSSSSSSSTSSST.","...TTTSSHHHSSSSSSSSSSSSHHHSSTTT.","....TSSSSSSSSTTTTTTSSSSSSSSST...","....TSSSSSSSSTSSSSTSSSSSSSSST...","....TSGSSSSSSSTTTTSSSSSSSSGST...",".....TSSSSSSMMMMMMMMSSSSSSST....",".....TSSSSSMMMMMMMMMMSSSSST.....",".....TGSSSMMMMMMMMMMMMSSSGT.....",".....TSSSSMMMMMMMMMMMMSSSST.....","......TSSSMMMMMMMMMMMMSSST......",".......TSSMMMMMMMMMMMMSST.......","......TSSSSMMMMMMMMMMMSSST......",".....TSSSSSSSMMMMMMMMSSSSSST....",".....TSSSSSSSSTTTTTSSSSSSSST....","......TGSSSSGT.....TSGSSSST.....",".......TTTTTT.......TTTTTT......","................................","................................","................................","................................","................................"]]},en={id:"neutral-leaf",frames:[[".......TT.......","......TVVT......",".....TVVVVT.....","....TVVMMVVT....","...TVVMMMMVVT...","..TVVMMTTMMVVT..","..TVVMMTTMMVVT..",".TVVVMMTTMMVVVT.",".TVVVMMTTMMVVVT.","..TVVMMTTMMVVT..","..TVVMMTTMMVVT..","...TVVMMMMVVT...","....TVVMMVVT....",".....TVTTT......","......TT........","................"]]};function fe(t){var r;const e=t.frames[0].length,a=((r=t.frames[0][0])==null?void 0:r.length)??0;return{def:t,currentFrame:0,lastFrameTime:0,width:a,height:e}}function Ut(t,e){if(t.def.frames.length<=1)return;const a=t.def.frameMs??600;e-t.lastFrameTime>=a&&(t.currentFrame=(t.currentFrame+1)%t.def.frames.length,t.lastFrameTime=e)}function oe(t,e,a,r,o=1){const i=e.def.frames[e.currentFrame],d=Math.max(1,Math.floor(o));for(let s=0;s<i.length;s++){const T=i[s];for(let c=0;c<T.length;c++){const l=T[c],u=Da[l]??"transparent";u!=="transparent"&&(t.fillStyle=ce[u],t.fillRect(a+c*d,r+s*d,d,d))}}}function Pe(t,e){const a=document.createElement("canvas"),r=window.devicePixelRatio??1;a.width=Math.round(t*r),a.height=Math.round(e*r),a.style.width=`${t}px`,a.style.height=`${e}px`,a.style.imageRendering="pixelated";const o=a.getContext("2d");return o.scale(r,r),{canvas:a,ctx:o}}class aa{constructor(e){ut(this,"instances",new Set);ut(this,"rafId",null);ut(this,"onTick");ut(this,"reducedMotion");this.onTick=e,this.reducedMotion=window.matchMedia("(prefers-reduced-motion: reduce)").matches}add(e){this.instances.add(e)}remove(e){this.instances.delete(e)}start(){if(this.rafId!==null)return;const e=a=>{var r;if(!this.reducedMotion)for(const o of this.instances)Ut(o,a);(r=this.onTick)==null||r.call(this,a),this.rafId=requestAnimationFrame(e)};this.rafId=requestAnimationFrame(e)}stop(){this.rafId!==null&&(cancelAnimationFrame(this.rafId),this.rafId=null)}}function tn(t){t.innerHTML="";const e=document.createElement("section");e.className="home-screen",e.setAttribute("role","main"),e.setAttribute("aria-label","Pantalla de inicio de RoRoGarden");const a=document.createElement("style");a.textContent=`
    .home-screen {
      flex: 1;
      width: 100%;
      height: 100%;
      box-sizing: border-box;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: space-between;
      padding: var(--space-xl) var(--space-md) var(--space-lg);
      background: linear-gradient(
        180deg,
        var(--color-celeste-agua) 0%,
        var(--color-menta) 60%,
        var(--color-salvia) 100%
      );
    }

    .home-header {
      text-align: center;
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: var(--space-sm);
    }

    .home-title {
      font-family: var(--font-pixel);
      font-size: 0.75rem;
      color: var(--color-bosque);
      letter-spacing: 0.05em;
      line-height: 2;
      margin: 0;
    }

    .home-subtitle {
      font-family: var(--font-ui);
      font-size: var(--font-size-md);
      color: var(--color-agua-profunda);
      text-align: center;
      max-width: 260px;
      line-height: 1.5;
      margin: 0;
    }

    .home-scene {
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: var(--space-sm);
      flex: 1;
      justify-content: center;
      margin: var(--space-sm) 0;
    }

    .home-scene canvas {
      display: block;
    }

    .home-footer {
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: var(--space-sm);
      width: 100%;
    }

    .btn-enter {
      font-family: var(--font-pixel);
      font-size: 0.625rem;
      color: var(--color-crema);
      background-color: var(--color-bosque);
      border: 3px solid var(--color-tinta);
      border-radius: var(--border-radius-md);
      padding: var(--space-md) var(--space-xl);
      min-height: var(--touch-target-min);
      min-width: 200px;
      max-width: 100%;
      box-sizing: border-box;
      white-space: normal;
      overflow-wrap: break-word;
      word-break: break-word;
      cursor: pointer;
      line-height: 1.8;
      transition: transform var(--transition-fast), opacity var(--transition-fast);
      letter-spacing: 0.03em;
      text-align: center;
    }

    @media (hover: hover) {
      .btn-enter:hover {
        opacity: 0.92;
        transform: translateY(-2px);
      }
    }

    .btn-enter:active {
      transform: translateY(1px) scale(0.98);
    }

    .btn-enter:focus-visible {
      outline: 3px solid var(--color-acento);
      outline-offset: 4px;
    }

    .home-note {
      font-family: var(--font-ui);
      font-size: var(--font-size-xs);
      color: var(--color-musgo);
      text-align: center;
      margin: 0;
    }

    .desktop-hint {
      display: none;
      font-family: var(--font-ui);
      font-size: var(--font-size-xs);
      color: var(--color-bosque);
      text-align: center;
      margin: 0;
      opacity: 0.85;
    }

    @media (min-width: 601px) {
      .desktop-hint {
        display: block;
      }
    }
  `,document.head.appendChild(a);const r=document.createElement("header");r.className="home-header";const o=document.createElement("h1");o.className="home-title",o.textContent="RoRoGarden";const i=document.createElement("p");i.className="home-subtitle",i.textContent="Tu rincón para aflojar un ratito",r.appendChild(o),r.appendChild(i);const d=document.createElement("div");d.className="home-scene",d.setAttribute("aria-hidden","true");const s=5,T=28,c=24,{canvas:l,ctx:u}=Pe(T*s,c*s),x=fe(va),C=fe(ga),M=0,p=11,m=4,h=2,v=new aa(()=>{u.clearRect(0,0,T*s,c*s),oe(u,C,M*s,p*s,s),oe(u,x,m*s,h*s,s)});v.add(x),v.add(C),v.start(),d.appendChild(l);const f=document.createElement("footer");f.className="home-footer";const g=document.createElement("button");g.className="btn-enter",g.textContent="Entrar al jardín",g.setAttribute("aria-label","Entrar al jardín — próximamente"),g.addEventListener("click",()=>{g.innerHTML="";const H=te("frog",{size:14});H.style.marginRight="var(--space-xs)",g.appendChild(H),g.appendChild(document.createTextNode(` ${n.home.loading}`)),setTimeout(()=>{window.location.hash="#/jardin"},350)});const y=document.createElement("p");y.className="home-note";const N=te("heart",{size:12});N.style.marginRight="var(--space-xs)",y.appendChild(N),y.appendChild(document.createTextNode(n.home.peaceNote));const b=document.createElement("p");b.className="desktop-hint",b.textContent="Presioná Enter o Espacio para interactuar",f.appendChild(g),f.appendChild(y),f.appendChild(b),e.appendChild(r),e.appendChild(d),e.appendChild(f),t.appendChild(e),u.clearRect(0,0,T*s,c*s),oe(u,C,M*s,p*s,s),oe(u,x,m*s,h*s,s);const k=H=>{(H.key==="Enter"||H.key===" ")&&document.activeElement!==g&&(H.preventDefault(),g.click())};return window.addEventListener("keydown",k),()=>{window.removeEventListener("keydown",k),v.stop(),a.remove()}}const an=[{id:"antes-de-entrar",name:"Antes de entrar",enabled:!1,time:"07:45",days:[1,2,3,4,5],eventText:"Una pausa para mí"},{id:"media-jornada",name:"Pausa de media jornada",enabled:!1,time:"12:30",days:[1,2,3,4,5],eventText:"Una pausa para mí"},{id:"cierre-dia",name:"Cierre del día",enabled:!1,time:"18:00",days:[1,2,3,4,5],eventText:"Una pausa para mí"}],nn={1:"MO",2:"TU",3:"WE",4:"TH",5:"FR",6:"SA",7:"SU"};function on(t){return typeof t!="string"?!1:t.match(/^([01]\d|2[0-3]):([0-5]\d)$/)!==null}function Ma(t){return!(!t||typeof t!="object"||!["antes-de-entrar","media-jornada","cierre-dia"].includes(t.id)||typeof t.enabled!="boolean"||!on(t.time)||!Array.isArray(t.days)||t.days.length===0||!t.days.every(e=>typeof e=="number"&&e>=1&&e<=7)||typeof t.eventText!="string"||t.eventText.length===0||t.eventText.length>40)}function la(t){return t.replace(/\\/g,"\\\\").replace(/;/g,"\\;").replace(/,/g,"\\,").replace(/\r?\n/g,"\\n")}function rn(t){const e=new TextEncoder;if(e.encode(t).length<=75)return t;const r=[];let o=[],i=!0;const d=75;for(const s of t){const T=Array.from(e.encode(s)),c=i?d:d-1;if(o.length+T.length>c){const u=new TextDecoder().decode(new Uint8Array(o));r.push(i?u:" "+u),o=[...T],i=!1}else o.push(...T)}if(o.length>0){const T=new TextDecoder().decode(new Uint8Array(o));r.push(i?T:" "+T)}return r.join(`\r
`)}function sn(t){const e=t.filter(i=>i.enabled),a=["BEGIN:VCALENDAR","VERSION:2.0","PRODID:-//RoRoGarden//NONSGML RoRoGarden PWA//ES","CALSCALE:GREGORIAN","METHOD:PUBLISH"],r={1:"20260105",2:"20260106",3:"20260107",4:"20260108",5:"20260109",6:"20260110",7:"20260111"};for(const i of e){const[d,s]=i.time.split(":"),T=parseInt(d,10),c=parseInt(s,10);let l=c+10,u=T;l>=60&&(l-=60,u=(u+1)%24);const x=String(T).padStart(2,"0"),C=String(c).padStart(2,"0"),M=String(u).padStart(2,"0"),p=String(l).padStart(2,"0"),m=[...i.days].sort((H,S)=>H-S),h=m[0]??1,v=r[h],f=`${v}T${x}${C}00`,g=`${v}T${M}${p}00`,y=m.map(H=>nn[H]).join(","),N=la(i.eventText),b=la("Un ratito para aflojar. RoRoGarden te acompaña."),k=`roro-reminder-${i.id}@rorogarden.app`;a.push("BEGIN:VEVENT"),a.push(`UID:${k}`),a.push("DTSTAMP:20261102T000000Z"),a.push(`DTSTART:${f}`),a.push(`DTEND:${g}`),a.push(`RRULE:FREQ=WEEKLY;BYDAY=${y}`),a.push(`SUMMARY:${N}`),a.push(`DESCRIPTION:${b}`),a.push("TRANSP:TRANSPARENT"),a.push("BEGIN:VALARM"),a.push("ACTION:DISPLAY"),a.push(`DESCRIPTION:${N}`),a.push("TRIGGER:PT0S"),a.push("END:VALARM"),a.push("END:VEVENT")}return a.push("END:VCALENDAR"),a.map(i=>rn(i)).join(`\r
`)+`\r
`}function cn(t,e,a,r,o){if(r)return null;const i=e.getDay(),d=i===0?7:i,s=e.getHours()*60+e.getMinutes();for(const T of t){if(!T.enabled||!T.days.includes(d)||a[T.id]===o)continue;const[c,l]=T.time.split(":").map(x=>parseInt(x,10)),u=c*60+l;if(s>=u&&s<u+15)return T}return null}const Tt={WINDOW_DAYS:10,MIN_DIFFICULT_DAYS_IN_WINDOW:6,CONSECUTIVE_DIFFICULT_RECENT:3,COOLDOWN_DAYS:21};function da(t){return t==="triste"||t==="tensa"}function pa(t,e){const a=t.filter(r=>r.date===e&&(r.type==="checkin"||r.type==="diario")).sort((r,o)=>o.createdAt.localeCompare(r.createdAt));for(const r of a)if("mood"in r.data&&r.data.mood)return r.data.mood;return null}function ln(t,e){const a=new Date(`${t}T00:00:00`),r=new Date(`${e}T00:00:00`),o=Math.abs(a.getTime()-r.getTime());return Math.round(o/(1e3*60*60*24))}function dn({entries:t,currentDateStr:e,lastNoticeDateStr:a,supportSuggestionsEnabled:r,vacationMode:o}){if(!r||o||a&&ln(e,a)<Tt.COOLDOWN_DAYS)return!1;const i=Array.from(new Set(t.filter(c=>(c.type==="checkin"||c.type==="diario")&&c.date<=e).map(c=>c.date))).sort((c,l)=>l.localeCompare(c));if(i.length<Tt.CONSECUTIVE_DIFFICULT_RECENT)return!1;const d=i.slice(0,Tt.CONSECUTIVE_DIFFICULT_RECENT);for(const c of d){const l=pa(t,c);if(!l||!da(l))return!1}let s=0;const T=new Date(`${e}T00:00:00`);for(let c=0;c<Tt.WINDOW_DAYS;c++){const l=new Date(T);l.setDate(l.getDate()-c);const u=l.getFullYear(),x=String(l.getMonth()+1).padStart(2,"0"),C=String(l.getDate()).padStart(2,"0"),M=`${u}-${x}-${C}`,p=pa(t,M);p&&da(p)&&s++}return s>=Tt.MIN_DIFFICULT_DAYS_IN_WINDOW}const Ze=4,gt="roro_entry_",it="roro_garden_state",ya="RoRoGarden",pn={1:t=>({...t,version:2}),2:t=>({...t,version:3}),3:t=>({...t,version:4})},Ht={version:4,obtainedItemIds:[],placedDecorations:[],frogName:null,lastGiftDate:null,gardenAnimationsEnabled:!0,hemisphere:"sur",frogNameAnswered:!1,showWeekInGarden:!0,weekShowWeekend:!1,showPatterns:!1,dismissedPatternIds:[],reminders:an,vacationMode:!1,lastSupportNoticeDate:null,supportSuggestionsEnabled:!0,dismissedInAppReminders:{},handMode:"right"},Ke=new Map;function Ue(){try{if(typeof window>"u"||!window.localStorage)return!1;const t="__roro_test__";return window.localStorage.setItem(t,"1"),window.localStorage.removeItem(t),!0}catch{return!1}}function bt(t=new Date){const e=t.getFullYear(),a=String(t.getMonth()+1).padStart(2,"0"),r=String(t.getDate()).padStart(2,"0");return`${e}-${a}-${r}`}function na(t,e,a){return a?`${t}_${e}_${a}`:`${t}_${e}`}function Ea(t,e,a=bt()){const r=Date.now().toString(),o=new Date().toISOString(),i={id:na(t,a,r),version:Ze,type:t,date:a,createdAt:o,updatedAt:o,data:e};return st(i)}function Yt(t){let e={...t},a=Number(e.version??1);for(;a<Ze;){const r=pn[a];typeof r=="function"&&(e=r(e)),a+=1,e.version=a}return e}function st(t){try{const e={...t,version:Ze,updatedAt:new Date().toISOString()},a=`${gt}${e.id}`,r=JSON.stringify(e);if(Ue()?window.localStorage.setItem(a,r):Ke.set(a,r),typeof document<"u")try{document.dispatchEvent(new CustomEvent("roro:dataChanged"))}catch{}return{success:!0,data:e}}catch{return{success:!1,error:"No se pudo guardar el registro localmente. El jardín seguirá funcionando."}}}function xt(){try{const t=[];if(Ue())for(let e=0;e<window.localStorage.length;e++){const a=window.localStorage.key(e);if(a&&a.startsWith(gt)){const r=window.localStorage.getItem(a);if(r)try{const o=JSON.parse(r);t.push(Yt(o))}catch{}}}else for(const[e,a]of Ke.entries())if(e.startsWith(gt))try{t.push(Yt(JSON.parse(a)))}catch{}return t.sort((e,a)=>e.date!==a.date?a.date.localeCompare(e.date):a.createdAt.localeCompare(e.createdAt)),{success:!0,data:t}}catch{return{success:!1,data:[],error:"No se pudieron recuperar los registros guardados."}}}function mn(t){try{const e=`${gt}${t}`;return Ue()?window.localStorage.removeItem(e):Ke.delete(e),{success:!0,data:!0}}catch{return{success:!1,data:!1,error:"No se pudo eliminar el registro."}}}function Sn(){try{if(Ue()){const t=[];for(let e=0;e<window.localStorage.length;e++){const a=window.localStorage.key(e);a&&a.startsWith(gt)&&t.push(a)}for(const e of t)window.localStorage.removeItem(e)}return Ke.clear(),wa(),{success:!0,data:!0}}catch{return{success:!1,data:!1,error:"No se pudieron borrar todos los registros."}}}function Ae(){try{let t=null;if(Ue()?t=window.localStorage.getItem(it):t=Ke.get(it)??null,!t)return{...Ht};const e=JSON.parse(t);return{...Ht,...e,version:Ze}}catch{return{...Ht}}}function U(t){try{const e={...t,version:Ze},a=JSON.stringify(e);if(Ue()?window.localStorage.setItem(it,a):Ke.set(it,a),typeof document<"u")try{document.dispatchEvent(new CustomEvent("roro:dataChanged"))}catch{}return{success:!0,data:e}}catch{return{success:!1,error:"No se pudo guardar el jardín."}}}function wa(){try{return Ue()?window.localStorage.removeItem(it):Ke.delete(it),{success:!0,data:!0}}catch{return{success:!1,data:!1,error:"No se pudo reiniciar el jardín."}}}function un(){try{const t=xt();if(!t.success||!t.data)return{success:!1,error:"Error al reunir los registros para exportar."};const e=Ae(),a={app:ya,version:Ze,exportedAt:new Date().toISOString(),entries:t.data,gardenState:e};return{success:!0,data:JSON.stringify(a,null,2)}}catch{return{success:!1,error:"No se pudo generar el archivo de respaldo."}}}function Tn(t){try{let e;try{e=JSON.parse(t)}catch{return{success:!1,error:"El archivo no contiene un JSON válido."}}if(!e||e.app!==ya||!Array.isArray(e.entries))return{success:!1,error:"El archivo no corresponde a un respaldo válido de RoRoGarden."};for(const o of e.entries)if(!o||typeof o!="object"||!o.id||!o.type||!o.date||!o.data)return{success:!1,error:"El archivo contiene registros incompletos o corruptos. No se modificaron tus datos."};let a=null;if(e.gardenState&&typeof e.gardenState=="object"){const o=e.gardenState,i=!Array.isArray(o.placedDecorations)||o.placedDecorations.every(l=>typeof l.id=="string"&&typeof l.catalogId=="string"&&typeof l.x=="number"&&l.x>=0&&l.x<=4&&typeof l.y=="number"&&l.y>=0&&l.y<=4),d=o.frogName===null||typeof o.frogName=="string"&&o.frogName.length<=20,s=!("reminders"in o)||Array.isArray(o.reminders)&&o.reminders.every(l=>Ma(l)),T=(o.weekShowWeekend===void 0||typeof o.weekShowWeekend=="boolean")&&(o.showWeekInGarden===void 0||typeof o.showWeekInGarden=="boolean")&&(o.showPatterns===void 0||typeof o.showPatterns=="boolean")&&(o.vacationMode===void 0||typeof o.vacationMode=="boolean")&&(o.supportSuggestionsEnabled===void 0||typeof o.supportSuggestionsEnabled=="boolean"),c=o.dismissedPatternIds===void 0||Array.isArray(o.dismissedPatternIds)&&o.dismissedPatternIds.every(l=>typeof l=="string");if(!i||!d||!s||!T||!c)return{success:!1,error:"La configuración del jardín en el archivo no es válida. No se modificaron tus datos."};a={...Ht,...o,version:Ze}}let r=0;for(const o of e.entries){const i=Yt(o);st(i).success&&r++}return a&&U(a),{success:!0,data:{imported:r}}}catch{return{success:!1,error:"Ocurrió un error inesperado al importar el respaldo."}}}function fn(t=new Date){const e=t.getHours();return e>=6&&e<9?"amanecer":e>=9&&e<19?"dia":e>=19&&e<21?"atardecer":"noche"}function hn(t=new Date,e="sur"){const a=t.getMonth()+1,r=t.getDate(),o=a*100+r;let i;return o>=321&&o<=620?i="otono":o>=621&&o<=920?i="invierno":o>=921&&o<=1220?i="primavera":i="verano",e==="sur"?i:{verano:"invierno",otono:"primavera",invierno:"verano",primavera:"otono"}[i]}function vn(t=new Date,e="sur"){const a=fn(t),r=hn(t,e),o=a==="noche";let i,d,s,T;switch(a){case"amanecer":i="menta",d="crema",s="turquesa";break;case"dia":i="azulNiebla",d="celesteAgua",s="celesteAgua";break;case"atardecer":i="acento",d="salvia",s="aguaProfunda";break;case"noche":default:i="tinta",d="aguaProfunda",s="aguaProfunda";break}switch(r){case"primavera":T="sapo";break;case"verano":T="bosque";break;case"otono":T="acento";break;case"invierno":T="musgo";break}const c={primavera:"Primavera",verano:"Verano",otono:"Otoño",invierno:"Invierno"},l={amanecer:"Amanecer",dia:"Día",atardecer:"Atardecer",noche:"Noche"};return{timeOfDay:a,season:r,hemisphere:e,skyColors:{top:ce[i],bottom:ce[d]},waterColor:ce[s],foliageColor:ce[T],isNight:o,label:`${c[r]} · ${l[a]}`}}const gn={visitantes:"Visitantes",hongos:"Hongos",plantas:"Plantas",agua:"Agua",cielo:"Cielo",cositas:"Cositas"},bn={id:"vis-sapito-menta",frames:[["................","................","................","......TTTT......","....TTMGGMTT....","...TTTMMMMTTT...","..TTCTTMMTCTTT..","..TTTTTMMTTTTT..",".TMMTTMMMMTTMMT.",".THHMMMMMMMMHHT.","..TMMMTMMTMMMT..","..TMMMMTTMMMMT..","...TMCCCCCCMT...","..TMCCCCCCCCMT..","...TTTTTTTTTT...","................"],["................","................","................","......TTTT......","....TTMGGMTT....","...TMMMMMMMMT...","..TMTTMMMMTTMT..","..TTMMTMMTMMTT..",".TMMMMMMMMMMMMT.",".THHMMMMMMMMHHT.","..TMMMTMMTMMMT..","..TMMMMTTMMMMT..","...TMCCCCCCMT...","..TMCCCCCCCCMT..","...TTTTTTTTTT...","................"]],frameMs:1400},xn={id:"vis-sapito-dorado",frames:[["................","................","................","......TTTT......","....TTHCCHTT....","...TTTHHHHTTT...","..TTCTTHHTCTTT..","..TTTTTHHTTTTT..",".THHTTHHHHTTHHT.",".THHHHHHHHHHHHT.","..THHHTHHTHHHT..","..THHHHTTHHHHT..","...THCCCCCCHT...","..THCCCCCCCCHT..","...TTTTTTTTTT...","................"]]},Cn={id:"vis-rana-lunita",frames:[["................","..........H.....",".............H..","......TTTT......","....TTNPPNTT....","...TTTNNNNTTT...","..TTTCTNNTTCTT..","..TTTTTNNTTTTT..",".TNNTTNNNNTTNNT.",".THHNNNNNNNNHHT.","..TNNNTNNTNNNT..","..TNNNNTTNNNNT..","...TNMMMMMMNT...","..TNMMMMMMMMNT..","...TTTTTTTTTT...","................"]]},Mn={id:"vis-sapo-abuelo",frames:[["............PPP.",".............P..","............PPP.","......TTTT......","...CCCCGGCCCC...","..TGGGGGGGGGGT..","..TGTTGGGGTTGT..",".TGTGGTGGTGGTGT.",".TGGGGGGGGGGGGT.",".THHGGGGGGGGHHT.",".TGGGGTGGTGGGGT.","..TGGGGTTGGGGT..","..TGGSSSSSSGGT..","..TGSSSSSSSSGT..","...TTTTTTTTTT...","................"]]},yn={id:"vis-sapito-bebe",frames:[["................","................","................","...TTT....TTT...","..TSCCT..TCCST..","..TSCTSTTSCTST..","...TSSSSSSSST...","...TSSSSSSSST...","...HSSSSSSSSH...","...TSSTSSTSST...","...TSSSTTSSST...",".AAAAAAAAAAAAAA.",".AAUUAAUUAAUUAA.","..AUAAUAAUAAUA..","................","................"]]},En={id:"hongo-calido",frames:[["................",".....TTTTTT.....","...TTHHHHHHTT...","..THCCHHHHHHHT..","..TCHHHHHHHHHT..",".THHHHHHHHHHHHT.",".TTTTTTTTTTTTTT.","..CCTCCTCCTCCT..","...TTTTTTTTTT...","....TTMMMMTT....","....TMTMMTMT....","...TMHMTTMHMT...","...TMMMMMMMMT...","....TTMMMMTT....","......TTTT......","................"]]},wn={id:"hongo-doble",frames:[["................","...TTTT.........",".TTHHHHTT.......",".THCCHHHT.......","THCHHHHHHT......","TTTTTTTTTT......",".CCTCCTCC..TTT..","..TTTTTT..TCCCT.","...TMMT..TTTTTTT","..TTMMTT..HHTHH.","..TTMMTT...TTT..","..HMTTMH..TTMMT.","..TMMMMT..TMMMT.","..TTTTTTTTTTTT..","TTGGGGGGGGGGGGTT","..TTTTTTTTTTTT.."]]},Nn={id:"hongo-crema",frames:[["................","................",".....TTTTTT.....","...TTCCCCHCTT...","..TCCHCCCCCCCT..","..THCCCCCCCHCT..","..TTTTTTTTTTTT..","...HHTHHTHHTH...","....TTTTTTTT....","....TTMMMMTT....","....TMTMMTMT....","...TMHMTTMHMT...","....TMMMMMMT....","....TTMMMMTT....","......TTTT......","................"]]},kn={id:"hongo-musgoso",frames:[["................",".....TTTTTT.....","...TTGGGGGGTT...","..TGVVGGGGGGGT..","..TGGGGGGGVGGT..",".TGGGGVGGGGGGGT.",".TTTTTTTTTTTTTT.","..VVTVVTVVTVVT..","...TTTTTTTTTT...","....TSTSSTST....","...TSHSTTSHST...","...TSSSSSSSST...","....TSSSSSST....","..TTTTTTTTTTTT..",".TTGGGGGGGGGGTT.","...TTTTTTTTTT..."]]},An={id:"planta-juncos",frames:[["....TT....TT....","...THHT..THHT...","...TCHT..TCHT...","...TCHT..TCHT...","...THHT..THHT...","...TTTT..TTTT...","....TG....TG....","....TG....TG....","....TG....TG....","....TGT..TTG....","....TGTTTTTG....","....TGTSSTTG....","....TGTTTTTG....","..TTTTSSSSTTTT..",".TTSGSSSSGSSGTT.","...TTTTTTTTTT..."],[".....TT....TT...","....THHT..THHT..","....TCHT..TCHT..","....TCHT..TCHT..","....THHT..THHT..","....TTTT..TTTT..",".....TG....TG...","....TG....TG....","....TG....TG....","....TGT..TTG....","....TGTTTTTG....","....TGTSSTTG....","....TGTTTTTG....","..TTTTSSSSTTTT..",".TTSGSSSSGSSGTT.","...TTTTTTTTTT..."]],frameMs:1200},Hn={id:"planta-helecho",frames:[["................","................","................","................",".......TT.......","......TSGT......","...T..TSGT..T...","..TGTTTSGTTTGT..","..TGGSTSGTVGGT..","..TVGSTSGTSGST..","TTTTTGTSGTGTTTTT","TGSSSTTSGTTVVSGT","TSGGGSTSGTSGGGST","TTVVSGTSGTGSSSTT","..TTTTTTTTTTTT..",".....TTTTTT....."]]},Gn={id:"planta-flor-loto",frames:[["................","................","................","................",".......TT.......",".......TT.......","...TTTTCCTTTT...","...THHTHCTHHT...","..TTHHTCHTHHTT..","TTHTTHTHCTHTTHTT",".THHTHTCCTHTHHT.","..THHTTCCTTHHT..","...TTTTTTTTTT...",".TTVVSTTTTSSSTT.",".TTTTSSSSSSTTTT.",".....TTTTTT....."]]},zn={id:"planta-trebol",frames:[["................",".......TT.......","......TVVT......",".....TMMVVT.....",".....TVVVST.....","....TTVVSVTT....","...TVVTTTTVVT...","..TMMVVTTVVMMT..","..TVVVVTSVVVVT..","..TVVSVTTVSVVT..","...TTTT..TTTT...",".......TG.......",".......TG.......",".......TG.......",".......TG.......","................"]]},Ln={id:"planta-brote",frames:[["................","................","................","..TTTTT..TTTTT..",".TVMMVVTTVVMMVT.","..TVVVSTTSVVVT..","...TTTTTGTTTT...",".......TG.......",".......TG.......",".......TG.......",".......TG.......",".......TG.......",".......TG.......","..TTTTTTTTTTTT..",".TGGBGGGBGGBGGT.","..TTTTTTTTTTTT.."]]},jn={id:"agua-nenufar-rosa",frames:[["................","................","................","................","......TTTT......",".....THHHHT.....",".....THCCHT.....",".....THCCHT.....","....TTTTTTTT....","..TTSVSSSSTT....",".TSVVSSSST......",".TSSSSSSSSTT....",".TGGGGGGGSSSTTT.","..TTTTSSSSTTTT..","..A...TTTT...A..","................"]]},Rn={id:"agua-hojita-barco",frames:[["................","................","................","................","................","................","................","...TTTTTTTTTT...",".TTSVVVSSSSSSTT.","..TGGGSSSSGGGT..","...TSSGGGGSST...","....TSSSSSST....",".....TTTTTT.....",".AAAAAAAAAAAAAA.","..UU....UU..UU..","................"]]},qn={id:"agua-ondas",frames:[["................","................","................","................","................","......TTTT......","....TTAAAATT....","...TA..UU..AT...","..TA..U.CU..AT..","...TA..UU..AT...","....TTAAAATT....","......TTTT......","................","................","................","................"],["................","................","................","................",".....TTTTTT.....","...TTAAAAAATT...",".TTA........ATT.",".T...UUUUUU...T.","TA...U....U...AT",".T...UUUUUU...T.",".TTA........ATT.","...TTAAAAAATT...",".....TTTTTT.....","................","................","................"]],frameMs:1e3},Bn={id:"agua-piedra-rio",frames:[["................","................","................","................","................","......TTTT......","...TMMNNNNTTT...","..TMNNNNNNNNNT..","..TNNTNNNNTNNT..",".TNNNTNNNNTNNNT.","..TNHNNTTNNHNT..","..TNNNNNNNNPPT..","...TTNNNPPPTT...",".....TTTTTT.....","................","................"]]},Dn={id:"cielo-estrella",frames:[["................","................",".......TT.......",".......TT.......","......TCCT......","......TCCT......",".TTTTTCCCCTTTTT.","..TCCCTCCTCCCT..","...TCCTCCTCCT...","....THCCCCHT....","....TMMTTMMT....","....TMMMMMMT....","....TMTTTTMT....","....TT....TT....","................","................"],["................","................",".......TT.......",".......TT.......","......TCCT......","......TCCT......",".TTTTTCCCCTTTTT.","..TCCCCCCCCCCT..","...TCCTCCTCCT...","....THCCCCHT....","....TMMTTMMT....","....TMMMMMMT....","....TMTTTTMT....","....TT....TT....","................","................"]],frameMs:800},In={id:"cielo-nubecita",frames:[["................","................","................","................","......TTTTTT....",".....TCCCCCCT...",".....TCCCCCCT...","..TTTCTCCTCCCT..",".TCCCCTCCTCCCCT.",".TCCHCCTTCCHCCT.",".TCCCCCCCCCCCCT.","..TTTTTTTTTTTT..","................","................","................","................"]]},Pn={id:"cielo-trio-estrellas",frames:[["................","............H...","...H............","..HCH...........","...H............","................","................","...........H....","................","................","................",".....H..........","....HCH.........",".....H..........",".............H..","................"],["................","............H...","................","...H............","................","................","...........H....","..........HCH...","...........H....","................","................","................",".....H..........","................",".............H..","................"]],frameMs:900},Vn={id:"cielo-halo-luna",frames:[["....A.A.A.......","...A.......A....","....TTTT....A...","...TCCT.....HA..","A.TCCT..........",".TCCT...........",".TCCT.........A.",".TTTT...........",".TCHT.........A.",".THCT...........",".TCCCT........A.","..TCCCT......A..","A..TCCCTT...H...",".A..TTTTTT......","..A.......A.....",".....A.A.A......"]]},_n={id:"cosa-farol",frames:[["......TTTT......",".....T....T.....","....TTTTTTTT....","...TTTTTTTTTT...","......TTTT......","....TTCCCCTT.H..","...TCCCCCHCCT...","...TCCHCCCCCT...","...TCCHCCCHCT...","...TCCCCCCCCT...","...TCCCCHCCCT...","..H.TTCCCCTT....","...TTTTTTTTTT...","....TTTTTTTT....",".....T....T.....","................"],["......TTTT......",".....T....T.....","....TTTTTTTT....","...TTTTTTTTTT...",".H....TTTT......","....TTCCCCTT....","...TCCCHCCCCT...","...TCCCHCCCCT...","...TCCCCCHCCT...","...TCHCCCCCCT...","...TCCCCCCHCT.H.","....TTCCCCTT....","...TTTTTTTTTT...","....TTTTTTTT....",".....T....T.....","................"]],frameMs:700},On={id:"cosa-tronquito",frames:[["................","................","................","................","................","..TTTTTTTTTTTT..",".TTVVVVVVBTHHCT.",".TBBBBBGGTCHCHT.",".TBGGBBBBTHCHHT.",".TBBBBBBBTCHHHT.",".TBBBGGBBBTHHCT.",".TTGGBBBBBTTTT..","...TTTTTTTTTT...","................","................","................"]]},$n={id:"cosa-cartelito",frames:[["................","................","...TTTTTTTTTT...","..TCCHHHHHHHHT..","..TCHTHHHHTHHT..","..THHTHHHHTHHT..","..THHHTHHTHHHT..","..THHHHTTHHHHT..","...TTTTTTTTTT...","......THHT......","......THHT......","......THHT......","......THHT......","....TTTTTTTT....","...TGGGGGGGGT...","....TTTTTTTT...."]]},Wn={id:"cosa-piedras-apiladas",frames:[["................","....H...........","............H...",".......TT.......",".....TTMNTT.....",".....TNMNNT.....",".....TTTTTT.....","....TNNNNNNT....","....TMMNNNNT....","....TTNNNNTT....","...TTNTTTTNTT...","..TMMNNNNNNNNT..","..TNNTNNNNTNNT..","...THNNTTNNHT...",".....TTTTTT.....","................"]]},oa=[{id:"vis-sapito-menta",category:"visitantes",name:"Sapito Menta",description:"Un compañero sereno que visita la orilla.",sprite:bn,gridWidth:1,gridHeight:1,terrain:"ambos",behavior:"parpadear"},{id:"vis-sapito-dorado",category:"visitantes",name:"Sapito Cálido",description:"Trae un tono suave de sol a tu rincón.",sprite:xn,gridWidth:1,gridHeight:1,terrain:"ambos",behavior:"parpadear"},{id:"vis-rana-lunita",category:"visitantes",name:"Rana Lunita",description:"Le gusta sentarse a mirar la luna en silencio.",sprite:Cn,gridWidth:1,gridHeight:1,terrain:"ambos",behavior:"mirar-luna"},{id:"vis-sapo-abuelo",category:"visitantes",name:"Sapo Mayor",description:"Duerme plácidamente sin apuro alguno.",sprite:Mn,gridWidth:1,gridHeight:1,terrain:"ambos",behavior:"dormir"},{id:"vis-sapito-bebe",category:"visitantes",name:"Sapito Pequeño",description:"Apenas chapotea cerca de las hojas.",sprite:yn,gridWidth:1,gridHeight:1,terrain:"ambos",behavior:"nadar"},{id:"hongo-calido",category:"hongos",name:"Hongo Cálido",description:"Sombrero redondeado con tono de solcito.",sprite:En,gridWidth:1,gridHeight:1,terrain:"tierra",behavior:"quieto"},{id:"hongo-doble",category:"hongos",name:"Hongo Doble",description:"Dos compañeros creciendo pegaditos.",sprite:wn,gridWidth:1,gridHeight:1,terrain:"tierra",behavior:"quieto"},{id:"hongo-crema",category:"hongos",name:"Honguito Crema",description:"Suave y claro como la luna llena.",sprite:Nn,gridWidth:1,gridHeight:1,terrain:"ambos",behavior:"quieto"},{id:"hongo-musgoso",category:"hongos",name:"Hongo del Musgo",description:"Creció sobre una alfombra verde tierna.",sprite:kn,gridWidth:1,gridHeight:1,terrain:"ambos",behavior:"quieto"},{id:"planta-juncos",category:"plantas",name:"Juncos del Estanque",description:"Se mecen suavemente con la brisa.",sprite:An,gridWidth:1,gridHeight:1,terrain:"ambos",behavior:"parpadear"},{id:"planta-helecho",category:"plantas",name:"Helecho Suave",description:"Hojas arqueadas que abrazan la tierra.",sprite:Hn,gridWidth:1,gridHeight:1,terrain:"ambos",behavior:"quieto"},{id:"planta-flor-loto",category:"plantas",name:"Flor de Loto",description:"Se abre en el agua con calma absoluta.",sprite:Gn,gridWidth:1,gridHeight:1,terrain:"agua",behavior:"quieto"},{id:"planta-trebol",category:"plantas",name:"Trébol del Bosque",description:"Tres hojitas verdes para dar buena sombra.",sprite:zn,gridWidth:1,gridHeight:1,terrain:"ambos",behavior:"quieto"},{id:"planta-brote",category:"plantas",name:"Brotecito Tierno",description:"Recién asoma de la tierra húmeda.",sprite:Ln,gridWidth:1,gridHeight:1,terrain:"ambos",behavior:"quieto"},{id:"agua-nenufar-rosa",category:"agua",name:"Nenúfar Florecido",description:"Una florcita descansando sobre la hoja verde.",sprite:jn,gridWidth:1,gridHeight:1,terrain:"agua",behavior:"quieto"},{id:"agua-hojita-barco",category:"agua",name:"Hojita Barco",description:"Flota suave como un barquito de papel.",sprite:Rn,gridWidth:1,gridHeight:1,terrain:"agua",behavior:"quieto"},{id:"agua-ondas",category:"agua",name:"Ondas en el Agua",description:"Un círculo que se expande en silencio.",sprite:qn,gridWidth:1,gridHeight:1,terrain:"agua",behavior:"parpadear"},{id:"agua-piedra-rio",category:"agua",name:"Piedra de Arroyo",description:"Redondeada y suave por el agua fresca.",sprite:Bn,gridWidth:1,gridHeight:1,terrain:"ambos",behavior:"quieto"},{id:"cielo-estrella",category:"cielo",name:"Estrella Mansa",description:"Titila despacio cuidando la noche.",sprite:Dn,gridWidth:1,gridHeight:1,terrain:"cielo",behavior:"parpadear"},{id:"cielo-nubecita",category:"cielo",name:"Nubecita Baja",description:"Pasa despacio como un algodón.",sprite:In,gridWidth:1,gridHeight:1,terrain:"cielo",behavior:"quieto"},{id:"cielo-trio-estrellas",category:"cielo",name:"Trío de Estrellas",description:"Tres luces que se acompañan en lo alto.",sprite:Pn,gridWidth:1,gridHeight:1,terrain:"cielo",behavior:"parpadear"},{id:"cielo-halo-luna",category:"cielo",name:"Halo de Luna",description:"Luz tenue que ilumina el estanque.",sprite:Vn,gridWidth:1,gridHeight:1,terrain:"cielo",behavior:"quieto"},{id:"cosa-farol",category:"cositas",name:"Farol de Luciérnagas",description:"Luz cálida y mansa para la noche.",sprite:_n,gridWidth:1,gridHeight:1,terrain:"ambos",behavior:"parpadear"},{id:"cosa-tronquito",category:"cositas",name:"Tronco Caído",description:"Un puente de madera tapizado de musgo.",sprite:On,gridWidth:1,gridHeight:1,terrain:"ambos",behavior:"quieto"},{id:"cosa-cartelito",category:"cositas",name:"Cartelito de Madera",description:"Un rincón señalado con cariño.",sprite:$n,gridWidth:1,gridHeight:1,terrain:"ambos",behavior:"quieto"},{id:"cosa-piedras-apiladas",category:"cositas",name:"Piedritas en Equilibrio",description:"Un pequeño monumento a la paciencia.",sprite:Wn,gridWidth:1,gridHeight:1,terrain:"ambos",behavior:"quieto"}],ft=new Map(oa.map(t=>[t.id,t]));function Fn(t,e,a,r=Math.random){if(t.lastGiftDate===e)return{gift:null,newObtainedIds:[...t.obtainedIds],giftedToday:!0};const o=a.filter(s=>!t.obtainedIds.includes(s.id));if(o.length===0)return{gift:null,newObtainedIds:[...t.obtainedIds],giftedToday:!1};const i=Math.floor(r()*o.length),d=o[i];return{gift:d,newObtainedIds:[...t.obtainedIds,d.id],giftedToday:!1}}const Jt=5,Qt=5;function Na(t,e){return e===0?"cielo":e===1||e===4?"tierra":"agua"}function Xt(t,e){return t==="cielo"?e==="cielo":t==="ambos"?e==="tierra"||e==="agua":t===e}function Un(t,e,a=1,r=1){return!(t<0||e<0||t+a>Jt||e+r>Qt)}function Yn(t,e,a,r,o){if(!Un(a,r,e.gridWidth,e.gridHeight))return!1;for(let i=0;i<e.gridHeight;i++)for(let d=0;d<e.gridWidth;d++){const s=Na(a+d,r+i);if(!Xt(e.terrain,s))return!1}for(const i of t)if(i.x===a&&i.y===r)return!1;return!0}function Jn(t,e,a,r){if(!Yn(t,e,a,r))return t;const o={id:`placed_${e.id}_${Date.now()}_${Math.floor(Math.random()*1e3)}`,catalogId:e.id,x:a,y:r};return[...t,o]}function Qn(t,e){return t.filter(a=>a.id!==e)}const ka="roro_setting_sound",Aa="roro_setting_vibration";let _t=null;function Xn(){if(typeof window>"u")return null;try{if(!_t){const t=window.AudioContext||window.webkitAudioContext;t&&(_t=new t)}return _t}catch{return null}}function Ha(){try{return typeof window>"u"||!window.localStorage?!1:window.localStorage.getItem(ka)==="true"}catch{return!1}}function Zn(t){try{typeof window<"u"&&window.localStorage&&window.localStorage.setItem(ka,t?"true":"false")}catch{}}function Ga(){try{return typeof window>"u"||!window.localStorage?!1:window.localStorage.getItem(Aa)==="true"}catch{return!1}}function Kn(t){try{typeof window<"u"&&window.localStorage&&window.localStorage.setItem(Aa,t?"true":"false")}catch{}}function Zt(){if(Ha())try{const t=Xn();if(!t)return;t.state==="suspended"&&t.resume().catch(()=>{});const e=t.currentTime,a=1.4,r=t.createGain();r.gain.setValueAtTime(.001,e),r.gain.linearRampToValueAtTime(.12,e+.04),r.gain.exponentialRampToValueAtTime(1e-4,e+a),r.connect(t.destination);const o=t.createOscillator();o.type="sine",o.frequency.setValueAtTime(528,e),o.connect(r);const i=t.createOscillator();i.type="sine",i.frequency.setValueAtTime(1056,e);const d=t.createGain();d.gain.setValueAtTime(.03,e),d.gain.exponentialRampToValueAtTime(1e-4,e+a*.8),i.connect(d),d.connect(r),o.start(e),i.start(e),o.stop(e+a),i.stop(e+a)}catch{}}function eo(t=40){if(Ga())try{typeof navigator<"u"&&typeof navigator.vibrate=="function"&&navigator.vibrate(t)}catch{}}function vt(){Zt(),eo(40)}function to(t){t.innerHTML="";let e=Ae();const a=bt();let o=window.location.hash.includes("modo=acomodar"),i=null;if(o){const A=window.location.hash.match(/item=([^&]+)/);A&&A[1]&&(i=A[1])}let d="tranquila";const s=xt();if(s.success&&s.data&&s.data.length>0){for(const A of s.data)if((A.type==="checkin"||A.type==="diario")&&"mood"in A.data&&A.data.mood){d=A.data.mood;break}}const T=s.success&&s.data?s.data.some(A=>A.date===a):!1;let c=null;if(T&&e.lastGiftDate!==a){const A=Fn({obtainedIds:e.obtainedItemIds,lastGiftDate:e.lastGiftDate},a,oa);A.gift&&(c=A.gift)}const l=vn(new Date,e.hemisphere),u=document.createElement("section");u.className="jardin-screen",u.setAttribute("role","main"),u.setAttribute("aria-label",n.jardin.title);const x=document.createElement("style");x.textContent=`
    .jardin-screen {
      flex: 1;
      width: 100%;
      height: 100%;
      box-sizing: border-box;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: space-between;
      padding: var(--space-sm) var(--space-md) var(--space-md);
      background: linear-gradient(
        180deg,
        ${l.skyColors.top} 0%,
        ${l.skyColors.bottom} 55%,
        ${l.foliageColor} 100%
      );
      overflow-y: auto;
      position: relative;
    }

    .jardin-nav {
      width: 100%;
      display: flex;
      flex-wrap: nowrap;
      align-items: center;
      justify-content: space-between;
      gap: 4px;
      z-index: 10;
    }

    .nav-btn {
      font-family: var(--font-ui);
      font-size: 11px;
      font-weight: 600;
      color: var(--color-tinta);
      background-color: var(--color-menta);
      border: 1.5px solid var(--color-bosque);
      border-radius: var(--border-radius-sm);
      padding: 6px 4px;
      min-height: 40px;
      cursor: pointer;
      line-height: 1.2;
      white-space: nowrap;
      text-align: center;
      box-sizing: border-box;
      transition: transform var(--transition-fast), opacity var(--transition-fast);
      display: inline-flex;
      align-items: center;
      justify-content: center;
      gap: 4px;
      flex: 1 1 0;
      min-width: 0;
    }

    .nav-btn.nav-btn-icon {
      flex: 0 0 40px;
      min-width: 40px;
      max-width: 40px;
      padding: 0;
    }

    .nav-btn:hover {
      opacity: 0.9;
      transform: translateY(-1px);
    }

    .nav-btn:focus-visible {
      outline: 3px solid var(--color-acento);
      outline-offset: 3px;
    }

    .nav-btn.active {
      background-color: var(--color-bosque);
      color: var(--color-crema);
      border-color: var(--color-tinta);
    }

    .jardin-header {
      text-align: center;
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 2px;
      margin: var(--space-xs) 0;
    }

    .jardin-title {
      font-family: var(--font-pixel);
      font-size: 0.75rem;
      color: var(--color-bosque);
      line-height: 1.6;
      margin: 0;
    }

    .frog-name-badge {
      font-family: var(--font-pixel);
      font-size: 0.5625rem;
      color: var(--color-tinta);
      background-color: var(--color-overlay-crema);
      padding: 2px 8px;
      border-radius: var(--border-radius-sm);
      border: 1px solid var(--color-bosque);
      margin-top: 2px;
    }

    .jardin-world-hint {
      font-family: var(--font-ui);
      font-size: var(--font-size-xs);
      color: var(--color-tinta);
      margin: 0;
      opacity: 0.85;
    }

    .stage-wrapper {
      position: relative;
      width: 100%;
      max-width: 320px;
      display: flex;
      flex-direction: column;
      align-items: center;
      margin: var(--space-xs) 0;
    }

    .canvas-container {
      position: relative;
      width: 280px;
      height: 220px;
      background: transparent;
      border: 3px solid var(--color-tinta);
      border-radius: var(--border-radius-lg);
      overflow: hidden;
      box-shadow: var(--shadow-sm);
      cursor: pointer;
    }

    .stage-canvas {
      width: 100%;
      height: 100%;
      image-rendering: pixelated;
      display: block;
    }

    .frog-speech-bubble {
      position: absolute;
      top: 22%;
      left: 50%;
      transform: translate(-50%, -50%);
      background-color: var(--color-crema);
      border: 2px solid var(--color-tinta);
      border-radius: var(--border-radius-sm);
      padding: 6px 14px;
      font-family: var(--font-ui);
      font-size: var(--font-size-sm);
      font-weight: 600;
      color: var(--color-tinta);
      box-shadow: 0 4px 14px rgba(43, 58, 66, 0.28);
      pointer-events: auto;
      cursor: pointer;
      z-index: 30;
      white-space: nowrap;
      text-align: center;
      animation: floatSpeech 4s ease-out forwards;
      user-select: none;
    }

    .frog-speech-bubble::after {
      content: '';
      position: absolute;
      bottom: -7px;
      left: 50%;
      transform: translateX(-50%);
      border-width: 7px 6px 0 6px;
      border-style: solid;
      border-color: var(--color-tinta) transparent transparent transparent;
    }

    @keyframes floatSpeech {
      0% { opacity: 0; transform: translate(-50%, -35%) scale(0.9); }
      8% { opacity: 1; transform: translate(-50%, -50%) scale(1); }
      85% { opacity: 1; transform: translate(-50%, -50%) scale(1); }
      100% { opacity: 0; transform: translate(-50%, -58%) scale(0.95); }
    }

    @media (prefers-reduced-motion: reduce) {
      .frog-speech-bubble {
        animation: none;
        opacity: 1;
        transform: translate(-50%, -50%);
      }
    }

    /* Grilla de colocación (Modo Acomodar) */
    .decor-grid-overlay {
      position: absolute;
      inset: 0;
      display: grid;
      grid-template-columns: repeat(5, 1fr);
      grid-template-rows: repeat(5, 1fr);
      gap: 0;
      padding: 0;
      box-sizing: border-box;
      background-color: rgba(43, 58, 66, 0.35);
      z-index: 15;
    }

    .grid-cell-btn {
      background-color: rgba(246, 239, 201, 0.15);
      border: 1px dashed rgba(246, 239, 201, 0.45);
      border-radius: 0;
      cursor: pointer;
      display: flex;
      align-items: center;
      justify-content: center;
      padding: 0;
      box-sizing: border-box;
      position: relative;
      transition: background-color var(--transition-fast), border-color var(--transition-fast);
      width: 100%;
      height: 100%;
    }

    .grid-cell-btn:hover, .grid-cell-btn:focus-visible {
      background-color: rgba(246, 239, 201, 0.5);
      outline: 2px solid var(--color-acento);
      outline-offset: -2px;
    }

    .grid-cell-btn.cell-compatible {
      background-color: rgba(142, 209, 207, 0.4);
      border: 2px dashed var(--color-menta);
      animation: pulseCell 2s infinite ease-in-out;
    }

    .grid-cell-btn.cell-incompatible {
      opacity: 0.25;
      cursor: not-allowed;
    }

    @keyframes pulseCell {
      0%, 100% { background-color: rgba(142, 209, 207, 0.3); }
      50% { background-color: rgba(142, 209, 207, 0.6); }
    }

    .grid-cell-btn.center-frog {
      background-color: rgba(63, 111, 94, 0.45);
      border: 1px solid var(--color-bosque);
      cursor: default;
    }

    .cell-placed-badge {
      font-size: 11px;
      font-weight: 700;
      color: var(--color-crema);
      background: var(--color-bosque);
      border-radius: 50%;
      width: 18px;
      height: 18px;
      display: flex;
      align-items: center;
      justify-content: center;
      box-shadow: 0 1px 3px rgba(0,0,0,0.3);
    }

    .acomodar-panel {
      width: 100%;
      background-color: var(--color-crema);
      border: 2px solid var(--color-tinta);
      border-radius: var(--border-radius-md);
      padding: var(--space-xs) var(--space-sm);
      margin-top: var(--space-xs);
      display: flex;
      flex-direction: column;
      gap: var(--space-xs);
    }

    .acomodar-items-row {
      display: flex;
      gap: var(--space-xs);
      overflow-x: auto;
      padding: 4px 2px;
    }

    .acomodar-item-thumb {
      width: 44px;
      height: 44px;
      background-color: var(--color-salvia);
      border: 2px solid var(--color-bosque);
      border-radius: var(--border-radius-sm);
      display: flex;
      align-items: center;
      justify-content: center;
      cursor: pointer;
      flex-shrink: 0;
      transition: transform var(--transition-fast);
      padding: 0;
    }

    .acomodar-item-thumb.selected {
      border: 3px solid var(--color-acento);
      transform: translateY(-2px);
    }

    .jardin-actions {
      width: 100%;
      max-width: 270px;
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 6px;
      margin-top: var(--space-xs);
      box-sizing: border-box;
      transition: align-self var(--transition-fast), transform var(--transition-fast);
    }

    .jardin-actions.hand-right {
      align-self: flex-end;
      margin-right: 0;
    }

    .jardin-actions.hand-left {
      align-self: flex-start;
      margin-left: 0;
    }

    .jardin-actions.hand-center {
      align-self: center;
      margin-left: auto;
      margin-right: auto;
    }

    .action-btn {
      font-family: var(--font-ui);
      font-size: var(--font-size-sm);
      font-weight: 600;
      color: var(--color-crema);
      background-color: var(--color-bosque);
      border: 2px solid var(--color-tinta);
      border-radius: var(--border-radius-md);
      padding: var(--space-xs) var(--space-xs);
      min-height: var(--touch-target-min);
      cursor: pointer;
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 6px;
      text-align: center;
      line-height: 1.25;
      white-space: normal;
      overflow-wrap: break-word;
      word-break: break-word;
      box-sizing: border-box;
      transition: transform var(--transition-fast), opacity var(--transition-fast);
    }

    .action-btn.secondary {
      background-color: var(--color-musgo);
    }

    .action-btn.tertiary {
      background-color: var(--color-salvia);
      color: var(--color-tinta);
      border-color: var(--color-bosque);
    }

    .action-btn:hover {
      opacity: 0.92;
      transform: translateY(-1px);
    }

    .action-btn:focus-visible {
      outline: 3px solid var(--color-acento);
      outline-offset: 3px;
    }

    /* Modal de Regalo y de Nombre */
    .modal-overlay {
      position: absolute;
      inset: 0;
      background-color: rgba(43, 58, 66, 0.65);
      display: flex;
      align-items: center;
      justify-content: center;
      padding: var(--space-md);
      z-index: 50;
      backdrop-filter: blur(2px);
    }

    .modal-card {
      background-color: var(--color-crema);
      border: 3px solid var(--color-tinta);
      border-radius: var(--border-radius-lg);
      padding: var(--space-md);
      max-width: 320px;
      width: 100%;
      box-sizing: border-box;
      display: flex;
      flex-direction: column;
      align-items: center;
      text-align: center;
      gap: var(--space-sm);
      box-shadow: var(--shadow-desktop-frame);
    }

    .modal-title {
      font-family: var(--font-pixel);
      font-size: 0.6875rem;
      color: var(--color-bosque);
      margin: 0;
      line-height: 1.6;
    }

    .modal-desc {
      font-family: var(--font-ui);
      font-size: var(--font-size-sm);
      color: var(--color-tinta);
      line-height: 1.4;
      margin: 0;
    }

    .name-input {
      font-family: var(--font-ui);
      font-size: var(--font-size-md);
      padding: var(--space-sm);
      border: 2px solid var(--color-bosque);
      border-radius: var(--border-radius-sm);
      width: 100%;
      box-sizing: border-box;
      text-align: center;
      background-color: var(--color-menta);
      color: var(--color-tinta);
    }

    .name-input:focus {
      outline: 3px solid var(--color-acento);
    }

    .reminder-inapp-banner {
      width: 100%;
      max-width: 320px;
      background-color: var(--color-crema);
      border: 2px solid var(--color-bosque);
      border-radius: var(--border-radius-md);
      padding: var(--space-xs) var(--space-sm);
      display: flex;
      align-items: center;
      justify-content: space-between;
      gap: var(--space-xs);
      box-shadow: var(--shadow-sm);
      margin-top: 4px;
    }

    .reminder-banner-text {
      font-family: var(--font-ui);
      font-size: var(--font-size-xs);
      color: var(--color-tinta);
      margin: 0;
      line-height: 1.35;
    }

    .reminder-banner-btn {
      font-family: var(--font-ui);
      font-size: var(--font-size-xs);
      font-weight: 600;
      background-color: var(--color-salvia);
      color: var(--color-tinta);
      border: 1px solid var(--color-bosque);
      border-radius: var(--border-radius-sm);
      padding: 6px 10px;
      cursor: pointer;
      flex-shrink: 0;
      min-height: 36px;
      box-sizing: border-box;
    }

    .support-card-section {
      width: 100%;
      max-width: 320px;
      background-color: var(--color-crema);
      border: 2px solid var(--color-salvia);
      border-radius: var(--border-radius-md);
      padding: var(--space-sm) var(--space-md);
      display: flex;
      flex-direction: column;
      gap: var(--space-xs);
      margin-top: var(--space-xs);
      box-shadow: var(--shadow-sm);
    }

    .support-card-title {
      font-family: var(--font-pixel);
      font-size: 0.625rem;
      color: var(--color-bosque);
      margin: 0;
    }

    .support-card-msg {
      font-family: var(--font-ui);
      font-size: var(--font-size-xs);
      color: var(--color-tinta);
      line-height: 1.45;
      margin: 0;
    }

    .support-actions-row {
      display: flex;
      gap: var(--space-xs);
      margin-top: 4px;
    }

    .support-action-btn {
      flex: 1;
      font-family: var(--font-ui);
      font-size: var(--font-size-xs);
      font-weight: 600;
      padding: var(--space-xs);
      border-radius: var(--border-radius-sm);
      text-align: center;
      cursor: pointer;
      text-decoration: none;
      display: inline-flex;
      align-items: center;
      justify-content: center;
      min-height: 38px;
    }

    .support-action-btn.primary {
      background-color: var(--color-salvia);
      color: var(--color-tinta);
      border: 1px solid var(--color-bosque);
    }

    .support-action-btn.secondary {
      background-color: transparent;
      color: var(--color-tinta);
      border: 1px solid var(--color-agua-profunda);
    }

    .support-never-link {
      align-self: center;
      font-family: var(--font-ui);
      font-size: 11px;
      color: var(--color-agua-profunda);
      background: none;
      border: none;
      cursor: pointer;
      text-decoration: underline;
      padding: 4px;
    }

    /* Adaptación a PC / Pantallas de escritorio */
    @media (min-width: 601px) {
      .jardin-nav {
        max-width: 560px;
      }

      .stage-wrapper {
        max-width: 560px;
      }

      .canvas-container {
        width: 560px;
        height: 440px;
        border-width: 4px;
        border-radius: var(--border-radius-frame);
        box-shadow: var(--shadow-desktop-frame);
      }

      .frog-speech-bubble {
        font-size: var(--font-size-md);
        padding: 8px 18px;
      }

      .jardin-actions {
        max-width: 480px;
        align-self: center !important;
        margin-left: auto !important;
        margin-right: auto !important;
        gap: 10px;
      }

      .action-btn {
        font-size: var(--font-size-md);
        padding: 10px 14px;
      }

      .reminder-inapp-banner,
      .support-card-section {
        max-width: 560px;
      }
    }
  `,document.head.appendChild(x);const C=document.createElement("nav");C.className="jardin-nav",C.setAttribute("aria-label","Navegación del jardín");const M=document.createElement("button");M.className="nav-btn",M.textContent=n.app.back,M.setAttribute("aria-label","Volver al inicio"),M.addEventListener("click",()=>{window.location.hash="#/"});const p=document.createElement("button");p.className="nav-btn",p.appendChild(te("heart",{size:12})),p.appendChild(document.createTextNode(n.jardin.coleccionBtn)),p.setAttribute("aria-label","Ver mi colección"),p.addEventListener("click",()=>{window.location.hash="#/micoleccion"});const m=document.createElement("button");m.className=`nav-btn ${o?"active":""}`,m.appendChild(te("rotate",{size:12})),m.appendChild(document.createTextNode(n.jardin.decorarBtn)),m.setAttribute("aria-label","Acomodar elementos"),m.addEventListener("click",()=>{o=!o,_e()});const h=document.createElement("button");if(h.className="nav-btn nav-btn-icon",h.appendChild(te("gear",{size:14})),h.setAttribute("aria-label","Ajustes"),h.addEventListener("click",()=>{window.location.hash="#/ajustes"}),C.appendChild(M),C.appendChild(p),C.appendChild(m),e.showWeekInGarden!==!1){const A=document.createElement("button");A.className="nav-btn",A.appendChild(te("bookOpen",{size:12})),A.appendChild(document.createTextNode(n.jardin.semanaBtn)),A.setAttribute("aria-label","Ver resumen de mi semana"),A.addEventListener("click",()=>{window.location.hash="#/semana"}),C.appendChild(A)}C.appendChild(h);const v=document.createElement("header");v.className="jardin-header";const f=document.createElement("h1");if(f.className="jardin-title",f.textContent=n.jardin.title,v.appendChild(f),e.frogName){const A=document.createElement("span");A.className="frog-name-badge",A.textContent=`Sapo: ${e.frogName}`,v.appendChild(A)}const g=document.createElement("p");g.className="jardin-world-hint",g.textContent=l.label,v.appendChild(g);const y=document.createElement("div");y.className="stage-wrapper";const N=document.createElement("div");N.className="canvas-container";const b=140,k=110,{canvas:H,ctx:S}=Pe(b*2,k*2);H.className="stage-canvas",N.appendChild(H);let w=null,E=null,I=0,O=null,L=0;const z=()=>{const A=performance.now();if(A-L<250)return;L=A,Zt(),I=-10,O&&clearTimeout(O),O=setTimeout(()=>{I=0},280),E&&(clearTimeout(E),E=null),w&&(w.remove(),w=null);const G=n.jardin.frogTap[Math.floor(Math.random()*n.jardin.frogTap.length)];w=document.createElement("div"),w.className="frog-speech-bubble",w.textContent=G,w.title="Tocá para cerrar",w.addEventListener("click",P=>{P.stopPropagation(),E&&(clearTimeout(E),E=null),w==null||w.remove(),w=null}),N.appendChild(w),E=setTimeout(()=>{w==null||w.remove(),w=null,E=null},4e3)};N.addEventListener("click",A=>{if(o)return;const G=N.getBoundingClientRect(),P=A.clientX-G.left,j=A.clientY-G.top,$=b*2/G.width,R=k*2/G.height,V=P*$,he=j*R;Math.hypot(V-136,he-124)<55&&z()});const D=rt[d]??va,K=fe(D),pe=fe(ga),J=fe(ba),ge=new Map,ee=()=>{ge.clear();for(const A of e.placedDecorations){const G=ft.get(A.catalogId);G&&ge.set(A.id,fe(G.sprite))}};ee();let Q=null,be=0;const me=1e3/30;let W=!0;const ae=window.matchMedia("(prefers-reduced-motion: reduce)").matches,_=e.gardenAnimationsEnabled&&!ae,Y=A=>{S.fillStyle=l.skyColors.top,S.fillRect(0,0,b*2,38),S.fillStyle=l.skyColors.bottom,S.fillRect(0,38,b*2,16);for(let B=0;B<b*2;B+=4)S.fillRect(B+(B%8===0?0:2),36,2,2);if(l.isNight){oe(S,J,210,8,2);const B=A*.003,de=[{x:34,y:12,s:2,phase:0},{x:68,y:22,s:1,phase:1.2},{x:110,y:15,s:2,phase:2.4},{x:154,y:10,s:1,phase:3.6},{x:178,y:24,s:2,phase:.8},{x:260,y:18,s:1,phase:4.8}];for(const ue of de){const Oe=Math.sin(B+ue.phase);S.fillStyle=Oe>.3?ce.crema:ce.azulNiebla,S.fillRect(ue.x,ue.y,ue.s,ue.s),ue.s>1&&Oe>.7&&(S.fillRect(ue.x-1,ue.y,1,1),S.fillRect(ue.x+ue.s,ue.y,1,1))}}else S.fillStyle=l.skyColors.bottom===ce.azulNiebla?ce.crema:ce.menta,S.fillRect(28,16,20,6),S.fillRect(32,12,12,4),S.fillRect(160,22,24,6),S.fillRect(166,18,14,4);S.fillStyle=ce.bosque,S.fillRect(0,50,b*2,4);for(let B=0;B<b*2;B+=18)S.fillRect(B+2,46,14,6),S.fillRect(B+4,44,10,3);S.fillStyle=l.foliageColor,S.fillRect(0,52,b*2,34),S.fillStyle=ce.crema,S.fillRect(24,62,2,2),S.fillRect(96,68,2,2),S.fillRect(180,60,2,2),S.fillRect(244,64,2,2),S.fillStyle=ce.acento,S.fillRect(58,66,2,2),S.fillRect(138,58,2,2),S.fillRect(212,70,2,2),S.fillStyle=ce.bosque,S.beginPath(),S.ellipse(b,137,133,49,0,0,Math.PI*2),S.fill(),S.fillStyle=ce.musgo,S.beginPath(),S.ellipse(b,137,130,46,0,0,Math.PI*2),S.fill(),S.fillStyle=l.waterColor,S.beginPath(),S.ellipse(b,137,126,43,0,0,Math.PI*2),S.fill();const G=A*.002;S.fillStyle=ce.turquesa,S.fillRect(40+Math.sin(G)*4,120,22,2),S.fillRect(180+Math.sin(G+1)*5,126,26,2),S.fillRect(60+Math.sin(G+2)*4,150,18,2),S.fillRect(195+Math.sin(G+3)*5,156,24,2),S.fillStyle=ce.celesteAgua,S.fillRect(90+Math.cos(G)*3,114,16,1),S.fillRect(150+Math.cos(G+2)*3,162,20,1),S.strokeStyle=ce.turquesa,S.lineWidth=1,S.beginPath(),S.ellipse(b,152,38+Math.sin(G*1.5)*2,10,0,0,Math.PI*2),S.stroke(),S.fillStyle=l.foliageColor,S.fillRect(0,184,b*2,36),S.fillStyle=ce.bosque;for(let B=0;B<b*2;B+=8)S.fillRect(B+2,182,3,4),S.fillRect(B+4,180,2,4);S.fillStyle=ce.salvia;for(let B=0;B<b*2;B+=12)S.fillRect(B+1,183,2,3);S.fillStyle=ce.azulNiebla,S.fillRect(16,204,6,4),S.fillRect(18,202,4,2),S.fillRect(256,206,7,4),S.fillRect(258,204,4,2),S.fillStyle=ce.tinta,S.fillRect(16,208,6,1),S.fillRect(256,210,7,1);const P=b*2/Jt,j=k*2/Qt;for(const B of e.placedDecorations){const de=ge.get(B.id);if(de){_&&Ut(de,A);const ue=Math.round(B.x*P+(P-32)/2),Oe=Math.round(B.y*j+(j-32)/2);oe(S,de,ue,Oe,2)}}const $=Math.round(2*P+(P-56)/2),R=Math.round(3*j+(j-24)/2);oe(S,pe,$,R,2),_&&Ut(K,A);const V=$-4,he=R-44+I;oe(S,K,V,he,2)},Ce=A=>{if(!W)return;const G=A-be;G>me&&(be=A-G%me,Y(A)),_&&(Q=requestAnimationFrame(Ce))};Y(performance.now()),_&&(Q=requestAnimationFrame(Ce));const He=()=>{W=!document.hidden,W&&_?(be=performance.now(),Q=requestAnimationFrame(Ce)):Q&&cancelAnimationFrame(Q)};document.addEventListener("visibilitychange",He);const le=document.createElement("div");le.className="decor-grid-overlay",le.style.display=o?"grid":"none";const Me=document.createElement("div");Me.className="acomodar-panel",Me.style.display=o?"flex":"none";const Se=()=>{le.innerHTML="";const A=i?ft.get(i):null;for(let G=0;G<Qt;G++)for(let P=0;P<Jt;P++){const j=document.createElement("button");j.className="grid-cell-btn";const $=Na(P,G);if(j.title=`Fila ${G+1}, Columna ${P+1} (${$})`,P===2&&G===3){j.classList.add("center-frog"),j.disabled=!0,j.title="Lugar del sapo",j.innerHTML='<span style="font-size: 14px; opacity: 0.85;" aria-hidden="true">🐸</span>',le.appendChild(j);continue}const R=e.placedDecorations.find(V=>V.x===P&&V.y===G);if(R){const V=ft.get(R.catalogId);j.title=`${(V==null?void 0:V.name)||"Objeto"} (tocá para guardar en la colección)`,j.innerHTML='<span class="cell-placed-badge" title="Tocá para guardar">✓</span>',j.addEventListener("click",()=>{e={...e,placedDecorations:Qn(e.placedDecorations,R.id)},U(e),ee(),Se(),Ve(),Y(performance.now())})}else A&&(Xt(A.terrain,$)?(j.classList.add("cell-compatible"),j.title=`Colocar ${A.name} acá (${$})`):j.classList.add("cell-incompatible")),j.addEventListener("click",()=>{if(!i)return;const V=ft.get(i);if(!V)return;if(!Xt(V.terrain,$)){const B=Me.querySelector(".acomodar-hint");B&&(B.textContent=`🌱 ${V.name} prefiere terreno de ${V.terrain}.`,B.style.color="var(--color-acento)",setTimeout(()=>{B.textContent="Tocá un casillero compatible para colocar:",B.style.color="var(--color-bosque)"},2500));return}const he=Jn(e.placedDecorations,V,P,G);e={...e,placedDecorations:he},U(e),ee(),i=null,Se(),Ve(),Y(performance.now())});le.appendChild(j)}},Ve=()=>{Me.innerHTML="";const A=document.createElement("span");A.className="acomodar-hint",A.style.cssText="font-family: var(--font-pixel); font-size: 0.5625rem; color: var(--color-bosque); line-height: 1.4;",A.textContent=i?"Tocá un casillero iluminado para colocar:":n.jardin.gridHint,Me.appendChild(A);const G=document.createElement("div");G.className="acomodar-items-row";const P=new Set(e.placedDecorations.map(R=>R.catalogId)),j=e.obtainedItemIds.map(R=>ft.get(R)).filter(R=>!!R&&!P.has(R.id));if(j.length===0){const R=document.createElement("span");R.style.cssText="font-family: var(--font-ui); font-size: var(--font-size-xs); color: var(--color-tinta);",R.textContent="No tenés más objetos libres. Tocá uno colocado con ✓ para guardarlo.",G.appendChild(R)}else for(const R of j){const V=document.createElement("button");V.className=`acomodar-item-thumb ${i===R.id?"selected":""}`,V.title=`${R.name} (${R.terrain})`;const{canvas:he,ctx:B}=Pe(32,32),de=fe(R.sprite);oe(B,de,0,0,2),V.appendChild(he),V.addEventListener("click",()=>{i=i===R.id?null:R.id,Se(),Ve()}),G.appendChild(V)}Me.appendChild(G);const $=document.createElement("button");$.className="action-btn",$.style.cssText="padding: var(--space-xs); min-height: 40px; font-size: var(--font-size-sm);",$.textContent=n.jardin.gridDoneBtn,$.addEventListener("click",()=>{o=!1,_e()}),Me.appendChild($)},_e=()=>{le.style.display=o?"grid":"none",Me.style.display=o?"flex":"none",Ge.style.display=o?"none":"grid",m.classList.toggle("active",o),o&&(Se(),Ve())};N.appendChild(le),y.appendChild(N),y.appendChild(Me);const Ge=document.createElement("div"),Re=e.handMode||"right";Ge.className=`jardin-actions hand-${Re}`;const X=document.createElement("button");X.className="action-btn",X.appendChild(te("spa",{size:15})),X.appendChild(document.createTextNode(n.jardin.pausaBtn)),X.addEventListener("click",()=>{window.location.hash="#/pausa"});const ye=document.createElement("button");ye.className="action-btn secondary",ye.appendChild(te("frog",{size:15})),ye.appendChild(document.createTextNode(n.jardin.checkinBtn)),ye.addEventListener("click",()=>{window.location.hash="#/checkin"});const Ee=document.createElement("button");Ee.className="action-btn secondary",Ee.appendChild(te("moon",{size:15})),Ee.appendChild(document.createTextNode(n.jardin.diarioBtn)),Ee.addEventListener("click",()=>{window.location.hash="#/diario"});const xe=document.createElement("button");xe.className="action-btn tertiary",xe.appendChild(te("bookOpen",{size:15})),xe.appendChild(document.createTextNode(n.jardin.historialBtn)),xe.addEventListener("click",()=>{window.location.hash="#/historial"}),Ge.appendChild(X),Ge.appendChild(ye),Ge.appendChild(Ee),Ge.appendChild(xe);const qe=cn(e.reminders??[],new Date,e.dismissedInAppReminders??{},e.vacationMode,a);let re=null;if(qe){re=document.createElement("div"),re.className="reminder-inapp-banner",re.setAttribute("role","region"),re.setAttribute("aria-label","Recordatorio de pausa");const A=document.createElement("p");A.className="reminder-banner-text",A.textContent=`⏰ ${qe.eventText}`;const G=document.createElement("button");G.type="button",G.className="reminder-banner-btn",G.textContent="Aflojar",G.addEventListener("click",()=>{e={...e,dismissedInAppReminders:{...e.dismissedInAppReminders??{},[qe.id]:a}},U(e),re==null||re.remove(),window.location.hash="#/pausa"}),re.appendChild(A),re.appendChild(G)}let Z=null;const et=s.success&&s.data?s.data:[];if(dn({entries:et,currentDateStr:a,lastNoticeDateStr:e.lastSupportNoticeDate,supportSuggestionsEnabled:e.supportSuggestionsEnabled,vacationMode:e.vacationMode})){Z=document.createElement("article"),Z.className="support-card-section",Z.setAttribute("role","region"),Z.setAttribute("aria-label",n.apoyo.cardTitle);const A=document.createElement("h2");A.className="support-card-title",A.textContent=n.apoyo.cardTitle;const G=document.createElement("p");G.className="support-card-msg",G.textContent=n.apoyo.cardMessage;const P=document.createElement("div");P.className="support-actions-row";const j=document.createElement("a");j.className="support-action-btn primary",j.href="#/ayuda",j.textContent=n.apoyo.cardHelpBtn,j.addEventListener("click",()=>{e={...e,lastSupportNoticeDate:a},U(e)});const $=document.createElement("button");$.type="button",$.className="support-action-btn secondary",$.textContent=n.apoyo.cardDismissBtn,$.addEventListener("click",()=>{e={...e,lastSupportNoticeDate:a},U(e),Z==null||Z.remove()});const R=document.createElement("button");R.type="button",R.className="support-never-link",R.textContent=n.apoyo.cardNeverBtn,R.addEventListener("click",()=>{e={...e,supportSuggestionsEnabled:!1,lastSupportNoticeDate:a},U(e),Z==null||Z.remove()}),P.appendChild(j),P.appendChild($),Z.appendChild(A),Z.appendChild(G),Z.appendChild(P),Z.appendChild(R)}if(u.appendChild(C),u.appendChild(v),re&&u.appendChild(re),u.appendChild(y),Z&&u.appendChild(Z),u.appendChild(Ge),t.appendChild(u),o&&_e(),c){const A=c,G=document.createElement("div");G.className="modal-overlay";const P=document.createElement("div");P.className="modal-card";const j=document.createElement("h2");j.className="modal-title",j.textContent=n.jardin.giftTitle;const{canvas:$,ctx:R}=Pe(48,48),V=fe(A.sprite);oe(R,V,0,0,3);const he=document.createElement("h3");he.style.cssText="font-family: var(--font-pixel); font-size: 0.625rem; color: var(--color-tinta); margin: 0;",he.textContent=A.name;const B=document.createElement("p");B.className="modal-desc",B.textContent=A.description;const de=document.createElement("button");de.className="action-btn",de.textContent=n.jardin.giftDismiss,de.addEventListener("click",()=>{e={...e,obtainedItemIds:[...new Set([...e.obtainedItemIds,A.id])],lastGiftDate:a},U(e),G.remove(),Zt()}),P.appendChild(j),P.appendChild($),P.appendChild(he),P.appendChild(B),P.appendChild(de),G.appendChild(P),u.appendChild(G),de.focus()}if(!c&&!e.frogNameAnswered&&e.frogName===null){const A=document.createElement("div");A.className="modal-overlay";const G=document.createElement("div");G.className="modal-card";const P=document.createElement("h2");P.className="modal-title",P.textContent=n.jardin.frogNamePrompt;const j=document.createElement("input");j.type="text",j.maxLength=20,j.placeholder=n.jardin.frogNamePlaceholder,j.className="name-input";const $=document.createElement("div");$.style.cssText="display: flex; gap: var(--space-xs); width: 100%; margin-top: var(--space-xs);";const R=document.createElement("button");R.className="action-btn secondary",R.style.flex="1",R.style.padding="var(--space-xs)",R.style.fontSize="var(--font-size-sm)",R.textContent=n.jardin.frogNameSkip,R.addEventListener("click",()=>{e={...e,frogNameAnswered:!0},U(e),A.remove()});const V=document.createElement("button");V.className="action-btn",V.style.flex="1",V.style.padding="var(--space-xs)",V.style.fontSize="var(--font-size-sm)",V.textContent=n.jardin.frogNameSave,V.addEventListener("click",()=>{const he=j.value.trim();if(e={...e,frogName:he.length>0?he:null,frogNameAnswered:!0},U(e),A.remove(),e.frogName){const B=document.createElement("span");B.className="frog-name-badge",B.textContent=`Sapo: ${e.frogName}`,v.insertBefore(B,g)}}),$.appendChild(R),$.appendChild(V),G.appendChild(P),G.appendChild(j),G.appendChild($),A.appendChild(G),u.appendChild(A)}return()=>{Q&&cancelAnimationFrame(Q),document.removeEventListener("visibilitychange",He),O&&clearTimeout(O),x.remove()}}function ao(t){t.innerHTML="";const e=document.createElement("section");e.className="checkin-screen",e.setAttribute("role","main"),e.setAttribute("aria-label",n.checkin.title);const a=document.createElement("style");a.textContent=`
    .checkin-screen {
      flex: 1;
      width: 100%;
      height: 100%;
      box-sizing: border-box;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      padding: var(--space-md);
      background: linear-gradient(
        180deg,
        var(--color-celeste-agua) 0%,
        var(--color-menta) 70%,
        var(--color-salvia) 100%
      );
      overflow-y: auto;
    }

    .checkin-top {
      display: flex;
      flex-direction: column;
      gap: var(--space-sm);
    }

    .back-btn {
      font-family: var(--font-ui);
      font-size: var(--font-size-sm);
      font-weight: 600;
      color: var(--color-tinta);
      background-color: var(--color-menta);
      border: 2px solid var(--color-bosque);
      border-radius: var(--border-radius-sm);
      padding: var(--space-xs) var(--space-sm);
      min-height: var(--touch-target-min);
      min-width: var(--touch-target-min);
      cursor: pointer;
      align-self: flex-start;
      line-height: 1.3;
      display: inline-flex;
      align-items: center;
      justify-content: center;
      box-sizing: border-box;
      transition: transform var(--transition-fast), opacity var(--transition-fast);
    }

    .back-btn:hover {
      opacity: 0.9;
      transform: translateY(-1px);
    }

    .back-btn:focus-visible {
      outline: 3px solid var(--color-acento);
      outline-offset: 3px;
    }

    .checkin-header {
      text-align: center;
    }

    .checkin-title {
      font-family: var(--font-pixel);
      font-size: 0.75rem;
      color: var(--color-bosque);
      line-height: 1.8;
      margin: 0;
    }

    .checkin-subtitle {
      font-family: var(--font-ui);
      font-size: var(--font-size-sm);
      color: var(--color-agua-profunda);
      margin: var(--space-xs) 0 0;
      line-height: 1.4;
    }

    .moods-grid {
      display: grid;
      grid-template-columns: repeat(5, 1fr);
      gap: var(--space-xs);
      margin: var(--space-sm) 0;
    }

    @media (max-width: 380px) {
      .moods-grid {
        grid-template-columns: repeat(3, 1fr);
      }
    }

    .mood-card {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      padding: var(--space-xs);
      background-color: var(--color-menta);
      border: 2px solid var(--color-salvia);
      border-radius: var(--border-radius-md);
      cursor: pointer;
      min-height: 64px;
      transition: transform var(--transition-fast), border-color var(--transition-fast), background-color var(--transition-fast);
    }

    .mood-card:hover {
      transform: translateY(-2px);
      background-color: var(--color-celeste-agua);
    }

    .mood-card.selected {
      border: 3px solid var(--color-bosque);
      background-color: var(--color-crema);
      box-shadow: 0 4px 10px rgba(43, 58, 66, 0.2);
    }

    .mood-card:focus-visible {
      outline: 3px solid var(--color-acento);
      outline-offset: 2px;
    }

    .mood-label {
      font-family: var(--font-ui);
      font-size: var(--font-size-xs);
      font-weight: 600;
      color: var(--color-tinta);
      margin-top: var(--space-xs);
      text-align: center;
    }

    .mood-desc {
      font-family: var(--font-ui);
      font-size: var(--font-size-xs);
      color: var(--color-agua-profunda);
      text-align: center;
      min-height: 20px;
      margin: 0 0 var(--space-xs);
      font-style: italic;
    }

    .note-container {
      display: flex;
      flex-direction: column;
      gap: var(--space-xs);
      margin-bottom: var(--space-sm);
    }

    .note-label {
      font-family: var(--font-ui);
      font-size: var(--font-size-sm);
      font-weight: 600;
      color: var(--color-bosque);
    }

    .note-input {
      font-family: var(--font-ui);
      font-size: var(--font-size-md);
      color: var(--color-tinta);
      background-color: var(--color-crema);
      border: 2px solid var(--color-bosque);
      border-radius: var(--border-radius-sm);
      padding: var(--space-sm);
      min-height: 60px;
      resize: vertical;
      box-sizing: border-box;
      width: 100%;
    }

    .note-input:focus-visible {
      outline: 3px solid var(--color-acento);
      outline-offset: 2px;
    }

    .actions-row {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: var(--space-sm);
      width: 100%;
      margin-top: var(--space-sm);
    }

    .btn-action {
      font-family: var(--font-ui);
      font-size: var(--font-size-md);
      font-weight: 600;
      border-radius: var(--border-radius-md);
      padding: var(--space-sm) var(--space-md);
      min-height: var(--touch-target-min);
      cursor: pointer;
      text-align: center;
      display: flex;
      align-items: center;
      justify-content: center;
      transition: transform var(--transition-fast), opacity var(--transition-fast);
      box-sizing: border-box;
    }

    .btn-skip {
      background-color: var(--color-salvia);
      color: var(--color-tinta);
      border: 2px solid var(--color-bosque);
    }

    .btn-save {
      background-color: var(--color-bosque);
      color: var(--color-crema);
      border: 2px solid var(--color-tinta);
    }

    .btn-action:hover {
      opacity: 0.92;
      transform: translateY(-1px);
    }

    .btn-action:active {
      transform: translateY(1px);
    }

    .btn-action:focus-visible {
      outline: 3px solid var(--color-acento);
      outline-offset: 3px;
    }

    .toast-overlay {
      position: absolute;
      inset: 0;
      background-color: rgba(43, 58, 66, 0.6);
      display: flex;
      align-items: center;
      justify-content: center;
      padding: var(--space-lg);
      z-index: 50;
      backdrop-filter: blur(2px);
    }

    .toast-card {
      background-color: var(--color-crema);
      border: 3px solid var(--color-tinta);
      border-radius: var(--border-radius-lg);
      padding: var(--space-lg);
      max-width: 320px;
      text-align: center;
      display: flex;
      flex-direction: column;
      gap: var(--space-md);
      box-shadow: var(--shadow-desktop-frame);
    }

    .toast-message {
      font-family: var(--font-ui);
      font-size: var(--font-size-md);
      color: var(--color-tinta);
      line-height: 1.5;
      margin: 0;
    }
  `,document.head.appendChild(a);const r=document.createElement("div");r.className="checkin-top";const o=document.createElement("button");o.className="back-btn",o.textContent=n.app.back,o.setAttribute("aria-label","Volver al jardín"),o.addEventListener("click",()=>{window.location.hash="#/jardin"});const i=document.createElement("header");i.className="checkin-header";const d=document.createElement("h1");d.className="checkin-title",d.textContent=n.checkin.title;const s=document.createElement("p");s.className="checkin-subtitle",s.textContent=n.checkin.subtitle,i.appendChild(d),i.appendChild(s),r.appendChild(o),r.appendChild(i);const T=document.createElement("div");T.className="moods-grid",T.setAttribute("role","radiogroup"),T.setAttribute("aria-label","Seleccioná cómo llegás hoy");const c=document.createElement("p");c.className="mood-desc",c.textContent=n.moods.tranquila.description;let l="tranquila";const u=["contenta","tranquila","cansada","tensa","triste"],x=new Map;u.forEach(g=>{const y=document.createElement("button");y.className=`mood-card ${g===l?"selected":""}`,y.setAttribute("role","radio"),y.setAttribute("aria-checked",g===l?"true":"false"),y.setAttribute("aria-label",`${n.moods[g].label}: ${n.moods[g].description}`);const N=1,{canvas:b,ctx:k}=Pe(32*N,32*N),H=rt[g],S=fe(H);oe(k,S,0,0,N);const w=document.createElement("span");w.className="mood-label",w.textContent=n.moods[g].label,y.appendChild(b),y.appendChild(w),y.addEventListener("click",()=>{l=g,c.textContent=n.moods[g].description,x.forEach((E,I)=>{const O=I===l;E.className=`mood-card ${O?"selected":""}`,E.setAttribute("aria-checked",O?"true":"false")})}),x.set(g,y),T.appendChild(y)});const C=document.createElement("div");C.className="note-container";const M=document.createElement("label");M.className="note-label",M.htmlFor="checkin-note-input",M.textContent=n.checkin.promptText;const p=document.createElement("textarea");p.id="checkin-note-input",p.className="note-input",p.placeholder=n.checkin.placeholder,p.maxLength=280,C.appendChild(M),C.appendChild(p);const m=document.createElement("div");m.className="actions-row";const h=document.createElement("button");h.className="btn-action btn-skip",h.textContent=n.app.skip,h.setAttribute("aria-label","Saltar check-in sin guardar");const v=document.createElement("button");v.className="btn-action btn-save",v.textContent=n.app.save,v.setAttribute("aria-label","Guardar check-in de hoy"),m.appendChild(h),m.appendChild(v);const f=g=>{const y=document.createElement("div");y.className="toast-overlay",y.setAttribute("role","alert");const N=document.createElement("div");N.className="toast-card";const b=document.createElement("p");b.className="toast-message",b.textContent=g,N.appendChild(b),y.appendChild(N),e.appendChild(y),setTimeout(()=>{window.location.hash="#/jardin"},1800)};return v.addEventListener("click",()=>{const g=bt(),y=na("checkin",g);st({id:y,version:1,type:"checkin",date:g,createdAt:new Date().toISOString(),updatedAt:new Date().toISOString(),data:{mood:l,note:p.value.trim()||void 0}}),f(n.checkin.savedWarmth)}),h.addEventListener("click",()=>{f(n.checkin.skippedWarmth)}),e.appendChild(r),e.appendChild(T),e.appendChild(c),e.appendChild(C),e.appendChild(m),t.appendChild(e),()=>{a.remove()}}function no(t){t.innerHTML="";let e=0,a="tranquila",r="",o="",i="",d=null;const s=document.createElement("section");s.className="diario-screen",s.setAttribute("role","main"),s.setAttribute("aria-label",n.diario.title);const T=document.createElement("style");T.textContent=`
    .diario-screen {
      flex: 1;
      width: 100%;
      height: 100%;
      box-sizing: border-box;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      padding: var(--space-md);
      background: linear-gradient(
        180deg,
        var(--color-celeste-agua) 0%,
        var(--color-menta) 60%,
        var(--color-salvia) 100%
      );
      overflow-y: auto;
    }

    .diario-top {
      display: flex;
      flex-direction: column;
      gap: var(--space-xs);
    }

    .back-btn {
      font-family: var(--font-ui);
      font-size: var(--font-size-sm);
      font-weight: 600;
      color: var(--color-tinta);
      background-color: var(--color-menta);
      border: 2px solid var(--color-bosque);
      border-radius: var(--border-radius-sm);
      padding: var(--space-xs) var(--space-sm);
      min-height: var(--touch-target-min);
      min-width: var(--touch-target-min);
      cursor: pointer;
      align-self: flex-start;
      line-height: 1.3;
      display: inline-flex;
      align-items: center;
      justify-content: center;
      box-sizing: border-box;
      transition: transform var(--transition-fast), opacity var(--transition-fast);
    }

    .back-btn:hover {
      opacity: 0.9;
      transform: translateY(-1px);
    }

    .back-btn:focus-visible {
      outline: 3px solid var(--color-acento);
      outline-offset: 3px;
    }

    .step-indicator {
      font-family: var(--font-pixel);
      font-size: 0.5rem;
      color: var(--color-musgo);
      margin: 0;
      text-align: center;
    }

    .diario-header {
      text-align: center;
    }

    .diario-title {
      font-family: var(--font-pixel);
      font-size: 0.75rem;
      color: var(--color-bosque);
      line-height: 1.6;
      margin: 0;
    }

    .diario-subtitle {
      font-family: var(--font-ui);
      font-size: var(--font-size-sm);
      color: var(--color-agua-profunda);
      margin: var(--space-xs) 0 0;
      line-height: 1.4;
    }

    .moods-grid {
      display: grid;
      grid-template-columns: repeat(5, 1fr);
      gap: var(--space-xs);
      margin: var(--space-sm) 0;
    }

    @media (max-width: 380px) {
      .moods-grid {
        grid-template-columns: repeat(3, 1fr);
      }
    }

    .mood-card {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      padding: var(--space-xs);
      background-color: var(--color-menta);
      border: 2px solid var(--color-salvia);
      border-radius: var(--border-radius-md);
      cursor: pointer;
      min-height: 64px;
      transition: transform var(--transition-fast), border-color var(--transition-fast), background-color var(--transition-fast);
    }

    .mood-card.selected {
      border: 3px solid var(--color-bosque);
      background-color: var(--color-crema);
      box-shadow: 0 4px 10px rgba(43, 58, 66, 0.2);
    }

    .mood-label {
      font-family: var(--font-ui);
      font-size: var(--font-size-xs);
      font-weight: 600;
      color: var(--color-tinta);
      margin-top: var(--space-xs);
      text-align: center;
    }

    .question-box {
      flex: 1;
      display: flex;
      flex-direction: column;
      gap: var(--space-sm);
      margin: var(--space-md) 0;
    }

    .question-input {
      font-family: var(--font-ui);
      font-size: var(--font-size-md);
      color: var(--color-tinta);
      background-color: var(--color-crema);
      border: 2px solid var(--color-bosque);
      border-radius: var(--border-radius-md);
      padding: var(--space-md);
      min-height: 120px;
      resize: vertical;
      box-sizing: border-box;
      width: 100%;
      line-height: 1.5;
    }

    .question-input:focus-visible {
      outline: 3px solid var(--color-acento);
      outline-offset: 2px;
    }

    .actions-row {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: var(--space-sm);
      width: 100%;
      margin-top: var(--space-sm);
    }

    .btn-action {
      font-family: var(--font-ui);
      font-size: var(--font-size-md);
      font-weight: 600;
      border-radius: var(--border-radius-md);
      padding: var(--space-sm) var(--space-md);
      min-height: var(--touch-target-min);
      cursor: pointer;
      text-align: center;
      display: flex;
      align-items: center;
      justify-content: center;
      transition: transform var(--transition-fast), opacity var(--transition-fast);
      box-sizing: border-box;
    }

    .btn-skip {
      background-color: var(--color-salvia);
      color: var(--color-tinta);
      border: 2px solid var(--color-bosque);
    }

    .btn-next {
      background-color: var(--color-bosque);
      color: var(--color-crema);
      border: 2px solid var(--color-tinta);
    }

    .btn-action:hover {
      opacity: 0.92;
      transform: translateY(-1px);
    }

    .btn-action:active {
      transform: translateY(1px);
    }

    .btn-action:focus-visible {
      outline: 3px solid var(--color-acento);
      outline-offset: 3px;
    }

    /* Ritual nocturno */
    .ritual-screen {
      flex: 1;
      width: 100%;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      gap: var(--space-md);
      text-align: center;
      padding: var(--space-lg);
      background: radial-gradient(
        circle at 50% 30%,
        var(--color-agua-profunda) 0%,
        var(--color-tinta) 100%
      );
      border-radius: var(--border-radius-md);
      color: var(--color-crema);
    }

    .ritual-title {
      font-family: var(--font-pixel);
      font-size: 0.75rem;
      color: var(--color-crema);
      line-height: 1.8;
      margin: 0;
    }

    .ritual-msg {
      font-family: var(--font-ui);
      font-size: var(--font-size-md);
      color: var(--color-celeste-agua);
      max-width: 260px;
      line-height: 1.5;
      margin: 0;
    }

    .ritual-goodnight {
      font-family: var(--font-pixel);
      font-size: 0.625rem;
      color: var(--color-turquesa);
      margin-top: var(--space-xs);
    }
  `,document.head.appendChild(T);const c=()=>{if(s.innerHTML="",e===4){const m=document.createElement("div");m.className="ritual-screen",m.setAttribute("role","region"),m.setAttribute("aria-label",n.diario.ritualTitle);const h=document.createElement("h2");h.className="ritual-title",h.textContent=n.diario.ritualTitle;const v=4,{canvas:f,ctx:g}=Pe(32*v,28*v),y=fe(ba),N=fe(_a),b=window.matchMedia("(prefers-reduced-motion: reduce)").matches,k=()=>{g.clearRect(0,0,32*v,28*v),oe(g,y,8*v,0,v),oe(g,N,6*v,14*v,v)};k(),b||(d=new aa(k),d.add(y),d.start());const H=document.createElement("p");H.className="ritual-msg",H.textContent=n.diario.ritualMessage;const S=document.createElement("p");S.className="ritual-goodnight",S.textContent=n.diario.ritualGoodnight;const w=document.createElement("button");w.className="btn-action btn-next",w.style.marginTop="var(--space-md)",w.textContent="Volver al jardín",w.addEventListener("click",()=>{window.location.hash="#/jardin"}),m.appendChild(h),m.appendChild(f),m.appendChild(H),m.appendChild(S),m.appendChild(w),s.appendChild(m),b||setTimeout(()=>{window.location.hash==="#/diario"&&(window.location.hash="#/jardin")},3500);return}const l=document.createElement("div");l.className="diario-top";const u=document.createElement("button");u.className="back-btn",u.textContent=n.app.back,u.setAttribute("aria-label","Volver al paso anterior o al jardín"),u.addEventListener("click",()=>{e>0?(e--,c()):window.location.hash="#/jardin"});const x=document.createElement("p");x.className="step-indicator",x.textContent=`Paso ${e+1} de 4`;const C=document.createElement("header");C.className="diario-header";const M=document.createElement("h1");M.className="diario-title";const p=document.createElement("p");if(p.className="diario-subtitle",C.appendChild(M),C.appendChild(p),l.appendChild(u),l.appendChild(x),l.appendChild(C),s.appendChild(l),e===0){M.textContent=n.diario.stepMoodTitle,p.textContent=n.diario.stepMoodSubtitle;const m=document.createElement("div");m.className="moods-grid",["contenta","tranquila","cansada","tensa","triste"].forEach(y=>{const N=document.createElement("button");N.className=`mood-card ${y===a?"selected":""}`,N.setAttribute("aria-label",n.moods[y].label);const b=1,{canvas:k,ctx:H}=Pe(32*b,32*b),S=rt[y],w=fe(S);oe(H,w,0,0,b);const E=document.createElement("span");E.className="mood-label",E.textContent=n.moods[y].label,N.appendChild(k),N.appendChild(E),N.addEventListener("click",()=>{a=y,e=1,c()}),m.appendChild(N)}),s.appendChild(m);const v=document.createElement("div");v.className="actions-row";const f=document.createElement("button");f.className="btn-action btn-skip",f.textContent=n.app.skip,f.addEventListener("click",()=>{e=1,c()});const g=document.createElement("button");g.className="btn-action btn-next",g.textContent=n.app.next,g.addEventListener("click",()=>{e=1,c()}),v.appendChild(f),v.appendChild(g),s.appendChild(v)}else{const m=document.createElement("div");m.className="question-box";let h="",v="",f="",g="";e===1?(h=n.diario.step1Title,v=n.diario.step1Subtitle,f=n.diario.step1Placeholder,g=r):e===2?(h=n.diario.step2Title,v=n.diario.step2Subtitle,f=n.diario.step2Placeholder,g=o):(h=n.diario.step3Title,v=n.diario.step3Subtitle,f=n.diario.step3Placeholder,g=i),M.textContent=h,p.textContent=v;const y=document.createElement("textarea");y.className="question-input",y.placeholder=f,y.value=g,y.maxLength=400,m.appendChild(y),s.appendChild(m);const N=document.createElement("div");N.className="actions-row";const b=document.createElement("button");b.className="btn-action btn-skip",b.textContent=n.app.skip;const k=document.createElement("button");k.className="btn-action btn-next",k.textContent=e===3?n.diario.finishBtn:n.app.next;const H=S=>{if(e===1&&(r=S),e===2&&(o=S),e===3&&(i=S),e===3){const w=bt();st({id:na("diario",w),version:1,type:"diario",date:w,createdAt:new Date().toISOString(),updatedAt:new Date().toISOString(),data:{mood:a,lindo:r||void 0,peso:o||void 0,suelto:i||void 0}}),e=4}else e++;c()};b.addEventListener("click",()=>{H("")}),k.addEventListener("click",()=>{H(y.value.trim())}),N.appendChild(b),N.appendChild(k),s.appendChild(N),y.focus()}};return t.appendChild(s),c(),()=>{d&&d.stop(),T.remove()}}function oo(t){t.innerHTML="";const e=document.createElement("section");e.className="historial-screen",e.setAttribute("role","main"),e.setAttribute("aria-label",n.historial.title);const a=document.createElement("style");a.textContent=`
    .historial-screen {
      flex: 1;
      width: 100%;
      height: 100%;
      box-sizing: border-box;
      display: flex;
      flex-direction: column;
      padding: var(--space-md);
      background: linear-gradient(
        180deg,
        var(--color-celeste-agua) 0%,
        var(--color-menta) 60%,
        var(--color-salvia) 100%
      );
      overflow-y: auto;
    }

    .historial-header {
      display: flex;
      flex-direction: column;
      gap: var(--space-xs);
      margin-bottom: var(--space-md);
    }

    .back-btn {
      font-family: var(--font-ui);
      font-size: var(--font-size-sm);
      font-weight: 600;
      color: var(--color-tinta);
      background-color: var(--color-menta);
      border: 2px solid var(--color-bosque);
      border-radius: var(--border-radius-sm);
      padding: var(--space-xs) var(--space-sm);
      min-height: var(--touch-target-min);
      min-width: var(--touch-target-min);
      cursor: pointer;
      align-self: flex-start;
      line-height: 1.3;
      display: inline-flex;
      align-items: center;
      justify-content: center;
      box-sizing: border-box;
      transition: transform var(--transition-fast), opacity var(--transition-fast);
    }

    .back-btn:hover {
      opacity: 0.9;
      transform: translateY(-1px);
    }

    .back-btn:focus-visible {
      outline: 3px solid var(--color-acento);
      outline-offset: 3px;
    }

    .title-box {
      text-align: center;
    }

    .historial-title {
      font-family: var(--font-pixel);
      font-size: 0.75rem;
      color: var(--color-bosque);
      line-height: 1.8;
      margin: 0;
    }

    .historial-subtitle {
      font-family: var(--font-ui);
      font-size: var(--font-size-sm);
      color: var(--color-agua-profunda);
      margin: 0;
    }

    .entries-list {
      display: flex;
      flex-direction: column;
      gap: var(--space-sm);
      flex: 1;
    }

    .empty-state {
      background-color: var(--color-crema);
      border: 2px dashed var(--color-musgo);
      border-radius: var(--border-radius-md);
      padding: var(--space-xl) var(--space-md);
      text-align: center;
      margin: auto 0;
    }

    .empty-text {
      font-family: var(--font-ui);
      font-size: var(--font-size-md);
      color: var(--color-bosque);
      line-height: 1.5;
      margin: 0;
    }

    .entry-card {
      background-color: var(--color-crema);
      border: 2px solid var(--color-bosque);
      border-radius: var(--border-radius-md);
      padding: var(--space-sm) var(--space-md);
      display: flex;
      flex-direction: column;
      gap: var(--space-xs);
      box-shadow: 0 2px 6px rgba(43, 58, 66, 0.1);
    }

    .entry-card-header {
      display: flex;
      align-items: center;
      justify-content: space-between;
      gap: var(--space-xs);
      border-bottom: 1px solid var(--color-salvia);
      padding-bottom: var(--space-xs);
    }

    .entry-meta {
      display: flex;
      align-items: center;
      gap: var(--space-xs);
    }

    .entry-badge {
      font-family: var(--font-pixel);
      font-size: 0.5rem;
      padding: 2px 6px;
      border-radius: var(--border-radius-sm);
      background-color: var(--color-bosque);
      color: var(--color-crema);
    }

    .entry-badge.diario {
      background-color: var(--color-agua-profunda);
    }

    .entry-date {
      font-family: var(--font-ui);
      font-size: var(--font-size-xs);
      font-weight: 600;
      color: var(--color-musgo);
    }

    .entry-mood-row {
      display: flex;
      align-items: center;
      gap: var(--space-sm);
      margin: var(--space-xs) 0;
    }

    .entry-mood-label {
      font-family: var(--font-ui);
      font-size: var(--font-size-sm);
      font-weight: 700;
      color: var(--color-bosque);
    }

    .entry-content {
      font-family: var(--font-ui);
      font-size: var(--font-size-sm);
      color: var(--color-tinta);
      line-height: 1.4;
      display: flex;
      flex-direction: column;
      gap: var(--space-xs);
    }

    .diario-item {
      display: flex;
      flex-direction: column;
      gap: 2px;
    }

    .diario-q {
      font-weight: 600;
      color: var(--color-musgo);
      font-size: var(--font-size-xs);
    }

    .diario-a {
      color: var(--color-tinta);
    }

    .entry-actions {
      display: flex;
      justify-content: flex-end;
      gap: var(--space-sm);
      margin-top: var(--space-xs);
      border-top: 1px dashed var(--color-salvia);
      padding-top: var(--space-xs);
    }

    .card-btn {
      font-family: var(--font-ui);
      font-size: var(--font-size-xs);
      color: var(--color-tinta);
      background: none;
      border: 1px solid var(--color-bosque);
      border-radius: var(--border-radius-sm);
      padding: var(--space-xs) var(--space-sm);
      cursor: pointer;
      min-height: 36px;
      min-width: 36px;
      display: inline-flex;
      align-items: center;
      justify-content: center;
    }

    .card-btn.del {
      border-color: var(--color-acento);
      color: var(--color-tinta);
    }

    .card-btn:hover {
      background-color: var(--color-menta);
    }

    .card-btn:focus-visible {
      outline: 2px solid var(--color-acento);
      outline-offset: 2px;
    }

    /* Modal de confirmación y edición */
    .modal-overlay {
      position: absolute;
      inset: 0;
      background-color: rgba(43, 58, 66, 0.65);
      display: flex;
      align-items: center;
      justify-content: center;
      padding: var(--space-md);
      z-index: 50;
      backdrop-filter: blur(2px);
    }

    .modal-card {
      background-color: var(--color-crema);
      border: 3px solid var(--color-tinta);
      border-radius: var(--border-radius-lg);
      padding: var(--space-md);
      max-width: 340px;
      width: 100%;
      box-sizing: border-box;
      display: flex;
      flex-direction: column;
      gap: var(--space-sm);
      box-shadow: var(--shadow-desktop-frame);
    }

    .modal-title {
      font-family: var(--font-pixel);
      font-size: 0.625rem;
      color: var(--color-bosque);
      margin: 0;
      line-height: 1.6;
    }

    .modal-desc {
      font-family: var(--font-ui);
      font-size: var(--font-size-sm);
      color: var(--color-tinta);
      line-height: 1.4;
      margin: 0;
    }

    .modal-input {
      font-family: var(--font-ui);
      font-size: var(--font-size-sm);
      color: var(--color-tinta);
      background-color: var(--color-menta);
      border: 2px solid var(--color-bosque);
      border-radius: var(--border-radius-sm);
      padding: var(--space-sm);
      min-height: 80px;
      width: 100%;
      box-sizing: border-box;
      resize: vertical;
    }

    .modal-actions {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: var(--space-sm);
      margin-top: var(--space-xs);
    }

    .btn-modal {
      font-family: var(--font-ui);
      font-size: var(--font-size-sm);
      font-weight: 600;
      padding: var(--space-sm);
      min-height: var(--touch-target-min);
      border-radius: var(--border-radius-sm);
      cursor: pointer;
      display: flex;
      align-items: center;
      justify-content: center;
    }

    .btn-modal.cancel {
      background-color: var(--color-salvia);
      color: var(--color-tinta);
      border: 2px solid var(--color-bosque);
    }

    .btn-modal.confirm {
      background-color: var(--color-bosque);
      color: var(--color-crema);
      border: 2px solid var(--color-tinta);
    }
  `,document.head.appendChild(a);const r=document.createElement("div");r.className="historial-header";const o=document.createElement("button");o.className="back-btn",o.textContent=n.app.back,o.setAttribute("aria-label","Volver al jardín"),o.addEventListener("click",()=>{window.location.hash="#/jardin"});const i=document.createElement("div");i.className="title-box";const d=document.createElement("h1");d.className="historial-title",d.textContent=n.historial.title;const s=document.createElement("p");s.className="historial-subtitle",s.textContent=n.historial.subtitle,i.appendChild(d),i.appendChild(s),r.appendChild(o),r.appendChild(i);const T=document.createElement("div");T.className="entries-list";const c=()=>{T.innerHTML="";const x=xt(),M=(x.success&&x.data?x.data:[]).filter(p=>p.type==="checkin"||p.type==="diario");if(M.length===0){const p=document.createElement("div");p.className="empty-state";const m=document.createElement("p");m.className="empty-text",m.textContent=n.historial.empty,p.appendChild(m),T.appendChild(p);return}M.forEach(p=>{var O;const m=document.createElement("article");m.className="entry-card";const h=document.createElement("div");h.className="entry-card-header";const v=document.createElement("div");v.className="entry-meta";const f=document.createElement("span");f.className=`entry-badge ${p.type}`,f.textContent=p.type==="checkin"?n.historial.checkinBadge:n.historial.diarioBadge;const g=document.createElement("time");g.className="entry-date",g.textContent=p.date,v.appendChild(f),v.appendChild(g),h.appendChild(v);const y=document.createElement("div");y.className="entry-mood-row";const N="mood"in p.data?p.data.mood:void 0;if(N&&rt[N]){const{canvas:z,ctx:D}=Pe(32,32),K=rt[N],pe=fe(K);oe(D,pe,0,0,1),y.appendChild(z)}const b=document.createElement("span");b.className="entry-mood-label",b.textContent=(N&&((O=n.moods[N])==null?void 0:O.label))??N??"",y.appendChild(b);const k=document.createElement("div");if(k.className="entry-content",p.type==="checkin"){const L=p.data;if(L.note){const z=document.createElement("p");z.textContent=L.note,k.appendChild(z)}}else{const L=p.data;if(L.lindo){const z=document.createElement("div");z.className="diario-item",z.innerHTML=`<span class="diario-q">${n.diario.step1Title}:</span> <span class="diario-a">${L.lindo}</span>`,k.appendChild(z)}if(L.peso){const z=document.createElement("div");z.className="diario-item",z.innerHTML=`<span class="diario-q">${n.diario.step2Title}:</span> <span class="diario-a">${L.peso}</span>`,k.appendChild(z)}if(L.suelto){const z=document.createElement("div");z.className="diario-item",z.innerHTML=`<span class="diario-q">${n.diario.step3Title}:</span> <span class="diario-a">${L.suelto}</span>`,k.appendChild(z)}}const H=document.createElement("div");H.className="entry-actions";const S=document.createElement("button");S.className="card-btn";const w=te("pen",{size:12});w.style.marginRight="var(--space-xs)",S.appendChild(w),S.appendChild(document.createTextNode(n.app.edit)),S.setAttribute("aria-label",`Editar registro del ${p.date}`),S.addEventListener("click",()=>{u(p)});const E=document.createElement("button");E.className="card-btn del";const I=te("trash",{size:12});I.style.marginRight="var(--space-xs)",E.appendChild(I),E.appendChild(document.createTextNode(n.app.delete)),E.setAttribute("aria-label",`Borrar registro del ${p.date}`),E.addEventListener("click",()=>{l(p.id)}),H.appendChild(S),H.appendChild(E),m.appendChild(h),m.appendChild(y),k.childNodes.length>0&&m.appendChild(k),m.appendChild(H),T.appendChild(m)})},l=x=>{const C=document.createElement("div");C.className="modal-overlay",C.setAttribute("role","dialog"),C.setAttribute("aria-modal","true");const M=document.createElement("div");M.className="modal-card";const p=document.createElement("h3");p.className="modal-title",p.textContent=n.app.delete;const m=document.createElement("p");m.className="modal-desc",m.textContent=n.historial.confirmDelete;const h=document.createElement("div");h.className="modal-actions";const v=document.createElement("button");v.className="btn-modal cancel",v.textContent=n.app.cancel,v.addEventListener("click",()=>C.remove());const f=document.createElement("button");f.className="btn-modal confirm",f.textContent=n.app.delete,f.addEventListener("click",()=>{mn(x),C.remove(),c()}),h.appendChild(v),h.appendChild(f),M.appendChild(p),M.appendChild(m),M.appendChild(h),C.appendChild(M),e.appendChild(C),f.focus()},u=x=>{const C=document.createElement("div");C.className="modal-overlay",C.setAttribute("role","dialog"),C.setAttribute("aria-modal","true");const M=document.createElement("div");M.className="modal-card";const p=document.createElement("h3");p.className="modal-title",p.textContent=n.historial.editNoteTitle;const m=document.createElement("textarea");if(m.className="modal-input",x.type==="checkin")m.value=x.data.note??"";else{const g=x.data;m.value=[g.lindo,g.peso,g.suelto].filter(Boolean).join(`
`)}const h=document.createElement("div");h.className="modal-actions";const v=document.createElement("button");v.className="btn-modal cancel",v.textContent=n.app.cancel,v.addEventListener("click",()=>C.remove());const f=document.createElement("button");f.className="btn-modal confirm",f.textContent=n.app.save,f.addEventListener("click",()=>{const g=m.value.trim();x.type==="checkin"?x.data.note=g||void 0:x.data.lindo=g||void 0,st(x),C.remove(),c()}),h.appendChild(v),h.appendChild(f),M.appendChild(p),M.appendChild(m),M.appendChild(h),C.appendChild(M),e.appendChild(C),m.focus()};return e.appendChild(r),e.appendChild(T),t.appendChild(e),c(),()=>{a.remove()}}const Kt="roro_cloud_user_id",za="roro_cloud_auto_sync";function ra(){try{let t=localStorage.getItem(Kt);return t||(typeof crypto<"u"&&crypto.randomUUID?t="user_"+crypto.randomUUID().replace(/-/g,"").slice(0,16):t="user_"+Math.random().toString(36).slice(2,12)+Date.now().toString(36),localStorage.setItem(Kt,t)),t}catch{return"default_user"}}function ro(t){try{const e=t.trim().replace(/[^a-zA-Z0-9_\-.]/g,"").slice(0,64);e&&localStorage.setItem(Kt,e)}catch{}}function La(){try{return localStorage.getItem(za)==="true"}catch{return!1}}function io(t){try{localStorage.setItem(za,t?"true":"false")}catch{}}async function so(){if(typeof navigator<"u"&&!navigator.onLine)return{available:!1,message:"Sin conexión a internet."};try{const t=await fetch("/api/sync",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({action:"status"})});return t.ok?{available:!0,message:"Conexión lista."}:{available:!1,message:(await t.json().catch(()=>({}))).error||`Servidor no disponible (código ${t.status}).`}}catch{return{available:!1,message:"No se pudo conectar con el servidor."}}}async function ja(){if(typeof navigator<"u"&&!navigator.onLine)return{success:!1,message:"Sin conexión a internet en este momento."};try{const t=ra(),e=xt(),a=e.success?e.data:[],r=Ae(),o=await fetch("/api/sync",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({action:"push",userId:t,entries:a,gardenState:r})}),i=await o.json().catch(()=>({}));return o.ok?{success:!0,message:"Copia guardada con éxito en la nube."}:{success:!1,message:i.error||"Error al guardar en la nube."}}catch{return{success:!1,message:"No se pudo conectar con el servidor."}}}async function co(){if(typeof navigator<"u"&&!navigator.onLine)return{success:!1,message:"Sin conexión a internet en este momento."};try{const t=ra(),e=await fetch("/api/sync",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({action:"pull",userId:t})}),a=await e.json().catch(()=>({}));if(!e.ok)return{success:!1,message:a.error||"Error al descargar datos de la nube."};const r=Array.isArray(a.entries)?a.entries:[];let o=0;for(const i of r)try{let d={};typeof i.data_json=="string"?d=JSON.parse(i.data_json):i.data_json&&typeof i.data_json=="object"&&(d=i.data_json);const s={id:i.id,version:i.version||4,type:i.type,date:i.entry_date,createdAt:i.created_at,updatedAt:i.updated_at,data:d};st(s),o++}catch{}if(a.gardenState&&a.gardenState.state_json)try{const i=JSON.parse(a.gardenState.state_json);i&&typeof i=="object"&&U(i)}catch{}return{success:!0,message:`Se recuperaron ${o} registros y el estado del jardín.`,count:o}}catch{return{success:!1,message:"No se pudo conectar con el servidor."}}}function lo(){La()&&setTimeout(()=>{ja().catch(()=>{})},1e3)}typeof document<"u"&&document.addEventListener("roro:dataChanged",()=>{lo()});function po(t){t.innerHTML="";const e=document.createElement("section");e.className="ajustes-screen",e.setAttribute("role","main"),e.setAttribute("aria-label",n.ajustes.title);const a=document.createElement("style");a.textContent=`
    .ajustes-screen {
      flex: 1;
      width: 100%;
      height: 100%;
      box-sizing: border-box;
      display: flex;
      flex-direction: column;
      padding: var(--space-md);
      background: linear-gradient(
        180deg,
        var(--color-celeste-agua) 0%,
        var(--color-menta) 60%,
        var(--color-salvia) 100%
      );
      overflow-y: auto;
      gap: var(--space-md);
    }

    .back-btn {
      font-family: var(--font-ui);
      font-size: var(--font-size-sm);
      font-weight: 600;
      color: var(--color-tinta);
      background-color: var(--color-menta);
      border: 2px solid var(--color-bosque);
      border-radius: var(--border-radius-sm);
      padding: var(--space-xs) var(--space-sm);
      min-height: var(--touch-target-min);
      min-width: var(--touch-target-min);
      cursor: pointer;
      align-self: flex-start;
      line-height: 1.3;
      display: inline-flex;
      align-items: center;
      justify-content: center;
      box-sizing: border-box;
      transition: transform var(--transition-fast), opacity var(--transition-fast);
    }

    .back-btn:hover {
      opacity: 0.9;
      transform: translateY(-1px);
    }

    .back-btn:focus-visible {
      outline: 3px solid var(--color-acento);
      outline-offset: 3px;
    }

    .ajustes-header {
      text-align: center;
    }

    .ajustes-title {
      font-family: var(--font-pixel);
      font-size: 0.75rem;
      color: var(--color-bosque);
      line-height: 1.8;
      margin: 0;
    }

    .privacy-card {
      background-color: var(--color-crema);
      border: 2px solid var(--color-bosque);
      border-radius: var(--border-radius-md);
      padding: var(--space-sm) var(--space-md);
      display: flex;
      align-items: center;
      gap: var(--space-sm);
    }

    .privacy-text {
      font-family: var(--font-ui);
      font-size: var(--font-size-sm);
      color: var(--color-bosque);
      font-weight: 600;
      line-height: 1.4;
      margin: 0;
    }

    .warning-card {
      background-color: var(--color-acento);
      border: 2px solid var(--color-tinta);
      border-radius: var(--border-radius-md);
      padding: var(--space-sm) var(--space-md);
      color: var(--color-tinta);
      font-family: var(--font-ui);
      font-size: var(--font-size-xs);
      line-height: 1.4;
    }

    .settings-group {
      background-color: var(--color-crema);
      border: 2px solid var(--color-tinta);
      border-radius: var(--border-radius-md);
      padding: var(--space-md);
      display: flex;
      flex-direction: column;
      gap: var(--space-xs);
    }

    .group-title {
      font-family: var(--font-pixel);
      font-size: 0.625rem;
      color: var(--color-bosque);
      margin: 0;
      line-height: 1.6;
    }

    .group-desc {
      font-family: var(--font-ui);
      font-size: var(--font-size-xs);
      color: var(--color-agua-profunda);
      margin: 0 0 var(--space-xs);
      line-height: 1.4;
    }

    .btn-action {
      font-family: var(--font-ui);
      font-size: var(--font-size-sm);
      font-weight: 600;
      border-radius: var(--border-radius-sm);
      padding: var(--space-sm) var(--space-md);
      min-height: var(--touch-target-min);
      cursor: pointer;
      display: flex;
      align-items: center;
      justify-content: center;
      transition: transform var(--transition-fast), opacity var(--transition-fast);
      text-align: center;
      line-height: 1.35;
      white-space: normal;
      overflow-wrap: break-word;
      word-break: break-word;
      box-sizing: border-box;
    }

    .btn-primary {
      background-color: var(--color-bosque);
      color: var(--color-crema);
      border: 2px solid var(--color-tinta);
    }

    .btn-secondary {
      background-color: var(--color-salvia);
      color: var(--color-tinta);
      border: 2px solid var(--color-bosque);
    }

    .btn-danger {
      background-color: var(--color-crema);
      color: var(--color-tinta);
      border: 2px solid var(--color-acento);
    }

    .btn-action:hover {
      opacity: 0.92;
      transform: translateY(-1px);
    }

    .btn-action:focus-visible {
      outline: 3px solid var(--color-acento);
      outline-offset: 3px;
    }

    .modal-overlay {
      position: absolute;
      inset: 0;
      background-color: rgba(43, 58, 66, 0.65);
      display: flex;
      align-items: center;
      justify-content: center;
      padding: var(--space-md);
      z-index: 50;
      backdrop-filter: blur(2px);
    }

    .modal-card {
      background-color: var(--color-crema);
      border: 3px solid var(--color-tinta);
      border-radius: var(--border-radius-lg);
      padding: var(--space-md);
      max-width: 320px;
      width: 100%;
      box-sizing: border-box;
      display: flex;
      flex-direction: column;
      gap: var(--space-sm);
      box-shadow: var(--shadow-desktop-frame);
    }

    .modal-title {
      font-family: var(--font-pixel);
      font-size: 0.625rem;
      color: var(--color-bosque);
      margin: 0;
      line-height: 1.6;
    }

    .modal-desc {
      font-family: var(--font-ui);
      font-size: var(--font-size-sm);
      color: var(--color-tinta);
      line-height: 1.4;
      margin: 0;
    }

    .modal-actions {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: var(--space-sm);
      margin-top: var(--space-xs);
    }

    .file-hidden {
      display: none;
    }

    .toast-msg {
      font-family: var(--font-ui);
      font-size: var(--font-size-xs);
      font-weight: 600;
      color: var(--color-bosque);
      text-align: center;
      margin-top: var(--space-xs);
      min-height: 18px;
    }

    .radio-option {
      display: flex;
      align-items: center;
      gap: var(--space-sm);
      cursor: pointer;
      min-height: var(--touch-target-min);
    }
  `,document.head.appendChild(a);const r=document.createElement("button");r.className="back-btn",r.textContent=n.app.back,r.setAttribute("aria-label","Volver al jardín"),r.addEventListener("click",()=>{window.location.hash="#/jardin"});const o=document.createElement("header");o.className="ajustes-header";const i=document.createElement("h1");i.className="ajustes-title",i.textContent=n.ajustes.title,o.appendChild(i);const d=document.createElement("div");d.className="privacy-card",d.innerHTML=`${Ia("lock",{size:16})}<p class="privacy-text">${n.ajustes.privacyNote}</p>`;let s=null;Ue()||(s=document.createElement("div"),s.className="warning-card",s.textContent=n.ajustes.storageWarning);const T=document.createElement("p");T.className="toast-msg";const c=q=>{T.textContent=q,setTimeout(()=>{T.textContent=""},3e3)},l=document.createElement("div");l.className="settings-group";const u=document.createElement("h2");u.className="group-title",u.textContent=n.ajustes.audioTitle;const x=document.createElement("label");x.style.cssText="display: flex; align-items: center; justify-content: space-between; gap: var(--space-sm); cursor: pointer; min-height: var(--touch-target-min);";const C=document.createElement("span");C.className="group-desc",C.style.margin="0",C.textContent=n.ajustes.soundLabel;const M=document.createElement("input");M.type="checkbox",M.style.cssText="width: 22px; height: 22px; accent-color: var(--color-bosque); cursor: pointer;",M.checked=Ha(),M.addEventListener("change",()=>{Zn(M.checked),c("Preferencia de sonido actualizada")}),x.appendChild(C),x.appendChild(M);const p=document.createElement("label");p.style.cssText="display: flex; align-items: center; justify-content: space-between; gap: var(--space-sm); cursor: pointer; min-height: var(--touch-target-min);";const m=document.createElement("span");m.className="group-desc",m.style.margin="0",m.textContent=n.ajustes.vibrationLabel;const h=document.createElement("input");h.type="checkbox",h.style.cssText="width: 22px; height: 22px; accent-color: var(--color-bosque); cursor: pointer;",h.checked=Ga(),h.addEventListener("change",()=>{Kn(h.checked),c("Preferencia de vibración actualizada")}),p.appendChild(m),p.appendChild(h),l.appendChild(u),l.appendChild(x),l.appendChild(p);const v=Ae(),f=document.createElement("div");f.className="settings-group";const g=document.createElement("h2");g.className="group-title",g.textContent=n.ajustes.gardenTitle;const y=document.createElement("label");y.style.cssText="display: flex; align-items: center; justify-content: space-between; gap: var(--space-sm); cursor: pointer; min-height: var(--touch-target-min);";const N=document.createElement("span");N.className="group-desc",N.style.margin="0",N.textContent=n.ajustes.gardenAnimationsLabel;const b=document.createElement("input");b.type="checkbox",b.style.cssText="width: 22px; height: 22px; accent-color: var(--color-bosque); cursor: pointer;",b.checked=v.gardenAnimationsEnabled,b.addEventListener("change",()=>{const q=Ae();U({...q,gardenAnimationsEnabled:b.checked}),c("Animaciones del jardín actualizadas")}),y.appendChild(N),y.appendChild(b);const k=document.createElement("div");k.style.cssText="display: flex; flex-direction: column; gap: 4px; margin-top: var(--space-xs);";const H=document.createElement("span");H.className="group-desc",H.style.fontWeight="bold",H.textContent=n.ajustes.hemisphereLabel;const S=document.createElement("label");S.className="radio-option";const w=document.createElement("input");w.type="radio",w.name="hemisphere",w.value="sur",w.checked=v.hemisphere==="sur",w.style.cssText="accent-color: var(--color-bosque);";const E=document.createElement("span");E.className="group-desc",E.style.margin="0",E.textContent=n.ajustes.hemisphereSur,S.appendChild(w),S.appendChild(E);const I=document.createElement("label");I.className="radio-option";const O=document.createElement("input");O.type="radio",O.name="hemisphere",O.value="norte",O.checked=v.hemisphere==="norte",O.style.cssText="accent-color: var(--color-bosque);";const L=document.createElement("span");L.className="group-desc",L.style.margin="0",L.textContent=n.ajustes.hemisphereNorte,I.appendChild(O),I.appendChild(L);const z=q=>{const F=Ae();U({...F,hemisphere:q}),c("Hemisferio actualizado")};w.addEventListener("change",()=>{w.checked&&z("sur")}),O.addEventListener("change",()=>{O.checked&&z("norte")}),k.appendChild(H),k.appendChild(S),k.appendChild(I);const D=document.createElement("div");D.style.cssText="display: flex; flex-direction: column; gap: 4px; margin-top: var(--space-xs);";const K=document.createElement("span");K.className="group-desc",K.style.fontWeight="bold",K.textContent=n.ajustes.handModeLabel;const pe=document.createElement("p");pe.className="group-desc",pe.style.margin="0 0 4px 0",pe.textContent=n.ajustes.handModeDesc;const J=v.handMode||"right",ge=document.createElement("label");ge.className="radio-option";const ee=document.createElement("input");ee.type="radio",ee.name="handMode",ee.value="right",ee.checked=J==="right",ee.style.cssText="accent-color: var(--color-bosque);";const Q=document.createElement("span");Q.className="group-desc",Q.style.margin="0",Q.textContent=n.ajustes.handModeRight,ge.appendChild(ee),ge.appendChild(Q);const be=document.createElement("label");be.className="radio-option";const me=document.createElement("input");me.type="radio",me.name="handMode",me.value="left",me.checked=J==="left",me.style.cssText="accent-color: var(--color-bosque);";const W=document.createElement("span");W.className="group-desc",W.style.margin="0",W.textContent=n.ajustes.handModeLeft,be.appendChild(me),be.appendChild(W);const ae=document.createElement("label");ae.className="radio-option";const _=document.createElement("input");_.type="radio",_.name="handMode",_.value="center",_.checked=J==="center",_.style.cssText="accent-color: var(--color-bosque);";const Y=document.createElement("span");Y.className="group-desc",Y.style.margin="0",Y.textContent=n.ajustes.handModeCenter,ae.appendChild(_),ae.appendChild(Y);const Ce=q=>{const F=Ae();U({...F,handMode:q}),c("Alineación de botones actualizada")};ee.addEventListener("change",()=>{ee.checked&&Ce("right")}),me.addEventListener("change",()=>{me.checked&&Ce("left")}),_.addEventListener("change",()=>{_.checked&&Ce("center")}),D.appendChild(K),D.appendChild(pe),D.appendChild(ge),D.appendChild(be),D.appendChild(ae);const He=document.createElement("h3");He.className="group-title",He.style.marginTop="var(--space-sm)",He.textContent=n.ajustes.resetGardenTitle;const le=document.createElement("p");le.className="group-desc",le.textContent=n.ajustes.resetGardenDesc;const Me=document.createElement("button");Me.className="btn-action btn-danger",Me.textContent=n.ajustes.resetGardenBtn,Me.addEventListener("click",()=>{const q=document.createElement("div");q.className="modal-overlay";const F=document.createElement("div");F.className="modal-card";const we=document.createElement("h3");we.className="modal-title",we.textContent=n.ajustes.resetGardenTitle;const ve=document.createElement("p");ve.className="modal-desc",ve.textContent=n.ajustes.resetGardenConfirm1;const Ne=document.createElement("div");Ne.className="modal-actions";const Te=document.createElement("button");Te.className="btn-action btn-secondary",Te.textContent=n.app.cancel,Te.addEventListener("click",()=>q.remove());const ie=document.createElement("button");ie.className="btn-action btn-danger",ie.textContent="Sí, continuar",ie.addEventListener("click",()=>{q.remove();const ke=document.createElement("div");ke.className="modal-overlay";const ze=document.createElement("div");ze.className="modal-card";const Be=document.createElement("h3");Be.className="modal-title",Be.textContent="Confirmación final";const De=document.createElement("p");De.className="modal-desc",De.textContent=n.ajustes.resetGardenConfirm2;const Le=document.createElement("div");Le.className="modal-actions";const Ie=document.createElement("button");Ie.className="btn-action btn-secondary",Ie.textContent=n.app.cancel,Ie.addEventListener("click",()=>ke.remove());const je=document.createElement("button");je.className="btn-action btn-danger",je.textContent="Reiniciar jardín",je.addEventListener("click",()=>{wa(),ke.remove(),c(n.ajustes.resetGardenSuccess)}),Le.appendChild(Ie),Le.appendChild(je),ze.appendChild(Be),ze.appendChild(De),ze.appendChild(Le),ke.appendChild(ze),e.appendChild(ke),je.focus()}),Ne.appendChild(Te),Ne.appendChild(ie),F.appendChild(we),F.appendChild(ve),F.appendChild(Ne),q.appendChild(F),e.appendChild(q),ie.focus()}),f.appendChild(g),f.appendChild(y),f.appendChild(k),f.appendChild(D),f.appendChild(He),f.appendChild(le),f.appendChild(Me);const Se=document.createElement("div");Se.className="settings-group";const Ve=document.createElement("h2");Ve.className="group-title",Ve.textContent=n.ajustes.weekTitle;const _e=document.createElement("label");_e.style.cssText="display: flex; align-items: center; justify-content: space-between; gap: var(--space-sm); cursor: pointer; min-height: var(--touch-target-min);";const Ge=document.createElement("span");Ge.className="group-desc",Ge.style.margin="0",Ge.textContent=n.ajustes.showWeekLabel;const Re=document.createElement("input");Re.type="checkbox",Re.style.cssText="width: 22px; height: 22px; accent-color: var(--color-bosque); cursor: pointer;",Re.checked=v.showWeekInGarden,Re.addEventListener("change",()=>{const q=Ae();U({...q,showWeekInGarden:Re.checked}),c("Preferencia de Mi semana actualizada")}),_e.appendChild(Ge),_e.appendChild(Re);const X=document.createElement("div");X.style.cssText="display: flex; flex-direction: column; gap: 4px; margin-top: var(--space-xs);";const ye=document.createElement("span");ye.className="group-desc",ye.style.fontWeight="bold",ye.textContent=n.ajustes.weekDaysLabel;const Ee=document.createElement("label");Ee.className="radio-option";const xe=document.createElement("input");xe.type="radio",xe.name="weekDays",xe.value="work",xe.checked=!v.weekShowWeekend,xe.style.cssText="accent-color: var(--color-bosque);";const qe=document.createElement("span");qe.className="group-desc",qe.style.margin="0",qe.textContent=n.ajustes.weekDaysWork,Ee.appendChild(xe),Ee.appendChild(qe);const re=document.createElement("label");re.className="radio-option";const Z=document.createElement("input");Z.type="radio",Z.name="weekDays",Z.value="all",Z.checked=v.weekShowWeekend,Z.style.cssText="accent-color: var(--color-bosque);";const et=document.createElement("span");et.className="group-desc",et.style.margin="0",et.textContent=n.ajustes.weekDaysAll,re.appendChild(Z),re.appendChild(et);const Gt=q=>{const F=Ae();U({...F,weekShowWeekend:q}),c("Días de Mi semana actualizados")};xe.addEventListener("change",()=>{xe.checked&&Gt(!1)}),Z.addEventListener("change",()=>{Z.checked&&Gt(!0)}),X.appendChild(ye),X.appendChild(Ee),X.appendChild(re);const A=document.createElement("label");A.style.cssText="display: flex; align-items: center; justify-content: space-between; gap: var(--space-sm); cursor: pointer; min-height: var(--touch-target-min);";const G=document.createElement("span");G.className="group-desc",G.style.margin="0",G.textContent=n.ajustes.showPatternsLabel;const P=document.createElement("input");P.type="checkbox",P.style.cssText="width: 22px; height: 22px; accent-color: var(--color-bosque); cursor: pointer;",P.checked=v.showPatterns,P.addEventListener("change",()=>{const q=Ae();U({...q,showPatterns:P.checked}),c("Preferencia de patrones actualizada")}),A.appendChild(G),A.appendChild(P);const j=document.createElement("button");j.type="button",j.className="btn-action btn-secondary",j.style.marginTop="var(--space-xs)",j.textContent=n.ajustes.remindersBtn,j.addEventListener("click",()=>{window.location.hash="#/recordatorios"});const $=document.createElement("label");$.style.cssText="display: flex; align-items: center; justify-content: space-between; gap: var(--space-sm); cursor: pointer; min-height: var(--touch-target-min); margin-top: var(--space-xs);";const R=document.createElement("span");R.className="group-desc",R.style.margin="0",R.textContent=n.ajustes.vacationLabel;const V=document.createElement("input");V.type="checkbox",V.style.cssText="width: 22px; height: 22px; accent-color: var(--color-bosque); cursor: pointer;",V.checked=v.vacationMode,V.addEventListener("change",()=>{const q=Ae();U({...q,vacationMode:V.checked}),c("Preferencia de avisos actualizada")}),$.appendChild(R),$.appendChild(V);const he=document.createElement("label");he.style.cssText="display: flex; align-items: center; justify-content: space-between; gap: var(--space-sm); cursor: pointer; min-height: var(--touch-target-min);";const B=document.createElement("span");B.className="group-desc",B.style.margin="0",B.textContent=n.ajustes.supportSuggestionsLabel;const de=document.createElement("input");de.type="checkbox",de.style.cssText="width: 22px; height: 22px; accent-color: var(--color-bosque); cursor: pointer;",de.checked=v.supportSuggestionsEnabled,de.addEventListener("change",()=>{const q=Ae();U({...q,supportSuggestionsEnabled:de.checked}),c("Preferencia de apoyo actualizada")}),he.appendChild(B),he.appendChild(de);const ue=document.createElement("button");ue.type="button",ue.className="btn-action btn-secondary",ue.style.marginTop="var(--space-xs)",ue.textContent=n.ajustes.helpBtn,ue.addEventListener("click",()=>{window.location.hash="#/ayuda"}),Se.appendChild(Ve),Se.appendChild(_e),Se.appendChild(X),Se.appendChild(A),Se.appendChild(j),Se.appendChild($),Se.appendChild(he),Se.appendChild(ue);const Oe=document.createElement("div");Oe.className="settings-group";const zt=document.createElement("h2");zt.className="group-title",zt.textContent=n.ajustes.exportTitle;const Lt=document.createElement("p");Lt.className="group-desc",Lt.textContent=n.ajustes.exportDesc;const Ct=document.createElement("button");Ct.className="btn-action btn-primary",Ct.textContent=n.ajustes.exportBtn,Ct.addEventListener("click",()=>{const q=un();if(!q.success||!q.data){c("Error al exportar los datos.");return}const F=new Blob([q.data],{type:"application/json"}),we=URL.createObjectURL(F),ve=document.createElement("a");ve.href=we,ve.download=`rorogarden_respaldo_${bt()}.json`,document.body.appendChild(ve),ve.click(),document.body.removeChild(ve),URL.revokeObjectURL(we),c("Respaldo descargado con éxito.")}),Oe.appendChild(zt),Oe.appendChild(Lt),Oe.appendChild(Ct);const tt=document.createElement("div");tt.className="settings-group";const jt=document.createElement("h2");jt.className="group-title",jt.textContent=n.ajustes.importTitle;const Rt=document.createElement("p");Rt.className="group-desc",Rt.textContent=n.ajustes.importDesc;const We=document.createElement("input");We.type="file",We.accept=".json,application/json",We.className="file-hidden";const Mt=document.createElement("button");Mt.className="btn-action btn-secondary",Mt.textContent=n.ajustes.importBtn,Mt.addEventListener("click",()=>{We.click()}),We.addEventListener("change",()=>{var we;const q=(we=We.files)==null?void 0:we[0];if(!q)return;const F=new FileReader;F.onload=ve=>{var Ie;const Ne=(Ie=ve.target)==null?void 0:Ie.result;if(!Ne)return;const Te=document.createElement("div");Te.className="modal-overlay";const ie=document.createElement("div");ie.className="modal-card";const ke=document.createElement("h3");ke.className="modal-title",ke.textContent=n.ajustes.importTitle;const ze=document.createElement("p");ze.className="modal-desc",ze.textContent=n.ajustes.importConfirm;const Be=document.createElement("div");Be.className="modal-actions";const De=document.createElement("button");De.className="btn-action btn-secondary",De.textContent=n.app.cancel,De.addEventListener("click",()=>{Te.remove(),We.value=""});const Le=document.createElement("button");Le.className="btn-action btn-primary",Le.textContent="Importar",Le.addEventListener("click",()=>{var ca;Te.remove(),We.value="";const je=Tn(Ne);je.success?c(`${n.ajustes.importSuccess} (${(ca=je.data)==null?void 0:ca.imported} registros)`):c(je.error??n.ajustes.importError)}),Be.appendChild(De),Be.appendChild(Le),ie.appendChild(ke),ie.appendChild(ze),ie.appendChild(Be),Te.appendChild(ie),e.appendChild(Te),Le.focus()},F.readAsText(q)}),tt.appendChild(jt),tt.appendChild(Rt),tt.appendChild(Mt),tt.appendChild(We);const Ye=document.createElement("div");Ye.className="settings-group";const qt=document.createElement("h2");qt.className="group-title",qt.textContent="Copia en la nube";const Bt=document.createElement("p");Bt.className="group-desc",Bt.textContent="Podés respaldar tus datos en tu base de datos segura (SpiderWeb Arg). RoRoGarden sigue funcionando offline y guardando todo en tu dispositivo.";const yt=document.createElement("div");yt.style.cssText="display: flex; flex-direction: column; gap: var(--space-xs); margin-top: var(--space-xs);";const Et=document.createElement("span");Et.className="group-desc",Et.style.fontWeight="bold",Et.textContent="Tu clave de sincronización:";const wt=document.createElement("div");wt.style.cssText="display: flex; gap: var(--space-xs);";const Je=document.createElement("input");Je.type="text",Je.value=ra(),Je.style.cssText="flex: 1; padding: var(--space-xs); border: 2px solid var(--color-bosque); border-radius: var(--border-radius-sm); font-family: monospace; font-size: 0.85rem; background: var(--color-crema); color: var(--color-tinta);",Je.addEventListener("change",()=>{ro(Je.value),c("Clave de sincronización actualizada")});const at=document.createElement("button");at.type="button",at.className="btn-action btn-secondary",at.style.padding="0 var(--space-sm)",at.textContent="Copiar",at.addEventListener("click",()=>{navigator.clipboard&&(navigator.clipboard.writeText(Je.value),c("Clave copiada al portapapeles"))}),wt.appendChild(Je),wt.appendChild(at),yt.appendChild(Et),yt.appendChild(wt);const Nt=document.createElement("label");Nt.style.cssText="display: flex; align-items: center; justify-content: space-between; gap: var(--space-sm); cursor: pointer; min-height: var(--touch-target-min); margin-top: var(--space-xs);";const kt=document.createElement("span");kt.className="group-desc",kt.style.margin="0",kt.textContent="Sincronizar automáticamente en segundo plano";const nt=document.createElement("input");nt.type="checkbox",nt.style.cssText="width: 22px; height: 22px; accent-color: var(--color-bosque); cursor: pointer;",nt.checked=La(),nt.addEventListener("change",()=>{io(nt.checked),c("Preferencia de sincronización actualizada")}),Nt.appendChild(kt),Nt.appendChild(nt);const ct=document.createElement("div");ct.style.cssText="display: flex; flex-direction: column; gap: var(--space-xs); margin-top: var(--space-xs);";const Fe=document.createElement("button");Fe.type="button",Fe.className="btn-action btn-primary",Fe.textContent="Subir copia a la nube",Fe.addEventListener("click",async()=>{Fe.disabled=!0,Fe.textContent="Subiendo...";const q=await ja();Fe.disabled=!1,Fe.textContent="Subir copia a la nube",c(q.message)});const lt=document.createElement("button");lt.type="button",lt.className="btn-action btn-secondary",lt.textContent="Descargar y fusionar desde la nube",lt.addEventListener("click",()=>{const q=document.createElement("div");q.className="modal-overlay";const F=document.createElement("div");F.className="modal-card";const we=document.createElement("h3");we.className="modal-title",we.textContent="Recuperar de la nube";const ve=document.createElement("p");ve.className="modal-desc",ve.textContent="Se descargarán los registros guardados con tu clave en la base de datos y se fusionarán con este dispositivo. ¿Querés continuar?";const Ne=document.createElement("div");Ne.className="modal-actions";const Te=document.createElement("button");Te.className="btn-action btn-secondary",Te.textContent=n.app.cancel,Te.addEventListener("click",()=>q.remove());const ie=document.createElement("button");ie.className="btn-action btn-primary",ie.textContent="Descargar",ie.addEventListener("click",async()=>{q.remove(),c("Descargando datos...");const ke=await co();c(ke.message)}),Ne.appendChild(Te),Ne.appendChild(ie),F.appendChild(we),F.appendChild(ve),F.appendChild(Ne),q.appendChild(F),e.appendChild(q)});const $e=document.createElement("button");$e.type="button",$e.className="btn-action btn-secondary",$e.style.fontSize="0.8rem",$e.textContent="Probar conexión con el servidor",$e.addEventListener("click",async()=>{$e.disabled=!0,$e.textContent="Comprobando...";const q=await so();$e.disabled=!1,$e.textContent="Probar conexión con el servidor",q.available?c("¡Servidor conectado y listo!"):c(q.message)}),ct.appendChild(Fe),ct.appendChild(lt),ct.appendChild($e),Ye.appendChild(qt),Ye.appendChild(Bt),Ye.appendChild(yt),Ye.appendChild(Nt),Ye.appendChild(ct);const dt=document.createElement("div");dt.className="settings-group";const Dt=document.createElement("h2");Dt.className="group-title",Dt.textContent=n.ajustes.clearTitle;const It=document.createElement("p");It.className="group-desc",It.textContent=n.ajustes.clearDesc;const At=document.createElement("button");At.className="btn-action btn-danger",At.textContent=n.ajustes.clearBtn,At.addEventListener("click",()=>{const q=document.createElement("div");q.className="modal-overlay";const F=document.createElement("div");F.className="modal-card";const we=document.createElement("h3");we.className="modal-title",we.textContent=n.ajustes.clearTitle;const ve=document.createElement("p");ve.className="modal-desc",ve.textContent=n.ajustes.clearFirstConfirm;const Ne=document.createElement("div");Ne.className="modal-actions";const Te=document.createElement("button");Te.className="btn-action btn-secondary",Te.textContent=n.app.cancel,Te.addEventListener("click",()=>q.remove());const ie=document.createElement("button");ie.className="btn-action btn-danger",ie.textContent="Sí, continuar",ie.addEventListener("click",()=>{q.remove();const ke=document.createElement("div");ke.className="modal-overlay";const ze=document.createElement("div");ze.className="modal-card";const Be=document.createElement("h3");Be.className="modal-title",Be.textContent="Confirmación final";const De=document.createElement("p");De.className="modal-desc",De.textContent=n.ajustes.clearSecondConfirm;const Le=document.createElement("div");Le.className="modal-actions";const Ie=document.createElement("button");Ie.className="btn-action btn-secondary",Ie.textContent=n.app.cancel,Ie.addEventListener("click",()=>ke.remove());const je=document.createElement("button");je.className="btn-action btn-danger",je.textContent="Borrar definitivamente",je.addEventListener("click",()=>{Sn(),ke.remove(),c(n.ajustes.clearSuccess)}),Le.appendChild(Ie),Le.appendChild(je),ze.appendChild(Be),ze.appendChild(De),ze.appendChild(Le),ke.appendChild(ze),e.appendChild(ke),je.focus()}),Ne.appendChild(Te),Ne.appendChild(ie),F.appendChild(we),F.appendChild(ve),F.appendChild(Ne),q.appendChild(F),e.appendChild(q),ie.focus()}),dt.appendChild(Dt),dt.appendChild(It),dt.appendChild(At);const Qe=document.createElement("div");Qe.className="settings-group";const Pt=document.createElement("h2");Pt.className="group-title",Pt.textContent="La app",Qe.appendChild(Pt);const pt=document.createElement("button");pt.type="button",pt.className="btn-action btn-secondary",pt.textContent=n.ajustes.welcomeBtn,pt.addEventListener("click",()=>{window.location.hash="#/bienvenida"}),Qe.appendChild(pt);const mt=document.createElement("button");mt.type="button",mt.className="btn-action btn-secondary",mt.textContent=n.ajustes.installBtn,mt.addEventListener("click",()=>{window.location.hash="#/instalar"}),Qe.appendChild(mt);const St=document.createElement("button");St.type="button",St.className="btn-action btn-secondary",St.textContent=n.ajustes.aboutBtn,St.addEventListener("click",()=>{window.location.hash="#/acerca"}),Qe.appendChild(St);const Xe=document.createElement("div");Xe.id="ajustes-update-card",Xe.style.display="none",Xe.className="update-card";const Vt=document.createElement("p");Vt.className="update-card-text",Vt.textContent=n.updateReady.text,Xe.appendChild(Vt);const ot=document.createElement("button");return ot.type="button",ot.className="btn-primary",ot.style.marginTop="var(--space-xs)",ot.textContent=n.updateReady.updateBtn,ot.addEventListener("click",()=>window.location.reload()),Xe.appendChild(ot),Qe.appendChild(Xe),document.addEventListener("swUpdated",()=>{Xe.style.display="block"},{once:!0}),e.appendChild(r),e.appendChild(o),e.appendChild(d),s&&e.appendChild(s),e.appendChild(l),e.appendChild(f),e.appendChild(Se),e.appendChild(Oe),e.appendChild(tt),e.appendChild(Ye),e.appendChild(dt),e.appendChild(Qe),e.appendChild(T),t.appendChild(e),()=>{a.remove()}}const ma={voz:"Voz",cuerpo:"Cuerpo",silencio:"Silencio",respiracion:"Respiración",animo:"Ánimo"},ht="Si la ronquera te dura varios días, consultá con una fonoaudióloga o un médico.",ea=[{id:"voz-silencio",category:"voz",title:"Pausa vocal en silencio",durationSeconds:60,steps:["Dejá de hablar por un minuto completo.","Aflojá los labios y dejá la boca apenas entreabierta.","Tomá aire suave por la nariz y descansá las cuerdas vocales."],note:ht},{id:"voz-bostezo",category:"voz",title:"Bostezo suave para soltar",durationSeconds:60,steps:["Provocá un bostezo lento abriendo la boca sin forzar.","Sentí cómo baja la mandíbula y se ensancha la garganta.","Soltá el aire con un suspiro mudo y relajá la lengua."],note:ht},{id:"voz-agua",category:"voz",title:"Tomar agua despacio",durationSeconds:60,steps:["Servite un vaso de agua fresca o tibia.","Tomá un sorbo chico y mantenelo un segundo en la boca.","Tragá despacio sintiendo cómo hidrata la garganta."],note:ht},{id:"voz-zumbido",category:"voz",title:'Zumbido suave con "mmm"',durationSeconds:60,steps:["Juntá los labios suavemente, sin apretar los dientes.",'Emití un sonido "mmm" bajito y cómodo, como masticando algo rico.',"Notá la vibración cosquilleando en los labios y la nariz."],note:ht},{id:"voz-grave",category:"voz",title:"Tono más grave y pausado",durationSeconds:75,steps:["Pensá en tu tono de voz habitual cuando hay mucho barullo.","Bajá un poquito el volumen y hablá un tono más grave.","Hacé pausas de un segundo entre frase y frase para no forzar."],note:ht},{id:"cuerpo-cuello",category:"cuerpo",title:"Estirar cuello y hombros",durationSeconds:60,steps:["Dejá caer la oreja derecha hacia el hombro derecho con suavidad.","Mantené tres respiraciones sin tironear y volvé al centro.","Repetí hacia el lado izquierdo y después rodá los hombros hacia atrás."]},{id:"cuerpo-espalda",category:"cuerpo",title:"Aliviar la espalda baja",durationSeconds:75,steps:["Parate con los pies separados al ancho de caderas.","Flexioná apenas las rodillas y apoyá las manos sobre los muslos.","Redondeá la columna como un gatito y después estirala suavemente."]},{id:"cuerpo-munecas-pies",category:"cuerpo",title:"Mover muñecas y tobillos",durationSeconds:60,steps:["Hacé círculos suaves con las dos muñecas hacia afuera y hacia adentro.","Sacudí los dedos como si te estuvieras secando gotitas de agua.","Levantá un pie y dibujá círculos con el tobillo; luego cambiá de pie."]},{id:"cuerpo-pies-apoyo",category:"cuerpo",title:"Apoyar los pies en la tierra",durationSeconds:60,steps:["Apoyá las dos plantas de los pies bien firmes en el piso.","Sentí el peso de tu cuerpo descargando hacia el suelo.","Aflojá las rodillas y dejá que los hombros caigan con calma."]},{id:"silencio-pico-ruido",category:"silencio",title:"Pausa tras un pico de ruido",durationSeconds:60,steps:["Cerrá los ojos unos segundos después del momento más ruidoso.","No intentes apagar los sonidos de alrededor; solo dejalos pasar.","Llevá tu atención al aire fresco entrando por tu nariz."]},{id:"silencio-oidos",category:"silencio",title:"Cubrir los oídos con las palmas",durationSeconds:60,steps:["Frotá las palmas de las manos para darles tibieza.","Tapate los oídos suavemente con las palmas ahuecadas.","Disfrutá del sonido apagado del mar adentro tuyo por unas respiraciones."]},{id:"silencio-ventana",category:"silencio",title:"Mirar a lo lejos por la ventana",durationSeconds:60,steps:["Acercate a una ventana o mirá el punto más lejano de la sala.","Desenfocá la vista del plano cercano y mirá un árbol o el cielo.","Parpadeá despacito dejando que los ojos descansen del foco corto."]},{id:"respiracion-tres-suspiros",category:"respiracion",title:"Tres suspiros hondos",durationSeconds:45,steps:["Tomá aire profundo por la nariz llenando el pecho.","Soltalo de golpe por la boca con un suspiro sonoro y aliviado.","Repetí dos veces más soltando cualquier tensión acumulada."]},{id:"respiracion-contar-lento",category:"respiracion",title:"Soltar el aire despacito",durationSeconds:60,steps:["Inhalá en 1, 2, 3 por la nariz.","Exhalá suavemente por la boca contando mentalmente hasta 6.","Repetí a tu propio ritmo sin apuro."]},{id:"respiracion-pecho-panza",category:"respiracion",title:"Mano en el pecho y mano en la panza",durationSeconds:60,steps:["Colocá una mano en el pecho y la otra en el ombligo.","Notá cuál de las dos manos se mueve más al respirar.","Buscá que el aire baje suave hacia la panza, inflando la mano de abajo."]},{id:"animo-cosa-bien",category:"animo",title:"Una cosa que hiciste bien hoy",durationSeconds:60,steps:["Pensá en un momento chiquito de hoy que salió lindo.","Puede ser una sonrisa, un abrazo, un límite puesto con cariño.","Reconocételo en silencio: eso también fue tu trabajo y tuvo valor."]},{id:"animo-sin-comparar",category:"animo",title:"Un minuto sin compararte",durationSeconds:60,steps:["Recordá que cada sala y cada grupo tienen dinámicas distintas.",'Soltá lo que creés que "otra docente haría mejor".',"Hacés lo mejor que podés con los recursos y el día que tenés hoy."]},{id:"animo-agradecer",category:"animo",title:"Agradecé un detalle del día",durationSeconds:60,steps:["Buscá un detalle simple del día: un mate caliente, el sol, una risa.","Traé esa imagen a la cabeza y sentí el agradecimiento en el pecho.","Guardalo como un pequeño refugio para cuando lo necesites."]}];function Ot(t,e){const a=[...t];for(let r=a.length-1;r>0;r--){const o=Math.floor(e()*(r+1)),i=a[r];a[r]=a[o],a[o]=i}return a}function mo(t,e={}){const a=e.count??3,r=e.rng??Math.random,o=new Set(e.excludeIds??[]);let i=t.filter(u=>!(e.category&&e.category!=="todas"&&u.category!==e.category||e.maxDuration&&u.durationSeconds>e.maxDuration));if(i.length===0)return[];const d=i.filter(u=>!o.has(u.id));if(d.length>=a)return Ot(d,r).slice(0,a);const s=Ot(d,r),T=a-s.length,c=i.filter(u=>o.has(u.id)),l=Ot(c,r).slice(0,T);return[...s,...l].slice(0,a)}const So=["todas","voz","cuerpo","silencio","respiracion","animo"];function uo(t){const e=document.createElement("section");e.className="pausa-view screen-fade-in",e.setAttribute("aria-label",n.pausa.title);const a=document.createElement("style");a.textContent=`
    .pausa-view {
      display: flex;
      flex-direction: column;
      gap: var(--space-md);
      padding: var(--space-md) var(--space-md) var(--space-xl);
      max-width: 480px;
      margin: 0 auto;
      width: 100%;
    }

    .pausa-nav {
      display: flex;
      align-items: center;
      justify-content: space-between;
      width: 100%;
    }

    .pausa-nav-btn {
      font-family: var(--font-ui);
      font-size: var(--font-size-sm);
      color: var(--color-bosque);
      background: none;
      border: none;
      cursor: pointer;
      padding: var(--space-xs) var(--space-sm);
      min-height: var(--touch-target-min);
      display: flex;
      align-items: center;
      gap: var(--space-xs);
    }

    .pausa-nav-btn:focus-visible {
      outline: 2px solid var(--color-acento);
      outline-offset: 2px;
    }

    .pausa-header {
      text-align: center;
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: var(--space-xs);
    }

    .pausa-title {
      font-family: var(--font-pixel);
      font-size: 0.875rem;
      color: var(--color-bosque);
      margin: 0;
      line-height: 1.6;
    }

    .pausa-subtitle {
      font-family: var(--font-ui);
      font-size: var(--font-size-sm);
      color: var(--color-agua-profunda);
      margin: 0;
      line-height: 1.4;
    }

    /* Filtro horizontal de categorías con scroll táctil suave */
    .filter-bar {
      display: flex;
      gap: var(--space-xs);
      overflow-x: auto;
      padding: var(--space-xs) 0;
      scrollbar-width: none;
      -webkit-overflow-scrolling: touch;
      margin: 0 calc(-1 * var(--space-md));
      padding-left: var(--space-md);
      padding-right: var(--space-md);
    }

    .filter-bar::-webkit-scrollbar {
      display: none;
    }

    .filter-chip {
      font-family: var(--font-ui);
      font-size: var(--font-size-xs);
      font-weight: 600;
      color: var(--color-bosque);
      background-color: var(--color-crema);
      border: 1.5px solid var(--color-salvia);
      border-radius: var(--border-radius-full);
      padding: var(--space-xs) var(--space-sm);
      min-height: var(--touch-target-min);
      cursor: pointer;
      white-space: nowrap;
      transition: background-color var(--transition-fast), color var(--transition-fast), border-color var(--transition-fast);
      display: flex;
      align-items: center;
      justify-content: center;
    }

    .filter-chip.active {
      background-color: var(--color-bosque);
      color: var(--color-crema);
      border-color: var(--color-tinta);
    }

    .filter-chip:focus-visible {
      outline: 2px solid var(--color-acento);
      outline-offset: 2px;
    }

    /* Lista de desafíos */
    .challenges-list {
      display: flex;
      flex-direction: column;
      gap: var(--space-sm);
    }

    .challenge-card {
      background-color: var(--color-crema);
      border: 2px solid var(--color-tinta);
      border-radius: var(--border-radius-md);
      padding: var(--space-md);
      display: flex;
      flex-direction: column;
      gap: var(--space-xs);
      box-shadow: 2px 2px 0 var(--color-tinta);
    }

    .challenge-card-top {
      display: flex;
      align-items: center;
      justify-content: space-between;
    }

    .challenge-category-badge {
      font-family: var(--font-ui);
      font-size: var(--font-size-xs);
      font-weight: 700;
      text-transform: uppercase;
      letter-spacing: 0.04em;
      color: var(--color-bosque);
      background-color: var(--color-salvia);
      padding: 2px 8px;
      border-radius: var(--border-radius-sm);
    }

    .challenge-duration {
      font-family: var(--font-ui);
      font-size: var(--font-size-xs);
      color: var(--color-agua-profunda);
      font-weight: 600;
    }

    .challenge-card-title {
      font-family: var(--font-ui);
      font-size: var(--font-size-md);
      font-weight: 700;
      color: var(--color-tinta);
      margin: var(--space-xs) 0;
      line-height: 1.3;
    }

    .challenge-btn-start {
      font-family: var(--font-ui);
      font-size: var(--font-size-sm);
      font-weight: 600;
      color: var(--color-crema);
      background-color: var(--color-bosque);
      border: 2px solid var(--color-tinta);
      border-radius: var(--border-radius-sm);
      padding: var(--space-xs) var(--space-md);
      min-height: var(--touch-target-min);
      cursor: pointer;
      display: flex;
      align-items: center;
      justify-content: center;
      gap: var(--space-xs);
      align-self: flex-start;
      margin-top: var(--space-xs);
      transition: transform var(--transition-fast), opacity var(--transition-fast);
    }

    .challenge-btn-start:hover {
      opacity: 0.92;
      transform: translateY(-1px);
    }

    .challenge-btn-start:active {
      transform: translateY(1px);
    }

    .challenge-btn-start:focus-visible {
      outline: 2px solid var(--color-acento);
      outline-offset: 2px;
    }

    /* Botón Otras ideas */
    .btn-other-ideas {
      font-family: var(--font-ui);
      font-size: var(--font-size-sm);
      font-weight: 600;
      color: var(--color-bosque);
      background-color: var(--color-menta);
      border: 2px solid var(--color-musgo);
      border-radius: var(--border-radius-md);
      padding: var(--space-sm) var(--space-md);
      min-height: var(--touch-target-min);
      cursor: pointer;
      display: flex;
      align-items: center;
      justify-content: center;
      gap: var(--space-xs);
      margin: var(--space-xs) 0;
    }

    .btn-other-ideas:focus-visible {
      outline: 2px solid var(--color-acento);
      outline-offset: 2px;
    }

    /* Tarjeta Respirar un rato */
    .respirar-card {
      background-color: var(--color-celeste);
      border: 2px solid var(--color-agua-profunda);
      border-radius: var(--border-radius-md);
      padding: var(--space-md);
      display: flex;
      flex-direction: column;
      gap: var(--space-xs);
    }

    .respirar-card-title {
      font-family: var(--font-pixel);
      font-size: 0.75rem;
      color: var(--color-agua-profunda);
      margin: 0;
      display: flex;
      align-items: center;
      gap: var(--space-xs);
    }

    .respirar-card-desc {
      font-family: var(--font-ui);
      font-size: var(--font-size-xs);
      color: var(--color-tinta);
      margin: 0;
      line-height: 1.4;
    }

    .respirar-card-btn {
      font-family: var(--font-ui);
      font-size: var(--font-size-sm);
      font-weight: 600;
      color: var(--color-crema);
      background-color: var(--color-agua-profunda);
      border: 2px solid var(--color-tinta);
      border-radius: var(--border-radius-sm);
      padding: var(--space-xs) var(--space-md);
      min-height: var(--touch-target-min);
      cursor: pointer;
      display: flex;
      align-items: center;
      justify-content: center;
      gap: var(--space-xs);
      align-self: flex-start;
      margin-top: var(--space-xs);
    }

    .respirar-card-btn:focus-visible {
      outline: 2px solid var(--color-acento);
      outline-offset: 2px;
    }

    /* Botón Ahora no (mismo peso visual que los de salir, sin culpa) */
    .btn-now-not {
      font-family: var(--font-ui);
      font-size: var(--font-size-sm);
      font-weight: 600;
      color: var(--color-musgo);
      background: none;
      border: 2px solid var(--color-salvia);
      border-radius: var(--border-radius-md);
      padding: var(--space-sm) var(--space-md);
      min-height: var(--touch-target-min);
      cursor: pointer;
      text-align: center;
      margin-top: var(--space-xs);
    }

    .btn-now-not:focus-visible {
      outline: 2px solid var(--color-acento);
      outline-offset: 2px;
    }
  `,document.head.appendChild(a);const r=document.createElement("nav");r.className="pausa-nav",r.setAttribute("aria-label","Navegación de pausa");const o=document.createElement("button");o.className="pausa-nav-btn",o.textContent=n.app.back,o.setAttribute("aria-label","Volver al jardín"),o.addEventListener("click",()=>{window.location.hash="#/jardin"}),r.appendChild(o);const i=document.createElement("header");i.className="pausa-header";const d=document.createElement("h1");d.className="pausa-title",d.textContent=n.pausa.title;const s=document.createElement("p");s.className="pausa-subtitle",s.textContent=n.pausa.subtitle,i.appendChild(d),i.appendChild(s);let T="todas",c=[];const l=document.createElement("div");l.className="filter-bar",l.setAttribute("role","radiogroup"),l.setAttribute("aria-label","Filtrar por categoría");const u=[],x=document.createElement("div");x.className="challenges-list",x.setAttribute("aria-live","polite");function C(g,y){x.innerHTML="";const N=mo(ea,{count:3,category:g,excludeIds:y});c=N.map(b=>b.id),N.forEach(b=>{const k=document.createElement("article");k.className="challenge-card";const H=document.createElement("div");H.className="challenge-card-top";const S=document.createElement("span");S.className="challenge-category-badge",S.textContent=ma[b.category];const w=document.createElement("span");w.className="challenge-duration",w.textContent=`${b.durationSeconds} seg`,H.appendChild(S),H.appendChild(w);const E=document.createElement("h2");E.className="challenge-card-title",E.textContent=b.title;const I=document.createElement("button");I.className="challenge-btn-start",I.setAttribute("aria-label",`Empezar desafío: ${b.title}`),I.appendChild(te("play",{size:10})),I.appendChild(document.createTextNode(` ${n.pausa.startBtn}`)),I.addEventListener("click",()=>{window.location.hash=`#/desafio/${b.id}`}),k.appendChild(H),k.appendChild(E),k.appendChild(I),x.appendChild(k)})}So.forEach(g=>{const y=document.createElement("button");y.className=`filter-chip ${g===T?"active":""}`,y.setAttribute("role","radio"),y.setAttribute("aria-checked",g===T?"true":"false"),y.textContent=g==="todas"?n.pausa.filterAll:ma[g],y.addEventListener("click",()=>{T=g,u.forEach(N=>{N.classList.remove("active"),N.setAttribute("aria-checked","false")}),y.classList.add("active"),y.setAttribute("aria-checked","true"),C(T,[])}),u.push(y),l.appendChild(y)});const M=document.createElement("button");M.className="btn-other-ideas",M.appendChild(te("rotate",{size:12})),M.appendChild(document.createTextNode(` ${n.pausa.otherIdeasBtn}`)),M.addEventListener("click",()=>{C(T,c)});const p=document.createElement("aside");p.className="respirar-card";const m=document.createElement("h2");m.className="respirar-card-title",m.appendChild(te("wind",{size:12})),m.appendChild(document.createTextNode(` ${n.pausa.respirarCardTitle}`));const h=document.createElement("p");h.className="respirar-card-desc",h.textContent=n.pausa.respirarCardDesc;const v=document.createElement("button");v.className="respirar-card-btn",v.textContent=n.pausa.respirarBtn,v.setAttribute("aria-label","Ir a la pantalla de respiración guiada"),v.addEventListener("click",()=>{window.location.hash="#/respirar"}),p.appendChild(m),p.appendChild(h),p.appendChild(v);const f=document.createElement("button");return f.className="btn-now-not",f.textContent=n.pausa.nowNotBtn,f.setAttribute("aria-label","Volver al jardín sin hacer una pausa ahora"),f.addEventListener("click",()=>{window.location.hash="#/jardin"}),C(T,[]),e.appendChild(r),e.appendChild(i),e.appendChild(l),e.appendChild(x),e.appendChild(M),e.appendChild(p),e.appendChild(f),t.appendChild(e),()=>{a.remove()}}function To(t,e){const a=ea.find(W=>W.id===e)??ea[0],r=document.createElement("section");r.className="desafio-view screen-fade-in",r.setAttribute("aria-label",a.title);const o=document.createElement("style");o.textContent=`
    .desafio-view {
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: var(--space-md);
      padding: var(--space-md);
      max-width: 440px;
      margin: 0 auto;
      width: 100%;
      min-height: calc(100vh - 40px);
      justify-content: space-between;
    }

    .desafio-top-bar {
      display: flex;
      align-items: center;
      justify-content: space-between;
      width: 100%;
    }

    .desafio-quit-btn {
      font-family: var(--font-ui);
      font-size: var(--font-size-sm);
      color: var(--color-musgo);
      background: none;
      border: none;
      cursor: pointer;
      padding: var(--space-xs) var(--space-sm);
      min-height: var(--touch-target-min);
    }

    .desafio-quit-btn:focus-visible {
      outline: 2px solid var(--color-acento);
      outline-offset: 2px;
    }

    .desafio-step-badge {
      font-family: var(--font-ui);
      font-size: var(--font-size-xs);
      font-weight: 700;
      color: var(--color-bosque);
      background-color: var(--color-salvia);
      padding: 4px 12px;
      border-radius: var(--border-radius-full);
    }

    /* Barra de progreso suave continua (sin cuenta regresiva agresiva) */
    .desafio-progress-track {
      width: 100%;
      height: 8px;
      background-color: var(--color-salvia);
      border-radius: var(--border-radius-full);
      overflow: hidden;
      border: 1px solid var(--color-musgo);
    }

    .desafio-progress-fill {
      height: 100%;
      width: 0%;
      background-color: var(--color-bosque);
      border-radius: var(--border-radius-full);
      transition: width 0.2s linear;
    }

    /* Contenido central */
    .desafio-content {
      display: flex;
      flex-direction: column;
      align-items: center;
      text-align: center;
      gap: var(--space-md);
      width: 100%;
    }

    .desafio-title {
      font-family: var(--font-pixel);
      font-size: 0.875rem;
      color: var(--color-bosque);
      margin: 0;
      line-height: 1.5;
    }

    .desafio-canvas-wrap {
      display: flex;
      align-items: center;
      justify-content: center;
      margin: var(--space-xs) 0;
    }

    .desafio-step-card {
      background-color: var(--color-crema);
      border: 2px solid var(--color-tinta);
      border-radius: var(--border-radius-md);
      padding: var(--space-lg) var(--space-md);
      width: 100%;
      box-shadow: 2px 2px 0 var(--color-tinta);
    }

    .desafio-step-text {
      font-family: var(--font-ui);
      font-size: var(--font-size-lg);
      font-weight: 600;
      color: var(--color-tinta);
      margin: 0;
      line-height: 1.5;
    }

    .desafio-note {
      font-family: var(--font-ui);
      font-size: var(--font-size-xs);
      color: var(--color-musgo);
      margin: var(--space-xs) 0 0;
      line-height: 1.4;
      font-style: italic;
    }

    /* Botones de acción */
    .desafio-actions {
      display: flex;
      flex-direction: column;
      gap: var(--space-sm);
      width: 100%;
    }

    .btn-step-next {
      font-family: var(--font-ui);
      font-size: var(--font-size-md);
      font-weight: 700;
      color: var(--color-crema);
      background-color: var(--color-bosque);
      border: 2px solid var(--color-tinta);
      border-radius: var(--border-radius-md);
      padding: var(--space-sm) var(--space-md);
      min-height: var(--touch-target-min);
      cursor: pointer;
      display: flex;
      align-items: center;
      justify-content: center;
      gap: var(--space-xs);
      transition: transform var(--transition-fast), opacity var(--transition-fast);
    }

    .btn-step-next:hover {
      opacity: 0.92;
      transform: translateY(-1px);
    }

    .btn-step-next:focus-visible {
      outline: 2px solid var(--color-acento);
      outline-offset: 2px;
    }

    .desafio-sub-actions {
      display: flex;
      gap: var(--space-sm);
      width: 100%;
    }

    .btn-pause-toggle {
      flex: 1;
      font-family: var(--font-ui);
      font-size: var(--font-size-sm);
      font-weight: 600;
      color: var(--color-bosque);
      background-color: var(--color-menta);
      border: 1.5px solid var(--color-musgo);
      border-radius: var(--border-radius-md);
      padding: var(--space-xs) var(--space-sm);
      min-height: var(--touch-target-min);
      cursor: pointer;
      display: flex;
      align-items: center;
      justify-content: center;
      gap: var(--space-xs);
    }

    .btn-pause-toggle:focus-visible {
      outline: 2px solid var(--color-acento);
      outline-offset: 2px;
    }

    /* Modal o estado de fin */
    .desafio-finish-state {
      background-color: var(--color-crema);
      border: 2px solid var(--color-tinta);
      border-radius: var(--border-radius-md);
      padding: var(--space-lg) var(--space-md);
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: var(--space-md);
      text-align: center;
      width: 100%;
      box-shadow: 2px 2px 0 var(--color-tinta);
    }

    .desafio-finish-title {
      font-family: var(--font-pixel);
      font-size: 0.875rem;
      color: var(--color-bosque);
      margin: 0;
    }

    .desafio-finish-text {
      font-family: var(--font-ui);
      font-size: var(--font-size-md);
      color: var(--color-tinta);
      margin: 0;
      line-height: 1.5;
    }
  `,document.head.appendChild(o);let i=null;const d=async()=>{var W;try{"wakeLock"in navigator&&typeof((W=navigator.wakeLock)==null?void 0:W.request)=="function"&&(i=await navigator.wakeLock.request("screen"))}catch{}},s=()=>{try{i&&typeof i.release=="function"&&(i.release(),i=null)}catch{}};d();const T=document.createElement("div");T.className="desafio-top-bar";const c=document.createElement("span");c.className="desafio-step-badge";const l=document.createElement("button");l.className="desafio-quit-btn",l.textContent=n.desafio.quitBtn,l.setAttribute("aria-label","Terminar el desafío antes"),T.appendChild(c),T.appendChild(l);const u=document.createElement("div");u.className="desafio-progress-track",u.setAttribute("role","progressbar"),u.setAttribute("aria-valuemin","0"),u.setAttribute("aria-valuemax","100"),u.setAttribute("aria-valuenow","0");const x=document.createElement("div");x.className="desafio-progress-fill",u.appendChild(x);const C=document.createElement("div");C.className="desafio-canvas-wrap",C.setAttribute("aria-hidden","true");const M=a.category==="cuerpo"?Za:a.category==="silencio"?Ka:a.category==="respiracion"?Xa:ta,p=4,{canvas:m,ctx:h}=Pe(32*p,32*p),v=fe(M),f=new aa(()=>{h.clearRect(0,0,32*p,32*p),oe(h,v,0,0,p)});f.add(v),f.start(),oe(h,v,0,0,p),C.appendChild(m);const g=document.createElement("div");g.className="desafio-content";const y=document.createElement("h1");y.className="desafio-title",y.textContent=a.title;const N=document.createElement("div");N.className="desafio-step-card",N.setAttribute("aria-live","polite");const b=document.createElement("p");b.className="desafio-step-text",N.appendChild(b);let k=null;a.note&&(k=document.createElement("p"),k.className="desafio-note",k.textContent=a.note,N.appendChild(k)),g.appendChild(y),g.appendChild(C),g.appendChild(N);const H=document.createElement("div");H.className="desafio-actions";const S=document.createElement("button");S.className="btn-step-next",S.textContent=n.desafio.nextBtn;const w=document.createElement("div");w.className="desafio-sub-actions";const E=document.createElement("button");E.className="btn-pause-toggle";const I=te("pause",{size:10});E.appendChild(I);const O=document.createTextNode(` ${n.desafio.pauseBtn}`);E.appendChild(O),w.appendChild(E),H.appendChild(S),H.appendChild(w);let L=0;const z=a.steps.length;let D=!1,K=!1;const pe=Date.now();let J=0,ge=0;function ee(){c.textContent=`${n.desafio.stepLabel} ${L+1} ${n.desafio.stepOf} ${z}`,b.textContent=a.steps[L],L===z-1?S.textContent=n.desafio.finishBtn:S.textContent=n.desafio.nextBtn}ee();let Q=null;function be(){if(!D&&!K){const W=Date.now()-pe-J,ae=Math.min(1,W/(a.durationSeconds*1e3)),_=Math.floor(ae*100);x.style.width=`${_}%`,u.setAttribute("aria-valuenow",_.toString())}Q=requestAnimationFrame(be)}Q=requestAnimationFrame(be),E.addEventListener("click",()=>{D=!D,E.innerHTML="",D?(ge=Date.now(),E.appendChild(te("play",{size:10})),E.appendChild(document.createTextNode(` ${n.desafio.resumeBtn}`))):(J+=Date.now()-ge,E.appendChild(te("pause",{size:10})),E.appendChild(document.createTextNode(` ${n.desafio.pauseBtn}`)))});function me(W,ae){K=!0,s(),Q&&cancelAnimationFrame(Q),vt();const _=Math.round((Date.now()-pe-J)/1e3);Ea("desafio",{challengeId:a.id,title:a.title,category:a.category,durationSeconds:_,completed:W}),r.innerHTML="";const Y=document.createElement("div");Y.className="desafio-finish-state";const Ce=document.createElement("h2");Ce.className="desafio-finish-title",Ce.textContent=n.desafio.doneTitle;const He=document.createElement("p");He.className="desafio-finish-text",He.textContent=ae;const le=document.createElement("button");le.className="btn-step-next",le.textContent=n.desafio.backToGarden,le.addEventListener("click",()=>{window.location.hash="#/jardin"}),Y.appendChild(C),Y.appendChild(Ce),Y.appendChild(He),Y.appendChild(le),r.appendChild(Y),le.focus()}return S.addEventListener("click",()=>{L<z-1?(L+=1,ee(),vt()):me(!0,n.desafio.doneMessage)}),l.addEventListener("click",()=>{me(!1,n.desafio.quitWarmth)}),r.appendChild(T),r.appendChild(u),r.appendChild(g),r.appendChild(H),t.appendChild(r),()=>{s(),Q&&cancelAnimationFrame(Q),f.stop(),o.remove()}}const $t={suave:{id:"suave",name:"Suave",subtitle:"4 seg - 6 seg",description:"Inhalar en 4, exhalar en 6. Ideal para aflojar el cuerpo y bajar un cambio.",phases:[{type:"inhalar",durationSeconds:4,label:"Tomá aire despacito por la nariz",salaLabel:"Inflamos como un globo"},{type:"exhalar",durationSeconds:6,label:"Soltá el aire lento por la boca",salaLabel:"Soltamos el aire como una brisa"}],cycleDurationSeconds:10},cuadrada:{id:"cuadrada",name:"Cuadrada",subtitle:"4 - 4 - 4 - 4",description:"Cuatro tiempos iguales con pausas suaves. Ayuda a despejar y ordenar la mente.",phases:[{type:"inhalar",durationSeconds:4,label:"Tomá aire despacito",salaLabel:"Tomamos aire juntos"},{type:"pausa",durationSeconds:4,label:"Sostené un instante sin apretar",salaLabel:"Esperamos quietitos como ranas"},{type:"exhalar",durationSeconds:4,label:"Soltá el aire despacito",salaLabel:"Soltamos el aire suave"},{type:"pausa",durationSeconds:4,label:"Un segundito en calma",salaLabel:"Quedamos en silencio"}],cycleDurationSeconds:16},corta:{id:"corta",name:"Corta",subtitle:"3 seg - 5 seg",description:"Rápida y liviana. Perfecta para un minuto entre una actividad y la siguiente.",phases:[{type:"inhalar",durationSeconds:3,label:"Aire adentro",salaLabel:"Aire adentro despacio"},{type:"exhalar",durationSeconds:5,label:"Aire afuera largo",salaLabel:"Soplamos como una pluma"}],cycleDurationSeconds:8}};function fo(t,e,a,r=!1){const o=Math.max(0,e);if(o>=a){const m=t.phases[t.phases.length-1];return{isFinished:!0,currentPhaseIndex:t.phases.length-1,currentPhase:m,phaseElapsedSeconds:m.durationSeconds,phaseRemainingSeconds:0,phaseProgress:1,cycleIndex:Math.floor(a/t.cycleDurationSeconds),totalElapsedSeconds:a,totalDurationSeconds:a,totalProgress:1,displayText:r?"¡Muy bien, terminamos!":"Sesión completada con calma"}}const d=o%t.cycleDurationSeconds,s=Math.floor(o/t.cycleDurationSeconds);let T=0,c=0,l=t.phases[0];for(let m=0;m<t.phases.length;m++){const h=t.phases[m];if(d<T+h.durationSeconds){c=m,l=h;break}T+=h.durationSeconds}const u=d-T,x=Math.max(0,l.durationSeconds-u),C=Math.min(1,Math.max(0,u/l.durationSeconds)),M=Math.min(1,Math.max(0,o/a)),p=r?l.salaLabel:l.label;return{isFinished:!1,currentPhaseIndex:c,currentPhase:l,phaseElapsedSeconds:u,phaseRemainingSeconds:x,phaseProgress:C,cycleIndex:s,totalElapsedSeconds:o,totalDurationSeconds:a,totalProgress:M,displayText:p}}function ho(t){const e=document.createElement("section");e.className="respirar-view screen-fade-in",e.setAttribute("aria-label",n.respirar.title);const a=document.createElement("style");a.textContent=`
    .respirar-view {
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: var(--space-md);
      padding: var(--space-md);
      max-width: 440px;
      margin: 0 auto;
      width: 100%;
      min-height: calc(100vh - 40px);
      justify-content: space-between;
    }

    .respirar-nav {
      display: flex;
      align-items: center;
      justify-content: space-between;
      width: 100%;
    }

    .respirar-back-btn {
      font-family: var(--font-ui);
      font-size: var(--font-size-sm);
      color: var(--color-bosque);
      background: none;
      border: none;
      cursor: pointer;
      padding: var(--space-xs) var(--space-sm);
      min-height: var(--touch-target-min);
    }

    .respirar-back-btn:focus-visible {
      outline: 2px solid var(--color-acento);
      outline-offset: 2px;
    }

    /* Setup / Selector */
    .respirar-setup {
      display: flex;
      flex-direction: column;
      gap: var(--space-md);
      width: 100%;
      background-color: var(--color-crema);
      border: 2px solid var(--color-tinta);
      border-radius: var(--border-radius-md);
      padding: var(--space-md);
      box-shadow: 2px 2px 0 var(--color-tinta);
    }

    .setup-header {
      text-align: center;
    }

    .setup-title {
      font-family: var(--font-pixel);
      font-size: 0.875rem;
      color: var(--color-bosque);
      margin: 0;
      line-height: 1.5;
    }

    .setup-subtitle {
      font-family: var(--font-ui);
      font-size: var(--font-size-sm);
      color: var(--color-agua-profunda);
      margin: var(--space-xs) 0 0;
    }

    .setup-section-label {
      font-family: var(--font-ui);
      font-size: var(--font-size-sm);
      font-weight: 700;
      color: var(--color-tinta);
      margin: var(--space-xs) 0 4px;
    }

    .options-row {
      display: flex;
      gap: var(--space-xs);
      width: 100%;
    }

    .option-btn {
      flex: 1;
      font-family: var(--font-ui);
      font-size: var(--font-size-xs);
      font-weight: 600;
      color: var(--color-bosque);
      background-color: var(--color-menta);
      border: 1.5px solid var(--color-salvia);
      border-radius: var(--border-radius-md);
      padding: var(--space-xs) 4px;
      min-height: var(--touch-target-min);
      cursor: pointer;
      text-align: center;
      transition: background-color var(--transition-fast), color var(--transition-fast);
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      gap: 2px;
    }

    .option-btn.active {
      background-color: var(--color-bosque);
      color: var(--color-crema);
      border-color: var(--color-tinta);
    }

    .option-btn:focus-visible {
      outline: 2px solid var(--color-acento);
      outline-offset: 2px;
    }

    /* Switch modo sala */
    .sala-switch-row {
      display: flex;
      align-items: center;
      justify-content: space-between;
      gap: var(--space-sm);
      padding: var(--space-xs) 0;
      border-top: 1px solid var(--color-salvia);
      border-bottom: 1px solid var(--color-salvia);
    }

    .sala-label-wrap {
      display: flex;
      flex-direction: column;
    }

    .sala-label-title {
      font-family: var(--font-ui);
      font-size: var(--font-size-sm);
      font-weight: 700;
      color: var(--color-tinta);
    }

    .sala-label-desc {
      font-family: var(--font-ui);
      font-size: var(--font-size-xs);
      color: var(--color-musgo);
    }

    .sala-checkbox {
      width: 24px;
      height: 24px;
      cursor: pointer;
      accent-color: var(--color-bosque);
    }

    .respirar-warning {
      font-family: var(--font-ui);
      font-size: var(--font-size-xs);
      color: var(--color-musgo);
      font-style: italic;
      text-align: center;
      margin: 0;
    }

    .btn-start-breathing {
      font-family: var(--font-ui);
      font-size: var(--font-size-md);
      font-weight: 700;
      color: var(--color-crema);
      background-color: var(--color-bosque);
      border: 2px solid var(--color-tinta);
      border-radius: var(--border-radius-md);
      padding: var(--space-sm) var(--space-md);
      min-height: var(--touch-target-min);
      cursor: pointer;
      display: flex;
      align-items: center;
      justify-content: center;
      gap: var(--space-xs);
      width: 100%;
    }

    .btn-start-breathing:focus-visible {
      outline: 2px solid var(--color-acento);
      outline-offset: 2px;
    }

    /* Pantalla Activa de Respiración */
    .breathing-active-wrap {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: space-between;
      width: 100%;
      height: 100%;
      flex: 1;
      gap: var(--space-md);
    }

    .breathing-circle-container {
      position: relative;
      width: 220px;
      height: 220px;
      display: flex;
      align-items: center;
      justify-content: center;
      margin: auto 0;
    }

    .breathing-orb {
      position: absolute;
      width: 180px;
      height: 180px;
      border-radius: 50%;
      background: radial-gradient(circle, var(--color-menta) 0%, var(--color-celeste) 70%, var(--color-salvia) 100%);
      border: 3px solid var(--color-bosque);
      transform: scale(0.85);
      transition: transform 0.4s ease-out;
      display: flex;
      align-items: center;
      justify-content: center;
      box-shadow: 0 4px 12px rgba(43, 58, 66, 0.12);
    }

    /* Respeto a prefers-reduced-motion */
    @media (prefers-reduced-motion: reduce) {
      .breathing-orb {
        transform: scale(1) !important;
        transition: none !important;
      }
    }

    .breathing-phase-text {
      font-family: var(--font-ui);
      font-size: var(--font-size-xl);
      font-weight: 700;
      color: var(--color-bosque);
      text-align: center;
      margin: 0;
      line-height: 1.4;
      max-width: 300px;
      min-height: 3.5rem;
      display: flex;
      align-items: center;
      justify-content: center;
    }

    .breathing-phase-text.sala-mode {
      font-size: 1.5rem;
      color: var(--color-tinta);
    }

    .breathing-controls {
      display: flex;
      gap: var(--space-sm);
      width: 100%;
    }

    .btn-b-control {
      flex: 1;
      font-family: var(--font-ui);
      font-size: var(--font-size-sm);
      font-weight: 600;
      color: var(--color-crema);
      background-color: var(--color-bosque);
      border: 2px solid var(--color-tinta);
      border-radius: var(--border-radius-md);
      padding: var(--space-sm);
      min-height: var(--touch-target-min);
      cursor: pointer;
      display: flex;
      align-items: center;
      justify-content: center;
      gap: var(--space-xs);
    }

    .btn-b-control.secondary {
      background-color: var(--color-salvia);
      color: var(--color-tinta);
      border-color: var(--color-musgo);
    }

    .btn-b-control:focus-visible {
      outline: 2px solid var(--color-acento);
      outline-offset: 2px;
    }
  `,document.head.appendChild(a);let r=null;const o=async()=>{var L;try{"wakeLock"in navigator&&typeof((L=navigator.wakeLock)==null?void 0:L.request)=="function"&&(r=await navigator.wakeLock.request("screen"))}catch{}},i=()=>{try{r&&typeof r.release=="function"&&(r.release(),r=null)}catch{}},d=document.createElement("nav");d.className="respirar-nav";const s=document.createElement("button");s.className="respirar-back-btn",s.textContent=n.app.back,s.setAttribute("aria-label","Volver a la selección de pausa"),s.addEventListener("click",()=>{window.location.hash="#/pausa"}),d.appendChild(s);let T="suave",c=1,l=!1;const u=document.createElement("div");u.className="respirar-setup";const x=document.createElement("header");x.className="setup-header";const C=document.createElement("h1");C.className="setup-title",C.textContent=n.respirar.title;const M=document.createElement("p");M.className="setup-subtitle",M.textContent=n.respirar.subtitle,x.appendChild(C),x.appendChild(M);const p=document.createElement("p");p.className="setup-section-label",p.textContent=n.respirar.patternLabel;const m=document.createElement("div");m.className="options-row",m.setAttribute("role","radiogroup"),m.setAttribute("aria-label",n.respirar.patternLabel);const h=[];Object.keys($t).forEach(L=>{const z=$t[L],D=document.createElement("button");D.className=`option-btn ${L===T?"active":""}`,D.setAttribute("role","radio"),D.setAttribute("aria-checked",L===T?"true":"false"),D.innerHTML=`<strong>${z.name}</strong><span>${z.subtitle}</span>`,D.addEventListener("click",()=>{T=L,h.forEach(K=>{K.classList.remove("active"),K.setAttribute("aria-checked","false")}),D.classList.add("active"),D.setAttribute("aria-checked","true")}),h.push(D),m.appendChild(D)});const v=document.createElement("p");v.className="setup-section-label",v.textContent=n.respirar.durationLabel;const f=document.createElement("div");f.className="options-row",f.setAttribute("role","radiogroup"),f.setAttribute("aria-label",n.respirar.durationLabel);const g=[{min:1,label:n.respirar.minute1},{min:2,label:n.respirar.minute2},{min:3,label:n.respirar.minute3}],y=[];g.forEach(L=>{const z=document.createElement("button");z.className=`option-btn ${L.min===c?"active":""}`,z.setAttribute("role","radio"),z.setAttribute("aria-checked",L.min===c?"true":"false"),z.textContent=L.label,z.addEventListener("click",()=>{c=L.min,y.forEach(D=>{D.classList.remove("active"),D.setAttribute("aria-checked","false")}),z.classList.add("active"),z.setAttribute("aria-checked","true")}),y.push(z),f.appendChild(z)});const N=document.createElement("label");N.className="sala-switch-row";const b=document.createElement("div");b.className="sala-label-wrap";const k=document.createElement("span");k.className="sala-label-title",k.textContent=n.respirar.salaModeTitle;const H=document.createElement("span");H.className="sala-label-desc",H.textContent=n.respirar.salaModeDesc,b.appendChild(k),b.appendChild(H);const S=document.createElement("input");S.type="checkbox",S.className="sala-checkbox",S.checked=l,S.addEventListener("change",()=>{l=S.checked}),N.appendChild(b),N.appendChild(S);const w=document.createElement("p");w.className="respirar-warning",w.textContent=n.respirar.warning;const E=document.createElement("button");E.className="btn-start-breathing",E.appendChild(te("play",{size:12})),E.appendChild(document.createTextNode(` ${n.respirar.startBtn}`)),u.appendChild(x),u.appendChild(p),u.appendChild(m),u.appendChild(v),u.appendChild(f),u.appendChild(N),u.appendChild(w),u.appendChild(E);let I=null;function O(){o(),e.innerHTML="";const L=document.createElement("div");L.className="breathing-active-wrap";const z=document.createElement("div");z.className="respirar-nav";const D=document.createElement("button");D.className="respirar-back-btn",D.textContent=n.respirar.quitBtn,z.appendChild(D);const K=document.createElement("div");K.className="breathing-circle-container";const pe=document.createElement("div");pe.className="breathing-orb";const J=3,{canvas:ge,ctx:ee}=Pe(32*J,32*J),Q=fe(Ja),be=fe(Qa),me=fe(ta);pe.appendChild(ge),K.appendChild(pe);const W=document.createElement("p");W.className=`breathing-phase-text ${l?"sala-mode":""}`,W.setAttribute("aria-live","polite");const ae=document.createElement("div");ae.className="breathing-controls";const _=document.createElement("button");_.className="btn-b-control secondary",_.appendChild(te("pause",{size:10})),_.appendChild(document.createTextNode(` ${n.respirar.pauseBtn}`)),ae.appendChild(_),L.appendChild(z),L.appendChild(W),L.appendChild(K),L.appendChild(ae),e.appendChild(L);const Y=$t[T],Ce=c*60,He=Date.now();let le=0,Me=0,Se=!1,Ve="";function _e(Re,X){I&&cancelAnimationFrame(I),i(),vt();const ye=Math.round((Date.now()-He-le)/1e3);Ea("respiracion",{pattern:Y.id,durationSeconds:ye,salaMode:l,completed:Re}),e.innerHTML="";const Ee=document.createElement("div");Ee.className="respirar-setup",Ee.style.textAlign="center";const xe=document.createElement("h2");xe.className="setup-title",xe.textContent=n.respirar.doneTitle;const qe=document.createElement("p");qe.className="setup-subtitle",qe.textContent=X;const re=document.createElement("button");re.className="btn-start-breathing",re.textContent=n.respirar.backToGarden,re.addEventListener("click",()=>{window.location.hash="#/jardin"}),Ee.appendChild(xe),Ee.appendChild(qe),Ee.appendChild(re),e.appendChild(Ee),re.focus()}_.addEventListener("click",()=>{Se=!Se,_.innerHTML="",Se?(Me=Date.now(),_.appendChild(te("play",{size:10})),_.appendChild(document.createTextNode(` ${n.respirar.resumeBtn}`))):(le+=Date.now()-Me,_.appendChild(te("pause",{size:10})),_.appendChild(document.createTextNode(` ${n.respirar.pauseBtn}`)))}),D.addEventListener("click",()=>{_e(!1,n.respirar.quitWarmth)});function Ge(){if(!Se){const Re=(Date.now()-He-le)/1e3,X=fo(Y,Re,Ce,l);if(X.isFinished){_e(!0,l?n.respirar.doneMessageSala:n.respirar.doneMessage);return}X.currentPhase.type!==Ve&&(Ve=X.currentPhase.type,vt()),W.textContent=X.displayText;let ye=.85;X.currentPhase.type==="inhalar"?ye=.85+.35*X.phaseProgress:X.currentPhase.type==="pausa"?ye=1.2:X.currentPhase.type==="exhalar"&&(ye=1.2-.35*X.phaseProgress),pe.style.transform=`scale(${ye})`,ee.clearRect(0,0,32*J,32*J),X.currentPhase.type==="inhalar"?oe(ee,Q,0,0,J):X.currentPhase.type==="exhalar"?oe(ee,be,0,0,J):oe(ee,me,0,0,J)}I=requestAnimationFrame(Ge)}vt(),I=requestAnimationFrame(Ge)}return E.addEventListener("click",()=>{O()}),e.appendChild(d),e.appendChild(u),t.appendChild(e),()=>{i(),I&&cancelAnimationFrame(I),a.remove()}}function vo(t){t.innerHTML="";const e=document.createElement("section");e.className="coleccion-screen",e.setAttribute("role","main"),e.setAttribute("aria-label",n.coleccion.title);const a=document.createElement("style");a.textContent=`
    .coleccion-screen {
      flex: 1;
      width: 100%;
      height: 100%;
      box-sizing: border-box;
      display: flex;
      flex-direction: column;
      padding: var(--space-md);
      background: linear-gradient(
        180deg,
        var(--color-celeste-agua) 0%,
        var(--color-menta) 60%,
        var(--color-salvia) 100%
      );
      overflow-y: auto;
      gap: var(--space-md);
    }

    .coleccion-top {
      display: flex;
      align-items: center;
      justify-content: space-between;
      gap: var(--space-sm);
    }

    .back-btn {
      font-family: var(--font-ui);
      font-size: var(--font-size-sm);
      font-weight: 600;
      color: var(--color-tinta);
      background-color: var(--color-menta);
      border: 2px solid var(--color-bosque);
      border-radius: var(--border-radius-sm);
      padding: var(--space-xs) var(--space-sm);
      min-height: var(--touch-target-min);
      min-width: var(--touch-target-min);
      cursor: pointer;
      line-height: 1.3;
      display: inline-flex;
      align-items: center;
      justify-content: center;
      box-sizing: border-box;
      transition: transform var(--transition-fast), opacity var(--transition-fast);
    }

    .back-btn:hover {
      opacity: 0.9;
      transform: translateY(-1px);
    }

    .back-btn:focus-visible {
      outline: 3px solid var(--color-acento);
      outline-offset: 3px;
    }

    .coleccion-title {
      font-family: var(--font-pixel);
      font-size: 0.8125rem;
      color: var(--color-bosque);
      line-height: 1.6;
      margin: 0;
      text-align: center;
      flex: 1;
    }

    .btn-acomodar-top {
      font-family: var(--font-ui);
      font-size: var(--font-size-xs);
      font-weight: 600;
      color: var(--color-crema);
      background-color: var(--color-bosque);
      border: 2px solid var(--color-tinta);
      border-radius: var(--border-radius-sm);
      padding: var(--space-xs) var(--space-sm);
      min-height: var(--touch-target-min);
      cursor: pointer;
      display: inline-flex;
      align-items: center;
      justify-content: center;
      white-space: nowrap;
      box-sizing: border-box;
      transition: transform var(--transition-fast), opacity var(--transition-fast);
    }

    .btn-acomodar-top:hover {
      opacity: 0.9;
      transform: translateY(-1px);
    }

    .empty-card {
      background-color: var(--color-crema);
      border: 2px solid var(--color-bosque);
      border-radius: var(--border-radius-md);
      padding: var(--space-lg);
      text-align: center;
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: var(--space-sm);
    }

    .empty-text {
      font-family: var(--font-ui);
      font-size: var(--font-size-md);
      color: var(--color-agua-profunda);
      line-height: 1.5;
      margin: 0;
    }

    .category-section {
      display: flex;
      flex-direction: column;
      gap: var(--space-xs);
    }

    .category-title {
      font-family: var(--font-pixel);
      font-size: 0.6875rem;
      color: var(--color-bosque);
      margin: var(--space-xs) 0 0;
      line-height: 1.6;
    }

    .items-grid {
      display: flex;
      flex-direction: column;
      gap: var(--space-sm);
    }

    .item-card {
      background-color: var(--color-crema);
      border: 2px solid var(--color-tinta);
      border-radius: var(--border-radius-md);
      padding: var(--space-sm);
      display: flex;
      align-items: center;
      gap: var(--space-md);
      box-shadow: 2px 2px 0 var(--color-bosque);
    }

    .item-sprite-wrap {
      width: 52px;
      height: 52px;
      background-color: var(--color-salvia);
      border: 2px solid var(--color-bosque);
      border-radius: var(--border-radius-sm);
      display: flex;
      align-items: center;
      justify-content: center;
      flex-shrink: 0;
    }

    .item-info {
      flex: 1;
      display: flex;
      flex-direction: column;
      gap: 2px;
    }

    .item-name {
      font-family: var(--font-pixel);
      font-size: 0.625rem;
      color: var(--color-bosque);
      margin: 0;
      line-height: 1.4;
    }

    .item-desc {
      font-family: var(--font-ui);
      font-size: var(--font-size-xs);
      color: var(--color-agua-profunda);
      margin: 0;
      line-height: 1.35;
    }

    .item-badge {
      display: inline-block;
      align-self: flex-start;
      font-family: var(--font-pixel);
      font-size: 0.5rem;
      background-color: var(--color-turquesa);
      color: var(--color-tinta);
      padding: 2px 6px;
      border-radius: 4px;
      border: 1px solid var(--color-bosque);
      margin-top: 4px;
    }

    .item-action-btn {
      font-family: var(--font-ui);
      font-size: var(--font-size-xs);
      font-weight: 600;
      background-color: var(--color-salvia);
      color: var(--color-tinta);
      border: 2px solid var(--color-bosque);
      border-radius: var(--border-radius-sm);
      padding: var(--space-xs) var(--space-sm);
      min-height: var(--touch-target-min);
      cursor: pointer;
      flex-shrink: 0;
      transition: transform var(--transition-fast);
    }

    .item-action-btn:hover {
      transform: translateY(-1px);
    }
  `,document.head.appendChild(a);const r=Ae(),o=new Set(r.obtainedItemIds),i=new Map(r.placedDecorations.map(u=>[u.catalogId,u])),d=oa.filter(u=>o.has(u.id)),s=document.createElement("div");s.className="coleccion-top";const T=document.createElement("button");T.className="back-btn",T.textContent=n.coleccion.back,T.setAttribute("aria-label","Volver al jardín"),T.addEventListener("click",()=>{window.location.hash="#/jardin"});const c=document.createElement("h1");c.className="coleccion-title",c.textContent=n.coleccion.title;const l=document.createElement("button");if(l.className="btn-acomodar-top",l.textContent=n.jardin.decorarBtn,l.setAttribute("aria-label","Acomodar elementos en el jardín"),l.addEventListener("click",()=>{window.location.hash="#/jardin?modo=acomodar"}),s.appendChild(T),s.appendChild(c),s.appendChild(l),e.appendChild(s),d.length===0){const u=document.createElement("div");u.className="empty-card";const x=document.createElement("p");x.className="empty-text",x.textContent=n.coleccion.emptyHint,u.appendChild(x),e.appendChild(u)}else{const u=["visitantes","hongos","plantas","agua","cielo","cositas"];for(const x of u){const C=d.filter(h=>h.category===x);if(C.length===0)continue;const M=document.createElement("div");M.className="category-section";const p=document.createElement("h2");p.className="category-title",p.textContent=gn[x],M.appendChild(p);const m=document.createElement("div");m.className="items-grid";for(const h of C){const v=go(h,i.has(h.id));m.appendChild(v)}M.appendChild(m),e.appendChild(M)}}return t.appendChild(e),()=>{a.remove()}}function go(t,e){const a=document.createElement("div");a.className="item-card";const r=document.createElement("div");r.className="item-sprite-wrap";const{canvas:o,ctx:i}=Pe(48,48),d=fe(t.sprite);oe(i,d,0,0,3),r.appendChild(o);const s=document.createElement("div");s.className="item-info";const T=document.createElement("h3");T.className="item-name",T.textContent=t.name;const c=document.createElement("p");if(c.className="item-desc",c.textContent=t.description,s.appendChild(T),s.appendChild(c),e){const u=document.createElement("span");u.className="item-badge",u.textContent=n.coleccion.placedBadge,s.appendChild(u)}const l=document.createElement("button");return l.className="item-action-btn",l.textContent=n.jardin.decorarBtn,l.setAttribute("aria-label",`Acomodar ${t.name} en el jardín`),l.addEventListener("click",()=>{window.location.hash=`#/jardin?modo=acomodar&item=${t.id}`}),a.appendChild(r),a.appendChild(s),a.appendChild(l),a}const Sa={1:"Lunes",2:"Martes",3:"Miércoles",4:"Jueves",5:"Viernes",6:"Sábado",7:"Domingo"},bo={voz:"Voz",cuerpo:"Cuerpo",silencio:"Silencio",respiracion:"Respiración",animo:"Ánimo"},ua=["enero","febrero","marzo","abril","mayo","junio","julio","agosto","septiembre","octubre","noviembre","diciembre"];function Wt(t){const e=t.getFullYear(),a=String(t.getMonth()+1).padStart(2,"0"),r=String(t.getDate()).padStart(2,"0");return`${e}-${a}-${r}`}function xo(t){const[e,a,r]=t.split("-").map(Number);return new Date(e,a-1,r)}function Co(t){const e=new Date(t.getFullYear(),t.getMonth(),t.getDate()),a=e.getDay(),r=a===0?-6:1-a;return e.setDate(e.getDate()+r),e}function Mo(t,e){const a=t.getDate(),r=e.getDate(),o=ua[t.getMonth()],i=ua[e.getMonth()],d=t.getFullYear(),s=e.getFullYear();return o===i&&d===s?`Semana del ${a} al ${r} de ${o}`:d===s?`Semana del ${a} de ${o} al ${r} de ${i}`:`Semana del ${a} de ${o} (${d}) al ${r} de ${i} (${s})`}function yo({entries:t,referenceDate:e=new Date,weekOffset:a=0,includeWeekend:r=!1}){const o=Math.min(0,a),i=Co(e),d=new Date(i);d.setDate(d.getDate()+o*7);const s=r?7:5,T=new Date(d);T.setDate(T.getDate()+(s-1));const c=o===0,l=o<0,u=[],x=[];for(let f=0;f<s;f++){const g=new Date(d);g.setDate(g.getDate()+f);const y=Wt(g);x.push(y);const N=f+1,b=Sa[N],k=t.filter(w=>w.date===y&&(w.type==="checkin"||w.type==="diario")).sort((w,E)=>E.createdAt.localeCompare(w.createdAt));let H=null;for(const w of k)if("mood"in w.data&&w.data.mood){H=w.data.mood;break}const S=H?`${b}: ${H}`:b;u.push({date:y,dayNumber:N,dayName:b,mood:H,accessibleLabel:S})}const C=[],M=new Set(x),p=t.filter(f=>f.type==="diario"&&M.has(f.date)).sort((f,g)=>f.date!==g.date?g.date.localeCompare(f.date):g.createdAt.localeCompare(f.createdAt));for(const f of p){const g=f.data;if(g.lindo&&g.lindo.trim().length>0){const N=xo(f.date).getDay(),b=N===0?7:N;if(C.push({dayName:Sa[b],text:g.lindo.trim(),date:f.date}),C.length>=3)break}}const m=new Set,h=t.filter(f=>(f.type==="desafio"||f.type==="respiracion")&&M.has(f.date));for(const f of h)if(f.type==="respiracion")m.add("Respiración");else if(f.type==="desafio"&&"category"in f.data){const g=f.data.category,y=bo[g]??g;m.add(y)}const v=Array.from(m).sort();return{startDate:Wt(d),endDate:Wt(T),label:Mo(d,T),isCurrentWeek:c,canGoNext:l,days:u,niceMoments:C,caredCategories:v}}const Ft={MIN_DAY_RECORDS:5,THRESHOLD_RATIO:.7},Eo={1:"los lunes",2:"los martes",3:"los miércoles",4:"los jueves",5:"los viernes",6:"los sábados",7:"los domingos"},wo=new Set(["contenta","tranquila"]),No=new Set(["cansada","tensa","triste"]);function ko(t){const[e,a,r]=t.split("-").map(Number),i=new Date(e,a-1,r).getDay();return i===0?7:i}function Ao(t,e=[]){var T;const a=new Set(e),r=new Map,o=[...t].filter(c=>(c.type==="checkin"||c.type==="diario")&&"mood"in c.data&&c.data.mood).sort((c,l)=>c.createdAt.localeCompare(l.createdAt));for(const c of o)"mood"in c.data&&c.data.mood&&r.set(c.date,c.data.mood);const i=new Map;for(let c=1;c<=7;c++)i.set(c,[]);for(const[c,l]of r.entries()){const u=ko(c);(T=i.get(u))==null||T.push(l)}const d=[],s=[];for(let c=1;c<=7;c++){const l=i.get(c)??[];if(l.length<Ft.MIN_DAY_RECORDS)continue;const u=l.length,x=l.filter(h=>wo.has(h)).length,C=l.filter(h=>No.has(h)).length,M=x/u,p=C/u,m=Eo[c];if(M>=Ft.THRESHOLD_RATIO){const h=`pattern-pos-${c}`;a.has(h)||d.push({id:h,kind:"positiva",dayOfWeek:c,dayName:m,text:`Parece que ${m} se sienten más tranquilos. Es solo lo que fuiste anotando.`})}if(p>=Ft.THRESHOLD_RATIO){const h=`pattern-dif-${c}`;a.has(h)||s.push({id:h,kind:"dificil",dayOfWeek:c,dayName:m,text:`Parece que ${m} el día se siente más cargado. Es solo lo que fuiste anotando.`,actionLabel:"¿Querés ponerte una pausa ese día?",actionRoute:`#/recordatorios?dia=${c}`})}}return d.length>0?d[0]:s.length>0?s[0]:null}function Ho(t){t.innerHTML="";let e=0,a=Ae();const r=document.createElement("section");r.className="semana-screen",r.setAttribute("role","main"),r.setAttribute("aria-label",n.semana.title);const o=document.createElement("style");o.textContent=`
    .semana-screen {
      flex: 1;
      width: 100%;
      height: 100%;
      box-sizing: border-box;
      display: flex;
      flex-direction: column;
      padding: var(--space-md);
      background: linear-gradient(
        180deg,
        var(--color-celeste-agua) 0%,
        var(--color-menta) 60%,
        var(--color-salvia) 100%
      );
      overflow-y: auto;
      gap: var(--space-md);
    }

    .semana-top-bar {
      display: flex;
      align-items: center;
      justify-content: space-between;
      gap: var(--space-sm);
    }

    .back-btn {
      font-family: var(--font-ui);
      font-size: var(--font-size-sm);
      font-weight: 600;
      color: var(--color-tinta);
      background-color: var(--color-menta);
      border: 2px solid var(--color-bosque);
      border-radius: var(--border-radius-sm);
      padding: var(--space-xs) var(--space-sm);
      min-height: var(--touch-target-min);
      min-width: var(--touch-target-min);
      cursor: pointer;
      line-height: 1.3;
      display: inline-flex;
      align-items: center;
      justify-content: center;
      box-sizing: border-box;
      transition: transform var(--transition-fast), opacity var(--transition-fast);
    }

    .back-btn:hover {
      opacity: 0.9;
      transform: translateY(-1px);
    }

    .back-btn:focus-visible {
      outline: 3px solid var(--color-acento);
      outline-offset: 3px;
    }

    .semana-title {
      font-family: var(--font-pixel);
      font-size: 0.75rem;
      color: var(--color-bosque);
      line-height: 1.8;
      margin: 0;
      text-align: center;
      flex: 1;
    }

    .week-nav {
      display: flex;
      align-items: center;
      justify-content: space-between;
      gap: var(--space-sm);
      background-color: var(--color-crema);
      border: 2px solid var(--color-bosque);
      border-radius: var(--border-radius-md);
      padding: var(--space-xs) var(--space-sm);
    }

    .week-nav-btn {
      font-family: var(--font-ui);
      font-size: var(--font-size-xs);
      font-weight: 600;
      color: var(--color-tinta);
      background-color: var(--color-salvia);
      border: 1px solid var(--color-bosque);
      border-radius: var(--border-radius-sm);
      padding: 6px 10px;
      min-height: 36px;
      cursor: pointer;
      box-sizing: border-box;
      white-space: nowrap;
      transition: opacity var(--transition-fast);
    }

    .week-nav-btn:disabled {
      opacity: 0.35;
      cursor: default;
    }

    .week-nav-label {
      font-family: var(--font-ui);
      font-size: var(--font-size-xs);
      font-weight: 600;
      color: var(--color-bosque);
      text-align: center;
      margin: 0;
    }

    /* Tira de días */
    .days-strip {
      display: flex;
      gap: 6px;
      justify-content: space-between;
      list-style: none;
      padding: 0;
      margin: 0;
      overflow-x: auto;
    }

    .day-strip-item {
      flex: 1;
      min-width: 44px;
      background-color: var(--color-crema);
      border: 2px solid var(--color-tinta);
      border-radius: var(--border-radius-sm);
      padding: 6px 2px;
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 4px;
      text-align: center;
      box-shadow: 1px 1px 0 var(--color-bosque);
    }

    .day-strip-name {
      font-family: var(--font-ui);
      font-size: var(--font-size-xs);
      font-weight: 700;
      color: var(--color-bosque);
      margin: 0;
    }

    .day-strip-canvas {
      width: 28px;
      height: 28px;
      display: block;
      image-rendering: pixelated;
    }

    .content-card {
      background-color: var(--color-crema);
      border: 2px solid var(--color-tinta);
      border-radius: var(--border-radius-md);
      padding: var(--space-md);
      display: flex;
      flex-direction: column;
      gap: var(--space-xs);
      box-shadow: 2px 2px 0 var(--color-bosque);
    }

    .card-title {
      font-family: var(--font-pixel);
      font-size: 0.625rem;
      color: var(--color-bosque);
      margin: 0;
      line-height: 1.6;
    }

    .card-subtitle {
      font-family: var(--font-ui);
      font-size: var(--font-size-xs);
      color: var(--color-agua-profunda);
      margin: 0 0 4px;
    }

    .nice-quote-item {
      background-color: var(--color-overlay-crema);
      border-left: 3px solid var(--color-salvia);
      padding: var(--space-xs) var(--space-sm);
      border-radius: 0 var(--border-radius-sm) var(--border-radius-sm) 0;
      display: flex;
      flex-direction: column;
      gap: 2px;
    }

    .nice-quote-day {
      font-family: var(--font-pixel);
      font-size: 0.5rem;
      color: var(--color-bosque);
    }

    .nice-quote-text {
      font-family: var(--font-ui);
      font-size: var(--font-size-sm);
      color: var(--color-tinta);
      font-style: italic;
      margin: 0;
      line-height: 1.4;
    }

    .cared-pills {
      display: flex;
      flex-wrap: wrap;
      gap: 6px;
    }

    .cared-pill {
      font-family: var(--font-ui);
      font-size: var(--font-size-xs);
      font-weight: 600;
      background-color: var(--color-salvia);
      color: var(--color-tinta);
      border: 1px solid var(--color-bosque);
      border-radius: var(--border-radius-sm);
      padding: 3px 8px;
    }

    .pattern-card {
      background-color: var(--color-crema);
      border: 2px solid var(--color-bosque);
      border-radius: var(--border-radius-md);
      padding: var(--space-sm) var(--space-md);
      display: flex;
      flex-direction: column;
      gap: var(--space-xs);
    }

    .pattern-text {
      font-family: var(--font-ui);
      font-size: var(--font-size-sm);
      color: var(--color-tinta);
      line-height: 1.45;
      margin: 0;
    }

    .pattern-action-btn {
      align-self: flex-start;
      font-family: var(--font-ui);
      font-size: var(--font-size-xs);
      font-weight: 600;
      color: var(--color-crema);
      background-color: var(--color-bosque);
      border: 1px solid var(--color-tinta);
      border-radius: var(--border-radius-sm);
      padding: var(--space-xs) var(--space-sm);
      min-height: 38px;
      cursor: pointer;
      text-decoration: none;
      display: inline-flex;
      align-items: center;
      line-height: 1.35;
      white-space: normal;
      box-sizing: border-box;
    }

    .pattern-dismiss-btn {
      align-self: flex-start;
      font-family: var(--font-ui);
      font-size: var(--font-size-xs);
      color: var(--color-agua-profunda);
      background: none;
      border: none;
      padding: 0;
      cursor: pointer;
      text-decoration: underline;
    }

    .closing-quote-card {
      background-color: transparent;
      text-align: center;
      padding: var(--space-xs) var(--space-md);
      margin-top: auto;
    }

    .closing-quote-text {
      font-family: var(--font-ui);
      font-size: var(--font-size-sm);
      font-weight: 600;
      color: var(--color-bosque);
      font-style: italic;
      margin: 0;
      line-height: 1.4;
    }

    .help-link-wrap {
      text-align: center;
      padding: var(--space-xs) 0;
    }

    .help-link {
      font-family: var(--font-pixel);
      font-size: 0.5625rem;
      color: var(--color-bosque);
      text-decoration: none;
      border-bottom: 1px solid var(--color-bosque);
      padding-bottom: 2px;
    }
  `,document.head.appendChild(o);const i=document.createElement("div");i.className="semana-top-bar";const d=document.createElement("button");d.className="back-btn",d.textContent=n.app.back,d.setAttribute("aria-label","Volver al jardín"),d.addEventListener("click",()=>{window.location.hash="#/jardin"});const s=document.createElement("h1");s.className="semana-title",s.textContent=n.semana.title,i.appendChild(d),i.appendChild(s),r.appendChild(i);const T=document.createElement("div");T.style.cssText="display: flex; flex-direction: column; gap: var(--space-md); width: 100%;",r.appendChild(T);const c=()=>{T.innerHTML="";const l=xt().data??[],u=yo({entries:l,weekOffset:e,includeWeekend:a.weekShowWeekend}),x=document.createElement("div");x.className="week-nav",x.setAttribute("aria-label","Navegación de semanas");const C=document.createElement("button");C.className="week-nav-btn",C.textContent="← Anterior",C.setAttribute("aria-label","Ver semana anterior"),C.addEventListener("click",()=>{e--,c()});const M=document.createElement("p");M.className="week-nav-label",M.textContent=u.label;const p=document.createElement("button");p.className="week-nav-btn",p.textContent="Siguiente →",p.setAttribute("aria-label","Ver semana siguiente"),p.disabled=!u.canGoNext,p.addEventListener("click",()=>{u.canGoNext&&(e++,c())}),x.appendChild(C),x.appendChild(M),x.appendChild(p),T.appendChild(x);const m=document.createElement("ul");m.className="days-strip",m.setAttribute("role","list"),m.setAttribute("aria-label","Días de la semana");for(const b of u.days){const k=document.createElement("li");k.className="day-strip-item",k.setAttribute("role","listitem"),k.setAttribute("aria-label",b.accessibleLabel);const H=document.createElement("span");H.className="day-strip-name",H.textContent=b.dayName.slice(0,3);const{canvas:S,ctx:w}=Pe(28,28);if(S.className="day-strip-canvas",S.setAttribute("aria-hidden","true"),b.mood){const E=rt[b.mood],I=fe(E);oe(w,I,4,5,1)}else{const E=fe(en);oe(w,E,6,6,1)}k.appendChild(H),k.appendChild(S),m.appendChild(k)}if(T.appendChild(m),u.niceMoments.length>0){const b=document.createElement("div");b.className="content-card";const k=document.createElement("h2");k.className="card-title",k.textContent=n.semana.niceTitle,b.appendChild(k);for(const H of u.niceMoments){const S=document.createElement("div");S.className="nice-quote-item";const w=document.createElement("span");w.className="nice-quote-day",w.textContent=H.dayName;const E=document.createElement("p");E.className="nice-quote-text",E.textContent=`“${H.text}”`,S.appendChild(w),S.appendChild(E),b.appendChild(S)}T.appendChild(b)}if(u.caredCategories.length>0){const b=document.createElement("div");b.className="content-card";const k=document.createElement("h2");k.className="card-title",k.textContent=n.semana.caredTitle;const H=document.createElement("p");H.className="card-subtitle",H.textContent=n.semana.caredSubtitle;const S=document.createElement("div");S.className="cared-pills";for(const w of u.caredCategories){const E=document.createElement("span");E.className="cared-pill",E.textContent=w,S.appendChild(E)}b.appendChild(k),b.appendChild(H),b.appendChild(S),T.appendChild(b)}if(a.showPatterns){const b=Ao(l,a.dismissedPatternIds);if(b){const k=document.createElement("div");k.className="pattern-card";const H=document.createElement("h2");H.className="card-title",H.textContent=n.semana.patternsTitle;const S=document.createElement("p");if(S.className="pattern-text",S.textContent=b.text,k.appendChild(H),k.appendChild(S),b.actionLabel&&b.actionRoute){const E=document.createElement("a");E.className="pattern-action-btn",E.href=b.actionRoute,E.textContent=b.actionLabel,k.appendChild(E)}const w=document.createElement("button");w.type="button",w.className="pattern-dismiss-btn",w.textContent=n.semana.dismissPatternBtn,w.addEventListener("click",()=>{a={...a,dismissedPatternIds:[...a.dismissedPatternIds,b.id]},U(a),k.remove()}),k.appendChild(w),T.appendChild(k)}}const h=n.semana.closingQuotes,v=Math.abs(e)%h.length,f=document.createElement("div");f.className="closing-quote-card";const g=document.createElement("p");g.className="closing-quote-text",g.textContent=h[v],f.appendChild(g),T.appendChild(f);const y=document.createElement("div");y.className="help-link-wrap";const N=document.createElement("a");N.className="help-link",N.href="#/ayuda",N.textContent=n.semana.helpLink,y.appendChild(N),T.appendChild(y)};return c(),t.appendChild(r),()=>{o.remove()}}function Go(t){t.innerHTML="";let e=Ae();const a=[...e.reminders],o=window.location.hash.match(/dia=(\d)/);if(o&&o[1]){const E=parseInt(o[1],10);if(E>=1&&E<=7){const I=a.find(O=>O.id==="media-jornada");I&&!I.days.includes(E)&&(I.enabled=!0,I.days.push(E),e={...e,reminders:a},U(e))}}const i=document.createElement("section");i.className="recordatorios-screen",i.setAttribute("role","main"),i.setAttribute("aria-label",n.recordatorios.title);const d=document.createElement("style");d.textContent=`
    .recordatorios-screen {
      flex: 1;
      width: 100%;
      height: 100%;
      box-sizing: border-box;
      display: flex;
      flex-direction: column;
      padding: var(--space-md);
      background: linear-gradient(
        180deg,
        var(--color-celeste-agua) 0%,
        var(--color-menta) 60%,
        var(--color-salvia) 100%
      );
      overflow-y: auto;
      gap: var(--space-md);
    }

    .back-btn {
      font-family: var(--font-ui);
      font-size: var(--font-size-sm);
      font-weight: 600;
      color: var(--color-tinta);
      background-color: var(--color-menta);
      border: 2px solid var(--color-bosque);
      border-radius: var(--border-radius-sm);
      padding: var(--space-xs) var(--space-sm);
      min-height: var(--touch-target-min);
      min-width: var(--touch-target-min);
      cursor: pointer;
      align-self: flex-start;
      line-height: 1.3;
      display: inline-flex;
      align-items: center;
      justify-content: center;
      box-sizing: border-box;
      transition: transform var(--transition-fast), opacity var(--transition-fast);
    }

    .back-btn:hover {
      opacity: 0.9;
      transform: translateY(-1px);
    }

    .back-btn:focus-visible {
      outline: 3px solid var(--color-acento);
      outline-offset: 3px;
    }

    .rec-header {
      text-align: center;
    }

    .rec-title {
      font-family: var(--font-pixel);
      font-size: 0.75rem;
      color: var(--color-bosque);
      line-height: 1.8;
      margin: 0;
    }

    .rec-subtitle {
      font-family: var(--font-ui);
      font-size: var(--font-size-sm);
      color: var(--color-agua-profunda);
      margin: var(--space-xs) 0 0;
      line-height: 1.4;
    }

    .vacation-card {
      background-color: var(--color-crema);
      border: 2px solid var(--color-bosque);
      border-radius: var(--border-radius-md);
      padding: var(--space-sm) var(--space-md);
      display: flex;
      flex-direction: column;
      gap: 4px;
    }

    .toggle-row {
      display: flex;
      align-items: center;
      justify-content: space-between;
      gap: var(--space-sm);
      cursor: pointer;
      min-height: var(--touch-target-min);
    }

    .toggle-title {
      font-family: var(--font-ui);
      font-size: var(--font-size-sm);
      font-weight: 600;
      color: var(--color-bosque);
      margin: 0;
    }

    .toggle-desc {
      font-family: var(--font-ui);
      font-size: var(--font-size-xs);
      color: var(--color-agua-profunda);
      margin: 0;
      line-height: 1.35;
    }

    .reminders-list {
      display: flex;
      flex-direction: column;
      gap: var(--space-md);
    }

    .reminder-card {
      background-color: var(--color-crema);
      border: 2px solid var(--color-tinta);
      border-radius: var(--border-radius-md);
      padding: var(--space-md);
      display: flex;
      flex-direction: column;
      gap: var(--space-sm);
      box-shadow: 2px 2px 0 var(--color-bosque);
    }

    .reminder-top {
      display: flex;
      align-items: center;
      justify-content: space-between;
      gap: var(--space-sm);
    }

    .reminder-name {
      font-family: var(--font-pixel);
      font-size: 0.625rem;
      color: var(--color-bosque);
      margin: 0;
      line-height: 1.4;
    }

    .reminder-body {
      display: flex;
      flex-direction: column;
      gap: var(--space-xs);
    }

    .field-row {
      display: flex;
      flex-direction: column;
      gap: 4px;
    }

    .field-label {
      font-family: var(--font-ui);
      font-size: var(--font-size-xs);
      font-weight: 600;
      color: var(--color-tinta);
      margin: 0;
    }

    .time-input {
      font-family: var(--font-ui);
      font-size: var(--font-size-md);
      padding: var(--space-xs) var(--space-sm);
      border: 2px solid var(--color-bosque);
      border-radius: var(--border-radius-sm);
      background-color: var(--color-menta);
      color: var(--color-tinta);
      max-width: 130px;
    }

    .days-row {
      display: flex;
      gap: 6px;
      flex-wrap: wrap;
    }

    .day-pill-btn {
      font-family: var(--font-ui);
      font-size: var(--font-size-sm);
      font-weight: 700;
      color: var(--color-tinta);
      background-color: var(--color-salvia);
      border: 2px solid var(--color-bosque);
      border-radius: var(--border-radius-sm);
      min-width: 38px;
      min-height: 38px;
      padding: 2px 6px;
      cursor: pointer;
      display: flex;
      align-items: center;
      justify-content: center;
      box-sizing: border-box;
      transition: background-color var(--transition-fast), transform var(--transition-fast);
    }

    .day-pill-btn.selected {
      background-color: var(--color-bosque);
      color: var(--color-crema);
      border-color: var(--color-tinta);
    }

    .text-input {
      font-family: var(--font-ui);
      font-size: var(--font-size-sm);
      padding: var(--space-xs) var(--space-sm);
      border: 2px solid var(--color-bosque);
      border-radius: var(--border-radius-sm);
      background-color: var(--color-menta);
      color: var(--color-tinta);
      width: 100%;
      box-sizing: border-box;
    }

    .text-input:focus, .time-input:focus {
      outline: 3px solid var(--color-acento);
    }

    .export-section {
      background-color: var(--color-crema);
      border: 2px solid var(--color-tinta);
      border-radius: var(--border-radius-md);
      padding: var(--space-md);
      display: flex;
      flex-direction: column;
      gap: var(--space-sm);
    }

    .export-btn {
      font-family: var(--font-ui);
      font-size: var(--font-size-sm);
      font-weight: 600;
      color: var(--color-crema);
      background-color: var(--color-bosque);
      border: 2px solid var(--color-tinta);
      border-radius: var(--border-radius-sm);
      padding: var(--space-sm) var(--space-md);
      min-height: var(--touch-target-min);
      cursor: pointer;
      display: flex;
      align-items: center;
      justify-content: center;
      gap: var(--space-sm);
      text-align: center;
      line-height: 1.35;
      white-space: normal;
      box-sizing: border-box;
      transition: transform var(--transition-fast), opacity var(--transition-fast);
    }

    .export-btn:hover {
      opacity: 0.92;
      transform: translateY(-1px);
    }

    .export-btn:focus-visible {
      outline: 3px solid var(--color-acento);
      outline-offset: 3px;
    }

    .instructions-card {
      background-color: var(--color-overlay-crema);
      border: 1px solid var(--color-bosque);
      border-radius: var(--border-radius-sm);
      padding: var(--space-sm);
      display: flex;
      flex-direction: column;
      gap: 6px;
    }

    .inst-title {
      font-family: var(--font-pixel);
      font-size: 0.5625rem;
      color: var(--color-bosque);
      margin: 0;
    }

    .inst-text {
      font-family: var(--font-ui);
      font-size: var(--font-size-xs);
      color: var(--color-tinta);
      margin: 0;
      line-height: 1.4;
    }

    .toast-label {
      font-family: var(--font-ui);
      font-size: var(--font-size-xs);
      font-weight: 600;
      color: var(--color-bosque);
      text-align: center;
      min-height: 18px;
    }
  `,document.head.appendChild(d);const s=document.createElement("button");s.className="back-btn",s.textContent=n.recordatorios.backToSettings,s.setAttribute("aria-label","Volver a ajustes"),s.addEventListener("click",()=>{window.location.hash="#/ajustes"});const T=document.createElement("header");T.className="rec-header";const c=document.createElement("h1");c.className="rec-title",c.textContent=n.recordatorios.title;const l=document.createElement("p");l.className="rec-subtitle",l.textContent=n.recordatorios.subtitle,T.appendChild(c),T.appendChild(l);const u=document.createElement("p");u.className="toast-label";const x=E=>{u.textContent=E,setTimeout(()=>{u.textContent=""},2500)},C=document.createElement("div");C.className="vacation-card";const M=document.createElement("label");M.className="toggle-row";const p=document.createElement("div"),m=document.createElement("h2");m.className="toggle-title",m.textContent=n.recordatorios.vacationLabel;const h=document.createElement("p");h.className="toggle-desc",h.textContent=n.recordatorios.vacationDesc,p.appendChild(m),p.appendChild(h);const v=document.createElement("input");v.type="checkbox",v.style.cssText="width: 22px; height: 22px; accent-color: var(--color-bosque); cursor: pointer;",v.checked=e.vacationMode,v.addEventListener("change",()=>{e={...e,vacationMode:v.checked},U(e),x(n.recordatorios.saveSuccess)}),M.appendChild(p),M.appendChild(v),C.appendChild(M);const f=document.createElement("div");f.className="reminders-list";const g=["L","M","M","J","V","S","D"];a.forEach(E=>{const I=document.createElement("div");I.className="reminder-card";const O=document.createElement("div");O.className="reminder-top";const L=document.createElement("h2");L.className="reminder-name",L.textContent=E.name;const z=document.createElement("input");z.type="checkbox",z.style.cssText="width: 22px; height: 22px; accent-color: var(--color-bosque); cursor: pointer;",z.checked=E.enabled,z.setAttribute("aria-label",`Activar ${E.name}`),O.appendChild(L),O.appendChild(z),I.appendChild(O);const D=document.createElement("div");D.className="reminder-body",D.style.display=E.enabled?"flex":"none";const K=document.createElement("div");K.className="field-row";const pe=document.createElement("label");pe.className="field-label",pe.textContent=n.recordatorios.timeLabel;const J=document.createElement("input");J.type="time",J.className="time-input",J.value=E.time,J.addEventListener("change",()=>{J.value&&(E.time=J.value,Ma(E)&&(e={...e,reminders:a},U(e),x(n.recordatorios.saveSuccess)))}),K.appendChild(pe),K.appendChild(J),D.appendChild(K);const ge=document.createElement("div");ge.className="field-row";const ee=document.createElement("label");ee.className="field-label",ee.textContent=n.recordatorios.daysLabel;const Q=document.createElement("div");Q.className="days-row";for(let ae=1;ae<=7;ae++){const _=ae,Y=document.createElement("button");Y.type="button",Y.className=`day-pill-btn ${E.days.includes(_)?"selected":""}`,Y.textContent=g[ae-1],Y.setAttribute("aria-label",`Día ${g[ae-1]}`),Y.addEventListener("click",()=>{E.days.includes(_)?E.days.length>1&&(E.days=E.days.filter(Ce=>Ce!==_)):E.days=[...E.days,_].sort((Ce,He)=>Ce-He),Y.classList.toggle("selected",E.days.includes(_)),e={...e,reminders:a},U(e),x(n.recordatorios.saveSuccess)}),Q.appendChild(Y)}ge.appendChild(ee),ge.appendChild(Q),D.appendChild(ge);const be=document.createElement("div");be.className="field-row";const me=document.createElement("label");me.className="field-label",me.textContent=n.recordatorios.textLabel;const W=document.createElement("input");W.type="text",W.maxLength=40,W.className="text-input",W.value=E.eventText,W.addEventListener("change",()=>{const ae=W.value.trim();E.eventText=ae.length>0?ae.slice(0,40):"Una pausa para mí",e={...e,reminders:a},U(e),x(n.recordatorios.saveSuccess)}),be.appendChild(me),be.appendChild(W),D.appendChild(be),z.addEventListener("change",()=>{E.enabled=z.checked,D.style.display=E.enabled?"flex":"none",e={...e,reminders:a},U(e),x(n.recordatorios.saveSuccess)}),I.appendChild(D),f.appendChild(I)});const y=document.createElement("div");y.className="export-section";const N=document.createElement("button");N.type="button",N.className="export-btn",N.appendChild(te("bell",{size:16})),N.appendChild(document.createTextNode(n.recordatorios.exportIcsBtn)),N.addEventListener("click",()=>{if(!a.some(D=>D.enabled)){alert("Activá al menos un recordatorio arriba antes de descargar el calendario.");return}const I=sn(a),O=new Blob([I],{type:"text/calendar;charset=utf-8"}),L=URL.createObjectURL(O),z=document.createElement("a");z.href=L,z.download="rorogarden_recordatorios.ics",document.body.appendChild(z),z.click(),document.body.removeChild(z),URL.revokeObjectURL(L),x("Archivo .ics descargado.")});const b=document.createElement("p");b.className="toggle-desc",b.textContent=n.recordatorios.exportIcsDesc;const k=document.createElement("div");k.className="instructions-card";const H=document.createElement("h3");H.className="inst-title",H.textContent=n.recordatorios.instructionsTitle;const S=document.createElement("p");S.className="inst-text",S.textContent=n.recordatorios.instructionsAndroid;const w=document.createElement("p");return w.className="inst-text",w.textContent=n.recordatorios.instructionsIos,k.appendChild(H),k.appendChild(S),k.appendChild(w),y.appendChild(N),y.appendChild(b),y.appendChild(k),i.appendChild(s),i.appendChild(T),i.appendChild(C),i.appendChild(f),i.appendChild(y),i.appendChild(u),t.appendChild(i),()=>{d.remove()}}const zo=[{id:"emergencias-911",name:"Emergencias 911",description:"Atención inmediata ante situaciones de riesgo o peligro.",phone:"911",phoneDisplay:"911",scope:"Nacional (Argentina)"},{id:"linea-135",name:"Línea 135 (Centro de Asistencia al Suicida)",description:"Acompañamiento y escucha para momentos de crisis.",phone:"135",phoneDisplay:"135",scope:"Gratuita desde CABA y Gran Buenos Aires",note:"Línea directa para el área metropolitana."},{id:"cas-resto-pais-1",name:"Centro de Asistencia al Suicida (resto del país)",description:"Acompañamiento telefónico nacional.",phone:"+541152751135",phoneDisplay:"(011) 5275-1135",scope:"Todo el país"},{id:"cas-resto-pais-0800",name:"Centro de Asistencia al Suicida (0800 nacional)",description:"Acompañamiento telefónico gratuito para todo el país.",phone:"08003451435",phoneDisplay:"0800 345 1435",scope:"Todo el país"}],Lo=[];function jo(t){t.innerHTML="";const e=document.createElement("section");e.className="ayuda-screen",e.setAttribute("role","main"),e.setAttribute("aria-label",n.ayuda.title);const a=document.createElement("style");a.textContent=`
    .ayuda-screen {
      flex: 1;
      width: 100%;
      height: 100%;
      box-sizing: border-box;
      display: flex;
      flex-direction: column;
      padding: var(--space-md);
      background: linear-gradient(
        180deg,
        var(--color-celeste-agua) 0%,
        var(--color-menta) 60%,
        var(--color-salvia) 100%
      );
      overflow-y: auto;
      gap: var(--space-md);
    }

    .back-btn {
      font-family: var(--font-ui);
      font-size: var(--font-size-sm);
      font-weight: 600;
      color: var(--color-tinta);
      background-color: var(--color-menta);
      border: 2px solid var(--color-bosque);
      border-radius: var(--border-radius-sm);
      padding: var(--space-xs) var(--space-sm);
      min-height: var(--touch-target-min);
      min-width: var(--touch-target-min);
      cursor: pointer;
      align-self: flex-start;
      line-height: 1.3;
      display: inline-flex;
      align-items: center;
      justify-content: center;
      box-sizing: border-box;
      transition: transform var(--transition-fast), opacity var(--transition-fast);
    }

    .back-btn:hover {
      opacity: 0.9;
      transform: translateY(-1px);
    }

    .back-btn:focus-visible {
      outline: 3px solid var(--color-acento);
      outline-offset: 3px;
    }

    .ayuda-header {
      text-align: center;
      display: flex;
      flex-direction: column;
      gap: var(--space-xs);
    }

    .ayuda-title {
      font-family: var(--font-pixel);
      font-size: 0.75rem;
      color: var(--color-bosque);
      line-height: 1.8;
      margin: 0;
    }

    .ayuda-subtitle {
      font-family: var(--font-ui);
      font-size: var(--font-size-sm);
      color: var(--color-agua-profunda);
      margin: 0;
      line-height: 1.4;
    }

    .warmth-card {
      background-color: var(--color-crema);
      border: 2px solid var(--color-bosque);
      border-radius: var(--border-radius-md);
      padding: var(--space-md);
      display: flex;
      flex-direction: column;
      gap: var(--space-xs);
    }

    .warmth-text {
      font-family: var(--font-ui);
      font-size: var(--font-size-sm);
      color: var(--color-tinta);
      line-height: 1.5;
      margin: 0;
    }

    .emergency-title {
      font-family: var(--font-pixel);
      font-size: 0.625rem;
      color: var(--color-bosque);
      margin: var(--space-xs) 0 0;
      line-height: 1.6;
    }

    .resources-list {
      display: flex;
      flex-direction: column;
      gap: var(--space-sm);
    }

    .resource-card {
      background-color: var(--color-crema);
      border: 2px solid var(--color-tinta);
      border-radius: var(--border-radius-md);
      padding: var(--space-sm) var(--space-md);
      display: flex;
      flex-direction: column;
      gap: var(--space-xs);
      box-shadow: 2px 2px 0 var(--color-bosque);
    }

    .resource-name {
      font-family: var(--font-pixel);
      font-size: 0.625rem;
      color: var(--color-bosque);
      margin: 0;
      line-height: 1.4;
    }

    .resource-desc {
      font-family: var(--font-ui);
      font-size: var(--font-size-xs);
      color: var(--color-tinta);
      margin: 0;
      line-height: 1.4;
    }

    .resource-scope {
      font-family: var(--font-ui);
      font-size: var(--font-size-xs);
      color: var(--color-agua-profunda);
      margin: 0;
      font-style: italic;
    }

    .resource-call-btn {
      align-self: flex-start;
      margin-top: var(--space-xs);
      font-family: var(--font-ui);
      font-size: var(--font-size-sm);
      font-weight: 600;
      color: var(--color-crema);
      background-color: var(--color-bosque);
      border: 2px solid var(--color-tinta);
      border-radius: var(--border-radius-sm);
      padding: var(--space-xs) var(--space-md);
      min-height: var(--touch-target-min);
      text-decoration: none;
      display: inline-flex;
      align-items: center;
      gap: var(--space-xs);
      transition: transform var(--transition-fast), opacity var(--transition-fast);
    }

    .resource-call-btn:hover {
      opacity: 0.92;
      transform: translateY(-1px);
    }

    .resource-call-btn:focus-visible {
      outline: 3px solid var(--color-acento);
      outline-offset: 3px;
    }

    .local-section {
      background-color: var(--color-overlay-crema);
      border: 1px dashed var(--color-bosque);
      border-radius: var(--border-radius-md);
      padding: var(--space-sm) var(--space-md);
      display: flex;
      flex-direction: column;
      gap: 4px;
    }

    .local-title {
      font-family: var(--font-pixel);
      font-size: 0.5625rem;
      color: var(--color-bosque);
      margin: 0;
    }

    .local-empty {
      font-family: var(--font-ui);
      font-size: var(--font-size-xs);
      color: var(--color-agua-profunda);
      margin: 0;
      line-height: 1.4;
    }
  `,document.head.appendChild(a);const r=document.createElement("button");r.className="back-btn",r.textContent=n.app.back,r.setAttribute("aria-label","Volver a la pantalla anterior"),r.addEventListener("click",()=>{window.history.length>1?window.history.back():window.location.hash="#/ajustes"});const o=document.createElement("header");o.className="ayuda-header";const i=document.createElement("h1");i.className="ayuda-title",i.textContent=n.ayuda.title;const d=document.createElement("p");d.className="ayuda-subtitle",d.textContent=n.ayuda.subtitle,o.appendChild(i),o.appendChild(d);const s=document.createElement("div");s.className="warmth-card";const T=document.createElement("p");T.className="warmth-text",T.textContent=n.ayuda.talkWarmth;const c=document.createElement("p");c.className="warmth-text",c.style.fontWeight="600",c.textContent=n.ayuda.emergencyNote,s.appendChild(T),s.appendChild(c);const l=document.createElement("div");l.className="resources-list",l.setAttribute("role","region"),l.setAttribute("aria-label","Líneas oficiales de ayuda");for(const M of zo){const p=document.createElement("article");p.className="resource-card";const m=document.createElement("h2");m.className="resource-name",m.textContent=M.name;const h=document.createElement("p");h.className="resource-desc",h.textContent=M.description;const v=document.createElement("p");v.className="resource-scope",v.textContent=`Alcance: ${M.scope}`;const f=document.createElement("a");f.className="resource-call-btn",f.href=`tel:${M.phone}`,f.setAttribute("aria-label",`Llamar a ${M.name} al ${M.phoneDisplay}`);const g=te("bell",{size:14});if(f.appendChild(g),f.appendChild(document.createTextNode(`Llamar: ${M.phoneDisplay}`)),p.appendChild(m),p.appendChild(h),p.appendChild(v),M.note){const y=document.createElement("p");y.className="resource-scope",y.textContent=M.note,p.appendChild(y)}p.appendChild(f),l.appendChild(p)}const u=document.createElement("div");u.className="local-section";const x=document.createElement("h3");x.className="local-title",x.textContent=n.ayuda.localResourcesTitle;const C=document.createElement("p");return C.className="local-empty",C.textContent=Lo.length>0?"Recursos configurados para tu área.":n.ayuda.localResourcesEmpty,u.appendChild(x),u.appendChild(C),e.appendChild(r),e.appendChild(o),e.appendChild(s),e.appendChild(l),e.appendChild(u),t.appendChild(e),()=>{a.remove()}}const Ra="roro_bienvenida_done";function Ro(){try{return localStorage.getItem(Ra)==="true"}catch{return!1}}function qo(){try{localStorage.setItem(Ra,"true")}catch{}}function Bo(t){var d;const e=n.bienvenida;let a=0;const r=3;(d=navigator.storage)!=null&&d.persist&&navigator.storage.persist().catch(()=>{});function o(){qo(),window.location.hash="#/jardin"}function i(){t.innerHTML="";const s=document.createElement("div");s.className="bienvenida-wrap",s.setAttribute("role","main"),s.setAttribute("aria-label",`Bienvenida, paso ${a+1} de ${r}`);const T=document.createElement("div");T.className="bienvenida-frog",T.setAttribute("aria-hidden","true"),T.textContent="🐸",s.appendChild(T);const c=document.createElement("div");c.className="bienvenida-dots",c.setAttribute("aria-label",`Paso ${a+1} de ${r}`);for(let p=0;p<r;p++){const m=document.createElement("span");m.className=`bienvenida-dot${p===a?" active":""}`,c.appendChild(m)}s.appendChild(c);const l=document.createElement("div");if(l.className="bienvenida-content",a===0){const p=document.createElement("h1");p.className="bienvenida-title",p.textContent=e.step1Title,l.appendChild(p);const m=document.createElement("p");m.className="bienvenida-text",m.textContent=e.step1Text,l.appendChild(m)}else if(a===1){const p=document.createElement("h1");p.className="bienvenida-title",p.textContent=e.step2Title,l.appendChild(p);const m=document.createElement("p");m.className="bienvenida-text",m.textContent=e.step2Text,l.appendChild(m);const h=document.createElement("p");h.className="bienvenida-note",h.textContent=e.step2Note,l.appendChild(h)}else{const p=document.createElement("h1");p.className="bienvenida-title",p.textContent=e.step3Title,l.appendChild(p);const m=document.createElement("p");m.className="bienvenida-text",m.textContent=e.step3Text,l.appendChild(m);const h=document.createElement("div");h.className="bienvenida-name-group";const v=document.createElement("label");v.className="bienvenida-name-label",v.htmlFor="bienvenida-frog-name",v.textContent=e.step3NameLabel,h.appendChild(v);const f=document.createElement("input");f.type="text",f.id="bienvenida-frog-name",f.className="bienvenida-name-input",f.placeholder=e.step3NamePlaceholder,f.maxLength=20,f.setAttribute("autocomplete","off"),h.appendChild(f),l.appendChild(h);const g=document.createElement("p");g.className="bienvenida-disclaimer",g.textContent=e.step3Disclaimer,l.appendChild(g),s.dataset.isLastStep="true",s.dataset.inputId="bienvenida-frog-name"}s.appendChild(l);const u=document.createElement("div");u.className="bienvenida-btn-row";const x=a===r-1,C=document.createElement("button");if(C.className="btn-ghost bienvenida-skip",C.textContent=x?e.finishBtn:e.skipBtn,C.type="button",C.addEventListener("click",async()=>{if(x){const p=t.querySelector("#bienvenida-frog-name"),m=(p==null?void 0:p.value.trim())||"";if(m){const h=await Ae();h.frogName=m.slice(0,20),h.frogNameAnswered=!0,await U(h)}}o()}),u.appendChild(C),x){const p=document.createElement("button");p.className="btn-primary bienvenida-next",p.textContent=e.enterBtn,p.type="button",p.addEventListener("click",async()=>{const m=t.querySelector("#bienvenida-frog-name"),h=(m==null?void 0:m.value.trim())||"";if(h){const v=await Ae();v.frogName=h.slice(0,20),v.frogNameAnswered=!0,await U(v)}o()}),u.appendChild(p)}else{const p=document.createElement("button");p.className="btn-primary bienvenida-next",p.textContent=e.nextBtn,p.type="button",p.addEventListener("click",()=>{a++,i();const m=t.querySelector(".bienvenida-title");m==null||m.focus()}),u.appendChild(p)}if(s.appendChild(u),t.appendChild(s),!document.getElementById("bienvenida-styles")){const p=document.createElement("style");p.id="bienvenida-styles",p.textContent=`
        .bienvenida-wrap {
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          min-height: 100%;
          padding: var(--space-xl) var(--space-lg);
          gap: var(--space-lg);
          text-align: center;
        }
        .bienvenida-frog {
          font-size: 64px;
          line-height: 1;
          animation: frog-bounce 2s ease-in-out infinite;
        }
        @keyframes frog-bounce {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-8px); }
        }
        @media (prefers-reduced-motion: reduce) {
          .bienvenida-frog { animation: none; }
        }
        .bienvenida-dots {
          display: flex;
          gap: var(--space-sm);
          align-items: center;
        }
        .bienvenida-dot {
          width: 10px;
          height: 10px;
          border-radius: 50%;
          background: var(--color-salvia);
          transition: background 0.2s, transform 0.2s;
        }
        .bienvenida-dot.active {
          background: var(--color-musgo);
          transform: scale(1.3);
        }
        @media (prefers-reduced-motion: reduce) {
          .bienvenida-dot { transition: none; }
        }
        .bienvenida-content {
          display: flex;
          flex-direction: column;
          gap: var(--space-md);
          max-width: 360px;
          width: 100%;
        }
        .bienvenida-title {
          font-family: var(--font-pixel);
          font-size: var(--font-size-md);
          color: var(--color-bosque);
          line-height: 1.6;
          margin: 0;
        }
        .bienvenida-title:focus {
          outline: 2px solid var(--color-musgo);
          outline-offset: 4px;
          border-radius: 4px;
        }
        .bienvenida-text {
          font-family: var(--font-ui);
          font-size: var(--font-size-base);
          color: var(--color-tinta);
          line-height: 1.6;
          margin: 0;
        }
        .bienvenida-note {
          font-family: var(--font-ui);
          font-size: var(--font-size-sm);
          color: var(--color-musgo);
          line-height: 1.5;
          margin: 0;
          padding: var(--space-sm) var(--space-md);
          background: var(--color-menta);
          border-radius: var(--border-radius-sm);
          border-left: 3px solid var(--color-musgo);
        }
        .bienvenida-disclaimer {
          font-family: var(--font-ui);
          font-size: var(--font-size-xs);
          color: var(--color-musgo);
          line-height: 1.5;
          margin: 0;
          padding: var(--space-sm);
          background: var(--color-crema);
          border-radius: var(--border-radius-sm);
        }
        .bienvenida-name-group {
          display: flex;
          flex-direction: column;
          gap: var(--space-xs);
          text-align: left;
        }
        .bienvenida-name-label {
          font-family: var(--font-ui);
          font-size: var(--font-size-sm);
          color: var(--color-tinta);
          font-weight: 600;
        }
        .bienvenida-name-input {
          font-family: var(--font-ui);
          font-size: var(--font-size-base);
          color: var(--color-tinta);
          background: var(--color-crema);
          border: 2px solid var(--color-salvia);
          border-radius: var(--border-radius-sm);
          padding: var(--space-sm) var(--space-md);
          min-height: 48px;
          width: 100%;
          box-sizing: border-box;
          outline: none;
        }
        .bienvenida-name-input:focus {
          border-color: var(--color-musgo);
          box-shadow: 0 0 0 2px var(--color-celeste-agua);
        }
        .bienvenida-btn-row {
          display: flex;
          flex-direction: column;
          gap: var(--space-sm);
          width: 100%;
          max-width: 360px;
        }
        .bienvenida-next {
          width: 100%;
          min-height: 48px;
        }
        .bienvenida-skip {
          width: 100%;
          min-height: 48px;
        }
      `,document.head.appendChild(p)}document.title=`RoRoGarden — Bienvenida (${a+1}/${r})`;const M=t.querySelector(".bienvenida-title");M&&(M.tabIndex=-1,setTimeout(()=>M.focus(),50))}return i(),()=>{}}const Do="1.0.0";function Io(t){const e=n.acerca;t.innerHTML="",document.title="RoRoGarden — Acerca de";const a=document.createElement("div");a.className="acerca-wrap";const r=document.createElement("div");r.className="acerca-header";const o=document.createElement("button");o.className="back-btn",o.type="button",o.textContent=e.back,o.setAttribute("aria-label","Volver"),o.addEventListener("click",()=>history.back()),r.appendChild(o);const i=document.createElement("h1");i.className="section-title",i.textContent=e.title,i.tabIndex=-1,r.appendChild(i),a.appendChild(r);const d=document.createElement("div");d.className="acerca-card";const s=document.createElement("span");s.className="acerca-label",s.textContent=e.versionLabel+": ";const T=document.createElement("span");T.className="acerca-value",T.textContent=Do,d.appendChild(s),d.appendChild(T),a.appendChild(d);const c=Ta(e.privacyTitle),l=document.createElement("p");l.className="acerca-text",l.textContent=e.privacyText,c.appendChild(l);const u=document.createElement("p");u.className="acerca-note",u.textContent=e.hostingNote,c.appendChild(u);const x=document.createElement("p");x.className="acerca-disclaimer",x.textContent=e.notTherapy,c.appendChild(x),a.appendChild(c);const C=Ta(e.creditsTitle),M=document.createElement("p");M.className="acerca-text",M.textContent=e.creditsText,C.appendChild(M);const p=document.createElement("p");p.className="acerca-text",p.textContent=e.fontCredit,C.appendChild(p);const m=document.createElement("p");if(m.className="acerca-note",m.textContent=e.licenseNote,C.appendChild(m),a.appendChild(C),t.appendChild(a),!document.getElementById("acerca-styles")){const h=document.createElement("style");h.id="acerca-styles",h.textContent=`
      .acerca-wrap {
        display: flex;
        flex-direction: column;
        gap: var(--space-lg);
        padding: var(--space-lg) var(--space-md);
        padding-bottom: max(var(--space-xl), env(safe-area-inset-bottom, 0px));
      }
      .acerca-header {
        display: flex;
        flex-direction: column;
        gap: var(--space-sm);
      }
      .acerca-card {
        background: var(--color-menta);
        border-radius: var(--border-radius-sm);
        padding: var(--space-md);
        font-family: var(--font-ui);
        font-size: var(--font-size-sm);
      }
      .acerca-label {
        color: var(--color-musgo);
        font-weight: 600;
      }
      .acerca-value {
        color: var(--color-tinta);
        font-family: var(--font-pixel);
        font-size: var(--font-size-xs);
      }
      .acerca-section {
        display: flex;
        flex-direction: column;
        gap: var(--space-sm);
      }
      .acerca-section-title {
        font-family: var(--font-pixel);
        font-size: var(--font-size-sm);
        color: var(--color-bosque);
        margin: 0;
      }
      .acerca-text {
        font-family: var(--font-ui);
        font-size: var(--font-size-sm);
        color: var(--color-tinta);
        line-height: 1.6;
        margin: 0;
      }
      .acerca-note {
        font-family: var(--font-ui);
        font-size: var(--font-size-xs);
        color: var(--color-musgo);
        line-height: 1.5;
        margin: 0;
        padding: var(--space-sm);
        background: var(--color-crema);
        border-radius: var(--border-radius-sm);
      }
      .acerca-disclaimer {
        font-family: var(--font-ui);
        font-size: var(--font-size-xs);
        color: var(--color-musgo);
        line-height: 1.5;
        margin: 0;
        padding: var(--space-sm);
        background: var(--color-celeste-agua);
        border-radius: var(--border-radius-sm);
        border-left: 3px solid var(--color-musgo);
      }
      .acerca-link {
        font-family: var(--font-ui);
        font-size: var(--font-size-sm);
        color: var(--color-bosque);
        text-decoration: underline;
      }
    `,document.head.appendChild(h)}return setTimeout(()=>i.focus(),50),()=>{}}function Ta(t){const e=document.createElement("section");e.className="acerca-section";const a=document.createElement("h2");return a.className="acerca-section-title",a.textContent=t,e.appendChild(a),e}function Po(t){const e=n.instalar;t.innerHTML="",document.title="RoRoGarden — Instalá la app";const a=window.matchMedia("(display-mode: standalone)").matches||navigator.standalone===!0,r=document.createElement("div");r.className="instalar-wrap";const o=document.createElement("div");o.className="instalar-header";const i=document.createElement("button");i.className="back-btn",i.type="button",i.textContent=e.back,i.setAttribute("aria-label","Volver"),i.addEventListener("click",()=>history.back()),o.appendChild(i);const d=document.createElement("h1");if(d.className="section-title",d.textContent=e.title,d.tabIndex=-1,o.appendChild(d),r.appendChild(o),a){const s=document.createElement("div");s.className="instalar-already",s.textContent=e.alreadyInstalled,s.setAttribute("role","status"),r.appendChild(s)}else{const s=document.createElement("div");s.className="instalar-why-card";const T=document.createElement("p");T.className="instalar-text",T.textContent=e.whyText,s.appendChild(T),r.appendChild(s);const c=window.__deferredInstallPrompt;if(c){const x=document.createElement("button");x.className="btn-primary instalar-native-btn",x.textContent=e.installBtnLabel,x.type="button",x.addEventListener("click",async()=>{c.prompt();const{outcome:C}=await c.userChoice;if(C==="accepted"){window.__deferredInstallPrompt=null,r.innerHTML="";const M=document.createElement("p");M.className="instalar-already",M.textContent=e.alreadyInstalled,M.setAttribute("role","status"),r.appendChild(M)}}),r.appendChild(x)}const l=fa(e.androidTitle,e.androidSteps);r.appendChild(l);const u=fa(e.iosTitle,e.iosSteps);r.appendChild(u)}if(t.appendChild(r),!document.getElementById("instalar-styles")){const s=document.createElement("style");s.id="instalar-styles",s.textContent=`
      .instalar-wrap {
        display: flex;
        flex-direction: column;
        gap: var(--space-lg);
        padding: var(--space-lg) var(--space-md);
        padding-bottom: max(var(--space-xl), env(safe-area-inset-bottom, 0px));
      }
      .instalar-header {
        display: flex;
        flex-direction: column;
        gap: var(--space-sm);
      }
      .instalar-already {
        background: var(--color-menta);
        border-radius: var(--border-radius-sm);
        padding: var(--space-md);
        font-family: var(--font-ui);
        font-size: var(--font-size-base);
        color: var(--color-bosque);
        font-weight: 600;
        text-align: center;
      }
      .instalar-why-card {
        background: var(--color-celeste-agua);
        border-radius: var(--border-radius-sm);
        padding: var(--space-md);
      }
      .instalar-text {
        font-family: var(--font-ui);
        font-size: var(--font-size-sm);
        color: var(--color-tinta);
        line-height: 1.6;
        margin: 0;
      }
      .instalar-native-btn {
        width: 100%;
        min-height: 48px;
      }
      .instalar-section {
        display: flex;
        flex-direction: column;
        gap: var(--space-sm);
      }
      .instalar-section-title {
        font-family: var(--font-pixel);
        font-size: var(--font-size-sm);
        color: var(--color-bosque);
        margin: 0;
      }
      .instalar-steps {
        list-style: none;
        padding: 0;
        margin: 0;
        display: flex;
        flex-direction: column;
        gap: var(--space-sm);
        counter-reset: steps;
      }
      .instalar-step {
        display: flex;
        gap: var(--space-sm);
        align-items: flex-start;
        font-family: var(--font-ui);
        font-size: var(--font-size-sm);
        color: var(--color-tinta);
        line-height: 1.5;
      }
      .instalar-step::before {
        counter-increment: steps;
        content: counter(steps);
        display: flex;
        align-items: center;
        justify-content: center;
        min-width: 24px;
        height: 24px;
        border-radius: 50%;
        background: var(--color-musgo);
        color: var(--color-crema);
        font-size: var(--font-size-xs);
        font-weight: 700;
        flex-shrink: 0;
        margin-top: 2px;
      }
    `,document.head.appendChild(s)}return setTimeout(()=>d.focus(),50),()=>{}}function fa(t,e){const a=document.createElement("section");a.className="instalar-section";const r=document.createElement("h2");r.className="instalar-section-title",r.textContent=t,a.appendChild(r);const o=document.createElement("ol");return o.className="instalar-steps",e.forEach(i=>{const d=document.createElement("li");d.className="instalar-step",d.textContent=i,o.appendChild(d)}),a.appendChild(o),a}function Vo(t){const e=n.error;t.innerHTML="",document.title="RoRoGarden — Algo no salió bien";const a=document.createElement("div");a.className="error-wrap",a.setAttribute("role","main");const r=document.createElement("div");r.className="error-frog",r.setAttribute("aria-hidden","true"),r.textContent="🐸",a.appendChild(r);const o=document.createElement("h1");o.className="error-title",o.textContent=e.title,a.appendChild(o);const i=document.createElement("p");i.className="error-text",i.textContent=e.text,a.appendChild(i);const d=document.createElement("div");d.className="error-btn-row";const s=document.createElement("button");s.className="btn-primary",s.type="button",s.textContent=e.gardenBtn,s.addEventListener("click",()=>{window.location.hash="#/jardin"}),d.appendChild(s);const T=document.createElement("button");if(T.className="btn-ghost",T.type="button",T.textContent=e.reloadBtn,T.addEventListener("click",()=>{window.location.reload()}),d.appendChild(T),a.appendChild(d),t.appendChild(a),!document.getElementById("error-styles")){const c=document.createElement("style");c.id="error-styles",c.textContent=`
      .error-wrap {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        min-height: 100%;
        padding: var(--space-xl) var(--space-lg);
        gap: var(--space-lg);
        text-align: center;
      }
      .error-frog {
        font-size: 56px;
        line-height: 1;
      }
      .error-title {
        font-family: var(--font-pixel);
        font-size: var(--font-size-md);
        color: var(--color-bosque);
        line-height: 1.6;
        margin: 0;
      }
      .error-text {
        font-family: var(--font-ui);
        font-size: var(--font-size-base);
        color: var(--color-tinta);
        line-height: 1.6;
        margin: 0;
        max-width: 320px;
      }
      .error-btn-row {
        display: flex;
        flex-direction: column;
        gap: var(--space-sm);
        width: 100%;
        max-width: 300px;
      }
      .error-btn-row .btn-primary,
      .error-btn-row .btn-ghost {
        min-height: 48px;
        width: 100%;
      }
    `,document.head.appendChild(c)}o.tabIndex=-1,setTimeout(()=>o.focus(),50)}const ne=document.getElementById("app");ne.className="container";let se=null;window.addEventListener("beforeinstallprompt",t=>{t.preventDefault(),window.__deferredInstallPrompt=t});window.addEventListener("error",t=>{console.error("[RoRoGarden] Error no capturado:",t.error),ia()});window.addEventListener("unhandledrejection",t=>{console.error("[RoRoGarden] Promesa rechazada sin manejar:",t.reason),ia()});function ia(){if(se){try{se()}catch{}se=null}ne.classList.remove("container-wide"),ne.innerHTML="",Vo(ne)}function _o(){return(window.location.hash||"#/").split("?")[0]}function Oo(){requestAnimationFrame(()=>{const t=ne.querySelector('h1, [role="main"] h1, .section-title');t&&((!t.tabIndex||t.tabIndex<0)&&(t.tabIndex=-1),t.focus({preventScroll:!1}))})}function sa(){const t=_o();if(se){try{se()}catch{}se=null}if(ne.innerHTML="",ne.classList.remove("container-wide"),(t==="#/"||t==="")&&!Ro()){window.location.replace("#/bienvenida");return}try{if(t.startsWith("#/desafio")){const a=t.split("/")[2]||"";se=To(ne,a)}else switch(t){case"#/bienvenida":se=Bo(ne);break;case"#/jardin":se=to(ne);break;case"#/micoleccion":se=vo(ne);break;case"#/semana":se=Ho(ne);break;case"#/recordatorios":se=Go(ne);break;case"#/ayuda":se=jo(ne);break;case"#/pausa":se=uo(ne);break;case"#/respirar":se=ho(ne);break;case"#/checkin":se=ao(ne);break;case"#/diario":se=no(ne);break;case"#/historial":se=oo(ne);break;case"#/ajustes":se=po(ne);break;case"#/acerca":se=Io(ne);break;case"#/instalar":se=Po(ne);break;case"#/":se=tn(ne);break;default:window.location.replace("#/jardin");return}}catch(e){console.error("[RoRoGarden] Error renderizando ruta:",t,e),ia();return}Oo()}"serviceWorker"in navigator&&navigator.serviceWorker.addEventListener("controllerchange",()=>{document.dispatchEvent(new CustomEvent("swUpdated"))});window.addEventListener("hashchange",sa);window.addEventListener("popstate",sa);sa();window.addEventListener("storage",()=>{});document.addEventListener("storageQuotaExceeded",()=>{const t=n.storageFullWarning,e=document.createElement("div");e.setAttribute("role","alert"),e.style.cssText=`
    position: fixed; bottom: 0; left: 0; right: 0;
    background: var(--color-acento);
    color: var(--color-tinta);
    font-family: var(--font-ui);
    font-size: 14px;
    padding: 12px 16px;
    text-align: center;
    z-index: 999;
  `,e.textContent=t,document.body.appendChild(e),setTimeout(()=>e.remove(),8e3)});
