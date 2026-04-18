import React from 'react'
import { useLang } from '../context/LangContext'
import { CATEGORIES } from '../data/categories'
import { PROBLEMS } from '../data/problems'

export default function CategoryGrid({ activeCat, onSelect }) {
  const { t } = useLang()

  // Count problems per category
  const countMap = CATEGORIES.reduce((acc, cat) => {
    acc[cat.id] = cat.id === 'all'
      ? PROBLEMS.length
      : PROBLEMS.filter(p => p.cat === cat.id).length
    return acc
  }, {})

  return (
    <div className="cat-section">
      <div className="sec-hd">
        <h2 className="sec-title">
          {t({ en: 'Choose a category', hi: 'श्रेणी चुनें' })}
        </h2>
        <p className="sec-sub">
          {t({ en: 'Select the type of problem you want to resolve', hi: 'जिस प्रकार की समस्या हल करनी है वह चुनें' })}
        </p>
      </div>
      <div className="cat-grid">
        {CATEGORIES.map(cat => (
          <button
            key={cat.id}
            className={`cat-card ${activeCat === cat.id ? 'active' : ''}`}
            style={{
              '--cc-color': cat.color,
              '--cc-bg':    cat.bg,
              '--cc-stroke': cat.stroke,
            }}
            onClick={() => onSelect(cat.id)}
          >
            <div className="cat-icon" style={{ background: cat.bg }}>
              <i className={`fas ${cat.icon}`} style={{ color: cat.color }} />
            </div>
            <div className="cat-name">{t(cat)}</div>
            <div className="cat-count">
              {countMap[cat.id]} {t({ en: 'issues', hi: 'समस्याएं' })}
            </div>
          </button>
        ))}
      </div>
    </div>
  )
}
