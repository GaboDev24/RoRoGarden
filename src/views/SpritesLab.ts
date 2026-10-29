import { ALL_SPRITES } from '../sprites/definitions'
import {
  createSpriteInstance,
  createPixelCanvas,
  drawSprite,
  SpriteAnimator,
} from '../sprites/renderer'
import { palette } from '../palette/colors'

const SCALE_PREVIEW = 8
const SCALE_ACTUAL = 2

/**
 * /sprites — Página de desarrollo para inspeccionar sprites.
 * Muestra cada sprite a x8 sobre fondo claro y oscuro,
 * y a tamaño real en un contenedor acotado de 360px.
 */
export function renderSpritesLab(container: HTMLElement): () => void {
  container.innerHTML = ''

  const style = document.createElement('style')
  style.textContent = `
    .sprites-lab {
      padding: var(--space-md);
      background-color: var(--color-menta);
      min-height: 100dvh;
      display: flex;
      flex-direction: column;
      gap: var(--space-md);
      box-sizing: border-box;
    }

    .lab-header {
      display: flex;
      align-items: center;
      justify-content: space-between;
      gap: var(--space-sm);
      flex-wrap: wrap;
    }

    .lab-title {
      font-family: var(--font-pixel);
      font-size: 0.75rem;
      color: var(--color-bosque);
      line-height: 1.8;
      margin: 0;
    }

    .back-btn {
      font-family: var(--font-pixel);
      font-size: 0.625rem;
      color: var(--color-crema);
      background-color: var(--color-bosque);
      border: 2px solid var(--color-tinta);
      border-radius: var(--border-radius-sm);
      padding: var(--space-sm) var(--space-md);
      min-height: var(--touch-target-min);
      min-width: var(--touch-target-min);
      cursor: pointer;
    }

    .back-btn:focus-visible {
      outline: 3px solid var(--color-acento);
      outline-offset: 3px;
    }

    .sprite-card {
      background-color: var(--color-crema);
      border: 2px solid var(--color-tinta);
      border-radius: var(--border-radius-md);
      padding: var(--space-md);
      display: flex;
      flex-direction: column;
      gap: var(--space-sm);
    }

    .sprite-card-title {
      font-family: var(--font-pixel);
      font-size: 0.625rem;
      color: var(--color-tinta);
      margin: 0;
    }

    .sprite-meta {
      font-family: var(--font-ui);
      font-size: var(--font-size-xs);
      color: var(--color-musgo);
      margin: 0;
    }

    .sprite-previews {
      display: flex;
      flex-wrap: wrap;
      gap: var(--space-md);
      align-items: flex-end;
    }

    .preview-col {
      display: flex;
      flex-direction: column;
      gap: var(--space-xs);
    }

    .preview-label {
      font-family: var(--font-ui);
      font-size: var(--font-size-xs);
      color: var(--color-tinta);
      font-weight: 600;
    }

    .canvas-wrap {
      padding: var(--space-sm);
      border-radius: var(--border-radius-sm);
      display: inline-flex;
      border: 2px solid var(--color-tinta);
    }

    .canvas-wrap.light {
      background-color: var(--color-celeste-agua);
    }

    .canvas-wrap.dark {
      background-color: var(--color-agua-profunda);
    }

    .real-size-box {
      width: 100%;
      max-width: 360px;
      box-sizing: border-box;
      background-color: var(--color-menta);
      border: 2px dashed var(--color-bosque);
      border-radius: var(--border-radius-sm);
      padding: var(--space-sm);
      display: flex;
      align-items: center;
      gap: var(--space-md);
    }
  `
  document.head.appendChild(style)

  const lab = document.createElement('div')
  lab.className = 'sprites-lab'

  const header = document.createElement('div')
  header.className = 'lab-header'

  const title = document.createElement('h1')
  title.className = 'lab-title'
  title.textContent = '🐸 Sprites Lab (Dev)'

  const backBtn = document.createElement('button')
  backBtn.className = 'back-btn'
  backBtn.textContent = '← Volver'
  backBtn.setAttribute('aria-label', 'Volver a la pantalla de inicio')

  header.appendChild(title)
  header.appendChild(backBtn)
  lab.appendChild(header)

  const renderFns: Array<() => void> = []
  const instances = ALL_SPRITES.map((def) => createSpriteInstance(def))

  ALL_SPRITES.forEach((def, index) => {
    const inst = instances[index]
    const w = inst.width
    const h = inst.height

    const card = document.createElement('article')
    card.className = 'sprite-card'

    const cardTitle = document.createElement('h2')
    cardTitle.className = 'sprite-card-title'
    cardTitle.textContent = def.id

    const meta = document.createElement('p')
    meta.className = 'sprite-meta'
    meta.textContent = `${w}×${h}px · ${def.frames.length} frame(s) · ${def.frameMs ?? 600}ms/frame`

    card.appendChild(cardTitle)
    card.appendChild(meta)

    const previews = document.createElement('div')
    previews.className = 'sprite-previews'

    // 1. Zoom x8 sobre fondo claro
    const colLight = document.createElement('div')
    colLight.className = 'preview-col'
    const lblLight = document.createElement('span')
    lblLight.className = 'preview-label'
    lblLight.textContent = `x${SCALE_PREVIEW} Fondo Claro`
    const wrapLight = document.createElement('div')
    wrapLight.className = 'canvas-wrap light'
    const { canvas: cLight, ctx: ctxLight } = createPixelCanvas(w * SCALE_PREVIEW, h * SCALE_PREVIEW)
    wrapLight.appendChild(cLight)
    colLight.appendChild(lblLight)
    colLight.appendChild(wrapLight)

    // 2. Zoom x8 sobre fondo oscuro
    const colDark = document.createElement('div')
    colDark.className = 'preview-col'
    const lblDark = document.createElement('span')
    lblDark.className = 'preview-label'
    lblDark.textContent = `x${SCALE_PREVIEW} Fondo Oscuro`
    const wrapDark = document.createElement('div')
    wrapDark.className = 'canvas-wrap dark'
    const { canvas: cDark, ctx: ctxDark } = createPixelCanvas(w * SCALE_PREVIEW, h * SCALE_PREVIEW)
    wrapDark.appendChild(cDark)
    colDark.appendChild(lblDark)
    colDark.appendChild(wrapDark)

    // 3. Tamaño real en contenedor de 360px
    const colReal = document.createElement('div')
    colReal.className = 'preview-col'
    const lblReal = document.createElement('span')
    lblReal.className = 'preview-label'
    lblReal.textContent = `Tamaño real (escala x${SCALE_ACTUAL}) en marco 360px`
    const realBox = document.createElement('div')
    realBox.className = 'real-size-box'
    const { canvas: cReal, ctx: ctxReal } = createPixelCanvas(w * SCALE_ACTUAL, h * SCALE_ACTUAL)
    realBox.appendChild(cReal)
    colReal.appendChild(lblReal)
    colReal.appendChild(realBox)

    previews.appendChild(colLight)
    previews.appendChild(colDark)
    previews.appendChild(colReal)
    card.appendChild(previews)
    lab.appendChild(card)

    const drawAll = () => {
      // Fondo claro
      ctxLight.fillStyle = palette.celesteAgua
      ctxLight.fillRect(0, 0, w * SCALE_PREVIEW, h * SCALE_PREVIEW)
      drawSprite(ctxLight, inst, 0, 0, SCALE_PREVIEW)

      // Fondo oscuro
      ctxDark.fillStyle = palette.aguaProfunda
      ctxDark.fillRect(0, 0, w * SCALE_PREVIEW, h * SCALE_PREVIEW)
      drawSprite(ctxDark, inst, 0, 0, SCALE_PREVIEW)

      // Tamaño real
      ctxReal.clearRect(0, 0, w * SCALE_ACTUAL, h * SCALE_ACTUAL)
      drawSprite(ctxReal, inst, 0, 0, SCALE_ACTUAL)
    }

    renderFns.push(drawAll)
    drawAll()
  })

  const animator = new SpriteAnimator(() => {
    for (const render of renderFns) {
      render()
    }
  })

  for (const inst of instances) {
    animator.add(inst)
  }
  animator.start()

  container.appendChild(lab)

  backBtn.addEventListener('click', () => {
    backBtn.dispatchEvent(new CustomEvent('navigate-home', { bubbles: true }))
  })

  return () => {
    animator.stop()
    style.remove()
  }
}
