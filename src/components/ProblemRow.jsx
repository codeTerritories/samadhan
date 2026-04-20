import React from 'react'
import { useState } from 'react'
import { useLang }     from '../context/LangContext'
import { useLocation } from '../context/LocationContext'
import { CATEGORIES }  from '../data/categories'
import { BADGE_META, getPortals } from '../data/richPortals'

const TYPE_META = {
  urgent:   { label: { en: 'Emergency',       hi: 'आपातकाल' },       cls: 'badge-urgent' },
  solve:    { label: { en: 'Help available',  hi: 'मदद उपलब्ध' },    cls: 'badge-solve'  },
  hybrid:   { label: { en: 'Guide + Portal',  hi: 'गाइड + पोर्टल' }, cls: 'badge-hybrid' },
  redirect: { label: { en: 'Official Portal', hi: 'आधिकारिक पोर्टल' }, cls: 'badge-redirect' },
}

export default function ProblemRow({ problem }) {
  const { lang, t }          = useLang()
  const { state: userState } = useLocation()
  const [expanded, setExpanded] = useState(false)
  const [copied,   setCopied]   = useState(null)   // index of copied portal

  const cat  = CATEGORIES.find(c => c.id === problem.cat) || CATEGORIES[0]
  const meta = TYPE_META[problem.type] || TYPE_META.redirect

  const title = problem[lang]?.title || problem.en?.title
  const sub   = problem[lang]?.sub   || problem.en?.sub

  // Get rich portals (state-specific + national fallbacks)
  const portals = getPortals(userState, problem.cat)

  const toggle = () => setExpanded(x => !x)

  const copyUrl = (url, idx) => {
    if (!url) return
    navigator.clipboard.writeText(url).then(() => {
      setCopied(idx)
      setTimeout(() => setCopied(null), 2000)
    })
  }

  // Find the first state-specific portal index (for escalation separator placement)
  const hasStatePortals = portals.some(p => p.badge === 'first' || p.badge === 'direct')
  const escalateIdx     = portals.findIndex(p => p.badge === 'central' || p.badge === 'last')

  return (
    <div className={`prob-row${expanded ? ' expanded' : ''}`}>

      {/* ── clickable header ──────────────────────────────── */}
      <div
        className="prow-header"
        onClick={toggle}
        role="button"
        tabIndex={0}
        aria-expanded={expanded}
        onKeyDown={e => e.key === 'Enter' && toggle()}
      >
        <div className="prow-icon" style={{ background: cat.bg }}>
          <i className={`fas ${cat.icon}`} style={{ color: cat.color }} />
        </div>

        <div className="prow-body">
          <div className="prow-title">{title}</div>
          <div className="prow-sub">{sub}</div>
          {problem.helpline && (
            <a
              href={`tel:${problem.helpline}`}
              className="prow-helpline"
              onClick={e => e.stopPropagation()}
            >
              <i className="fas fa-phone-alt" />
              {problem.helpline}
            </a>
          )}
        </div>

        <div className="prow-right">
          <span className={`pbadge ${meta.cls}`}>{t(meta.label)}</span>
          {userState && portals.length > 0 && (
            <span className="prow-loc-dot" title={userState}>
              <i className="fas fa-map-marker-alt" />
            </span>
          )}
          <div className={`prow-arrow${expanded ? ' open' : ''}`}>
            <i className="fas fa-chevron-down" />
          </div>
        </div>
      </div>

      {/* ── expandable portal panel ───────────────────────── */}
      {expanded && (
        <div className="steps-panel">

          {/* Location header */}
          {userState && (
            <div className="portal-location-bar">
              <i className="fas fa-map-marker-alt" />
              <span>
                {t({ en: 'Showing portals for', hi: 'Portal दिख रहे हैं:' })}
                {' '}
                <strong>{userState}</strong>
              </span>
            </div>
          )}

          {/* Guide banner — shown above portal list */}
          <div className="portal-guide-banner">
            <i className="fas fa-layer-group" />
            <div className="pgb-text">
              <strong>{t({ en: 'Complaint portals below — follow in order', hi: 'नीचे शिकायत पोर्टल हैं — क्रम में follow करें' })}</strong>
              <span>{t({ en: 'Start from Portal 1. Not resolved in 7 days? Move to Portal 2, then 3.', hi: 'पोर्टल 1 से शुरू करें। 7 दिन में हल न हो? पोर्टल 2, फिर 3 पर जाएं।' })}</span>
            </div>
          </div>

          {/* Portal cards */}
          {portals.map((portal, idx) => {
            const badgeMeta = BADGE_META[portal.badge] || BADGE_META.last
            const showSeparator = hasStatePortals && escalateIdx > 0 && idx === escalateIdx

            return (
              <div key={idx}>

                {/* Escalation separator */}
                {showSeparator && (
                  <div className="escalate-separator">
                    <span className="esc-line" />
                    <span className="esc-text">
                      <i className="fas fa-arrow-up" />
                      {t({ en: 'Still not resolved? Escalate here', hi: 'अभी हल नहीं हुआ? यहाँ escalate करें' })}
                    </span>
                    <span className="esc-line" />
                  </div>
                )}

                {/* Portal card */}
                <div className="portal-card">

                  {/* Top row: Step pill + badge */}
                  <div className="pc-top-row">
                    <span className="pc-step-pill">
                      {t({ en: `Portal ${idx + 1}`, hi: `पोर्टल ${idx + 1}` })}
                    </span>
                    <span className={`pc-badge ${badgeMeta.cls}`}>
                      {t(badgeMeta)}
                    </span>
                  </div>

                  {/* Portal name */}
                  <h3 className="pc-name">{portal.name}</h3>

                  {/* Resolve-chance bar */}
                  <div className="pc-weight">
                    <span className="pc-weight-dots">
                      {[1,2,3,4,5].map(d => (
                        <span key={d} className="pc-weight-dot"
                          style={d <= badgeMeta.weight ? { background: badgeMeta.weightColor } : {}} />
                      ))}
                    </span>
                    <span className="pc-weight-value" style={{ color: badgeMeta.weightColor }}>
                      {t(badgeMeta.weightLabel)}
                    </span>
                    <span className="pc-weight-suffix">
                      {t({ en: 'chance of resolution', hi: 'हल होने की संभावना' })}
                    </span>
                  </div>

                  {/* Description */}
                  <p className="pc-desc">{t(portal.desc)}</p>

                  {/* How-to steps */}
                  {portal.howto?.length > 0 && (
                    <div className="pc-howto">
                      <div className="pc-howto-title">
                        <i className="fas fa-list-ol" />
                        {t({ en: 'How to complain:', hi: 'शिकायत कैसे करें:' })}
                      </div>
                      <ol className="pc-howto-list">
                        {portal.howto.map((step, si) => (
                          <li key={si} className="pc-howto-item">{t(step)}</li>
                        ))}
                      </ol>
                    </div>
                  )}

                  {/* Action buttons */}
                  <div className="pc-actions">
                    {portal.url && (
                      <a href={portal.url} target="_blank" rel="noopener noreferrer"
                        className="pc-btn-primary" onClick={e => e.stopPropagation()}>
                        <i className="fas fa-external-link-alt" />
                        {t({ en: 'Open Complaint Website', hi: 'शिकायत वेबसाइट खोलें' })}
                      </a>
                    )}
                    {portal.phone && (
                      <a href={`tel:${portal.phone.replace(/\s/g, '')}`}
                        className="pc-btn-call" onClick={e => e.stopPropagation()}>
                        <i className="fas fa-phone-alt" />
                        {t({ en: 'Call', hi: 'कॉल करें' })} {portal.phone}
                      </a>
                    )}
                  </div>

                  {/* Website URL — small secondary line */}
                  {portal.url && (
                    <div className="pc-url-line">
                      <i className="fas fa-globe" />
                      <span>{portal.url.replace(/^https?:\/\//, '')}</span>
                      <button className={`pc-copy-btn${copied === idx ? ' copied' : ''}`}
                        onClick={e => { e.stopPropagation(); copyUrl(portal.url, idx) }}>
                        <i className={`fas ${copied === idx ? 'fa-check' : 'fa-copy'}`} />
                        {copied === idx ? t({ en: 'Copied!', hi: 'Copied!' }) : t({ en: 'Copy', hi: 'Copy' })}
                      </button>
                    </div>
                  )}

                </div>
              </div>
            )
          })}

          {/* No portals fallback */}
          {portals.length === 0 && (
            <div className="portal-empty">
              <i className="fas fa-info-circle" />
              {t({ en: 'Please select your state for local helplines.', hi: 'स्थानीय helpline के लिए अपना राज्य चुनें।' })}
            </div>
          )}

        </div>
      )}
    </div>
  )
}
