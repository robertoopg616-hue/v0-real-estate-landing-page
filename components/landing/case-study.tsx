'use client'

import { motion, AnimatePresence } from 'framer-motion'
import { ArrowRight, HelpCircle, ShieldCheck, CheckCircle2, TrendingUp, DollarSign, Clock } from 'lucide-react'
import { Button } from '@/components/ui/button'

interface CaseStudyProps {
  onContactClick: () => void
  activeStoryIndex: number
}

const caseStudies = [
  {
    client: 'The Miller Family',
    challenge: {
      profile: 'Miller Family (Growing 2 to 4 members)',
      bottleneck: '$520k starter home (no room to grow)',
      blocker: 'Fear of selling first and temporary displacement'
    },
    transition: {
      prep: '5 Days staging ($0 upfront)',
      speed: 'Under contract in 9 days (102% ask)',
      security: '30-Day Stay-Put Leaseback'
    },
    outcome: {
      premium: '+$82k above neighborhood average',
      capital: '$82k net cash equity unlocked',
      asset: 'Seamless transition, 0 double moves'
    }
  },
  {
    client: 'Sarah & James Chen',
    challenge: {
      profile: 'Chen Family (Suburban school upgrade)',
      bottleneck: '$410k urban condo (cramped footprint)',
      blocker: 'Fear of selling first and displacement'
    },
    transition: {
      prep: '72-Hour staging ($0 upfront)',
      speed: 'Under contract in 9 days (104% ask)',
      security: '45-Day Stay-Put Leaseback'
    },
    outcome: {
      premium: '+$16.4k above neighborhood average',
      capital: '$140k net cash equity unlocked',
      asset: 'Suburban smart home, 0 double moves'
    }
  },
  {
    client: 'The Rodriguez Family',
    challenge: {
      profile: 'Rodriguez Family (Upsizers with 3 kids)',
      bottleneck: '$450k midtown bungalow',
      blocker: 'Fear of double moves and renting costs'
    },
    transition: {
      prep: '4 Days staging ($0 upfront)',
      speed: 'Under contract in 14 days (103% ask)',
      security: 'Dual-Closing Equity Advance'
    },
    outcome: {
      premium: '+$80k above neighborhood average',
      capital: '$80k net cash equity unlocked',
      asset: 'Lakeside manor, 0 double moves'
    }
  }
]

const timelineContainerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.18,
      delayChildren: 0.1,
    }
  }
}

const timelineColumnVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] }
  }
}

