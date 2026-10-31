import { palette } from '../palette/colors'
import {
  frogIdle,
  lilypad,
} from '../sprites/definitions'
import {
  createSpriteInstance,
  createPixelCanvas,
  drawSprite,
  SpriteAnimator,
} from '../sprites/renderer'

/**
 * Pantalla de inicio de RoRoGarden.
 * Diseñada según los principios Hallmark (modo custom) y mobile-first con adaptación para PC:
 * - Marco contenedor centrado y armónico en PC; inmersivo y fullscreen en celular.
 * - Sapo animado sobre nenúfar con renderizado pixel-perfect.
 * - Botón accesible táctil y de teclado (Enter / Espacio).
 * - Contraste WCAG AA y respeto estricto de prefers-reduced-motion.
 */
export function renderHome(container: HTMLElement): () => void {
  container.innerHTML = ''

  const section = document.createElement('section')
  section.className = 'home-screen'
  section.setAttribute('role', 'main')
  section.setAttribute('aria-label', 'Pantalla de inicio de RoRoGarden')

  const style = document.createElement('style')
  style.textContent = `
    .home-screen {
      flex: 1;
      width: 100%;
      height: 100%;
      box-sizing: border-box;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: space-between;
      padding: var(--space-xl) var(--space-md) var(--space-lg);
      background: linear-gradient(
        180deg,
        var(--color-celeste-agua) 0%,
        var(--color-menta) 60%,
        var(--color-salvia) 100%
      );
    }

    .home-header {
      text-align: center;
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: var(--space-sm);
    }

    .home-title {
      font-family: var(--font-pixel);
      font-size: 0.75rem;
      color: var(--color-bosque);
      letter-spacing: 0.05em;
      line-height: 2;
      margin: 0;
    }

    .home-subtitle {
      font-family: var(--font-ui);
      font-size: var(--font-size-md);
      color: var(--color-agua-profunda);
      text-align: center;
      max-width: 260px;
      line-height: 1.5;
      margin: 0;
    }

    .home-scene {
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: var(--space-sm);
      flex: 1;
      justify-content: center;
      margin: var(--space-sm) 0;
    }

    .home-scene canvas {
      display: block;
    }

    .home-footer {
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: var(--space-sm);
      width: 100%;
    }

    .btn-enter {
      font-family: var(--font-pixel);
      font-size: 0.625rem;
      color: var(--color-crema);
      background-color: var(--color-bosque);
      border: 3px solid var(--color-tinta);
      border-radius: var(--border-radius-md);
      padding: var(--space-md) var(--space-xl);
      min-height: var(--touch-target-min);
      min-width: 200px;
      cursor: pointer;
      line-height: 1.8;
      transition: transform var(--transition-fast), opacity var(--transition-fast);
      letter-spacing: 0.03em;
      text-align: center;
    }

    @media (hover: hover) {
      .btn-enter:hover {
        opacity: 0.92;
        transform: translateY(-2px);
      }
    }

    .btn-enter:active {
      transform: translateY(1px) scale(0.98);
    }

    .btn-enter:focus-visible {
      outline: 3px solid var(--color-acento);
      outline-offset: 4px;
    }

    .home-note {
      font-family: var(--font-ui);
      font-size: var(--font-size-xs);
      color: var(--color-musgo);
      text-align: center;
      margin: 0;
    }

    .desktop-hint {
      display: none;
      font-family: var(--font-ui);
      font-size: var(--font-size-xs);
      color: var(--color-bosque);
      text-align: center;
      margin: 0;
      opacity: 0.85;
    }

    @media (min-width: 601px) {
      .desktop-hint {
        display: block;
      }
    }
  `
  document.head.appendChild(style)

  // ── Header ──
  const header = document.createElement('header')
  header.className = 'home-header'

  const title = document.createElement('h1')
  title.className = 'home-title'
  title.textContent = 'RoRoGarden'

  const subtitle = document.createElement('p')
  subtitle.className = 'home-subtitle'
  subtitle.textContent = 'Tu rincón para aflojar un ratito'

  header.appendChild(title)
  header.appendChild(subtitle)

  // ── Escena con el sapo sobre el nenúfar ──
  const scene = document.createElement('div')
  scene.className = 'home-scene'
  scene.setAttribute('aria-hidden', 'true') // decorativo

  const SCALE = 5
  const SCENE_W = 20
  const SCENE_H = 12 + 18 + 2 // nenúfar + sapo + espacio
  const { canvas, ctx } = createPixelCanvas(SCENE_W * SCALE, SCENE_H * SCALE)

  const instFrog = createSpriteInstance(frogIdle)
  const instPad = createSpriteInstance(lilypad)

  const animator = new SpriteAnimator(() => {
    ctx.clearRect(0, 0, SCENE_W * SCALE, SCENE_H * SCALE)
    drawSprite(ctx, instPad, 0, (SCENE_H - 12) * SCALE, SCALE)
    drawSprite(ctx, instFrog, 0, (SCENE_H - 12 - 18 + 2) * SCALE, SCALE)
  })

  animator.add(instFrog)
  animator.add(instPad)
  animator.start()

  scene.appendChild(canvas)

  // ── Footer con botón y atajos PC ──
  const footer = document.createElement('footer')
  footer.className = 'home-footer'

  const btn = document.createElement('button')
  btn.className = 'btn-enter'
  btn.textContent = 'Entrar al jardín'
  btn.setAttribute('aria-label', 'Entrar al jardín — próximamente')
  btn.addEventListener('click', () => {
    btn.textContent = '🐸 Ya viene...'
    setTimeout(() => { btn.textContent = 'Entrar al jardín' }, 1500)
  })

  const note = document.createElement('p')
  note.className = 'home-note'
  note.textContent = '💚 Solo vos, sin presiones'

  const desktopHint = document.createElement('p')
  desktopHint.className = 'desktop-hint'
  desktopHint.textContent = 'Presioná Enter o Espacio para interactuar'

  footer.appendChild(btn)
  footer.appendChild(note)
  footer.appendChild(desktopHint)

  // ── Ensamblar ──
  section.appendChild(header)
  section.appendChild(scene)
  section.appendChild(footer)
  container.appendChild(section)

  // Dibujo inicial inmediato
  ctx.clearRect(0, 0, SCENE_W * SCALE, SCENE_H * SCALE)
  drawSprite(ctx, instPad, 0, (SCENE_H - 12) * SCALE, SCALE)
  drawSprite(ctx, instFrog, 0, (SCENE_H - 12 - 18 + 2) * SCALE, SCALE)

  // Soporte de teclado para PC (Enter o Espacio)
  const handleKeyDown = (e: KeyboardEvent) => {
    if ((e.key === 'Enter' || e.key === ' ') && document.activeElement !== btn) {
      e.preventDefault()
      btn.click()
    }
  }
  window.addEventListener('keydown', handleKeyDown)

  return () => {
    window.removeEventListener('keydown', handleKeyDown)
    animator.stop()
    style.remove()
  }
}

void palette
