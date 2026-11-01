import { describe, it, expect } from 'vitest'
import {
  canPlaceItem,
  placeItem,
  removeItem,
  moveItem,
  isWithinGrid,
  getCellTerrain,
  isTerrainCompatible,
  type PlacedDecoration,
} from '../src/placement'
import { CATALOG_ITEMS } from '../src/catalog'

describe('Lógica de colocación y decoración (placement)', () => {
  const itemHongo = CATALOG_ITEMS.find((c) => c.id === 'hongo-calido')! // tierra
  const itemNenufar = CATALOG_ITEMS.find((c) => c.id === 'agua-nenufar-rosa')! // agua
  const itemEstrella = CATALOG_ITEMS.find((c) => c.id === 'cielo-estrella')! // cielo
  const itemMenta = CATALOG_ITEMS.find((c) => c.id === 'vis-sapito-menta')! // ambos (tierra o agua)

  it('valida límites de la grilla correctamente', () => {
    expect(isWithinGrid(0, 0, 1, 1)).toBe(true)
    expect(isWithinGrid(4, 4, 1, 1)).toBe(true)
    expect(isWithinGrid(-1, 0, 1, 1)).toBe(false)
    expect(isWithinGrid(0, 5, 1, 1)).toBe(false)
    expect(isWithinGrid(5, 0, 1, 1)).toBe(false)
  })

  it('respeta el tipo de terreno (cielo, tierra, agua, ambos)', () => {
    expect(getCellTerrain(2, 0)).toBe('cielo')
    expect(getCellTerrain(2, 1)).toBe('tierra')
    expect(getCellTerrain(2, 2)).toBe('agua')
    expect(getCellTerrain(2, 3)).toBe('agua')
    expect(getCellTerrain(2, 4)).toBe('tierra')

    // Hongo solo en tierra (filas 1 o 4)
    expect(canPlaceItem([], itemHongo, 1, 1)).toBe(true)
    expect(canPlaceItem([], itemHongo, 1, 2)).toBe(false) // agua rechazada
    expect(canPlaceItem([], itemHongo, 1, 0)).toBe(false) // cielo rechazado

    // Nenúfar solo en agua (filas 2 o 3)
    expect(canPlaceItem([], itemNenufar, 2, 2)).toBe(true)
    expect(canPlaceItem([], itemNenufar, 2, 1)).toBe(false) // tierra rechazada

    // Estrella solo en cielo (fila 0)
    expect(canPlaceItem([], itemEstrella, 0, 0)).toBe(true)
    expect(canPlaceItem([], itemEstrella, 0, 1)).toBe(false)

    // Sapito menta (ambos: tierra o agua)
    expect(canPlaceItem([], itemMenta, 0, 1)).toBe(true) // tierra
    expect(canPlaceItem([], itemMenta, 0, 2)).toBe(true) // agua
    expect(canPlaceItem([], itemMenta, 0, 0)).toBe(false) // cielo no
  })

  it('evita superposiciones en la misma celda', () => {
    const placed: PlacedDecoration[] = [
      { id: 'p1', catalogId: 'hongo-calido', x: 2, y: 1 },
    ]

    expect(canPlaceItem(placed, itemHongo, 2, 1)).toBe(false)
    expect(canPlaceItem(placed, itemHongo, 3, 1)).toBe(true)
  })

  it('coloca, quita (vuelve a colección) y mueve objetos', () => {
    let list: PlacedDecoration[] = []

    // 1. Colocar
    list = placeItem(list, itemHongo, 1, 1)
    expect(list).toHaveLength(1)
    expect(list[0].catalogId).toBe('hongo-calido')

    // 2. Mover
    list = moveItem(list, list[0].id, 2, 1, itemHongo)
    expect(list[0].x).toBe(2)
    expect(list[0].y).toBe(1)

    // 3. Quitar (vuelve a colección)
    list = removeItem(list, list[0].id)
    expect(list).toHaveLength(0)

    // 4. Volver a colocar
    list = placeItem(list, itemHongo, 3, 1)
    expect(list).toHaveLength(1)
    expect(list[0].x).toBe(3)
  })
})

