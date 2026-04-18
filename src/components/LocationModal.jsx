import { useState, useEffect } from 'react'
import { useLocation } from '../context/LocationContext'
import { useLang }     from '../context/LangContext'
import { ALL_STATES }  from '../data/stateServices'

const FEATURES = [
  { icon: 'fa-phone-alt',       en: 'Your state\'s DISCOM helpline number',       hi: 'आपके राज्य का DISCOM हेल्पलाइन नंबर' },
  { icon: 'fa-tint',            en: 'Local Jal Board / water authority contacts',  hi: 'स्थानीय जल बोर्ड के नंबर' },
  { icon: 'fa-external-link-alt', en: 'Direct link to state complaint portals',   hi: 'राज्य शिकायत पोर्टल का सीधा लिंक' },
]

export default function LocationModal() {
  const { state, city, status, detectLocation, setManualState } = useLocation()
  const { t, lang } = useLang()

  const [visible,    setVisible]    = useState(false)
  const [showPicker, setShowPicker] = useState(false)
  const [dismissed,  setDismissed]  = useState(
    () => localStorage.getItem('samadhan_loc_dismissed') === '1'
  )

  // Show modal after 800ms on first visit if no location yet
  useEffect(() => {
    if (dismissed || state) return
    const timer = setTimeout(() => setVisible(true), 800)
    return () => clearTimeout(timer)
  }, [])

  // Auto-close when location is resolved successfully
  useEffect(() => {
    if (status === 'done' && state && visible) {
      const t = setTimeout(() => setVisible(false), 1600)
      return () => clearTimeout(t)
    }
  }, [status, state, visible])

  const dismiss = () => {
    setVisible(false)
    setDismissed(true)
    localStorage.setItem('samadhan_loc_dismissed', '1')
  }

  if (!visible) return null

  // ── Success screen ──
  if (status === 'done' && state) {
    return (
      <div className="loc-modal-overlay">
        <div className="loc-modal loc-modal-success">
          <div className="lm-success-icon"><i className="fas fa-check-circle" /></div>
          <h3>{t({ en: 'Location Detected!', hi: 'लोकेशन मिल गई!' })}</h3>
          <p>
            <strong>{city ? `${city}, ` : ''}{state}</strong>
            <br />
            {t({ en: 'Showing local helplines for your area.', hi: 'आपके क्षेत्र की स्थानीय हेल्पलाइन दिख रही हैं।' })}
          </p>
        </div>
      </div>
    )
  }

  // ── State picker screen ──
  if (showPicker) {
    return (
      <div className="loc-modal-overlay" onClick={() => setShowPicker(false)}>
        <div className="loc-modal loc-modal-picker" onClick={e => e.stopPropagation()}>
          <StatePicker
            onSelect={s => { setManualState(s); setShowPicker(false) }}
            onBack={() => setShowPicker(false)}
          />
        </div>
      </div>
    )
  }

  // ── Main permission ask screen ──
  return (
    <div className="loc-modal-overlay" onClick={dismiss}>
      <div className="loc-modal" onClick={e => e.stopPropagation()}>

        {/* Top icon */}
        <div className="lm-icon-wrap">
          <div className="lm-icon">
            <i className="fas fa-map-marker-alt" />
          </div>
          <div className="lm-rings" aria-hidden>
            <span /><span /><span />
          </div>
        </div>

        {/* Heading */}
        <h2 className="lm-title">
          {t({ en: 'Allow Location Access', hi: 'लोकेशन की अनुमति दें' })}
        </h2>
        <p className="lm-sub">
          {t({
            en: 'Get helpline numbers & complaint portals specific to your state — instantly.',
            hi: 'अपने राज्य की हेल्पलाइन और शिकायत पोर्टल तुरंत पाएं।',
          })}
        </p>

        {/* Feature list */}
        <ul className="lm-features">
          {FEATURES.map((f, i) => (
            <li key={i} className="lm-feature">
              <span className="lm-feat-icon"><i className={`fas ${f.icon}`} /></span>
              <span>{t(f)}</span>
            </li>
          ))}
        </ul>

        {/* Actions */}
        <div className="lm-actions">
          {status === 'loading' ? (
            <div className="lm-loading">
              <i className="fas fa-circle-notch fa-spin" />
              {t({ en: 'Detecting your location…', hi: 'लोकेशन पता कर रहे हैं…' })}
            </div>
          ) : (
            <>
              <button className="lm-btn-primary" onClick={detectLocation}>
                <i className="fas fa-crosshairs" />
                {t({ en: 'Allow & Detect Location', hi: 'अनुमति दें और पता लगाएं' })}
              </button>
              <button className="lm-btn-secondary" onClick={() => setShowPicker(true)}>
                <i className="fas fa-list" />
                {t({ en: 'Select State Manually', hi: 'राज्य खुद चुनें' })}
              </button>
            </>
          )}

          {(status === 'denied' || status === 'error') && (
            <p className="lm-err">
              <i className="fas fa-exclamation-circle" />
              {t({
                en: 'Location access was blocked. Please select your state manually.',
                hi: 'लोकेशन ब्लॉक हो गई। कृपया राज्य खुद चुनें।',
              })}
            </p>
          )}
        </div>

        {/* Privacy + skip */}
        <div className="lm-footer">
          <p className="lm-privacy">
            <i className="fas fa-lock" />
            {t({ en: 'Only city & state are used. Nothing is stored on our servers.', hi: 'केवल शहर और राज्य उपयोग होता है। कोई डेटा सर्वर पर नहीं जाता।' })}
          </p>
          <button className="lm-skip" onClick={dismiss}>
            {t({ en: 'Skip for now', hi: 'अभी नहीं' })}
          </button>
        </div>
      </div>
    </div>
  )
}

// ── Inline State Picker ──────────────────────────────────────
function StatePicker({ onSelect, onBack }) {
  const { t } = useLang()
  const [q, setQ] = useState('')
  const filtered = ALL_STATES.filter(s => s.toLowerCase().includes(q.toLowerCase()))

  return (
    <>
      <div className="sp-header" style={{ borderBottom: '1px solid var(--border)' }}>
        <button className="sp-back" onClick={onBack}>
          <i className="fas fa-arrow-left" />
        </button>
        <h3>{t({ en: 'Select your State / UT', hi: 'अपना राज्य चुनें' })}</h3>
        <span style={{ width: 30 }} />
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
          <p className="sp-empty">{t({ en: 'No match', hi: 'कोई मिलान नहीं' })}</p>
        )}
        {filtered.map(s => (
          <button key={s} className="sp-item" onClick={() => onSelect(s)}>
            <i className="fas fa-map-marker-alt sp-check" />
            {s}
          </button>
        ))}
      </div>
    </>
  )
}
