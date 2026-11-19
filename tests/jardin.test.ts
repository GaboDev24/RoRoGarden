import { describe, it, expect, beforeEach, vi } from 'vitest'
import { renderJardin } from '../src/views/Jardin'
import { saveGardenState, loadGardenState } from '../src/storage'

describe('Vista Jardin — Adaptación PC y Ergonomía a una mano', () => {
  let container: HTMLElement

  beforeEach(() => {
    container = document.createElement('div')
    document.body.innerHTML = ''
    document.body.appendChild(container)
    localStorage.clear()
    vi.restoreAllMocks()

    HTMLCanvasElement.prototype.getContext = vi.fn().mockReturnValue({
      scale: vi.fn(),
      fillRect: vi.fn(),
      beginPath: vi.fn(),
      ellipse: vi.fn(),
      fill: vi.fn(),
      stroke: vi.fn(),
      drawImage: vi.fn(),
      clearRect: vi.fn(),
      fillStyle: '',
      strokeStyle: '',
      lineWidth: 1,
    }) as any
  })

  it('renderiza el canvas del jardín y el contenedor adaptable a PC', () => {
    const cleanup = renderJardin(container)

    const stageWrapper = container.querySelector('.stage-wrapper')
    expect(stageWrapper).not.toBeNull()

    const canvasContainer = container.querySelector('.canvas-container')
    expect(canvasContainer).not.toBeNull()

    const canvas = container.querySelector('canvas.stage-canvas')
    expect(canvas).not.toBeNull()

    // En resolución nativa el canvas tiene proporción 14:11 (280x220)
    expect((canvas as HTMLCanvasElement).width).toBe(280)
    expect((canvas as HTMLCanvasElement).height).toBe(220)

    cleanup()
  })

  it('aplica la clase hand-right por defecto en el panel de acciones', () => {
    const cleanup = renderJardin(container)

    const actions = container.querySelector('.jardin-actions')
    expect(actions).not.toBeNull()
    expect(actions?.classList.contains('hand-right')).toBe(true)

    const buttons = actions?.querySelectorAll('.action-btn')
    expect(buttons?.length).toBe(4) // Pausa, Check-in, Diario, Historial

    cleanup()
  })

  it('aplica la clase hand-left cuando la usuaria configura mano izquierda', () => {
    const state = loadGardenState()
    saveGardenState({ ...state, handMode: 'left' })

    const cleanup = renderJardin(container)

    const actions = container.querySelector('.jardin-actions')
    expect(actions?.classList.contains('hand-left')).toBe(true)
    expect(actions?.classList.contains('hand-right')).toBe(false)

    cleanup()
  })

  it('aplica la clase hand-center cuando la usuaria configura centrado', () => {
    const state = loadGardenState()
    saveGardenState({ ...state, handMode: 'center' })

    const cleanup = renderJardin(container)

    const actions = container.querySelector('.jardin-actions')
    expect(actions?.classList.contains('hand-center')).toBe(true)

    cleanup()
  })

  it('permite alternar de mano al instante con el botón toggle del panel', () => {
    const cleanup = renderJardin(container)

    const toggleBtn = container.querySelector('.hand-toggle-btn') as HTMLButtonElement
    expect(toggleBtn).not.toBeNull()
    expect(toggleBtn.textContent).toContain('Mano der.')

    // Click para alternar a mano izquierda
    toggleBtn.click()
    expect(toggleBtn.textContent).toContain('Mano izq.')
    expect(container.querySelector('.jardin-actions')?.classList.contains('hand-left')).toBe(true)

    // Click para alternar a centrado
    toggleBtn.click()
    expect(toggleBtn.textContent).toContain('Centro')
    expect(container.querySelector('.jardin-actions')?.classList.contains('hand-center')).toBe(true)

    cleanup()
  })

  it('despliega el menú rápido al pulsar el botón Más del dock de pulgar', () => {
    const cleanup = renderJardin(container)

    const moreBtn = container.querySelector('.hand-more-btn') as HTMLButtonElement
    expect(moreBtn).not.toBeNull()

    // Inicialmente no está abierto
    expect(container.querySelector('.hand-quick-menu')).toBeNull()

    // Abrir menú rápido
    moreBtn.click()
    const menu = container.querySelector('.hand-quick-menu')
    expect(menu).not.toBeNull()
    expect(menu?.textContent).toContain('Mi colección')
    expect(menu?.textContent).toContain('Acomodar jardín')
    expect(menu?.textContent).toContain('Mi semana')
    expect(menu?.textContent).toContain('Ajustes')

    // Click afuera lo cierra
    document.body.click()
    expect(container.querySelector('.hand-quick-menu')).toBeNull()

    cleanup()
  })
})
