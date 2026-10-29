import './style.css'
import { renderHome } from './views/Home'
import { renderSpritesLab } from './views/SpritesLab'

/**
 * main.ts — Punto de entrada de RoRoGarden.
 * Maneja el enrutamiento básico: / y /sprites
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
    currentCleanup = renderSpritesLab(app)
    // Escuchar el botón "volver" del lab
    app.addEventListener('navigate-home', () => navigate('/'), { once: true })
  } else {
    currentCleanup = renderHome(app)
    // En la pantalla de inicio el link a /sprites solo en desarrollo
    if (import.meta.env.DEV) {
      const devLink = document.createElement('a')
      devLink.href = '/sprites'
      devLink.textContent = '🔬 Ver sprites (dev)'
      devLink.style.cssText = `
        position: fixed;
        bottom: max(env(safe-area-inset-bottom, 0px), 8px);
        right: 12px;
        font-size: 10px;
        font-family: monospace;
        color: #6FA98A;
        text-decoration: underline;
        z-index: 100;
        padding: 4px 8px;
        background: rgba(246,239,201,0.85);
        border-radius: 4px;
        border: 1px solid #6FA98A;
      `
      devLink.addEventListener('click', (e) => {
        e.preventDefault()
        navigate('/sprites')
      })
      app.appendChild(devLink)
    }
  }
}

// Enrutamiento por URL
const path = window.location.pathname
navigate(path === '/sprites' ? '/sprites' : '/')

// Manejar navegación del historial
window.addEventListener('popstate', () => {
  navigate(window.location.pathname === '/sprites' ? '/sprites' : '/')
})

