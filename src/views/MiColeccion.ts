import { copy } from '../copy'
import { CATALOG_ITEMS, type CatalogItem, type CatalogCategory, CATALOG_CATEGORY_NAMES } from '../catalog'
import { loadGardenState } from '../storage'
import { createPixelCanvas, createSpriteInstance, drawSprite } from '../sprites/renderer'

/**
 * Vista #/micoleccion — Mi colección de objetos y visitantes.
 *
 * Principios:
 * - NO muestra contadores (nada de "3/26"), ni siluetas de faltantes.
 * - Muestra únicamente lo que la usuaria ya descubrió / recibió.
 * - Tono cálido y calmo.
 * - Botón para ir a acomodar al jardín.
 */
export function renderMiColeccion(container: HTMLElement): () => void {
  container.innerHTML = ''

  const section = document.createElement('section')
  section.className = 'coleccion-screen'
  section.setAttribute('role', 'main')
  section.setAttribute('aria-label', copy.coleccion.title)

  const style = document.createElement('style')
  style.textContent = `
    .coleccion-screen {
      flex: 1;
      width: 100%;
      height: 100%;
      box-sizing: border-box;
      display: flex;
      flex-direction: column;
      padding: var(--space-md);
      background: linear-gradient(
        180deg,
        var(--color-celeste-agua) 0%,
        var(--color-menta) 60%,
        var(--color-salvia) 100%
      );
      overflow-y: auto;
      gap: var(--space-md);
    }

    .coleccion-top {
      display: flex;
      align-items: center;
      justify-content: space-between;
      gap: var(--space-sm);
    }

    .back-btn {
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
      display: inline-flex;
      align-items: center;
      justify-content: center;
      transition: transform var(--transition-fast), opacity var(--transition-fast);
    }

    .back-btn:hover {
      opacity: 0.9;
      transform: translateY(-1px);
    }

    .back-btn:focus-visible {
      outline: 3px solid var(--color-acento);
      outline-offset: 3px;
    }

    .coleccion-title {
      font-family: var(--font-pixel);
      font-size: 0.8125rem;
      color: var(--color-bosque);
      line-height: 1.6;
      margin: 0;
      text-align: center;
      flex: 1;
    }

    .btn-acomodar-top {
      font-family: var(--font-pixel);
      font-size: 0.625rem;
      color: var(--color-crema);
      background-color: var(--color-bosque);
      border: 2px solid var(--color-tinta);
      border-radius: var(--border-radius-sm);
      padding: var(--space-xs) var(--space-sm);
      min-height: var(--touch-target-min);
      cursor: pointer;
      display: inline-flex;
      align-items: center;
      justify-content: center;
      transition: transform var(--transition-fast), opacity var(--transition-fast);
    }

    .btn-acomodar-top:hover {
      opacity: 0.9;
      transform: translateY(-1px);
    }

    .empty-card {
      background-color: var(--color-crema);
      border: 2px solid var(--color-bosque);
      border-radius: var(--border-radius-md);
      padding: var(--space-lg);
      text-align: center;
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: var(--space-sm);
    }

    .empty-text {
      font-family: var(--font-ui);
      font-size: var(--font-size-md);
      color: var(--color-agua-profunda);
      line-height: 1.5;
      margin: 0;
    }

    .category-section {
      display: flex;
      flex-direction: column;
      gap: var(--space-xs);
    }

    .category-title {
      font-family: var(--font-pixel);
      font-size: 0.6875rem;
      color: var(--color-bosque);
      margin: var(--space-xs) 0 0;
      line-height: 1.6;
    }

    .items-grid {
      display: flex;
      flex-direction: column;
      gap: var(--space-sm);
    }

    .item-card {
      background-color: var(--color-crema);
      border: 2px solid var(--color-tinta);
      border-radius: var(--border-radius-md);
      padding: var(--space-sm);
      display: flex;
      align-items: center;
      gap: var(--space-md);
      box-shadow: 2px 2px 0 var(--color-bosque);
    }

    .item-sprite-wrap {
      width: 52px;
      height: 52px;
      background-color: var(--color-salvia);
      border: 2px solid var(--color-bosque);
      border-radius: var(--border-radius-sm);
      display: flex;
      align-items: center;
      justify-content: center;
      flex-shrink: 0;
    }

    .item-info {
      flex: 1;
      display: flex;
      flex-direction: column;
      gap: 2px;
    }

    .item-name {
      font-family: var(--font-pixel);
      font-size: 0.625rem;
      color: var(--color-bosque);
      margin: 0;
      line-height: 1.4;
    }

    .item-desc {
      font-family: var(--font-ui);
      font-size: var(--font-size-xs);
      color: var(--color-agua-profunda);
      margin: 0;
      line-height: 1.35;
    }

    .item-badge {
      display: inline-block;
      align-self: flex-start;
      font-family: var(--font-pixel);
      font-size: 0.5rem;
      background-color: var(--color-turquesa);
      color: var(--color-tinta);
      padding: 2px 6px;
      border-radius: 4px;
      border: 1px solid var(--color-bosque);
      margin-top: 4px;
    }

    .item-action-btn {
      font-family: var(--font-ui);
      font-size: var(--font-size-xs);
      font-weight: 600;
      background-color: var(--color-salvia);
      color: var(--color-tinta);
      border: 2px solid var(--color-bosque);
      border-radius: var(--border-radius-sm);
      padding: var(--space-xs) var(--space-sm);
      min-height: var(--touch-target-min);
      cursor: pointer;
      flex-shrink: 0;
      transition: transform var(--transition-fast);
    }

    .item-action-btn:hover {
      transform: translateY(-1px);
    }
  `
  document.head.appendChild(style)

  const gardenState = loadGardenState()
  const obtainedSet = new Set(gardenState.obtainedItemIds)
  const placedMap = new Map(gardenState.placedDecorations.map((p) => [p.catalogId, p]))

  // Obtener items obtenidos
  const obtainedItems = CATALOG_ITEMS.filter((item) => obtainedSet.has(item.id))

  // Encabezado
  const topBar = document.createElement('div')
  topBar.className = 'coleccion-top'

  const backBtn = document.createElement('button')
  backBtn.className = 'back-btn'
  backBtn.textContent = copy.coleccion.back
  backBtn.setAttribute('aria-label', 'Volver al jardín')
  backBtn.addEventListener('click', () => {
    window.location.hash = '#/jardin'
  })

  const title = document.createElement('h1')
  title.className = 'coleccion-title'
  title.textContent = copy.coleccion.title

  const acomodarBtn = document.createElement('button')
  acomodarBtn.className = 'btn-acomodar-top'
  acomodarBtn.textContent = copy.jardin.decorarBtn
  acomodarBtn.setAttribute('aria-label', 'Acomodar elementos en el jardín')
  acomodarBtn.addEventListener('click', () => {
    window.location.hash = '#/jardin?modo=acomodar'
  })

  topBar.appendChild(backBtn)
  topBar.appendChild(title)
  topBar.appendChild(acomodarBtn)
  section.appendChild(topBar)

  if (obtainedItems.length === 0) {
    const emptyCard = document.createElement('div')
    emptyCard.className = 'empty-card'
    const emptyText = document.createElement('p')
    emptyText.className = 'empty-text'
    emptyText.textContent = copy.coleccion.emptyHint
    emptyCard.appendChild(emptyText)
    section.appendChild(emptyCard)
  } else {
    // Agrupar por categoría
    const categories: CatalogCategory[] = ['visitantes', 'hongos', 'plantas', 'agua', 'cielo', 'cositas']

    for (const cat of categories) {
      const inCat = obtainedItems.filter((i) => i.category === cat)
      if (inCat.length === 0) continue

      const catSec = document.createElement('div')
      catSec.className = 'category-section'

      const catTitle = document.createElement('h2')
      catTitle.className = 'category-title'
      catTitle.textContent = CATALOG_CATEGORY_NAMES[cat]
      catSec.appendChild(catTitle)

      const grid = document.createElement('div')
      grid.className = 'items-grid'

      for (const item of inCat) {
        const card = createItemCard(item, placedMap.has(item.id))
        grid.appendChild(card)
      }

      catSec.appendChild(grid)
      section.appendChild(catSec)
    }
  }

  container.appendChild(section)

  return () => {
    style.remove()
  }
}

