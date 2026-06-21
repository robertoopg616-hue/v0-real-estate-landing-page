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
    deliverables: [
      'Current value valuation report',
      'Debt and equity layout overview',
      'Target home buying power math',
    ],
  },
  {
    icon: ShieldCheck,
    title: 'Stay-Put Guarantee',
    description:
      "Never feel rushed. Our exclusive guarantee means you won't move until your new home is ready. Sell with confidence knowing you're protected.",
    highlight: 'Zero Stress Transition',
    deliverables: [
      'Timeline coordination schedule',
      'Double move risk evaluation',
      'Direct moving day setup',
    ],
  },
  {
    icon: Sparkles,
    title: 'Concierge Prep ($0 Upfront)',
    description:
      'Professional staging, minor repairs, and premium photography—all handled by us with zero out-of-pocket costs. Pay only when your home sells.',
    highlight: 'White-Glove Service',
    deliverables: [
      'High-end furniture staging',
      'Minor repair project coverage',
      'Premium listing photography',
    ],
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
    <section id="features" className="py-24 md:py-32 relative bg-background border-t border-primary/10">
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
          <h2 className="mt-3 text-3xl md:text-4xl lg:text-5xl font-bold text-secondary text-balance font-serif">
            Everything you need to upsize with confidence
          </h2>
          <p className="mt-4 text-lg text-muted-foreground text-pretty">
            Our comprehensive program removes the stress and uncertainty from
            selling your home and finding your dream property.
          </p>
        </motion.div>

        {/* Uniform 3-Column Grid Sequence */}
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
              className="glass-card rounded-[20px] p-8 border border-primary/25 shadow-figma-card bg-white flex flex-col justify-between hover:shadow-lg transition-shadow duration-300 relative"
            >
              <div className="space-y-6">
                {/* Step badge and number structurally forced above the heading */}
                <div className="flex justify-between items-center">
                  <span className="text-4xl lg:text-5xl font-extrabold text-primary/30 font-serif leading-none select-none">
                    0{index + 1}
                  </span>
                  <span className="text-[10px] font-bold text-primary uppercase tracking-widest bg-primary/10 px-3 py-1 rounded-full border border-primary/25">
                    {feature.highlight}
                  </span>
                </div>

                <div className="space-y-3">
                  <div className="flex items-center gap-3 border-t border-border/60 pt-4">
                    <div className="w-10 h-10 rounded-lg bg-primary/15 border border-primary/30 flex items-center justify-center shrink-0">
                      <feature.icon className="size-5 text-primary" />
                    </div>
                    <h3 className="text-xl font-bold text-secondary font-serif leading-snug">
                      {feature.title}
                    </h3>
                  </div>

                  <p className="text-muted-foreground text-xs leading-relaxed">
                    {feature.description}
                  </p>
                </div>

                {/* Deliverables Checklist */}
                <div className="space-y-2 pt-2">
                  <span className="text-[10px] font-bold text-secondary uppercase tracking-wider block">
                    What&apos;s Included:
                  </span>
                  <ul className="space-y-2">
                    {feature.deliverables.map((item, idx) => (
                      <li key={idx} className="flex items-center gap-2 text-xs text-muted-foreground">
                        <span className="w-1.5 h-1.5 rounded-full bg-primary shrink-0" />
                        <span className="font-medium text-secondary/80">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Action Button */}
              <div className="pt-6 mt-6 border-t border-border/60">
                <Button
                  variant="ghost"
                  onClick={onLearnMoreClick}
                  className="text-primary hover:text-primary hover:bg-primary/10 p-0 h-auto font-bold text-sm w-full justify-between group"
                >
                  <span>Explore program details</span>
                  <ArrowRight className="size-4 transform group-hover:translate-x-1 transition-transform" />
                </Button>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
