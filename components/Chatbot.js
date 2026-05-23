import { useState, useRef, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const SUGGESTIONS = [
  'What services do you offer?',
  'How does SEO work?',
  'Tell me about Meta Ads',
  'How can I contact Anam?',
]

function TypingDots() {
  return (
    <div style={{ display: 'flex', gap: '5px', alignItems: 'center', padding: '4px 0' }}>
      {[0, 1, 2].map(i => (
        <span
          key={i}
          style={{
            width: '7px', height: '7px',
            borderRadius: '50%',
            background: 'var(--text-muted)',
            display: 'block',
            animation: `bounce-dot 1.2s ease ${i * 0.16}s infinite`,
          }}
        />
      ))}
    </div>
  )
}

function Message({ msg, index }) {
  const isUser = msg.role === 'user'

  return (
    <motion.div
      initial={{ opacity: 0, y: 10, scale: 0.97 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
      style={{
        display: 'flex',
        flexDirection: isUser ? 'row-reverse' : 'row',
        alignItems: 'flex-end',
        gap: '8px',
      }}
    >
      {/* Avatar — assistant only */}
      {!isUser && (
        <img
          src="/anam-dp.jpeg"
          alt=""
          style={{
            width: '26px', height: '26px',
            borderRadius: '50%',
            objectFit: 'cover',
            flexShrink: 0,
            border: '1.5px solid var(--accent)',
          }}
        />
      )}

      <div style={{
        maxWidth: '80%',
        padding: '10px 14px',
        borderRadius: isUser ? '14px 14px 3px 14px' : '14px 14px 14px 3px',
        background: isUser ? 'var(--accent)' : 'var(--bg-card)',
        border: isUser ? 'none' : '1px solid var(--border)',
        color: isUser ? '#fff' : 'var(--text-primary)',
        fontSize: '0.875rem',
        lineHeight: 1.65,
        boxShadow: isUser ? '0 4px 12px rgba(200,75,17,0.25)' : 'none',
      }}>
        {msg.content}
      </div>
    </motion.div>
  )
}

export default function Chatbot() {
  const [open, setOpen] = useState(false)
  const [messages, setMessages] = useState([
    {
      role: 'assistant',
      content: "Hi! I'm Anam's assistant. Ask me anything about her services, approach, or how she can help your business.",
    },
  ])
  const [input, setInput] = useState('')
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)
  const [showSuggestions, setShowSuggestions] = useState(true)
  const bottomRef = useRef(null)
  const inputRef = useRef(null)

  useEffect(() => {
    if (open) {
      setTimeout(() => bottomRef.current?.scrollIntoView({ behavior: 'smooth' }), 80)
      setTimeout(() => inputRef.current?.focus(), 100)
    }
  }, [open, messages])

  const send = async (text) => {
    const content = (text || input).trim()
    if (!content || loading) return

    setInput('')
    setError(null)
    setShowSuggestions(false)

    const userMsg = { role: 'user', content }
    const nextMessages = [...messages, userMsg]
    setMessages(nextMessages)
    setLoading(true)

    try {
      const res = await fetch('/api/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ messages: nextMessages.slice(-8) }),
      })

      if (!res.ok) {
        const err = await res.json().catch(() => ({}))
        throw new Error(err.error || `HTTP ${res.status}`)
      }

      const data = await res.json()
      if (!data.reply) throw new Error('Empty response')

      setMessages(m => [...m, { role: 'assistant', content: data.reply }])
    } catch (err) {
      setMessages(m => [
        ...m,
        {
          role: 'assistant',
          content: 'I\'m having trouble connecting right now. You can reach Anam directly at anamshahid2409@gmail.com.',
        },
      ])
      setError(err.message)
    } finally {
      setLoading(false)
    }
  }

  const handleKey = e => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault()
      send()
    }
  }

  return (
    <>
      {/* Chat panel */}
      <AnimatePresence>
        {open && (
          <motion.div
            key="chat-panel"
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 16, scale: 0.95 }}
            transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="chat-panel"
            style={{
              position: 'fixed',
              bottom: '88px',
              right: '24px',
              width: 'min(380px, calc(100vw - 32px))',
              height: '500px',
              background: 'var(--bg-secondary)',
              border: '1px solid var(--border)',
              borderRadius: '14px',
              boxShadow: '0 32px 80px rgba(0,0,0,0.45), 0 0 0 1px rgba(200,75,17,0.08)',
              display: 'flex',
              flexDirection: 'column',
              zIndex: 2000,
              overflow: 'hidden',
            }}
          >
            {/* Header */}
            <div style={{
              padding: '16px 18px',
              background: 'linear-gradient(135deg, #B83E0C 0%, var(--accent) 60%, #D95A1A 100%)',
              display: 'flex',
              alignItems: 'center',
              gap: '12px',
              flexShrink: 0,
            }}>
              <div style={{ position: 'relative' }}>
                <img
                  src="/anam-dp.jpeg"
                  alt="Anam"
                  style={{
                    width: '40px', height: '40px',
                    borderRadius: '50%',
                    objectFit: 'cover',
                    border: '2px solid rgba(255,255,255,0.4)',
                  }}
                />
                {/* Online dot */}
                <span style={{
                  position: 'absolute',
                  bottom: '1px', right: '1px',
                  width: '9px', height: '9px',
                  borderRadius: '50%',
                  background: '#4ade80',
                  border: '1.5px solid #C84B11',
                }} />
              </div>
              <div style={{ flex: 1 }}>
                <div style={{ fontSize: '0.9375rem', fontWeight: 600, color: '#fff', lineHeight: 1.2 }}>
                  Anam's Assistant
                </div>
                <div style={{ fontSize: '0.75rem', color: 'rgba(255,255,255,0.72)', marginTop: '1px' }}>
                  Typically replies instantly
                </div>
              </div>
              <button
                onClick={() => setOpen(false)}
                style={{
                  width: '30px', height: '30px',
                  borderRadius: '50%',
                  background: 'rgba(255,255,255,0.15)',
                  border: 'none',
                  cursor: 'pointer',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: '#fff',
                  transition: 'background 0.2s',
                }}
                onMouseEnter={e => (e.currentTarget.style.background = 'rgba(255,255,255,0.25)')}
                onMouseLeave={e => (e.currentTarget.style.background = 'rgba(255,255,255,0.15)')}
              >
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                  <path d="M18 6 6 18M6 6l12 12"/>
                </svg>
              </button>
            </div>

            {/* Messages */}
            <div style={{
              flex: 1,
              overflowY: 'auto',
              padding: '20px 16px',
              display: 'flex',
              flexDirection: 'column',
              gap: '14px',
            }}>
              {messages.map((msg, i) => (
                <Message key={i} msg={msg} index={i} />
              ))}

              {loading && (
                <motion.div
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  style={{
                    display: 'flex',
                    alignItems: 'flex-end',
                    gap: '8px',
                  }}
                >
                  <img
                    src="/anam-dp.jpeg"
                    alt=""
                    style={{
                      width: '26px', height: '26px',
                      borderRadius: '50%',
                      objectFit: 'cover',
                      border: '1.5px solid var(--accent)',
                    }}
                  />
                  <div style={{
                    padding: '10px 14px',
                    background: 'var(--bg-card)',
                    border: '1px solid var(--border)',
                    borderRadius: '14px 14px 14px 3px',
                  }}>
                    <TypingDots />
                  </div>
                </motion.div>
              )}

              <div ref={bottomRef} />
            </div>

            {/* Suggestions */}
            <AnimatePresence>
              {showSuggestions && !loading && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: 'auto' }}
                  exit={{ opacity: 0, height: 0 }}
                  style={{
                    padding: '0 14px 12px',
                    display: 'flex',
                    flexWrap: 'wrap',
                    gap: '6px',
                    flexShrink: 0,
                  }}
                >
                  {SUGGESTIONS.map(s => (
                    <motion.button
                      key={s}
                      whileHover={{ scale: 1.03 }}
                      whileTap={{ scale: 0.97 }}
                      onClick={() => send(s)}
                      style={{
                        fontSize: '0.75rem',
                        padding: '6px 12px',
                        background: 'var(--accent-dim)',
                        border: '1px solid var(--border-light)',
                        borderRadius: '20px',
                        color: 'var(--accent)',
                        cursor: 'pointer',
                        fontWeight: 500,
                        transition: 'background 0.2s',
                        fontFamily: 'inherit',
                      }}
                    >
                      {s}
                    </motion.button>
                  ))}
                </motion.div>
              )}
            </AnimatePresence>

            {/* Input area */}
            <div style={{
              padding: '12px 14px',
              borderTop: '1px solid var(--border)',
              background: 'var(--bg-card)',
              display: 'flex',
              gap: '8px',
              alignItems: 'flex-end',
              flexShrink: 0,
            }}>
              <input
                ref={inputRef}
                value={input}
                onChange={e => setInput(e.target.value)}
                onKeyDown={handleKey}
                placeholder="Ask a question..."
                maxLength={300}
                style={{
                  flex: 1,
                  background: 'var(--bg-primary)',
                  border: '1px solid var(--border)',
                  borderRadius: '8px',
                  padding: '10px 13px',
                  fontSize: '0.875rem',
                  color: 'var(--text-primary)',
                  outline: 'none',
                  transition: 'border-color 0.2s, box-shadow 0.2s',
                  fontFamily: 'inherit',
                  resize: 'none',
                }}
                onFocus={e => {
                  e.target.style.borderColor = 'var(--accent)'
                  e.target.style.boxShadow = '0 0 0 3px var(--accent-dim)'
                }}
                onBlur={e => {
                  e.target.style.borderColor = 'var(--border)'
                  e.target.style.boxShadow = 'none'
                }}
              />
              <motion.button
                onClick={() => send()}
                disabled={!input.trim() || loading}
                whileHover={input.trim() && !loading ? { scale: 1.08 } : {}}
                whileTap={input.trim() && !loading ? { scale: 0.94 } : {}}
                style={{
                  width: '38px', height: '38px',
                  borderRadius: '8px',
                  background: input.trim() && !loading ? 'var(--accent)' : 'var(--bg-primary)',
                  border: `1px solid ${input.trim() && !loading ? 'var(--accent)' : 'var(--border)'}`,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  cursor: input.trim() && !loading ? 'pointer' : 'not-allowed',
                  color: input.trim() && !loading ? '#fff' : 'var(--text-muted)',
                  transition: 'all 0.2s ease',
                  flexShrink: 0,
                }}
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                  <path d="M22 2 11 13"/><path d="M22 2 15 22 11 13 2 9l20-7z"/>
                </svg>
              </motion.button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Toggle button */}
      <motion.button
        onClick={() => setOpen(o => !o)}
        title={open ? 'Close chat' : "Chat with Anam's assistant"}
        whileHover={{ scale: 1.08 }}
        whileTap={{ scale: 0.94 }}
        style={{
          position: 'fixed',
          bottom: '24px', right: '24px',
          width: '58px', height: '58px',
          borderRadius: '50%',
          background: open ? 'var(--bg-card)' : 'transparent',
          border: `2px solid ${open ? 'var(--border)' : 'var(--accent)'}`,
          cursor: 'pointer',
          zIndex: 2001,
          overflow: 'hidden',
          padding: 0,
          boxShadow: open ? '0 4px 16px var(--shadow)' : '0 8px 28px var(--accent-glow)',
          transition: 'box-shadow 0.3s ease, border-color 0.3s ease',
        }}
      >
        <AnimatePresence mode="wait">
          {open ? (
            <motion.div
              key="close"
              initial={{ opacity: 0, rotate: -90 }}
              animate={{ opacity: 1, rotate: 0 }}
              exit={{ opacity: 0, rotate: 90 }}
              transition={{ duration: 0.2 }}
              style={{
                width: '100%', height: '100%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: 'var(--text-secondary)',
              }}
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                <path d="M18 6 6 18M6 6l12 12"/>
              </svg>
            </motion.div>
          ) : (
            <motion.img
              key="photo"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.8 }}
              transition={{ duration: 0.2 }}
              src="/anam-dp.jpeg"
              alt="Chat"
              style={{ width: '100%', height: '100%', objectFit: 'cover' }}
            />
          )}
        </AnimatePresence>
      </motion.button>
    </>
  )
}
