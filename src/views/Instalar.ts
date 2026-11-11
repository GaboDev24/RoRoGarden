/**
 * Instalar.ts — Pantalla #/instalar.
 * Guía paso a paso para instalar la app en Android e iPhone.
 * Sin banners ni pedidos automáticos.
 * El botón "Instalar" solo aparece si el navegador ofrece beforeinstallprompt.
 */
import { copy } from '../copy'

export function renderInstalar(container: HTMLElement): () => void {
  const c = copy.instalar
  container.innerHTML = ''
  document.title = 'RoRoGarden — Instalá la app'

  // Detectar si ya está instalada (modo standalone)
  const isInstalled =
    window.matchMedia('(display-mode: standalone)').matches ||
    (navigator as any).standalone === true

  const wrap = document.createElement('div')
  wrap.className = 'instalar-wrap'

  // Encabezado
  const header = document.createElement('div')
  header.className = 'instalar-header'

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

  if (isInstalled) {
    // Ya instalada
    const alreadyCard = document.createElement('div')
    alreadyCard.className = 'instalar-already'
    alreadyCard.textContent = c.alreadyInstalled
    alreadyCard.setAttribute('role', 'status')
    wrap.appendChild(alreadyCard)
  } else {
    // Por qué instalarla
    const whyCard = document.createElement('div')
    whyCard.className = 'instalar-why-card'
    const whyP = document.createElement('p')
    whyP.className = 'instalar-text'
    whyP.textContent = c.whyText
    whyCard.appendChild(whyP)
    wrap.appendChild(whyCard)

    // Botón nativo solo si el browser lo ofrece
    const deferredPrompt = (window as any).__deferredInstallPrompt
    if (deferredPrompt) {
      const installBtn = document.createElement('button')
      installBtn.className = 'btn-primary instalar-native-btn'
      installBtn.textContent = c.installBtnLabel
      installBtn.type = 'button'
      installBtn.addEventListener('click', async () => {
        deferredPrompt.prompt()
        const { outcome } = await deferredPrompt.userChoice
        if (outcome === 'accepted') {
          ;(window as any).__deferredInstallPrompt = null
          wrap.innerHTML = ''
          const ok = document.createElement('p')
          ok.className = 'instalar-already'
          ok.textContent = c.alreadyInstalled
          ok.setAttribute('role', 'status')
          wrap.appendChild(ok)
        }
      })
      wrap.appendChild(installBtn)
    }

    // Android steps
    const androidSection = createStepsSection(c.androidTitle, c.androidSteps)
    wrap.appendChild(androidSection)

    // iOS steps
    const iosSection = createStepsSection(c.iosTitle, c.iosSteps)
    wrap.appendChild(iosSection)
  }

  container.appendChild(wrap)

  // Estilos
  if (!document.getElementById('instalar-styles')) {
    const style = document.createElement('style')
    style.id = 'instalar-styles'
    style.textContent = `
      .instalar-wrap {
        display: flex;
        flex-direction: column;
        gap: var(--space-lg);
        padding: var(--space-lg) var(--space-md);
        padding-bottom: max(var(--space-xl), env(safe-area-inset-bottom, 0px));
      }
      .instalar-header {
        display: flex;
        flex-direction: column;
        gap: var(--space-sm);
      }
      .instalar-already {
        background: var(--color-menta);
        border-radius: var(--border-radius-sm);
        padding: var(--space-md);
        font-family: var(--font-ui);
        font-size: var(--font-size-base);
        color: var(--color-bosque);
        font-weight: 600;
        text-align: center;
      }
      .instalar-why-card {
        background: var(--color-celeste-agua);
        border-radius: var(--border-radius-sm);
        padding: var(--space-md);
      }
      .instalar-text {
        font-family: var(--font-ui);
        font-size: var(--font-size-sm);
        color: var(--color-tinta);
        line-height: 1.6;
        margin: 0;
      }
      .instalar-native-btn {
        width: 100%;
        min-height: 48px;
      }
      .instalar-section {
        display: flex;
        flex-direction: column;
        gap: var(--space-sm);
      }
      .instalar-section-title {
        font-family: var(--font-pixel);
        font-size: var(--font-size-sm);
        color: var(--color-bosque);
        margin: 0;
      }
      .instalar-steps {
        list-style: none;
        padding: 0;
        margin: 0;
        display: flex;
        flex-direction: column;
        gap: var(--space-sm);
        counter-reset: steps;
      }
      .instalar-step {
        display: flex;
        gap: var(--space-sm);
        align-items: flex-start;
        font-family: var(--font-ui);
        font-size: var(--font-size-sm);
        color: var(--color-tinta);
        line-height: 1.5;
      }
      .instalar-step::before {
        counter-increment: steps;
        content: counter(steps);
        display: flex;
        align-items: center;
        justify-content: center;
        min-width: 24px;
        height: 24px;
        border-radius: 50%;
        background: var(--color-musgo);
        color: var(--color-crema);
        font-size: var(--font-size-xs);
        font-weight: 700;
        flex-shrink: 0;
        margin-top: 2px;
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

function createStepsSection(title: string, steps: readonly string[]): HTMLElement {
  const section = document.createElement('section')
  section.className = 'instalar-section'

  const h2 = document.createElement('h2')
  h2.className = 'instalar-section-title'
  h2.textContent = title
  section.appendChild(h2)

  const ol = document.createElement('ol')
  ol.className = 'instalar-steps'
  steps.forEach((step) => {
    const li = document.createElement('li')
    li.className = 'instalar-step'
    li.textContent = step
    ol.appendChild(li)
  })
  section.appendChild(ol)
  return section
}

