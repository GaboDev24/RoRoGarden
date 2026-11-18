/**
 * api/sync.ts — Vercel Serverless Function (Node.js Backend)
 *
 * Actúa como intermediario seguro entre RoRoGarden y la API de SpiderWeb Arg.
 * La API Key nunca se expone en el cliente ni viaja al navegador.
 *
 * Variables de entorno requeridas en Vercel:
 *   SPIDERWEB_API_KEY: Tu clave de API de SpiderWeb
 *   SPIDERWEB_DB_NAME: El nombre de tu base de datos SQL en SpiderWeb
 */

const SPIDERWEB_API_URL = 'https://spiderwebargapi.com.ar/api/v1/query'

// Regex de validación estricta para evitar inyecciones SQL
const USER_ID_REGEX = /^[a-zA-Z0-9_\-.]{1,64}$/
const ENTRY_ID_REGEX = /^[a-zA-Z0-9_\-.:]{1,100}$/
const DATE_REGEX = /^\d{4}-\d{2}-\d{2}$/
const ENTRY_TYPES = ['checkin', 'pausa', 'diario', 'desafio', 'respiracion']

/**
 * Escapa strings de forma segura para SQL eliminando o duplicando comillas
 * y escapando barras invertidas.
 */
function sqlEscapeString(val: string): string {
  if (typeof val !== 'string') return ''
  return val
    .replace(/\\/g, '\\\\')
    .replace(/'/g, "''")
    .replace(/\0/g, '\\0')
    .replace(/\n/g, '\\n')
    .replace(/\r/g, '\\r')
    .replace(/\x1a/g, '\\Z')
}

async function executeQuery(db: string, apiKey: string, query: string) {
  const response = await fetch(SPIDERWEB_API_URL, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'X-API-KEY': apiKey,
    },
    body: JSON.stringify({
      database: db,
      query,
    }),
  })

  if (!response.ok) {
    const errorText = await response.text()
    throw new Error(`SpiderWeb API error (${response.status}): ${errorText}`)
  }

  return response.json()
}

export default async function handler(req: any, res: any) {
  // Configurar headers de seguridad y CORS
  res.setHeader('X-Content-Type-Options', 'nosniff')
  res.setHeader('X-Frame-Options', 'DENY')

  // Solo permitir solicitudes POST
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Método no permitido. Usar POST.' })
  }

  const apiKey = process.env.SPIDERWEB_API_KEY
  const dbName = process.env.SPIDERWEB_DB_NAME

  if (!apiKey || !dbName) {
    return res.status(503).json({
      error: 'Backend no configurado: faltan variables SPIDERWEB_API_KEY o SPIDERWEB_DB_NAME en Vercel.',
      code: 'ENV_MISSING',
    })
  }

  try {
    const { action, entries, gardenState, userId } = req.body || {}

    // Validar formato de userId
    const safeUserId = typeof userId === 'string' && USER_ID_REGEX.test(userId)
      ? userId
      : 'default_user'

    // 1. Estado / Verificación de conexión
    if (action === 'status') {
      return res.status(200).json({
        success: true,
        configured: true,
        message: 'Conexión con el backend de RoRoGarden lista.',
      })
    }

    // 2. Inicialización de tablas SQL
    if (action === 'init_tables') {
      const createEntriesTable = `
        CREATE TABLE IF NOT EXISTS roro_entries (
          id VARCHAR(100) NOT NULL,
          user_id VARCHAR(64) NOT NULL,
          version INT NOT NULL,
          type VARCHAR(50) NOT NULL,
          entry_date VARCHAR(20) NOT NULL,
          created_at VARCHAR(50) NOT NULL,
          updated_at VARCHAR(50) NOT NULL,
          data_json TEXT NOT NULL,
          PRIMARY KEY (id, user_id)
        );
      `
      const createStateTable = `
        CREATE TABLE IF NOT EXISTS roro_garden_state (
          user_id VARCHAR(64) PRIMARY KEY,
          version INT NOT NULL,
          state_json TEXT NOT NULL,
          updated_at VARCHAR(50) NOT NULL
        );
      `
      await executeQuery(dbName, apiKey, createEntriesTable)
      await executeQuery(dbName, apiKey, createStateTable)
      return res.status(200).json({ success: true, message: 'Tablas inicializadas correctamente.' })
    }

    // 3. Subir datos (Push)
    if (action === 'push') {
      if (Array.isArray(entries)) {
        // Limitar tamaño por seguridad a 500 registros por lote
        const safeEntries = entries.slice(0, 500)

        for (const entry of safeEntries) {
          if (!entry || typeof entry !== 'object') continue

          const id = typeof entry.id === 'string' && ENTRY_ID_REGEX.test(entry.id)
            ? entry.id
            : null
          if (!id) continue

          const type = ENTRY_TYPES.includes(entry.type) ? entry.type : 'checkin'
          const date = typeof entry.date === 'string' && DATE_REGEX.test(entry.date)
            ? entry.date
            : new Date().toISOString().slice(0, 10)

          const version = Number.isInteger(entry.version) ? entry.version : 4
          const createdAt = sqlEscapeString(String(entry.createdAt || new Date().toISOString()))
          const updatedAt = sqlEscapeString(String(entry.updatedAt || new Date().toISOString()))
          const escapedData = sqlEscapeString(JSON.stringify(entry.data || {}))

          const query = `
            REPLACE INTO roro_entries (id, user_id, version, type, entry_date, created_at, updated_at, data_json)
            VALUES (
              '${id}',
              '${safeUserId}',
              ${version},
              '${type}',
              '${date}',
              '${createdAt}',
              '${updatedAt}',
              '${escapedData}'
            );
          `
          await executeQuery(dbName, apiKey, query)
        }
      }

      if (gardenState && typeof gardenState === 'object') {
        const version = Number.isInteger(gardenState.version) ? gardenState.version : 4
        const escapedState = sqlEscapeString(JSON.stringify(gardenState))
        const now = sqlEscapeString(new Date().toISOString())

        const query = `
          REPLACE INTO roro_garden_state (user_id, version, state_json, updated_at)
          VALUES ('${safeUserId}', ${version}, '${escapedState}', '${now}');
        `
        await executeQuery(dbName, apiKey, query)
      }

      return res.status(200).json({ success: true, message: 'Sincronización en la nube completada.' })
    }

    // 4. Descargar datos (Pull)
    if (action === 'pull') {
      const entriesQuery = `SELECT * FROM roro_entries WHERE user_id = '${safeUserId}' ORDER BY entry_date DESC LIMIT 500;`
      const stateQuery = `SELECT * FROM roro_garden_state WHERE user_id = '${safeUserId}' LIMIT 1;`

      const entriesResult = await executeQuery(dbName, apiKey, entriesQuery)
      const stateResult = await executeQuery(dbName, apiKey, stateQuery)

      return res.status(200).json({
        success: true,
        entries: entriesResult.data || [],
        gardenState: stateResult.data?.[0] || null,
      })
    }

    return res.status(400).json({ error: 'Acción no válida. Opciones: status, init_tables, push, pull.' })
  } catch (error: any) {
    console.error('[RoRoGarden API] Error:', error)
    return res.status(500).json({ error: error.message || 'Error interno en la sincronización.' })
  }
}
