import { describe, it, expect, beforeEach, vi } from 'vitest'
import {
  saveEntry,
  getEntry,
  listEntries,
  deleteEntry,
  clearAllEntries,
  exportBackup,
  importBackup,
  CURRENT_SCHEMA_VERSION,
} from '../src/storage'
import type { GardenEntry } from '../src/storage/types'

describe('Módulo de Almacenamiento Local (RoRoGarden)', () => {
  beforeEach(() => {
    // Limpiar almacenamiento antes de cada test
    window.localStorage.clear()
    clearAllEntries()
  })

  it('guarda y lee un registro correctamente con versión de esquema', () => {
    const entry: GardenEntry = {
      id: 'checkin_2026-10-31',
      version: CURRENT_SCHEMA_VERSION,
      type: 'checkin',
      date: '2026-10-31',
      createdAt: '2026-10-31T10:00:00.000Z',
      updatedAt: '2026-10-31T10:00:00.000Z',
      data: {
        mood: 'contenta',
        note: 'Día luminoso con los chicos en el patio.',
      },
    }

    const saveRes = saveEntry(entry)
    expect(saveRes.success).toBe(true)
    expect(saveRes.data?.version).toBe(CURRENT_SCHEMA_VERSION)

    const getRes = getEntry('checkin_2026-10-31')
    expect(getRes.success).toBe(true)
    expect(getRes.data).not.toBeNull()
    expect(getRes.data?.id).toBe('checkin_2026-10-31')
    expect(getRes.data?.data).toEqual({
      mood: 'contenta',
      note: 'Día luminoso con los chicos en el patio.',
    })
  })

  it('lista registros ordenados cronológicamente de más reciente a más antiguo', () => {
    const entry1: GardenEntry = {
      id: 'checkin_2026-10-25',
      version: 1,
      type: 'checkin',
      date: '2026-10-25',
      createdAt: '2026-10-25T12:00:00.000Z',
      updatedAt: '2026-10-25T12:00:00.000Z',
      data: { mood: 'cansada' },
    }

    const entry2: GardenEntry = {
      id: 'checkin_2026-10-28',
      version: 1,
      type: 'checkin',
      date: '2026-10-28',
      createdAt: '2026-10-28T12:00:00.000Z',
      updatedAt: '2026-10-28T12:00:00.000Z',
      data: { mood: 'tranquila' },
    }

    const entry3: GardenEntry = {
      id: 'diario_2026-10-30',
      version: 1,
      type: 'diario',
      date: '2026-10-30',
      createdAt: '2026-10-30T20:00:00.000Z',
      updatedAt: '2026-10-30T20:00:00.000Z',
      data: { mood: 'contenta', lindo: 'Flores en el cantero' },
    }

    saveEntry(entry1)
    saveEntry(entry3)
    saveEntry(entry2)

    const listRes = listEntries()
    expect(listRes.success).toBe(true)
    expect(listRes.data?.length).toBe(3)
    // El primero debe ser el 30, luego 28, luego 25
    expect(listRes.data?.[0].date).toBe('2026-10-30')
    expect(listRes.data?.[1].date).toBe('2026-10-28')
    expect(listRes.data?.[2].date).toBe('2026-10-25')
  })

  it('borra un registro individual y borra todo correctamente', () => {
    const entry: GardenEntry = {
      id: 'checkin_2026-10-31',
      version: 1,
      type: 'checkin',
      date: '2026-10-31',
      createdAt: '2026-10-31T10:00:00.000Z',
      updatedAt: '2026-10-31T10:00:00.000Z',
      data: { mood: 'tensa' },
    }

    saveEntry(entry)
    expect(getEntry('checkin_2026-10-31').data).not.toBeNull()

    const delRes = deleteEntry('checkin_2026-10-31')
    expect(delRes.success).toBe(true)
    expect(getEntry('checkin_2026-10-31').data).toBeNull()

    // Test clearAll
    saveEntry(entry)
    const clearRes = clearAllEntries()
    expect(clearRes.success).toBe(true)
    expect(listEntries().data?.length).toBe(0)
  })

  it('funciona elegantemente y no rompe cuando el almacenamiento local no está disponible', () => {
    // Simular fallo o bloqueo de localStorage (ej: modo incógnito estricto / cuota bloqueada)
    const setItemSpy = vi.spyOn(Storage.prototype, 'setItem').mockImplementation(() => {
      throw new Error('QuotaExceededError or security block')
    })

    const entry: GardenEntry = {
      id: 'checkin_2026-10-31',
      version: 1,
      type: 'checkin',
      date: '2026-10-31',
      createdAt: '2026-10-31T10:00:00.000Z',
      updatedAt: '2026-10-31T10:00:00.000Z',
      data: { mood: 'triste' },
    }

    // No debe lanzar excepción
    const res = saveEntry(entry)
    // El sistema captura el error o usa el fallback en memoria
    expect(res).toBeDefined()

    setItemSpy.mockRestore()
  })

  it('exporta e importa respaldos con validación de estructura', () => {
    const entry: GardenEntry = {
      id: 'checkin_2026-10-31',
      version: 1,
      type: 'checkin',
      date: '2026-10-31',
      createdAt: '2026-10-31T10:00:00.000Z',
      updatedAt: '2026-10-31T10:00:00.000Z',
      data: { mood: 'contenta', note: 'Respaldo test' },
    }
    saveEntry(entry)

    const expRes = exportBackup()
    expect(expRes.success).toBe(true)
    expect(typeof expRes.data).toBe('string')

    // Limpiar base
    clearAllEntries()
    expect(listEntries().data?.length).toBe(0)

    // Importar JSON inválido
    const invalidImport = importBackup('{ "foo": "bar" }')
    expect(invalidImport.success).toBe(false)

    // Importar respaldo válido
    const validImport = importBackup(expRes.data!)
    expect(validImport.success).toBe(true)
    expect(validImport.data?.imported).toBe(1)
    expect(getEntry('checkin_2026-10-31').data).not.toBeNull()
  })
})

