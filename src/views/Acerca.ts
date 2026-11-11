/**
 * Acerca.ts — Pantalla #/acerca ("Acerca de y privacidad").
 * Muestra: versión, qué se guarda, dónde, créditos de tipografía y arte.
 * Sin funciones nuevas, solo información honesta.
 */
import { copy } from '../copy'

/** Versión de la app — se puede actualizar en un solo lugar */
export const APP_VERSION = '1.0.0'

/** URL opcional de comentarios. Vacía = enlace no aparece */
export const FEEDBACK_URL = ''

export function renderAcerca(container: HTMLElement): () => void {
  const c = copy.acerca
  container.innerHTML = ''
  document.title = 'RoRoGarden — Acerca de'

  const wrap = document.createElement('div')
  wrap.className = 'acerca-wrap'

  // Encabezado
  const header = document.createElement('div')
  header.className = 'acerca-header'

  const backBtn = document.createElement('button')
  backBtn.className = 'back-btn'
  backBtn.type = 'button'
  backBtn.textContent = c.back
  backBtn.setAttribute('aria-label', 'Volver')
  backBtn.addEventListener('click', () => history.back())
  header.appendChild(backBtn)

  const h1 = document.createElement('h1')
  h1.className = 'section-title'
  h1.textContent = c.title
  h1.tabIndex = -1
  header.appendChild(h1)

  wrap.appendChild(header)

  // Versión
  const verDiv = document.createElement('div')
  verDiv.className = 'acerca-card'
  const verLabel = document.createElement('span')
  verLabel.className = 'acerca-label'
  verLabel.textContent = c.versionLabel + ': '
  const verValue = document.createElement('span')
  verValue.className = 'acerca-value'
  verValue.textContent = APP_VERSION
  verDiv.appendChild(verLabel)
  verDiv.appendChild(verValue)
  wrap.appendChild(verDiv)

  // Privacidad
  const privSection = createSection(c.privacyTitle)
  const privP = document.createElement('p')
  privP.className = 'acerca-text'
  privP.textContent = c.privacyText
  privSection.appendChild(privP)

  const hostP = document.createElement('p')
  hostP.className = 'acerca-note'
  hostP.textContent = c.hostingNote
  privSection.appendChild(hostP)

  const notTherapyP = document.createElement('p')
  notTherapyP.className = 'acerca-disclaimer'
  notTherapyP.textContent = c.notTherapy
  privSection.appendChild(notTherapyP)
  wrap.appendChild(privSection)

  // Créditos
  const credSection = createSection(c.creditsTitle)
  const credP = document.createElement('p')
  credP.className = 'acerca-text'
  credP.textContent = c.creditsText
  credSection.appendChild(credP)

  const fontP = document.createElement('p')
  fontP.className = 'acerca-text'
  fontP.textContent = c.fontCredit
  credSection.appendChild(fontP)

  const licenseP = document.createElement('p')
  licenseP.className = 'acerca-note'
  licenseP.textContent = c.licenseNote
  credSection.appendChild(licenseP)
  wrap.appendChild(credSection)

  // Comentarios (solo si FEEDBACK_URL tiene valor)
  if (FEEDBACK_URL) {
    const fbSection = createSection(c.feedbackTitle)
    const fbLink = document.createElement('a')
    fbLink.href = FEEDBACK_URL
    fbLink.className = 'acerca-link'
    fbLink.textContent = 'Enviá un comentario'
    fbLink.rel = 'noopener noreferrer'
    // Abrir sin adjuntar datos
    fbSection.appendChild(fbLink)
    wrap.appendChild(fbSection)
  }

  container.appendChild(wrap)

  // Estilos
  if (!document.getElementById('acerca-styles')) {
    const style = document.createElement('style')
    style.id = 'acerca-styles'
    style.textContent = `
      .acerca-wrap {
        display: flex;
        flex-direction: column;
        gap: var(--space-lg);
        padding: var(--space-lg) var(--space-md);
        padding-bottom: max(var(--space-xl), env(safe-area-inset-bottom, 0px));
      }
      .acerca-header {
        display: flex;
        flex-direction: column;
        gap: var(--space-sm);
      }
      .acerca-card {
        background: var(--color-menta);
        border-radius: var(--border-radius-sm);
        padding: var(--space-md);
        font-family: var(--font-ui);
        font-size: var(--font-size-sm);
      }
      .acerca-label {
        color: var(--color-musgo);
        font-weight: 600;
      }
      .acerca-value {
        color: var(--color-tinta);
        font-family: var(--font-pixel);
        font-size: var(--font-size-xs);
      }
      .acerca-section {
        display: flex;
        flex-direction: column;
        gap: var(--space-sm);
      }
      .acerca-section-title {
        font-family: var(--font-pixel);
        font-size: var(--font-size-sm);
        color: var(--color-bosque);
        margin: 0;
      }
      .acerca-text {
        font-family: var(--font-ui);
        font-size: var(--font-size-sm);
        color: var(--color-tinta);
        line-height: 1.6;
        margin: 0;
      }
      .acerca-note {
        font-family: var(--font-ui);
        font-size: var(--font-size-xs);
        color: var(--color-musgo);
        line-height: 1.5;
        margin: 0;
        padding: var(--space-sm);
        background: var(--color-crema);
        border-radius: var(--border-radius-sm);
      }
      .acerca-disclaimer {
        font-family: var(--font-ui);
        font-size: var(--font-size-xs);
        color: var(--color-musgo);
        line-height: 1.5;
        margin: 0;
        padding: var(--space-sm);
        background: var(--color-celeste-agua);
        border-radius: var(--border-radius-sm);
        border-left: 3px solid var(--color-musgo);
      }
      .acerca-link {
        font-family: var(--font-ui);
        font-size: var(--font-size-sm);
        color: var(--color-bosque);
        text-decoration: underline;
      }
    `
    document.head.appendChild(style)
  }

  // Foco al h1
  setTimeout(() => h1.focus(), 50)

  return () => {
    // cleanup
  }
}

function createSection(title: string): HTMLElement {
  const section = document.createElement('section')
  section.className = 'acerca-section'
  const h2 = document.createElement('h2')
  h2.className = 'acerca-section-title'
  h2.textContent = title
  section.appendChild(h2)
  return section
}

