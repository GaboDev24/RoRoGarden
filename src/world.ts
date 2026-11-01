/**
 * world.ts — Lógica de momento del día y estaciones según el reloj local.
 *
 * Principios:
 * - Función pura sin dependencias de DOM ni efectos secundarios.
 * - Soporta hemisferio sur (por defecto para Argentina) y hemisferio norte.
 * - Todos los momentos del día y estaciones se ven acogedores y cálidos.
 * - Provee paleta y configuración ambiental de la escena del jardín.
 */

import { palette, type PaletteKey } from './palette/colors'

export type Hemisphere = 'sur' | 'norte'
export type TimeOfDay = 'amanecer' | 'dia' | 'atardecer' | 'noche'
export type Season = 'primavera' | 'verano' | 'otono' | 'invierno'

export interface WorldState {
  timeOfDay: TimeOfDay
  season: Season
  hemisphere: Hemisphere
  skyColors: {
    top: string
    bottom: string
  }
  waterColor: string
  foliageColor: string
  isNight: boolean
  label: string
}

/**
 * Determina el momento del día según la hora local:
 * - Amanecer: 06:00 a 08:59
 * - Día: 09:00 a 18:59
 * - Atardecer: 19:00 a 20:59
 * - Noche: 21:00 a 05:59
 */
export function getTimeOfDay(date: Date = new Date()): TimeOfDay {
  const hour = date.getHours()
  if (hour >= 6 && hour < 9) return 'amanecer'
  if (hour >= 9 && hour < 19) return 'dia'
  if (hour >= 19 && hour < 21) return 'atardecer'
  return 'noche'
}

/**
 * Determina la estación del año según el día del año y hemisferio:
 * En Hemisferio Sur:
 * - Verano: 21 Dic - 20 Mar
 * - Otoño: 21 Mar - 20 Jun
 * - Invierno: 21 Jun - 20 Sep
 * - Primavera: 21 Sep - 20 Dic
 */
export function getSeason(date: Date = new Date(), hemisphere: Hemisphere = 'sur'): Season {
  const month = date.getMonth() + 1 // 1-12
  const day = date.getDate()

  // Convertimos a índice continuo MMDD (ej. 321 para 21 de marzo)
  const md = month * 100 + day

  let seasonSur: Season
  if (md >= 321 && md <= 620) {
    seasonSur = 'otono'
  } else if (md >= 621 && md <= 920) {
    seasonSur = 'invierno'
  } else if (md >= 921 && md <= 1220) {
    seasonSur = 'primavera'
  } else {
    seasonSur = 'verano'
  }

  if (hemisphere === 'sur') {
    return seasonSur
  }

  // En Hemisferio Norte se invierte
  const opposite: Record<Season, Season> = {
    verano: 'invierno',
    otono: 'primavera',
    invierno: 'verano',
    primavera: 'otono',
  }
  return opposite[seasonSur]
}

/**
 * Devuelve el estado global del mundo y los tokens de color para la escena.
 * Todos los colores provienen estrictamente de la paleta oficial de RoRoGarden.
 */
export function getWorldState(
  date: Date = new Date(),
  hemisphere: Hemisphere = 'sur'
): WorldState {
  const timeOfDay = getTimeOfDay(date)
  const season = getSeason(date, hemisphere)
  const isNight = timeOfDay === 'noche'

  // Paletas de cielo por momento del día (utilizando únicamente la paleta oficial)
  let skyTop: PaletteKey
  let skyBottom: PaletteKey
  let water: PaletteKey
  let foliage: PaletteKey

  switch (timeOfDay) {
    case 'amanecer':
      skyTop = 'menta'
      skyBottom = 'crema'
      water = 'turquesa'
      break
    case 'dia':
      skyTop = 'azulNiebla'
      skyBottom = 'celesteAgua'
      water = 'celesteAgua'
      break
    case 'atardecer':
      skyTop = 'acento'
      skyBottom = 'salvia'
      water = 'aguaProfunda'
      break
    case 'noche':
    default:
      skyTop = 'tinta'
      skyBottom = 'aguaProfunda'
      water = 'aguaProfunda'
      break
  }

  // Tonalidad de follaje según la estación
  switch (season) {
    case 'primavera':
      foliage = 'sapo'
      break
    case 'verano':
      foliage = 'bosque'
      break
    case 'otono':
      foliage = 'acento'
      break
    case 'invierno':
      foliage = 'musgo'
      break
  }

  const seasonNames: Record<Season, string> = {
    primavera: 'Primavera',
    verano: 'Verano',
    otono: 'Otoño',
    invierno: 'Invierno',
  }

  const timeNames: Record<TimeOfDay, string> = {
    amanecer: 'Amanecer',
    dia: 'Día',
    atardecer: 'Atardecer',
    noche: 'Noche',
  }

  return {
    timeOfDay,
    season,
    hemisphere,
    skyColors: {
      top: palette[skyTop],
      bottom: palette[skyBottom],
    },
    waterColor: palette[water],
    foliageColor: palette[foliage],
    isNight,
    label: `${seasonNames[season]} · ${timeNames[timeOfDay]}`,
  }
}
