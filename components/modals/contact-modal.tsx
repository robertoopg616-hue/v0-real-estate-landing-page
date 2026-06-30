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
            className="fixed inset-0 z-50 p-4 flex items-center justify-center"
          >
            {/* Marble Texture Background Modal */}
            <div className="marble-texture w-full max-w-4xl max-h-[90vh] overflow-y-auto rounded-2xl p-6 md:p-8 border border-primary/25 shadow-2xl relative flex flex-col bg-white scrollbar-thin">
              {/* Close button */}
              <button
                onClick={handleClose}
                className="absolute right-4 top-4 p-2.5 rounded-full bg-background/90 hover:bg-muted text-muted-foreground hover:text-foreground transition-colors border border-border z-10"
              >
                <X className="size-4" />
                <span className="sr-only">Close</span>
              </button>

              <div className="grid md:grid-cols-12 gap-8 items-stretch">
                {/* Left Column: Value summary benefits card (desktop only) */}
                <div className="hidden md:flex md:col-span-5 bg-secondary text-white rounded-xl p-6 flex-col justify-between relative overflow-hidden border border-primary/20">
                  <div className="absolute inset-0 opacity-[0.03] bg-[radial-gradient(#ffffff_1px,transparent_1px)] [background-size:16px_16px]" />
                  <div className="space-y-6 relative z-10">
                    <span className="text-[10px] font-bold text-primary uppercase tracking-widest block border-b border-primary/25 pb-2">
                      Premium Staging Concierge
                    </span>
                    <h3 className="text-xl font-bold font-serif leading-tight">
                      Coordinate your upsize with absolute timing security.
                    </h3>
                    <ul className="space-y-4 pt-2">
                      <li className="flex items-start gap-2.5">
                        <CheckCircle2 className="size-4 text-primary shrink-0 mt-0.5" />
                        <div className="text-xs">
                          <p className="font-bold text-white">Stay-Put Guarantee</p>
                          <p className="text-neutral-300">Maintain residency in your current property until closing.</p>
                        </div>
                      </li>
                      <li className="flex items-start gap-2.5">
                        <CheckCircle2 className="size-4 text-primary shrink-0 mt-0.5" />
                        <div className="text-xs">
                          <p className="font-bold text-white">$0 Upfront Staging Concierge</p>
                          <p className="text-neutral-300">We fund high-end cosmetic renovations to sell for top dollar.</p>
                        </div>
                      </li>
                      <li className="flex items-start gap-2.5">
                        <CheckCircle2 className="size-4 text-primary shrink-0 mt-0.5" />
                        <div className="text-xs">
                          <p className="font-bold text-white">Equity Unlock Assessment</p>
                          <p className="text-neutral-300">Understand your true purchasing budget position immediately.</p>
                        </div>
                      </li>
                    </ul>
                  </div>
                  <div className="relative z-10 text-[9px] text-neutral-400 font-semibold border-t border-white/10 pt-4 mt-6">
                    * Limited capacity program. Terms and conditions apply.
                  </div>
                </div>

                {/* Right Column: Form or Success State */}
                <div className="md:col-span-7 flex flex-col justify-center">
                  {!isSubmitted ? (
                    <>
                      {/* Lead capture Header */}
                      <div className="mb-6 pt-2">
                        <span className="inline-flex items-center gap-2 px-2.5 py-0.5 rounded-full bg-primary/10 text-secondary text-[10px] font-bold mb-2 border border-primary/20">
                          Join the Program
                        </span>
                        <h2 className="text-xl md:text-2xl font-bold text-secondary mb-1 font-serif tracking-tight">
                          Free Property Consultation
                        </h2>
                        <p className="text-muted-foreground text-xs leading-relaxed">
                          Provide your details below to unlock your personalized equity report and coordinate a stress-free transition.
                        </p>
                      </div>

                      {/* Form */}
                      <form onSubmit={handleSubmit} className="space-y-4">
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
                            className="bg-white/80 border-primary/30 focus-visible:border-primary focus-visible:ring-1 focus-visible:ring-primary/45 focus-visible:ring-offset-0 focus:border-primary text-foreground h-10 px-3 text-xs"
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
                            className="bg-white/80 border-primary/30 focus-visible:border-primary focus-visible:ring-1 focus-visible:ring-primary/45 focus-visible:ring-offset-0 focus:border-primary text-foreground h-10 px-3 text-xs"
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
                            className="bg-white/80 border-primary/30 focus-visible:border-primary focus-visible:ring-1 focus-visible:ring-primary/45 focus-visible:ring-offset-0 focus:border-primary text-foreground h-10 px-3 text-xs"
                          />
                        </div>

                        <Button
                          type="submit"
                          className="w-full bg-primary hover:bg-primary/95 text-primary-foreground font-bold py-5 rounded-lg shadow-md transition-all text-xs mt-2"
                        >
                          Request Free Evaluation
                          <ArrowRight className="ml-2 size-4" />
                        </Button>
                      </form>
                    </>
                  ) : (
                    /* Success Roadmap State */
                    <div className="text-center py-4">
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

                      {/* 3-Step Journey */}
                      <div className="text-left bg-white/70 backdrop-blur-sm rounded-xl p-4 mb-4 border border-primary/20 space-y-3">
                        <h4 className="font-bold text-secondary text-[10px] border-b border-border pb-1.5 uppercase tracking-wider">
                          Your 3-Step Journey
                        </h4>
                        <div className="space-y-3">
                          <div className="flex items-start gap-2.5">
                            <span className="flex items-center justify-center w-5 h-5 rounded-full bg-primary text-primary-foreground text-[10px] font-extrabold shrink-0 shadow-xs">
                              1
                            </span>
                            <div>
                              <p className="font-bold text-secondary text-xs leading-none">10-Min Discovery Call</p>
                              <p className="text-[10px] text-muted-foreground mt-0.5">We will call within 24 hours to review your spatial needs.</p>
                            </div>
                          </div>
                          <div className="flex items-start gap-2.5">
                            <span className="flex items-center justify-center w-5 h-5 rounded-full bg-primary text-primary-foreground text-[10px] font-extrabold shrink-0 shadow-xs">
                              2
                            </span>
                            <div>
                              <p className="font-bold text-secondary text-xs leading-none">Custom Equity Report</p>
                              <p className="text-[10px] text-muted-foreground mt-0.5">Unlock your true buying power analysis report.</p>
                            </div>
                          </div>
                          <div className="flex items-start gap-2.5">
                            <span className="flex items-center justify-center w-5 h-5 rounded-full bg-primary text-primary-foreground text-[10px] font-extrabold shrink-0 shadow-xs">
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
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  )
}
