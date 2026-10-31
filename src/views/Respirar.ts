/**
 * views/Respirar.ts — Pantalla de respiración guiada (#/respirar).
 *
 * Ofrece 3 patrones suaves (Suave, Cuadrada, Corta), 3 duraciones (1, 2, 3 min),
 * modo "Con mi sala", guía visual suave que respeta prefers-reduced-motion,
 * anuncios accesibles con aria-live y guardado silencioso al concluir.
 */

import { copy } from '../copy'
import {
  BREATHING_PATTERNS,
  calculateBreathingState,
  type BreathingPatternId,
} from '../breathing'
import {
  createPixelCanvas,
  drawSprite,
  createSpriteInstance,
} from '../sprites/renderer'
import { frogInhaling, frogExhaling, frogTranquila } from '../sprites/definitions'
import { savePauseEntry } from '../storage'
import { notifyPhaseChange } from '../audio'
import { createFaIcon } from '../icons'

export function renderRespirar(container: HTMLElement): () => void {
  const section = document.createElement('section')
  section.className = 'respirar-view screen-fade-in'
  section.setAttribute('aria-label', copy.respirar.title)

  const style = document.createElement('style')
  style.textContent = `
    .respirar-view {
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

    .respirar-nav {
      display: flex;
      align-items: center;
      justify-content: space-between;
      width: 100%;
    }

    .respirar-back-btn {
      font-family: var(--font-ui);
      font-size: var(--font-size-sm);
      color: var(--color-bosque);
      background: none;
      border: none;
      cursor: pointer;
      padding: var(--space-xs) var(--space-sm);
      min-height: var(--touch-target-min);
    }

    .respirar-back-btn:focus-visible {
      outline: 2px solid var(--color-acento);
      outline-offset: 2px;
    }

    /* Setup / Selector */
    .respirar-setup {
      display: flex;
      flex-direction: column;
      gap: var(--space-md);
      width: 100%;
      background-color: var(--color-crema);
      border: 2px solid var(--color-tinta);
      border-radius: var(--border-radius-md);
      padding: var(--space-md);
      box-shadow: 2px 2px 0 var(--color-tinta);
    }

    .setup-header {
      text-align: center;
    }

    .setup-title {
      font-family: var(--font-pixel);
      font-size: 0.875rem;
      color: var(--color-bosque);
      margin: 0;
      line-height: 1.5;
    }

    .setup-subtitle {
      font-family: var(--font-ui);
      font-size: var(--font-size-sm);
      color: var(--color-agua-profunda);
      margin: var(--space-xs) 0 0;
    }

    .setup-section-label {
      font-family: var(--font-ui);
      font-size: var(--font-size-sm);
      font-weight: 700;
      color: var(--color-tinta);
      margin: var(--space-xs) 0 4px;
    }

    .options-row {
      display: flex;
      gap: var(--space-xs);
      width: 100%;
    }

    .option-btn {
      flex: 1;
      font-family: var(--font-ui);
      font-size: var(--font-size-xs);
      font-weight: 600;
      color: var(--color-bosque);
      background-color: var(--color-menta);
      border: 1.5px solid var(--color-salvia);
      border-radius: var(--border-radius-md);
      padding: var(--space-xs) 4px;
      min-height: var(--touch-target-min);
      cursor: pointer;
      text-align: center;
      transition: background-color var(--transition-fast), color var(--transition-fast);
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      gap: 2px;
    }

    .option-btn.active {
      background-color: var(--color-bosque);
      color: var(--color-crema);
      border-color: var(--color-tinta);
    }

    .option-btn:focus-visible {
      outline: 2px solid var(--color-acento);
      outline-offset: 2px;
    }

    /* Switch modo sala */
    .sala-switch-row {
      display: flex;
      align-items: center;
      justify-content: space-between;
      gap: var(--space-sm);
      padding: var(--space-xs) 0;
      border-top: 1px solid var(--color-salvia);
      border-bottom: 1px solid var(--color-salvia);
    }

    .sala-label-wrap {
      display: flex;
      flex-direction: column;
    }

    .sala-label-title {
      font-family: var(--font-ui);
      font-size: var(--font-size-sm);
      font-weight: 700;
      color: var(--color-tinta);
    }

    .sala-label-desc {
      font-family: var(--font-ui);
      font-size: var(--font-size-xs);
      color: var(--color-musgo);
    }

    .sala-checkbox {
      width: 24px;
      height: 24px;
      cursor: pointer;
      accent-color: var(--color-bosque);
    }

    .respirar-warning {
      font-family: var(--font-ui);
      font-size: var(--font-size-xs);
      color: var(--color-musgo);
      font-style: italic;
      text-align: center;
      margin: 0;
    }

    .btn-start-breathing {
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
      width: 100%;
    }

    .btn-start-breathing:focus-visible {
      outline: 2px solid var(--color-acento);
      outline-offset: 2px;
    }

    /* Pantalla Activa de Respiración */
    .breathing-active-wrap {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: space-between;
      width: 100%;
      height: 100%;
      flex: 1;
      gap: var(--space-md);
    }

    .breathing-circle-container {
      position: relative;
      width: 220px;
      height: 220px;
      display: flex;
      align-items: center;
      justify-content: center;
      margin: auto 0;
    }

    .breathing-orb {
      position: absolute;
      width: 180px;
      height: 180px;
      border-radius: 50%;
      background: radial-gradient(circle, var(--color-menta) 0%, var(--color-celeste) 70%, var(--color-salvia) 100%);
      border: 3px solid var(--color-bosque);
      transform: scale(0.85);
      transition: transform 0.4s ease-out;
      display: flex;
      align-items: center;
      justify-content: center;
      box-shadow: 0 4px 12px rgba(43, 58, 66, 0.12);
    }

    /* Respeto a prefers-reduced-motion */
    @media (prefers-reduced-motion: reduce) {
      .breathing-orb {
        transform: scale(1) !important;
        transition: none !important;
      }
    }

    .breathing-phase-text {
      font-family: var(--font-ui);
      font-size: var(--font-size-xl);
      font-weight: 700;
      color: var(--color-bosque);
      text-align: center;
      margin: 0;
      line-height: 1.4;
      max-width: 300px;
      min-height: 3.5rem;
      display: flex;
      align-items: center;
      justify-content: center;
    }

    .breathing-phase-text.sala-mode {
      font-size: 1.5rem;
      color: var(--color-tinta);
    }

    .breathing-controls {
      display: flex;
      gap: var(--space-sm);
      width: 100%;
    }

    .btn-b-control {
      flex: 1;
      font-family: var(--font-ui);
      font-size: var(--font-size-sm);
      font-weight: 600;
      color: var(--color-crema);
      background-color: var(--color-bosque);
      border: 2px solid var(--color-tinta);
      border-radius: var(--border-radius-md);
      padding: var(--space-sm);
      min-height: var(--touch-target-min);
      cursor: pointer;
      display: flex;
      align-items: center;
      justify-content: center;
      gap: var(--space-xs);
    }

    .btn-b-control.secondary {
      background-color: var(--color-salvia);
      color: var(--color-tinta);
      border-color: var(--color-musgo);
    }

    .btn-b-control:focus-visible {
      outline: 2px solid var(--color-acento);
      outline-offset: 2px;
    }
  `
  document.head.appendChild(style)

  // ── Wake Lock ──
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

  // ── Navegación superior ──
  const nav = document.createElement('nav')
  nav.className = 'respirar-nav'

  const backBtn = document.createElement('button')
  backBtn.className = 'respirar-back-btn'
  backBtn.textContent = copy.app.back
  backBtn.setAttribute('aria-label', 'Volver a la selección de pausa')
  backBtn.addEventListener('click', () => {
    window.location.hash = '#/pausa'
  })
  nav.appendChild(backBtn)

  // ── Estado de configuración ──
  let selectedPatternId: BreathingPatternId = 'suave'
  let selectedDurationMinutes: number = 1
  let isSalaMode: boolean = false

  // ── Vista de Setup ──
  const setupCard = document.createElement('div')
  setupCard.className = 'respirar-setup'

  const header = document.createElement('header')
  header.className = 'setup-header'
  const title = document.createElement('h1')
  title.className = 'setup-title'
  title.textContent = copy.respirar.title
  const subtitle = document.createElement('p')
  subtitle.className = 'setup-subtitle'
  subtitle.textContent = copy.respirar.subtitle
  header.appendChild(title)
  header.appendChild(subtitle)

  // Selector de Patrones
  const patternLabel = document.createElement('p')
  patternLabel.className = 'setup-section-label'
  patternLabel.textContent = copy.respirar.patternLabel

  const patternRow = document.createElement('div')
  patternRow.className = 'options-row'
  patternRow.setAttribute('role', 'radiogroup')
  patternRow.setAttribute('aria-label', copy.respirar.patternLabel)

  const patternButtons: HTMLButtonElement[] = []
  ;(Object.keys(BREATHING_PATTERNS) as BreathingPatternId[]).forEach((pid) => {
    const pat = BREATHING_PATTERNS[pid]
    const btn = document.createElement('button')
    btn.className = `option-btn ${pid === selectedPatternId ? 'active' : ''}`
    btn.setAttribute('role', 'radio')
    btn.setAttribute('aria-checked', pid === selectedPatternId ? 'true' : 'false')
    btn.innerHTML = `<strong>${pat.name}</strong><span>${pat.subtitle}</span>`
    btn.addEventListener('click', () => {
      selectedPatternId = pid
      patternButtons.forEach((b) => {
        b.classList.remove('active')
        b.setAttribute('aria-checked', 'false')
      })
      btn.classList.add('active')
      btn.setAttribute('aria-checked', 'true')
    })
    patternButtons.push(btn)
    patternRow.appendChild(btn)
  })

  // Selector de Duración
  const durationLabel = document.createElement('p')
  durationLabel.className = 'setup-section-label'
  durationLabel.textContent = copy.respirar.durationLabel

  const durationRow = document.createElement('div')
  durationRow.className = 'options-row'
  durationRow.setAttribute('role', 'radiogroup')
  durationRow.setAttribute('aria-label', copy.respirar.durationLabel)

  const durationOptions = [
    { min: 1, label: copy.respirar.minute1 },
    { min: 2, label: copy.respirar.minute2 },
    { min: 3, label: copy.respirar.minute3 },
  ]

  const durationButtons: HTMLButtonElement[] = []
  durationOptions.forEach((opt) => {
    const btn = document.createElement('button')
    btn.className = `option-btn ${opt.min === selectedDurationMinutes ? 'active' : ''}`
    btn.setAttribute('role', 'radio')
    btn.setAttribute('aria-checked', opt.min === selectedDurationMinutes ? 'true' : 'false')
    btn.textContent = opt.label
    btn.addEventListener('click', () => {
      selectedDurationMinutes = opt.min
      durationButtons.forEach((b) => {
        b.classList.remove('active')
        b.setAttribute('aria-checked', 'false')
      })
      btn.classList.add('active')
      btn.setAttribute('aria-checked', 'true')
    })
    durationButtons.push(btn)
    durationRow.appendChild(btn)
  })

  // Modo Sala
  const salaRow = document.createElement('label')
  salaRow.className = 'sala-switch-row'

  const salaLabelWrap = document.createElement('div')
  salaLabelWrap.className = 'sala-label-wrap'
  const salaTitle = document.createElement('span')
  salaTitle.className = 'sala-label-title'
  salaTitle.textContent = copy.respirar.salaModeTitle
  const salaDesc = document.createElement('span')
  salaDesc.className = 'sala-label-desc'
  salaDesc.textContent = copy.respirar.salaModeDesc
  salaLabelWrap.appendChild(salaTitle)
  salaLabelWrap.appendChild(salaDesc)

  const salaCheckbox = document.createElement('input')
  salaCheckbox.type = 'checkbox'
  salaCheckbox.className = 'sala-checkbox'
  salaCheckbox.checked = isSalaMode
  salaCheckbox.addEventListener('change', () => {
    isSalaMode = salaCheckbox.checked
  })

  salaRow.appendChild(salaLabelWrap)
  salaRow.appendChild(salaCheckbox)

  // Advertencia suave
  const warningText = document.createElement('p')
  warningText.className = 'respirar-warning'
  warningText.textContent = copy.respirar.warning

  // Botón iniciar
  const startBtn = document.createElement('button')
  startBtn.className = 'btn-start-breathing'
  startBtn.appendChild(createFaIcon('play', { size: 12 }))
  startBtn.appendChild(document.createTextNode(` ${copy.respirar.startBtn}`))

  setupCard.appendChild(header)
  setupCard.appendChild(patternLabel)
  setupCard.appendChild(patternRow)
  setupCard.appendChild(durationLabel)
  setupCard.appendChild(durationRow)
  setupCard.appendChild(salaRow)
  setupCard.appendChild(warningText)
  setupCard.appendChild(startBtn)

  // ── Pantalla Activa ──
  let animFrameId: number | null = null

  function startBreathingSession() {
    requestWakeLock()
    section.innerHTML = ''

    const activeWrap = document.createElement('div')
    activeWrap.className = 'breathing-active-wrap'

    // Top bar en sesión
    const topBar = document.createElement('div')
    topBar.className = 'respirar-nav'
    const quitBtn = document.createElement('button')
    quitBtn.className = 'respirar-back-btn'
    quitBtn.textContent = copy.respirar.quitBtn
    topBar.appendChild(quitBtn)

    // Contenedor visual
    const orbContainer = document.createElement('div')
    orbContainer.className = 'breathing-circle-container'

    const orb = document.createElement('div')
    orb.className = 'breathing-orb'

    // Canvas central con sapito en pixel art
    const SCALE = 3
    const { canvas, ctx } = createPixelCanvas(32 * SCALE, 32 * SCALE)
    const instInhale = createSpriteInstance(frogInhaling)
    const instExhale = createSpriteInstance(frogExhaling)
    const instTranquila = createSpriteInstance(frogTranquila)
    orb.appendChild(canvas)
    orbContainer.appendChild(orb)

    // Texto de la fase (anunciado con aria-live)
    const phaseText = document.createElement('p')
    phaseText.className = `breathing-phase-text ${isSalaMode ? 'sala-mode' : ''}`
    phaseText.setAttribute('aria-live', 'polite')

    // Controles inferiores
    const controls = document.createElement('div')
    controls.className = 'breathing-controls'

    const pauseBtn = document.createElement('button')
    pauseBtn.className = 'btn-b-control secondary'
    pauseBtn.appendChild(createFaIcon('pause', { size: 10 }))
    pauseBtn.appendChild(document.createTextNode(` ${copy.respirar.pauseBtn}`))

    controls.appendChild(pauseBtn)

    activeWrap.appendChild(topBar)
    activeWrap.appendChild(phaseText)
    activeWrap.appendChild(orbContainer)
    activeWrap.appendChild(controls)
    section.appendChild(activeWrap)

    // Lógica temporal
    const pattern = BREATHING_PATTERNS[selectedPatternId]
    const totalDurationSeconds = selectedDurationMinutes * 60
    const sessionStartTime = Date.now()
    let pausedAccumulated = 0
    let pauseStartTime = 0
    let isPaused = false
    let lastPhaseType = ''

    function finishSession(completed: boolean, message: string) {
      if (animFrameId) cancelAnimationFrame(animFrameId)
      releaseWakeLock()
      notifyPhaseChange()

      const actualDuration = Math.round((Date.now() - sessionStartTime - pausedAccumulated) / 1000)
      savePauseEntry('respiracion', {
        pattern: pattern.id,
        durationSeconds: actualDuration,
        salaMode: isSalaMode,
        completed,
      })

      section.innerHTML = ''
      const doneCard = document.createElement('div')
      doneCard.className = 'respirar-setup'
      doneCard.style.textAlign = 'center'

      const doneTitle = document.createElement('h2')
      doneTitle.className = 'setup-title'
      doneTitle.textContent = copy.respirar.doneTitle

      const doneMsg = document.createElement('p')
      doneMsg.className = 'setup-subtitle'
      doneMsg.textContent = message

      const backGardenBtn = document.createElement('button')
      backGardenBtn.className = 'btn-start-breathing'
      backGardenBtn.textContent = copy.respirar.backToGarden
      backGardenBtn.addEventListener('click', () => {
        window.location.hash = '#/jardin'
      })

      doneCard.appendChild(doneTitle)
      doneCard.appendChild(doneMsg)
      doneCard.appendChild(backGardenBtn)
      section.appendChild(doneCard)
      backGardenBtn.focus()
    }

    pauseBtn.addEventListener('click', () => {
      isPaused = !isPaused
      pauseBtn.innerHTML = ''
      if (isPaused) {
        pauseStartTime = Date.now()
        pauseBtn.appendChild(createFaIcon('play', { size: 10 }))
        pauseBtn.appendChild(document.createTextNode(` ${copy.respirar.resumeBtn}`))
      } else {
        pausedAccumulated += Date.now() - pauseStartTime
        pauseBtn.appendChild(createFaIcon('pause', { size: 10 }))
        pauseBtn.appendChild(document.createTextNode(` ${copy.respirar.pauseBtn}`))
      }
    })

    quitBtn.addEventListener('click', () => {
      finishSession(false, copy.respirar.quitWarmth)
    })

    function tick() {
      if (!isPaused) {
        const elapsedSeconds = (Date.now() - sessionStartTime - pausedAccumulated) / 1000
        const state = calculateBreathingState(
          pattern,
          elapsedSeconds,
          totalDurationSeconds,
          isSalaMode
        )

        if (state.isFinished) {
          finishSession(true, isSalaMode ? copy.respirar.doneMessageSala : copy.respirar.doneMessage)
          return
        }

        // Cambio de fase
        if (state.currentPhase.type !== lastPhaseType) {
          lastPhaseType = state.currentPhase.type
          notifyPhaseChange()
        }

        phaseText.textContent = state.displayText

        // Escala del orbe visual
        let scale = 0.85
        if (state.currentPhase.type === 'inhalar') {
          scale = 0.85 + 0.35 * state.phaseProgress
        } else if (state.currentPhase.type === 'pausa') {
          scale = 1.2
        } else if (state.currentPhase.type === 'exhalar') {
          scale = 1.2 - 0.35 * state.phaseProgress
        }
        orb.style.transform = `scale(${scale})`

        // Dibujo de sprite en canvas
        ctx.clearRect(0, 0, 32 * SCALE, 32 * SCALE)
        if (state.currentPhase.type === 'inhalar') {
          drawSprite(ctx, instInhale, 0, 0, SCALE)
        } else if (state.currentPhase.type === 'exhalar') {
          drawSprite(ctx, instExhale, 0, 0, SCALE)
        } else {
          drawSprite(ctx, instTranquila, 0, 0, SCALE)
        }
      }
      animFrameId = requestAnimationFrame(tick)
    }

    notifyPhaseChange()
    animFrameId = requestAnimationFrame(tick)
  }

  startBtn.addEventListener('click', () => {
    startBreathingSession()
  })

  // Ensamblado inicial
  section.appendChild(nav)
  section.appendChild(setupCard)
  container.appendChild(section)

  return () => {
    releaseWakeLock()
    if (animFrameId) cancelAnimationFrame(animFrameId)
    style.remove()
  }
}
