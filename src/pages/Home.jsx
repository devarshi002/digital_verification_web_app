import Hero from '../components/Hero.jsx'
import IndustryStrip from '../components/IndustryStrip.jsx'
import WhyUs from '../components/WhyUs.jsx'
import Courses from '../components/Courses.jsx'
import Testimonials from '../components/Testimonials.jsx'
import CTABanner from '../components/CTABanner.jsx'

export default function Home() {
  return (
    <main>
      <Hero />
      <IndustryStrip />
      <WhyUs />
      <Courses />
      <Testimonials />
      <CTABanner />
    </main>
  )
}
