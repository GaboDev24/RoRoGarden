/**
 * catalog.ts — Catálogo de objetos decorativos y visitantes del jardín.
 *
 * Cada elemento está diseñado en pixel art original (16x16) con la paleta de RoRoGarden.
 * Estilo: formas redondas y regordetas, contorno de tinta (T), ojitos de punto con brillo,
 * sonrisa diminuta y mejillas rosadas (H), igual que los sapos y hongos principales.
 * Categorías:
 * - visitantes (5): sapos de tonos pastel, rana lunita, sapito bebé
 * - hongos (4): hongo cálido, hongo doble, honguito crema, hongo del musgo
 * - plantas (5): juncos, helecho, flor de loto, trébol, brotecito
 * - agua (4): nenúfar florecido, hojita barco, ondas, piedra de río
 * - cielo (4): estrella mansa, nubecita baja, trío de estrellas, halo de luna
 * - cositas (4): farol de luciérnagas, tronco caído, cartelito de madera, piedras en equilibrio
 */

import type { SpriteDefinition } from './sprites/renderer'

export type CatalogCategory =
  | 'visitantes'
  | 'hongos'
  | 'plantas'
  | 'agua'
  | 'cielo'
  | 'cositas'

export type TerrainType = 'tierra' | 'agua' | 'ambos' | 'cielo'

export interface CatalogItem {
  id: string
  category: CatalogCategory
  name: string
  description: string
  sprite: SpriteDefinition
  gridWidth: number
  gridHeight: number
  terrain: TerrainType
  behavior?: 'parpadear' | 'dormir' | 'mirar-luna' | 'nadar' | 'quieto'
}

export const CATALOG_CATEGORY_NAMES: Record<CatalogCategory, string> = {
  visitantes: 'Visitantes',
  hongos: 'Hongos',
  plantas: 'Plantas',
  agua: 'Agua',
  cielo: 'Cielo',
  cositas: 'Cositas',
}

// ─────────────────────────────────────────────────────────────
// 1. VISITANTES (5)
// ─────────────────────────────────────────────────────────────
const SPRITE_VIS_MENTA: SpriteDefinition = {
  id: 'vis-sapito-menta',
  frames: [
    [
      '................',
      '................',
      '................',
      '......TTTT......',
      '....TTMGGMTT....',
      '...TTTMMMMTTT...',
      '..TTCTTMMTCTTT..',
      '..TTTTTMMTTTTT..',
      '.TMMTTMMMMTTMMT.',
      '.THHMMMMMMMMHHT.',
      '..TMMMTMMTMMMT..',
      '..TMMMMTTMMMMT..',
      '...TMCCCCCCMT...',
      '..TMCCCCCCCCMT..',
      '...TTTTTTTTTT...',
      '................',
    ],
    [
      '................',
      '................',
      '................',
      '......TTTT......',
      '....TTMGGMTT....',
      '...TMMMMMMMMT...',
      '..TMTTMMMMTTMT..',
      '..TTMMTMMTMMTT..',
      '.TMMMMMMMMMMMMT.',
      '.THHMMMMMMMMHHT.',
      '..TMMMTMMTMMMT..',
      '..TMMMMTTMMMMT..',
      '...TMCCCCCCMT...',
      '..TMCCCCCCCCMT..',
      '...TTTTTTTTTT...',
      '................',
    ],
  ],
  frameMs: 1400,
}

const SPRITE_VIS_DORADO: SpriteDefinition = {
  id: 'vis-sapito-dorado',
  frames: [[
    '................',
    '................',
    '................',
    '......TTTT......',
    '....TTHCCHTT....',
    '...TTTHHHHTTT...',
    '..TTCTTHHTCTTT..',
    '..TTTTTHHTTTTT..',
    '.THHTTHHHHTTHHT.',
    '.THHHHHHHHHHHHT.',
    '..THHHTHHTHHHT..',
    '..THHHHTTHHHHT..',
    '...THCCCCCCHT...',
    '..THCCCCCCCCHT..',
    '...TTTTTTTTTT...',
    '................',
  ]],
}

