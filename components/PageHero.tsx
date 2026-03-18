import Image from 'next/image'
import RevealSection from './RevealSection'

interface PageHeroProps {
  label: string
  title: string
  subtitle?: string
  image?: { src: string; alt: string }
}

export default function PageHero({ label, title, subtitle, image }: PageHeroProps) {
  return (
    <section className="relative bg-navy pt-36 pb-20 lg:pt-44 lg:pb-28 overflow-hidden">
      <div className="absolute inset-0 dot-pattern opacity-50 pointer-events-none" />
      <div className="absolute -top-32 -right-32 w-96 h-96 rounded-full bg-gold opacity-[0.05] blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-10">
        <div className={`flex flex-col ${image ? 'lg:flex-row lg:items-center lg:gap-16' : ''}`}>

          {/* Text */}
          <div className={image ? 'flex-1' : ''}>
            <RevealSection>
              <p className="section-label mb-5">{label}</p>
              <h1 className="font-jakarta font-extrabold text-4xl sm:text-5xl lg:text-6xl text-white leading-[1.05] tracking-tight max-w-3xl">
                {title}
              </h1>
              {subtitle && (
                <p className="font-inter text-white/60 text-lg leading-relaxed mt-5 max-w-2xl">
                  {subtitle}
                </p>
              )}
              <div className="gold-line mt-8" />
            </RevealSection>
          </div>

          {/* Optional image — shown on About page */}
          {image && (
            <RevealSection delay={150} className="mt-10 lg:mt-0 flex-shrink-0">
              <div className="relative w-full max-w-[280px] mx-auto lg:mx-0">
                {/* Decorative border frame */}
                <div className="absolute -inset-2 rounded-[1.5rem] border border-gold/20" />
                <div className="relative rounded-[1.25rem] overflow-hidden aspect-[3/4]">
                  <Image
                    src={image.src}
                    alt={image.alt}
                    fill
                    sizes="280px"
                    className="object-cover object-top"
                    priority
                  />
                  {/* Bottom fade */}
                  <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-navy/60 to-transparent" />
                </div>
                {/* Floating credential chip */}
                <div className="absolute -bottom-4 -left-4 bg-gold text-navy font-jakarta font-bold text-xs px-4 py-2 rounded-full shadow-lg">
                  18+ Years Experience
                </div>
              </div>
            </RevealSection>
          )}

        </div>
      </div>
    </section>
  )
}
