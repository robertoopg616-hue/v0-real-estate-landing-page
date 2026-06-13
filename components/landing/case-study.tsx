'use client'

import { motion } from 'framer-motion'
import { ArrowRight, Home, Users, TrendingUp } from 'lucide-react'
import { Button } from '@/components/ui/button'

export function CaseStudy() {
  const scrollToContact = () => {
    const element = document.querySelector('#contact')
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <section className="py-24 md:py-32 bg-secondary/30">
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
            Featured Case Study
          </span>
          <h2 className="mt-3 text-3xl md:text-4xl lg:text-5xl font-bold text-foreground text-balance">
            From cramped condo to family home
          </h2>
        </motion.div>

        {/* Before/After Comparison */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="grid md:grid-cols-2 gap-8 lg:gap-12"
        >
          {/* Before Card */}
          <div className="glass-card rounded-2xl overflow-hidden">
            <div className="relative aspect-[4/3] bg-gradient-to-br from-muted to-secondary flex items-center justify-center">
              <div className="text-center p-8">
                <Home className="size-16 text-muted-foreground/50 mx-auto mb-4" />
                <p className="text-muted-foreground text-sm">Before: 850 sq ft Condo</p>
              </div>
              <div className="absolute top-4 left-4">
                <span className="inline-flex items-center rounded-full bg-muted px-3 py-1 text-xs font-semibold text-muted-foreground">
                  Before
                </span>
              </div>
            </div>
            <div className="p-6">
              <h3 className="text-lg font-bold text-foreground mb-2">
                The Challenge
              </h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li className="flex items-start gap-2">
                  <span className="text-muted-foreground/50">-</span>
                  850 sq ft, 1 bedroom condo
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-muted-foreground/50">-</span>
                  Growing family with a baby on the way
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-muted-foreground/50">-</span>
                  Worried about selling in a competitive market
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-muted-foreground/50">-</span>
                  No savings for temporary housing
                </li>
              </ul>
            </div>
          </div>

          {/* After Card */}
          <div className="glass-card rounded-2xl overflow-hidden border-primary/30">
            <div className="relative aspect-[4/3] bg-gradient-to-br from-primary/20 to-primary/5 flex items-center justify-center">
              <div className="text-center p-8">
                <Users className="size-16 text-primary/50 mx-auto mb-4" />
                <p className="text-primary/80 text-sm">After: 2,400 sq ft Family Home</p>
              </div>
              <div className="absolute top-4 left-4">
                <span className="inline-flex items-center rounded-full bg-primary px-3 py-1 text-xs font-semibold text-primary-foreground">
                  After
                </span>
              </div>
            </div>
            <div className="p-6">
              <h3 className="text-lg font-bold text-foreground mb-2">
                The Result
              </h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li className="flex items-start gap-2">
                  <TrendingUp className="size-4 text-primary shrink-0 mt-0.5" />
                  Sold condo for $425K (12% over asking)
                </li>
                <li className="flex items-start gap-2">
                  <TrendingUp className="size-4 text-primary shrink-0 mt-0.5" />
                  2,400 sq ft home with 4 bedrooms
                </li>
                <li className="flex items-start gap-2">
                  <TrendingUp className="size-4 text-primary shrink-0 mt-0.5" />
                  Big backyard for the kids
                </li>
                <li className="flex items-start gap-2">
                  <TrendingUp className="size-4 text-primary shrink-0 mt-0.5" />
                  Moved directly—no temporary housing needed
                </li>
              </ul>
            </div>
          </div>
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center mt-12"
        >
          <Button
            size="lg"
            onClick={scrollToContact}
            className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold"
          >
            Start Your Success Story
            <ArrowRight className="ml-2 size-5" />
          </Button>
        </motion.div>
      </div>
    </section>
  )
}
