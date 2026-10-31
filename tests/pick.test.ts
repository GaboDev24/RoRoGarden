import { describe, it, expect } from 'vitest'
import { pickChallenges } from '../src/pick'
import { CHALLENGES, type Challenge } from '../src/challenges'

describe('Lógica pura de selección de desafíos (pick)', () => {
  it('selecciona exactamente la cantidad solicitada (3 por defecto)', () => {
    const picked = pickChallenges(CHALLENGES)
    expect(picked).toHaveLength(3)

    const picked2 = pickChallenges(CHALLENGES, { count: 2 })
    expect(picked2).toHaveLength(2)
  })

  it('respeta el filtro por categoría', () => {
    const vozOnly = pickChallenges(CHALLENGES, { category: 'voz', count: 3 })
    expect(vozOnly).toHaveLength(3)
    vozOnly.forEach((ch) => {
      expect(ch.category).toBe('voz')
    })

    const cuerpoOnly = pickChallenges(CHALLENGES, { category: 'cuerpo', count: 2 })
    expect(cuerpoOnly).toHaveLength(2)
    cuerpoOnly.forEach((ch) => {
      expect(ch.category).toBe('cuerpo')
    })
  })

  it('respeta el filtro por duración máxima', () => {
    const max60 = pickChallenges(CHALLENGES, { maxDuration: 60, count: 4 })
    expect(max60.length).toBeGreaterThan(0)
    max60.forEach((ch) => {
      expect(ch.durationSeconds).toBeLessThanOrEqual(60)
    })
  })

  it('evita repetir los IDs excluidos siempre que haya opciones disponibles', () => {
    const initial = pickChallenges(CHALLENGES, { count: 3 })
    const excludedIds = initial.map((c) => c.id)

    const nextPick = pickChallenges(CHALLENGES, { count: 3, excludeIds: excludedIds })
    expect(nextPick).toHaveLength(3)
    nextPick.forEach((ch) => {
      expect(excludedIds).not.toContain(ch.id)
    })
  })

  it('si no alcanzan los no excluidos, completa con los excluidos sin romper', () => {
    // Si excluimos casi todos y pedimos 3
    const mockList: Challenge[] = [
      { id: '1', category: 'voz', title: 'Uno', durationSeconds: 60, steps: ['Paso'] },
      { id: '2', category: 'voz', title: 'Dos', durationSeconds: 60, steps: ['Paso'] },
      { id: '3', category: 'voz', title: 'Tres', durationSeconds: 60, steps: ['Paso'] },
    ]

    const picked = pickChallenges(mockList, { count: 3, excludeIds: ['1', '2'] })
    expect(picked).toHaveLength(3)
    const ids = picked.map((c) => c.id)
    expect(ids).toContain('3') // El no excluido siempre está
  })

  it('devuelve array vacío si ningún desafío cumple con el filtro', () => {
    const picked = pickChallenges(CHALLENGES, { maxDuration: 10 })
    expect(picked).toEqual([])
  })
})

