import Navbar          from '@/components/Navbar'
import PageHero        from '@/components/PageHero'
import ProblemSolution from '@/components/ProblemSolution'
import WhyPathway      from '@/components/WhyPathway'
import ProcessSection  from '@/components/ProcessSection'
import BookingCTA      from '@/components/BookingCTA'
import Footer          from '@/components/Footer'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'About — Pathway Business Consultants',
  description: '18+ years helping Alabama small businesses grow with strategy, clarity, and hands-on support. Learn who we are and how we work.',
}

export default function AboutPage() {
  return (
    <>
      <Navbar />
      <main>
        <PageHero
          label="About Pathway"
          title="We're Not Consultants Who Disappear After the Deck."
          subtitle="Pathway was built for business owners who need real answers, real plans, and real support — not more theory. Here's who we are and how we work."
          image={{ src: '/images/founder.jpg', alt: 'Pathway Business Consultants founder' }}
        />
        <ProblemSolution />
        <WhyPathway />
        <ProcessSection />
        <BookingCTA />
      </main>
      <Footer />
    </>
  )
}
