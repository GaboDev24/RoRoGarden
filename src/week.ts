/**
 * week.ts — Lógica pura para la pantalla "Mi semana" (#/semana).
 *
 * Principios:
 * - A demanda: nunca avisa ni pone badges de notificación.
 * - Sin rachas, sin porcentajes, sin comparaciones, sin "mejor/peor".
 * - Los días sin registro se ven neutros (una hojita), nunca como falta.
 * - Abre con lo lindo ("Algo lindo de hoy"), jamás muestra lo que pesó o soltó.
 * - "Lo que cuidaste" lista solo nombres de categorías de pausas, sin cantidades.
 * - Soporta navegación al pasado (offset <= 0); bloqueado hacia el futuro.
 * - Seguro ante cambios de mes y de año.
 */

import type { GardenEntry, MoodType, DiarioPayload } from './storage/types'

export interface WeekDaySummary {
  date: string // 'YYYY-MM-DD'
  dayNumber: number // 1..7 (1=Lunes)
  dayName: string // 'Lunes', 'Martes', etc.
  mood: MoodType | null
  accessibleLabel: string // 'Lunes: tranquila' o 'Lunes'
}

export interface NiceMoment {
  dayName: string
  text: string
  date: string
}

export interface WeekSummary {
  startDate: string // 'YYYY-MM-DD' (Lunes)
  endDate: string // 'YYYY-MM-DD' (Viernes o Domingo)
  label: string // 'Semana del 2 al 6 de noviembre'
  isCurrentWeek: boolean
  canGoNext: boolean
  days: WeekDaySummary[]
  niceMoments: NiceMoment[]
  caredCategories: string[]
}

const DAY_NAMES_CAPITALIZED: Record<number, string> = {
  1: 'Lunes',
  2: 'Martes',
  3: 'Miércoles',
  4: 'Jueves',
  5: 'Viernes',
  6: 'Sábado',
  7: 'Domingo',
}

const CATEGORY_NAMES_MAP: Record<string, string> = {
  voz: 'Voz',
  cuerpo: 'Cuerpo',
  silencio: 'Silencio',
  respiracion: 'Respiración',
  animo: 'Ánimo',
}

const MONTH_NAMES_ES = [
  'enero',
  'febrero',
  'marzo',
  'abril',
  'mayo',
  'junio',
  'julio',
  'agosto',
  'septiembre',
  'octubre',
  'noviembre',
  'diciembre',
]

/**
 * Formatea una fecha a 'YYYY-MM-DD' en hora local.
 */
export function formatDateYmd(date: Date): string {
  const yyyy = date.getFullYear()
  const mm = String(date.getMonth() + 1).padStart(2, '0')
  const dd = String(date.getDate()).padStart(2, '0')
  return `${yyyy}-${mm}-${dd}`
}

/**
 * Parsea un 'YYYY-MM-DD' a Date en medianoche local.
 */
export function parseDateYmd(ymd: string): Date {
  const [yyyy, mm, dd] = ymd.split('-').map(Number)
  return new Date(yyyy, mm - 1, dd)
}

/**
 * Obtiene el lunes de la semana que contiene a la fecha dada.
 */
export function getMondayOfWeek(date: Date): Date {
  const d = new Date(date.getFullYear(), date.getMonth(), date.getDate())
  const day = d.getDay() // 0 = Domingo, 1 = Lunes ... 6 = Sábado
  const diffToMonday = day === 0 ? -6 : 1 - day
  d.setDate(d.getDate() + diffToMonday)
  return d
}

/**
 * Construye la etiqueta amigable del rango de la semana.
 * Ej: "Semana del 2 al 6 de noviembre de 2026" o "Semana del 29 de diciembre al 2 de enero de 2026"
 */
export function formatWeekLabel(start: Date, end: Date): string {
  const startDay = start.getDate()
  const endDay = end.getDate()
  const startMonth = MONTH_NAMES_ES[start.getMonth()]
  const endMonth = MONTH_NAMES_ES[end.getMonth()]
  const startYear = start.getFullYear()
  const endYear = end.getFullYear()

  if (startMonth === endMonth && startYear === endYear) {
    return `Semana del ${startDay} al ${endDay} de ${startMonth}`
  }
  if (startYear === endYear) {
    return `Semana del ${startDay} de ${startMonth} al ${endDay} de ${endMonth}`
  }
  return `Semana del ${startDay} de ${startMonth} (${startYear}) al ${endDay} de ${endMonth} (${endYear})`
}

