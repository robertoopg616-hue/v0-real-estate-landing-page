'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { Check } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { ContactModal } from '@/components/modals/contact-modal'

const plans = [
  {
    name: 'Essential',
    commission: '2%',
    description: 'Perfect for sellers who want professional guidance with essential services.',
    features: [
      'Professional listing photos',
      'MLS & syndication',
      'Dedicated agent support',
      'Contract negotiation',
      'Closing coordination',
    ],
    highlighted: false,
  },
  {
    name: 'Signature',
    commission: '3%',
    description: 'Our most popular option with premium marketing and staging support.',
    features: [
      'Everything in Essential',
      'Virtual staging',
      'Premium photography & video',
      'Social media marketing',
      'Open house events',
      'Stay-Put Guarantee',
    ],
    highlighted: true,
  },
  {
    name: 'Elite',
    commission: '4%',
    description: 'White-glove service with full concierge prep and maximum exposure.',
    features: [
      'Everything in Signature',
      'Full concierge prep ($0 upfront)',
      'Drone & twilight photography',
      'Targeted digital advertising',
      'Luxury print materials',
      'Priority buyer matching',
      'Dedicated transaction coordinator',
    ],
    highlighted: false,
  },
]

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
}

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5 },
  },
}

export function Pricing() {
  const [isContactModalOpen, setIsContactModalOpen] = useState(false)

  const scrollToContact = () => {
    const element = document.querySelector('#contact')
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <section id="pricing" className="py-24 md:py-32 bg-secondary/30">
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
            Transparent Pricing
          </span>
          <h2 className="mt-3 text-3xl md:text-4xl lg:text-5xl font-bold text-foreground text-balance">
            Choose the service level that fits your needs
          </h2>
          <p className="mt-4 text-lg text-muted-foreground text-pretty">
            No hidden fees. No surprises. Just straightforward pricing for
            exceptional service.
          </p>
        </motion.div>

        {/* Pricing Cards */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          className="grid md:grid-cols-3 gap-6 lg:gap-8"
        >
          {plans.map((plan) => (
            <motion.div
              key={plan.name}
              variants={itemVariants}
              className={`relative rounded-2xl p-8 glow-card ${
                plan.highlighted
                  ? 'border-primary/45 shadow-lg shadow-primary/10 bg-black/20'
                  : 'bg-black/10'
              }`}
            >
              {/* Popular Badge */}
              {plan.highlighted && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                  <span className="inline-flex items-center rounded-full bg-primary px-4 py-1 text-xs font-semibold text-primary-foreground">
                    Most Popular
                  </span>
                </div>
              )}

              {/* Plan Header */}
              <div className="text-center mb-6">
                <h3 className="text-xl font-bold text-foreground mb-2">
                  {plan.name}
                </h3>
                <div className="flex items-baseline justify-center gap-1">
                  <span className="text-5xl font-bold text-foreground">
                    {plan.commission}
                  </span>
                  <span className="text-muted-foreground">commission</span>
                </div>
                <p className="mt-3 text-sm text-muted-foreground">
                  {plan.description}
                </p>
              </div>

              {/* Features List */}
              <ul className="space-y-3 mb-8">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-3">
                    <Check className="size-5 text-primary shrink-0 mt-0.5" />
                    <span className="text-sm text-muted-foreground">
                      {feature}
                    </span>
                  </li>
                ))}
              </ul>

              {/* CTA Button */}
              <Button
                onClick={() => setIsContactModalOpen(true)}
                className={`w-full font-semibold ${
                  plan.highlighted
                    ? 'bg-primary hover:bg-primary/90 text-primary-foreground'
                    : 'bg-secondary hover:bg-secondary/80 text-secondary-foreground'
                }`}
              >
                {plan.highlighted ? 'Join the Program' : 'Get Started'}
              </Button>
            </motion.div>
          ))}
        </motion.div>

        {/* Equity Calculator */}
        <EquityCalculator />

        {/* Disclaimer */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-10 text-center text-sm text-muted-foreground"
        >
          * Buyer agent compensation separate. Contact us for detailed terms and conditions.
        </motion.p>
      </div>

      {/* Contact Modal */}
      <ContactModal
        isOpen={isContactModalOpen}
        onClose={() => setIsContactModalOpen(false)}
      />
    </section>
  )
}

