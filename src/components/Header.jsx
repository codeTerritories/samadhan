import React from 'react'
import { useState } from 'react'
import { useLang } from '../context/LangContext'

export default function Header({ onGoHome, onGoAbout, activePage }) {
  const { lang, setLang, t } = useLang()
  const [menuOpen, setMenuOpen] = useState(false)

  const close = () => setMenuOpen(false)

  return (
    <header className="header">
      <div className="header-inner">
        {/* Logo — always goes home */}
        <div className="logo" onClick={onGoHome} style={{ cursor: 'pointer' }} role="button" tabIndex={0}
          onKeyDown={e => e.key === 'Enter' && onGoHome()}>
          <div className="logo-box">
            <i className="fas fa-hands-helping" />
          </div>
          <div className="logo-text">
            <span className="logo-name">Sam<span>adhan</span></span>
            <span className="logo-sub">
              {t({ en: 'Citizen Problem Portal', hi: 'नागरिक समस्या पोर्टल' })}
            </span>
          </div>
        </div>

        {/* Desktop nav */}
        <nav className="desktop-nav">
          <button
            className={`nav-btn ${activePage === 'home' ? 'nav-active' : ''}`}
            onClick={() => { onGoHome(); close() }}
          >
            <i className="fas fa-home" />
            {t({ en: 'Home', hi: 'होम' })}
          </button>
          {activePage === 'home' && (
            <>
              <a className="nav-btn" href="#emergency" onClick={close}>
                {t({ en: 'Emergency', hi: 'आपातकाल' })}
              </a>
              <a className="nav-btn" href="#services" onClick={close}>
                {t({ en: 'Services', hi: 'सेवाएं' })}
              </a>
            </>
          )}
          <button
            className={`nav-btn ${activePage === 'about' ? 'nav-active' : ''}`}
            onClick={() => { onGoAbout(); close() }}
          >
            <i className="fas fa-envelope" />
            {t({ en: 'Write to Us', hi: 'हमें लिखें' })}
          </button>
        </nav>

        {/* Right controls */}
        <div className="header-right">
          <button
            className="lang-btn"
            onClick={() => setLang(lang === 'en' ? 'hi' : 'en')}
            aria-label="Switch language"
          >
            <span className={lang === 'en' ? 'active' : ''}>EN</span>
            <span className="divider">|</span>
            <span className={lang === 'hi' ? 'active' : ''}>हि</span>
          </button>

          <button
            className={`hamburger ${menuOpen ? 'open' : ''}`}
            onClick={() => setMenuOpen(p => !p)}
            aria-label="Menu"
          >
            <span /><span /><span />
          </button>
        </div>
      </div>

      {/* Mobile nav */}
      {menuOpen && (
        <nav className="mobile-nav">
          <button className={`mobile-nav-btn ${activePage === 'home' ? 'active' : ''}`}
            onClick={() => { onGoHome(); close() }}>
            <i className="fas fa-home" />
            {t({ en: 'Home', hi: 'होम' })}
          </button>
          {activePage === 'home' && (
            <>
              <a className="mobile-nav-btn" href="#emergency" onClick={close}>
                <i className="fas fa-phone-alt" />
                {t({ en: 'Emergency Numbers', hi: 'आपातकालीन नंबर' })}
              </a>
              <a className="mobile-nav-btn" href="#services" onClick={close}>
                <i className="fas fa-th-large" />
                {t({ en: 'All Services', hi: 'सभी सेवाएं' })}
              </a>
            </>
          )}
          <button className={`mobile-nav-btn ${activePage === 'about' ? 'active' : ''}`}
            onClick={() => { onGoAbout(); close() }}>
            <i className="fas fa-envelope" />
            {t({ en: 'Write to Us', hi: 'हमें लिखें' })}
          </button>
        </nav>
      )}
    </header>
  )
}
