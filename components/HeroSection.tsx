import { ArrowRight, ChevronDown } from 'lucide-react'

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex flex-col justify-center overflow-hidden bg-[#0A1628]">

      {/* ── Layered background ── */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#08111f] via-[#0F2040] to-[#0d1e3a] pointer-events-none" />
      <div className="absolute inset-0 dot-pattern pointer-events-none opacity-80" />
      <div className="absolute inset-0 hero-grid-lines pointer-events-none" />

      {/* ── Atmospheric glow blobs ── */}
      <div className="absolute -top-48 -right-48 w-[680px] h-[680px] rounded-full bg-gold opacity-[0.055] blur-[120px] pointer-events-none" />
      <div className="absolute bottom-[-80px] -left-48 w-[500px] h-[500px] rounded-full bg-blue-500 opacity-[0.03] blur-[100px] pointer-events-none" />

      {/* ── Bottom rule ── */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />

      {/* ── Main content ── */}
      <div className="relative z-10 max-w-7xl mx-auto w-full px-6 lg:px-10 pt-32 pb-24 flex flex-col lg:flex-row items-start lg:items-center gap-14 lg:gap-12 xl:gap-20">

        {/* Left column */}
        <div className="flex-1 min-w-0">

          {/* Credential badge */}
          <div className="hero-line-1 inline-flex items-center gap-3 mb-10">
            <div className="relative flex-shrink-0 w-2.5 h-2.5">
              <span className="pulse-dot block w-2.5 h-2.5 rounded-full bg-gold" />
            </div>
            <span className="font-jakarta font-bold text-[0.68rem] tracking-[0.18em] text-white/60 uppercase">
              18+ Years · 100+ Alabama Businesses Helped
            </span>
          </div>

          {/* Headline */}
          <h1 className="hero-line-2 font-jakarta font-extrabold text-white leading-[1.0] tracking-[-0.025em] mb-7">
            <span className="block text-5xl sm:text-6xl lg:text-[4.25rem] xl:text-[5.25rem]">Grow Your</span>
            <span className="block text-5xl sm:text-6xl lg:text-[4.25rem] xl:text-[5.25rem]">Small Business.</span>
            <span className="block text-5xl sm:text-6xl lg:text-[4.5rem] xl:text-[5.5rem] text-gold mt-1">Without the&nbsp;Guesswork.</span>
          </h1>

          {/* Sub-copy */}
          <p className="hero-line-3 font-inter text-[1.0625rem] lg:text-lg text-white/60 leading-[1.75] max-w-[520px] mb-11">
            We give Alabama entrepreneurs the strategy, systems, and hands-on
            support they need to build businesses that actually work — backed by
            18+ years of real-world consulting experience.
          </p>

          {/* CTAs */}
          <div className="hero-line-4 flex flex-wrap items-center gap-4 mb-14">
            <a
              href="#contact"
              className="group inline-flex items-center gap-3 bg-gold text-navy font-jakarta font-bold text-[0.9375rem] px-8 py-[1.05rem] rounded-full hover:bg-[#E0BC6B] active:scale-[0.97] transition-all duration-200 shadow-[0_8px_32px_rgba(201,168,76,0.30)]"
            >
              Book Your Free 15-Min Call
              <ArrowRight size={17} strokeWidth={2.5} className="group-hover:translate-x-0.5 transition-transform duration-200" />
            </a>
            <a href="#services" className="inline-flex items-center gap-2 font-jakarta font-semibold text-[0.9375rem] text-white/65 hover:text-white transition-colors duration-200">
              See how we help
              <ArrowRight size={15} strokeWidth={2} />
            </a>
          </div>

          {/* Social proof micro-row */}
          <div className="hero-line-4 flex items-center gap-5">
            <div className="flex -space-x-2.5">
              {['#1a3a6b','#2a4f8a','#1e4578','#264d85'].map((bg, i) => (
                <div key={i} className="w-8 h-8 rounded-full border-2 border-[#0F2040] flex items-center justify-center text-xs font-bold text-white/80 font-jakarta" style={{ backgroundColor: bg }}>
                  {['M','D','J','R'][i]}
                </div>
              ))}
            </div>
            <div className="h-5 w-px bg-white/15" />
            <p className="font-inter text-white/45 text-[0.8125rem] leading-snug">
              Trusted by <span className="text-white/70 font-semibold">100+ business owners</span> across Alabama
            </p>
          </div>
        </div>

        {/* Right column — Stats card */}
        <div className="hero-card w-full max-w-[310px] xl:max-w-[330px] flex-shrink-0 self-center">
          <div className="relative rounded-[1.75rem] p-[1px] bg-gradient-to-br from-white/20 via-gold/25 to-white/5 shadow-[0_0_60px_rgba(201,168,76,0.10)]">
            <div className="relative bg-[#0e1f3e] rounded-[calc(1.75rem-1px)] overflow-hidden">
              <div className="h-[2px] w-full bg-gradient-to-r from-gold via-[#E0BC6B] to-gold/40" />
              <div className="p-7 xl:p-8">
                <p className="font-jakarta font-bold text-[0.65rem] tracking-[0.2em] uppercase text-gold/65 mb-6">
                  Pathway By The Numbers
                </p>
                <div className="divide-y divide-white/[0.07]">
                  {[
                    { number: '18+',  label: 'Years of Experience',  sub: 'In the field. Not the classroom.' },
                    { number: '100+', label: 'Businesses Helped',    sub: 'Across Alabama and beyond.'       },
                    { number: 'Free', label: 'Initial Consultation', sub: 'No pitch. No pressure.'           },
                  ].map((stat, i) => (
                    <div key={i} className="py-5 flex items-center gap-4">
                      <div className="font-jakarta font-extrabold text-[2.1rem] text-gold leading-none tracking-tight min-w-[68px]">
                        {stat.number}
                      </div>
                      <div>
                        <div className="font-jakarta font-semibold text-white text-sm leading-tight mb-0.5">{stat.label}</div>
                        <div className="font-inter text-white/40 text-[0.72rem] leading-snug">{stat.sub}</div>
                      </div>
                    </div>
                  ))}
                </div>
                <div className="mt-5 pt-5 border-t border-white/[0.07]">
                  <a href="#contact" className="block text-center font-jakarta font-bold text-[0.8125rem] text-gold hover:text-[#E0BC6B] transition-colors duration-200 tracking-wide">
                    Start with a free call →
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ── Scroll cue ── */}
      <div className="absolute bottom-9 left-1/2 hero-scroll-cue flex flex-col items-center gap-1.5">
        <span className="font-jakarta text-[0.6rem] tracking-[0.2em] uppercase text-white/25">Scroll</span>
        <ChevronDown size={16} className="text-white/30" />
      </div>
    </section>
  )
}
