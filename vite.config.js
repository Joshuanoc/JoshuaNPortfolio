import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { resolve } from 'path'

export default defineConfig({
  plugins: [react()],
  base: '/JoshuaNPortfolio/',
  build: {
    rollupOptions: {
      input: {
        portfolio: resolve(__dirname, 'index.html'),
        supportiq: resolve(__dirname, 'supportiq/index.html')
      }
    }
  }
})