'use client'

import { useEffect, useRef } from 'react'
import Image from 'next/image'

export default function About() {
  const ref = useRef(null)

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

  return (
    <section id="about" className="relative py-28 z-10">
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex items-center gap-3 mb-16">
          <span className="section-label">01 / About</span>
          <div className="h-px flex-1 max-w-[60px] bg-gold/30" />
        </div>

        <div ref={ref} className="reveal grid md:grid-cols-2 gap-16 items-center">
          <div className="relative">
            <div className="absolute -top-4 -left-4 w-full h-full rounded-2xl border border-gold/25" />
            <div className="relative w-full aspect-[4/5] rounded-2xl overflow-hidden glass-panel">
              <Image
                src="/profile.jpg"
                alt="Tioluwanimi Ayomide Adeagbo"
                fill
                className="object-cover grayscale-[15%] contrast-110"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-void/70 via-transparent to-transparent" />
            </div>

            <div className="absolute -bottom-5 -right-5 glass-panel rounded-xl px-5 py-3 shadow-gold-sm">
              <div className="flex items-center gap-2.5">
                <div className="w-2.5 h-2.5 rounded-full bg-gold animate-pulse-slow" />
                <span className="font-body text-sm font-medium text-obsidian">Open to work</span>
              </div>
            </div>
          </div>

          <div>
            <h2 className="font-display text-4xl lg:text-5xl text-obsidian mb-6 leading-tight">
              Building systems that <span className="text-gold-gradient">think</span> and{' '}
              <span className="text-gold-gradient">scale.</span>
            </h2>

            <div className="space-y-4 text-mist font-body text-base leading-relaxed mb-8">
              <p>
                I&rsquo;m <strong className="text-obsidian">Tioluwanimi Ayomide Adeagbo</strong>, a
                Computer Science &amp; Engineering student at Obafemi Awolowo University and a
                full-stack developer specializing in AI backend systems — multi-agent
                orchestration, RAG pipelines, and financial intelligence infrastructure.
              </p>
              <p>
                I lead and ship technical projects end-to-end: from{' '}
                <strong className="text-obsidian">FastAPI + LangGraph</strong> agentic backends to{' '}
                <strong className="text-obsidian">Next.js</strong> and{' '}
                <strong className="text-obsidian">React Native</strong> frontends, deployed on
                Vercel, Render, and Google Cloud Run.
              </p>
              <p>
                My long-term goal is to build a West African AI intelligence infrastructure
                company — starting with proprietary Nigerian datasets across fintech, market
                behavior, and language.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-4">
              {[
                { label: 'Location', value: 'Ile-Ife, Nigeria' },
                { label: 'Focus', value: 'AI Backend & Agentic Systems' },
                { label: 'Core Stack', value: 'FastAPI · Next.js' },
                { label: 'Status', value: 'Open to Work' },
              ].map((fact) => (
                <div key={fact.label} className="p-4 rounded-xl glass-panel">
                  <div className="font-mono text-[0.65rem] text-mist uppercase tracking-widest mb-1">
                    {fact.label}
                  </div>
                  <div className="font-body text-sm font-semibold text-obsidian">{fact.value}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