const SPRITE_VIS_LUNITA: SpriteDefinition = {
  id: 'vis-rana-lunita',
  frames: [[
    '................',
    '..........H.....',
    '.............H..',
    '......TTTT......',
    '....TTNPPNTT....',
    '...TTTNNNNTTT...',
    '..TTTCTNNTTCTT..',
    '..TTTTTNNTTTTT..',
    '.TNNTTNNNNTTNNT.',
    '.THHNNNNNNNNHHT.',
    '..TNNNTNNTNNNT..',
    '..TNNNNTTNNNNT..',
    '...TNMMMMMMNT...',
    '..TNMMMMMMMMNT..',
    '...TTTTTTTTTT...',
    '................',
  ]],
}

const SPRITE_VIS_ABUELO: SpriteDefinition = {
  id: 'vis-sapo-abuelo',
  frames: [[
    '............PPP.',
    '.............P..',
    '............PPP.',
    '......TTTT......',
    '...CCCCGGCCCC...',
    '..TGGGGGGGGGGT..',
    '..TGTTGGGGTTGT..',
    '.TGTGGTGGTGGTGT.',
    '.TGGGGGGGGGGGGT.',
    '.THHGGGGGGGGHHT.',
    '.TGGGGTGGTGGGGT.',
    '..TGGGGTTGGGGT..',
    '..TGGSSSSSSGGT..',
    '..TGSSSSSSSSGT..',
    '...TTTTTTTTTT...',
    '................',
  ]],
}

const SPRITE_VIS_BEBE: SpriteDefinition = {
  id: 'vis-sapito-bebe',
  frames: [[
    '................',
    '................',
    '................',
    '...TTT....TTT...',
    '..TSCCT..TCCST..',
    '..TSCTSTTSCTST..',
    '...TSSSSSSSST...',
    '...TSSSSSSSST...',
    '...HSSSSSSSSH...',
    '...TSSTSSTSST...',
    '...TSSSTTSSST...',
    '.AAAAAAAAAAAAAA.',
    '.AAUUAAUUAAUUAA.',
    '..AUAAUAAUAAUA..',
    '................',
    '................',
  ]],
}

// ─────────────────────────────────────────────────────────────
// 2. HONGOS (4)
// ─────────────────────────────────────────────────────────────
const SPRITE_HONGO_CALIDO: SpriteDefinition = {
  id: 'hongo-calido',
  frames: [[
    '................',
    '.....TTTTTT.....',
    '...TTHHHHHHTT...',
    '..THCCHHHHHHHT..',
    '..TCHHHHHHHHHT..',
    '.THHHHHHHHHHHHT.',
    '.TTTTTTTTTTTTTT.',
    '..CCTCCTCCTCCT..',
    '...TTTTTTTTTT...',
    '....TTMMMMTT....',
    '....TMTMMTMT....',
    '...TMHMTTMHMT...',
    '...TMMMMMMMMT...',
    '....TTMMMMTT....',
    '......TTTT......',
    '................',
  ]],
}

const SPRITE_HONGO_DOBLE: SpriteDefinition = {
  id: 'hongo-doble',
  frames: [[
    '................',
    '...TTTT.........',
    '.TTHHHHTT.......',
    '.THCCHHHT.......',
    'THCHHHHHHT......',
    'TTTTTTTTTT......',
    '.CCTCCTCC..TTT..',
    '..TTTTTT..TCCCT.',
    '...TMMT..TTTTTTT',
    '..TTMMTT..HHTHH.',
    '..TTMMTT...TTT..',
    '..HMTTMH..TTMMT.',
    '..TMMMMT..TMMMT.',
    '..TTTTTTTTTTTT..',
    'TTGGGGGGGGGGGGTT',
    '..TTTTTTTTTTTT..',
  ]],
}