export interface BuildWeekOptions {
  entries: GardenEntry[]
  referenceDate?: Date
  weekOffset?: number // 0 = semana actual, -1 = semana anterior, etc. (valores > 0 forzados a 0)
  includeWeekend?: boolean // false = Lun a Vie, true = Lun a Dom
}

/**
 * Construye el resumen de la semana puro y desacoplado del DOM.
 */
export function buildWeekSummary({
  entries,
  referenceDate = new Date(),
  weekOffset = 0,
  includeWeekend = false,
}: BuildWeekOptions): WeekSummary {
  // Prohibir navegar hacia el futuro
  const safeOffset = Math.min(0, weekOffset)

  // Obtener lunes de la semana de referencia
  const baseMonday = getMondayOfWeek(referenceDate)
  // Aplicar offset de semanas
  const monday = new Date(baseMonday)
  monday.setDate(monday.getDate() + safeOffset * 7)

  const numDays = includeWeekend ? 7 : 5
  const sunday = new Date(monday)
  sunday.setDate(sunday.getDate() + (numDays - 1))

  const isCurrentWeek = safeOffset === 0
  const canGoNext = safeOffset < 0

  // 1. Armar días de la semana
  const days: WeekDaySummary[] = []
  const weekDates: string[] = []

  for (let i = 0; i < numDays; i++) {
    const cur = new Date(monday)
    cur.setDate(cur.getDate() + i)
    const ymd = formatDateYmd(cur)
    weekDates.push(ymd)
    const dayNumber = i + 1
    const dayName = DAY_NAMES_CAPITALIZED[dayNumber]

    // Buscar último mood registrado ese día
    const dayEntries = entries
      .filter((e) => e.date === ymd && (e.type === 'checkin' || e.type === 'diario'))
      .sort((a, b) => b.createdAt.localeCompare(a.createdAt))

    let mood: MoodType | null = null
    for (const ent of dayEntries) {
      if ('mood' in ent.data && ent.data.mood) {
        mood = ent.data.mood
        break
      }
    }

    const accessibleLabel = mood ? `${dayName}: ${mood}` : dayName

    days.push({
      date: ymd,
      dayNumber,
      dayName,
      mood,
      accessibleLabel,
    })
  }

  // 2. Extraer "Lo lindo de la semana" (hasta 3 más recientes)
  const niceMoments: NiceMoment[] = []
  // Filtrar diarios de esa semana que tengan 'lindo' no vacío
  const weekSet = new Set(weekDates)
  const diarioEntries = entries
    .filter((e) => e.type === 'diario' && weekSet.has(e.date))
    .sort((a, b) => {
      // Ordenar más recientes primero
      if (a.date !== b.date) return b.date.localeCompare(a.date)
      return b.createdAt.localeCompare(a.createdAt)
    })

  for (const de of diarioEntries) {
    const payload = de.data as DiarioPayload
    if (payload.lindo && payload.lindo.trim().length > 0) {
      const dayDate = parseDateYmd(de.date)
      const dayOfWeekIdx = dayDate.getDay()
      const dNum = dayOfWeekIdx === 0 ? 7 : dayOfWeekIdx
      niceMoments.push({
        dayName: DAY_NAMES_CAPITALIZED[dNum],
        text: payload.lindo.trim(),
        date: de.date,
      })
      if (niceMoments.length >= 3) break
    }
  }

  // 3. Extraer categorías de pausas cuidadas (sin cantidades)
  const categoriesSet = new Set<string>()
  const pauseEntries = entries.filter(
    (e) => (e.type === 'desafio' || e.type === 'respiracion') && weekSet.has(e.date)
  )

  for (const pe of pauseEntries) {
    if (pe.type === 'respiracion') {
      categoriesSet.add('Respiración')
    } else if (pe.type === 'desafio' && 'category' in pe.data) {
      const rawCat = (pe.data as any).category
      const pretty = CATEGORY_NAMES_MAP[rawCat] ?? rawCat
      categoriesSet.add(pretty)
    }
  }

  const caredCategories = Array.from(categoriesSet).sort()

  return {
    startDate: formatDateYmd(monday),
    endDate: formatDateYmd(sunday),
    label: formatWeekLabel(monday, sunday),
    isCurrentWeek,
    canGoNext,
    days,
    niceMoments,
    caredCategories,
  }
}

