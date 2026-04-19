import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],

  // Change to '/samadhan/' if deploying to a GitHub Pages sub-path
  base: '/',

  build: {
    outDir: 'dist',
    sourcemap: false,

    // Raise chunk warning threshold — the rich portal data is intentionally large
    chunkSizeWarningLimit: 600,

    rollupOptions: {
      output: {
        // Split vendor code so browsers can cache React separately from app code.
        // Smaller app bundle = faster repeat visits = better Core Web Vitals (FID/INP).
        manualChunks: {
          vendor: ['react', 'react-dom'],
        },
        // Fingerprinted asset names for optimal CDN caching
        assetFileNames: 'assets/[name]-[hash][extname]',
        chunkFileNames: 'assets/[name]-[hash].js',
        entryFileNames: 'assets/[name]-[hash].js',
      },
    },

    // Minification — terser removes all dead code and debug strings
    minify: 'esbuild',

    // Target modern browsers — enables smaller output (no IE11 polyfills)
    target: 'es2020',

    // Inline small assets as base64 (reduces HTTP requests → better LCP)
    assetsInlineLimit: 4096,
  },

  // Development server settings
  server: {
    // Handle /about URL in dev so history API routing works locally
    historyApiFallback: true,
  },

  preview: {
    // Same fallback for `vite preview`
    historyApiFallback: true,
  },
})
