import React from 'react'
import { createContext, useContext, useState, useEffect } from 'react'

const LangContext = createContext()

export function LangProvider({ children }) {
  const [lang, setLangState] = useState(
    () => localStorage.getItem('samadhan_lang') || 'en'
  )

  const setLang = (l) => {
    setLangState(l)
    localStorage.setItem('samadhan_lang', l)
    document.documentElement.lang = l === 'hi' ? 'hi' : 'en'
  }

  // t() resolves a bilingual object { en, hi } → string
  const t = (obj) => {
    if (!obj) return ''
    if (typeof obj === 'string') return obj
    return obj[lang] || obj.en || ''
  }

  useEffect(() => {
    document.documentElement.lang = lang === 'hi' ? 'hi' : 'en'
  }, [lang])

  return (
    <LangContext.Provider value={{ lang, setLang, t }}>
      {children}
    </LangContext.Provider>
  )
}

export const useLang = () => useContext(LangContext)
