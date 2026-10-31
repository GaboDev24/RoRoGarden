import { copy } from '../copy'
import { createFaIcon } from '../icons'
import { MOOD_SPRITES } from '../sprites/definitions'
import {
  createSpriteInstance,
  createPixelCanvas,
  drawSprite,
} from '../sprites/renderer'
import { listEntries, deleteEntry, saveEntry } from '../storage'
import type { GardenEntry, CheckinPayload, DiarioPayload, MoodType } from '../storage/types'

/**
 * Vista #/historial — Mis días
 * Lista ordenada de registros pasados con estado, fecha y texto.
 * Edición y borrado con confirmación previa.
 * Sin contadores de racha ni métricas de culpa.
 */
export function renderHistorial(container: HTMLElement): () => void {
  container.innerHTML = ''

  const section = document.createElement('section')
  section.className = 'historial-screen'
  section.setAttribute('role', 'main')
  section.setAttribute('aria-label', copy.historial.title)

  const style = document.createElement('style')
  style.textContent = `
    .historial-screen {
      flex: 1;
      width: 100%;
      height: 100%;
      box-sizing: border-box;
      display: flex;
      flex-direction: column;
      padding: var(--space-md);
      background: linear-gradient(
        180deg,
        var(--color-celeste-agua) 0%,
        var(--color-menta) 60%,
        var(--color-salvia) 100%
      );
      overflow-y: auto;
    }

    .historial-header {
      display: flex;
      flex-direction: column;
      gap: var(--space-xs);
      margin-bottom: var(--space-md);
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
      transition: transform var(--transition-fast), opacity var(--transition-fast);
    }

    .back-btn:hover {
      opacity: 0.9;
      transform: translateY(-1px);
    }

    .back-btn:focus-visible {
      outline: 3px solid var(--color-acento);
      outline-offset: 3px;
    }

    .title-box {
      text-align: center;
    }

    .historial-title {
      font-family: var(--font-pixel);
      font-size: 0.75rem;
      color: var(--color-bosque);
      line-height: 1.8;
      margin: 0;
    }

    .historial-subtitle {
      font-family: var(--font-ui);
      font-size: var(--font-size-sm);
      color: var(--color-agua-profunda);
      margin: 0;
    }

    .entries-list {
      display: flex;
      flex-direction: column;
      gap: var(--space-sm);
      flex: 1;
    }

    .empty-state {
      background-color: var(--color-crema);
      border: 2px dashed var(--color-musgo);
      border-radius: var(--border-radius-md);
      padding: var(--space-xl) var(--space-md);
      text-align: center;
      margin: auto 0;
    }

    .empty-text {
      font-family: var(--font-ui);
      font-size: var(--font-size-md);
      color: var(--color-bosque);
      line-height: 1.5;
      margin: 0;
    }

    .entry-card {
      background-color: var(--color-crema);
      border: 2px solid var(--color-bosque);
      border-radius: var(--border-radius-md);
      padding: var(--space-sm) var(--space-md);
      display: flex;
      flex-direction: column;
      gap: var(--space-xs);
      box-shadow: 0 2px 6px rgba(43, 58, 66, 0.1);
    }

    .entry-card-header {
      display: flex;
      align-items: center;
      justify-content: space-between;
      gap: var(--space-xs);
      border-bottom: 1px solid var(--color-salvia);
      padding-bottom: var(--space-xs);
    }

    .entry-meta {
      display: flex;
      align-items: center;
      gap: var(--space-xs);
    }

    .entry-badge {
      font-family: var(--font-pixel);
      font-size: 0.5rem;
      padding: 2px 6px;
      border-radius: var(--border-radius-sm);
      background-color: var(--color-bosque);
      color: var(--color-crema);
    }

    .entry-badge.diario {
      background-color: var(--color-agua-profunda);
    }

    .entry-date {
      font-family: var(--font-ui);
      font-size: var(--font-size-xs);
      font-weight: 600;
      color: var(--color-musgo);
    }

    .entry-mood-row {
      display: flex;
      align-items: center;
      gap: var(--space-sm);
      margin: var(--space-xs) 0;
    }

    .entry-mood-label {
      font-family: var(--font-ui);
      font-size: var(--font-size-sm);
      font-weight: 700;
      color: var(--color-bosque);
    }

    .entry-content {
      font-family: var(--font-ui);
      font-size: var(--font-size-sm);
      color: var(--color-tinta);
      line-height: 1.4;
      display: flex;
      flex-direction: column;
      gap: var(--space-xs);
    }

    .diario-item {
      display: flex;
      flex-direction: column;
      gap: 2px;
    }

    .diario-q {
      font-weight: 600;
      color: var(--color-musgo);
      font-size: var(--font-size-xs);
    }

    .diario-a {
      color: var(--color-tinta);
    }

    .entry-actions {
      display: flex;
      justify-content: flex-end;
      gap: var(--space-sm);
      margin-top: var(--space-xs);
      border-top: 1px dashed var(--color-salvia);
      padding-top: var(--space-xs);
    }

    .card-btn {
      font-family: var(--font-ui);
      font-size: var(--font-size-xs);
      color: var(--color-tinta);
      background: none;
      border: 1px solid var(--color-bosque);
      border-radius: var(--border-radius-sm);
      padding: var(--space-xs) var(--space-sm);
      cursor: pointer;
      min-height: 36px;
      min-width: 36px;
      display: inline-flex;
      align-items: center;
      justify-content: center;
    }

    .card-btn.del {
      border-color: var(--color-acento);
      color: var(--color-tinta);
    }

    .card-btn:hover {
      background-color: var(--color-menta);
    }

    .card-btn:focus-visible {
      outline: 2px solid var(--color-acento);
      outline-offset: 2px;
    }

    /* Modal de confirmación y edición */
    .modal-overlay {
      position: absolute;
      inset: 0;
      background-color: rgba(43, 58, 66, 0.65);
      display: flex;
      align-items: center;
      justify-content: center;
      padding: var(--space-md);
      z-index: 50;
      backdrop-filter: blur(2px);
    }

    .modal-card {
      background-color: var(--color-crema);
      border: 3px solid var(--color-tinta);
      border-radius: var(--border-radius-lg);
      padding: var(--space-md);
      max-width: 340px;
      width: 100%;
      box-sizing: border-box;
      display: flex;
      flex-direction: column;
      gap: var(--space-sm);
      box-shadow: var(--shadow-desktop-frame);
    }

    .modal-title {
      font-family: var(--font-pixel);
      font-size: 0.625rem;
      color: var(--color-bosque);
      margin: 0;
      line-height: 1.6;
    }

    .modal-desc {
      font-family: var(--font-ui);
      font-size: var(--font-size-sm);
      color: var(--color-tinta);
      line-height: 1.4;
      margin: 0;
    }

    .modal-input {
      font-family: var(--font-ui);
      font-size: var(--font-size-sm);
      color: var(--color-tinta);
      background-color: var(--color-menta);
      border: 2px solid var(--color-bosque);
      border-radius: var(--border-radius-sm);
      padding: var(--space-sm);
      min-height: 80px;
      width: 100%;
      box-sizing: border-box;
      resize: vertical;
    }

    .modal-actions {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: var(--space-sm);
      margin-top: var(--space-xs);
    }

    .btn-modal {
      font-family: var(--font-ui);
      font-size: var(--font-size-sm);
      font-weight: 600;
      padding: var(--space-sm);
      min-height: var(--touch-target-min);
      border-radius: var(--border-radius-sm);
      cursor: pointer;
      display: flex;
      align-items: center;
      justify-content: center;
    }

    .btn-modal.cancel {
      background-color: var(--color-salvia);
      color: var(--color-tinta);
      border: 2px solid var(--color-bosque);
    }

    .btn-modal.confirm {
      background-color: var(--color-bosque);
      color: var(--color-crema);
      border: 2px solid var(--color-tinta);
    }
  `
  document.head.appendChild(style)

  const headerBox = document.createElement('div')
  headerBox.className = 'historial-header'

  const backBtn = document.createElement('button')
  backBtn.className = 'back-btn'
  backBtn.textContent = copy.app.back
  backBtn.setAttribute('aria-label', 'Volver al jardín')
  backBtn.addEventListener('click', () => {
    window.location.hash = '#/jardin'
  })

  const titleBox = document.createElement('div')
  titleBox.className = 'title-box'

  const title = document.createElement('h1')
  title.className = 'historial-title'
  title.textContent = copy.historial.title

  const subtitle = document.createElement('p')
  subtitle.className = 'historial-subtitle'
  subtitle.textContent = copy.historial.subtitle

  titleBox.appendChild(title)
  titleBox.appendChild(subtitle)
  headerBox.appendChild(backBtn)
  headerBox.appendChild(titleBox)

  const listContainer = document.createElement('div')
  listContainer.className = 'entries-list'

  const renderList = () => {
    listContainer.innerHTML = ''
    const res = listEntries()
    const entries: GardenEntry[] = res.success && res.data ? res.data : []

    if (entries.length === 0) {
      const empty = document.createElement('div')
      empty.className = 'empty-state'

      const p = document.createElement('p')
      p.className = 'empty-text'
      p.textContent = copy.historial.empty

      empty.appendChild(p)
      listContainer.appendChild(empty)
      return
    }

    entries.forEach((entry) => {
      const card = document.createElement('article')
      card.className = 'entry-card'

      // Meta header: badge tipo + fecha
      const cardHeader = document.createElement('div')
      cardHeader.className = 'entry-card-header'

      const meta = document.createElement('div')
      meta.className = 'entry-meta'

      const badge = document.createElement('span')
      badge.className = `entry-badge ${entry.type}`
      badge.textContent = entry.type === 'checkin' ? copy.historial.checkinBadge : copy.historial.diarioBadge

      const dateLabel = document.createElement('time')
      dateLabel.className = 'entry-date'
      dateLabel.textContent = entry.date

      meta.appendChild(badge)
      meta.appendChild(dateLabel)
      cardHeader.appendChild(meta)

      // Fila de estado de ánimo con mini sapito
      const moodRow = document.createElement('div')
      moodRow.className = 'entry-mood-row'

      const moodKey = entry.data.mood as MoodType
      if (moodKey && MOOD_SPRITES[moodKey]) {
        const SCALE = 1
        const { canvas, ctx } = createPixelCanvas(32 * SCALE, 32 * SCALE)
        const def = MOOD_SPRITES[moodKey]
        const inst = createSpriteInstance(def)
        drawSprite(ctx, inst, 0, 0, SCALE)
        moodRow.appendChild(canvas)
      }

      const moodLabel = document.createElement('span')
      moodLabel.className = 'entry-mood-label'
      moodLabel.textContent = copy.moods[moodKey]?.label ?? moodKey

      moodRow.appendChild(moodLabel)

      // Contenido textual
      const content = document.createElement('div')
      content.className = 'entry-content'

      if (entry.type === 'checkin') {
        const pData = entry.data as CheckinPayload
        if (pData.note) {
          const noteP = document.createElement('p')
          noteP.textContent = pData.note
          content.appendChild(noteP)
        }
      } else {
        const dData = entry.data as DiarioPayload
        if (dData.lindo) {
          const item = document.createElement('div')
          item.className = 'diario-item'
          item.innerHTML = `<span class="diario-q">${copy.diario.step1Title}:</span> <span class="diario-a">${dData.lindo}</span>`
          content.appendChild(item)
        }
        if (dData.peso) {
          const item = document.createElement('div')
          item.className = 'diario-item'
          item.innerHTML = `<span class="diario-q">${copy.diario.step2Title}:</span> <span class="diario-a">${dData.peso}</span>`
          content.appendChild(item)
        }
        if (dData.suelto) {
          const item = document.createElement('div')
          item.className = 'diario-item'
          item.innerHTML = `<span class="diario-q">${copy.diario.step3Title}:</span> <span class="diario-a">${dData.suelto}</span>`
          content.appendChild(item)
        }
      }

      // Botones editar y borrar
      const actions = document.createElement('div')
      actions.className = 'entry-actions'

      const editBtn = document.createElement('button')
      editBtn.className = 'card-btn'
      const penIcon = createFaIcon('pen', { size: 12 })
      penIcon.style.marginRight = 'var(--space-xs)'
      editBtn.appendChild(penIcon)
      editBtn.appendChild(document.createTextNode(copy.app.edit))
      editBtn.setAttribute('aria-label', `Editar registro del ${entry.date}`)
      editBtn.addEventListener('click', () => {
        openEditModal(entry)
      })

      const deleteBtn = document.createElement('button')
      deleteBtn.className = 'card-btn del'
      const trashIcon = createFaIcon('trash', { size: 12 })
      trashIcon.style.marginRight = 'var(--space-xs)'
      deleteBtn.appendChild(trashIcon)
      deleteBtn.appendChild(document.createTextNode(copy.app.delete))
      deleteBtn.setAttribute('aria-label', `Borrar registro del ${entry.date}`)
      deleteBtn.addEventListener('click', () => {
        openDeleteModal(entry.id)
      })

      actions.appendChild(editBtn)
      actions.appendChild(deleteBtn)

      card.appendChild(cardHeader)
      card.appendChild(moodRow)
      if (content.childNodes.length > 0) {
        card.appendChild(content)
      }
      card.appendChild(actions)
      listContainer.appendChild(card)
    })
  }

  // Modal para confirmar borrado
  const openDeleteModal = (id: string) => {
    const overlay = document.createElement('div')
    overlay.className = 'modal-overlay'
    overlay.setAttribute('role', 'dialog')
    overlay.setAttribute('aria-modal', 'true')

    const modal = document.createElement('div')
    modal.className = 'modal-card'

    const mTitle = document.createElement('h3')
    mTitle.className = 'modal-title'
    mTitle.textContent = copy.app.delete

    const mDesc = document.createElement('p')
    mDesc.className = 'modal-desc'
    mDesc.textContent = copy.historial.confirmDelete

    const mActions = document.createElement('div')
    mActions.className = 'modal-actions'

    const cancelBtn = document.createElement('button')
    cancelBtn.className = 'btn-modal cancel'
    cancelBtn.textContent = copy.app.cancel
    cancelBtn.addEventListener('click', () => overlay.remove())

    const confirmBtn = document.createElement('button')
    confirmBtn.className = 'btn-modal confirm'
    confirmBtn.textContent = copy.app.delete
    confirmBtn.addEventListener('click', () => {
      deleteEntry(id)
      overlay.remove()
      renderList()
    })

    mActions.appendChild(cancelBtn)
    mActions.appendChild(confirmBtn)
    modal.appendChild(mTitle)
    modal.appendChild(mDesc)
    modal.appendChild(mActions)
    overlay.appendChild(modal)
    section.appendChild(overlay)
    confirmBtn.focus()
  }

  // Modal para editar anotación
  const openEditModal = (entry: GardenEntry) => {
    const overlay = document.createElement('div')
    overlay.className = 'modal-overlay'
    overlay.setAttribute('role', 'dialog')
    overlay.setAttribute('aria-modal', 'true')

    const modal = document.createElement('div')
    modal.className = 'modal-card'

    const mTitle = document.createElement('h3')
    mTitle.className = 'modal-title'
    mTitle.textContent = copy.historial.editNoteTitle

    const input = document.createElement('textarea')
    input.className = 'modal-input'

    if (entry.type === 'checkin') {
      input.value = (entry.data as CheckinPayload).note ?? ''
    } else {
      const d = entry.data as DiarioPayload
      input.value = [d.lindo, d.peso, d.suelto].filter(Boolean).join('\n')
    }

    const mActions = document.createElement('div')
    mActions.className = 'modal-actions'

    const cancelBtn = document.createElement('button')
    cancelBtn.className = 'btn-modal cancel'
    cancelBtn.textContent = copy.app.cancel
    cancelBtn.addEventListener('click', () => overlay.remove())

    const saveBtn = document.createElement('button')
    saveBtn.className = 'btn-modal confirm'
    saveBtn.textContent = copy.app.save
    saveBtn.addEventListener('click', () => {
      const text = input.value.trim()
      if (entry.type === 'checkin') {
        ;(entry.data as CheckinPayload).note = text || undefined
      } else {
        ;(entry.data as DiarioPayload).lindo = text || undefined
      }
      saveEntry(entry)
      overlay.remove()
      renderList()
    })

    mActions.appendChild(cancelBtn)
    mActions.appendChild(saveBtn)
    modal.appendChild(mTitle)
    modal.appendChild(input)
    modal.appendChild(mActions)
    overlay.appendChild(modal)
    section.appendChild(overlay)
    input.focus()
  }

  section.appendChild(headerBox)
  section.appendChild(listContainer)
  container.appendChild(section)

  renderList()

  return () => {
    style.remove()
  }
}

