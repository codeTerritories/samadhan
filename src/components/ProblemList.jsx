import React from 'react'
import { useMemo } from 'react'
import { useLang } from '../context/LangContext'
import { PROBLEMS } from '../data/problems'
import { CATEGORIES } from '../data/categories'
import ProblemRow from './ProblemRow'

export default function ProblemList({ activeCat, searchQuery, highlight, onSuggestProblem }) {
  const { lang, t } = useLang()

  const filtered = useMemo(() => {
    let list = PROBLEMS
    if (activeCat !== 'all') {
      list = list.filter(p => p.cat === activeCat)
    }
    const q = searchQuery.trim().toLowerCase()
    if (q) {
      list = list.filter(p => {
        const text = [
          p.en?.title, p.en?.sub,
          p.hi?.title, p.hi?.sub,
          ...(p.tags || []),
        ].join(' ').toLowerCase()
        return q.split(' ').every(word => text.includes(word))
      })
    }
    return list
  }, [activeCat, searchQuery, lang])

  const catName = CATEGORIES.find(c => c.id === activeCat) || CATEGORIES[0]

  return (
    <div className={`prob-section${highlight ? ' highlighted' : ''}`} id="problem-list">
      <div className="prob-hd">
        <span className="prob-hd-title">
          {activeCat === 'all'
            ? t({ en: 'All Problems', hi: 'सभी समस्याएं' })
            : t(catName)}
        </span>
        <span className="prob-hd-count">
          {filtered.length} {t({ en: 'found', hi: 'मिलीं' })}
        </span>
      </div>

      <div className="prob-list">
        {filtered.length === 0 ? (
          <div className="no-results">
            <div className="no-results-icon" aria-hidden>
              <i className="fas fa-search-minus" />
            </div>
            <h3 className="no-results-title">
              {t({ en: 'No results found', hi: 'कोई परिणाम नहीं मिला' })}
            </h3>
            <p className="no-results-sub">
              {searchQuery.trim()
                ? t({ en: `We couldn't find anything for "${searchQuery.trim()}"`, hi: `"${searchQuery.trim()}" के लिए कुछ नहीं मिला` })
                : t({ en: 'No problems in this category yet.', hi: 'इस श्रेणी में अभी कोई समस्या नहीं है।' })
              }
            </p>
            <div className="no-results-suggest">
              <p className="nrs-label">
                <i className="fas fa-hand-point-right" />
                {t({ en: "Can't find your problem? Tell us — we'll add it.", hi: 'अपनी समस्या नहीं मिली? हमें बताएं — हम जोड़ेंगे।' })}
              </p>
              <button
                className="nrs-btn"
                onClick={() => onSuggestProblem && onSuggestProblem(searchQuery.trim())}
              >
                <i className="fas fa-pen" />
                {t({ en: 'Write your problem here', hi: 'यहाँ अपनी समस्या लिखें' })}
                <i className="fas fa-arrow-right nrs-arrow" />
              </button>
            </div>
          </div>
        ) : (
          filtered.map(p => <ProblemRow key={p.id} problem={p} />)
        )}
      </div>
    </div>
  )
}
