'use client'

import { useState, useEffect } from 'react'
import { Menu, X } from 'lucide-react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

const NAV_LINKS = [
  { label: 'About',        href: '/about'        },
  { label: 'Services',     href: '/services'     },
  { label: 'Testimonials', href: '/testimonials' },
  { label: 'Contact',      href: '/contact'      },
]

export default function Navbar() {
  const [scrolled, setScrolled]     = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const pathname = usePathname()
  const isHome   = pathname === '/'

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 32)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  // Non-home pages always show the solid white navbar
  const showSolid = !isHome || scrolled

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        showSolid
          ? 'bg-white/95 backdrop-blur-sm shadow-[0_1px_16px_rgba(15,32,64,0.10)]'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="flex items-center justify-between h-20">

          {/* ── Logo ── */}
          <Link href="/" className="flex flex-col leading-none group">
            <span
              className={`font-jakarta font-extrabold text-[1.35rem] tracking-tight transition-colors duration-300 ${
                showSolid ? 'text-navy' : 'text-white'
              }`}
            >
              Pathway
            </span>
            <span
              className={`font-jakarta font-semibold text-[0.6rem] tracking-[0.18em] uppercase transition-colors duration-300 ${
                showSolid ? 'text-gold' : 'text-gold/80'
              }`}
            >
              Business Consultants
            </span>
          </Link>

          {/* ── Desktop links ── */}
          <nav className="hidden md:flex items-center gap-8">
            {NAV_LINKS.map(({ label, href }) => {
              const isActive = pathname === href
              return (
                <Link
                  key={label}
                  href={href}
                  className={`font-jakarta font-medium text-sm transition-colors duration-200 hover:text-gold ${
                    isActive
                      ? 'text-gold'
                      : showSolid ? 'text-heading' : 'text-white/80'
                  }`}
                >
                  {label}
                </Link>
              )
            })}
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 bg-gold text-navy font-jakarta font-semibold text-sm px-6 py-3 rounded-full hover:bg-gold-lt active:scale-95 transition-all duration-200 shadow-sm"
            >
              Book Free Call
            </Link>
          </nav>

          {/* ── Mobile toggle ── */}
          <button
            className={`md:hidden p-1 transition-colors duration-300 ${
              showSolid ? 'text-navy' : 'text-white'
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
            <Link
              key={label}
              href={href}
              onClick={() => setMobileOpen(false)}
              className={`block font-jakarta font-medium py-3.5 border-b border-gray-100 transition-colors ${
                pathname === href ? 'text-gold' : 'text-heading hover:text-gold'
              }`}
            >
              {label}
            </Link>
          ))}
          <Link
            href="/contact"
            onClick={() => setMobileOpen(false)}
            className="mt-5 block text-center bg-gold text-navy font-jakarta font-semibold py-3.5 rounded-full hover:bg-gold-lt transition-colors"
          >
            Book Free Call
          </Link>
        </div>
      </div>
    </header>
  )
}
