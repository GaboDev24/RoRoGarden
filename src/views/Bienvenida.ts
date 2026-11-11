/**
 * Bienvenida.ts — Pantalla de primera vez (#/bienvenida).
 * Se muestra una única vez al iniciar la app por primera vez.
 * Máximo 3 pasos, saltable en cada uno.
 * Sin preguntas obligatorias.
 */
import { copy } from '../copy'
import { loadGardenState, saveGardenState } from '../storage'

/** Marca si ya se mostró la bienvenida */
const BIENVENIDA_KEY = 'roro_bienvenida_done'

export function hasMostradoBienvenida(): boolean {
  try {
    return localStorage.getItem(BIENVENIDA_KEY) === 'true'
  } catch {
    return false
  }
}

export function marcarBienvenidaMostrada(): void {
  try {
    localStorage.setItem(BIENVENIDA_KEY, 'true')
  } catch {
    // silencio
  }
}

export function renderBienvenida(container: HTMLElement): () => void {
  const c = copy.bienvenida

  let currentStep = 0
  const totalSteps = 3

  // Pedir almacenamiento persistente en silencio (primera vez)
  if (navigator.storage?.persist) {
    navigator.storage.persist().catch(() => {
      // silencio — si falla, continuamos normalmente
    })
  }

  function goToJardin() {
    marcarBienvenidaMostrada()
    window.location.hash = '#/jardin'
  }

  function renderStep() {
    container.innerHTML = ''

    const wrap = document.createElement('div')
    wrap.className = 'bienvenida-wrap'
    wrap.setAttribute('role', 'main')
    wrap.setAttribute('aria-label', `Bienvenida, paso ${currentStep + 1} de ${totalSteps}`)

    // Encabezado con sapo pixel art (SVG inline simple)
    const frogEmoji = document.createElement('div')
    frogEmoji.className = 'bienvenida-frog'
    frogEmoji.setAttribute('aria-hidden', 'true')
    frogEmoji.textContent = '🐸'
    wrap.appendChild(frogEmoji)

    // Indicador de pasos
    const dots = document.createElement('div')
    dots.className = 'bienvenida-dots'
    dots.setAttribute('aria-label', `Paso ${currentStep + 1} de ${totalSteps}`)
    for (let i = 0; i < totalSteps; i++) {
      const dot = document.createElement('span')
      dot.className = `bienvenida-dot${i === currentStep ? ' active' : ''}`
      dots.appendChild(dot)
    }
    wrap.appendChild(dots)

    // Contenido del paso
    const content = document.createElement('div')
    content.className = 'bienvenida-content'

    if (currentStep === 0) {
      // Paso 1: Qué es
      const h1 = document.createElement('h1')
      h1.className = 'bienvenida-title'
      h1.textContent = c.step1Title
      content.appendChild(h1)

      const p = document.createElement('p')
      p.className = 'bienvenida-text'
      p.textContent = c.step1Text
      content.appendChild(p)
    } else if (currentStep === 1) {
      // Paso 2: Privacidad
      const h1 = document.createElement('h1')
      h1.className = 'bienvenida-title'
      h1.textContent = c.step2Title
      content.appendChild(h1)

      const p = document.createElement('p')
      p.className = 'bienvenida-text'
      p.textContent = c.step2Text
      content.appendChild(p)

      const note = document.createElement('p')
      note.className = 'bienvenida-note'
      note.textContent = c.step2Note
      content.appendChild(note)
    } else {
      // Paso 3: Nombre del sapo + no es terapia
      const h1 = document.createElement('h1')
      h1.className = 'bienvenida-title'
      h1.textContent = c.step3Title
      content.appendChild(h1)

      const p = document.createElement('p')
      p.className = 'bienvenida-text'
      p.textContent = c.step3Text
      content.appendChild(p)

      // Campo opcional para nombre del sapo
      const nameGroup = document.createElement('div')
      nameGroup.className = 'bienvenida-name-group'

      const label = document.createElement('label')
      label.className = 'bienvenida-name-label'
      label.htmlFor = 'bienvenida-frog-name'
      label.textContent = c.step3NameLabel
      nameGroup.appendChild(label)

      const input = document.createElement('input')
      input.type = 'text'
      input.id = 'bienvenida-frog-name'
      input.className = 'bienvenida-name-input'
      input.placeholder = c.step3NamePlaceholder
      input.maxLength = 20
      input.setAttribute('autocomplete', 'off')
      nameGroup.appendChild(input)

      content.appendChild(nameGroup)

      const disclaimer = document.createElement('p')
      disclaimer.className = 'bienvenida-disclaimer'
      disclaimer.textContent = c.step3Disclaimer
      content.appendChild(disclaimer)

      // Al avanzar/saltar en el paso 3, guardar el nombre si se escribió
      wrap.dataset.isLastStep = 'true'
      wrap.dataset.inputId = 'bienvenida-frog-name'
    }

    wrap.appendChild(content)

    // Botones
    const btnRow = document.createElement('div')
    btnRow.className = 'bienvenida-btn-row'

    const isLast = currentStep === totalSteps - 1

    const skipBtn = document.createElement('button')
    skipBtn.className = 'btn-ghost bienvenida-skip'
    skipBtn.textContent = isLast ? c.finishBtn : c.skipBtn
    skipBtn.type = 'button'
    skipBtn.addEventListener('click', async () => {
      if (isLast) {
        // Si hay nombre escrito, guardarlo
        const inp = container.querySelector<HTMLInputElement>('#bienvenida-frog-name')
        const name = inp?.value.trim() || ''
        if (name) {
          const state = await loadGardenState()
          state.frogName = name.slice(0, 20)
          state.frogNameAnswered = true
          await saveGardenState(state)
        }
      }
      goToJardin()
    })
    btnRow.appendChild(skipBtn)

    if (!isLast) {
      const nextBtn = document.createElement('button')
      nextBtn.className = 'btn-primary bienvenida-next'
      nextBtn.textContent = c.nextBtn
      nextBtn.type = 'button'
      nextBtn.addEventListener('click', () => {
        currentStep++
        renderStep()
        // Mover foco al título del nuevo paso
        const h1 = container.querySelector<HTMLElement>('.bienvenida-title')
        h1?.focus()
      })
      btnRow.appendChild(nextBtn)
    } else {
      const enterBtn = document.createElement('button')
      enterBtn.className = 'btn-primary bienvenida-next'
      enterBtn.textContent = c.enterBtn
      enterBtn.type = 'button'
      enterBtn.addEventListener('click', async () => {
        const inp = container.querySelector<HTMLInputElement>('#bienvenida-frog-name')
        const name = inp?.value.trim() || ''
        if (name) {
          const state = await loadGardenState()
          state.frogName = name.slice(0, 20)
          state.frogNameAnswered = true
          await saveGardenState(state)
        }
        goToJardin()
      })
      btnRow.appendChild(enterBtn)
    }

    wrap.appendChild(btnRow)
    container.appendChild(wrap)

    // Estilos
    if (!document.getElementById('bienvenida-styles')) {
      const style = document.createElement('style')
      style.id = 'bienvenida-styles'
      style.textContent = `
        .bienvenida-wrap {
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          min-height: 100%;
          padding: var(--space-xl) var(--space-lg);
          gap: var(--space-lg);
          text-align: center;
        }
        .bienvenida-frog {
          font-size: 64px;
          line-height: 1;
          animation: frog-bounce 2s ease-in-out infinite;
        }
        @keyframes frog-bounce {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-8px); }
        }
        @media (prefers-reduced-motion: reduce) {
          .bienvenida-frog { animation: none; }
        }
        .bienvenida-dots {
          display: flex;
          gap: var(--space-sm);
          align-items: center;
        }
        .bienvenida-dot {
          width: 10px;
          height: 10px;
          border-radius: 50%;
          background: var(--color-salvia);
          transition: background 0.2s, transform 0.2s;
        }
        .bienvenida-dot.active {
          background: var(--color-musgo);
          transform: scale(1.3);
        }
        @media (prefers-reduced-motion: reduce) {
          .bienvenida-dot { transition: none; }
        }
        .bienvenida-content {
          display: flex;
          flex-direction: column;
          gap: var(--space-md);
          max-width: 360px;
          width: 100%;
        }
        .bienvenida-title {
          font-family: var(--font-pixel);
          font-size: var(--font-size-md);
          color: var(--color-bosque);
          line-height: 1.6;
          margin: 0;
        }
        .bienvenida-title:focus {
          outline: 2px solid var(--color-musgo);
          outline-offset: 4px;
          border-radius: 4px;
        }
        .bienvenida-text {
          font-family: var(--font-ui);
          font-size: var(--font-size-base);
          color: var(--color-tinta);
          line-height: 1.6;
          margin: 0;
        }
        .bienvenida-note {
          font-family: var(--font-ui);
          font-size: var(--font-size-sm);
          color: var(--color-musgo);
          line-height: 1.5;
          margin: 0;
          padding: var(--space-sm) var(--space-md);
          background: var(--color-menta);
          border-radius: var(--border-radius-sm);
          border-left: 3px solid var(--color-musgo);
        }
        .bienvenida-disclaimer {
          font-family: var(--font-ui);
          font-size: var(--font-size-xs);
          color: var(--color-musgo);
          line-height: 1.5;
          margin: 0;
          padding: var(--space-sm);
          background: var(--color-crema);
          border-radius: var(--border-radius-sm);
        }
        .bienvenida-name-group {
          display: flex;
          flex-direction: column;
          gap: var(--space-xs);
          text-align: left;
        }
        .bienvenida-name-label {
          font-family: var(--font-ui);
          font-size: var(--font-size-sm);
          color: var(--color-tinta);
          font-weight: 600;
        }
        .bienvenida-name-input {
          font-family: var(--font-ui);
          font-size: var(--font-size-base);
          color: var(--color-tinta);
          background: var(--color-crema);
          border: 2px solid var(--color-salvia);
          border-radius: var(--border-radius-sm);
          padding: var(--space-sm) var(--space-md);
          min-height: 48px;
          width: 100%;
          box-sizing: border-box;
          outline: none;
        }
        .bienvenida-name-input:focus {
          border-color: var(--color-musgo);
          box-shadow: 0 0 0 2px var(--color-celeste-agua);
        }
        .bienvenida-btn-row {
          display: flex;
          flex-direction: column;
          gap: var(--space-sm);
          width: 100%;
          max-width: 360px;
        }
        .bienvenida-next {
          width: 100%;
          min-height: 48px;
        }
        .bienvenida-skip {
          width: 100%;
          min-height: 48px;
        }
      `
      document.head.appendChild(style)
    }

    // Actualizar título
    document.title = `RoRoGarden — Bienvenida (${currentStep + 1}/${totalSteps})`

    // Foco al h1
    const h1 = container.querySelector<HTMLElement>('.bienvenida-title')
    if (h1) {
      h1.tabIndex = -1
      setTimeout(() => h1.focus(), 50)
    }
  }

  renderStep()

  return () => {
    // cleanup
  }
}

