import { copy } from '../copy'
import { MOOD_SPRITES, frogSleeping, moonCrescent } from '../sprites/definitions'
import {
  createSpriteInstance,
  createPixelCanvas,
  drawSprite,
  SpriteAnimator,
} from '../sprites/renderer'
import { saveEntry, getLocalDateString, makeEntryId } from '../storage'
import type { MoodType } from '../storage/types'

/**
 * Vista #/diario — Cerrar el día
 * Paso 0: Selección de estado
 * Paso 1: "Algo lindo de hoy"
 * Paso 2: "Algo que me pesó"
 * Paso 3: "Algo que suelto"
 * Ritual final: 2-3 segundos con sapito durmiendo y luna, respetando prefers-reduced-motion.
 */
export function renderDiario(container: HTMLElement): () => void {
  container.innerHTML = ''

  let currentStep = 0 // 0: Mood, 1: Lindo, 2: Pesó, 3: Suelto, 4: Ritual
  let selectedMood: MoodType = 'tranquila'
  let respLindo = ''
  let respPeso = ''
  let respSuelto = ''
  let animator: SpriteAnimator | null = null

  const section = document.createElement('section')
  section.className = 'diario-screen'
  section.setAttribute('role', 'main')
  section.setAttribute('aria-label', copy.diario.title)

  const style = document.createElement('style')
  style.textContent = `
    .diario-screen {
      flex: 1;
      width: 100%;
      height: 100%;
      box-sizing: border-box;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      padding: var(--space-md);
      background: linear-gradient(
        180deg,
        var(--color-celeste-agua) 0%,
        var(--color-menta) 60%,
        var(--color-salvia) 100%
      );
      overflow-y: auto;
    }

    .diario-top {
      display: flex;
      flex-direction: column;
      gap: var(--space-xs);
    }

    .back-btn {
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
      align-self: flex-start;
      line-height: 1.6;
      display: inline-flex;
      align-items: center;
      justify-content: center;
    }

    .back-btn:hover {
      opacity: 0.9;
      transform: translateY(-1px);
    }

    .back-btn:focus-visible {
      outline: 3px solid var(--color-acento);
      outline-offset: 3px;
    }

    .step-indicator {
      font-family: var(--font-pixel);
      font-size: 0.5rem;
      color: var(--color-musgo);
      margin: 0;
      text-align: center;
    }

    .diario-header {
      text-align: center;
    }

    .diario-title {
      font-family: var(--font-pixel);
      font-size: 0.75rem;
      color: var(--color-bosque);
      line-height: 1.6;
      margin: 0;
    }

    .diario-subtitle {
      font-family: var(--font-ui);
      font-size: var(--font-size-sm);
      color: var(--color-agua-profunda);
      margin: var(--space-xs) 0 0;
      line-height: 1.4;
    }

    .moods-grid {
      display: grid;
      grid-template-columns: repeat(5, 1fr);
      gap: var(--space-xs);
      margin: var(--space-sm) 0;
    }

    @media (max-width: 380px) {
      .moods-grid {
        grid-template-columns: repeat(3, 1fr);
      }
    }

    .mood-card {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      padding: var(--space-xs);
      background-color: var(--color-menta);
      border: 2px solid var(--color-salvia);
      border-radius: var(--border-radius-md);
      cursor: pointer;
      min-height: 64px;
      transition: transform var(--transition-fast), border-color var(--transition-fast), background-color var(--transition-fast);
    }

    .mood-card.selected {
      border: 3px solid var(--color-bosque);
      background-color: var(--color-crema);
      box-shadow: 0 4px 10px rgba(43, 58, 66, 0.2);
    }

    .mood-label {
      font-family: var(--font-ui);
      font-size: var(--font-size-xs);
      font-weight: 600;
      color: var(--color-tinta);
      margin-top: var(--space-xs);
      text-align: center;
    }

    .question-box {
      flex: 1;
      display: flex;
      flex-direction: column;
      gap: var(--space-sm);
      margin: var(--space-md) 0;
    }

    .question-input {
      font-family: var(--font-ui);
      font-size: var(--font-size-md);
      color: var(--color-tinta);
      background-color: var(--color-crema);
      border: 2px solid var(--color-bosque);
      border-radius: var(--border-radius-md);
      padding: var(--space-md);
      min-height: 120px;
      resize: vertical;
      box-sizing: border-box;
      width: 100%;
      line-height: 1.5;
    }

    .question-input:focus-visible {
      outline: 3px solid var(--color-acento);
      outline-offset: 2px;
    }

    .actions-row {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: var(--space-sm);
      width: 100%;
      margin-top: var(--space-sm);
    }

    .btn-action {
      font-family: var(--font-ui);
      font-size: var(--font-size-md);
      font-weight: 600;
      border-radius: var(--border-radius-md);
      padding: var(--space-sm) var(--space-md);
      min-height: var(--touch-target-min);
      cursor: pointer;
      text-align: center;
      display: flex;
      align-items: center;
      justify-content: center;
      transition: transform var(--transition-fast), opacity var(--transition-fast);
      box-sizing: border-box;
    }

    .btn-skip {
      background-color: var(--color-salvia);
      color: var(--color-tinta);
      border: 2px solid var(--color-bosque);
    }

    .btn-next {
      background-color: var(--color-bosque);
      color: var(--color-crema);
      border: 2px solid var(--color-tinta);
    }

    .btn-action:hover {
      opacity: 0.92;
      transform: translateY(-1px);
    }

    .btn-action:active {
      transform: translateY(1px);
    }

    .btn-action:focus-visible {
      outline: 3px solid var(--color-acento);
      outline-offset: 3px;
    }

    /* Ritual nocturno */
    .ritual-screen {
      flex: 1;
      width: 100%;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      gap: var(--space-md);
      text-align: center;
      padding: var(--space-lg);
      background: radial-gradient(
        circle at 50% 30%,
        var(--color-agua-profunda) 0%,
        var(--color-tinta) 100%
      );
      border-radius: var(--border-radius-md);
      color: var(--color-crema);
    }

    .ritual-title {
      font-family: var(--font-pixel);
      font-size: 0.75rem;
      color: var(--color-crema);
      line-height: 1.8;
      margin: 0;
    }

    .ritual-msg {
      font-family: var(--font-ui);
      font-size: var(--font-size-md);
      color: var(--color-celeste-agua);
      max-width: 260px;
      line-height: 1.5;
      margin: 0;
    }

    .ritual-goodnight {
      font-family: var(--font-pixel);
      font-size: 0.625rem;
      color: var(--color-turquesa);
      margin-top: var(--space-xs);
    }
  `
  document.head.appendChild(style)

  const renderCurrentStep = () => {
    section.innerHTML = ''

    if (currentStep === 4) {
      // ── RITUAL DE SALIDA ──
      const ritual = document.createElement('div')
      ritual.className = 'ritual-screen'
      ritual.setAttribute('role', 'region')
      ritual.setAttribute('aria-label', copy.diario.ritualTitle)

      const title = document.createElement('h2')
      title.className = 'ritual-title'
      title.textContent = copy.diario.ritualTitle

      // Canvas con luna y sapo durmiendo
      const SCALE = 4
      const { canvas, ctx } = createPixelCanvas(32 * SCALE, 28 * SCALE)
      const instMoon = createSpriteInstance(moonCrescent)
      const instSleeping = createSpriteInstance(frogSleeping)

      const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches

      const drawRitual = () => {
        ctx.clearRect(0, 0, 32 * SCALE, 28 * SCALE)
        // Dibujar luna en la parte superior derecha
        drawSprite(ctx, instMoon, 8 * SCALE, 0, SCALE)
        // Dibujar sapito dormido en la parte inferior centrada
        drawSprite(ctx, instSleeping, 6 * SCALE, 14 * SCALE, SCALE)
      }

      drawRitual()

      if (!reducedMotion) {
        animator = new SpriteAnimator(drawRitual)
        animator.add(instMoon)
        animator.start()
      }

      const msg = document.createElement('p')
      msg.className = 'ritual-msg'
      msg.textContent = copy.diario.ritualMessage

      const goodnight = document.createElement('p')
      goodnight.className = 'ritual-goodnight'
      goodnight.textContent = copy.diario.ritualGoodnight

      const finishBtn = document.createElement('button')
      finishBtn.className = 'btn-action btn-next'
      finishBtn.style.marginTop = 'var(--space-md)'
      finishBtn.textContent = 'Volver al jardín'
      finishBtn.addEventListener('click', () => {
        window.location.hash = '#/jardin'
      })

      ritual.appendChild(title)
      ritual.appendChild(canvas)
      ritual.appendChild(msg)
      ritual.appendChild(goodnight)
      ritual.appendChild(finishBtn)
      section.appendChild(ritual)

      // Auto-redirección suave después de 3.5 segundos si no hay reduced-motion
      if (!reducedMotion) {
        setTimeout(() => {
          if (window.location.hash === '#/diario') {
            window.location.hash = '#/jardin'
          }
        }, 3500)
      }

      return
    }

    // ── PASOS 0 A 3 ──
    const top = document.createElement('div')
    top.className = 'diario-top'

    const backBtn = document.createElement('button')
    backBtn.className = 'back-btn'
    backBtn.textContent = copy.app.back
    backBtn.setAttribute('aria-label', 'Volver al paso anterior o al jardín')
    backBtn.addEventListener('click', () => {
      if (currentStep > 0) {
        currentStep--
        renderCurrentStep()
      } else {
        window.location.hash = '#/jardin'
      }
    })

    const stepLabel = document.createElement('p')
    stepLabel.className = 'step-indicator'
    stepLabel.textContent = `Paso ${currentStep + 1} de 4`

    const header = document.createElement('header')
    header.className = 'diario-header'

    const title = document.createElement('h1')
    title.className = 'diario-title'

    const subtitle = document.createElement('p')
    subtitle.className = 'diario-subtitle'

    header.appendChild(title)
    header.appendChild(subtitle)
    top.appendChild(backBtn)
    top.appendChild(stepLabel)
    top.appendChild(header)
    section.appendChild(top)

    if (currentStep === 0) {
      // Paso 0: Selector de estado
      title.textContent = copy.diario.stepMoodTitle
      subtitle.textContent = copy.diario.stepMoodSubtitle

      const moodsGrid = document.createElement('div')
      moodsGrid.className = 'moods-grid'
      const moodList: MoodType[] = ['contenta', 'tranquila', 'cansada', 'tensa', 'triste']

      moodList.forEach((moodKey) => {
        const card = document.createElement('button')
        card.className = `mood-card ${moodKey === selectedMood ? 'selected' : ''}`
        card.setAttribute('aria-label', copy.moods[moodKey].label)

        const SCALE = 1
        const { canvas, ctx } = createPixelCanvas(32 * SCALE, 32 * SCALE)
        const def = MOOD_SPRITES[moodKey]
        const inst = createSpriteInstance(def)
        drawSprite(ctx, inst, 0, 0, SCALE)

        const label = document.createElement('span')
        label.className = 'mood-label'
        label.textContent = copy.moods[moodKey].label

        card.appendChild(canvas)
        card.appendChild(label)

        card.addEventListener('click', () => {
          selectedMood = moodKey
          currentStep = 1
          renderCurrentStep()
        })

        moodsGrid.appendChild(card)
      })

      section.appendChild(moodsGrid)

      // Botón saltar mood
      const actionsRow = document.createElement('div')
      actionsRow.className = 'actions-row'
      const skipBtn = document.createElement('button')
      skipBtn.className = 'btn-action btn-skip'
      skipBtn.textContent = copy.app.skip
      skipBtn.addEventListener('click', () => {
        currentStep = 1
        renderCurrentStep()
      })

      const nextBtn = document.createElement('button')
      nextBtn.className = 'btn-action btn-next'
      nextBtn.textContent = copy.app.next
      nextBtn.addEventListener('click', () => {
        currentStep = 1
        renderCurrentStep()
      })

      actionsRow.appendChild(skipBtn)
      actionsRow.appendChild(nextBtn)
      section.appendChild(actionsRow)
    } else {
      // Pasos 1, 2, 3 (Preguntas reflexivas)
      const qBox = document.createElement('div')
      qBox.className = 'question-box'

      let stepPrompt = ''
      let stepSub = ''
      let placeholder = ''
      let initialVal = ''

      if (currentStep === 1) {
        stepPrompt = copy.diario.step1Title
        stepSub = copy.diario.step1Subtitle
        placeholder = copy.diario.step1Placeholder
        initialVal = respLindo
      } else if (currentStep === 2) {
        stepPrompt = copy.diario.step2Title
        stepSub = copy.diario.step2Subtitle
        placeholder = copy.diario.step2Placeholder
        initialVal = respPeso
      } else {
        stepPrompt = copy.diario.step3Title
        stepSub = copy.diario.step3Subtitle
        placeholder = copy.diario.step3Placeholder
        initialVal = respSuelto
      }

      title.textContent = stepPrompt
      subtitle.textContent = stepSub

      const input = document.createElement('textarea')
      input.className = 'question-input'
      input.placeholder = placeholder
      input.value = initialVal
      input.maxLength = 400
      qBox.appendChild(input)
      section.appendChild(qBox)

      const actionsRow = document.createElement('div')
      actionsRow.className = 'actions-row'

      const skipBtn = document.createElement('button')
      skipBtn.className = 'btn-action btn-skip'
      skipBtn.textContent = copy.app.skip

      const nextBtn = document.createElement('button')
      nextBtn.className = 'btn-action btn-next'
      nextBtn.textContent = currentStep === 3 ? copy.diario.finishBtn : copy.app.next

      const advance = (value: string) => {
        if (currentStep === 1) respLindo = value
        if (currentStep === 2) respPeso = value
        if (currentStep === 3) respSuelto = value

        if (currentStep === 3) {
          // Guardar registro en storage
          const dateStr = getLocalDateString()
          saveEntry({
            id: makeEntryId('diario', dateStr),
            version: 1,
            type: 'diario',
            date: dateStr,
            createdAt: new Date().toISOString(),
            updatedAt: new Date().toISOString(),
            data: {
              mood: selectedMood,
              lindo: respLindo || undefined,
              peso: respPeso || undefined,
              suelto: respSuelto || undefined,
            },
          })
          currentStep = 4
        } else {
          currentStep++
        }
        renderCurrentStep()
      }

      skipBtn.addEventListener('click', () => {
        advance('')
      })

      nextBtn.addEventListener('click', () => {
        advance(input.value.trim())
      })

      actionsRow.appendChild(skipBtn)
      actionsRow.appendChild(nextBtn)
      section.appendChild(actionsRow)

      input.focus()
    }
  }

  container.appendChild(section)
  renderCurrentStep()

  return () => {
    if (animator) {
      animator.stop()
    }
    style.remove()
  }
}

