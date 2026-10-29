import type { SpriteDefinition } from './renderer'

/**
 * sprites/definitions.ts — Catálogo de sprites originales de RoRoGarden.
 *
 * Clave de caracteres (ver SPRITE_CHAR_MAP en colors.ts):
 *   '.' = transparente
 *   'T' = tinta (#2B3A42)
 *   'P' = agua profunda (#3E5C7A)
 *   'N' = azul niebla (#A9C8E8)
 *   'A' = celeste agua (#BFE6EE)
 *   'U' = turquesa (#8ED1CF)
 *   'M' = menta (#D9F2E6)
 *   'V' = salvia (#A8D5BA)
 *   'S' = verde sapo (#8CC9A1)
 *   'G' = verde musgo (#6FA98A)
 *   'B' = verde bosque (#3F6F5E)
 *   'C' = crema luna (#F6EFC9)
 *   'H' = acento cálido (#E8A987)
 *
 * Todos los frames de un mismo sprite tienen el mismo ancho y alto.
 * Grillas 20x18 para el sapo, 16x16 para elementos más pequeños.
 */

// ─────────────────────────────────────────────────────────────
// SAPO SENTADO — animación idle de 2 cuadros (respiración)
// Tamaño lógico: 20x18 px
// ─────────────────────────────────────────────────────────────
const FROG_IDLE_FRAME_1: string[] = [
  '..TTTTTTTTTTTTTT....',
  '.TSSSSSSSSSSSSST....',
  'TSSSSSSSSSSSSSSST...',
  'TSSGSSSSSSSSGSST....',
  'TSSSSSSSSSSSSSSST...',
  'TSCCCCCCCCCCCCSST...',
  'TSCTTSSSSSTTCSST....',
  'TSCTTCCCCCTTCSST....',
  'TSCCCCCCCCCCCSST....',
  'TSSSSSSSSSSSSGSST...',
  'TSSSSSSSSSSSSSSST...',
  'TSSGSSGSSSGSGSST....',
  'TTSSSSSSSSSSSSTT....',
  '.TSSSSSSSSSSST......',
  '..TTTTTTTTTTTT......',
  '...................',
  '...................',
  '...................',
]

// Frame 2: el cuerpo se expande 1px hacia abajo (efecto respiración)
const FROG_IDLE_FRAME_2: string[] = [
  '..TTTTTTTTTTTTTT....',
  '.TSSSSSSSSSSSSST....',
  'TSSSSSSSSSSSSSSST...',
  'TSSGSSSSSSSSGSST....',
  'TSSSSSSSSSSSSSSST...',
  'TSCCCCCCCCCCCCSST...',
  'TSCTTSSSSSTTCSST....',
  'TSCTTCCCCCTTCSST....',
  'TSCCCCCCCCCCCSST....',
  'TSSSSSSSSSSSSGSST...',
  'TSSSSSSSSSSSSSSST...',
  'TSSGSSGSSSGSGSST....',
  'TTSSSSSSSSSSSSSTT...',
  '.TSSSSSSSSSSSST.....',
  '..TTTTTTTTTTTTT.....',
  '..TTTTTTTTTTTT......',
  '...................',
  '...................',
]

export const frogIdle: SpriteDefinition = {
  id: 'frog-idle',
  frames: [FROG_IDLE_FRAME_1, FROG_IDLE_FRAME_2],
  frameMs: 700,
}

// ─────────────────────────────────────────────────────────────
// SAPO DORMIDO — estático, acurrucado
// Tamaño lógico: 20x14 px
// ─────────────────────────────────────────────────────────────
export const frogSleeping: SpriteDefinition = {
  id: 'frog-sleeping',
  frames: [[
    '..TTTTTTTTTT........',
    '.TSSSSSSSSSSST......',
    'TSSSGSSSSGSSSST.....',
    'TSSCCCCCCCCSST......',
    'TSSTTCCCCTTSST......',
    'TSSCCCCCCCCSST......',
    'TSSSSSSSSSSSSST.....',
    'TSSGSSGSGSGSST......',
    'TTSSSSSSSSSTT.......',
    '.TTSSSSSSSTT........',
    '..TTTTTTTTT.........',
    '...........T.T......',
    '............T.......',
    '...................',
  ]],
}

