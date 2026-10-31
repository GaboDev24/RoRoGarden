import type {
  GardenEntry,
  StorageResult,
  BackupPayload,
} from './types'

export const CURRENT_SCHEMA_VERSION = 1
const STORAGE_PREFIX = 'roro_entry_'
const BACKUP_APP_NAME = 'RoRoGarden'

/**
 * Tabla de migraciones por versión.
 * Si en el futuro se incrementa CURRENT_SCHEMA_VERSION a 2,
 * se agrega aquí la función que transforma datos de v1 a v2.
 */
export const MIGRATIONS: Record<number, (entry: any) => any> = {
  // 1: (entry) => { ... return migratedEntry }
}

/**
 * Memoria volátil de respaldo en caso de que localStorage esté bloqueado o inaccesible.
 */
const memoryFallback = new Map<string, string>()

/**
 * Verifica si localStorage está disponible y operativo en el entorno actual.
 */
export function isStorageAvailable(): boolean {
  try {
    if (typeof window === 'undefined' || !window.localStorage) {
      return false
    }
    const testKey = '__roro_test__'
    window.localStorage.setItem(testKey, '1')
    window.localStorage.removeItem(testKey)
    return true
  } catch {
    return false
  }
}

/**
 * Genera la fecha local en formato YYYY-MM-DD.
 */
export function getLocalDateString(date: Date = new Date()): string {
  const year = date.getFullYear()
  const month = String(date.getMonth() + 1).padStart(2, '0')
  const day = String(date.getDate()).padStart(2, '0')
  return `${year}-${month}-${day}`
}

/**
 * Crea el identificador único canónico: ${type}_${YYYY-MM-DD}
 */
export function makeEntryId(type: 'checkin' | 'diario', dateStr: string): string {
  return `${type}_${dateStr}`
}

/**
 * Aplica la cadena de migraciones a un registro si su versión es inferior a la actual.
 */
export function migrateEntry(raw: any): GardenEntry {
  let entry = { ...raw }
  let v = Number(entry.version ?? 1)

  while (v < CURRENT_SCHEMA_VERSION) {
    const migrator = MIGRATIONS[v]
    if (typeof migrator === 'function') {
      entry = migrator(entry)
    }
    v += 1
    entry.version = v
  }

  return entry as GardenEntry
}

/**
 * Guarda o actualiza un registro.
 * Un solo registro por tipo y fecha (si ya existe, lo pisa/actualiza).
 */
export function saveEntry(entry: GardenEntry): StorageResult<GardenEntry> {
  try {
    const stamped: GardenEntry = {
      ...entry,
      version: CURRENT_SCHEMA_VERSION,
      updatedAt: new Date().toISOString(),
    }
    const key = `${STORAGE_PREFIX}${stamped.id}`
    const serialized = JSON.stringify(stamped)

    if (isStorageAvailable()) {
      window.localStorage.setItem(key, serialized)
    } else {
      memoryFallback.set(key, serialized)
    }

    return { success: true, data: stamped }
  } catch (err) {
    return {
      success: false,
      error: 'No se pudo guardar el registro localmente. El jardín seguirá funcionando.',
    }
  }
}

/**
 * Obtiene un registro por su ID único.
 */
export function getEntry(id: string): StorageResult<GardenEntry | null> {
  try {
    const key = `${STORAGE_PREFIX}${id}`
    let raw: string | null = null

    if (isStorageAvailable()) {
      raw = window.localStorage.getItem(key)
    } else {
      raw = memoryFallback.get(key) ?? null
    }

    if (!raw) {
      return { success: true, data: null }
    }

    const parsed = JSON.parse(raw)
    const migrated = migrateEntry(parsed)
    return { success: true, data: migrated }
  } catch (err) {
    return {
      success: false,
      error: 'No se pudo leer el registro solicitado.',
    }
  }
}

/**
 * Lista todos los registros guardados, ordenados de más nuevo a más viejo
 * por fecha (y por createdAt si coinciden).
 */
