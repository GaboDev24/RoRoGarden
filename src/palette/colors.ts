/**
 * Paleta cromática oficial de RoRoGarden.
 * Fuente de verdad en TypeScript — misma definición que variables.css.
 * NUNCA hardcodear colores fuera de este archivo.
 */
export const palette = {
  /** Contornos, texto principal */
  tinta: '#2B3A42',
  /** Fondos oscuros, agua profunda */
  aguaProfunda: '#3E5C7A',
  /** Niebla, cielo noche, fondos medios */
  azulNiebla: '#A9C8E8',
  /** Fondos claros, agua superficial */
  celesteAgua: '#BFE6EE',
  /** Agua animada, reflejos */
  turquesa: '#8ED1CF',
  /** Fondos muy claros, áreas de descanso */
  menta: '#D9F2E6',
  /** Hojas, nenúfares, vegetación media */
  salvia: '#A8D5BA',
  /** Cuerpo principal del sapo */
  sapo: '#8CC9A1',
  /** Sombras del sapo, musgo */
  musgo: '#6FA98A',
  /** Contornos oscuros vegetación */
  bosque: '#3F6F5E',
  /** Vientre sapo, luna, brillos */
  crema: '#F6EFC9',
  /** Sombrero hongo — uso MUY moderado */
  acento: '#E8A987',
  /** Transparente (clave en grilla de sprite) */
  transparent: 'transparent',
} as const

export type PaletteKey = keyof typeof palette
export type PaletteColor = typeof palette[PaletteKey]

/**
 * Mapa de caracteres para las grillas ASCII de sprites.
 * Cada carácter mapea a una clave de la paleta.
 */
export const SPRITE_CHAR_MAP: Record<string, PaletteKey> = {
  '.': 'transparent',
  'T': 'tinta',
  '#': 'tinta',
  'P': 'aguaProfunda',
  'N': 'azulNiebla',
  'A': 'celesteAgua',
  'U': 'turquesa',
  'M': 'menta',
  'V': 'salvia',
  'S': 'sapo',
  'G': 'musgo',
  'B': 'bosque',
  'C': 'crema',
  'H': 'acento',
} as const

