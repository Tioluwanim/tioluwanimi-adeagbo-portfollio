'use client'

import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

const achievements = [
  {
    year: '2026',
    title: 'InnovateX Africa — Ecobank',
    subtitle: 'Track B: Creative Economy',
    description:
      'Building Creator Genome, an AI-powered creator monetization platform using Ecobank\u2019s Unified API as the payment and payout rail.',
  },
  {
    year: '2026',
    title: 'AI Academy Nigeria Pitchathon',
    subtitle: 'Meta × Kuvora',
    description:
      'Pitching ZELTA\u2019s "AI Financial Twin" concept for Nigerian university students, routing the LLM layer through Llama via Groq.',
  },
  {
    year: '2026',
    title: 'DSN × BCT LLM Agent Challenge',
    subtitle: 'KudiWise AI',
    description:
      'Built and deployed an agentic LangGraph + FastAPI + ChromaDB assistant to Google Cloud Run, achieving Hit Rate@10 of 1.0.',
  },
  {
    year: '2026',
    title: 'Nomba Hackathon',
    subtitle: 'OjaBulk',
    description:
      'Shipped pooled-procurement infrastructure for Nigerian market traders with a double-entry ledger and USSD access.',
  },
  {
    year: '2025',
    title: 'OPay Innovation Challenge',
    subtitle: 'ZELTA v1',
    description:
      'First iteration of ZELTA — a behavioral finance platform using LangGraph, Gemini 1.5 Pro, and Kelly Criterion math.',
  },
  {
    year: '2025',
    title: 'GDG OAU — Build with AI',
    subtitle: 'ZELTA',
    description:
      'Extended ZELTA\u2019s behavioral finance engine, deployed on Google Cloud Run.',
  },
]

export default function Timeline() {
  const trackRef = useRef(null)
  const sectionRef = useRef(null)

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger)

    const ctx = gsap.context(() => {
      const track = trackRef.current
      if (!track) return

      const scrollLength = track.scrollWidth - window.innerWidth + 200

      gsap.to(track, {
        x: () => -scrollLength,
        ease: 'none',
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top top',
          end: () => `+=${scrollLength}`,
          scrub: 1,
          pin: true,
          invalidateOnRefresh: true,
        },
      })
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  return (
    <section id="trophy-room" ref={sectionRef} className="relative py-28 z-10 overflow-hidden">
      <div className="max-w-6xl mx-auto px-6 mb-16">
        <div className="flex items-center gap-3 mb-4">
          <span className="section-label">04 / The Trophy Room</span>
          <div className="h-px flex-1 max-w-[60px] bg-gold/30" />
        </div>
        <h2 className="font-display text-4xl lg:text-5xl text-obsidian mb-4">Achievements Timeline</h2>
        <p className="font-body text-mist text-base max-w-lg">
          Hackathons, challenges, and pitchathons — scroll to move through time.
        </p>
      </div>

      <div ref={trackRef} className="flex gap-6 px-6 w-max">
        {achievements.map((a, i) => (
          <div
            key={`${a.title}-${i}`}
            data-cursor-hover
            className="glass-panel rounded-2xl p-8 w-[320px] shrink-0 flex flex-col justify-between hover:shadow-gold-sm transition-shadow duration-300"
          >
            <div>
              <span className="font-mono text-xs text-gold tracking-widest">{a.year}</span>
              <h3 className="font-display text-xl text-obsidian mt-3 mb-1">{a.title}</h3>
              <p className="font-mono text-xs text-mist mb-4">{a.subtitle}</p>
              <p className="font-body text-sm text-mist leading-relaxed">{a.description}</p>
            </div>
            <div className="mt-6 w-8 h-8 rounded-full border border-gold/40 flex items-center justify-center">
              <span className="w-1.5 h-1.5 rounded-full bg-gold" />
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
