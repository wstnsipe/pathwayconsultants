import { Star, Quote } from 'lucide-react'
import RevealSection from './RevealSection'

const FEATURED = {
  initial: 'T',
  name: 'T. Williams',
  role: 'Service Business Owner',
  location: 'Birmingham, AL',
  quote: "Working with Pathway was the first time someone actually looked at our whole business and told us the truth. We had a clear plan within two weeks — and we were profitable within ninety days. The operations work alone paid for everything ten times over.",
}

const SECONDARY = [
  {
    initial: 'M',
    name: 'Marcus T.',
    role: 'Retail Shop Owner',
    location: 'Montgomery, AL',
    quote: "Pathway helped us go from guessing to genuinely growing. Within 60 days we had more strategic clarity than we'd built in three years on our own. The operations plan alone saved us thousands.",
  },
  {
    initial: 'D',
    name: 'Denise R.',
    role: 'Service Business Owner',
    location: 'Huntsville, AL',
    quote: "I was skeptical of consultants — I'd been burned before. Pathway was completely different. Direct, practical, and they actually cared about what we were building. No fluff, all focus.",
  },
]

function Stars({ count = 5 }: { count?: number }) {
  return (
    <div className="flex gap-0.5">
      {Array.from({ length: count }).map((_, i) => (
        <Star key={i} size={13} className="text-gold fill-gold" />
      ))}
    </div>
  )
}

export default function Testimonials() {
  return (
    <section className="bg-warm py-24 lg:py-32">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">

        {/* Header + rating bar */}
        <RevealSection className="text-center mb-14">
          <p className="section-label mb-5 justify-center">What Clients Say</p>
          <h2 className="font-jakarta font-extrabold text-3xl sm:text-4xl lg:text-5xl text-heading leading-[1.08] tracking-tight mb-8">
            Real Businesses. Real Results. Real Words.
          </h2>

          {/* Overall rating pill */}
          <div className="inline-flex items-center gap-3 bg-white border border-gray-200 rounded-full px-5 py-2.5 shadow-sm">
            <Stars />
            <span className="font-jakarta font-bold text-heading text-sm">5.0</span>
            <div className="w-px h-4 bg-gray-200" />
            <span className="font-inter text-body text-xs">Based on 100+ client engagements</span>
          </div>
        </RevealSection>

        {/* Featured testimonial — full width, dark */}
        <RevealSection className="mb-6">
          <div className="testimonial-featured rounded-3xl p-8 lg:p-12 xl:p-14 relative overflow-hidden">
            {/* Grain overlay */}
            <div className="grain-overlay absolute inset-0 pointer-events-none" />

            {/* Glow blob */}
            <div className="absolute -top-24 -right-24 w-72 h-72 rounded-full bg-gold opacity-[0.06] blur-3xl pointer-events-none" />

            <div className="relative z-10 flex flex-col lg:flex-row lg:items-start gap-8 lg:gap-14">
              {/* Large quote icon */}
              <div className="flex-shrink-0">
                <Quote size={48} className="text-gold opacity-70" strokeWidth={1.3} />
              </div>

              <div className="flex-1">
                <Stars />
                <blockquote className="font-jakarta font-semibold text-xl sm:text-2xl lg:text-[1.6rem] xl:text-3xl text-white leading-[1.35] mt-5 mb-8 tracking-[-0.01em]">
                  &ldquo;{FEATURED.quote}&rdquo;
                </blockquote>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-gold/20 border border-gold/30 flex items-center justify-center flex-shrink-0">
                    <span className="font-jakarta font-extrabold text-gold text-lg">{FEATURED.initial}</span>
                  </div>
                  <div>
                    <div className="font-jakarta font-bold text-white text-sm leading-none mb-1">{FEATURED.name}</div>
                    <div className="font-inter text-white/50 text-xs">{FEATURED.role} · {FEATURED.location}</div>
                  </div>
                  {/* Result badge */}
                  <div className="ml-auto hidden sm:block text-right">
                    <div className="font-jakarta font-extrabold text-3xl text-gold leading-none">90</div>
                    <div className="font-jakarta font-semibold text-white/50 text-[0.65rem] tracking-widest uppercase">Days to Results</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </RevealSection>

        {/* Secondary testimonials */}
        <div className="grid md:grid-cols-2 gap-5 lg:gap-6">
          {SECONDARY.map(({ initial, name, role, location, quote }, i) => (
            <RevealSection key={i} delay={i * 100}>
              <div className="bg-white rounded-2xl border border-gray-100 p-7 card-lift shadow-sm h-full flex flex-col hover:border-gold/25">
                <Stars />
                <div className="font-jakarta font-extrabold text-5xl text-gold/15 leading-none mt-3 mb-1 select-none" aria-hidden>&ldquo;</div>
                <blockquote className="font-inter text-body leading-relaxed text-[0.9375rem] flex-1 mb-6">{quote}</blockquote>
                <div className="flex items-center gap-3 pt-5 border-t border-gray-100">
                  <div className="w-9 h-9 rounded-full bg-navy flex items-center justify-center flex-shrink-0">
                    <span className="font-jakarta font-bold text-gold text-sm">{initial}</span>
                  </div>
                  <div>
                    <div className="font-jakarta font-semibold text-heading text-sm leading-none mb-0.5">{name}</div>
                    <div className="font-inter text-body text-xs">{role} · {location}</div>
                  </div>
                </div>
              </div>
            </RevealSection>
          ))}
        </div>
      </div>
    </section>
  )
}
