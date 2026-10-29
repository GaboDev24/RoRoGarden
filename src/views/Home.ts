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
 * Diseñada según los principios Hallmark (modo custom):
 * - Fondo celeste/menta
 * - Sapo animado sobre nenúfar
 * - Botón táctil grande de al menos 48px
 * - Contraste WCAG AA
 * - prefers-reduced-motion respetado
 */
export function renderHome(container: HTMLElement): () => void {
  container.innerHTML = ''

  // ── Fondo gradiente suave ──
  const section = document.createElement('section')
  section.className = 'home-screen'
  section.setAttribute('role', 'main')
  section.setAttribute('aria-label', 'Pantalla de inicio de RoRoGarden')

  // Inyectar estilos scoped
  const style = document.createElement('style')
  style.textContent = `
    .home-screen {
      flex: 1;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: space-between;
      padding: var(--space-xl) var(--space-md) var(--space-lg);
      min-height: 100dvh;
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
    }

    .home-subtitle {
      font-family: var(--font-ui);
      font-size: var(--font-size-md);
      color: var(--color-agua-profunda);
      text-align: center;
      max-width: 240px;
      line-height: 1.5;
    }

    .home-scene {
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: var(--space-sm);
      flex: 1;
      justify-content: center;
    }

    .home-scene canvas {
      display: block;
    }

    .home-footer {
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: var(--space-md);
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

    .btn-enter:hover {
      opacity: 0.88;
    }

    .btn-enter:active {
      transform: scale(0.96);
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

  // Tamaño de la escena: lilypad 20x12, frog 20x18 — apilados
  const SCALE = 5
  const SCENE_W = 20
  const SCENE_H = 12 + 18 + 2 // nenúfar + sapo + espacio
  const { canvas, ctx } = createPixelCanvas(SCENE_W * SCALE, SCENE_H * SCALE)

  const instFrog = createSpriteInstance(frogIdle)
  const instPad = createSpriteInstance(lilypad)

  // Animador
  const animator = new SpriteAnimator(() => {
    ctx.clearRect(0, 0, SCENE_W * SCALE, SCENE_H * SCALE)
    // Fondo transparente — lo da el gradiente del section
    // Nenúfar: parte baja de la escena
    drawSprite(ctx, instPad, 0, (SCENE_H - 12) * SCALE, SCALE)
    // Sapo: encima del nenúfar, centrado
    drawSprite(ctx, instFrog, 0, (SCENE_H - 12 - 18 + 2) * SCALE, SCALE)
  })

  animator.add(instFrog)
  animator.add(instPad)
  animator.start()

  scene.appendChild(canvas)

  // ── Footer con botón ──
  const footer = document.createElement('footer')
  footer.className = 'home-footer'

  const btn = document.createElement('button')
  btn.className = 'btn-enter'
  btn.textContent = 'Entrar al jardín'
  btn.setAttribute('aria-label', 'Entrar al jardín — próximamente')
  btn.addEventListener('click', () => {
    // Por ahora no hace nada (etapa 1)
    btn.textContent = '🐸 Ya viene...'
    setTimeout(() => { btn.textContent = 'Entrar al jardín' }, 1500)
  })

  const note = document.createElement('p')
  note.className = 'home-note'
  note.textContent = '💚 Solo vos, sin presiones'

  footer.appendChild(btn)
  footer.appendChild(note)

  // ── Ensamblar ──
  section.appendChild(header)
  section.appendChild(scene)
  section.appendChild(footer)
  container.appendChild(section)

  // Ignorar inline bg: lo maneja el gradiente CSS
  // Dibujar primer frame de inmediato (accesibilidad: contenido sin JS no aplica a canvas)
  ctx.clearRect(0, 0, SCENE_W * SCALE, SCENE_H * SCALE)
  drawSprite(ctx, instPad, 0, (SCENE_H - 12) * SCALE, SCALE)
  drawSprite(ctx, instFrog, 0, (SCENE_H - 12 - 18 + 2) * SCALE, SCALE)

  // Devolver cleanup
  return () => {
    animator.stop()
    style.remove()
  }
}

// Suprimir advertencia de import no usado
void palette

