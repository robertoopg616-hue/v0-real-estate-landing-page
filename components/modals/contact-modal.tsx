'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { X, ArrowRight, CheckCircle2, Phone, Mail } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'

interface ContactModalProps {
  isOpen: boolean
  onClose: () => void
}

export function ContactModal({ isOpen, onClose }: ContactModalProps) {
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    address: '',
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitted(true)
  }

  const handleClose = () => {
    setIsSubmitted(false)
    setFormData({ name: '', email: '', address: '' })
    onClose()
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
            onClick={handleClose}
            className="fixed inset-0 z-50 bg-secondary/40 backdrop-blur-md"
          />

          {/* Modal Content */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ duration: 0.3, ease: 'easeOut' }}
            className="fixed inset-0 md:left-1/2 md:top-1/2 z-50 w-full md:max-w-lg md:-translate-x-1/2 md:-translate-y-1/2 p-0 md:px-4 h-full md:h-auto max-h-screen md:max-h-[95vh] overflow-y-auto"
          >
            {/* Marble Texture Background Modal */}
            <div className="marble-texture min-h-full md:min-h-0 md:rounded-2xl p-6 md:p-8 border-0 md:border md:border-primary/25 shadow-2xl relative flex flex-col justify-center bg-white">
              {/* Close button */}
              <button
                onClick={handleClose}
                className="absolute right-4 top-4 md:right-4 md:top-4 p-3 md:p-2 rounded-full bg-background/90 hover:bg-muted text-muted-foreground hover:text-foreground transition-colors border border-border z-10"
              >
                <X className="size-5" />
                <span className="sr-only">Close</span>
              </button>

              {!isSubmitted ? (
                <>
                  {/* Lead capture Header */}
                  <div className="text-center mb-6">
                    <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-secondary text-xs font-bold mb-3 border border-primary/20">
                      Join the Program
                    </span>
                    <h2 className="text-2xl md:text-3xl font-bold text-secondary mb-2 font-serif tracking-tight">
                      Free Property Consultation
                    </h2>
                    <p className="text-muted-foreground text-sm">
                      Provide your home details below. We&apos;ll analyze your equity and coordinate a stress-free transition.
                    </p>
                  </div>

                  {/* Form */}
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div>
                      <label htmlFor="modal-name" className="block text-sm font-semibold text-secondary mb-1.5">
                        Full Name
                      </label>
                      <Input
                        id="modal-name"
                        type="text"
                        placeholder="Sarah Miller"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="bg-white/80 border-primary/30 focus-visible:border-primary focus-visible:ring-1 focus-visible:ring-primary/45 focus-visible:ring-offset-0 focus:border-primary text-foreground h-12 md:h-10 px-4 md:px-3 text-sm"
                      />
                    </div>
                    <div>
                      <label htmlFor="modal-email" className="block text-sm font-semibold text-secondary mb-1.5">
                        Email Address
                      </label>
                      <Input
                        id="modal-email"
                        type="email"
                        placeholder="sarah@example.com"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="bg-white/80 border-primary/30 focus-visible:border-primary focus-visible:ring-1 focus-visible:ring-primary/45 focus-visible:ring-offset-0 focus:border-primary text-foreground h-12 md:h-10 px-4 md:px-3 text-sm"
                      />
                    </div>
                    <div>
                      <label htmlFor="modal-address" className="block text-sm font-semibold text-secondary mb-1.5">
                        Property Address
                      </label>
                      <Input
                        id="modal-address"
                        type="text"
                        placeholder="742 Evergreen Terrace, Springfield"
                        required
                        value={formData.address}
                        onChange={(e) => setFormData({ ...formData, address: e.target.value })}
                        className="bg-white/80 border-primary/30 focus-visible:border-primary focus-visible:ring-1 focus-visible:ring-primary/45 focus-visible:ring-offset-0 focus:border-primary text-foreground h-12 md:h-10 px-4 md:px-3 text-sm"
                      />
                    </div>

                    <Button
                      type="submit"
                      className="w-full bg-primary hover:bg-primary/95 text-primary-foreground font-bold py-6 rounded-lg shadow-lg transition-all"
                    >
                      Request Free Evaluation
                      <ArrowRight className="ml-2 size-5" />
                    </Button>
                  </form>

                  {/* Faint Quick Contact options */}
                  <div className="mt-6 pt-6 border-t border-primary/20">
                    <div className="flex flex-wrap justify-center gap-6 text-xs font-semibold">
                      <a href="tel:+15551234567" className="flex items-center gap-1.5 text-muted-foreground hover:text-primary transition-colors">
                        <Phone className="size-3.5 text-primary" />
                        (555) 123-4567
                      </a>
                      <a href="mailto:hello@premiumrealty.com" className="flex items-center gap-1.5 text-muted-foreground hover:text-primary transition-colors">
                        <Mail className="size-3.5 text-primary" />
                        hello@premiumrealty.com
                      </a>
                    </div>
                  </div>
                </>
              ) : (
                /* Success Roadmap State */
                <div className="text-center py-4">
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ type: 'spring', duration: 0.5 }}
                    className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-secondary/15 mb-6 border border-secondary/20"
                  >
                    <CheckCircle2 className="size-8 text-secondary" />
                  </motion.div>
                  
                  <h3 className="text-2xl font-bold text-secondary mb-2">
                    Thank You, {formData.name.split(' ')[0]}!
                  </h3>
                  <p className="text-muted-foreground text-sm mb-6 max-w-sm mx-auto">
                    Your request is registered for <strong className="text-foreground">{formData.address}</strong>. Here is your roadmap for what happens next:
                  </p>

                  {/* 3-Step What Happens Next Roadmap */}
                  <div className="text-left bg-white/70 backdrop-blur-sm rounded-xl p-6 mb-6 border border-primary/20 space-y-4">
                    <h4 className="font-bold text-secondary text-sm border-b border-border pb-2 uppercase tracking-wider">
                      Your 3-Step Journey
                    </h4>
                    <div className="space-y-4">
                      <div className="flex items-start gap-3">
                        <span className="flex items-center justify-center w-6 h-6 rounded-full bg-primary text-primary-foreground text-xs font-extrabold shrink-0 shadow-sm">
                          1
                        </span>
                        <div>
                          <p className="font-bold text-secondary text-sm leading-none">10-Min Discovery Call</p>
                          <p className="text-xs text-muted-foreground mt-1">We will call within 24 hours to review your spatial needs.</p>
                        </div>
                      </div>
                      <div className="flex items-start gap-3">
                        <span className="flex items-center justify-center w-6 h-6 rounded-full bg-primary text-primary-foreground text-xs font-extrabold shrink-0 shadow-sm">
                          2
                        </span>
                        <div>
                          <p className="font-bold text-secondary text-sm leading-none">Custom Equity Report</p>
                          <p className="text-xs text-muted-foreground mt-1">Unlock your true buying power analysis report in pdf format.</p>
                        </div>
                      </div>
                      <div className="flex items-start gap-3">
                        <span className="flex items-center justify-center w-6 h-6 rounded-full bg-primary text-primary-foreground text-xs font-extrabold shrink-0 shadow-sm">
                          3
                        </span>
                        <div>
                          <p className="font-bold text-secondary text-sm leading-none">Coffee Consultation</p>
                          <p className="text-xs text-muted-foreground mt-1">Meet in person to review timeline synchronization.</p>
                        </div>
                      </div>
                    </div>
                  </div>

                  <Button
                    onClick={handleClose}
                    className="bg-secondary hover:bg-secondary/90 text-secondary-foreground font-bold px-6 py-3"
                  >
                    Finish
                  </Button>
                </div>
              )}
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  )
}