const SPRITE_HONGO_CREMA: SpriteDefinition = {
  id: 'hongo-crema',
  frames: [[
    '................',
    '................',
    '.....TTTTTT.....',
    '...TTCCCCHCTT...',
    '..TCCHCCCCCCCT..',
    '..THCCCCCCCHCT..',
    '..TTTTTTTTTTTT..',
    '...HHTHHTHHTH...',
    '....TTTTTTTT....',
    '....TTMMMMTT....',
    '....TMTMMTMT....',
    '...TMHMTTMHMT...',
    '....TMMMMMMT....',
    '....TTMMMMTT....',
    '......TTTT......',
    '................',
  ]],
}

const SPRITE_HONGO_MUSGO: SpriteDefinition = {
  id: 'hongo-musgoso',
  frames: [[
    '................',
    '.....TTTTTT.....',
    '...TTGGGGGGTT...',
    '..TGVVGGGGGGGT..',
    '..TGGGGGGGVGGT..',
    '.TGGGGVGGGGGGGT.',
    '.TTTTTTTTTTTTTT.',
    '..VVTVVTVVTVVT..',
    '...TTTTTTTTTT...',
    '....TSTSSTST....',
    '...TSHSTTSHST...',
    '...TSSSSSSSST...',
    '....TSSSSSST....',
    '..TTTTTTTTTTTT..',
    '.TTGGGGGGGGGGTT.',
    '...TTTTTTTTTT...',
  ]],
}

// ─────────────────────────────────────────────────────────────
// 3. PLANTAS (5)
// ─────────────────────────────────────────────────────────────
const SPRITE_JUNCOS: SpriteDefinition = {
  id: 'planta-juncos',
  frames: [
    [
      '....TT....TT....',
      '...THHT..THHT...',
      '...TCHT..TCHT...',
      '...TCHT..TCHT...',
      '...THHT..THHT...',
      '...TTTT..TTTT...',
      '....TG....TG....',
      '....TG....TG....',
      '....TG....TG....',
      '....TGT..TTG....',
      '....TGTTTTTG....',
      '....TGTSSTTG....',
      '....TGTTTTTG....',
      '..TTTTSSSSTTTT..',
      '.TTSGSSSSGSSGTT.',
      '...TTTTTTTTTT...',
    ],
    [
      '.....TT....TT...',
      '....THHT..THHT..',
      '....TCHT..TCHT..',
      '....TCHT..TCHT..',
      '....THHT..THHT..',
      '....TTTT..TTTT..',
      '.....TG....TG...',
      '....TG....TG....',
      '....TG....TG....',
      '....TGT..TTG....',
      '....TGTTTTTG....',
      '....TGTSSTTG....',
      '....TGTTTTTG....',
      '..TTTTSSSSTTTT..',
      '.TTSGSSSSGSSGTT.',
      '...TTTTTTTTTT...',
    ],
  ],
  frameMs: 1200,
}

const SPRITE_HELECHO: SpriteDefinition = {
  id: 'planta-helecho',
  frames: [[
    '................',
    '................',
    '................',
    '................',
    '.......TT.......',
    '......TSGT......',
    '...T..TSGT..T...',
    '..TGTTTSGTTTGT..',
    '..TGGSTSGTVGGT..',
    '..TVGSTSGTSGST..',
    'TTTTTGTSGTGTTTTT',
    'TGSSSTTSGTTVVSGT',
    'TSGGGSTSGTSGGGST',
    'TTVVSGTSGTGSSSTT',
    '..TTTTTTTTTTTT..',
    '.....TTTTTT.....',
  ]],
}

const SPRITE_FLOR_LOTO: SpriteDefinition = {
  id: 'planta-flor-loto',
  frames: [[
    '................',
    '................',
    '................',
    '................',
    '.......TT.......',
    '.......TT.......',
    '...TTTTCCTTTT...',
    '...THHTHCTHHT...',
    '..TTHHTCHTHHTT..',
    'TTHTTHTHCTHTTHTT',
    '.THHTHTCCTHTHHT.',
    '..THHTTCCTTHHT..',
    '...TTTTTTTTTT...',
    '.TTVVSTTTTSSSTT.',
    '.TTTTSSSSSSTTTT.',
    '.....TTTTTT.....',
  ]],
}

