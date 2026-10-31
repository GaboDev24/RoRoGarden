/**
 * pick.ts — Selección pura y sin efectos secundarios de micro-desafíos.
 *
 * Principios:
 * - Lógica desacoplada del DOM y del framework.
 * - Respeta filtros opcionales de categoría y duración máxima.
 * - Evita repetir los últimos desafíos ofrecidos siempre que la cantidad disponible lo permita.
 * - No usa contadores ni fuerza variedad con fines de gamificación o castigo.
 */

import type { Challenge, ChallengeCategory } from './challenges'

export interface PickChallengesOptions {
  /** Cantidad de desafíos a seleccionar (por defecto 3) */
  count?: number
  /** Categoría específica o 'todas' para no filtrar */
  category?: ChallengeCategory | 'todas'
  /** Duración máxima en segundos */
  maxDuration?: number
  /** IDs que se intentará no repetir (ej. los que ya se están mostrando) */
  excludeIds?: string[]
  /** Generador de números aleatorios inyectable para testing determinista */
  rng?: () => number
}

/**
 * Mezcla un array sin mutar el original usando el algoritmo Fisher-Yates.
 */
function shuffle<T>(array: T[], rng: () => number): T[] {
  const result = [...array]
  for (let i = result.length - 1; i > 0; i--) {
    const j = Math.floor(rng() * (i + 1))
    const temp = result[i]
    result[i] = result[j]
    result[j] = temp
  }
  return result
}

/**
 * Selecciona N desafíos aleatorios respetando filtros y exclusión sin repetir.
 */
export function pickChallenges(
  allChallenges: Challenge[],
  options: PickChallengesOptions = {}
): Challenge[] {
  const count = options.count ?? 3
  const rng = options.rng ?? Math.random
  const excludeSet = new Set(options.excludeIds ?? [])

  // 1. Filtrar por categoría y duración máxima
  let filtered = allChallenges.filter((ch) => {
    if (options.category && options.category !== 'todas' && ch.category !== options.category) {
      return false
    }
    if (options.maxDuration && ch.durationSeconds > options.maxDuration) {
      return false
    }
    return true
  })

  if (filtered.length === 0) {
    return []
  }

  // 2. Separar los que no están excluidos
  const notExcluded = filtered.filter((ch) => !excludeSet.has(ch.id))

  // 3. Si hay suficientes no excluidos, elegimos de ahí.
  // Si no alcanzan, mezclamos los no excluidos y completamos con los excluidos necesarios.
  if (notExcluded.length >= count) {
    return shuffle(notExcluded, rng).slice(0, count)
  }

  const shuffledNotExcluded = shuffle(notExcluded, rng)
  const remainingNeeded = count - shuffledNotExcluded.length
  const excludedOnly = filtered.filter((ch) => excludeSet.has(ch.id))
  const shuffledExcluded = shuffle(excludedOnly, rng).slice(0, remainingNeeded)

  return [...shuffledNotExcluded, ...shuffledExcluded].slice(0, count)
}

