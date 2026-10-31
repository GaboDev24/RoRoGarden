6/**
 * views/Desafio.ts — Pantalla de ejecución de un micro-desafío (#/desafio/:id).
 *
 * Muestra pasos de a uno con texto grande, sapo animado correspondiente a la categoría,
 * temporizador continuo basado en timestamps (resiliente a pantalla bloqueada/backgrounding),
 * Screen Wake Lock API para mantener pantalla activa y guardado silencioso al terminar.
 */

import { copy } from '../copy'
import { CHALLENGES } from '../challenges'
import {
  createPixelCanvas,
  drawSprite,
  createSpriteInstance,
  SpriteAnimator,
} from '../sprites/renderer'
import {
  frogStretching,
  frogEars,
  frogBreathing,
  frogTranquila,
} from '../sprites/definitions'
import { savePauseEntry } from '../storage'
import { notifyPhaseChange } from '../audio'
import { createFaIcon } from '../icons'

export function renderDesafio(container: HTMLElement, challengeId: string): () => void {
  const challenge = CHALLENGES.find((c) => c.id === challengeId) ?? CHALLENGES[0]

  const section = document.createElement('section')
  section.className = 'desafio-view screen-fade-in'
  section.setAttribute('aria-label', challenge.title)

  const style = document.createElement('style')
  style.textContent = `
    .desafio-view {
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: var(--space-md);
      padding: var(--space-md);
      max-width: 440px;
      margin: 0 auto;
      width: 100%;
      min-height: calc(100vh - 40px);
      justify-content: space-between;
    }

    .desafio-top-bar {
      display: flex;
      align-items: center;
      justify-content: space-between;
      width: 100%;
    }

    .desafio-quit-btn {
      font-family: var(--font-ui);
      font-size: var(--font-size-sm);
      color: var(--color-musgo);
      background: none;
      border: none;
      cursor: pointer;
      padding: var(--space-xs) var(--space-sm);
      min-height: var(--touch-target-min);
    }

    .desafio-quit-btn:focus-visible {
      outline: 2px solid var(--color-acento);
      outline-offset: 2px;
    }

    .desafio-step-badge {
      font-family: var(--font-ui);
      font-size: var(--font-size-xs);
      font-weight: 700;
      color: var(--color-bosque);
      background-color: var(--color-salvia);
      padding: 4px 12px;
      border-radius: var(--border-radius-full);
    }

    /* Barra de progreso suave continua (sin cuenta regresiva agresiva) */
    .desafio-progress-track {
      width: 100%;
      height: 8px;
      background-color: var(--color-salvia);
      border-radius: var(--border-radius-full);
      overflow: hidden;
      border: 1px solid var(--color-musgo);
    }

    .desafio-progress-fill {
      height: 100%;
      width: 0%;
      background-color: var(--color-bosque);
      border-radius: var(--border-radius-full);
      transition: width 0.2s linear;
    }

    /* Contenido central */
    .desafio-content {
      display: flex;
      flex-direction: column;
      align-items: center;
      text-align: center;
      gap: var(--space-md);
      width: 100%;
    }

    .desafio-title {
      font-family: var(--font-pixel);
      font-size: 0.875rem;
      color: var(--color-bosque);
      margin: 0;
      line-height: 1.5;
    }

    .desafio-canvas-wrap {
      display: flex;
      align-items: center;
      justify-content: center;
      margin: var(--space-xs) 0;
    }

    .desafio-step-card {
      background-color: var(--color-crema);
      border: 2px solid var(--color-tinta);
      border-radius: var(--border-radius-md);
      padding: var(--space-lg) var(--space-md);
      width: 100%;
      box-shadow: 2px 2px 0 var(--color-tinta);
    }

    .desafio-step-text {
      font-family: var(--font-ui);
      font-size: var(--font-size-lg);
      font-weight: 600;
      color: var(--color-tinta);
      margin: 0;
      line-height: 1.5;
    }

    .desafio-note {
      font-family: var(--font-ui);
      font-size: var(--font-size-xs);
      color: var(--color-musgo);
      margin: var(--space-xs) 0 0;
      line-height: 1.4;
      font-style: italic;
    }

    /* Botones de acción */
    .desafio-actions {
      display: flex;
      flex-direction: column;
      gap: var(--space-sm);
      width: 100%;
    }

    .btn-step-next {
      font-family: var(--font-ui);
      font-size: var(--font-size-md);
      font-weight: 700;
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
      gap: var(--space-xs);
      transition: transform var(--transition-fast), opacity var(--transition-fast);
    }

    .btn-step-next:hover {
      opacity: 0.92;
      transform: translateY(-1px);
    }

    .btn-step-next:focus-visible {
      outline: 2px solid var(--color-acento);
      outline-offset: 2px;
    }

    .desafio-sub-actions {
      display: flex;
      gap: var(--space-sm);
      width: 100%;
    }

    .btn-pause-toggle {
      flex: 1;
      font-family: var(--font-ui);
      font-size: var(--font-size-sm);
      font-weight: 600;
      color: var(--color-bosque);
      background-color: var(--color-menta);
      border: 1.5px solid var(--color-musgo);
      border-radius: var(--border-radius-md);
      padding: var(--space-xs) var(--space-sm);
      min-height: var(--touch-target-min);
      cursor: pointer;
      display: flex;
      align-items: center;
      justify-content: center;
      gap: var(--space-xs);
    }

    .btn-pause-toggle:focus-visible {
      outline: 2px solid var(--color-acento);
      outline-offset: 2px;
    }

    /* Modal o estado de fin */
    .desafio-finish-state {
      background-color: var(--color-crema);
      border: 2px solid var(--color-tinta);
      border-radius: var(--border-radius-md);
      padding: var(--space-lg) var(--space-md);
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: var(--space-md);
      text-align: center;
      width: 100%;
      box-shadow: 2px 2px 0 var(--color-tinta);
    }

    .desafio-finish-title {
      font-family: var(--font-pixel);
      font-size: 0.875rem;
      color: var(--color-bosque);
      margin: 0;
    }

    .desafio-finish-text {
      font-family: var(--font-ui);
      font-size: var(--font-size-md);
      color: var(--color-tinta);
      margin: 0;
      line-height: 1.5;
    }
  `
  document.head.appendChild(style)

  // ── Wake Lock API ──
  let wakeLockSentinel: any = null
  const requestWakeLock = async () => {
    try {
      if ('wakeLock' in navigator && typeof (navigator as any).wakeLock?.request === 'function') {
        wakeLockSentinel = await (navigator as any).wakeLock.request('screen')
      }
    } catch {
      // Silencioso
    }
  }
  const releaseWakeLock = () => {
    try {
      if (wakeLockSentinel && typeof wakeLockSentinel.release === 'function') {
        wakeLockSentinel.release()
        wakeLockSentinel = null
      }
    } catch {
      // Silencioso
    }
  }
  requestWakeLock()

  // ── Top Bar ──
  const topBar = document.createElement('div')
  topBar.className = 'desafio-top-bar'

  const stepBadge = document.createElement('span')
  stepBadge.className = 'desafio-step-badge'

  const quitBtn = document.createElement('button')
  quitBtn.className = 'desafio-quit-btn'
  quitBtn.textContent = copy.desafio.quitBtn
  quitBtn.setAttribute('aria-label', 'Terminar el desafío antes')

  topBar.appendChild(stepBadge)
  topBar.appendChild(quitBtn)

  // ── Progress Bar ──
  const progressTrack = document.createElement('div')
  progressTrack.className = 'desafio-progress-track'
  progressTrack.setAttribute('role', 'progressbar')
  progressTrack.setAttribute('aria-valuemin', '0')
  progressTrack.setAttribute('aria-valuemax', '100')
  progressTrack.setAttribute('aria-valuenow', '0')

  const progressFill = document.createElement('div')
  progressFill.className = 'desafio-progress-fill'
  progressTrack.appendChild(progressFill)

  // ── Canvas de Sapo según categoría ──
  const canvasWrap = document.createElement('div')
  canvasWrap.className = 'desafio-canvas-wrap'
  canvasWrap.setAttribute('aria-hidden', 'true')

  const spriteDef =
    challenge.category === 'cuerpo'
      ? frogStretching
      : challenge.category === 'silencio'
      ? frogEars
      : challenge.category === 'respiracion'
      ? frogBreathing
      : frogTranquila

  const SCALE = 4
  const { canvas, ctx } = createPixelCanvas(32 * SCALE, 32 * SCALE)
  const instFrog = createSpriteInstance(spriteDef)
  const animator = new SpriteAnimator(() => {
    ctx.clearRect(0, 0, 32 * SCALE, 32 * SCALE)
    drawSprite(ctx, instFrog, 0, 0, SCALE)
  })
  animator.add(instFrog)
  animator.start()
  drawSprite(ctx, instFrog, 0, 0, SCALE)
  canvasWrap.appendChild(canvas)

  // ── Contenido central ──
  const content = document.createElement('div')
  content.className = 'desafio-content'

  const title = document.createElement('h1')
  title.className = 'desafio-title'
  title.textContent = challenge.title

  const stepCard = document.createElement('div')
  stepCard.className = 'desafio-step-card'
  stepCard.setAttribute('aria-live', 'polite')

  const stepText = document.createElement('p')
  stepText.className = 'desafio-step-text'
  stepCard.appendChild(stepText)

  let noteEl: HTMLElement | null = null
  if (challenge.note) {
    noteEl = document.createElement('p')
    noteEl.className = 'desafio-note'
    noteEl.textContent = challenge.note
    stepCard.appendChild(noteEl)
  }

  content.appendChild(title)
  content.appendChild(canvasWrap)
  content.appendChild(stepCard)

  // ── Acciones inferiores ──
  const actions = document.createElement('div')
  actions.className = 'desafio-actions'

  const nextBtn = document.createElement('button')
  nextBtn.className = 'btn-step-next'
  nextBtn.textContent = copy.desafio.nextBtn

  const subActions = document.createElement('div')
  subActions.className = 'desafio-sub-actions'

  const pauseBtn = document.createElement('button')
  pauseBtn.className = 'btn-pause-toggle'
  const pauseIcon = createFaIcon('pause', { size: 10 })
  pauseBtn.appendChild(pauseIcon)
  const pauseTextNode = document.createTextNode(` ${copy.desafio.pauseBtn}`)
  pauseBtn.appendChild(pauseTextNode)

  subActions.appendChild(pauseBtn)
  actions.appendChild(nextBtn)
  actions.appendChild(subActions)

  // ── Estado de ejecución ──
  let currentStep = 0
  const totalSteps = challenge.steps.length
  let isPaused = false
  let isFinished = false

  const startTime = Date.now()
  let pausedAccumulated = 0
  let pauseStartTime = 0

  function updateStepUI() {
    stepBadge.textContent = `${copy.desafio.stepLabel} ${currentStep + 1} ${copy.desafio.stepOf} ${totalSteps}`
    stepText.textContent = challenge.steps[currentStep]
    if (currentStep === totalSteps - 1) {
      nextBtn.textContent = copy.desafio.finishBtn
    } else {
      nextBtn.textContent = copy.desafio.nextBtn
    }
  }

  updateStepUI()

  // Loop de progreso suave
  let animFrameId: number | null = null

  function tick() {
    if (!isPaused && !isFinished) {
      const elapsedMs = Date.now() - startTime - pausedAccumulated
      const progress = Math.min(1, elapsedMs / (challenge.durationSeconds * 1000))
      const pct = Math.floor(progress * 100)
      progressFill.style.width = `${pct}%`
      progressTrack.setAttribute('aria-valuenow', pct.toString())
    }
    animFrameId = requestAnimationFrame(tick)
  }

  animFrameId = requestAnimationFrame(tick)

  // ── Eventos ──
  pauseBtn.addEventListener('click', () => {
    isPaused = !isPaused
    pauseBtn.innerHTML = ''
    if (isPaused) {
      pauseStartTime = Date.now()
      pauseBtn.appendChild(createFaIcon('play', { size: 10 }))
      pauseBtn.appendChild(document.createTextNode(` ${copy.desafio.resumeBtn}`))
    } else {
      pausedAccumulated += Date.now() - pauseStartTime
      pauseBtn.appendChild(createFaIcon('pause', { size: 10 }))
      pauseBtn.appendChild(document.createTextNode(` ${copy.desafio.pauseBtn}`))
    }
  })

  function showFinishScreen(completed: boolean, message: string) {
    isFinished = true
    releaseWakeLock()
    if (animFrameId) cancelAnimationFrame(animFrameId)
    notifyPhaseChange()

    // Guardado silencioso de la pausa
    const elapsedActual = Math.round((Date.now() - startTime - pausedAccumulated) / 1000)
    savePauseEntry('desafio', {
      challengeId: challenge.id,
      title: challenge.title,
      category: challenge.category,
      durationSeconds: elapsedActual,
      completed,
    })

    section.innerHTML = ''
    const finishState = document.createElement('div')
    finishState.className = 'desafio-finish-state'

    const finishTitle = document.createElement('h2')
    finishTitle.className = 'desafio-finish-title'
    finishTitle.textContent = copy.desafio.doneTitle

    const finishText = document.createElement('p')
    finishText.className = 'desafio-finish-text'
    finishText.textContent = message

    const backBtn = document.createElement('button')
    backBtn.className = 'btn-step-next'
    backBtn.textContent = copy.desafio.backToGarden
    backBtn.addEventListener('click', () => {
      window.location.hash = '#/jardin'
    })

    finishState.appendChild(canvasWrap)
    finishState.appendChild(finishTitle)
    finishState.appendChild(finishText)
    finishState.appendChild(backBtn)
    section.appendChild(finishState)
    backBtn.focus()
  }

  nextBtn.addEventListener('click', () => {
    if (currentStep < totalSteps - 1) {
      currentStep += 1
      updateStepUI()
      notifyPhaseChange()
    } else {
      showFinishScreen(true, copy.desafio.doneMessage)
    }
  })

  quitBtn.addEventListener('click', () => {
    showFinishScreen(false, copy.desafio.quitWarmth)
  })

  // ── Ensamblado inicial ──
  section.appendChild(topBar)
  section.appendChild(progressTrack)
  section.appendChild(content)
  section.appendChild(actions)
  container.appendChild(section)

  return () => {
    releaseWakeLock()
    if (animFrameId) cancelAnimationFrame(animFrameId)
    animator.stop()
    style.remove()
  }
}
