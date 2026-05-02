'use client'

import { useEffect, useRef } from 'react'

const learningItems = [
  {
    title: 'AI / ML Engineering',
    description:
      'Building my foundation in machine learning — from classical models to neural networks. Actively working on research tools and early-stage ML projects.',
    icon: '🧠',
    progress: 'Active',
    tags: ['Scikit-learn', 'Pandas', 'NumPy', 'Jupyter'],
  },
  {
    title: 'Large Language Models',
    description:
      'Exploring how LLMs are built, fine-tuned, and deployed. My long-term goal is to contribute to the development of intelligent language systems.',
    icon: '⚡',
    progress: 'Foundation',
    tags: ['Transformers', 'Prompt Engineering', 'API Integration'],
  },
  {
    title: 'Cloud Infrastructure (AWS / Azure)',
    description:
      'Expanding beyond Render and GCP into enterprise-grade cloud platforms. Learning about scalable infrastructure, managed services, and DevOps practices.',
    icon: '☁️',
    progress: 'Learning',
    tags: ['AWS', 'Azure', 'Cloud Architecture', 'DevOps'],
  },
  {
    title: 'Advanced Backend Architecture',
    description:
      'Going deeper into system design — microservices, message queues, caching strategies, and building backends that scale to millions of users.',
    icon: '⚙️',
    progress: 'Active',
    tags: ['System Design', 'Microservices', 'Redis', 'PostgreSQL'],
  },
]

const progressColors = {
  Active: { bg: '#F0FDF4', text: '#16a34a', dot: '#22c55e' },
  Foundation: { bg: '#EEF2FD', text: '#3B6FE8', dot: '#3B6FE8' },
  Learning: { bg: '#FFF7ED', text: '#ea580c', dot: '#f97316' },
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
    <section id="learning" className="py-28" style={{ background: '#F7F8FC' }}>
      <div className="max-w-6xl mx-auto px-6">
        {/* Section Label */}
        <div className="flex items-center gap-3 mb-4">
          <span
            className="font-mono text-xs font-medium tracking-widest uppercase"
            style={{ color: '#3B6FE8' }}
          >
            04 / Currently Learning
          </span>
          <div className="h-px flex-1 max-w-[60px]" style={{ background: '#3B6FE8', opacity: 0.3 }} />
        </div>

        <h2 className="font-display text-4xl lg:text-5xl text-ink mb-4">
          What I'm building toward
        </h2>
        <p className="font-body text-subtle text-base max-w-xl mb-16">
          I believe in showing direction, not just current skills. Here's where I'm heading.
        </p>

        <div ref={ref} className="reveal grid md:grid-cols-2 gap-6">
          {learningItems.map((item, i) => {
            const colors = progressColors[item.progress]
            return (
              <div
                key={item.title}
                className="bg-white rounded-2xl p-8 border hover:shadow-md transition-shadow duration-300"
                style={{ borderColor: '#E2E8F0' }}
              >
                {/* Icon + progress badge */}
                <div className="flex items-center justify-between mb-5">
                  <span className="text-3xl">{item.icon}</span>
                  <span
                    className="font-mono text-xs font-medium px-3 py-1 rounded-full flex items-center gap-1.5"
                    style={{ background: colors.bg, color: colors.text }}
                  >
                    <span
                      className="w-1.5 h-1.5 rounded-full"
                      style={{ background: colors.dot }}
                    />
                    {item.progress}
                  </span>
                </div>

                <h3 className="font-display text-xl text-ink mb-3">{item.title}</h3>
                <p className="font-body text-sm text-subtle leading-relaxed mb-5">
                  {item.description}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2">
                  {item.tags.map((tag) => (
                    <span
                      key={tag}
                      className="font-mono text-xs px-2.5 py-1 rounded-md"
                      style={{ background: '#F7F8FC', color: '#64748B' }}
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            )
          })}
        </div>

        {/* Quote / philosophy */}
        <div
          className="mt-12 rounded-2xl p-8 border-l-4 bg-white"
          style={{ borderLeftColor: '#3B6FE8' }}
        >
          <p className="font-display text-xl text-ink leading-relaxed mb-3">
            "I'm not just learning to use AI tools — I'm learning to build them."
          </p>
          <p className="font-body text-sm text-subtle">
            The goal is LLM development and intelligent backend infrastructure.
          </p>
        </div>
      </div>
    </section>
  )
}
