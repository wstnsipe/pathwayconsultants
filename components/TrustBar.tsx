import { ShieldCheck, Users, Clock, MapPin } from 'lucide-react'
import Image from 'next/image'
import RevealSection from './RevealSection'

const STATS = [
  { icon: Clock,       number: '18+',  label: 'Years Experience',    detail: 'Proven track record'        },
  { icon: Users,       number: '100+', label: 'Businesses Helped',   detail: 'Across multiple industries' },
  { icon: ShieldCheck, number: 'Free', label: '15-Min Consultation', detail: 'No commitment required'     },
  { icon: MapPin,      number: 'AL',   label: 'Alabama Based',       detail: 'Serving clients nationwide' },
]

export default function TrustBar() {
  return (
    <section className="bg-warm border-y border-[#E5DFD5]">
      <div className="max-w-7xl mx-auto px-6 lg:px-10 py-12">
        <RevealSection>
          <div className="flex flex-col lg:flex-row lg:items-center gap-8 lg:gap-0">

            {/* Stats */}
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-0 flex-1">
              {STATS.map(({ icon: Icon, number, label, detail }, i) => (
                <div
                  key={i}
                  className={`flex items-center gap-4 ${
                    i < STATS.length - 1 ? 'lg:pr-8 lg:border-r lg:border-[#D8D2C9]' : ''
                  } ${i > 0 ? 'lg:pl-8' : ''}`}
                >
                  <div className="flex-shrink-0 w-11 h-11 rounded-xl bg-gold/10 flex items-center justify-center">
                    <Icon size={20} className="text-gold" strokeWidth={1.8} />
                  </div>
                  <div>
                    <div className="font-jakarta font-extrabold text-2xl text-navy leading-none mb-0.5">{number}</div>
                    <div className="font-jakarta font-semibold text-heading text-sm leading-none mb-0.5">{label}</div>
                    <div className="font-inter text-body text-xs">{detail}</div>
                  </div>
                </div>
              ))}
            </div>

            {/* AASBC Credential badge */}
            <div className="lg:pl-8 lg:border-l lg:border-[#D8D2C9] flex items-center gap-4 flex-shrink-0">
              <div className="w-11 h-11 rounded-xl bg-white border border-[#E5DFD5] flex items-center justify-center flex-shrink-0 overflow-hidden">
                <Image
                  src="/images/credential-aasbc.jpg"
                  alt="AASBC Certified"
                  width={40}
                  height={40}
                  className="object-contain p-0.5"
                />
              </div>
              <div>
                <div className="font-jakarta font-extrabold text-sm text-navy leading-none mb-0.5">AASBC</div>
                <div className="font-jakarta font-semibold text-heading text-sm leading-none mb-0.5">Certified Member</div>
                <div className="font-inter text-body text-xs">Accredited association</div>
              </div>
            </div>

          </div>
        </RevealSection>
      </div>
    </section>
  )
}