export function listEntries(): StorageResult<GardenEntry[]> {
  try {
    const entries: GardenEntry[] = []

    if (isStorageAvailable()) {
      for (let i = 0; i < window.localStorage.length; i++) {
        const k = window.localStorage.key(i)
        if (k && k.startsWith(STORAGE_PREFIX)) {
          const val = window.localStorage.getItem(k)
          if (val) {
            try {
              const parsed = JSON.parse(val)
              entries.push(migrateEntry(parsed))
            } catch {
              // Entrada corrupta ignorada defensivamente
            }
          }
        }
      }
    } else {
      for (const [k, val] of memoryFallback.entries()) {
        if (k.startsWith(STORAGE_PREFIX)) {
          try {
            entries.push(migrateEntry(JSON.parse(val)))
          } catch {
            // Ignorada
          }
        }
      }
    }

    // Ordenar de más reciente a más antiguo
    entries.sort((a, b) => {
      if (a.date !== b.date) {
        return b.date.localeCompare(a.date)
      }
      return b.createdAt.localeCompare(a.createdAt)
    })

    return { success: true, data: entries }
  } catch (err) {
    return {
      success: false,
      data: [],
      error: 'No se pudieron recuperar los registros guardados.',
    }
  }
}

/**
 * Borra un registro por su ID.
 */
export function deleteEntry(id: string): StorageResult<boolean> {
  try {
    const key = `${STORAGE_PREFIX}${id}`
    if (isStorageAvailable()) {
      window.localStorage.removeItem(key)
    } else {
      memoryFallback.delete(key)
    }
    return { success: true, data: true }
  } catch (err) {
    return {
      success: false,
      data: false,
      error: 'No se pudo eliminar el registro.',
    }
  }
}

/**
 * Borra todos los registros de RoRoGarden.
 */
export function clearAllEntries(): StorageResult<boolean> {
  try {
    if (isStorageAvailable()) {
      const keysToRemove: string[] = []
      for (let i = 0; i < window.localStorage.length; i++) {
        const k = window.localStorage.key(i)
        if (k && k.startsWith(STORAGE_PREFIX)) {
          keysToRemove.push(k)
        }
      }
      for (const k of keysToRemove) {
        window.localStorage.removeItem(k)
      }
    }
    memoryFallback.clear()
    return { success: true, data: true }
  } catch (err) {
    return {
      success: false,
      data: false,
      error: 'No se pudieron borrar todos los registros.',
    }
  }
}

/**
 * Exporta todos los registros en formato JSON para copia de seguridad.
 */
export function exportBackup(): StorageResult<string> {
  try {
    const listRes = listEntries()
    if (!listRes.success || !listRes.data) {
      return { success: false, error: 'Error al reunir los registros para exportar.' }
    }

    const payload: BackupPayload = {
      app: BACKUP_APP_NAME,
      version: CURRENT_SCHEMA_VERSION,
      exportedAt: new Date().toISOString(),
      entries: listRes.data,
    }

    return { success: true, data: JSON.stringify(payload, null, 2) }
  } catch (err) {
    return { success: false, error: 'No se pudo generar el archivo de respaldo.' }
  }
}

/**
 * Importa un archivo de respaldo JSON previamente validado.
 */
export function importBackup(jsonString: string): StorageResult<{ imported: number }> {
  try {
    let parsed: any
    try {
      parsed = JSON.parse(jsonString)
    } catch {
      return { success: false, error: 'El archivo no contiene un JSON válido.' }
    }

    // Validación básica de la estructura del respaldo
    if (!parsed || parsed.app !== BACKUP_APP_NAME || !Array.isArray(parsed.entries)) {
      return {
        success: false,
        error: 'El archivo no corresponde a un respaldo válido de RoRoGarden.',
      }
    }

    let count = 0
    for (const item of parsed.entries) {
      if (item && item.id && item.type && item.date && item.data) {
        const migrated = migrateEntry(item)
        const saveRes = saveEntry(migrated)
        if (saveRes.success) {
          count++
        }
      }
    }

    return { success: true, data: { imported: count } }
  } catch (err) {
    return { success: false, error: 'Ocurrió un error inesperado al importar el respaldo.' }
  }
}

