import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { readFileSync, writeFileSync, mkdirSync } from 'fs'
import { resolve } from 'path'

// Static pre-render content for the /about page
const ABOUT_PRERENDER = `<div style="font-family:system-ui,Arial,sans-serif;max-width:760px;margin:0 auto;padding:16px 16px 40px;color:#111827">
  <header style="display:flex;align-items:center;gap:12px;padding:12px 0 20px;border-bottom:1px solid #e5e7eb;margin-bottom:24px">
    <a href="/" style="font-size:20px;font-weight:700;color:#1D9E75;text-decoration:none">Samadhan Portal</a>
    <span style="font-size:13px;color:#6b7280">— About Us</span>
  </header>
  <main>
    <h1 style="font-size:26px;font-weight:800;color:#0f172a;line-height:1.25;margin:0 0 12px">About Samadhan Portal — India's Free Civic Helpline</h1>
    <p style="font-size:15px;color:#374151;line-height:1.65;margin:0 0 20px">Samadhan Portal is a free, independent citizen project that aggregates official Indian government helplines and complaint portals across all 30 states. No login required. No personal data stored. All links go directly to official government websites.</p>
    <section style="margin-bottom:24px">
      <h2 style="font-size:18px;font-weight:700;color:#0f172a;margin:0 0 12px">Our Mission</h2>
      <p style="font-size:14px;color:#374151;line-height:1.65">Make every government service discoverable in under 10 seconds for any Indian citizen — from electricity complaints (1912) and water supply (1916) to FIR filing (100) and cyber crime (1930). Bilingual support in English and हिंदी.</p>
    </section>
    <section style="margin-bottom:24px">
      <h2 style="font-size:18px;font-weight:700;color:#0f172a;margin:0 0 12px">How It Works</h2>
      <ol style="font-size:14px;color:#374151;line-height:1.9;padding-left:20px">
        <li>Search or pick your problem category (Bijli, Pani, Sadak, Police, Bank, Health etc.)</li>
        <li>See all resolution paths — Local body → State escalation → Central ministry</li>
        <li>Call the helpline or open the official complaint portal directly</li>
        <li>Samadhan never stores your data or charges any fee</li>
      </ol>
    </section>
    <section style="margin-bottom:24px">
      <h2 style="font-size:18px;font-weight:700;color:#0f172a;margin:0 0 12px">What We Cover</h2>
      <ul style="font-size:14px;color:#374151;line-height:1.9;padding-left:20px">
        <li><strong>Electricity (Bijli):</strong> DISCOM helplines, meter complaints, SERC escalation — 1912</li>
        <li><strong>Water Supply (Pani):</strong> Jal Board, Jal Jeevan Mission, tanker — 1916</li>
        <li><strong>Roads (Sadak):</strong> Potholes, PWD, NHAI national highways — 1033</li>
        <li><strong>Sanitation (Safai):</strong> Garbage, Swachh Bharat, open drains — 1969</li>
        <li><strong>Police / Law:</strong> FIR, cyber crime, women safety — 100 / 1930</li>
        <li><strong>Banking:</strong> UPI fraud, RBI ombudsman, consumer forum — 14448</li>
        <li><strong>Health:</strong> Hospital complaint, Ayushman Bharat, ambulance — 104</li>
        <li><strong>Telecom:</strong> Mobile/internet complaints, TRAI — 1800-110-420</li>
        <li><strong>Government Services:</strong> Aadhaar, PAN, ration, passport, CPGRAMS</li>
        <li><strong>Environment, Education, Transport</strong> — and more</li>
      </ul>
    </section>
    <section style="margin-bottom:24px">
      <h2 style="font-size:18px;font-weight:700;color:#0f172a;margin:0 0 8px">Contact</h2>
      <p style="font-size:14px;color:#374151">Built by Aditya Dubey. Write to us at <a href="mailto:adubey.works@gmail.com" style="color:#1D9E75">adubey.works@gmail.com</a> for suggestions, corrections, or to add a missing portal.</p>
    </section>
    <p style="font-size:12px;color:#9ca3af">Samadhan is an independent citizen project, not affiliated with any government body. <a href="/" style="color:#1D9E75">← Back to Home</a></p>
  </main>
</div>`

