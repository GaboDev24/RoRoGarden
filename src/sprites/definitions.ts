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
 * Estilo: formas redondas y regordetas, ojos grandes con aro crema,
 * sonrisa diminuta y mejillas rosadas (H).
 * Todos los frames de un mismo sprite tienen el mismo ancho y alto.
 */

// ─────────────────────────────────────────────────────────────
// SAPO SENTADO — idle de 2 cuadros (ojos abiertos / ojos cerrados)
// Tamaño lógico: 20x18 px
// ─────────────────────────────────────────────────────────────
const FROG_IDLE_FRAME_1: string[] = [
  '.......TTTTTT.......',
  '.....TTSSSSSSTT.....',
  '....TSSSSSSSSSST....',
  '...TSSSSSSSSSSSST...',
  '..TSTCCTSSSSTCCTST..',
  '..TSCTTCSSSSCTTCST..',
  '.TSSCTTCSSSSCTTCSST.',
  '.TSSTCCTSSSSTCCTSST.',
  '.TSSHHSSSSSSSSHHSST.',
  '.TSSSSSSSTSSTSSSSST.',
  '.TSSSSSSSTTSSSSSSST.',
  '.TSSGSSMMMMMMSSGSST.',
  '.TSSSMMMMMMMMMMSSST.',
  '..TSSMMMMMMMMMMSST..',
  '...TSSSSSSSSSSSST...',
  '..TSSSTTTTTTTTSSST..',
  '..TTTTT......TTTTT..',
  '....................',
]

// Frame 2: ojos cerrados contentos (parpadeo)
const FROG_IDLE_FRAME_2: string[] = [
  '.......TTTTTT.......',
  '.....TTSSSSSSTT.....',
  '....TSSSSSSSSSST....',
  '...TSSSSSSSSSSSST...',
  '..TSSSSSSSSSSSSSST..',
  '..TSSTTSSSSSSTTSST..',
  '.TSSTSSTSSSSTSSTSST.',
  '.TSSSSSSSSSSSSSSSST.',
  '.TSSHHSSSSSSSSHHSST.',
  '.TSSSSSSSTSSTSSSSST.',
  '.TSSSSSSSTTSSSSSSST.',
  '.TSSGSSMMMMMMSSGSST.',
  '.TSSSMMMMMMMMMMSSST.',
  '..TSSMMMMMMMMMMSST..',
  '...TSSSSSSSSSSSST...',
  '..TSSSTTTTTTTTSSST..',
  '..TTTTT......TTTTT..',
  '....................',
]

export const frogIdle: SpriteDefinition = {
  id: 'frog-idle',
  frames: [FROG_IDLE_FRAME_1, FROG_IDLE_FRAME_2],
  // Si tu renderer permite duración por frame: ~1800 ms abierto, ~150 ms cerrado
  frameMs: 1200,
}

// ─────────────────────────────────────────────────────────────
// SAPO DORMIDO — estático, bolita con ojos cerrados
// Tamaño lógico: 20x12 px
// ─────────────────────────────────────────────────────────────
export const frogSleeping: SpriteDefinition = {
  id: 'frog-sleeping',
  frames: [[
    '......TTTTTTTT......',
    '....TTSSSSSSSSTT....',
    '...TSSSSSSSSSSSST...',
    '..TSSSSSSSSSSSSSST..',
    '.TSSTTTSSSSSSTTTSST.',
    '.TSHHSSSSSSSSSSHHST.',
    '.TSSSSSSSTTSSSSSSST.',
    '.TSSGSSSSSSSSSSGSST.',
    '..TSSSSSSSSSSSSSST..',
    '...TSSSSSSSSSSSST...',
    '....TTSSSSSSSSTT....',
    '......TTTTTTTT......',
  ]],
}

