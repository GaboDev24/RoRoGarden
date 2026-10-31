import './style.css'
import { renderHome } from './views/Home'
import { renderJardin } from './views/Jardin'
import { renderCheckin } from './views/Checkin'
import { renderDiario } from './views/Diario'
import { renderHistorial } from './views/Historial'
import { renderAjustes } from './views/Ajustes'
import { renderSpritesLab } from './views/SpritesLab'
import { renderPausa } from './views/Pausa'
import { renderDesafio } from './views/Desafio'
import { renderRespirar } from './views/Respirar'
import { createFaIcon } from './icons'

/**
 * main.ts — Enrutador por Hash simple y robusto de RoRoGarden.
 * Sin dependencias pesadas de routing.
 * Rutas soportadas: #/, #/jardin, #/checkin, #/diario, #/historial, #/ajustes, #/sprites
 */

const app = document.getElementById('app')!
app.className = 'container'

let currentCleanup: (() => void) | null = null

function getRoute(): string {
  // Soporta tanto hash como pathname para /sprites en desarrollo
  if (window.location.pathname === '/sprites') {
    return '#/sprites'
  }
  const hash = window.location.hash || '#/'
  return hash.split('?')[0]
}

function navigate(): void {
  const route = getRoute()

  if (currentCleanup) {
    currentCleanup()
    currentCleanup = null
  }
  app.innerHTML = ''

  if (route === '#/sprites') {
    app.classList.add('container-wide')
    currentCleanup = renderSpritesLab(app)
    app.addEventListener('navigate-home', () => {
      window.location.hash = '#/'
    }, { once: true })
    return
  }

  app.classList.remove('container-wide')

  if (route.startsWith('#/desafio')) {
    const parts = route.split('/')
    const challengeId = parts[2] || ''
    currentCleanup = renderDesafio(app, challengeId)
  } else {
    switch (route) {
      case '#/jardin':
        currentCleanup = renderJardin(app)
        break
      case '#/pausa':
        currentCleanup = renderPausa(app)
        break
      case '#/respirar':
        currentCleanup = renderRespirar(app)
        break
      case '#/checkin':
        currentCleanup = renderCheckin(app)
        break
      case '#/diario':
        currentCleanup = renderDiario(app)
        break
      case '#/historial':
        currentCleanup = renderHistorial(app)
        break
      case '#/ajustes':
        currentCleanup = renderAjustes(app)
        break
      case '#/':
      default:
        currentCleanup = renderHome(app)
        break
    }
  }

  // Link discreto a /sprites en modo desarrollo
  if (import.meta.env.DEV && route !== '#/sprites') {
    const devLink = document.createElement('a')
    devLink.href = '#/sprites'
    devLink.appendChild(createFaIcon('flask', { size: 12 }))
    devLink.appendChild(document.createTextNode(' Sprites (dev)'))
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
      window.location.hash = '#/sprites'
    })
    app.appendChild(devLink)
  }
}

// Escuchar cambios de hash y navegación atrás/adelante del historial
window.addEventListener('hashchange', navigate)
window.addEventListener('popstate', navigate)

// Inicializar ruta
navigate()