const SPRITE_TREBOL: SpriteDefinition = {
  id: 'planta-trebol',
  frames: [[
    '................',
    '.......TT.......',
    '......TVVT......',
    '.....TMMVVT.....',
    '.....TVVVST.....',
    '....TTVVSVTT....',
    '...TVVTTTTVVT...',
    '..TMMVVTTVVMMT..',
    '..TVVVVTSVVVVT..',
    '..TVVSVTTVSVVT..',
    '...TTTT..TTTT...',
    '.......TG.......',
    '.......TG.......',
    '.......TG.......',
    '.......TG.......',
    '................',
  ]],
}

const SPRITE_BROTE: SpriteDefinition = {
  id: 'planta-brote',
  frames: [[
    '................',
    '................',
    '................',
    '..TTTTT..TTTTT..',
    '.TVMMVVTTVVMMVT.',
    '..TVVVSTTSVVVT..',
    '...TTTTTGTTTT...',
    '.......TG.......',
    '.......TG.......',
    '.......TG.......',
    '.......TG.......',
    '.......TG.......',
    '.......TG.......',
    '..TTTTTTTTTTTT..',
    '.TGGBGGGBGGBGGT.',
    '..TTTTTTTTTTTT..',
  ]],
}

// ─────────────────────────────────────────────────────────────
// 4. AGUA (4)
// ─────────────────────────────────────────────────────────────
const SPRITE_NENUFAR_FLOR: SpriteDefinition = {
  id: 'agua-nenufar-rosa',
  frames: [[
    '................',
    '................',
    '................',
    '................',
    '......TTTT......',
    '.....THHHHT.....',
    '.....THCCHT.....',
    '.....THCCHT.....',
    '....TTTTTTTT....',
    '..TTSVSSSSTT....',
    '.TSVVSSSST......',
    '.TSSSSSSSSTT....',
    '.TGGGGGGGSSSTTT.',
    '..TTTTSSSSTTTT..',
    '..A...TTTT...A..',
    '................',
  ]],
}

const SPRITE_HOJITA_BARCO: SpriteDefinition = {
  id: 'agua-hojita-barco',
  frames: [[
    '................',
    '................',
    '................',
    '................',
    '................',
    '................',
    '................',
    '...TTTTTTTTTT...',
    '.TTSVVVSSSSSSTT.',
    '..TGGGSSSSGGGT..',
    '...TSSGGGGSST...',
    '....TSSSSSST....',
    '.....TTTTTT.....',
    '.AAAAAAAAAAAAAA.',
    '..UU....UU..UU..',
    '................',
  ]],
}

const SPRITE_ONDAS: SpriteDefinition = {
  id: 'agua-ondas',
  frames: [
    [
      '................',
      '................',
      '................',
      '................',
      '................',
      '......TTTT......',
      '....TTAAAATT....',
      '...TA..UU..AT...',
      '..TA..U.CU..AT..',
      '...TA..UU..AT...',
      '....TTAAAATT....',
      '......TTTT......',
      '................',
      '................',
      '................',
      '................',
    ],
    [
      '................',
      '................',
      '................',
      '................',
      '.....TTTTTT.....',
      '...TTAAAAAATT...',
      '.TTA........ATT.',
      '.T...UUUUUU...T.',
      'TA...U....U...AT',
      '.T...UUUUUU...T.',
      '.TTA........ATT.',
      '...TTAAAAAATT...',
      '.....TTTTTT.....',
      '................',
      '................',
      '................',
    ],
  ],
  frameMs: 1000,
}

const SPRITE_PIEDRA_RIO: SpriteDefinition = {
  id: 'agua-piedra-rio',
  frames: [[
    '................',
    '................',
    '................',
    '................',
    '................',
    '......TTTT......',
    '...TMMNNNNTTT...',
    '..TMNNNNNNNNNT..',
    '..TNNTNNNNTNNT..',
    '.TNNNTNNNNTNNNT.',
    '..TNHNNTTNNHNT..',
    '..TNNNNNNNNPPT..',
    '...TTNNNPPPTT...',
    '.....TTTTTT.....',
    '................',
    '................',
  ]],
}

