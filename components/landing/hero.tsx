'use client'

import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
import { Button } from '@/components/ui/button'

const fadeInUp = {
  initial: { opacity: 0, y: 30 },
  animate: { opacity: 1, y: 0 },
}

interface HeroProps {
  onContactClick: () => void
}

export function Hero({ onContactClick }: HeroProps) {
  return (
    <section className="relative min-h-screen flex items-center pt-16 overflow-hidden bg-secondary">
      {/* Absolute Full-Bleed Background Image & Dark/Fog Overlay Mask */}
      <div className="absolute inset-0 z-0">
        <img 
          src="/webaliser-_TPTXZd9mOo-unsplash.jpg" 
          alt="Modern luxury real estate villa background" 
          className="w-full h-full object-cover object-center"
          loading="eager"
        />
        {/* Mobile: light fog overlay mask */}
        <div className="absolute inset-0 bg-white/85 backdrop-blur-[1px] md:hidden" />
        {/* Desktop: subtle linear-gradient overlay mask (darkening for contrast) */}
        <div className="hidden md:block absolute inset-0 bg-gradient-to-r from-black/90 via-black/60 to-black/30 lg:to-transparent" />
        <div className="hidden md:block absolute inset-0 bg-black/40 lg:bg-transparent" />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20 md:py-24 z-10 w-full">
        <div className="max-w-2xl text-left space-y-6">
          {/* Headline */}
          <motion.h1
            {...fadeInUp}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl sm:text-5xl lg:text-[3.75rem] font-bold tracking-tight text-white max-md:text-[#1a1a1a] leading-[1.12] text-balance font-serif"
          >
            Sell your current home for top dollar and move into your next one seamlessly.
          </motion.h1>

          {/* Subheadline */}
          <motion.p
            {...fadeInUp}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-base sm:text-lg lg:text-xl text-slate-200/90 max-md:text-[#1a1a1a]/90 leading-relaxed max-w-xl text-pretty font-medium"
          >
            We handle the logistics, fund your property's cosmetic staging upfront, and coordinate timelines so you never have to move twice.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            {...fadeInUp}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-4 w-full sm:w-auto"
          >
            <Button
              size="lg"
              onClick={onContactClick}
              className="bg-primary hover:bg-primary/95 text-primary-foreground font-bold text-base px-8 py-6 rounded-lg shadow-lg shadow-primary/20 transition-all border border-primary/40 w-full sm:w-auto justify-center"
            >
              Get a Free Property Consultation
              <ArrowRight className="ml-2 size-5" />
            </Button>
            <Button
              variant="outline"
              size="lg"
              onClick={() => {
                const el = document.querySelector('#features')
                el?.scrollIntoView({ behavior: 'smooth' })
              }}
              className="text-white border-white/30 hover:bg-white hover:text-secondary font-bold text-base px-8 py-6 rounded-lg transition-colors bg-white/5 backdrop-blur-sm w-full sm:w-auto max-md:text-[#1a1a1a] max-md:border-[#1a1a1a]/30 max-md:bg-transparent max-md:hover:bg-[#1a1a1a] max-md:hover:text-white justify-center"
            >
              See How It Works
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
