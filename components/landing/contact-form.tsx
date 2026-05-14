'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Send, Phone, FileText, Coffee, CheckCircle2 } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'

const steps = [
  {
    icon: Phone,
    title: '10-Min Discovery Call',
    description: "We'll call within 24 hours to learn about your goals and timeline.",
  },
  {
    icon: FileText,
    title: 'Custom Equity Report',
    description: 'Receive a detailed analysis of your home value and buying power.',
  },
  {
    icon: Coffee,
    title: 'Coffee Consultation',
    description: 'Meet in person to craft your personalized upsizing strategy.',
  },
]

export function ContactForm() {
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    address: '',
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Frontend-only: Just toggle the success state
    setIsSubmitted(true)
  }

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  return (
    <section id="contact" className="py-24 md:py-32 bg-secondary/30">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <span className="text-primary font-semibold text-sm uppercase tracking-wider">
            Get Started
          </span>
          <h2 className="mt-3 text-3xl md:text-4xl lg:text-5xl font-bold text-foreground text-balance">
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
          <div className="glass-card rounded-2xl p-8 md:p-10">
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
                      className="block text-sm font-medium text-foreground mb-2"
                    >
                      Full Name
                    </label>
                    <Input
                      id="name"
                      name="name"
                      type="text"
                      required
                      placeholder="John Smith"
                      value={formData.name}
                      onChange={handleInputChange}
                      className="bg-secondary/50 border-border focus:border-primary text-foreground placeholder:text-muted-foreground"
                    />
                  </div>

                  {/* Email Field */}
                  <div>
                    <label
                      htmlFor="email"
                      className="block text-sm font-medium text-foreground mb-2"
                    >
                      Email Address
                    </label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      required
                      placeholder="john@example.com"
                      value={formData.email}
                      onChange={handleInputChange}
                      className="bg-secondary/50 border-border focus:border-primary text-foreground placeholder:text-muted-foreground"
                    />
                  </div>

                  {/* Property Address Field */}
                  <div>
                    <label
                      htmlFor="address"
                      className="block text-sm font-medium text-foreground mb-2"
                    >
                      Current Property Address
                    </label>
                    <Input
                      id="address"
                      name="address"
                      type="text"
                      required
                      placeholder="123 Main St, City, State"
                      value={formData.address}
                      onChange={handleInputChange}
                      className="bg-secondary/50 border-border focus:border-primary text-foreground placeholder:text-muted-foreground"
                    />
                  </div>

                  {/* Submit Button */}
                  <Button
                    type="submit"
                    size="lg"
                    className="w-full bg-primary hover:bg-primary/90 text-primary-foreground font-semibold py-6 rounded-lg shadow-lg shadow-primary/25"
                  >
                    Get My Free Consultation
                    <Send className="ml-2 size-5" />
                  </Button>

                  {/* Privacy Note */}
                  <p className="text-xs text-center text-muted-foreground">
                    By submitting, you agree to receive communications from us.
                    We respect your privacy and never share your information.
                  </p>
                </motion.form>
              ) : (
                <motion.div
                  key="success"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                  className="text-center"
                >
                  {/* Success Icon */}
                  <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/20 mb-6">
                    <CheckCircle2 className="size-8 text-primary" />
                  </div>

                  <h3 className="text-2xl font-bold text-foreground mb-2">
                    Thank you, {formData.name.split(' ')[0]}!
                  </h3>
                  <p className="text-muted-foreground mb-8">
                    Your consultation request has been received. Here&apos;s what
                    happens next:
                  </p>

                  {/* What Happens Next - Roadmap */}
                  <div className="space-y-6">
                    {steps.map((step, index) => (
                      <div
                        key={index}
                        className="flex items-start gap-4 text-left"
                      >
                        <div className="flex items-center justify-center w-10 h-10 rounded-full bg-primary/10 shrink-0">
                          <step.icon className="size-5 text-primary" />
                        </div>
                        <div>
                          <div className="flex items-center gap-2 mb-1">
                            <span className="text-xs font-semibold text-primary">
                              Step {index + 1}
                            </span>
                          </div>
                          <h4 className="font-semibold text-foreground">
                            {step.title}
                          </h4>
                          <p className="text-sm text-muted-foreground">
                            {step.description}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
