var Ca=Object.defineProperty;var Ma=(t,e,a)=>e in t?Ca(t,e,{enumerable:!0,configurable:!0,writable:!0,value:a}):t[e]=a;var ut=(t,e,a)=>Ma(t,typeof e!="symbol"?e+"":e,a);(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))r(o);new MutationObserver(o=>{for(const i of o)if(i.type==="childList")for(const d of i.addedNodes)d.tagName==="LINK"&&d.rel==="modulepreload"&&r(d)}).observe(document,{childList:!0,subtree:!0});function a(o){const i={};return o.integrity&&(i.integrity=o.integrity),o.referrerPolicy&&(i.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?i.credentials="include":o.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function r(o){if(o.ep)return;o.ep=!0;const i=a(o);fetch(o.href,i)}})();const ie={tinta:"#2B3A42",aguaProfunda:"#3E5C7A",azulNiebla:"#A9C8E8",celesteAgua:"#BFE6EE",turquesa:"#8ED1CF",menta:"#D9F2E6",salvia:"#A8D5BA",sapo:"#8CC9A1",musgo:"#6FA98A",bosque:"#3F6F5E",crema:"#F6EFC9",acento:"#E8A987",transparent:"transparent"},ya={".":"transparent",T:"tinta","#":"tinta",P:"aguaProfunda",N:"azulNiebla",A:"celesteAgua",U:"turquesa",M:"menta",V:"salvia",S:"sapo",G:"musgo",B:"bosque",C:"crema",H:"acento"},n={app:{back:"← Volver",skip:"Saltar",save:"Guardar",next:"Siguiente",cancel:"Cancelar",delete:"Borrar",edit:"Editar"},home:{loading:"Ya viene...",peaceNote:"Solo vos, sin presiones"},jardin:{title:"Tu Jardín",pausaBtn:"Una pausa",checkinBtn:"¿Cómo llegás hoy?",diarioBtn:"Cerrar el día",historialBtn:"Mis días",semanaBtn:"Semana",decorarBtn:"Acomodar",coleccionBtn:"Colección",frogNamePrompt:"¿Le querés poner un nombre a tu sapo?",frogNamePlaceholder:"Hasta 20 letras...",frogNameSkip:"Dejarlo sin nombre",frogNameSave:"Guardarlo",frogTap:["¡Hola!","Un salto chiquito.","¿Buen día?","¡Croac!"],giftTitle:"Alguien pasó a visitarte.",giftDismiss:"¡Qué lindo!",gridDoneBtn:"Listo",gridHint:"Tocá un casillero para colocar o mover."},coleccion:{title:"Mi colección",emptyHint:"Acá van a aparecer los visitantes y objetos que conseguís.",back:"← Volver",placedBadge:"En el jardín"},moods:{contenta:{id:"contenta",label:"Contenta",description:"Con energía linda y el corazón liviano"},tranquila:{id:"tranquila",label:"Tranquila",description:"En paz, con calma en el cuerpo"},cansada:{id:"cansada",label:"Cansada",description:"El cuerpo pide aflojar y descansar"},tensa:{id:"tensa",label:"Tensa",description:"Con la cabeza a mil o el cuello cargado"},triste:{id:"triste",label:"Triste",description:"Con ganas de un abrazo y silencio"}},checkin:{title:"¿Cómo llegás hoy?",subtitle:"Elegí el sapito que mejor te acompañe ahora.",promptText:"¿Querés dejar algo escrito? (opcional)",placeholder:"Escribí lo que sientas, o dejalo vacío...",savedWarmth:"Gracias por registrar cómo estás. Tu jardín te acompaña.",skippedWarmth:"No pasa nada, está perfecto pasar de largo."},diario:{title:"Cerrar el día",stepMoodTitle:"¿Cómo terminás este día?",stepMoodSubtitle:"No hace falta que hoy tengas ganas de mucho.",step1Title:"Algo lindo de hoy",step1Subtitle:"Un detalle chiquito, una risa, un rayito de sol.",step1Placeholder:"Lo que se te venga a la mente...",step2Title:"Algo que me pesó",step2Subtitle:"Eso que te dejó cansada o te dio vueltas.",step2Placeholder:"Dejalo acá un momento...",step3Title:"Algo que suelto",step3Subtitle:"Lo que ya pasó y hoy no te tenés que llevar a la cama.",step3Placeholder:"Lo suelto para descansar...",finishBtn:"Cerrar la noche",ritualTitle:"El día ya terminó",ritualMessage:"Dejalo acá, el jardín lo guarda.",ritualGoodnight:"Que descanses lindo."},historial:{title:"Mis días",subtitle:"Tus registros guardados, a tu ritmo.",empty:"Todavía no hay nada acá. Cuando quieras, este espacio te espera.",checkinBadge:"Check-in",diarioBadge:"Diario",confirmDelete:"¿Querés borrar este registro? Esta acción no se puede deshacer.",editNoteTitle:"Editar anotación"},pausa:{title:"Una pausa",subtitle:"Elegí algo chiquito para este momento.",otherIdeasBtn:"Otras ideas",respirarCardTitle:"Respirar un rato",respirarCardDesc:"Guía visual con ritmo calmo para vos o con la sala.",respirarBtn:"Ir a respirar",nowNotBtn:"Ahora no",startBtn:"Empezar",filterAll:"Todas"},desafio:{stepLabel:"Paso",stepOf:"de",nextBtn:"Siguiente paso",finishBtn:"Terminar",pauseBtn:"Pausar",resumeBtn:"Reanudar",quitBtn:"Terminar antes",quitWarmth:"Está perfecto. Hasta acá estuvo bien.",doneTitle:"Pausa completada",doneMessage:"Hiciste un ratito para vos. Tu cuerpo y tu voz lo agradecen.",backToGarden:"Volver al jardín"},respirar:{title:"Respirar",subtitle:"Seguí el ritmo del sapito para aflojar.",patternLabel:"Elegí el ritmo:",durationLabel:"Duración:",minute1:"1 minuto",minute2:"2 minutos",minute3:"3 minutos",salaModeTitle:"Con mi sala",salaModeDesc:"Visualización más simple para mostrar con el celu a los chicos.",warning:"Si sentís mareo o incomodidad, volvé a respirar normal.",startBtn:"Empezar a respirar",pauseBtn:"Pausar",resumeBtn:"Reanudar",quitBtn:"Terminar antes",quitWarmth:"Muy bien. Respirar a tu ritmo siempre es lo mejor.",doneTitle:"Hermoso momento",doneMessage:"Volvé a tu ritmo cuando quieras. El jardín te acompaña.",doneMessageSala:"¡Qué lindo respiramos juntos! Ya estamos listos.",backToGarden:"Volver al jardín"},semana:{title:"Mi semana",niceTitle:"Lo lindo de la semana",caredTitle:"Lo que cuidaste",caredSubtitle:"Pausas que te regalaste esta semana:",patternsTitle:"Cosas que noté",dismissPatternBtn:"No mostrar más esta observación",helpLink:"Ayuda y contactos de escucha",closingQuotes:["Cada día tiene su propio ritmo. Gracias por acompañarte.","Un ratito a la vez es más que suficiente.","El jardín te espera siempre con la misma calma.","Hacer una pausa también es parte de avanzar.","A tu tiempo, a tu manera.","Lo que pudiste hoy estuvo bien.","Respirar y soltar un ratito cambia el día.","Tu bienestar vale la pena."]},recordatorios:{title:"Recordatorios suaves",subtitle:"Elegí momentos del día para aflojar. Vos tenés el control total.",backToSettings:"← Volver",vacationLabel:"Descansar de los avisos",vacationDesc:"Silencia los avisos en vacaciones o recesos sin borrar tu configuración.",exportIcsBtn:"Descargar para mi calendario (.ics)",exportIcsDesc:"Agrega estos momentos al calendario de tu celular para que te avise con la app cerrada.",instructionsTitle:"Cómo agregarlo al calendario",instructionsAndroid:'En Android: abrí el archivo .ics descargado con Google Calendar u otra app de calendario y tocá "Agregar todo".',instructionsIos:'En iPhone: tocá el archivo .ics descargado y elegí "Agregar todos los eventos" a tu Calendario de Apple.',timeLabel:"Hora:",daysLabel:"Días:",textLabel:"Mensaje en tu calendario (máx. 40 letras):",saveSuccess:"Configuración guardada."},ayuda:{title:"Ayuda y contactos",subtitle:"RoRoGarden es solo un rincón de bienestar y no reemplaza a un profesional de la salud.",talkWarmth:"Si estás pasando un momento difícil, hablar con alguien de confianza o con un profesional puede ayudar mucho.",emergencyNote:"Si estás en peligro o necesitás ayuda urgente, podés comunicarte ahora con estas líneas gratuitas y oficiales:",localResourcesTitle:"Recursos de mi zona",localResourcesEmpty:"Por ahora no hay recursos locales agregados. Podés consultar en tu centro de salud más cercano."},apoyo:{cardTitle:"Un momento para vos",cardMessage:"Estuvieron pesados estos días. No tenés que poder sola. Si querés, hay gente que puede acompañarte.",cardHelpBtn:"Ver opciones",cardDismissBtn:"Ahora no",cardNeverBtn:"No mostrar más este aviso"},ajustes:{title:"Ajustes y Respaldo",privacyNote:"Tus datos viven solo en este celular. Nadie más los ve.",audioTitle:"Sonido y vibración",soundLabel:"Campana suave al cambiar de fase",vibrationLabel:"Vibración suave (si el celular la soporta)",gardenTitle:"Jardín",gardenAnimationsLabel:"Animaciones del jardín",hemisphereLabel:"Hemisferio",hemisphereSur:"Sur (Argentina)",hemisphereNorte:"Norte",weekTitle:"Mi semana y recordatorios",showWeekLabel:'Mostrar "Mi semana" en el jardín',weekDaysLabel:"Días a mostrar en Mi semana:",weekDaysWork:"Lunes a viernes",weekDaysAll:"Toda la semana",showPatternsLabel:'Mostrar "Cosas que noté" (observaciones suaves)',remindersBtn:"Configurar recordatorios y calendario",vacationLabel:"Descansar de los avisos (receso/vacaciones)",supportSuggestionsLabel:"Sugerencias de apoyo cuando los días vengan pesados",helpBtn:"Ayuda y contactos de escucha",exportTitle:"Exportar mis datos",exportDesc:"Descarga un archivo con todos tus registros para guardarlos de respaldo.",exportBtn:"Descargar respaldo (JSON)",importTitle:"Importar respaldo",importDesc:"Si cambiaste de celular o querés recuperar un archivo anterior.",importBtn:"Seleccionar archivo JSON",importConfirm:"Se importarán los registros encontrados. ¿Deseás continuar?",importSuccess:"Se importaron los registros correctamente.",importError:"El archivo seleccionado no tiene un formato válido de RoRoGarden.",resetGardenTitle:"Reiniciar solo el jardín",resetGardenDesc:"Elimina las decoraciones, la colección y el nombre del sapo. No borra los registros de bienestar.",resetGardenBtn:"Reiniciar jardín",resetGardenConfirm1:"¿Seguro que querés reiniciar el jardín? Se pierden los objetos y las decoraciones.",resetGardenConfirm2:"Última confirmación. ¿Continuar?",resetGardenSuccess:"El jardín se reinició.",clearTitle:"Borrar todo",clearDesc:"Elimina permanentemente todos los registros guardados en este dispositivo.",clearBtn:"Borrar todos mis datos",clearFirstConfirm:"¿Seguro que querés borrar todos tus registros? No se podrán recuperar.",clearSecondConfirm:"Última confirmación: se borrará todo definitivamente. ¿Continuar?",clearSuccess:"Se han eliminado todos los datos locales.",storageWarning:"Atención: el almacenamiento local no está disponible o está bloqueado en este navegador. Tus datos no podrán guardarse entre sesiones.",welcomeBtn:"Ver la bienvenida",installBtn:"Instalar la app",aboutBtn:"Acerca de y privacidad"},bienvenida:{step1Title:"Hola, bienvenida 🐸",step1Text:"RoRoGarden es tu rincón personal para aflojar un ratito entre clase y clase. Un jardín tranquilo solo para vos, sin presiones ni obligaciones.",step2Title:"Tus datos son tuyos",step2Text:"Tus datos viven solo en este celular. La app no los envía a ningún lado ni los comparte con nadie.",step2Note:"El servicio que aloja la página puede registrar que alguien la visitó, como cualquier sitio web, pero sin ver lo que escribís adentro.",step3Title:"Todo es opcional",step3Text:"Podés usar lo que quieras y saltear lo que no. Esta app no es terapia ni reemplaza a un profesional de la salud: si necesitás ayuda, siempre podés buscar a alguien de confianza.",step3NameLabel:"¿Le querés poner un nombre a tu sapo? (opcional)",step3NamePlaceholder:"Hasta 20 letras...",step3Disclaimer:"RoRoGarden no es terapia ni consejo médico. Ante cualquier dificultad, hablar con un profesional es la mejor opción.",skipBtn:"Saltar",nextBtn:"Siguiente →",enterBtn:"Entrar al jardín",finishBtn:"Ir al jardín"},instalar:{title:"Instalá la app",whyText:"Cuando instalás RoRoGarden, funciona como una app del celular: se abre a pantalla completa, carga más rápido y tus datos quedan mejor guardados incluso sin conexión.",androidTitle:"En Android (Chrome)",androidSteps:["Abrí esta página en Chrome.","Tocá los tres puntos arriba a la derecha.",'Elegí "Agregar a pantalla de inicio".','Confirmá con "Agregar".'],iosTitle:"En iPhone (Safari)",iosSteps:["Abrí esta página en Safari.","Tocá el ícono de Compartir (el cuadrado con la flecha).",'Elegí "Agregar a pantalla de inicio".','Confirmá con "Agregar".'],installBtnLabel:"Instalar",alreadyInstalled:"✓ Ya está instalada. Podés cerrar esta pantalla.",back:"← Volver"},acerca:{title:"Acerca de y privacidad",versionLabel:"Versión",privacyTitle:"Qué se guarda y dónde",privacyText:"RoRoGarden guarda tus check-ins, diario, decoraciones y preferencias solo en este dispositivo, en el almacenamiento del navegador (localStorage). La app no tiene servidor propio ni envía tus registros a ningún lado.",hostingNote:"El servicio que aloja la página (como GitHub Pages o Cloudflare) puede registrar las visitas al sitio como cualquier sitio web, pero sin recibir el contenido de tus registros.",notTherapy:"Esta app no es terapia ni consejo médico. Ante cualquier dificultad, hablar con un profesional de la salud es siempre la mejor opción.",creditsTitle:"Créditos",creditsText:"Arte y sprites: pixel art original creado para RoRoGarden.",fontCredit:"Tipografía: Press Start 2P, diseñada por CodeMan38, bajo licencia SIL Open Font License 1.1.",licenseNote:"El código fuente no tiene licencia asignada todavía. Ver NOTAS.md.",back:"← Volver"},error:{title:"Algo no salió bien",text:"Tus datos están a salvo. Podés volver al jardín o recargar la página.",gardenBtn:"Volver al jardín",reloadBtn:"Recargar"},updateReady:{text:"Actualizá cuando quieras.",updateBtn:"Actualizar"},storageFullWarning:"El almacenamiento de este dispositivo está lleno o no disponible. Te recomendamos exportar una copia de tus datos desde Ajustes."},na={frog:{viewBox:"0 0 576 512",path:"M368 32c41.7 0 75.9 31.8 79.7 72.5l85.6 26.3c25.4 7.8 42.8 31.3 42.8 57.9 0 21.8-11.7 41.9-30.7 52.7l-144.5 82.1 92.5 92.5 50.7 0c17.7 0 32 14.3 32 32s-14.3 32-32 32l-64 0c-8.5 0-16.6-3.4-22.6-9.4L346.9 360.2c11.7-36 3.2-77.1-25.4-105.7-40.6-40.6-106.3-40.6-146.9-.1L101 324.4c-6.4 6.1-6.7 16.2-.6 22.6s16.2 6.6 22.6 .6l73.8-70.2 .1-.1 .1-.1c3.5-3.5 7.3-6.6 11.3-9.2 27.9-18.5 65.9-15.4 90.5 9.2 24.7 24.7 27.7 62.9 9 90.9-2.6 3.8-5.6 7.5-9 10.9L261.8 416 352 416c17.7 0 32 14.3 32 32s-14.3 32-32 32L64 480C28.7 480 0 451.3 0 416 0 249.6 127 112.9 289.3 97.5 296.2 60.2 328.8 32 368 32zm0 104a24 24 0 1 0 0-48 24 24 0 1 0 0 48z"},heart:{viewBox:"0 0 512 512",path:"M241 87.1l15 20.7 15-20.7C296 52.5 336.2 32 378.9 32 452.4 32 512 91.6 512 165.1l0 2.6c0 112.2-139.9 242.5-212.9 298.2-12.4 9.4-27.6 14.1-43.1 14.1s-30.8-4.6-43.1-14.1C139.9 410.2 0 279.9 0 167.7l0-2.6C0 91.6 59.6 32 133.1 32 175.8 32 216 52.5 241 87.1z"},moon:{viewBox:"0 0 512 512",path:"M256 0C114.6 0 0 114.6 0 256S114.6 512 256 512c68.8 0 131.3-27.2 177.3-71.4 7.3-7 9.4-17.9 5.3-27.1s-13.7-14.9-23.8-14.1c-4.9 .4-9.8 .6-14.8 .6-101.6 0-184-82.4-184-184 0-72.1 41.5-134.6 102.1-164.8 9.1-4.5 14.3-14.3 13.1-24.4S322.6 8.5 312.7 6.3C294.4 2.2 275.4 0 256 0z"},bookOpen:{viewBox:"0 0 512 512",path:"M256 141.3l0 309.3 .5-.2C311.1 427.7 369.7 416 428.8 416l19.2 0 0-320-19.2 0c-42.2 0-84.1 8.4-123.1 24.6-16.8 7-33.4 13.9-49.7 20.7zM230.9 61.5L256 72 281.1 61.5C327.9 42 378.1 32 428.8 32L464 32c26.5 0 48 21.5 48 48l0 352c0 26.5-21.5 48-48 48l-35.2 0c-50.7 0-100.9 10-147.7 29.5l-12.8 5.3c-7.9 3.3-16.7 3.3-24.6 0l-12.8-5.3C184.1 490 133.9 480 83.2 480L48 480c-26.5 0-48-21.5-48-48L0 80C0 53.5 21.5 32 48 32l35.2 0c50.7 0 100.9 10 147.7 29.5z"},gear:{viewBox:"0 0 512 512",path:"M195.1 9.5C198.1-5.3 211.2-16 226.4-16l59.8 0c15.2 0 28.3 10.7 31.3 25.5L332 79.5c14.1 6 27.3 13.7 39.3 22.8l67.8-22.5c14.4-4.8 30.2 1.2 37.8 14.4l29.9 51.8c7.6 13.2 4.9 29.8-6.5 39.9L447 233.3c.9 7.4 1.3 15 1.3 22.7s-.5 15.3-1.3 22.7l53.4 47.5c11.4 10.1 14 26.8 6.5 39.9l-29.9 51.8c-7.6 13.1-23.4 19.2-37.8 14.4l-67.8-22.5c-12.1 9.1-25.3 16.7-39.3 22.8l-14.4 69.9c-3.1 14.9-16.2 25.5-31.3 25.5l-59.8 0c-15.2 0-28.3-10.7-31.3-25.5l-14.4-69.9c-14.1-6-27.2-13.7-39.3-22.8L73.5 432.3c-14.4 4.8-30.2-1.2-37.8-14.4L5.8 366.1c-7.6-13.2-4.9-29.8 6.5-39.9l53.4-47.5c-.9-7.4-1.3-15-1.3-22.7s.5-15.3 1.3-22.7L12.3 185.8c-11.4-10.1-14-26.8-6.5-39.9L35.7 94.1c7.6-13.2 23.4-19.2 37.8-14.4l67.8 22.5c12.1-9.1 25.3-16.7 39.3-22.8L195.1 9.5zM256.3 336a80 80 0 1 0 -.6-160 80 80 0 1 0 .6 160z"},pen:{viewBox:"0 0 512 512",path:"M471.6 21.7c-21.9-21.9-57.3-21.9-79.2 0L368 46.1 465.9 144 490.3 119.6c21.9-21.9 21.9-57.3 0-79.2L471.6 21.7zm-299.2 220c-6.1 6.1-10.8 13.6-13.5 21.9l-29.6 88.8c-2.9 8.6-.6 18.1 5.8 24.6s15.9 8.7 24.6 5.8l88.8-29.6c8.2-2.7 15.7-7.4 21.9-13.5L432 177.9 334.1 80 172.4 241.7zM96 64C43 64 0 107 0 160L0 416c0 53 43 96 96 96l256 0c53 0 96-43 96-96l0-96c0-17.7-14.3-32-32-32s-32 14.3-32 32l0 96c0 17.7-14.3 32-32 32L96 448c-17.7 0-32-14.3-32-32l0-256c0-17.7 14.3-32 32-32l96 0c17.7 0 32-14.3 32-32s-14.3-32-32-32L96 64z"},trash:{viewBox:"0 0 448 512",path:"M136.7 5.9C141.1-7.2 153.3-16 167.1-16l113.9 0c13.8 0 26 8.8 30.4 21.9L320 32 416 32c17.7 0 32 14.3 32 32s-14.3 32-32 32L32 96C14.3 96 0 81.7 0 64S14.3 32 32 32l96 0 8.7-26.1zM32 144l384 0 0 304c0 35.3-28.7 64-64 64L96 512c-35.3 0-64-28.7-64-64l0-304zm88 64c-13.3 0-24 10.7-24 24l0 192c0 13.3 10.7 24 24 24s24-10.7 24-24l0-192c0-13.3-10.7-24-24-24zm104 0c-13.3 0-24 10.7-24 24l0 192c0 13.3 10.7 24 24 24s24-10.7 24-24l0-192c0-13.3-10.7-24-24-24zm104 0c-13.3 0-24 10.7-24 24l0 192c0 13.3 10.7 24 24 24s24-10.7 24-24l0-192c0-13.3-10.7-24-24-24z"},lock:{viewBox:"0 0 384 512",path:"M128 96l0 64 128 0 0-64c0-35.3-28.7-64-64-64s-64 28.7-64 64zM64 160l0-64C64 25.3 121.3-32 192-32S320 25.3 320 96l0 64c35.3 0 64 28.7 64 64l0 224c0 35.3-28.7 64-64 64L64 512c-35.3 0-64-28.7-64-64L0 224c0-35.3 28.7-64 64-64z"},flask:{viewBox:"0 0 448 512",path:"M288 0L128 0C110.3 0 96 14.3 96 32s14.3 32 32 32L128 215.5 7.5 426.3C2.6 435 0 444.7 0 454.7 0 486.4 25.6 512 57.3 512l333.4 0c31.6 0 57.3-25.6 57.3-57.3 0-10-2.6-19.8-7.5-28.4L320 215.5 320 64c17.7 0 32-14.3 32-32S337.7 0 320 0L288 0zM192 215.5l0-151.5 64 0 0 151.5c0 11.1 2.9 22.1 8.4 31.8l41.6 72.7-164 0 41.6-72.7c5.5-9.7 8.4-20.6 8.4-31.8z"},wind:{viewBox:"0 0 512 512",path:"M288 32c0 17.7 14.3 32 32 32l40 0c13.3 0 24 10.7 24 24s-10.7 24-24 24L32 112c-17.7 0-32 14.3-32 32s14.3 32 32 32l328 0c48.6 0 88-39.4 88-88S408.6 0 360 0L320 0c-17.7 0-32 14.3-32 32zm64 352c0 17.7 14.3 32 32 32l32 0c53 0 96-43 96-96s-43-96-96-96L32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l384 0c17.7 0 32 14.3 32 32s-14.3 32-32 32l-32 0c-17.7 0-32 14.3-32 32zM128 512l40 0c48.6 0 88-39.4 88-88s-39.4-88-88-88L32 336c-17.7 0-32 14.3-32 32s14.3 32 32 32l136 0c13.3 0 24 10.7 24 24s-10.7 24-24 24l-40 0c-17.7 0-32 14.3-32 32s14.3 32 32 32z"},rotate:{viewBox:"0 0 512 512",path:"M480.1 192l7.9 0c13.3 0 24-10.7 24-24l0-144c0-9.7-5.8-18.5-14.8-22.2S477.9 .2 471 7L419.3 58.8C375 22.1 318 0 256 0 127 0 20.3 95.4 2.6 219.5 .1 237 12.2 253.2 29.7 255.7s33.7-9.7 36.2-27.1C79.2 135.5 159.3 64 256 64 300.4 64 341.2 79 373.7 104.3L327 151c-6.9 6.9-8.9 17.2-5.2 26.2S334.3 192 344 192l136.1 0zm29.4 100.5c2.5-17.5-9.7-33.7-27.1-36.2s-33.7 9.7-36.2 27.1c-13.3 93-93.4 164.5-190.1 164.5-44.4 0-85.2-15-117.7-40.3L185 361c6.9-6.9 8.9-17.2 5.2-26.2S177.7 320 168 320L24 320c-13.3 0-24 10.7-24 24L0 488c0 9.7 5.8 18.5 14.8 22.2S34.1 511.8 41 505l51.8-51.8C137 489.9 194 512 256 512 385 512 491.7 416.6 509.4 292.5z"},play:{viewBox:"0 0 448 512",path:"M91.2 36.9c-12.4-6.8-27.4-6.5-39.6 .7S32 57.9 32 72l0 368c0 14.1 7.5 27.2 19.6 34.4s27.2 7.5 39.6 .7l336-184c12.8-7 20.8-20.5 20.8-35.1s-8-28.1-20.8-35.1l-336-184z"},pause:{viewBox:"0 0 384 512",path:"M48 32C21.5 32 0 53.5 0 80L0 432c0 26.5 21.5 48 48 48l64 0c26.5 0 48-21.5 48-48l0-352c0-26.5-21.5-48-48-48L48 32zm224 0c-26.5 0-48 21.5-48 48l0 352c0 26.5 21.5 48 48 48l64 0c26.5 0 48-21.5 48-48l0-352c0-26.5-21.5-48-48-48l-64 0z"},stop:{viewBox:"0 0 448 512",path:"M64 32l320 0c35.3 0 64 28.7 64 64l0 320c0 35.3-28.7 64-64 64L64 480c-35.3 0-64-28.7-64-64L0 96C0 60.7 28.7 32 64 32z"},bell:{viewBox:"0 0 448 512",path:"M224 0c-17.7 0-32 14.3-32 32l0 3.2C119 50 64 114.6 64 192l0 21.7c0 48.1-16.4 94.8-46.4 132.4L7.8 358.3C2.7 364.6 0 372.4 0 380.5 0 400.1 15.9 416 35.5 416l376.9 0c19.6 0 35.5-15.9 35.5-35.5 0-8.1-2.7-15.9-7.8-22.2l-9.8-12.2C400.4 308.5 384 261.8 384 213.7l0-21.7c0-77.4-55-142-128-156.8l0-3.2c0-17.7-14.3-32-32-32zM162 464c7.1 27.6 32.2 48 62 48s54.9-20.4 62-48l-124 0z"},child:{viewBox:"0 0 320 512",path:"M96 64A64 64 0 1 1 224 64 64 64 0 1 1 96 64zm48 320l0 96c0 17.7-14.3 32-32 32s-32-14.3-32-32L80 287.8 59.1 321c-9.4 15-29.2 19.4-44.1 10S-4.5 301.9 4.9 287l39.9-63.3C69.7 184 113.2 160 160 160s90.3 24 115.2 63.6L315.1 287c9.4 15 4.9 34.7-10 44.1s-34.7 4.9-44.1-10L240 287.8 240 480c0 17.7-14.3 32-32 32s-32-14.3-32-32l0-96-32 0z"},spa:{viewBox:"0 0 576 512",path:"M169.7 227.5c34.3 18.7 64.5 44.1 88.8 74.5 11.1 13.9 21 28.9 29.4 44.8 8.5-15.9 18.3-30.8 29.4-44.8 24.3-30.5 54.5-55.9 88.8-74.5 41.7-22.7 89.4-35.5 139.7-35.5l9.9 0c11.1 0 20.1 9 20.1 20.1 0 148-119.9 267.9-267.9 267.9l-40.2 0C119.9 480 0 360.1 0 212.1 0 201 9 192 20.1 192l9.9 0c50.4 0 98.1 12.8 139.7 35.5zM303.9 38c16.9 15.9 61.4 63.4 89 142.3-40.1 20.2-75.8 48.2-104.9 82.1-29.2-33.9-64.8-61.8-104.9-82.1 27.6-78.9 72.2-126.4 89-142.3 4.3-4.1 10-6 15.9-6s11.6 2 15.9 6z"},desktop:{viewBox:"0 0 576 512",path:"M64 64C28.7 64 0 92.7 0 128L0 384c0 35.3 28.7 64 64 64l176 0 0 32-48 0c-17.7 0-32 14.3-32 32s14.3 32 32 32l192 0c17.7 0 32-14.3 32-32s-14.3-32-32-32l-48 0 0-32 176 0c35.3 0 64-28.7 64-64l0-256c0-35.3-28.7-64-64-64L64 64zM512 384L64 384 64 128l448 0 0 256z"},mobile:{viewBox:"0 0 384 512",path:"M80 0C44.7 0 16 28.7 16 64l0 384c0 35.3 28.7 64 64 64l224 0c35.3 0 64-28.7 64-64l0-384c0-35.3-28.7-64-64-64L80 0zm112 432a24 24 0 1 1 0 48 24 24 0 1 1 0-48zM64 64l256 0 0 320L64 384 64 64z"},expand:{viewBox:"0 0 448 512",path:"M32 32C14.3 32 0 46.3 0 64l0 96c0 17.7 14.3 32 32 32s32-14.3 32-32l0-64 64 0c17.7 0 32-14.3 32-32s-14.3-32-32-32L32 32zM416 32l-64 0c-17.7 0-32 14.3-32 32s14.3 32 32 32l64 0 0 64c0 17.7 14.3 32 32 32s32-14.3 32-32l0-96c0-17.7-14.3-32-32-32zM32 352c-17.7 0-32 14.3-32 32l0 96c0 17.7 14.3 32 32 32l96 0c17.7 0 32-14.3 32-32s-14.3-32-32-32l-64 0 0-64c0-17.7-14.3-32-32-32zm416 0c-17.7 0-32 14.3-32 32l0 64-64 0c-17.7 0-32 14.3-32 32s14.3 32 32 32l96 0c17.7 0 32-14.3 32-32l0-96c0-17.7-14.3-32-32-32z"}};function K(t,e={}){const a=na[t],r=document.createElementNS("http://www.w3.org/2000/svg","svg"),o=e.size??"1em";r.setAttribute("viewBox",a.viewBox),r.setAttribute("width",typeof o=="number"?`${o}px`:o),r.setAttribute("height",typeof o=="number"?`${o}px`:o),r.setAttribute("fill","currentColor"),e.className?r.setAttribute("class",`fa-icon ${e.className}`):r.setAttribute("class","fa-icon"),e.ariaLabel?(r.setAttribute("role","img"),r.setAttribute("aria-label",e.ariaLabel)):r.setAttribute("aria-hidden","true");const i=document.createElementNS("http://www.w3.org/2000/svg","path");return i.setAttribute("d",a.path),r.appendChild(i),r}function Ea(t,e={}){const a=na[t],r=e.size??"1em",o=typeof r=="number"?`${r}px`:r,i=e.className?`fa-icon ${e.className}`:"fa-icon",d=e.ariaLabel?`role="img" aria-label="${e.ariaLabel}"`:'aria-hidden="true"';return`<svg xmlns="http://www.w3.org/2000/svg" viewBox="${a.viewBox}" width="${o}" height="${o}" fill="currentColor" class="${i}" ${d}><path d="${a.path}"/></svg>`}const wa=[".......TTTTTT.......",".....TTSSSSSSTT.....","....TSSSSSSSSSST....","...TSSSSSSSSSSSST...","..TSTCCTSSSSTCCTST..","..TSCTTCSSSSCTTCST..",".TSSCTTCSSSSCTTCSST.",".TSSTCCTSSSSTCCTSST.",".TSSHHSSSSSSSSHHSST.",".TSSSSSSSTSSTSSSSST.",".TSSSSSSSTTSSSSSSST.",".TSSGSSMMMMMMSSGSST.",".TSSSMMMMMMMMMMSSST.","TSSSSMMMMMMMMMMSSSST","TSGSSMMMMMMMMMMSSGST",".TSSSTTMMMMMMTTSSST.","..TTSSSTSSSSTSSSTT..","...TTTT.TTTT.TTTT..."],Na=[".......TTTTTT.......",".....TTSSSSSSTT.....","....TSSSSSSSSSST....","...TSSSSSSSSSSSST...","..TSSSSSSSSSSSSSST..","..TSSTTSSSSSSTTSST..",".TSSTSSTSSSSTSSTSST.",".TSSSSSSSSSSSSSSSST.",".TSSHHSSSSSSSSHHSST.",".TSSSSSSSTSSTSSSSST.",".TSSSSSSSTTSSSSSSST.",".TSSGSSMMMMMMSSGSST.",".TSSSMMMMMMMMMMSSST.","TSSSSMMMMMMMMMMSSSST","TSGSSMMMMMMMMMMSSGST",".TSSSTTMMMMMMTTSSST.","..TTSSSTSSSSTSSSTT..","...TTTT.TTTT.TTTT..."],oa={id:"frog-idle",frames:[wa,Na],frameMs:1200},ka={id:"frog-sleeping",frames:[["......TTTTTTTT......","....TTSSSSSSSSTT....","...TSSSSSSSSSSSST...","..TSSSSSSSSSSSSSST..",".TSSTTTSSSSSSTTTSST.",".TSHHSSSSSSSSSSHHST.",".TSSSSSSSTTSSSSSSST.",".TSSGSSSSSSSSSSGSST.","..TSSSSSSSSSSSSSST..","...TSSSSSSSSSSSST...","....TTSSSSSSSSTT....","......TTTTTTTT......"]]},ra={id:"lilypad",frames:[["........TTTTTTTTTTTT........",".....TTTSSSSSSSSSSSSSTT.....","...TTSSSSVVVVVSSSSSSSSSTT...","..TSSSSVVVVSSSSSSSSSSSSSST..",".TSSSSSVVSSSSSSSSSSSSSSSSST.","TSSSSSSSSSSSSSSSSSTTTTT.....","TSSGGGGGGGGGGGGSTT..........","TSSSSSSSSSSSSSSSSSTTTTT.....",".TSSSSSSSSGSSSSSSSSSSSSSSST.","..TTSSSSSSSGSSSSSSSSSSSSSTT.","....TTTBBBBBBBBBBBBBBTTT....",".......TTTTTTTTTTTTTT......."]]},Aa=["........TTTTTT..........","......TTCCCCTTTT.....H..","....TTCCCCTT............","...TCCCCCT..............","...TCCCCT..........H....","..TCCCCT................","..TCHCCT................",".TCCCCT.................",".TCHCCT.......H.........",".TCHCCT......HHH........",".TCCCCT.......H.........",".TCCCCT.................",".THCCCT.................","..TCCCCT................","..TCCCCT..........H.....","...TCCCCT........HHH....","...TCCCCCT........H.....","....TTCCCCTT............","......TTCCCCTTTT........","........TTTTTT.........."],Ha=["........TTTTTT..........","......TTCCCCTTTT.....H..","....TTCCCCTT............","...TCCCCCT.........H....","...TCCCCT.........HHH...","..TCCCCT...........H....","..TCHCCT................",".TCCCCT.................",".TCHCCT.................",".TCHCCT.......H.........",".TCCCCT.................",".TCCCCT.................",".THCCCT.................","..TCCCCT................","..TCCCCT................","...TCCCCT.........H.....","...TCCCCCT..............","....TTCCCCTT............","......TTCCCCTTTT........","........TTTTTT.........."],ia={id:"moon-crescent",frames:[Aa,Ha],frameMs:900},Ga={id:"frog-contenta",frames:[["................................","................................","................................","...H.......TTTTTTTTTT.......H...","..HHH....TTSSGSSSSGSSTT....HHH..","...H...TTSGSSSSSSSSSSGSTT...H...","......TSSSSSSSSSSSSSSSSSST......",".....TSSSSSSSSSSSSSSSSSSSST.....","....TSSSTTTTSSSSSSSSTTTTSSST....","....TSSTCCCCTSSSSSSTCCCCTSST....","...TSSSTCCTCTSSSSSSTCCTCTSSST...","...TSSSTCTTCTSSSSSSTCTTCTSSST...","..TSSSSTCCCCTSSSSSSTCCCCTSSSST..","..TSSSSSTTTTSSSSSSSSTTTTSSSSST..","..TSSSSSSSSSSSSSSSSSSSSSSSSSST..","..TSSSHHHSSSSSSSSSSSSSSHHHSSST..","..TSSSSSSSSSTTTTTTTTSSSSSSSSST..","..TSSSSSSSSSSTHHHHTSSSSSSSSSST..","..TSGSSSSSSSSSTTTTSSSSSSSSSGST..","...TSSSSSSSSMMMMMMMMSSSSSSSST...","...TSSSSSSMMMMMMMMMMMMSSSSSST...","....TGSSSMMMMMMMMMMMMMMSSSGT....","....TSSSSMMMMMMMMMMMMMMSSSST....",".....TSSSMMMMMMMMMMMMMMSSST.....","......TSSMMMMMMMMMMMMMMSST......",".....TSSSSMMMMMMMMMMMMSSST......","....TSSSSSSSMMMMMMMMSSSSSST.....","....TSSSSSSSSTTTTTSSSSSSSST.....",".....TGSSSSGT.....TSGSSSST......","......TTTTTT.......TTTTTT.......","................................","................................"]]},Vt={id:"frog-tranquila",frames:[["................................","................................","................................","...........TTTTTTTTTT...........",".........TTSSGSSSSGSSTT.........",".......TTSGSSSSSSSSSSGSTT.......","......TSSSSSSSSSSSSSSSSSST......",".....TSSSSSSSSSSSSSSSSSSSST.....","....TSSSSSSSSSSSSSSSSSSSSSST....","....TSSSSSSSSSSSSSSSSSSSSSST....","...TSSSSSSSSSSSSSSSSSSSSSSSST...","...TSSSTSSSSTSSSSSSTSSSSTSSST...","..TSSSSSTTTTSSSSSSSSTTTTSSSSST..","..TSSSSSSSSSSSSSSSSSSSSSSSSSST..","..TSSSSSSSSSSSSSSSSSSSSSSSSSST..","..TSSSHHHSSSSSSSSSSSSSSHHHSSST..","..TSSSSSSSSSSTSSSSTSSSSSSSSSST..","..TSSSSSSSSSSSTTTTSSSSSSSSSSST..","..TSGSSSSSSSSSSSSSSSSSSSSSSGST..","...TSSSSSSSSMMMMMMMMSSSSSSSST...","...TSSSSSSMMMMMMMMMMMMSSSSSST...","....TGSSSMMMMMMMMMMMMMMSSSGT....","....TSSSSMMMMMMMMMMMMMMSSSST....",".....TSSSMMMMMMMMMMMMMMSSST.....","......TSSMMMMMMMMMMMMMMSST......",".....TSSSSMMMMMMMMMMMMSSST......","....TSSSSSSSMMMMMMMMSSSSSST.....","....TSSSSSSSSTTTTTSSSSSSSST.....",".....TGSSSSGT.....TSGSSSST......","......TTTTTT.......TTTTTT.......","................................","................................"]]},za={id:"frog-cansada",frames:[["................................","..........................PPPP..","............................P...","...........TTTTTTTTTT......P....",".........TTSSGSSSSGSSTT...PPPP..",".......TTSGSSSSSSSSSSGSTT.......","......TSSSSSSSSSSSSSSSSSST......",".....TSSSSSSSSSSSSSSSSSSSST.....","....TSSSSSSSSSSSSSSSSSSSSSST....","....TSSSSSSSSSSSSSSSSSSSSSST....","...TSSSTTTTTTSSSSSSTTTTTTSSST...","...TSSSTCTTCTSSSSSSTCTTCTSSST...","..TSSSSTCCCCTSSSSSSTCCCCTSSSST..","..TSSSSSTTTTSSSSSSSSTTTTSSSSST..","..TSSSSSGGGGSSSSSSSSGGGGSSSSST..","..TSSSHHHSSSSSSSSSSSSSSHHHSSST..","..TSSSSSSSSSSSSTTSSSSSSSSSSSST..","..TSSSSSSSSSSSTHHTSSSSSSSSSSST..","..TSGSSSSSSSSSSTTSSSSSSSSSSGST..","...TSSSSSSSSMMMMMMMMSSSSSSSST...","...TSSSSSSMMMMMMMMMMMMSSSSSST...","....TGSSSMMMMMMMMMMMMMMSSSGT....","....TSSSSMMMMMMMMMMMMMMSSSST....",".....TSSSMMMMMMMMMMMMMMSSST.....","......TSSMMMMMMMMMMMMMMSST......",".....TSSSSMMMMMMMMMMMMSSST......","....TSSSSSSSMMMMMMMMSSSSSST.....","....TSSSSSSSSTTTTTSSSSSSSST.....",".....TGSSSSGT.....TSGSSSST......","......TTTTTT.......TTTTTT.......","................................","................................"]]},La={id:"frog-tensa",frames:[["................................","................................","................................","...........TTTTTTTTTT.......T...",".........TTSSGSSSSGSSTT....TAT..",".......TTSGSSSSSSSSSSGSTT..TAT..","......TTTSSSSSSSSSSSSSSTTT..T...",".....TSSSTTTTSSSSSSTTTTSSST.....","....TSSSTTTTSSSSSSSSTTTTSSST....","....TSSTCCCCTSSSSSSTCCCCTSST....","...TSSSTCCCCTSSSSSSTCCCCTSSST...","...TSSSTCTTCTSSSSSSTCTTCTSSST...","..TSSSSTCCCCTSSSSSSTCCCCTSSSST..","..TSSSSSTTTTSSSSSSSSTTTTSSSSST..","..TSSSSSSSSSSSSSSSSSSSSSSSSSST..","..TSSSHHHSSSSSSSSSSSSSSHHHSSST..","..TSSSSSSSSSSSSSSSSSSSSSSSSSST..","..TSSSSSSSSSTSTSTSTSSSSSSSSSST..","..TSGSSSSSSSSTSTSTSTSSSSSSSGST..","...TSSSSSSSSMMMMMMMMSSSSSSSST...","...TSSSSSSMMMMMMMMMMMMSSSSSST...","....TGSSSMMMMMMMMMMMMMMSSSGT....","....TSSSSMMMMMMMMMMMMMMSSSST....",".....TSSSMMMMMMMMMMMMMMSSST.....","......TSSMMMMMMMMMMMMMMSST......",".....TSSSSMMMMMMMMMMMMSSST......","....TSSSSSSSMMMMMMMMSSSSSST.....","....TSSSSSSSSTTTTTSSSSSSSST.....",".....TGSSSSGT.....TSGSSSST......","......TTTTTT.......TTTTTT.......","................................","................................"]]},ja={id:"frog-triste",frames:[["................................","................................","................................","...........TTTTTTTTTT...........",".........TTSSGSSSSGSSTT.........",".......TTSGSSSSSSSSSSGSTT.......","......TSSTTTTSSSSSSTTTTSST......",".....TSTTSSSSSSSSSSSSSSTTST.....","....TSSSTTTTSSSSSSSSTTTTSSST....","....TSSTCCCCTSSSSSSTCCCCTSST....","...TSSSTCCTCTSSSSSSTCCTCTSSST...","...TSSSTCTTCTSSSSSSTCTTCTSSST...","..TSSSSTAAAATSSSSSSTAAAATSSSST..","..TSSSSSTTTTSSSSSSSSTTTTSSSSST..","..TSSSSSSASSSSSSSSSSSSASSSSSST..","..TSSSHHHASSSSSSSSSSSSAHHHSSST..","..TSSSSSSASSSSSSSSSSSSASSSSSST..","..TSSSSSSSSSSSTTTTSSSSSSSSSSST..","..TSGSSSSSSSSTSSSSTSSSSSSSSGST..","...TSSSSSSSSMMMMMMMMSSSSSSSST...","...TSSSSSSMMMMMMMMMMMMSSSSSST...","....TGSSSMMMMMMMMMMMMMMSSSGT....","....TSSSSMMMMMMMMMMMMMMSSSST....",".....TSSSMMMMMMMMMMMMMMSSST.....","......TSSMMMMMMMMMMMMMMSST......",".....TSSSSMMMMMMMMMMMMSSST......","....TSSSSSSSMMMMMMMMSSSSSST.....","....TSSSSSSSSTTTTTSSSSSSSST.....",".....TGSSSSGT.....TSGSSSST......","......TTTTTT.......TTTTTT.......","................................","................................"]]},rt={contenta:Ga,tranquila:Vt,cansada:za,tensa:La,triste:ja},sa=["................................","................................","...........TTTTTTTTTT...........",".........TTSSGSSSSGSSTT.........",".......TTSGSSSSSSSSSSGSTT.......","......TSSSSSSSSSSSSSSSSSST......",".....TSSSSSSSSSSSSSSSSSSSST.....","....TSSSSSSSSSSSSSSSSSSSSSST....","....TSSSTSSSSTSSSSSSTSSSSTSSST..","...TSSSSSTTTTSSSSSSSSTTTTSSSSST.","..TSSSSSSSSSSSSSSSSSSSSSSSSSSST.","..TSSSHHHSSSSSSSSSSSSSSHHHSSSST.","..TSSSSSSSSSTTTTTTTTSSSSSSSSSST.","..TSSSSSSSSSSSTTTTSSSSSSSSSSSST.",".TSGSSSSSSSSSSSSSSSSSSSSSSSSGST.",".TSSSSSSSSMMMMMMMMMMSSSSSSSSST..","TSSSSSSSMMMMMMMMMMMMMMSSSSSSSST.","TSSSSSSMMMMMMMMMMMMMMMMSSSSSSST.","TSSGSSMMMMMMMMMMMMMMMMMMSSGSSST.","TSSSSMMMMMMMMMMMMMMMMMMMMSSSSST.","TSSSSMMMMMMMMMMMMMMMMMMMMSSSSST.","TSSGSSMMMMMMMMMMMMMMMMMMSSGSSST.",".TSSSSMMMMMMMMMMMMMMMMMMSSSSST..",".TSSSSSSMMMMMMMMMMMMMMSSSSSSST..","..TSSSSSSMMMMMMMMMMMMSSSSSSST...","...TGSSSSSSMMMMMMMMSSSSSSGT.....","...TSSSSSSSSSTTTTSSSSSSSSST.....","....TSSSSSSGT....TGSSSSSSST.....",".....TTTTTT........TTTTTT.......","................................","................................","................................"],ca=["................................","................................","................................","...........TTTTTTTTTT...........",".........TTSSGSSSSGSSTT.........",".......TTSGSSSSSSSSSSGSTT.......","......TSSSSSSSSSSSSSSSSSST......",".....TSSSSSSSSSSSSSSSSSSSST.....","....TSSSSSSSSSSSSSSSSSSSSSST....","....TSSSTSSSSTSSSSSSTSSSSTSSST..","...TSSSSSTTTTSSSSSSSSTTTTSSSSST.","..TSSSSSSSSSSSSSSSSSSSSSSSSSSST.","..TSSSHHHSSSSSSSSSSSSSSHHHSSSST.","..TSSSSSSSSSSSTTTTSSSSSSSSSSSST.","..TSSSSSSSSSSTACASTSSSSSSSSSSST.","..TSGSSSSSSSSSTTTTSSSSSSSSSGST..","...TSSSSSSSSMMMMMMMMSSSSSSSST...","...TSSSSSSMMMMMMMMMMMMSSSSSST...","....TGSSSMMMMMMMMMMMMMMSSSGT....","....TSSSSMMMMMMMMMMMMMMSSSST....",".....TSSSMMMMMMMMMMMMMMSSST.....","......TSSMMMMMMMMMMMMMMSST......",".....TSSSSMMMMMMMMMMMMSSST......","....TSSSSSSSMMMMMMMMSSSSSST.....","....TSSSSSSSSTTTTTSSSSSSSST.....",".....TGSSSSGT.....TSGSSSST......","......TTTTTT.......TTTTTT.......","................................","................................","................................","................................","................................"],Ba={id:"frog-inhaling",frames:[sa]},Ra={id:"frog-exhaling",frames:[ca]},qa={id:"frog-breathing",frames:[sa,ca],frameMs:4e3},Ia={id:"frog-stretching",frames:[["....TTTT..............TTTT......","...TSSSSST..........TSSSSST.....","...TSGSSST..........TSGSSST.....","....TSSSSST........TSSSSST......",".....TSSSSSTTTTTTTTSSSSST.......","......TTSGSSGSSSSGSSTTST........","......TSSSSSSSSSSSSSSSSSST......",".....TSSSSSSSSSSSSSSSSSSSST.....","....TSSSSSSSSSSSSSSSSSSSSSST....","....TSSSTSSSSTSSSSSSTSSSSTSSST..","...TSSSSSTTTTSSSSSSSSTTTTSSSSST.","..TSSSSSSSSSSSSSSSSSSSSSSSSSSST.","..TSSSHHHSSSSSSSSSSSSSSHHHSSSST.","..TSSSSSSSSSTTTTTTTTSSSSSSSSSST.","..TSSSSSSSSSTHHHHHHTSSSSSSSSSST.","..TSGSSSSSSSSTTTTTTSSSSSSSSGST..","...TSSSSSSSSMMMMMMMMSSSSSSSST...","...TSSSSSSMMMMMMMMMMMMSSSSSST...","....TGSSSMMMMMMMMMMMMMMSSSGT....","....TSSSSMMMMMMMMMMMMMMSSSST....",".....TSSSMMMMMMMMMMMMMMSSST.....","......TSSMMMMMMMMMMMMMMSST......",".....TSSSSMMMMMMMMMMMMSSST......","....TSSSSSSSMMMMMMMMSSSSSST.....","....TSSSSSSSSTTTTTSSSSSSSST.....",".....TGSSSSGT.....TSGSSSST......","......TTTTTT.......TTTTTT.......","................................","................................","................................","................................","................................"]]},Da={id:"frog-ears",frames:[["................................","................................","................................","...........TTTTTTTTTT...........",".........TTSSGSSSSGSSTT.........",".......TTSGSSSSSSSSSSGSTT.......","......TSSSSSSSSSSSSSSSSSST......","..TTTTSSSSSSSSSSSSSSSSSSSSTTTT..",".TSSSSTSSSSSSSSSSSSSSSSSSSTSSSST",".TSGSSTTSSSSTSSSSSSTSSSSTTTSGSST",".TSSSSSTTTTTSSSSSSSSTTTTTSSSSST.","..TSSSTSSSSSSSSSSSSSSSSSSSTSSST.","...TTTSSHHHSSSSSSSSSSSSHHHSSTTT.","....TSSSSSSSSTTTTTTSSSSSSSSST...","....TSSSSSSSSTSSSSTSSSSSSSSST...","....TSGSSSSSSSTTTTSSSSSSSSGST...",".....TSSSSSSMMMMMMMMSSSSSSST....",".....TSSSSSMMMMMMMMMMSSSSST.....",".....TGSSSMMMMMMMMMMMMSSSGT.....",".....TSSSSMMMMMMMMMMMMSSSST.....","......TSSSMMMMMMMMMMMMSSST......",".......TSSMMMMMMMMMMMMSST.......","......TSSSSMMMMMMMMMMMSSST......",".....TSSSSSSSMMMMMMMMSSSSSST....",".....TSSSSSSSSTTTTTSSSSSSSST....","......TGSSSSGT.....TSGSSSST.....",".......TTTTTT.......TTTTTT......","................................","................................","................................","................................","................................"]]},Pa={id:"neutral-leaf",frames:[[".......TT.......","......TVVT......",".....TVVVVT.....","....TVVMMVVT....","...TVVMMMMVVT...","..TVVMMTTMMVVT..","..TVVMMTTMMVVT..",".TVVVMMTTMMVVVT.",".TVVVMMTTMMVVVT.","..TVVMMTTMMVVT..","..TVVMMTTMMVVT..","...TVVMMMMVVT...","....TVVMMVVT....",".....TVTTT......","......TT........","................"]]};function pe(t){var r;const e=t.frames[0].length,a=((r=t.frames[0][0])==null?void 0:r.length)??0;return{def:t,currentFrame:0,lastFrameTime:0,width:a,height:e}}function Lt(t,e){if(t.def.frames.length<=1)return;const a=t.def.frameMs??600;e-t.lastFrameTime>=a&&(t.currentFrame=(t.currentFrame+1)%t.def.frames.length,t.lastFrameTime=e)}function te(t,e,a,r,o=1){const i=e.def.frames[e.currentFrame],d=Math.max(1,Math.floor(o));for(let s=0;s<i.length;s++){const S=i[s];for(let c=0;c<S.length;c++){const l=S[c],T=ya[l]??"transparent";T!=="transparent"&&(t.fillStyle=ie[T],t.fillRect(a+c*d,r+s*d,d,d))}}}function Oe(t,e){const a=document.createElement("canvas"),r=window.devicePixelRatio??1;a.width=Math.round(t*r),a.height=Math.round(e*r),a.style.width=`${t}px`,a.style.height=`${e}px`,a.style.imageRendering="pixelated";const o=a.getContext("2d");return o.scale(r,r),{canvas:a,ctx:o}}class _t{constructor(e){ut(this,"instances",new Set);ut(this,"rafId",null);ut(this,"onTick");ut(this,"reducedMotion");this.onTick=e,this.reducedMotion=window.matchMedia("(prefers-reduced-motion: reduce)").matches}add(e){this.instances.add(e)}remove(e){this.instances.delete(e)}start(){if(this.rafId!==null)return;const e=a=>{var r;if(!this.reducedMotion)for(const o of this.instances)Lt(o,a);(r=this.onTick)==null||r.call(this,a),this.rafId=requestAnimationFrame(e)};this.rafId=requestAnimationFrame(e)}stop(){this.rafId!==null&&(cancelAnimationFrame(this.rafId),this.rafId=null)}}function Va(t){t.innerHTML="";const e=document.createElement("section");e.className="home-screen",e.setAttribute("role","main"),e.setAttribute("aria-label","Pantalla de inicio de RoRoGarden");const a=document.createElement("style");a.textContent=`
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
  `,document.head.appendChild(a);const r=document.createElement("header");r.className="home-header";const o=document.createElement("h1");o.className="home-title",o.textContent="RoRoGarden";const i=document.createElement("p");i.className="home-subtitle",i.textContent="Tu rincón para aflojar un ratito",r.appendChild(o),r.appendChild(i);const d=document.createElement("div");d.className="home-scene",d.setAttribute("aria-hidden","true");const s=5,S=28,c=24,{canvas:l,ctx:T}=Oe(S*s,c*s),M=pe(oa),x=pe(ra),v=0,p=11,m=4,h=2,b=new _t(()=>{T.clearRect(0,0,S*s,c*s),te(T,x,v*s,p*s,s),te(T,M,m*s,h*s,s)});b.add(M),b.add(x),b.start(),d.appendChild(l);const f=document.createElement("footer");f.className="home-footer";const g=document.createElement("button");g.className="btn-enter",g.textContent="Entrar al jardín",g.setAttribute("aria-label","Entrar al jardín — próximamente"),g.addEventListener("click",()=>{g.innerHTML="";const A=K("frog",{size:14});A.style.marginRight="var(--space-xs)",g.appendChild(A),g.appendChild(document.createTextNode(` ${n.home.loading}`)),setTimeout(()=>{window.location.hash="#/jardin"},350)});const y=document.createElement("p");y.className="home-note";const k=K("heart",{size:12});k.style.marginRight="var(--space-xs)",y.appendChild(k),y.appendChild(document.createTextNode(n.home.peaceNote));const w=document.createElement("p");w.className="desktop-hint",w.textContent="Presioná Enter o Espacio para interactuar",f.appendChild(g),f.appendChild(y),f.appendChild(w),e.appendChild(r),e.appendChild(d),e.appendChild(f),t.appendChild(e),T.clearRect(0,0,S*s,c*s),te(T,x,v*s,p*s,s),te(T,M,m*s,h*s,s);const N=A=>{(A.key==="Enter"||A.key===" ")&&document.activeElement!==g&&(A.preventDefault(),g.click())};return window.addEventListener("keydown",N),()=>{window.removeEventListener("keydown",N),b.stop(),a.remove()}}const _a=[{id:"antes-de-entrar",name:"Antes de entrar",enabled:!1,time:"07:45",days:[1,2,3,4,5],eventText:"Una pausa para mí"},{id:"media-jornada",name:"Pausa de media jornada",enabled:!1,time:"12:30",days:[1,2,3,4,5],eventText:"Una pausa para mí"},{id:"cierre-dia",name:"Cierre del día",enabled:!1,time:"18:00",days:[1,2,3,4,5],eventText:"Una pausa para mí"}],Oa={1:"MO",2:"TU",3:"WE",4:"TH",5:"FR",6:"SA",7:"SU"};function $a(t){return typeof t!="string"?!1:t.match(/^([01]\d|2[0-3]):([0-5]\d)$/)!==null}function la(t){return!(!t||typeof t!="object"||!["antes-de-entrar","media-jornada","cierre-dia"].includes(t.id)||typeof t.enabled!="boolean"||!$a(t.time)||!Array.isArray(t.days)||t.days.length===0||!t.days.every(e=>typeof e=="number"&&e>=1&&e<=7)||typeof t.eventText!="string"||t.eventText.length===0||t.eventText.length>40)}function Jt(t){return t.replace(/\\/g,"\\\\").replace(/;/g,"\\;").replace(/,/g,"\\,").replace(/\r?\n/g,"\\n")}function Wa(t){const e=new TextEncoder;if(e.encode(t).length<=75)return t;const r=[];let o=[],i=!0;const d=75;for(const s of t){const S=Array.from(e.encode(s)),c=i?d:d-1;if(o.length+S.length>c){const T=new TextDecoder().decode(new Uint8Array(o));r.push(i?T:" "+T),o=[...S],i=!1}else o.push(...S)}if(o.length>0){const S=new TextDecoder().decode(new Uint8Array(o));r.push(i?S:" "+S)}return r.join(`\r
`)}function Fa(t){const e=t.filter(i=>i.enabled),a=["BEGIN:VCALENDAR","VERSION:2.0","PRODID:-//RoRoGarden//NONSGML RoRoGarden PWA//ES","CALSCALE:GREGORIAN","METHOD:PUBLISH"],r={1:"20260105",2:"20260106",3:"20260107",4:"20260108",5:"20260109",6:"20260110",7:"20260111"};for(const i of e){const[d,s]=i.time.split(":"),S=parseInt(d,10),c=parseInt(s,10);let l=c+10,T=S;l>=60&&(l-=60,T=(T+1)%24);const M=String(S).padStart(2,"0"),x=String(c).padStart(2,"0"),v=String(T).padStart(2,"0"),p=String(l).padStart(2,"0"),m=[...i.days].sort((A,G)=>A-G),h=m[0]??1,b=r[h],f=`${b}T${M}${x}00`,g=`${b}T${v}${p}00`,y=m.map(A=>Oa[A]).join(","),k=Jt(i.eventText),w=Jt("Un ratito para aflojar. RoRoGarden te acompaña."),N=`roro-reminder-${i.id}@rorogarden.app`;a.push("BEGIN:VEVENT"),a.push(`UID:${N}`),a.push("DTSTAMP:20261102T000000Z"),a.push(`DTSTART:${f}`),a.push(`DTEND:${g}`),a.push(`RRULE:FREQ=WEEKLY;BYDAY=${y}`),a.push(`SUMMARY:${k}`),a.push(`DESCRIPTION:${w}`),a.push("TRANSP:TRANSPARENT"),a.push("BEGIN:VALARM"),a.push("ACTION:DISPLAY"),a.push(`DESCRIPTION:${k}`),a.push("TRIGGER:PT0S"),a.push("END:VALARM"),a.push("END:VEVENT")}return a.push("END:VCALENDAR"),a.map(i=>Wa(i)).join(`\r
`)+`\r
`}function Ua(t,e,a,r,o){if(r)return null;const i=e.getDay(),d=i===0?7:i,s=e.getHours()*60+e.getMinutes();for(const S of t){if(!S.enabled||!S.days.includes(d)||a[S.id]===o)continue;const[c,l]=S.time.split(":").map(M=>parseInt(M,10)),T=c*60+l;if(s>=T&&s<T+15)return S}return null}const Tt={WINDOW_DAYS:10,MIN_DIFFICULT_DAYS_IN_WINDOW:6,CONSECUTIVE_DIFFICULT_RECENT:3,COOLDOWN_DAYS:21};function Xt(t){return t==="triste"||t==="tensa"}function Qt(t,e){const a=t.filter(r=>r.date===e&&(r.type==="checkin"||r.type==="diario")).sort((r,o)=>o.createdAt.localeCompare(r.createdAt));for(const r of a)if("mood"in r.data&&r.data.mood)return r.data.mood;return null}function Ya(t,e){const a=new Date(`${t}T00:00:00`),r=new Date(`${e}T00:00:00`),o=Math.abs(a.getTime()-r.getTime());return Math.round(o/(1e3*60*60*24))}function Ja({entries:t,currentDateStr:e,lastNoticeDateStr:a,supportSuggestionsEnabled:r,vacationMode:o}){if(!r||o||a&&Ya(e,a)<Tt.COOLDOWN_DAYS)return!1;const i=Array.from(new Set(t.filter(c=>(c.type==="checkin"||c.type==="diario")&&c.date<=e).map(c=>c.date))).sort((c,l)=>l.localeCompare(c));if(i.length<Tt.CONSECUTIVE_DIFFICULT_RECENT)return!1;const d=i.slice(0,Tt.CONSECUTIVE_DIFFICULT_RECENT);for(const c of d){const l=Qt(t,c);if(!l||!Xt(l))return!1}let s=0;const S=new Date(`${e}T00:00:00`);for(let c=0;c<Tt.WINDOW_DAYS;c++){const l=new Date(S);l.setDate(l.getDate()-c);const T=l.getFullYear(),M=String(l.getMonth()+1).padStart(2,"0"),x=String(l.getDate()).padStart(2,"0"),v=`${T}-${M}-${x}`,p=Qt(t,v);p&&Xt(p)&&s++}return s>=Tt.MIN_DIFFICULT_DAYS_IN_WINDOW}const at=4,gt="roro_entry_",it="roro_garden_state",da="RoRoGarden",Xa={1:t=>({...t,version:2}),2:t=>({...t,version:3}),3:t=>({...t,version:4})},Mt={version:4,obtainedItemIds:[],placedDecorations:[],frogName:null,lastGiftDate:null,gardenAnimationsEnabled:!0,hemisphere:"sur",frogNameAnswered:!1,showWeekInGarden:!0,weekShowWeekend:!1,showPatterns:!1,dismissedPatternIds:[],reminders:_a,vacationMode:!1,lastSupportNoticeDate:null,supportSuggestionsEnabled:!0,dismissedInAppReminders:{}},nt=new Map;function Ze(){try{if(typeof window>"u"||!window.localStorage)return!1;const t="__roro_test__";return window.localStorage.setItem(t,"1"),window.localStorage.removeItem(t),!0}catch{return!1}}function bt(t=new Date){const e=t.getFullYear(),a=String(t.getMonth()+1).padStart(2,"0"),r=String(t.getDate()).padStart(2,"0");return`${e}-${a}-${r}`}function Ot(t,e,a){return a?`${t}_${e}_${a}`:`${t}_${e}`}function pa(t,e,a=bt()){const r=Date.now().toString(),o=new Date().toISOString(),i={id:Ot(t,a,r),version:at,type:t,date:a,createdAt:o,updatedAt:o,data:e};return st(i)}function jt(t){let e={...t},a=Number(e.version??1);for(;a<at;){const r=Xa[a];typeof r=="function"&&(e=r(e)),a+=1,e.version=a}return e}function st(t){try{const e={...t,version:at,updatedAt:new Date().toISOString()},a=`${gt}${e.id}`,r=JSON.stringify(e);if(Ze()?window.localStorage.setItem(a,r):nt.set(a,r),typeof document<"u")try{document.dispatchEvent(new CustomEvent("roro:dataChanged"))}catch{}return{success:!0,data:e}}catch{return{success:!1,error:"No se pudo guardar el registro localmente. El jardín seguirá funcionando."}}}function xt(){try{const t=[];if(Ze())for(let e=0;e<window.localStorage.length;e++){const a=window.localStorage.key(e);if(a&&a.startsWith(gt)){const r=window.localStorage.getItem(a);if(r)try{const o=JSON.parse(r);t.push(jt(o))}catch{}}}else for(const[e,a]of nt.entries())if(e.startsWith(gt))try{t.push(jt(JSON.parse(a)))}catch{}return t.sort((e,a)=>e.date!==a.date?a.date.localeCompare(e.date):a.createdAt.localeCompare(e.createdAt)),{success:!0,data:t}}catch{return{success:!1,data:[],error:"No se pudieron recuperar los registros guardados."}}}function Qa(t){try{const e=`${gt}${t}`;return Ze()?window.localStorage.removeItem(e):nt.delete(e),{success:!0,data:!0}}catch{return{success:!1,data:!1,error:"No se pudo eliminar el registro."}}}function Za(){try{if(Ze()){const t=[];for(let e=0;e<window.localStorage.length;e++){const a=window.localStorage.key(e);a&&a.startsWith(gt)&&t.push(a)}for(const e of t)window.localStorage.removeItem(e)}return nt.clear(),ma(),{success:!0,data:!0}}catch{return{success:!1,data:!1,error:"No se pudieron borrar todos los registros."}}}function He(){try{let t=null;if(Ze()?t=window.localStorage.getItem(it):t=nt.get(it)??null,!t)return{...Mt};const e=JSON.parse(t);return{...Mt,...e,version:at}}catch{return{...Mt}}}function X(t){try{const e={...t,version:at},a=JSON.stringify(e);if(Ze()?window.localStorage.setItem(it,a):nt.set(it,a),typeof document<"u")try{document.dispatchEvent(new CustomEvent("roro:dataChanged"))}catch{}return{success:!0,data:e}}catch{return{success:!1,error:"No se pudo guardar el jardín."}}}function ma(){try{return Ze()?window.localStorage.removeItem(it):nt.delete(it),{success:!0,data:!0}}catch{return{success:!1,data:!1,error:"No se pudo reiniciar el jardín."}}}function Ka(){try{const t=xt();if(!t.success||!t.data)return{success:!1,error:"Error al reunir los registros para exportar."};const e=He(),a={app:da,version:at,exportedAt:new Date().toISOString(),entries:t.data,gardenState:e};return{success:!0,data:JSON.stringify(a,null,2)}}catch{return{success:!1,error:"No se pudo generar el archivo de respaldo."}}}function en(t){try{let e;try{e=JSON.parse(t)}catch{return{success:!1,error:"El archivo no contiene un JSON válido."}}if(!e||e.app!==da||!Array.isArray(e.entries))return{success:!1,error:"El archivo no corresponde a un respaldo válido de RoRoGarden."};for(const o of e.entries)if(!o||typeof o!="object"||!o.id||!o.type||!o.date||!o.data)return{success:!1,error:"El archivo contiene registros incompletos o corruptos. No se modificaron tus datos."};let a=null;if(e.gardenState&&typeof e.gardenState=="object"){const o=e.gardenState,i=!Array.isArray(o.placedDecorations)||o.placedDecorations.every(l=>typeof l.id=="string"&&typeof l.catalogId=="string"&&typeof l.x=="number"&&l.x>=0&&l.x<=4&&typeof l.y=="number"&&l.y>=0&&l.y<=4),d=o.frogName===null||typeof o.frogName=="string"&&o.frogName.length<=20,s=!("reminders"in o)||Array.isArray(o.reminders)&&o.reminders.every(l=>la(l)),S=(o.weekShowWeekend===void 0||typeof o.weekShowWeekend=="boolean")&&(o.showWeekInGarden===void 0||typeof o.showWeekInGarden=="boolean")&&(o.showPatterns===void 0||typeof o.showPatterns=="boolean")&&(o.vacationMode===void 0||typeof o.vacationMode=="boolean")&&(o.supportSuggestionsEnabled===void 0||typeof o.supportSuggestionsEnabled=="boolean"),c=o.dismissedPatternIds===void 0||Array.isArray(o.dismissedPatternIds)&&o.dismissedPatternIds.every(l=>typeof l=="string");if(!i||!d||!s||!S||!c)return{success:!1,error:"La configuración del jardín en el archivo no es válida. No se modificaron tus datos."};a={...Mt,...o,version:at}}let r=0;for(const o of e.entries){const i=jt(o);st(i).success&&r++}return a&&X(a),{success:!0,data:{imported:r}}}catch{return{success:!1,error:"Ocurrió un error inesperado al importar el respaldo."}}}function tn(t=new Date){const e=t.getHours();return e>=6&&e<9?"amanecer":e>=9&&e<19?"dia":e>=19&&e<21?"atardecer":"noche"}function an(t=new Date,e="sur"){const a=t.getMonth()+1,r=t.getDate(),o=a*100+r;let i;return o>=321&&o<=620?i="otono":o>=621&&o<=920?i="invierno":o>=921&&o<=1220?i="primavera":i="verano",e==="sur"?i:{verano:"invierno",otono:"primavera",invierno:"verano",primavera:"otono"}[i]}function nn(t=new Date,e="sur"){const a=tn(t),r=an(t,e),o=a==="noche";let i,d,s,S;switch(a){case"amanecer":i="menta",d="crema",s="turquesa";break;case"dia":i="azulNiebla",d="celesteAgua",s="celesteAgua";break;case"atardecer":i="acento",d="salvia",s="aguaProfunda";break;case"noche":default:i="tinta",d="aguaProfunda",s="aguaProfunda";break}switch(r){case"primavera":S="sapo";break;case"verano":S="bosque";break;case"otono":S="acento";break;case"invierno":S="musgo";break}const c={primavera:"Primavera",verano:"Verano",otono:"Otoño",invierno:"Invierno"},l={amanecer:"Amanecer",dia:"Día",atardecer:"Atardecer",noche:"Noche"};return{timeOfDay:a,season:r,hemisphere:e,skyColors:{top:ie[i],bottom:ie[d]},waterColor:ie[s],foliageColor:ie[S],isNight:o,label:`${c[r]} · ${l[a]}`}}const on={visitantes:"Visitantes",hongos:"Hongos",plantas:"Plantas",agua:"Agua",cielo:"Cielo",cositas:"Cositas"},rn={id:"vis-sapito-menta",frames:[["................","................","................","......TTTT......","....TTMGGMTT....","...TTTMMMMTTT...","..TTCTTMMTCTTT..","..TTTTTMMTTTTT..",".TMMTTMMMMTTMMT.",".THHMMMMMMMMHHT.","..TMMMTMMTMMMT..","..TMMMMTTMMMMT..","...TMCCCCCCMT...","..TMCCCCCCCCMT..","...TTTTTTTTTT...","................"],["................","................","................","......TTTT......","....TTMGGMTT....","...TMMMMMMMMT...","..TMTTMMMMTTMT..","..TTMMTMMTMMTT..",".TMMMMMMMMMMMMT.",".THHMMMMMMMMHHT.","..TMMMTMMTMMMT..","..TMMMMTTMMMMT..","...TMCCCCCCMT...","..TMCCCCCCCCMT..","...TTTTTTTTTT...","................"]],frameMs:1400},sn={id:"vis-sapito-dorado",frames:[["................","................","................","......TTTT......","....TTHCCHTT....","...TTTHHHHTTT...","..TTCTTHHTCTTT..","..TTTTTHHTTTTT..",".THHTTHHHHTTHHT.",".THHHHHHHHHHHHT.","..THHHTHHTHHHT..","..THHHHTTHHHHT..","...THCCCCCCHT...","..THCCCCCCCCHT..","...TTTTTTTTTT...","................"]]},cn={id:"vis-rana-lunita",frames:[["................","..........H.....",".............H..","......TTTT......","....TTNPPNTT....","...TTTNNNNTTT...","..TTTCTNNTTCTT..","..TTTTTNNTTTTT..",".TNNTTNNNNTTNNT.",".THHNNNNNNNNHHT.","..TNNNTNNTNNNT..","..TNNNNTTNNNNT..","...TNMMMMMMNT...","..TNMMMMMMMMNT..","...TTTTTTTTTT...","................"]]},ln={id:"vis-sapo-abuelo",frames:[["............PPP.",".............P..","............PPP.","......TTTT......","...CCCCGGCCCC...","..TGGGGGGGGGGT..","..TGTTGGGGTTGT..",".TGTGGTGGTGGTGT.",".TGGGGGGGGGGGGT.",".THHGGGGGGGGHHT.",".TGGGGTGGTGGGGT.","..TGGGGTTGGGGT..","..TGGSSSSSSGGT..","..TGSSSSSSSSGT..","...TTTTTTTTTT...","................"]]},dn={id:"vis-sapito-bebe",frames:[["................","................","................","...TTT....TTT...","..TSCCT..TCCST..","..TSCTSTTSCTST..","...TSSSSSSSST...","...TSSSSSSSST...","...HSSSSSSSSH...","...TSSTSSTSST...","...TSSSTTSSST...",".AAAAAAAAAAAAAA.",".AAUUAAUUAAUUAA.","..AUAAUAAUAAUA..","................","................"]]},pn={id:"hongo-calido",frames:[["................",".....TTTTTT.....","...TTHHHHHHTT...","..THCCHHHHHHHT..","..TCHHHHHHHHHT..",".THHHHHHHHHHHHT.",".TTTTTTTTTTTTTT.","..CCTCCTCCTCCT..","...TTTTTTTTTT...","....TTMMMMTT....","....TMTMMTMT....","...TMHMTTMHMT...","...TMMMMMMMMT...","....TTMMMMTT....","......TTTT......","................"]]},mn={id:"hongo-doble",frames:[["................","...TTTT.........",".TTHHHHTT.......",".THCCHHHT.......","THCHHHHHHT......","TTTTTTTTTT......",".CCTCCTCC..TTT..","..TTTTTT..TCCCT.","...TMMT..TTTTTTT","..TTMMTT..HHTHH.","..TTMMTT...TTT..","..HMTTMH..TTMMT.","..TMMMMT..TMMMT.","..TTTTTTTTTTTT..","TTGGGGGGGGGGGGTT","..TTTTTTTTTTTT.."]]},Sn={id:"hongo-crema",frames:[["................","................",".....TTTTTT.....","...TTCCCCHCTT...","..TCCHCCCCCCCT..","..THCCCCCCCHCT..","..TTTTTTTTTTTT..","...HHTHHTHHTH...","....TTTTTTTT....","....TTMMMMTT....","....TMTMMTMT....","...TMHMTTMHMT...","....TMMMMMMT....","....TTMMMMTT....","......TTTT......","................"]]},un={id:"hongo-musgoso",frames:[["................",".....TTTTTT.....","...TTGGGGGGTT...","..TGVVGGGGGGGT..","..TGGGGGGGVGGT..",".TGGGGVGGGGGGGT.",".TTTTTTTTTTTTTT.","..VVTVVTVVTVVT..","...TTTTTTTTTT...","....TSTSSTST....","...TSHSTTSHST...","...TSSSSSSSST...","....TSSSSSST....","..TTTTTTTTTTTT..",".TTGGGGGGGGGGTT.","...TTTTTTTTTT..."]]},Tn={id:"planta-juncos",frames:[["....TT....TT....","...THHT..THHT...","...TCHT..TCHT...","...TCHT..TCHT...","...THHT..THHT...","...TTTT..TTTT...","....TG....TG....","....TG....TG....","....TG....TG....","....TGT..TTG....","....TGTTTTTG....","....TGTSSTTG....","....TGTTTTTG....","..TTTTSSSSTTTT..",".TTSGSSSSGSSGTT.","...TTTTTTTTTT..."],[".....TT....TT...","....THHT..THHT..","....TCHT..TCHT..","....TCHT..TCHT..","....THHT..THHT..","....TTTT..TTTT..",".....TG....TG...","....TG....TG....","....TG....TG....","....TGT..TTG....","....TGTTTTTG....","....TGTSSTTG....","....TGTTTTTG....","..TTTTSSSSTTTT..",".TTSGSSSSGSSGTT.","...TTTTTTTTTT..."]],frameMs:1200},fn={id:"planta-helecho",frames:[["................","................","................","................",".......TT.......","......TSGT......","...T..TSGT..T...","..TGTTTSGTTTGT..","..TGGSTSGTVGGT..","..TVGSTSGTSGST..","TTTTTGTSGTGTTTTT","TGSSSTTSGTTVVSGT","TSGGGSTSGTSGGGST","TTVVSGTSGTGSSSTT","..TTTTTTTTTTTT..",".....TTTTTT....."]]},hn={id:"planta-flor-loto",frames:[["................","................","................","................",".......TT.......",".......TT.......","...TTTTCCTTTT...","...THHTHCTHHT...","..TTHHTCHTHHTT..","TTHTTHTHCTHTTHTT",".THHTHTCCTHTHHT.","..THHTTCCTTHHT..","...TTTTTTTTTT...",".TTVVSTTTTSSSTT.",".TTTTSSSSSSTTTT.",".....TTTTTT....."]]},vn={id:"planta-trebol",frames:[["................",".......TT.......","......TVVT......",".....TMMVVT.....",".....TVVVST.....","....TTVVSVTT....","...TVVTTTTVVT...","..TMMVVTTVVMMT..","..TVVVVTSVVVVT..","..TVVSVTTVSVVT..","...TTTT..TTTT...",".......TG.......",".......TG.......",".......TG.......",".......TG.......","................"]]},gn={id:"planta-brote",frames:[["................","................","................","..TTTTT..TTTTT..",".TVMMVVTTVVMMVT.","..TVVVSTTSVVVT..","...TTTTTGTTTT...",".......TG.......",".......TG.......",".......TG.......",".......TG.......",".......TG.......",".......TG.......","..TTTTTTTTTTTT..",".TGGBGGGBGGBGGT.","..TTTTTTTTTTTT.."]]},bn={id:"agua-nenufar-rosa",frames:[["................","................","................","................","......TTTT......",".....THHHHT.....",".....THCCHT.....",".....THCCHT.....","....TTTTTTTT....","..TTSVSSSSTT....",".TSVVSSSST......",".TSSSSSSSSTT....",".TGGGGGGGSSSTTT.","..TTTTSSSSTTTT..","..A...TTTT...A..","................"]]},xn={id:"agua-hojita-barco",frames:[["................","................","................","................","................","................","................","...TTTTTTTTTT...",".TTSVVVSSSSSSTT.","..TGGGSSSSGGGT..","...TSSGGGGSST...","....TSSSSSST....",".....TTTTTT.....",".AAAAAAAAAAAAAA.","..UU....UU..UU..","................"]]},Cn={id:"agua-ondas",frames:[["................","................","................","................","................","......TTTT......","....TTAAAATT....","...TA..UU..AT...","..TA..U.CU..AT..","...TA..UU..AT...","....TTAAAATT....","......TTTT......","................","................","................","................"],["................","................","................","................",".....TTTTTT.....","...TTAAAAAATT...",".TTA........ATT.",".T...UUUUUU...T.","TA...U....U...AT",".T...UUUUUU...T.",".TTA........ATT.","...TTAAAAAATT...",".....TTTTTT.....","................","................","................"]],frameMs:1e3},Mn={id:"agua-piedra-rio",frames:[["................","................","................","................","................","......TTTT......","...TMMNNNNTTT...","..TMNNNNNNNNNT..","..TNNTNNNNTNNT..",".TNNNTNNNNTNNNT.","..TNHNNTTNNHNT..","..TNNNNNNNNPPT..","...TTNNNPPPTT...",".....TTTTTT.....","................","................"]]},yn={id:"cielo-estrella",frames:[["................","................",".......TT.......",".......TT.......","......TCCT......","......TCCT......",".TTTTTCCCCTTTTT.","..TCCCTCCTCCCT..","...TCCTCCTCCT...","....THCCCCHT....","....TMMTTMMT....","....TMMMMMMT....","....TMTTTTMT....","....TT....TT....","................","................"],["................","................",".......TT.......",".......TT.......","......TCCT......","......TCCT......",".TTTTTCCCCTTTTT.","..TCCCCCCCCCCT..","...TCCTCCTCCT...","....THCCCCHT....","....TMMTTMMT....","....TMMMMMMT....","....TMTTTTMT....","....TT....TT....","................","................"]],frameMs:800},En={id:"cielo-nubecita",frames:[["................","................","................","................","......TTTTTT....",".....TCCCCCCT...",".....TCCCCCCT...","..TTTCTCCTCCCT..",".TCCCCTCCTCCCCT.",".TCCHCCTTCCHCCT.",".TCCCCCCCCCCCCT.","..TTTTTTTTTTTT..","................","................","................","................"]]},wn={id:"cielo-trio-estrellas",frames:[["................","............H...","...H............","..HCH...........","...H............","................","................","...........H....","................","................","................",".....H..........","....HCH.........",".....H..........",".............H..","................"],["................","............H...","................","...H............","................","................","...........H....","..........HCH...","...........H....","................","................","................",".....H..........","................",".............H..","................"]],frameMs:900},Nn={id:"cielo-halo-luna",frames:[["....A.A.A.......","...A.......A....","....TTTT....A...","...TCCT.....HA..","A.TCCT..........",".TCCT...........",".TCCT.........A.",".TTTT...........",".TCHT.........A.",".THCT...........",".TCCCT........A.","..TCCCT......A..","A..TCCCTT...H...",".A..TTTTTT......","..A.......A.....",".....A.A.A......"]]},kn={id:"cosa-farol",frames:[["......TTTT......",".....T....T.....","....TTTTTTTT....","...TTTTTTTTTT...","......TTTT......","....TTCCCCTT.H..","...TCCCCCHCCT...","...TCCHCCCCCT...","...TCCHCCCHCT...","...TCCCCCCCCT...","...TCCCCHCCCT...","..H.TTCCCCTT....","...TTTTTTTTTT...","....TTTTTTTT....",".....T....T.....","................"],["......TTTT......",".....T....T.....","....TTTTTTTT....","...TTTTTTTTTT...",".H....TTTT......","....TTCCCCTT....","...TCCCHCCCCT...","...TCCCHCCCCT...","...TCCCCCHCCT...","...TCHCCCCCCT...","...TCCCCCCHCT.H.","....TTCCCCTT....","...TTTTTTTTTT...","....TTTTTTTT....",".....T....T.....","................"]],frameMs:700},An={id:"cosa-tronquito",frames:[["................","................","................","................","................","..TTTTTTTTTTTT..",".TTVVVVVVBTHHCT.",".TBBBBBGGTCHCHT.",".TBGGBBBBTHCHHT.",".TBBBBBBBTCHHHT.",".TBBBGGBBBTHHCT.",".TTGGBBBBBTTTT..","...TTTTTTTTTT...","................","................","................"]]},Hn={id:"cosa-cartelito",frames:[["................","................","...TTTTTTTTTT...","..TCCHHHHHHHHT..","..TCHTHHHHTHHT..","..THHTHHHHTHHT..","..THHHTHHTHHHT..","..THHHHTTHHHHT..","...TTTTTTTTTT...","......THHT......","......THHT......","......THHT......","......THHT......","....TTTTTTTT....","...TGGGGGGGGT...","....TTTTTTTT...."]]},Gn={id:"cosa-piedras-apiladas",frames:[["................","....H...........","............H...",".......TT.......",".....TTMNTT.....",".....TNMNNT.....",".....TTTTTT.....","....TNNNNNNT....","....TMMNNNNT....","....TTNNNNTT....","...TTNTTTTNTT...","..TMMNNNNNNNNT..","..TNNTNNNNTNNT..","...THNNTTNNHT...",".....TTTTTT.....","................"]]},$t=[{id:"vis-sapito-menta",category:"visitantes",name:"Sapito Menta",description:"Un compañero sereno que visita la orilla.",sprite:rn,gridWidth:1,gridHeight:1,terrain:"ambos",behavior:"parpadear"},{id:"vis-sapito-dorado",category:"visitantes",name:"Sapito Cálido",description:"Trae un tono suave de sol a tu rincón.",sprite:sn,gridWidth:1,gridHeight:1,terrain:"ambos",behavior:"parpadear"},{id:"vis-rana-lunita",category:"visitantes",name:"Rana Lunita",description:"Le gusta sentarse a mirar la luna en silencio.",sprite:cn,gridWidth:1,gridHeight:1,terrain:"ambos",behavior:"mirar-luna"},{id:"vis-sapo-abuelo",category:"visitantes",name:"Sapo Mayor",description:"Duerme plácidamente sin apuro alguno.",sprite:ln,gridWidth:1,gridHeight:1,terrain:"ambos",behavior:"dormir"},{id:"vis-sapito-bebe",category:"visitantes",name:"Sapito Pequeño",description:"Apenas chapotea cerca de las hojas.",sprite:dn,gridWidth:1,gridHeight:1,terrain:"ambos",behavior:"nadar"},{id:"hongo-calido",category:"hongos",name:"Hongo Cálido",description:"Sombrero redondeado con tono de solcito.",sprite:pn,gridWidth:1,gridHeight:1,terrain:"tierra",behavior:"quieto"},{id:"hongo-doble",category:"hongos",name:"Hongo Doble",description:"Dos compañeros creciendo pegaditos.",sprite:mn,gridWidth:1,gridHeight:1,terrain:"tierra",behavior:"quieto"},{id:"hongo-crema",category:"hongos",name:"Honguito Crema",description:"Suave y claro como la luna llena.",sprite:Sn,gridWidth:1,gridHeight:1,terrain:"ambos",behavior:"quieto"},{id:"hongo-musgoso",category:"hongos",name:"Hongo del Musgo",description:"Creció sobre una alfombra verde tierna.",sprite:un,gridWidth:1,gridHeight:1,terrain:"ambos",behavior:"quieto"},{id:"planta-juncos",category:"plantas",name:"Juncos del Estanque",description:"Se mecen suavemente con la brisa.",sprite:Tn,gridWidth:1,gridHeight:1,terrain:"ambos",behavior:"parpadear"},{id:"planta-helecho",category:"plantas",name:"Helecho Suave",description:"Hojas arqueadas que abrazan la tierra.",sprite:fn,gridWidth:1,gridHeight:1,terrain:"ambos",behavior:"quieto"},{id:"planta-flor-loto",category:"plantas",name:"Flor de Loto",description:"Se abre en el agua con calma absoluta.",sprite:hn,gridWidth:1,gridHeight:1,terrain:"agua",behavior:"quieto"},{id:"planta-trebol",category:"plantas",name:"Trébol del Bosque",description:"Tres hojitas verdes para dar buena sombra.",sprite:vn,gridWidth:1,gridHeight:1,terrain:"ambos",behavior:"quieto"},{id:"planta-brote",category:"plantas",name:"Brotecito Tierno",description:"Recién asoma de la tierra húmeda.",sprite:gn,gridWidth:1,gridHeight:1,terrain:"ambos",behavior:"quieto"},{id:"agua-nenufar-rosa",category:"agua",name:"Nenúfar Florecido",description:"Una florcita descansando sobre la hoja verde.",sprite:bn,gridWidth:1,gridHeight:1,terrain:"agua",behavior:"quieto"},{id:"agua-hojita-barco",category:"agua",name:"Hojita Barco",description:"Flota suave como un barquito de papel.",sprite:xn,gridWidth:1,gridHeight:1,terrain:"agua",behavior:"quieto"},{id:"agua-ondas",category:"agua",name:"Ondas en el Agua",description:"Un círculo que se expande en silencio.",sprite:Cn,gridWidth:1,gridHeight:1,terrain:"agua",behavior:"parpadear"},{id:"agua-piedra-rio",category:"agua",name:"Piedra de Arroyo",description:"Redondeada y suave por el agua fresca.",sprite:Mn,gridWidth:1,gridHeight:1,terrain:"ambos",behavior:"quieto"},{id:"cielo-estrella",category:"cielo",name:"Estrella Mansa",description:"Titila despacio cuidando la noche.",sprite:yn,gridWidth:1,gridHeight:1,terrain:"cielo",behavior:"parpadear"},{id:"cielo-nubecita",category:"cielo",name:"Nubecita Baja",description:"Pasa despacio como un algodón.",sprite:En,gridWidth:1,gridHeight:1,terrain:"cielo",behavior:"quieto"},{id:"cielo-trio-estrellas",category:"cielo",name:"Trío de Estrellas",description:"Tres luces que se acompañan en lo alto.",sprite:wn,gridWidth:1,gridHeight:1,terrain:"cielo",behavior:"parpadear"},{id:"cielo-halo-luna",category:"cielo",name:"Halo de Luna",description:"Luz tenue que ilumina el estanque.",sprite:Nn,gridWidth:1,gridHeight:1,terrain:"cielo",behavior:"quieto"},{id:"cosa-farol",category:"cositas",name:"Farol de Luciérnagas",description:"Luz cálida y mansa para la noche.",sprite:kn,gridWidth:1,gridHeight:1,terrain:"ambos",behavior:"parpadear"},{id:"cosa-tronquito",category:"cositas",name:"Tronco Caído",description:"Un puente de madera tapizado de musgo.",sprite:An,gridWidth:1,gridHeight:1,terrain:"ambos",behavior:"quieto"},{id:"cosa-cartelito",category:"cositas",name:"Cartelito de Madera",description:"Un rincón señalado con cariño.",sprite:Hn,gridWidth:1,gridHeight:1,terrain:"ambos",behavior:"quieto"},{id:"cosa-piedras-apiladas",category:"cositas",name:"Piedritas en Equilibrio",description:"Un pequeño monumento a la paciencia.",sprite:Gn,gridWidth:1,gridHeight:1,terrain:"ambos",behavior:"quieto"}],ft=new Map($t.map(t=>[t.id,t]));function zn(t,e,a,r=Math.random){if(t.lastGiftDate===e)return{gift:null,newObtainedIds:[...t.obtainedIds],giftedToday:!0};const o=a.filter(s=>!t.obtainedIds.includes(s.id));if(o.length===0)return{gift:null,newObtainedIds:[...t.obtainedIds],giftedToday:!1};const i=Math.floor(r()*o.length),d=o[i];return{gift:d,newObtainedIds:[...t.obtainedIds,d.id],giftedToday:!1}}const Bt=5,Rt=5;function Sa(t,e){return e===0?"cielo":e===1||e===4?"tierra":"agua"}function qt(t,e){return t==="cielo"?e==="cielo":t==="ambos"?e==="tierra"||e==="agua":t===e}function Ln(t,e,a=1,r=1){return!(t<0||e<0||t+a>Bt||e+r>Rt)}function jn(t,e,a,r,o){if(!Ln(a,r,e.gridWidth,e.gridHeight))return!1;for(let i=0;i<e.gridHeight;i++)for(let d=0;d<e.gridWidth;d++){const s=Sa(a+d,r+i);if(!qt(e.terrain,s))return!1}for(const i of t)if(i.x===a&&i.y===r)return!1;return!0}function Bn(t,e,a,r){if(!jn(t,e,a,r))return t;const o={id:`placed_${e.id}_${Date.now()}_${Math.floor(Math.random()*1e3)}`,catalogId:e.id,x:a,y:r};return[...t,o]}function Rn(t,e){return t.filter(a=>a.id!==e)}const ua="roro_setting_sound",Ta="roro_setting_vibration";let kt=null;function qn(){if(typeof window>"u")return null;try{if(!kt){const t=window.AudioContext||window.webkitAudioContext;t&&(kt=new t)}return kt}catch{return null}}function fa(){try{return typeof window>"u"||!window.localStorage?!1:window.localStorage.getItem(ua)==="true"}catch{return!1}}function In(t){try{typeof window<"u"&&window.localStorage&&window.localStorage.setItem(ua,t?"true":"false")}catch{}}function ha(){try{return typeof window>"u"||!window.localStorage?!1:window.localStorage.getItem(Ta)==="true"}catch{return!1}}function Dn(t){try{typeof window<"u"&&window.localStorage&&window.localStorage.setItem(Ta,t?"true":"false")}catch{}}function It(){if(fa())try{const t=qn();if(!t)return;t.state==="suspended"&&t.resume().catch(()=>{});const e=t.currentTime,a=1.4,r=t.createGain();r.gain.setValueAtTime(.001,e),r.gain.linearRampToValueAtTime(.12,e+.04),r.gain.exponentialRampToValueAtTime(1e-4,e+a),r.connect(t.destination);const o=t.createOscillator();o.type="sine",o.frequency.setValueAtTime(528,e),o.connect(r);const i=t.createOscillator();i.type="sine",i.frequency.setValueAtTime(1056,e);const d=t.createGain();d.gain.setValueAtTime(.03,e),d.gain.exponentialRampToValueAtTime(1e-4,e+a*.8),i.connect(d),d.connect(r),o.start(e),i.start(e),o.stop(e+a),i.stop(e+a)}catch{}}function Pn(t=40){if(ha())try{typeof navigator<"u"&&typeof navigator.vibrate=="function"&&navigator.vibrate(t)}catch{}}function vt(){It(),Pn(40)}function Vn(t){t.innerHTML="";let e=He();const a=bt();let o=window.location.hash.includes("modo=acomodar"),i=null;if(o){const E=window.location.hash.match(/item=([^&]+)/);E&&E[1]&&(i=E[1])}let d="tranquila";const s=xt();if(s.success&&s.data&&s.data.length>0){for(const E of s.data)if((E.type==="checkin"||E.type==="diario")&&"mood"in E.data&&E.data.mood){d=E.data.mood;break}}const S=s.success&&s.data?s.data.some(E=>E.date===a):!1;let c=null;if(S&&e.lastGiftDate!==a){const E=zn({obtainedIds:e.obtainedItemIds,lastGiftDate:e.lastGiftDate},a,$t);E.gift&&(c=E.gift)}const l=nn(new Date,e.hemisphere),T="roro_pc_view_mode",M=typeof window<"u"&&window.innerWidth>=601;let x=!1;try{const E=localStorage.getItem(T);E!==null?x=E==="true":x=M}catch{x=M}const v=document.createElement("section");v.className="jardin-screen",x&&(v.classList.add("jardin-pc-mode"),t.classList.add("container-jardin-pc")),v.setAttribute("role","main"),v.setAttribute("aria-label",n.jardin.title);const p=()=>{v.classList.toggle("jardin-pc-mode",x),t.classList.toggle("container-jardin-pc",x)},m=document.createElement("style");m.textContent=`
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

    /* ── Adaptación para PC / Escritorio ── */
    .jardin-screen.jardin-pc-mode {
      padding: var(--space-sm) var(--space-lg) var(--space-md);
    }

    .jardin-screen.jardin-pc-mode .jardin-nav {
      max-width: 600px;
    }

    .jardin-screen.jardin-pc-mode .stage-wrapper {
      max-width: 580px;
      margin: var(--space-xs) 0;
    }

    .jardin-screen.jardin-pc-mode .canvas-container {
      width: min(560px, 92vw);
      height: min(440px, calc(92vw * 110 / 140));
      aspect-ratio: 140 / 110;
      border-width: 4px;
      box-shadow: 0 10px 30px rgba(43, 58, 66, 0.28);
    }

    .jardin-screen.jardin-pc-mode .jardin-actions {
      max-width: 580px;
      grid-template-columns: repeat(4, 1fr);
      gap: var(--space-xs);
    }

    .jardin-screen.jardin-pc-mode .action-btn {
      padding: var(--space-xs) var(--space-xs);
      font-size: var(--font-size-sm);
    }

    .jardin-screen.jardin-pc-mode .frog-speech-bubble {
      font-size: 15px;
      padding: 8px 18px;
      top: 32%;
      box-shadow: 0 6px 20px rgba(43, 58, 66, 0.35);
    }

    .jardin-screen.jardin-pc-mode .acomodar-panel {
      max-width: 580px;
    }

    .jardin-screen.jardin-pc-mode .acomodar-item-thumb {
      width: 50px;
      height: 50px;
    }

    .pc-keyboard-hint {
      font-family: var(--font-ui);
      font-size: 11px;
      color: var(--color-tinta);
      opacity: 0.82;
      margin-top: 6px;
      text-align: center;
      display: none;
      line-height: 1.3;
    }

    .jardin-screen.jardin-pc-mode .pc-keyboard-hint {
      display: block;
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
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: var(--space-xs);
      margin-top: var(--space-xs);
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
  `,document.head.appendChild(m);const h=document.createElement("nav");h.className="jardin-nav",h.setAttribute("aria-label","Navegación del jardín");const b=document.createElement("button");b.className="nav-btn",b.textContent=n.app.back,b.setAttribute("aria-label","Volver al inicio"),b.addEventListener("click",()=>{window.location.hash="#/"});const f=document.createElement("button");f.className="nav-btn",f.appendChild(K("heart",{size:12})),f.appendChild(document.createTextNode(n.jardin.coleccionBtn)),f.setAttribute("aria-label","Ver mi colección"),f.addEventListener("click",()=>{window.location.hash="#/micoleccion"});const g=document.createElement("button");g.className=`nav-btn ${o?"active":""}`,g.appendChild(K("rotate",{size:12})),g.appendChild(document.createTextNode(n.jardin.decorarBtn)),g.setAttribute("aria-label","Acomodar elementos"),g.addEventListener("click",()=>{o=!o,Be()});const y=document.createElement("button");if(y.className="nav-btn nav-btn-icon",y.appendChild(K("gear",{size:14})),y.setAttribute("aria-label","Ajustes"),y.addEventListener("click",()=>{window.location.hash="#/ajustes"}),h.appendChild(b),h.appendChild(f),h.appendChild(g),e.showWeekInGarden!==!1){const E=document.createElement("button");E.className="nav-btn",E.appendChild(K("bookOpen",{size:12})),E.appendChild(document.createTextNode(n.jardin.semanaBtn)),E.setAttribute("aria-label","Ver resumen de mi semana"),E.addEventListener("click",()=>{window.location.hash="#/semana"}),h.appendChild(E)}const k=document.createElement("button");k.className="nav-btn nav-btn-icon";const w=()=>{k.innerHTML="",k.appendChild(K(x?"mobile":"desktop",{size:14}));const E=x?"Cambiar a vista compacta de celular":"Cambiar a vista amplia de PC";k.title=E,k.setAttribute("aria-label",E)};w(),k.addEventListener("click",()=>{x=!x;try{localStorage.setItem(T,x?"true":"false")}catch{}p(),w()}),h.appendChild(k),h.appendChild(y);const N=document.createElement("header");N.className="jardin-header";const A=document.createElement("h1");if(A.className="jardin-title",A.textContent=n.jardin.title,N.appendChild(A),e.frogName){const E=document.createElement("span");E.className="frog-name-badge",E.textContent=`Sapo: ${e.frogName}`,N.appendChild(E)}const G=document.createElement("p");G.className="jardin-world-hint",G.textContent=l.label,N.appendChild(G);const H=document.createElement("div");H.className="stage-wrapper";const C=document.createElement("div");C.className="canvas-container";const j=140,W=110,{canvas:R,ctx:u}=Oe(j*2,W*2);R.className="stage-canvas",C.appendChild(R);let L=null,F=null,ae=0,_=null,we=0;const me=()=>{const E=performance.now();if(E-we<250)return;we=E,It(),ae=-10,_&&clearTimeout(_),_=setTimeout(()=>{ae=0},280),F&&(clearTimeout(F),F=null),L&&(L.remove(),L=null);const z=n.jardin.frogTap[Math.floor(Math.random()*n.jardin.frogTap.length)];L=document.createElement("div"),L.className="frog-speech-bubble",L.textContent=z,L.title="Tocá para cerrar",L.addEventListener("click",P=>{P.stopPropagation(),F&&(clearTimeout(F),F=null),L==null||L.remove(),L=null}),C.appendChild(L),F=setTimeout(()=>{L==null||L.remove(),L=null,F=null},4e3)};C.addEventListener("click",E=>{if(o)return;const z=C.getBoundingClientRect(),P=E.clientX-z.left,q=E.clientY-z.top,O=j*2/z.width,B=W*2/z.height,V=P*O,se=q*B;Math.hypot(V-136,se-124)<55&&me()}),C.addEventListener("mousemove",E=>{if(o)return;const z=C.getBoundingClientRect(),P=E.clientX-z.left,q=E.clientY-z.top,O=j*2/z.width,B=W*2/z.height,V=P*O,se=q*B;Math.hypot(V-136,se-124)<55?(C.style.cursor="pointer",C.title=e.frogName?`Tu sapo ${e.frogName} (clic o barra espaciadora)`:"Tu sapo (clic o barra espaciadora)"):(C.style.cursor="default",C.title="")}),C.addEventListener("mouseleave",()=>{C.style.cursor="default",C.title=""});const Se=rt[d]??oa,ue=pe(Se),Ne=pe(ra),Y=pe(ia),Z=new Map,$=()=>{Z.clear();for(const E of e.placedDecorations){const z=ft.get(E.catalogId);z&&Z.set(E.id,pe(z.sprite))}};$();let U=null,he=0;const ce=1e3/30;let ve=!0;const Ke=window.matchMedia("(prefers-reduced-motion: reduce)").matches,Ge=e.gardenAnimationsEnabled&&!Ke,Ie=E=>{u.fillStyle=l.skyColors.top,u.fillRect(0,0,j*2,38),u.fillStyle=l.skyColors.bottom,u.fillRect(0,38,j*2,16);for(let I=0;I<j*2;I+=4)u.fillRect(I+(I%8===0?0:2),36,2,2);if(l.isNight){te(u,Y,210,8,2);const I=E*.003,ne=[{x:34,y:12,s:2,phase:0},{x:68,y:22,s:1,phase:1.2},{x:110,y:15,s:2,phase:2.4},{x:154,y:10,s:1,phase:3.6},{x:178,y:24,s:2,phase:.8},{x:260,y:18,s:1,phase:4.8}];for(const Te of ne){const Re=Math.sin(I+Te.phase);u.fillStyle=Re>.3?ie.crema:ie.azulNiebla,u.fillRect(Te.x,Te.y,Te.s,Te.s),Te.s>1&&Re>.7&&(u.fillRect(Te.x-1,Te.y,1,1),u.fillRect(Te.x+Te.s,Te.y,1,1))}}else u.fillStyle=l.skyColors.bottom===ie.azulNiebla?ie.crema:ie.menta,u.fillRect(28,16,20,6),u.fillRect(32,12,12,4),u.fillRect(160,22,24,6),u.fillRect(166,18,14,4);u.fillStyle=ie.bosque,u.fillRect(0,50,j*2,4);for(let I=0;I<j*2;I+=18)u.fillRect(I+2,46,14,6),u.fillRect(I+4,44,10,3);u.fillStyle=l.foliageColor,u.fillRect(0,52,j*2,34),u.fillStyle=ie.crema,u.fillRect(24,62,2,2),u.fillRect(96,68,2,2),u.fillRect(180,60,2,2),u.fillRect(244,64,2,2),u.fillStyle=ie.acento,u.fillRect(58,66,2,2),u.fillRect(138,58,2,2),u.fillRect(212,70,2,2),u.fillStyle=ie.bosque,u.beginPath(),u.ellipse(j,137,133,49,0,0,Math.PI*2),u.fill(),u.fillStyle=ie.musgo,u.beginPath(),u.ellipse(j,137,130,46,0,0,Math.PI*2),u.fill(),u.fillStyle=l.waterColor,u.beginPath(),u.ellipse(j,137,126,43,0,0,Math.PI*2),u.fill();const z=E*.002;u.fillStyle=ie.turquesa,u.fillRect(40+Math.sin(z)*4,120,22,2),u.fillRect(180+Math.sin(z+1)*5,126,26,2),u.fillRect(60+Math.sin(z+2)*4,150,18,2),u.fillRect(195+Math.sin(z+3)*5,156,24,2),u.fillStyle=ie.celesteAgua,u.fillRect(90+Math.cos(z)*3,114,16,1),u.fillRect(150+Math.cos(z+2)*3,162,20,1),u.strokeStyle=ie.turquesa,u.lineWidth=1,u.beginPath(),u.ellipse(j,152,38+Math.sin(z*1.5)*2,10,0,0,Math.PI*2),u.stroke(),u.fillStyle=l.foliageColor,u.fillRect(0,184,j*2,36),u.fillStyle=ie.bosque;for(let I=0;I<j*2;I+=8)u.fillRect(I+2,182,3,4),u.fillRect(I+4,180,2,4);u.fillStyle=ie.salvia;for(let I=0;I<j*2;I+=12)u.fillRect(I+1,183,2,3);u.fillStyle=ie.azulNiebla,u.fillRect(16,204,6,4),u.fillRect(18,202,4,2),u.fillRect(256,206,7,4),u.fillRect(258,204,4,2),u.fillStyle=ie.tinta,u.fillRect(16,208,6,1),u.fillRect(256,210,7,1);const P=j*2/Bt,q=W*2/Rt;for(const I of e.placedDecorations){const ne=Z.get(I.id);if(ne){Ge&&Lt(ne,E);const Te=Math.round(I.x*P+(P-32)/2),Re=Math.round(I.y*q+(q-32)/2);te(u,ne,Te,Re,2)}}const O=Math.round(2*P+(P-56)/2),B=Math.round(3*q+(q-24)/2);te(u,Ne,O,B,2),Ge&&Lt(ue,E);const V=O-4,se=B-44+ae;te(u,ue,V,se,2)},qe=E=>{if(!ve)return;const z=E-he;z>ce&&(he=E-z%ce,Ie(E)),Ge&&(U=requestAnimationFrame(qe))};Ie(performance.now()),Ge&&(U=requestAnimationFrame(qe));const De=()=>{ve=!document.hidden,ve&&Ge?(he=performance.now(),U=requestAnimationFrame(qe)):U&&cancelAnimationFrame(U)};document.addEventListener("visibilitychange",De);const ke=document.createElement("div");ke.className="decor-grid-overlay",ke.style.display=o?"grid":"none";const J=document.createElement("div");J.className="acomodar-panel",J.style.display=o?"flex":"none";const ge=()=>{ke.innerHTML="";const E=i?ft.get(i):null;for(let z=0;z<Rt;z++)for(let P=0;P<Bt;P++){const q=document.createElement("button");q.className="grid-cell-btn";const O=Sa(P,z);if(q.title=`Fila ${z+1}, Columna ${P+1} (${O})`,P===2&&z===3){q.classList.add("center-frog"),q.disabled=!0,q.title="Lugar del sapo",q.innerHTML='<span style="font-size: 14px; opacity: 0.85;" aria-hidden="true">🐸</span>',ke.appendChild(q);continue}const B=e.placedDecorations.find(V=>V.x===P&&V.y===z);if(B){const V=ft.get(B.catalogId);q.title=`${(V==null?void 0:V.name)||"Objeto"} (tocá para guardar en la colección)`,q.innerHTML='<span class="cell-placed-badge" title="Tocá para guardar">✓</span>',q.addEventListener("click",()=>{e={...e,placedDecorations:Rn(e.placedDecorations,B.id)},X(e),$(),ge(),Ae(),Ie(performance.now())})}else E&&(qt(E.terrain,O)?(q.classList.add("cell-compatible"),q.title=`Colocar ${E.name} acá (${O})`):q.classList.add("cell-incompatible")),q.addEventListener("click",()=>{if(!i)return;const V=ft.get(i);if(!V)return;if(!qt(V.terrain,O)){const I=J.querySelector(".acomodar-hint");I&&(I.textContent=`🌱 ${V.name} prefiere terreno de ${V.terrain}.`,I.style.color="var(--color-acento)",setTimeout(()=>{I.textContent="Tocá un casillero compatible para colocar:",I.style.color="var(--color-bosque)"},2500));return}const se=Bn(e.placedDecorations,V,P,z);e={...e,placedDecorations:se},X(e),$(),i=null,ge(),Ae(),Ie(performance.now())});ke.appendChild(q)}},Ae=()=>{J.innerHTML="";const E=document.createElement("span");E.className="acomodar-hint",E.style.cssText="font-family: var(--font-pixel); font-size: 0.5625rem; color: var(--color-bosque); line-height: 1.4;",E.textContent=i?"Tocá un casillero iluminado para colocar:":n.jardin.gridHint,J.appendChild(E);const z=document.createElement("div");z.className="acomodar-items-row";const P=new Set(e.placedDecorations.map(B=>B.catalogId)),q=e.obtainedItemIds.map(B=>ft.get(B)).filter(B=>!!B&&!P.has(B.id));if(q.length===0){const B=document.createElement("span");B.style.cssText="font-family: var(--font-ui); font-size: var(--font-size-xs); color: var(--color-tinta);",B.textContent="No tenés más objetos libres. Tocá uno colocado con ✓ para guardarlo.",z.appendChild(B)}else for(const B of q){const V=document.createElement("button");V.className=`acomodar-item-thumb ${i===B.id?"selected":""}`,V.title=`${B.name} (${B.terrain})`;const{canvas:se,ctx:I}=Oe(32,32),ne=pe(B.sprite);te(I,ne,0,0,2),V.appendChild(se),V.addEventListener("click",()=>{i=i===B.id?null:B.id,ge(),Ae()}),z.appendChild(V)}J.appendChild(z);const O=document.createElement("button");O.className="action-btn",O.style.cssText="padding: var(--space-xs); min-height: 40px; font-size: var(--font-size-sm);",O.textContent=n.jardin.gridDoneBtn,O.addEventListener("click",()=>{o=!1,Be()}),J.appendChild(O)},Be=()=>{ke.style.display=o?"grid":"none",J.style.display=o?"flex":"none",be.style.display=o?"none":"flex",g.classList.toggle("active",o),o&&(ge(),Ae())};C.appendChild(ke),H.appendChild(C),H.appendChild(J);const be=document.createElement("div");be.className="jardin-actions";const xe=document.createElement("button");xe.className="action-btn",xe.appendChild(K("spa",{size:15})),xe.appendChild(document.createTextNode(n.jardin.pausaBtn)),xe.addEventListener("click",()=>{window.location.hash="#/pausa"});const $e=document.createElement("button");$e.className="action-btn secondary",$e.appendChild(K("frog",{size:15})),$e.appendChild(document.createTextNode(n.jardin.checkinBtn)),$e.addEventListener("click",()=>{window.location.hash="#/checkin"});const Ye=document.createElement("button");Ye.className="action-btn secondary",Ye.appendChild(K("moon",{size:15})),Ye.appendChild(document.createTextNode(n.jardin.diarioBtn)),Ye.addEventListener("click",()=>{window.location.hash="#/diario"});const Je=document.createElement("button");Je.className="action-btn tertiary",Je.appendChild(K("bookOpen",{size:15})),Je.appendChild(document.createTextNode(n.jardin.historialBtn)),Je.addEventListener("click",()=>{window.location.hash="#/historial"}),be.appendChild(xe),be.appendChild($e),be.appendChild(Ye),be.appendChild(Je);const Xe=Ua(e.reminders??[],new Date,e.dismissedInAppReminders??{},e.vacationMode,a);let Ce=null;if(Xe){Ce=document.createElement("div"),Ce.className="reminder-inapp-banner",Ce.setAttribute("role","region"),Ce.setAttribute("aria-label","Recordatorio de pausa");const E=document.createElement("p");E.className="reminder-banner-text",E.textContent=`⏰ ${Xe.eventText}`;const z=document.createElement("button");z.type="button",z.className="reminder-banner-btn",z.textContent="Aflojar",z.addEventListener("click",()=>{e={...e,dismissedInAppReminders:{...e.dismissedInAppReminders??{},[Xe.id]:a}},X(e),Ce==null||Ce.remove(),window.location.hash="#/pausa"}),Ce.appendChild(E),Ce.appendChild(z)}let le=null;const ct=s.success&&s.data?s.data:[];if(Ja({entries:ct,currentDateStr:a,lastNoticeDateStr:e.lastSupportNoticeDate,supportSuggestionsEnabled:e.supportSuggestionsEnabled,vacationMode:e.vacationMode})){le=document.createElement("article"),le.className="support-card-section",le.setAttribute("role","region"),le.setAttribute("aria-label",n.apoyo.cardTitle);const E=document.createElement("h2");E.className="support-card-title",E.textContent=n.apoyo.cardTitle;const z=document.createElement("p");z.className="support-card-msg",z.textContent=n.apoyo.cardMessage;const P=document.createElement("div");P.className="support-actions-row";const q=document.createElement("a");q.className="support-action-btn primary",q.href="#/ayuda",q.textContent=n.apoyo.cardHelpBtn,q.addEventListener("click",()=>{e={...e,lastSupportNoticeDate:a},X(e)});const O=document.createElement("button");O.type="button",O.className="support-action-btn secondary",O.textContent=n.apoyo.cardDismissBtn,O.addEventListener("click",()=>{e={...e,lastSupportNoticeDate:a},X(e),le==null||le.remove()});const B=document.createElement("button");B.type="button",B.className="support-never-link",B.textContent=n.apoyo.cardNeverBtn,B.addEventListener("click",()=>{e={...e,supportSuggestionsEnabled:!1,lastSupportNoticeDate:a},X(e),le==null||le.remove()}),P.appendChild(q),P.appendChild(O),le.appendChild(E),le.appendChild(z),le.appendChild(P),le.appendChild(B)}const Qe=document.createElement("p");Qe.className="pc-keyboard-hint",Qe.textContent="💡 En PC: Espacio para interactuar con tu sapo · Tecla A para acomodar · Esc para salir",v.appendChild(h),v.appendChild(N),Ce&&v.appendChild(Ce),v.appendChild(H),le&&v.appendChild(le),v.appendChild(be),v.appendChild(Qe),t.appendChild(v);const Fe=E=>{const z=E.target;z&&(z.tagName==="INPUT"||z.tagName==="TEXTAREA"||z.isContentEditable)||(E.code==="Space"?o||(E.preventDefault(),me()):E.key==="a"||E.key==="A"?(o=!o,Be()):E.key==="Escape"&&(L&&(F&&clearTimeout(F),L.remove(),L=null),o&&(o=!1,Be())))};if(window.addEventListener("keydown",Fe),o&&Be(),c){const E=c,z=document.createElement("div");z.className="modal-overlay";const P=document.createElement("div");P.className="modal-card";const q=document.createElement("h2");q.className="modal-title",q.textContent=n.jardin.giftTitle;const{canvas:O,ctx:B}=Oe(48,48),V=pe(E.sprite);te(B,V,0,0,3);const se=document.createElement("h3");se.style.cssText="font-family: var(--font-pixel); font-size: 0.625rem; color: var(--color-tinta); margin: 0;",se.textContent=E.name;const I=document.createElement("p");I.className="modal-desc",I.textContent=E.description;const ne=document.createElement("button");ne.className="action-btn",ne.textContent=n.jardin.giftDismiss,ne.addEventListener("click",()=>{e={...e,obtainedItemIds:[...new Set([...e.obtainedItemIds,E.id])],lastGiftDate:a},X(e),z.remove(),It()}),P.appendChild(q),P.appendChild(O),P.appendChild(se),P.appendChild(I),P.appendChild(ne),z.appendChild(P),v.appendChild(z),ne.focus()}if(!c&&!e.frogNameAnswered&&e.frogName===null){const E=document.createElement("div");E.className="modal-overlay";const z=document.createElement("div");z.className="modal-card";const P=document.createElement("h2");P.className="modal-title",P.textContent=n.jardin.frogNamePrompt;const q=document.createElement("input");q.type="text",q.maxLength=20,q.placeholder=n.jardin.frogNamePlaceholder,q.className="name-input";const O=document.createElement("div");O.style.cssText="display: flex; gap: var(--space-xs); width: 100%; margin-top: var(--space-xs);";const B=document.createElement("button");B.className="action-btn secondary",B.style.flex="1",B.style.padding="var(--space-xs)",B.style.fontSize="var(--font-size-sm)",B.textContent=n.jardin.frogNameSkip,B.addEventListener("click",()=>{e={...e,frogNameAnswered:!0},X(e),E.remove()});const V=document.createElement("button");V.className="action-btn",V.style.flex="1",V.style.padding="var(--space-xs)",V.style.fontSize="var(--font-size-sm)",V.textContent=n.jardin.frogNameSave,V.addEventListener("click",()=>{const se=q.value.trim();if(e={...e,frogName:se.length>0?se:null,frogNameAnswered:!0},X(e),E.remove(),e.frogName){const I=document.createElement("span");I.className="frog-name-badge",I.textContent=`Sapo: ${e.frogName}`,N.insertBefore(I,G)}}),O.appendChild(B),O.appendChild(V),z.appendChild(P),z.appendChild(q),z.appendChild(O),E.appendChild(z),v.appendChild(E)}return()=>{U&&cancelAnimationFrame(U),document.removeEventListener("visibilitychange",De),window.removeEventListener("keydown",Fe),_&&clearTimeout(_),t.classList.remove("container-jardin-pc"),m.remove()}}function _n(t){t.innerHTML="";const e=document.createElement("section");e.className="checkin-screen",e.setAttribute("role","main"),e.setAttribute("aria-label",n.checkin.title);const a=document.createElement("style");a.textContent=`
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
  `,document.head.appendChild(a);const r=document.createElement("div");r.className="checkin-top";const o=document.createElement("button");o.className="back-btn",o.textContent=n.app.back,o.setAttribute("aria-label","Volver al jardín"),o.addEventListener("click",()=>{window.location.hash="#/jardin"});const i=document.createElement("header");i.className="checkin-header";const d=document.createElement("h1");d.className="checkin-title",d.textContent=n.checkin.title;const s=document.createElement("p");s.className="checkin-subtitle",s.textContent=n.checkin.subtitle,i.appendChild(d),i.appendChild(s),r.appendChild(o),r.appendChild(i);const S=document.createElement("div");S.className="moods-grid",S.setAttribute("role","radiogroup"),S.setAttribute("aria-label","Seleccioná cómo llegás hoy");const c=document.createElement("p");c.className="mood-desc",c.textContent=n.moods.tranquila.description;let l="tranquila";const T=["contenta","tranquila","cansada","tensa","triste"],M=new Map;T.forEach(g=>{const y=document.createElement("button");y.className=`mood-card ${g===l?"selected":""}`,y.setAttribute("role","radio"),y.setAttribute("aria-checked",g===l?"true":"false"),y.setAttribute("aria-label",`${n.moods[g].label}: ${n.moods[g].description}`);const k=1,{canvas:w,ctx:N}=Oe(32*k,32*k),A=rt[g],G=pe(A);te(N,G,0,0,k);const H=document.createElement("span");H.className="mood-label",H.textContent=n.moods[g].label,y.appendChild(w),y.appendChild(H),y.addEventListener("click",()=>{l=g,c.textContent=n.moods[g].description,M.forEach((C,j)=>{const W=j===l;C.className=`mood-card ${W?"selected":""}`,C.setAttribute("aria-checked",W?"true":"false")})}),M.set(g,y),S.appendChild(y)});const x=document.createElement("div");x.className="note-container";const v=document.createElement("label");v.className="note-label",v.htmlFor="checkin-note-input",v.textContent=n.checkin.promptText;const p=document.createElement("textarea");p.id="checkin-note-input",p.className="note-input",p.placeholder=n.checkin.placeholder,p.maxLength=280,x.appendChild(v),x.appendChild(p);const m=document.createElement("div");m.className="actions-row";const h=document.createElement("button");h.className="btn-action btn-skip",h.textContent=n.app.skip,h.setAttribute("aria-label","Saltar check-in sin guardar");const b=document.createElement("button");b.className="btn-action btn-save",b.textContent=n.app.save,b.setAttribute("aria-label","Guardar check-in de hoy"),m.appendChild(h),m.appendChild(b);const f=g=>{const y=document.createElement("div");y.className="toast-overlay",y.setAttribute("role","alert");const k=document.createElement("div");k.className="toast-card";const w=document.createElement("p");w.className="toast-message",w.textContent=g,k.appendChild(w),y.appendChild(k),e.appendChild(y),setTimeout(()=>{window.location.hash="#/jardin"},1800)};return b.addEventListener("click",()=>{const g=bt(),y=Ot("checkin",g);st({id:y,version:1,type:"checkin",date:g,createdAt:new Date().toISOString(),updatedAt:new Date().toISOString(),data:{mood:l,note:p.value.trim()||void 0}}),f(n.checkin.savedWarmth)}),h.addEventListener("click",()=>{f(n.checkin.skippedWarmth)}),e.appendChild(r),e.appendChild(S),e.appendChild(c),e.appendChild(x),e.appendChild(m),t.appendChild(e),()=>{a.remove()}}function On(t){t.innerHTML="";let e=0,a="tranquila",r="",o="",i="",d=null;const s=document.createElement("section");s.className="diario-screen",s.setAttribute("role","main"),s.setAttribute("aria-label",n.diario.title);const S=document.createElement("style");S.textContent=`
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
  `,document.head.appendChild(S);const c=()=>{if(s.innerHTML="",e===4){const m=document.createElement("div");m.className="ritual-screen",m.setAttribute("role","region"),m.setAttribute("aria-label",n.diario.ritualTitle);const h=document.createElement("h2");h.className="ritual-title",h.textContent=n.diario.ritualTitle;const b=4,{canvas:f,ctx:g}=Oe(32*b,28*b),y=pe(ia),k=pe(ka),w=window.matchMedia("(prefers-reduced-motion: reduce)").matches,N=()=>{g.clearRect(0,0,32*b,28*b),te(g,y,8*b,0,b),te(g,k,6*b,14*b,b)};N(),w||(d=new _t(N),d.add(y),d.start());const A=document.createElement("p");A.className="ritual-msg",A.textContent=n.diario.ritualMessage;const G=document.createElement("p");G.className="ritual-goodnight",G.textContent=n.diario.ritualGoodnight;const H=document.createElement("button");H.className="btn-action btn-next",H.style.marginTop="var(--space-md)",H.textContent="Volver al jardín",H.addEventListener("click",()=>{window.location.hash="#/jardin"}),m.appendChild(h),m.appendChild(f),m.appendChild(A),m.appendChild(G),m.appendChild(H),s.appendChild(m),w||setTimeout(()=>{window.location.hash==="#/diario"&&(window.location.hash="#/jardin")},3500);return}const l=document.createElement("div");l.className="diario-top";const T=document.createElement("button");T.className="back-btn",T.textContent=n.app.back,T.setAttribute("aria-label","Volver al paso anterior o al jardín"),T.addEventListener("click",()=>{e>0?(e--,c()):window.location.hash="#/jardin"});const M=document.createElement("p");M.className="step-indicator",M.textContent=`Paso ${e+1} de 4`;const x=document.createElement("header");x.className="diario-header";const v=document.createElement("h1");v.className="diario-title";const p=document.createElement("p");if(p.className="diario-subtitle",x.appendChild(v),x.appendChild(p),l.appendChild(T),l.appendChild(M),l.appendChild(x),s.appendChild(l),e===0){v.textContent=n.diario.stepMoodTitle,p.textContent=n.diario.stepMoodSubtitle;const m=document.createElement("div");m.className="moods-grid",["contenta","tranquila","cansada","tensa","triste"].forEach(y=>{const k=document.createElement("button");k.className=`mood-card ${y===a?"selected":""}`,k.setAttribute("aria-label",n.moods[y].label);const w=1,{canvas:N,ctx:A}=Oe(32*w,32*w),G=rt[y],H=pe(G);te(A,H,0,0,w);const C=document.createElement("span");C.className="mood-label",C.textContent=n.moods[y].label,k.appendChild(N),k.appendChild(C),k.addEventListener("click",()=>{a=y,e=1,c()}),m.appendChild(k)}),s.appendChild(m);const b=document.createElement("div");b.className="actions-row";const f=document.createElement("button");f.className="btn-action btn-skip",f.textContent=n.app.skip,f.addEventListener("click",()=>{e=1,c()});const g=document.createElement("button");g.className="btn-action btn-next",g.textContent=n.app.next,g.addEventListener("click",()=>{e=1,c()}),b.appendChild(f),b.appendChild(g),s.appendChild(b)}else{const m=document.createElement("div");m.className="question-box";let h="",b="",f="",g="";e===1?(h=n.diario.step1Title,b=n.diario.step1Subtitle,f=n.diario.step1Placeholder,g=r):e===2?(h=n.diario.step2Title,b=n.diario.step2Subtitle,f=n.diario.step2Placeholder,g=o):(h=n.diario.step3Title,b=n.diario.step3Subtitle,f=n.diario.step3Placeholder,g=i),v.textContent=h,p.textContent=b;const y=document.createElement("textarea");y.className="question-input",y.placeholder=f,y.value=g,y.maxLength=400,m.appendChild(y),s.appendChild(m);const k=document.createElement("div");k.className="actions-row";const w=document.createElement("button");w.className="btn-action btn-skip",w.textContent=n.app.skip;const N=document.createElement("button");N.className="btn-action btn-next",N.textContent=e===3?n.diario.finishBtn:n.app.next;const A=G=>{if(e===1&&(r=G),e===2&&(o=G),e===3&&(i=G),e===3){const H=bt();st({id:Ot("diario",H),version:1,type:"diario",date:H,createdAt:new Date().toISOString(),updatedAt:new Date().toISOString(),data:{mood:a,lindo:r||void 0,peso:o||void 0,suelto:i||void 0}}),e=4}else e++;c()};w.addEventListener("click",()=>{A("")}),N.addEventListener("click",()=>{A(y.value.trim())}),k.appendChild(w),k.appendChild(N),s.appendChild(k),y.focus()}};return t.appendChild(s),c(),()=>{d&&d.stop(),S.remove()}}function $n(t){t.innerHTML="";const e=document.createElement("section");e.className="historial-screen",e.setAttribute("role","main"),e.setAttribute("aria-label",n.historial.title);const a=document.createElement("style");a.textContent=`
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
  `,document.head.appendChild(a);const r=document.createElement("div");r.className="historial-header";const o=document.createElement("button");o.className="back-btn",o.textContent=n.app.back,o.setAttribute("aria-label","Volver al jardín"),o.addEventListener("click",()=>{window.location.hash="#/jardin"});const i=document.createElement("div");i.className="title-box";const d=document.createElement("h1");d.className="historial-title",d.textContent=n.historial.title;const s=document.createElement("p");s.className="historial-subtitle",s.textContent=n.historial.subtitle,i.appendChild(d),i.appendChild(s),r.appendChild(o),r.appendChild(i);const S=document.createElement("div");S.className="entries-list";const c=()=>{S.innerHTML="";const M=xt(),v=(M.success&&M.data?M.data:[]).filter(p=>p.type==="checkin"||p.type==="diario");if(v.length===0){const p=document.createElement("div");p.className="empty-state";const m=document.createElement("p");m.className="empty-text",m.textContent=n.historial.empty,p.appendChild(m),S.appendChild(p);return}v.forEach(p=>{var W;const m=document.createElement("article");m.className="entry-card";const h=document.createElement("div");h.className="entry-card-header";const b=document.createElement("div");b.className="entry-meta";const f=document.createElement("span");f.className=`entry-badge ${p.type}`,f.textContent=p.type==="checkin"?n.historial.checkinBadge:n.historial.diarioBadge;const g=document.createElement("time");g.className="entry-date",g.textContent=p.date,b.appendChild(f),b.appendChild(g),h.appendChild(b);const y=document.createElement("div");y.className="entry-mood-row";const k="mood"in p.data?p.data.mood:void 0;if(k&&rt[k]){const{canvas:u,ctx:L}=Oe(32,32),F=rt[k],ae=pe(F);te(L,ae,0,0,1),y.appendChild(u)}const w=document.createElement("span");w.className="entry-mood-label",w.textContent=(k&&((W=n.moods[k])==null?void 0:W.label))??k??"",y.appendChild(w);const N=document.createElement("div");if(N.className="entry-content",p.type==="checkin"){const R=p.data;if(R.note){const u=document.createElement("p");u.textContent=R.note,N.appendChild(u)}}else{const R=p.data;if(R.lindo){const u=document.createElement("div");u.className="diario-item",u.innerHTML=`<span class="diario-q">${n.diario.step1Title}:</span> <span class="diario-a">${R.lindo}</span>`,N.appendChild(u)}if(R.peso){const u=document.createElement("div");u.className="diario-item",u.innerHTML=`<span class="diario-q">${n.diario.step2Title}:</span> <span class="diario-a">${R.peso}</span>`,N.appendChild(u)}if(R.suelto){const u=document.createElement("div");u.className="diario-item",u.innerHTML=`<span class="diario-q">${n.diario.step3Title}:</span> <span class="diario-a">${R.suelto}</span>`,N.appendChild(u)}}const A=document.createElement("div");A.className="entry-actions";const G=document.createElement("button");G.className="card-btn";const H=K("pen",{size:12});H.style.marginRight="var(--space-xs)",G.appendChild(H),G.appendChild(document.createTextNode(n.app.edit)),G.setAttribute("aria-label",`Editar registro del ${p.date}`),G.addEventListener("click",()=>{T(p)});const C=document.createElement("button");C.className="card-btn del";const j=K("trash",{size:12});j.style.marginRight="var(--space-xs)",C.appendChild(j),C.appendChild(document.createTextNode(n.app.delete)),C.setAttribute("aria-label",`Borrar registro del ${p.date}`),C.addEventListener("click",()=>{l(p.id)}),A.appendChild(G),A.appendChild(C),m.appendChild(h),m.appendChild(y),N.childNodes.length>0&&m.appendChild(N),m.appendChild(A),S.appendChild(m)})},l=M=>{const x=document.createElement("div");x.className="modal-overlay",x.setAttribute("role","dialog"),x.setAttribute("aria-modal","true");const v=document.createElement("div");v.className="modal-card";const p=document.createElement("h3");p.className="modal-title",p.textContent=n.app.delete;const m=document.createElement("p");m.className="modal-desc",m.textContent=n.historial.confirmDelete;const h=document.createElement("div");h.className="modal-actions";const b=document.createElement("button");b.className="btn-modal cancel",b.textContent=n.app.cancel,b.addEventListener("click",()=>x.remove());const f=document.createElement("button");f.className="btn-modal confirm",f.textContent=n.app.delete,f.addEventListener("click",()=>{Qa(M),x.remove(),c()}),h.appendChild(b),h.appendChild(f),v.appendChild(p),v.appendChild(m),v.appendChild(h),x.appendChild(v),e.appendChild(x),f.focus()},T=M=>{const x=document.createElement("div");x.className="modal-overlay",x.setAttribute("role","dialog"),x.setAttribute("aria-modal","true");const v=document.createElement("div");v.className="modal-card";const p=document.createElement("h3");p.className="modal-title",p.textContent=n.historial.editNoteTitle;const m=document.createElement("textarea");if(m.className="modal-input",M.type==="checkin")m.value=M.data.note??"";else{const g=M.data;m.value=[g.lindo,g.peso,g.suelto].filter(Boolean).join(`
`)}const h=document.createElement("div");h.className="modal-actions";const b=document.createElement("button");b.className="btn-modal cancel",b.textContent=n.app.cancel,b.addEventListener("click",()=>x.remove());const f=document.createElement("button");f.className="btn-modal confirm",f.textContent=n.app.save,f.addEventListener("click",()=>{const g=m.value.trim();M.type==="checkin"?M.data.note=g||void 0:M.data.lindo=g||void 0,st(M),x.remove(),c()}),h.appendChild(b),h.appendChild(f),v.appendChild(p),v.appendChild(m),v.appendChild(h),x.appendChild(v),e.appendChild(x),m.focus()};return e.appendChild(r),e.appendChild(S),t.appendChild(e),c(),()=>{a.remove()}}const Dt="roro_cloud_user_id",va="roro_cloud_auto_sync";function Wt(){try{let t=localStorage.getItem(Dt);return t||(typeof crypto<"u"&&crypto.randomUUID?t="user_"+crypto.randomUUID().replace(/-/g,"").slice(0,16):t="user_"+Math.random().toString(36).slice(2,12)+Date.now().toString(36),localStorage.setItem(Dt,t)),t}catch{return"default_user"}}function Wn(t){try{const e=t.trim().replace(/[^a-zA-Z0-9_\-.]/g,"").slice(0,64);e&&localStorage.setItem(Dt,e)}catch{}}function ga(){try{return localStorage.getItem(va)==="true"}catch{return!1}}function Fn(t){try{localStorage.setItem(va,t?"true":"false")}catch{}}async function Un(){if(typeof navigator<"u"&&!navigator.onLine)return{available:!1,message:"Sin conexión a internet."};try{const t=await fetch("/api/sync",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({action:"status"})});return t.ok?{available:!0,message:"Conexión lista."}:{available:!1,message:(await t.json().catch(()=>({}))).error||`Servidor no disponible (código ${t.status}).`}}catch{return{available:!1,message:"No se pudo conectar con el servidor."}}}async function ba(){if(typeof navigator<"u"&&!navigator.onLine)return{success:!1,message:"Sin conexión a internet en este momento."};try{const t=Wt(),e=xt(),a=e.success?e.data:[],r=He(),o=await fetch("/api/sync",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({action:"push",userId:t,entries:a,gardenState:r})}),i=await o.json().catch(()=>({}));return o.ok?{success:!0,message:"Copia guardada con éxito en la nube."}:{success:!1,message:i.error||"Error al guardar en la nube."}}catch{return{success:!1,message:"No se pudo conectar con el servidor."}}}async function Yn(){if(typeof navigator<"u"&&!navigator.onLine)return{success:!1,message:"Sin conexión a internet en este momento."};try{const t=Wt(),e=await fetch("/api/sync",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({action:"pull",userId:t})}),a=await e.json().catch(()=>({}));if(!e.ok)return{success:!1,message:a.error||"Error al descargar datos de la nube."};const r=Array.isArray(a.entries)?a.entries:[];let o=0;for(const i of r)try{let d={};typeof i.data_json=="string"?d=JSON.parse(i.data_json):i.data_json&&typeof i.data_json=="object"&&(d=i.data_json);const s={id:i.id,version:i.version||4,type:i.type,date:i.entry_date,createdAt:i.created_at,updatedAt:i.updated_at,data:d};st(s),o++}catch{}if(a.gardenState&&a.gardenState.state_json)try{const i=JSON.parse(a.gardenState.state_json);i&&typeof i=="object"&&X(i)}catch{}return{success:!0,message:`Se recuperaron ${o} registros y el estado del jardín.`,count:o}}catch{return{success:!1,message:"No se pudo conectar con el servidor."}}}function Jn(){ga()&&setTimeout(()=>{ba().catch(()=>{})},1e3)}typeof document<"u"&&document.addEventListener("roro:dataChanged",()=>{Jn()});function Xn(t){t.innerHTML="";const e=document.createElement("section");e.className="ajustes-screen",e.setAttribute("role","main"),e.setAttribute("aria-label",n.ajustes.title);const a=document.createElement("style");a.textContent=`
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
  `,document.head.appendChild(a);const r=document.createElement("button");r.className="back-btn",r.textContent=n.app.back,r.setAttribute("aria-label","Volver al jardín"),r.addEventListener("click",()=>{window.location.hash="#/jardin"});const o=document.createElement("header");o.className="ajustes-header";const i=document.createElement("h1");i.className="ajustes-title",i.textContent=n.ajustes.title,o.appendChild(i);const d=document.createElement("div");d.className="privacy-card",d.innerHTML=`${Ea("lock",{size:16})}<p class="privacy-text">${n.ajustes.privacyNote}</p>`;let s=null;Ze()||(s=document.createElement("div"),s.className="warning-card",s.textContent=n.ajustes.storageWarning);const S=document.createElement("p");S.className="toast-msg";const c=D=>{S.textContent=D,setTimeout(()=>{S.textContent=""},3e3)},l=document.createElement("div");l.className="settings-group";const T=document.createElement("h2");T.className="group-title",T.textContent=n.ajustes.audioTitle;const M=document.createElement("label");M.style.cssText="display: flex; align-items: center; justify-content: space-between; gap: var(--space-sm); cursor: pointer; min-height: var(--touch-target-min);";const x=document.createElement("span");x.className="group-desc",x.style.margin="0",x.textContent=n.ajustes.soundLabel;const v=document.createElement("input");v.type="checkbox",v.style.cssText="width: 22px; height: 22px; accent-color: var(--color-bosque); cursor: pointer;",v.checked=fa(),v.addEventListener("change",()=>{In(v.checked),c("Preferencia de sonido actualizada")}),M.appendChild(x),M.appendChild(v);const p=document.createElement("label");p.style.cssText="display: flex; align-items: center; justify-content: space-between; gap: var(--space-sm); cursor: pointer; min-height: var(--touch-target-min);";const m=document.createElement("span");m.className="group-desc",m.style.margin="0",m.textContent=n.ajustes.vibrationLabel;const h=document.createElement("input");h.type="checkbox",h.style.cssText="width: 22px; height: 22px; accent-color: var(--color-bosque); cursor: pointer;",h.checked=ha(),h.addEventListener("change",()=>{Dn(h.checked),c("Preferencia de vibración actualizada")}),p.appendChild(m),p.appendChild(h),l.appendChild(T),l.appendChild(M),l.appendChild(p);const b=He(),f=document.createElement("div");f.className="settings-group";const g=document.createElement("h2");g.className="group-title",g.textContent=n.ajustes.gardenTitle;const y=document.createElement("label");y.style.cssText="display: flex; align-items: center; justify-content: space-between; gap: var(--space-sm); cursor: pointer; min-height: var(--touch-target-min);";const k=document.createElement("span");k.className="group-desc",k.style.margin="0",k.textContent=n.ajustes.gardenAnimationsLabel;const w=document.createElement("input");w.type="checkbox",w.style.cssText="width: 22px; height: 22px; accent-color: var(--color-bosque); cursor: pointer;",w.checked=b.gardenAnimationsEnabled,w.addEventListener("change",()=>{const D=He();X({...D,gardenAnimationsEnabled:w.checked}),c("Animaciones del jardín actualizadas")}),y.appendChild(k),y.appendChild(w);const N=document.createElement("div");N.style.cssText="display: flex; flex-direction: column; gap: 4px; margin-top: var(--space-xs);";const A=document.createElement("span");A.className="group-desc",A.style.fontWeight="bold",A.textContent=n.ajustes.hemisphereLabel;const G=document.createElement("label");G.className="radio-option";const H=document.createElement("input");H.type="radio",H.name="hemisphere",H.value="sur",H.checked=b.hemisphere==="sur",H.style.cssText="accent-color: var(--color-bosque);";const C=document.createElement("span");C.className="group-desc",C.style.margin="0",C.textContent=n.ajustes.hemisphereSur,G.appendChild(H),G.appendChild(C);const j=document.createElement("label");j.className="radio-option";const W=document.createElement("input");W.type="radio",W.name="hemisphere",W.value="norte",W.checked=b.hemisphere==="norte",W.style.cssText="accent-color: var(--color-bosque);";const R=document.createElement("span");R.className="group-desc",R.style.margin="0",R.textContent=n.ajustes.hemisphereNorte,j.appendChild(W),j.appendChild(R);const u=D=>{const Q=He();X({...Q,hemisphere:D}),c("Hemisferio actualizado")};H.addEventListener("change",()=>{H.checked&&u("sur")}),W.addEventListener("change",()=>{W.checked&&u("norte")}),N.appendChild(A),N.appendChild(G),N.appendChild(j);const L=document.createElement("h3");L.className="group-title",L.style.marginTop="var(--space-sm)",L.textContent=n.ajustes.resetGardenTitle;const F=document.createElement("p");F.className="group-desc",F.textContent=n.ajustes.resetGardenDesc;const ae=document.createElement("button");ae.className="btn-action btn-danger",ae.textContent=n.ajustes.resetGardenBtn,ae.addEventListener("click",()=>{const D=document.createElement("div");D.className="modal-overlay";const Q=document.createElement("div");Q.className="modal-card";const Me=document.createElement("h3");Me.className="modal-title",Me.textContent=n.ajustes.resetGardenTitle;const fe=document.createElement("p");fe.className="modal-desc",fe.textContent=n.ajustes.resetGardenConfirm1;const ye=document.createElement("div");ye.className="modal-actions";const de=document.createElement("button");de.className="btn-action btn-secondary",de.textContent=n.app.cancel,de.addEventListener("click",()=>D.remove());const oe=document.createElement("button");oe.className="btn-action btn-danger",oe.textContent="Sí, continuar",oe.addEventListener("click",()=>{D.remove();const Ee=document.createElement("div");Ee.className="modal-overlay";const ze=document.createElement("div");ze.className="modal-card";const Pe=document.createElement("h3");Pe.className="modal-title",Pe.textContent="Confirmación final";const Ve=document.createElement("p");Ve.className="modal-desc",Ve.textContent=n.ajustes.resetGardenConfirm2;const Le=document.createElement("div");Le.className="modal-actions";const _e=document.createElement("button");_e.className="btn-action btn-secondary",_e.textContent=n.app.cancel,_e.addEventListener("click",()=>Ee.remove());const je=document.createElement("button");je.className="btn-action btn-danger",je.textContent="Reiniciar jardín",je.addEventListener("click",()=>{ma(),Ee.remove(),c(n.ajustes.resetGardenSuccess)}),Le.appendChild(_e),Le.appendChild(je),ze.appendChild(Pe),ze.appendChild(Ve),ze.appendChild(Le),Ee.appendChild(ze),e.appendChild(Ee),je.focus()}),ye.appendChild(de),ye.appendChild(oe),Q.appendChild(Me),Q.appendChild(fe),Q.appendChild(ye),D.appendChild(Q),e.appendChild(D),oe.focus()}),f.appendChild(g),f.appendChild(y),f.appendChild(N),f.appendChild(L),f.appendChild(F),f.appendChild(ae);const _=document.createElement("div");_.className="settings-group";const we=document.createElement("h2");we.className="group-title",we.textContent=n.ajustes.weekTitle;const me=document.createElement("label");me.style.cssText="display: flex; align-items: center; justify-content: space-between; gap: var(--space-sm); cursor: pointer; min-height: var(--touch-target-min);";const Se=document.createElement("span");Se.className="group-desc",Se.style.margin="0",Se.textContent=n.ajustes.showWeekLabel;const ue=document.createElement("input");ue.type="checkbox",ue.style.cssText="width: 22px; height: 22px; accent-color: var(--color-bosque); cursor: pointer;",ue.checked=b.showWeekInGarden,ue.addEventListener("change",()=>{const D=He();X({...D,showWeekInGarden:ue.checked}),c("Preferencia de Mi semana actualizada")}),me.appendChild(Se),me.appendChild(ue);const Ne=document.createElement("div");Ne.style.cssText="display: flex; flex-direction: column; gap: 4px; margin-top: var(--space-xs);";const Y=document.createElement("span");Y.className="group-desc",Y.style.fontWeight="bold",Y.textContent=n.ajustes.weekDaysLabel;const Z=document.createElement("label");Z.className="radio-option";const $=document.createElement("input");$.type="radio",$.name="weekDays",$.value="work",$.checked=!b.weekShowWeekend,$.style.cssText="accent-color: var(--color-bosque);";const U=document.createElement("span");U.className="group-desc",U.style.margin="0",U.textContent=n.ajustes.weekDaysWork,Z.appendChild($),Z.appendChild(U);const he=document.createElement("label");he.className="radio-option";const ce=document.createElement("input");ce.type="radio",ce.name="weekDays",ce.value="all",ce.checked=b.weekShowWeekend,ce.style.cssText="accent-color: var(--color-bosque);";const ve=document.createElement("span");ve.className="group-desc",ve.style.margin="0",ve.textContent=n.ajustes.weekDaysAll,he.appendChild(ce),he.appendChild(ve);const Ke=D=>{const Q=He();X({...Q,weekShowWeekend:D}),c("Días de Mi semana actualizados")};$.addEventListener("change",()=>{$.checked&&Ke(!1)}),ce.addEventListener("change",()=>{ce.checked&&Ke(!0)}),Ne.appendChild(Y),Ne.appendChild(Z),Ne.appendChild(he);const Ge=document.createElement("label");Ge.style.cssText="display: flex; align-items: center; justify-content: space-between; gap: var(--space-sm); cursor: pointer; min-height: var(--touch-target-min);";const Ie=document.createElement("span");Ie.className="group-desc",Ie.style.margin="0",Ie.textContent=n.ajustes.showPatternsLabel;const qe=document.createElement("input");qe.type="checkbox",qe.style.cssText="width: 22px; height: 22px; accent-color: var(--color-bosque); cursor: pointer;",qe.checked=b.showPatterns,qe.addEventListener("change",()=>{const D=He();X({...D,showPatterns:qe.checked}),c("Preferencia de patrones actualizada")}),Ge.appendChild(Ie),Ge.appendChild(qe);const De=document.createElement("button");De.type="button",De.className="btn-action btn-secondary",De.style.marginTop="var(--space-xs)",De.textContent=n.ajustes.remindersBtn,De.addEventListener("click",()=>{window.location.hash="#/recordatorios"});const ke=document.createElement("label");ke.style.cssText="display: flex; align-items: center; justify-content: space-between; gap: var(--space-sm); cursor: pointer; min-height: var(--touch-target-min); margin-top: var(--space-xs);";const J=document.createElement("span");J.className="group-desc",J.style.margin="0",J.textContent=n.ajustes.vacationLabel;const ge=document.createElement("input");ge.type="checkbox",ge.style.cssText="width: 22px; height: 22px; accent-color: var(--color-bosque); cursor: pointer;",ge.checked=b.vacationMode,ge.addEventListener("change",()=>{const D=He();X({...D,vacationMode:ge.checked}),c("Preferencia de avisos actualizada")}),ke.appendChild(J),ke.appendChild(ge);const Ae=document.createElement("label");Ae.style.cssText="display: flex; align-items: center; justify-content: space-between; gap: var(--space-sm); cursor: pointer; min-height: var(--touch-target-min);";const Be=document.createElement("span");Be.className="group-desc",Be.style.margin="0",Be.textContent=n.ajustes.supportSuggestionsLabel;const be=document.createElement("input");be.type="checkbox",be.style.cssText="width: 22px; height: 22px; accent-color: var(--color-bosque); cursor: pointer;",be.checked=b.supportSuggestionsEnabled,be.addEventListener("change",()=>{const D=He();X({...D,supportSuggestionsEnabled:be.checked}),c("Preferencia de apoyo actualizada")}),Ae.appendChild(Be),Ae.appendChild(be);const xe=document.createElement("button");xe.type="button",xe.className="btn-action btn-secondary",xe.style.marginTop="var(--space-xs)",xe.textContent=n.ajustes.helpBtn,xe.addEventListener("click",()=>{window.location.hash="#/ayuda"}),_.appendChild(we),_.appendChild(me),_.appendChild(Ne),_.appendChild(Ge),_.appendChild(De),_.appendChild(ke),_.appendChild(Ae),_.appendChild(xe);const $e=document.createElement("div");$e.className="settings-group";const Ye=document.createElement("h2");Ye.className="group-title",Ye.textContent=n.ajustes.exportTitle;const Je=document.createElement("p");Je.className="group-desc",Je.textContent=n.ajustes.exportDesc;const Xe=document.createElement("button");Xe.className="btn-action btn-primary",Xe.textContent=n.ajustes.exportBtn,Xe.addEventListener("click",()=>{const D=Ka();if(!D.success||!D.data){c("Error al exportar los datos.");return}const Q=new Blob([D.data],{type:"application/json"}),Me=URL.createObjectURL(Q),fe=document.createElement("a");fe.href=Me,fe.download=`rorogarden_respaldo_${bt()}.json`,document.body.appendChild(fe),fe.click(),document.body.removeChild(fe),URL.revokeObjectURL(Me),c("Respaldo descargado con éxito.")}),$e.appendChild(Ye),$e.appendChild(Je),$e.appendChild(Xe);const Ce=document.createElement("div");Ce.className="settings-group";const le=document.createElement("h2");le.className="group-title",le.textContent=n.ajustes.importTitle;const ct=document.createElement("p");ct.className="group-desc",ct.textContent=n.ajustes.importDesc;const We=document.createElement("input");We.type="file",We.accept=".json,application/json",We.className="file-hidden";const Qe=document.createElement("button");Qe.className="btn-action btn-secondary",Qe.textContent=n.ajustes.importBtn,Qe.addEventListener("click",()=>{We.click()}),We.addEventListener("change",()=>{var Me;const D=(Me=We.files)==null?void 0:Me[0];if(!D)return;const Q=new FileReader;Q.onload=fe=>{var _e;const ye=(_e=fe.target)==null?void 0:_e.result;if(!ye)return;const de=document.createElement("div");de.className="modal-overlay";const oe=document.createElement("div");oe.className="modal-card";const Ee=document.createElement("h3");Ee.className="modal-title",Ee.textContent=n.ajustes.importTitle;const ze=document.createElement("p");ze.className="modal-desc",ze.textContent=n.ajustes.importConfirm;const Pe=document.createElement("div");Pe.className="modal-actions";const Ve=document.createElement("button");Ve.className="btn-action btn-secondary",Ve.textContent=n.app.cancel,Ve.addEventListener("click",()=>{de.remove(),We.value=""});const Le=document.createElement("button");Le.className="btn-action btn-primary",Le.textContent="Importar",Le.addEventListener("click",()=>{var Yt;de.remove(),We.value="";const je=en(ye);je.success?c(`${n.ajustes.importSuccess} (${(Yt=je.data)==null?void 0:Yt.imported} registros)`):c(je.error??n.ajustes.importError)}),Pe.appendChild(Ve),Pe.appendChild(Le),oe.appendChild(Ee),oe.appendChild(ze),oe.appendChild(Pe),de.appendChild(oe),e.appendChild(de),Le.focus()},Q.readAsText(D)}),Ce.appendChild(le),Ce.appendChild(ct),Ce.appendChild(Qe),Ce.appendChild(We);const Fe=document.createElement("div");Fe.className="settings-group";const E=document.createElement("h2");E.className="group-title",E.textContent="Copia en la nube";const z=document.createElement("p");z.className="group-desc",z.textContent="Podés respaldar tus datos en tu base de datos segura (SpiderWeb Arg). RoRoGarden sigue funcionando offline y guardando todo en tu dispositivo.";const P=document.createElement("div");P.style.cssText="display: flex; flex-direction: column; gap: var(--space-xs); margin-top: var(--space-xs);";const q=document.createElement("span");q.className="group-desc",q.style.fontWeight="bold",q.textContent="Tu clave de sincronización:";const O=document.createElement("div");O.style.cssText="display: flex; gap: var(--space-xs);";const B=document.createElement("input");B.type="text",B.value=Wt(),B.style.cssText="flex: 1; padding: var(--space-xs); border: 2px solid var(--color-bosque); border-radius: var(--border-radius-sm); font-family: monospace; font-size: 0.85rem; background: var(--color-crema); color: var(--color-tinta);",B.addEventListener("change",()=>{Wn(B.value),c("Clave de sincronización actualizada")});const V=document.createElement("button");V.type="button",V.className="btn-action btn-secondary",V.style.padding="0 var(--space-sm)",V.textContent="Copiar",V.addEventListener("click",()=>{navigator.clipboard&&(navigator.clipboard.writeText(B.value),c("Clave copiada al portapapeles"))}),O.appendChild(B),O.appendChild(V),P.appendChild(q),P.appendChild(O);const se=document.createElement("label");se.style.cssText="display: flex; align-items: center; justify-content: space-between; gap: var(--space-sm); cursor: pointer; min-height: var(--touch-target-min); margin-top: var(--space-xs);";const I=document.createElement("span");I.className="group-desc",I.style.margin="0",I.textContent="Sincronizar automáticamente en segundo plano";const ne=document.createElement("input");ne.type="checkbox",ne.style.cssText="width: 22px; height: 22px; accent-color: var(--color-bosque); cursor: pointer;",ne.checked=ga(),ne.addEventListener("change",()=>{Fn(ne.checked),c("Preferencia de sincronización actualizada")}),se.appendChild(I),se.appendChild(ne);const Te=document.createElement("div");Te.style.cssText="display: flex; flex-direction: column; gap: var(--space-xs); margin-top: var(--space-xs);";const Re=document.createElement("button");Re.type="button",Re.className="btn-action btn-primary",Re.textContent="Subir copia a la nube",Re.addEventListener("click",async()=>{Re.disabled=!0,Re.textContent="Subiendo...";const D=await ba();Re.disabled=!1,Re.textContent="Subir copia a la nube",c(D.message)});const lt=document.createElement("button");lt.type="button",lt.className="btn-action btn-secondary",lt.textContent="Descargar y fusionar desde la nube",lt.addEventListener("click",()=>{const D=document.createElement("div");D.className="modal-overlay";const Q=document.createElement("div");Q.className="modal-card";const Me=document.createElement("h3");Me.className="modal-title",Me.textContent="Recuperar de la nube";const fe=document.createElement("p");fe.className="modal-desc",fe.textContent="Se descargarán los registros guardados con tu clave en la base de datos y se fusionarán con este dispositivo. ¿Querés continuar?";const ye=document.createElement("div");ye.className="modal-actions";const de=document.createElement("button");de.className="btn-action btn-secondary",de.textContent=n.app.cancel,de.addEventListener("click",()=>D.remove());const oe=document.createElement("button");oe.className="btn-action btn-primary",oe.textContent="Descargar",oe.addEventListener("click",async()=>{D.remove(),c("Descargando datos...");const Ee=await Yn();c(Ee.message)}),ye.appendChild(de),ye.appendChild(oe),Q.appendChild(Me),Q.appendChild(fe),Q.appendChild(ye),D.appendChild(Q),e.appendChild(D)});const Ue=document.createElement("button");Ue.type="button",Ue.className="btn-action btn-secondary",Ue.style.fontSize="0.8rem",Ue.textContent="Probar conexión con el servidor",Ue.addEventListener("click",async()=>{Ue.disabled=!0,Ue.textContent="Comprobando...";const D=await Un();Ue.disabled=!1,Ue.textContent="Probar conexión con el servidor",D.available?c("¡Servidor conectado y listo!"):c(D.message)}),Te.appendChild(Re),Te.appendChild(lt),Te.appendChild(Ue),Fe.appendChild(E),Fe.appendChild(z),Fe.appendChild(P),Fe.appendChild(se),Fe.appendChild(Te);const dt=document.createElement("div");dt.className="settings-group";const yt=document.createElement("h2");yt.className="group-title",yt.textContent=n.ajustes.clearTitle;const Et=document.createElement("p");Et.className="group-desc",Et.textContent=n.ajustes.clearDesc;const Ct=document.createElement("button");Ct.className="btn-action btn-danger",Ct.textContent=n.ajustes.clearBtn,Ct.addEventListener("click",()=>{const D=document.createElement("div");D.className="modal-overlay";const Q=document.createElement("div");Q.className="modal-card";const Me=document.createElement("h3");Me.className="modal-title",Me.textContent=n.ajustes.clearTitle;const fe=document.createElement("p");fe.className="modal-desc",fe.textContent=n.ajustes.clearFirstConfirm;const ye=document.createElement("div");ye.className="modal-actions";const de=document.createElement("button");de.className="btn-action btn-secondary",de.textContent=n.app.cancel,de.addEventListener("click",()=>D.remove());const oe=document.createElement("button");oe.className="btn-action btn-danger",oe.textContent="Sí, continuar",oe.addEventListener("click",()=>{D.remove();const Ee=document.createElement("div");Ee.className="modal-overlay";const ze=document.createElement("div");ze.className="modal-card";const Pe=document.createElement("h3");Pe.className="modal-title",Pe.textContent="Confirmación final";const Ve=document.createElement("p");Ve.className="modal-desc",Ve.textContent=n.ajustes.clearSecondConfirm;const Le=document.createElement("div");Le.className="modal-actions";const _e=document.createElement("button");_e.className="btn-action btn-secondary",_e.textContent=n.app.cancel,_e.addEventListener("click",()=>Ee.remove());const je=document.createElement("button");je.className="btn-action btn-danger",je.textContent="Borrar definitivamente",je.addEventListener("click",()=>{Za(),Ee.remove(),c(n.ajustes.clearSuccess)}),Le.appendChild(_e),Le.appendChild(je),ze.appendChild(Pe),ze.appendChild(Ve),ze.appendChild(Le),Ee.appendChild(ze),e.appendChild(Ee),je.focus()}),ye.appendChild(de),ye.appendChild(oe),Q.appendChild(Me),Q.appendChild(fe),Q.appendChild(ye),D.appendChild(Q),e.appendChild(D),oe.focus()}),dt.appendChild(yt),dt.appendChild(Et),dt.appendChild(Ct);const et=document.createElement("div");et.className="settings-group";const wt=document.createElement("h2");wt.className="group-title",wt.textContent="La app",et.appendChild(wt);const pt=document.createElement("button");pt.type="button",pt.className="btn-action btn-secondary",pt.textContent=n.ajustes.welcomeBtn,pt.addEventListener("click",()=>{window.location.hash="#/bienvenida"}),et.appendChild(pt);const mt=document.createElement("button");mt.type="button",mt.className="btn-action btn-secondary",mt.textContent=n.ajustes.installBtn,mt.addEventListener("click",()=>{window.location.hash="#/instalar"}),et.appendChild(mt);const St=document.createElement("button");St.type="button",St.className="btn-action btn-secondary",St.textContent=n.ajustes.aboutBtn,St.addEventListener("click",()=>{window.location.hash="#/acerca"}),et.appendChild(St);const tt=document.createElement("div");tt.id="ajustes-update-card",tt.style.display="none",tt.className="update-card";const Nt=document.createElement("p");Nt.className="update-card-text",Nt.textContent=n.updateReady.text,tt.appendChild(Nt);const ot=document.createElement("button");return ot.type="button",ot.className="btn-primary",ot.style.marginTop="var(--space-xs)",ot.textContent=n.updateReady.updateBtn,ot.addEventListener("click",()=>window.location.reload()),tt.appendChild(ot),et.appendChild(tt),document.addEventListener("swUpdated",()=>{tt.style.display="block"},{once:!0}),e.appendChild(r),e.appendChild(o),e.appendChild(d),s&&e.appendChild(s),e.appendChild(l),e.appendChild(f),e.appendChild(_),e.appendChild($e),e.appendChild(Ce),e.appendChild(Fe),e.appendChild(dt),e.appendChild(et),e.appendChild(S),t.appendChild(e),()=>{a.remove()}}const Zt={voz:"Voz",cuerpo:"Cuerpo",silencio:"Silencio",respiracion:"Respiración",animo:"Ánimo"},ht="Si la ronquera te dura varios días, consultá con una fonoaudióloga o un médico.",Pt=[{id:"voz-silencio",category:"voz",title:"Pausa vocal en silencio",durationSeconds:60,steps:["Dejá de hablar por un minuto completo.","Aflojá los labios y dejá la boca apenas entreabierta.","Tomá aire suave por la nariz y descansá las cuerdas vocales."],note:ht},{id:"voz-bostezo",category:"voz",title:"Bostezo suave para soltar",durationSeconds:60,steps:["Provocá un bostezo lento abriendo la boca sin forzar.","Sentí cómo baja la mandíbula y se ensancha la garganta.","Soltá el aire con un suspiro mudo y relajá la lengua."],note:ht},{id:"voz-agua",category:"voz",title:"Tomar agua despacio",durationSeconds:60,steps:["Servite un vaso de agua fresca o tibia.","Tomá un sorbo chico y mantenelo un segundo en la boca.","Tragá despacio sintiendo cómo hidrata la garganta."],note:ht},{id:"voz-zumbido",category:"voz",title:'Zumbido suave con "mmm"',durationSeconds:60,steps:["Juntá los labios suavemente, sin apretar los dientes.",'Emití un sonido "mmm" bajito y cómodo, como masticando algo rico.',"Notá la vibración cosquilleando en los labios y la nariz."],note:ht},{id:"voz-grave",category:"voz",title:"Tono más grave y pausado",durationSeconds:75,steps:["Pensá en tu tono de voz habitual cuando hay mucho barullo.","Bajá un poquito el volumen y hablá un tono más grave.","Hacé pausas de un segundo entre frase y frase para no forzar."],note:ht},{id:"cuerpo-cuello",category:"cuerpo",title:"Estirar cuello y hombros",durationSeconds:60,steps:["Dejá caer la oreja derecha hacia el hombro derecho con suavidad.","Mantené tres respiraciones sin tironear y volvé al centro.","Repetí hacia el lado izquierdo y después rodá los hombros hacia atrás."]},{id:"cuerpo-espalda",category:"cuerpo",title:"Aliviar la espalda baja",durationSeconds:75,steps:["Parate con los pies separados al ancho de caderas.","Flexioná apenas las rodillas y apoyá las manos sobre los muslos.","Redondeá la columna como un gatito y después estirala suavemente."]},{id:"cuerpo-munecas-pies",category:"cuerpo",title:"Mover muñecas y tobillos",durationSeconds:60,steps:["Hacé círculos suaves con las dos muñecas hacia afuera y hacia adentro.","Sacudí los dedos como si te estuvieras secando gotitas de agua.","Levantá un pie y dibujá círculos con el tobillo; luego cambiá de pie."]},{id:"cuerpo-pies-apoyo",category:"cuerpo",title:"Apoyar los pies en la tierra",durationSeconds:60,steps:["Apoyá las dos plantas de los pies bien firmes en el piso.","Sentí el peso de tu cuerpo descargando hacia el suelo.","Aflojá las rodillas y dejá que los hombros caigan con calma."]},{id:"silencio-pico-ruido",category:"silencio",title:"Pausa tras un pico de ruido",durationSeconds:60,steps:["Cerrá los ojos unos segundos después del momento más ruidoso.","No intentes apagar los sonidos de alrededor; solo dejalos pasar.","Llevá tu atención al aire fresco entrando por tu nariz."]},{id:"silencio-oidos",category:"silencio",title:"Cubrir los oídos con las palmas",durationSeconds:60,steps:["Frotá las palmas de las manos para darles tibieza.","Tapate los oídos suavemente con las palmas ahuecadas.","Disfrutá del sonido apagado del mar adentro tuyo por unas respiraciones."]},{id:"silencio-ventana",category:"silencio",title:"Mirar a lo lejos por la ventana",durationSeconds:60,steps:["Acercate a una ventana o mirá el punto más lejano de la sala.","Desenfocá la vista del plano cercano y mirá un árbol o el cielo.","Parpadeá despacito dejando que los ojos descansen del foco corto."]},{id:"respiracion-tres-suspiros",category:"respiracion",title:"Tres suspiros hondos",durationSeconds:45,steps:["Tomá aire profundo por la nariz llenando el pecho.","Soltalo de golpe por la boca con un suspiro sonoro y aliviado.","Repetí dos veces más soltando cualquier tensión acumulada."]},{id:"respiracion-contar-lento",category:"respiracion",title:"Soltar el aire despacito",durationSeconds:60,steps:["Inhalá en 1, 2, 3 por la nariz.","Exhalá suavemente por la boca contando mentalmente hasta 6.","Repetí a tu propio ritmo sin apuro."]},{id:"respiracion-pecho-panza",category:"respiracion",title:"Mano en el pecho y mano en la panza",durationSeconds:60,steps:["Colocá una mano en el pecho y la otra en el ombligo.","Notá cuál de las dos manos se mueve más al respirar.","Buscá que el aire baje suave hacia la panza, inflando la mano de abajo."]},{id:"animo-cosa-bien",category:"animo",title:"Una cosa que hiciste bien hoy",durationSeconds:60,steps:["Pensá en un momento chiquito de hoy que salió lindo.","Puede ser una sonrisa, un abrazo, un límite puesto con cariño.","Reconocételo en silencio: eso también fue tu trabajo y tuvo valor."]},{id:"animo-sin-comparar",category:"animo",title:"Un minuto sin compararte",durationSeconds:60,steps:["Recordá que cada sala y cada grupo tienen dinámicas distintas.",'Soltá lo que creés que "otra docente haría mejor".',"Hacés lo mejor que podés con los recursos y el día que tenés hoy."]},{id:"animo-agradecer",category:"animo",title:"Agradecé un detalle del día",durationSeconds:60,steps:["Buscá un detalle simple del día: un mate caliente, el sol, una risa.","Traé esa imagen a la cabeza y sentí el agradecimiento en el pecho.","Guardalo como un pequeño refugio para cuando lo necesites."]}];function At(t,e){const a=[...t];for(let r=a.length-1;r>0;r--){const o=Math.floor(e()*(r+1)),i=a[r];a[r]=a[o],a[o]=i}return a}function Qn(t,e={}){const a=e.count??3,r=e.rng??Math.random,o=new Set(e.excludeIds??[]);let i=t.filter(T=>!(e.category&&e.category!=="todas"&&T.category!==e.category||e.maxDuration&&T.durationSeconds>e.maxDuration));if(i.length===0)return[];const d=i.filter(T=>!o.has(T.id));if(d.length>=a)return At(d,r).slice(0,a);const s=At(d,r),S=a-s.length,c=i.filter(T=>o.has(T.id)),l=At(c,r).slice(0,S);return[...s,...l].slice(0,a)}const Zn=["todas","voz","cuerpo","silencio","respiracion","animo"];function Kn(t){const e=document.createElement("section");e.className="pausa-view screen-fade-in",e.setAttribute("aria-label",n.pausa.title);const a=document.createElement("style");a.textContent=`
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
  `,document.head.appendChild(a);const r=document.createElement("nav");r.className="pausa-nav",r.setAttribute("aria-label","Navegación de pausa");const o=document.createElement("button");o.className="pausa-nav-btn",o.textContent=n.app.back,o.setAttribute("aria-label","Volver al jardín"),o.addEventListener("click",()=>{window.location.hash="#/jardin"}),r.appendChild(o);const i=document.createElement("header");i.className="pausa-header";const d=document.createElement("h1");d.className="pausa-title",d.textContent=n.pausa.title;const s=document.createElement("p");s.className="pausa-subtitle",s.textContent=n.pausa.subtitle,i.appendChild(d),i.appendChild(s);let S="todas",c=[];const l=document.createElement("div");l.className="filter-bar",l.setAttribute("role","radiogroup"),l.setAttribute("aria-label","Filtrar por categoría");const T=[],M=document.createElement("div");M.className="challenges-list",M.setAttribute("aria-live","polite");function x(g,y){M.innerHTML="";const k=Qn(Pt,{count:3,category:g,excludeIds:y});c=k.map(w=>w.id),k.forEach(w=>{const N=document.createElement("article");N.className="challenge-card";const A=document.createElement("div");A.className="challenge-card-top";const G=document.createElement("span");G.className="challenge-category-badge",G.textContent=Zt[w.category];const H=document.createElement("span");H.className="challenge-duration",H.textContent=`${w.durationSeconds} seg`,A.appendChild(G),A.appendChild(H);const C=document.createElement("h2");C.className="challenge-card-title",C.textContent=w.title;const j=document.createElement("button");j.className="challenge-btn-start",j.setAttribute("aria-label",`Empezar desafío: ${w.title}`),j.appendChild(K("play",{size:10})),j.appendChild(document.createTextNode(` ${n.pausa.startBtn}`)),j.addEventListener("click",()=>{window.location.hash=`#/desafio/${w.id}`}),N.appendChild(A),N.appendChild(C),N.appendChild(j),M.appendChild(N)})}Zn.forEach(g=>{const y=document.createElement("button");y.className=`filter-chip ${g===S?"active":""}`,y.setAttribute("role","radio"),y.setAttribute("aria-checked",g===S?"true":"false"),y.textContent=g==="todas"?n.pausa.filterAll:Zt[g],y.addEventListener("click",()=>{S=g,T.forEach(k=>{k.classList.remove("active"),k.setAttribute("aria-checked","false")}),y.classList.add("active"),y.setAttribute("aria-checked","true"),x(S,[])}),T.push(y),l.appendChild(y)});const v=document.createElement("button");v.className="btn-other-ideas",v.appendChild(K("rotate",{size:12})),v.appendChild(document.createTextNode(` ${n.pausa.otherIdeasBtn}`)),v.addEventListener("click",()=>{x(S,c)});const p=document.createElement("aside");p.className="respirar-card";const m=document.createElement("h2");m.className="respirar-card-title",m.appendChild(K("wind",{size:12})),m.appendChild(document.createTextNode(` ${n.pausa.respirarCardTitle}`));const h=document.createElement("p");h.className="respirar-card-desc",h.textContent=n.pausa.respirarCardDesc;const b=document.createElement("button");b.className="respirar-card-btn",b.textContent=n.pausa.respirarBtn,b.setAttribute("aria-label","Ir a la pantalla de respiración guiada"),b.addEventListener("click",()=>{window.location.hash="#/respirar"}),p.appendChild(m),p.appendChild(h),p.appendChild(b);const f=document.createElement("button");return f.className="btn-now-not",f.textContent=n.pausa.nowNotBtn,f.setAttribute("aria-label","Volver al jardín sin hacer una pausa ahora"),f.addEventListener("click",()=>{window.location.hash="#/jardin"}),x(S,[]),e.appendChild(r),e.appendChild(i),e.appendChild(l),e.appendChild(M),e.appendChild(v),e.appendChild(p),e.appendChild(f),t.appendChild(e),()=>{a.remove()}}function eo(t,e){const a=Pt.find(Y=>Y.id===e)??Pt[0],r=document.createElement("section");r.className="desafio-view screen-fade-in",r.setAttribute("aria-label",a.title);const o=document.createElement("style");o.textContent=`
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
  `,document.head.appendChild(o);let i=null;const d=async()=>{var Y;try{"wakeLock"in navigator&&typeof((Y=navigator.wakeLock)==null?void 0:Y.request)=="function"&&(i=await navigator.wakeLock.request("screen"))}catch{}},s=()=>{try{i&&typeof i.release=="function"&&(i.release(),i=null)}catch{}};d();const S=document.createElement("div");S.className="desafio-top-bar";const c=document.createElement("span");c.className="desafio-step-badge";const l=document.createElement("button");l.className="desafio-quit-btn",l.textContent=n.desafio.quitBtn,l.setAttribute("aria-label","Terminar el desafío antes"),S.appendChild(c),S.appendChild(l);const T=document.createElement("div");T.className="desafio-progress-track",T.setAttribute("role","progressbar"),T.setAttribute("aria-valuemin","0"),T.setAttribute("aria-valuemax","100"),T.setAttribute("aria-valuenow","0");const M=document.createElement("div");M.className="desafio-progress-fill",T.appendChild(M);const x=document.createElement("div");x.className="desafio-canvas-wrap",x.setAttribute("aria-hidden","true");const v=a.category==="cuerpo"?Ia:a.category==="silencio"?Da:a.category==="respiracion"?qa:Vt,p=4,{canvas:m,ctx:h}=Oe(32*p,32*p),b=pe(v),f=new _t(()=>{h.clearRect(0,0,32*p,32*p),te(h,b,0,0,p)});f.add(b),f.start(),te(h,b,0,0,p),x.appendChild(m);const g=document.createElement("div");g.className="desafio-content";const y=document.createElement("h1");y.className="desafio-title",y.textContent=a.title;const k=document.createElement("div");k.className="desafio-step-card",k.setAttribute("aria-live","polite");const w=document.createElement("p");w.className="desafio-step-text",k.appendChild(w);let N=null;a.note&&(N=document.createElement("p"),N.className="desafio-note",N.textContent=a.note,k.appendChild(N)),g.appendChild(y),g.appendChild(x),g.appendChild(k);const A=document.createElement("div");A.className="desafio-actions";const G=document.createElement("button");G.className="btn-step-next",G.textContent=n.desafio.nextBtn;const H=document.createElement("div");H.className="desafio-sub-actions";const C=document.createElement("button");C.className="btn-pause-toggle";const j=K("pause",{size:10});C.appendChild(j);const W=document.createTextNode(` ${n.desafio.pauseBtn}`);C.appendChild(W),H.appendChild(C),A.appendChild(G),A.appendChild(H);let R=0;const u=a.steps.length;let L=!1,F=!1;const ae=Date.now();let _=0,we=0;function me(){c.textContent=`${n.desafio.stepLabel} ${R+1} ${n.desafio.stepOf} ${u}`,w.textContent=a.steps[R],R===u-1?G.textContent=n.desafio.finishBtn:G.textContent=n.desafio.nextBtn}me();let Se=null;function ue(){if(!L&&!F){const Y=Date.now()-ae-_,Z=Math.min(1,Y/(a.durationSeconds*1e3)),$=Math.floor(Z*100);M.style.width=`${$}%`,T.setAttribute("aria-valuenow",$.toString())}Se=requestAnimationFrame(ue)}Se=requestAnimationFrame(ue),C.addEventListener("click",()=>{L=!L,C.innerHTML="",L?(we=Date.now(),C.appendChild(K("play",{size:10})),C.appendChild(document.createTextNode(` ${n.desafio.resumeBtn}`))):(_+=Date.now()-we,C.appendChild(K("pause",{size:10})),C.appendChild(document.createTextNode(` ${n.desafio.pauseBtn}`)))});function Ne(Y,Z){F=!0,s(),Se&&cancelAnimationFrame(Se),vt();const $=Math.round((Date.now()-ae-_)/1e3);pa("desafio",{challengeId:a.id,title:a.title,category:a.category,durationSeconds:$,completed:Y}),r.innerHTML="";const U=document.createElement("div");U.className="desafio-finish-state";const he=document.createElement("h2");he.className="desafio-finish-title",he.textContent=n.desafio.doneTitle;const ce=document.createElement("p");ce.className="desafio-finish-text",ce.textContent=Z;const ve=document.createElement("button");ve.className="btn-step-next",ve.textContent=n.desafio.backToGarden,ve.addEventListener("click",()=>{window.location.hash="#/jardin"}),U.appendChild(x),U.appendChild(he),U.appendChild(ce),U.appendChild(ve),r.appendChild(U),ve.focus()}return G.addEventListener("click",()=>{R<u-1?(R+=1,me(),vt()):Ne(!0,n.desafio.doneMessage)}),l.addEventListener("click",()=>{Ne(!1,n.desafio.quitWarmth)}),r.appendChild(S),r.appendChild(T),r.appendChild(g),r.appendChild(A),t.appendChild(r),()=>{s(),Se&&cancelAnimationFrame(Se),f.stop(),o.remove()}}const Ht={suave:{id:"suave",name:"Suave",subtitle:"4 seg - 6 seg",description:"Inhalar en 4, exhalar en 6. Ideal para aflojar el cuerpo y bajar un cambio.",phases:[{type:"inhalar",durationSeconds:4,label:"Tomá aire despacito por la nariz",salaLabel:"Inflamos como un globo"},{type:"exhalar",durationSeconds:6,label:"Soltá el aire lento por la boca",salaLabel:"Soltamos el aire como una brisa"}],cycleDurationSeconds:10},cuadrada:{id:"cuadrada",name:"Cuadrada",subtitle:"4 - 4 - 4 - 4",description:"Cuatro tiempos iguales con pausas suaves. Ayuda a despejar y ordenar la mente.",phases:[{type:"inhalar",durationSeconds:4,label:"Tomá aire despacito",salaLabel:"Tomamos aire juntos"},{type:"pausa",durationSeconds:4,label:"Sostené un instante sin apretar",salaLabel:"Esperamos quietitos como ranas"},{type:"exhalar",durationSeconds:4,label:"Soltá el aire despacito",salaLabel:"Soltamos el aire suave"},{type:"pausa",durationSeconds:4,label:"Un segundito en calma",salaLabel:"Quedamos en silencio"}],cycleDurationSeconds:16},corta:{id:"corta",name:"Corta",subtitle:"3 seg - 5 seg",description:"Rápida y liviana. Perfecta para un minuto entre una actividad y la siguiente.",phases:[{type:"inhalar",durationSeconds:3,label:"Aire adentro",salaLabel:"Aire adentro despacio"},{type:"exhalar",durationSeconds:5,label:"Aire afuera largo",salaLabel:"Soplamos como una pluma"}],cycleDurationSeconds:8}};function to(t,e,a,r=!1){const o=Math.max(0,e);if(o>=a){const m=t.phases[t.phases.length-1];return{isFinished:!0,currentPhaseIndex:t.phases.length-1,currentPhase:m,phaseElapsedSeconds:m.durationSeconds,phaseRemainingSeconds:0,phaseProgress:1,cycleIndex:Math.floor(a/t.cycleDurationSeconds),totalElapsedSeconds:a,totalDurationSeconds:a,totalProgress:1,displayText:r?"¡Muy bien, terminamos!":"Sesión completada con calma"}}const d=o%t.cycleDurationSeconds,s=Math.floor(o/t.cycleDurationSeconds);let S=0,c=0,l=t.phases[0];for(let m=0;m<t.phases.length;m++){const h=t.phases[m];if(d<S+h.durationSeconds){c=m,l=h;break}S+=h.durationSeconds}const T=d-S,M=Math.max(0,l.durationSeconds-T),x=Math.min(1,Math.max(0,T/l.durationSeconds)),v=Math.min(1,Math.max(0,o/a)),p=r?l.salaLabel:l.label;return{isFinished:!1,currentPhaseIndex:c,currentPhase:l,phaseElapsedSeconds:T,phaseRemainingSeconds:M,phaseProgress:x,cycleIndex:s,totalElapsedSeconds:o,totalDurationSeconds:a,totalProgress:v,displayText:p}}function ao(t){const e=document.createElement("section");e.className="respirar-view screen-fade-in",e.setAttribute("aria-label",n.respirar.title);const a=document.createElement("style");a.textContent=`
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
  `,document.head.appendChild(a);let r=null;const o=async()=>{var R;try{"wakeLock"in navigator&&typeof((R=navigator.wakeLock)==null?void 0:R.request)=="function"&&(r=await navigator.wakeLock.request("screen"))}catch{}},i=()=>{try{r&&typeof r.release=="function"&&(r.release(),r=null)}catch{}},d=document.createElement("nav");d.className="respirar-nav";const s=document.createElement("button");s.className="respirar-back-btn",s.textContent=n.app.back,s.setAttribute("aria-label","Volver a la selección de pausa"),s.addEventListener("click",()=>{window.location.hash="#/pausa"}),d.appendChild(s);let S="suave",c=1,l=!1;const T=document.createElement("div");T.className="respirar-setup";const M=document.createElement("header");M.className="setup-header";const x=document.createElement("h1");x.className="setup-title",x.textContent=n.respirar.title;const v=document.createElement("p");v.className="setup-subtitle",v.textContent=n.respirar.subtitle,M.appendChild(x),M.appendChild(v);const p=document.createElement("p");p.className="setup-section-label",p.textContent=n.respirar.patternLabel;const m=document.createElement("div");m.className="options-row",m.setAttribute("role","radiogroup"),m.setAttribute("aria-label",n.respirar.patternLabel);const h=[];Object.keys(Ht).forEach(R=>{const u=Ht[R],L=document.createElement("button");L.className=`option-btn ${R===S?"active":""}`,L.setAttribute("role","radio"),L.setAttribute("aria-checked",R===S?"true":"false"),L.innerHTML=`<strong>${u.name}</strong><span>${u.subtitle}</span>`,L.addEventListener("click",()=>{S=R,h.forEach(F=>{F.classList.remove("active"),F.setAttribute("aria-checked","false")}),L.classList.add("active"),L.setAttribute("aria-checked","true")}),h.push(L),m.appendChild(L)});const b=document.createElement("p");b.className="setup-section-label",b.textContent=n.respirar.durationLabel;const f=document.createElement("div");f.className="options-row",f.setAttribute("role","radiogroup"),f.setAttribute("aria-label",n.respirar.durationLabel);const g=[{min:1,label:n.respirar.minute1},{min:2,label:n.respirar.minute2},{min:3,label:n.respirar.minute3}],y=[];g.forEach(R=>{const u=document.createElement("button");u.className=`option-btn ${R.min===c?"active":""}`,u.setAttribute("role","radio"),u.setAttribute("aria-checked",R.min===c?"true":"false"),u.textContent=R.label,u.addEventListener("click",()=>{c=R.min,y.forEach(L=>{L.classList.remove("active"),L.setAttribute("aria-checked","false")}),u.classList.add("active"),u.setAttribute("aria-checked","true")}),y.push(u),f.appendChild(u)});const k=document.createElement("label");k.className="sala-switch-row";const w=document.createElement("div");w.className="sala-label-wrap";const N=document.createElement("span");N.className="sala-label-title",N.textContent=n.respirar.salaModeTitle;const A=document.createElement("span");A.className="sala-label-desc",A.textContent=n.respirar.salaModeDesc,w.appendChild(N),w.appendChild(A);const G=document.createElement("input");G.type="checkbox",G.className="sala-checkbox",G.checked=l,G.addEventListener("change",()=>{l=G.checked}),k.appendChild(w),k.appendChild(G);const H=document.createElement("p");H.className="respirar-warning",H.textContent=n.respirar.warning;const C=document.createElement("button");C.className="btn-start-breathing",C.appendChild(K("play",{size:12})),C.appendChild(document.createTextNode(` ${n.respirar.startBtn}`)),T.appendChild(M),T.appendChild(p),T.appendChild(m),T.appendChild(b),T.appendChild(f),T.appendChild(k),T.appendChild(H),T.appendChild(C);let j=null;function W(){o(),e.innerHTML="";const R=document.createElement("div");R.className="breathing-active-wrap";const u=document.createElement("div");u.className="respirar-nav";const L=document.createElement("button");L.className="respirar-back-btn",L.textContent=n.respirar.quitBtn,u.appendChild(L);const F=document.createElement("div");F.className="breathing-circle-container";const ae=document.createElement("div");ae.className="breathing-orb";const _=3,{canvas:we,ctx:me}=Oe(32*_,32*_),Se=pe(Ba),ue=pe(Ra),Ne=pe(Vt);ae.appendChild(we),F.appendChild(ae);const Y=document.createElement("p");Y.className=`breathing-phase-text ${l?"sala-mode":""}`,Y.setAttribute("aria-live","polite");const Z=document.createElement("div");Z.className="breathing-controls";const $=document.createElement("button");$.className="btn-b-control secondary",$.appendChild(K("pause",{size:10})),$.appendChild(document.createTextNode(` ${n.respirar.pauseBtn}`)),Z.appendChild($),R.appendChild(u),R.appendChild(Y),R.appendChild(F),R.appendChild(Z),e.appendChild(R);const U=Ht[S],he=c*60,ce=Date.now();let ve=0,Ke=0,Ge=!1,Ie="";function qe(ke,J){j&&cancelAnimationFrame(j),i(),vt();const ge=Math.round((Date.now()-ce-ve)/1e3);pa("respiracion",{pattern:U.id,durationSeconds:ge,salaMode:l,completed:ke}),e.innerHTML="";const Ae=document.createElement("div");Ae.className="respirar-setup",Ae.style.textAlign="center";const Be=document.createElement("h2");Be.className="setup-title",Be.textContent=n.respirar.doneTitle;const be=document.createElement("p");be.className="setup-subtitle",be.textContent=J;const xe=document.createElement("button");xe.className="btn-start-breathing",xe.textContent=n.respirar.backToGarden,xe.addEventListener("click",()=>{window.location.hash="#/jardin"}),Ae.appendChild(Be),Ae.appendChild(be),Ae.appendChild(xe),e.appendChild(Ae),xe.focus()}$.addEventListener("click",()=>{Ge=!Ge,$.innerHTML="",Ge?(Ke=Date.now(),$.appendChild(K("play",{size:10})),$.appendChild(document.createTextNode(` ${n.respirar.resumeBtn}`))):(ve+=Date.now()-Ke,$.appendChild(K("pause",{size:10})),$.appendChild(document.createTextNode(` ${n.respirar.pauseBtn}`)))}),L.addEventListener("click",()=>{qe(!1,n.respirar.quitWarmth)});function De(){if(!Ge){const ke=(Date.now()-ce-ve)/1e3,J=to(U,ke,he,l);if(J.isFinished){qe(!0,l?n.respirar.doneMessageSala:n.respirar.doneMessage);return}J.currentPhase.type!==Ie&&(Ie=J.currentPhase.type,vt()),Y.textContent=J.displayText;let ge=.85;J.currentPhase.type==="inhalar"?ge=.85+.35*J.phaseProgress:J.currentPhase.type==="pausa"?ge=1.2:J.currentPhase.type==="exhalar"&&(ge=1.2-.35*J.phaseProgress),ae.style.transform=`scale(${ge})`,me.clearRect(0,0,32*_,32*_),J.currentPhase.type==="inhalar"?te(me,Se,0,0,_):J.currentPhase.type==="exhalar"?te(me,ue,0,0,_):te(me,Ne,0,0,_)}j=requestAnimationFrame(De)}vt(),j=requestAnimationFrame(De)}return C.addEventListener("click",()=>{W()}),e.appendChild(d),e.appendChild(T),t.appendChild(e),()=>{i(),j&&cancelAnimationFrame(j),a.remove()}}function no(t){t.innerHTML="";const e=document.createElement("section");e.className="coleccion-screen",e.setAttribute("role","main"),e.setAttribute("aria-label",n.coleccion.title);const a=document.createElement("style");a.textContent=`
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
  `,document.head.appendChild(a);const r=He(),o=new Set(r.obtainedItemIds),i=new Map(r.placedDecorations.map(T=>[T.catalogId,T])),d=$t.filter(T=>o.has(T.id)),s=document.createElement("div");s.className="coleccion-top";const S=document.createElement("button");S.className="back-btn",S.textContent=n.coleccion.back,S.setAttribute("aria-label","Volver al jardín"),S.addEventListener("click",()=>{window.location.hash="#/jardin"});const c=document.createElement("h1");c.className="coleccion-title",c.textContent=n.coleccion.title;const l=document.createElement("button");if(l.className="btn-acomodar-top",l.textContent=n.jardin.decorarBtn,l.setAttribute("aria-label","Acomodar elementos en el jardín"),l.addEventListener("click",()=>{window.location.hash="#/jardin?modo=acomodar"}),s.appendChild(S),s.appendChild(c),s.appendChild(l),e.appendChild(s),d.length===0){const T=document.createElement("div");T.className="empty-card";const M=document.createElement("p");M.className="empty-text",M.textContent=n.coleccion.emptyHint,T.appendChild(M),e.appendChild(T)}else{const T=["visitantes","hongos","plantas","agua","cielo","cositas"];for(const M of T){const x=d.filter(h=>h.category===M);if(x.length===0)continue;const v=document.createElement("div");v.className="category-section";const p=document.createElement("h2");p.className="category-title",p.textContent=on[M],v.appendChild(p);const m=document.createElement("div");m.className="items-grid";for(const h of x){const b=oo(h,i.has(h.id));m.appendChild(b)}v.appendChild(m),e.appendChild(v)}}return t.appendChild(e),()=>{a.remove()}}function oo(t,e){const a=document.createElement("div");a.className="item-card";const r=document.createElement("div");r.className="item-sprite-wrap";const{canvas:o,ctx:i}=Oe(48,48),d=pe(t.sprite);te(i,d,0,0,3),r.appendChild(o);const s=document.createElement("div");s.className="item-info";const S=document.createElement("h3");S.className="item-name",S.textContent=t.name;const c=document.createElement("p");if(c.className="item-desc",c.textContent=t.description,s.appendChild(S),s.appendChild(c),e){const T=document.createElement("span");T.className="item-badge",T.textContent=n.coleccion.placedBadge,s.appendChild(T)}const l=document.createElement("button");return l.className="item-action-btn",l.textContent=n.jardin.decorarBtn,l.setAttribute("aria-label",`Acomodar ${t.name} en el jardín`),l.addEventListener("click",()=>{window.location.hash=`#/jardin?modo=acomodar&item=${t.id}`}),a.appendChild(r),a.appendChild(s),a.appendChild(l),a}const Kt={1:"Lunes",2:"Martes",3:"Miércoles",4:"Jueves",5:"Viernes",6:"Sábado",7:"Domingo"},ro={voz:"Voz",cuerpo:"Cuerpo",silencio:"Silencio",respiracion:"Respiración",animo:"Ánimo"},ea=["enero","febrero","marzo","abril","mayo","junio","julio","agosto","septiembre","octubre","noviembre","diciembre"];function Gt(t){const e=t.getFullYear(),a=String(t.getMonth()+1).padStart(2,"0"),r=String(t.getDate()).padStart(2,"0");return`${e}-${a}-${r}`}function io(t){const[e,a,r]=t.split("-").map(Number);return new Date(e,a-1,r)}function so(t){const e=new Date(t.getFullYear(),t.getMonth(),t.getDate()),a=e.getDay(),r=a===0?-6:1-a;return e.setDate(e.getDate()+r),e}function co(t,e){const a=t.getDate(),r=e.getDate(),o=ea[t.getMonth()],i=ea[e.getMonth()],d=t.getFullYear(),s=e.getFullYear();return o===i&&d===s?`Semana del ${a} al ${r} de ${o}`:d===s?`Semana del ${a} de ${o} al ${r} de ${i}`:`Semana del ${a} de ${o} (${d}) al ${r} de ${i} (${s})`}function lo({entries:t,referenceDate:e=new Date,weekOffset:a=0,includeWeekend:r=!1}){const o=Math.min(0,a),i=so(e),d=new Date(i);d.setDate(d.getDate()+o*7);const s=r?7:5,S=new Date(d);S.setDate(S.getDate()+(s-1));const c=o===0,l=o<0,T=[],M=[];for(let f=0;f<s;f++){const g=new Date(d);g.setDate(g.getDate()+f);const y=Gt(g);M.push(y);const k=f+1,w=Kt[k],N=t.filter(H=>H.date===y&&(H.type==="checkin"||H.type==="diario")).sort((H,C)=>C.createdAt.localeCompare(H.createdAt));let A=null;for(const H of N)if("mood"in H.data&&H.data.mood){A=H.data.mood;break}const G=A?`${w}: ${A}`:w;T.push({date:y,dayNumber:k,dayName:w,mood:A,accessibleLabel:G})}const x=[],v=new Set(M),p=t.filter(f=>f.type==="diario"&&v.has(f.date)).sort((f,g)=>f.date!==g.date?g.date.localeCompare(f.date):g.createdAt.localeCompare(f.createdAt));for(const f of p){const g=f.data;if(g.lindo&&g.lindo.trim().length>0){const k=io(f.date).getDay(),w=k===0?7:k;if(x.push({dayName:Kt[w],text:g.lindo.trim(),date:f.date}),x.length>=3)break}}const m=new Set,h=t.filter(f=>(f.type==="desafio"||f.type==="respiracion")&&v.has(f.date));for(const f of h)if(f.type==="respiracion")m.add("Respiración");else if(f.type==="desafio"&&"category"in f.data){const g=f.data.category,y=ro[g]??g;m.add(y)}const b=Array.from(m).sort();return{startDate:Gt(d),endDate:Gt(S),label:co(d,S),isCurrentWeek:c,canGoNext:l,days:T,niceMoments:x,caredCategories:b}}const zt={MIN_DAY_RECORDS:5,THRESHOLD_RATIO:.7},po={1:"los lunes",2:"los martes",3:"los miércoles",4:"los jueves",5:"los viernes",6:"los sábados",7:"los domingos"},mo=new Set(["contenta","tranquila"]),So=new Set(["cansada","tensa","triste"]);function uo(t){const[e,a,r]=t.split("-").map(Number),i=new Date(e,a-1,r).getDay();return i===0?7:i}function To(t,e=[]){var S;const a=new Set(e),r=new Map,o=[...t].filter(c=>(c.type==="checkin"||c.type==="diario")&&"mood"in c.data&&c.data.mood).sort((c,l)=>c.createdAt.localeCompare(l.createdAt));for(const c of o)"mood"in c.data&&c.data.mood&&r.set(c.date,c.data.mood);const i=new Map;for(let c=1;c<=7;c++)i.set(c,[]);for(const[c,l]of r.entries()){const T=uo(c);(S=i.get(T))==null||S.push(l)}const d=[],s=[];for(let c=1;c<=7;c++){const l=i.get(c)??[];if(l.length<zt.MIN_DAY_RECORDS)continue;const T=l.length,M=l.filter(h=>mo.has(h)).length,x=l.filter(h=>So.has(h)).length,v=M/T,p=x/T,m=po[c];if(v>=zt.THRESHOLD_RATIO){const h=`pattern-pos-${c}`;a.has(h)||d.push({id:h,kind:"positiva",dayOfWeek:c,dayName:m,text:`Parece que ${m} se sienten más tranquilos. Es solo lo que fuiste anotando.`})}if(p>=zt.THRESHOLD_RATIO){const h=`pattern-dif-${c}`;a.has(h)||s.push({id:h,kind:"dificil",dayOfWeek:c,dayName:m,text:`Parece que ${m} el día se siente más cargado. Es solo lo que fuiste anotando.`,actionLabel:"¿Querés ponerte una pausa ese día?",actionRoute:`#/recordatorios?dia=${c}`})}}return d.length>0?d[0]:s.length>0?s[0]:null}function fo(t){t.innerHTML="";let e=0,a=He();const r=document.createElement("section");r.className="semana-screen",r.setAttribute("role","main"),r.setAttribute("aria-label",n.semana.title);const o=document.createElement("style");o.textContent=`
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
  `,document.head.appendChild(o);const i=document.createElement("div");i.className="semana-top-bar";const d=document.createElement("button");d.className="back-btn",d.textContent=n.app.back,d.setAttribute("aria-label","Volver al jardín"),d.addEventListener("click",()=>{window.location.hash="#/jardin"});const s=document.createElement("h1");s.className="semana-title",s.textContent=n.semana.title,i.appendChild(d),i.appendChild(s),r.appendChild(i);const S=document.createElement("div");S.style.cssText="display: flex; flex-direction: column; gap: var(--space-md); width: 100%;",r.appendChild(S);const c=()=>{S.innerHTML="";const l=xt().data??[],T=lo({entries:l,weekOffset:e,includeWeekend:a.weekShowWeekend}),M=document.createElement("div");M.className="week-nav",M.setAttribute("aria-label","Navegación de semanas");const x=document.createElement("button");x.className="week-nav-btn",x.textContent="← Anterior",x.setAttribute("aria-label","Ver semana anterior"),x.addEventListener("click",()=>{e--,c()});const v=document.createElement("p");v.className="week-nav-label",v.textContent=T.label;const p=document.createElement("button");p.className="week-nav-btn",p.textContent="Siguiente →",p.setAttribute("aria-label","Ver semana siguiente"),p.disabled=!T.canGoNext,p.addEventListener("click",()=>{T.canGoNext&&(e++,c())}),M.appendChild(x),M.appendChild(v),M.appendChild(p),S.appendChild(M);const m=document.createElement("ul");m.className="days-strip",m.setAttribute("role","list"),m.setAttribute("aria-label","Días de la semana");for(const w of T.days){const N=document.createElement("li");N.className="day-strip-item",N.setAttribute("role","listitem"),N.setAttribute("aria-label",w.accessibleLabel);const A=document.createElement("span");A.className="day-strip-name",A.textContent=w.dayName.slice(0,3);const{canvas:G,ctx:H}=Oe(28,28);if(G.className="day-strip-canvas",G.setAttribute("aria-hidden","true"),w.mood){const C=rt[w.mood],j=pe(C);te(H,j,4,5,1)}else{const C=pe(Pa);te(H,C,6,6,1)}N.appendChild(A),N.appendChild(G),m.appendChild(N)}if(S.appendChild(m),T.niceMoments.length>0){const w=document.createElement("div");w.className="content-card";const N=document.createElement("h2");N.className="card-title",N.textContent=n.semana.niceTitle,w.appendChild(N);for(const A of T.niceMoments){const G=document.createElement("div");G.className="nice-quote-item";const H=document.createElement("span");H.className="nice-quote-day",H.textContent=A.dayName;const C=document.createElement("p");C.className="nice-quote-text",C.textContent=`“${A.text}”`,G.appendChild(H),G.appendChild(C),w.appendChild(G)}S.appendChild(w)}if(T.caredCategories.length>0){const w=document.createElement("div");w.className="content-card";const N=document.createElement("h2");N.className="card-title",N.textContent=n.semana.caredTitle;const A=document.createElement("p");A.className="card-subtitle",A.textContent=n.semana.caredSubtitle;const G=document.createElement("div");G.className="cared-pills";for(const H of T.caredCategories){const C=document.createElement("span");C.className="cared-pill",C.textContent=H,G.appendChild(C)}w.appendChild(N),w.appendChild(A),w.appendChild(G),S.appendChild(w)}if(a.showPatterns){const w=To(l,a.dismissedPatternIds);if(w){const N=document.createElement("div");N.className="pattern-card";const A=document.createElement("h2");A.className="card-title",A.textContent=n.semana.patternsTitle;const G=document.createElement("p");if(G.className="pattern-text",G.textContent=w.text,N.appendChild(A),N.appendChild(G),w.actionLabel&&w.actionRoute){const C=document.createElement("a");C.className="pattern-action-btn",C.href=w.actionRoute,C.textContent=w.actionLabel,N.appendChild(C)}const H=document.createElement("button");H.type="button",H.className="pattern-dismiss-btn",H.textContent=n.semana.dismissPatternBtn,H.addEventListener("click",()=>{a={...a,dismissedPatternIds:[...a.dismissedPatternIds,w.id]},X(a),N.remove()}),N.appendChild(H),S.appendChild(N)}}const h=n.semana.closingQuotes,b=Math.abs(e)%h.length,f=document.createElement("div");f.className="closing-quote-card";const g=document.createElement("p");g.className="closing-quote-text",g.textContent=h[b],f.appendChild(g),S.appendChild(f);const y=document.createElement("div");y.className="help-link-wrap";const k=document.createElement("a");k.className="help-link",k.href="#/ayuda",k.textContent=n.semana.helpLink,y.appendChild(k),S.appendChild(y)};return c(),t.appendChild(r),()=>{o.remove()}}function ho(t){t.innerHTML="";let e=He();const a=[...e.reminders],o=window.location.hash.match(/dia=(\d)/);if(o&&o[1]){const C=parseInt(o[1],10);if(C>=1&&C<=7){const j=a.find(W=>W.id==="media-jornada");j&&!j.days.includes(C)&&(j.enabled=!0,j.days.push(C),e={...e,reminders:a},X(e))}}const i=document.createElement("section");i.className="recordatorios-screen",i.setAttribute("role","main"),i.setAttribute("aria-label",n.recordatorios.title);const d=document.createElement("style");d.textContent=`
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
  `,document.head.appendChild(d);const s=document.createElement("button");s.className="back-btn",s.textContent=n.recordatorios.backToSettings,s.setAttribute("aria-label","Volver a ajustes"),s.addEventListener("click",()=>{window.location.hash="#/ajustes"});const S=document.createElement("header");S.className="rec-header";const c=document.createElement("h1");c.className="rec-title",c.textContent=n.recordatorios.title;const l=document.createElement("p");l.className="rec-subtitle",l.textContent=n.recordatorios.subtitle,S.appendChild(c),S.appendChild(l);const T=document.createElement("p");T.className="toast-label";const M=C=>{T.textContent=C,setTimeout(()=>{T.textContent=""},2500)},x=document.createElement("div");x.className="vacation-card";const v=document.createElement("label");v.className="toggle-row";const p=document.createElement("div"),m=document.createElement("h2");m.className="toggle-title",m.textContent=n.recordatorios.vacationLabel;const h=document.createElement("p");h.className="toggle-desc",h.textContent=n.recordatorios.vacationDesc,p.appendChild(m),p.appendChild(h);const b=document.createElement("input");b.type="checkbox",b.style.cssText="width: 22px; height: 22px; accent-color: var(--color-bosque); cursor: pointer;",b.checked=e.vacationMode,b.addEventListener("change",()=>{e={...e,vacationMode:b.checked},X(e),M(n.recordatorios.saveSuccess)}),v.appendChild(p),v.appendChild(b),x.appendChild(v);const f=document.createElement("div");f.className="reminders-list";const g=["L","M","M","J","V","S","D"];a.forEach(C=>{const j=document.createElement("div");j.className="reminder-card";const W=document.createElement("div");W.className="reminder-top";const R=document.createElement("h2");R.className="reminder-name",R.textContent=C.name;const u=document.createElement("input");u.type="checkbox",u.style.cssText="width: 22px; height: 22px; accent-color: var(--color-bosque); cursor: pointer;",u.checked=C.enabled,u.setAttribute("aria-label",`Activar ${C.name}`),W.appendChild(R),W.appendChild(u),j.appendChild(W);const L=document.createElement("div");L.className="reminder-body",L.style.display=C.enabled?"flex":"none";const F=document.createElement("div");F.className="field-row";const ae=document.createElement("label");ae.className="field-label",ae.textContent=n.recordatorios.timeLabel;const _=document.createElement("input");_.type="time",_.className="time-input",_.value=C.time,_.addEventListener("change",()=>{_.value&&(C.time=_.value,la(C)&&(e={...e,reminders:a},X(e),M(n.recordatorios.saveSuccess)))}),F.appendChild(ae),F.appendChild(_),L.appendChild(F);const we=document.createElement("div");we.className="field-row";const me=document.createElement("label");me.className="field-label",me.textContent=n.recordatorios.daysLabel;const Se=document.createElement("div");Se.className="days-row";for(let Z=1;Z<=7;Z++){const $=Z,U=document.createElement("button");U.type="button",U.className=`day-pill-btn ${C.days.includes($)?"selected":""}`,U.textContent=g[Z-1],U.setAttribute("aria-label",`Día ${g[Z-1]}`),U.addEventListener("click",()=>{C.days.includes($)?C.days.length>1&&(C.days=C.days.filter(he=>he!==$)):C.days=[...C.days,$].sort((he,ce)=>he-ce),U.classList.toggle("selected",C.days.includes($)),e={...e,reminders:a},X(e),M(n.recordatorios.saveSuccess)}),Se.appendChild(U)}we.appendChild(me),we.appendChild(Se),L.appendChild(we);const ue=document.createElement("div");ue.className="field-row";const Ne=document.createElement("label");Ne.className="field-label",Ne.textContent=n.recordatorios.textLabel;const Y=document.createElement("input");Y.type="text",Y.maxLength=40,Y.className="text-input",Y.value=C.eventText,Y.addEventListener("change",()=>{const Z=Y.value.trim();C.eventText=Z.length>0?Z.slice(0,40):"Una pausa para mí",e={...e,reminders:a},X(e),M(n.recordatorios.saveSuccess)}),ue.appendChild(Ne),ue.appendChild(Y),L.appendChild(ue),u.addEventListener("change",()=>{C.enabled=u.checked,L.style.display=C.enabled?"flex":"none",e={...e,reminders:a},X(e),M(n.recordatorios.saveSuccess)}),j.appendChild(L),f.appendChild(j)});const y=document.createElement("div");y.className="export-section";const k=document.createElement("button");k.type="button",k.className="export-btn",k.appendChild(K("bell",{size:16})),k.appendChild(document.createTextNode(n.recordatorios.exportIcsBtn)),k.addEventListener("click",()=>{if(!a.some(L=>L.enabled)){alert("Activá al menos un recordatorio arriba antes de descargar el calendario.");return}const j=Fa(a),W=new Blob([j],{type:"text/calendar;charset=utf-8"}),R=URL.createObjectURL(W),u=document.createElement("a");u.href=R,u.download="rorogarden_recordatorios.ics",document.body.appendChild(u),u.click(),document.body.removeChild(u),URL.revokeObjectURL(R),M("Archivo .ics descargado.")});const w=document.createElement("p");w.className="toggle-desc",w.textContent=n.recordatorios.exportIcsDesc;const N=document.createElement("div");N.className="instructions-card";const A=document.createElement("h3");A.className="inst-title",A.textContent=n.recordatorios.instructionsTitle;const G=document.createElement("p");G.className="inst-text",G.textContent=n.recordatorios.instructionsAndroid;const H=document.createElement("p");return H.className="inst-text",H.textContent=n.recordatorios.instructionsIos,N.appendChild(A),N.appendChild(G),N.appendChild(H),y.appendChild(k),y.appendChild(w),y.appendChild(N),i.appendChild(s),i.appendChild(S),i.appendChild(x),i.appendChild(f),i.appendChild(y),i.appendChild(T),t.appendChild(i),()=>{d.remove()}}const vo=[{id:"emergencias-911",name:"Emergencias 911",description:"Atención inmediata ante situaciones de riesgo o peligro.",phone:"911",phoneDisplay:"911",scope:"Nacional (Argentina)"},{id:"linea-135",name:"Línea 135 (Centro de Asistencia al Suicida)",description:"Acompañamiento y escucha para momentos de crisis.",phone:"135",phoneDisplay:"135",scope:"Gratuita desde CABA y Gran Buenos Aires",note:"Línea directa para el área metropolitana."},{id:"cas-resto-pais-1",name:"Centro de Asistencia al Suicida (resto del país)",description:"Acompañamiento telefónico nacional.",phone:"+541152751135",phoneDisplay:"(011) 5275-1135",scope:"Todo el país"},{id:"cas-resto-pais-0800",name:"Centro de Asistencia al Suicida (0800 nacional)",description:"Acompañamiento telefónico gratuito para todo el país.",phone:"08003451435",phoneDisplay:"0800 345 1435",scope:"Todo el país"}],go=[];function bo(t){t.innerHTML="";const e=document.createElement("section");e.className="ayuda-screen",e.setAttribute("role","main"),e.setAttribute("aria-label",n.ayuda.title);const a=document.createElement("style");a.textContent=`
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
  `,document.head.appendChild(a);const r=document.createElement("button");r.className="back-btn",r.textContent=n.app.back,r.setAttribute("aria-label","Volver a la pantalla anterior"),r.addEventListener("click",()=>{window.history.length>1?window.history.back():window.location.hash="#/ajustes"});const o=document.createElement("header");o.className="ayuda-header";const i=document.createElement("h1");i.className="ayuda-title",i.textContent=n.ayuda.title;const d=document.createElement("p");d.className="ayuda-subtitle",d.textContent=n.ayuda.subtitle,o.appendChild(i),o.appendChild(d);const s=document.createElement("div");s.className="warmth-card";const S=document.createElement("p");S.className="warmth-text",S.textContent=n.ayuda.talkWarmth;const c=document.createElement("p");c.className="warmth-text",c.style.fontWeight="600",c.textContent=n.ayuda.emergencyNote,s.appendChild(S),s.appendChild(c);const l=document.createElement("div");l.className="resources-list",l.setAttribute("role","region"),l.setAttribute("aria-label","Líneas oficiales de ayuda");for(const v of vo){const p=document.createElement("article");p.className="resource-card";const m=document.createElement("h2");m.className="resource-name",m.textContent=v.name;const h=document.createElement("p");h.className="resource-desc",h.textContent=v.description;const b=document.createElement("p");b.className="resource-scope",b.textContent=`Alcance: ${v.scope}`;const f=document.createElement("a");f.className="resource-call-btn",f.href=`tel:${v.phone}`,f.setAttribute("aria-label",`Llamar a ${v.name} al ${v.phoneDisplay}`);const g=K("bell",{size:14});if(f.appendChild(g),f.appendChild(document.createTextNode(`Llamar: ${v.phoneDisplay}`)),p.appendChild(m),p.appendChild(h),p.appendChild(b),v.note){const y=document.createElement("p");y.className="resource-scope",y.textContent=v.note,p.appendChild(y)}p.appendChild(f),l.appendChild(p)}const T=document.createElement("div");T.className="local-section";const M=document.createElement("h3");M.className="local-title",M.textContent=n.ayuda.localResourcesTitle;const x=document.createElement("p");return x.className="local-empty",x.textContent=go.length>0?"Recursos configurados para tu área.":n.ayuda.localResourcesEmpty,T.appendChild(M),T.appendChild(x),e.appendChild(r),e.appendChild(o),e.appendChild(s),e.appendChild(l),e.appendChild(T),t.appendChild(e),()=>{a.remove()}}const xa="roro_bienvenida_done";function xo(){try{return localStorage.getItem(xa)==="true"}catch{return!1}}function Co(){try{localStorage.setItem(xa,"true")}catch{}}function Mo(t){var d;const e=n.bienvenida;let a=0;const r=3;(d=navigator.storage)!=null&&d.persist&&navigator.storage.persist().catch(()=>{});function o(){Co(),window.location.hash="#/jardin"}function i(){t.innerHTML="";const s=document.createElement("div");s.className="bienvenida-wrap",s.setAttribute("role","main"),s.setAttribute("aria-label",`Bienvenida, paso ${a+1} de ${r}`);const S=document.createElement("div");S.className="bienvenida-frog",S.setAttribute("aria-hidden","true"),S.textContent="🐸",s.appendChild(S);const c=document.createElement("div");c.className="bienvenida-dots",c.setAttribute("aria-label",`Paso ${a+1} de ${r}`);for(let p=0;p<r;p++){const m=document.createElement("span");m.className=`bienvenida-dot${p===a?" active":""}`,c.appendChild(m)}s.appendChild(c);const l=document.createElement("div");if(l.className="bienvenida-content",a===0){const p=document.createElement("h1");p.className="bienvenida-title",p.textContent=e.step1Title,l.appendChild(p);const m=document.createElement("p");m.className="bienvenida-text",m.textContent=e.step1Text,l.appendChild(m)}else if(a===1){const p=document.createElement("h1");p.className="bienvenida-title",p.textContent=e.step2Title,l.appendChild(p);const m=document.createElement("p");m.className="bienvenida-text",m.textContent=e.step2Text,l.appendChild(m);const h=document.createElement("p");h.className="bienvenida-note",h.textContent=e.step2Note,l.appendChild(h)}else{const p=document.createElement("h1");p.className="bienvenida-title",p.textContent=e.step3Title,l.appendChild(p);const m=document.createElement("p");m.className="bienvenida-text",m.textContent=e.step3Text,l.appendChild(m);const h=document.createElement("div");h.className="bienvenida-name-group";const b=document.createElement("label");b.className="bienvenida-name-label",b.htmlFor="bienvenida-frog-name",b.textContent=e.step3NameLabel,h.appendChild(b);const f=document.createElement("input");f.type="text",f.id="bienvenida-frog-name",f.className="bienvenida-name-input",f.placeholder=e.step3NamePlaceholder,f.maxLength=20,f.setAttribute("autocomplete","off"),h.appendChild(f),l.appendChild(h);const g=document.createElement("p");g.className="bienvenida-disclaimer",g.textContent=e.step3Disclaimer,l.appendChild(g),s.dataset.isLastStep="true",s.dataset.inputId="bienvenida-frog-name"}s.appendChild(l);const T=document.createElement("div");T.className="bienvenida-btn-row";const M=a===r-1,x=document.createElement("button");if(x.className="btn-ghost bienvenida-skip",x.textContent=M?e.finishBtn:e.skipBtn,x.type="button",x.addEventListener("click",async()=>{if(M){const p=t.querySelector("#bienvenida-frog-name"),m=(p==null?void 0:p.value.trim())||"";if(m){const h=await He();h.frogName=m.slice(0,20),h.frogNameAnswered=!0,await X(h)}}o()}),T.appendChild(x),M){const p=document.createElement("button");p.className="btn-primary bienvenida-next",p.textContent=e.enterBtn,p.type="button",p.addEventListener("click",async()=>{const m=t.querySelector("#bienvenida-frog-name"),h=(m==null?void 0:m.value.trim())||"";if(h){const b=await He();b.frogName=h.slice(0,20),b.frogNameAnswered=!0,await X(b)}o()}),T.appendChild(p)}else{const p=document.createElement("button");p.className="btn-primary bienvenida-next",p.textContent=e.nextBtn,p.type="button",p.addEventListener("click",()=>{a++,i();const m=t.querySelector(".bienvenida-title");m==null||m.focus()}),T.appendChild(p)}if(s.appendChild(T),t.appendChild(s),!document.getElementById("bienvenida-styles")){const p=document.createElement("style");p.id="bienvenida-styles",p.textContent=`
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
      `,document.head.appendChild(p)}document.title=`RoRoGarden — Bienvenida (${a+1}/${r})`;const v=t.querySelector(".bienvenida-title");v&&(v.tabIndex=-1,setTimeout(()=>v.focus(),50))}return i(),()=>{}}const yo="1.0.0";function Eo(t){const e=n.acerca;t.innerHTML="",document.title="RoRoGarden — Acerca de";const a=document.createElement("div");a.className="acerca-wrap";const r=document.createElement("div");r.className="acerca-header";const o=document.createElement("button");o.className="back-btn",o.type="button",o.textContent=e.back,o.setAttribute("aria-label","Volver"),o.addEventListener("click",()=>history.back()),r.appendChild(o);const i=document.createElement("h1");i.className="section-title",i.textContent=e.title,i.tabIndex=-1,r.appendChild(i),a.appendChild(r);const d=document.createElement("div");d.className="acerca-card";const s=document.createElement("span");s.className="acerca-label",s.textContent=e.versionLabel+": ";const S=document.createElement("span");S.className="acerca-value",S.textContent=yo,d.appendChild(s),d.appendChild(S),a.appendChild(d);const c=ta(e.privacyTitle),l=document.createElement("p");l.className="acerca-text",l.textContent=e.privacyText,c.appendChild(l);const T=document.createElement("p");T.className="acerca-note",T.textContent=e.hostingNote,c.appendChild(T);const M=document.createElement("p");M.className="acerca-disclaimer",M.textContent=e.notTherapy,c.appendChild(M),a.appendChild(c);const x=ta(e.creditsTitle),v=document.createElement("p");v.className="acerca-text",v.textContent=e.creditsText,x.appendChild(v);const p=document.createElement("p");p.className="acerca-text",p.textContent=e.fontCredit,x.appendChild(p);const m=document.createElement("p");if(m.className="acerca-note",m.textContent=e.licenseNote,x.appendChild(m),a.appendChild(x),t.appendChild(a),!document.getElementById("acerca-styles")){const h=document.createElement("style");h.id="acerca-styles",h.textContent=`
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
    `,document.head.appendChild(h)}return setTimeout(()=>i.focus(),50),()=>{}}function ta(t){const e=document.createElement("section");e.className="acerca-section";const a=document.createElement("h2");return a.className="acerca-section-title",a.textContent=t,e.appendChild(a),e}function wo(t){const e=n.instalar;t.innerHTML="",document.title="RoRoGarden — Instalá la app";const a=window.matchMedia("(display-mode: standalone)").matches||navigator.standalone===!0,r=document.createElement("div");r.className="instalar-wrap";const o=document.createElement("div");o.className="instalar-header";const i=document.createElement("button");i.className="back-btn",i.type="button",i.textContent=e.back,i.setAttribute("aria-label","Volver"),i.addEventListener("click",()=>history.back()),o.appendChild(i);const d=document.createElement("h1");if(d.className="section-title",d.textContent=e.title,d.tabIndex=-1,o.appendChild(d),r.appendChild(o),a){const s=document.createElement("div");s.className="instalar-already",s.textContent=e.alreadyInstalled,s.setAttribute("role","status"),r.appendChild(s)}else{const s=document.createElement("div");s.className="instalar-why-card";const S=document.createElement("p");S.className="instalar-text",S.textContent=e.whyText,s.appendChild(S),r.appendChild(s);const c=window.__deferredInstallPrompt;if(c){const M=document.createElement("button");M.className="btn-primary instalar-native-btn",M.textContent=e.installBtnLabel,M.type="button",M.addEventListener("click",async()=>{c.prompt();const{outcome:x}=await c.userChoice;if(x==="accepted"){window.__deferredInstallPrompt=null,r.innerHTML="";const v=document.createElement("p");v.className="instalar-already",v.textContent=e.alreadyInstalled,v.setAttribute("role","status"),r.appendChild(v)}}),r.appendChild(M)}const l=aa(e.androidTitle,e.androidSteps);r.appendChild(l);const T=aa(e.iosTitle,e.iosSteps);r.appendChild(T)}if(t.appendChild(r),!document.getElementById("instalar-styles")){const s=document.createElement("style");s.id="instalar-styles",s.textContent=`
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
    `,document.head.appendChild(s)}return setTimeout(()=>d.focus(),50),()=>{}}function aa(t,e){const a=document.createElement("section");a.className="instalar-section";const r=document.createElement("h2");r.className="instalar-section-title",r.textContent=t,a.appendChild(r);const o=document.createElement("ol");return o.className="instalar-steps",e.forEach(i=>{const d=document.createElement("li");d.className="instalar-step",d.textContent=i,o.appendChild(d)}),a.appendChild(o),a}function No(t){const e=n.error;t.innerHTML="",document.title="RoRoGarden — Algo no salió bien";const a=document.createElement("div");a.className="error-wrap",a.setAttribute("role","main");const r=document.createElement("div");r.className="error-frog",r.setAttribute("aria-hidden","true"),r.textContent="🐸",a.appendChild(r);const o=document.createElement("h1");o.className="error-title",o.textContent=e.title,a.appendChild(o);const i=document.createElement("p");i.className="error-text",i.textContent=e.text,a.appendChild(i);const d=document.createElement("div");d.className="error-btn-row";const s=document.createElement("button");s.className="btn-primary",s.type="button",s.textContent=e.gardenBtn,s.addEventListener("click",()=>{window.location.hash="#/jardin"}),d.appendChild(s);const S=document.createElement("button");if(S.className="btn-ghost",S.type="button",S.textContent=e.reloadBtn,S.addEventListener("click",()=>{window.location.reload()}),d.appendChild(S),a.appendChild(d),t.appendChild(a),!document.getElementById("error-styles")){const c=document.createElement("style");c.id="error-styles",c.textContent=`
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
    `,document.head.appendChild(c)}o.tabIndex=-1,setTimeout(()=>o.focus(),50)}const ee=document.getElementById("app");ee.className="container";let re=null;window.addEventListener("beforeinstallprompt",t=>{t.preventDefault(),window.__deferredInstallPrompt=t});window.addEventListener("error",t=>{console.error("[RoRoGarden] Error no capturado:",t.error),Ft()});window.addEventListener("unhandledrejection",t=>{console.error("[RoRoGarden] Promesa rechazada sin manejar:",t.reason),Ft()});function Ft(){if(re){try{re()}catch{}re=null}ee.classList.remove("container-wide"),ee.innerHTML="",No(ee)}function ko(){return(window.location.hash||"#/").split("?")[0]}function Ao(){requestAnimationFrame(()=>{const t=ee.querySelector('h1, [role="main"] h1, .section-title');t&&((!t.tabIndex||t.tabIndex<0)&&(t.tabIndex=-1),t.focus({preventScroll:!1}))})}function Ut(){const t=ko();if(re){try{re()}catch{}re=null}if(ee.innerHTML="",ee.classList.remove("container-wide"),(t==="#/"||t==="")&&!xo()){window.location.replace("#/bienvenida");return}try{if(t.startsWith("#/desafio")){const a=t.split("/")[2]||"";re=eo(ee,a)}else switch(t){case"#/bienvenida":re=Mo(ee);break;case"#/jardin":re=Vn(ee);break;case"#/micoleccion":re=no(ee);break;case"#/semana":re=fo(ee);break;case"#/recordatorios":re=ho(ee);break;case"#/ayuda":re=bo(ee);break;case"#/pausa":re=Kn(ee);break;case"#/respirar":re=ao(ee);break;case"#/checkin":re=_n(ee);break;case"#/diario":re=On(ee);break;case"#/historial":re=$n(ee);break;case"#/ajustes":re=Xn(ee);break;case"#/acerca":re=Eo(ee);break;case"#/instalar":re=wo(ee);break;case"#/":re=Va(ee);break;default:window.location.replace("#/jardin");return}}catch(e){console.error("[RoRoGarden] Error renderizando ruta:",t,e),Ft();return}Ao()}"serviceWorker"in navigator&&navigator.serviceWorker.addEventListener("controllerchange",()=>{document.dispatchEvent(new CustomEvent("swUpdated"))});window.addEventListener("hashchange",Ut);window.addEventListener("popstate",Ut);Ut();window.addEventListener("storage",()=>{});document.addEventListener("storageQuotaExceeded",()=>{const t=n.storageFullWarning,e=document.createElement("div");e.setAttribute("role","alert"),e.style.cssText=`
    position: fixed; bottom: 0; left: 0; right: 0;
    background: var(--color-acento);
    color: var(--color-tinta);
    font-family: var(--font-ui);
    font-size: 14px;
    padding: 12px 16px;
    text-align: center;
    z-index: 999;
  `,e.textContent=t,document.body.appendChild(e),setTimeout(()=>e.remove(),8e3)});
