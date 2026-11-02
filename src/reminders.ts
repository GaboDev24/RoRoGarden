/**
 * reminders.ts — Recordatorios suaves y generación de archivo iCalendar (.ics).
 *
 * Principios:
 * - Sin backend, sin push notifications remotas.
 * - Todos los recordatorios apagados por defecto. Nada se activa solo.
 * - Validación estricta (hora, días, texto máx 40 caracteres).
 * - RFC 5545 estricto: CRLF (\r\n), plegado a 75 octetos, escapes, UID determinista, hora flotante.
 */

export type DayOfWeek = 1 | 2 | 3 | 4 | 5 | 6 | 7 // 1 = Lunes, 7 = Domingo

export interface ReminderConfig {
  id: 'antes-de-entrar' | 'media-jornada' | 'cierre-dia'
  name: string
  enabled: boolean
  time: string // 'HH:mm'
  days: DayOfWeek[] // Lunes=1 ... Domingo=7
  eventText: string // máx 40 caracteres
}

export const DEFAULT_REMINDERS: ReminderConfig[] = [
  {
    id: 'antes-de-entrar',
    name: 'Antes de entrar',
    enabled: false,
    time: '07:45',
    days: [1, 2, 3, 4, 5],
    eventText: 'Una pausa para mí',
  },
  {
    id: 'media-jornada',
    name: 'Pausa de media jornada',
    enabled: false,
    time: '12:30',
    days: [1, 2, 3, 4, 5],
    eventText: 'Una pausa para mí',
  },
  {
    id: 'cierre-dia',
    name: 'Cierre del día',
    enabled: false,
    time: '18:00',
    days: [1, 2, 3, 4, 5],
    eventText: 'Una pausa para mí',
  },
]

const DAY_TO_ICS_MAP: Record<DayOfWeek, string> = {
  1: 'MO',
  2: 'TU',
  3: 'WE',
  4: 'TH',
  5: 'FR',
  6: 'SA',
  7: 'SU',
}

/**
 * Valida formato de hora HH:mm.
 */
export function isValidTimeString(time: string): boolean {
  if (typeof time !== 'string') return false
  const match = time.match(/^([01]\d|2[0-3]):([0-5]\d)$/)
  return match !== null
}

/**
 * Valida la configuración de un recordatorio.
 */
export function validateReminderConfig(reminder: any): reminder is ReminderConfig {
  if (!reminder || typeof reminder !== 'object') return false
  if (!['antes-de-entrar', 'media-jornada', 'cierre-dia'].includes(reminder.id)) return false
  if (typeof reminder.enabled !== 'boolean') return false
  if (!isValidTimeString(reminder.time)) return false
  if (!Array.isArray(reminder.days) || reminder.days.length === 0) return false
  if (!reminder.days.every((d: any) => typeof d === 'number' && d >= 1 && d <= 7)) return false
  if (typeof reminder.eventText !== 'string' || reminder.eventText.length === 0 || reminder.eventText.length > 40) {
    return false
  }
  return true
}

/**
 * Escapa texto según especificación iCalendar (RFC 5545 §3.3.11).
 */
export function escapeIcsText(text: string): string {
  return text
    .replace(/\\/g, '\\\\')
    .replace(/;/g, '\\;')
    .replace(/,/g, '\\,')
    .replace(/\r?\n/g, '\\n')
}

/**
 * Pliega líneas a un máximo de 75 octetos según RFC 5545 §3.1.
 * La línea continuada empieza con un espacio en blanco (' ').
 */
export function foldIcsLine(line: string): string {
  const encoder = new TextEncoder()
  const bytes = encoder.encode(line)
  if (bytes.length <= 75) {
    return line
  }

  const parts: string[] = []
  let currentBytes: number[] = []
  let isFirstLine = true
  const maxBytes = 75

  // Iterar caracteres Unicode sin romper pares subrogados
  for (const char of line) {
    const charBytes = Array.from(encoder.encode(char))
    const limit = isFirstLine ? maxBytes : maxBytes - 1 // el espacio cuenta como 1 octeto

    if (currentBytes.length + charBytes.length > limit) {
      const decoder = new TextDecoder()
      const chunkStr = decoder.decode(new Uint8Array(currentBytes))
      parts.push(isFirstLine ? chunkStr : ' ' + chunkStr)
      currentBytes = [...charBytes]
      isFirstLine = false
    } else {
      currentBytes.push(...charBytes)
    }
  }

  if (currentBytes.length > 0) {
    const decoder = new TextDecoder()
    const chunkStr = decoder.decode(new Uint8Array(currentBytes))
    parts.push(isFirstLine ? chunkStr : ' ' + chunkStr)
  }

  return parts.join('\r\n')
}

/**
 * Genera el contenido completo de un archivo .ics con los recordatorios activos.
 * Utiliza fecha base flotante (sin zona horaria específica para seguir el reloj local del dispositivo).
 */
