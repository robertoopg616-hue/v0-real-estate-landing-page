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

        {/* Features Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          className="grid md:grid-cols-3 gap-6 lg:gap-8"
        >
          {features.map((feature) => (
            <motion.div
              key={feature.title}
              variants={itemVariants}
              className="group glow-card rounded-[10px] shadow-figma-card p-8 border border-white/5"
            >
              {/* Icon */}
              <div className="inline-flex items-center justify-center w-14 h-14 rounded-[10px] bg-primary/10 group-hover:bg-primary/20 transition-colors mb-6">
                <feature.icon className="size-7 text-primary" />
              </div>

              {/* Highlight Badge */}
              <span className="inline-block text-xs font-semibold text-primary uppercase tracking-wider mb-3">
                {feature.highlight}
              </span>

              {/* Title */}
              <h3 className="text-xl font-bold text-foreground mb-3">
                {feature.title}
              </h3>

              {/* Description */}
              <p className="text-muted-foreground leading-relaxed mb-4">
                {feature.description}
              </p>

              {/* Learn More Button */}
              <Button
                variant="ghost"
                onClick={() => setIsLearnMoreOpen(true)}
                className="text-primary hover:text-primary hover:bg-primary/10 p-0 h-auto font-semibold text-sm"
              >
                Learn More
                <ArrowRight className="ml-1 size-4" />
              </Button>
            </motion.div>
          ))}
        </motion.div>
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
