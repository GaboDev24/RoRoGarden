import { palette, SPRITE_CHAR_MAP, type PaletteKey } from '../palette/colors'

/**
 * Definición de un sprite: una o más grillas de texto (frames de animación).
 * Cada string de la grilla es una fila; cada carácter es un pixel.
 * Usar los caracteres de SPRITE_CHAR_MAP. Todos los strings deben tener la misma longitud.
 */
export interface SpriteDefinition {
  /** Identificador único del sprite */
  id: string
  /** Frames de animación (mínimo 1, máximo 4) */
  frames: string[][]
  /** Intervalo entre frames en ms (por defecto 600) */
  frameMs?: number
}

/**
 * Instancia viva de un sprite: tiene estado de animación y puede dibujarse.
 */
export interface SpriteInstance {
  def: SpriteDefinition
  currentFrame: number
  lastFrameTime: number
  /** Ancho en píxeles lógicos del sprite */
  width: number
  /** Alto en píxeles lógicos del sprite */
  height: number
}

/**
 * Crea una instancia de sprite a partir de su definición.
 */
export function createSpriteInstance(def: SpriteDefinition): SpriteInstance {
  const height = def.frames[0].length
  const width = def.frames[0][0]?.length ?? 0
  return { def, currentFrame: 0, lastFrameTime: 0, width, height }
}

/**
 * Avanza la animación del sprite según el tiempo actual.
 * Llamar en cada tick del loop de animación.
 */
export function tickSprite(inst: SpriteInstance, now: number): void {
  if (inst.def.frames.length <= 1) return
  const ms = inst.def.frameMs ?? 600
  if (now - inst.lastFrameTime >= ms) {
    inst.currentFrame = (inst.currentFrame + 1) % inst.def.frames.length
    inst.lastFrameTime = now
  }
}

/**
 * Dibuja un sprite en un CanvasRenderingContext2D.
 * @param ctx    - Contexto del canvas (ya escalado por DPR si corresponde)
 * @param inst   - Instancia del sprite
 * @param x      - Posición X en píxeles lógicos del canvas
 * @param y      - Posición Y en píxeles lógicos del canvas
 * @param scale  - Escala entera (1, 2, 4, 8 …)
 */
export function drawSprite(
  ctx: CanvasRenderingContext2D,
  inst: SpriteInstance,
  x: number,
  y: number,
  scale: number = 1,
): void {
  const frame = inst.def.frames[inst.currentFrame]
  const intScale = Math.max(1, Math.floor(scale))

  for (let row = 0; row < frame.length; row++) {
    const rowStr = frame[row]
    for (let col = 0; col < rowStr.length; col++) {
      const char = rowStr[col]
      const key = (SPRITE_CHAR_MAP[char] ?? 'transparent') as PaletteKey
      if (key === 'transparent') continue
      ctx.fillStyle = palette[key]
      ctx.fillRect(
        x + col * intScale,
        y + row * intScale,
        intScale,
        intScale,
      )
    }
  }
}

/**
 * Crea un <canvas> pixel-perfect listo para dibujar sprites.
 * Ajusta automáticamente por devicePixelRatio para pantallas Retina.
 *
 * @param logicalW - Ancho lógico en píxeles CSS
 * @param logicalH - Alto lógico en píxeles CSS
 * @returns El canvas y su contexto 2D
 */
export function createPixelCanvas(
  logicalW: number,
  logicalH: number,
): { canvas: HTMLCanvasElement; ctx: CanvasRenderingContext2D } {
  const canvas = document.createElement('canvas')
  const dpr = window.devicePixelRatio ?? 1

  canvas.width = Math.round(logicalW * dpr)
  canvas.height = Math.round(logicalH * dpr)
  canvas.style.width = `${logicalW}px`
  canvas.style.height = `${logicalH}px`
  canvas.style.imageRendering = 'pixelated'

  const ctx = canvas.getContext('2d')!
  ctx.scale(dpr, dpr)

  return { canvas, ctx }
}

/**
 * Sistema de animación: gestiona múltiples instancias con un solo requestAnimationFrame.
 */
export class SpriteAnimator {
  private instances: Set<SpriteInstance> = new Set()
  private rafId: number | null = null
  private onTick?: (now: number) => void
  private reducedMotion: boolean

  constructor(onTick?: (now: number) => void) {
    this.onTick = onTick
    this.reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
  }

  add(inst: SpriteInstance): void {
    this.instances.add(inst)
  }

  remove(inst: SpriteInstance): void {
    this.instances.delete(inst)
  }

  start(): void {
    if (this.rafId !== null) return
    const loop = (now: number) => {
      if (!this.reducedMotion) {
        for (const inst of this.instances) {
          tickSprite(inst, now)
        }
      }
      this.onTick?.(now)
      this.rafId = requestAnimationFrame(loop)
    }
    this.rafId = requestAnimationFrame(loop)
  }

  stop(): void {
    if (this.rafId !== null) {
      cancelAnimationFrame(this.rafId)
      this.rafId = null
    }
  }
}

