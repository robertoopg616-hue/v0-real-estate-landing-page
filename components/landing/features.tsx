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

        {/* Alternating Asymmetric Editorial Timeline Layout (No rigid cards) */}
        <div className="mt-20 space-y-24 md:space-y-32">
          {features.map((feature, index) => {
            const isEven = index % 2 === 0
            return (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-100px' }}
                transition={{ duration: 0.7, ease: 'easeOut' }}
                className="grid md:grid-cols-12 gap-8 md:gap-16 items-center"
              >
                {/* Content Column */}
                <div className={`md:col-span-6 space-y-6 ${isEven ? 'md:order-1' : 'md:order-2'}`}>
                  <div className="flex items-center gap-4">
                    <span className="text-4xl md:text-5xl font-extrabold text-primary/30 font-serif leading-none select-none">
                      0{index + 1}
                    </span>
                    <span className="text-[10px] font-bold text-primary uppercase tracking-widest bg-primary/10 px-3 py-1 rounded-full border border-primary/20">
                      {feature.highlight}
                    </span>
                  </div>
                  <h3 className="text-2xl md:text-3xl font-bold text-secondary font-serif leading-tight">
                    {feature.title}
                  </h3>
                  <p className="text-muted-foreground text-sm sm:text-base leading-relaxed">
                    {feature.description}
                  </p>
                  <div className="pt-2">
                    <Button
                      variant="ghost"
                      onClick={onLearnMoreClick}
                      className="text-primary hover:text-primary hover:bg-primary/10 p-0 h-auto font-bold text-base group transition-all"
                    >
                      Explore Details
                      <ArrowRight className="ml-2 size-4 transform group-hover:translate-x-1 transition-transform" />
                    </Button>
                  </div>
                </div>

                {/* Visual Accent Column */}
                <div className={`md:col-span-6 ${isEven ? 'md:order-2' : 'md:order-1'}`}>
                  <div className="relative p-6 sm:p-8 md:p-10 rounded-2xl md:rounded-3xl bg-secondary/5 border border-primary/10 overflow-hidden flex flex-col justify-center min-h-[200px]">
                    {/* Architectural gold motif background */}
                    <div className="absolute inset-0 opacity-[0.03] pointer-events-none select-none bg-[radial-gradient(#000000_1px,transparent_1px)] [background-size:16px_16px]" />
                    <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-full blur-3xl pointer-events-none" />
                    
                    <div className="relative flex gap-4 items-start">
                      <div className="w-12 h-12 rounded-xl bg-primary/15 border border-primary/35 flex items-center justify-center shrink-0">
                        <feature.icon className="size-6 text-primary" />
                      </div>
                      <div className="space-y-1">
                        <span className="block text-[10px] font-bold text-muted-foreground uppercase tracking-widest">
                          Key Program Pillar
                        </span>
                        <span className="text-base sm:text-lg font-bold text-secondary leading-snug block">
                          {index === 0 && "Maximizing buying capacity before listing."}
                          {index === 1 && "Guaranteed occupancy buffer to prevent double moves."}
                          {index === 2 && "Staging lift covered upfront to elevate final value."}
                        </span>
                        <p className="text-xs text-muted-foreground mt-2 leading-relaxed">
                          {index === 0 && "Our assessments calculate maximum buying potential utilizing home equity."}
                          {index === 1 && "Complete timeline orchestration ensures you only pack and move once."}
                          {index === 2 && "No upfront fees or costs. The staging expenses are settled at closing."}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
