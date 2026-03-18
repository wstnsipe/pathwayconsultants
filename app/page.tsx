import Navbar          from '@/components/Navbar'
import HeroSection     from '@/components/HeroSection'
import TrustBar        from '@/components/TrustBar'
import ServicesPreview from '@/components/ServicesPreview'
import Testimonials    from '@/components/Testimonials'
import BookingCTA      from '@/components/BookingCTA'
import Footer          from '@/components/Footer'

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <HeroSection />
        <TrustBar />
        <ServicesPreview />
        <Testimonials />
        <BookingCTA />
      </main>
      <Footer />
    </>
  )
}
