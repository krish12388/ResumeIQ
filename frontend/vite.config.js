import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()], define: {
    // makes import.meta.env.VITE_AUTH_BASE_URL available in the code
    'process.env': process.env,
  },
})