function createItemCard(item: CatalogItem, isPlaced: boolean): HTMLElement {
  const card = document.createElement('div')
  card.className = 'item-card'

  // Sprite preview canvas
  const spriteWrap = document.createElement('div')
  spriteWrap.className = 'item-sprite-wrap'

  const { canvas, ctx } = createPixelCanvas(48, 48)
  const inst = createSpriteInstance(item.sprite)
  // Dibujar centrado a escala 3 (16x16 * 3 = 48x48)
  drawSprite(ctx, inst, 0, 0, 3)
  spriteWrap.appendChild(canvas)

  // Info
  const info = document.createElement('div')
  info.className = 'item-info'

  const name = document.createElement('h3')
  name.className = 'item-name'
  name.textContent = item.name

  const desc = document.createElement('p')
  desc.className = 'item-desc'
  desc.textContent = item.description

  info.appendChild(name)
  info.appendChild(desc)

  if (isPlaced) {
    const badge = document.createElement('span')
    badge.className = 'item-badge'
    badge.textContent = copy.coleccion.placedBadge
    info.appendChild(badge)
  }

  // Botón acomodar
  const actionBtn = document.createElement('button')
  actionBtn.className = 'item-action-btn'
  actionBtn.textContent = copy.jardin.decorarBtn
  actionBtn.setAttribute('aria-label', `Acomodar ${item.name} en el jardín`)
  actionBtn.addEventListener('click', () => {
    window.location.hash = `#/jardin?modo=acomodar&item=${item.id}`
  })

  card.appendChild(spriteWrap)
  card.appendChild(info)
  card.appendChild(actionBtn)

  return card
}

