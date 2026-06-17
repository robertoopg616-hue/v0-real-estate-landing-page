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
          <h2 className="mt-3 text-3xl md:text-4xl lg:text-5xl font-extrabold text-secondary text-balance">
            Choose the service level that fits your needs
          </h2>
          <p className="mt-4 text-lg text-muted-foreground text-pretty">
            No hidden fees. No surprises. Just straightforward pricing for
            exceptional service.
          </p>
        </motion.div>

        {/* Pricing Cards - 3-column table styled with gold borders */}
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
              className={`relative rounded-2xl p-8 glow-card shadow-figma-card ${
                plan.highlighted
                  ? 'border-2 border-primary bg-white shadow-xl'
                  : 'bg-white border border-primary/20'
              }`}
            >
              {/* Popular Badge */}
              {plan.highlighted && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                  <span className="inline-flex items-center rounded-full bg-primary px-4 py-1 text-xs font-bold text-primary-foreground border border-primary/30 shadow-sm">
                    Most Popular
                  </span>
                </div>
              )}

              {/* Plan Header */}
              <div className="text-center mb-6">
                <h3 className="text-xl font-bold text-secondary mb-2">
                  {plan.name}
                </h3>
                <div className="flex items-baseline justify-center gap-1">
                  <span className="text-5xl font-extrabold text-secondary">
                    {plan.commission}
                  </span>
                  <span className="text-muted-foreground text-sm font-semibold">commission</span>
                </div>
                <p className="mt-3 text-xs text-muted-foreground">
                  {plan.description}
                </p>
              </div>

              {/* Features List */}
              <ul className="space-y-3 mb-8">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-3">
                    <Check className="size-4 text-primary shrink-0 mt-0.5" />
                    <span className="text-xs text-muted-foreground font-medium">
                      {feature}
                    </span>
                  </li>
                ))}
              </ul>

              {/* CTA Button */}
              <Button
                onClick={onContactClick}
                className={`w-full font-bold rounded-lg py-5 shadow-md ${
                  plan.highlighted
                    ? 'bg-primary hover:bg-primary/95 text-primary-foreground'
                    : 'bg-secondary hover:bg-secondary/90 text-secondary-foreground'
                }`}
              >
                {plan.highlighted ? 'Join the Program' : 'Get Started'}
              </Button>
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
    <div className="glass-card mt-20 p-6 sm:p-10 rounded-[10px] shadow-figma-card border border-primary/20 space-y-8 max-w-4xl mx-auto relative z-10 bg-white">
      <div className="text-center space-y-2">
        <span className="text-primary font-bold text-xs uppercase tracking-wider">Interactive Tool</span>
        <h3 className="text-2xl sm:text-3xl font-bold text-secondary">Home Equity & Net Proceeds Visualizer</h3>
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
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
            <div>
              <span className="font-bold text-base text-secondary">Essential (2% Fee)</span>
              <span className="text-xs text-muted-foreground block sm:inline sm:ml-3">Standard listing, no staging</span>
            </div>
            <div className="flex items-center gap-4 text-xs font-semibold">
              <div className="text-right">
                <span className="text-[10px] text-muted-foreground block">Sale Price</span>
                <span className="text-secondary">{formatCurrency(essentialPrice)}</span>
              </div>
              <div className="text-right">
                <span className="text-[10px] text-muted-foreground block">Fee (2%)</span>
                <span className="text-red-500">-{formatCurrency(essentialCommission)}</span>
              </div>
              <div className="text-right">
                <span className="text-[10px] text-muted-foreground block">Net Cash Kept</span>
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
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
            <div>
              <span className="font-bold text-base text-secondary flex items-center gap-2">
                Signature (3% Fee)
                <span className="text-[10px] bg-primary/20 border border-primary/45 px-2 py-0.5 rounded-full text-secondary font-bold">
                  +3% Price Lift
                </span>
              </span>
              <span className="text-xs text-muted-foreground block sm:inline sm:ml-0">Virtual staging & marketing</span>
            </div>
            <div className="flex items-center gap-4 text-xs font-semibold">
              <div className="text-right">
                <span className="text-[10px] text-muted-foreground block">Sale Price (+3%)</span>
                <span className="text-secondary">{formatCurrency(signaturePrice)}</span>
              </div>
              <div className="text-right">
                <span className="text-[10px] text-muted-foreground block">Fee (3%)</span>
                <span className="text-red-500">-{formatCurrency(signatureCommission)}</span>
              </div>
              <div className="text-right">
                <span className="text-[10px] text-muted-foreground block">Net Cash Kept</span>
                <span className="text-secondary font-bold text-sm flex items-center gap-1.5 justify-end">
                  {formatCurrency(signatureProceeds)}
                  <span className="text-[10px] text-emerald-600 font-bold">
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
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
            <div>
              <span className="font-bold text-base text-primary flex items-center gap-2">
                Elite Concierge (4% Fee)
                <span className="text-[10px] bg-secondary text-secondary-foreground px-2 py-0.5 rounded-full font-bold">
                  +5% Price Lift
                </span>
              </span>
              <span className="text-xs text-muted-foreground block sm:inline sm:ml-0">Full prep, white-glove staging</span>
            </div>
            <div className="flex items-center gap-4 text-xs font-semibold">
              <div className="text-right">
                <span className="text-[10px] text-muted-foreground block">Sale Price (+5%)</span>
                <span className="text-secondary">{formatCurrency(elitePrice)}</span>
              </div>
              <div className="text-right">
                <span className="text-[10px] text-muted-foreground block">Fee (4%)</span>
                <span className="text-red-500">-{formatCurrency(eliteCommission)}</span>
              </div>
              <div className="text-right">
                <span className="text-[10px] text-muted-foreground block">Net Cash Kept</span>
                <span className="text-primary font-bold text-sm flex items-center gap-1.5 justify-end">
                  {formatCurrency(eliteProceeds)}
                  <span className="text-[10px] text-emerald-600 font-bold">
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
              className="h-full bg-red-900/40 border-l border-red-400/30 flex items-center justify-end px-2 text-[9px] font-semibold text-red-700 whitespace-nowrap overflow-hidden"
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
