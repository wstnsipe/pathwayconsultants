import { ArrowRight, TrendingUp, Settings, Monitor, BookOpen } from 'lucide-react'
import Link from 'next/link'
import RevealSection from './RevealSection'

const SERVICES = [
  { icon: TrendingUp, title: 'Business Strategy & Planning', tag: 'Most Requested' },
  { icon: Settings,   title: 'Operations Optimization',        tag: null            },
  { icon: Monitor,    title: 'Small Business Website Design',  tag: null            },
  { icon: BookOpen,   title: 'Bookkeeping & Financial Clarity',tag: null            },
]

export default function ServicesPreview() {
  return (
    <section className="bg-cream py-24 lg:py-32">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">

        {/* Header */}
        <RevealSection className="mb-12">
          <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6">
            <div>
              <p className="section-label mb-5">What We Do</p>
              <h2 className="font-jakarta font-extrabold text-3xl sm:text-4xl lg:text-5xl text-heading leading-[1.08] tracking-tight max-w-xl">
                End-to-End Support for Every Stage of Your Business
              </h2>
            </div>
            <Link
              href="/services"
              className="inline-flex items-center gap-2 font-jakarta font-semibold text-sm text-navy border-b border-gold pb-px hover:text-gold transition-colors duration-200 self-start lg:self-end lg:mb-1 shrink-0"
            >
              View all services
              <ArrowRight size={13} strokeWidth={2.5} />
            </Link>
          </div>
          <div className="gold-line mt-8" />
        </RevealSection>

        {/* Service rows */}
        <div className="grid sm:grid-cols-2 gap-4 lg:gap-5">
          {SERVICES.map(({ icon: Icon, title, tag }, i) => (
            <RevealSection key={i} delay={i * 75}>
              <Link
                href="/services"
                className="group flex items-center gap-5 bg-white rounded-2xl border border-gray-100 p-6 service-card hover:border-gold/30 transition-colors duration-200"
              >
                <div className="w-11 h-11 rounded-xl bg-gold/10 flex items-center justify-center group-hover:bg-gold/18 transition-colors duration-200 flex-shrink-0">
                  <Icon size={20} className="text-gold" strokeWidth={1.8} />
                </div>
                <div className="flex-1 min-w-0">
                  <h3 className="font-jakarta font-bold text-[1.05rem] text-heading leading-snug">{title}</h3>
                  {tag && (
                    <span className="inline-flex items-center gap-1 mt-1 text-gold font-jakarta font-bold text-[0.62rem] tracking-[0.14em] uppercase">
                      <span className="w-1.5 h-1.5 rounded-full bg-gold flex-shrink-0" />
                      {tag}
                    </span>
                  )}
                </div>
                <ArrowRight
                  size={16}
                  className="text-gold/30 group-hover:text-gold group-hover:translate-x-0.5 transition-all duration-200 flex-shrink-0"
                  strokeWidth={2}
                />
              </Link>
            </RevealSection>
          ))}
        </div>

        <RevealSection delay={350} className="text-center mt-10">
          <Link
            href="/services"
            className="inline-flex items-center gap-2.5 bg-navy text-white font-jakarta font-semibold text-sm px-7 py-3.5 rounded-full hover:bg-navy-mid transition-colors duration-200"
          >
            Explore All Services
            <ArrowRight size={15} strokeWidth={2.5} />
          </Link>
        </RevealSection>
      </div>
    </section>
  )
}
