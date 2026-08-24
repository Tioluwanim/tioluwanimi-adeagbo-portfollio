'use client'

import { motion } from 'framer-motion'
import dynamic from 'next/dynamic'

const ParticleField = dynamic(() => import('./ParticleField'), { ssr: false })

const container = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.12, delayChildren: 0.2 },
  },
}

const item = {
  hidden: { opacity: 0, y: 32 },
  show: { opacity: 1, y: 0, transition: { duration: 0.9, ease: [0.16, 1, 0.3, 1] } },
}

export default function Hero() {
  return (
    <section id="hero" className="relative min-h-screen flex items-center overflow-hidden">
      <ParticleField />

      <div className="absolute inset-0 bg-gradient-to-b from-void via-transparent to-void z-[1] pointer-events-none" />

      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        className="relative z-10 max-w-6xl mx-auto px-6 py-32 w-full"
      >
        <div className="max-w-3xl">
          <motion.div
            variants={item}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-mono uppercase tracking-widest mb-8 border border-gold/30 text-gold"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-gold animate-pulse-slow" />
            Available for opportunities
          </motion.div>

          <motion.h1
            variants={item}
            className="font-display text-5xl sm:text-6xl lg:text-7xl leading-[1.08] text-obsidian mb-6"
          >
            Tioluwanimi
            <br />
            <span className="text-gold-gradient">Engineering Intelligence.</span>
          </motion.h1>

          <motion.p
            variants={item}
            className="font-body text-lg sm:text-xl text-mist max-w-xl leading-relaxed mb-10"
          >
            Full-stack developer and AI backend engineer building{' '}
            <strong className="text-obsidian font-semibold">multi-agent systems</strong>,{' '}
            <strong className="text-obsidian font-semibold">RAG pipelines</strong>, and{' '}
            <strong className="text-obsidian font-semibold">production-grade fintech infrastructure</strong>{' '}
            out of Obafemi Awolowo University, Nigeria.
          </motion.p>

          <motion.div variants={item} className="flex flex-wrap items-center gap-4 mb-16">
            <a
              href="#projects"
              data-cursor-hover
              className="group inline-flex items-center gap-2 bg-gold-gradient text-void text-sm font-semibold px-7 py-3.5 rounded-full transition-all duration-300 hover:shadow-gold hover:-translate-y-0.5"
            >
              View My Work
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none" className="transition-transform duration-300 group-hover:translate-x-1">
                <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </a>
            <a
              href="https://github.com/Tioluwanim"
              target="_blank"
              rel="noopener noreferrer"
              data-cursor-hover
              className="inline-flex items-center gap-2 text-obsidian text-sm font-medium px-7 py-3.5 rounded-full border border-void-line hover:border-gold/50 hover:text-gold transition-all duration-300"
            >
              GitHub
            </a>
            <a
              href="https://www.linkedin.com/in/tioluwanimi-adeagbo-653920392/"
              target="_blank"
              rel="noopener noreferrer"
              data-cursor-hover
              className="inline-flex items-center gap-2 text-obsidian text-sm font-medium px-7 py-3.5 rounded-full border border-void-line hover:border-gold/50 hover:text-gold transition-all duration-300"
            >
              LinkedIn
            </a>
          </motion.div>

          <motion.div variants={item} className="flex flex-wrap gap-10">
            {[
              { value: '10+', label: 'Projects Shipped' },
              { value: 'FastAPI', label: 'Core Backend' },
              { value: 'AI / Agentic', label: 'Current Focus' },
            ].map((stat) => (
              <div key={stat.label}>
                <div className="font-display text-2xl text-gold-gradient">{stat.value}</div>
                <div className="font-body text-sm text-mist mt-0.5">{stat.label}</div>
              </div>
            ))}
          </motion.div>
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.6 }}
        transition={{ delay: 1.4, duration: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3 z-10"
      >
        <span className="font-mono text-[0.65rem] text-mist tracking-widest uppercase">Scroll</span>
        <div className="relative w-px h-12 bg-void-line overflow-hidden">
          <motion.div
            className="absolute top-0 left-0 w-full h-1/2 bg-gold"
            animate={{ y: ['-100%', '200%'] }}
            transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
          />
        </div>
      </motion.div>
    </section>
  )
}
