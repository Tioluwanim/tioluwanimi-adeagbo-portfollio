'use client'

import { useEffect, useRef } from 'react'

const featured = [
  {
    id: 'spoudazo',
    name: 'Spoudazõ',
    tagline: 'AI Exam-Prep & Academic Operating System',
    description:
      'A full-stack AI exam-prep platform built on Next.js and FastAPI — FAISS vector search over BGE-M3 embeddings, rubric-based theory grading, CBT practice mode, a study planner, and a Smart Library powered by Tavily web search. Deployed on Vercel with Firebase auth.',
    tech: ['Next.js', 'FastAPI', 'FAISS', 'BGE-M3', 'Firebase Auth'],
    type: 'AI / EdTech',
    accent: 'from-gold/20 to-transparent',
  },
  {
    id: 'zelta',
    name: 'ZELTA',
    tagline: 'AI Financial Twin for Nigerian Students',
    description:
      'A behavioral finance platform pivoting toward an "AI Financial Twin" for Nigerian university students — FastAPI microservices, Bayesian likelihood models, Kelly Criterion math for risk sizing, and an LLM narration layer (Llama via Groq/OpenRouter) that never does the arithmetic itself.',
    tech: ['FastAPI', 'Bayesian Inference', 'Kelly Criterion', 'LangGraph', 'Groq'],
    type: 'AI / Fintech',
    accent: 'from-gold/25 to-transparent',
  },
  {
    id: 'ojabulk',
    name: 'OjaBulk',
    tagline: 'Pooled Procurement & Split-Ledger Escrow',
    description:
      'Pooled procurement infrastructure for Nigerian market traders — Nomba Virtual Accounts, HMAC-SHA256 webhook verification, a double-entry ledger, smart escrow mechanics, and USSD access via Africa\u2019s Talking for traders without smartphones.',
    tech: ['FastAPI', 'Nomba API', 'Double-Entry Ledger', 'USSD', 'Escrow'],
    type: 'Fintech / Infrastructure',
    accent: 'from-gold/15 to-transparent',
  },
]

const otherProjects = [
  {
    id: 1,
    name: 'PDF-RESEARCHER-ANALYSER',
    tagline: 'Intelligent PDF Research Tool',
    description:
      'A multi-document research platform with Google Drive sync, FAISS retrieval, and a Streamlit interface for analyzing academic papers.',
    tech: ['Python', 'FAISS', 'NLP', 'Streamlit'],
    type: 'Research',
    githubLink: 'https://github.com/Tioluwanim/PDF-RESEARCHER-ANALYSER',
    status: 'Public',
  },
  {
    id: 2,
    name: 'scholar_search_app',
    tagline: 'Google Scholar Research Automation',
    description:
      'Searches multiple author names on Google Scholar and automatically downloads matching research papers, saving hours of manual searching.',
    tech: ['Python', 'Web Scraping', 'Automation'],
    type: 'Automation',
    githubLink: 'https://github.com/Tioluwanim/scholar_search_app',
    status: 'Public',
  },
  {
    id: 3,
    name: 'Fraud_Detection_Group4',
    tagline: 'ML-Powered Fraud Detection',
    description:
      'A fraud detection project applying machine learning models to identify fraudulent patterns in financial transaction data.',
    tech: ['Jupyter', 'scikit-learn', 'Pandas'],
    type: 'Machine Learning',
    githubLink: 'https://github.com/Tioluwanim/Fraud_Detection_Group4_project',
    status: 'Public',
  },
  {
    id: 4,
    name: 'Oke-Osun-Diocesan-App',
    tagline: 'Church Diocese Web + Mobile Platform',
    description:
      'Next.js website and React Native/Expo app for the Diocese of Oke-Osun — Paystack giving flow, OTP auth via Resend, and a FastAPI/PostgreSQL backend.',
    tech: ['Next.js', 'React Native', 'FastAPI', 'Paystack'],
    type: 'Real-World Client',
    githubLink: 'https://github.com/Tioluwanim/Oke-Osun-Diocesan-Application',
    status: 'Public',
  },
  {
    id: 5,
    name: 'KudiWise AI',
    tagline: 'Agentic LLM Support Assistant',
    description:
      'LangGraph + FastAPI + ChromaDB agent deployed to Google Cloud Run for the DSN × BCT LLM Agent Challenge — Hit Rate@10 of 1.0.',
    tech: ['LangGraph', 'FastAPI', 'ChromaDB', 'Cloud Run'],
    type: 'AI / Agents',
    githubLink: null,
    status: 'Private',
  },
]