export function CaseStudy({ onContactClick, activeStoryIndex }: CaseStudyProps) {
  const activeData = caseStudies[activeStoryIndex] || caseStudies[0]

  return (
    <section className="py-20 md:py-32 bg-background border-t border-neutral-200/60 relative overflow-hidden">
      {/* Background gradients */}
      <div className="absolute top-1/2 left-0 -translate-y-1/2 w-[350px] h-[350px] rounded-full bg-primary/5 blur-[100px] pointer-events-none" />

      <div className="mx-auto max-w-7xl px-4 sm:px-8 md:px-16 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
          className="text-left max-w-3xl mb-16"
        >
          <span className="text-primary font-bold text-sm uppercase tracking-[0.2em] block mb-3">
            Case Study
          </span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-secondary font-serif leading-[1.1] tracking-tight">
            Case Study: The Upsize Breakdown
          </h2>
          <p className="mt-6 text-neutral-500 font-light text-base sm:text-lg max-w-2xl leading-relaxed">
            A dynamic timeline analysis of strategic staging results and logistical transition security.
          </p>
        </motion.div>

        {/* 3-Column De-boxed Timeline Grid */}
        <motion.div 
          variants={timelineContainerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          className="grid lg:grid-cols-3 gap-12 items-stretch"
        >
          
          {/* COLUMN 1: THE Challenge (Left) */}
          <motion.div 
            variants={timelineColumnVariants}
            className="pt-8 border-t-2 border-primary/30 flex flex-col justify-between transition-all duration-300"
          >
            <div>
              <span className="text-xs font-bold text-primary tracking-widest uppercase block mb-3">
                01 / The Challenge
              </span>
              <h3 className="text-xl font-bold text-secondary font-serif mb-6 border-b border-neutral-200/60 pb-4">
                The Challenge
              </h3>
              
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeStoryIndex}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.3 }}
                  className="space-y-6"
                >
                  <div className="space-y-1">
                    <span className="text-[10px] uppercase tracking-wider text-muted-foreground block font-bold">Client Profile</span>
                    <p className="text-sm font-semibold text-secondary">{activeData.challenge.profile}</p>
                  </div>
                  
                  <div className="space-y-1">
                    <span className="text-[10px] uppercase tracking-wider text-muted-foreground block font-bold">Asset Bottleneck</span>
                    <p className="text-sm text-neutral-500 font-light leading-relaxed">{activeData.challenge.bottleneck}</p>
                  </div>

                  <div className="space-y-1 pt-4 border-t border-neutral-200/60">
                    <span className="text-[10px] uppercase tracking-wider text-red-600 block font-black flex items-center gap-1.5">
                      <HelpCircle className="size-3.5" />
                      Primary Blocker
                    </span>
                    <p className="text-xs text-neutral-500 font-light leading-relaxed italic">&ldquo;{activeData.challenge.blocker}&rdquo;</p>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>
            
            <div className="mt-8 pt-4 border-t border-neutral-200/60 text-xs text-muted-foreground font-semibold flex justify-between">
              <span>Status: Active Challenge</span>
              <span>Timeline Start</span>
            </div>
          </motion.div>

          {/* COLUMN 2: THE CONCIERGE STRATEGY BRIDGE (Center) */}
          <motion.div 
            variants={timelineColumnVariants}
            className="pt-8 border-t-2 border-[#d4af37] flex flex-col justify-between relative transition-all duration-300"
          >
            {/* Transition highlight tag */}
            <div className="absolute -top-3 left-0">
              <span className="bg-[#d4af37] text-secondary font-extrabold text-[9px] uppercase tracking-wider px-3 py-1 rounded-full shadow-xs border border-white/20">
                Key Staging Execution
              </span>
            </div>

            <div>
              <span className="text-xs font-bold text-[#d4af37] tracking-widest uppercase block mb-3 mt-1">
                02 / The Transition
              </span>
              <h3 className="text-xl font-bold text-secondary font-serif mb-6 border-b border-neutral-200/60 pb-4">
                Status: Active Control
              </h3>
              
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeStoryIndex}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.3 }}
                  className="space-y-6"
                >
                  <div className="space-y-1">
                    <span className="text-[10px] uppercase tracking-wider text-muted-foreground block font-bold flex items-center gap-1">
                      <Clock className="size-3 text-[#d4af37]" />
                      Proactive Staging
                    </span>
                    <p className="text-sm font-semibold text-secondary">{activeData.transition.prep}</p>
                  </div>
                  
                  <div className="space-y-1">
                    <span className="text-[10px] uppercase tracking-wider text-muted-foreground block font-bold flex items-center gap-1">
                      <TrendingUp className="size-3 text-[#d4af37]" />
                      Market Velocity
                    </span>
                    <p className="text-sm text-neutral-500 font-light leading-relaxed">{activeData.transition.speed}</p>
                  </div>

                  <div className="space-y-1 pt-4 border-t border-neutral-200/60">
                    <span className="text-[10px] uppercase tracking-wider text-[#d4af37] block font-black flex items-center gap-1.5">
                      <ShieldCheck className="size-3.5" />
                      Timing Security
                    </span>
                    <p className="text-xs text-neutral-500 font-light leading-relaxed font-semibold">{activeData.transition.security}</p>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>
            
            <div className="mt-8 pt-4 border-t border-neutral-200/60 text-xs text-[#d4af37] font-extrabold flex justify-between">
              <span>Status: Staging & Leaseback</span>
              <span>Concierge Phase</span>
            </div>
          </motion.div>

          {/* COLUMN 3: THE UNLOCKED RESULTS (Right) */}
          <motion.div 
            variants={timelineColumnVariants}
            className="pt-8 border-t-2 border-emerald-600 flex flex-col justify-between transition-all duration-300"
          >
            <div>
              <span className="text-xs font-bold text-emerald-600 tracking-widest uppercase block mb-3">
                03 / The Outcome
              </span>
              <h3 className="text-xl font-bold text-secondary font-serif mb-6 border-b border-neutral-200/60 pb-4">
                Final Outcome
              </h3>
              
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeStoryIndex}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.3 }}
                  className="space-y-6"
                >
                  <div className="space-y-1">
                    <span className="text-[10px] uppercase tracking-wider text-emerald-600 block font-bold flex items-center gap-1">
                      <TrendingUp className="size-3 text-emerald-600" />
                      Final Sale Premium
                    </span>
                    <p className="text-sm font-semibold text-secondary">{activeData.outcome.premium}</p>
                  </div>
                  
                  <div className="space-y-1">
                    <span className="text-[10px] uppercase tracking-wider text-emerald-600 block font-bold flex items-center gap-1 flex-wrap">
                      <DollarSign className="size-3 text-emerald-600" />
                      Capital Transferred
                    </span>
                    <p className="text-sm text-neutral-500 font-light leading-relaxed">{activeData.outcome.capital}</p>
                  </div>

                  <div className="space-y-1 pt-4 border-t border-neutral-200/60">
                    <span className="text-[10px] uppercase tracking-wider text-emerald-600 block font-black flex items-center gap-1.5">
                      <CheckCircle2 className="size-3.5" />
                      Current Asset
                    </span>
                    <p className="text-xs text-neutral-500 font-light leading-relaxed font-semibold">{activeData.outcome.asset}</p>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>
            
            <div className="mt-8 pt-4 border-t border-neutral-200/60 text-xs text-emerald-600 font-bold flex justify-between">
              <span>Status: Outcome Achieved</span>
              <span>100% Client Success</span>
            </div>
          </motion.div>

        </motion.div>

        {/* Dynamic CTA */}
        <motion.div 
          layout
          className="mt-16 text-center"
        >
          <Button
            size="lg"
            onClick={onContactClick}
            className="w-full sm:w-auto bg-primary hover:bg-primary/95 text-secondary font-bold px-8 py-6 rounded-lg shadow-lg border border-primary/30 transition-all duration-300"
          >
            Plan Your Synchronized Move
            <ArrowRight className="ml-2 size-5" />
          </Button>
        </motion.div>

      </div>
    </section>
  )
}
