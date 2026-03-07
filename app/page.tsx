import Navbar          from '@/components/Navbar'
import HeroSection     from '@/components/HeroSection'
import TrustBar        from '@/components/TrustBar'
import ProblemSolution from '@/components/ProblemSolution'
import ServicesSection from '@/components/ServicesSection'
import ProcessSection  from '@/components/ProcessSection'
import FeaturedResult  from '@/components/FeaturedResult'
import WhyPathway      from '@/components/WhyPathway'
import Testimonials    from '@/components/Testimonials'
import PricingOverview from '@/components/PricingOverview'
import BookingCTA      from '@/components/BookingCTA'
import Footer          from '@/components/Footer'

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <HeroSection />
        <TrustBar />
        <ProblemSolution />
        <ServicesSection />
        <ProcessSection />
        <FeaturedResult />
        <WhyPathway />
        <Testimonials />
        <PricingOverview />
        <BookingCTA />
      </main>
      <Footer />
    </>
  )
}
