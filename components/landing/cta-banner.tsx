'use client'

import { motion } from 'framer-motion'
import { ArrowRight, CheckCircle2 } from 'lucide-react'
import { Button } from '@/components/ui/button'

interface CTABannerProps {
  onContactClick?: () => void
}

const benefits = [
  'No obligation consultation',
  'Personalized market analysis',
  'Sell & buy coordination',
]

export function CTABanner({ onContactClick }: CTABannerProps) {
  const handleClick = () => {
    if (onContactClick) {
      onContactClick()
    } else {
      const element = document.querySelector('#contact')
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' })
      }
    }
  }

  return (
    <section className="py-12 md:py-16 relative overflow-hidden bg-primary/5">
      <div className="absolute inset-0 bg-gradient-to-r from-primary/10 via-transparent to-primary/10" />
      
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.5 }}
          className="flex flex-col lg:flex-row items-center justify-between gap-8"
        >
          <div className="text-center lg:text-left">
            <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-3 text-balance">
              Take the first step today
            </h2>
            <p className="text-muted-foreground mb-4 text-pretty max-w-xl">
              Stop dreaming about more space and start planning for it. Our experts 
              are ready to show you exactly how to make it happen.
            </p>
            <ul className="flex flex-wrap items-center justify-center lg:justify-start gap-x-6 gap-y-2">
              {benefits.map((benefit, index) => (
                <motion.li
                  key={benefit}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: 0.1 + index * 0.1 }}
                  className="flex items-center gap-2 text-sm text-muted-foreground"
                >
                  <CheckCircle2 className="size-4 text-primary shrink-0" />
                  {benefit}
                </motion.li>
              ))}
            </ul>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.2 }}
          >
            <Button
              size="lg"
              onClick={handleClick}
              className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold px-8 py-6 rounded-lg shadow-lg shadow-primary/25 text-base whitespace-nowrap"
            >
              Get Your Free Consultation
              <ArrowRight className="ml-2 size-5" />
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