// ─────────────────────────────────────────────────────────────
// HONGUITO — sombrero cálido, laminillas crema, tallo con carita
// Tamaño lógico: 16x18 px
// ─────────────────────────────────────────────────────────────
export const mushroom: SpriteDefinition = {
  id: 'mushroom',
  frames: [[
    '.....TTTTTT.....',
    '...TTHHHHHHTT...',
    '..THHHHHHHHHHT..',
    '.THHHCHHHHHHHHT.',
    'THHCHHHHHHHHHHHT',
    'THHHHHHHHHHHHHHT',
    'TTHHHHHHHHHHHHTT',
    '.TTTTTTTTTTTTTT.',
    '..TCCTCCCCTCCT..',
    '...TTTTTTTTTT...',
    '....TMMMMMMT....',
    '...TMMMMMMMMT...',
    '...TMTCMMTCMT...',
    '...TMTTMMTTMT...',
    '..TMHMMTTMMHMT..',
    '..TMMMMMMMMMMT..',
    '...TTMMMMMMTT...',
    '.....TTTTTT.....',
  ]],
}

// ─────────────────────────────────────────────────────────────
// NENÚFAR FLOTANTE — hoja con muesca, vena y reflejo
// Tamaño lógico: 20x12 px
// ─────────────────────────────────────────────────────────────
export const lilypad: SpriteDefinition = {
  id: 'lilypad',
  frames: [[
    '......TTTTTTTT......',
    '....TTSSSSSSSSTT....',
    '..TTSSSVVVVSSSSSTT..',
    '.TSSSVVVVSSSSSSSSST.',
    'TSSSSVVSSSSSSSSSSSST',
    'TSSSSSSSSSSSST......',
    'TSSGGGGGGGGTT.......',
    'TSSSSSSSSSSSST......',
    '.TSSSSSGSSSSSSSSSST.',
    '..TTSSSSGSSSSSSSTT..',
    '....TTBBBBBBBBTT....',
    '......TTTTTTTT......',
  ]],
}

// ─────────────────────────────────────────────────────────────
// LUNA CRECIENTE CON ESTRELLAS — 2 frames: las estrellas titilan
// Tamaño lógico: 24x20 px
// ─────────────────────────────────────────────────────────────
const MOON_FRAME_1: string[] = [
  '........TTTTTT..........',
  '......TTCCCCTTTT.....H..',
  '....TTCCCCTT............',
  '...TCCCCCT..............',
  '...TCCCCT..........H....',
  '..TCCCCT................',
  '..TCHCCT................',
  '.TCCCCT.................',
  '.TCHCCT.......H.........',
  '.TCHCCT......HHH........',
  '.TCCCCT.......H.........',
  '.TCCCCT.................',
  '.THCCCT.................',
  '..TCCCCT................',
  '..TCCCCT..........H.....',
  '...TCCCCT........HHH....',
  '...TCCCCCT........H.....',
  '....TTCCCCTT............',
  '......TTCCCCTTTT........',
  '........TTTTTT..........',
]

const MOON_FRAME_2: string[] = [
  '........TTTTTT..........',
  '......TTCCCCTTTT.....H..',
  '....TTCCCCTT............',
  '...TCCCCCT.........H....',
  '...TCCCCT.........HHH...',
  '..TCCCCT...........H....',
  '..TCHCCT................',
  '.TCCCCT.................',
  '.TCHCCT.................',
  '.TCHCCT.......H.........',
  '.TCCCCT.................',
  '.TCCCCT.................',
  '.THCCCT.................',
  '..TCCCCT................',
  '..TCCCCT................',
  '...TCCCCT.........H.....',
  '...TCCCCCT..............',
  '....TTCCCCTT............',
  '......TTCCCCTTTT........',
  '........TTTTTT..........',
]

export const moonCrescent: SpriteDefinition = {
  id: 'moon-crescent',
  frames: [MOON_FRAME_1, MOON_FRAME_2],
  frameMs: 900,
}

