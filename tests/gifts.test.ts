import { describe, it, expect } from 'vitest'
import { tryGiveGift, isCollectionComplete } from '../src/gifts'
import type { CatalogItem } from '../src/catalog'

// Catálogo mínimo para tests
const mockCatalog: CatalogItem[] = [
  {
    id: 'item-a',
    category: 'visitantes',
    name: 'Item A',
    description: 'Test A',
    sprite: { frames: [['....', '....', '....', '....'] as unknown as string[]] },
    gridWidth: 1,
    gridHeight: 1,
    terrain: 'agua',
  },
  {
    id: 'item-b',
    category: 'hongos',
    name: 'Item B',
    description: 'Test B',
    sprite: { frames: [['....', '....', '....', '....'] as unknown as string[]] },
    gridWidth: 1,
    gridHeight: 1,
    terrain: 'tierra',
  },
  {
    id: 'item-c',
    category: 'plantas',
    name: 'Item C',
    description: 'Test C',
    sprite: { frames: [['....', '....', '....', '....'] as unknown as string[]] },
    gridWidth: 1,
    gridHeight: 1,
    terrain: 'tierra',
  },
]

describe('tryGiveGift', () => {
  it('entrega un regalo cuando no recibió ninguno hoy', () => {
    const state = { obtainedIds: [], lastGiftDate: null }
    const result = tryGiveGift(state, '2026-11-01', mockCatalog, () => 0)
    expect(result.gift).not.toBeNull()
    expect(result.gift?.id).toBe('item-a')
    expect(result.newObtainedIds).toContain('item-a')
    expect(result.giftedToday).toBe(false)
  })

  it('no entrega si ya recibió un regalo hoy', () => {
    const state = { obtainedIds: ['item-a'], lastGiftDate: '2026-11-01' }
    const result = tryGiveGift(state, '2026-11-01', mockCatalog)
    expect(result.gift).toBeNull()
    expect(result.giftedToday).toBe(true)
    expect(result.newObtainedIds).toEqual(['item-a'])
  })

  it('entrega al día siguiente aunque ayer también recibió', () => {
    const state = { obtainedIds: ['item-a'], lastGiftDate: '2026-11-01' }
    const result = tryGiveGift(state, '2026-11-02', mockCatalog, () => 0)
    expect(result.gift).not.toBeNull()
    expect(result.giftedToday).toBe(false)
  })

  it('no entrega cuando la colección está completa', () => {
    const state = {
      obtainedIds: ['item-a', 'item-b', 'item-c'],
      lastGiftDate: null,
    }
    const result = tryGiveGift(state, '2026-11-01', mockCatalog)
    expect(result.gift).toBeNull()
    expect(result.giftedToday).toBe(false)
  })

  it('el resultado es determinista con RNG inyectado', () => {
    const state = { obtainedIds: [], lastGiftDate: null }
    const r1 = tryGiveGift(state, '2026-11-01', mockCatalog, () => 0.9)
    const r2 = tryGiveGift(state, '2026-11-01', mockCatalog, () => 0.9)
    expect(r1.gift?.id).toBe(r2.gift?.id)
  })

  it('no repite items ya obtenidos', () => {
    const state = { obtainedIds: ['item-a', 'item-b'], lastGiftDate: null }
    const result = tryGiveGift(state, '2026-11-01', mockCatalog, () => 0)
    expect(result.gift?.id).toBe('item-c')
    expect(result.newObtainedIds).toContain('item-c')
  })
})

describe('isCollectionComplete', () => {
  it('detecta colección completa', () => {
    expect(isCollectionComplete(['item-a', 'item-b', 'item-c'], mockCatalog)).toBe(true)
  })

  it('detecta colección incompleta', () => {
    expect(isCollectionComplete(['item-a'], mockCatalog)).toBe(false)
  })
})

