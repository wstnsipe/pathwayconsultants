import { Check, ArrowRight } from 'lucide-react'
import RevealSection from './RevealSection'

const TIERS = [
  {
    name: 'Starter',
    tagline: 'Hourly Consulting',
    description: 'Perfect for focused problem-solving, one-time strategy sessions, or targeted workshops where you need expert input fast.',
    features: [
      'Flexible hourly engagement',
      'Specific issue diagnosis',
      'Strategic recommendations',
      'Action plan for next steps',
    ],
    featured: false,
    cta: 'Book a Free Call',
  },
  {
    name: 'Growth',
    tagline: 'Monthly Partnership',
    description: 'Our most popular engagement. Ongoing strategy, operations support, and accountability for businesses ready to scale with confidence.',
    features: [
      'Monthly strategy sessions',
      'Operations build-out',
      'KPI tracking & accountability',
      'Priority response & support',
      'Quarterly business reviews',
    ],
    featured: true,
    cta: 'Book a Free Call',
  },
  {
    name: 'Full Audit',
    tagline: 'One-Time Deep Dive',
    description: 'A comprehensive assessment of your entire business — strategy, operations, financials, and market position — with a complete roadmap for growth.',
    features: [
      'Full business assessment',
      '90-day growth roadmap',
      'Operational gap analysis',
      'Financial clarity review',
    ],
    featured: false,
    cta: 'Book a Free Call',
  },
]

export default function PricingOverview() {
  return (
    <section id="pricing" className="bg-cream py-24 lg:py-32">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">

        {/* Header */}
        <RevealSection className="text-center mb-14">
          <p className="section-label mb-4">Investment</p>
          <h2 className="font-jakarta font-extrabold text-3xl sm:text-4xl lg:text-5xl text-heading leading-tight tracking-tight max-w-2xl mx-auto">
            Flexible Engagements for Every Stage of Business
          </h2>
          <p className="font-inter text-body text-lg mt-5 max-w-xl mx-auto leading-relaxed">
            All engagements start with a free 15-minute discovery call — no
            commitment, no pressure. Just clarity on how we can help.
          </p>
        </RevealSection>

        {/* Pricing cards */}
        <div className="grid md:grid-cols-3 gap-6 items-stretch">
          {TIERS.map(({ name, tagline, description, features, featured, cta }, i) => (
            <RevealSection key={i} delay={i * 100}>
              <div
                className={`relative rounded-3xl p-8 h-full flex flex-col shadow-sm ${
                  featured
                    ? 'pricing-featured text-white shadow-xl shadow-navy/30 scale-[1.02]'
                    : 'bg-white border border-gray-100 card-lift hover:border-gold/30'
                }`}
              >
                {/* Popular badge */}
                {featured && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                    <span className="bg-gold text-navy font-jakarta font-bold text-xs tracking-widest uppercase px-5 py-2 rounded-full shadow-lg">
                      Most Popular
                    </span>
                  </div>
                )}

                {/* Tier name */}
                <div className="mb-6">
                  <div
                    className={`section-label mb-1 ${featured ? 'text-gold' : ''}`}
                  >
                    {name}
                  </div>
                  <h3
                    className={`font-jakarta font-bold text-2xl leading-tight ${
                      featured ? 'text-white' : 'text-heading'
                    }`}
                  >
                    {tagline}
                  </h3>
                </div>

                {/* Description */}
                <p
                  className={`font-inter text-[0.9375rem] leading-relaxed mb-6 ${
                    featured ? 'text-white/70' : 'text-body'
                  }`}
                >
                  {description}
                </p>

                {/* Features */}
                <ul className="space-y-3 flex-1 mb-8">
                  {features.map((f, fi) => (
                    <li key={fi} className="flex gap-3 items-start">
                      <Check
                        size={16}
                        className={`mt-0.5 flex-shrink-0 ${
                          featured ? 'text-gold' : 'text-gold'
                        }`}
                        strokeWidth={2.5}
                      />
                      <span
                        className={`font-inter text-sm leading-relaxed ${
                          featured ? 'text-white/75' : 'text-body'
                        }`}
                      >
                        {f}
                      </span>
                    </li>
                  ))}
                </ul>

                {/* CTA */}
                <a
                  href="#contact"
                  className={`mt-auto inline-flex items-center justify-center gap-2 font-jakarta font-semibold text-sm py-4 px-6 rounded-full transition-all duration-200 active:scale-95 ${
                    featured
                      ? 'bg-gold text-navy hover:bg-gold-lt shadow-lg shadow-gold/25'
                      : 'bg-navy text-white hover:bg-navy-mid'
                  }`}
                >
                  {cta}
                  <ArrowRight size={15} strokeWidth={2.5} />
                </a>
              </div>
            </RevealSection>
          ))}
        </div>

        {/* Footer note */}
        <RevealSection delay={350} className="text-center mt-10">
          <p className="font-inter text-body text-sm">
            Pricing is customized to your business size, goals, and scope.{' '}
            <a href="#contact" className="text-gold font-semibold hover:underline">
              View full pricing details →
            </a>
          </p>
        </RevealSection>
      </div>
    </section>
  )
}
