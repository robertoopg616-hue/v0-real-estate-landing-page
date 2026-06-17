'use client'

import { motion } from 'framer-motion'
import { ArrowRight, Home, TrendingUp, Clock, CheckCircle2 } from 'lucide-react'
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
    <section className="relative min-h-screen flex flex-col justify-center pt-20 overflow-hidden bg-background">
      {/* Background graphic elements (Soft gold and green ambient light) */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none z-0 opacity-20">
        <div className="absolute top-[10%] left-[20%] w-[350px] h-[350px] rounded-full bg-primary/10 blur-[90px] animate-float-1" />
        <div className="absolute top-[35%] right-[15%] w-[450px] h-[450px] rounded-full bg-secondary/10 blur-[110px] animate-float-2" />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20 md:py-28 z-10">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: Content */}
          <div className="lg:col-span-6 text-left space-y-6">
            {/* Headline */}
            <motion.h1
              {...fadeInUp}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-4xl sm:text-5xl lg:text-[3.5rem] font-extrabold tracking-tight text-secondary leading-[1.15] text-balance font-sans"
            >
              Outgrow your home,{' '}
              <span className="text-primary block sm:inline">not your peace of mind.</span>
            </motion.h1>

            {/* Subheadline */}
            <motion.p
              {...fadeInUp}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-base sm:text-lg text-muted-foreground leading-relaxed max-w-xl text-pretty font-medium"
            >
              Expert guidance to sell your property for top dollar and transition into
              your dream home seamlessly. We handle the timing so you never move twice.
            </motion.p>

            {/* Low-Contrast Horizontal Metric Summary Row */}


            {/* CTA Buttons */}
            <motion.div
              {...fadeInUp}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-2"
            >
              <Button
                size="lg"
                onClick={onContactClick}
                className="bg-primary hover:bg-primary/90 text-primary-foreground font-bold text-base px-8 py-6 rounded-lg shadow-lg shadow-primary/10 transition-all border border-primary/30"
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
                className="text-secondary border-border hover:bg-secondary hover:text-secondary-foreground font-bold text-base px-8 py-6 rounded-lg"
              >
                See How It Works
              </Button>
            </motion.div>
          </div>

          {/* Right Column: Visual Hook Image */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut', delay: 0.2 }}
            className="lg:col-span-6 relative w-full"
          >
            {/* Ambient glow behind image */}
            <div className="absolute -inset-4 rounded-[30px] bg-gradient-to-tr from-primary/10 to-secondary/5 blur-2xl opacity-75 z-0" />
            
            <div className="relative rounded-[24px] overflow-hidden border border-primary/25 shadow-2xl z-10 aspect-square sm:aspect-[4/3] lg:aspect-[4/3] bg-muted">
              <img 
                src="/hero-house.jpg" 
                alt="Modern luxury real estate villa" 
                className="w-full h-full object-cover object-center transform hover:scale-105 transition-transform duration-700 select-none"
                loading="eager"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
