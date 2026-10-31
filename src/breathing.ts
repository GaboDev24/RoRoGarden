/**
 * breathing.ts — Lógica pura de fases y patrones de respiración guiada.
 *
 * Principios:
 * - Tres patrones suaves (Suave, Cuadrada, Corta).
 * - Tiempos calculados con marcas de tiempo continuas (no dependientes de ticks de frames).
 * - Modo adulto cálido y modo "Con mi sala" con metáforas visuales sencillas para los niños.
 * - Sin exigencias de hiperventilación ni retenciones forzadas.
 */

export type BreathingPatternId = 'suave' | 'cuadrada' | 'corta'

export type BreathingPhaseType = 'inhalar' | 'pausa' | 'exhalar'

export interface BreathingPhase {
  type: BreathingPhaseType
  durationSeconds: number
  /** Texto para la docente */
  label: string
  /** Frase simple para mostrar a la sala */
  salaLabel: string
}

export interface BreathingPattern {
  id: BreathingPatternId
  name: string
  subtitle: string
  description: string
  phases: BreathingPhase[]
  cycleDurationSeconds: number
}

export const BREATHING_PATTERNS: Record<BreathingPatternId, BreathingPattern> = {
  suave: {
    id: 'suave',
    name: 'Suave',
    subtitle: '4 seg - 6 seg',
    description: 'Inhalar en 4, exhalar en 6. Ideal para aflojar el cuerpo y bajar un cambio.',
    phases: [
      {
        type: 'inhalar',
        durationSeconds: 4,
        label: 'Tomá aire despacito por la nariz',
        salaLabel: 'Inflamos como un globo',
      },
      {
        type: 'exhalar',
        durationSeconds: 6,
        label: 'Soltá el aire lento por la boca',
        salaLabel: 'Soltamos el aire como una brisa',
      },
    ],
    cycleDurationSeconds: 10,
  },
  cuadrada: {
    id: 'cuadrada',
    name: 'Cuadrada',
    subtitle: '4 - 4 - 4 - 4',
    description: 'Cuatro tiempos iguales con pausas suaves. Ayuda a despejar y ordenar la mente.',
    phases: [
      {
        type: 'inhalar',
        durationSeconds: 4,
        label: 'Tomá aire despacito',
        salaLabel: 'Tomamos aire juntos',
      },
      {
        type: 'pausa',
        durationSeconds: 4,
        label: 'Sostené un instante sin apretar',
        salaLabel: 'Esperamos quietitos como ranas',
      },
      {
        type: 'exhalar',
        durationSeconds: 4,
        label: 'Soltá el aire despacito',
        salaLabel: 'Soltamos el aire suave',
      },
      {
        type: 'pausa',
        durationSeconds: 4,
        label: 'Un segundito en calma',
        salaLabel: 'Quedamos en silencio',
      },
    ],
    cycleDurationSeconds: 16,
  },
  corta: {
    id: 'corta',
    name: 'Corta',
    subtitle: '3 seg - 5 seg',
    description: 'Rápida y liviana. Perfecta para un minuto entre una actividad y la siguiente.',
    phases: [
      {
        type: 'inhalar',
        durationSeconds: 3,
        label: 'Aire adentro',
        salaLabel: 'Aire adentro despacio',
      },
      {
        type: 'exhalar',
        durationSeconds: 5,
        label: 'Aire afuera largo',
        salaLabel: 'Soplamos como una pluma',
      },
    ],
    cycleDurationSeconds: 8,
  },
}

export interface BreathingProgressState {
  isFinished: boolean
  currentPhaseIndex: number
  currentPhase: BreathingPhase
  phaseElapsedSeconds: number
  phaseRemainingSeconds: number
  phaseProgress: number // 0.0 a 1.0 dentro de la fase actual
  cycleIndex: number
  totalElapsedSeconds: number
  totalDurationSeconds: number
  totalProgress: number // 0.0 a 1.0 en la sesión completa
  displayText: string
}

/**
 * Calcula con precisión milimétrica el estado de la respiración según el tiempo transcurrido.
 */
export function calculateBreathingState(
  pattern: BreathingPattern,
  elapsedSeconds: number,
  totalDurationSeconds: number,
  isSalaMode: boolean = false
): BreathingProgressState {
  const boundedElapsed = Math.max(0, elapsedSeconds)
  const isFinished = boundedElapsed >= totalDurationSeconds

  if (isFinished) {
    const lastPhase = pattern.phases[pattern.phases.length - 1]
    return {
      isFinished: true,
      currentPhaseIndex: pattern.phases.length - 1,
      currentPhase: lastPhase,
      phaseElapsedSeconds: lastPhase.durationSeconds,
      phaseRemainingSeconds: 0,
      phaseProgress: 1,
      cycleIndex: Math.floor(totalDurationSeconds / pattern.cycleDurationSeconds),
      totalElapsedSeconds: totalDurationSeconds,
      totalDurationSeconds,
      totalProgress: 1,
      displayText: isSalaMode ? '¡Muy bien, terminamos!' : 'Sesión completada con calma',
    }
  }

  const cycleTime = boundedElapsed % pattern.cycleDurationSeconds
  const cycleIndex = Math.floor(boundedElapsed / pattern.cycleDurationSeconds)

  let accumulated = 0
  let currentPhaseIndex = 0
  let currentPhase = pattern.phases[0]

  for (let i = 0; i < pattern.phases.length; i++) {
    const phase = pattern.phases[i]
    if (cycleTime < accumulated + phase.durationSeconds) {
      currentPhaseIndex = i
      currentPhase = phase
      break
    }
    accumulated += phase.durationSeconds
  }

  const phaseElapsedSeconds = cycleTime - accumulated
  const phaseRemainingSeconds = Math.max(0, currentPhase.durationSeconds - phaseElapsedSeconds)
  const phaseProgress = Math.min(1, Math.max(0, phaseElapsedSeconds / currentPhase.durationSeconds))
  const totalProgress = Math.min(1, Math.max(0, boundedElapsed / totalDurationSeconds))

  const displayText = isSalaMode ? currentPhase.salaLabel : currentPhase.label

  return {
    isFinished: false,
    currentPhaseIndex,
    currentPhase,
    phaseElapsedSeconds,
    phaseRemainingSeconds,
    phaseProgress,
    cycleIndex,
    totalElapsedSeconds: boundedElapsed,
    totalDurationSeconds,
    totalProgress,
    displayText,
  }
}

