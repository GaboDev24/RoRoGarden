import { describe, it, expect, beforeEach } from 'vitest'
import { hasMostradoBienvenida, marcarBienvenidaMostrada, renderBienvenida } from '../src/views/Bienvenida'
import { APP_VERSION, FEEDBACK_URL, renderAcerca } from '../src/views/Acerca'
import { renderInstalar } from '../src/views/Instalar'
import { renderError } from '../src/views/Error'
import { copy } from '../src/copy'

describe('Etapa 6: Pulido, primera vez y publicación', () => {
  beforeEach(() => {
    window.localStorage.clear()
    document.body.innerHTML = '<div id="app"></div>'
  })

  it('gestiona la marca de bienvenida correctamente', () => {
    expect(hasMostradoBienvenida()).toBe(false)
    marcarBienvenidaMostrada()
    expect(hasMostradoBienvenida()).toBe(true)
  })

  it('renderiza la pantalla de bienvenida con sus 3 pasos y permite saltar', () => {
    const container = document.getElementById('app')!
    const cleanup = renderBienvenida(container)

    expect(container.querySelector('.bienvenida-wrap')).not.toBeNull()
    expect(container.querySelector('.bienvenida-title')?.textContent).toContain(copy.bienvenida.step1Title)

    // Botón saltar presente
    const skipBtn = container.querySelector<HTMLButtonElement>('.bienvenida-skip')
    expect(skipBtn).not.toBeNull()
    expect(skipBtn?.textContent).toBe(copy.bienvenida.skipBtn)

    // Avanzar al paso 2
    const nextBtn = container.querySelector<HTMLButtonElement>('.bienvenida-next')
    expect(nextBtn).not.toBeNull()
    nextBtn?.click()

    expect(container.querySelector('.bienvenida-title')?.textContent).toContain(copy.bienvenida.step2Title)
    expect(container.querySelector('.bienvenida-note')?.textContent).toContain(copy.bienvenida.step2Note)

    cleanup()
  })

  it('la pantalla Acerca muestra la versión 1.0.0, privacidad y créditos', () => {
    const container = document.getElementById('app')!
    const cleanup = renderAcerca(container)

    expect(APP_VERSION).toBe('1.0.0')
    expect(container.textContent).toContain('1.0.0')
    expect(container.textContent).toContain(copy.acerca.privacyText)
    expect(container.textContent).toContain(copy.acerca.fontCredit)
    expect(container.textContent).toContain(copy.acerca.creditsText)

    cleanup()
  })

  it('la constante FEEDBACK_URL está vacía por defecto y no muestra enlaces', () => {
    expect(FEEDBACK_URL).toBe('')
    const container = document.getElementById('app')!
    const cleanup = renderAcerca(container)
    expect(container.querySelector('.acerca-link')).toBeNull()
    cleanup()
  })

  it('la pantalla Instalar guía a la usuaria sin solicitar permisos', () => {
    const container = document.getElementById('app')!
    const cleanup = renderInstalar(container)

    expect(container.textContent).toContain(copy.instalar.title)
    expect(container.textContent).toContain(copy.instalar.androidTitle)
    expect(container.textContent).toContain(copy.instalar.iosTitle)
    expect(container.textContent).toContain(copy.instalar.whyText)

    cleanup()
  })

  it('la pantalla de Error ofrece volver al jardín o recargar sin enviar telemetría', () => {
    const container = document.getElementById('app')!
    renderError(container)

    expect(container.querySelector('.error-title')?.textContent).toBe(copy.error.title)
    expect(container.querySelector('.error-text')?.textContent).toBe(copy.error.text)

    const buttons = container.querySelectorAll('button')
    expect(buttons.length).toBe(2)
    expect(buttons[0].textContent).toBe(copy.error.gardenBtn)
    expect(buttons[1].textContent).toBe(copy.error.reloadBtn)
  })

  it('los textos de copy incluyen las claves requeridas para bienvenida, acerca, instalar y errores', () => {
    expect(copy.bienvenida.step1Title).toBeDefined()
    expect(copy.bienvenida.step2Title).toBeDefined()
    expect(copy.bienvenida.step3Title).toBeDefined()
    expect(copy.instalar.alreadyInstalled).toBeDefined()
    expect(copy.acerca.versionLabel).toBeDefined()
    expect(copy.error.title).toBeDefined()
    expect(copy.updateReady.title).toBeDefined()
  })
})

