'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { Check } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'

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

const visualizerTableContainerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.05,
    }
  }
}

const visualizerTableColumnVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] }
  }
}

interface PricingProps {
  onContactClick: () => void
}

export function Pricing({ onContactClick }: PricingProps) {
  return (
    <section id="pricing" className="py-20 md:py-32 bg-background border-t border-neutral-200/60 relative">
      <div className="mx-auto max-w-7xl px-4 sm:px-8 md:px-16">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
          className="text-left max-w-3xl mb-20"
        >
          <span className="text-primary font-bold text-sm uppercase tracking-[0.2em] block mb-3">
            Transparent Pricing
          </span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-secondary font-serif leading-[1.1] tracking-tight">
            Choose the service level that fits your needs.
          </h2>
          <p className="mt-6 text-neutral-500 font-light text-base sm:text-lg max-w-2xl leading-relaxed">
            No hidden fees. No surprises. Just straightforward pricing for exceptional service.
          </p>
        </motion.div>

        {/* Unified pricing grid inside a singular card to avoid cards clutter */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          className="grid md:grid-cols-3 gap-12 md:gap-0 md:divide-x md:divide-neutral-200/60 relative"
        >
          {plans.map((plan, index) => (
            <motion.div
              key={plan.name}
              variants={itemVariants}
              className={`relative p-6 sm:p-8 flex flex-col justify-between transition-all duration-300
                ${plan.highlighted ? 'bg-primary/[0.01]' : ''}
                ${index > 0 ? 'md:pl-12' : ''}
              `}
            >
              <div>
                {/* Popular Badge */}
                {plan.highlighted && (
                  <div className="absolute -top-4 left-6 md:left-12 z-10">
                    <span className="inline-flex items-center rounded-full bg-primary px-4 py-1 text-xs font-bold text-primary-foreground border border-primary/30 shadow-sm">
                      Most Popular
                    </span>
                  </div>
                )}

                {/* Plan Header */}
                <div className="text-left mb-6 pt-2">
                  <h3 className="text-xl font-bold text-secondary mb-2 font-serif">
                    {plan.name}
                  </h3>
                  <div className="flex items-baseline gap-1">
                    <span className="text-5xl font-extrabold text-secondary">
                      {plan.commission}
                    </span>
                    <span className="text-muted-foreground text-sm font-semibold">commission</span>
                  </div>
                  <p className="mt-3 text-xs text-muted-foreground max-w-[240px] leading-relaxed">
                    {plan.description}
                  </p>
                </div>

                {/* Features List */}
                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-3">
                      <Check className="size-4 text-primary shrink-0 mt-0.5" />
                      <span className="text-xs text-muted-foreground font-medium leading-relaxed">
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* CTA Button */}
              <div className="pt-4">
                <Button
                  onClick={onContactClick}
                  className={`w-full font-bold rounded-lg py-5 shadow-sm transition-all ${
                    plan.highlighted
                      ? 'bg-primary hover:bg-primary/95 text-primary-foreground border border-primary/30'
                      : 'bg-secondary hover:bg-secondary/95 text-secondary-foreground'
                  }`}
                >
                  {plan.highlighted ? 'Join the Program' : 'Get Started'}
                </Button>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Equity Calculator */}
        <EquityCalculator />

        {/* Legal compliance disclaimer */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-10 text-center text-xs text-muted-foreground font-bold"
        >
          * Buyer agent compensation separate. Contact us for detailed terms and conditions.
        </motion.p>
      </div>
    </section>
  )
}

function EquityCalculator() {
  const [homeValue, setHomeValue] = useState(1000000)
  const [hasInteracted, setHasInteracted] = useState(false)
  const [isGateUnlocked, setIsGateUnlocked] = useState(false)
  const [email, setEmail] = useState('')

  // Calculations
  const essentialPrice = homeValue
  const essentialCommission = essentialPrice * 0.02
  const essentialProceeds = essentialPrice - essentialCommission

  const signaturePrice = homeValue * 1.03
  const signatureCommission = signaturePrice * 0.03
  const signatureProceeds = signaturePrice - signatureCommission
  const signatureNetGain = signatureProceeds - essentialProceeds

  const elitePrice = homeValue * 1.05
  const eliteCommission = elitePrice * 0.04
  const eliteProceeds = elitePrice - eliteCommission
  const eliteNetGain = eliteProceeds - essentialProceeds

  const maxTotal = elitePrice // Max scale baseline is the elite sale price

  const formatCurrency = (val: number) => {
    return '$' + Math.round(val).toLocaleString('en-US')
  }

  return (
    <div className="mt-16 py-12 border-y border-primary/20 space-y-8 max-w-4xl mx-auto relative z-10">
      <div className="text-center space-y-2">
        <h3 className="text-2xl sm:text-3xl font-bold text-secondary font-serif">Home Equity & Net Proceeds Visualizer</h3>
        <p className="text-muted-foreground text-sm max-w-2xl mx-auto">
          Drag the slider to select your estimated property value. See how professional styling and concierge-coordinated sales yield higher net proceeds—leaving more money in your pocket.
        </p>
      </div>

      {/* Slider Controls */}
      <div className="space-y-4 max-w-xl mx-auto px-2">
        <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-1 sm:gap-4 text-center sm:text-left text-sm font-semibold">
          <span className="text-muted-foreground text-xs sm:text-sm">Estimated Property Value:</span>
          <span className="text-primary text-2xl sm:text-2xl font-extrabold">{formatCurrency(homeValue)}</span>
        </div>
        <input 
          type="range"
          min="500000"
          max="2500000"
          step="10000"
          value={homeValue}
          onChange={(e) => {
            setHomeValue(parseInt(e.target.value, 10))
            if (!isGateUnlocked) {
              setHasInteracted(true)
            }
          }}
          className="w-full h-2 bg-secondary/10 rounded-lg appearance-none cursor-pointer accent-primary border border-border"
        />
        <div className="flex justify-between text-xs text-muted-foreground">
          <span>$500k</span>
          <span>$1.5M</span>
          <span>$2.5M</span>
        </div>
      </div>

      {/* Visual Chart Legend */}
      <div className="flex flex-col items-center justify-center gap-2 pt-4 border-t border-border">
        <div className="flex flex-wrap items-center justify-center gap-6 text-xs font-semibold">
          <div className="flex items-center gap-2">
            <span className="w-3.5 h-3.5 rounded bg-emerald-600/80 border border-emerald-500/20" />
            <span className="text-muted-foreground">Base Net Proceeds (Essential Level)</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="w-3.5 h-3.5 rounded bg-gradient-to-r from-primary to-orange-500 border border-white/10" />
            <span className="text-muted-foreground">Staging Premium Earned (Extra Cash Kept)</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="w-3.5 h-3.5 rounded bg-[#5c2424] border border-[#7a2e2e]/30" />
            <span className="text-muted-foreground">Commission Fees</span>
          </div>
        </div>
        <p className="text-[10px] text-center text-muted-foreground mt-2 font-medium max-w-lg">
          *Staging Premium Earned: Average 3-7% home value increase generated via our $0 upfront cosmetic staging concierge.
        </p>
      </div>

      {/* Visual Rows replaced with Dynamic Column Chart */}
      <div className="space-y-8 pt-4">
        
        {/* Dynamic Column Chart */}
        <div className="h-72 sm:h-96 w-full flex items-end justify-between sm:justify-around gap-4 pt-10 border-b border-border pb-6 px-2 sm:px-4 bg-slate-50/50 rounded-xl border border-primary/10">
          {/* Column 1: Essential */}
          <div className="flex flex-col items-center gap-2 w-full max-w-[150px] h-full justify-end">
            <div className="text-center space-y-0.5">
              <span className="text-[9px] font-bold text-muted-foreground uppercase tracking-wider block">Essential</span>
              <span className="text-xs sm:text-sm font-black text-secondary">
                {hasInteracted && !isGateUnlocked ? '$•,•••,•••' : formatCurrency(essentialProceeds)}
              </span>
            </div>
            <div className="w-full h-full flex flex-col justify-end">
              <motion.div 
                style={{ height: `${(essentialPrice / maxTotal) * 100}%` }}
                className="w-full rounded-t-lg overflow-hidden flex flex-col justify-between shadow-xs border border-primary/20"
                layout
              >
                {/* Top: Commission block (Burgundy/Brown) */}
                <motion.div 
                  style={{ height: `${(essentialCommission / essentialPrice) * 100}%` }}
                  className="w-full bg-[#5c2424] flex items-center justify-center p-1 text-[9px] font-bold text-red-200 border-b border-black/10 shrink-0"
                  layout
                >
                  {hasInteracted && !isGateUnlocked ? '-$••,•••' : `-${formatCurrency(essentialCommission)}`}
                </motion.div>
                {/* Bottom: Base Net Proceeds block (Green) */}
                <div className="w-full flex-1 bg-emerald-600/80 flex items-center justify-center">
                  <span className="text-[9px] font-bold text-emerald-100 rotate-90 sm:rotate-0 whitespace-nowrap">Base Net</span>
                </div>
              </motion.div>
            </div>
          </div>

          {/* Column 2: Signature */}
          <div className="flex flex-col items-center gap-2 w-full max-w-[150px] h-full justify-end">
            <div className="text-center space-y-0.5">
              <span className="text-[9px] font-bold text-secondary uppercase tracking-wider block">Signature</span>
              <span className="text-xs sm:text-sm font-black text-primary">
                {hasInteracted && !isGateUnlocked ? '$•,•••,•••' : formatCurrency(signatureProceeds)}
              </span>
            </div>
            <div className="w-full h-full flex flex-col justify-end">
              <motion.div 
                style={{ height: `${(signaturePrice / maxTotal) * 100}%` }}
                className="w-full rounded-t-lg overflow-hidden flex flex-col justify-between shadow-xs border border-primary/20"
                layout
              >
                {/* Top: Commission block (Burgundy/Brown) */}
                <motion.div 
                  style={{ height: `${(signatureCommission / signaturePrice) * 100}%` }}
                  className="w-full bg-[#5c2424] flex items-center justify-center p-1 text-[9px] font-bold text-red-200 border-b border-black/10 shrink-0"
                  layout
                >
                  {hasInteracted && !isGateUnlocked ? '-$••,•••' : `-${formatCurrency(signatureCommission)}`}
                </motion.div>
                {/* Middle: Staging Gain block (Orange/Gold) */}
                <motion.div 
                  style={{ height: `${(signatureNetGain / signaturePrice) * 100}%` }}
                  className="w-full bg-gradient-to-b from-primary to-orange-500 flex items-center justify-center p-1 text-[9px] font-bold text-secondary shrink-0"
                  layout
                >
                  {hasInteracted && !isGateUnlocked ? '+$••,•••' : `+${formatCurrency(signatureNetGain)}`}
                </motion.div>
                {/* Bottom: Base Net Proceeds block (Green) */}
                <div className="w-full flex-1 bg-emerald-600/80 flex items-center justify-center">
                  <span className="text-[9px] font-bold text-emerald-100 hidden sm:inline">Base Net</span>
                </div>
              </motion.div>
            </div>
          </div>

          {/* Column 3: Elite */}
          <div className="flex flex-col items-center gap-2 w-full max-w-[150px] h-full justify-end">
            <div className="text-center space-y-0.5">
              <span className="text-[9px] font-bold text-primary uppercase tracking-wider block">Elite</span>
              <span className="text-xs sm:text-sm font-black text-primary">
                {hasInteracted && !isGateUnlocked ? '$•,•••,•••' : formatCurrency(eliteProceeds)}
              </span>
            </div>
            <div className="w-full h-full flex flex-col justify-end">
              <motion.div 
                style={{ height: `${(elitePrice / maxTotal) * 100}%` }}
                className="w-full rounded-t-lg overflow-hidden flex flex-col justify-between shadow-xs border border-primary/30"
                layout
              >
                {/* Top: Commission block (Burgundy/Brown) */}
                <motion.div 
                  style={{ height: `${(eliteCommission / elitePrice) * 100}%` }}
                  className="w-full bg-[#5c2424] flex items-center justify-center p-1 text-[9px] font-bold text-red-200 border-b border-black/10 shrink-0"
                  layout
                >
                  {hasInteracted && !isGateUnlocked ? '-$••,•••' : `-${formatCurrency(eliteCommission)}`}
                </motion.div>
                {/* Middle: Staging Gain block (Orange/Gold) */}
                <motion.div 
                  style={{ height: `${(eliteNetGain / elitePrice) * 100}%` }}
                  className="w-full bg-gradient-to-b from-primary to-orange-500 flex items-center justify-center p-1 text-[9px] font-bold text-secondary shrink-0"
                  layout
                >
                  {hasInteracted && !isGateUnlocked ? '+$••,•••' : `+${formatCurrency(eliteNetGain)}`}
                </motion.div>
                {/* Bottom: Base Net Proceeds block (Green) */}
                <div className="w-full flex-1 bg-emerald-600/80 flex items-center justify-center">
                  <span className="text-[9px] font-bold text-emerald-100 hidden sm:inline">Base Net</span>
                </div>
              </motion.div>
            </div>
          </div>
        </div>

        {/* Detailed Metrics Summary Gate */}
        {hasInteracted && !isGateUnlocked ? (
          <div className="bg-white border border-primary/25 rounded-2xl p-6 sm:p-8 text-center max-w-lg mx-auto shadow-md space-y-4 relative overflow-hidden mt-6">
            <div className="absolute inset-0 opacity-[0.02] bg-[radial-gradient(#000000_1px,transparent_1px)] [background-size:16px_16px]" />
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-primary/10 text-secondary text-[10px] font-bold border border-primary/20">
              Personalized Equity Report
            </span>
            <h4 className="text-base sm:text-lg font-bold text-secondary max-w-sm mx-auto">
              Get a free, personalized equity estimate report sent directly to your inbox.
            </h4>
            <form 
              onSubmit={(e) => { 
                e.preventDefault()
                if (email) setIsGateUnlocked(true)
              }} 
              className="flex flex-col sm:flex-row gap-3 pt-2 relative z-10"
            >
              <Input
                type="email"
                placeholder="Enter Email Address"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="bg-white border-primary/30 focus-visible:ring-1 focus-visible:ring-primary/45 focus:border-primary text-xs h-10 px-3 flex-1"
              />
              <Button type="submit" className="bg-primary hover:bg-primary/95 text-primary-foreground font-bold px-6 py-2.5 h-10 text-xs shadow-sm">
                Unlock Estimate
              </Button>
            </form>
            <p className="text-[10px] text-muted-foreground font-semibold">
              Instant access. We protect your data privacy.
            </p>
          </div>
        ) : (
          <motion.div 
            variants={visualizerTableContainerVariants}
            initial="hidden"
            animate="visible"
            className="grid md:grid-cols-3 gap-12 pt-6 md:divide-x md:divide-neutral-200/60"
          >
            {/* Column 1: Essential */}
            <motion.div variants={visualizerTableColumnVariants} className="space-y-3 transition-all duration-300">
              <div className="border-b border-neutral-200/60 pb-2">
                <span className="font-bold text-sm text-secondary block">Essential (2% Fee)</span>
                <span className="text-[10px] text-muted-foreground">Standard listing, no staging</span>
              </div>
              <div className="space-y-1.5 text-xs">
                <div className="flex justify-between">
                  <span className="text-muted-foreground font-light">Sale Price:</span>
                  <span className="font-semibold text-secondary">{formatCurrency(essentialPrice)}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground font-light">Commission Fee:</span>
                  <span className="font-semibold text-red-500">-{formatCurrency(essentialCommission)}</span>
                </div>
                <div className="flex justify-between border-t border-neutral-200/60 pt-1.5 font-bold">
                  <span className="text-secondary">Net Proceeds:</span>
                  <span className="text-secondary">{formatCurrency(essentialProceeds)}</span>
                </div>
              </div>
            </motion.div>

            {/* Column 2: Signature */}
            <motion.div variants={visualizerTableColumnVariants} className="space-y-3 relative transition-all duration-300 md:pl-12">
              <span className="absolute -top-6 left-12 bg-primary text-primary-foreground text-[8px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-full border border-primary/30 shadow-sm">
                Popular
              </span>
              <div className="border-b border-neutral-200/60 pb-2">
                <span className="font-bold text-sm text-secondary block">Signature (3% Fee)</span>
                <span className="text-[10px] text-muted-foreground">Virtual staging & marketing</span>
              </div>
              <div className="space-y-1.5 text-xs">
                <div className="flex justify-between">
                  <span className="text-muted-foreground font-light">Sale Price (+3%):</span>
                  <span className="font-semibold text-secondary">{formatCurrency(signaturePrice)}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground font-light">Commission Fee:</span>
                  <span className="font-semibold text-red-500">-{formatCurrency(signatureCommission)}</span>
                </div>
                <div className="flex justify-between border-t border-neutral-200/60 pt-1.5 font-bold">
                  <span className="text-secondary">Net Proceeds:</span>
                  <span className="text-primary">{formatCurrency(signatureProceeds)}</span>
                </div>
              </div>
            </motion.div>

            {/* Column 3: Elite */}
            <motion.div variants={visualizerTableColumnVariants} className="space-y-3 transition-all duration-300 md:pl-12">
              <div className="border-b border-neutral-200/60 pb-2">
                <span className="font-bold text-sm text-primary block">Elite Concierge (4% Fee)</span>
                <span className="text-[10px] text-muted-foreground">Full prep, white-glove staging</span>
              </div>
              <div className="space-y-1.5 text-xs">
                <div className="flex justify-between">
                  <span className="text-muted-foreground font-light">Sale Price (+5%):</span>
                  <span className="font-semibold text-secondary">{formatCurrency(elitePrice)}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground font-light">Commission Fee:</span>
                  <span className="font-semibold text-red-500">-{formatCurrency(eliteCommission)}</span>
                </div>
                <div className="flex justify-between border-t border-neutral-200/60 pt-1.5 font-bold">
                  <span className="text-primary">Net Proceeds:</span>
                  <span className="text-primary">{formatCurrency(eliteProceeds)}</span>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}

      </div>
    </div>
  )
}

