import { useEffect } from 'react'

const BASE = 'https://www.samadhanportal.in'

// Per-page SEO config — title, description, OG, canonical all differ
const PAGES = {
  home: {
    title: 'Samadhan — India Civic Helpline | Bijli Pani Sadak Police',
    description:
      'Official helplines for electricity (1912), water (1916), roads (1033), police (100) & 10 more — all 30 Indian states. Free, bilingual, no login.',
    ogTitle: "Samadhan Portal — India's #1 Civic Helpline Aggregator",
    ogDescription:
      'Bijli gul? Pani band? FIR dena hai? — Exact helpline & official complaint portal for every problem, every Indian state. Free, bilingual EN+HI.',
    url:       BASE + '/',
    canonical: BASE + '/',
    path:      '/',
    breadcrumbs: [
      { position: 1, name: 'Home — India Civic Helplines', item: BASE + '/' },
    ],
  },
  about: {
    title: 'About Samadhan Portal — हमारे बारे में | Free India Civic Helpline',
    description:
      'Samadhan Portal is a free, independent civic project helping every Indian citizen find the right government helpline instantly. No data stored. No login. Official portals only.',
    ogTitle: 'About Samadhan Portal — Independent India Civic Helpline',
    ogDescription:
      'An independent, non-profit citizen project aggregating 400+ official government helplines across all 30 Indian states. Free forever, bilingual, zero data stored.',
    url:       BASE + '/about',
    canonical: BASE + '/about',
    path:      '/about',
    breadcrumbs: [
      { position: 1, name: 'Home', item: BASE + '/' },
      { position: 2, name: 'About Samadhan Portal', item: BASE + '/about' },
    ],
  },
}

/**
 * useSEO — synchronises all head meta tags to the current page.
 * Works without React Router: directly mutates DOM meta elements.
 * Also drives the History API so /about gets a real URL path.
 *
 * @param {'home'|'about'} page
 */
export function useSEO(page) {
  useEffect(() => {
    const cfg = PAGES[page] ?? PAGES.home

    // ── helpers ─────────────────────────────────────────────────────────
    const setContent = (sel, val) => {
      const el = document.querySelector(sel)
      if (el) el.setAttribute('content', val)
    }
    const setHref = (sel, val) => {
      const el = document.querySelector(sel)
      if (el) el.setAttribute('href', val)
    }

    // ── title ────────────────────────────────────────────────────────────
    document.title = cfg.title

    // ── standard meta ────────────────────────────────────────────────────
    setContent('meta[name="description"]', cfg.description)

    // ── Open Graph ───────────────────────────────────────────────────────
    setContent('meta[property="og:title"]',       cfg.ogTitle)
    setContent('meta[property="og:description"]', cfg.ogDescription)
    setContent('meta[property="og:url"]',         cfg.url)

    // ── Twitter Card ─────────────────────────────────────────────────────
    setContent('meta[name="twitter:title"]',       cfg.ogTitle)
    setContent('meta[name="twitter:description"]', cfg.ogDescription)

    // ── Canonical ────────────────────────────────────────────────────────
    setHref('link[rel="canonical"]', cfg.canonical)

    // ── Hreflang ─────────────────────────────────────────────────────────
    setHref('link[hreflang="en-IN"]',    cfg.url)
    setHref('link[hreflang="hi-IN"]',    cfg.url)
    setHref('link[hreflang="x-default"]', cfg.url)

    // ── BreadcrumbList (JSON-LD, live DOM update) ─────────────────────────
    const bcEl = document.getElementById('ld-breadcrumb')
    if (bcEl) {
      bcEl.textContent = JSON.stringify({
        '@context': 'https://schema.org',
        '@type': 'BreadcrumbList',
        itemListElement: cfg.breadcrumbs.map(b => ({
          '@type': 'ListItem',
          position: b.position,
          name: b.name,
          item: b.item,
        })),
      })
    }

    // ── History API ───────────────────────────────────────────────────────
    // Gives each logical page a real URL path so:
    //   • Googlebot indexes /about as a distinct page
    //   • Browser back/forward work naturally
    //   • Shareable deeplinks work (e.g. WhatsApp share of /about)
    if (window.location.pathname !== cfg.path) {
      window.history.pushState({ page }, cfg.title, cfg.path)
    }
  }, [page])
}
