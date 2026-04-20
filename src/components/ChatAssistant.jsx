import React from 'react'
import { useState, useRef, useEffect } from 'react'
import { useLang } from '../context/LangContext'
import { CHAT_REPLIES, DEFAULT_REPLY } from '../data/chatReplies'

// ── Quick chips ───────────────────────────────────────────────
const QUICK_CHIPS = [
  { en: 'UPI money stolen',      hi: 'UPI पैसे गए'         },
  { en: 'No electricity',        hi: 'बिजली नहीं है'        },
  { en: 'How to file FIR',       hi: 'FIR कैसे करें'        },
  { en: 'Ration not received',   hi: 'राशन नहीं मिला'       },
  { en: 'Salary not paid',       hi: 'वेतन नहीं मिला'       },
  { en: 'Refund not given',      hi: 'रिफंड नहीं मिला'      },
  { en: 'Document lost',         hi: 'दस्तावेज़ खोया'        },
  { en: 'Builder not giving flat', hi: 'Builder flat नहीं दे रहा' },
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

// ── Fuzzy match ───────────────────────────────────────────────
function fuzzyMatch(input, keywords) {
  const norm = input.toLowerCase().replace(/[^\w\s\u0900-\u097F]/g, ' ').trim()
  const tokens = norm.split(/\s+/).filter(t => t.length > 0)

  return keywords.some(keyword => {
    const kw = keyword.toLowerCase()
    if (norm.includes(kw)) return true
    return tokens.some(tok => {
      if (tok.length < 3 || kw.length < 3) return tok === kw
      const threshold = kw.length <= 5 ? 1 : 2
      return levenshtein(tok, kw) <= threshold
    })
  })
}

function getReply(msg, lang) {
  const match = CHAT_REPLIES.find(r => fuzzyMatch(msg, r.keys))
  if (match) return { text: match[lang], source: match.source }
  return { text: DEFAULT_REPLY[lang], source: DEFAULT_REPLY.source }
}

// ── Parse URLs into clickable links ──────────────────────────
// Splits text by https:// URLs and returns an array of string/link nodes
function parseLinks(text) {
  const URL_RE = /(https?:\/\/[^\s\)\],]+)/g
  const parts = []
  let lastIndex = 0
  let match

  URL_RE.lastIndex = 0
  while ((match = URL_RE.exec(text)) !== null) {
    if (match.index > lastIndex) {
      parts.push({ type: 'text', value: text.slice(lastIndex, match.index) })
    }
    parts.push({ type: 'link', value: match[1] })
    lastIndex = URL_RE.lastIndex
  }
  if (lastIndex < text.length) {
    parts.push({ type: 'text', value: text.slice(lastIndex) })
  }
  return parts
}

