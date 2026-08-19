import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    host: true,
    port: 5173,
    // Allow Cursor Cloud Agent forwarded hosts (e.g. *.cursorvm.com)
    allowedHosts: ['.cursorvm.com'],
  },
  preview: {
    host: true,
    port: 4173,
    allowedHosts: ['.cursorvm.com'],
  },
})
