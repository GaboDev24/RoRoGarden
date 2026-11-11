import './style.css'
import { renderHome } from './views/Home'
import { renderJardin } from './views/Jardin'
import { renderCheckin } from './views/Checkin'
import { renderDiario } from './views/Diario'
import { renderHistorial } from './views/Historial'
import { renderAjustes } from './views/Ajustes'
import { renderPausa } from './views/Pausa'
import { renderDesafio } from './views/Desafio'
import { renderRespirar } from './views/Respirar'
import { renderMiColeccion } from './views/MiColeccion'
import { renderSemana } from './views/Semana'
import { renderRecordatorios } from './views/Recordatorios'
import { renderAyuda } from './views/Ayuda'
import { renderBienvenida, hasMostradoBienvenida } from './views/Bienvenida'
import { renderAcerca } from './views/Acerca'
import { renderInstalar } from './views/Instalar'
import { renderError } from './views/Error'
import { copy } from './copy'

/**
 * main.ts — Enrutador por Hash de RoRoGarden.
 * Rutas soportadas: #/, #/jardin, #/micoleccion, #/checkin, #/diario,
 * #/historial, #/ajustes, #/pausa, #/respirar, #/desafio/:id,
 * #/semana, #/recordatorios, #/ayuda, #/bienvenida, #/acerca, #/instalar
 */

const app = document.getElementById('app')!
app.className = 'container'

let currentCleanup: (() => void) | null = null

// Capturar el evento beforeinstallprompt para usarlo en #/instalar
window.addEventListener('beforeinstallprompt', (e) => {
  e.preventDefault()
  ;(window as any).__deferredInstallPrompt = e
})

// Captura global de errores — nunca pantalla en blanco
window.addEventListener('error', (e) => {
  console.error('[RoRoGarden] Error no capturado:', e.error)
  showErrorScreen()
})
window.addEventListener('unhandledrejection', (e) => {
  console.error('[RoRoGarden] Promesa rechazada sin manejar:', e.reason)
  showErrorScreen()
})

function showErrorScreen() {
  if (currentCleanup) {
    try { currentCleanup() } catch { /* silencio */ }
    currentCleanup = null
  }
  app.classList.remove('container-wide')
  app.innerHTML = ''
  renderError(app)
}

function getRoute(): string {
  const hash = window.location.hash || '#/'
  return hash.split('?')[0]
}

function moveFocusToMain() {
  // Mover foco al encabezado principal al cambiar de ruta
  requestAnimationFrame(() => {
    const h1 = app.querySelector<HTMLElement>('h1, [role="main"] h1, .section-title')
    if (h1) {
      if (!h1.tabIndex || h1.tabIndex < 0) h1.tabIndex = -1
      h1.focus({ preventScroll: false })
    }
  })
}

function navigate(): void {
  const route = getRoute()

  if (currentCleanup) {
    try { currentCleanup() } catch { /* silencio */ }
    currentCleanup = null
  }
  app.innerHTML = ''
  app.classList.remove('container-wide')

  // Redirigir a bienvenida si es la primera vez (solo en la raíz)
  if ((route === '#/' || route === '') && !hasMostradoBienvenida()) {
    window.location.replace('#/bienvenida')
    return
  }

  try {
    if (route.startsWith('#/desafio')) {
      const parts = route.split('/')
      const challengeId = parts[2] || ''
      currentCleanup = renderDesafio(app, challengeId)
    } else {
      switch (route) {
        case '#/bienvenida':
          currentCleanup = renderBienvenida(app)
          break
        case '#/jardin':
          currentCleanup = renderJardin(app)
          break
        case '#/micoleccion':
          currentCleanup = renderMiColeccion(app)
          break
        case '#/semana':
          currentCleanup = renderSemana(app)
          break
        case '#/recordatorios':
          currentCleanup = renderRecordatorios(app)
          break
        case '#/ayuda':
          currentCleanup = renderAyuda(app)
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
        case '#/acerca':
          currentCleanup = renderAcerca(app)
          break
        case '#/instalar':
          currentCleanup = renderInstalar(app)
          break
        case '#/':
          currentCleanup = renderHome(app)
          break
        default:
          // Ruta desconocida → jardín
          window.location.replace('#/jardin')
          return
      }
    }
  } catch (err) {
    console.error('[RoRoGarden] Error renderizando ruta:', route, err)
    showErrorScreen()
    return
  }

  // Link de desarrollo (SpritesLab) — solo en modo DEV
  if (import.meta.env.DEV) {
    const devLink = document.createElement('a')
    devLink.href = '#/sprites-disabled'
    devLink.textContent = '🧪 Sprites (dev)'
    devLink.style.cssText = `
      position: fixed;
      bottom: max(env(safe-area-inset-bottom, 0px), 12px);
      right: 16px;
      font-size: 11px;
      font-family: var(--font-ui);
      color: var(--color-tinta);
      text-decoration: none;
      z-index: 100;
      padding: 4px 8px;
      background: var(--color-crema);
      border-radius: 4px;
      border: 2px solid var(--color-musgo);
      opacity: 0.7;
    `
    app.appendChild(devLink)
  }

  moveFocusToMain()
}

// También mostrar aviso suave de actualización del service worker
// (el SW registrado por vite-plugin-pwa dispara este evento)
if ('serviceWorker' in navigator) {
  navigator.serviceWorker.addEventListener('controllerchange', () => {
    // El SW tomó el control → hay actualización disponible
    // No recargar automáticamente; mostrar tarjeta suave en el jardín
    // (Ver Jardin.ts que escucha el evento 'swUpdated')
    document.dispatchEvent(new CustomEvent('swUpdated'))
  })
}

// Escuchar cambios de hash y navegación del historial
window.addEventListener('hashchange', navigate)
window.addEventListener('popstate', navigate)

// Inicializar ruta
navigate()

// Avisar si el storage está lleno al intentar guardar
window.addEventListener('storage', () => { /* noop */ })
document.addEventListener('storageQuotaExceeded', () => {
  const c = copy.storageFullWarning
  const banner = document.createElement('div')
  banner.setAttribute('role', 'alert')
  banner.style.cssText = `
    position: fixed; bottom: 0; left: 0; right: 0;
    background: var(--color-acento);
    color: var(--color-tinta);
    font-family: var(--font-ui);
    font-size: 14px;
    padding: 12px 16px;
    text-align: center;
    z-index: 999;
  `
  banner.textContent = c
  document.body.appendChild(banner)
  setTimeout(() => banner.remove(), 8000)
})
