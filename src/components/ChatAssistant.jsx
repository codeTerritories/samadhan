import React from 'react'
import { useState, useRef, useEffect } from 'react'
import { useLang } from '../context/LangContext'
import { CHAT_REPLIES, DEFAULT_REPLY } from '../data/chatReplies'

const QUICK_CHIPS = [
  { en: 'UPI money stolen',    hi: 'UPI पैसे गए' },
  { en: 'No electricity',      hi: 'बिजली नहीं है' },
  { en: 'Water not coming',    hi: 'पानी नहीं आया' },
  { en: 'How to file FIR',     hi: 'FIR कैसे करें' },
  { en: 'Garbage not picked',  hi: 'कचरा नहीं उठा' },
  { en: 'Ration not received', hi: 'राशन नहीं मिला' },
]

// ── Levenshtein distance ──────────────────────────────────────
function levenshtein(a, b) {
  if (a === b) return 0
  if (a.length === 0) return b.length
  if (b.length === 0) return a.length
  const row = Array.from({ length: b.length + 1 }, (_, i) => i)
  for (let i = 1; i <= a.length; i++) {
    let prev = row[0]
    row[0] = i
    for (let j = 1; j <= b.length; j++) {
      const temp = row[j]
      row[j] = a[i - 1] === b[j - 1]
        ? prev
        : 1 + Math.min(prev, row[j], row[j - 1])
      prev = temp
    }
  }
  return row[b.length]
}

// ── Fuzzy match: tolerates 1-2 character typos ───────────────
function fuzzyMatch(input, keywords) {
  // Normalize: lowercase, remove extra spaces, strip punctuation
  const norm = input.toLowerCase().replace(/[^\w\s\u0900-\u097F]/g, ' ').trim()
  const tokens = norm.split(/\s+/).filter(t => t.length > 0)

  return keywords.some(keyword => {
    const kw = keyword.toLowerCase()
    // 1. Direct substring match (fastest)
    if (norm.includes(kw)) return true
    // 2. Token-by-token fuzzy match (handles typos)
    return tokens.some(tok => {
      if (tok.length < 3 || kw.length < 3) return tok === kw
      // allow 1 error for short words, 2 for longer
      const threshold = kw.length <= 5 ? 1 : 2
      return levenshtein(tok, kw) <= threshold
    })
  })
}

function getReply(msg, lang) {
  const match = CHAT_REPLIES.find(r => fuzzyMatch(msg, r.keys))
  return match ? match[lang] : DEFAULT_REPLY[lang]
}

// ── Typing indicator component ────────────────────────────────
function TypingDots() {
  return (
    <div className="chat-msg bot typing-indicator">
      <span /><span /><span />
    </div>
  )
}

export default function ChatAssistant() {
  const { lang, t } = useLang()
  const [open,    setOpen]    = useState(false)
  const [typing,  setTyping]  = useState(false)
  const [msgs,    setMsgs]    = useState([
    {
      from: 'bot',
      text: {
        en: "Namaste! I'm Samadhan Sahayak 🙏\n\nDescribe your problem in plain words — Hindi or English, even with spelling mistakes. I'll guide you to the right helpline or portal.",
        hi: 'नमस्ते! मैं समाधान सहायक हूं 🙏\n\nसाधारण शब्दों में समस्या बताएं — हिंदी या English में, spelling गलत हो तो भी चलेगा। मैं सही helpline या portal तक पहुंचाऊंगा।',
      },
    },
  ])
  const [input,   setInput]   = useState('')
  const bottomRef = useRef(null)
  const inputRef  = useRef(null)

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: 'smooth' })
  }, [msgs, typing])

  useEffect(() => {
    if (open) setTimeout(() => inputRef.current?.focus(), 250)
  }, [open])

  const send = (msg) => {
    const text = (msg || input).trim()
    if (!text) return
    setMsgs(prev => [...prev, { from: 'user', text }])
    setInput('')
    setTyping(true)
    setTimeout(() => {
      setTyping(false)
      setMsgs(prev => [...prev, { from: 'bot', text: getReply(text, lang) }])
    }, 900)
  }

  return (
    <>
      {/* ── Floating action button ── */}
      <button
        className={`chat-fab ${open ? 'open' : ''}`}
        onClick={() => setOpen(p => !p)}
        aria-label={open ? 'Close chat' : 'Open help chat'}
      >
        {open
          ? <i className="fas fa-times" />
          : <>
              <div className="fab-icon-wrap">
                <i className="fas fa-comment-dots" />
                <span className="fab-ping" />
              </div>
              <span className="fab-label">{t({ en: 'Help', hi: 'मदद' })}</span>
            </>
        }
      </button>

      {/* ── Chat window ── */}
      {open && (
        <div className="chat-window" id="chat">

          {/* Header */}
          <div className="chat-hd">
            <div className="chat-av">
              <i className="fas fa-robot" />
              <span className="chat-av-dot" />
            </div>
            <div className="chat-hd-body">
              <div className="chat-hd-title">
                {t({ en: 'Samadhan Sahayak', hi: 'समाधान सहायक' })}
              </div>
              <div className="chat-hd-status">
                {t({ en: '● Online — Hindi & English', hi: '● Online — हिंदी & English' })}
              </div>
            </div>
            <button className="chat-close" onClick={() => setOpen(false)} aria-label="Close">
              <i className="fas fa-times" />
            </button>
          </div>

          {/* Messages */}
          <div className="chat-msgs">
            {msgs.map((m, i) => (
              <div key={i} className={`chat-msg-wrap ${m.from}`}>
                {m.from === 'bot' && (
                  <div className="chat-msg-av">
                    <i className="fas fa-robot" />
                  </div>
                )}
                <div className={`chat-msg ${m.from}`}>
                  {typeof m.text === 'object' ? t(m.text) : m.text}
                </div>
              </div>
            ))}
            {typing && (
              <div className="chat-msg-wrap bot">
                <div className="chat-msg-av">
                  <i className="fas fa-robot" />
                </div>
                <TypingDots />
              </div>
            )}
            <div ref={bottomRef} />
          </div>

          {/* Quick chips */}
          <div className="chat-chips-wrap">
            <div className="chat-chips-label">
              {t({ en: 'Quick topics:', hi: 'जल्दी पूछें:' })}
            </div>
            <div className="chat-chips">
              {QUICK_CHIPS.map((c, i) => (
                <button key={i} className="chat-chip" onClick={() => send(t(c))}>
                  {t(c)}
                </button>
              ))}
            </div>
          </div>

          {/* Input row */}
          <div className="chat-inp-row">
            <input
              ref={inputRef}
              className="chat-inp"
              placeholder={t({ en: 'Type problem in Hindi or English…', hi: 'हिंदी या English में problem लिखें…' })}
              value={input}
              onChange={e => setInput(e.target.value)}
              onKeyDown={e => e.key === 'Enter' && !typing && send()}
              disabled={typing}
            />
            <button
              className={`chat-send ${input.trim() ? 'active' : ''}`}
              onClick={() => send()}
              disabled={typing || !input.trim()}
              aria-label="Send"
            >
              <i className="fas fa-paper-plane" />
            </button>
          </div>

        </div>
      )}
    </>
  )
}
