import RevealSection from './RevealSection'

const DIFFERENTIATORS = [
  {
    number: '01',
    label: '18+ Years in the Trenches',
    description: "We've guided hundreds of small businesses through the real challenges of growth — not in theory, but on the ground. That depth means faster diagnosis and smarter solutions.",
  },
  {
    number: '02',
    label: 'No Cookie-Cutter Plans',
    description: "Every engagement starts with listening. We build strategies around your specific business, your market, and your goals — not a recycled template handed to a dozen other clients.",
  },
  {
    number: '03',
    label: 'Hands-On Until It Works',
    description: "We don't hand you a report and disappear. We stay involved, track progress, and adapt alongside you. Our definition of done is your definition of done: measurable results.",
  },
  {
    number: '04',
    label: 'Alabama Roots. Broad Expertise.',
    description: "We understand the Alabama business landscape from the inside — local markets, regional dynamics, community relationships — combined with strategies that work in any market.",
  },
]

export default function WhyPathway() {
  return (
    <section className="bg-cream py-24 lg:py-32">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">

        {/* Header */}
        <RevealSection className="mb-14 lg:mb-18">
          <div className="flex flex-col lg:flex-row lg:items-end gap-6 lg:gap-20">
            <div className="flex-1">
              <p className="section-label mb-5">Why Us</p>
              <h2 className="font-jakarta font-extrabold text-3xl sm:text-4xl lg:text-5xl text-heading leading-[1.08] tracking-tight max-w-xl">
                We&apos;re Not Consultants Who Disappear After the Deck.
              </h2>
            </div>
            <p className="font-inter text-body leading-relaxed max-w-sm text-[0.9375rem] lg:pb-2">
              Pathway was built for business owners who need real answers, real plans, and real support — not more theory.
            </p>
          </div>
          <div className="gold-line mt-8" />
        </RevealSection>

        {/* Editorial numbered grid */}
        <div className="grid sm:grid-cols-2 gap-px bg-gray-100 rounded-2xl overflow-hidden border border-gray-100">
          {DIFFERENTIATORS.map(({ number, label, description }, i) => (
            <RevealSection key={i} delay={i * 70}>
              <div className="group bg-white hover:bg-[#FAFAF7] p-8 lg:p-10 h-full flex flex-col transition-colors duration-200 relative overflow-hidden">
                {/* Number watermark */}
                <div className="number-watermark absolute bottom-2 right-4" aria-hidden>{number}</div>

                {/* Visible number label */}
                <div className="font-jakarta font-extrabold text-[0.7rem] tracking-[0.18em] text-gold mb-5 uppercase">
                  {number}
                </div>

                <h3 className="font-jakarta font-bold text-[1.1rem] lg:text-xl text-heading mb-4 leading-snug relative z-10">
                  {label}
                </h3>
                <p className="font-inter text-body leading-relaxed text-[0.9375rem] relative z-10">
                  {description}
                </p>

                {/* Hover left accent */}
                <div className="absolute left-0 top-0 bottom-0 w-[3px] bg-gold scale-y-0 group-hover:scale-y-100 origin-bottom transition-transform duration-300 rounded-r-sm" />
              </div>
            </RevealSection>
          ))}
        </div>
      </div>
    </section>
  )
}
