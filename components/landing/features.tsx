'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { Calculator, ShieldCheck, Sparkles, ArrowRight } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { ContactModal } from '@/components/modals/contact-modal'
import { LearnMoreModal } from '@/components/modals/learn-more-modal'

const features = [
  {
    icon: Calculator,
    title: 'Equity Unlock Assessment',
    description:
      'Get a comprehensive analysis of your current equity position and discover how much buying power you actually have. No guesswork, just data-driven clarity.',
    highlight: 'Know Your Numbers',
  },
  {
    icon: ShieldCheck,
    title: 'Stay-Put Guarantee',
    description:
      "Never feel rushed. Our exclusive guarantee means you won't move until your new home is ready. Sell with confidence knowing you're protected.",
    highlight: 'Zero Stress Transition',
  },
  {
    icon: Sparkles,
    title: 'Concierge Prep ($0 Upfront)',
    description:
      'Professional staging, minor repairs, and premium photography—all handled by us with zero out-of-pocket costs. Pay only when your home sells.',
    highlight: 'White-Glove Service',
  },
]

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
    },
  },
}

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: 'easeOut' },
  },
}

export function Features() {
  const [isLearnMoreOpen, setIsLearnMoreOpen] = useState(false)
  const [isContactModalOpen, setIsContactModalOpen] = useState(false)

  return (
    <section id="features" className="py-24 md:py-32 relative">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <span className="text-primary font-semibold text-sm uppercase tracking-wider">
            Our Program
          </span>
          <h2 className="mt-3 text-3xl md:text-4xl lg:text-5xl font-bold text-foreground text-balance">
            Everything you need to upsize with confidence
          </h2>
          <p className="mt-4 text-lg text-muted-foreground text-pretty">
            Our comprehensive program removes the stress and uncertainty from
            selling your home and finding your dream property.
          </p>
        </motion.div>

        {/* Features Timeline Stepper */}
        <div className="max-w-3xl mx-auto relative pl-6 sm:pl-12 ml-4 sm:ml-8 border-l border-white/10 space-y-16 py-4">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              className="relative group pl-6 sm:pl-8"
            >
              {/* Floating Step Icon Bubble */}
              <div className="absolute -left-[51px] sm:-left-[77px] top-0 w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-background border border-white/10 group-hover:border-primary/40 flex items-center justify-center shadow-lg transition-colors z-10">
                <feature.icon className="size-6 text-primary group-hover:scale-110 transition-transform" />
              </div>

              <div className="space-y-3">
                {/* Step number and highlight */}
                <div className="flex items-center gap-3">
                  <span className="text-xs font-bold text-primary uppercase tracking-widest bg-primary/10 border border-primary/20 px-2.5 py-0.5 rounded-full">
                    Step 0{index + 1}
                  </span>
                  <span className="text-xs font-semibold text-muted-foreground uppercase tracking-wider">
                    {feature.highlight}
                  </span>
                </div>

                {/* Title */}
                <h3 className="text-xl sm:text-2xl font-bold text-foreground group-hover:text-primary transition-colors">
                  {feature.title}
                </h3>

                {/* Description */}
                <p className="text-muted-foreground text-sm sm:text-base leading-relaxed max-w-2xl">
                  {feature.description}
                </p>

                {/* Learn More Button */}
                <div className="pt-2">
                  <Button
                    variant="ghost"
                    onClick={() => setIsLearnMoreOpen(true)}
                    className="text-primary hover:text-primary hover:bg-primary/10 p-0 h-auto font-semibold text-sm"
                  >
                    Learn More
                    <ArrowRight className="ml-1 size-4" />
                  </Button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Modals */}
      <LearnMoreModal
        isOpen={isLearnMoreOpen}
        onClose={() => setIsLearnMoreOpen(false)}
        onContactClick={() => setIsContactModalOpen(true)}
      />
      <ContactModal
        isOpen={isContactModalOpen}
        onClose={() => setIsContactModalOpen(false)}
      />
    </section>
  )
}
