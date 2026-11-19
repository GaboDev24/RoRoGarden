import { palette } from '../palette/colors'
import { copy } from '../copy'
import { createFaIcon } from '../icons'
import { checkInAppReminder } from '../reminders'
import { shouldShowSupportNotice } from '../support'
import {
  frogIdle,
  lilypad,
  moonCrescent,
  MOOD_SPRITES,
} from '../sprites/definitions'
import {
  createSpriteInstance,
  createPixelCanvas,
  drawSprite,
  tickSprite,
} from '../sprites/renderer'
import {
  loadGardenState,
  saveGardenState,
  getLocalDateString,
  listEntries,
} from '../storage'
import type { MoodType, GardenState } from '../storage/types'
import { getWorldState } from '../world'
import { CATALOG_ITEMS_BY_ID, CATALOG_ITEMS, type CatalogItem } from '../catalog'
import { tryGiveGift } from '../gifts'
import {
  getCellTerrain,
  isTerrainCompatible,
  placeItem,
  removeItem,
  GARDEN_GRID_COLS,
  GARDEN_GRID_ROWS,
} from '../placement'
import { playChime } from '../audio'

/**
 * Vista #/jardin — El escenario vivo y personal de RoRoGarden (Etapa 4).
 *
 * Características:
 * - Ciclo día/noche y estaciones automáticas vía WorldState.
 * - Sapo protagonista en el nenúfar central que refleja el último estado de ánimo.
 * - Nombre personalizable del sapo (una sola vez, sin insistir).
 * - Grilla de 5x5 con decoraciones y visitantes colocados.
 * - Modo "Acomodar" accesible para colocar y mover objetos.
 * - Entrega de regalo diario (1 por día al registrar bienestar).
 * - Animación optimizada a 30 FPS con pausa en pestaña oculta y respeto a prefers-reduced-motion.
 */
