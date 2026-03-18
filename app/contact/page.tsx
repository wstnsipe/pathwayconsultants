import Navbar     from '@/components/Navbar'
import BookingCTA from '@/components/BookingCTA'
import Footer     from '@/components/Footer'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Contact — Pathway Business Consultants',
  description: 'Book your free 15-minute consultation with Pathway Business Consultants. No pitch, no pressure — just an honest conversation about your business.',
}

export default function ContactPage() {
  return (
    <>
      <Navbar />
      <main className="pt-20">
        <BookingCTA />
      </main>
      <Footer />
    </>
  )
}
