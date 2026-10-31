/**
 * views/Pausa.ts — Pantalla "Una pausa" (#/pausa).
 *
 * Ofrece 3 micro-desafíos al azar, filtro por categoría, botón "Otras ideas",
 * acceso directo a "Respirar un rato" y botón "Ahora no" con igual peso visual.
 */

import { copy } from '../copy'
import { CHALLENGES, type ChallengeCategory, CATEGORY_LABELS } from '../challenges'
import { pickChallenges } from '../pick'
import { createFaIcon } from '../icons'

const CATEGORIES: Array<ChallengeCategory | 'todas'> = [
  'todas',
  'voz',
  'cuerpo',
  'silencio',
  'respiracion',
  'animo',
]

export function renderPausa(container: HTMLElement): () => void {
  const section = document.createElement('section')
  section.className = 'pausa-view screen-fade-in'
  section.setAttribute('aria-label', copy.pausa.title)

  const style = document.createElement('style')
  style.textContent = `
    .pausa-view {
      display: flex;
      flex-direction: column;
      gap: var(--space-md);
      padding: var(--space-md) var(--space-md) var(--space-xl);
      max-width: 480px;
      margin: 0 auto;
      width: 100%;
    }

    .pausa-nav {
      display: flex;
      align-items: center;
      justify-content: space-between;
      width: 100%;
    }

    .pausa-nav-btn {
      font-family: var(--font-ui);
      font-size: var(--font-size-sm);
      color: var(--color-bosque);
      background: none;
      border: none;
      cursor: pointer;
      padding: var(--space-xs) var(--space-sm);
      min-height: var(--touch-target-min);
      display: flex;
      align-items: center;
      gap: var(--space-xs);
    }

    .pausa-nav-btn:focus-visible {
      outline: 2px solid var(--color-acento);
      outline-offset: 2px;
    }

    .pausa-header {
      text-align: center;
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: var(--space-xs);
    }

    .pausa-title {
      font-family: var(--font-pixel);
      font-size: 0.875rem;
      color: var(--color-bosque);
      margin: 0;
      line-height: 1.6;
    }

    .pausa-subtitle {
      font-family: var(--font-ui);
      font-size: var(--font-size-sm);
      color: var(--color-agua-profunda);
      margin: 0;
      line-height: 1.4;
    }

    /* Filtro horizontal de categorías con scroll táctil suave */
    .filter-bar {
      display: flex;
      gap: var(--space-xs);
      overflow-x: auto;
      padding: var(--space-xs) 0;
      scrollbar-width: none;
      -webkit-overflow-scrolling: touch;
      margin: 0 calc(-1 * var(--space-md));
      padding-left: var(--space-md);
      padding-right: var(--space-md);
    }

    .filter-bar::-webkit-scrollbar {
      display: none;
    }

    .filter-chip {
      font-family: var(--font-ui);
      font-size: var(--font-size-xs);
      font-weight: 600;
      color: var(--color-bosque);
      background-color: var(--color-crema);
      border: 1.5px solid var(--color-salvia);
      border-radius: var(--border-radius-full);
      padding: var(--space-xs) var(--space-sm);
      min-height: var(--touch-target-min);
      cursor: pointer;
      white-space: nowrap;
      transition: background-color var(--transition-fast), color var(--transition-fast), border-color var(--transition-fast);
      display: flex;
      align-items: center;
      justify-content: center;
    }

    .filter-chip.active {
      background-color: var(--color-bosque);
      color: var(--color-crema);
      border-color: var(--color-tinta);
    }

    .filter-chip:focus-visible {
      outline: 2px solid var(--color-acento);
      outline-offset: 2px;
    }

    /* Lista de desafíos */
    .challenges-list {
      display: flex;
      flex-direction: column;
      gap: var(--space-sm);
    }

    .challenge-card {
      background-color: var(--color-crema);
      border: 2px solid var(--color-tinta);
      border-radius: var(--border-radius-md);
      padding: var(--space-md);
      display: flex;
      flex-direction: column;
      gap: var(--space-xs);
      box-shadow: 2px 2px 0 var(--color-tinta);
    }

    .challenge-card-top {
      display: flex;
      align-items: center;
      justify-content: space-between;
    }

    .challenge-category-badge {
      font-family: var(--font-ui);
      font-size: var(--font-size-xs);
      font-weight: 700;
      text-transform: uppercase;
      letter-spacing: 0.04em;
      color: var(--color-bosque);
      background-color: var(--color-salvia);
      padding: 2px 8px;
      border-radius: var(--border-radius-sm);
    }

    .challenge-duration {
      font-family: var(--font-ui);
      font-size: var(--font-size-xs);
      color: var(--color-agua-profunda);
      font-weight: 600;
    }

    .challenge-card-title {
      font-family: var(--font-ui);
      font-size: var(--font-size-md);
      font-weight: 700;
      color: var(--color-tinta);
      margin: var(--space-xs) 0;
      line-height: 1.3;
    }

    .challenge-btn-start {
      font-family: var(--font-ui);
      font-size: var(--font-size-sm);
      font-weight: 600;
      color: var(--color-crema);
      background-color: var(--color-bosque);
      border: 2px solid var(--color-tinta);
      border-radius: var(--border-radius-sm);
      padding: var(--space-xs) var(--space-md);
      min-height: var(--touch-target-min);
      cursor: pointer;
      display: flex;
      align-items: center;
      justify-content: center;
      gap: var(--space-xs);
      align-self: flex-start;
      margin-top: var(--space-xs);
      transition: transform var(--transition-fast), opacity var(--transition-fast);
    }

    .challenge-btn-start:hover {
      opacity: 0.92;
      transform: translateY(-1px);
    }

    .challenge-btn-start:active {
      transform: translateY(1px);
    }

    .challenge-btn-start:focus-visible {
      outline: 2px solid var(--color-acento);
      outline-offset: 2px;
    }

    /* Botón Otras ideas */
    .btn-other-ideas {
      font-family: var(--font-ui);
      font-size: var(--font-size-sm);
      font-weight: 600;
      color: var(--color-bosque);
      background-color: var(--color-menta);
      border: 2px solid var(--color-musgo);
      border-radius: var(--border-radius-md);
      padding: var(--space-sm) var(--space-md);
      min-height: var(--touch-target-min);
      cursor: pointer;
      display: flex;
      align-items: center;
      justify-content: center;
      gap: var(--space-xs);
      margin: var(--space-xs) 0;
    }

    .btn-other-ideas:focus-visible {
      outline: 2px solid var(--color-acento);
      outline-offset: 2px;
    }

    /* Tarjeta Respirar un rato */
    .respirar-card {
      background-color: var(--color-celeste);
      border: 2px solid var(--color-agua-profunda);
      border-radius: var(--border-radius-md);
      padding: var(--space-md);
      display: flex;
      flex-direction: column;
      gap: var(--space-xs);
    }

    .respirar-card-title {
      font-family: var(--font-pixel);
      font-size: 0.75rem;
      color: var(--color-agua-profunda);
      margin: 0;
      display: flex;
      align-items: center;
      gap: var(--space-xs);
    }

    .respirar-card-desc {
      font-family: var(--font-ui);
      font-size: var(--font-size-xs);
      color: var(--color-tinta);
      margin: 0;
      line-height: 1.4;
    }

    .respirar-card-btn {
      font-family: var(--font-ui);
      font-size: var(--font-size-sm);
      font-weight: 600;
      color: var(--color-crema);
      background-color: var(--color-agua-profunda);
      border: 2px solid var(--color-tinta);
      border-radius: var(--border-radius-sm);
      padding: var(--space-xs) var(--space-md);
      min-height: var(--touch-target-min);
      cursor: pointer;
      display: flex;
      align-items: center;
      justify-content: center;
      gap: var(--space-xs);
      align-self: flex-start;
      margin-top: var(--space-xs);
    }

    .respirar-card-btn:focus-visible {
      outline: 2px solid var(--color-acento);
      outline-offset: 2px;
    }

    /* Botón Ahora no (mismo peso visual que los de salir, sin culpa) */
    .btn-now-not {
      font-family: var(--font-ui);
      font-size: var(--font-size-sm);
      font-weight: 600;
      color: var(--color-musgo);
      background: none;
      border: 2px solid var(--color-salvia);
      border-radius: var(--border-radius-md);
      padding: var(--space-sm) var(--space-md);
      min-height: var(--touch-target-min);
      cursor: pointer;
      text-align: center;
      margin-top: var(--space-xs);
    }

    .btn-now-not:focus-visible {
      outline: 2px solid var(--color-acento);
      outline-offset: 2px;
    }
  `
  document.head.appendChild(style)

  // ── Navegación ──
  const nav = document.createElement('nav')
  nav.className = 'pausa-nav'
  nav.setAttribute('aria-label', 'Navegación de pausa')

  const backBtn = document.createElement('button')
  backBtn.className = 'pausa-nav-btn'
  backBtn.textContent = copy.app.back
  backBtn.setAttribute('aria-label', 'Volver al jardín')
  backBtn.addEventListener('click', () => {
    window.location.hash = '#/jardin'
  })
  nav.appendChild(backBtn)

  // ── Header ──
  const header = document.createElement('header')
  header.className = 'pausa-header'

  const title = document.createElement('h1')
  title.className = 'pausa-title'
  title.textContent = copy.pausa.title

  const subtitle = document.createElement('p')
  subtitle.className = 'pausa-subtitle'
  subtitle.textContent = copy.pausa.subtitle

  header.appendChild(title)
  header.appendChild(subtitle)

  // ── Filtros por categoría ──
  let selectedCategory: ChallengeCategory | 'todas' = 'todas'
  let currentExcludeIds: string[] = []

  const filterBar = document.createElement('div')
  filterBar.className = 'filter-bar'
  filterBar.setAttribute('role', 'radiogroup')
  filterBar.setAttribute('aria-label', 'Filtrar por categoría')

  const filterButtons: HTMLButtonElement[] = []

  // ── Contenedor de lista ──
  const challengesList = document.createElement('div')
  challengesList.className = 'challenges-list'
  challengesList.setAttribute('aria-live', 'polite')

  function renderChallenges(category: ChallengeCategory | 'todas', excludeIds: string[]) {
    challengesList.innerHTML = ''
    const picked = pickChallenges(CHALLENGES, {
      count: 3,
      category,
      excludeIds,
    })

    currentExcludeIds = picked.map((c) => c.id)

    picked.forEach((challenge) => {
      const card = document.createElement('article')
      card.className = 'challenge-card'

      const top = document.createElement('div')
      top.className = 'challenge-card-top'

      const badge = document.createElement('span')
      badge.className = 'challenge-category-badge'
      badge.textContent = CATEGORY_LABELS[challenge.category]

      const dur = document.createElement('span')
      dur.className = 'challenge-duration'
      dur.textContent = `${challenge.durationSeconds} seg`

      top.appendChild(badge)
      top.appendChild(dur)

      const cardTitle = document.createElement('h2')
      cardTitle.className = 'challenge-card-title'
      cardTitle.textContent = challenge.title

      const startBtn = document.createElement('button')
      startBtn.className = 'challenge-btn-start'
      startBtn.setAttribute('aria-label', `Empezar desafío: ${challenge.title}`)
      startBtn.appendChild(createFaIcon('play', { size: 10 }))
      startBtn.appendChild(document.createTextNode(` ${copy.pausa.startBtn}`))
      startBtn.addEventListener('click', () => {
        window.location.hash = `#/desafio/${challenge.id}`
      })

      card.appendChild(top)
      card.appendChild(cardTitle)
      card.appendChild(startBtn)
      challengesList.appendChild(card)
    })
  }

  CATEGORIES.forEach((cat) => {
    const chip = document.createElement('button')
    chip.className = `filter-chip ${cat === selectedCategory ? 'active' : ''}`
    chip.setAttribute('role', 'radio')
    chip.setAttribute('aria-checked', cat === selectedCategory ? 'true' : 'false')
    chip.textContent = cat === 'todas' ? copy.pausa.filterAll : CATEGORY_LABELS[cat]

    chip.addEventListener('click', () => {
      selectedCategory = cat
      filterButtons.forEach((b) => {
        b.classList.remove('active')
        b.setAttribute('aria-checked', 'false')
      })
      chip.classList.add('active')
      chip.setAttribute('aria-checked', 'true')
      renderChallenges(selectedCategory, [])
    })

    filterButtons.push(chip)
    filterBar.appendChild(chip)
  })

  // ── Botón "Otras ideas" ──
  const otherIdeasBtn = document.createElement('button')
  otherIdeasBtn.className = 'btn-other-ideas'
  otherIdeasBtn.appendChild(createFaIcon('rotate', { size: 12 }))
  otherIdeasBtn.appendChild(document.createTextNode(` ${copy.pausa.otherIdeasBtn}`))
  otherIdeasBtn.addEventListener('click', () => {
    renderChallenges(selectedCategory, currentExcludeIds)
  })

  // ── Tarjeta "Respirar un rato" ──
  const respirarCard = document.createElement('aside')
  respirarCard.className = 'respirar-card'

  const respTitle = document.createElement('h2')
  respTitle.className = 'respirar-card-title'
  respTitle.appendChild(createFaIcon('wind', { size: 12 }))
  respTitle.appendChild(document.createTextNode(` ${copy.pausa.respirarCardTitle}`))

  const respDesc = document.createElement('p')
  respDesc.className = 'respirar-card-desc'
  respDesc.textContent = copy.pausa.respirarCardDesc

  const respBtn = document.createElement('button')
  respBtn.className = 'respirar-card-btn'
  respBtn.textContent = copy.pausa.respirarBtn
  respBtn.setAttribute('aria-label', 'Ir a la pantalla de respiración guiada')
  respBtn.addEventListener('click', () => {
    window.location.hash = '#/respirar'
  })

  respirarCard.appendChild(respTitle)
  respirarCard.appendChild(respDesc)
  respirarCard.appendChild(respBtn)

  // ── Botón "Ahora no" (sin juicio) ──
  const nowNotBtn = document.createElement('button')
  nowNotBtn.className = 'btn-now-not'
  nowNotBtn.textContent = copy.pausa.nowNotBtn
  nowNotBtn.setAttribute('aria-label', 'Volver al jardín sin hacer una pausa ahora')
  nowNotBtn.addEventListener('click', () => {
    window.location.hash = '#/jardin'
  })

  // ── Render inicial ──
  renderChallenges(selectedCategory, [])

  // ── Ensamblado ──
  section.appendChild(nav)
  section.appendChild(header)
  section.appendChild(filterBar)
  section.appendChild(challengesList)
  section.appendChild(otherIdeasBtn)
  section.appendChild(respirarCard)
  section.appendChild(nowNotBtn)
  container.appendChild(section)

  return () => {
    style.remove()
  }
}