export function generateIcsCalendar(reminders: ReminderConfig[]): string {
  const active = reminders.filter((r) => r.enabled)
  const lines: string[] = [
    'BEGIN:VCALENDAR',
    'VERSION:2.0',
    'PRODID:-//RoRoGarden//NONSGML RoRoGarden PWA//ES',
    'CALSCALE:GREGORIAN',
    'METHOD:PUBLISH',
  ]

  // Lunes 5 de enero de 2026 como fecha base de referencia (Lunes = día 1)
  const BASE_DATES: Record<DayOfWeek, string> = {
    1: '20260105',
    2: '20260106',
    3: '20260107',
    4: '20260108',
    5: '20260109',
    6: '20260110',
    7: '20260111',
  }

  for (const rem of active) {
    const [hh, mm] = rem.time.split(':')
    const startHour = parseInt(hh, 10)
    const startMin = parseInt(mm, 10)

    // Duración de 10 minutos
    let endMin = startMin + 10
    let endHour = startHour
    if (endMin >= 60) {
      endMin -= 60
      endHour = (endHour + 1) % 24
    }

    const startHhStr = String(startHour).padStart(2, '0')
    const startMmStr = String(startMin).padStart(2, '0')
    const endHhStr = String(endHour).padStart(2, '0')
    const endMmStr = String(endMin).padStart(2, '0')

    // El primer día seleccionado determina el DTSTART inicial
    const sortedDays = [...rem.days].sort((a, b) => a - b)
    const firstDay = sortedDays[0] ?? 1
    const baseDate = BASE_DATES[firstDay]

    const dtStart = `${baseDate}T${startHhStr}${startMmStr}00`
    const dtEnd = `${baseDate}T${endHhStr}${endMmStr}00`

    const byDayList = sortedDays.map((d) => DAY_TO_ICS_MAP[d]).join(',')
    const summary = escapeIcsText(rem.eventText)
    const description = escapeIcsText('Un ratito para aflojar. RoRoGarden te acompaña.')
    const uid = `roro-reminder-${rem.id}@rorogarden.app`

    lines.push('BEGIN:VEVENT')
    lines.push(`UID:${uid}`)
    lines.push('DTSTAMP:20261102T000000Z')
    lines.push(`DTSTART:${dtStart}`)
    lines.push(`DTEND:${dtEnd}`)
    lines.push(`RRULE:FREQ=WEEKLY;BYDAY=${byDayList}`)
    lines.push(`SUMMARY:${summary}`)
    lines.push(`DESCRIPTION:${description}`)
    lines.push('TRANSP:TRANSPARENT')

    // Alarma al momento del evento (PT0S)
    lines.push('BEGIN:VALARM')
    lines.push('ACTION:DISPLAY')
    lines.push(`DESCRIPTION:${summary}`)
    lines.push('TRIGGER:PT0S')
    lines.push('END:VALARM')

    lines.push('END:VEVENT')
  }

  lines.push('END:VCALENDAR')

  // Plegar todas las líneas y unir con CRLF
  const folded = lines.map((l) => foldIcsLine(l))
  return folded.join('\r\n') + '\r\n'
}

/**
 * Comprueba si corresponde mostrar un banner de aviso dentro de la app.
 *
 * Condiciones:
 * - Modo descanso (vacaciones) = apagado.
 * - El recordatorio debe estar habilitado.
 * - El día actual de la semana debe coincidir con los días configurados.
 * - La hora actual del dispositivo coincide con la hora del recordatorio (dentro de una ventana de 15 minutos).
 * - No haber sido descartado hoy para este momento.
 */
export function checkInAppReminder(
  reminders: ReminderConfig[],
  now: Date,
  dismissedMap: Record<string, string>, // reminderId -> 'YYYY-MM-DD'
  vacationMode: boolean,
  todayStr: string
): ReminderConfig | null {
  if (vacationMode) return null

  // getDay(): 0=Dom, 1=Lun, ..., 6=Sab -> mapear a 1=Lun ... 7=Dom
  const dayIdx = now.getDay()
  const currentDayOfWeek: DayOfWeek = (dayIdx === 0 ? 7 : dayIdx) as DayOfWeek
  const currentTotalMins = now.getHours() * 60 + now.getMinutes()

  for (const rem of reminders) {
    if (!rem.enabled) continue
    if (!rem.days.includes(currentDayOfWeek)) continue
    if (dismissedMap[rem.id] === todayStr) continue

    const [hh, mm] = rem.time.split(':').map((v) => parseInt(v, 10))
    const remTotalMins = hh * 60 + mm

    // Ventana de coincidencia: desde la hora exacta hasta 15 minutos después
    if (currentTotalMins >= remTotalMins && currentTotalMins < remTotalMins + 15) {
      return rem
    }
  }

  return null
}

