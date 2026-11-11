/**
 * Error.ts — Pantalla de error amable.
 * Se muestra ante errores no capturados.
 * Nunca pantalla en blanco. No envía datos a ningún lado.
 */
import { copy } from '../copy'

export function renderError(container: HTMLElement): void {
  const c = copy.error
  container.innerHTML = ''
  document.title = 'RoRoGarden — Algo no salió bien'

  const wrap = document.createElement('div')
  wrap.className = 'error-wrap'
  wrap.setAttribute('role', 'main')

  const frog = document.createElement('div')
  frog.className = 'error-frog'
  frog.setAttribute('aria-hidden', 'true')
  frog.textContent = '🐸'
  wrap.appendChild(frog)

  const h1 = document.createElement('h1')
  h1.className = 'error-title'
  h1.textContent = c.title
  wrap.appendChild(h1)

  const p = document.createElement('p')
  p.className = 'error-text'
  p.textContent = c.text
  wrap.appendChild(p)

  const btnRow = document.createElement('div')
  btnRow.className = 'error-btn-row'

  const gardenBtn = document.createElement('button')
  gardenBtn.className = 'btn-primary'
  gardenBtn.type = 'button'
  gardenBtn.textContent = c.gardenBtn
  gardenBtn.addEventListener('click', () => {
    window.location.hash = '#/jardin'
  })
  btnRow.appendChild(gardenBtn)

  const reloadBtn = document.createElement('button')
  reloadBtn.className = 'btn-ghost'
  reloadBtn.type = 'button'
  reloadBtn.textContent = c.reloadBtn
  reloadBtn.addEventListener('click', () => {
    window.location.reload()
  })
  btnRow.appendChild(reloadBtn)

  wrap.appendChild(btnRow)
  container.appendChild(wrap)

  // Estilos
  if (!document.getElementById('error-styles')) {
    const style = document.createElement('style')
    style.id = 'error-styles'
    style.textContent = `
      .error-wrap {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        min-height: 100%;
        padding: var(--space-xl) var(--space-lg);
        gap: var(--space-lg);
        text-align: center;
      }
      .error-frog {
        font-size: 56px;
        line-height: 1;
      }
      .error-title {
        font-family: var(--font-pixel);
        font-size: var(--font-size-md);
        color: var(--color-bosque);
        line-height: 1.6;
        margin: 0;
      }
      .error-text {
        font-family: var(--font-ui);
        font-size: var(--font-size-base);
        color: var(--color-tinta);
        line-height: 1.6;
        margin: 0;
        max-width: 320px;
      }
      .error-btn-row {
        display: flex;
        flex-direction: column;
        gap: var(--space-sm);
        width: 100%;
        max-width: 300px;
      }
      .error-btn-row .btn-primary,
      .error-btn-row .btn-ghost {
        min-height: 48px;
        width: 100%;
      }
    `
    document.head.appendChild(style)
  }

  // Foco al h1
  h1.tabIndex = -1
  setTimeout(() => h1.focus(), 50)
}

