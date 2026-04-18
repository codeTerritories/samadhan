import { useLang } from '../context/LangContext'

const QUICK_TAGS = [
  { en: 'No electricity',  hi: 'बिजली नहीं',  query: 'bijli nahi' },
  { en: 'No water',        hi: 'पानी नहीं',    query: 'pani nahi' },
  { en: 'Garbage',         hi: 'कचरा',         query: 'kachra' },
  { en: 'UPI Fraud',       hi: 'UPI फ्रॉड',    query: 'upi fraud' },
  { en: 'Broken road',     hi: 'सड़क टूटी',    query: 'sadak tuta' },
  { en: 'FIR / Police',    hi: 'FIR / पुलिस',  query: 'fir police' },
  { en: 'Aadhaar',         hi: 'आधार',          query: 'aadhaar' },
  { en: 'Ration',          hi: 'राशन',           query: 'ration' },
]

export default function Hero({ onSearch }) {
  const { lang, t } = useLang()

  const handleQuickTag = (query) => {
    onSearch(query)
    document.getElementById('services')?.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }

  return (
    <section className="hero">
      {/* ── decorative background layers ── */}
      <div className="hero-tricolor" aria-hidden>
        <span className="tc-saffron" />
        <span className="tc-white"   />
        <span className="tc-green"   />
      </div>
      <span className="hero-blob hero-blob-1" aria-hidden />
      <span className="hero-blob hero-blob-2" aria-hidden />
      <span className="hero-blob hero-blob-3" aria-hidden />

      {/* ── content ── */}
      <div className="hero-inner">

        {/* top tag row */}
        <div className="hero-tags-row">
          <span className="hero-pill hero-pill-saffron">
            🇮🇳 विकसित भारत 2047
          </span>
          <span className="hero-pill hero-pill-green">
            {t({ en: '✦ Citizen First', hi: '✦ नागरिक प्रथम' })}
          </span>
        </div>

        {/* main slogan */}
        <div className="hero-slogan" aria-label="Jaagruk Janta">
          <span className="slogan-word slogan-saffron">जागरूक</span>
          <span className="slogan-word slogan-white"> जनता</span>
        </div>
        <p className="hero-slogan-en">
          {t({ en: 'Aware Citizens · Empowered Nation', hi: 'जागरूक नागरिक · सशक्त राष्ट्र' })}
        </p>

        {/* divider with chakra */}
        <div className="hero-divider" aria-hidden>
          <span className="hero-divider-line" />
          <span className="hero-chakra">⊕</span>
          <span className="hero-divider-line" />
        </div>

        {/* sub heading */}
        <p className="hero-sub">
          {t({
            en: 'Find the right official government channel for any civic problem — electricity, water, roads, police, and more.',
            hi: 'बिजली, पानी, सड़क, पुलिस और हर नागरिक समस्या के लिए सही सरकारी चैनल एक जगह।',
          })}
        </p>

        {/* Search bar */}
        <div className="search-wrap">
          <div className="search-inp-wrap">
            <i className="fas fa-search search-ico" />
            <input
              id="hero-search"
              className="search-inp"
              placeholder={t({
                en: 'Search your problem… e.g. bijli, pani, FIR, passport',
                hi: 'समस्या खोजें… जैसे बिजली, पानी, FIR, पासपोर्ट',
              })}
              onChange={e => onSearch(e.target.value)}
            />
          </div>
          <button
            className="search-go"
            onClick={() => document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' })}
          >
            {t({ en: 'Search', hi: 'खोजें' })}
          </button>
        </div>

        {/* Quick tags */}
        <div className="quick-tags">
          {QUICK_TAGS.map(tag => (
            <button
              key={tag.query}
              className="quick-tag"
              onClick={() => handleQuickTag(tag.query)}
            >
              {t(tag)}
            </button>
          ))}
        </div>

        {/* Stats strip */}
        <div className="hero-stats">
          <div className="hero-stat">
            <strong>74+</strong>
            <span>{t({ en: 'Problems covered', hi: 'समस्याएं' })}</span>
          </div>
          <div className="hero-stat-divider" />
          <div className="hero-stat">
            <strong>13</strong>
            <span>{t({ en: 'Categories', hi: 'श्रेणियां' })}</span>
          </div>
          <div className="hero-stat-divider" />
          <div className="hero-stat">
            <strong>100%</strong>
            <span>{t({ en: 'Free & Official', hi: 'मुफ़्त और आधिकारिक' })}</span>
          </div>
        </div>
      </div>
    </section>
  )
}
