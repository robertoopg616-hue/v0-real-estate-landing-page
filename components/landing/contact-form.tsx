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
    <section id="contact" className="py-20 md:py-32 bg-background border-t border-neutral-200/60 relative">
      <div className="mx-auto max-w-7xl px-4 sm:px-8 md:px-16">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
          className="text-left max-w-3xl mb-16"
        >
          <span className="text-primary font-bold text-sm uppercase tracking-[0.2em] block mb-3">
            Get Started
          </span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-secondary font-serif leading-[1.1] tracking-tight">
            Ready to find your dream home?
          </h2>
          <p className="mt-6 text-neutral-500 font-light text-base sm:text-lg max-w-2xl leading-relaxed">
            Schedule your free consultation today and take the first step toward your family&apos;s next chapter.
          </p>
        </motion.div>

        {/* Form / Success State Container */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="max-w-xl"
        >
          <div className="pt-8 border-t border-neutral-200/60 bg-transparent">
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
                      className="block text-xs font-semibold text-secondary mb-2 uppercase tracking-wider"
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
                      className="bg-white/80 border-neutral-300 focus:border-primary text-foreground text-xs h-11"
                    />
                  </div>

                  {/* Email Field */}
                  <div>
                    <label
                      htmlFor="email"
                      className="block text-xs font-semibold text-secondary mb-2 uppercase tracking-wider"
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
                      className="bg-white/80 border-neutral-300 focus:border-primary text-foreground text-xs h-11"
                    />
                  </div>

                  {/* Property Address Field */}
                  <div>
                    <label
                      htmlFor="address"
                      className="block text-xs font-semibold text-secondary mb-2 uppercase tracking-wider"
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
                      className="bg-white/80 border-neutral-300 focus:border-primary text-foreground text-xs h-11"
                    />
                  </div>

                  {/* Submit Button */}
                  <Button
                    type="submit"
                    className="w-full bg-primary hover:bg-primary/95 text-primary-foreground font-bold py-6 rounded-lg shadow-md transition-all text-xs"
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
                  className="text-left py-4 space-y-6"
                >
                  <div className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-secondary/10 border border-secondary/25">
                    <CheckCircle2 className="size-7 text-secondary" />
                  </div>
                  
                  <div>
                    <h3 className="text-2xl font-bold text-secondary font-serif mb-2 leading-tight">
                      Request Confirmed!
                    </h3>
                    <p className="text-xs text-neutral-500 max-w-sm leading-relaxed">
                      Thank you, {formData.name.split(' ')[0]}. We have registered your property at <span className="font-bold text-foreground">{formData.address}</span>. Here is what happens next:
                    </p>
                  </div>

                  {/* 3-Step What Happens Next Roadmap */}
                  <div className="text-left bg-slate-50 border border-neutral-200/60 rounded-xl p-6 space-y-4 max-w-md">
                    <h4 className="font-bold text-secondary text-xs border-b border-border pb-2 uppercase tracking-wider">
                      Your 3-Step Journey
                    </h4>
                    <div className="space-y-4">
                      <div className="flex items-start gap-3">
                        <span className="flex items-center justify-center w-6 h-6 rounded-full bg-primary text-primary-foreground text-xs font-extrabold shrink-0 shadow-sm">
                          1
                        </span>
                        <div>
                          <p className="font-bold text-secondary text-xs leading-none">10-Min Discovery Call</p>
                          <p className="text-[10px] text-muted-foreground mt-1 leading-normal">We will call within 24 hours to review your spatial needs.</p>
                        </div>
                      </div>
                      <div className="flex items-start gap-3">
                        <span className="flex items-center justify-center w-6 h-6 rounded-full bg-primary text-primary-foreground text-xs font-extrabold shrink-0 shadow-sm">
                          2
                        </span>
                        <div>
                          <p className="font-bold text-secondary text-xs leading-none">Custom Equity Report</p>
                          <p className="text-[10px] text-muted-foreground mt-1 leading-normal">Unlock your true buying power analysis report in pdf format.</p>
                        </div>
                      </div>
                      <div className="flex items-start gap-3">
                        <span className="flex items-center justify-center w-6 h-6 rounded-full bg-primary text-primary-foreground text-xs font-extrabold shrink-0 shadow-sm">
                          3
                        </span>
                        <div>
                          <p className="font-bold text-secondary text-xs leading-none">Coffee Consultation</p>
                          <p className="text-[10px] text-muted-foreground mt-1 leading-normal">Meet in person to review timeline synchronization.</p>
                        </div>
                      </div>
                    </div>
                  </div>

                  <p className="text-[11px] text-muted-foreground">
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
