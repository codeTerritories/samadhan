import React from 'react'
import { useState, useCallback } from 'react'
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

export default function App() {
  const [page, setPage]           = useState('home')
  const [activeCat, setActiveCat] = useState('all')
  const [searchQuery, setSearchQuery] = useState('')

  const goHome = useCallback(() => {
    setPage('home')
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }, [])

  const goAbout = useCallback(() => {
    setPage('about')
    window.scrollTo({ top: 0, behavior: 'instant' })
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
              <main className="main-content">
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
