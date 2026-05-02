'use client'

import { useEffect, useRef, useState } from 'react'

const projects = [
  {
    id: 1,
    name: 'backend-spoudazo',
    tagline: 'AI Academic Operating System Backend',
    description:
      'Backend for the AI Academic Operating System — handling authentication, user profiles, course and GPA tracking, study behavior logging, and secure AI integrations. A full-scale backend architecture built for intelligence.',
    tech: ['JavaScript', 'FastAPI', 'Authentication', 'AI Integration'],
    type: 'Advanced Backend System',
    featured: true,
    githubLink: null, // Private repo
    liveLink: null,
    status: 'Private',
  },
  {
    id: 2,
    name: 'ZELTA',
    tagline: 'Behavioural Quantitative Intelligence',
    description:
      'A behavioural quantitative intelligence project — exploring the intersection of data, behavior patterns, and intelligent analysis. Built with Python as the core engine.',
    tech: ['Python', 'Data Analysis', 'AI/ML', 'Research'],
    type: 'AI / Data / Research',
    featured: true,
    githubLink: 'https://github.com/Tioluwanim/ZELTA',
    liveLink: null,
    status: 'Public',
  },
  {
    id: 3,
    name: 'PDF-RESEARCHER-ANALYSER',
    tagline: 'Intelligent PDF Research Tool',
    description:
      'A Python tool for analyzing PDF research documents. Automates the extraction and analysis of academic papers, making research workflows faster and smarter.',
    tech: ['Python', 'PDF Processing', 'NLP', 'Automation'],
    type: 'Research / Document Analysis',
    featured: true,
    githubLink: 'https://github.com/Tioluwanim/PDF-RESEARCHER-ANALYSER',
    liveLink: null,
    status: 'Public',
  },
  {
    id: 4,
    name: 'scholar_search_app',
    tagline: 'Google Scholar Research Automation',
    description:
      'A Python tool for searching multiple names on Google Scholar and automatically downloading research papers. Saves researchers hours of manual searching.',
    tech: ['Python', 'Web Scraping', 'Automation', 'Research'],
    type: 'Research Automation',
    featured: true,
    githubLink: 'https://github.com/Tioluwanim/scholar_search_app',
    liveLink: null,
    status: 'Public',
  },
  {
    id: 5,
    name: 'Fraud_Detection_Group4',
    tagline: 'ML-Powered Fraud Detection System',
    description:
      'A professional fraud detection project developed by AI/ML students of Tech Crush. Applies machine learning models to identify fraudulent patterns in financial data.',
    tech: ['Jupyter Notebook', 'Machine Learning', 'Python', 'Data Science'],
    type: 'Machine Learning',
    featured: true,
    githubLink: 'https://github.com/Tioluwanim/Fraud_Detection_Group4_project',
    liveLink: null,
    status: 'Public',
  },
  {
    id: 6,
    name: 'Oke-Osun-Diocesan-App',
    tagline: 'Real-World Church Diocese Application',
    description:
      'A full application developed for Oke-Osun Diocese, Church of Nigeria Anglican Communion. A real client, real deployment — handling organizational needs of a religious institution.',
    tech: ['Python', 'Backend', 'Application', 'Real-World'],
    type: 'Real-World Application',
    featured: true,
    githubLink: 'https://github.com/Tioluwanim/Oke-Osun-Diocesan-Application',
    liveLink: null,
    status: 'Public',
  },
]

const typeColors = {
  'Advanced Backend System': { bg: '#EEF2FD', text: '#3B6FE8' },
  'AI / Data / Research': { bg: '#F0FDF4', text: '#16a34a' },
  'Research / Document Analysis': { bg: '#FFF7ED', text: '#ea580c' },
  'Research Automation': { bg: '#FDF4FF', text: '#9333ea' },
  'Machine Learning': { bg: '#FFF1F2', text: '#e11d48' },
  'Real-World Application': { bg: '#F0F9FF', text: '#0284c7' },
}

