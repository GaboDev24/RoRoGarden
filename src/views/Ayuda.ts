import { copy } from '../copy'
import { OFFICIAL_HELP_RESOURCES, LOCAL_HELP_RESOURCES } from '../resources'
import { createFaIcon } from '../icons'

/**
 * Vista #/ayuda — Ayuda y contactos de escucha.
 * Siempre accesible desde Ajustes y desde el pie de Mi Semana.
 */
export function renderAyuda(container: HTMLElement): () => void {
  container.innerHTML = ''

  const section = document.createElement('section')
  section.className = 'ayuda-screen'
  section.setAttribute('role', 'main')
  section.setAttribute('aria-label', copy.ayuda.title)

  const style = document.createElement('style')
  style.textContent = `
    .ayuda-screen {
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

    .ayuda-header {
      text-align: center;
      display: flex;
      flex-direction: column;
      gap: var(--space-xs);
    }

    .ayuda-title {
      font-family: var(--font-pixel);
      font-size: 0.75rem;
      color: var(--color-bosque);
      line-height: 1.8;
      margin: 0;
    }

    .ayuda-subtitle {
      font-family: var(--font-ui);
      font-size: var(--font-size-sm);
      color: var(--color-agua-profunda);
      margin: 0;
      line-height: 1.4;
    }

    .warmth-card {
      background-color: var(--color-crema);
      border: 2px solid var(--color-bosque);
      border-radius: var(--border-radius-md);
      padding: var(--space-md);
      display: flex;
      flex-direction: column;
      gap: var(--space-xs);
    }

    .warmth-text {
      font-family: var(--font-ui);
      font-size: var(--font-size-sm);
      color: var(--color-tinta);
      line-height: 1.5;
      margin: 0;
    }

    .emergency-title {
      font-family: var(--font-pixel);
      font-size: 0.625rem;
      color: var(--color-bosque);
      margin: var(--space-xs) 0 0;
      line-height: 1.6;
    }

    .resources-list {
      display: flex;
      flex-direction: column;
      gap: var(--space-sm);
    }

    .resource-card {
      background-color: var(--color-crema);
      border: 2px solid var(--color-tinta);
      border-radius: var(--border-radius-md);
      padding: var(--space-sm) var(--space-md);
      display: flex;
      flex-direction: column;
      gap: var(--space-xs);
      box-shadow: 2px 2px 0 var(--color-bosque);
    }

    .resource-name {
      font-family: var(--font-pixel);
      font-size: 0.625rem;
      color: var(--color-bosque);
      margin: 0;
      line-height: 1.4;
    }

    .resource-desc {
      font-family: var(--font-ui);
      font-size: var(--font-size-xs);
      color: var(--color-tinta);
      margin: 0;
      line-height: 1.4;
    }

    .resource-scope {
      font-family: var(--font-ui);
      font-size: var(--font-size-xs);
      color: var(--color-agua-profunda);
      margin: 0;
      font-style: italic;
    }

    .resource-call-btn {
      align-self: flex-start;
      margin-top: var(--space-xs);
      font-family: var(--font-ui);
      font-size: var(--font-size-sm);
      font-weight: 600;
      color: var(--color-crema);
      background-color: var(--color-bosque);
      border: 2px solid var(--color-tinta);
      border-radius: var(--border-radius-sm);
      padding: var(--space-xs) var(--space-md);
      min-height: var(--touch-target-min);
      text-decoration: none;
      display: inline-flex;
      align-items: center;
      gap: var(--space-xs);
      transition: transform var(--transition-fast), opacity var(--transition-fast);
    }

    .resource-call-btn:hover {
      opacity: 0.92;
      transform: translateY(-1px);
    }

    .resource-call-btn:focus-visible {
      outline: 3px solid var(--color-acento);
      outline-offset: 3px;
    }

    .local-section {
      background-color: var(--color-overlay-crema);
      border: 1px dashed var(--color-bosque);
      border-radius: var(--border-radius-md);
      padding: var(--space-sm) var(--space-md);
      display: flex;
      flex-direction: column;
      gap: 4px;
    }

    .local-title {
      font-family: var(--font-pixel);
      font-size: 0.5625rem;
      color: var(--color-bosque);
      margin: 0;
    }

    .local-empty {
      font-family: var(--font-ui);
      font-size: var(--font-size-xs);
      color: var(--color-agua-profunda);
      margin: 0;
      line-height: 1.4;
    }
  `
  document.head.appendChild(style)

  const backBtn = document.createElement('button')
  backBtn.className = 'back-btn'
  backBtn.textContent = copy.app.back
  backBtn.setAttribute('aria-label', 'Volver a la pantalla anterior')
  backBtn.addEventListener('click', () => {
    if (window.history.length > 1) {
      window.history.back()
    } else {
      window.location.hash = '#/ajustes'
    }
  })

  const header = document.createElement('header')
  header.className = 'ayuda-header'

  const title = document.createElement('h1')
  title.className = 'ayuda-title'
  title.textContent = copy.ayuda.title

  const subtitle = document.createElement('p')
  subtitle.className = 'ayuda-subtitle'
  subtitle.textContent = copy.ayuda.subtitle

  header.appendChild(title)
  header.appendChild(subtitle)

  // Tarjeta de acompañamiento
  const warmthCard = document.createElement('div')
  warmthCard.className = 'warmth-card'

  const warmthText = document.createElement('p')
  warmthText.className = 'warmth-text'
  warmthText.textContent = copy.ayuda.talkWarmth

  const emergencyNote = document.createElement('p')
  emergencyNote.className = 'warmth-text'
  emergencyNote.style.fontWeight = '600'
  emergencyNote.textContent = copy.ayuda.emergencyNote

  warmthCard.appendChild(warmthText)
  warmthCard.appendChild(emergencyNote)

  // Lista de contactos oficiales
  const resourcesList = document.createElement('div')
  resourcesList.className = 'resources-list'
  resourcesList.setAttribute('role', 'region')
  resourcesList.setAttribute('aria-label', 'Líneas oficiales de ayuda')

  for (const res of OFFICIAL_HELP_RESOURCES) {
    const card = document.createElement('article')
    card.className = 'resource-card'

    const rName = document.createElement('h2')
    rName.className = 'resource-name'
    rName.textContent = res.name

    const rDesc = document.createElement('p')
    rDesc.className = 'resource-desc'
    rDesc.textContent = res.description

    const rScope = document.createElement('p')
    rScope.className = 'resource-scope'
    rScope.textContent = `Alcance: ${res.scope}`

    const callLink = document.createElement('a')
    callLink.className = 'resource-call-btn'
    callLink.href = `tel:${res.phone}`
    callLink.setAttribute('aria-label', `Llamar a ${res.name} al ${res.phoneDisplay}`)
    const phoneIcon = createFaIcon('bell', { size: 14 })
    callLink.appendChild(phoneIcon)
    callLink.appendChild(document.createTextNode(`Llamar: ${res.phoneDisplay}`))

    card.appendChild(rName)
    card.appendChild(rDesc)
    card.appendChild(rScope)
    if (res.note) {
      const rNote = document.createElement('p')
      rNote.className = 'resource-scope'
      rNote.textContent = res.note
      card.appendChild(rNote)
    }
    card.appendChild(callLink)
    resourcesList.appendChild(card)
  }

  // Sección de recursos locales
  const localSection = document.createElement('div')
  localSection.className = 'local-section'

  const localTitle = document.createElement('h3')
  localTitle.className = 'local-title'
  localTitle.textContent = copy.ayuda.localResourcesTitle

  const localDesc = document.createElement('p')
  localDesc.className = 'local-empty'
  localDesc.textContent =
    LOCAL_HELP_RESOURCES.length > 0
      ? 'Recursos configurados para tu área.'
      : copy.ayuda.localResourcesEmpty

  localSection.appendChild(localTitle)
  localSection.appendChild(localDesc)

  // Ensamblar
  section.appendChild(backBtn)
  section.appendChild(header)
  section.appendChild(warmthCard)
  section.appendChild(resourcesList)
  section.appendChild(localSection)
  container.appendChild(section)

  return () => {
    style.remove()
  }
}

