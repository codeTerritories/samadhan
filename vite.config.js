import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { copyFileSync, mkdirSync } from 'fs'
import { resolve } from 'path'

// Plugin: after every build, copy dist/index.html → dist/about/index.html
// This makes /about a real static file — no server rewrite rules needed.
// Works on Vercel, Netlify, GitHub Pages, cPanel — any static host.
function spaRoutesCopy() {
  return {
    name: 'spa-routes-copy',
    closeBundle() {
      const distDir = resolve(__dirname, 'dist')
      const src     = resolve(distDir, 'index.html')

      const routes = ['about']
      for (const route of routes) {
        const dir = resolve(distDir, route)
        mkdirSync(dir, { recursive: true })
        copyFileSync(src, resolve(dir, 'index.html'))
        console.log(`✓ copied dist/index.html → dist/${route}/index.html`)
      }
    },
  }
}

export default defineConfig({
  plugins: [react(), spaRoutesCopy()],

  base: '/',

  build: {
    outDir: 'dist',
    sourcemap: false,
    chunkSizeWarningLimit: 600,

    rollupOptions: {
      output: {
        manualChunks: { vendor: ['react', 'react-dom'] },
        assetFileNames:  'assets/[name]-[hash][extname]',
        chunkFileNames:  'assets/[name]-[hash].js',
        entryFileNames:  'assets/[name]-[hash].js',
      },
    },

    minify: 'esbuild',
    target: 'es2020',
    assetsInlineLimit: 4096,
  },

  server:  { historyApiFallback: true },
  preview: { historyApiFallback: true },
})
