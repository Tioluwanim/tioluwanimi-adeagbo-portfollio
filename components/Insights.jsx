'use client'

import { useEffect, useRef } from 'react'

const articles = [
  {
    title: 'Multi-Agent RAG Systems in Practice',
    excerpt:
      'Notes from building LangGraph agents that retrieve, reason, and hand off — without letting the LLM touch the arithmetic.',
    readTime: '8 min read',
    tag: 'AI Systems',
  },
  {
    title: 'Numerical Methods for Real Backends',
    excerpt:
      'Least squares, non-linear equations, and where classical numerical computation still earns its place in production code.',
    readTime: '6 min read',
    tag: 'Numerical Computing',
  },
  {
    title: 'Formal Grammars & the Àròkún Framework',
    excerpt:
      'Exploring Yorùbá-native language structures through the lens of formal grammar theory and AI systems.',
    readTime: '10 min read',
    tag: 'Language & AI',
  },
  {
    title: 'The Algorithmic Breakdown of Àyò Ọlọ́pọ́n',
    excerpt:
      'Reverse-engineering the traditional mancala-style game as a state-space search problem.',
    readTime: '7 min read',
    tag: 'Algorithms',
  },
]

export default function Insights() {
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
    <section id="insights" className="relative py-28 z-10">
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex items-center gap-3 mb-4">
          <span className="section-label">06 / The Insights Hub</span>
          <div className="h-px flex-1 max-w-[60px] bg-gold/30" />
        </div>

        <h2 className="font-display text-4xl lg:text-5xl text-obsidian mb-4">Writing &amp; Research</h2>
        <p className="font-body text-mist text-base max-w-lg mb-16">
          Long-form notes on agentic systems, numerical methods, and language — coming soon.
        </p>

        <div ref={ref} className="reveal grid md:grid-cols-2 gap-6">
          {articles.map((article) => (
            <div
              key={article.title}
              data-cursor-hover
              className="group glass-panel rounded-2xl p-8 flex flex-col justify-between hover:shadow-gold-sm transition-shadow duration-300 cursor-default"
            >
              <div>
                <span className="font-mono text-[0.65rem] uppercase tracking-widest text-gold border border-gold/30 rounded-full px-3 py-1">
                  {article.tag}
                </span>
                <h3 className="font-display text-xl text-obsidian mt-5 mb-3 group-hover:text-gold-gradient transition-colors duration-300">
                  {article.title}
                </h3>
                <p className="font-body text-sm text-mist leading-relaxed">{article.excerpt}</p>
              </div>
              <div className="flex items-center justify-between mt-6">
                <span className="font-mono text-xs text-mist">{article.readTime}</span>
                <span className="font-mono text-[0.65rem] uppercase tracking-widest text-mist/60">
                  Coming Soon
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
