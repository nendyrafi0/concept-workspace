import path from 'path'
import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'
import tailwindcss from '@tailwindcss/vite'
import { VitePWA } from 'vite-plugin-pwa'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(), 
    tailwindcss(),
    VitePWA({
        registerType: "autoUpdate",
        manifest: {
            name: "Concept Workspace",
            short_name: "Concept",
            description: "TBA",
            lang: "id",
            start_url: "/",
            display: "standalone",
            background_color: "#ffffff",
            theme_color: "#0f172a",
            icons: [
              { src: "pwa-192x192.png", sizes: "192x192", type: "image/png" },
              { src: "pwa-512x512.png", sizes: "512x512", type: "image/png" },
              { src: "pwa-512x512.png", sizes: "512x512", type: "image/png", purpose: "maskable" },
            ],
          },
        workbox: {
          globPatterns: ["**/*.{js,css,html,ico,png,svg}"],
        },
        devOptions: { enabled: true },
      }),
  ],
  resolve: {
    alias: {
      '@': path.resolve(import.meta.dirname, './src'),
    },
  },
})
