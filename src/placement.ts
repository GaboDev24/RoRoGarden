/**
 * placement.ts — Lógica pura de grilla y colocación de decoraciones en el jardín.
 *
 * Principios:
 * - Desacoplado del DOM y frameworks.
 * - Validación estricta: dentro de grilla, sin superposiciones y respetando terreno (tierra, agua, cielo).
 * - Las piezas pueden guardarse y volver a la colección sin perderse.
 */

import type { CatalogItem, TerrainType } from './catalog'

export const GARDEN_GRID_COLS = 5
export const GARDEN_GRID_ROWS = 5

export interface PlacedDecoration {
  /** Identificador único de la instancia colocada */
  id: string
  /** ID del catálogo que referencia */
  catalogId: string
  /** Columna (0 a 4) */
  x: number
  /** Fila (0 a 4) */
  y: number
}

/**
 * Mapa de terreno por defecto de la grilla del jardín:
 * - Fila 0: Cielo (estrellas, nubes, luna)
 * - Fila 1: Tierra alta / fondo de vegetación
 * - Fila 2: Agua (estanque superior)
 * - Fila 3: Agua (estanque inferior)
 * - Fila 4: Tierra baja / primer plano con musgo
 */
export function getCellTerrain(_x: number, y: number): TerrainType {
  if (y === 0) return 'cielo'
  if (y === 1 || y === 4) return 'tierra'
  return 'agua'
}

/**
 * Verifica si el terreno de una celda es compatible con el objeto.
 */
export function isTerrainCompatible(itemTerrain: TerrainType, cellTerrain: TerrainType): boolean {
  if (itemTerrain === 'cielo') return cellTerrain === 'cielo'
  if (itemTerrain === 'ambos') return cellTerrain === 'tierra' || cellTerrain === 'agua'
  return itemTerrain === cellTerrain
}

/**
 * Verifica si las coordenadas caen dentro de los límites de la grilla.
 */
export function isWithinGrid(
  x: number,
  y: number,
  width: number = 1,
  height: number = 1
): boolean {
  if (x < 0 || y < 0) return false
  if (x + width > GARDEN_GRID_COLS) return false
  if (y + height > GARDEN_GRID_ROWS) return false
  return true
}

/**
 * Comprueba si un objeto puede colocarse en (x, y).
 */
export function canPlaceItem(
  placed: PlacedDecoration[],
  item: CatalogItem,
  x: number,
  y: number,
  excludeId?: string
): boolean {
  // 1. Límites de la grilla
  if (!isWithinGrid(x, y, item.gridWidth, item.gridHeight)) {
    return false
  }

  // 2. Terreno compatible en todas las celdas que ocupa
  for (let dy = 0; dy < item.gridHeight; dy++) {
    for (let dx = 0; dx < item.gridWidth; dx++) {
      const terrain = getCellTerrain(x + dx, y + dy)
      if (!isTerrainCompatible(item.terrain, terrain)) {
        return false
      }
    }
  }

  // 3. Superposición con otros objetos colocados
  for (const p of placed) {
    if (excludeId && p.id === excludeId) continue
    // Suponemos objetos 1x1 para el catálogo estándar
    if (p.x === x && p.y === y) {
      return false
    }
  }

  return true
}

/**
 * Coloca un objeto en la grilla y devuelve la nueva lista inmutable.
 */
export function placeItem(
  placed: PlacedDecoration[],
  item: CatalogItem,
  x: number,
  y: number
): PlacedDecoration[] {
  if (!canPlaceItem(placed, item, x, y)) {
    return placed
  }

  const newEntry: PlacedDecoration = {
    id: `placed_${item.id}_${Date.now()}_${Math.floor(Math.random() * 1000)}`,
    catalogId: item.id,
    x,
    y,
  }

  return [...placed, newEntry]
}

/**
 * Quita un objeto de la grilla (vuelve a la colección).
 */
export function removeItem(placed: PlacedDecoration[], placedId: string): PlacedDecoration[] {
  return placed.filter((p) => p.id !== placedId)
}

/**
 * Mueve un objeto colocado a otra celda válida.
 */
export function moveItem(
  placed: PlacedDecoration[],
  placedId: string,
  newX: number,
  newY: number,
  item: CatalogItem
): PlacedDecoration[] {
  const existing = placed.find((p) => p.id === placedId)
  if (!existing) return placed

  if (!canPlaceItem(placed, item, newX, newY, placedId)) {
    return placed
  }

  return placed.map((p) => (p.id === placedId ? { ...p, x: newX, y: newY } : p))
}

