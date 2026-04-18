import React from 'react'
import { useState } from 'react'
import { useLang } from '../context/LangContext'

const SUGGESTION_TYPES = [
  { value: 'suggestion', en: 'Suggestion / Improvement',    hi: 'सुझाव / सुधार' },
  { value: 'newproblem', en: 'Add a New Problem Category',  hi: 'नई समस्या जोड़ें' },
  { value: 'bug',        en: 'Bug / Broken Link',           hi: 'बग / टूटा हुआ लिंक' },
  { value: 'praise',     en: 'Just saying thanks 🙏',       hi: 'बस धन्यवाद 🙏' },
  { value: 'other',      en: 'Other',                       hi: 'अन्य' },
]

const TEAM = [
  { icon: 'fa-bullseye',   en: 'Mission',   hi: 'मिशन',   desc: { en: 'Make every government service discoverable in under 10 seconds for any Indian citizen.', hi: 'हर भारतीय नागरिक के लिए हर सरकारी सेवा को 10 सेकंड में खोजने योग्य बनाना।' } },
  { icon: 'fa-eye',        en: 'Vision',    hi: 'विजन',   desc: { en: 'A jaagruk (aware) citizen base that knows exactly which door to knock on for any problem.', hi: 'एक जागरूक नागरिक वर्ग जो हर समस्या के लिए सही दरवाज़ा जानता हो।' } },
  { icon: 'fa-shield-alt', en: 'Privacy',   hi: 'गोपनीयता', desc: { en: 'Zero personal data stored. No login required. All links go directly to official government portals.', hi: 'कोई व्यक्तिगत डेटा संग्रहीत नहीं। कोई लॉगिन नहीं। सभी लिंक सीधे सरकारी पोर्टल पर जाते हैं।' } },
  { icon: 'fa-heart',      en: 'Free Forever', hi: 'सदा मुफ़्त', desc: { en: 'No ads, no subscriptions, no paywalls. Built for every citizen — from villages to metros.', hi: 'कोई विज्ञापन नहीं, कोई सदस्यता नहीं। गाँव से महानगर तक — हर नागरिक के लिए।' } },
]

