import './style.css'
import { renderHome } from './views/Home'
import { renderSpritesLab } from './views/SpritesLab'

/**
 * main.ts — Punto de entrada de RoRoGarden.
 * Maneja el enrutamiento básico: / y /sprites con adaptación para PC y celular.
 */

const app = document.getElementById('app')!
app.className = 'container'

let currentCleanup: (() => void) | null = null

function navigate(path: string): void {
  if (currentCleanup) {
    currentCleanup()
    currentCleanup = null
  }
  app.innerHTML = ''

  if (path === '/sprites') {
    app.classList.add('container-wide')
    currentCleanup = renderSpritesLab(app)
    app.addEventListener('navigate-home', () => navigate('/'), { once: true })
  } else {
    app.classList.remove('container-wide')
    currentCleanup = renderHome(app)

    if (import.meta.env.DEV) {
      const devLink = document.createElement('a')
      devLink.href = '/sprites'
      devLink.textContent = '🔬 Ver sprites (dev)'
      devLink.style.cssText = `
        position: fixed;
        bottom: max(env(safe-area-inset-bottom, 0px), 12px);
        right: 16px;
        font-size: var(--font-size-xs);
        font-family: var(--font-pixel);
        color: var(--color-tinta);
        text-decoration: none;
        z-index: 100;
        padding: var(--space-xs) var(--space-sm);
        background: var(--color-overlay-crema);
        border-radius: var(--border-radius-sm);
        border: 2px solid var(--color-musgo);
        box-shadow: var(--shadow-sm);
        cursor: pointer;
        line-height: 1.6;
      `
      devLink.addEventListener('click', (e) => {
        e.preventDefault()
        navigate('/sprites')
      })
      app.appendChild(devLink)
    }
  }
}

// Enrutamiento inicial
const initialPath = window.location.pathname
navigate(initialPath === '/sprites' ? '/sprites' : '/')

// Navegación con historial del navegador
window.addEventListener('popstate', () => {
  navigate(window.location.pathname === '/sprites' ? '/sprites' : '/')
})
