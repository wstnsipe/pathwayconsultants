'use client'

import { useState } from 'react'
import { ArrowRight, CheckCircle2, Phone, Clock, ShieldCheck } from 'lucide-react'
import RevealSection from './RevealSection'

const WHAT_TO_EXPECT = [
  { icon: Clock,       text: 'A focused 15-minute conversation — no pitch, no pressure, just clarity.' },
  { icon: Phone,       text: "We listen first. You'll do most of the talking in the best way possible." },
  { icon: ShieldCheck, text: "If we're not the right fit, we'll tell you honestly and point you elsewhere." },
]

export default function BookingCTA() {
  const [email, setEmail]         = useState('')
  const [name, setName]           = useState('')
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading]     = useState(false)

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    if (!email) return
    setLoading(true)
    await new Promise(r => setTimeout(r, 900))
    setSubmitted(true)
    setLoading(false)
  }

  return (
    <section id="contact" className="bg-navy py-24 lg:py-32 relative overflow-hidden grain-overlay">
      {/* Decorative background */}
      <div className="absolute inset-0 dot-pattern pointer-events-none opacity-50" />
      <div className="absolute -top-60 left-1/3 w-[700px] h-[700px] rounded-full bg-gold opacity-[0.04] blur-[130px] pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-start">

          {/* ── Left: what to expect ── */}
          <RevealSection>
            <p className="section-label mb-6">Get Started</p>

            <h2 className="font-jakarta font-extrabold text-3xl sm:text-4xl lg:text-[2.75rem] xl:text-5xl text-white leading-[1.05] tracking-tight mb-6">
              Ready to Build a Business That Actually Works?
            </h2>

            <p className="font-inter text-white/60 text-[1.0625rem] leading-relaxed mb-10">
              Start with a free 15-minute call. No pitch, no pressure — just an honest
              conversation about your business and how we can help.
            </p>

            {/* What to expect */}
            <div className="space-y-5 mb-10">
              <p className="font-jakarta font-semibold text-[0.72rem] tracking-[0.16em] uppercase text-gold/70">
                Your free call includes
              </p>
              {WHAT_TO_EXPECT.map(({ icon: Icon, text }, i) => (
                <div key={i} className="flex gap-4 items-start">
                  <div className="w-9 h-9 rounded-xl bg-white/8 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Icon size={16} className="text-gold" strokeWidth={1.8} />
                  </div>
                  <p className="font-inter text-white/65 text-[0.9375rem] leading-relaxed">{text}</p>
                </div>
              ))}
            </div>

            {/* Trust stat row */}
            <div className="flex items-center gap-6 pt-8 border-t border-white/[0.08]">
              {[
                { num: '18+', label: 'Years Experience' },
                { num: '100+', label: 'Businesses Helped' },
              ].map(({ num, label }) => (
                <div key={label}>
                  <div className="font-jakarta font-extrabold text-2xl text-gold leading-none">{num}</div>
                  <div className="font-inter text-white/40 text-xs mt-0.5">{label}</div>
                </div>
              ))}
            </div>
          </RevealSection>

          {/* ── Right: form ── */}
          <RevealSection delay={150}>
            <div className="lg:sticky lg:top-28">
              {submitted ? (
                <div className="bg-white/8 border border-white/15 rounded-3xl p-10 flex flex-col items-center gap-5 text-center">
                  <div className="w-16 h-16 rounded-full bg-gold/15 flex items-center justify-center">
                    <CheckCircle2 size={32} className="text-gold" strokeWidth={1.5} />
                  </div>
                  <div>
                    <h3 className="font-jakarta font-bold text-2xl text-white mb-2">You&apos;re on the list!</h3>
                    <p className="font-inter text-white/55 leading-relaxed text-[0.9375rem]">
                      We&apos;ll reach out within one business day to schedule your free 15-minute call.
                    </p>
                  </div>
                </div>
              ) : (
                <div className="bg-white/[0.07] border border-white/[0.12] rounded-3xl p-7 lg:p-9 backdrop-blur-sm">
                  <h3 className="font-jakarta font-bold text-xl text-white mb-1.5">Book Your Free Call</h3>
                  <p className="font-inter text-white/50 text-sm mb-7">We&apos;ll confirm a time within one business day.</p>

                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div>
                      <label className="font-jakarta font-semibold text-[0.72rem] tracking-[0.12em] uppercase text-white/45 block mb-2">Your Name</label>
                      <input
                        type="text"
                        value={name}
                        onChange={e => setName(e.target.value)}
                        placeholder="Jane Smith"
                        className="w-full bg-white/8 border border-white/15 rounded-xl px-5 py-3.5 font-inter text-white placeholder-white/30 focus:outline-none focus:border-gold/50 focus:bg-white/12 transition-all duration-200 text-sm"
                      />
                    </div>
                    <div>
                      <label className="font-jakarta font-semibold text-[0.72rem] tracking-[0.12em] uppercase text-white/45 block mb-2">Business Email</label>
                      <input
                        type="email"
                        required
                        value={email}
                        onChange={e => setEmail(e.target.value)}
                        placeholder="jane@yourbusiness.com"
                        className="w-full bg-white/8 border border-white/15 rounded-xl px-5 py-3.5 font-inter text-white placeholder-white/30 focus:outline-none focus:border-gold/50 focus:bg-white/12 transition-all duration-200 text-sm"
                      />
                    </div>

                    <button
                      type="submit"
                      disabled={loading}
                      className="w-full mt-2 inline-flex items-center justify-center gap-2.5 bg-gold text-navy font-jakarta font-bold text-[0.9375rem] py-4 rounded-full hover:bg-[#E0BC6B] active:scale-[0.98] transition-all duration-200 shadow-[0_8px_32px_rgba(201,168,76,0.25)] disabled:opacity-70"
                    >
                      {loading ? 'Sending…' : 'Book My Free Call'}
                      {!loading && <ArrowRight size={16} strokeWidth={2.5} />}
                    </button>
                  </form>

                  {/* Guarantee line */}
                  <p className="text-center font-inter text-white/30 text-[0.75rem] mt-5">
                    No commitment. No pitch. Cancel anytime.
                  </p>
                </div>
              )}
            </div>
          </RevealSection>
        </div>
      </div>
    </section>
  )
}
