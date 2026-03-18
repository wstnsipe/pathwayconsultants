import Navbar          from '@/components/Navbar'
import PageHero        from '@/components/PageHero'
import ServicesSection from '@/components/ServicesSection'
import PricingOverview from '@/components/PricingOverview'
import BookingCTA      from '@/components/BookingCTA'
import Footer          from '@/components/Footer'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Services — Pathway Business Consultants',
  description: 'Business strategy, operations optimization, website design, and bookkeeping for Alabama small businesses. Flexible engagements for every stage.',
}

export default function ServicesPage() {
  return (
    <>
      <Navbar />
      <main>
        <PageHero
          label="Our Services"
          title="Everything Your Business Needs to Grow Smarter."
          subtitle="Whether you're launching, stabilizing, or scaling — Pathway has a service built for exactly where you are right now."
        />
        <ServicesSection />
        <PricingOverview />
        <BookingCTA />
      </main>
      <Footer />
    </>
  )
}
