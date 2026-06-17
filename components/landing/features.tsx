'use client'

import { motion } from 'framer-motion'
import { Calculator, ShieldCheck, Sparkles, ArrowRight } from 'lucide-react'
import { Button } from '@/components/ui/button'

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

interface FeaturesProps {
  onLearnMoreClick: () => void
}

export function Features({ onLearnMoreClick }: FeaturesProps) {
  return (
    <section id="features" className="py-24 md:py-32 relative bg-background">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <span className="text-primary font-bold text-sm uppercase tracking-wider">
            Our Program
          </span>
          <h2 className="mt-3 text-3xl md:text-4xl lg:text-5xl font-extrabold text-secondary text-balance">
            Everything you need to upsize with confidence
          </h2>
          <p className="mt-4 text-lg text-muted-foreground text-pretty">
            Our comprehensive program removes the stress and uncertainty from
            selling your home and finding your dream property.
          </p>
        </motion.div>

        {/* 3-column light glass-effect card grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          className="grid md:grid-cols-3 gap-8"
        >
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              variants={itemVariants}
              className="glass-card rounded-2xl p-8 border border-primary/20 shadow-figma-card glow-card flex flex-col justify-between"
            >
              <div className="space-y-4">
                {/* Floating Step Icon Bubble */}
                <div className="w-12 h-12 rounded-full bg-primary/10 border border-primary/25 flex items-center justify-center">
                  <feature.icon className="size-6 text-primary" />
                </div>

                <div className="space-y-2">
                  {/* Step tag */}
                  <div className="flex items-center gap-3">
                    <span className="text-[10px] font-bold text-secondary uppercase tracking-widest bg-primary/10 px-2 py-0.5 rounded-full border border-primary/20">
                      Step 0{index + 1}
                    </span>
                    <span className="text-[10px] font-bold text-muted-foreground uppercase tracking-wider">
                      {feature.highlight}
                    </span>
                  </div>

                  {/* Title */}
                  <h3 className="text-xl font-extrabold text-secondary font-sans leading-snug">
                    {feature.title}
                  </h3>

                  {/* Description */}
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </div>

              {/* Learn More Button */}
              <div className="pt-6 border-t border-border/10 mt-6">
                <Button
                  variant="ghost"
                  onClick={onLearnMoreClick}
                  className="text-primary hover:text-primary hover:bg-primary/10 p-0 h-auto font-bold text-sm"
                >
                  Learn More
                  <ArrowRight className="ml-1.5 size-4" />
                </Button>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