// ─────────────────────────────────────────────────────────────
// HONGO CON SOMBRERO
// Tamaño lógico: 16x18 px
// ─────────────────────────────────────────────────────────────
export const mushroom: SpriteDefinition = {
  id: 'mushroom',
  frames: [[
    '....THHHHHT.....',
    '...THHHHHHHHT...',
    '..THHHHHHHHHT...',
    '.THHHHHHHHHHHT..',
    '.THHHHHHHHHHHHT.',
    'THHHHHHHHHHHHHT.',
    'THHHHCCHHHCCHHT.',
    'THHHHCCHHHCCHHT.',
    '.TCCCCCCCCCCCT..',
    '.TCCCCCCCCCCCT..',
    '..TTCCCCCCCCTT..',
    '...TCCCCCCCT....',
    '...TCCTTTTCT....',
    '...TCCTTTCT.....',
    '..TCCTTTTCCT....',
    '..TCCCCCCCCCT...',
    '...TTTTTTTTT....',
    '................',
  ]],
}

// ─────────────────────────────────────────────────────────────
// NENÚFAR FLOTANTE
// Tamaño lógico: 20x12 px
// ─────────────────────────────────────────────────────────────
export const lilypad: SpriteDefinition = {
  id: 'lilypad',
  frames: [[
    '.....TVVVVVVT.......',
    '...TVVVVVVVVVVT.....',
    '..TVVVGVVVVGVVVT....',
    '.TVVVGGVVVVGGVVVT...',
    '.TVGVVVVVVVVVVGVT...',
    'TVVVVVVVVVVVVVVVVT..',
    'TVVGVVVVVVVVVGVVVT..',
    '.TVVVVVVVVVVVVVVT...',
    '.TVVGVVVVVVVGVVT....',
    '..TVVVVBBBVVVVT.....',
    '...TTTTTTTTTTT......',
    '....................',
  ]],
}

// ─────────────────────────────────────────────────────────────
// LUNA CRECIENTE CON 3 ESTRELLAS
// Tamaño lógico: 24x20 px — 2 frames: estrellas parpadean
// ─────────────────────────────────────────────────────────────
const MOON_FRAME_1: string[] = [
  'C...............C.......',
  '........................',
  '..TCCCCT................',
  '.TCCCCCCCT..............',
  'TCCCCCCCCCT.............',
  'TCCCCCCAACT.............',
  'TCCCCAANCT..............',
  'TCCCCCANCT..............',
  'TCCCCCAAACT.............',
  'TCCCCCCCCCT.....C.......',
  'TCCCCCCCCCT.............',
  '.TCCCCCCCCT.............',
  '..TTCCCCCCT.............',
  '.....TCCCT..............',
  '.......TT...............',
  '........................',
  '.........C..............',
  '........................',
  '........................',
  '........................',
]

const MOON_FRAME_2: string[] = [
  '.....C..................',
  '........................',
  '..TCCCCT................',
  '.TCCCCCCCT..............',
  'TCCCCCCCCCT.............',
  'TCCCCCCAACT.............',
  'TCCCCAANCT..............',
  'TCCCCCANCT..............',
  'TCCCCCAAACT.............',
  'TCCCCCCCCCT.............',
  'TCCCCCCCCCT......C......',
  '.TCCCCCCCCT.............',
  '..TTCCCCCCT.............',
  '.....TCCCT..............',
  '.......TT...............',
  '........................',
  '........................',
  '...........C............',
  '........................',
  '........................',
]

export const moonCrescent: SpriteDefinition = {
  id: 'moon-crescent',
  frames: [MOON_FRAME_1, MOON_FRAME_2],
  frameMs: 900,
}

// Exportar todos juntos para conveniencia
export const ALL_SPRITES: SpriteDefinition[] = [
  frogIdle,
  frogSleeping,
  mushroom,
  lilypad,
  moonCrescent,
]

