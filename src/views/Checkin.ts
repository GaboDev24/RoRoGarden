import { copy } from '../copy'
import { MOOD_SPRITES } from '../sprites/definitions'
import {
  createSpriteInstance,
  createPixelCanvas,
  drawSprite,
} from '../sprites/renderer'
import { saveEntry, getLocalDateString, makeEntryId } from '../storage'
import type { MoodType } from '../storage/types'

/**
 * Vista #/checkin — ¿Cómo llegás hoy?
 * Selector de 5 expresiones de sapo 32x32, nota opcional,
 * botones Saltar y Guardar con idéntico peso visual.
 */
export function renderCheckin(container: HTMLElement): () => void {
  container.innerHTML = ''

  const section = document.createElement('section')
  section.className = 'checkin-screen'
  section.setAttribute('role', 'main')
  section.setAttribute('aria-label', copy.checkin.title)

  const style = document.createElement('style')
  style.textContent = `
    .checkin-screen {
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
        var(--color-menta) 70%,
        var(--color-salvia) 100%
      );
      overflow-y: auto;
    }

    .checkin-top {
      display: flex;
      flex-direction: column;
      gap: var(--space-sm);
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
      transition: transform var(--transition-fast), opacity var(--transition-fast);
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

    .checkin-header {
      text-align: center;
    }

    .checkin-title {
      font-family: var(--font-pixel);
      font-size: 0.75rem;
      color: var(--color-bosque);
      line-height: 1.8;
      margin: 0;
    }

    .checkin-subtitle {
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

    .mood-card:hover {
      transform: translateY(-2px);
      background-color: var(--color-celeste-agua);
    }

    .mood-card.selected {
      border: 3px solid var(--color-bosque);
      background-color: var(--color-crema);
      box-shadow: 0 4px 10px rgba(43, 58, 66, 0.2);
    }

    .mood-card:focus-visible {
      outline: 3px solid var(--color-acento);
      outline-offset: 2px;
    }

    .mood-label {
      font-family: var(--font-ui);
      font-size: var(--font-size-xs);
      font-weight: 600;
      color: var(--color-tinta);
      margin-top: var(--space-xs);
      text-align: center;
    }

    .mood-desc {
      font-family: var(--font-ui);
      font-size: var(--font-size-xs);
      color: var(--color-agua-profunda);
      text-align: center;
      min-height: 20px;
      margin: 0 0 var(--space-xs);
      font-style: italic;
    }

    .note-container {
      display: flex;
      flex-direction: column;
      gap: var(--space-xs);
      margin-bottom: var(--space-sm);
    }

    .note-label {
      font-family: var(--font-ui);
      font-size: var(--font-size-sm);
      font-weight: 600;
      color: var(--color-bosque);
    }

    .note-input {
      font-family: var(--font-ui);
      font-size: var(--font-size-md);
      color: var(--color-tinta);
      background-color: var(--color-crema);
      border: 2px solid var(--color-bosque);
      border-radius: var(--border-radius-sm);
      padding: var(--space-sm);
      min-height: 60px;
      resize: vertical;
      box-sizing: border-box;
      width: 100%;
    }

    .note-input:focus-visible {
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

    .btn-save {
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

    .toast-overlay {
      position: absolute;
      inset: 0;
      background-color: rgba(43, 58, 66, 0.6);
      display: flex;
      align-items: center;
      justify-content: center;
      padding: var(--space-lg);
      z-index: 50;
      backdrop-filter: blur(2px);
    }

    .toast-card {
      background-color: var(--color-crema);
      border: 3px solid var(--color-tinta);
      border-radius: var(--border-radius-lg);
      padding: var(--space-lg);
      max-width: 320px;
      text-align: center;
      display: flex;
      flex-direction: column;
      gap: var(--space-md);
      box-shadow: var(--shadow-desktop-frame);
    }

    .toast-message {
      font-family: var(--font-ui);
      font-size: var(--font-size-md);
      color: var(--color-tinta);
      line-height: 1.5;
      margin: 0;
    }
  `
  document.head.appendChild(style)

  // ── Top Section ──
  const top = document.createElement('div')
  top.className = 'checkin-top'

  const backBtn = document.createElement('button')
  backBtn.className = 'back-btn'
  backBtn.textContent = copy.app.back
  backBtn.setAttribute('aria-label', 'Volver al jardín')
  backBtn.addEventListener('click', () => {
    window.location.hash = '#/jardin'
  })

  const header = document.createElement('header')
  header.className = 'checkin-header'

  const title = document.createElement('h1')
  title.className = 'checkin-title'
  title.textContent = copy.checkin.title

  const subtitle = document.createElement('p')
  subtitle.className = 'checkin-subtitle'
  subtitle.textContent = copy.checkin.subtitle

  header.appendChild(title)
  header.appendChild(subtitle)
  top.appendChild(backBtn)
  top.appendChild(header)

  // ── Selector de 5 estados ──
  const moodsGrid = document.createElement('div')
  moodsGrid.className = 'moods-grid'
  moodsGrid.setAttribute('role', 'radiogroup')
  moodsGrid.setAttribute('aria-label', 'Seleccioná cómo llegás hoy')

  const moodDesc = document.createElement('p')
  moodDesc.className = 'mood-desc'
  moodDesc.textContent = copy.moods.tranquila.description

  let selectedMood: MoodType = 'tranquila'
  const moodList: MoodType[] = ['contenta', 'tranquila', 'cansada', 'tensa', 'triste']
  const cardElements: Map<MoodType, HTMLElement> = new Map()

  moodList.forEach((moodKey) => {
    const card = document.createElement('button')
    card.className = `mood-card ${moodKey === selectedMood ? 'selected' : ''}`
    card.setAttribute('role', 'radio')
    card.setAttribute('aria-checked', moodKey === selectedMood ? 'true' : 'false')
    card.setAttribute('aria-label', `${copy.moods[moodKey].label}: ${copy.moods[moodKey].description}`)

    // Canvas 32x32 para el sapito de estado
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
      moodDesc.textContent = copy.moods[moodKey].description
      cardElements.forEach((el, k) => {
        const isSel = k === selectedMood
        el.className = `mood-card ${isSel ? 'selected' : ''}`
        el.setAttribute('aria-checked', isSel ? 'true' : 'false')
      })
    })

    cardElements.set(moodKey, card)
    moodsGrid.appendChild(card)
  })

  // ── Campo de nota opcional ──
  const noteContainer = document.createElement('div')
  noteContainer.className = 'note-container'

  const noteLabel = document.createElement('label')
  noteLabel.className = 'note-label'
  noteLabel.htmlFor = 'checkin-note-input'
  noteLabel.textContent = copy.checkin.promptText

  const noteInput = document.createElement('textarea')
  noteInput.id = 'checkin-note-input'
  noteInput.className = 'note-input'
  noteInput.placeholder = copy.checkin.placeholder
  noteInput.maxLength = 280

  noteContainer.appendChild(noteLabel)
  noteContainer.appendChild(noteInput)

  // ── Fila de acciones (Saltar / Guardar con igual peso) ──
  const actionsRow = document.createElement('div')
  actionsRow.className = 'actions-row'

  const skipBtn = document.createElement('button')
  skipBtn.className = 'btn-action btn-skip'
  skipBtn.textContent = copy.app.skip
  skipBtn.setAttribute('aria-label', 'Saltar check-in sin guardar')

  const saveBtn = document.createElement('button')
  saveBtn.className = 'btn-action btn-save'
  saveBtn.textContent = copy.app.save
  saveBtn.setAttribute('aria-label', 'Guardar check-in de hoy')

  actionsRow.appendChild(skipBtn)
  actionsRow.appendChild(saveBtn)

  // Mostrar mensaje y redirigir
  const showFeedbackAndExit = (msg: string) => {
    const overlay = document.createElement('div')
    overlay.className = 'toast-overlay'
    overlay.setAttribute('role', 'alert')

    const toast = document.createElement('div')
    toast.className = 'toast-card'

    const p = document.createElement('p')
    p.className = 'toast-message'
    p.textContent = msg

    toast.appendChild(p)
    overlay.appendChild(toast)
    section.appendChild(overlay)

    setTimeout(() => {
      window.location.hash = '#/jardin'
    }, 1800)
  }

  saveBtn.addEventListener('click', () => {
    const dateStr = getLocalDateString()
    const id = makeEntryId('checkin', dateStr)

    saveEntry({
      id,
      version: 1,
      type: 'checkin',
      date: dateStr,
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
      data: {
        mood: selectedMood,
        note: noteInput.value.trim() || undefined,
      },
    })

    showFeedbackAndExit(copy.checkin.savedWarmth)
  })

  skipBtn.addEventListener('click', () => {
    showFeedbackAndExit(copy.checkin.skippedWarmth)
  })

  // Ensamblar
  section.appendChild(top)
  section.appendChild(moodsGrid)
  section.appendChild(moodDesc)
  section.appendChild(noteContainer)
  section.appendChild(actionsRow)
  container.appendChild(section)

  return () => {
    style.remove()
  }
}

