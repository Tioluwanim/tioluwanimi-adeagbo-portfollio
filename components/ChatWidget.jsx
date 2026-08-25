'use client'

import { useState, useRef, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const API_URL = process.env.NEXT_PUBLIC_AI_BACKEND_URL || 'https://tioluwanimi-portfolio-ai.onrender.com'

export default function ChatWidget() {
  const [open, setOpen] = useState(false)
  const [messages, setMessages] = useState([
    {
      role: 'assistant',
      content:
        "Hi, I'm Tioluwanimi's AI assistant. Ask me about his projects, stack, or how to reach him.",
    },
  ])
  const [input, setInput] = useState('')
  const [loading, setLoading] = useState(false)
  const scrollRef = useRef(null)

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight
    }
  }, [messages, open])

  const sendMessage = async () => {
    const text = input.trim()
    if (!text || loading) return

    const nextMessages = [...messages, { role: 'user', content: text }]
    setMessages(nextMessages)
    setInput('')
    setLoading(true)

    try {
      const res = await fetch(`${API_URL}/chat`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          message: text,
          history: nextMessages.slice(0, -1),
        }),
      })

      if (!res.ok) throw new Error('Backend unavailable')
      const data = await res.json()

      setMessages((prev) => [...prev, { role: 'assistant', content: data.reply }])
    } catch (err) {
      setMessages((prev) => [
        ...prev,
        {
          role: 'assistant',
          content:
            "I couldn't reach the backend just now — but you can email Tioluwanimi directly at tolutemitiwa@gmail.com.",
        },
      ])
    } finally {
      setLoading(false)
    }
  }

  const onKeyDown = (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault()
      sendMessage()
    }
  }

  return (
    <div className="fixed bottom-6 right-6 z-[9990] flex flex-col items-end">
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.96 }}
            transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="mb-4 w-[92vw] max-w-sm h-[440px] glass-panel rounded-2xl shadow-gold flex flex-col overflow-hidden"
          >
            <div className="flex items-center justify-between px-5 py-4 border-b border-void-line">
              <div className="flex items-center gap-2.5">
                <span className="w-2 h-2 rounded-full bg-gold animate-pulse-slow" />
                <span className="font-mono text-xs uppercase tracking-widest text-gold">
                  AI Assistant
                </span>
              </div>
              <button
                onClick={() => setOpen(false)}
                className="text-mist hover:text-gold transition-colors duration-200"
                aria-label="Close chat"
              >
                ✕
              </button>
            </div>

            <div ref={scrollRef} className="flex-1 overflow-y-auto px-5 py-4 space-y-4">
              {messages.map((m, i) => (
                <div
                  key={i}
                  className={`font-body text-sm leading-relaxed max-w-[85%] px-4 py-2.5 rounded-2xl ${
                    m.role === 'user'
                      ? 'ml-auto bg-gold-gradient text-void'
                      : 'bg-void-line/50 text-obsidian'
                  }`}
                >
                  {m.content}
                </div>
              ))}
              {loading && (
                <div className="bg-void-line/50 text-mist text-sm px-4 py-2.5 rounded-2xl w-fit font-mono">
                  thinking…
                </div>
              )}
            </div>

            <div className="p-4 border-t border-void-line flex items-center gap-2">
              <input
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={onKeyDown}
                placeholder="Ask about a project…"
                className="flex-1 bg-void-soft border border-void-line rounded-full px-4 py-2.5 text-sm text-obsidian font-body outline-none focus:border-gold/50 transition-colors duration-200"
              />
              <button
                onClick={sendMessage}
                disabled={loading}
                className="w-10 h-10 shrink-0 rounded-full bg-gold-gradient flex items-center justify-center text-void disabled:opacity-50"
                aria-label="Send"
              >
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                  <path d="M2 8h11M8 3l5 5-5 5" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <motion.button
        onClick={() => setOpen(!open)}
        data-cursor-hover
        whileHover={{ scale: 1.06 }}
        whileTap={{ scale: 0.94 }}
        className="w-14 h-14 rounded-full bg-gold-gradient shadow-gold flex items-center justify-center text-void"
        aria-label="Toggle AI assistant"
      >
        {open ? (
          <span className="text-xl">✕</span>
        ) : (
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
            <path
              d="M12 2a7 7 0 00-7 7v3.5L3 17h4.2a5 5 0 009.6 0H21l-2-4.5V9a7 7 0 00-7-7z"
              stroke="currentColor"
              strokeWidth="1.6"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        )}
      </motion.button>
    </div>
  )
}
