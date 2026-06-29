'use client'

import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
import { Button } from '@/components/ui/button'

const features = [
  {
    step: '01',
    title: 'Equity Assessment',
    image: '/hero-house.jpg',
    actionLabel: 'View Buying Power',
  },
  {
    step: '02',
    title: 'Stay-Put Guarantee',
    image: '/webaliser-_TPTXZd9mOo-unsplash.jpg',
    actionLabel: 'Check Timeline Safety',
  },
  {
    step: '03',
    title: 'Concierge Staging',
    image: '/staged-interior.png',
    actionLabel: 'See Staging Program',
  },
]

interface FeaturesProps {
  onLearnMoreClick: () => void
}

export function Features({ onLearnMoreClick }: FeaturesProps) {
  return (
    <section id="features" className="py-16 relative bg-background border-t border-primary/10">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-12"
        >
          <span className="text-primary font-bold text-sm uppercase tracking-wider">
            Our Program
          </span>
          <h2 className="mt-3 text-3xl md:text-4xl lg:text-5xl font-bold text-secondary text-balance font-serif">
            Everything you need to upsize
          </h2>
          <p className="mt-4 text-base text-muted-foreground text-pretty">
            Explore the steps of our transition program.
          </p>
        </motion.div>

        {/* Horizontal Scrolling Snap Track */}
        <div className="flex overflow-x-auto gap-6 pb-6 snap-x snap-mandatory scrollbar-thin scrollbar-thumb-primary/20 scrollbar-track-transparent -mx-4 px-4 sm:-mx-6 sm:px-6 lg:-mx-8 lg:px-8 scroll-smooth">
          {features.map((feature) => (
            <div
              key={feature.title}
              className="w-[80vw] sm:w-[380px] md:w-[400px] shrink-0 snap-align-start relative aspect-[4/3] rounded-2xl overflow-hidden shadow-md group border border-primary/15"
            >
              {/* Background Image */}
              <img
                src={feature.image}
                alt={feature.title}
                className="absolute inset-0 w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500 z-0"
              />
              {/* Dark Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/35 to-transparent z-10" />

              {/* Card Content */}
              <div className="absolute inset-0 p-6 z-20 flex flex-col justify-between text-white">
                <div className="flex justify-between items-start">
                  <span className="text-4xl font-extrabold text-primary/85 leading-none select-none">
                    {feature.step}
                  </span>
                </div>

                <div className="space-y-4">
                  <h3 className="text-xl font-bold text-white tracking-tight leading-snug">
                    {feature.title}
                  </h3>
                  <Button
                    onClick={onLearnMoreClick}
                    className="bg-primary hover:bg-primary/95 text-primary-foreground font-bold text-xs rounded-lg px-4 py-2 border border-primary/30 shadow-sm flex items-center justify-between gap-2 w-full sm:w-auto"
                  >
                    <span>{feature.actionLabel}</span>
                    <ArrowRight className="size-3.5" />
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
