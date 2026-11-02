import { describe, it, expect } from 'vitest'
import {
  buildWeekSummary,
  getMondayOfWeek,
  formatDateYmd,
  formatWeekLabel,
} from '../src/week'
import type { GardenEntry } from '../src/storage/types'

describe('Módulo de Mi semana (src/week.ts)', () => {
  it('determina correctamente el lunes de la semana', () => {
    // 2026-11-04 es miércoles
    const wednesday = new Date(2026, 10, 4)
    const monday = getMondayOfWeek(wednesday)
    expect(formatDateYmd(monday)).toBe('2026-11-02')

    // 2026-11-08 es domingo -> su lunes es el 2 de noviembre
    const sunday = new Date(2026, 10, 8)
    const mondayFromSunday = getMondayOfWeek(sunday)
    expect(formatDateYmd(mondayFromSunday)).toBe('2026-11-02')
  })

  it('maneja cambios de mes y de año sin romper fechas', () => {
    // Viernes 1 de enero de 2027 -> su lunes fue 28 de diciembre de 2026
    const jan1 = new Date(2027, 0, 1)
    const monday = getMondayOfWeek(jan1)
    expect(formatDateYmd(monday)).toBe('2026-12-28')

    const label = formatWeekLabel(monday, new Date(2027, 0, 1))
    expect(label).toContain('2026')
    expect(label).toContain('2027')
  })

  it('no permite navegar hacia el futuro (offset positivo se fuerza a 0)', () => {
    const ref = new Date(2026, 10, 2) // Lunes 2 de nov
    const summaryFuture = buildWeekSummary({
      entries: [],
      referenceDate: ref,
      weekOffset: 3, // Intentar ir al futuro
    })

    expect(summaryFuture.startDate).toBe('2026-11-02')
    expect(summaryFuture.isCurrentWeek).toBe(true)
    expect(summaryFuture.canGoNext).toBe(false)
  })

  it('permite navegar hacia semanas pasadas con offset negativo', () => {
    const ref = new Date(2026, 10, 2) // Lunes 2 de nov
    const summaryPrev = buildWeekSummary({
      entries: [],
      referenceDate: ref,
      weekOffset: -1,
    })

    expect(summaryPrev.startDate).toBe('2026-10-26')
    expect(summaryPrev.isCurrentWeek).toBe(false)
    expect(summaryPrev.canGoNext).toBe(true)
  })

  it('agrupa por día el último estado de check-in o diario de cada día', () => {
    const ref = new Date(2026, 10, 4) // Semana del 2 al 6 de nov 2026
    const entries: GardenEntry[] = [
      {
        id: 'checkin_2026-11-02_1',
        version: 4,
        type: 'checkin',
        date: '2026-11-02',
        createdAt: '2026-11-02T08:00:00Z',
        updatedAt: '2026-11-02T08:00:00Z',
        data: { mood: 'cansada' },
      },
      {
        id: 'diario_2026-11-02_2',
        version: 4,
        type: 'diario',
        date: '2026-11-02',
        createdAt: '2026-11-02T20:00:00Z',
        updatedAt: '2026-11-02T20:00:00Z',
        data: { mood: 'tranquila', lindo: 'Un té calentito al llegar a casa' },
      },
    ]

    const summary = buildWeekSummary({
      entries,
      referenceDate: ref,
      weekOffset: 0,
      includeWeekend: false,
    })

    expect(summary.days.length).toBe(5) // Lun a Vie
    expect(summary.days[0].dayName).toBe('Lunes')
    expect(summary.days[0].mood).toBe('tranquila') // El último del día pisa al anterior
    expect(summary.days[0].accessibleLabel).toBe('Lunes: tranquila')

    // Martes sin registro queda neutro con su hojita
    expect(summary.days[1].dayName).toBe('Martes')
    expect(summary.days[1].mood).toBeNull()
    expect(summary.days[1].accessibleLabel).toBe('Martes')
  })

  it('extrae "Lo lindo de la semana" (hasta 3 citas) y nunca incluye lo que pesó ni lo que soltó', () => {
    const ref = new Date(2026, 10, 6)
    const entries: GardenEntry[] = [
      {
        id: 'diario_1',
        version: 4,
        type: 'diario',
        date: '2026-11-02',
        createdAt: '2026-11-02T20:00:00Z',
        updatedAt: '2026-11-02T20:00:00Z',
        data: {
          mood: 'contenta',
          lindo: 'Una ronda de canciones con risas',
          peso: 'El informe que no llegué a imprimir', // NO debe aparecer
          suelto: 'La discusión en secretaría', // NO debe aparecer
        },
      },
      {
        id: 'diario_2',
        version: 4,
        type: 'diario',
        date: '2026-11-03',
        createdAt: '2026-11-03T20:00:00Z',
        updatedAt: '2026-11-03T20:00:00Z',
        data: {
          mood: 'tranquila',
          lindo: 'El olor a tierra mojada en el patio',
        },
      },
      {
        id: 'diario_3',
        version: 4,
        type: 'diario',
        date: '2026-11-04',
        createdAt: '2026-11-04T20:00:00Z',
        updatedAt: '2026-11-04T20:00:00Z',
        data: {
          mood: 'tranquila',
          lindo: 'Un dibujo que me regaló Sofi',
        },
      },
      {
        id: 'diario_4',
        version: 4,
        type: 'diario',
        date: '2026-11-05',
        createdAt: '2026-11-05T20:00:00Z',
        updatedAt: '2026-11-05T20:00:00Z',
        data: {
          mood: 'contenta',
          lindo: 'Cuarto momento lindo que excede el tope de 3',
        },
      },
    ]

    const summary = buildWeekSummary({
      entries,
      referenceDate: ref,
      weekOffset: 0,
    })

    expect(summary.niceMoments.length).toBe(3)
    // Orden descendente (más recientes primero)
    expect(summary.niceMoments[0].text).toBe('Cuarto momento lindo que excede el tope de 3')
    expect(summary.niceMoments[1].text).toBe('Un dibujo que me regaló Sofi')
    expect(summary.niceMoments[2].text).toBe('El olor a tierra mojada en el patio')

    // Confirmar que no se filtra nada de peso ni suelto
    const stringified = JSON.stringify(summary.niceMoments)
    expect(stringified).not.toContain('El informe')
    expect(stringified).not.toContain('secretaría')
  })

  it('extrae solo los nombres de las categorías de pausas sin cantidades', () => {
    const ref = new Date(2026, 10, 4)
    const entries: GardenEntry[] = [
      {
        id: 'p1',
        version: 4,
        type: 'desafio',
        date: '2026-11-02',
        createdAt: '2026-11-02T10:00:00Z',
        updatedAt: '2026-11-02T10:00:00Z',
        data: {
          challengeId: 'cuerpo-1',
          title: 'Estirar hombros',
          category: 'cuerpo',
          durationSeconds: 60,
          completed: true,
        },
      },
      {
        id: 'p2',
        version: 4,
        type: 'desafio',
        date: '2026-11-03',
        createdAt: '2026-11-03T11:00:00Z',
        updatedAt: '2026-11-03T11:00:00Z',
        data: {
          challengeId: 'cuerpo-2',
          title: 'Cuello suave',
          category: 'cuerpo',
          durationSeconds: 60,
          completed: true,
        },
      },
      {
        id: 'p3',
        version: 4,
        type: 'respiracion',
        date: '2026-11-04',
        createdAt: '2026-11-04T12:00:00Z',
        updatedAt: '2026-11-04T12:00:00Z',
        data: {
          pattern: 'suave',
          durationSeconds: 120,
          salaMode: false,
          completed: true,
        },
      },
    ]

    const summary = buildWeekSummary({
      entries,
      referenceDate: ref,
      weekOffset: 0,
    })

    // Debe contener 'Cuerpo' y 'Respiración' exactamente una vez cada uno
    expect(summary.caredCategories).toEqual(['Cuerpo', 'Respiración'])
  })
})

