'use client'

import { useState, useEffect } from 'react'
import { Menu, X } from 'lucide-react'

const NAV_LINKS = [
  { label: 'About',    href: '#about'    },
  { label: 'Services', href: '#services' },
  { label: 'Results',  href: '#results'  },
  { label: 'Pricing',  href: '#pricing'  },
]

export default function Navbar() {
  const [scrolled, setScrolled]     = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 32)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-white/95 backdrop-blur-sm shadow-[0_1px_16px_rgba(15,32,64,0.10)]'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="flex items-center justify-between h-20">

          {/* ── Logo ── */}
          <a href="#" className="flex flex-col leading-none group">
            <span
              className={`font-jakarta font-extrabold text-[1.35rem] tracking-tight transition-colors duration-300 ${
                scrolled ? 'text-navy' : 'text-white'
              }`}
            >
              Pathway
            </span>
            <span
              className={`font-jakarta font-semibold text-[0.6rem] tracking-[0.18em] uppercase transition-colors duration-300 ${
                scrolled ? 'text-gold' : 'text-gold/80'
              }`}
            >
              Business Consultants
            </span>
          </a>

          {/* ── Desktop links ── */}
          <nav className="hidden md:flex items-center gap-8">
            {NAV_LINKS.map(({ label, href }) => (
              <a
                key={label}
                href={href}
                className={`font-jakarta font-medium text-sm transition-colors duration-200 hover:text-gold ${
                  scrolled ? 'text-heading' : 'text-white/80'
                }`}
              >
                {label}
              </a>
            ))}
            <a
              href="#contact"
              className="inline-flex items-center gap-2 bg-gold text-navy font-jakarta font-semibold text-sm px-6 py-3 rounded-full hover:bg-gold-lt active:scale-95 transition-all duration-200 shadow-sm"
            >
              Book Free Call
            </a>
          </nav>

          {/* ── Mobile toggle ── */}
          <button
            className={`md:hidden p-1 transition-colors duration-300 ${
              scrolled ? 'text-navy' : 'text-white'
            }`}
            onClick={() => setMobileOpen(v => !v)}
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* ── Mobile menu ── */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-300 ${
          mobileOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <div className="bg-white border-t border-gray-100 px-6 pb-6 pt-2">
          {NAV_LINKS.map(({ label, href }) => (
            <a
              key={label}
              href={href}
              onClick={() => setMobileOpen(false)}
              className="block font-jakarta font-medium text-heading py-3.5 border-b border-gray-100 hover:text-gold transition-colors"
            >
              {label}
            </a>
          ))}
          <a
            href="#contact"
            onClick={() => setMobileOpen(false)}
            className="mt-5 block text-center bg-gold text-navy font-jakarta font-semibold py-3.5 rounded-full hover:bg-gold-lt transition-colors"
          >
            Book Free Call
          </a>
        </div>
      </div>
    </header>
  )
}
