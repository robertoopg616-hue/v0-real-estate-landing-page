'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { X, ArrowRight, Calculator, ShieldCheck, Sparkles, Check } from 'lucide-react'
import { Button } from '@/components/ui/button'

interface LearnMoreModalProps {
  isOpen: boolean
  onClose: () => void
  onContactClick: () => void
}

const tabDetails = [
  {
    title: 'Equity Unlock',
    subtitle: 'Determine your purchasing potential',
    description: 'We perform a complete calculation of your current home equity position to unlock your maximum buying power for your next home upgrade.',
    icon: Calculator,
    checklist: [
      'Comprehensive property valuation report',
      'Debt-to-equity ratio optimization math',
      'Target property purchasing budget analysis',
      'Bridge loan & custom cash flow advice',
    ],
  },
  {
    title: 'Stay-Put Guarantee',
    subtitle: 'Zero timing gaps, zero double moves',
    description: 'Never worry about where you will live between selling and buying. Our contract guarantee protects your occupancy until your new house is ready.',
    icon: ShieldCheck,
    checklist: [
      'Custom moving day coordination schedule',
      'Double mortgage risk cancellation buffer',
      'Direct moving truck & packing assistance',
      'Flexible post-closing leaseback options',
    ],
  },
  {
    title: 'Concierge Prep',
    subtitle: 'Add $30k–$80k value with $0 upfront',
    description: 'We cover all staging and preparation costs upfront. You pay nothing out-of-pocket, and only settle the balance when the property closes.',
    icon: Sparkles,
    checklist: [
      'Bespoke luxury furniture staging',
      'Minor repairs & paint project coverage',
      'Premium photography, video & drone scans',
      'High-end listing launch & marketing campaign',
    ],
  },
]

export function LearnMoreModal({ isOpen, onClose, onContactClick }: LearnMoreModalProps) {
  const [activeTab, setActiveTab] = useState(0)

  const handleGetStarted = () => {
    onClose()
    onContactClick()
  }

  const currentTab = tabDetails[activeTab] || tabDetails[0]

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 z-50 bg-secondary/40 backdrop-blur-md"
          />

          {/* Modal */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ duration: 0.3, ease: 'easeOut' }}
            className="fixed inset-0 md:left-1/2 md:top-1/2 z-50 w-full md:max-w-md md:-translate-x-1/2 md:-translate-y-1/2 p-0 md:px-4 h-full md:h-auto max-h-screen md:max-h-[90vh] overflow-y-auto"
          >
            <div className="glass-card min-h-full md:min-h-0 md:rounded-2xl p-5 md:p-6 border-0 md:border md:border-primary/25 shadow-2xl relative flex flex-col justify-between bg-white">
              {/* Close Button */}
              <button
                onClick={onClose}
                className="absolute right-4 top-4 md:right-4 md:top-4 p-2.5 md:p-2 rounded-full bg-background/90 hover:bg-muted text-muted-foreground hover:text-foreground transition-colors border border-border z-10"
              >
                <X className="size-4" />
                <span className="sr-only">Close</span>
              </button>

              {/* Header */}
              <div className="text-center mb-4 pt-2">
                <span className="inline-flex items-center gap-2 px-2.5 py-0.5 rounded-full bg-primary/10 text-secondary text-[10px] font-bold mb-2 border border-primary/20">
                  Program Details
                </span>
                <h2 className="text-xl md:text-2xl font-bold text-secondary mb-1 font-serif tracking-tight">
                  Maximize Equity & Time
                </h2>
              </div>

              {/* Horizontal Tabs Triggers */}
              <div className="grid grid-cols-3 gap-1 bg-muted/60 p-1 rounded-lg mb-4">
                {tabDetails.map((tab, idx) => {
                  const Icon = tab.icon
                  return (
                    <button
                      key={idx}
                      onClick={() => setActiveTab(idx)}
                      className={`flex flex-col items-center justify-center gap-1 py-1.5 rounded-md text-[10px] font-bold transition-all ${
                        activeTab === idx
                          ? 'bg-white text-secondary shadow-xs border border-primary/15'
                          : 'text-muted-foreground hover:text-secondary'
                      }`}
                    >
                      <Icon className={`size-3.5 ${activeTab === idx ? 'text-primary' : 'text-muted-foreground'}`} />
                      <span>{tab.title.split(' ')[0]}</span>
                    </button>
                  )
                })}
              </div>

              {/* Active Tab Panel Content */}
              <div className="flex-1 flex flex-col justify-between">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={activeTab}
                    initial={{ opacity: 0, y: 5 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -5 }}
                    transition={{ duration: 0.2 }}
                    className="space-y-3"
                  >
                    <div className="space-y-1">
                      <h3 className="font-extrabold text-secondary text-sm">
                        {currentTab.title}
                      </h3>
                      <p className="text-[10px] text-primary font-bold">
                        {currentTab.subtitle}
                      </p>
                    </div>

                    <p className="text-[11px] text-muted-foreground leading-relaxed">
                      {currentTab.description}
                    </p>

                    {/* Checklist */}
                    <div className="space-y-1.5 pt-1">
                      <span className="text-[9px] font-black text-secondary uppercase tracking-wider block">
                        Deliverables Checklist:
                      </span>
                      <ul className="space-y-1">
                        {currentTab.checklist.map((item, idx) => (
                          <li key={idx} className="flex items-start gap-2 text-xs">
                            <Check className="size-3.5 text-emerald-600 shrink-0 mt-0.5" />
                            <span className="font-medium text-secondary/80 text-[11px] leading-tight">{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </motion.div>
                </AnimatePresence>

                {/* CTA Footer */}
                <div className="text-center pt-4 mt-4 border-t border-border">
                  <Button
                    onClick={handleGetStarted}
                    className="bg-primary hover:bg-primary/95 text-primary-foreground font-bold px-8 py-5 h-11 text-sm rounded-lg shadow-md w-full"
                  >
                    Join the Program
                    <ArrowRight className="ml-2 size-4" />
                  </Button>
                  <p className="mt-2 text-[9px] text-muted-foreground font-semibold">
                    Free structural assessment call is 100% risk-free.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  )
}
