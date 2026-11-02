import { describe, it, expect } from 'vitest'
import nodeIcal from 'node-ical'
import {
  generateIcsCalendar,
  validateReminderConfig,
  escapeIcsText,
  foldIcsLine,
  checkInAppReminder,
  type ReminderConfig,
} from '../src/reminders'

describe('Módulo de Recordatorios e iCalendar (src/reminders.ts)', () => {
  const sampleReminders: ReminderConfig[] = [
    {
      id: 'antes-de-entrar',
      name: 'Antes de entrar',
      enabled: true,
      time: '07:45',
      days: [1, 2, 3, 4, 5],
      eventText: 'Una pausa para mí, antes de la sala',
    },
    {
      id: 'media-jornada',
      name: 'Pausa de media jornada',
      enabled: false,
      time: '12:30',
      days: [1, 2, 3, 4, 5],
      eventText: 'Una pausa para mí',
    },
  ]

  it('valida configuraciones de recordatorio válidas e inválidas', () => {
    expect(validateReminderConfig(sampleReminders[0])).toBe(true)

    // Hora inválida
    expect(
      validateReminderConfig({ ...sampleReminders[0], time: '25:00' })
    ).toBe(false)
    expect(
      validateReminderConfig({ ...sampleReminders[0], time: '7:45' })
    ).toBe(false)

    // Texto demasiado largo (> 40 caracteres)
    expect(
      validateReminderConfig({
        ...sampleReminders[0],
        eventText: 'Este texto supera intencionalmente los cuarenta caracteres permitidos',
      })
    ).toBe(false)

    // Días vacíos o fuera de rango
    expect(
      validateReminderConfig({ ...sampleReminders[0], days: [] })
    ).toBe(false)
    expect(
      validateReminderConfig({ ...sampleReminders[0], days: [0, 8] })
    ).toBe(false)
  })

  it('escapa caracteres especiales según RFC 5545', () => {
    const raw = 'Pausa; con comas, barras \\ y saltos\nde línea'
    const escaped = escapeIcsText(raw)
    expect(escaped).toBe('Pausa\\; con comas\\, barras \\\\ y saltos\\nde línea')
  })

  it('pliega líneas que exceden 75 octetos según RFC 5545', () => {
    const longLine =
      'DESCRIPTION:Un texto muy largo que definitivamente sobrepasa el límite estricto de setenta y cinco octetos especificado en el estándar'
    const folded = foldIcsLine(longLine)

    // Debe contener saltos CRLF seguidos de un espacio
    expect(folded).toContain('\r\n ')

    // Ninguna línea individual debe superar 75 octetos
    const lines = folded.split('\r\n')
    const encoder = new TextEncoder()
    for (const line of lines) {
      expect(encoder.encode(line).length).toBeLessThanOrEqual(75)
    }
  })

  it('genera un .ics válido que node-ical parsea sin errores', () => {
    const icsString = generateIcsCalendar(sampleReminders)

    // Debe usar CRLF exclusivamente
    expect(icsString).toContain('\r\n')
    expect(icsString.endsWith('\r\n')).toBe(true)

    // Parsear con node-ical
    const parsed = nodeIcal.sync.parseICS(icsString)
    expect(parsed).toBeDefined()

    // Solo debe haber generado el evento activo ('antes-de-entrar')
    const events = Object.values(parsed).filter((item) => item.type === 'VEVENT')
    expect(events.length).toBe(1)

    const event: any = events[0]
    expect(event.uid).toBe('roro-reminder-antes-de-entrar@rorogarden.app')
    expect(event.summary).toBe('Una pausa para mí, antes de la sala')
    expect(event.rrule).toBeDefined()
    expect(event.rrule?.options?.byweekday).toBeDefined()

    // Comprobar que no tiene zona horaria fija (hora flotante)
    expect(icsString).not.toContain('TZID=')
    expect(icsString).toContain('DTSTART:20260105T074500')
    expect(icsString).toContain('DTEND:20260105T075500')
  })

  it('genera UID determinista (la reimportación actualizará sin duplicar)', () => {
    const ics1 = generateIcsCalendar(sampleReminders)
    const ics2 = generateIcsCalendar(sampleReminders)

    const match1 = ics1.match(/UID:(.+)\r\n/)
    const match2 = ics2.match(/UID:(.+)\r\n/)

    expect(match1).not.toBeNull()
    expect(match1?.[1]).toBe(match2?.[1])
    expect(match1?.[1]).toBe('roro-reminder-antes-de-entrar@rorogarden.app')
  })

  it('comprueba recordatorio in-app cuando coincide horario y día, respetando descartes y vacaciones', () => {
    // 2026-11-02 fue Lunes a las 07:48
    const mondayMorning = new Date(2026, 10, 2, 7, 48)

    // 1. Debe detectar el recordatorio activo
    const hit = checkInAppReminder(
      sampleReminders,
      mondayMorning,
      {},
      false,
      '2026-11-02'
    )
    expect(hit).not.toBeNull()
    expect(hit?.id).toBe('antes-de-entrar')

    // 2. Si fue descartado hoy, no lo devuelve
    const dismissed = checkInAppReminder(
      sampleReminders,
      mondayMorning,
      { 'antes-de-entrar': '2026-11-02' },
      false,
      '2026-11-02'
    )
    expect(dismissed).toBeNull()

    // 3. Si está en modo descanso (vacaciones), no devuelve nada
    const inVacation = checkInAppReminder(
      sampleReminders,
      mondayMorning,
      {},
      true, // vacationMode
      '2026-11-02'
    )
    expect(inVacation).toBeNull()
  })
})

