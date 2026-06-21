'use client'

import { motion, AnimatePresence } from 'framer-motion'
import { X, ArrowRight, Shield, Award, CheckCircle } from 'lucide-react'
import { Button } from '@/components/ui/button'

interface LearnMoreModalProps {
  isOpen: boolean
  onClose: () => void
  onContactClick: () => void
}

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
            className="fixed inset-0 z-50 bg-secondary/40 backdrop-blur-md"
          />

          {/* Modal */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ duration: 0.3, ease: 'easeOut' }}
            className="fixed inset-0 md:left-1/2 md:top-1/2 z-50 w-full md:max-w-lg md:-translate-x-1/2 md:-translate-y-1/2 p-0 md:px-4 h-full md:h-auto max-h-screen md:max-h-[90vh] overflow-y-auto"
          >
            <div className="glass-card min-h-full md:min-h-0 md:rounded-2xl p-6 md:p-8 border-0 md:border md:border-primary/25 shadow-2xl relative flex flex-col justify-center bg-white">
              {/* Close Button */}
              <button
                onClick={onClose}
                className="absolute right-4 top-4 md:right-4 md:top-4 p-3 md:p-2 rounded-full bg-background/90 hover:bg-muted text-muted-foreground hover:text-foreground transition-colors border border-border z-10"
              >
                <X className="size-5" />
                <span className="sr-only">Close</span>
              </button>

              {/* Header */}
              <div className="text-center mb-6">
                <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-secondary text-xs font-bold mb-3 border border-primary/20">
                  Program Details
                </span>
                <h2 className="text-2xl md:text-3xl font-bold text-secondary mb-2 font-serif tracking-tight">
                  Maximize Equity & Time Your Move
                </h2>
                <p className="text-muted-foreground text-sm">
                  We specialize in helping families transition from their starter homes to upscale family residences without the logisitical nightmares.
                </p>
              </div>

              {/* Gold Bullet Points */}
              <div className="space-y-4 mb-8">
                <div className="flex gap-3">
                  <div className="flex items-center justify-center w-8 h-8 rounded-lg bg-primary/15 text-primary shrink-0 border border-primary/30">
                    <Award className="size-4 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-bold text-secondary text-sm">
                      Staging lift adds $30k–$80k in value
                    </h3>
                    <p className="text-xs text-muted-foreground leading-relaxed mt-0.5">
                      Professional styling makes properties look larger and brighter. High-end staging is covered with <strong className="text-foreground">$0 upfront cost</strong>.
                    </p>
                  </div>
                </div>

                <div className="flex gap-3">
                  <div className="flex items-center justify-center w-8 h-8 rounded-lg bg-primary/15 text-primary shrink-0 border border-primary/30">
                    <Shield className="size-4 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-bold text-secondary text-sm">
                      Stay-Put Guarantee Timing
                    </h3>
                    <p className="text-xs text-muted-foreground leading-relaxed mt-0.5">
                      Never move into temporary rentals or storage. You maintain full occupancy of your existing property until the day your new home is ready.
                    </p>
                  </div>
                </div>

                <div className="flex gap-3">
                  <div className="flex items-center justify-center w-8 h-8 rounded-lg bg-primary/15 text-primary shrink-0 border border-primary/30">
                    <CheckCircle className="size-4 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-bold text-secondary text-sm">
                      Equity Unlock assessments
                    </h3>
                    <p className="text-xs text-muted-foreground leading-relaxed mt-0.5">
                      We perform a complete calculation of your unlocked home value to identify your maximum borrowing capacity for a larger home.
                    </p>
                  </div>
                </div>
              </div>

              {/* CTA */}
              <div className="text-center pt-4 border-t border-border">
                <Button
                  onClick={handleGetStarted}
                  className="bg-primary hover:bg-primary/95 text-primary-foreground font-bold px-8 py-6 rounded-lg shadow-lg w-full"
                >
                  Join the Program
                  <ArrowRight className="ml-2 size-5" />
                </Button>
                <p className="mt-3 text-[10px] text-muted-foreground">
                  Free structural assessment call is 100% risk-free.
                </p>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  )
}
