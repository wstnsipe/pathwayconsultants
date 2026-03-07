import { XCircle, CheckCircle2 } from 'lucide-react'
import RevealSection from './RevealSection'

const PAINS = [
  "You're working hard but can't tell if you're moving in the right direction.",
  "Operations feel chaotic — you can't step away without things falling apart.",
  "You've tried different things, but nothing has created lasting growth.",
  "Revenue is unpredictable and there's no clear roadmap to change that.",
]

const SOLUTIONS = [
  "We audit what's working and cut what isn't — fast, with clear recommendations.",
  "We build operational systems so your business runs without you in every decision.",
  "We create a focused strategy built for your business, not a copy-paste template.",
  "We build predictable revenue models so growth becomes a system, not a gamble.",
]

export default function ProblemSolution() {
  return (
    <section id="about" className="bg-cream py-24 lg:py-32">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">

        {/* Section header */}
        <RevealSection className="text-center mb-16">
          <p className="section-label mb-4">The Real Problem</p>
          <h2 className="font-jakarta font-extrabold text-3xl sm:text-4xl lg:text-5xl text-heading max-w-3xl mx-auto leading-tight tracking-tight">
            Most Small Businesses Struggle — Not Because the Owner Isn&apos;t Working Hard
          </h2>
          <p className="font-inter text-body text-lg mt-5 max-w-2xl mx-auto leading-relaxed">
            But because no one gave them a clear path forward. That&apos;s what Pathway changes.
          </p>
        </RevealSection>

        {/* Two-column grid */}
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 mb-14">

          {/* Pain column */}
          <RevealSection delay={100}>
            <div className="bg-white rounded-3xl border border-gray-100 p-8 lg:p-10 shadow-sm h-full">
              <div className="flex items-center gap-3 mb-7">
                <div className="w-9 h-9 rounded-xl bg-red-50 flex items-center justify-center">
                  <XCircle size={18} className="text-red-400" />
                </div>
                <h3 className="font-jakarta font-bold text-lg text-heading">
                  Without a clear strategy…
                </h3>
              </div>
              <ul className="space-y-5">
                {PAINS.map((pain, i) => (
                  <li key={i} className="flex gap-4">
                    <XCircle
                      size={18}
                      className="text-red-400 mt-0.5 flex-shrink-0"
                      strokeWidth={1.8}
                    />
                    <span className="font-inter text-body leading-relaxed">{pain}</span>
                  </li>
                ))}
              </ul>
            </div>
          </RevealSection>

          {/* Solution column */}
          <RevealSection delay={200}>
            <div className="bg-navy rounded-3xl p-8 lg:p-10 shadow-lg h-full">
              <div className="flex items-center gap-3 mb-7">
                <div className="w-9 h-9 rounded-xl bg-gold/20 flex items-center justify-center">
                  <CheckCircle2 size={18} className="text-gold" />
                </div>
                <h3 className="font-jakarta font-bold text-lg text-white">
                  With Pathway, you get…
                </h3>
              </div>
              <ul className="space-y-5">
                {SOLUTIONS.map((sol, i) => (
                  <li key={i} className="flex gap-4">
                    <CheckCircle2
                      size={18}
                      className="text-gold mt-0.5 flex-shrink-0"
                      strokeWidth={1.8}
                    />
                    <span className="font-inter text-white/75 leading-relaxed">{sol}</span>
                  </li>
                ))}
              </ul>
            </div>
          </RevealSection>
        </div>

        {/* Closing line */}
        <RevealSection delay={300} className="text-center">
          <div className="inline-block bg-white border border-gray-200 rounded-2xl px-8 py-5 shadow-sm">
            <p className="font-jakarta font-semibold text-lg text-heading">
              That&apos;s what Pathway does.{' '}
              <span className="text-gold">Every client. Every time.</span>
            </p>
          </div>
        </RevealSection>
      </div>
    </section>
  )
}