// ─────────────────────────────────────────────────────────────
// SAPOS DE ESTADO DE ÁNIMO (32x32) — ETAPA 2
// Mismo cuerpo redondo y panza menta para todos; cambian ojos,
// cejas, boca y pequeños detalles (A = lágrimas/sudor, P = la Z).
// ─────────────────────────────────────────────────────────────
// --- contenta: ojos brillantes, sonrisa abierta y chispitas ---
export const frogContenta: SpriteDefinition = {
  id: 'frog-contenta',
  frames: [[
    '................................',
    '................................',
    '................................',
    '...H.......TTTTTTTTTT.......H...',
    '..HHH....TTSSGSSSSGSSTT....HHH..',
    '...H...TTSGSSSSSSSSSSGSTT...H...',
    '......TSSSSSSSSSSSSSSSSSST......',
    '.....TSSSSSSSSSSSSSSSSSSSST.....',
    '....TSSSTTTTSSSSSSSSTTTTSSST....',
    '....TSSTCCCCTSSSSSSTCCCCTSST....',
    '...TSSSTCCTCTSSSSSSTCCTCTSSST...',
    '...TSSSTCTTCTSSSSSSTCTTCTSSST...',
    '..TSSSSTCCCCTSSSSSSTCCCCTSSSST..',
    '..TSSSSSTTTTSSSSSSSSTTTTSSSSST..',
    '..TSSSSSSSSSSSSSSSSSSSSSSSSSST..',
    '..TSSSHHHSSSSSSSSSSSSSSHHHSSST..',
    '..TSSSSSSSSSTTTTTTTTSSSSSSSSST..',
    '..TSSSSSSSSSSTHHHHTSSSSSSSSSST..',
    '..TSGSSSSSSSSSTTTTSSSSSSSSSGST..',
    '...TSSSSSSSSMMMMMMMMSSSSSSSST...',
    '...TSSSSSSMMMMMMMMMMMMSSSSSST...',
    '....TGSSSMMMMMMMMMMMMMMSSSGT....',
    '....TSSSSMMMMMMMMMMMMMMSSSST....',
    '.....TSSSMMMMMMMMMMMMMMSSST.....',
    '......TSSMMMMMMMMMMMMMMSST......',
    '.....TSSSSMMMMMMMMMMMMSSST......',
    '....TSSSSSSSMMMMMMMMSSSSSST.....',
    '....TSSSSSSSSTTTTTSSSSSSSST.....',
    '.....TGSSSSGT.....TSGSSSST......',
    '......TTTTTT.......TTTTTT.......',
    '................................',
    '................................',
  ]],
}

// --- tranquila: ojos cerrados en paz y sonrisa suave ---
export const frogTranquila: SpriteDefinition = {
  id: 'frog-tranquila',
  frames: [[
    '................................',
    '................................',
    '................................',
    '...........TTTTTTTTTT...........',
    '.........TTSSGSSSSGSSTT.........',
    '.......TTSGSSSSSSSSSSGSTT.......',
    '......TSSSSSSSSSSSSSSSSSST......',
    '.....TSSSSSSSSSSSSSSSSSSSST.....',
    '....TSSSSSSSSSSSSSSSSSSSSSST....',
    '....TSSSSSSSSSSSSSSSSSSSSSST....',
    '...TSSSSSSSSSSSSSSSSSSSSSSSST...',
    '...TSSSTSSSSTSSSSSSTSSSSTSSST...',
    '..TSSSSSTTTTSSSSSSSSTTTTSSSSST..',
    '..TSSSSSSSSSSSSSSSSSSSSSSSSSST..',
    '..TSSSSSSSSSSSSSSSSSSSSSSSSSST..',
    '..TSSSHHHSSSSSSSSSSSSSSHHHSSST..',
    '..TSSSSSSSSSSTSSSSTSSSSSSSSSST..',
    '..TSSSSSSSSSSSTTTTSSSSSSSSSSST..',
    '..TSGSSSSSSSSSSSSSSSSSSSSSSGST..',
    '...TSSSSSSSSMMMMMMMMSSSSSSSST...',
    '...TSSSSSSMMMMMMMMMMMMSSSSSST...',
    '....TGSSSMMMMMMMMMMMMMMSSSGT....',
    '....TSSSSMMMMMMMMMMMMMMSSSST....',
    '.....TSSSMMMMMMMMMMMMMMSSST.....',
    '......TSSMMMMMMMMMMMMMMSST......',
    '.....TSSSSMMMMMMMMMMMMSSST......',
    '....TSSSSSSSMMMMMMMMSSSSSST.....',
    '....TSSSSSSSSTTTTTSSSSSSSST.....',
    '.....TGSSSSGT.....TSGSSSST......',
    '......TTTTTT.......TTTTTT.......',
    '................................',
    '................................',
  ]],
}

