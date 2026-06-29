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
            className="fixed inset-0 md:left-1/2 md:top-1/2 z-50 w-full md:max-w-4xl md:-translate-x-1/2 md:-translate-y-1/2 p-0 md:px-4 h-full md:h-auto max-h-screen md:max-h-[90vh] overflow-y-auto"
          >
            <div className="glass-card min-h-full md:min-h-0 md:rounded-2xl p-6 md:p-8 border-0 md:border md:border-primary/25 shadow-2xl relative flex flex-col bg-white">
              {/* Close Button */}
              <button
                onClick={onClose}
                className="absolute right-4 top-4 p-2.5 rounded-full bg-background/90 hover:bg-muted text-muted-foreground hover:text-foreground transition-colors border border-border z-10"
              >
                <X className="size-4" />
                <span className="sr-only">Close</span>
              </button>

              {/* Header */}
              <div className="text-center md:text-left mb-6 pt-2">
                <span className="inline-flex items-center gap-2 px-2.5 py-0.5 rounded-full bg-primary/10 text-secondary text-[10px] font-bold mb-2 border border-primary/20">
                  Program Details
                </span>
                <h2 className="text-xl md:text-2xl font-bold text-secondary mb-1 font-serif tracking-tight">
                  Maximize Equity & Time
                </h2>
              </div>

              {/* Two-Column Responsive Layout */}
              <div className="grid md:grid-cols-12 gap-6 items-stretch">
                {/* Left Column: Tab Triggers (30% width on desktop) */}
                <div className="md:col-span-4 flex flex-col gap-2">
                  <span className="hidden md:block text-[10px] font-black text-muted-foreground uppercase tracking-widest mb-1 pl-1">
                    Transition Steps
                  </span>
                  
                  {/* Desktop vertical tab triggers / Mobile horizontal tabs */}
                  <div className="grid grid-cols-3 md:flex md:flex-col gap-1.5 bg-muted/60 md:bg-transparent p-1 md:p-0 rounded-lg">
                    {tabDetails.map((tab, idx) => {
                      const Icon = tab.icon
                      return (
                        <button
                          key={idx}
                          onClick={() => setActiveTab(idx)}
                          className={`flex md:flex-row flex-col items-center gap-2.5 px-3 py-2.5 md:py-3.5 rounded-lg text-[10px] md:text-xs font-bold transition-all text-left w-full ${
                            activeTab === idx
                              ? 'bg-white md:bg-secondary text-secondary md:text-white shadow-xs md:shadow-md border border-primary/25 md:border-transparent'
                              : 'text-muted-foreground hover:text-secondary md:hover:bg-muted'
                          }`}
                        >
                          <Icon className={`size-4 shrink-0 ${activeTab === idx ? 'text-primary' : 'text-muted-foreground'}`} />
                          <span className="truncate">{tab.title}</span>
                        </button>
                      )
                    })}
                  </div>
                </div>

                {/* Right Column: Tab Panel Content (70% width on desktop) */}
                <div className="md:col-span-8 flex flex-col justify-between border-t md:border-t-0 md:border-l border-border pt-6 md:pt-0 md:pl-8 min-h-[220px]">
                  <AnimatePresence mode="wait">
                    <motion.div
                      key={activeTab}
                      initial={{ opacity: 0, y: 5 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -5 }}
                      transition={{ duration: 0.2 }}
                      className="space-y-4"
                    >
                      <div className="space-y-1">
                        <h3 className="font-extrabold text-secondary text-base leading-tight">
                          {currentTab.title}
                        </h3>
                        <p className="text-xs text-primary font-bold">
                          {currentTab.subtitle}
                        </p>
                      </div>

                      <p className="text-xs text-muted-foreground leading-relaxed">
                        {currentTab.description}
                      </p>

                      {/* Deliverables Checklist */}
                      <div className="space-y-2 pt-2">
                        <span className="text-[10px] font-black text-secondary uppercase tracking-wider block">
                          What&apos;s Included:
                        </span>
                        <ul className="grid sm:grid-cols-2 gap-2">
                          {currentTab.checklist.map((item, idx) => (
                            <li key={idx} className="flex items-start gap-2 text-xs">
                              <Check className="size-4 text-emerald-600 shrink-0 mt-0.5 bg-emerald-100/50 p-0.5 rounded-full" />
                              <span className="font-medium text-secondary/80 text-xs leading-snug">{item}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </motion.div>
                  </AnimatePresence>

                  {/* Modal CTA Footer */}
                  <div className="pt-6 mt-6 border-t border-border flex flex-col sm:flex-row items-center justify-between gap-4">
                    <div className="text-center sm:text-left">
                      <p className="text-[10px] text-muted-foreground font-semibold">
                        Free structural assessment call is 100% risk-free.
                      </p>
                    </div>
                    <Button
                      onClick={handleGetStarted}
                      className="bg-primary hover:bg-primary/95 text-primary-foreground font-bold px-8 py-5 h-10 text-xs rounded-lg shadow-md w-full sm:w-auto"
                    >
                      Join the Program
                      <ArrowRight className="ml-2 size-4" />
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  )
}
