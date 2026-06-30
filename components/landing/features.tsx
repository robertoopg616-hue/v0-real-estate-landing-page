'use client'

import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
import { Button } from '@/components/ui/button'

const features = [
  {
    step: '01',
    title: 'Equity Assessment',
    description: 'Calculate your true home buying power. Our analytical tools assess the net asset value of your current property to unlock your equity before listing, giving you the power to buy first.',
    image: '/hero-house.jpg',
    actionLabel: 'View Buying Power',
  },
  {
    step: '02',
    title: 'Stay-Put Guarantee',
    description: 'Eliminate the risk of double moves. Secure an integrated timeline leaseback agreement that lets your family remain in your current home for up to 45 days post-closing while you acquire your next residence.',
    image: '/webaliser-_TPTXZd9mOo-unsplash.jpg',
    actionLabel: 'Check Timeline Safety',
  },
  {
    step: '03',
    title: 'Concierge Staging',
    description: 'Maximize market returns at zero upfront cost. We fund and coordinate custom staging designs, cosmetic repairs, and visual styling that consistently drive higher net sale proceeds.',
    image: '/staged-interior.png',
    actionLabel: 'See Staging Program',
  },
]

interface FeaturesProps {
  onLearnMoreClick: () => void
}

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.25,
      delayChildren: 0.1,
    }
  }
}

const rowVariantsLeft = {
  hidden: { opacity: 0, x: -40 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.9, ease: [0.16, 1, 0.3, 1] }
  }
}

const rowVariantsRight = {
  hidden: { opacity: 0, x: 40 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.9, ease: [0.16, 1, 0.3, 1] }
  }
}

export function Features({ onLearnMoreClick }: FeaturesProps) {
  return (
    <section id="features" className="py-20 md:py-32 relative bg-background border-t border-neutral-200/60">
      <div className="mx-auto max-w-7xl px-4 sm:px-8 md:px-16">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
          className="text-left max-w-3xl mb-20"
        >
          <span className="text-primary font-bold text-sm uppercase tracking-[0.2em] block mb-3">
            Our Program
          </span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-secondary font-serif leading-[1.1] tracking-tight">
            Everything you need to transition seamlessly.
          </h2>
          <p className="mt-6 text-neutral-500 font-light text-base sm:text-lg max-w-2xl leading-relaxed">
            Explore the core structural steps of our transition program. Designed specifically for growing families upsizing into their next residence.
          </p>
        </motion.div>

        {/* De-boxed, Editorial Alternating Rows with Staggered Scroll Animations */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          className="space-y-0"
        >
          {features.map((feature, idx) => {
            const isEven = idx % 2 === 0
            return (
              <motion.div
                key={feature.title}
                variants={isEven ? rowVariantsLeft : rowVariantsRight}
                className={`py-12 md:py-20 border-t border-neutral-200/60 flex flex-col md:flex-row items-center gap-10 md:gap-16 ${
                  idx % 2 === 1 ? 'md:flex-row-reverse' : ''
                }`}
              >
                {/* Text Info */}
                <div className="w-full md:w-[50%] space-y-6">
                  <span className="text-sm font-extrabold text-primary tracking-[0.25em] uppercase block">
                    Step {feature.step}
                  </span>
                  <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold text-secondary font-serif tracking-tight">
                    {feature.title}
                  </h3>
                  <p className="text-neutral-500 font-light text-sm sm:text-base leading-relaxed">
                    {feature.description}
                  </p>
                  <div className="pt-2">
                    <Button
                      onClick={onLearnMoreClick}
                      className="bg-primary hover:bg-primary/95 text-primary-foreground font-bold text-xs rounded-lg px-6 py-3 border border-primary/30 shadow-md inline-flex items-center gap-2 group transition-all"
                    >
                      <span>{feature.actionLabel}</span>
                      <ArrowRight className="size-4 transform group-hover:translate-x-0.5 transition-transform" />
                    </Button>
                  </div>
                </div>

                {/* Photo Area (No Card Container, Open Layout) */}
                <div className="w-full md:w-[50%] overflow-hidden rounded-xl aspect-[16/10] border border-neutral-200/40 relative shadow-sm">
                  <img
                    src={feature.image}
                    alt={feature.title}
                    className="w-full h-full object-cover object-center hover:scale-[1.03] transition-transform duration-700"
                  />
                </div>
              </motion.div>
            )
          })}
        </motion.div>
      </div>
    </section>
  )
}
