/**
 * copy.ts — Textos oficiales de RoRoGarden (Español Rioplatense).
 * Centralizados para facilitar la edición sin tocar lógica de componentes.
 * Tono: Cálido, calmo, cercano (voseo), sin jerga de autoayuda, sin culpas ni diagnóstico.
 */

export const copy = {
  app: {
    name: 'RoRoGarden',
    tagline: 'Tu rincón para aflojar un ratito',
    back: '← Volver',
    skip: 'Saltar',
    save: 'Guardar',
    next: 'Siguiente',
    cancel: 'Cancelar',
    delete: 'Borrar',
    edit: 'Editar',
    close: 'Cerrar',
  },

  home: {
    title: 'RoRoGarden',
    subtitle: 'Tu rincón para aflojar un ratito',
    enterBtn: 'Entrar al jardín',
    loading: 'Ya viene...',
    peaceNote: 'Solo vos, sin presiones',
    desktopHint: 'Presioná Enter o Espacio para interactuar',
  },

  jardin: {
    title: 'Tu Jardín',
    subtitle: 'Tomate este ratito para vos.',
    checkinBtn: '¿Cómo llegás hoy?',
    diarioBtn: 'Cerrar el día',
    historialBtn: 'Mis días',
    ajustesBtn: 'Ajustes',
    welcomeBack: 'Qué lindo verte por acá.',
  },

  moods: {
    contenta: {
      id: 'contenta',
      label: 'Contenta',
      description: 'Con energía linda y el corazón liviano',
    },
    tranquila: {
      id: 'tranquila',
      label: 'Tranquila',
      description: 'En paz, con calma en el cuerpo',
    },
    cansada: {
      id: 'cansada',
      label: 'Cansada',
      description: 'El cuerpo pide aflojar y descansar',
    },
    tensa: {
      id: 'tensa',
      label: 'Tensa',
      description: 'Con la cabeza a mil o el cuello cargado',
    },
    triste: {
      id: 'triste',
      label: 'Triste',
      description: 'Con ganas de un abrazo y silencio',
    },
  },

  checkin: {
    title: '¿Cómo llegás hoy?',
    subtitle: 'Elegí el sapito que mejor te acompañe ahora.',
    promptText: '¿Querés dejar algo escrito? (opcional)',
    placeholder: 'Escribí lo que sientas, o dejalo vacío...',
    savedWarmth: 'Gracias por registrar cómo estás. Tu jardín te acompaña.',
    skippedWarmth: 'No pasa nada, está perfecto pasar de largo.',
  },

  diario: {
    title: 'Cerrar el día',
    stepMoodTitle: '¿Cómo terminás este día?',
    stepMoodSubtitle: 'No hace falta que hoy tengas ganas de mucho.',
    step1Title: 'Algo lindo de hoy',
    step1Subtitle: 'Un detalle chiquito, una risa, un rayito de sol.',
    step1Placeholder: 'Lo que se te venga a la mente...',
    step2Title: 'Algo que me pesó',
    step2Subtitle: 'Eso que te dejó cansada o te dio vueltas.',
    step2Placeholder: 'Dejalo acá un momento...',
    step3Title: 'Algo que suelto',
    step3Subtitle: 'Lo que ya pasó y hoy no te tenés que llevar a la cama.',
    step3Placeholder: 'Lo suelto para descansar...',
    finishBtn: 'Cerrar la noche',
    ritualTitle: 'El día ya terminó',
    ritualMessage: 'Dejalo acá, el jardín lo guarda.',
    ritualGoodnight: 'Que descanses lindo.',
  },

  historial: {
    title: 'Mis días',
    subtitle: 'Tus registros guardados, a tu ritmo.',
    empty: 'Todavía no hay nada acá. Cuando quieras, este espacio te espera.',
    checkinBadge: 'Check-in',
    diarioBadge: 'Diario',
    confirmDelete: '¿Querés borrar este registro? Esta acción no se puede deshacer.',
    editNoteTitle: 'Editar anotación',
    editedSuccess: 'Registro actualizado.',
    deletedSuccess: 'Registro borrado.',
  },

  ajustes: {
    title: 'Ajustes y Respaldo',
    privacyNote: 'Tus datos viven solo en este celular. Nadie más los ve.',
    exportTitle: 'Exportar mis datos',
    exportDesc: 'Descarga un archivo con todos tus registros para guardarlos de respaldo.',
    exportBtn: 'Descargar respaldo (JSON)',
    importTitle: 'Importar respaldo',
    importDesc: 'Si cambiaste de celular o querés recuperar un archivo anterior.',
    importBtn: 'Seleccionar archivo JSON',
    importConfirm: 'Se importarán los registros encontrados. ¿Deseás continuar?',
    importSuccess: 'Se importaron los registros correctamente.',
    importError: 'El archivo seleccionado no tiene un formato válido de RoRoGarden.',
    clearTitle: 'Borrar todo',
    clearDesc: 'Elimina permanentemente todos los registros guardados en este dispositivo.',
    clearBtn: 'Borrar todos mis datos',
    clearFirstConfirm: '¿Seguro que querés borrar todos tus registros? No se podrán recuperar.',
    clearSecondConfirm: 'Última confirmación: se borrará todo definitivamente. ¿Continuar?',
    clearSuccess: 'Se han eliminado todos los datos locales.',
    storageWarning: 'Atención: el almacenamiento local no está disponible o está bloqueado en este navegador. Tus datos no podrán guardarse entre sesiones.',
  },
} as const

export type Copy = typeof copy

