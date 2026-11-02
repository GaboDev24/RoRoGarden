/**
 * patterns.ts — Detección suave de patrones semanales (opcional, apagado por defecto).
 *
 * Principios:
 * - Mira únicamente día de la semana vs. estados elegidos en check-in o diario.
 * - NUNCA analiza texto libre ni busca causas.
 * - Umbrales conservadores (mínimo 5 registros para ese día de la semana, >= 70% en esa categoría).
 * - Máximo UNA observación a la vez. Si hay positiva y difícil, prioriza la positiva.
 * - Los porcentajes nunca se le muestran a la usuaria.
 * - Lenguaje neutro: "lo que anotaste", nunca "estás" ni diagnósticos.
 * - Respeta observaciones descartadas.
 */

import type { GardenEntry, MoodType } from './storage/types'

export const PATTERN_CONFIG = {
  /** Cantidad mínima de registros para un mismo día de la semana */
  MIN_DAY_RECORDS: 5,
  /** Porcentaje mínimo (70%) para considerar una tendencia */
  THRESHOLD_RATIO: 0.7,
}

export type PatternKind = 'positiva' | 'dificil'

export interface PatternObservation {
  id: string // e.g., 'pattern-thursday-tired'
  kind: PatternKind
  dayOfWeek: number // 1=Lunes ... 7=Domingo
  dayName: string // 'lunes', 'martes', etc.
  text: string
  actionLabel?: string
  actionRoute?: string
}

const DAY_NAMES: Record<number, string> = {
  1: 'los lunes',
  2: 'los martes',
  3: 'los miércoles',
  4: 'los jueves',
  5: 'los viernes',
  6: 'los sábados',
  7: 'los domingos',
}

const POSITIVE_MOODS: Set<MoodType> = new Set(['contenta', 'tranquila'])
const DIFFICULT_MOODS: Set<MoodType> = new Set(['cansada', 'tensa', 'triste'])

/**
 * Convierte 'YYYY-MM-DD' a día de la semana (1=Lunes ... 7=Domingo).
 */
export function getDayOfWeekFromDateStr(dateStr: string): number {
  const [yyyy, mm, dd] = dateStr.split('-').map(Number)
  const date = new Date(yyyy, mm - 1, dd)
  const d = date.getDay()
  return d === 0 ? 7 : d
}

/**
 * Detecta patrones en los registros históricos.
 * Retorna a lo sumo una observación que no haya sido descartada, o null.
 */
export function detectPatterns(
  entries: GardenEntry[],
  dismissedIds: string[] = []
): PatternObservation | null {
  const dismissedSet = new Set(dismissedIds)

  // 1. Filtrar solo check-in y diario con mood, y tomar el último de cada día
  const dailyMoods = new Map<string, MoodType>()
  const sorted = [...entries]
    .filter((e) => (e.type === 'checkin' || e.type === 'diario') && 'mood' in e.data && e.data.mood)
    .sort((a, b) => a.createdAt.localeCompare(b.createdAt))

  for (const ent of sorted) {
    if ('mood' in ent.data && ent.data.mood) {
      dailyMoods.set(ent.date, ent.data.mood)
    }
  }

  // 2. Agrupar por día de la semana (1..7)
  const dayStats = new Map<number, MoodType[]>()
  for (let i = 1; i <= 7; i++) {
    dayStats.set(i, [])
  }

  for (const [dateStr, mood] of dailyMoods.entries()) {
    const dayOfWeek = getDayOfWeekFromDateStr(dateStr)
    dayStats.get(dayOfWeek)?.push(mood)
  }

  const positiveCandidates: PatternObservation[] = []
  const difficultCandidates: PatternObservation[] = []

  for (let day = 1; day <= 7; day++) {
    const moods = dayStats.get(day) ?? []
    if (moods.length < PATTERN_CONFIG.MIN_DAY_RECORDS) continue

    const total = moods.length
    const positiveCount = moods.filter((m) => POSITIVE_MOODS.has(m)).length
    const difficultCount = moods.filter((m) => DIFFICULT_MOODS.has(m)).length

    const positiveRatio = positiveCount / total
    const difficultRatio = difficultCount / total

    const dayName = DAY_NAMES[day]

    // Evaluar positivo
    if (positiveRatio >= PATTERN_CONFIG.THRESHOLD_RATIO) {
      const id = `pattern-pos-${day}`
      if (!dismissedSet.has(id)) {
        positiveCandidates.push({
          id,
          kind: 'positiva',
          dayOfWeek: day,
          dayName,
          text: `Parece que ${dayName} se sienten más tranquilos. Es solo lo que fuiste anotando.`,
        })
      }
    }

    // Evaluar difícil
    if (difficultRatio >= PATTERN_CONFIG.THRESHOLD_RATIO) {
      const id = `pattern-dif-${day}`
      if (!dismissedSet.has(id)) {
        difficultCandidates.push({
          id,
          kind: 'dificil',
          dayOfWeek: day,
          dayName,
          text: `Parece que ${dayName} el día se siente más cargado. Es solo lo que fuiste anotando.`,
          actionLabel: '¿Querés ponerte una pausa ese día?',
          actionRoute: `#/recordatorios?dia=${day}`,
        })
      }
    }
  }

  // 3. Si hay positiva y difícil a la vez, mostrar primero la positiva
  if (positiveCandidates.length > 0) {
    return positiveCandidates[0]
  }

  if (difficultCandidates.length > 0) {
    return difficultCandidates[0]
  }

  return null
}