// ─────────────────────────────────────────────────────────────
// 5. CIELO (4)
// ─────────────────────────────────────────────────────────────
const SPRITE_ESTRELLA: SpriteDefinition = {
  id: 'cielo-estrella',
  frames: [
    [
      '................',
      '................',
      '.......TT.......',
      '.......TT.......',
      '......TCCT......',
      '......TCCT......',
      '.TTTTTCCCCTTTTT.',
      '..TCCCTCCTCCCT..',
      '...TCCTCCTCCT...',
      '....THCCCCHT....',
      '....TMMTTMMT....',
      '....TMMMMMMT....',
      '....TMTTTTMT....',
      '....TT....TT....',
      '................',
      '................',
    ],
    [
      '................',
      '................',
      '.......TT.......',
      '.......TT.......',
      '......TCCT......',
      '......TCCT......',
      '.TTTTTCCCCTTTTT.',
      '..TCCCCCCCCCCT..',
      '...TCCTCCTCCT...',
      '....THCCCCHT....',
      '....TMMTTMMT....',
      '....TMMMMMMT....',
      '....TMTTTTMT....',
      '....TT....TT....',
      '................',
      '................',
    ],
  ],
  frameMs: 800,
}

const SPRITE_NUBECITA: SpriteDefinition = {
  id: 'cielo-nubecita',
  frames: [[
    '................',
    '................',
    '................',
    '................',
    '......TTTTTT....',
    '.....TCCCCCCT...',
    '.....TCCCCCCT...',
    '..TTTCTCCTCCCT..',
    '.TCCCCTCCTCCCCT.',
    '.TCCHCCTTCCHCCT.',
    '.TCCCCCCCCCCCCT.',
    '..TTTTTTTTTTTT..',
    '................',
    '................',
    '................',
    '................',
  ]],
}

const SPRITE_TRIO_ESTRELLAS: SpriteDefinition = {
  id: 'cielo-trio-estrellas',
  frames: [
    [
      '................',
      '............H...',
      '...H............',
      '..HCH...........',
      '...H............',
      '................',
      '................',
      '...........H....',
      '................',
      '................',
      '................',
      '.....H..........',
      '....HCH.........',
      '.....H..........',
      '.............H..',
      '................',
    ],
    [
      '................',
      '............H...',
      '................',
      '...H............',
      '................',
      '................',
      '...........H....',
      '..........HCH...',
      '...........H....',
      '................',
      '................',
      '................',
      '.....H..........',
      '................',
      '.............H..',
      '................',
    ],
  ],
  frameMs: 900,
}

const SPRITE_HALO_LUNA: SpriteDefinition = {
  id: 'cielo-halo-luna',
  frames: [[
    '....A.A.A.......',
    '...A.......A....',
    '....TTTT....A...',
    '...TCCT.....HA..',
    'A.TCCT..........',
    '.TCCT...........',
    '.TCCT.........A.',
    '.TTTT...........',
    '.TCHT.........A.',
    '.THCT...........',
    '.TCCCT........A.',
    '..TCCCT......A..',
    'A..TCCCTT...H...',
    '.A..TTTTTT......',
    '..A.......A.....',
    '.....A.A.A......',
  ]],
}

// ─────────────────────────────────────────────────────────────
// 6. COSITAS (4)
// ─────────────────────────────────────────────────────────────
const SPRITE_FAROL: SpriteDefinition = {
  id: 'cosa-farol',
  frames: [
    [
      '......TTTT......',
      '.....T....T.....',
      '....TTTTTTTT....',
      '...TTTTTTTTTT...',
      '......TTTT......',
      '....TTCCCCTT.H..',
      '...TCCCCCHCCT...',
      '...TCCHCCCCCT...',
      '...TCCHCCCHCT...',
      '...TCCCCCCCCT...',
      '...TCCCCHCCCT...',
      '..H.TTCCCCTT....',
      '...TTTTTTTTTT...',
      '....TTTTTTTT....',
      '.....T....T.....',
      '................',
    ],
    [
      '......TTTT......',
      '.....T....T.....',
      '....TTTTTTTT....',
      '...TTTTTTTTTT...',
      '.H....TTTT......',
      '....TTCCCCTT....',
      '...TCCCHCCCCT...',
      '...TCCCHCCCCT...',
      '...TCCCCCHCCT...',
      '...TCHCCCCCCT...',
      '...TCCCCCCHCT.H.',
      '....TTCCCCTT....',
      '...TTTTTTTTTT...',
      '....TTTTTTTT....',
      '.....T....T.....',
      '................',
    ],
  ],
  frameMs: 700,
}

