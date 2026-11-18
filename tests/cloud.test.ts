import { describe, it, expect, beforeEach, vi } from 'vitest'
import {
  getCloudUserId,
  setCloudUserId,
  isAutoSyncEnabled,
  setAutoSyncEnabled,
  checkCloudHealth,
  pushToCloud,
  pullFromCloud,
} from '../src/storage/cloud'
import { saveEntry, getEntry, saveGardenState, loadGardenState } from '../src/storage'

describe('Storage Cloud — Sincronización segura con SpiderWeb / Vercel', () => {
  beforeEach(() => {
    localStorage.clear()
    vi.restoreAllMocks()
  })

  it('genera y persiste un ID anónimo único si no existe', () => {
    const id1 = getCloudUserId()
    expect(id1).toBeTruthy()
    expect(id1.startsWith('user_')).toBe(true)

    const id2 = getCloudUserId()
    expect(id2).toBe(id1)
  })

  it('permite cambiar el ID de sincronización sanitizando caracteres inválidos', () => {
    setCloudUserId('docente_sala_amarilla_123')
    expect(getCloudUserId()).toBe('docente_sala_amarilla_123')

    setCloudUserId('usuario<script>con--caracteres!!')
    expect(getCloudUserId()).toBe('usuarioscriptcon--caracteres')
  })

  it('guarda y consulta el estado de sincronización automática', () => {
    expect(isAutoSyncEnabled()).toBe(false)

    setAutoSyncEnabled(true)
    expect(isAutoSyncEnabled()).toBe(true)

    setAutoSyncEnabled(false)
    expect(isAutoSyncEnabled()).toBe(false)
  })

  it('checkCloudHealth verifica la conectividad con el backend', async () => {
    global.fetch = vi.fn().mockResolvedValue({
      ok: true,
      json: async () => ({ success: true }),
    } as any)

    const health = await checkCloudHealth()
    expect(health.available).toBe(true)
    expect(global.fetch).toHaveBeenCalledWith('/api/sync', expect.objectContaining({
      method: 'POST',
    }))
  })

  it('pushToCloud envía entradas locales a la nube', async () => {
    saveEntry({
      id: 'checkin_2026-11-18',
      version: 4,
      type: 'checkin',
      date: '2026-11-18',
      createdAt: '2026-11-18T10:00:00Z',
      updatedAt: '2026-11-18T10:00:00Z',
      data: { mood: 'calma' } as any,
    })

    let sentPayload: any = null
    global.fetch = vi.fn().mockImplementation((_url, options) => {
      sentPayload = JSON.parse(options.body)
      return Promise.resolve({
        ok: true,
        json: async () => ({ success: true }),
      })
    })

    const result = await pushToCloud()
    expect(result.success).toBe(true)
    expect(sentPayload).toBeTruthy()
    expect(sentPayload.action).toBe('push')
    expect(sentPayload.entries.length).toBeGreaterThanOrEqual(1)
  })

  it('pullFromCloud descarga entradas y las guarda localmente', async () => {
    global.fetch = vi.fn().mockResolvedValue({
      ok: true,
      json: async () => ({
        success: true,
        entries: [
          {
            id: 'checkin_2026-11-17',
            version: 4,
            type: 'checkin',
            entry_date: '2026-11-17',
            created_at: '2026-11-17T10:00:00Z',
            updated_at: '2026-11-17T10:00:00Z',
            data_json: JSON.stringify({ mood: 'alegria' }),
          },
        ],
        gardenState: {
          state_json: JSON.stringify({
            version: 4,
            frogName: 'Croqui',
          }),
        },
      }),
    } as any)

    const result = await pullFromCloud()
    expect(result.success).toBe(true)
    expect(result.count).toBe(1)

    const entryRes = getEntry('checkin_2026-11-17')
    expect(entryRes.success).toBe(true)
    expect(entryRes.data?.data).toEqual({ mood: 'alegria' })

    const state = loadGardenState()
    expect(state.frogName).toBe('Croqui')
  })

  it('maneja fallas de red silenciosamente sin tirar excepciones', async () => {
    global.fetch = vi.fn().mockRejectedValue(new Error('Network error'))

    const pushRes = await pushToCloud()
    expect(pushRes.success).toBe(false)
    expect(pushRes.message).toContain('No se pudo conectar')

    const pullRes = await pullFromCloud()
    expect(pullRes.success).toBe(false)
  })
})
