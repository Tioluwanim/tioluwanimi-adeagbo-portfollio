'use client'

import { useEffect, useRef, useState } from 'react'

const contactLinks = [
  {
    label: 'Email',
    value: 'tolutemitiwa@gmail.com',
    href: 'mailto:tolutemitiwa@gmail.com',
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
        <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M22 6l-10 7L2 6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    label: 'GitHub',
    value: 'github.com/Tioluwanim',
    href: 'https://github.com/Tioluwanim',
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z" />
      </svg>
    ),
  },
  {
    label: 'LinkedIn',
    value: 'Tioluwanimi Adeagbo',
    href: 'https://www.linkedin.com/in/tioluwanimi-adeagbo-653920392/',
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
      </svg>
    ),
  },
]

export default function Contact() {
  const ref = useRef(null)
  const [copied, setCopied] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible')
          observer.unobserve(entry.target)
        }
      },
      { threshold: 0.15 }
    )
    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [])

  const handleCopyEmail = () => {
    navigator.clipboard.writeText('tolutemitiwa@gmail.com')
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  return (
    <section id="contact" className="py-28 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        {/* Section Label */}
        <div className="flex items-center gap-3 mb-4">
          <span
            className="font-mono text-xs font-medium tracking-widest uppercase"
            style={{ color: '#3B6FE8' }}
          >
            05 / Contact
          </span>
          <div className="h-px flex-1 max-w-[60px]" style={{ background: '#3B6FE8', opacity: 0.3 }} />
        </div>

        <div ref={ref} className="reveal max-w-3xl">
          <h2 className="font-display text-4xl lg:text-5xl text-ink mb-6 leading-tight">
            Let's build something{' '}
            <span style={{ color: '#3B6FE8' }}>great together.</span>
          </h2>
          <p className="font-body text-subtle text-base leading-relaxed mb-12 max-w-xl">
            I'm open to backend engineering roles, AI/ML collaborations, freelance projects, and
            interesting conversations. Don't hesitate to reach out.
          </p>

          {/* Contact cards */}
          <div className="grid sm:grid-cols-3 gap-4 mb-12">
            {contactLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                target={link.label !== 'Email' ? '_blank' : undefined}
                rel="noopener noreferrer"
                className="group flex flex-col gap-3 p-6 rounded-2xl border hover:border-[#3B6FE8] hover:shadow-md transition-all duration-300"
                style={{ borderColor: '#E2E8F0' }}
              >
                <span
                  className="text-subtle group-hover:text-[#3B6FE8] transition-colors duration-200"
                >
                  {link.icon}
                </span>
                <div>
                  <div className="font-mono text-xs text-subtle uppercase tracking-widest mb-1">
                    {link.label}
                  </div>
                  <div className="font-body text-sm font-medium text-ink group-hover:text-[#3B6FE8] transition-colors duration-200 break-all">
                    {link.value}
                  </div>
                </div>
              </a>
            ))}
          </div>

          {/* Quick copy email CTA */}
          <div
            className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 p-6 rounded-2xl"
            style={{ background: '#EEF2FD' }}
          >
            <div>
              <p className="font-body text-sm font-semibold text-ink mb-0.5">
                Prefer a quick copy?
              </p>
              <p className="font-mono text-sm" style={{ color: '#3B6FE8' }}>
                tolutemitiwa@gmail.com
              </p>
            </div>
            <button
              onClick={handleCopyEmail}
              className="inline-flex items-center gap-2 text-white text-sm font-medium px-5 py-2.5 rounded-full transition-all duration-200 shrink-0"
              style={{ background: copied ? '#22c55e' : '#3B6FE8' }}
            >
              {copied ? (
                <>
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none">
                    <path d="M20 6L9 17l-5-5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                  Copied!
                </>
              ) : (
                <>
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none">
                    <rect x="9" y="9" width="13" height="13" rx="2" stroke="currentColor" strokeWidth="2" />
                    <path d="M5 15H4a2 2 0 01-2-2V4a2 2 0 012-2h9a2 2 0 012 2v1" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                  </svg>
                  Copy Email
                </>
              )}
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
