'use client'

import { useEffect, useRef } from 'react'

const learningItems = [
  {
    title: 'Agentic AI Architecture',
    description:
      'Deepening multi-agent orchestration with LangGraph — deterministic engines paired with LLM narration layers, not LLMs doing the arithmetic.',
    icon: '🧠',
    progress: 'Active',
    tags: ['LangGraph', 'StateGraph', 'Groq', 'OpenRouter'],
  },
  {
    title: 'Financial Infrastructure Rails',
    description:
      'Going deeper into payment rails and unified APIs — Ecobank, Nomba, Paystack, and Squad — with idempotent webhook handling and sub-ledger reconciliation.',
    icon: '⚡',
    progress: 'Active',
    tags: ['Webhooks', 'HMAC', 'Ledger Design', 'Payouts'],
  },
  {
    title: 'West African Data Infrastructure',
    description:
      'Building toward proprietary Nigerian datasets — market prices, student financial behavior, and Pidgin/Yoruba language corpora.',
    icon: '🌍',
    progress: 'Foundation',
    tags: ['Data Pipelines', 'NLP', 'Yoruba Corpus'],
  },
  {
    title: 'Cloud & Systems Design',
    description:
      'Scaling backend architecture beyond Render and Vercel — microservices, caching, and infrastructure that holds up under real traffic.',
    icon: '☁️',
    progress: 'Learning',
    tags: ['GCP', 'System Design', 'PostgreSQL'],
  },
]

const progressStyles = {
  Active: 'border-emerald-400/40 text-emerald-300',
  Foundation: 'border-gold/40 text-gold',
  Learning: 'border-orange-400/40 text-orange-300',
}

export default function Learning() {
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
    <section id="learning" className="relative py-28 z-10">
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex items-center gap-3 mb-4">
          <span className="section-label">05 / Currently Learning</span>
          <div className="h-px flex-1 max-w-[60px] bg-gold/30" />
        </div>

        <h2 className="font-display text-4xl lg:text-5xl text-obsidian mb-4">
          What I&rsquo;m building toward
        </h2>
        <p className="font-body text-mist text-base max-w-xl mb-16">
          Direction matters as much as current skill. Here&rsquo;s where I&rsquo;m heading.
        </p>

        <div ref={ref} className="reveal grid md:grid-cols-2 gap-6">
          {learningItems.map((item) => (
            <div key={item.title} className="glass-panel rounded-2xl p-8 hover:shadow-gold-sm transition-shadow duration-300">
              <div className="flex items-center justify-between mb-5">
                <span className="text-3xl">{item.icon}</span>
                <span className={`font-mono text-[0.65rem] px-3 py-1 rounded-full border ${progressStyles[item.progress]}`}>
                  {item.progress}
                </span>
              </div>
              <h3 className="font-display text-xl text-obsidian mb-3">{item.title}</h3>
              <p className="font-body text-sm text-mist leading-relaxed mb-5">{item.description}</p>
              <div className="flex flex-wrap gap-2">
                {item.tags.map((tag) => (
                  <span key={tag} className="font-mono text-[0.65rem] px-2.5 py-1 rounded-md bg-void-line/60 text-mist">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 glass-panel rounded-2xl p-8 border-l-2 border-l-gold">
          <p className="font-display text-xl text-obsidian leading-relaxed mb-3">
            &ldquo;I&rsquo;m not just learning to use AI tools — I&rsquo;m learning to build the
            infrastructure underneath them.&rdquo;
          </p>
          <p className="font-body text-sm text-mist">
            The long-term goal: West African AI intelligence infrastructure.
          </p>
        </div>
      </div>
    </section>
  )
}
