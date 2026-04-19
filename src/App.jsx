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
  const [page, setPage]           = useState(getInitialPage)
  const [activeCat, setActiveCat] = useState('all')
  const [searchQuery, setSearchQuery] = useState('')

  // Update document meta tags and browser URL whenever page changes
  useSEO(page)

  const goHome = useCallback(() => {
    setPage('home')
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }, [])

  const goAbout = useCallback(() => {
    setPage('about')
    window.scrollTo({ top: 0, behavior: 'instant' })
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

  const handleSearch = useCallback((q) => {
    setSearchQuery(q)
    if (q.trim()) setActiveCat('all')
  }, [])

  const handleCatSelect = useCallback((id) => {
    setActiveCat(id)
    setSearchQuery('')
    const inp = document.getElementById('hero-search')
    if (inp) inp.value = ''
    setTimeout(() => {
      document.getElementById('services')?.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }, 50)
  }, [])

  return (
    <LangProvider>
      <LocationProvider>
        <div className="app">
          <Header onGoHome={goHome} onGoAbout={goAbout} activePage={page} />

          {page === 'about' ? (
            <>
              <AboutPage />
              <Footer />
            </>
          ) : (
            <>
              <Hero onSearch={handleSearch} />
              <EmergencyBanner />
              <LocationBanner />
              <main className="main-content" id="services" aria-label="Civic problem categories and helplines">
                <CategoryGrid activeCat={activeCat} onSelect={handleCatSelect} />
                <ProblemList  activeCat={activeCat} searchQuery={searchQuery} />
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
