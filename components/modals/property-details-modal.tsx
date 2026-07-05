'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { X, ArrowRight, CheckCircle2, Calendar, MapPin, Check } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'

export interface Property {
  id: string
  title: string
  price: string
  image: string
  images?: string[] // Optional array for interior gallery expansion
  location: string
  specs: string // e.g., "4 Beds / 3.5 Baths / 3,200 SQFT"
  status: string // e.g., "For Sale"
  statusBadge: 'buy' | 'rent' | 'sold'
  type: string
  premiumBadge?: string
  narrativeBullets: string[]
}

interface PropertyDetailsModalProps {
  isOpen: boolean
  onClose: () => void
  onLearnMoreClick: () => void
  property: Property | null
}

export function PropertyDetailsModal({
  isOpen,
  onClose,
  onLearnMoreClick,
  property,
}: PropertyDetailsModalProps) {
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitted(true)
  }

  const handleClose = () => {
    setIsSubmitted(false)
    setFormData({ name: '', email: '', phone: '' })
    onClose()
  }

  const handleStagingLearnMore = () => {
    onClose()
    onLearnMoreClick()
  }

  if (!property) return null

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

          {/* Modal */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ duration: 0.3, ease: 'easeOut' }}
            onClick={handleClose}
            className="fixed inset-0 z-50 p-4 flex items-center justify-center cursor-pointer"
          >
            <div 
              onClick={(e) => e.stopPropagation()}
              className="glass-card w-full max-w-4xl max-h-[90vh] overflow-y-auto rounded-2xl p-6 md:p-8 border border-primary/25 shadow-2xl relative flex flex-col bg-white scrollbar-thin cursor-default"
            >
              {/* Close Button */}
              <button
                onClick={handleClose}
                className="absolute right-4 top-4 p-2.5 rounded-full bg-background/90 hover:bg-muted text-muted-foreground hover:text-foreground transition-colors border border-border z-10"
              >
                <X className="size-4" />
                <span className="sr-only">Close</span>
              </button>

              <div className="grid md:grid-cols-12 gap-8 items-stretch mt-2">
                {/* Left Column: Image and Specs (50% width on desktop) */}
                <div className="md:col-span-6 flex flex-col justify-between relative rounded-xl overflow-hidden border border-primary/20 aspect-[4/3] md:aspect-auto min-h-[250px] md:min-h-[400px]">
                  <img
                    src={property.image}
                    alt={property.title}
                    className="absolute inset-0 w-full h-full object-cover object-center"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/20 to-black/30 z-0" />
                  
                  {/* Badges */}
                  <div className="relative z-10 p-5 flex justify-between items-start">
                    <span className="bg-primary text-primary-foreground text-[10px] font-extrabold px-3 py-1 rounded-full uppercase tracking-wider shadow-sm border border-primary/30">
                      {property.status}
                    </span>
                    {property.premiumBadge && (
                      <span className="bg-[#5c2424] text-red-100 text-[10px] font-extrabold px-3 py-1 rounded-full uppercase tracking-wider shadow-sm border border-red-500/20">
                        {property.premiumBadge}
                      </span>
                    )}
                  </div>

                  {/* Specs Ribbon */}
                  <div className="relative z-10 p-5 text-white space-y-2">
                    <span className="text-primary text-xl font-extrabold tracking-tight">
                      {property.price}
                    </span>
                    <h3 className="text-xl font-bold font-serif leading-tight">
                      {property.title}
                    </h3>
                    <div className="flex items-center gap-1.5 text-xs text-neutral-300">
                      <MapPin className="size-3.5 text-primary" />
                      <span>{property.location}</span>
                    </div>
                    <div className="text-[11px] font-semibold text-neutral-400 border-t border-white/10 pt-2 mt-2 tracking-wider uppercase">
                      {property.specs}
                    </div>
                  </div>
                </div>

                {/* Right Column: Detailed Narrative, Scheduler or Success (50% width on desktop) */}
                <div className="md:col-span-6 flex flex-col justify-between min-h-[350px]">
                  {!isSubmitted ? (
                    <div className="space-y-5 flex-1 flex flex-col justify-between">
                      {/* Narrative Bullets */}
                      <div className="space-y-4">
                        <span className="inline-flex items-center gap-2 px-2.5 py-0.5 rounded-full bg-primary/10 text-secondary text-[10px] font-bold border border-primary/20">
                          Overview & Staging
                        </span>
                        <h4 className="text-base font-bold text-secondary">
                          Property Features & Optimizations
                        </h4>
                        <ul className="space-y-3.5">
                          {property.narrativeBullets.map((bullet, idx) => (
                            <li key={idx} className="flex items-start gap-2.5 text-xs">
                              <Check className="size-4 text-emerald-600 shrink-0 mt-0.5 bg-emerald-100/50 p-0.5 rounded-full" />
                              <span className="font-medium text-secondary/80 leading-relaxed">{bullet}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      {/* Viewing Request Form */}
                      <form onSubmit={handleSubmit} className="space-y-3 border-t border-border pt-4 mt-2">
                        <span className="text-[9px] font-black text-secondary uppercase tracking-widest block mb-1">
                          Request a Private Showing
                        </span>
                        <div className="grid grid-cols-2 gap-2">
                          <Input
                            type="text"
                            placeholder="Full Name"
                            required
                            value={formData.name}
                            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                            className="bg-white border-primary/30 focus-visible:ring-1 focus-visible:ring-primary/45 focus:border-primary text-xs h-9 px-3"
                          />
                          <Input
                            type="email"
                            placeholder="Email Address"
                            required
                            value={formData.email}
                            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                            className="bg-white border-primary/30 focus-visible:ring-1 focus-visible:ring-primary/45 focus:border-primary text-xs h-9 px-3"
                          />
                        </div>
                        <div className="flex gap-2">
                          <Input
                            type="tel"
                            placeholder="Phone (e.g. 555-0199)"
                            required
                            value={formData.phone}
                            onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                            className="bg-white border-primary/30 focus-visible:ring-1 focus-visible:ring-primary/45 focus:border-primary text-xs h-9 px-3 flex-1"
                          />
                          <Button
                            type="submit"
                            className="bg-primary hover:bg-primary/95 text-primary-foreground font-bold px-4 h-9 text-xs shadow-md shrink-0"
                          >
                            Schedule
                          </Button>
                        </div>
                      </form>

                      {/* Staging Concierge CTA */}
                      <div className="border-t border-border pt-3 text-center sm:text-left flex flex-col sm:flex-row items-center justify-between gap-2">
                        <p className="text-[10px] text-muted-foreground font-semibold leading-tight">
                          Selling a similar home? See how we prep it at $0 cost.
                        </p>
                        <button
                          onClick={handleStagingLearnMore}
                          className="text-primary hover:text-primary/90 font-bold text-xs inline-flex items-center gap-1 group whitespace-nowrap"
                        >
                          <span>Learn More</span>
                          <ArrowRight className="size-3.5 transform group-hover:translate-x-0.5 transition-transform" />
                        </button>
                      </div>
                    </div>
                  ) : (
                    /* Success State */
                    <div className="text-center py-6 flex flex-col justify-center items-center flex-1">
                      <motion.div
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        transition={{ type: 'spring', duration: 0.5 }}
                        className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-secondary/10 border border-secondary/25 mb-4"
                      >
                        <CheckCircle2 className="size-7 text-secondary" />
                      </motion.div>
                      
                      <h3 className="text-xl font-bold text-secondary mb-2">
                        Showing Requested!
                      </h3>
                      <p className="text-xs text-muted-foreground max-w-sm mx-auto leading-relaxed mb-6">
                        Thank you, {formData.name.split(' ')[0]}. A premium property concierge will reach out to <strong>{formData.email}</strong> or <strong>{formData.phone}</strong> within 2 hours to confirm your private viewing slot.
                      </p>

                      <div className="bg-slate-50/80 border border-primary/20 rounded-xl p-4 w-full max-w-xs text-left space-y-2">
                        <div className="flex items-center gap-2 text-xs font-bold text-secondary">
                          <Calendar className="size-4 text-primary shrink-0" />
                          <span>What happens next:</span>
                        </div>
                        <ol className="text-[10px] text-muted-foreground list-decimal list-inside space-y-1">
                          <li>Concierge contacts you to verify credentials.</li>
                          <li>Digital gate pass sent to your smartphone.</li>
                          <li>Private 45-min showing at the property.</li>
                        </ol>
                      </div>

                      <Button
                        onClick={handleClose}
                        className="bg-secondary hover:bg-secondary/90 text-secondary-foreground font-bold px-6 py-2 mt-6 h-9 text-xs"
                      >
                        Close Details
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