function BotText({ text }) {
  const parts = parseLinks(text)
  return (
    <>
      {parts.map((p, i) =>
        p.type === 'link'
          ? <a
              key={i}
              href={p.value}
              target="_blank"
              rel="noopener noreferrer"
              className="chat-link"
            >
              {p.value.replace(/^https?:\/\//, '')}
            </a>
          : <React.Fragment key={i}>{p.value}</React.Fragment>
      )}
    </>
  )
}

// ── Typing dots ───────────────────────────────────────────────
function TypingDots() {
  return (
    <div className="chat-msg bot typing-indicator">
      <span /><span /><span />
    </div>
  )
}

// ── Main component ────────────────────────────────────────────
export default function ChatAssistant() {
  const { lang, t } = useLang()
  const [open,      setOpen]      = useState(false)
  const [typing,    setTyping]    = useState(false)
  const [chipsVisible, setChipsVisible] = useState(true)
  const [msgs,   setMsgs]   = useState([
    {
      from: 'bot',
      text: {
        en: "Namaste! I'm Samadhan Sahayak 🙏\n\nDescribe your problem in plain words — Hindi or English. I'll guide you to the exact government helpline or portal.\n\nTry: \"UPI fraud\", \"bijli nahi\", \"FIR kaise kare\", \"ration nahi mila\"…",
        hi: "नमस्ते! मैं समाधान सहायक हूं 🙏\n\nसाधारण शब्दों में अपनी समस्या बताएं — हिंदी या English में। मैं सही सरकारी helpline या portal तक पहुंचाऊंगा।\n\nTry करें: \"UPI fraud\", \"बिजली नहीं\", \"FIR कैसे करें\", \"राशन नहीं मिला\"…",
      },
    },
  ])
  const [input,  setInput]  = useState('')
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
    setChipsVisible(false)
    setTyping(true)
    setTimeout(() => {
      setTyping(false)
      const reply = getReply(text, lang)
      setMsgs(prev => [...prev, { from: 'bot', text: reply.text, source: reply.source }])
    }, 850)
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
        <div className="chat-window" id="chat" role="dialog" aria-label="Samadhan Help Chat">

          {/* Header */}
          <div className="chat-hd">
            <div className="chat-av">
              <i className="fas fa-shield-alt" />
              <span className="chat-av-dot" />
            </div>
            <div className="chat-hd-body">
              <div className="chat-hd-title">
                {t({ en: 'Samadhan Sahayak', hi: 'समाधान सहायक' })}
                <span className="chat-hd-verified">
                  <i className="fas fa-check-circle" />
                  {t({ en: ' Verified', hi: ' Verified' })}
                </span>
              </div>
              <div className="chat-hd-status">
                <span className="chat-hd-dot" />
                {t({ en: 'Official Gov Sources · Hindi & English', hi: 'सरकारी स्रोत · Hindi & English' })}
              </div>
            </div>
            <button className="chat-close" onClick={() => setOpen(false)} aria-label="Close">
              <i className="fas fa-times" />
            </button>
          </div>

          {/* Trust ribbon */}
          <div className="chat-trust-ribbon">
            <i className="fas fa-lock" />
            {t({
              en: 'All helplines & portals are official government sources',
              hi: 'सभी helplines और portals आधिकारिक सरकारी स्रोत हैं',
            })}
          </div>

          {/* Messages */}
          <div className="chat-msgs">
            {msgs.map((m, i) => (
              <div key={i} className={`chat-msg-wrap ${m.from}`}>
                {m.from === 'bot' && (
                  <div className="chat-msg-av">
                    <i className="fas fa-shield-alt" />
                  </div>
                )}
                <div className="chat-bubble-col">
                  <div className={`chat-msg ${m.from}`}>
                    {m.from === 'bot' && typeof m.text === 'string'
                      ? <BotText text={m.text} />
                      : typeof m.text === 'object'
                        ? <BotText text={t(m.text)} />
                        : m.text
                    }
                  </div>
                  {m.from === 'bot' && m.source && (
                    <div className="chat-source">
                      <i className="fas fa-check-circle" />
                      {m.source}
                    </div>
                  )}
                </div>
              </div>
            ))}
            {typing && (
              <div className="chat-msg-wrap bot">
                <div className="chat-msg-av">
                  <i className="fas fa-shield-alt" />
                </div>
                <div className="chat-bubble-col">
                  <TypingDots />
                </div>
              </div>
            )}
            <div ref={bottomRef} />
          </div>

          {/* Quick chips — hidden after first user message */}
          {chipsVisible && <div className="chat-chips-wrap">
            <div className="chat-chips-label">
              <i className="fas fa-bolt" />
              {t({ en: ' Common problems:', hi: ' आम समस्याएं:' })}
            </div>
            <div className="chat-chips">
              {QUICK_CHIPS.map((c, i) => (
                <button key={i} className="chat-chip" onClick={() => send(t(c))}>
                  {t(c)}
                </button>
              ))}
            </div>
          </div>}

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
              autoComplete="off"
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

          {/* Footer disclaimer */}
          <div className="chat-footer">
            <i className="fas fa-info-circle" />
            {t({
              en: ' For life-threatening emergencies, always call 112 / 108 directly.',
              hi: ' जानलेवा आपात स्थिति में सीधे 112 / 108 call करें।',
            })}
          </div>

        </div>
      )}
    </>
  )
}
