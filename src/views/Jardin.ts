import { palette } from '../palette/colors'
import { copy } from '../copy'
import { createFaIcon } from '../icons'
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
      align-items: center;
      justify-content: space-between;
      gap: var(--space-xs);
      z-index: 10;
    }

    .nav-btn {
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
      line-height: 1.6;
      transition: transform var(--transition-fast), opacity var(--transition-fast);
      display: inline-flex;
      align-items: center;
      justify-content: center;
      gap: 4px;
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
      top: 20%;
      left: 50%;
      transform: translate(-50%, -50%);
      background-color: var(--color-crema);
      border: 2px solid var(--color-tinta);
      border-radius: var(--border-radius-sm);
      padding: 4px 10px;
      font-family: var(--font-pixel);
      font-size: 0.625rem;
      color: var(--color-tinta);
      box-shadow: 2px 2px 0 var(--color-bosque);
      pointer-events: none;
      z-index: 20;
      animation: floatSpeech 1.5s ease-out forwards;
    }

    @keyframes floatSpeech {
      0% { opacity: 0; transform: translate(-50%, -40%); }
      20% { opacity: 1; transform: translate(-50%, -50%); }
      80% { opacity: 1; transform: translate(-50%, -54%); }
      100% { opacity: 0; transform: translate(-50%, -60%); }
    }

    /* Grilla de colocación (Modo Acomodar) */
    .decor-grid-overlay {
      position: absolute;
      inset: 0;
      display: grid;
      grid-template-columns: repeat(5, 1fr);
      grid-template-rows: repeat(5, 1fr);
      gap: 2px;
      padding: 4px;
      box-sizing: border-box;
      background-color: rgba(43, 58, 66, 0.4);
      z-index: 15;
    }

    .grid-cell-btn {
      background-color: rgba(246, 239, 201, 0.25);
      border: 1px dashed var(--color-crema);
      border-radius: 4px;
      cursor: pointer;
      display: flex;
      align-items: center;
      justify-content: center;
      padding: 0;
      position: relative;
      transition: background-color var(--transition-fast);
      min-width: 44px;
      min-height: 38px;
    }

    .grid-cell-btn:hover, .grid-cell-btn:focus-visible {
      background-color: rgba(246, 239, 201, 0.6);
      outline: 2px solid var(--color-acento);
    }

    .grid-cell-btn.center-frog {
      background-color: rgba(63, 111, 94, 0.4);
      border: 1px solid var(--color-bosque);
      cursor: default;
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
      display: flex;
      flex-direction: column;
      gap: var(--space-xs);
      margin-top: var(--space-xs);
    }

    .action-btn {
      font-family: var(--font-ui);
      font-size: var(--font-size-md);
      font-weight: 600;
      color: var(--color-crema);
      background-color: var(--color-bosque);
      border: 2px solid var(--color-tinta);
      border-radius: var(--border-radius-md);
      padding: var(--space-sm) var(--space-md);
      min-height: var(--touch-target-min);
      cursor: pointer;
      display: flex;
      align-items: center;
      justify-content: center;
      gap: var(--space-sm);
      text-align: center;
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
  settingsBtn.className = 'nav-btn'
  settingsBtn.appendChild(createFaIcon('gear', { size: 12 }))
  settingsBtn.setAttribute('aria-label', 'Ajustes')
  settingsBtn.addEventListener('click', () => {
    window.location.hash = '#/ajustes'
  })

  nav.appendChild(backBtn)
  nav.appendChild(coleccionBtn)
  nav.appendChild(acomodarTopBtn)
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
  let frogHopOffset = 0
  let frogHopTimer: any = null

  const triggerFrogTap = () => {
    playChime()
    // Animación de salto chiquito
    frogHopOffset = -6
    if (frogHopTimer) clearTimeout(frogHopTimer)
    frogHopTimer = setTimeout(() => {
      frogHopOffset = 0
    }, 280)

    // Mostrar frase corta
    if (speechEl) speechEl.remove()
    const phrase = copy.jardin.frogTap[Math.floor(Math.random() * copy.jardin.frogTap.length)]
    speechEl = document.createElement('div')
    speechEl.className = 'frog-speech-bubble'
    speechEl.textContent = phrase
    stageWrapper.appendChild(speechEl)
    setTimeout(() => {
      speechEl?.remove()
      speechEl = null
    }, 1500)
  }

  canvasContainer.addEventListener('click', (e) => {
    if (isAcomodarMode) return
    // Tocar el área central (sapo)
    const rect = canvasContainer.getBoundingClientRect()
    const clickX = e.clientX - rect.left
    const clickY = e.clientY - rect.top
    const midX = rect.width / 2
    const midY = rect.height / 2
    if (Math.abs(clickX - midX) < 45 && Math.abs(clickY - midY) < 45) {
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
    // Fondo de cielo
    ctx.fillStyle = world.skyColors.top
    ctx.fillRect(0, 0, SCENE_W * 2, 40)
    ctx.fillStyle = world.skyColors.bottom
    ctx.fillRect(0, 40, SCENE_W * 2, 30)

    // Si es de noche, dibujar luna menguante
    if (world.isNight) {
      drawSprite(ctx, instMoon, 210, 10, 2)
      // Estrellitas sutiles
      ctx.fillStyle = palette.crema
      ctx.fillRect(40, 16, 2, 2)
      ctx.fillRect(90, 28, 2, 2)
      ctx.fillRect(160, 20, 2, 2)
    }

    // Banda de tierra alta (fila 1 de la grilla)
    ctx.fillStyle = world.foliageColor
    ctx.fillRect(0, 50, SCENE_W * 2, 34)

    // Estanque de agua (filas 2 y 3)
    ctx.fillStyle = world.waterColor
    ctx.beginPath()
    ctx.ellipse(SCENE_W, 140, 130, 46, 0, 0, Math.PI * 2)
    ctx.fill()

    // Banda de tierra baja / primer plano (fila 4)
    ctx.fillStyle = world.foliageColor
    ctx.fillRect(0, 185, SCENE_W * 2, 35)

    // 1. Dibujar decoraciones colocadas en la grilla
    // Mapeo de celdas 5x5 a coordenadas físicas en canvas (280x220)
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

    // 2. Nenúfar y Sapo Protagonista (en el centro: x=2, y=3)
    const padX = Math.round(2 * CELL_W + (CELL_W - 56) / 2)
    const padY = Math.round(3 * CELL_H + (CELL_H - 24) / 2)
    drawSprite(ctx, instPad, padX, padY, 2)

    if (canAnimate) {
      tickSprite(instFrog, timestamp)
    }
    const frogX = padX + 8
    const frogY = padY - 14 + frogHopOffset
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
          gridOverlay.appendChild(cellBtn)
          continue
        }

        // Buscar si hay objeto colocado
        const placed = gardenState.placedDecorations.find((p) => p.x === c && p.y === r)
        if (placed) {
          const item = CATALOG_ITEMS_BY_ID.get(placed.catalogId)
          if (item) {
            cellBtn.innerHTML = `<span style="font-size: 10px; font-weight: bold; color: var(--color-tinta);">${item.name.slice(0, 3)}</span>`
          }
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
          cellBtn.addEventListener('click', () => {
            if (!selectedCatalogItemId) return
            const item = CATALOG_ITEMS_BY_ID.get(selectedCatalogItemId)
            if (!item) return

            if (!isTerrainCompatible(item.terrain, terrain)) {
              alert(`Este elemento necesita terreno de tipo: ${item.terrain}`)
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
    rowTitle.style.cssText = 'font-family: var(--font-pixel); font-size: 0.5625rem; color: var(--color-bosque);'
    rowTitle.textContent = selectedCatalogItemId
      ? `Tocá un casillero compatible para colocar:`
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
      noneMsg.textContent = 'No tenés más objetos libres. Tocá uno colocado para guardarlo.'
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
    actions.style.display = isAcomodarMode ? 'none' : 'flex'
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
  actions.className = 'jardin-actions'

  const pausaBtn = document.createElement('button')
  pausaBtn.className = 'action-btn'
  pausaBtn.appendChild(createFaIcon('spa', { size: 18 }))
  pausaBtn.appendChild(document.createTextNode(copy.jardin.pausaBtn))
  pausaBtn.addEventListener('click', () => {
    window.location.hash = '#/pausa'
  })

  const checkinBtn = document.createElement('button')
  checkinBtn.className = 'action-btn secondary'
  checkinBtn.appendChild(createFaIcon('frog', { size: 18 }))
  checkinBtn.appendChild(document.createTextNode(copy.jardin.checkinBtn))
  checkinBtn.addEventListener('click', () => {
    window.location.hash = '#/checkin'
  })

  const diarioBtn = document.createElement('button')
  diarioBtn.className = 'action-btn secondary'
  diarioBtn.appendChild(createFaIcon('moon', { size: 18 }))
  diarioBtn.appendChild(document.createTextNode(copy.jardin.diarioBtn))
  diarioBtn.addEventListener('click', () => {
    window.location.hash = '#/diario'
  })

  const historialBtn = document.createElement('button')
  historialBtn.className = 'action-btn tertiary'
  historialBtn.appendChild(createFaIcon('bookOpen', { size: 18 }))
  historialBtn.appendChild(document.createTextNode(copy.jardin.historialBtn))
  historialBtn.addEventListener('click', () => {
    window.location.hash = '#/historial'
  })

  actions.appendChild(pausaBtn)
  actions.appendChild(checkinBtn)
  actions.appendChild(diarioBtn)
  actions.appendChild(historialBtn)

  // Ensamblar pantalla
  section.appendChild(nav)
  section.appendChild(header)
  section.appendChild(stageWrapper)
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
    skipBtn.className = 'nav-btn'
    skipBtn.style.flex = '1'
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