function FeaturedCard({ project, index }) {
  const ref = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => ref.current?.classList.add('visible'), index * 120)
          observer.unobserve(entry.target)
        }
      },
      { threshold: 0.1 }
    )
    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [index])

  return (
    <div
      ref={ref}
      data-cursor-hover
      className={`reveal glow-border group relative overflow-hidden glass-panel rounded-2xl p-8 flex flex-col justify-between min-h-[340px] transition-all duration-500 hover:-translate-y-1 hover:shadow-gold`}
    >
      <div className={`absolute inset-0 bg-gradient-to-br ${project.accent} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
      <div className="relative">
        <span className="font-mono text-[0.65rem] uppercase tracking-widest text-gold border border-gold/30 rounded-full px-3 py-1">
          {project.type}
        </span>
        <h3 className="font-display text-2xl text-obsidian mt-6 mb-1">{project.name}</h3>
        <p className="font-mono text-xs text-gold mb-4">{project.tagline}</p>
        <p className="font-body text-sm text-mist leading-relaxed">{project.description}</p>
      </div>
      <div className="relative flex flex-wrap gap-2 mt-6">
        {project.tech.map((t) => (
          <span key={t} className="font-mono text-[0.65rem] px-2.5 py-1 rounded-md bg-void-line/60 text-mist">
            {t}
          </span>
        ))}
      </div>
    </div>
  )
}

function ProjectCard({ project, index }) {
  const ref = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => ref.current?.classList.add('visible'), index * 90)
          observer.unobserve(entry.target)
        }
      },
      { threshold: 0.1 }
    )
    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [index])

  return (
    <div
      ref={ref}
      data-cursor-hover
      className="reveal group glass-panel rounded-2xl p-7 flex flex-col hover:-translate-y-1 hover:shadow-gold-sm transition-all duration-300"
    >
      <div className="flex items-start justify-between mb-4">
        <span className="font-mono text-[0.65rem] px-3 py-1 rounded-full border border-gold/25 text-gold">
          {project.type}
        </span>
        {project.status === 'Private' ? (
          <span className="font-mono text-[0.65rem] text-mist">Private</span>
        ) : (
          <a
            href={project.githubLink}
            target="_blank"
            rel="noopener noreferrer"
            className="text-mist hover:text-gold transition-colors duration-200"
            aria-label="GitHub"
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z" />
            </svg>
          </a>
        )}
      </div>
      <h3 className="font-display text-lg text-obsidian mb-1">{project.name}</h3>
      <p className="font-mono text-xs text-gold mb-3">{project.tagline}</p>
      <p className="font-body text-sm text-mist leading-relaxed mb-5 flex-1">{project.description}</p>
      <div className="flex flex-wrap gap-2">
        {project.tech.map((t) => (
          <span key={t} className="font-mono text-[0.65rem] px-2.5 py-1 rounded-md bg-void-line/60 text-mist">
            {t}
          </span>
        ))}
      </div>
    </div>
  )
}

export default function Projects() {
  return (
    <section id="projects" className="relative py-28 z-10">
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex items-center gap-3 mb-4">
          <span className="section-label">03 / The Showcase</span>
          <div className="h-px flex-1 max-w-[60px] bg-gold/30" />
        </div>

        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-16">
          <div>
            <h2 className="font-display text-4xl lg:text-5xl text-obsidian mb-3">Selected Work</h2>
            <p className="font-body text-mist text-base max-w-lg">
              Deep case studies from three products, plus the rest of the shelf.
            </p>
          </div>
          <a
            href="https://github.com/Tioluwanim"
            target="_blank"
            rel="noopener noreferrer"
            data-cursor-hover
            className="inline-flex items-center gap-2 text-sm font-medium shrink-0 text-mist hover:text-gold transition-colors duration-300"
          >
            View all on GitHub
            <svg width="14" height="14" viewBox="0 0 16 16" fill="none">
              <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </a>
        </div>

        <div className="grid md:grid-cols-3 gap-6 mb-8">
          {featured.map((project, i) => (
            <FeaturedCard key={project.id} project={project} index={i} />
          ))}
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {otherProjects.map((project, i) => (
            <ProjectCard key={project.id} project={project} index={i} />
          ))}
        </div>
      </div>
    </section>
  )
}