export function renderJardin(container: HTMLElement): () => void {
  container.innerHTML = ''

  let gardenState: GardenState = loadGardenState()
  const today = getLocalDateString()

  // Determinar si venimos directamente al modo acomodar vía query param
  const isAcomodarInitial = window.location.hash.includes('modo=acomodar')
  let isAcomodarMode = isAcomodarInitial

  // Item preseleccionado si viene en la URL
  let selectedCatalogItemId: string | null = null
  if (isAcomodarMode) {
    const match = window.location.hash.match(/item=([^&]+)/)
    if (match && match[1]) {
      selectedCatalogItemId = match[1]
    }
  }

  // Obtener último mood de checkin/diario
  let lastMood: MoodType = 'tranquila'
  const entriesRes = listEntries()
  if (entriesRes.success && entriesRes.data && entriesRes.data.length > 0) {
    for (const ent of entriesRes.data) {
      if ((ent.type === 'checkin' || ent.type === 'diario') && 'mood' in ent.data && ent.data.mood) {
        lastMood = ent.data.mood
        break
      }
    }
  }

  // Comprobar si hubo actividad hoy para intentar regalo diario
  const hasActivityToday = entriesRes.success && entriesRes.data
    ? entriesRes.data.some((e) => e.date === today)
    : false

  let pendingGift: CatalogItem | null = null
  if (hasActivityToday && gardenState.lastGiftDate !== today) {
    const giftRes = tryGiveGift(
      {
        obtainedIds: gardenState.obtainedItemIds,
        lastGiftDate: gardenState.lastGiftDate,
      },
      today,
      CATALOG_ITEMS
    )
    if (giftRes.gift) {
      pendingGift = giftRes.gift
    }
  }

  // Estado del mundo (hora, estación, paleta)
  const world = getWorldState(new Date(), gardenState.hemisphere)

  const section = document.createElement('section')
  section.className = 'jardin-screen'
  section.setAttribute('role', 'main')
  section.setAttribute('aria-label', copy.jardin.title)

  const style = document.createElement('style')
  style.textContent = `
    .jardin-screen {
      flex: 1;
      width: 100%;
      height: 100%;
      box-sizing: border-box;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: space-between;
      padding: var(--space-sm) var(--space-md) var(--space-md);
      background: linear-gradient(
        180deg,
        ${world.skyColors.top} 0%,
        ${world.skyColors.bottom} 55%,
        ${world.foliageColor} 100%
      );
      overflow-y: auto;
      position: relative;
    }

    .jardin-nav {
      width: 100%;
      display: flex;
      flex-wrap: nowrap;
      align-items: center;
      justify-content: space-between;
      gap: 4px;
      z-index: 10;
    }

    .nav-btn {
      font-family: var(--font-ui);
      font-size: 11px;
      font-weight: 600;
      color: var(--color-tinta);
      background-color: var(--color-menta);
      border: 1.5px solid var(--color-bosque);
      border-radius: var(--border-radius-sm);
      padding: 6px 4px;
      min-height: 40px;
      cursor: pointer;
      line-height: 1.2;
      white-space: nowrap;
      text-align: center;
      box-sizing: border-box;
      transition: transform var(--transition-fast), opacity var(--transition-fast);
      display: inline-flex;
      align-items: center;
      justify-content: center;
      gap: 4px;
      flex: 1 1 0;
      min-width: 0;
    }

    .nav-btn.nav-btn-icon {
      flex: 0 0 40px;
      min-width: 40px;
      max-width: 40px;
      padding: 0;
    }

    .nav-btn:hover {
      opacity: 0.9;
      transform: translateY(-1px);
    }

    .nav-btn:focus-visible {
      outline: 3px solid var(--color-acento);
      outline-offset: 3px;
    }

    .nav-btn.active {
      background-color: var(--color-bosque);
      color: var(--color-crema);
      border-color: var(--color-tinta);
    }

    .jardin-header {
      text-align: center;
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 2px;
      margin: var(--space-xs) 0;
    }

    .jardin-title {
      font-family: var(--font-pixel);
      font-size: 0.75rem;
      color: var(--color-bosque);
      line-height: 1.6;
      margin: 0;
    }

    .frog-name-badge {
      font-family: var(--font-pixel);
      font-size: 0.5625rem;
      color: var(--color-tinta);
      background-color: var(--color-overlay-crema);
      padding: 2px 8px;
      border-radius: var(--border-radius-sm);
      border: 1px solid var(--color-bosque);
      margin-top: 2px;
    }

    .jardin-world-hint {
      font-family: var(--font-ui);
      font-size: var(--font-size-xs);
      color: var(--color-tinta);
      margin: 0;
      opacity: 0.85;
    }

    .stage-wrapper {
      position: relative;
      width: 100%;
      max-width: 320px;
      display: flex;
      flex-direction: column;
      align-items: center;
      margin: var(--space-xs) 0;
    }

    .canvas-container {
      position: relative;
      width: 280px;
      height: 220px;
      background: transparent;
      border: 3px solid var(--color-tinta);
      border-radius: var(--border-radius-lg);
      overflow: hidden;
      box-shadow: var(--shadow-sm);
      cursor: pointer;
    }

    .stage-canvas {
      width: 100%;
      height: 100%;
      image-rendering: pixelated;
      display: block;
    }

    .frog-speech-bubble {
      position: absolute;
      top: 22%;
      left: 50%;
      transform: translate(-50%, -50%);
      background-color: var(--color-crema);
      border: 2px solid var(--color-tinta);
      border-radius: var(--border-radius-sm);
      padding: 6px 14px;
      font-family: var(--font-ui);
      font-size: var(--font-size-sm);
      font-weight: 600;
      color: var(--color-tinta);
      box-shadow: 0 4px 14px rgba(43, 58, 66, 0.28);
      pointer-events: auto;
      cursor: pointer;
      z-index: 30;
      white-space: nowrap;
      text-align: center;
      animation: floatSpeech 4s ease-out forwards;
      user-select: none;
    }

    .frog-speech-bubble::after {
      content: '';
      position: absolute;
      bottom: -7px;
      left: 50%;
      transform: translateX(-50%);
      border-width: 7px 6px 0 6px;
      border-style: solid;
      border-color: var(--color-tinta) transparent transparent transparent;
    }

    @keyframes floatSpeech {
      0% { opacity: 0; transform: translate(-50%, -35%) scale(0.9); }
      8% { opacity: 1; transform: translate(-50%, -50%) scale(1); }
      85% { opacity: 1; transform: translate(-50%, -50%) scale(1); }
      100% { opacity: 0; transform: translate(-50%, -58%) scale(0.95); }
    }

    @media (prefers-reduced-motion: reduce) {
      .frog-speech-bubble {
        animation: none;
        opacity: 1;
        transform: translate(-50%, -50%);
      }
    }

    /* Grilla de colocación (Modo Acomodar) */
    .decor-grid-overlay {
      position: absolute;
      inset: 0;
      display: grid;
      grid-template-columns: repeat(5, 1fr);
      grid-template-rows: repeat(5, 1fr);
      gap: 0;
      padding: 0;
      box-sizing: border-box;
      background-color: rgba(43, 58, 66, 0.35);
      z-index: 15;
    }

    .grid-cell-btn {
      background-color: rgba(246, 239, 201, 0.15);
      border: 1px dashed rgba(246, 239, 201, 0.45);
      border-radius: 0;
      cursor: pointer;
      display: flex;
      align-items: center;
      justify-content: center;
      padding: 0;
      box-sizing: border-box;
      position: relative;
      transition: background-color var(--transition-fast), border-color var(--transition-fast);
      width: 100%;
      height: 100%;
    }

    .grid-cell-btn:hover, .grid-cell-btn:focus-visible {
      background-color: rgba(246, 239, 201, 0.5);
      outline: 2px solid var(--color-acento);
      outline-offset: -2px;
    }

    .grid-cell-btn.cell-compatible {
      background-color: rgba(142, 209, 207, 0.4);
      border: 2px dashed var(--color-menta);
      animation: pulseCell 2s infinite ease-in-out;
    }

    .grid-cell-btn.cell-incompatible {
      opacity: 0.25;
      cursor: not-allowed;
    }

    @keyframes pulseCell {
      0%, 100% { background-color: rgba(142, 209, 207, 0.3); }
      50% { background-color: rgba(142, 209, 207, 0.6); }
    }

    .grid-cell-btn.center-frog {
      background-color: rgba(63, 111, 94, 0.45);
      border: 1px solid var(--color-bosque);
      cursor: default;
    }

    .cell-placed-badge {
      font-size: 11px;
      font-weight: 700;
      color: var(--color-crema);
      background: var(--color-bosque);
      border-radius: 50%;
      width: 18px;
      height: 18px;
      display: flex;
      align-items: center;
      justify-content: center;
      box-shadow: 0 1px 3px rgba(0,0,0,0.3);
    }

    .acomodar-panel {
      width: 100%;
      background-color: var(--color-crema);
      border: 2px solid var(--color-tinta);
      border-radius: var(--border-radius-md);
      padding: var(--space-xs) var(--space-sm);
      margin-top: var(--space-xs);
      display: flex;
      flex-direction: column;
      gap: var(--space-xs);
    }

    .acomodar-items-row {
      display: flex;
      gap: var(--space-xs);
      overflow-x: auto;
      padding: 4px 2px;
    }

    .acomodar-item-thumb {
      width: 44px;
      height: 44px;
      background-color: var(--color-salvia);
      border: 2px solid var(--color-bosque);
      border-radius: var(--border-radius-sm);
      display: flex;
      align-items: center;
      justify-content: center;
      cursor: pointer;
      flex-shrink: 0;
      transition: transform var(--transition-fast);
      padding: 0;
    }

    .acomodar-item-thumb.selected {
      border: 3px solid var(--color-acento);
      transform: translateY(-2px);
    }

    .jardin-actions {
      width: 100%;
      max-width: 270px;
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 6px;
      margin-top: var(--space-xs);
      box-sizing: border-box;
      transition: align-self var(--transition-fast), transform var(--transition-fast);
    }

    .jardin-actions.hand-right {
      align-self: flex-end;
      margin-right: 0;
    }

    .jardin-actions.hand-left {
      align-self: flex-start;
      margin-left: 0;
    }

    .jardin-actions.hand-center {
      align-self: center;
      margin-left: auto;
      margin-right: auto;
    }

    .action-btn {
      font-family: var(--font-ui);
      font-size: var(--font-size-sm);
      font-weight: 600;
      color: var(--color-crema);
      background-color: var(--color-bosque);
      border: 2px solid var(--color-tinta);
      border-radius: var(--border-radius-md);
      padding: var(--space-xs) var(--space-xs);
      min-height: var(--touch-target-min);
      cursor: pointer;
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 6px;
      text-align: center;
      line-height: 1.25;
      white-space: normal;
      overflow-wrap: break-word;
      word-break: break-word;
      box-sizing: border-box;
      transition: transform var(--transition-fast), opacity var(--transition-fast);
    }

    .action-btn.secondary {
      background-color: var(--color-musgo);
    }

    .action-btn.tertiary {
      background-color: var(--color-salvia);
      color: var(--color-tinta);
      border-color: var(--color-bosque);
    }

    .action-btn:hover {
      opacity: 0.92;
      transform: translateY(-1px);
    }

    .action-btn:focus-visible {
      outline: 3px solid var(--color-acento);
      outline-offset: 3px;
    }

    /* Modal de Regalo y de Nombre */
    .modal-overlay {
      position: absolute;
      inset: 0;
      background-color: rgba(43, 58, 66, 0.65);
      display: flex;
      align-items: center;
      justify-content: center;
      padding: var(--space-md);
      z-index: 50;
      backdrop-filter: blur(2px);
    }

    .modal-card {
      background-color: var(--color-crema);
      border: 3px solid var(--color-tinta);
      border-radius: var(--border-radius-lg);
      padding: var(--space-md);
      max-width: 320px;
      width: 100%;
      box-sizing: border-box;
      display: flex;
      flex-direction: column;
      align-items: center;
      text-align: center;
      gap: var(--space-sm);
      box-shadow: var(--shadow-desktop-frame);
    }

    .modal-title {
      font-family: var(--font-pixel);
      font-size: 0.6875rem;
      color: var(--color-bosque);
      margin: 0;
      line-height: 1.6;
    }

    .modal-desc {
      font-family: var(--font-ui);
      font-size: var(--font-size-sm);
      color: var(--color-tinta);
      line-height: 1.4;
      margin: 0;
    }

    .name-input {
      font-family: var(--font-ui);
      font-size: var(--font-size-md);
      padding: var(--space-sm);
      border: 2px solid var(--color-bosque);
      border-radius: var(--border-radius-sm);
      width: 100%;
      box-sizing: border-box;
      text-align: center;
      background-color: var(--color-menta);
      color: var(--color-tinta);
    }

    .name-input:focus {
      outline: 3px solid var(--color-acento);
    }

    .reminder-inapp-banner {
      width: 100%;
      max-width: 320px;
      background-color: var(--color-crema);
      border: 2px solid var(--color-bosque);
      border-radius: var(--border-radius-md);
      padding: var(--space-xs) var(--space-sm);
      display: flex;
      align-items: center;
      justify-content: space-between;
      gap: var(--space-xs);
      box-shadow: var(--shadow-sm);
      margin-top: 4px;
    }

    .reminder-banner-text {
      font-family: var(--font-ui);
      font-size: var(--font-size-xs);
      color: var(--color-tinta);
      margin: 0;
      line-height: 1.35;
    }

    .reminder-banner-btn {
      font-family: var(--font-ui);
      font-size: var(--font-size-xs);
      font-weight: 600;
      background-color: var(--color-salvia);
      color: var(--color-tinta);
      border: 1px solid var(--color-bosque);
      border-radius: var(--border-radius-sm);
      padding: 6px 10px;
      cursor: pointer;
      flex-shrink: 0;
      min-height: 36px;
      box-sizing: border-box;
    }

    .support-card-section {
      width: 100%;
      max-width: 320px;
      background-color: var(--color-crema);
      border: 2px solid var(--color-salvia);
      border-radius: var(--border-radius-md);
      padding: var(--space-sm) var(--space-md);
      display: flex;
      flex-direction: column;
      gap: var(--space-xs);
      margin-top: var(--space-xs);
      box-shadow: var(--shadow-sm);
    }

    .support-card-title {
      font-family: var(--font-pixel);
      font-size: 0.625rem;
      color: var(--color-bosque);
      margin: 0;
    }

    .support-card-msg {
      font-family: var(--font-ui);
      font-size: var(--font-size-xs);
      color: var(--color-tinta);
      line-height: 1.45;
      margin: 0;
    }

    .support-actions-row {
      display: flex;
      gap: var(--space-xs);
      margin-top: 4px;
    }

    .support-action-btn {
      flex: 1;
      font-family: var(--font-ui);
      font-size: var(--font-size-xs);
      font-weight: 600;
      padding: var(--space-xs);
      border-radius: var(--border-radius-sm);
      text-align: center;
      cursor: pointer;
      text-decoration: none;
      display: inline-flex;
      align-items: center;
      justify-content: center;
      min-height: 38px;
    }

    .support-action-btn.primary {
      background-color: var(--color-salvia);
      color: var(--color-tinta);
      border: 1px solid var(--color-bosque);
    }

    .support-action-btn.secondary {
      background-color: transparent;
      color: var(--color-tinta);
      border: 1px solid var(--color-agua-profunda);
    }

    .support-never-link {
      align-self: center;
      font-family: var(--font-ui);
      font-size: 11px;
      color: var(--color-agua-profunda);
      background: none;
      border: none;
      cursor: pointer;
      text-decoration: underline;
      padding: 4px;
    }

    /* Adaptación a PC / Pantallas de escritorio */
    @media (min-width: 601px) {
      .jardin-nav {
        max-width: 560px;
      }

      .stage-wrapper {
        max-width: 560px;
      }

      .canvas-container {
        width: 560px;
        height: 440px;
        border-width: 4px;
        border-radius: var(--border-radius-frame);
        box-shadow: var(--shadow-desktop-frame);
      }

      .frog-speech-bubble {
        font-size: var(--font-size-md);
        padding: 8px 18px;
      }

      .jardin-actions {
        max-width: 480px;
        align-self: center !important;
        margin-left: auto !important;
        margin-right: auto !important;
        gap: 10px;
      }

      .action-btn {
        font-size: var(--font-size-md);
        padding: 10px 14px;
      }

      .reminder-inapp-banner,
      .support-card-section {
        max-width: 560px;
      }
    }
  `
  document.head.appendChild(style)

  // ── 1. Barra de Navegación ──
  const nav = document.createElement('nav')
  nav.className = 'jardin-nav'
  nav.setAttribute('aria-label', 'Navegación del jardín')

  const backBtn = document.createElement('button')
  backBtn.className = 'nav-btn'
  backBtn.textContent = copy.app.back
  backBtn.setAttribute('aria-label', 'Volver al inicio')
  backBtn.addEventListener('click', () => {
    window.location.hash = '#/'
  })

  const coleccionBtn = document.createElement('button')
  coleccionBtn.className = 'nav-btn'
  coleccionBtn.appendChild(createFaIcon('heart', { size: 12 }))
  coleccionBtn.appendChild(document.createTextNode(copy.jardin.coleccionBtn))
  coleccionBtn.setAttribute('aria-label', 'Ver mi colección')
  coleccionBtn.addEventListener('click', () => {
    window.location.hash = '#/micoleccion'
  })

  const acomodarTopBtn = document.createElement('button')
  acomodarTopBtn.className = `nav-btn ${isAcomodarMode ? 'active' : ''}`
  acomodarTopBtn.appendChild(createFaIcon('rotate', { size: 12 }))
  acomodarTopBtn.appendChild(document.createTextNode(copy.jardin.decorarBtn))
  acomodarTopBtn.setAttribute('aria-label', 'Acomodar elementos')
  acomodarTopBtn.addEventListener('click', () => {
    isAcomodarMode = !isAcomodarMode
    updateAcomodarUI()
  })

  const settingsBtn = document.createElement('button')
  settingsBtn.className = 'nav-btn nav-btn-icon'
  settingsBtn.appendChild(createFaIcon('gear', { size: 14 }))
  settingsBtn.setAttribute('aria-label', 'Ajustes')
  settingsBtn.addEventListener('click', () => {
    window.location.hash = '#/ajustes'
  })

  nav.appendChild(backBtn)
  nav.appendChild(coleccionBtn)
  nav.appendChild(acomodarTopBtn)

  if (gardenState.showWeekInGarden !== false) {
    const semanaBtn = document.createElement('button')
    semanaBtn.className = 'nav-btn'
    semanaBtn.appendChild(createFaIcon('bookOpen', { size: 12 }))
    semanaBtn.appendChild(document.createTextNode(copy.jardin.semanaBtn))
    semanaBtn.setAttribute('aria-label', 'Ver resumen de mi semana')
    semanaBtn.addEventListener('click', () => {
      window.location.hash = '#/semana'
    })
    nav.appendChild(semanaBtn)
  }

  nav.appendChild(settingsBtn)

  // ── 2. Cabecera ──
  const header = document.createElement('header')
  header.className = 'jardin-header'

  const title = document.createElement('h1')
  title.className = 'jardin-title'
  title.textContent = copy.jardin.title

  header.appendChild(title)

  if (gardenState.frogName) {
    const nameBadge = document.createElement('span')
    nameBadge.className = 'frog-name-badge'
    nameBadge.textContent = `Sapo: ${gardenState.frogName}`
    header.appendChild(nameBadge)
  }

  const worldHint = document.createElement('p')
  worldHint.className = 'jardin-world-hint'
  worldHint.textContent = world.label
  header.appendChild(worldHint)

  // ── 3. Escenario Canvas del Jardín ──
  const stageWrapper = document.createElement('div')
  stageWrapper.className = 'stage-wrapper'

  const canvasContainer = document.createElement('div')
  canvasContainer.className = 'canvas-container'

  // Canvas lógico de 140x110 (28x22 celdas de 5px cada pixel)
  const SCENE_W = 140
  const SCENE_H = 110
  const { canvas, ctx } = createPixelCanvas(SCENE_W * 2, SCENE_H * 2)
  canvas.className = 'stage-canvas'
  canvasContainer.appendChild(canvas)

  // Mensaje flotante al tocar al sapo
  let speechEl: HTMLElement | null = null
  let speechTimer: any = null
  let frogHopOffset = 0
  let frogHopTimer: any = null
  let lastFrogTapTime = 0

  const triggerFrogTap = () => {
    const now = performance.now()
    if (now - lastFrogTapTime < 250) return
    lastFrogTapTime = now

    playChime()
    // Animación de salto chiquito
    frogHopOffset = -10
    if (frogHopTimer) clearTimeout(frogHopTimer)
    frogHopTimer = setTimeout(() => {
      frogHopOffset = 0
    }, 280)

    // Limpiar temporizador previo para evitar que se borre antes de tiempo
    if (speechTimer) {
      clearTimeout(speechTimer)
      speechTimer = null
    }
    if (speechEl) {
      speechEl.remove()
      speechEl = null
    }

    // Mostrar frase corta y mantenerla 4 segundos completos
    const phrase = copy.jardin.frogTap[Math.floor(Math.random() * copy.jardin.frogTap.length)]
    speechEl = document.createElement('div')
    speechEl.className = 'frog-speech-bubble'
    speechEl.textContent = phrase
    speechEl.title = 'Tocá para cerrar'

    // Permitir cerrarlo tocando el cartel
    speechEl.addEventListener('click', (e) => {
      e.stopPropagation()
      if (speechTimer) {
        clearTimeout(speechTimer)
        speechTimer = null
      }
      speechEl?.remove()
      speechEl = null
    })

    canvasContainer.appendChild(speechEl)

    speechTimer = setTimeout(() => {
      speechEl?.remove()
      speechEl = null
      speechTimer = null
    }, 4000)
  }

  canvasContainer.addEventListener('click', (e) => {
    if (isAcomodarMode) return
    // Tocar el área central (sapo sentado en el nenúfar)
    const rect = canvasContainer.getBoundingClientRect()
    const clickX = e.clientX - rect.left
    const clickY = e.clientY - rect.top
    const scaleX = (SCENE_W * 2) / rect.width
    const scaleY = (SCENE_H * 2) / rect.height
    const canvasClickX = clickX * scaleX
    const canvasClickY = clickY * scaleY

    const frogCenterX = 136
    const frogCenterY = 124
    if (Math.hypot(canvasClickX - frogCenterX, canvasClickY - frogCenterY) < 55) {
      triggerFrogTap()
    }
  })

  // Instancias de sprites
  const frogSpriteDef = MOOD_SPRITES[lastMood] ?? frogIdle
  const instFrog = createSpriteInstance(frogSpriteDef)
  const instPad = createSpriteInstance(lilypad)
  const instMoon = createSpriteInstance(moonCrescent)

  // Cache de instancias de decoraciones colocadas
  const decorationInstances = new Map<string, any>()
  const syncDecorationInstances = () => {
    decorationInstances.clear()
    for (const dec of gardenState.placedDecorations) {
      const item = CATALOG_ITEMS_BY_ID.get(dec.catalogId)
      if (item) {
        decorationInstances.set(dec.id, createSpriteInstance(item.sprite))
      }
    }
  }
  syncDecorationInstances()

  // Loop de dibujo y animación a ~30 fps
  let animFrameId: number | null = null
  let lastFrameTime = 0
  const FPS_INTERVAL = 1000 / 30
  let isTabVisible = true

  const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
  const canAnimate = gardenState.gardenAnimationsEnabled && !reducedMotion

  const renderScene = (timestamp: number) => {
    // 1. Cielo con degradé pixel art suave
    ctx.fillStyle = world.skyColors.top
    ctx.fillRect(0, 0, SCENE_W * 2, 38)

    // Franja de dithering entre cielo superior e inferior
    ctx.fillStyle = world.skyColors.bottom
    ctx.fillRect(0, 38, SCENE_W * 2, 16)
    for (let x = 0; x < SCENE_W * 2; x += 4) {
      ctx.fillRect(x + (x % 8 === 0 ? 0 : 2), 36, 2, 2)
    }

    // Luna y estrellas de noche, o nubes serenas de día
    if (world.isNight) {
      drawSprite(ctx, instMoon, 210, 8, 2)
      // Estrellitas sutiles con brillo armónico
      const t = timestamp * 0.003
      const stars = [
        { x: 34, y: 12, s: 2, phase: 0 },
        { x: 68, y: 22, s: 1, phase: 1.2 },
        { x: 110, y: 15, s: 2, phase: 2.4 },
        { x: 154, y: 10, s: 1, phase: 3.6 },
        { x: 178, y: 24, s: 2, phase: 0.8 },
        { x: 260, y: 18, s: 1, phase: 4.8 },
      ]
      for (const st of stars) {
        const glow = Math.sin(t + st.phase)
        ctx.fillStyle = glow > 0.3 ? palette.crema : palette.azulNiebla
        ctx.fillRect(st.x, st.y, st.s, st.s)
        if (st.s > 1 && glow > 0.7) {
          ctx.fillRect(st.x - 1, st.y, 1, 1)
          ctx.fillRect(st.x + st.s, st.y, 1, 1)
        }
      }
    } else {
      // De día o atardecer: nubecitas pixeladas suaves
      ctx.fillStyle = world.skyColors.bottom === palette.azulNiebla ? palette.crema : palette.menta
      ctx.fillRect(28, 16, 20, 6)
      ctx.fillRect(32, 12, 12, 4)
      ctx.fillRect(160, 22, 24, 6)
      ctx.fillRect(166, 18, 14, 4)
    }

    // 2. Banda de tierra alta / bosque de fondo (fila 1 de la grilla)
    ctx.fillStyle = palette.bosque
    ctx.fillRect(0, 50, SCENE_W * 2, 4)
    for (let bx = 0; bx < SCENE_W * 2; bx += 18) {
      ctx.fillRect(bx + 2, 46, 14, 6)
      ctx.fillRect(bx + 4, 44, 10, 3)
    }
    ctx.fillStyle = world.foliageColor
    ctx.fillRect(0, 52, SCENE_W * 2, 34)
    // Detallitos de flores silvestres en la tierra alta
    ctx.fillStyle = palette.crema
    ctx.fillRect(24, 62, 2, 2)
    ctx.fillRect(96, 68, 2, 2)
    ctx.fillRect(180, 60, 2, 2)
    ctx.fillRect(244, 64, 2, 2)
    ctx.fillStyle = palette.acento
    ctx.fillRect(58, 66, 2, 2)
    ctx.fillRect(138, 58, 2, 2)
    ctx.fillRect(212, 70, 2, 2)

    // 3. Estanque de agua (filas 2 y 3)
    // Borde exterior ribereño
    ctx.fillStyle = palette.bosque
    ctx.beginPath()
    ctx.ellipse(SCENE_W, 137, 133, 49, 0, 0, Math.PI * 2)
    ctx.fill()
    ctx.fillStyle = palette.musgo
    ctx.beginPath()
    ctx.ellipse(SCENE_W, 137, 130, 46, 0, 0, Math.PI * 2)
    ctx.fill()

    // Masa de agua principal
    ctx.fillStyle = world.waterColor
    ctx.beginPath()
    ctx.ellipse(SCENE_W, 137, 126, 43, 0, 0, Math.PI * 2)
    ctx.fill()

    // Suaves reflejos y ondas de agua animadas
    const waveT = timestamp * 0.002
    ctx.fillStyle = palette.turquesa
    ctx.fillRect(40 + Math.sin(waveT) * 4, 120, 22, 2)
    ctx.fillRect(180 + Math.sin(waveT + 1) * 5, 126, 26, 2)
    ctx.fillRect(60 + Math.sin(waveT + 2) * 4, 150, 18, 2)
    ctx.fillRect(195 + Math.sin(waveT + 3) * 5, 156, 24, 2)

    ctx.fillStyle = palette.celesteAgua
    ctx.fillRect(90 + Math.cos(waveT) * 3, 114, 16, 1)
    ctx.fillRect(150 + Math.cos(waveT + 2) * 3, 162, 20, 1)

    // Onda concéntrica tenue bajo el nenúfar
    ctx.strokeStyle = palette.turquesa
    ctx.lineWidth = 1
    ctx.beginPath()
    ctx.ellipse(SCENE_W, 152, 38 + Math.sin(waveT * 1.5) * 2, 10, 0, 0, Math.PI * 2)
    ctx.stroke()

    // 4. Banda de tierra baja / primer plano (fila 4)
    ctx.fillStyle = world.foliageColor
    ctx.fillRect(0, 184, SCENE_W * 2, 36)

    // Briznas de hierba silvestre en el borde inferior del estanque
    ctx.fillStyle = palette.bosque
    for (let gx = 0; gx < SCENE_W * 2; gx += 8) {
      ctx.fillRect(gx + 2, 182, 3, 4)
      ctx.fillRect(gx + 4, 180, 2, 4)
    }
    ctx.fillStyle = palette.salvia
    for (let gx = 0; gx < SCENE_W * 2; gx += 12) {
      ctx.fillRect(gx + 1, 183, 2, 3)
    }

    // Piedritas lisas en los rincones
    ctx.fillStyle = palette.azulNiebla
    ctx.fillRect(16, 204, 6, 4)
    ctx.fillRect(18, 202, 4, 2)
    ctx.fillRect(256, 206, 7, 4)
    ctx.fillRect(258, 204, 4, 2)
    ctx.fillStyle = palette.tinta
    ctx.fillRect(16, 208, 6, 1)
    ctx.fillRect(256, 210, 7, 1)

    // 5. Dibujar decoraciones colocadas en la grilla
    const CELL_W = (SCENE_W * 2) / GARDEN_GRID_COLS // 56px
    const CELL_H = (SCENE_H * 2) / GARDEN_GRID_ROWS // 44px

    for (const dec of gardenState.placedDecorations) {
      const inst = decorationInstances.get(dec.id)
      if (inst) {
        if (canAnimate) tickSprite(inst, timestamp)
        const posX = Math.round(dec.x * CELL_W + (CELL_W - 32) / 2)
        const posY = Math.round(dec.y * CELL_H + (CELL_H - 32) / 2)
        drawSprite(ctx, inst, posX, posY, 2)
      }
    }

    // 6. Nenúfar y Sapo Protagonista (en el centro: x=2, y=3)
    const padX = Math.round(2 * CELL_W + (CELL_W - 56) / 2)
    const padY = Math.round(3 * CELL_H + (CELL_H - 24) / 2)
    drawSprite(ctx, instPad, padX, padY, 2)

    if (canAnimate) {
      tickSprite(instFrog, timestamp)
    }
    const frogX = padX - 4
    const frogY = padY - 44 + frogHopOffset
    drawSprite(ctx, instFrog, frogX, frogY, 2)
  }

  const loop = (timestamp: number) => {
    if (!isTabVisible) return
    const elapsed = timestamp - lastFrameTime
    if (elapsed > FPS_INTERVAL) {
      lastFrameTime = timestamp - (elapsed % FPS_INTERVAL)
      renderScene(timestamp)
    }
    if (canAnimate) {
      animFrameId = requestAnimationFrame(loop)
    }
  }

  // Primer render inmediato
  renderScene(performance.now())
  if (canAnimate) {
    animFrameId = requestAnimationFrame(loop)
  }

  // Pausar en pestaña oculta
  const onVisibilityChange = () => {
    isTabVisible = !document.hidden
    if (isTabVisible && canAnimate) {
      lastFrameTime = performance.now()
      animFrameId = requestAnimationFrame(loop)
    } else if (animFrameId) {
      cancelAnimationFrame(animFrameId)
    }
  }
  document.addEventListener('visibilitychange', onVisibilityChange)

  // ── Overlay de Grilla y Selector de Acomodar ──
  const gridOverlay = document.createElement('div')
  gridOverlay.className = 'decor-grid-overlay'
  gridOverlay.style.display = isAcomodarMode ? 'grid' : 'none'

  const acomodarPanel = document.createElement('div')
  acomodarPanel.className = 'acomodar-panel'
  acomodarPanel.style.display = isAcomodarMode ? 'flex' : 'none'

  const updateGridOverlay = () => {
    gridOverlay.innerHTML = ''
    const selectedItem = selectedCatalogItemId ? CATALOG_ITEMS_BY_ID.get(selectedCatalogItemId) : null

    for (let r = 0; r < GARDEN_GRID_ROWS; r++) {
      for (let c = 0; c < GARDEN_GRID_COLS; c++) {
        const cellBtn = document.createElement('button')
        cellBtn.className = 'grid-cell-btn'
        const terrain = getCellTerrain(c, r)
        cellBtn.title = `Fila ${r + 1}, Columna ${c + 1} (${terrain})`

        // Celda central reservada para el sapo y nenúfar
        if (c === 2 && r === 3) {
          cellBtn.classList.add('center-frog')
          cellBtn.disabled = true
          cellBtn.title = 'Lugar del sapo'
          cellBtn.innerHTML = '<span style="font-size: 14px; opacity: 0.85;" aria-hidden="true">🐸</span>'
          gridOverlay.appendChild(cellBtn)
          continue
        }

        // Buscar si hay objeto colocado
        const placed = gardenState.placedDecorations.find((p) => p.x === c && p.y === r)
        if (placed) {
          const item = CATALOG_ITEMS_BY_ID.get(placed.catalogId)
          cellBtn.title = `${item?.name || 'Objeto'} (tocá para guardar en la colección)`
          cellBtn.innerHTML = `<span class="cell-placed-badge" title="Tocá para guardar">✓</span>`
          cellBtn.addEventListener('click', () => {
            // Quitar el objeto y devolver a la colección
            gardenState = {
              ...gardenState,
              placedDecorations: removeItem(gardenState.placedDecorations, placed.id),
            }
            saveGardenState(gardenState)
            syncDecorationInstances()
            updateGridOverlay()
            updateAcomodarPanel()
            renderScene(performance.now())
          })
        } else {
          // Si hay un objeto seleccionado, indicar compatibilidad visual
          if (selectedItem) {
            if (isTerrainCompatible(selectedItem.terrain, terrain)) {
              cellBtn.classList.add('cell-compatible')
              cellBtn.title = `Colocar ${selectedItem.name} acá (${terrain})`
            } else {
              cellBtn.classList.add('cell-incompatible')
            }
          }

          cellBtn.addEventListener('click', () => {
            if (!selectedCatalogItemId) return
            const item = CATALOG_ITEMS_BY_ID.get(selectedCatalogItemId)
            if (!item) return

            if (!isTerrainCompatible(item.terrain, terrain)) {
              // Aviso calmo sin alert intrusivo
              const rowTitle = acomodarPanel.querySelector<HTMLElement>('.acomodar-hint')
              if (rowTitle) {
                rowTitle.textContent = `🌱 ${item.name} prefiere terreno de ${item.terrain}.`
                rowTitle.style.color = 'var(--color-acento)'
                setTimeout(() => {
                  rowTitle.textContent = `Tocá un casillero compatible para colocar:`
                  rowTitle.style.color = 'var(--color-bosque)'
                }, 2500)
              }
              return
            }

            const updatedPlacements = placeItem(
              gardenState.placedDecorations,
              item,
              c,
              r
            )

            gardenState = {
              ...gardenState,
              placedDecorations: updatedPlacements,
            }
            saveGardenState(gardenState)
            syncDecorationInstances()
            selectedCatalogItemId = null
            updateGridOverlay()
            updateAcomodarPanel()
            renderScene(performance.now())
          })
        }

        gridOverlay.appendChild(cellBtn)
      }
    }
  }

  const updateAcomodarPanel = () => {
    acomodarPanel.innerHTML = ''
    const rowTitle = document.createElement('span')
    rowTitle.className = 'acomodar-hint'
    rowTitle.style.cssText = 'font-family: var(--font-pixel); font-size: 0.5625rem; color: var(--color-bosque); line-height: 1.4;'
    rowTitle.textContent = selectedCatalogItemId
      ? `Tocá un casillero iluminado para colocar:`
      : copy.jardin.gridHint
    acomodarPanel.appendChild(rowTitle)

    const itemsRow = document.createElement('div')
    itemsRow.className = 'acomodar-items-row'

    // Items obtenidos que no estén actualmente colocados
    const placedCatalogIds = new Set(gardenState.placedDecorations.map((p) => p.catalogId))
    const availableItems = gardenState.obtainedItemIds
      .map((id) => CATALOG_ITEMS_BY_ID.get(id))
      .filter((item): item is CatalogItem => !!item && !placedCatalogIds.has(item.id))

    if (availableItems.length === 0) {
      const noneMsg = document.createElement('span')
      noneMsg.style.cssText = 'font-family: var(--font-ui); font-size: var(--font-size-xs); color: var(--color-tinta);'
      noneMsg.textContent = 'No tenés más objetos libres. Tocá uno colocado con ✓ para guardarlo.'
      itemsRow.appendChild(noneMsg)
    } else {
      for (const item of availableItems) {
        const thumb = document.createElement('button')
        thumb.className = `acomodar-item-thumb ${selectedCatalogItemId === item.id ? 'selected' : ''}`
        thumb.title = `${item.name} (${item.terrain})`
        const { canvas: cThumb, ctx: ctxThumb } = createPixelCanvas(32, 32)
        const inst = createSpriteInstance(item.sprite)
        drawSprite(ctxThumb, inst, 0, 0, 2)
        thumb.appendChild(cThumb)

        thumb.addEventListener('click', () => {
          selectedCatalogItemId = selectedCatalogItemId === item.id ? null : item.id
          updateGridOverlay()
          updateAcomodarPanel()
        })
        itemsRow.appendChild(thumb)
      }
    }
    acomodarPanel.appendChild(itemsRow)

    const doneBtn = document.createElement('button')
    doneBtn.className = 'action-btn'
    doneBtn.style.cssText = 'padding: var(--space-xs); min-height: 40px; font-size: var(--font-size-sm);'
    doneBtn.textContent = copy.jardin.gridDoneBtn
    doneBtn.addEventListener('click', () => {
      isAcomodarMode = false
      updateAcomodarUI()
    })
    acomodarPanel.appendChild(doneBtn)
  }

  const updateAcomodarUI = () => {
    gridOverlay.style.display = isAcomodarMode ? 'grid' : 'none'
    acomodarPanel.style.display = isAcomodarMode ? 'flex' : 'none'
    actions.style.display = isAcomodarMode ? 'none' : 'grid'
    acomodarTopBtn.classList.toggle('active', isAcomodarMode)
    if (isAcomodarMode) {
      updateGridOverlay()
      updateAcomodarPanel()
    }
  }

  canvasContainer.appendChild(gridOverlay)
  stageWrapper.appendChild(canvasContainer)
  stageWrapper.appendChild(acomodarPanel)

  // ── 4. Botones de Acción de Bienestar ──
  const actions = document.createElement('div')
  const currentHandMode = gardenState.handMode || 'right'
  actions.className = `jardin-actions hand-${currentHandMode}`

  const pausaBtn = document.createElement('button')
  pausaBtn.className = 'action-btn'
  pausaBtn.appendChild(createFaIcon('spa', { size: 15 }))
  pausaBtn.appendChild(document.createTextNode(copy.jardin.pausaBtn))
  pausaBtn.addEventListener('click', () => {
    window.location.hash = '#/pausa'
  })

  const checkinBtn = document.createElement('button')
  checkinBtn.className = 'action-btn secondary'
  checkinBtn.appendChild(createFaIcon('frog', { size: 15 }))
  checkinBtn.appendChild(document.createTextNode(copy.jardin.checkinBtn))
  checkinBtn.addEventListener('click', () => {
    window.location.hash = '#/checkin'
  })

  const diarioBtn = document.createElement('button')
  diarioBtn.className = 'action-btn secondary'
  diarioBtn.appendChild(createFaIcon('moon', { size: 15 }))
  diarioBtn.appendChild(document.createTextNode(copy.jardin.diarioBtn))
  diarioBtn.addEventListener('click', () => {
    window.location.hash = '#/diario'
  })

  const historialBtn = document.createElement('button')
  historialBtn.className = 'action-btn tertiary'
  historialBtn.appendChild(createFaIcon('bookOpen', { size: 15 }))
  historialBtn.appendChild(document.createTextNode(copy.jardin.historialBtn))
  historialBtn.addEventListener('click', () => {
    window.location.hash = '#/historial'
  })

  actions.appendChild(pausaBtn)
  actions.appendChild(checkinBtn)
  actions.appendChild(diarioBtn)
  actions.appendChild(historialBtn)

  // ── 4.5. Banner In-App de Recordatorio (si coincide horario y no está descartado hoy) ──
  const activeReminder = checkInAppReminder(
    gardenState.reminders ?? [],
    new Date(),
    gardenState.dismissedInAppReminders ?? {},
    gardenState.vacationMode,
    today
  )

  let reminderBanner: HTMLElement | null = null
  if (activeReminder) {
    reminderBanner = document.createElement('div')
    reminderBanner.className = 'reminder-inapp-banner'
    reminderBanner.setAttribute('role', 'region')
    reminderBanner.setAttribute('aria-label', 'Recordatorio de pausa')

    const bText = document.createElement('p')
    bText.className = 'reminder-banner-text'
    bText.textContent = `⏰ ${activeReminder.eventText}`

    const bDismiss = document.createElement('button')
    bDismiss.type = 'button'
    bDismiss.className = 'reminder-banner-btn'
    bDismiss.textContent = 'Aflojar'
    bDismiss.addEventListener('click', () => {
      gardenState = {
        ...gardenState,
        dismissedInAppReminders: {
          ...(gardenState.dismissedInAppReminders ?? {}),
          [activeReminder.id]: today,
        },
      }
      saveGardenState(gardenState)
      reminderBanner?.remove()
      window.location.hash = '#/pausa'
    })

    reminderBanner.appendChild(bText)
    reminderBanner.appendChild(bDismiss)
  }

  // ── 4.6. Tarjeta de Apoyo Sensible (si cumple condiciones muy cuidadosas) ──
  let supportCard: HTMLElement | null = null
  const allEntries = entriesRes.success && entriesRes.data ? entriesRes.data : []
  const showSupport = shouldShowSupportNotice({
    entries: allEntries,
    currentDateStr: today,
    lastNoticeDateStr: gardenState.lastSupportNoticeDate,
    supportSuggestionsEnabled: gardenState.supportSuggestionsEnabled,
    vacationMode: gardenState.vacationMode,
  })

  if (showSupport) {
    supportCard = document.createElement('article')
    supportCard.className = 'support-card-section'
    supportCard.setAttribute('role', 'region')
    supportCard.setAttribute('aria-label', copy.apoyo.cardTitle)

    const sTitle = document.createElement('h2')
    sTitle.className = 'support-card-title'
    sTitle.textContent = copy.apoyo.cardTitle

    const sMsg = document.createElement('p')
    sMsg.className = 'support-card-msg'
    sMsg.textContent = copy.apoyo.cardMessage

    const sActions = document.createElement('div')
    sActions.className = 'support-actions-row'

    const sHelpBtn = document.createElement('a')
    sHelpBtn.className = 'support-action-btn primary'
    sHelpBtn.href = '#/ayuda'
    sHelpBtn.textContent = copy.apoyo.cardHelpBtn
    sHelpBtn.addEventListener('click', () => {
      gardenState = {
        ...gardenState,
        lastSupportNoticeDate: today,
      }
      saveGardenState(gardenState)
    })

    const sDismissBtn = document.createElement('button')
    sDismissBtn.type = 'button'
    sDismissBtn.className = 'support-action-btn secondary'
    sDismissBtn.textContent = copy.apoyo.cardDismissBtn
    sDismissBtn.addEventListener('click', () => {
      gardenState = {
        ...gardenState,
        lastSupportNoticeDate: today,
      }
      saveGardenState(gardenState)
      supportCard?.remove()
    })

    const sNeverBtn = document.createElement('button')
    sNeverBtn.type = 'button'
    sNeverBtn.className = 'support-never-link'
    sNeverBtn.textContent = copy.apoyo.cardNeverBtn
    sNeverBtn.addEventListener('click', () => {
      gardenState = {
        ...gardenState,
        supportSuggestionsEnabled: false,
        lastSupportNoticeDate: today,
      }
      saveGardenState(gardenState)
      supportCard?.remove()
    })

    sActions.appendChild(sHelpBtn)
    sActions.appendChild(sDismissBtn)
    supportCard.appendChild(sTitle)
    supportCard.appendChild(sMsg)
    supportCard.appendChild(sActions)
    supportCard.appendChild(sNeverBtn)
  }

  // Ensamblar pantalla
  section.appendChild(nav)
  section.appendChild(header)
  if (reminderBanner) section.appendChild(reminderBanner)
  section.appendChild(stageWrapper)
  if (supportCard) section.appendChild(supportCard)
  section.appendChild(actions)
  container.appendChild(section)

  if (isAcomodarMode) {
    updateAcomodarUI()
  }

  // ── 5. Modal de Regalo Diario (si corresponde) ──
  if (pendingGift) {
    const gift = pendingGift
    const overlay = document.createElement('div')
    overlay.className = 'modal-overlay'

    const modal = document.createElement('div')
    modal.className = 'modal-card'

    const mTitle = document.createElement('h2')
    mTitle.className = 'modal-title'
    mTitle.textContent = copy.jardin.giftTitle

    // Preview del sprite recibido
    const { canvas: cGift, ctx: ctxGift } = createPixelCanvas(48, 48)
    const instGift = createSpriteInstance(gift.sprite)
    drawSprite(ctxGift, instGift, 0, 0, 3)

    const mName = document.createElement('h3')
    mName.style.cssText = 'font-family: var(--font-pixel); font-size: 0.625rem; color: var(--color-tinta); margin: 0;'
    mName.textContent = gift.name

    const mDesc = document.createElement('p')
    mDesc.className = 'modal-desc'
    mDesc.textContent = gift.description

    const dismissBtn = document.createElement('button')
    dismissBtn.className = 'action-btn'
    dismissBtn.textContent = copy.jardin.giftDismiss
    dismissBtn.addEventListener('click', () => {
      // Guardar regalo en el estado
      gardenState = {
        ...gardenState,
        obtainedItemIds: [...new Set([...gardenState.obtainedItemIds, gift.id])],
        lastGiftDate: today,
      }
      saveGardenState(gardenState)
      overlay.remove()
      playChime()
    })

    modal.appendChild(mTitle)
    modal.appendChild(cGift)
    modal.appendChild(mName)
    modal.appendChild(mDesc)
    modal.appendChild(dismissBtn)
    overlay.appendChild(modal)
    section.appendChild(overlay)
    dismissBtn.focus()
  }

  // ── 6. Pregunta sobre el Nombre del Sapo (una sola vez si no respondió) ──
  if (!pendingGift && !gardenState.frogNameAnswered && gardenState.frogName === null) {
    const overlay = document.createElement('div')
    overlay.className = 'modal-overlay'

    const modal = document.createElement('div')
    modal.className = 'modal-card'

    const mTitle = document.createElement('h2')
    mTitle.className = 'modal-title'
    mTitle.textContent = copy.jardin.frogNamePrompt

    const input = document.createElement('input')
    input.type = 'text'
    input.maxLength = 20
    input.placeholder = copy.jardin.frogNamePlaceholder
    input.className = 'name-input'

    const btnRow = document.createElement('div')
    btnRow.style.cssText = 'display: flex; gap: var(--space-xs); width: 100%; margin-top: var(--space-xs);'

    const skipBtn = document.createElement('button')
    skipBtn.className = 'action-btn secondary'
    skipBtn.style.flex = '1'
    skipBtn.style.padding = 'var(--space-xs)'
    skipBtn.style.fontSize = 'var(--font-size-sm)'
    skipBtn.textContent = copy.jardin.frogNameSkip
    skipBtn.addEventListener('click', () => {
      gardenState = {
        ...gardenState,
        frogNameAnswered: true,
      }
      saveGardenState(gardenState)
      overlay.remove()
    })

    const saveNameBtn = document.createElement('button')
    saveNameBtn.className = 'action-btn'
    saveNameBtn.style.flex = '1'
    saveNameBtn.style.padding = 'var(--space-xs)'
    saveNameBtn.style.fontSize = 'var(--font-size-sm)'
    saveNameBtn.textContent = copy.jardin.frogNameSave
    saveNameBtn.addEventListener('click', () => {
      const val = input.value.trim()
      gardenState = {
        ...gardenState,
        frogName: val.length > 0 ? val : null,
        frogNameAnswered: true,
      }
      saveGardenState(gardenState)
      overlay.remove()
      if (gardenState.frogName) {
        const badge = document.createElement('span')
        badge.className = 'frog-name-badge'
        badge.textContent = `Sapo: ${gardenState.frogName}`
        header.insertBefore(badge, worldHint)
      }
    })

    btnRow.appendChild(skipBtn)
    btnRow.appendChild(saveNameBtn)

    modal.appendChild(mTitle)
    modal.appendChild(input)
    modal.appendChild(btnRow)
    overlay.appendChild(modal)
    section.appendChild(overlay)
  }

  // Cleanup
  return () => {
    if (animFrameId) cancelAnimationFrame(animFrameId)
    document.removeEventListener('visibilitychange', onVisibilityChange)
    if (frogHopTimer) clearTimeout(frogHopTimer)
    style.remove()
  }
}