function ProjectCard({ project, index }) {
  const ref = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => {
            if (ref.current) ref.current.classList.add('visible')
          }, index * 100)
          observer.unobserve(entry.target)
        }
      },
      { threshold: 0.1 }
    )
    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [index])

  const colors = typeColors[project.type] || { bg: '#EEF2FD', text: '#3B6FE8' }

  return (
    <div
      ref={ref}
      className="reveal group bg-white rounded-2xl border p-7 flex flex-col hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
      style={{ borderColor: '#E2E8F0' }}
    >
      {/* Top row */}
      <div className="flex items-start justify-between mb-4">
        <span
          className="font-mono text-xs font-medium px-3 py-1 rounded-full"
          style={{ background: colors.bg, color: colors.text }}
        >
          {project.type}
        </span>
        <div className="flex items-center gap-2">
          {project.status === 'Private' && (
            <span className="font-mono text-xs text-subtle flex items-center gap-1">
              <svg width="12" height="12" viewBox="0 0 24 24" fill="none">
                <rect x="3" y="11" width="18" height="11" rx="2" stroke="currentColor" strokeWidth="2" />
                <path d="M7 11V7a5 5 0 0110 0v4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
              </svg>
              Private
            </span>
          )}
          {project.githubLink && (
            <a
              href={project.githubLink}
              target="_blank"
              rel="noopener noreferrer"
              className="text-subtle hover:text-[#3B6FE8] transition-colors duration-200"
              aria-label="GitHub"
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z" />
              </svg>
            </a>
          )}
          {project.liveLink && (
            <a
              href={project.liveLink}
              target="_blank"
              rel="noopener noreferrer"
              className="text-subtle hover:text-[#3B6FE8] transition-colors duration-200"
              aria-label="Live site"
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                <path d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6M15 3h6v6M10 14L21 3" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </a>
          )}
        </div>
      </div>

      {/* Project name */}
      <h3 className="font-display text-xl text-ink mb-1 leading-snug">
        {project.name}
      </h3>
      <p className="font-mono text-xs mb-3" style={{ color: '#3B6FE8' }}>
        {project.tagline}
      </p>

      {/* Description */}
      <p className="font-body text-sm text-subtle leading-relaxed mb-6 flex-1">
        {project.description}
      </p>

      {/* Tech tags */}
      <div className="flex flex-wrap gap-2">
        {project.tech.map((t) => (
          <span
            key={t}
            className="font-mono text-xs px-2.5 py-1 rounded-md"
            style={{ background: '#F7F8FC', color: '#64748B' }}
          >
            {t}
          </span>
        ))}
      </div>
    </div>
  )
}

export default function Projects() {
  return (
    <section id="projects" className="py-28 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        {/* Section Label */}
        <div className="flex items-center gap-3 mb-4">
          <span
            className="font-mono text-xs font-medium tracking-widest uppercase"
            style={{ color: '#3B6FE8' }}
          >
            03 / Projects
          </span>
          <div className="h-px flex-1 max-w-[60px]" style={{ background: '#3B6FE8', opacity: 0.3 }} />
        </div>

        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-16">
          <div>
            <h2 className="font-display text-4xl lg:text-5xl text-ink mb-3">
              Selected Work
            </h2>
            <p className="font-body text-subtle text-base max-w-lg">
              Real projects, real problems solved — from AI tools to church management systems.
            </p>
          </div>
          <a
            href="https://github.com/Tioluwanim"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-sm font-medium shrink-0 hover:text-[#3B6FE8] transition-colors duration-200"
            style={{ color: '#64748B' }}
          >
            View all on GitHub
            <svg width="14" height="14" viewBox="0 0 16 16" fill="none">
              <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </a>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, i) => (
            <ProjectCard key={project.id} project={project} index={i} />
          ))}
        </div>
      </div>
    </section>
  )
}
