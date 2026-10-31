import { copy } from '../copy'
import { faIconHtml } from '../icons'
import {
  isSoundEnabled,
  setSoundEnabled,
  isVibrationEnabled,
  setVibrationEnabled,
} from '../audio'
import {
  exportBackup,
  importBackup,
  clearAllEntries,
  isStorageAvailable,
  getLocalDateString,
} from '../storage'

/**
 * Vista #/ajustes — Ajustes y Respaldo
 * Exportación e importación de JSON, borrado total con doble confirmación.
 */
export function renderAjustes(container: HTMLElement): () => void {
  container.innerHTML = ''

  const section = document.createElement('section')
  section.className = 'ajustes-screen'
  section.setAttribute('role', 'main')
  section.setAttribute('aria-label', copy.ajustes.title)

  const style = document.createElement('style')
  style.textContent = `
    .ajustes-screen {
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
      gap: var(--space-md);
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

    .ajustes-header {
      text-align: center;
    }

    .ajustes-title {
      font-family: var(--font-pixel);
      font-size: 0.75rem;
      color: var(--color-bosque);
      line-height: 1.8;
      margin: 0;
    }

    .privacy-card {
      background-color: var(--color-crema);
      border: 2px solid var(--color-bosque);
      border-radius: var(--border-radius-md);
      padding: var(--space-sm) var(--space-md);
      display: flex;
      align-items: center;
      gap: var(--space-sm);
    }

    .privacy-text {
      font-family: var(--font-ui);
      font-size: var(--font-size-sm);
      color: var(--color-bosque);
      font-weight: 600;
      line-height: 1.4;
      margin: 0;
    }

    .warning-card {
      background-color: var(--color-acento);
      border: 2px solid var(--color-tinta);
      border-radius: var(--border-radius-md);
      padding: var(--space-sm) var(--space-md);
      color: var(--color-tinta);
      font-family: var(--font-ui);
      font-size: var(--font-size-xs);
      line-height: 1.4;
    }

    .settings-group {
      background-color: var(--color-crema);
      border: 2px solid var(--color-tinta);
      border-radius: var(--border-radius-md);
      padding: var(--space-md);
      display: flex;
      flex-direction: column;
      gap: var(--space-xs);
    }

    .group-title {
      font-family: var(--font-pixel);
      font-size: 0.625rem;
      color: var(--color-bosque);
      margin: 0;
      line-height: 1.6;
    }

    .group-desc {
      font-family: var(--font-ui);
      font-size: var(--font-size-xs);
      color: var(--color-agua-profunda);
      margin: 0 0 var(--space-xs);
      line-height: 1.4;
    }

    .btn-action {
      font-family: var(--font-ui);
      font-size: var(--font-size-sm);
      font-weight: 600;
      border-radius: var(--border-radius-sm);
      padding: var(--space-sm) var(--space-md);
      min-height: var(--touch-target-min);
      cursor: pointer;
      display: flex;
      align-items: center;
      justify-content: center;
      transition: transform var(--transition-fast), opacity var(--transition-fast);
      text-align: center;
    }

    .btn-primary {
      background-color: var(--color-bosque);
      color: var(--color-crema);
      border: 2px solid var(--color-tinta);
    }

    .btn-secondary {
      background-color: var(--color-salvia);
      color: var(--color-tinta);
      border: 2px solid var(--color-bosque);
    }

    .btn-danger {
      background-color: var(--color-crema);
      color: var(--color-tinta);
      border: 2px solid var(--color-acento);
    }

    .btn-action:hover {
      opacity: 0.92;
      transform: translateY(-1px);
    }

    .btn-action:focus-visible {
      outline: 3px solid var(--color-acento);
      outline-offset: 3px;
    }

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
      max-width: 320px;
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

    .modal-actions {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: var(--space-sm);
      margin-top: var(--space-xs);
    }

    .file-hidden {
      display: none;
    }

    .toast-msg {
      font-family: var(--font-ui);
      font-size: var(--font-size-xs);
      font-weight: 600;
      color: var(--color-bosque);
      text-align: center;
      margin-top: var(--space-xs);
      min-height: 18px;
    }
  `
  document.head.appendChild(style)

  const backBtn = document.createElement('button')
  backBtn.className = 'back-btn'
  backBtn.textContent = copy.app.back
  backBtn.setAttribute('aria-label', 'Volver al jardín')
  backBtn.addEventListener('click', () => {
    window.location.hash = '#/jardin'
  })

  const header = document.createElement('header')
  header.className = 'ajustes-header'

  const title = document.createElement('h1')
  title.className = 'ajustes-title'
  title.textContent = copy.ajustes.title
  header.appendChild(title)

  // Aviso de privacidad
  const privacyCard = document.createElement('div')
  privacyCard.className = 'privacy-card'
  privacyCard.innerHTML = `${faIconHtml('lock', { size: 16 })}<p class="privacy-text">${copy.ajustes.privacyNote}</p>`

  // Aviso si storage no está disponible
  let storageWarning: HTMLElement | null = null
  if (!isStorageAvailable()) {
    storageWarning = document.createElement('div')
    storageWarning.className = 'warning-card'
    storageWarning.textContent = copy.ajustes.storageWarning
  }

  const toastLabel = document.createElement('p')
  toastLabel.className = 'toast-msg'

  const showToast = (text: string) => {
    toastLabel.textContent = text
    setTimeout(() => {
      toastLabel.textContent = ''
    }, 3000)
  }

  // ── 0. Sonido y vibración ──
  const audioGroup = document.createElement('div')
  audioGroup.className = 'settings-group'

  const audioTitle = document.createElement('h2')
  audioTitle.className = 'group-title'
  audioTitle.textContent = copy.ajustes.audioTitle

  // Toggle sonido
  const soundLabelRow = document.createElement('label')
  soundLabelRow.style.cssText = 'display: flex; align-items: center; justify-content: space-between; gap: var(--space-sm); cursor: pointer; min-height: var(--touch-target-min);'
  const soundLabelText = document.createElement('span')
  soundLabelText.className = 'group-desc'
  soundLabelText.style.margin = '0'
  soundLabelText.textContent = copy.ajustes.soundLabel
  const soundCheck = document.createElement('input')
  soundCheck.type = 'checkbox'
  soundCheck.style.cssText = 'width: 22px; height: 22px; accent-color: var(--color-bosque); cursor: pointer;'
  soundCheck.checked = isSoundEnabled()
  soundCheck.addEventListener('change', () => {
    setSoundEnabled(soundCheck.checked)
    showToast('Preferencia de sonido actualizada')
  })
  soundLabelRow.appendChild(soundLabelText)
  soundLabelRow.appendChild(soundCheck)

  // Toggle vibración
  const vibLabelRow = document.createElement('label')
  vibLabelRow.style.cssText = 'display: flex; align-items: center; justify-content: space-between; gap: var(--space-sm); cursor: pointer; min-height: var(--touch-target-min);'
  const vibLabelText = document.createElement('span')
  vibLabelText.className = 'group-desc'
  vibLabelText.style.margin = '0'
  vibLabelText.textContent = copy.ajustes.vibrationLabel
  const vibCheck = document.createElement('input')
  vibCheck.type = 'checkbox'
  vibCheck.style.cssText = 'width: 22px; height: 22px; accent-color: var(--color-bosque); cursor: pointer;'
  vibCheck.checked = isVibrationEnabled()
  vibCheck.addEventListener('change', () => {
    setVibrationEnabled(vibCheck.checked)
    showToast('Preferencia de vibración actualizada')
  })
  vibLabelRow.appendChild(vibLabelText)
  vibLabelRow.appendChild(vibCheck)

  audioGroup.appendChild(audioTitle)
  audioGroup.appendChild(soundLabelRow)
  audioGroup.appendChild(vibLabelRow)

  // ── 1. Exportar datos ──
  const exportGroup = document.createElement('div')
  exportGroup.className = 'settings-group'

  const expTitle = document.createElement('h2')
  expTitle.className = 'group-title'
  expTitle.textContent = copy.ajustes.exportTitle

  const expDesc = document.createElement('p')
  expDesc.className = 'group-desc'
  expDesc.textContent = copy.ajustes.exportDesc

  const expBtn = document.createElement('button')
  expBtn.className = 'btn-action btn-primary'
  expBtn.textContent = copy.ajustes.exportBtn
  expBtn.addEventListener('click', () => {
    const res = exportBackup()
    if (!res.success || !res.data) {
      showToast('Error al exportar los datos.')
      return
    }

    const blob = new Blob([res.data], { type: 'application/json' })
    const url = URL.createObjectURL(blob)
    const a = document.createElement('a')
    a.href = url
    a.download = `rorogarden_respaldo_${getLocalDateString()}.json`
    document.body.appendChild(a)
    a.click()
    document.body.removeChild(a)
    URL.revokeObjectURL(url)
    showToast('Respaldo descargado con éxito.')
  })

  exportGroup.appendChild(expTitle)
  exportGroup.appendChild(expDesc)
  exportGroup.appendChild(expBtn)

  // ── 2. Importar datos ──
  const importGroup = document.createElement('div')
  importGroup.className = 'settings-group'

  const impTitle = document.createElement('h2')
  impTitle.className = 'group-title'
  impTitle.textContent = copy.ajustes.importTitle

  const impDesc = document.createElement('p')
  impDesc.className = 'group-desc'
  impDesc.textContent = copy.ajustes.importDesc

  const fileInput = document.createElement('input')
  fileInput.type = 'file'
  fileInput.accept = '.json,application/json'
  fileInput.className = 'file-hidden'

  const impBtn = document.createElement('button')
  impBtn.className = 'btn-action btn-secondary'
  impBtn.textContent = copy.ajustes.importBtn
  impBtn.addEventListener('click', () => {
    fileInput.click()
  })

  fileInput.addEventListener('change', () => {
    const file = fileInput.files?.[0]
    if (!file) return

    const reader = new FileReader()
    reader.onload = (e) => {
      const text = e.target?.result as string
      if (!text) return

      // Confirmar antes de importar
      const overlay = document.createElement('div')
      overlay.className = 'modal-overlay'

      const modal = document.createElement('div')
      modal.className = 'modal-card'

      const mTitle = document.createElement('h3')
      mTitle.className = 'modal-title'
      mTitle.textContent = copy.ajustes.importTitle

      const mDesc = document.createElement('p')
      mDesc.className = 'modal-desc'
      mDesc.textContent = copy.ajustes.importConfirm

      const mActions = document.createElement('div')
      mActions.className = 'modal-actions'

      const cancelBtn = document.createElement('button')
      cancelBtn.className = 'btn-action btn-secondary'
      cancelBtn.textContent = copy.app.cancel
      cancelBtn.addEventListener('click', () => {
        overlay.remove()
        fileInput.value = ''
      })

      const confirmBtn = document.createElement('button')
      confirmBtn.className = 'btn-action btn-primary'
      confirmBtn.textContent = 'Importar'
      confirmBtn.addEventListener('click', () => {
        overlay.remove()
        fileInput.value = ''
        const impRes = importBackup(text)
        if (impRes.success) {
          showToast(`${copy.ajustes.importSuccess} (${impRes.data?.imported} registros)`)
        } else {
          showToast(impRes.error ?? copy.ajustes.importError)
        }
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
    reader.readAsText(file)
  })

  importGroup.appendChild(impTitle)
  importGroup.appendChild(impDesc)
  importGroup.appendChild(impBtn)
  importGroup.appendChild(fileInput)

  // ── 3. Borrar todo (doble confirmación) ──
  const clearGroup = document.createElement('div')
  clearGroup.className = 'settings-group'

  const clrTitle = document.createElement('h2')
  clrTitle.className = 'group-title'
  clrTitle.textContent = copy.ajustes.clearTitle

  const clrDesc = document.createElement('p')
  clrDesc.className = 'group-desc'
  clrDesc.textContent = copy.ajustes.clearDesc

  const clrBtn = document.createElement('button')
  clrBtn.className = 'btn-action btn-danger'
  clrBtn.textContent = copy.ajustes.clearBtn
  clrBtn.addEventListener('click', () => {
    // Primera confirmación
    const overlay = document.createElement('div')
    overlay.className = 'modal-overlay'

    const modal = document.createElement('div')
    modal.className = 'modal-card'

    const mTitle = document.createElement('h3')
    mTitle.className = 'modal-title'
    mTitle.textContent = copy.ajustes.clearTitle

    const mDesc = document.createElement('p')
    mDesc.className = 'modal-desc'
    mDesc.textContent = copy.ajustes.clearFirstConfirm

    const mActions = document.createElement('div')
    mActions.className = 'modal-actions'

    const cancelBtn = document.createElement('button')
    cancelBtn.className = 'btn-action btn-secondary'
    cancelBtn.textContent = copy.app.cancel
    cancelBtn.addEventListener('click', () => overlay.remove())

    const proceedBtn = document.createElement('button')
    proceedBtn.className = 'btn-action btn-danger'
    proceedBtn.textContent = 'Sí, continuar'
    proceedBtn.addEventListener('click', () => {
      overlay.remove()

      // Segunda confirmación explícita
      const overlay2 = document.createElement('div')
      overlay2.className = 'modal-overlay'

      const modal2 = document.createElement('div')
      modal2.className = 'modal-card'

      const mTitle2 = document.createElement('h3')
      mTitle2.className = 'modal-title'
      mTitle2.textContent = 'Confirmación final'

      const mDesc2 = document.createElement('p')
      mDesc2.className = 'modal-desc'
      mDesc2.textContent = copy.ajustes.clearSecondConfirm

      const mActions2 = document.createElement('div')
      mActions2.className = 'modal-actions'

      const cancelBtn2 = document.createElement('button')
      cancelBtn2.className = 'btn-action btn-secondary'
      cancelBtn2.textContent = copy.app.cancel
      cancelBtn2.addEventListener('click', () => overlay2.remove())

      const finalDeleteBtn = document.createElement('button')
      finalDeleteBtn.className = 'btn-action btn-danger'
      finalDeleteBtn.textContent = 'Borrar definitivamente'
      finalDeleteBtn.addEventListener('click', () => {
        clearAllEntries()
        overlay2.remove()
        showToast(copy.ajustes.clearSuccess)
      })

      mActions2.appendChild(cancelBtn2)
      mActions2.appendChild(finalDeleteBtn)
      modal2.appendChild(mTitle2)
      modal2.appendChild(mDesc2)
      modal2.appendChild(mActions2)
      overlay2.appendChild(modal2)
      section.appendChild(overlay2)
      finalDeleteBtn.focus()
    })

    mActions.appendChild(cancelBtn)
    mActions.appendChild(proceedBtn)
    modal.appendChild(mTitle)
    modal.appendChild(mDesc)
    modal.appendChild(mActions)
    overlay.appendChild(modal)
    section.appendChild(overlay)
    proceedBtn.focus()
  })

  clearGroup.appendChild(clrTitle)
  clearGroup.appendChild(clrDesc)
  clearGroup.appendChild(clrBtn)

  // Ensamblar
  section.appendChild(backBtn)
  section.appendChild(header)
  section.appendChild(privacyCard)
  if (storageWarning) section.appendChild(storageWarning)
  section.appendChild(audioGroup)
  section.appendChild(exportGroup)
  section.appendChild(importGroup)
  section.appendChild(clearGroup)
  section.appendChild(toastLabel)
  container.appendChild(section)

  return () => {
    style.remove()
  }
}

