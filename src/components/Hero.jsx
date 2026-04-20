import React from 'react'
import { useLang } from '../context/LangContext'

const QUICK_TAGS = [
  { en: 'Salary not paid',    hi: 'वेतन नहीं मिला',   cat: 'job'      },
  { en: 'UPI Fraud',          hi: 'UPI फ्रॉड',         cat: 'bank'     },
  { en: 'FIR not registered', hi: 'FIR नहीं लिखी',    cat: 'police'   },
  { en: 'No electricity',     hi: 'बिजली नहीं',        cat: 'bijli'    },
  { en: 'No water',           hi: 'पानी नहीं',          cat: 'pani'     },
  { en: 'Refund not given',   hi: 'रिफंड नहीं मिला',   cat: 'consumer' },
  { en: 'Aadhaar issue',      hi: 'आधार समस्या',        cat: 'docs'     },
  { en: 'Garbage not picked', hi: 'कचरा नहीं उठा',     cat: 'safai'    },
]

const PROBLEM_ICONS = [
  { icon: 'fa-bolt',          color: '#EF9F27', bg: '#FAEEDA', en: 'Electricity', hi: 'बिजली',       cat: 'bijli'   },
  { icon: 'fa-tint',          color: '#1D9E75', bg: '#E1F5EE', en: 'Water',       hi: 'पानी',        cat: 'pani'    },
  { icon: 'fa-road',          color: '#378ADD', bg: '#E6F1FB', en: 'Roads',       hi: 'सड़क',        cat: 'sadak'   },
  { icon: 'fa-trash',         color: '#639922', bg: '#EAF3DE', en: 'Garbage',     hi: 'कचरा',        cat: 'safai'   },
  { icon: 'fa-shield-alt',    color: '#E24B4A', bg: '#FCEBEB', en: 'Police',      hi: 'पुलिस',       cat: 'police'  },
  { icon: 'fa-university',    color: '#7F77DD', bg: '#EEEDFE', en: 'Banking',     hi: 'बैंक',        cat: 'bank'    },
  { icon: 'fa-heartbeat',     color: '#D85A30', bg: '#FAECE7', en: 'Health',      hi: 'स्वास्थ्य',  cat: 'health'  },
  { icon: 'fa-signal',        color: '#0891B2', bg: '#ECFEFF', en: 'Telecom',     hi: 'मोबाइल',      cat: 'telecom' },
]

export default function Hero({ onSearch, onCatSelect }) {
  const { lang, t } = useLang()

  const handleQuickTag = (cat) => {
    onCatSelect(cat)
  }

  return (
    <section className="hero">
      {/* decorative background */}
      <div className="hero-tricolor" aria-hidden>
        <span className="tc-saffron" /><span className="tc-white" /><span className="tc-green" />
      </div>
      <span className="hero-blob hero-blob-1" aria-hidden />
      <span className="hero-blob hero-blob-2" aria-hidden />
      <span className="hero-blob hero-blob-3" aria-hidden />

      <div className="hero-inner">

        {/* Trust badge */}
        <div className="hero-trust-badge">
          <span className="htb-dot" />
          {t({ en: 'Free · Official Portals · No Login Required', hi: 'मुफ़्त · सरकारी पोर्टल · कोई लॉगिन नहीं' })}
        </div>

        {/* Main headline */}
        <h1 className="hero-headline">
          <span className="hh-line1">
            {t({ en: 'Every Problem.', hi: 'हर समस्या का' })}
          </span>
          <span className="hh-line2">
            {t({ en: 'One Website.', hi: 'समाधान — एक जगह।' })}
          </span>
        </h1>

        {/* Value proposition */}
        <p className="hero-value-prop">
          {t({
            en: 'Bijli gul? Pani band? FIR dena hai? — Get the exact helpline number and complaint portal for your problem, instantly.',
            hi: 'बिजली गई? पानी बंद? FIR देनी है? — अपनी समस्या का सही helpline नंबर और complaint portal तुरंत पाएं।',
          })}
        </p>

        {/* Problem category icons */}
        <div className="hero-problem-icons">
          {PROBLEM_ICONS.map((p, i) => (
            <div
              key={i}
              className="hpi-item"
              onClick={() => handleQuickTag(p.cat)}
              role="button"
              tabIndex={0}
              onKeyDown={e => e.key === 'Enter' && handleQuickTag(p.cat)}
            >
              <div className="hpi-icon" style={{ background: p.bg }}>
                <i className={`fas ${p.icon}`} style={{ color: p.color }} />
              </div>
              <span className="hpi-label">{lang === 'hi' ? p.hi : p.en}</span>
            </div>
          ))}
        </div>

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
            <button key={tag.cat + tag.en} className="quick-tag" onClick={() => handleQuickTag(tag.cat)}>
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
            <strong>14</strong>
            <span>{t({ en: 'States covered', hi: 'राज्य' })}</span>
          </div>
          <div className="hero-stat-divider" />
          <div className="hero-stat">
            <strong>100%</strong>
            <span>{t({ en: 'Free & Official', hi: 'मुफ़्त · सरकारी' })}</span>
          </div>
        </div>

      </div>
    </section>
  )
}
