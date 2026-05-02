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
    <section id="about" className="py-28 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        {/* Section Label */}
        <div className="flex items-center gap-3 mb-16">
          <span
            className="font-mono text-xs font-medium tracking-widest uppercase"
            style={{ color: '#3B6FE8' }}
          >
            01 / About
          </span>
          <div className="h-px flex-1 max-w-[60px]" style={{ background: '#3B6FE8', opacity: 0.3 }} />
        </div>

        <div ref={ref} className="reveal grid md:grid-cols-2 gap-16 items-center">
          {/* Photo */}
          <div className="relative">
            {/* Decorative frame */}
            <div
              className="absolute -top-4 -left-4 w-full h-full rounded-2xl border-2"
              style={{ borderColor: '#3B6FE8', opacity: 0.2 }}
            />
            {/* Profile image placeholder */}
            <div className="relative w-full aspect-[4/5] rounded-2xl overflow-hidden bg-gradient-to-br from-slate-100 to-slate-200 shadow-lg">
              {/* 
                DROP YOUR PHOTO: Place your image file as /public/profile.jpg
                Then uncomment the Image component below and remove the placeholder div
              */}
              {
              <Image
                src="/profile.jpg"
                alt="Tioluwanimi Ayomide Adeagbo"
                fill
                className="object-cover"
                priority
              />
              }
            </div>

            {/* Floating badge */}
            <div
              className="absolute -bottom-5 -right-5 bg-white rounded-xl px-5 py-3 shadow-lg border border-slate-100"
            >
              <div className="flex items-center gap-2.5">
                <div
                  className="w-2.5 h-2.5 rounded-full animate-pulse"
                  style={{ background: '#22c55e' }}
                />
                <span className="font-body text-sm font-medium text-ink">Open to work</span>
              </div>
            </div>
          </div>

          {/* Text Content */}
          <div>
            <h2 className="font-display text-4xl lg:text-5xl text-ink mb-6 leading-tight">
              Building systems that{' '}
              <span style={{ color: '#3B6FE8' }}>think</span> and{' '}
              <span style={{ color: '#3B6FE8' }}>scale.</span>
            </h2>

            <div className="space-y-4 text-subtle font-body text-base leading-relaxed mb-8">
              <p>
                I'm <strong className="text-ink">Tioluwanimi Ayomide Adeagbo</strong>, a
                backend-focused developer with strong experience in Python and JavaScript. I build
                real-world applications, research tools, and automation systems.
              </p>
              <p>
                Currently, I'm developing my foundation in AI/ML with the goal of contributing to{' '}
                <strong className="text-ink">large language models</strong> and intelligent systems.
                I work with deployment tools like Render, Vercel, and Supabase, and I'm expanding my
                cloud and infrastructure knowledge through Google Cloud.
              </p>
              <p>
                My approach: write clean, maintainable code, solve real problems, and keep building
                toward the future of intelligent backend systems.
              </p>
            </div>

            {/* Quick facts */}
            <div className="grid grid-cols-2 gap-4">
              {[
                { label: 'Location', value: 'Nigeria' },
                { label: 'Focus', value: 'Backend & AI/ML' },
                { label: 'Main Language', value: 'Python' },
                { label: 'Status', value: 'Open to Work' },
              ].map((fact) => (
                <div
                  key={fact.label}
                  className="p-4 rounded-xl"
                  style={{ background: '#F7F8FC' }}
                >
                  <div className="font-mono text-xs text-subtle uppercase tracking-widest mb-1">
                    {fact.label}
                  </div>
                  <div className="font-body text-sm font-semibold text-ink">{fact.value}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
