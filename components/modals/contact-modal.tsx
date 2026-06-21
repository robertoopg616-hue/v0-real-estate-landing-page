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
            className="fixed inset-0 md:left-1/2 md:top-1/2 z-50 w-full md:max-w-md md:-translate-x-1/2 md:-translate-y-1/2 p-0 md:px-4 h-full md:h-auto max-h-screen md:max-h-[90vh] overflow-y-auto"
          >
            {/* Marble Texture Background Modal */}
            <div className="marble-texture min-h-full md:min-h-0 md:rounded-2xl p-5 md:p-6 border-0 md:border md:border-primary/25 shadow-2xl relative flex flex-col justify-center bg-white">
              {/* Close button */}
              <button
                onClick={handleClose}
                className="absolute right-4 top-4 md:right-4 md:top-4 p-2.5 md:p-2 rounded-full bg-background/90 hover:bg-muted text-muted-foreground hover:text-foreground transition-colors border border-border z-10"
              >
                <X className="size-4" />
                <span className="sr-only">Close</span>
              </button>

              {!isSubmitted ? (
                <>
                  {/* Lead capture Header */}
                  <div className="text-center mb-4 pt-2">
                    <span className="inline-flex items-center gap-2 px-2.5 py-0.5 rounded-full bg-primary/10 text-secondary text-[10px] font-bold mb-2 border border-primary/20">
                      Join the Program
                    </span>
                    <h2 className="text-xl md:text-2xl font-bold text-secondary mb-1 font-serif tracking-tight">
                      Free Property Consultation
                    </h2>
                    <p className="text-muted-foreground text-xs leading-relaxed max-w-sm mx-auto">
                      Provide your home details below. We&apos;ll analyze your equity and coordinate a stress-free transition.
                    </p>
                  </div>

                  {/* Form */}
                  <form onSubmit={handleSubmit} className="space-y-3">
                    <div>
                      <label htmlFor="modal-name" className="block text-xs font-semibold text-secondary mb-1">
                        Full Name
                      </label>
                      <Input
                        id="modal-name"
                        type="text"
                        placeholder="Sarah Miller"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="bg-white/80 border-primary/30 focus-visible:border-primary focus-visible:ring-1 focus-visible:ring-primary/45 focus-visible:ring-offset-0 focus:border-primary text-foreground h-11 md:h-10 px-4 md:px-3 text-xs"
                      />
                    </div>
                    <div>
                      <label htmlFor="modal-email" className="block text-xs font-semibold text-secondary mb-1">
                        Email Address
                      </label>
                      <Input
                        id="modal-email"
                        type="email"
                        placeholder="sarah@example.com"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="bg-white/80 border-primary/30 focus-visible:border-primary focus-visible:ring-1 focus-visible:ring-primary/45 focus-visible:ring-offset-0 focus:border-primary text-foreground h-11 md:h-10 px-4 md:px-3 text-xs"
                      />
                    </div>
                    <div>
                      <label htmlFor="modal-address" className="block text-xs font-semibold text-secondary mb-1">
                        Property Address
                      </label>
                      <Input
                        id="modal-address"
                        type="text"
                        placeholder="742 Evergreen Terrace, Springfield"
                        required
                        value={formData.address}
                        onChange={(e) => setFormData({ ...formData, address: e.target.value })}
                        className="bg-white/80 border-primary/30 focus-visible:border-primary focus-visible:ring-1 focus-visible:ring-primary/45 focus-visible:ring-offset-0 focus:border-primary text-foreground h-11 md:h-10 px-4 md:px-3 text-xs"
                      />
                    </div>

                    <Button
                      type="submit"
                      className="w-full bg-primary hover:bg-primary/95 text-primary-foreground font-bold py-5 rounded-lg shadow-md transition-all text-sm mt-2"
                    >
                      Request Free Evaluation
                      <ArrowRight className="ml-2 size-4" />
                    </Button>
                  </form>

                  {/* Faint Quick Contact options */}
                  <div className="mt-4 pt-4 border-t border-primary/10">
                    <div className="flex flex-wrap justify-center gap-4 text-[10px] font-semibold">
                      <a href="tel:+15551234567" className="flex items-center gap-1.5 text-muted-foreground hover:text-primary transition-colors">
                        <Phone className="size-3 text-primary" />
                        (555) 123-4567
                      </a>
                      <a href="mailto:hello@premiumrealty.com" className="flex items-center gap-1.5 text-muted-foreground hover:text-primary transition-colors">
                        <Mail className="size-3 text-primary" />
                        hello@premiumrealty.com
                      </a>
                    </div>
                  </div>
                </>
              ) : (
                /* Success Roadmap State */
                <div className="text-center py-2">
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ type: 'spring', duration: 0.5 }}
                    className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-secondary/15 mb-3 border border-secondary/20"
                  >
                    <CheckCircle2 className="size-6 text-secondary" />
                  </motion.div>
                  
                  <h3 className="text-xl font-bold text-secondary mb-1">
                    Thank You, {formData.name.split(' ')[0]}!
                  </h3>
                  <p className="text-muted-foreground text-xs mb-4 max-w-sm mx-auto">
                    Your request is registered for <strong className="text-foreground">{formData.address}</strong>. Here is your roadmap:
                  </p>

                  {/* 3-Step What Happens Next Roadmap */}
                  <div className="text-left bg-white/70 backdrop-blur-sm rounded-xl p-4 mb-4 border border-primary/20 space-y-3">
                    <h4 className="font-bold text-secondary text-[10px] border-b border-border pb-1.5 uppercase tracking-wider">
                      Your 3-Step Journey
                    </h4>
                    <div className="space-y-3">
                      <div className="flex items-start gap-2.5">
                        <span className="flex items-center justify-center w-5 h-5 rounded-full bg-primary text-primary-foreground text-[10px] font-extrabold shrink-0 shadow-sm">
                          1
                        </span>
                        <div>
                          <p className="font-bold text-secondary text-xs leading-none">10-Min Discovery Call</p>
                          <p className="text-[10px] text-muted-foreground mt-0.5">We will call within 24 hours to review your spatial needs.</p>
                        </div>
                      </div>
                      <div className="flex items-start gap-2.5">
                        <span className="flex items-center justify-center w-5 h-5 rounded-full bg-primary text-primary-foreground text-[10px] font-extrabold shrink-0 shadow-sm">
                          2
                        </span>
                        <div>
                          <p className="font-bold text-secondary text-xs leading-none">Custom Equity Report</p>
                          <p className="text-[10px] text-muted-foreground mt-0.5">Unlock your true buying power analysis report in pdf format.</p>
                        </div>
                      </div>
                      <div className="flex items-start gap-2.5">
                        <span className="flex items-center justify-center w-5 h-5 rounded-full bg-primary text-primary-foreground text-[10px] font-extrabold shrink-0 shadow-sm">
                          3
                        </span>
                        <div>
                          <p className="font-bold text-secondary text-xs leading-none">Coffee Consultation</p>
                          <p className="text-[10px] text-muted-foreground mt-0.5">Meet in person to review timeline synchronization.</p>
                        </div>
                      </div>
                    </div>
                  </div>

                  <Button
                    onClick={handleClose}
                    className="bg-secondary hover:bg-secondary/90 text-secondary-foreground font-bold px-6 py-2 h-9 text-xs"
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
