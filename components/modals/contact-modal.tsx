'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { X, ArrowRight, CheckCircle2, Phone, Mail, MapPin } from 'lucide-react'
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
    phone: '',
    address: '',
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitted(true)
  }

  const handleClose = () => {
    setIsSubmitted(false)
    setFormData({ name: '', email: '', phone: '', address: '' })
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
            className="fixed inset-0 z-50 bg-background/80 backdrop-blur-sm"
          />

          {/* Modal */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ duration: 0.2, ease: 'easeOut' }}
            className="fixed left-1/2 top-1/2 z-50 w-full max-w-lg -translate-x-1/2 -translate-y-1/2 px-4"
          >
            <div className="glass-card rounded-2xl p-6 md:p-8 border-primary/20 shadow-2xl shadow-primary/10">
              {/* Close Button */}
              <button
                onClick={handleClose}
                className="absolute right-4 top-4 p-2 rounded-full bg-secondary/50 hover:bg-secondary text-muted-foreground hover:text-foreground transition-colors"
              >
                <X className="size-5" />
                <span className="sr-only">Close</span>
              </button>

              {!isSubmitted ? (
                <>
                  {/* Header */}
                  <div className="text-center mb-6">
                    <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-semibold mb-4">
                      Free Consultation
                    </span>
                    <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-2">
                      Get Your Free Property Consultation
                    </h2>
                    <p className="text-muted-foreground text-sm">
                      Share your details and we&apos;ll reach out within 24 hours to discuss your upsizing goals.
                    </p>
                  </div>

                  {/* Form */}
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div>
                      <label htmlFor="modal-name" className="block text-sm font-medium text-foreground mb-1.5">
                        Full Name
                      </label>
                      <Input
                        id="modal-name"
                        type="text"
                        placeholder="John Smith"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="bg-secondary/50 border-border focus:border-primary"
                      />
                    </div>
                    <div>
                      <label htmlFor="modal-email" className="block text-sm font-medium text-foreground mb-1.5">
                        Email Address
                      </label>
                      <Input
                        id="modal-email"
                        type="email"
                        placeholder="john@example.com"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="bg-secondary/50 border-border focus:border-primary"
                      />
                    </div>
                    <div>
                      <label htmlFor="modal-phone" className="block text-sm font-medium text-foreground mb-1.5">
                        Phone Number
                      </label>
                      <Input
                        id="modal-phone"
                        type="tel"
                        placeholder="(555) 123-4567"
                        required
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        className="bg-secondary/50 border-border focus:border-primary"
                      />
                    </div>
                    <div>
                      <label htmlFor="modal-address" className="block text-sm font-medium text-foreground mb-1.5">
                        Current Property Address
                      </label>
                      <Input
                        id="modal-address"
                        type="text"
                        placeholder="123 Main St, City, State"
                        value={formData.address}
                        onChange={(e) => setFormData({ ...formData, address: e.target.value })}
                        className="bg-secondary/50 border-border focus:border-primary"
                      />
                    </div>

                    <Button
                      type="submit"
                      className="w-full bg-primary hover:bg-primary/90 text-primary-foreground font-semibold py-6 rounded-lg shadow-lg shadow-primary/25"
                    >
                      Request Free Consultation
                      <ArrowRight className="ml-2 size-5" />
                    </Button>
                  </form>

                  {/* Contact Options */}
                  <div className="mt-6 pt-6 border-t border-border">
                    <p className="text-center text-sm text-muted-foreground mb-3">Or reach us directly</p>
                    <div className="flex flex-wrap justify-center gap-4 text-sm">
                      <a href="tel:+15551234567" className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors">
                        <Phone className="size-4" />
                        (555) 123-4567
                      </a>
                      <a href="mailto:hello@upsizehomes.com" className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors">
                        <Mail className="size-4" />
                        hello@upsizehomes.com
                      </a>
                    </div>
                  </div>
                </>
              ) : (
                /* Success State */
                <div className="text-center py-6">
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ type: 'spring', duration: 0.5 }}
                    className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/20 mb-6"
                  >
                    <CheckCircle2 className="size-8 text-primary" />
                  </motion.div>
                  <h3 className="text-2xl font-bold text-foreground mb-2">
                    Thank You, {formData.name.split(' ')[0]}!
                  </h3>
                  <p className="text-muted-foreground mb-6">
                    Your consultation request has been received. We&apos;ll be in touch within 24 hours.
                  </p>

                  {/* What Happens Next */}
                  <div className="text-left glass-card rounded-xl p-4 mb-6">
                    <h4 className="font-semibold text-foreground mb-3 text-sm">What Happens Next:</h4>
                    <ul className="space-y-2">
                      <li className="flex items-start gap-3 text-sm">
                        <span className="flex items-center justify-center w-5 h-5 rounded-full bg-primary text-primary-foreground text-xs font-bold shrink-0">1</span>
                        <span className="text-muted-foreground">We&apos;ll call to schedule your consultation</span>
                      </li>
                      <li className="flex items-start gap-3 text-sm">
                        <span className="flex items-center justify-center w-5 h-5 rounded-full bg-primary text-primary-foreground text-xs font-bold shrink-0">2</span>
                        <span className="text-muted-foreground">Receive your free equity analysis</span>
                      </li>
                      <li className="flex items-start gap-3 text-sm">
                        <span className="flex items-center justify-center w-5 h-5 rounded-full bg-primary text-primary-foreground text-xs font-bold shrink-0">3</span>
                        <span className="text-muted-foreground">Get a personalized upsizing roadmap</span>
                      </li>
                    </ul>
                  </div>

                  <Button
                    onClick={handleClose}
                    variant="outline"
                    className="border-border hover:bg-secondary"
                  >
                    Close
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