// Plugin: generate route-specific HTML for each SPA page.
// Patches title, description, canonical, og:url, og:title, og:description
// and the static pre-render block — so Googlebot wave-1 sees correct per-page content.
function spaRoutesCopy() {
  return {
    name: 'spa-routes-copy',
    closeBundle() {
      const distDir = resolve(__dirname, 'dist')
      const base    = readFileSync(resolve(distDir, 'index.html'), 'utf8')

      const routes = [
        {
          dir: 'about',
          title: 'About Samadhan Portal — Free India Civic Helpline | हमारे बारे में',
          description: 'Samadhan Portal is a free citizen project aggregating 400+ official government helplines across all 30 Indian states. No login. No data stored.',
          canonical: 'https://www.samadhanportal.in/about',
          ogTitle: 'About Samadhan Portal — Independent India Civic Helpline',
          ogDesc: 'Free, independent civic project: official helplines for electricity, water, police, roads & more — all 30 Indian states, bilingual EN+HI.',
          prerender: ABOUT_PRERENDER,
          breadcrumb: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'BreadcrumbList',
            itemListElement: [
              { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.samadhanportal.in/' },
              { '@type': 'ListItem', position: 2, name: 'About Samadhan Portal', item: 'https://www.samadhanportal.in/about' },
            ],
          }),
        },
      ]

      for (const route of routes) {
        let html = base

        // ── title
        html = html.replace(/<title>[^<]*<\/title>/, `<title>${route.title}</title>`)

        // ── meta description
        html = html.replace(
          /(<meta name="description" content=")[^"]*(")/,
          `$1${route.description}$2`,
        )

        // ── canonical
        html = html.replace(
          /(<link rel="canonical" href=")[^"]*(")/,
          `$1${route.canonical}$2`,
        )

        // ── hreflang hrefs
        html = html.replace(
          /(<link rel="alternate" hreflang="en-IN" href=")[^"]*(")/,
          `$1${route.canonical}$2`,
        )
        html = html.replace(
          /(<link rel="alternate" hreflang="hi-IN" href=")[^"]*(")/,
          `$1${route.canonical}$2`,
        )
        html = html.replace(
          /(<link rel="alternate" hreflang="x-default" href=")[^"]*(")/,
          `$1${route.canonical}$2`,
        )

        // ── og:url
        html = html.replace(
          /(<meta property="og:url" content=")[^"]*(")/,
          `$1${route.canonical}$2`,
        )

        // ── og:title
        html = html.replace(
          /(<meta property="og:title" content=")[^"]*(")/,
          `$1${route.ogTitle}$2`,
        )

        // ── og:description
        html = html.replace(
          /(<meta property="og:description" content=")[^"]*(")/,
          `$1${route.ogDesc}$2`,
        )

        // ── BreadcrumbList JSON-LD
        html = html.replace(
          /(<script type="application\/ld\+json" id="ld-breadcrumb">)[\s\S]*?(<\/script>)/,
          `$1\n    ${route.breadcrumb}\n    $2`,
        )

        // ── static pre-render: swap content between marker comments
        html = html.replace(
          /<!--prerender:start-->[\s\S]*?<!--prerender:end-->/,
          `<!--prerender:start-->${route.prerender}<!--prerender:end-->`,
        )

        const dir = resolve(distDir, route.dir)
        mkdirSync(dir, { recursive: true })
        writeFileSync(resolve(dir, 'index.html'), html, 'utf8')
        console.log(`✓ generated dist/${route.dir}/index.html (patched meta + prerender)`)
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
