import { Mail, Phone, MapPin, Linkedin, Facebook, Instagram } from 'lucide-react'

const NAV_LINKS = [
  { label: 'About',           href: '#about'    },
  { label: 'Services',        href: '#services' },
  { label: 'Results',         href: '#results'  },
  { label: 'Pricing',         href: '#pricing'  },
  { label: 'Book a Free Call',href: '#contact'  },
]

const SERVICES = [
  'Business Strategy & Planning',
  'Operations Optimization',
  'Small Business Website Design',
  'Bookkeeping & Financial Clarity',
]

export default function Footer() {
  return (
    <footer className="bg-charcoal text-white">
      {/* Section divider */}
      <div className="section-divider" />

      <div className="max-w-7xl mx-auto px-6 lg:px-10 py-16 lg:py-20">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-10 mb-14">

          {/* Column 1 — Brand */}
          <div className="lg:col-span-1">
            <div className="mb-5">
              <div className="font-jakarta font-extrabold text-xl text-white leading-none">
                Pathway
              </div>
              <div className="font-jakarta font-semibold text-[0.6rem] tracking-[0.18em] uppercase text-gold mt-0.5">
                Business Consultants
              </div>
            </div>
            <p className="font-inter text-white/50 text-sm leading-relaxed mb-6 max-w-xs">
              Helping Alabama entrepreneurs build smarter, stronger businesses
              for over 18 years.
            </p>
            {/* Socials */}
            <div className="flex gap-3">
              {[
                { Icon: Linkedin,  href: '#', label: 'LinkedIn'  },
                { Icon: Facebook,  href: '#', label: 'Facebook'  },
                { Icon: Instagram, href: '#', label: 'Instagram' },
              ].map(({ Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  className="w-9 h-9 rounded-lg bg-white/8 flex items-center justify-center hover:bg-gold/20 hover:text-gold transition-all duration-200 text-white/50"
                >
                  <Icon size={16} strokeWidth={1.8} />
                </a>
              ))}
            </div>
          </div>

          {/* Column 2 — Quick links */}
          <div>
            <h4 className="font-jakarta font-semibold text-sm tracking-widest uppercase text-gold mb-5">
              Navigation
            </h4>
            <ul className="space-y-3">
              {NAV_LINKS.map(({ label, href }) => (
                <li key={label}>
                  <a
                    href={href}
                    className="font-inter text-white/55 text-sm hover:text-gold transition-colors duration-200"
                  >
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3 — Services */}
          <div>
            <h4 className="font-jakarta font-semibold text-sm tracking-widest uppercase text-gold mb-5">
              Services
            </h4>
            <ul className="space-y-3">
              {SERVICES.map(s => (
                <li key={s}>
                  <a
                    href="#services"
                    className="font-inter text-white/55 text-sm hover:text-gold transition-colors duration-200"
                  >
                    {s}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4 — Contact */}
          <div>
            <h4 className="font-jakarta font-semibold text-sm tracking-widest uppercase text-gold mb-5">
              Contact
            </h4>
            <ul className="space-y-4">
              {[
                { Icon: MapPin, text: 'Birmingham, Alabama' },
                { Icon: Phone,  text: 'Schedule a Free Call' },
                { Icon: Mail,   text: 'info@pathwaybusinessconsult.com' },
              ].map(({ Icon, text }) => (
                <li key={text} className="flex gap-3 items-start">
                  <Icon
                    size={15}
                    className="text-gold mt-0.5 flex-shrink-0"
                    strokeWidth={1.8}
                  />
                  <span className="font-inter text-white/55 text-sm leading-relaxed">
                    {text}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="section-divider mb-8" />
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="font-inter text-white/35 text-xs">
            © {new Date().getFullYear()} Pathway Business Consultants. All rights reserved.
          </p>
          <p className="font-inter text-white/25 text-xs">
            Serving Alabama entrepreneurs since 2006 · Free 15-minute consultations available
          </p>
        </div>
      </div>
    </footer>
  )
}
