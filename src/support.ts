/**
 * support.ts — Lógica pura para el aviso de apoyo sensible.
 *
 * Principios:
 * - NO diagnostica, no etiqueta, no usa palabras como "crisis" o "depresión".
 * - Solo mira estados de ánimo elegidos explícitamente en check-in o diario.
 * - "cansada" NO cuenta como día difícil (es normal en la docencia; no queremos alarmar).
 *   Solo cuentan "triste" o "tensa".
 * - Condición muy conservadora con enfriamiento de 21 días.
 * - Respeta descansos y la opción de desactivar para siempre ("No mostrar más").
 * - NUNCA analiza texto libre.
 */

import type { GardenEntry, MoodType } from './storage/types'

/** Constantes configurables del detector de días difíciles */
export const SUPPORT_CONFIG = {
  /** Ventana de días calendario a evaluar */
  WINDOW_DAYS: 10,
  /** Cantidad mínima de días difíciles en la ventana */
  MIN_DIFFICULT_DAYS_IN_WINDOW: 6,
  /** Los últimos N días con registro deben ser difíciles */
  CONSECUTIVE_DIFFICULT_RECENT: 3,
  /** Días de enfriamiento mínimo entre avisos (3 semanas) */
  COOLDOWN_DAYS: 21,
}

/**
 * Determina si un estado cuenta como difícil para el aviso de apoyo.
 * 'triste' y 'tensa' cuentan. 'cansada' NO cuenta.
 */
export function isDifficultMood(mood: MoodType): boolean {
  return mood === 'triste' || mood === 'tensa'
}

/**
 * Obtiene el último estado de ánimo registrado en una fecha específica.
 */
export function getDayLastMood(entries: GardenEntry[], dateStr: string): MoodType | null {
  const dayEntries = entries
    .filter((e) => e.date === dateStr && (e.type === 'checkin' || e.type === 'diario'))
    .sort((a, b) => b.createdAt.localeCompare(a.createdAt))

  for (const ent of dayEntries) {
    if ('mood' in ent.data && ent.data.mood) {
      return ent.data.mood
    }
  }
  return null
}

/**
 * Calcula la diferencia en días entre dos fechas 'YYYY-MM-DD'.
 */
export function diffInCalendarDays(dateA: string, dateB: string): number {
  const a = new Date(`${dateA}T00:00:00`)
  const b = new Date(`${dateB}T00:00:00`)
  const diffMs = Math.abs(a.getTime() - b.getTime())
  return Math.round(diffMs / (1000 * 60 * 60 * 24))
}

export interface SupportCheckParams {
  entries: GardenEntry[]
  currentDateStr: string // 'YYYY-MM-DD'
  lastNoticeDateStr: string | null // 'YYYY-MM-DD' o null
  supportSuggestionsEnabled: boolean
  vacationMode: boolean
}

/**
 * Evalúa si corresponde mostrar el aviso de apoyo en el jardín.
 */
export function shouldShowSupportNotice({
  entries,
  currentDateStr,
  lastNoticeDateStr,
  supportSuggestionsEnabled,
  vacationMode,
}: SupportCheckParams): boolean {
  // 1. Si está desactivado o en modo descanso, nunca mostrar
  if (!supportSuggestionsEnabled || vacationMode) {
    return false
  }

  // 2. Enfriamiento de 21 días
  if (lastNoticeDateStr) {
    const daysSinceLast = diffInCalendarDays(currentDateStr, lastNoticeDateStr)
    if (daysSinceLast < SUPPORT_CONFIG.COOLDOWN_DAYS) {
      return false
    }
  }

  // 3. Obtener días únicos con registro ordenados descendentemente por fecha
  const daysWithRecords = Array.from(
    new Set(
      entries
        .filter((e) => (e.type === 'checkin' || e.type === 'diario') && e.date <= currentDateStr)
        .map((e) => e.date)
    )
  ).sort((a, b) => b.localeCompare(a))

  // Si ni siquiera hay suficientes días con registro para evaluar los últimos consecutivos
  if (daysWithRecords.length < SUPPORT_CONFIG.CONSECUTIVE_DIFFICULT_RECENT) {
    return false
  }

  // 4. Verificar que los últimos CONSECUTIVE_DIFFICULT_RECENT días con registro sean difíciles
  const recentDays = daysWithRecords.slice(0, SUPPORT_CONFIG.CONSECUTIVE_DIFFICULT_RECENT)
  for (const day of recentDays) {
    const mood = getDayLastMood(entries, day)
    if (!mood || !isDifficultMood(mood)) {
      return false
    }
  }

  // 5. Verificar que en la ventana de WINDOW_DAYS haya al menos MIN_DIFFICULT_DAYS_IN_WINDOW difíciles
  // Ventana de 10 días calendario hacia atrás desde currentDateStr
  let difficultDaysCount = 0
  const currDate = new Date(`${currentDateStr}T00:00:00`)

  for (let i = 0; i < SUPPORT_CONFIG.WINDOW_DAYS; i++) {
    const d = new Date(currDate)
    d.setDate(d.getDate() - i)
    const yyyy = d.getFullYear()
    const mm = String(d.getMonth() + 1).padStart(2, '0')
    const dd = String(d.getDate()).padStart(2, '0')
    const dateStr = `${yyyy}-${mm}-${dd}`

    const mood = getDayLastMood(entries, dateStr)
    if (mood && isDifficultMood(mood)) {
      difficultDaysCount++
    }
  }

  return difficultDaysCount >= SUPPORT_CONFIG.MIN_DIFFICULT_DAYS_IN_WINDOW
}

