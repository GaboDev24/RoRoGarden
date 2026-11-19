import { describe, it, expect, beforeEach, afterEach, vi } from 'vitest'
import { renderJardin } from '../src/views/Jardin'

describe('Jardin — Versión de Canvas Adaptado a PC', () => {
  let container: HTMLElement

  beforeEach(() => {
    localStorage.clear()
    container = document.createElement('div')
    container.className = 'container'
    document.body.appendChild(container)

    HTMLCanvasElement.prototype.getContext = vi.fn().mockReturnValue({
      scale: vi.fn(),
      fillRect: vi.fn(),
      clearRect: vi.fn(),
      beginPath: vi.fn(),
      ellipse: vi.fn(),
      fill: vi.fn(),
      stroke: vi.fn(),
      drawImage: vi.fn(),
    }) as any
  })

  afterEach(() => {
    container.remove()
    vi.restoreAllMocks()
  })

  it('renderiza el canvas del jardín y el botón de alternar vista PC/móvil', () => {
    const cleanup = renderJardin(container)
    const canvas = container.querySelector('.stage-canvas')
    expect(canvas).toBeTruthy()

    // Botón de alternar vista PC en la barra de navegación
    const navBtns = container.querySelectorAll('.jardin-nav button')
    expect(navBtns.length).toBeGreaterThanOrEqual(4)

    cleanup()
  })

  it('respeta la preferencia de vista PC si está guardada en localStorage', () => {
    localStorage.setItem('roro_pc_view_mode', 'true')
    const cleanup = renderJardin(container)

    const screen = container.querySelector('.jardin-screen')
    expect(screen?.classList.contains('jardin-pc-mode')).toBe(true)
    expect(container.classList.contains('container-jardin-pc')).toBe(true)

    cleanup()
    expect(container.classList.contains('container-jardin-pc')).toBe(false)
  })

  it('permite alternar entre vista PC y vista compacta con el botón', () => {
    localStorage.setItem('roro_pc_view_mode', 'false')
    const cleanup = renderJardin(container)

    const screen = container.querySelector('.jardin-screen')!
    expect(screen.classList.contains('jardin-pc-mode')).toBe(false)

    // Buscar el botón de toggle PC por su aria-label
    const toggleBtn = container.querySelector('button[aria-label*="PC"]') as HTMLButtonElement
    expect(toggleBtn).toBeTruthy()

    toggleBtn.click()
    expect(screen.classList.contains('jardin-pc-mode')).toBe(true)
    expect(localStorage.getItem('roro_pc_view_mode')).toBe('true')

    toggleBtn.click()
    expect(screen.classList.contains('jardin-pc-mode')).toBe(false)
    expect(localStorage.getItem('roro_pc_view_mode')).toBe('false')

    cleanup()
  })

  it('incluye la pista visual de atajos de teclado para PC', () => {
    const cleanup = renderJardin(container)
    const hint = container.querySelector('.pc-keyboard-hint')
    expect(hint).toBeTruthy()
    expect(hint?.textContent).toContain('Espacio')
    expect(hint?.textContent).toContain('Tecla A')
    cleanup()
  })
})
