'use client'

import { useState, useEffect } from 'react'

const links = [
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Projects', href: '#projects' },
  { label: 'Learning', href: '#learning' },
  { label: 'Contact', href: '#contact' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-white/90 backdrop-blur-md shadow-sm border-b border-slate-100' : 'bg-transparent'
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo / Name */}
        <a
          href="#"
          className="font-display text-xl text-ink tracking-tight hover:text-[#3B6FE8] transition-colors duration-200"
        >
          T<span style={{ color: '#3B6FE8' }}>.</span>Adeagbo
        </a>

        {/* Desktop Links */}
        <ul className="hidden md:flex items-center gap-8">
          {links.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="font-body text-sm font-medium text-subtle hover:text-[#3B6FE8] transition-colors duration-200 accent-underline"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        {/* CTA Button */}
        <a
          href="#contact"
          className="hidden md:inline-flex items-center gap-2 bg-[#3B6FE8] text-white text-sm font-medium px-5 py-2.5 rounded-full hover:bg-[#2554C7] transition-colors duration-200"
        >
          Let's Talk
        </a>

        {/* Mobile Hamburger */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden flex flex-col gap-1.5 p-1"
          aria-label="Toggle menu"
        >
          <span
            className={`block w-6 h-0.5 bg-ink transition-all duration-300 ${menuOpen ? 'rotate-45 translate-y-2' : ''}`}
          />
          <span
            className={`block w-6 h-0.5 bg-ink transition-all duration-300 ${menuOpen ? 'opacity-0' : ''}`}
          />
          <span
            className={`block w-6 h-0.5 bg-ink transition-all duration-300 ${menuOpen ? '-rotate-45 -translate-y-2' : ''}`}
          />
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden bg-white border-t border-slate-100 transition-all duration-300 overflow-hidden ${
          menuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <ul className="px-6 py-4 flex flex-col gap-4">
          {links.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className="font-body text-base font-medium text-ink hover:text-[#3B6FE8] transition-colors duration-200"
              >
                {link.label}
              </a>
            </li>
          ))}
          <li>
            <a
              href="#contact"
              onClick={() => setMenuOpen(false)}
              className="inline-flex items-center gap-2 bg-[#3B6FE8] text-white text-sm font-medium px-5 py-2.5 rounded-full"
            >
              Let's Talk
            </a>
          </li>
        </ul>
      </div>
    </nav>
  )
}
