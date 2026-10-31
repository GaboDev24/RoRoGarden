import { describe, it, expect } from 'vitest'
import {
  BREATHING_PATTERNS,
  calculateBreathingState,
} from '../src/breathing'

describe('Lógica de respiración guiada (breathing)', () => {
  it('patrón suave recorre inhalación (4s) y exhalación (6s) correctamente', () => {
    const pattern = BREATHING_PATTERNS.suave
    expect(pattern.cycleDurationSeconds).toBe(10)

    // A los 2 segundos: está inhalando
    const stateAt2 = calculateBreathingState(pattern, 2, 60)
    expect(stateAt2.isFinished).toBe(false)
    expect(stateAt2.currentPhase.type).toBe('inhalar')
    expect(stateAt2.phaseElapsedSeconds).toBe(2)
    expect(stateAt2.phaseProgress).toBeCloseTo(0.5)

    // A los 4 segundos: comienza exhalación
    const stateAt4 = calculateBreathingState(pattern, 4, 60)
    expect(stateAt4.currentPhase.type).toBe('exhalar')
    expect(stateAt4.phaseElapsedSeconds).toBe(0)

    // A los 7 segundos: a mitad de exhalación (4 + 3)
    const stateAt7 = calculateBreathingState(pattern, 7, 60)
    expect(stateAt7.currentPhase.type).toBe('exhalar')
    expect(stateAt7.phaseElapsedSeconds).toBe(3)
    expect(stateAt7.phaseProgress).toBeCloseTo(0.5)
  })

  it('patrón cuadrada recorre las 4 fases con 4 segundos cada una', () => {
    const pattern = BREATHING_PATTERNS.cuadrada
    expect(pattern.cycleDurationSeconds).toBe(16)
    expect(pattern.phases).toHaveLength(4)

    // Inhalar: 0s - 4s
    const s1 = calculateBreathingState(pattern, 2, 60)
    expect(s1.currentPhase.type).toBe('inhalar')

    // Pausa llena: 4s - 8s
    const s2 = calculateBreathingState(pattern, 5, 60)
    expect(s2.currentPhase.type).toBe('pausa')

    // Exhalar: 8s - 12s
    const s3 = calculateBreathingState(pattern, 10, 60)
    expect(s3.currentPhase.type).toBe('exhalar')

    // Pausa vacía: 12s - 16s
    const s4 = calculateBreathingState(pattern, 14, 60)
    expect(s4.currentPhase.type).toBe('pausa')

    // Segundo ciclo (18s = 16 + 2s de inhalar)
    const s5 = calculateBreathingState(pattern, 18, 60)
    expect(s5.currentPhase.type).toBe('inhalar')
    expect(s5.cycleIndex).toBe(1)
  })

  it('patrón corta recorre inhalar 3s y exhalar 5s', () => {
    const pattern = BREATHING_PATTERNS.corta
    expect(pattern.cycleDurationSeconds).toBe(8)

    const sInhale = calculateBreathingState(pattern, 1.5, 60)
    expect(sInhale.currentPhase.type).toBe('inhalar')

    const sExhale = calculateBreathingState(pattern, 4, 60)
    expect(sExhale.currentPhase.type).toBe('exhalar')
  })

  it('marca finalización exacta al alcanzar o superar la duración total', () => {
    const pattern = BREATHING_PATTERNS.suave
    const stateDone = calculateBreathingState(pattern, 60, 60)
    expect(stateDone.isFinished).toBe(true)
    expect(stateDone.totalProgress).toBe(1)
    expect(stateDone.phaseRemainingSeconds).toBe(0)

    const stateOverdue = calculateBreathingState(pattern, 65, 60)
    expect(stateOverdue.isFinished).toBe(true)
    expect(stateOverdue.totalProgress).toBe(1)
  })

  it('el modo sala utiliza frases orientadas a niños sin tecnicismos', () => {
    const pattern = BREATHING_PATTERNS.suave
    const stateNormal = calculateBreathingState(pattern, 2, 60, false)
    expect(stateNormal.displayText).toContain('Tomá aire')

    const stateSala = calculateBreathingState(pattern, 2, 60, true)
    expect(stateSala.displayText).toContain('globo')
  })
})

