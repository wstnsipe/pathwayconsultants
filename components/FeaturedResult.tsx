import { ArrowRight, Quote } from 'lucide-react'
import Image from 'next/image'
import RevealSection from './RevealSection'

export default function FeaturedResult() {
  return (
    <section id="results" className="bg-navy py-24 lg:py-32 relative overflow-hidden">

      {/* Decorative blobs */}
      <div className="absolute -top-32 -right-32 w-96 h-96 rounded-full bg-gold opacity-[0.05] blur-3xl pointer-events-none" />
      <div className="absolute -bottom-32 -left-32 w-96 h-96 rounded-full bg-gold opacity-[0.04] blur-3xl pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-10">

        {/* Section label */}
        <RevealSection>
          <p className="section-label text-center mb-16">Client Result</p>
        </RevealSection>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">

          {/* Left — Story */}
          <RevealSection delay={100}>
            <div>
              {/* Big stat */}
              <div className="mb-8">
                <div className="font-jakarta font-extrabold text-7xl lg:text-8xl text-gold leading-none">
                  90
                  <span className="text-4xl lg:text-5xl text-gold/60 font-semibold ml-1">days</span>
                </div>
                <div className="font-jakarta font-semibold text-white/50 text-sm tracking-widest uppercase mt-2">
                  From overwhelmed to optimized
                </div>
              </div>

              <div className="gold-line mb-8" />

              <p className="font-inter text-white/70 text-lg leading-relaxed mb-6">
                A local Alabama service business came to Pathway with no clear
                strategy, inconsistent revenue, and a team that didn&apos;t know who
                was responsible for what.
              </p>
              <p className="font-inter text-white/70 text-lg leading-relaxed mb-10">
                After a 90-day engagement, they had a documented operations
                playbook, a focused growth strategy, and — for the first time —
                a predictable monthly revenue model they could actually plan around.
              </p>

              <a
                href="/contact"
                className="inline-flex items-center gap-2.5 bg-gold text-navy font-jakarta font-bold px-8 py-4 rounded-full hover:bg-gold-lt active:scale-95 transition-all duration-200 shadow-lg shadow-gold/20"
              >
                Get Results Like This
                <ArrowRight size={17} strokeWidth={2.5} />
              </a>
            </div>
          </RevealSection>

          {/* Right — Photo + Pull quote card stacked */}
          <RevealSection delay={200}>
            <div className="relative">

              {/* Real consulting photo sits above the quote card */}
              <div className="relative rounded-3xl overflow-hidden mb-[-40px]">
                <div className="relative h-52 lg:h-60">
                  <Image
                    src="/images/consulting-session.jpg"
                    alt="Pathway consulting session in action"
                    fill
                    sizes="(max-width: 1024px) 100vw, 50vw"
                    className="object-cover object-center"
                  />
                  <div className="absolute inset-0 bg-gradient-to-b from-transparent to-navy/80" />
                </div>
              </div>

              {/* Quote card */}
              <div className="relative z-10 bg-white/10 backdrop-blur-sm border border-white/20 rounded-3xl p-8 lg:p-10 mx-2">
                <Quote
                  size={40}
                  className="text-gold mb-6"
                  strokeWidth={1.5}
                />
                <blockquote className="font-jakarta font-semibold text-xl lg:text-2xl text-white leading-snug mb-8">
                  &ldquo;Working with Pathway was the first time someone actually
                  looked at our whole business and told us the truth. We had a
                  clear plan within two weeks.&rdquo;
                </blockquote>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-gold/20 flex items-center justify-center flex-shrink-0">
                    <span className="font-jakarta font-bold text-gold text-lg">T</span>
                  </div>
                  <div>
                    <div className="font-jakarta font-semibold text-white text-sm">
                      T. Williams
                    </div>
                    <div className="font-inter text-white/50 text-xs mt-0.5">
                      Service Business Owner · Birmingham, AL
                    </div>
                  </div>
                </div>
              </div>

              {/* Floating result badge */}
              <div className="absolute -bottom-5 -right-5 bg-gold text-navy rounded-2xl px-5 py-3.5 shadow-xl z-20">
                <div className="font-jakarta font-extrabold text-2xl leading-none">3×</div>
                <div className="font-jakarta font-semibold text-[0.65rem] tracking-wide leading-none mt-1">
                  Revenue Growth
                </div>
              </div>
            </div>
          </RevealSection>
        </div>
      </div>
    </section>
  )
}
