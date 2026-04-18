import { useLang } from '../context/LangContext'
import { EMERGENCY_NUMBERS } from '../data/emergency'

export default function EmergencyBanner() {
  const { t } = useLang()

  return (
    <section className="emer-section" id="emergency">
      <div className="emer-inner">
        <div className="emer-header">
          <span className="emer-dot" />
          <span className="emer-title">
            {t({ en: 'Emergency Helplines', hi: 'आपातकालीन हेल्पलाइन' })}
          </span>
          <span className="emer-note">
            {t({ en: 'Tap to call directly', hi: 'कॉल करने के लिए टैप करें' })}
          </span>
        </div>
        <div className="emer-grid">
          {EMERGENCY_NUMBERS.map(e => (
            <a key={e.num} href={`tel:${e.num}`} className="emer-card">
              <i className={`fas ${e.icon}`} />
              <div className="emer-num">{e.num}</div>
              <div className="emer-label">{t(e)}</div>
              <div className="emer-call">
                {t({ en: 'Call now', hi: 'अभी कॉल करें' })}
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}
