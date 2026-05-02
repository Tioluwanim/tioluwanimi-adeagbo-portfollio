'use client'

import { useEffect, useRef } from 'react'

export default function Hero() {
  const heroRef = useRef(null)

  useEffect(() => {
    const el = heroRef.current
    if (el) {
      setTimeout(() => el.classList.add('opacity-100'), 100)
    }
  }, [])

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center overflow-hidden bg-white"
    >
      {/* Background geometric decoration */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Large soft circle top right */}
        <div
          className="absolute -top-32 -right-32 w-[600px] h-[600px] rounded-full opacity-[0.06]"
          style={{ background: 'radial-gradient(circle, #3B6FE8 0%, transparent 70%)' }}
        />
        {/* Small accent dot grid */}
        <div className="absolute bottom-24 left-8 opacity-20">
          {[...Array(5)].map((_, row) => (
            <div key={row} className="flex gap-4 mb-4">
              {[...Array(5)].map((_, col) => (
                <div
                  key={col}
                  className="w-1.5 h-1.5 rounded-full"
                  style={{ background: '#3B6FE8' }}
                />
              ))}
            </div>
          ))}
        </div>
        {/* Thin horizontal line accent */}
        <div
          className="absolute top-1/2 right-0 w-1/3 h-px opacity-10"
          style={{ background: 'linear-gradient(to left, transparent, #3B6FE8)' }}
        />
      </div>

      <div
        ref={heroRef}
        className="relative z-10 max-w-6xl mx-auto px-6 py-32 opacity-0 transition-opacity duration-700"
      >
        <div className="max-w-3xl">
          {/* Eyebrow tag */}
          <div
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-sm font-medium mb-8"
            style={{
              background: '#EEF2FD',
              color: '#3B6FE8',
              fontFamily: 'var(--font-mono)',
            }}
          >
            <span
              className="w-2 h-2 rounded-full animate-pulse"
              style={{ background: '#3B6FE8' }}
            />
            Available for opportunities
          </div>

          {/* Name */}
          <h1
            className="font-display text-5xl sm:text-6xl lg:text-7xl leading-[1.1] text-ink mb-6"
          >
            Tioluwanimi
            <br />
            <span style={{ color: '#3B6FE8' }}>Adeagbo.</span>
          </h1>

          {/* Identity statement */}
          <p className="font-body text-lg sm:text-xl text-subtle max-w-xl leading-relaxed mb-10">
            Backend-focused Python & JavaScript developer building{' '}
            <strong className="text-ink font-semibold">real-world applications</strong>,{' '}
            <strong className="text-ink font-semibold">automation tools</strong>, and early-stage{' '}
            <strong className="text-ink font-semibold">AI/ML systems</strong> — with growing
            interest in intelligent systems and LLM development.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-wrap items-center gap-4 mb-16">
            <a
              href="#projects"
              className="inline-flex items-center gap-2 text-white text-sm font-semibold px-7 py-3.5 rounded-full transition-all duration-200 hover:shadow-lg hover:-translate-y-0.5"
              style={{ background: '#3B6FE8' }}
            >
              View My Work
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </a>
            <a
              href="https://github.com/Tioluwanim"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-ink text-sm font-semibold px-7 py-3.5 rounded-full border border-border hover:border-[#3B6FE8] hover:text-[#3B6FE8] transition-all duration-200"
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z" />
              </svg>
              GitHub
            </a>
            <a
              href="https://www.linkedin.com/in/tioluwanimi-adeagbo-653920392/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-ink text-sm font-semibold px-7 py-3.5 rounded-full border border-border hover:border-[#3B6FE8] hover:text-[#3B6FE8] transition-all duration-200"
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
              </svg>
              LinkedIn
            </a>
          </div>

          {/* Stats row */}
          <div className="flex flex-wrap gap-8">
            {[
              { value: '10+', label: 'Projects Built' },
              { value: 'Python', label: 'Main Language' },
              { value: 'AI/ML', label: 'Current Focus' },
            ].map((stat) => (
              <div key={stat.label}>
                <div
                  className="font-display text-2xl"
                  style={{ color: '#3B6FE8' }}
                >
                  {stat.value}
                </div>
                <div className="font-body text-sm text-subtle mt-0.5">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-40">
        <span className="font-mono text-xs text-subtle tracking-widest uppercase">Scroll</span>
        <div className="w-px h-10 bg-gradient-to-b from-subtle to-transparent" />
      </div>
    </section>
  )
}
