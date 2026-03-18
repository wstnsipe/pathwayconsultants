import { ArrowRight, TrendingUp, Settings, Monitor, BookOpen } from 'lucide-react'
import Image from 'next/image'
import RevealSection from './RevealSection'

const SERVICES = [
  {
    icon: TrendingUp,
    title: 'Business Strategy & Planning',
    description: "Clarity on where you're going and exactly how to get there. We build practical roadmaps built around your market, your goals, and your timeline — not binders that collect dust.",
    tag: 'Most Requested',
    image: '/images/strategy.jpg',
    imageAlt: 'Business strategy planning session',
  },
  {
    icon: Settings,
    title: 'Operations Optimization',
    description: "Streamline how your business runs day-to-day. We identify waste, fix broken processes, and help you build systems that scale without requiring you in every single decision.",
    tag: null,
    image: '/images/team.jpg',
    imageAlt: 'Team working on operations improvement',
  },
  {
    icon: Monitor,
    title: 'Small Business Website Design',
    description: "A website that works as hard as you do — built to convert visitors into customers, not just look good. Clean, fast, and designed to reflect the quality of your business.",
    tag: null,
    image: '/images/consultation.jpg',
    imageAlt: 'Website design consultation',
  },
  {
    icon: BookOpen,
    title: 'Bookkeeping & Financial Clarity',
    description: "Know your numbers, make smarter decisions. We handle the books so you can focus on running your business — and finally understand what your financials are telling you.",
    tag: null,
    image: '/images/bookkeeping.jpg',
    imageAlt: 'Financial planning and bookkeeping',
  },
]

export default function ServicesSection() {
  return (
    <section id="services" className="bg-warm py-24 lg:py-32 dot-pattern-light">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">

        {/* Section header */}
        <RevealSection className="mb-14">
          <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6">
            <div>
              <p className="section-label mb-5">What We Do</p>
              <h2 className="font-jakarta font-extrabold text-3xl sm:text-4xl lg:text-5xl text-heading leading-[1.08] tracking-tight max-w-xl">
                End-to-End Support for Every Stage of Your Business
              </h2>
            </div>
            <p className="font-inter text-body leading-relaxed max-w-xs lg:text-right text-[0.9375rem]">
              Whether you&apos;re launching or scaling, Pathway has a service built for where you are right now.
            </p>
          </div>
          <div className="gold-line mt-8" />
        </RevealSection>

        {/* Services grid */}
        <div className="grid sm:grid-cols-2 gap-5 lg:gap-6">
          {SERVICES.map(({ icon: Icon, title, description, tag, image, imageAlt }, i) => (
            <RevealSection key={i} delay={i * 75}>
              <div className="group relative bg-white rounded-2xl border border-gray-100 service-card h-full flex flex-col overflow-hidden">

                {/* Card image header */}
                <div className="relative h-44 overflow-hidden flex-shrink-0">
                  <Image
                    src={image}
                    alt={imageAlt}
                    fill
                    sizes="(max-width: 640px) 100vw, 50vw"
                    className="object-cover object-center group-hover:scale-105 transition-transform duration-500"
                  />
                  {/* Dark overlay */}
                  <div className="absolute inset-0 bg-navy/40 group-hover:bg-navy/30 transition-colors duration-300" />

                  {/* Icon + tag row over image */}
                  <div className="absolute bottom-4 left-5 right-5 flex items-end justify-between">
                    <div className="w-10 h-10 rounded-xl bg-white/15 backdrop-blur-sm border border-white/20 flex items-center justify-center">
                      <Icon size={18} className="text-white" strokeWidth={1.8} />
                    </div>
                    {tag && (
                      <span className="inline-flex items-center gap-1.5 bg-gold text-navy font-jakarta font-bold text-[0.62rem] tracking-[0.14em] uppercase px-3 py-1.5 rounded-full">
                        <span className="w-1.5 h-1.5 rounded-full bg-navy/40 flex-shrink-0" />
                        {tag}
                      </span>
                    )}
                  </div>
                </div>

                {/* Large editorial number watermark */}
                <div
                  className="number-watermark absolute bottom-3 right-4 leading-none select-none pointer-events-none"
                  aria-hidden
                >
                  {String(i + 1).padStart(2, '0')}
                </div>

                {/* Text content */}
                <div className="p-7 lg:p-8 flex flex-col flex-1">
                  <h3 className="font-jakarta font-bold text-[1.1rem] lg:text-xl text-heading mb-3 leading-snug relative z-10">
                    {title}
                  </h3>
                  <p className="font-inter text-body leading-relaxed text-[0.9rem] flex-1 relative z-10">
                    {description}
                  </p>

                  {/* CTA */}
                  <a
                    href="/contact"
                    className="mt-6 inline-flex items-center gap-2 font-jakarta font-semibold text-[0.8125rem] text-gold link-slide relative z-10 group-hover:gap-3 transition-all duration-200 self-start"
                  >
                    Get Started
                    <ArrowRight size={14} strokeWidth={2.5} />
                  </a>
                </div>
              </div>
            </RevealSection>
          ))}
        </div>

        {/* Bottom nudge */}
        <RevealSection delay={350} className="text-center mt-12">
          <p className="font-inter text-body text-sm mb-3">Not sure which service is right for your stage?</p>
          <a href="/contact" className="inline-flex items-center gap-2 text-navy font-jakarta font-semibold text-sm border-b border-gold pb-px hover:text-gold transition-colors duration-200">
            Let&apos;s talk — it&apos;s free
            <ArrowRight size={13} strokeWidth={2.5} />
          </a>
        </RevealSection>
      </div>
    </section>
  )
}
