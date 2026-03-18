import RevealSection from './RevealSection'
import { Phone, Search, Rocket } from 'lucide-react'

const STEPS = [
  {
    number: '01',
    icon: Phone,
    title: 'Book Your Free Call',
    description: "A 15-minute no-pressure conversation. We learn about your business, your goals, and whether we're the right fit for each other. Zero commitment required.",
    time: '15 Minutes',
    color: 'from-gold/20 to-gold/5',
  },
  {
    number: '02',
    icon: Search,
    title: 'Business Audit & Discovery',
    description: "We take a deep, honest look at your strategy, operations, and financials to pinpoint exactly where you're losing time, money, and momentum.",
    time: '1–2 Weeks',
    color: 'from-gold/20 to-gold/5',
  },
  {
    number: '03',
    icon: Rocket,
    title: 'Build, Execute & Grow',
    description: "We deliver a focused action plan and stay hands-on through execution — because a plan is only as valuable as the results it actually creates.",
    time: 'Ongoing',
    color: 'from-gold/20 to-gold/5',
  },
]

export default function ProcessSection() {
  return (
    <section className="bg-cream py-24 lg:py-32">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">

        {/* Header */}
        <RevealSection className="text-center mb-16 lg:mb-20">
          <p className="section-label mb-5 justify-center">How It Works</p>
          <h2 className="font-jakarta font-extrabold text-3xl sm:text-4xl lg:text-5xl text-heading leading-[1.08] tracking-tight max-w-2xl mx-auto">
            From First Call to Real Results — Here&apos;s the Process
          </h2>
          <p className="font-inter text-body text-lg mt-5 max-w-xl mx-auto leading-relaxed">
            No long contracts, no mystery. Here&apos;s exactly what working with Pathway looks like.
          </p>
        </RevealSection>

        {/* Desktop: horizontal steps */}
        <div className="hidden lg:block">
          <RevealSection>
            <div className="relative">
              {/* Connector line behind cards */}
              <div className="absolute top-10 left-[calc(16.67%+24px)] right-[calc(16.67%+24px)] h-px bg-gradient-to-r from-gold/40 via-gold/60 to-gold/40" />

              <div className="grid grid-cols-3 gap-8">
                {STEPS.map(({ number, icon: Icon, title, description, time }, i) => (
                  <div key={i} className="relative flex flex-col">
                    {/* Step circle */}
                    <div className="relative z-10 flex items-center justify-center mb-8">
                      <div className="w-20 h-20 rounded-full bg-navy flex flex-col items-center justify-center shadow-[0_0_0_6px_#FAFAF7,0_0_0_7px_rgba(201,168,76,0.3)]">
                        <span className="font-jakarta font-extrabold text-gold text-[0.65rem] tracking-[0.15em] leading-none mb-0.5">{number}</span>
                        <Icon size={18} className="text-white" strokeWidth={1.8} />
                      </div>
                    </div>

                    {/* Card */}
                    <div className="bg-white rounded-2xl border border-gray-100 p-7 flex-1 shadow-sm hover:shadow-md hover:border-gold/20 transition-all duration-250">
                      <div className="inline-flex items-center gap-2 bg-gold/8 border border-gold/20 rounded-full px-3 py-1 mb-4">
                        <span className="font-jakarta font-bold text-gold text-[0.67rem] tracking-widest uppercase">{time}</span>
                      </div>
                      <h3 className="font-jakarta font-bold text-[1.05rem] text-heading mb-3 leading-snug">{title}</h3>
                      <p className="font-inter text-body text-sm leading-relaxed">{description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </RevealSection>
        </div>

        {/* Mobile: vertical steps */}
        <div className="lg:hidden space-y-4">
          {STEPS.map(({ number, icon: Icon, title, description, time }, i) => (
            <RevealSection key={i} delay={i * 100}>
              <div className="flex gap-5">
                {/* Left: number + connector */}
                <div className="flex flex-col items-center">
                  <div className="w-12 h-12 rounded-full bg-navy flex flex-col items-center justify-center flex-shrink-0 shadow-[0_0_0_4px_#FAFAF7,0_0_0_5px_rgba(201,168,76,0.3)]">
                    <span className="font-jakarta font-extrabold text-gold text-[0.6rem] leading-none">{number}</span>
                    <Icon size={13} className="text-white" strokeWidth={2} />
                  </div>
                  {i < STEPS.length - 1 && (
                    <div className="w-px flex-1 my-3 bg-gradient-to-b from-gold/40 to-gold/10" />
                  )}
                </div>

                {/* Right: content */}
                <div className="bg-white rounded-2xl border border-gray-100 p-6 flex-1 mb-1 shadow-sm">
                  <div className="inline-flex items-center gap-2 bg-gold/8 border border-gold/20 rounded-full px-3 py-1 mb-3">
                    <span className="font-jakarta font-bold text-gold text-[0.67rem] tracking-widest uppercase">{time}</span>
                  </div>
                  <h3 className="font-jakarta font-bold text-base text-heading mb-2">{title}</h3>
                  <p className="font-inter text-body text-sm leading-relaxed">{description}</p>
                </div>
              </div>
            </RevealSection>
          ))}
        </div>

        {/* Bottom CTA */}
        <RevealSection delay={300} className="text-center mt-14">
          <a
            href="/contact"
            className="inline-flex items-center gap-3 bg-navy text-white font-jakarta font-semibold text-sm px-7 py-3.5 rounded-full hover:bg-navy-mid transition-colors duration-200"
          >
            Start with Step 1 — It&apos;s Free
          </a>
        </RevealSection>
      </div>
    </section>
  )
}
