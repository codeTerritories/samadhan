import React from 'react'
import { useLang } from '../context/LangContext'

export default function Footer() {
  const { t } = useLang()

  return (
    <footer className="footer">
      <div className="footer-inner">
        <div className="footer-logo">
          <i className="fas fa-hands-helping" />
          <span>Samadhan</span>
        </div>
        <p className="footer-desc">
          {t({
            en: 'An independent aggregator of official Indian government portals. We do not store your personal data. All links redirect to official government websites.',
            hi: 'आधिकारिक भारतीय सरकारी पोर्टलों का एक स्वतंत्र संग्रहकर्ता। हम आपका व्यक्तिगत डेटा संग्रहीत नहीं करते। सभी लिंक आधिकारिक सरकारी वेबसाइटों पर जाते हैं।',
          })}
        </p>
        <div className="footer-bottom">
          <span>
            {t({ en: '© Samadhan — For every Indian citizen', hi: '© समाधान — हर भारतीय नागरिक के लिए' })}
          </span>
          <span className="footer-flag">🇮🇳</span>
        </div>
      </div>
    </footer>
  )
}
