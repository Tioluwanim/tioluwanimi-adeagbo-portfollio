'use client'

import { useEffect, useRef } from 'react'

const skillGroups = [
  {
    category: 'Languages',
    icon: '{ }',
    skills: [
      { name: 'Python', level: 90, note: 'Main Language' },
      { name: 'JavaScript', level: 65, note: 'Learning' },
      { name: 'TypeScript', level: 40, note: 'Vibe Coding' },
    ],
  },
  {
    category: 'Frameworks & Libraries',
    icon: '⚙',
    skills: [
      { name: 'FastAPI', level: 85, note: '' },
      { name: 'SQLAlchemy', level: 75, note: '' },
      { name: 'Jupyter Notebook', level: 80, note: '' },
    ],
  },
  {
    category: 'Cloud & Deployment',
    icon: '☁',
    skills: [
      { name: 'Render', level: 80, note: '' },
      { name: 'Vercel', level: 75, note: '' },
      { name: 'Google Cloud Platform', level: 60, note: '' },
      { name: 'Supabase', level: 70, note: '' },
    ],
  },
  {
    category: 'Specialties',
    icon: '◈',
    skills: [
      { name: 'API Development', level: 88, note: '' },
      { name: 'Backend System Design', level: 82, note: '' },
      { name: 'Automation Tools', level: 85, note: '' },
      { name: 'Research & Analysis', level: 78, note: '' },
    ],
  },
]

const toolTags = [
  'Python', 'FastAPI', 'SQLAlchemy', 'PostgreSQL', 'Supabase',
  'Render', 'Vercel', 'GCP', 'Jupyter', 'REST APIs',
  'ORM', 'Backend Design', 'Automation', 'AI/ML Research',
]

function SkillBar({ name, level, note, index }) {
  const barRef = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => {
            if (barRef.current) {
              barRef.current.style.width = `${level}%`
            }
          }, index * 80)
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
          <span className="font-body text-sm font-medium text-ink">{name}</span>
          {note && (
            <span
              className="font-mono text-xs px-2 py-0.5 rounded-full"
              style={{ background: '#EEF2FD', color: '#3B6FE8' }}
            >
              {note}
            </span>
          )}
        </div>
        <span className="font-mono text-xs text-subtle">{level}%</span>
      </div>
      <div className="h-1.5 w-full rounded-full" style={{ background: '#E2E8F0' }}>
        <div
          ref={barRef}
          className="h-full rounded-full transition-all duration-1000 ease-out"
          style={{ width: '0%', background: 'linear-gradient(to right, #3B6FE8, #6B93F0)' }}
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
    <section id="skills" className="py-28" style={{ background: '#F7F8FC' }}>
      <div className="max-w-6xl mx-auto px-6">
        {/* Section Label */}
        <div className="flex items-center gap-3 mb-4">
          <span
            className="font-mono text-xs font-medium tracking-widest uppercase"
            style={{ color: '#3B6FE8' }}
          >
            02 / Skills
          </span>
          <div className="h-px flex-1 max-w-[60px]" style={{ background: '#3B6FE8', opacity: 0.3 }} />
        </div>

        <h2 className="font-display text-4xl lg:text-5xl text-ink mb-4">
          Tools & Technologies
        </h2>
        <p className="font-body text-subtle text-base max-w-lg mb-16">
          My current toolkit, built through real projects and continuous learning.
        </p>

        <div ref={ref} className="reveal grid md:grid-cols-2 gap-8">
          {skillGroups.map((group) => (
            <div
              key={group.category}
              className="bg-white rounded-2xl p-8 border shadow-sm"
              style={{ borderColor: '#E2E8F0' }}
            >
              <div className="flex items-center gap-3 mb-6">
                <span
                  className="font-mono text-lg"
                  style={{ color: '#3B6FE8' }}
                >
                  {group.icon}
                </span>
                <h3 className="font-body text-base font-semibold text-ink">
                  {group.category}
                </h3>
              </div>
              {group.skills.map((skill, i) => (
                <SkillBar key={skill.name} {...skill} index={i} />
              ))}
            </div>
          ))}
        </div>

        {/* Tag cloud */}
        <div className="mt-12">
          <p className="font-mono text-xs text-subtle uppercase tracking-widest mb-4">
            All Technologies
          </p>
          <div className="flex flex-wrap gap-3">
            {toolTags.map((tag) => (
              <span
                key={tag}
                className="font-body text-sm font-medium px-4 py-2 rounded-full border cursor-default hover:border-[#3B6FE8] hover:text-[#3B6FE8] transition-colors duration-200"
                style={{ borderColor: '#E2E8F0', color: '#64748B' }}
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
