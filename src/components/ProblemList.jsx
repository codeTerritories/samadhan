import { useMemo } from 'react'
import { useLang } from '../context/LangContext'
import { PROBLEMS } from '../data/problems'
import { CATEGORIES } from '../data/categories'
import ProblemRow from './ProblemRow'

export default function ProblemList({ activeCat, searchQuery }) {
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
    <div className="prob-section" id="services">
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
            <i className="fas fa-search-minus" />
            <p>{t({ en: 'No problems found. Try different keywords.', hi: 'कोई समस्या नहीं मिली। अलग शब्द आज़माएं।' })}</p>
          </div>
        ) : (
          filtered.map(p => <ProblemRow key={p.id} problem={p} />)
        )}
      </div>
    </div>
  )
}
