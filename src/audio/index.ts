/**
 * audio/index.ts — Sonidos suaves sintetizados con Web Audio API y vibración háptica.
 *
 * Principios:
 * - Sin archivos de audio externos pesados (generación puramente procedural).
 * - Sonido y vibración desactivados por defecto (opcionales).
 * - Solo se reproducen tras interacción explícita del usuario.
 * - Tolerancia total a fallos: si el navegador no soporta AudioContext o vibrate,
 *   funciona en silencio absoluto sin emitir errores ni bloquear la app.
 */

const STORAGE_KEY_SOUND = 'roro_setting_sound'
const STORAGE_KEY_VIBRATION = 'roro_setting_vibration'

let audioCtx: AudioContext | null = null

function getAudioContext(): AudioContext | null {
  if (typeof window === 'undefined') return null
  try {
    if (!audioCtx) {
      const AudioContextClass =
        window.AudioContext ||
        (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext
      if (AudioContextClass) {
        audioCtx = new AudioContextClass()
      }
    }
    return audioCtx
  } catch {
    return null
  }
}

/**
 * Consulta si el sonido está habilitado en los ajustes (por defecto: falso).
 */
export function isSoundEnabled(): boolean {
  try {
    if (typeof window === 'undefined' || !window.localStorage) return false
    return window.localStorage.getItem(STORAGE_KEY_SOUND) === 'true'
  } catch {
    return false
  }
}

/**
 * Actualiza la preferencia de sonido en el almacenamiento local.
 */
export function setSoundEnabled(enabled: boolean): void {
  try {
    if (typeof window !== 'undefined' && window.localStorage) {
      window.localStorage.setItem(STORAGE_KEY_SOUND, enabled ? 'true' : 'false')
    }
  } catch {
    // Silencioso
  }
}

/**
 * Consulta si la vibración está habilitada en los ajustes (por defecto: falso).
 */
export function isVibrationEnabled(): boolean {
  try {
    if (typeof window === 'undefined' || !window.localStorage) return false
    return window.localStorage.getItem(STORAGE_KEY_VIBRATION) === 'true'
  } catch {
    return false
  }
}

/**
 * Actualiza la preferencia de vibración en el almacenamiento local.
 */
export function setVibrationEnabled(enabled: boolean): void {
  try {
    if (typeof window !== 'undefined' && window.localStorage) {
      window.localStorage.setItem(STORAGE_KEY_VIBRATION, enabled ? 'true' : 'false')
    }
  } catch {
    // Silencioso
  }
}

/**
 * Reproduce una campana tibetana suave y armónica.
 * Frecuencia fundamental en 528 Hz (tono calmo) con sobretono sutil y decaimiento exponencial.
 */
export function playChime(): void {
  if (!isSoundEnabled()) return

  try {
    const ctx = getAudioContext()
    if (!ctx) return

    if (ctx.state === 'suspended') {
      ctx.resume().catch(() => {})
    }

    const now = ctx.currentTime
    const duration = 1.4

    // Master gain para volumen bajo y suave
    const masterGain = ctx.createGain()
    masterGain.gain.setValueAtTime(0.001, now)
    masterGain.gain.linearRampToValueAtTime(0.12, now + 0.04)
    masterGain.gain.exponentialRampToValueAtTime(0.0001, now + duration)
    masterGain.connect(ctx.destination)

    // Oscilador 1: Fundamental cálida (528 Hz)
    const osc1 = ctx.createOscillator()
    osc1.type = 'sine'
    osc1.frequency.setValueAtTime(528, now)
    osc1.connect(masterGain)

    // Oscilador 2: Armónico sutil (1056 Hz) a menor ganancia
    const osc2 = ctx.createOscillator()
    osc2.type = 'sine'
    osc2.frequency.setValueAtTime(1056, now)

    const harmonicGain = ctx.createGain()
    harmonicGain.gain.setValueAtTime(0.03, now)
    harmonicGain.gain.exponentialRampToValueAtTime(0.0001, now + duration * 0.8)
    osc2.connect(harmonicGain)
    harmonicGain.connect(masterGain)

    osc1.start(now)
    osc2.start(now)
    osc1.stop(now + duration)
    osc2.stop(now + duration)
  } catch {
    // Fallback silencioso sin romper nada
  }
}

/**
 * Dispara una vibración sutil si el dispositivo lo soporta y la usuaria lo activó.
 */
export function triggerVibration(pattern: number | number[] = 40): void {
  if (!isVibrationEnabled()) return
  try {
    if (typeof navigator !== 'undefined' && typeof navigator.vibrate === 'function') {
      navigator.vibrate(pattern)
    }
  } catch {
    // iPhone u otros navegadores no soportan vibración: silencioso
  }
}

/**
 * Notifica un cambio de fase o inicio/fin de actividad respetando las preferencias.
 */
export function notifyPhaseChange(): void {
  playChime()
  triggerVibration(40)
}

