/**
 * src/storage/cloud.ts — Sincronización Local-First con SpiderWeb Arg API vía Backend Vercel
 *
 * Mantiene la privacidad total y el funcionamiento offline-first:
 * - Los datos se guardan SIEMPRE primero en localStorage.
 * - La nube es un respaldo secundario y opcional.
 * - La API Key de SpiderWeb NUNCA viaja al navegador: todas las llamadas pasan
 *   por la Serverless Function segura `/api/sync`.
 */

import { listEntries, loadGardenState, saveEntry, saveGardenState } from './index'
import type { GardenEntry, GardenState } from './types'

const CLOUD_USER_ID_KEY = 'roro_cloud_user_id'
const CLOUD_AUTO_SYNC_KEY = 'roro_cloud_auto_sync'

/**
 * Obtiene o crea un identificador único seguro y anónimo para este dispositivo.
 */
export function getCloudUserId(): string {
  try {
    let id = localStorage.getItem(CLOUD_USER_ID_KEY)
    if (!id) {
      // Generar identificador seguro
      if (typeof crypto !== 'undefined' && crypto.randomUUID) {
        id = 'user_' + crypto.randomUUID().replace(/-/g, '').slice(0, 16)
      } else {
        id = 'user_' + Math.random().toString(36).slice(2, 12) + Date.now().toString(36)
      }
      localStorage.setItem(CLOUD_USER_ID_KEY, id)
    }
    return id
  } catch {
    return 'default_user'
  }
}

/**
 * Permite cambiar o configurar el identificador para vincular otro dispositivo.
 */
export function setCloudUserId(id: string): void {
  try {
    const cleaned = id.trim().replace(/[^a-zA-Z0-9_\-.]/g, '').slice(0, 64)
    if (cleaned) {
      localStorage.setItem(CLOUD_USER_ID_KEY, cleaned)
    }
  } catch {
    // Ignorado en modo restringido
  }
}

/**
 * Verifica si la auto-sincronización está activa.
 */
export function isAutoSyncEnabled(): boolean {
  try {
    return localStorage.getItem(CLOUD_AUTO_SYNC_KEY) === 'true'
  } catch {
    return false
  }
}

/**
 * Activa o desactiva la auto-sincronización.
 */
export function setAutoSyncEnabled(enabled: boolean): void {
  try {
    localStorage.setItem(CLOUD_AUTO_SYNC_KEY, enabled ? 'true' : 'false')
  } catch {
    // Ignorado
  }
}

/**
 * Verifica si el endpoint de sincronización está disponible en el servidor.
 */
export async function checkCloudHealth(): Promise<{ available: boolean; message: string }> {
  if (typeof navigator !== 'undefined' && !navigator.onLine) {
    return { available: false, message: 'Sin conexión a internet.' }
  }

  try {
    const response = await fetch('/api/sync', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ action: 'status' }),
    })

    if (!response.ok) {
      const data = await response.json().catch(() => ({}))
      return {
        available: false,
        message: data.error || `Servidor no disponible (código ${response.status}).`,
      }
    }

    return { available: true, message: 'Conexión lista.' }
  } catch {
    return { available: false, message: 'No se pudo conectar con el servidor.' }
  }
}

/**
 * Inicializa las tablas SQL en la base de datos de SpiderWeb a través del backend.
 */
export async function initCloudDatabase(): Promise<{ success: boolean; message: string }> {
  try {
    const response = await fetch('/api/sync', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ action: 'init_tables' }),
    })

    const data = await response.json().catch(() => ({}))
    if (!response.ok) {
      return { success: false, message: data.error || 'Error al inicializar las tablas.' }
    }

    return { success: true, message: data.message || 'Tablas creadas con éxito.' }
  } catch {
    return { success: false, message: 'No se pudo contactar al servidor.' }
  }
}

/**
 * Sube una copia de seguridad completa del almacenamiento local a la nube.
 */
export async function pushToCloud(): Promise<{ success: boolean; message: string }> {
  if (typeof navigator !== 'undefined' && !navigator.onLine) {
    return { success: false, message: 'Sin conexión a internet en este momento.' }
  }

  try {
    const userId = getCloudUserId()
    const entriesResult = listEntries()
    const entries = entriesResult.success ? entriesResult.data : []
    const gardenState = loadGardenState()

    const response = await fetch('/api/sync', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        action: 'push',
        userId,
        entries,
        gardenState,
      }),
    })

    const data = await response.json().catch(() => ({}))
    if (!response.ok) {
      return { success: false, message: data.error || 'Error al guardar en la nube.' }
    }

    return { success: true, message: 'Copia guardada con éxito en la nube.' }
  } catch {
    return { success: false, message: 'No se pudo conectar con el servidor.' }
  }
}

/**
 * Descarga los registros y estado desde la nube y los fusiona en el dispositivo.
 */
export async function pullFromCloud(): Promise<{ success: boolean; message: string; count?: number }> {
  if (typeof navigator !== 'undefined' && !navigator.onLine) {
    return { success: false, message: 'Sin conexión a internet en este momento.' }
  }

  try {
    const userId = getCloudUserId()

    const response = await fetch('/api/sync', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        action: 'pull',
        userId,
      }),
    })

    const result = await response.json().catch(() => ({}))
    if (!response.ok) {
      return { success: false, message: result.error || 'Error al descargar datos de la nube.' }
    }

    const cloudEntries = Array.isArray(result.entries) ? result.entries : []
    let importedCount = 0

    // Fusionar entradas
    for (const raw of cloudEntries) {
      try {
        let entryData = {}
        if (typeof raw.data_json === 'string') {
          entryData = JSON.parse(raw.data_json)
        } else if (raw.data_json && typeof raw.data_json === 'object') {
          entryData = raw.data_json
        }

        const entry: GardenEntry = {
          id: raw.id,
          version: raw.version || 4,
          type: raw.type,
          date: raw.entry_date,
          createdAt: raw.created_at,
          updatedAt: raw.updated_at,
          data: entryData as any,
        }

        saveEntry(entry)
        importedCount++
      } catch {
        // Ignorar entrada corrupta
      }
    }

    // Fusionar estado del jardín si existe
    if (result.gardenState && result.gardenState.state_json) {
      try {
        const cloudState = JSON.parse(result.gardenState.state_json) as GardenState
        if (cloudState && typeof cloudState === 'object') {
          saveGardenState(cloudState)
        }
      } catch {
        // Ignorar estado corrupto
      }
    }

    return {
      success: true,
      message: `Se recuperaron ${importedCount} registros y el estado del jardín.`,
      count: importedCount,
    }
  } catch {
    return { success: false, message: 'No se pudo conectar con el servidor.' }
  }
}

/**
 * Disparo silencioso de sincronización en segundo plano (si auto-sync está habilitado).
 */
export function triggerBackgroundSync(): void {
  if (!isAutoSyncEnabled()) return
  // Ejecutar en microtarea sin interrumpir la UI
  setTimeout(() => {
    pushToCloud().catch(() => {
      // Falla silenciosa para no molestar a la docente
    })
  }, 1000)
}

// Escuchar cambios locales para sincronizar en segundo plano si está activo
if (typeof document !== 'undefined') {
  document.addEventListener('roro:dataChanged', () => {
    triggerBackgroundSync()
  })
}
