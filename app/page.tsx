import { Header } from '@/components/landing/header'
import { Hero } from '@/components/landing/hero'
import { Features } from '@/components/landing/features'
import { Pricing } from '@/components/landing/pricing'
import { Testimonials } from '@/components/landing/testimonials'
import { CaseStudy } from '@/components/landing/case-study'
import { FAQ } from '@/components/landing/faq'
import { ContactForm } from '@/components/landing/contact-form'
import { Footer } from '@/components/landing/footer'

export default function HomePage() {
  return (
    <main className="relative">
      <Header />
      <Hero />
      <Features />
      <Pricing />
      <Testimonials />
      <CaseStudy />
      <FAQ />
      <ContactForm />
      <Footer />
    </main>
  )
}
