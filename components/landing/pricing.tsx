'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { Check } from 'lucide-react'
import { Button } from '@/components/ui/button'

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

interface PricingProps {
  onContactClick: () => void
}

export function Pricing({ onContactClick }: PricingProps) {
  return (
    <section id="pricing" className="py-24 md:py-32 bg-muted/40 relative">
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
            Transparent Pricing
          </span>
          <h2 className="mt-3 text-3xl md:text-4xl lg:text-5xl font-bold text-secondary text-balance font-serif">
            Choose the service level that fits your needs
          </h2>
          <p className="mt-4 text-lg text-muted-foreground text-pretty">
            No hidden fees. No surprises. Just straightforward pricing for
            exceptional service.
          </p>
        </motion.div>

        {/* Unified pricing grid inside a singular card to avoid cards clutter */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          className="glass-card rounded-[24px] bg-white border border-primary/25 shadow-figma-card grid md:grid-cols-3 gap-8 md:gap-0 md:divide-x md:divide-primary/20 relative"
        >
          {plans.map((plan, index) => (
            <div
              key={plan.name}
              className={`relative p-6 sm:p-8 flex flex-col justify-between transition-all duration-300
                ${plan.highlighted ? 'bg-primary/[0.02] rounded-t-2xl md:rounded-none' : ''}
                ${index === 0 ? 'rounded-t-2xl md:rounded-l-2xl md:rounded-tr-none' : ''}
                ${index === 2 ? 'rounded-b-2xl md:rounded-r-2xl md:rounded-bl-none' : ''}
              `}
            >
              <div>
                {/* Popular Badge */}
                {plan.highlighted && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 z-10">
                    <span className="inline-flex items-center rounded-full bg-primary px-4 py-1 text-xs font-bold text-primary-foreground border border-primary/30 shadow-sm">
                      Most Popular
                    </span>
                  </div>
                )}

                {/* Plan Header */}
                <div className="text-center mb-6 pt-2">
                  <h3 className="text-xl font-bold text-secondary mb-2 font-serif">
                    {plan.name}
                  </h3>
                  <div className="flex items-baseline justify-center gap-1">
                    <span className="text-5xl font-extrabold text-secondary">
                      {plan.commission}
                    </span>
                    <span className="text-muted-foreground text-sm font-semibold">commission</span>
                  </div>
                  <p className="mt-3 text-xs text-muted-foreground max-w-[240px] mx-auto leading-relaxed">
                    {plan.description}
                  </p>
                </div>

                {/* Features List */}
                <ul className="space-y-3 mb-8 px-2">
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
              <div className="px-2 pt-4">
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
            </div>
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
    <div className="mt-24 py-12 border-y border-primary/20 space-y-8 max-w-4xl mx-auto relative z-10">
      <div className="text-center space-y-2">
        <span className="text-primary font-bold text-xs uppercase tracking-wider">Interactive Tool</span>
        <h3 className="text-2xl sm:text-3xl font-bold text-secondary font-serif">Home Equity & Net Proceeds Visualizer</h3>
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
          className="w-full h-2 bg-secondary/10 rounded-lg appearance-none cursor-pointer accent-primary border border-border"
        />
        <div className="flex justify-between text-xs text-muted-foreground">
          <span>$500k</span>
          <span>$1.5M</span>
          <span>$2.5M</span>
        </div>
      </div>

      {/* Visual Chart Legend */}
      <div className="flex flex-wrap items-center justify-center gap-6 text-xs font-semibold pt-4 border-t border-border">
        <div className="flex items-center gap-2">
          <span className="w-3.5 h-3.5 rounded bg-gradient-to-r from-emerald-600/70 to-emerald-500/80 border border-emerald-400/20" />
          <span className="text-muted-foreground">Base Net Proceeds (Essential Level)</span>
        </div>
        <div className="flex items-center gap-2">
          <span className="w-3.5 h-3.5 rounded bg-gradient-to-r from-primary to-orange-500 border border-white/10" />
          <span className="text-muted-foreground">Staging Premium Earned (Extra Cash Kept)</span>
        </div>
        <div className="flex items-center gap-2">
          <span className="w-3.5 h-3.5 rounded bg-red-950/50 border border-red-500/30" />
          <span className="text-muted-foreground">Commission Fees</span>
        </div>
      </div>

      {/* Visual Rows */}
      <div className="space-y-8 pt-4">
        
        {/* Tier 1: Essential */}
        <div className="space-y-3">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div className="space-y-1">
              <span className="font-bold text-base text-secondary">Essential (2% Fee)</span>
              <span className="text-xs text-muted-foreground block">Standard listing, no staging</span>
            </div>
            <div className="grid grid-cols-3 gap-4 text-left sm:text-right text-xs font-semibold sm:flex sm:items-center sm:gap-6">
              <div className="text-left sm:text-right">
                <span className="text-[10px] text-muted-foreground block uppercase tracking-wider">Sale Price</span>
                <span className="text-secondary font-medium">{formatCurrency(essentialPrice)}</span>
              </div>
              <div className="text-left sm:text-right">
                <span className="text-[10px] text-muted-foreground block uppercase tracking-wider">Fee (2%)</span>
                <span className="text-red-500 font-medium">-{formatCurrency(essentialCommission)}</span>
              </div>
              <div className="text-left sm:text-right">
                <span className="text-[10px] text-muted-foreground block uppercase tracking-wider">Net Cash</span>
                <span className="text-secondary font-bold text-sm">{formatCurrency(essentialProceeds)}</span>
              </div>
            </div>
          </div>
          <div className="relative w-full h-8 bg-muted rounded-lg overflow-hidden border border-border flex">
            <motion.div 
              style={{ width: `${(essentialProceeds / maxTotal) * 100}%` }}
              className="h-full bg-gradient-to-r from-emerald-600/70 to-emerald-500/80 flex items-center px-3 text-[10px] font-bold text-emerald-100 whitespace-nowrap overflow-hidden"
              layout
            >
              Net Proceeds: {formatCurrency(essentialProceeds)}
            </motion.div>
            <motion.div 
              style={{ width: `${(essentialCommission / maxTotal) * 100}%` }}
              className="h-full bg-red-900/40 border-l border-red-400/30 flex items-center justify-end px-2 text-[9px] font-semibold text-red-700 whitespace-nowrap overflow-hidden"
              layout
            >
              Fee
            </motion.div>
          </div>
        </div>

        {/* Tier 2: Signature */}
        <div className="space-y-3">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div className="space-y-1">
              <span className="font-bold text-base text-secondary flex items-center gap-2">
                Signature (3% Fee)
                <span className="text-[10px] bg-primary/20 border border-primary/45 px-2 py-0.5 rounded-full text-secondary font-bold">
                  +3% Price Lift
                </span>
              </span>
              <span className="text-xs text-muted-foreground block">Virtual staging & marketing</span>
            </div>
            <div className="grid grid-cols-3 gap-4 text-left sm:text-right text-xs font-semibold sm:flex sm:items-center sm:gap-6">
              <div className="text-left sm:text-right">
                <span className="text-[10px] text-muted-foreground block uppercase tracking-wider">Sale Price (+3%)</span>
                <span className="text-secondary font-medium">{formatCurrency(signaturePrice)}</span>
              </div>
              <div className="text-left sm:text-right">
                <span className="text-[10px] text-muted-foreground block uppercase tracking-wider">Fee (3%)</span>
                <span className="text-red-500 font-medium">-{formatCurrency(signatureCommission)}</span>
              </div>
              <div className="text-left sm:text-right">
                <span className="text-[10px] text-muted-foreground block uppercase tracking-wider">Net Cash</span>
                <span className="text-secondary font-bold text-sm flex items-center gap-1 sm:justify-end">
                  {formatCurrency(signatureProceeds)}
                  <span className="text-[10px] text-emerald-600 font-bold hidden sm:inline">
                    (+{formatCurrency(signatureNetGain)})
                  </span>
                </span>
              </div>
            </div>
          </div>
          <div className="relative w-full h-8 bg-muted rounded-lg overflow-hidden border border-border flex">
            <motion.div 
              style={{ width: `${(essentialProceeds / maxTotal) * 100}%` }}
              className="h-full bg-gradient-to-r from-emerald-600/70 to-emerald-500/80 flex items-center px-3 text-[10px] font-bold text-emerald-100 whitespace-nowrap overflow-hidden"
              layout
            >
              Base Net: {formatCurrency(essentialProceeds)}
            </motion.div>
            <motion.div 
              style={{ width: `${(signatureNetGain / maxTotal) * 100}%` }}
              className="h-full bg-gradient-to-r from-primary to-orange-500 flex items-center px-3 text-[10px] font-bold text-secondary whitespace-nowrap overflow-hidden border-l border-white/20 shadow-[inset_0_1px_0_rgba(255,255,255,0.2)]"
              layout
            >
              +{formatCurrency(signatureNetGain)} Gain
            </motion.div>
            <motion.div 
              style={{ width: `${(signatureCommission / maxTotal) * 100}%` }}
              className="h-full bg-red-900/40 border-l border-red-400/30 flex items-center justify-end px-2 text-[9px] font-semibold text-red-700 whitespace-nowrap overflow-hidden"
              layout
            >
              Fee
            </motion.div>
          </div>
        </div>

        {/* Tier 3: Elite */}
        <div className="space-y-3">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div className="space-y-1">
              <span className="font-bold text-base text-primary flex items-center gap-2">
                Elite Concierge (4% Fee)
                <span className="text-[10px] bg-secondary text-secondary-foreground px-2 py-0.5 rounded-full font-bold">
                  +5% Price Lift
                </span>
              </span>
              <span className="text-xs text-muted-foreground block">Full prep, white-glove staging</span>
            </div>
            <div className="grid grid-cols-3 gap-4 text-left sm:text-right text-xs font-semibold sm:flex sm:items-center sm:gap-6">
              <div className="text-left sm:text-right">
                <span className="text-[10px] text-muted-foreground block uppercase tracking-wider">Sale Price (+5%)</span>
                <span className="text-secondary font-medium">{formatCurrency(elitePrice)}</span>
              </div>
              <div className="text-left sm:text-right">
                <span className="text-[10px] text-muted-foreground block uppercase tracking-wider">Fee (4%)</span>
                <span className="text-red-500 font-medium">-{formatCurrency(eliteCommission)}</span>
              </div>
              <div className="text-left sm:text-right">
                <span className="text-[10px] text-muted-foreground block uppercase tracking-wider">Net Cash</span>
                <span className="text-primary font-bold text-sm flex items-center gap-1 sm:justify-end">
                  {formatCurrency(eliteProceeds)}
                  <span className="text-[10px] text-emerald-600 font-bold hidden sm:inline">
                    (+{formatCurrency(eliteNetGain)})
                  </span>
                </span>
              </div>
            </div>
          </div>
          <div className="relative w-full h-8 bg-muted rounded-lg overflow-hidden border border-border flex">
            <motion.div 
              style={{ width: `${(essentialProceeds / maxTotal) * 100}%` }}
              className="h-full bg-gradient-to-r from-emerald-600/70 to-emerald-500/80 flex items-center px-3 text-[10px] font-bold text-emerald-100 whitespace-nowrap overflow-hidden"
              layout
            >
              Base Net: {formatCurrency(essentialProceeds)}
            </motion.div>
            <motion.div 
              style={{ width: `${(eliteNetGain / maxTotal) * 100}%` }}
              className="h-full bg-gradient-to-r from-primary to-orange-500 flex items-center px-3 text-[10px] font-bold text-secondary whitespace-nowrap overflow-hidden border-l border-white/20 shadow-[inset_0_1px_0_rgba(255,255,255,0.2)]"
              layout
            >
              +{formatCurrency(eliteNetGain)} Gain
            </motion.div>
            <motion.div 
              style={{ width: `${(eliteCommission / maxTotal) * 100}%` }}
              className="h-full bg-red-950/40 border-l border-red-400/30 flex items-center justify-end px-2 text-[9px] font-semibold text-red-700 whitespace-nowrap overflow-hidden"
              layout
            >
              Fee
            </motion.div>
          </div>
        </div>

      </div>
    </div>
  )
}