const SPRITE_TRONQUITO: SpriteDefinition = {
  id: 'cosa-tronquito',
  frames: [[
    '................',
    '................',
    '................',
    '................',
    '................',
    '..TTTTTTTTTTTT..',
    '.TTVVVVVVBTHHCT.',
    '.TBBBBBGGTCHCHT.',
    '.TBGGBBBBTHCHHT.',
    '.TBBBBBBBTCHHHT.',
    '.TBBBGGBBBTHHCT.',
    '.TTGGBBBBBTTTT..',
    '...TTTTTTTTTT...',
    '................',
    '................',
    '................',
  ]],
}

const SPRITE_CARTELITO: SpriteDefinition = {
  id: 'cosa-cartelito',
  frames: [[
    '................',
    '................',
    '...TTTTTTTTTT...',
    '..TCCHHHHHHHHT..',
    '..TCHTHHHHTHHT..',
    '..THHTHHHHTHHT..',
    '..THHHTHHTHHHT..',
    '..THHHHTTHHHHT..',
    '...TTTTTTTTTT...',
    '......THHT......',
    '......THHT......',
    '......THHT......',
    '......THHT......',
    '....TTTTTTTT....',
    '...TGGGGGGGGT...',
    '....TTTTTTTT....',
  ]],
}

const SPRITE_PIEDRAS_APILADAS: SpriteDefinition = {
  id: 'cosa-piedras-apiladas',
  frames: [[
    '................',
    '....H...........',
    '............H...',
    '.......TT.......',
    '.....TTMNTT.....',
    '.....TNMNNT.....',
    '.....TTTTTT.....',
    '....TNNNNNNT....',
    '....TMMNNNNT....',
    '....TTNNNNTT....',
    '...TTNTTTTNTT...',
    '..TMMNNNNNNNNT..',
    '..TNNTNNNNTNNT..',
    '...THNNTTNNHT...',
    '.....TTTTTT.....',
    '................',
  ]],
}