// --- cansada: párpados caídos, ojeras, bostezo y una Z ---
export const frogCansada: SpriteDefinition = {
  id: 'frog-cansada',
  frames: [[
    '................................',
    '..........................PPPP..',
    '............................P...',
    '...........TTTTTTTTTT......P....',
    '.........TTSSGSSSSGSSTT...PPPP..',
    '.......TTSGSSSSSSSSSSGSTT.......',
    '......TSSSSSSSSSSSSSSSSSST......',
    '.....TSSSSSSSSSSSSSSSSSSSST.....',
    '....TSSSSSSSSSSSSSSSSSSSSSST....',
    '....TSSSSSSSSSSSSSSSSSSSSSST....',
    '...TSSSTTTTTTSSSSSSTTTTTTSSST...',
    '...TSSSTCTTCTSSSSSSTCTTCTSSST...',
    '..TSSSSTCCCCTSSSSSSTCCCCTSSSST..',
    '..TSSSSSTTTTSSSSSSSSTTTTSSSSST..',
    '..TSSSSSGGGGSSSSSSSSGGGGSSSSST..',
    '..TSSSHHHSSSSSSSSSSSSSSHHHSSST..',
    '..TSSSSSSSSSSSSTTSSSSSSSSSSSST..',
    '..TSSSSSSSSSSSTHHTSSSSSSSSSSST..',
    '..TSGSSSSSSSSSSTTSSSSSSSSSSGST..',
    '...TSSSSSSSSMMMMMMMMSSSSSSSST...',
    '...TSSSSSSMMMMMMMMMMMMSSSSSST...',
    '....TGSSSMMMMMMMMMMMMMMSSSGT....',
    '....TSSSSMMMMMMMMMMMMMMSSSST....',
    '.....TSSSMMMMMMMMMMMMMMSSST.....',
    '......TSSMMMMMMMMMMMMMMSST......',
    '.....TSSSSMMMMMMMMMMMMSSST......',
    '....TSSSSSSSMMMMMMMMSSSSSST.....',
    '....TSSSSSSSSTTTTTSSSSSSSST.....',
    '.....TGSSSSGT.....TSGSSSST......',
    '......TTTTTT.......TTTTTT.......',
    '................................',
    '................................',
  ]],
}

