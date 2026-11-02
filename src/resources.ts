/**
 * resources.ts — Contactos y líneas de ayuda disponibles en RoRoGarden.
 *
 * Principios:
 * - Siempre accesible, sin condiciones.
 * - Archivo editable fácilmente por alguien sin conocimientos técnicos.
 * - Solo líneas verificadas oficialmente en Argentina.
 * - No afirma confidencialidad, anonimato ni gratuidad fuera de lo explicitado.
 * - Funciona 100% offline (enlaces directos tel:).
 *
 * NOTA DE MANTENIMIENTO:
 * Verificar antes de publicar — Última revisión: 2026-11-02
 */

export interface HelpResource {
  id: string
  name: string
  description: string
  phone: string
  phoneDisplay: string
  scope: string
  note?: string
}

export const OFFICIAL_HELP_RESOURCES: HelpResource[] = [
  {
    id: 'emergencias-911',
    name: 'Emergencias 911',
    description: 'Atención inmediata ante situaciones de riesgo o peligro.',
    phone: '911',
    phoneDisplay: '911',
    scope: 'Nacional (Argentina)',
  },
  {
    id: 'linea-135',
    name: 'Línea 135 (Centro de Asistencia al Suicida)',
    description: 'Acompañamiento y escucha para momentos de crisis.',
    phone: '135',
    phoneDisplay: '135',
    scope: 'Gratuita desde CABA y Gran Buenos Aires',
    note: 'Línea directa para el área metropolitana.',
  },
  {
    id: 'cas-resto-pais-1',
    name: 'Centro de Asistencia al Suicida (resto del país)',
    description: 'Acompañamiento telefónico nacional.',
    phone: '+541152751135',
    phoneDisplay: '(011) 5275-1135',
    scope: 'Todo el país',
  },
  {
    id: 'cas-resto-pais-0800',
    name: 'Centro de Asistencia al Suicida (0800 nacional)',
    description: 'Acompañamiento telefónico gratuito para todo el país.',
    phone: '08003451435',
    phoneDisplay: '0800 345 1435',
    scope: 'Todo el país',
  },
]

/**
 * RECURSOS DE MI ZONA:
 * Podés agregar acá teléfonos y servicios de apoyo de tu provincia, municipio u obra social.
 * Asegurate de verificar que los números estén vigentes antes de agregarlos.
 *
 * Ejemplo para agregar uno nuevo:
 * {
 *   id: 'mi-provincia-salud-mental',
 *   name: 'Línea de Salud Mental de mi provincia',
 *   description: 'Guardia de salud mental provincial.',
 *   phone: '08001234567',
 *   phoneDisplay: '0800 123 4567',
 *   scope: 'Provincia de...',
 * }
 */
export const LOCAL_HELP_RESOURCES: HelpResource[] = []

