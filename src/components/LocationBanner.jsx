import React from 'react'
import { useState } from 'react'
import { useLocation } from '../context/LocationContext'
import { useLang }     from '../context/LangContext'
import { ALL_STATES }  from '../data/stateServices'

export default function LocationBanner() {
  const { state, city, status, detectLocation, setManualState, clear } = useLocation()
  const { t } = useLang()
  const [showPicker, setShowPicker] = useState(false)
  const [dismissed,  setDismissed]  = useState(false)

  // Already have a location — show compact "active" bar
  if (status === 'done' && state) {
    return (
      <div className="loc-bar loc-bar-active">
        <div className="loc-bar-inner">
          <span className="loc-active-icon"><i className="fas fa-map-marker-alt" /></span>
          <span className="loc-active-text">
            <strong>{city ? `${city}, ` : ''}{state}</strong>
            {' — '}
            {t({ en: 'Showing local helplines & complaint portals', hi: 'स्थानीय हेल्पलाइन और शिकायत पोर्टल दिख रहे हैं' })}
          </span>
          <button className="loc-change-btn" onClick={() => { setShowPicker(true) }}>
            <i className="fas fa-pencil-alt" />
            {t({ en: 'Change', hi: 'बदलें' })}
          </button>
          {showPicker && (
            <StatePicker
              current={state}
              onSelect={s => { setManualState(s); setShowPicker(false) }}
              onCancel={() => setShowPicker(false)}
            />
          )}
        </div>
      </div>
    )
  }

  // Dismissed by user — don't show
  if (dismissed) return null

  return (
    <div className="loc-bar loc-bar-ask">
      <div className="loc-bar-inner">

        {/* Icon */}
        <div className="loc-ask-icon"><i className="fas fa-location-arrow" /></div>

        {/* Text */}
        <div className="loc-ask-body">
          <p className="loc-ask-title">
            {t({ en: 'Enable location for local helplines', hi: 'स्थानीय हेल्पलाइन के लिए लोकेशन दें' })}
          </p>
          <p className="loc-ask-sub">
            {t({ en: 'Get your state DISCOM, Jal Board & local numbers.', hi: 'राज्य का DISCOM, जल बोर्ड और स्थानीय नंबर पाएं।' })}
          </p>
        </div>

        {/* Action buttons */}
        <div className="loc-ask-actions">
          {status === 'loading' ? (
            <span className="loc-loading"><i className="fas fa-circle-notch fa-spin" /></span>
          ) : (
            <>
              <button className="loc-detect-btn" onClick={detectLocation}>
                <i className="fas fa-crosshairs" />
                {t({ en: 'Use my location', hi: 'लोकेशन लें' })}
              </button>
              <button className="loc-manual-btn" onClick={() => setShowPicker(true)}>
                {t({ en: 'Pick state', hi: 'राज्य चुनें' })}
              </button>
            </>
          )}
          {(status === 'denied' || status === 'error') && (
            <span className="loc-err-text">
              {t({ en: 'Permission denied — pick state manually', hi: 'अनुमति नहीं मिली — राज्य चुनें' })}
            </span>
          )}
        </div>

        {/* Dismiss — always top-right */}
        <button className="loc-dismiss" onClick={() => setDismissed(true)} aria-label="Dismiss">
          <i className="fas fa-times" />
        </button>

      </div>

      {showPicker && (
        <StatePicker
          current={state}
          onSelect={s => { setManualState(s); setShowPicker(false) }}
          onCancel={() => setShowPicker(false)}
        />
      )}
    </div>
  )
}

function StatePicker({ current, onSelect, onCancel }) {
  const { t } = useLang()
  const [q, setQ] = useState('')
  const filtered = ALL_STATES.filter(s => s.toLowerCase().includes(q.toLowerCase()))

  return (
    <div className="state-picker-overlay" onClick={onCancel}>
      <div className="state-picker" onClick={e => e.stopPropagation()}>
        <div className="sp-header">
          <h3>{t({ en: 'Select your State / UT', hi: 'अपना राज्य / केंद्र शासित प्रदेश चुनें' })}</h3>
          <button className="sp-close" onClick={onCancel}><i className="fas fa-times" /></button>
        </div>
        <div className="sp-search-wrap">
          <i className="fas fa-search sp-search-ico" />
          <input
            className="sp-search"
            autoFocus
            placeholder={t({ en: 'Search state…', hi: 'राज्य खोजें…' })}
            value={q}
            onChange={e => setQ(e.target.value)}
          />
        </div>
        <div className="sp-list">
          {filtered.length === 0 && (
            <p className="sp-empty">{t({ en: 'No match found', hi: 'कोई मिलान नहीं' })}</p>
          )}
          {filtered.map(s => (
            <button
              key={s}
              className={`sp-item ${s === current ? 'active' : ''}`}
              onClick={() => onSelect(s)}
            >
              <i className={`fas ${s === current ? 'fa-check-circle' : 'fa-circle'} sp-check`} />
              {s}
            </button>
          ))}
        </div>
      </div>
    </div>
  )
}
