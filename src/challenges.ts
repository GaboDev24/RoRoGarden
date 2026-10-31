/**
 * challenges.ts — Banco de micro-desafíos de bienestar para la docente de nivel inicial.
 *
 * Estructura simple y limpia para que cualquier persona pueda editar o sumar ideas:
 * - id: Identificador único breve.
 * - category: 'voz' | 'cuerpo' | 'silencio' | 'respiracion' | 'animo'
 * - title: Título cálido y claro.
 * - durationSeconds: Duración estimada en segundos (entre 45 y 120s).
 * - steps: De 2 a 4 pasos breves de una sola línea en voseo rioplatense.
 * - note: Aclaración opcional cálida y preventiva.
 */

export type ChallengeCategory = 'voz' | 'cuerpo' | 'silencio' | 'respiracion' | 'animo'

export interface Challenge {
  id: string
  category: ChallengeCategory
  title: string
  durationSeconds: number
  steps: string[]
  note?: string
}

export const CATEGORY_LABELS: Record<ChallengeCategory, string> = {
  voz: 'Voz',
  cuerpo: 'Cuerpo',
  silencio: 'Silencio',
  respiracion: 'Respiración',
  animo: 'Ánimo',
}

const VOICE_NOTE = 'Si la ronquera te dura varios días, consultá con una fonoaudióloga o un médico.'

