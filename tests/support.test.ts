import { describe, it, expect } from 'vitest'
import { shouldShowSupportNotice, isDifficultMood } from '../src/support'
import type { GardenEntry } from '../src/storage/types'

function makeDaily(date: string, mood: any, textLindo?: string): GardenEntry {
  return {
    id: `checkin_${date}`,
    version: 4,
    type: 'checkin',
    date,
    createdAt: `${date}T10:00:00Z`,
    updatedAt: `${date}T10:00:00Z`,
    data: {
      mood,
      note: textLindo,
    },
  }
}

describe('Módulo de Aviso de Apoyo Sensible (src/support.ts)', () => {
  it('solo considera "triste" y "tensa" como estados difíciles; "cansada" NO cuenta', () => {
    expect(isDifficultMood('triste')).toBe(true)
    expect(isDifficultMood('tensa')).toBe(true)
    expect(isDifficultMood('cansada')).toBe(false)
    expect(isDifficultMood('tranquila')).toBe(false)
    expect(isDifficultMood('contenta')).toBe(false)
  })

  it('no muestra el aviso si "cansada" es el estado registrado (no debe alarmar)', () => {
    // 7 días seguidos de "cansada"
    const entries: GardenEntry[] = [
      makeDaily('2026-11-01', 'cansada'),
      makeDaily('2026-11-02', 'cansada'),
      makeDaily('2026-11-03', 'cansada'),
      makeDaily('2026-11-04', 'cansada'),
      makeDaily('2026-11-05', 'cansada'),
      makeDaily('2026-11-06', 'cansada'),
      makeDaily('2026-11-07', 'cansada'),
    ]

    const result = shouldShowSupportNotice({
      entries,
      currentDateStr: '2026-11-07',
      lastNoticeDateStr: null,
      supportSuggestionsEnabled: true,
      vacationMode: false,
    })

    expect(result).toBe(false)
  })

  it('muestra el aviso cuando se cumplen las condiciones exactas: 6 difíciles en 10 días y últimos 3 difíciles', () => {
    // Del 28 de oct al 6 de nov (10 días):
    // 6 días difíciles (tensa/triste), y los últimos 3 (4, 5, 6 nov) son difíciles
    const entries: GardenEntry[] = [
      makeDaily('2026-10-28', 'triste'),
      makeDaily('2026-10-29', 'tensa'),
      makeDaily('2026-10-30', 'triste'),
      makeDaily('2026-11-01', 'tranquila'),
      makeDaily('2026-11-02', 'cansada'),
      makeDaily('2026-11-04', 'triste'),
      makeDaily('2026-11-05', 'tensa'),
      makeDaily('2026-11-06', 'triste'),
    ]

    const result = shouldShowSupportNotice({
      entries,
      currentDateStr: '2026-11-06',
      lastNoticeDateStr: null,
      supportSuggestionsEnabled: true,
      vacationMode: false,
    })

    expect(result).toBe(true)
  })

  it('no muestra el aviso si el día más reciente no es difícil', () => {
    // 6 difíciles en 10 días, pero el último día fue "contenta"
    const entries: GardenEntry[] = [
      makeDaily('2026-10-28', 'triste'),
      makeDaily('2026-10-29', 'tensa'),
      makeDaily('2026-10-30', 'triste'),
      makeDaily('2026-11-02', 'tensa'),
      makeDaily('2026-11-03', 'triste'),
      makeDaily('2026-11-04', 'tensa'),
      makeDaily('2026-11-06', 'contenta'),
    ]

    const result = shouldShowSupportNotice({
      entries,
      currentDateStr: '2026-11-06',
      lastNoticeDateStr: null,
      supportSuggestionsEnabled: true,
      vacationMode: false,
    })

    expect(result).toBe(false)
  })

  it('respeta el enfriamiento de 21 días (no vuelve a mostrar antes de 3 semanas)', () => {
    const entries: GardenEntry[] = [
      makeDaily('2026-10-28', 'triste'),
      makeDaily('2026-10-29', 'tensa'),
      makeDaily('2026-10-30', 'triste'),
      makeDaily('2026-11-04', 'triste'),
      makeDaily('2026-11-05', 'tensa'),
      makeDaily('2026-11-06', 'triste'),
    ]

    // Si se mostró hace 10 días (el 2026-10-27)
    const resultRecent = shouldShowSupportNotice({
      entries,
      currentDateStr: '2026-11-06',
      lastNoticeDateStr: '2026-10-27', // 10 días atrás
      supportSuggestionsEnabled: true,
      vacationMode: false,
    })
    expect(resultRecent).toBe(false)

    // Si pasaron 22 días (mostrado el 2026-10-15)
    const resultCooled = shouldShowSupportNotice({
      entries,
      currentDateStr: '2026-11-06',
      lastNoticeDateStr: '2026-10-15', // 22 días atrás
      supportSuggestionsEnabled: true,
      vacationMode: false,
    })
    expect(resultCooled).toBe(true)
  })

  it('no muestra nada si la usuaria desactivó las sugerencias ("No mostrar más")', () => {
    const entries: GardenEntry[] = [
      makeDaily('2026-10-28', 'triste'),
      makeDaily('2026-10-29', 'tensa'),
      makeDaily('2026-10-30', 'triste'),
      makeDaily('2026-11-04', 'triste'),
      makeDaily('2026-11-05', 'tensa'),
      makeDaily('2026-11-06', 'triste'),
    ]

    const result = shouldShowSupportNotice({
      entries,
      currentDateStr: '2026-11-06',
      lastNoticeDateStr: null,
      supportSuggestionsEnabled: false,
      vacationMode: false,
    })
    expect(result).toBe(false)
  })

  it('no muestra nada si está activo el modo "Descansar de los avisos"', () => {
    const entries: GardenEntry[] = [
      makeDaily('2026-10-28', 'triste'),
      makeDaily('2026-10-29', 'tensa'),
      makeDaily('2026-10-30', 'triste'),
      makeDaily('2026-11-04', 'triste'),
      makeDaily('2026-11-05', 'tensa'),
      makeDaily('2026-11-06', 'triste'),
    ]

    const result = shouldShowSupportNotice({
      entries,
      currentDateStr: '2026-11-06',
      lastNoticeDateStr: null,
      supportSuggestionsEnabled: true,
      vacationMode: true,
    })
    expect(result).toBe(false)
  })
})

