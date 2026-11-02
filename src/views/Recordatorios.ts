import { copy } from '../copy'
import {
  type DayOfWeek,
  generateIcsCalendar,
  validateReminderConfig,
} from '../reminders'
import { loadGardenState, saveGardenState } from '../storage'
import { createFaIcon } from '../icons'

/**
 * Vista #/recordatorios — Configuración de recordatorios suaves y exportación a calendario.
 */
export function renderRecordatorios(container: HTMLElement): () => void {
  container.innerHTML = ''

  let gardenState = loadGardenState()
  const reminders = [...gardenState.reminders]

  // Detectar si venimos con día preseleccionado (ej: ?dia=4 desde un patrón)
  const hash = window.location.hash
  const matchDay = hash.match(/dia=(\d)/)
  if (matchDay && matchDay[1]) {
    const suggestedDay = parseInt(matchDay[1], 10) as DayOfWeek
    if (suggestedDay >= 1 && suggestedDay <= 7) {
      // Activar la pausa de media jornada para ese día si no estaba
      const midDay = reminders.find((r) => r.id === 'media-jornada')
      if (midDay && !midDay.days.includes(suggestedDay)) {
        midDay.enabled = true
        midDay.days.push(suggestedDay)
        gardenState = { ...gardenState, reminders }
        saveGardenState(gardenState)
      }
    }
  }

  const section = document.createElement('section')
  section.className = 'recordatorios-screen'
  section.setAttribute('role', 'main')
  section.setAttribute('aria-label', copy.recordatorios.title)

  const style = document.createElement('style')
  style.textContent = `
    .recordatorios-screen {
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

    .rec-header {
      text-align: center;
    }

    .rec-title {
      font-family: var(--font-pixel);
      font-size: 0.75rem;
      color: var(--color-bosque);
      line-height: 1.8;
      margin: 0;
    }

    .rec-subtitle {
      font-family: var(--font-ui);
      font-size: var(--font-size-sm);
      color: var(--color-agua-profunda);
      margin: var(--space-xs) 0 0;
      line-height: 1.4;
    }

    .vacation-card {
      background-color: var(--color-crema);
      border: 2px solid var(--color-bosque);
      border-radius: var(--border-radius-md);
      padding: var(--space-sm) var(--space-md);
      display: flex;
      flex-direction: column;
      gap: 4px;
    }

    .toggle-row {
      display: flex;
      align-items: center;
      justify-content: space-between;
      gap: var(--space-sm);
      cursor: pointer;
      min-height: var(--touch-target-min);
    }

    .toggle-title {
      font-family: var(--font-ui);
      font-size: var(--font-size-sm);
      font-weight: 600;
      color: var(--color-bosque);
      margin: 0;
    }

    .toggle-desc {
      font-family: var(--font-ui);
      font-size: var(--font-size-xs);
      color: var(--color-agua-profunda);
      margin: 0;
      line-height: 1.35;
    }

    .reminders-list {
      display: flex;
      flex-direction: column;
      gap: var(--space-md);
    }

    .reminder-card {
      background-color: var(--color-crema);
      border: 2px solid var(--color-tinta);
      border-radius: var(--border-radius-md);
      padding: var(--space-md);
      display: flex;
      flex-direction: column;
      gap: var(--space-sm);
      box-shadow: 2px 2px 0 var(--color-bosque);
    }

    .reminder-top {
      display: flex;
      align-items: center;
      justify-content: space-between;
      gap: var(--space-sm);
    }

    .reminder-name {
      font-family: var(--font-pixel);
      font-size: 0.625rem;
      color: var(--color-bosque);
      margin: 0;
      line-height: 1.4;
    }

    .reminder-body {
      display: flex;
      flex-direction: column;
      gap: var(--space-xs);
    }

    .field-row {
      display: flex;
      flex-direction: column;
      gap: 4px;
    }

    .field-label {
      font-family: var(--font-ui);
      font-size: var(--font-size-xs);
      font-weight: 600;
      color: var(--color-tinta);
      margin: 0;
    }

    .time-input {
      font-family: var(--font-ui);
      font-size: var(--font-size-md);
      padding: var(--space-xs) var(--space-sm);
      border: 2px solid var(--color-bosque);
      border-radius: var(--border-radius-sm);
      background-color: var(--color-menta);
      color: var(--color-tinta);
      max-width: 130px;
    }

    .days-row {
      display: flex;
      gap: 6px;
      flex-wrap: wrap;
    }

    .day-pill-btn {
      font-family: var(--font-pixel);
      font-size: 0.5625rem;
      color: var(--color-tinta);
      background-color: var(--color-salvia);
      border: 2px solid var(--color-bosque);
      border-radius: var(--border-radius-sm);
      min-width: 36px;
      min-height: 38px;
      padding: 2px 6px;
      cursor: pointer;
      display: flex;
      align-items: center;
      justify-content: center;
      transition: background-color var(--transition-fast), transform var(--transition-fast);
    }

    .day-pill-btn.selected {
      background-color: var(--color-bosque);
      color: var(--color-crema);
      border-color: var(--color-tinta);
    }

    .text-input {
      font-family: var(--font-ui);
      font-size: var(--font-size-sm);
      padding: var(--space-xs) var(--space-sm);
      border: 2px solid var(--color-bosque);
      border-radius: var(--border-radius-sm);
      background-color: var(--color-menta);
      color: var(--color-tinta);
      width: 100%;
      box-sizing: border-box;
    }

    .text-input:focus, .time-input:focus {
      outline: 3px solid var(--color-acento);
    }

    .export-section {
      background-color: var(--color-crema);
      border: 2px solid var(--color-tinta);
      border-radius: var(--border-radius-md);
      padding: var(--space-md);
      display: flex;
      flex-direction: column;
      gap: var(--space-sm);
    }

    .export-btn {
      font-family: var(--font-ui);
      font-size: var(--font-size-sm);
      font-weight: 600;
      color: var(--color-crema);
      background-color: var(--color-bosque);
      border: 2px solid var(--color-tinta);
      border-radius: var(--border-radius-sm);
      padding: var(--space-sm) var(--space-md);
      min-height: var(--touch-target-min);
      cursor: pointer;
      display: flex;
      align-items: center;
      justify-content: center;
      gap: var(--space-sm);
      transition: transform var(--transition-fast), opacity var(--transition-fast);
    }

    .export-btn:hover {
      opacity: 0.92;
      transform: translateY(-1px);
    }

    .export-btn:focus-visible {
      outline: 3px solid var(--color-acento);
      outline-offset: 3px;
    }

    .instructions-card {
      background-color: var(--color-overlay-crema);
      border: 1px solid var(--color-bosque);
      border-radius: var(--border-radius-sm);
      padding: var(--space-sm);
      display: flex;
      flex-direction: column;
      gap: 6px;
    }

    .inst-title {
      font-family: var(--font-pixel);
      font-size: 0.5625rem;
      color: var(--color-bosque);
      margin: 0;
    }

    .inst-text {
      font-family: var(--font-ui);
      font-size: var(--font-size-xs);
      color: var(--color-tinta);
      margin: 0;
      line-height: 1.4;
    }

    .toast-label {
      font-family: var(--font-ui);
      font-size: var(--font-size-xs);
      font-weight: 600;
      color: var(--color-bosque);
      text-align: center;
      min-height: 18px;
    }
  `
  document.head.appendChild(style)

  const backBtn = document.createElement('button')
  backBtn.className = 'back-btn'
  backBtn.textContent = copy.recordatorios.backToSettings
  backBtn.setAttribute('aria-label', 'Volver a ajustes')
  backBtn.addEventListener('click', () => {
    window.location.hash = '#/ajustes'
  })

  const header = document.createElement('header')
  header.className = 'rec-header'

  const title = document.createElement('h1')
  title.className = 'rec-title'
  title.textContent = copy.recordatorios.title

  const subtitle = document.createElement('p')
  subtitle.className = 'rec-subtitle'
  subtitle.textContent = copy.recordatorios.subtitle

  header.appendChild(title)
  header.appendChild(subtitle)

  const toastLabel = document.createElement('p')
  toastLabel.className = 'toast-label'
  const showToast = (msg: string) => {
    toastLabel.textContent = msg
    setTimeout(() => {
      toastLabel.textContent = ''
    }, 2500)
  }

  // 1. Descanso de avisos (Vacaciones)
  const vacationCard = document.createElement('div')
  vacationCard.className = 'vacation-card'

  const vacationRow = document.createElement('label')
  vacationRow.className = 'toggle-row'

  const vacationTextWrap = document.createElement('div')
  const vacTitle = document.createElement('h2')
  vacTitle.className = 'toggle-title'
  vacTitle.textContent = copy.recordatorios.vacationLabel
  const vacDesc = document.createElement('p')
  vacDesc.className = 'toggle-desc'
  vacDesc.textContent = copy.recordatorios.vacationDesc
  vacationTextWrap.appendChild(vacTitle)
  vacationTextWrap.appendChild(vacDesc)

  const vacCheck = document.createElement('input')
  vacCheck.type = 'checkbox'
  vacCheck.style.cssText = 'width: 22px; height: 22px; accent-color: var(--color-bosque); cursor: pointer;'
  vacCheck.checked = gardenState.vacationMode
  vacCheck.addEventListener('change', () => {
    gardenState = { ...gardenState, vacationMode: vacCheck.checked }
    saveGardenState(gardenState)
    showToast(copy.recordatorios.saveSuccess)
  })

  vacationRow.appendChild(vacationTextWrap)
  vacationRow.appendChild(vacCheck)
  vacationCard.appendChild(vacationRow)

  // 2. Lista de Recordatorios (3 momentos)
  const remindersList = document.createElement('div')
  remindersList.className = 'reminders-list'

  const dayLabels = ['L', 'M', 'M', 'J', 'V', 'S', 'D']

  reminders.forEach((rem) => {
    const card = document.createElement('div')
    card.className = 'reminder-card'

    // Top: Switch y Nombre
    const topRow = document.createElement('div')
    topRow.className = 'reminder-top'

    const nameLabel = document.createElement('h2')
    nameLabel.className = 'reminder-name'
    nameLabel.textContent = rem.name

    const enableCheck = document.createElement('input')
    enableCheck.type = 'checkbox'
    enableCheck.style.cssText = 'width: 22px; height: 22px; accent-color: var(--color-bosque); cursor: pointer;'
    enableCheck.checked = rem.enabled
    enableCheck.setAttribute('aria-label', `Activar ${rem.name}`)

    topRow.appendChild(nameLabel)
    topRow.appendChild(enableCheck)
    card.appendChild(topRow)

    const body = document.createElement('div')
    body.className = 'reminder-body'
    body.style.display = rem.enabled ? 'flex' : 'none'

    // Hora
    const timeRow = document.createElement('div')
    timeRow.className = 'field-row'
    const timeLabel = document.createElement('label')
    timeLabel.className = 'field-label'
    timeLabel.textContent = copy.recordatorios.timeLabel
    const timeInput = document.createElement('input')
    timeInput.type = 'time'
    timeInput.className = 'time-input'
    timeInput.value = rem.time
    timeInput.addEventListener('change', () => {
      if (timeInput.value) {
        rem.time = timeInput.value
        if (validateReminderConfig(rem)) {
          gardenState = { ...gardenState, reminders }
          saveGardenState(gardenState)
          showToast(copy.recordatorios.saveSuccess)
        }
      }
    })
    timeRow.appendChild(timeLabel)
    timeRow.appendChild(timeInput)
    body.appendChild(timeRow)

    // Días
    const daysRow = document.createElement('div')
    daysRow.className = 'field-row'
    const daysLabel = document.createElement('label')
    daysLabel.className = 'field-label'
    daysLabel.textContent = copy.recordatorios.daysLabel
    const pillsWrap = document.createElement('div')
    pillsWrap.className = 'days-row'

    for (let d = 1; d <= 7; d++) {
      const dayNum = d as DayOfWeek
      const btn = document.createElement('button')
      btn.type = 'button'
      btn.className = `day-pill-btn ${rem.days.includes(dayNum) ? 'selected' : ''}`
      btn.textContent = dayLabels[d - 1]
      btn.setAttribute('aria-label', `Día ${dayLabels[d - 1]}`)
      btn.addEventListener('click', () => {
        if (rem.days.includes(dayNum)) {
          if (rem.days.length > 1) {
            rem.days = rem.days.filter((x) => x !== dayNum)
          }
        } else {
          rem.days = [...rem.days, dayNum].sort((a, b) => a - b)
        }
        btn.classList.toggle('selected', rem.days.includes(dayNum))
        gardenState = { ...gardenState, reminders }
        saveGardenState(gardenState)
        showToast(copy.recordatorios.saveSuccess)
      })
      pillsWrap.appendChild(btn)
    }
    daysRow.appendChild(daysLabel)
    daysRow.appendChild(pillsWrap)
    body.appendChild(daysRow)

    // Mensaje para el calendario
    const textRow = document.createElement('div')
    textRow.className = 'field-row'
    const textLabel = document.createElement('label')
    textLabel.className = 'field-label'
    textLabel.textContent = copy.recordatorios.textLabel
    const textInput = document.createElement('input')
    textInput.type = 'text'
    textInput.maxLength = 40
    textInput.className = 'text-input'
    textInput.value = rem.eventText
    textInput.addEventListener('change', () => {
      const val = textInput.value.trim()
      rem.eventText = val.length > 0 ? val.slice(0, 40) : 'Una pausa para mí'
      gardenState = { ...gardenState, reminders }
      saveGardenState(gardenState)
      showToast(copy.recordatorios.saveSuccess)
    })
    textRow.appendChild(textLabel)
    textRow.appendChild(textInput)
    body.appendChild(textRow)

    enableCheck.addEventListener('change', () => {
      rem.enabled = enableCheck.checked
      body.style.display = rem.enabled ? 'flex' : 'none'
      gardenState = { ...gardenState, reminders }
      saveGardenState(gardenState)
      showToast(copy.recordatorios.saveSuccess)
    })

    card.appendChild(body)
    remindersList.appendChild(card)
  })

  // 3. Sección Exportar Calendario .ICS
  const exportSection = document.createElement('div')
  exportSection.className = 'export-section'

  const exportBtn = document.createElement('button')
  exportBtn.type = 'button'
  exportBtn.className = 'export-btn'
  exportBtn.appendChild(createFaIcon('bell', { size: 16 }))
  exportBtn.appendChild(document.createTextNode(copy.recordatorios.exportIcsBtn))
  exportBtn.addEventListener('click', () => {
    const hasActive = reminders.some((r) => r.enabled)
    if (!hasActive) {
      alert('Activá al menos un recordatorio arriba antes de descargar el calendario.')
      return
    }

    const icsContent = generateIcsCalendar(reminders)
    const blob = new Blob([icsContent], { type: 'text/calendar;charset=utf-8' })
    const url = URL.createObjectURL(blob)
    const a = document.createElement('a')
    a.href = url
    a.download = 'rorogarden_recordatorios.ics'
    document.body.appendChild(a)
    a.click()
    document.body.removeChild(a)
    URL.revokeObjectURL(url)
    showToast('Archivo .ics descargado.')
  })

  const exportDesc = document.createElement('p')
  exportDesc.className = 'toggle-desc'
  exportDesc.textContent = copy.recordatorios.exportIcsDesc

  const instCard = document.createElement('div')
  instCard.className = 'instructions-card'

  const instTitle = document.createElement('h3')
  instTitle.className = 'inst-title'
  instTitle.textContent = copy.recordatorios.instructionsTitle

  const instAndroid = document.createElement('p')
  instAndroid.className = 'inst-text'
  instAndroid.textContent = copy.recordatorios.instructionsAndroid

  const instIos = document.createElement('p')
  instIos.className = 'inst-text'
  instIos.textContent = copy.recordatorios.instructionsIos

  instCard.appendChild(instTitle)
  instCard.appendChild(instAndroid)
  instCard.appendChild(instIos)

  exportSection.appendChild(exportBtn)
  exportSection.appendChild(exportDesc)
  exportSection.appendChild(instCard)

  // Ensamblar pantalla
  section.appendChild(backBtn)
  section.appendChild(header)
  section.appendChild(vacationCard)
  section.appendChild(remindersList)
  section.appendChild(exportSection)
  section.appendChild(toastLabel)
  container.appendChild(section)

  return () => {
    style.remove()
  }
}