// --- tensa: cejas fruncidas, pupilas chicas, boca temblorosa y gota de sudor ---
export const frogTensa: SpriteDefinition = {
  id: 'frog-tensa',
  frames: [[
    '................................',
    '................................',
    '................................',
    '...........TTTTTTTTTT.......T...',
    '.........TTSSGSSSSGSSTT....TAT..',
    '.......TTSGSSSSSSSSSSGSTT..TAT..',
    '......TTTSSSSSSSSSSSSSSTTT..T...',
    '.....TSSSTTTTSSSSSSTTTTSSST.....',
    '....TSSSTTTTSSSSSSSSTTTTSSST....',
    '....TSSTCCCCTSSSSSSTCCCCTSST....',
    '...TSSSTCCCCTSSSSSSTCCCCTSSST...',
    '...TSSSTCTTCTSSSSSSTCTTCTSSST...',
    '..TSSSSTCCCCTSSSSSSTCCCCTSSSST..',
    '..TSSSSSTTTTSSSSSSSSTTTTSSSSST..',
    '..TSSSSSSSSSSSSSSSSSSSSSSSSSST..',
    '..TSSSHHHSSSSSSSSSSSSSSHHHSSST..',
    '..TSSSSSSSSSSSSSSSSSSSSSSSSSST..',
    '..TSSSSSSSSSTSTSTSTSSSSSSSSSST..',
    '..TSGSSSSSSSSTSTSTSTSSSSSSSGST..',
    '...TSSSSSSSSMMMMMMMMSSSSSSSST...',
    '...TSSSSSSMMMMMMMMMMMMSSSSSST...',
    '....TGSSSMMMMMMMMMMMMMMSSSGT....',
    '....TSSSSMMMMMMMMMMMMMMSSSST....',
    '.....TSSSMMMMMMMMMMMMMMSSST.....',
    '......TSSMMMMMMMMMMMMMMSST......',
    '.....TSSSSMMMMMMMMMMMMSSST......',
    '....TSSSSSSSMMMMMMMMSSSSSST.....',
    '....TSSSSSSSSTTTTTSSSSSSSST.....',
    '.....TGSSSSGT.....TSGSSSST......',
    '......TTTTTT.......TTTTTT.......',
    '................................',
    '................................',
  ]],
}

// --- triste: cejas caídas, ojos llorosos y lágrimas ---
export const frogTriste: SpriteDefinition = {
  id: 'frog-triste',
  frames: [[
    '................................',
    '................................',
    '................................',
    '...........TTTTTTTTTT...........',
    '.........TTSSGSSSSGSSTT.........',
    '.......TTSGSSSSSSSSSSGSTT.......',
    '......TSSTTTTSSSSSSTTTTSST......',
    '.....TSTTSSSSSSSSSSSSSSTTST.....',
    '....TSSSTTTTSSSSSSSSTTTTSSST....',
    '....TSSTCCCCTSSSSSSTCCCCTSST....',
    '...TSSSTCCTCTSSSSSSTCCTCTSSST...',
    '...TSSSTCTTCTSSSSSSTCTTCTSSST...',
    '..TSSSSTAAAATSSSSSSTAAAATSSSST..',
    '..TSSSSSTTTTSSSSSSSSTTTTSSSSST..',
    '..TSSSSSSASSSSSSSSSSSSASSSSSST..',
    '..TSSSHHHASSSSSSSSSSSSAHHHSSST..',
    '..TSSSSSSASSSSSSSSSSSSASSSSSST..',
    '..TSSSSSSSSSSSTTTTSSSSSSSSSSST..',
    '..TSGSSSSSSSSTSSSSTSSSSSSSSGST..',
    '...TSSSSSSSSMMMMMMMMSSSSSSSST...',
    '...TSSSSSSMMMMMMMMMMMMSSSSSST...',
    '....TGSSSMMMMMMMMMMMMMMSSSGT....',
    '....TSSSSMMMMMMMMMMMMMMSSSST....',
    '.....TSSSMMMMMMMMMMMMMMSSST.....',
    '......TSSMMMMMMMMMMMMMMSST......',
    '.....TSSSSMMMMMMMMMMMMSSST......',
    '....TSSSSSSSMMMMMMMMSSSSSST.....',
    '....TSSSSSSSSTTTTTSSSSSSSST.....',
    '.....TGSSSSGT.....TSGSSSST......',
    '......TTTTTT.......TTTTTT.......',
    '................................',
    '................................',
  ]],
}

export const MOOD_SPRITES = {
  contenta: frogContenta,
  tranquila: frogTranquila,
  cansada: frogCansada,
  tensa: frogTensa,
  triste: frogTriste,
} as const

// Exportar todos juntos para conveniencia (desarrollo y tests)
export const ALL_SPRITES: SpriteDefinition[] = [
  frogIdle,
  frogSleeping,
  mushroom,
  lilypad,
  moonCrescent,
  frogContenta,
  frogTranquila,
  frogCansada,
  frogTensa,
  frogTriste,
]