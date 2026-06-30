'use client'

import { motion } from 'framer-motion'
import { ArrowRight, Phone } from 'lucide-react'
import { Button } from '@/components/ui/button'

interface CTASectionProps {
  onContactClick: () => void
}

export function CTASection({ onContactClick }: CTASectionProps) {
  return (
    <section className="py-20 md:py-32 relative overflow-hidden bg-background border-t border-neutral-200/60">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-background to-secondary/5" />
      
      {/* Decorative elements */}
      <div className="absolute top-0 left-1/4 w-64 h-64 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-secondary/5 rounded-full blur-3xl" />

      <div className="mx-auto max-w-7xl px-4 sm:px-8 md:px-16 relative">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
          className="text-left pt-12 border-t border-neutral-200/60 relative bg-transparent"
        >
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.1 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-secondary text-xs font-bold mb-6 border border-primary/20"
          >
            <Phone className="size-4 text-primary" />
            Limited Program Availability
          </motion.span>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-3xl md:text-4xl lg:text-5xl font-bold text-secondary mb-6 font-serif leading-[1.1] tracking-tight"
          >
            Ready to make your move?
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="text-neutral-500 font-light text-base sm:text-lg max-w-2xl mb-10 leading-relaxed"
          >
            Join hundreds of families who&apos;ve successfully upsized with our risk-free approach. Your dream home is closer than you think.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 w-full sm:w-auto"
          >
            <Button
              size="lg"
              onClick={onContactClick}
              className="bg-primary hover:bg-primary/95 text-primary-foreground font-bold px-8 py-6 rounded-lg shadow-lg text-xs border border-primary/30 w-full sm:w-auto justify-center"
            >
              Schedule Your Free Consultation
              <ArrowRight className="ml-2 size-5" />
            </Button>
            <a
              href="tel:+15551234567"
              className="flex items-center justify-center sm:justify-start gap-2 text-muted-foreground hover:text-secondary transition-colors font-bold text-xs py-2"
            >
              <Phone className="size-4 text-primary" />
              Or call (555) 123-4567
            </a>
          </motion.div>

          {/* Trust badges */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="mt-10 pt-10 border-t border-neutral-200/60"
          >
            <p className="text-xs text-muted-foreground mb-4 font-bold uppercase tracking-wider">
              Trusted by upsizers in the region
            </p>
            <div className="flex flex-wrap items-center gap-6 text-xs font-bold text-muted-foreground">
              <span className="flex items-center gap-2">
                <span className="text-primary">100%</span> Upsize Success Rate
              </span>
              <span className="hidden sm:block text-border">|</span>
              <span className="flex items-center gap-2">
                <span className="text-primary">$42M+</span> Equity Unlocked
              </span>
              <span className="hidden sm:block text-border">|</span>
              <span className="flex items-center gap-2">
                <span className="text-primary">12</span> Avg Days on Market
              </span>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
