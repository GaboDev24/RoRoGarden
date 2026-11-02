import { describe, it, expect } from 'vitest'
import { detectPatterns } from '../src/patterns'
import type { GardenEntry } from '../src/storage/types'

function makeEntry(date: string, mood: any, textLindo?: string): GardenEntry {
  return {
    id: `entry_${date}`,
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

describe('Módulo de Detección de Patrones (src/patterns.ts)', () => {
  it('no devuelve observaciones si hay menos de 5 registros para ese día de la semana', () => {
    // 4 jueves en cansada (2026-10-08, 15, 22, 29)
    const entries: GardenEntry[] = [
      makeEntry('2026-10-08', 'cansada'),
      makeEntry('2026-10-15', 'cansada'),
      makeEntry('2026-10-22', 'cansada'),
      makeEntry('2026-10-29', 'cansada'),
    ]

    const pattern = detectPatterns(entries)
    expect(pattern).toBeNull()
  })

  it('no devuelve observaciones si no se alcanza el 70% de tendencia', () => {
    // 5 jueves: 3 cansada (60%), 2 contenta (40%) -> < 70%
    const entries: GardenEntry[] = [
      makeEntry('2026-10-08', 'cansada'),
      makeEntry('2026-10-15', 'cansada'),
      makeEntry('2026-10-22', 'cansada'),
      makeEntry('2026-10-29', 'contenta'),
      makeEntry('2026-11-05', 'contenta'),
    ]

    const pattern = detectPatterns(entries)
    expect(pattern).toBeNull()
  })

  it('detecta observación suave cuando se alcanza el umbral en días difíciles', () => {
    // 5 jueves: 4 cansada (80%), 1 tranquila
    const entries: GardenEntry[] = [
      makeEntry('2026-10-08', 'cansada'),
      makeEntry('2026-10-15', 'cansada'),
      makeEntry('2026-10-22', 'cansada'),
      makeEntry('2026-10-29', 'cansada'),
      makeEntry('2026-11-05', 'tranquila'),
    ]

    const pattern = detectPatterns(entries)
    expect(pattern).not.toBeNull()
    expect(pattern?.kind).toBe('dificil')
    expect(pattern?.dayOfWeek).toBe(4) // Jueves
    expect(pattern?.text).toContain('jueves')
    expect(pattern?.actionRoute).toContain('dia=4')
  })

  it('prioriza la observación positiva sobre la difícil si ambas se cumplen', () => {
    // 5 martes (2026-10-06, 13, 20, 27, 11-03): 100% tranquila -> positiva
    // 5 jueves: 100% cansada -> difícil
    const entries: GardenEntry[] = [
      makeEntry('2026-10-06', 'tranquila'),
      makeEntry('2026-10-13', 'tranquila'),
      makeEntry('2026-10-20', 'tranquila'),
      makeEntry('2026-10-27', 'tranquila'),
      makeEntry('2026-11-03', 'tranquila'),
      makeEntry('2026-10-08', 'cansada'),
      makeEntry('2026-10-15', 'cansada'),
      makeEntry('2026-10-22', 'cansada'),
      makeEntry('2026-10-29', 'cansada'),
      makeEntry('2026-11-05', 'cansada'),
    ]

    const pattern = detectPatterns(entries)
    expect(pattern).not.toBeNull()
    expect(pattern?.kind).toBe('positiva')
    expect(pattern?.dayOfWeek).toBe(2) // Martes
  })

  it('nunca devuelve más de una observación a la vez', () => {
    // 5 martes tranquilos y 5 viernes contentos
    const entries: GardenEntry[] = [
      makeEntry('2026-10-06', 'tranquila'),
      makeEntry('2026-10-13', 'tranquila'),
      makeEntry('2026-10-20', 'tranquila'),
      makeEntry('2026-10-27', 'tranquila'),
      makeEntry('2026-11-03', 'tranquila'),
      makeEntry('2026-10-09', 'contenta'),
      makeEntry('2026-10-16', 'contenta'),
      makeEntry('2026-10-23', 'contenta'),
      makeEntry('2026-10-30', 'contenta'),
      makeEntry('2026-11-06', 'contenta'),
    ]

    const pattern = detectPatterns(entries)
    // Solo devuelve uno solo, no un array
    expect(pattern).toBeDefined()
    expect(typeof pattern?.id).toBe('string')
  })

  it('respeta las observaciones descartadas por la usuaria', () => {
    const entries: GardenEntry[] = [
      makeEntry('2026-10-08', 'cansada'),
      makeEntry('2026-10-15', 'cansada'),
      makeEntry('2026-10-22', 'cansada'),
      makeEntry('2026-10-29', 'cansada'),
      makeEntry('2026-11-05', 'cansada'),
    ]

    // Si el patrón de jueves ('pattern-dif-4') fue descartado, no lo muestra
    const pattern = detectPatterns(entries, ['pattern-dif-4'])
    expect(pattern).toBeNull()
  })
})

