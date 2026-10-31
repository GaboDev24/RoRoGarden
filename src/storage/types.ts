/**
 * storage/types.ts — Definición de tipos y esquemas para la persistencia local de RoRoGarden.
 */

export type MoodType = 'contenta' | 'tranquila' | 'cansada' | 'tensa' | 'triste'

export type EntryType = 'checkin' | 'diario' | 'desafio' | 'respiracion'

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

export interface DesafioPayload {
  challengeId: string
  title: string
  category: string
  durationSeconds: number
  completed: boolean
}

export interface RespiracionPayload {
  pattern: string
  durationSeconds: number
  salaMode: boolean
  completed: boolean
}

export type EntryPayload = CheckinPayload | DiarioPayload | DesafioPayload | RespiracionPayload

export interface GardenEntry {
  /** Clave única por tipo y fecha local, ej: "checkin_2026-10-31" o "desafio_2026-10-31_1700000000" */
  id: string
  /** Versión del esquema para migraciones futuras (versión 2 en Etapa 3) */
  version: number
  /** Tipo de registro */
  type: EntryType
  /** Fecha local del dispositivo en formato YYYY-MM-DD */
  date: string
  /** Timestamp ISO de creación */
  createdAt: string
  /** Timestamp ISO de última edición */
  updatedAt: string
  /** Contenido específico del registro */
  data: EntryPayload
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