function EquityCalculator() {
  const [homeValue, setHomeValue] = useState(1000000)

  // Calculations
  // Essential: 2% commission, 100% estimated sale price
  const essentialPrice = homeValue
  const essentialCommission = essentialPrice * 0.02
  const essentialProceeds = essentialPrice - essentialCommission

  // Signature: 3% commission, 103% estimated sale price (virtual staging and premium marketing)
  const signaturePrice = homeValue * 1.03
  const signatureCommission = signaturePrice * 0.03
  const signatureProceeds = signaturePrice - signatureCommission

  // Elite: 4% commission, 105% estimated sale price (full concierge white-glove staging)
  const elitePrice = homeValue * 1.05
  const eliteCommission = elitePrice * 0.04
  const eliteProceeds = elitePrice - eliteCommission

  const formatCurrency = (val: number) => {
    return '$' + Math.round(val).toLocaleString('en-US')
  }

  return (
    <div className="glass-card mt-20 p-6 sm:p-10 rounded-3xl border border-white/5 space-y-8 max-w-4xl mx-auto relative z-10">
      <div className="text-center space-y-2">
        <span className="text-primary font-bold text-xs uppercase tracking-wider">Interactive Tool</span>
        <h3 className="text-2xl sm:text-3xl font-bold text-foreground">Home Equity & Proceeds Calculator</h3>
        <p className="text-muted-foreground text-sm max-w-2xl mx-auto">
          Drag the slider to select your estimated property value. See how professional styling and concierge-coordinated sales yield higher net proceeds—leaving more money in your pocket.
        </p>
      </div>

      {/* Slider Controls */}
      <div className="space-y-4 max-w-xl mx-auto">
        <div className="flex justify-between items-center text-sm font-semibold">
          <span className="text-muted-foreground">Estimated Property Value:</span>
          <span className="text-primary text-xl sm:text-2xl font-bold">{formatCurrency(homeValue)}</span>
        </div>
        <input 
          type="range"
          min="500000"
          max="2500000"
          step="10000"
          value={homeValue}
          onChange={(e) => setHomeValue(parseInt(e.target.value, 10))}
          className="w-full h-2 bg-secondary rounded-lg appearance-none cursor-pointer accent-primary"
        />
        <div className="flex justify-between text-xs text-muted-foreground">
          <span>$500k</span>
          <span>$1.5M</span>
          <span>$2.5M</span>
        </div>
      </div>

      {/* Comparison Grid */}
      <div className="grid sm:grid-cols-3 gap-6 pt-4 border-t border-white/5">
        {/* Essential Column */}
        <div className="glass-card p-6 rounded-2xl border border-white/5 space-y-4 relative overflow-hidden flex flex-col justify-between bg-black/10">
          <div className="space-y-1">
            <h4 className="font-bold text-lg text-slate-300">Essential (2%)</h4>
            <p className="text-xs text-muted-foreground">Standard listing without staging</p>
          </div>
          <div className="space-y-2 py-4">
            <div className="flex justify-between text-xs">
              <span className="text-muted-foreground">Est. Sale Price:</span>
              <span className="text-slate-300 font-medium">{formatCurrency(essentialPrice)}</span>
            </div>
            <div className="flex justify-between text-xs">
              <span className="text-muted-foreground">Commission Cost:</span>
              <span className="text-red-400 font-medium">-{formatCurrency(essentialCommission)}</span>
            </div>
          </div>
          <div className="pt-4 border-t border-white/5 space-y-1">
            <span className="text-xs text-muted-foreground block">Net Cash Kept:</span>
            <span className="text-xl sm:text-2xl font-bold text-foreground block">{formatCurrency(essentialProceeds)}</span>
          </div>
        </div>

        {/* Signature Column */}
        <div className="glass-card p-6 rounded-2xl border border-primary/20 shadow-lg shadow-primary/5 space-y-4 relative overflow-hidden flex flex-col justify-between bg-black/10">
          <div className="absolute -right-12 -top-12 w-24 h-24 bg-primary/5 rounded-full blur-xl pointer-events-none" />
          <div className="space-y-1">
            <div className="flex items-center gap-1.5 justify-between">
              <h4 className="font-bold text-lg text-foreground">Signature (3%)</h4>
              <span className="text-[10px] bg-primary/20 border border-primary/40 px-2 py-0.5 rounded-full text-primary font-bold shrink-0">103% Sales Price</span>
            </div>
            <p className="text-xs text-muted-foreground">Virtual staging & premium marketing</p>
          </div>
          <div className="space-y-2 py-4">
            <div className="flex justify-between text-xs">
              <span className="text-muted-foreground">Est. Sale Price (+3%):</span>
              <span className="text-primary font-medium">{formatCurrency(signaturePrice)}</span>
            </div>
            <div className="flex justify-between text-xs">
              <span className="text-muted-foreground">Commission Cost:</span>
              <span className="text-red-400 font-medium">-{formatCurrency(signatureCommission)}</span>
            </div>
          </div>
          <div className="pt-4 border-t border-white/5 space-y-1">
            <div className="flex justify-between items-baseline">
              <span className="text-xs text-muted-foreground block">Net Cash Kept:</span>
              <span className="text-xs text-emerald-400 font-bold">+{formatCurrency(signatureProceeds - essentialProceeds)} Net Gain</span>
            </div>
            <span className="text-xl sm:text-2xl font-bold text-foreground block">{formatCurrency(signatureProceeds)}</span>
          </div>
        </div>

        {/* Elite Column */}
        <div className="glass-card p-6 rounded-2xl border border-primary/40 shadow-xl shadow-primary/10 space-y-4 relative overflow-hidden flex flex-col justify-between bg-black/10">
          <div className="absolute -right-8 -top-8 w-20 h-20 bg-primary/10 rounded-full blur-lg pointer-events-none" />
          <div className="space-y-1">
            <div className="flex items-center gap-1.5 justify-between">
              <h4 className="font-bold text-lg text-primary">Elite Concierge (4%)</h4>
              <span className="text-[10px] bg-primary text-primary-foreground px-2 py-0.5 rounded-full font-bold shrink-0">105% Sales Price</span>
            </div>
            <p className="text-xs text-muted-foreground">Full white-glove prep ($0 upfront)</p>
          </div>
          <div className="space-y-2 py-4">
            <div className="flex justify-between text-xs">
              <span className="text-muted-foreground">Est. Sale Price (+5%):</span>
              <span className="text-primary font-bold">{formatCurrency(elitePrice)}</span>
            </div>
            <div className="flex justify-between text-xs">
              <span className="text-muted-foreground">Commission Cost:</span>
              <span className="text-red-400 font-medium">-{formatCurrency(eliteCommission)}</span>
            </div>
          </div>
          <div className="pt-4 border-t border-white/5 space-y-1">
            <div className="flex justify-between items-baseline">
              <span className="text-xs text-muted-foreground block">Net Cash Kept:</span>
              <span className="text-xs text-emerald-400 font-bold">+{formatCurrency(eliteProceeds - essentialProceeds)} Net Gain</span>
            </div>
            <span className="text-xl sm:text-2xl font-bold text-primary block">{formatCurrency(eliteProceeds)}</span>
          </div>
        </div>
      </div>
    </div>
  )
}
