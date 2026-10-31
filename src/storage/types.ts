/**
 * storage/types.ts — Definición de tipos y esquemas para la persistencia local de RoRoGarden.
 */

export type MoodType = 'contenta' | 'tranquila' | 'cansada' | 'tensa' | 'triste'

export type EntryType = 'checkin' | 'diario'

export interface CheckinPayload {
  mood: MoodType
  note?: string
}

export interface DiarioPayload {
  mood: MoodType
  lindo?: string
  peso?: string
  suelto?: string
}

export interface GardenEntry {
  /** Clave única por tipo y fecha local, ej: "checkin_2026-10-31" */
  id: string
  /** Versión del esquema para migraciones futuras */
  version: number
  /** Tipo de registro: checkin o diario */
  type: EntryType
  /** Fecha local del dispositivo en formato YYYY-MM-DD */
  date: string
  /** Timestamp ISO de creación */
  createdAt: string
  /** Timestamp ISO de última edición */
  updatedAt: string
  /** Contenido específico del registro */
  data: CheckinPayload | DiarioPayload
}

export interface StorageResult<T> {
  success: boolean
  data?: T
  error?: string
}

export interface BackupPayload {
  app: 'RoRoGarden'
  version: number
  exportedAt: string
  entries: GardenEntry[]
}

