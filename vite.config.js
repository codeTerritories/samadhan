import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: '/',   // change to '/samadhan/' if deploying to a sub-path (e.g. GitHub Pages)
  build: {
    outDir: 'dist',
    sourcemap: false,
  },
})