export const CHALLENGES: Challenge[] = [
  // ── VOZ ──
  {
    id: 'voz-silencio',
    category: 'voz',
    title: 'Pausa vocal en silencio',
    durationSeconds: 60,
    steps: [
      'Dejá de hablar por un minuto completo.',
      'Aflojá los labios y dejá la boca apenas entreabierta.',
      'Tomá aire suave por la nariz y descansá las cuerdas vocales.',
    ],
    note: VOICE_NOTE,
  },
  {
    id: 'voz-bostezo',
    category: 'voz',
    title: 'Bostezo suave para soltar',
    durationSeconds: 60,
    steps: [
      'Provocá un bostezo lento abriendo la boca sin forzar.',
      'Sentí cómo baja la mandíbula y se ensancha la garganta.',
      'Soltá el aire con un suspiro mudo y relajá la lengua.',
    ],
    note: VOICE_NOTE,
  },
  {
    id: 'voz-agua',
    category: 'voz',
    title: 'Tomar agua despacio',
    durationSeconds: 60,
    steps: [
      'Servite un vaso de agua fresca o tibia.',
      'Tomá un sorbo chico y mantenelo un segundo en la boca.',
      'Tragá despacio sintiendo cómo hidrata la garganta.',
    ],
    note: VOICE_NOTE,
  },
  {
    id: 'voz-zumbido',
    category: 'voz',
    title: 'Zumbido suave con "mmm"',
    durationSeconds: 60,
    steps: [
      'Juntá los labios suavemente, sin apretar los dientes.',
      'Emití un sonido "mmm" bajito y cómodo, como masticando algo rico.',
      'Notá la vibración cosquilleando en los labios y la nariz.',
    ],
    note: VOICE_NOTE,
  },
  {
    id: 'voz-grave',
    category: 'voz',
    title: 'Tono más grave y pausado',
    durationSeconds: 75,
    steps: [
      'Pensá en tu tono de voz habitual cuando hay mucho barullo.',
      'Bajá un poquito el volumen y hablá un tono más grave.',
      'Hacé pausas de un segundo entre frase y frase para no forzar.',
    ],
    note: VOICE_NOTE,
  },

  // ── CUERPO ──
  {
    id: 'cuerpo-cuello',
    category: 'cuerpo',
    title: 'Estirar cuello y hombros',
    durationSeconds: 60,
    steps: [
      'Dejá caer la oreja derecha hacia el hombro derecho con suavidad.',
      'Mantené tres respiraciones sin tironear y volvé al centro.',
      'Repetí hacia el lado izquierdo y después rodá los hombros hacia atrás.',
    ],
  },
  {
    id: 'cuerpo-espalda',
    category: 'cuerpo',
    title: 'Aliviar la espalda baja',
    durationSeconds: 75,
    steps: [
      'Parate con los pies separados al ancho de caderas.',
      'Flexioná apenas las rodillas y apoyá las manos sobre los muslos.',
      'Redondeá la columna como un gatito y después estirala suavemente.',
    ],
  },
  {
    id: 'cuerpo-munecas-pies',
    category: 'cuerpo',
    title: 'Mover muñecas y tobillos',
    durationSeconds: 60,
    steps: [
      'Hacé círculos suaves con las dos muñecas hacia afuera y hacia adentro.',
      'Sacudí los dedos como si te estuvieras secando gotitas de agua.',
      'Levantá un pie y dibujá círculos con el tobillo; luego cambiá de pie.',
    ],
  },
  {
    id: 'cuerpo-pies-apoyo',
    category: 'cuerpo',
    title: 'Apoyar los pies en la tierra',
    durationSeconds: 60,
    steps: [
      'Apoyá las dos plantas de los pies bien firmes en el piso.',
      'Sentí el peso de tu cuerpo descargando hacia el suelo.',
      'Aflojá las rodillas y dejá que los hombros caigan con calma.',
    ],
  },

  // ── SILENCIO ──
  {
    id: 'silencio-pico-ruido',
    category: 'silencio',
    title: 'Pausa tras un pico de ruido',
    durationSeconds: 60,
    steps: [
      'Cerrá los ojos unos segundos después del momento más ruidoso.',
      'No intentes apagar los sonidos de alrededor; solo dejalos pasar.',
      'Llevá tu atención al aire fresco entrando por tu nariz.',
    ],
  },
  {
    id: 'silencio-oidos',
    category: 'silencio',
    title: 'Cubrir los oídos con las palmas',
    durationSeconds: 60,
    steps: [
      'Frotá las palmas de las manos para darles tibieza.',
      'Tapate los oídos suavemente con las palmas ahuecadas.',
      'Disfrutá del sonido apagado del mar adentro tuyo por unas respiraciones.',
    ],
  },
  {
    id: 'silencio-ventana',
    category: 'silencio',
    title: 'Mirar a lo lejos por la ventana',
    durationSeconds: 60,
    steps: [
      'Acercate a una ventana o mirá el punto más lejano de la sala.',
      'Desenfocá la vista del plano cercano y mirá un árbol o el cielo.',
      'Parpadeá despacito dejando que los ojos descansen del foco corto.',
    ],
  },

  // ── RESPIRACIÓN ──
  {
    id: 'respiracion-tres-suspiros',
    category: 'respiracion',
    title: 'Tres suspiros hondos',
    durationSeconds: 45,
    steps: [
      'Tomá aire profundo por la nariz llenando el pecho.',
      'Soltalo de golpe por la boca con un suspiro sonoro y aliviado.',
      'Repetí dos veces más soltando cualquier tensión acumulada.',
    ],
  },
  {
    id: 'respiracion-contar-lento',
    category: 'respiracion',
    title: 'Soltar el aire despacito',
    durationSeconds: 60,
    steps: [
      'Inhalá en 1, 2, 3 por la nariz.',
      'Exhalá suavemente por la boca contando mentalmente hasta 6.',
      'Repetí a tu propio ritmo sin apuro.',
    ],
  },
  {
    id: 'respiracion-pecho-panza',
    category: 'respiracion',
    title: 'Mano en el pecho y mano en la panza',
    durationSeconds: 60,
    steps: [
      'Colocá una mano en el pecho y la otra en el ombligo.',
      'Notá cuál de las dos manos se mueve más al respirar.',
      'Buscá que el aire baje suave hacia la panza, inflando la mano de abajo.',
    ],
  },

  // ── ÁNIMO ──
  {
    id: 'animo-cosa-bien',
    category: 'animo',
    title: 'Una cosa que hiciste bien hoy',
    durationSeconds: 60,
    steps: [
      'Pensá en un momento chiquito de hoy que salió lindo.',
      'Puede ser una sonrisa, un abrazo, un límite puesto con cariño.',
      'Reconocételo en silencio: eso también fue tu trabajo y tuvo valor.',
    ],
  },
  {
    id: 'animo-sin-comparar',
    category: 'animo',
    title: 'Un minuto sin compararte',
    durationSeconds: 60,
    steps: [
      'Recordá que cada sala y cada grupo tienen dinámicas distintas.',
      'Soltá lo que creés que "otra docente haría mejor".',
      'Hacés lo mejor que podés con los recursos y el día que tenés hoy.',
    ],
  },
  {
    id: 'animo-agradecer',
    category: 'animo',
    title: 'Agradecé un detalle del día',
    durationSeconds: 60,
    steps: [
      'Buscá un detalle simple del día: un mate caliente, el sol, una risa.',
      'Traé esa imagen a la cabeza y sentí el agradecimiento en el pecho.',
      'Guardalo como un pequeño refugio para cuando lo necesites.',
    ],
  },
]

