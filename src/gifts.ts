/**
 * gifts.ts — Lógica pura de regalos diarios del jardín.
 *
 * Reglas:
 * - Máximo 1 regalo por día calendario local.
 * - El regalo se activa cuando se guarda cualquier registro (check-in, diario, desafío, respiración).
 * - Si ya se entregó hoy, no entrega nada.
 * - Si la colección está completa, no entrega nada (sin mensaje).
 * - RNG inyectable para tests deterministas.
 */

import type { CatalogItem } from './catalog'

export interface GiftState {
  /** IDs de items del catálogo ya obtenidos */
  obtainedIds: string[]
  /** Fecha local del último regalo (YYYY-MM-DD) o null si nunca */
  lastGiftDate: string | null
}

export interface GiftResult {
  /** Item nuevo obtenido, o null si no corresponde entregar hoy */
  gift: CatalogItem | null
  /** Lista actualizada de IDs obtenidos (incluye el nuevo si lo hay) */
  newObtainedIds: string[]
  /** Si ya se entregó un regalo hoy (útil para saber si es repetido) */
  giftedToday: boolean
}

/**
 * Intenta entregar un regalo diario.
 *
 * @param state - Estado actual de regalos (obtenidos + fecha último regalo)
 * @param localDate - Fecha local en formato YYYY-MM-DD
 * @param catalog - Lista completa de items del catálogo
 * @param rng - Función RNG opcional (por defecto Math.random)
 * @returns GiftResult con el item entregado (o null) y el estado actualizado
 */
export function tryGiveGift(
  state: GiftState,
  localDate: string,
  catalog: CatalogItem[],
  rng: () => number = Math.random
): GiftResult {
  // Si ya recibió un regalo hoy, no entregar nada
  if (state.lastGiftDate === localDate) {
    return {
      gift: null,
      newObtainedIds: [...state.obtainedIds],
      giftedToday: true,
    }
  }

  // Filtrar los items que todavía no tiene
  const available = catalog.filter(
    (item) => !state.obtainedIds.includes(item.id)
  )

  // Si ya tiene todo, no entregar nada (sin anuncio)
  if (available.length === 0) {
    return {
      gift: null,
      newObtainedIds: [...state.obtainedIds],
      giftedToday: false,
    }
  }

  // Seleccionar aleatoriamente uno de los disponibles
  const index = Math.floor(rng() * available.length)
  const chosen = available[index]

  return {
    gift: chosen,
    newObtainedIds: [...state.obtainedIds, chosen.id],
    giftedToday: false,
  }
}

/**
 * Verifica si la colección está completa.
 */
export function isCollectionComplete(
  obtainedIds: string[],
  catalog: CatalogItem[]
): boolean {
  return catalog.every((item) => obtainedIds.includes(item.id))
}

