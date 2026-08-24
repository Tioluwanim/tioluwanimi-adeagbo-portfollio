'use client'

import { useEffect, useRef } from 'react'

const skillGroups = [
  {
    category: 'Languages',
    icon: '{ }',
    skills: [
      { name: 'Python', level: 92, note: 'Core' },
      { name: 'TypeScript / JavaScript', level: 80, note: '' },
      { name: 'SQL', level: 75, note: '' },
    ],
  },
  {
    category: 'AI & Agentic Systems',
    icon: '◈',
    skills: [
      { name: 'LangGraph', level: 88, note: '' },
      { name: 'RAG / Vector Search', level: 85, note: 'FAISS · ChromaDB' },
      { name: 'LLM Routing', level: 80, note: 'Groq · OpenRouter' },
    ],
  },
  {
    category: 'Backend & Data',
    icon: '⚙',
    skills: [
      { name: 'FastAPI', level: 90, note: '' },
      { name: 'PostgreSQL / SQLAlchemy', level: 85, note: '' },
      { name: 'Webhook & Ledger Systems', level: 82, note: 'HMAC · Double-entry' },
    ],
  },
  {
    category: 'Frontend & Infra',
    icon: '☁',
    skills: [
      { name: 'Next.js (App Router)', level: 85, note: '' },
      { name: 'React Native / Expo', level: 78, note: '' },
      { name: 'Cloud Run · Vercel · Render', level: 80, note: '' },
    ],
  },
]

const toolTags = [
  'FastAPI', 'Next.js', 'React Native', 'LangGraph', 'PostgreSQL', 'FAISS',
  'ChromaDB', 'Paystack', 'Nomba', 'Firebase Auth', 'Google Cloud Run',
  'Groq', 'OpenRouter', 'Vercel', 'Render', 'Docker',
]

function SkillBar({ name, level, note, index }) {
  const barRef = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => {
            if (barRef.current) barRef.current.style.width = `${level}%`
          }, index * 90)
          observer.unobserve(entry.target)
        }
      },
      { threshold: 0.3 }
    )
    if (barRef.current) observer.observe(barRef.current)
    return () => observer.disconnect()
  }, [level, index])

  return (
    <div className="mb-4">
      <div className="flex justify-between items-center mb-1.5">
        <div className="flex items-center gap-2">
          <span className="font-body text-sm font-medium text-obsidian">{name}</span>
          {note && (
            <span className="font-mono text-[0.65rem] px-2 py-0.5 rounded-full border border-gold/30 text-gold">
              {note}
            </span>
          )}
        </div>
        <span className="font-mono text-xs text-mist">{level}%</span>
      </div>
      <div className="h-1.5 w-full rounded-full bg-void-line">
        <div
          ref={barRef}
          className="h-full rounded-full transition-all duration-[1200ms] ease-out bg-gold-gradient"
          style={{ width: '0%' }}
        />
      </div>
    </div>
  )
}

export default function Skills() {
  const ref = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible')
          observer.unobserve(entry.target)
        }
      },
      { threshold: 0.1 }
    )
    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [])

  return (
    <section id="skills" className="relative py-28 z-10">
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex items-center gap-3 mb-4">
          <span className="section-label">02 / Skills</span>
          <div className="h-px flex-1 max-w-[60px] bg-gold/30" />
        </div>

        <h2 className="font-display text-4xl lg:text-5xl text-obsidian mb-4">
          Tools &amp; Technologies
        </h2>
        <p className="font-body text-mist text-base max-w-lg mb-16">
          The toolkit behind every agent, ledger, and interface I ship.
        </p>

        <div ref={ref} className="reveal grid md:grid-cols-2 gap-6">
          {skillGroups.map((group) => (
            <div key={group.category} className="glass-panel rounded-2xl p-8">
              <div className="flex items-center gap-3 mb-6">
                <span className="font-mono text-lg text-gold">{group.icon}</span>
                <h3 className="font-body text-base font-semibold text-obsidian">{group.category}</h3>
              </div>
              {group.skills.map((skill, i) => (
                <SkillBar key={skill.name} {...skill} index={i} />
              ))}
            </div>
          ))}
        </div>

        <div className="mt-12">
          <p className="font-mono text-[0.65rem] text-mist uppercase tracking-widest mb-4">
            All Technologies
          </p>
          <div className="flex flex-wrap gap-3">
            {toolTags.map((tag) => (
              <span
                key={tag}
                data-cursor-hover
                className="font-body text-sm font-medium px-4 py-2 rounded-full border border-void-line text-mist hover:border-gold/50 hover:text-gold transition-colors duration-300 cursor-default"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
