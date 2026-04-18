import React from 'react'
import { useState, useRef, useEffect } from 'react'
import { useLang } from '../context/LangContext'
import { CHAT_REPLIES, DEFAULT_REPLY } from '../data/chatReplies'

const QUICK_CHIPS = [
  { en: 'UPI money stolen',    hi: 'UPI पैसे चोरी' },
  { en: 'No electricity',      hi: 'बिजली नहीं है' },
  { en: 'Drain blocked',       hi: 'नाली बंद है' },
  { en: 'How to file FIR',     hi: 'FIR कैसे करें' },
  { en: 'Ration not received', hi: 'राशन नहीं मिला' },
]

function getReply(msg, lang) {
  const m = msg.toLowerCase()
  const match = CHAT_REPLIES.find(r =>
    r.keys.some(k => m.includes(k))
  )
  return match ? match[lang] : DEFAULT_REPLY[lang]
}

export default function ChatAssistant() {
  const { lang, t } = useLang()
  const [open, setOpen] = useState(false)
  const [msgs, setMsgs] = useState([
    {
      from: 'bot',
      text: {
        en: "Namaste! I'm Samadhan Sahayak.\n\nTell me your problem in plain words — I'll guide you to the right portal or helpline.",
        hi: 'नमस्ते! मैं समाधान सहायक हूं।\n\nसाधारण शब्दों में अपनी समस्या बताएं — मैं आपको सही पोर्टल या हेल्पलाइन तक पहुंचाऊंगा।',
      },
    },
  ])
  const [input, setInput] = useState('')
  const bottomRef = useRef(null)
  const inputRef  = useRef(null)

  useEffect(() => {
    if (open) {
      bottomRef.current?.scrollIntoView({ behavior: 'smooth' })
      setTimeout(() => inputRef.current?.focus(), 200)
    }
  }, [msgs, open])

  const send = (msg) => {
    const text = msg || input
    if (!text.trim()) return

    setMsgs(prev => [...prev, { from: 'user', text }])
    setInput('')

    setTimeout(() => {
      const reply = getReply(text, lang)
      setMsgs(prev => [...prev, { from: 'bot', text: reply }])
    }, 600)
  }

  return (
    <>
      {/* Floating button */}
      <button
        className={`chat-fab ${open ? 'open' : ''}`}
        onClick={() => setOpen(p => !p)}
        aria-label="Open chat"
      >
        {open
          ? <i className="fas fa-times" />
          : <><i className="fas fa-comment-dots" /><span className="fab-label">{t({ en: 'Help', hi: 'मदद' })}</span></>
        }
      </button>

      {/* Chat window */}
      {open && (
        <div className="chat-window" id="chat">
          {/* Header */}
          <div className="chat-hd">
            <div className="chat-av">
              <i className="fas fa-robot" />
            </div>
            <div>
              <div className="chat-hd-title">
                {t({ en: 'Samadhan Sahayak', hi: 'समाधान सहायक' })}
              </div>
              <div className="chat-hd-status">
                <span className="online-dot" />
                {t({ en: 'Online — ask in Hindi or English', hi: 'ऑनलाइन — हिंदी या अंग्रेजी में पूछें' })}
              </div>
            </div>
            <button className="chat-close" onClick={() => setOpen(false)}>
              <i className="fas fa-times" />
            </button>
          </div>

          {/* Messages */}
          <div className="chat-msgs">
            {msgs.map((m, i) => (
              <div key={i} className={`chat-msg ${m.from}`}>
                {typeof m.text === 'object' ? t(m.text) : m.text}
              </div>
            ))}
            <div ref={bottomRef} />
          </div>

          {/* Quick chips */}
          <div className="chat-chips">
            {QUICK_CHIPS.map((c, i) => (
              <button key={i} className="chat-chip" onClick={() => send(t(c))}>
                {t(c)}
              </button>
            ))}
          </div>

          {/* Input */}
          <div className="chat-inp-row">
            <input
              ref={inputRef}
              className="chat-inp"
              placeholder={t({ en: 'Type your problem here…', hi: 'अपनी समस्या यहां लिखें…' })}
              value={input}
              onChange={e => setInput(e.target.value)}
              onKeyDown={e => e.key === 'Enter' && send()}
            />
            <button className="chat-send" onClick={() => send()}>
              <i className="fas fa-paper-plane" />
            </button>
          </div>
        </div>
      )}
    </>
  )
}
