'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Send, CheckCircle2 } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'

export function ContactForm() {
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

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  return (
    <section id="contact" className="py-16 bg-muted/40 relative">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <span className="text-primary font-bold text-sm uppercase tracking-wider">
            Get Started
          </span>
          <h2 className="mt-3 text-3xl md:text-4xl lg:text-5xl font-bold text-secondary text-balance font-serif">
            Ready to find your dream home?
          </h2>
          <p className="mt-4 text-lg text-muted-foreground text-pretty">
            Schedule your free consultation today and take the first step toward
            your family&apos;s next chapter.
          </p>
        </motion.div>

        {/* Form / Success State Container */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="max-w-xl mx-auto"
        >
          <div className="glass-card rounded-2xl p-8 md:p-10 border border-primary/25 bg-white shadow-xl">
            <AnimatePresence mode="wait">
              {!isSubmitted ? (
                <motion.form
                  key="form"
                  initial={{ opacity: 1 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.3 }}
                  onSubmit={handleSubmit}
                  className="space-y-6"
                >
                  {/* Name Field */}
                  <div>
                    <label
                      htmlFor="name"
                      className="block text-sm font-semibold text-secondary mb-2"
                    >
                      Full Name
                    </label>
                    <Input
                      id="name"
                      name="name"
                      type="text"
                      required
                      placeholder="Sarah Miller"
                      value={formData.name}
                      onChange={handleInputChange}
                      className="bg-white/80 border-border focus:border-primary text-foreground"
                    />
                  </div>

                  {/* Email Field */}
                  <div>
                    <label
                      htmlFor="email"
                      className="block text-sm font-semibold text-secondary mb-2"
                    >
                      Email Address
                    </label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      required
                      placeholder="sarah@example.com"
                      value={formData.email}
                      onChange={handleInputChange}
                      className="bg-white/80 border-border focus:border-primary text-foreground"
                    />
                  </div>

                  {/* Property Address Field */}
                  <div>
                    <label
                      htmlFor="address"
                      className="block text-sm font-semibold text-secondary mb-2"
                    >
                      Current Property Address
                    </label>
                    <Input
                      id="address"
                      name="address"
                      type="text"
                      required
                      placeholder="742 Evergreen Terrace, Springfield"
                      value={formData.address}
                      onChange={handleInputChange}
                      className="bg-white/80 border-border focus:border-primary text-foreground"
                    />
                  </div>

                  {/* Submit Button */}
                  <Button
                    type="submit"
                    className="w-full bg-primary hover:bg-primary/95 text-primary-foreground font-bold py-6 rounded-lg shadow-md transition-all"
                  >
                    Request Free Consultation
                    <Send className="ml-2 size-4" />
                  </Button>
                </motion.form>
              ) : (
                /* Success State (3-Step Roadmap) */
                <motion.div
                  key="success"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3 }}
                  className="text-center py-6 space-y-6"
                >
                  <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-secondary/10 border border-secondary/25">
                    <CheckCircle2 className="size-8 text-secondary" />
                  </div>
                  
                  <div>
                    <h3 className="text-2xl font-bold text-secondary font-serif mb-2">
                      Request Confirmed!
                    </h3>
                    <p className="text-sm text-muted-foreground max-w-sm mx-auto">
                      Thank you, {formData.name.split(' ')[0]}. We have registered your property at <span className="font-bold text-foreground">{formData.address}</span>. Here is what happens next:
                    </p>
                  </div>

                  {/* 3-Step What Happens Next Roadmap */}
                  <div className="text-left bg-muted/30 rounded-xl p-6 border border-primary/20 space-y-4 max-w-md mx-auto">
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

                  <p className="text-xs text-muted-foreground">
                    A confirmation email was sent to <strong>{formData.email}</strong>.
                  </p>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
