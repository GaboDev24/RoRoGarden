/// <reference types="vitest/config" />
import { defineConfig } from 'vite'
import { VitePWA } from 'vite-plugin-pwa'

export default defineConfig({
  base: process.env.VITE_BASE || './',
  plugins: [
    VitePWA({
      // Modo prompt: avisar al usuario en lugar de actualizar automáticamente
      registerType: 'prompt',
      includeAssets: ['favicon.svg', 'apple-touch-icon.png'],
      manifest: {
        name: 'RoRoGarden',
        short_name: 'RoRoGarden',
        description: 'Tu rincón personal para aflojar un ratito. Un jardín de bienestar para docentes.',
        lang: 'es-AR',
        theme_color: '#BFE6EE',
        background_color: '#D9F2E6',
        display: 'standalone',
        start_url: '/',
        scope: '/',
        icons: [
          {
            src: 'pwa-192.png',
            sizes: '192x192',
            type: 'image/png',
            purpose: 'any',
          },
          {
            src: 'pwa-512.png',
            sizes: '512x512',
            type: 'image/png',
            purpose: 'any',
          },
          {
            src: 'pwa-512-maskable.png',
            sizes: '512x512',
            type: 'image/png',
            purpose: 'maskable',
          },
          {
            src: 'apple-touch-icon.png',
            sizes: '180x180',
            type: 'image/png',
          },
        ],
        shortcuts: [
          {
            name: 'Check-in',
            short_name: 'Check-in',
            description: '¿Cómo llegás hoy?',
            url: '/#/checkin',
            icons: [{ src: 'pwa-192.png', sizes: '192x192' }],
          },
          {
            name: 'Una pausa',
            short_name: 'Pausa',
            description: 'Micro-desafíos y respiración',
            url: '/#/pausa',
            icons: [{ src: 'pwa-192.png', sizes: '192x192' }],
          },
          {
            name: 'Cerrar el día',
            short_name: 'Diario',
            description: 'Escribí cómo terminó el día',
            url: '/#/diario',
            icons: [{ src: 'pwa-192.png', sizes: '192x192' }],
          },
        ],
      },
      workbox: {
        globPatterns: ['**/*.{js,css,html,svg,png,woff2}'],
        // Estrategia cache-first para activos, red-primero para html
        runtimeCaching: [],
        // Limpiar caches viejos
        cleanupOutdatedCaches: true,
        // Precachear todo
        skipWaiting: false,
        clientsClaim: false,
      },
      devOptions: {
        enabled: false,
      },
    }),
  ],
  server: {
    host: true,
  },
  build: {
    // Excluir SpritesLab de producción
    rollupOptions: {
      output: {
        manualChunks: undefined,
      },
    },
  },
  test: {
    environment: 'happy-dom',
    include: ['tests/**/*.test.ts'],
  },
})
