import Navbar        from '@/components/Navbar'
import PageHero      from '@/components/PageHero'
import FeaturedResult from '@/components/FeaturedResult'
import Testimonials  from '@/components/Testimonials'
import BookingCTA    from '@/components/BookingCTA'
import Footer        from '@/components/Footer'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Testimonials — Pathway Business Consultants',
  description: 'Real results from real Alabama business owners. See what clients say about working with Pathway Business Consultants.',
}

export default function TestimonialsPage() {
  return (
    <>
      <Navbar />
      <main>
        <PageHero
          label="Client Results"
          title="Real Businesses. Real Results. Real Words."
          subtitle="100+ Alabama business owners have trusted Pathway with their growth. Here's what happened."
        />
        <FeaturedResult />
        <Testimonials />
        <BookingCTA />
      </main>
      <Footer />
    </>
  )
}
