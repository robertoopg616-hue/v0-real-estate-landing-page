'use client'

import { motion, AnimatePresence } from 'framer-motion'
import { X, TrendingUp, Clock, Shield, DollarSign, Home, Sparkles, ArrowRight } from 'lucide-react'
import { Button } from '@/components/ui/button'

interface LearnMoreModalProps {
  isOpen: boolean
  onClose: () => void
  onContactClick: () => void
}

const benefits = [
  {
    icon: TrendingUp,
    title: 'Maximize Your Sale Price',
    description: 'Our data-driven pricing strategy and premium marketing consistently achieve 104% of asking price.',
  },
  {
    icon: Clock,
    title: 'Perfect Timing Coordination',
    description: 'We synchronize your sale and purchase so you never face the stress of temporary housing or double mortgages.',
  },
  {
    icon: Shield,
    title: 'Stay-Put Guarantee',
    description: 'Sell with confidence knowing you won\'t have to move until your new home is ready. No rushed decisions.',
  },
  {
    icon: DollarSign,
    title: 'Unlock Hidden Equity',
    description: 'Our equity assessment reveals your true buying power—most families discover 15-20% more than they expected.',
  },
  {
    icon: Home,
    title: 'Priority Buyer Matching',
    description: 'Access our network of pre-qualified buyers actively searching for homes like yours.',
  },
  {
    icon: Sparkles,
    title: '$0 Upfront Prep Costs',
    description: 'Professional staging, repairs, and photography handled by us. You only pay at closing.',
  },
]

export function LearnMoreModal({ isOpen, onClose, onContactClick }: LearnMoreModalProps) {
  const handleGetStarted = () => {
    onClose()
    onContactClick()
  }

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 z-50 bg-background/80 backdrop-blur-sm"
          />

          {/* Modal */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ duration: 0.2, ease: 'easeOut' }}
            className="fixed left-1/2 top-1/2 z-50 w-full max-w-2xl -translate-x-1/2 -translate-y-1/2 px-4 max-h-[90vh] overflow-y-auto"
          >
            <div className="glass-card rounded-2xl p-6 md:p-8 border-primary/20 shadow-2xl shadow-primary/10">
              {/* Close Button */}
              <button
                onClick={onClose}
                className="absolute right-4 top-4 p-2 rounded-full bg-secondary/50 hover:bg-secondary text-muted-foreground hover:text-foreground transition-colors"
              >
                <X className="size-5" />
                <span className="sr-only">Close</span>
              </button>

              {/* Header */}
              <div className="text-center mb-8">
                <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-semibold mb-4">
                  How It Works
                </span>
                <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-2">
                  How We Maximize Your Equity & Simplify Your Move
                </h2>
                <p className="text-muted-foreground">
                  Our proven approach has helped 500+ families unlock over $42M in combined equity.
                </p>
              </div>

              {/* Benefits Grid */}
              <div className="grid sm:grid-cols-2 gap-4 mb-8">
                {benefits.map((benefit, index) => (
                  <motion.div
                    key={benefit.title}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.05 }}
                    className="flex gap-4 p-4 rounded-xl bg-secondary/30 hover:bg-secondary/50 transition-colors"
                  >
                    <div className="flex items-center justify-center w-10 h-10 rounded-lg bg-primary/10 shrink-0">
                      <benefit.icon className="size-5 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground text-sm mb-1">
                        {benefit.title}
                      </h3>
                      <p className="text-xs text-muted-foreground leading-relaxed">
                        {benefit.description}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* Stats Bar */}
              <div className="flex flex-wrap justify-center gap-6 mb-8 py-4 border-y border-border">
                <div className="text-center">
                  <span className="block text-2xl font-bold text-primary">104%</span>
                  <span className="text-xs text-muted-foreground">Avg Sale Price</span>
                </div>
                <div className="text-center">
                  <span className="block text-2xl font-bold text-primary">12 Days</span>
                  <span className="text-xs text-muted-foreground">Avg Time on Market</span>
                </div>
                <div className="text-center">
                  <span className="block text-2xl font-bold text-primary">100%</span>
                  <span className="text-xs text-muted-foreground">Upsize Success Rate</span>
                </div>
              </div>

              {/* CTA */}
              <div className="text-center">
                <Button
                  onClick={handleGetStarted}
                  className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold px-8 py-6 rounded-lg shadow-lg shadow-primary/25"
                >
                  Get Your Free Consultation
                  <ArrowRight className="ml-2 size-5" />
                </Button>
                <p className="mt-3 text-xs text-muted-foreground">
                  No obligation. No pressure. Just expert guidance.
                </p>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  )
}
