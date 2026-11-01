import { describe, it, expect } from 'vitest'
import { getTimeOfDay, getSeason, getWorldState } from '../src/world'

describe('Módulo de Mundo y Estaciones (world)', () => {
  it('determina los momentos del día y sus bordes de horario', () => {
    // 05:59 -> noche
    expect(getTimeOfDay(new Date(2026, 9, 31, 5, 59))).toBe('noche')
    // 06:00 -> amanecer
    expect(getTimeOfDay(new Date(2026, 9, 31, 6, 0))).toBe('amanecer')
    // 08:59 -> amanecer
    expect(getTimeOfDay(new Date(2026, 9, 31, 8, 59))).toBe('amanecer')
    // 09:00 -> dia
    expect(getTimeOfDay(new Date(2026, 9, 31, 9, 0))).toBe('dia')
    // 18:59 -> dia
    expect(getTimeOfDay(new Date(2026, 9, 31, 18, 59))).toBe('dia')
    // 19:00 -> atardecer
    expect(getTimeOfDay(new Date(2026, 9, 31, 19, 0))).toBe('atardecer')
    // 20:59 -> atardecer
    expect(getTimeOfDay(new Date(2026, 9, 31, 20, 59))).toBe('atardecer')
    // 21:00 -> noche
    expect(getTimeOfDay(new Date(2026, 9, 31, 21, 0))).toBe('noche')
    // 00:00 -> noche
    expect(getTimeOfDay(new Date(2026, 9, 31, 0, 0))).toBe('noche')
  })

  it('determina estaciones en el Hemisferio Sur y bordes de solsticios/equinoccios', () => {
    // 20 de marzo -> verano
    expect(getSeason(new Date(2026, 2, 20), 'sur')).toBe('verano')
    // 21 de marzo -> otoño
    expect(getSeason(new Date(2026, 2, 21), 'sur')).toBe('otono')
    // 20 de junio -> otoño
    expect(getSeason(new Date(2026, 5, 20), 'sur')).toBe('otono')
    // 21 de junio -> invierno
    expect(getSeason(new Date(2026, 5, 21), 'sur')).toBe('invierno')
    // 20 de septiembre -> invierno
    expect(getSeason(new Date(2026, 8, 20), 'sur')).toBe('invierno')
    // 21 de septiembre -> primavera
    expect(getSeason(new Date(2026, 8, 21), 'sur')).toBe('primavera')
    // 20 de diciembre -> primavera
    expect(getSeason(new Date(2026, 11, 20), 'sur')).toBe('primavera')
    // 21 de diciembre -> verano
    expect(getSeason(new Date(2026, 11, 21), 'sur')).toBe('verano')
  })

  it('invierte correctamente las estaciones para el Hemisferio Norte', () => {
    // 25 de diciembre: Verano en Sur -> Invierno en Norte
    expect(getSeason(new Date(2026, 11, 25), 'norte')).toBe('invierno')
    // 1 de mayo: Otoño en Sur -> Primavera en Norte
    expect(getSeason(new Date(2026, 4, 1), 'norte')).toBe('primavera')
    // 15 de julio: Invierno en Sur -> Verano en Norte
    expect(getSeason(new Date(2026, 6, 15), 'norte')).toBe('verano')
    // 10 de octubre: Primavera en Sur -> Otoño en Norte
    expect(getSeason(new Date(2026, 9, 10), 'norte')).toBe('otono')
  })

  it('genera un WorldState válido con colores de la paleta y etiqueta legible', () => {
    const state = getWorldState(new Date(2026, 9, 31, 14, 0), 'sur')
    expect(state.timeOfDay).toBe('dia')
    expect(state.season).toBe('primavera')
    expect(state.isNight).toBe(false)
    expect(state.skyColors.top).toBeDefined()
    expect(state.skyColors.bottom).toBeDefined()
    expect(state.waterColor).toBeDefined()
    expect(state.label).toContain('Primavera')
    expect(state.label).toContain('Día')
  })
})

