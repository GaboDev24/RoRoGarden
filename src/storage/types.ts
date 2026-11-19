/**
 * storage/types.ts — Definición de tipos y esquemas para la persistencia local de RoRoGarden.
 */

import type { ReminderConfig } from '../reminders'

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
  /** Versión del esquema para migraciones futuras (versión 4 en Etapa 5) */
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

export type Hemisphere = 'sur' | 'norte'

export interface PlacedDecorationRef {
  /** ID de instancia único */
  id: string
  /** ID del catálogo */
  catalogId: string
  /** Columna (0–4) */
  x: number
  /** Fila (0–4) */
  y: number
}

export interface GardenState {
  /** Versión del estado del jardín para migraciones */
  version: number
  /** IDs del catálogo desbloqueados */
  obtainedItemIds: string[]
  /** Decoraciones colocadas en la grilla */
  placedDecorations: PlacedDecorationRef[]
  /** Nombre del sapo (null = sin nombre) */
  frogName: string | null
  /** Fecha local del último regalo recibido (YYYY-MM-DD) o null */
  lastGiftDate: string | null
  /** Si las animaciones del jardín están habilitadas */
  gardenAnimationsEnabled: boolean
  /** Hemisferio del dispositivo (afecta estaciones) */
  hemisphere: Hemisphere
  /** Si la usuaria ya respondió la pregunta del nombre (evita volver a preguntar) */
  frogNameAnswered: boolean

  // ── Etapa 5 ──
  /** Mostrar u ocultar el botón 'Mi semana' en el jardín */
  showWeekInGarden: boolean
  /** Si se muestran fines de semana en 'Mi semana' (default: false -> L a V) */
  weekShowWeekend: boolean
  /** Mostrar 'Cosas que noté' (patrones, default: false) */
  showPatterns: boolean
  /** IDs de patrones descartados por la usuaria */
  dismissedPatternIds: string[]
  /** Configuraciones de recordatorios (3 momentos) */
  reminders: ReminderConfig[]
  /** 'Descansar de los avisos' (vacaciones, receso) */
  vacationMode: boolean
  /** Fecha del último aviso de apoyo mostrado (YYYY-MM-DD) o null */
  lastSupportNoticeDate: string | null
  /** Preferencia para recibir sugerencias de apoyo (default: true) */
  supportSuggestionsEnabled: boolean
  /** Recordatorios in-app descartados por fecha: { [reminderId]: 'YYYY-MM-DD' } */
  dismissedInAppReminders: Record<string, string>
}

export interface BackupPayload {
  app: 'RoRoGarden'
  version: number
  exportedAt: string
  entries: GardenEntry[]
  gardenState?: GardenState
}