export default function AboutPage() {
  const { t } = useLang()

  const [form, setForm]       = useState({ name: '', email: '', type: 'suggestion', message: '' })
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)
  const [errors, setErrors]   = useState({})

  const set = (k, v) => {
    setForm(f => ({ ...f, [k]: v }))
    setErrors(e => ({ ...e, [k]: '' }))
  }

  const validate = () => {
    const e = {}
    if (!form.name.trim())    e.name    = t({ en: 'Please enter your name',    hi: 'कृपया नाम दर्ज करें' })
    if (!form.message.trim()) e.message = t({ en: 'Please write your message', hi: 'कृपया संदेश लिखें' })
    if (form.email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email))
      e.email = t({ en: 'Enter a valid email', hi: 'सही ईमेल दर्ज करें' })
    return e
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    const errs = validate()
    if (Object.keys(errs).length) { setErrors(errs); return }
    setLoading(true)
    // Simulate submission (replace with Formspree/EmailJS in production)
    setTimeout(() => { setLoading(false); setSubmitted(true) }, 1200)
  }

  return (
    <div className="about-page">

      {/* ── Hero banner ── */}
      <section className="about-hero">
        <span className="hero-blob hero-blob-1" aria-hidden />
        <span className="hero-blob hero-blob-2" aria-hidden />
        <div className="about-hero-inner">
          <div className="about-hero-icon">
            <i className="fas fa-hands-helping" />
          </div>
          <h1 className="about-hero-title">
            {t({ en: 'About', hi: 'हमारे बारे में' })}{' '}
            <span className="slogan-saffron">Samadhan</span>
          </h1>
          <p className="about-hero-sub">
            {t({
              en: 'An independent, non-profit aggregator of official Indian government portals — built so every citizen knows exactly where to go.',
              hi: 'आधिकारिक भारतीय सरकारी पोर्टलों का एक स्वतंत्र, गैर-लाभकारी संग्रहकर्ता — ताकि हर नागरिक जान सके कि कहाँ जाना है।',
            })}
          </p>
          <div className="about-slogans">
            <span className="about-slogan-chip saffron">🇮🇳 जागरूक जनता</span>
            <span className="about-slogan-chip green">✦ विकसित भारत 2047</span>
          </div>
        </div>
      </section>

      <div className="about-body">

        {/* ── Mission / Vision cards ── */}
        <section className="about-section">
          <div className="about-sec-hd">
            <span className="about-sec-accent" />
            <div>
              <h2 className="about-sec-title">{t({ en: 'Why we built this', hi: 'हमने यह क्यों बनाया' })}</h2>
              <p className="about-sec-sub">{t({ en: 'Principles behind Samadhan', hi: 'समाधान के पीछे के सिद्धांत' })}</p>
            </div>
          </div>
          <div className="about-cards">
            {TEAM.map(card => (
              <div key={card.en} className="about-card">
                <div className="about-card-icon">
                  <i className={`fas ${card.icon}`} />
                </div>
                <div className="about-card-body">
                  <h3 className="about-card-title">{t(card)}</h3>
                  <p className="about-card-desc">{t(card.desc)}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ── How it works ── */}
        <section className="about-section">
          <div className="about-sec-hd">
            <span className="about-sec-accent green" />
            <div>
              <h2 className="about-sec-title">{t({ en: 'How Samadhan works', hi: 'समाधान कैसे काम करता है' })}</h2>
              <p className="about-sec-sub">{t({ en: 'Simple, transparent, official', hi: 'सरल, पारदर्शी, आधिकारिक' })}</p>
            </div>
          </div>
          <div className="howit-list">
            {[
              { n: '01', en: 'Search or pick your problem category',  hi: 'अपनी समस्या खोजें या श्रेणी चुनें' },
              { n: '02', en: 'See all resolution paths — Local → State → Central', hi: 'सभी समाधान रास्ते देखें — स्थानीय → राज्य → केंद्र' },
              { n: '03', en: 'Tap Call / Visit / Open to reach the official portal', hi: 'आधिकारिक पोर्टल तक पहुँचने के लिए Call / Visit / Open दबाएं' },
              { n: '04', en: 'Samadhan never stores your data or takes any fee', hi: 'समाधान कभी आपका डेटा नहीं रखता और कोई शुल्क नहीं लेता' },
            ].map(s => (
              <div key={s.n} className="howit-item">
                <span className="howit-num">{s.n}</span>
                <span className="howit-text">{t(s)}</span>
              </div>
            ))}
          </div>
        </section>

        {/* ── Write to us form ── */}
        <section className="about-section" id="contact">
          <div className="about-sec-hd">
            <span className="about-sec-accent saffron" />
            <div>
              <h2 className="about-sec-title">{t({ en: 'Write to Us', hi: 'हमें लिखें' })}</h2>
              <p className="about-sec-sub">{t({ en: 'Suggestions, improvements, or just a hello — we read every message', hi: 'सुझाव, सुधार, या बस नमस्ते — हम हर संदेश पढ़ते हैं' })}</p>
            </div>
          </div>

          {submitted ? (
            <div className="form-success">
              <div className="form-success-icon"><i className="fas fa-check-circle" /></div>
              <h3>{t({ en: 'Thank you! 🙏', hi: 'धन्यवाद! 🙏' })}</h3>
              <p>{t({ en: 'Your message has been received. We will use your feedback to make Samadhan better.', hi: 'आपका संदेश मिल गया। हम आपके सुझाव से समाधान को और बेहतर बनाएंगे।' })}</p>
              <button className="form-again-btn" onClick={() => { setSubmitted(false); setForm({ name: '', email: '', type: 'suggestion', message: '' }) }}>
                {t({ en: 'Send another message', hi: 'एक और संदेश भेजें' })}
              </button>
            </div>
          ) : (
            <form className="contact-form" onSubmit={handleSubmit} noValidate>

              <div className="form-row">
                {/* Name */}
                <div className={`form-field ${errors.name ? 'has-error' : ''}`}>
                  <label className="form-label">
                    {t({ en: 'Your Name', hi: 'आपका नाम' })}
                    <span className="form-required">*</span>
                  </label>
                  <input
                    className="form-input"
                    type="text"
                    value={form.name}
                    onChange={e => set('name', e.target.value)}
                    placeholder={t({ en: 'e.g. Rahul Sharma', hi: 'जैसे राहुल शर्मा' })}
                  />
                  {errors.name && <span className="form-error">{errors.name}</span>}
                </div>

                {/* Email */}
                <div className={`form-field ${errors.email ? 'has-error' : ''}`}>
                  <label className="form-label">
                    {t({ en: 'Email (optional)', hi: 'ईमेल (वैकल्पिक)' })}
                  </label>
                  <input
                    className="form-input"
                    type="email"
                    value={form.email}
                    onChange={e => set('email', e.target.value)}
                    placeholder={t({ en: 'you@example.com', hi: 'आप@उदाहरण.com' })}
                  />
                  {errors.email && <span className="form-error">{errors.email}</span>}
                </div>
              </div>

              {/* Type */}
              <div className="form-field">
                <label className="form-label">{t({ en: 'Type of feedback', hi: 'फ़ीडबैक का प्रकार' })}</label>
                <div className="form-chips">
                  {SUGGESTION_TYPES.map(opt => (
                    <button
                      type="button"
                      key={opt.value}
                      className={`form-chip ${form.type === opt.value ? 'selected' : ''}`}
                      onClick={() => set('type', opt.value)}
                    >
                      {t(opt)}
                    </button>
                  ))}
                </div>
              </div>

              {/* Message */}
              <div className={`form-field ${errors.message ? 'has-error' : ''}`}>
                <label className="form-label">
                  {t({ en: 'Your Message', hi: 'आपका संदेश' })}
                  <span className="form-required">*</span>
                </label>
                <textarea
                  className="form-textarea"
                  rows={5}
                  value={form.message}
                  onChange={e => set('message', e.target.value)}
                  placeholder={t({
                    en: 'Tell us what is missing, what could be better, or any portal we should add...',
                    hi: 'बताएं कि क्या कमी है, क्या बेहतर हो सकता है, या कोई सरकारी पोर्टल जो जोड़ना चाहिए…',
                  })}
                />
                {errors.message && <span className="form-error">{errors.message}</span>}
                <span className="form-hint">
                  {form.message.length}/500 {t({ en: 'characters', hi: 'अक्षर' })}
                </span>
              </div>

              <button type="submit" className="form-submit" disabled={loading}>
                {loading ? (
                  <><i className="fas fa-circle-notch fa-spin" /> {t({ en: 'Sending…', hi: 'भेज रहे हैं…' })}</>
                ) : (
                  <><i className="fas fa-paper-plane" /> {t({ en: 'Send Message', hi: 'संदेश भेजें' })}</>
                )}
              </button>

            </form>
          )}
        </section>

        {/* ── Disclaimer ── */}
        <div className="about-disclaimer">
          <i className="fas fa-info-circle" />
          <p>{t({ en: 'Samadhan is an independent citizen project. It is not affiliated with any government body. All links redirect to official government websites.', hi: 'समाधान एक स्वतंत्र नागरिक परियोजना है। यह किसी सरकारी संस्था से संबद्ध नहीं है। सभी लिंक आधिकारिक सरकारी वेबसाइटों पर जाते हैं।' })}</p>
        </div>

      </div>
    </div>
  )
}
