'use client'

import { useState } from 'react'
import { Header } from '@/components/landing/header'
import { Hero } from '@/components/landing/hero'
import { StatsSection } from '@/components/landing/stats-section'
import { Features } from '@/components/landing/features'
import { Listings } from '@/components/landing/listings'
import { Pricing } from '@/components/landing/pricing'
import { Testimonials } from '@/components/landing/testimonials'
import { CaseStudy } from '@/components/landing/case-study'
import { FAQ } from '@/components/landing/faq'
import { ContactForm } from '@/components/landing/contact-form'
import { CTASection } from '@/components/landing/cta-section'
import { Footer } from '@/components/landing/footer'
import { ContactModal } from '@/components/modals/contact-modal'
import { LearnMoreModal } from '@/components/modals/learn-more-modal'
import { PropertyDetailsModal } from '@/components/modals/property-details-modal'
import type { Property } from '@/components/modals/property-details-modal'

export default function HomePage() {
  const [isContactOpen, setIsContactOpen] = useState(false)
  const [isLearnMoreOpen, setIsLearnMoreOpen] = useState(false)
  const [activeStoryIndex, setActiveStoryIndex] = useState(0)
  const [selectedProperty, setSelectedProperty] = useState<Property | null>(null)
  const [isPropertyModalOpen, setIsPropertyModalOpen] = useState(false)

  const handleContactClick = () => {
    setIsContactOpen(true)
  }

  const handleLearnMoreClick = () => {
    setIsLearnMoreOpen(true)
  }

  const handlePropertyClick = (property: Property) => {
    setSelectedProperty(property)
    setIsPropertyModalOpen(true)
  }

  return (
    <main className="relative bg-background text-foreground min-h-screen">
      {/* Grid watermark background pattern overlay */}
      <div className="absolute inset-0 grid-watermark pointer-events-none z-0" />

      <div className="relative z-10">
        <Header onContactClick={handleContactClick} />
        <Hero onContactClick={handleContactClick} />
        <StatsSection />
        <Features onLearnMoreClick={handleLearnMoreClick} />
        <Listings onPropertyClick={handlePropertyClick} />
        <Pricing onContactClick={handleContactClick} />
        <Testimonials 
          onContactClick={handleContactClick} 
          activeStoryIndex={activeStoryIndex}
          setActiveStoryIndex={setActiveStoryIndex}
        />
        <CaseStudy 
          onContactClick={handleContactClick} 
          activeStoryIndex={activeStoryIndex}
        />
        <ContactForm />
        <CTASection onContactClick={handleContactClick} />
        <FAQ />
        <Footer onContactClick={handleContactClick} />
      </div>

      {/* Modals */}
      <ContactModal isOpen={isContactOpen} onClose={() => setIsContactOpen(false)} />
      <LearnMoreModal 
        isOpen={isLearnMoreOpen} 
        onClose={() => setIsLearnMoreOpen(false)} 
        onContactClick={handleContactClick} 
      />
      <PropertyDetailsModal
        isOpen={isPropertyModalOpen}
        onClose={() => setIsPropertyModalOpen(false)}
        onLearnMoreClick={handleLearnMoreClick}
        property={selectedProperty}
      />
    </main>
  )
}
