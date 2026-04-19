import { useEffect } from 'react'

// Canonical base URL — change this to match your deployed domain
const BASE_URL = 'https://samadhan.in'

const SEO_PAGES = {
  home: {
    title: 'Samadhan — India Civic Complaint Portal | Bijli Pani Sadak Helplines',
    description:
      'Find official helplines & complaint portals for electricity (1912), water (1916), roads, police, banking & more — for every Indian state. Free, bilingual, no login.',
    ogTitle: "Samadhan — India's One-Stop Civic Complaint Portal",
    ogDescription:
      'Bijli gul? Pani band? FIR dena hai? — Get the exact helpline & complaint portal for your problem across all 30 Indian states. Free, official, bilingual.',
    url: BASE_URL + '/',
    canonical: BASE_URL + '/',
  },
  about: {
    title: 'About Samadhan — हमारे बारे में | Free India Civic Helpline Portal',
    description:
      'Samadhan is a free, independent civic portal helping every Indian citizen find the right government helpline instantly. No data stored. No login. Official portals only.',
    ogTitle: 'About Samadhan — Independent India Civic Helpline Aggregator',
    ogDescription:
      'Learn about Samadhan — a non-profit citizen project that aggregates 400+ official government helplines across all 30 Indian states. Free forever.',
    url: BASE_URL + '/about',
    canonical: BASE_URL + '/about',
  },
}

/**
 * useSEO — updates document head meta tags whenever the page changes.
 * Works without React Router by directly mutating DOM meta elements.
 * Also updates the browser URL via History API for proper page URLs.
 *
 * @param {string} page  'home' | 'about'
 */
export function useSEO(page) {
  useEffect(() => {
    const cfg = SEO_PAGES[page] || SEO_PAGES.home

    // ── Title ───────────────────────────────────────────────────────────
    document.title = cfg.title

    // ── Meta helpers ────────────────────────────────────────────────────
    const setMeta = (selector, content) => {
      const el = document.querySelector(selector)
      if (el) el.setAttribute('content', content)
    }
    const setLink = (selector, attr, value) => {
      const el = document.querySelector(selector)
      if (el) el.setAttribute(attr, value)
    }

    // ── Standard meta ───────────────────────────────────────────────────
    setMeta('meta[name="description"]', cfg.description)

    // ── Open Graph ──────────────────────────────────────────────────────
    setMeta('meta[property="og:title"]',       cfg.ogTitle)
    setMeta('meta[property="og:description"]', cfg.ogDescription)
    setMeta('meta[property="og:url"]',         cfg.url)

    // ── Twitter Card ────────────────────────────────────────────────────
    setMeta('meta[name="twitter:title"]',       cfg.ogTitle)
    setMeta('meta[name="twitter:description"]', cfg.ogDescription)

    // ── Canonical ───────────────────────────────────────────────────────
    setLink('link[rel="canonical"]', 'href', cfg.canonical)

    // ── Hreflang ─────────────────────────────────────────────────────────
    setLink('link[hreflang="en-IN"]',   'href', cfg.url)
    setLink('link[hreflang="hi-IN"]',   'href', cfg.url)
    setLink('link[hreflang="x-default"]', 'href', cfg.url)

    // ── History API — gives each page a real URL path ───────────────────
    // This lets Googlebot discover /about as a separate page, enables
    // shareable deep-links, and makes browser back/forward work correctly.
    const targetPath = page === 'about' ? '/about' : '/'
    if (window.location.pathname !== targetPath) {
      window.history.pushState({ page }, cfg.title, targetPath)
    }

    // ── JSON-LD: update BreadcrumbList dynamically ───────────────────────
    const bcScript = document.getElementById('ld-breadcrumb')
    if (bcScript) {
      const bcItems =
        page === 'about'
          ? [
              { '@type': 'ListItem', position: 1, name: 'Home', item: BASE_URL + '/' },
              { '@type': 'ListItem', position: 2, name: 'About', item: BASE_URL + '/about' },
            ]
          : [{ '@type': 'ListItem', position: 1, name: 'Home', item: BASE_URL + '/' }]

      bcScript.textContent = JSON.stringify({
        '@context': 'https://schema.org',
        '@type': 'BreadcrumbList',
        itemListElement: bcItems,
      })
    }
  }, [page])
}
