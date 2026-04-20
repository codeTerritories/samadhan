import React from 'react'
import { useState, useCallback, useEffect } from 'react'
import { LangProvider }     from './context/LangContext'
import { LocationProvider } from './context/LocationContext'
import Header               from './components/Header'
import Hero                 from './components/Hero'
import EmergencyBanner      from './components/EmergencyBanner'
import LocationBanner       from './components/LocationBanner'
import LocationModal        from './components/LocationModal'
import CategoryGrid         from './components/CategoryGrid'
import ProblemList          from './components/ProblemList'
import ChatAssistant        from './components/ChatAssistant'
import Footer               from './components/Footer'
import BackToTop            from './components/BackToTop'
import AboutPage            from './components/AboutPage'
import { useSEO }           from './hooks/useSEO'

// Derive initial page from URL so /about deeplinks work correctly
// and Googlebot can crawl /about as a distinct page
function getInitialPage() {
  if (typeof window !== 'undefined') {
    const path = window.location.pathname
    if (path.startsWith('/about')) return 'about'
  }
  return 'home'
}

export default function App() {
  const [page, setPage]               = useState(getInitialPage)
  const [activeCat, setActiveCat]     = useState('all')
  const [searchQuery, setSearchQuery] = useState('')
  const [highlightList, setHighlightList] = useState(false)
  const [contactPrefill, setContactPrefill] = useState('')

  // Update document meta tags and browser URL whenever page changes
  useSEO(page)

  const goHome = useCallback(() => {
    setPage('home')
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }, [])

  const goAbout = useCallback(() => {
    setContactPrefill('')
    setPage('about')
    window.scrollTo({ top: 0, behavior: 'instant' })
  }, [])

  const handleSuggestProblem = useCallback((query) => {
    const msg = query
      ? `I couldn't find help for: "${query}"\n\nPlease add this problem to Samadhan.`
      : ''
    setContactPrefill(msg)
    setPage('about')
    window.scrollTo({ top: 0, behavior: 'instant' })
    setTimeout(() => {
      document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }, 200)
  }, [])

  // Handle browser back/forward navigation
  useEffect(() => {
    const handlePopState = (e) => {
      const path = window.location.pathname
      setPage(path.startsWith('/about') ? 'about' : 'home')
    }
    window.addEventListener('popstate', handlePopState)
    return () => window.removeEventListener('popstate', handlePopState)
  }, [])

  // Live filter — updates results as user types, no scroll
  const handleSearch = useCallback((q) => {
    setSearchQuery(q)
    if (q.trim()) setActiveCat('all')
  }, [])

  // Called only on button click or Enter — scroll to results
  const handleSearchSubmit = useCallback(() => {
    setTimeout(() => {
      document.getElementById('problem-list')?.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }, 50)
  }, [])

  const handleCatSelect = useCallback((id) => {
    setActiveCat(id)
    setSearchQuery('')
    setHighlightList(false)
    const inp = document.getElementById('hero-search')
    if (inp) inp.value = ''
    setTimeout(() => {
      document.getElementById('problem-list')?.scrollIntoView({ behavior: 'smooth', block: 'start' })
      // Small extra delay so scroll finishes before highlight fires
      setTimeout(() => {
        setHighlightList(true)
        setTimeout(() => setHighlightList(false), 1800)
      }, 400)
    }, 50)
  }, [])

  return (
    <LangProvider>
      <LocationProvider>
        <div className="app">
          <Header onGoHome={goHome} onGoAbout={goAbout} activePage={page} />

          {page === 'about' ? (
            <>
              <AboutPage prefillMessage={contactPrefill} />
              <Footer />
            </>
          ) : (
            <>
              <Hero onSearch={handleSearch} onSearchSubmit={handleSearchSubmit} onCatSelect={handleCatSelect} />
              <EmergencyBanner />
              <LocationBanner />
              <main className="main-content" id="services" aria-label="Civic problem categories and helplines">
                <CategoryGrid activeCat={activeCat} onSelect={handleCatSelect} />
                <ProblemList  activeCat={activeCat} searchQuery={searchQuery} highlight={highlightList} onSuggestProblem={handleSuggestProblem} />
              </main>
              <Footer />
            </>
          )}

          <LocationModal />
          <ChatAssistant />
          <BackToTop />
        </div>
      </LocationProvider>
    </LangProvider>
  )
}
