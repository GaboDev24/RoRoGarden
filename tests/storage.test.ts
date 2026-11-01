import { describe, it, expect, beforeEach } from 'vitest'
import {
  saveEntry,
  getEntry,
  listEntries,
  deleteEntry,
  clearAllEntries,
  exportBackup,
  importBackup,
  migrateEntry,
  savePauseEntry,
  loadGardenState,
  saveGardenState,
  clearGardenState,
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
      data: { mood: 'tranquila' },
    }
    saveEntry(entry)
    expect(getEntry('checkin_2026-10-31').data).not.toBeNull()

    const delRes = deleteEntry('checkin_2026-10-31')
    expect(delRes.success).toBe(true)
    expect(getEntry('checkin_2026-10-31').data).toBeNull()

    // Guardar dos registros y limpiar todo
    saveEntry(entry)
    saveEntry({ ...entry, id: 'checkin_2026-10-30' })
    expect(listEntries().data?.length).toBe(2)

    clearAllEntries()
    expect(listEntries().data?.length).toBe(0)
  })

  it('exporta e importa copias de respaldo en JSON preservando el estado del jardín', () => {
    const entry: GardenEntry = {
      id: 'checkin_2026-10-31',
      version: CURRENT_SCHEMA_VERSION,
      type: 'checkin',
      date: '2026-10-31',
      createdAt: '2026-10-31T10:00:00.000Z',
      updatedAt: '2026-10-31T10:00:00.000Z',
      data: { mood: 'contenta', note: 'Respaldo test' },
    }
    saveEntry(entry)

    saveGardenState({
      version: 3,
      obtainedItemIds: ['vis-sapito-menta'],
      placedDecorations: [{ id: 'inst-1', catalogId: 'vis-sapito-menta', x: 2, y: 1 }],
      frogName: 'Pepe',
      lastGiftDate: '2026-10-31',
      gardenAnimationsEnabled: true,
      hemisphere: 'sur',
      frogNameAnswered: true,
    })

    const expRes = exportBackup()
    expect(expRes.success).toBe(true)
    expect(typeof expRes.data).toBe('string')
    expect(expRes.data).toContain('vis-sapito-menta')
    expect(expRes.data).toContain('Pepe')

    // Limpiar base
    clearAllEntries()
    expect(listEntries().data?.length).toBe(0)
    expect(loadGardenState().frogName).toBeNull()

    // Importar JSON inválido
    const invalidImport = importBackup('{ "foo": "bar" }')
    expect(invalidImport.success).toBe(false)

    // Importar respaldo válido
    const validImport = importBackup(expRes.data!)
    expect(validImport.success).toBe(true)
    expect(validImport.data?.imported).toBe(1)
    expect(getEntry('checkin_2026-10-31').data).not.toBeNull()

    const restoredGarden = loadGardenState()
    expect(restoredGarden.frogName).toBe('Pepe')
    expect(restoredGarden.obtainedItemIds).toContain('vis-sapito-menta')
    expect(restoredGarden.placedDecorations.length).toBe(1)
  })

  it('migra automáticamente registros de versión 1 y 2 a versión 3', () => {
    const rawV1 = {
      id: 'checkin_2026-10-20',
      version: 1,
      type: 'checkin',
      date: '2026-10-20',
      createdAt: '2026-10-20T10:00:00.000Z',
      updatedAt: '2026-10-20T10:00:00.000Z',
      data: { mood: 'tranquila' },
    }

    const migratedV1 = migrateEntry(rawV1)
    expect(migratedV1.version).toBe(CURRENT_SCHEMA_VERSION)
    expect(migratedV1.version).toBe(3)
    expect(migratedV1.id).toBe('checkin_2026-10-20')
    expect(migratedV1.data).toEqual({ mood: 'tranquila' })

    const rawV2 = {
      id: 'checkin_2026-10-25',
      version: 2,
      type: 'checkin',
      date: '2026-10-25',
      createdAt: '2026-10-25T10:00:00.000Z',
      updatedAt: '2026-10-25T10:00:00.000Z',
      data: { mood: 'contenta' },
    }

    const migratedV2 = migrateEntry(rawV2)
    expect(migratedV2.version).toBe(3)
  })

  it('administra el estado del jardín: cargar defaults, guardar y reiniciar', () => {
    // Defaults iniciales
    const initial = loadGardenState()
    expect(initial.version).toBe(3)
    expect(initial.obtainedItemIds).toEqual([])
    expect(initial.placedDecorations).toEqual([])
    expect(initial.frogName).toBeNull()
    expect(initial.hemisphere).toBe('sur')

    // Guardar cambios
    saveGardenState({
      ...initial,
      frogName: 'Croaky',
      obtainedItemIds: ['item-1'],
    })

    const updated = loadGardenState()
    expect(updated.frogName).toBe('Croaky')
    expect(updated.obtainedItemIds).toEqual(['item-1'])

    // Reiniciar solo jardín
    clearGardenState()
    const cleared = loadGardenState()
    expect(cleared.frogName).toBeNull()
    expect(cleared.obtainedItemIds).toEqual([])
  })

  it('guarda registros de pausas (desafíos y respiración) en silencio y los incluye en exportación', () => {
    const resDesafio = savePauseEntry('desafio', {
      challengeId: 'cuerpo-cuello',
      title: 'Estirar cuello y hombros',
      category: 'cuerpo',
      durationSeconds: 60,
      completed: true,
    }, '2026-10-31')

    expect(resDesafio.success).toBe(true)
    expect(resDesafio.data?.type).toBe('desafio')
    expect(resDesafio.data?.version).toBe(3)

    const resResp = savePauseEntry('respiracion', {
      pattern: 'suave',
      durationSeconds: 120,
      salaMode: false,
      completed: true,
    }, '2026-10-31')

    expect(resResp.success).toBe(true)
    expect(resResp.data?.type).toBe('respiracion')

    const listRes = listEntries()
    expect(listRes.success).toBe(true)
    expect(listRes.data?.length).toBe(2)

    const backup = exportBackup()
    expect(backup.success).toBe(true)
    expect(backup.data).toContain('cuerpo-cuello')
    expect(backup.data).toContain('respiracion')
  })
})