// ─────────────────────────────────────────────────────────────
// ARRAY EXPORTADO CON LOS 26 ÍTEMS DEL CATÁLOGO
// ─────────────────────────────────────────────────────────────
export const CATALOG_ITEMS: CatalogItem[] = [
  // Visitantes (5)
  {
    id: 'vis-sapito-menta',
    category: 'visitantes',
    name: 'Sapito Menta',
    description: 'Un compañero sereno que visita la orilla.',
    sprite: SPRITE_VIS_MENTA,
    gridWidth: 1,
    gridHeight: 1,
    terrain: 'ambos',
    behavior: 'parpadear',
  },
  {
    id: 'vis-sapito-dorado',
    category: 'visitantes',
    name: 'Sapito Cálido',
    description: 'Trae un tono suave de sol a tu rincón.',
    sprite: SPRITE_VIS_DORADO,
    gridWidth: 1,
    gridHeight: 1,
    terrain: 'tierra',
    behavior: 'parpadear',
  },
  {
    id: 'vis-rana-lunita',
    category: 'visitantes',
    name: 'Rana Lunita',
    description: 'Le gusta sentarse a mirar la luna en silencio.',
    sprite: SPRITE_VIS_LUNITA,
    gridWidth: 1,
    gridHeight: 1,
    terrain: 'ambos',
    behavior: 'mirar-luna',
  },
  {
    id: 'vis-sapo-abuelo',
    category: 'visitantes',
    name: 'Sapo Mayor',
    description: 'Duerme plácidamente sin apuro alguno.',
    sprite: SPRITE_VIS_ABUELO,
    gridWidth: 1,
    gridHeight: 1,
    terrain: 'tierra',
    behavior: 'dormir',
  },
  {
    id: 'vis-sapito-bebe',
    category: 'visitantes',
    name: 'Sapito Pequeño',
    description: 'Apenas chapotea cerca de las hojas.',
    sprite: SPRITE_VIS_BEBE,
    gridWidth: 1,
    gridHeight: 1,
    terrain: 'agua',
    behavior: 'nadar',
  },

  // Hongos (4)
  {
    id: 'hongo-calido',
    category: 'hongos',
    name: 'Hongo Cálido',
    description: 'Sombrero redondeado con tono de solcito.',
    sprite: SPRITE_HONGO_CALIDO,
    gridWidth: 1,
    gridHeight: 1,
    terrain: 'tierra',
    behavior: 'quieto',
  },
  {
    id: 'hongo-doble',
    category: 'hongos',
    name: 'Hongo Doble',
    description: 'Dos compañeros creciendo pegaditos.',
    sprite: SPRITE_HONGO_DOBLE,
    gridWidth: 1,
    gridHeight: 1,
    terrain: 'tierra',
    behavior: 'quieto',
  },
  {
    id: 'hongo-crema',
    category: 'hongos',
    name: 'Honguito Crema',
    description: 'Suave y claro como la luna llena.',
    sprite: SPRITE_HONGO_CREMA,
    gridWidth: 1,
    gridHeight: 1,
    terrain: 'tierra',
    behavior: 'quieto',
  },
  {
    id: 'hongo-musgoso',
    category: 'hongos',
    name: 'Hongo del Musgo',
    description: 'Creció sobre una alfombra verde tierna.',
    sprite: SPRITE_HONGO_MUSGO,
    gridWidth: 1,
    gridHeight: 1,
    terrain: 'tierra',
    behavior: 'quieto',
  },

  // Plantas (5)
  {
    id: 'planta-juncos',
    category: 'plantas',
    name: 'Juncos del Estanque',
    description: 'Se mecen suavemente con la brisa.',
    sprite: SPRITE_JUNCOS,
    gridWidth: 1,
    gridHeight: 1,
    terrain: 'ambos',
    behavior: 'parpadear',
  },
  {
    id: 'planta-helecho',
    category: 'plantas',
    name: 'Helecho Suave',
    description: 'Hojas arqueadas que abrazan la tierra.',
    sprite: SPRITE_HELECHO,
    gridWidth: 1,
    gridHeight: 1,
    terrain: 'tierra',
    behavior: 'quieto',
  },
  {
    id: 'planta-flor-loto',
    category: 'plantas',
    name: 'Flor de Loto',
    description: 'Se abre en el agua con calma absoluta.',
    sprite: SPRITE_FLOR_LOTO,
    gridWidth: 1,
    gridHeight: 1,
    terrain: 'agua',
    behavior: 'quieto',
  },
  {
    id: 'planta-trebol',
    category: 'plantas',
    name: 'Trébol del Bosque',
    description: 'Tres hojitas verdes para dar buena sombra.',
    sprite: SPRITE_TREBOL,
    gridWidth: 1,
    gridHeight: 1,
    terrain: 'tierra',
    behavior: 'quieto',
  },
  {
    id: 'planta-brote',
    category: 'plantas',
    name: 'Brotecito Tierno',
    description: 'Recién asoma de la tierra húmeda.',
    sprite: SPRITE_BROTE,
    gridWidth: 1,
    gridHeight: 1,
    terrain: 'tierra',
    behavior: 'quieto',
  },

  // Agua (4)
  {
    id: 'agua-nenufar-rosa',
    category: 'agua',
    name: 'Nenúfar Florecido',
    description: 'Una florcita descansando sobre la hoja verde.',
    sprite: SPRITE_NENUFAR_FLOR,
    gridWidth: 1,
    gridHeight: 1,
    terrain: 'agua',
    behavior: 'quieto',
  },
  {
    id: 'agua-hojita-barco',
    category: 'agua',
    name: 'Hojita Barco',
    description: 'Flota suave como un barquito de papel.',
    sprite: SPRITE_HOJITA_BARCO,
    gridWidth: 1,
    gridHeight: 1,
    terrain: 'agua',
    behavior: 'quieto',
  },
  {
    id: 'agua-ondas',
    category: 'agua',
    name: 'Ondas en el Agua',
    description: 'Un círculo que se expande en silencio.',
    sprite: SPRITE_ONDAS,
    gridWidth: 1,
    gridHeight: 1,
    terrain: 'agua',
    behavior: 'parpadear',
  },
  {
    id: 'agua-piedra-rio',
    category: 'agua',
    name: 'Piedra de Arroyo',
    description: 'Redondeada y suave por el agua fresca.',
    sprite: SPRITE_PIEDRA_RIO,
    gridWidth: 1,
    gridHeight: 1,
    terrain: 'ambos',
    behavior: 'quieto',
  },

  // Cielo (4)
  {
    id: 'cielo-estrella',
    category: 'cielo',
    name: 'Estrella Mansa',
    description: 'Titila despacio cuidando la noche.',
    sprite: SPRITE_ESTRELLA,
    gridWidth: 1,
    gridHeight: 1,
    terrain: 'cielo',
    behavior: 'parpadear',
  },
  {
    id: 'cielo-nubecita',
    category: 'cielo',
    name: 'Nubecita Baja',
    description: 'Pasa despacio como un algodón.',
    sprite: SPRITE_NUBECITA,
    gridWidth: 1,
    gridHeight: 1,
    terrain: 'cielo',
    behavior: 'quieto',
  },
  {
    id: 'cielo-trio-estrellas',
    category: 'cielo',
    name: 'Trío de Estrellas',
    description: 'Tres luces que se acompañan en lo alto.',
    sprite: SPRITE_TRIO_ESTRELLAS,
    gridWidth: 1,
    gridHeight: 1,
    terrain: 'cielo',
    behavior: 'parpadear',
  },
  {
    id: 'cielo-halo-luna',
    category: 'cielo',
    name: 'Halo de Luna',
    description: 'Luz tenue que ilumina el estanque.',
    sprite: SPRITE_HALO_LUNA,
    gridWidth: 1,
    gridHeight: 1,
    terrain: 'cielo',
    behavior: 'quieto',
  },

  // Cositas (4)
  {
    id: 'cosa-farol',
    category: 'cositas',
    name: 'Farol de Luciérnagas',
    description: 'Luz cálida y mansa para la noche.',
    sprite: SPRITE_FAROL,
    gridWidth: 1,
    gridHeight: 1,
    terrain: 'tierra',
    behavior: 'parpadear',
  },
  {
    id: 'cosa-tronquito',
    category: 'cositas',
    name: 'Tronco Caído',
    description: 'Un puente de madera tapizado de musgo.',
    sprite: SPRITE_TRONQUITO,
    gridWidth: 1,
    gridHeight: 1,
    terrain: 'tierra',
    behavior: 'quieto',
  },
  {
    id: 'cosa-cartelito',
    category: 'cositas',
    name: 'Cartelito de Madera',
    description: 'Un rincón señalado con cariño.',
    sprite: SPRITE_CARTELITO,
    gridWidth: 1,
    gridHeight: 1,
    terrain: 'tierra',
    behavior: 'quieto',
  },
  {
    id: 'cosa-piedras-apiladas',
    category: 'cositas',
    name: 'Piedritas en Equilibrio',
    description: 'Un pequeño monumento a la paciencia.',
    sprite: SPRITE_PIEDRAS_APILADAS,
    gridWidth: 1,
    gridHeight: 1,
    terrain: 'ambos',
    behavior: 'quieto',
  },
]

export const CATALOG_ITEMS_BY_ID = new Map<string, CatalogItem>(
  CATALOG_ITEMS.map((item) => [item.id, item])
)
