import { copy } from '../copy'
import { createFaIcon } from '../icons'
import { frogIdle, lilypad } from '../sprites/definitions'
import {
  createSpriteInstance,
  createPixelCanvas,
  drawSprite,
  SpriteAnimator,
} from '../sprites/renderer'

/**
 * Vista #/jardin — El escenario principal de RoRoGarden.
 * El sapo en su estanque y los tres botones principales de bienestar.
 */
export function renderJardin(container: HTMLElement): () => void {
  container.innerHTML = ''

  const section = document.createElement('section')
  section.className = 'jardin-screen'
  section.setAttribute('role', 'main')
  section.setAttribute('aria-label', copy.jardin.title)

  const style = document.createElement('style')
  style.textContent = `
    .jardin-screen {
      flex: 1;
      width: 100%;
      height: 100%;
      box-sizing: border-box;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: space-between;
      padding: var(--space-md) var(--space-md) var(--space-lg);
      background: linear-gradient(
        180deg,
        var(--color-celeste-agua) 0%,
        var(--color-menta) 60%,
        var(--color-salvia) 100%
      );
      overflow-y: auto;
    }

    .jardin-nav {
      width: 100%;
      display: flex;
      align-items: center;
      justify-content: space-between;
      gap: var(--space-sm);
    }

    .nav-btn {
      font-family: var(--font-pixel);
      font-size: 0.625rem;
      color: var(--color-tinta);
      background-color: var(--color-menta);
      border: 2px solid var(--color-bosque);
      border-radius: var(--border-radius-sm);
      padding: var(--space-xs) var(--space-sm);
      min-height: var(--touch-target-min);
      min-width: var(--touch-target-min);
      cursor: pointer;
      line-height: 1.6;
      transition: transform var(--transition-fast), opacity var(--transition-fast);
      display: inline-flex;
      align-items: center;
      justify-content: center;
    }

    .nav-btn:hover {
      opacity: 0.9;
      transform: translateY(-1px);
    }

    .nav-btn:focus-visible {
      outline: 3px solid var(--color-acento);
      outline-offset: 3px;
    }

    .jardin-header {
      text-align: center;
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: var(--space-xs);
      margin-top: var(--space-xs);
    }

    .jardin-title {
      font-family: var(--font-pixel);
      font-size: 0.75rem;
      color: var(--color-bosque);
      line-height: 1.8;
      margin: 0;
    }

    .jardin-subtitle {
      font-family: var(--font-ui);
      font-size: var(--font-size-sm);
      color: var(--color-agua-profunda);
      text-align: center;
      max-width: 260px;
      margin: 0;
      line-height: 1.4;
    }

    .jardin-pond {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      margin: var(--space-sm) 0;
    }

    .jardin-actions {
      width: 100%;
      display: flex;
      flex-direction: column;
      gap: var(--space-sm);
    }

    .action-btn {
      font-family: var(--font-ui);
      font-size: var(--font-size-md);
      font-weight: 600;
      color: var(--color-crema);
      background-color: var(--color-bosque);
      border: 2px solid var(--color-tinta);
      border-radius: var(--border-radius-md);
      padding: var(--space-sm) var(--space-md);
      min-height: var(--touch-target-min);
      cursor: pointer;
      display: flex;
      align-items: center;
      justify-content: center;
      gap: var(--space-sm);
      text-align: center;
      transition: transform var(--transition-fast), opacity var(--transition-fast);
    }

    .action-btn.secondary {
      background-color: var(--color-musgo);
    }

    .action-btn.tertiary {
      background-color: var(--color-salvia);
      color: var(--color-tinta);
      border-color: var(--color-bosque);
    }

    @media (hover: hover) {
      .action-btn:hover {
        opacity: 0.92;
        transform: translateY(-2px);
      }
    }

    .action-btn:active {
      transform: translateY(1px) scale(0.98);
    }

    .action-btn:focus-visible {
      outline: 3px solid var(--color-acento);
      outline-offset: 4px;
    }
  `
  document.head.appendChild(style)

  // ── Navegación superior ──
  const nav = document.createElement('nav')
  nav.className = 'jardin-nav'
  nav.setAttribute('aria-label', 'Navegación del jardín')

  const backBtn = document.createElement('button')
  backBtn.className = 'nav-btn'
  backBtn.textContent = copy.app.back
  backBtn.setAttribute('aria-label', 'Volver a la portada de bienvenida')
  backBtn.addEventListener('click', () => {
    window.location.hash = '#/'
  })

  const settingsBtn = document.createElement('button')
  settingsBtn.className = 'nav-btn'
  const gearIcon = createFaIcon('gear', { size: 12 })
  gearIcon.style.marginRight = 'var(--space-xs)'
  settingsBtn.appendChild(gearIcon)
  settingsBtn.appendChild(document.createTextNode(copy.jardin.ajustesBtn))
  settingsBtn.setAttribute('aria-label', 'Ir a ajustes y respaldo')
  settingsBtn.addEventListener('click', () => {
    window.location.hash = '#/ajustes'
  })

  nav.appendChild(backBtn)
  nav.appendChild(settingsBtn)

  // ── Header ──
  const header = document.createElement('header')
  header.className = 'jardin-header'

  const title = document.createElement('h1')
  title.className = 'jardin-title'
  title.textContent = copy.jardin.title

  const subtitle = document.createElement('p')
  subtitle.className = 'jardin-subtitle'
  subtitle.textContent = copy.jardin.subtitle

  header.appendChild(title)
  header.appendChild(subtitle)

  // ── Escena de estanque con sapo ──
  const pond = document.createElement('div')
  pond.className = 'jardin-pond'
  pond.setAttribute('aria-hidden', 'true')

  const SCALE = 5
  const SCENE_W = 28
  const SCENE_H = 24
  const { canvas, ctx } = createPixelCanvas(SCENE_W * SCALE, SCENE_H * SCALE)

  const instFrog = createSpriteInstance(frogIdle)
  const instPad = createSpriteInstance(lilypad)

  const PAD_X = 0
  const PAD_Y = 11
  const FROG_X = 4
  const FROG_Y = 2

  const animator = new SpriteAnimator(() => {
    ctx.clearRect(0, 0, SCENE_W * SCALE, SCENE_H * SCALE)
    drawSprite(ctx, instPad, PAD_X * SCALE, PAD_Y * SCALE, SCALE)
    drawSprite(ctx, instFrog, FROG_X * SCALE, FROG_Y * SCALE, SCALE)
  })

  animator.add(instFrog)
  animator.add(instPad)
  animator.start()

  pond.appendChild(canvas)

  // ── Botones de acción principales ──
  const actions = document.createElement('div')
  actions.className = 'jardin-actions'

  const pausaBtn = document.createElement('button')
  pausaBtn.className = 'action-btn'
  const spaIcon = createFaIcon('spa', { size: 18 })
  pausaBtn.appendChild(spaIcon)
  pausaBtn.appendChild(document.createTextNode(copy.jardin.pausaBtn))
  pausaBtn.addEventListener('click', () => {
    window.location.hash = '#/pausa'
  })

  const checkinBtn = document.createElement('button')
  checkinBtn.className = 'action-btn secondary'
  const frogIcon = createFaIcon('frog', { size: 18 })
  checkinBtn.appendChild(frogIcon)
  checkinBtn.appendChild(document.createTextNode(copy.jardin.checkinBtn))
  checkinBtn.addEventListener('click', () => {
    window.location.hash = '#/checkin'
  })

  const diarioBtn = document.createElement('button')
  diarioBtn.className = 'action-btn secondary'
  const moonIcon = createFaIcon('moon', { size: 18 })
  diarioBtn.appendChild(moonIcon)
  diarioBtn.appendChild(document.createTextNode(copy.jardin.diarioBtn))
  diarioBtn.addEventListener('click', () => {
    window.location.hash = '#/diario'
  })

  const historialBtn = document.createElement('button')
  historialBtn.className = 'action-btn tertiary'
  const bookIcon = createFaIcon('bookOpen', { size: 18 })
  historialBtn.appendChild(bookIcon)
  historialBtn.appendChild(document.createTextNode(copy.jardin.historialBtn))
  historialBtn.addEventListener('click', () => {
    window.location.hash = '#/historial'
  })

  actions.appendChild(pausaBtn)
  actions.appendChild(checkinBtn)
  actions.appendChild(diarioBtn)
  actions.appendChild(historialBtn)

  // Ensamblar
  section.appendChild(nav)
  section.appendChild(header)
  section.appendChild(pond)
  section.appendChild(actions)
  container.appendChild(section)

  // Primer dibujo inmediato
  ctx.clearRect(0, 0, SCENE_W * SCALE, SCENE_H * SCALE)
  drawSprite(ctx, instPad, PAD_X * SCALE, PAD_Y * SCALE, SCALE)
  drawSprite(ctx, instFrog, FROG_X * SCALE, FROG_Y * SCALE, SCALE)

  // Foco inicial accesible
  checkinBtn.focus()

  return () => {
    animator.stop()
    style.remove()
  }
}

