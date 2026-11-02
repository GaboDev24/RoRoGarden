import { copy } from '../copy'
import { buildWeekSummary, type WeekSummary } from '../week'
import { detectPatterns, type PatternObservation } from '../patterns'
import { listEntries, loadGardenState, saveGardenState } from '../storage'
import { MOOD_SPRITES, neutralLeaf } from '../sprites/definitions'
import { createPixelCanvas, createSpriteInstance, drawSprite } from '../sprites/renderer'

/**
 * Vista #/semana — "Mi semana"
 *
 * Principios:
 * - A demanda: nunca notifica ni presiona.
 * - Sin rachas, sin porcentajes, sin comparaciones, sin "mejor/peor".
 * - Días sin registro representados con hojita neutra, sin marca de falta.
 * - Lo difícil no se amplifica: solo lo lindo y categorías de pausas sin cantidades.
 * - Patrones opcionales con un máximo de 1 observación suave a la vez.
 * - Frase cálida de cierre rotativa y enlace discreto a ayuda.
 */
export function renderSemana(container: HTMLElement): () => void {
  container.innerHTML = ''

  let weekOffset = 0
  let gardenState = loadGardenState()

  const section = document.createElement('section')
  section.className = 'semana-screen'
  section.setAttribute('role', 'main')
  section.setAttribute('aria-label', copy.semana.title)

  const style = document.createElement('style')
  style.textContent = `
    .semana-screen {
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

    .semana-top-bar {
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
      line-height: 1.6;
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

    .semana-title {
      font-family: var(--font-pixel);
      font-size: 0.75rem;
      color: var(--color-bosque);
      line-height: 1.8;
      margin: 0;
      text-align: center;
      flex: 1;
    }

    .week-nav {
      display: flex;
      align-items: center;
      justify-content: space-between;
      gap: var(--space-sm);
      background-color: var(--color-crema);
      border: 2px solid var(--color-bosque);
      border-radius: var(--border-radius-md);
      padding: var(--space-xs) var(--space-sm);
    }

    .week-nav-btn {
      font-family: var(--font-pixel);
      font-size: 0.5625rem;
      color: var(--color-tinta);
      background-color: var(--color-salvia);
      border: 1px solid var(--color-bosque);
      border-radius: var(--border-radius-sm);
      padding: 4px 8px;
      min-height: 36px;
      cursor: pointer;
      transition: opacity var(--transition-fast);
    }

    .week-nav-btn:disabled {
      opacity: 0.35;
      cursor: default;
    }

    .week-nav-label {
      font-family: var(--font-ui);
      font-size: var(--font-size-xs);
      font-weight: 600;
      color: var(--color-bosque);
      text-align: center;
      margin: 0;
    }

    /* Tira de días */
    .days-strip {
      display: flex;
      gap: 6px;
      justify-content: space-between;
      list-style: none;
      padding: 0;
      margin: 0;
      overflow-x: auto;
    }

    .day-strip-item {
      flex: 1;
      min-width: 44px;
      background-color: var(--color-crema);
      border: 2px solid var(--color-tinta);
      border-radius: var(--border-radius-sm);
      padding: 6px 2px;
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 4px;
      text-align: center;
      box-shadow: 1px 1px 0 var(--color-bosque);
    }

    .day-strip-name {
      font-family: var(--font-pixel);
      font-size: 0.5rem;
      color: var(--color-bosque);
      margin: 0;
    }

    .day-strip-canvas {
      width: 28px;
      height: 28px;
      display: block;
      image-rendering: pixelated;
    }

    .content-card {
      background-color: var(--color-crema);
      border: 2px solid var(--color-tinta);
      border-radius: var(--border-radius-md);
      padding: var(--space-md);
      display: flex;
      flex-direction: column;
      gap: var(--space-xs);
      box-shadow: 2px 2px 0 var(--color-bosque);
    }

    .card-title {
      font-family: var(--font-pixel);
      font-size: 0.625rem;
      color: var(--color-bosque);
      margin: 0;
      line-height: 1.6;
    }

    .card-subtitle {
      font-family: var(--font-ui);
      font-size: var(--font-size-xs);
      color: var(--color-agua-profunda);
      margin: 0 0 4px;
    }

    .nice-quote-item {
      background-color: var(--color-overlay-crema);
      border-left: 3px solid var(--color-salvia);
      padding: var(--space-xs) var(--space-sm);
      border-radius: 0 var(--border-radius-sm) var(--border-radius-sm) 0;
      display: flex;
      flex-direction: column;
      gap: 2px;
    }

    .nice-quote-day {
      font-family: var(--font-pixel);
      font-size: 0.5rem;
      color: var(--color-bosque);
    }

    .nice-quote-text {
      font-family: var(--font-ui);
      font-size: var(--font-size-sm);
      color: var(--color-tinta);
      font-style: italic;
      margin: 0;
      line-height: 1.4;
    }

    .cared-pills {
      display: flex;
      flex-wrap: wrap;
      gap: 6px;
    }

    .cared-pill {
      font-family: var(--font-ui);
      font-size: var(--font-size-xs);
      font-weight: 600;
      background-color: var(--color-salvia);
      color: var(--color-tinta);
      border: 1px solid var(--color-bosque);
      border-radius: var(--border-radius-sm);
      padding: 3px 8px;
    }

    .pattern-card {
      background-color: var(--color-crema);
      border: 2px solid var(--color-bosque);
      border-radius: var(--border-radius-md);
      padding: var(--space-sm) var(--space-md);
      display: flex;
      flex-direction: column;
      gap: var(--space-xs);
    }

    .pattern-text {
      font-family: var(--font-ui);
      font-size: var(--font-size-sm);
      color: var(--color-tinta);
      line-height: 1.45;
      margin: 0;
    }

    .pattern-action-btn {
      align-self: flex-start;
      font-family: var(--font-ui);
      font-size: var(--font-size-xs);
      font-weight: 600;
      color: var(--color-crema);
      background-color: var(--color-bosque);
      border: 1px solid var(--color-tinta);
      border-radius: var(--border-radius-sm);
      padding: var(--space-xs) var(--space-sm);
      min-height: 38px;
      cursor: pointer;
      text-decoration: none;
      display: inline-flex;
      align-items: center;
    }

    .pattern-dismiss-btn {
      align-self: flex-start;
      font-family: var(--font-ui);
      font-size: var(--font-size-xs);
      color: var(--color-agua-profunda);
      background: none;
      border: none;
      padding: 0;
      cursor: pointer;
      text-decoration: underline;
    }

    .closing-quote-card {
      background-color: transparent;
      text-align: center;
      padding: var(--space-xs) var(--space-md);
      margin-top: auto;
    }

    .closing-quote-text {
      font-family: var(--font-ui);
      font-size: var(--font-size-sm);
      font-weight: 600;
      color: var(--color-bosque);
      font-style: italic;
      margin: 0;
      line-height: 1.4;
    }

    .help-link-wrap {
      text-align: center;
      padding: var(--space-xs) 0;
    }

    .help-link {
      font-family: var(--font-pixel);
      font-size: 0.5625rem;
      color: var(--color-bosque);
      text-decoration: none;
      border-bottom: 1px solid var(--color-bosque);
      padding-bottom: 2px;
    }
  `
  document.head.appendChild(style)

  // Barra superior
  const topBar = document.createElement('div')
  topBar.className = 'semana-top-bar'

  const backBtn = document.createElement('button')
  backBtn.className = 'back-btn'
  backBtn.textContent = copy.app.back
  backBtn.setAttribute('aria-label', 'Volver al jardín')
  backBtn.addEventListener('click', () => {
    window.location.hash = '#/jardin'
  })

  const title = document.createElement('h1')
  title.className = 'semana-title'
  title.textContent = copy.semana.title

  topBar.appendChild(backBtn)
  topBar.appendChild(title)
  section.appendChild(topBar)

  // Contenedor dinámico de la semana
  const dynamicContainer = document.createElement('div')
  dynamicContainer.style.cssText = 'display: flex; flex-direction: column; gap: var(--space-md); width: 100%;'
  section.appendChild(dynamicContainer)

  const renderWeekContent = () => {
    dynamicContainer.innerHTML = ''

    const entries = listEntries().data ?? []
    const summary: WeekSummary = buildWeekSummary({
      entries,
      weekOffset,
      includeWeekend: gardenState.weekShowWeekend,
    })

    // Navegación de semana
    const navCard = document.createElement('div')
    navCard.className = 'week-nav'
    navCard.setAttribute('aria-label', 'Navegación de semanas')

    const prevBtn = document.createElement('button')
    prevBtn.className = 'week-nav-btn'
    prevBtn.textContent = '← Anterior'
    prevBtn.setAttribute('aria-label', 'Ver semana anterior')
    prevBtn.addEventListener('click', () => {
      weekOffset--
      renderWeekContent()
    })

    const weekLabel = document.createElement('p')
    weekLabel.className = 'week-nav-label'
    weekLabel.textContent = summary.label

    const nextBtn = document.createElement('button')
    nextBtn.className = 'week-nav-btn'
    nextBtn.textContent = 'Siguiente →'
    nextBtn.setAttribute('aria-label', 'Ver semana siguiente')
    nextBtn.disabled = !summary.canGoNext
    nextBtn.addEventListener('click', () => {
      if (summary.canGoNext) {
        weekOffset++
        renderWeekContent()
      }
    })

    navCard.appendChild(prevBtn)
    navCard.appendChild(weekLabel)
    navCard.appendChild(nextBtn)
    dynamicContainer.appendChild(navCard)

    // Tira de días (lista accesible)
    const daysStrip = document.createElement('ul')
    daysStrip.className = 'days-strip'
    daysStrip.setAttribute('role', 'list')
    daysStrip.setAttribute('aria-label', 'Días de la semana')

    for (const d of summary.days) {
      const itemEl = document.createElement('li')
      itemEl.className = 'day-strip-item'
      itemEl.setAttribute('role', 'listitem')
      itemEl.setAttribute('aria-label', d.accessibleLabel)

      const dName = document.createElement('span')
      dName.className = 'day-strip-name'
      dName.textContent = d.dayName.slice(0, 3)

      // Canvas con sprite del sapo en ese mood, o la hojita neutra
      const { canvas, ctx } = createPixelCanvas(28, 28)
      canvas.className = 'day-strip-canvas'
      canvas.setAttribute('aria-hidden', 'true')

      if (d.mood) {
        const spriteDef = MOOD_SPRITES[d.mood]
        const inst = createSpriteInstance(spriteDef)
        // Sprite 20x18 a escala 1 o 1.4
        drawSprite(ctx, inst, 4, 5, 1)
      } else {
        const inst = createSpriteInstance(neutralLeaf)
        // Hojita 16x16 centrada
        drawSprite(ctx, inst, 6, 6, 1)
      }

      itemEl.appendChild(dName)
      itemEl.appendChild(canvas)
      daysStrip.appendChild(itemEl)
    }
    dynamicContainer.appendChild(daysStrip)

    // Sección "Lo lindo de la semana" (solo si hay)
    if (summary.niceMoments.length > 0) {
      const niceCard = document.createElement('div')
      niceCard.className = 'content-card'

      const nTitle = document.createElement('h2')
      nTitle.className = 'card-title'
      nTitle.textContent = copy.semana.niceTitle
      niceCard.appendChild(nTitle)

      for (const m of summary.niceMoments) {
        const qWrap = document.createElement('div')
        qWrap.className = 'nice-quote-item'

        const qDay = document.createElement('span')
        qDay.className = 'nice-quote-day'
        qDay.textContent = m.dayName

        const qText = document.createElement('p')
        qText.className = 'nice-quote-text'
        qText.textContent = `“${m.text}”`

        qWrap.appendChild(qDay)
        qWrap.appendChild(qText)
        niceCard.appendChild(qWrap)
      }

      dynamicContainer.appendChild(niceCard)
    }

    // Sección "Lo que cuidaste" (solo si hay)
    if (summary.caredCategories.length > 0) {
      const caredCard = document.createElement('div')
      caredCard.className = 'content-card'

      const cTitle = document.createElement('h2')
      cTitle.className = 'card-title'
      cTitle.textContent = copy.semana.caredTitle

      const cSub = document.createElement('p')
      cSub.className = 'card-subtitle'
      cSub.textContent = copy.semana.caredSubtitle

      const pillsWrap = document.createElement('div')
      pillsWrap.className = 'cared-pills'

      for (const cat of summary.caredCategories) {
        const pill = document.createElement('span')
        pill.className = 'cared-pill'
        pill.textContent = cat
        pillsWrap.appendChild(pill)
      }

      caredCard.appendChild(cTitle)
      caredCard.appendChild(cSub)
      caredCard.appendChild(pillsWrap)
      dynamicContainer.appendChild(caredCard)
    }

    // Sección "Cosas que noté" (patrones, opcional)
    if (gardenState.showPatterns) {
      const pattern: PatternObservation | null = detectPatterns(
        entries,
        gardenState.dismissedPatternIds
      )

      if (pattern) {
        const pCard = document.createElement('div')
        pCard.className = 'pattern-card'

        const pTitle = document.createElement('h2')
        pTitle.className = 'card-title'
        pTitle.textContent = copy.semana.patternsTitle

        const pText = document.createElement('p')
        pText.className = 'pattern-text'
        pText.textContent = pattern.text

        pCard.appendChild(pTitle)
        pCard.appendChild(pText)

        if (pattern.actionLabel && pattern.actionRoute) {
          const actBtn = document.createElement('a')
          actBtn.className = 'pattern-action-btn'
          actBtn.href = pattern.actionRoute
          actBtn.textContent = pattern.actionLabel
          pCard.appendChild(actBtn)
        }

        const dismissBtn = document.createElement('button')
        dismissBtn.type = 'button'
        dismissBtn.className = 'pattern-dismiss-btn'
        dismissBtn.textContent = copy.semana.dismissPatternBtn
        dismissBtn.addEventListener('click', () => {
          gardenState = {
            ...gardenState,
            dismissedPatternIds: [...gardenState.dismissedPatternIds, pattern.id],
          }
          saveGardenState(gardenState)
          pCard.remove()
        })
        pCard.appendChild(dismissBtn)

        dynamicContainer.appendChild(pCard)
      }
    }

    // Frase de cierre rotativa
    const quotes = copy.semana.closingQuotes
    // Rotar según la semana del año
    const quoteIndex = Math.abs(weekOffset) % quotes.length
    const closingCard = document.createElement('div')
    closingCard.className = 'closing-quote-card'
    const closingText = document.createElement('p')
    closingText.className = 'closing-quote-text'
    closingText.textContent = quotes[quoteIndex]
    closingCard.appendChild(closingText)
    dynamicContainer.appendChild(closingCard)

    // Enlace discreto a Ayuda al pie
    const helpWrap = document.createElement('div')
    helpWrap.className = 'help-link-wrap'
    const helpLink = document.createElement('a')
    helpLink.className = 'help-link'
    helpLink.href = '#/ayuda'
    helpLink.textContent = copy.semana.helpLink
    helpWrap.appendChild(helpLink)
    dynamicContainer.appendChild(helpWrap)
  }

  renderWeekContent()
  container.appendChild(section)

  return () => {
    style.remove()
  }
}

