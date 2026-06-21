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
      profile: 'The Miller Family (Growing from 2 to 4 family members)',
      bottleneck: '3BR Starter Home valued at $520,000 with zero room to grow.',
      blocker: 'Paralyzed by the fear of selling first and being temporarily displaced.'
    },
    transition: {
      prep: '5 Days of cosmetic staging concierge ($0 upfront cost).',
      speed: 'Placed under contract in exactly 9 days at 102% of asking price.',
      security: 'Stay-Put Leaseback agreement, securing 30 days post-closing occupancy.'
    },
    outcome: {
      premium: '+$82,000 secured over typical neighborhood listing values.',
      capital: '$82,000 in net cash equity instantly unlocked and deployed into new purchase.',
      asset: 'Seamlessly transitioned into a 4BR Family Estate with 0 days of double moves.'
    }
  },
  {
    client: 'Sarah & James Chen',
    challenge: {
      profile: 'Sarah & James Chen (Growing family needing suburban schools)',
      bottleneck: '2BR Urban Condo valued at $410,000 with zero room to grow.',
      blocker: 'Paralyzed by the fear of selling first and being temporarily displaced.'
    },
    transition: {
      prep: '72 Hours of cosmetic staging concierge ($0 upfront cost).',
      speed: 'Placed under contract in exactly 9 days at 104% of asking price.',
      security: 'Stay-Put Leaseback agreement, securing 45 days post-closing occupancy.'
    },
    outcome: {
      premium: '+$16,400 secured over typical neighborhood listing values.',
      capital: '$140,000 in net cash equity instantly unlocked and deployed into new purchase.',
      asset: 'Seamlessly transitioned into a 4BR Suburban Smart Home with 0 days of double moves.'
    }
  },
  {
    client: 'The Rodriguez Family',
    challenge: {
      profile: 'The Rodriguez Family (First-time upsizers with 3 kids)',
      bottleneck: '3BR Midtown Bungalow valued at $450,000 with zero room to grow.',
      blocker: 'Paralyzed by the fear of double moves and high renting costs.'
    },
    transition: {
      prep: '4 Days of cosmetic staging concierge ($0 upfront cost).',
      speed: 'Placed under contract in exactly 14 days at 103% of asking price.',
      security: 'Dual-Closing Equity Advance securing single-day closing transition.'
    },
    outcome: {
      premium: '+$80,000 secured over typical neighborhood listing values.',
      capital: '$80,000 in net cash equity instantly unlocked and deployed into new purchase.',
      asset: 'Seamlessly transitioned into a 5BR Lakeside Manor with 0 days of double moves.'
    }
  }
]

export function CaseStudy({ onContactClick, activeStoryIndex }: CaseStudyProps) {
  const activeData = caseStudies[activeStoryIndex] || caseStudies[0]

  return (
    <section className="py-24 md:py-32 bg-muted/40 relative overflow-hidden">
      {/* Background gradients */}
      <div className="absolute top-1/2 left-0 -translate-y-1/2 w-[350px] h-[350px] rounded-full bg-primary/5 blur-[100px] pointer-events-none" />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <span className="text-primary font-bold text-sm uppercase tracking-wider">
            Case Study
          </span>
          <h2 className="mt-3 text-3xl md:text-4xl lg:text-5xl font-bold text-secondary text-balance font-serif">
            Case Study: The Upsize Breakdown
          </h2>
          <p className="mt-4 text-muted-foreground text-base sm:text-lg">
            A dynamic timeline analysis of strategic staging results and logistical transition security.
          </p>
        </motion.div>

        {/* 3-Card Grid System */}
        <div className="grid lg:grid-cols-3 gap-8 items-stretch">
          
          {/* CARD 1: THE INITIAL SITUATION (Left) */}
          <div className="bg-white border border-primary/20 rounded-2xl p-6 sm:p-8 flex flex-col justify-between shadow-xs transition-all duration-300">
            <div>
              <span className="text-xs font-bold text-primary tracking-widest uppercase block mb-3">
                01 / The Challenge
              </span>
              <h3 className="text-xl font-bold text-secondary font-serif mb-6 border-b border-border pb-4">
                The Initial Situation
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
                    <p className="text-sm text-muted-foreground leading-relaxed">{activeData.challenge.bottleneck}</p>
                  </div>

                  <div className="space-y-1 pt-4 border-t border-border/60">
                    <span className="text-[10px] uppercase tracking-wider text-red-500 block font-black flex items-center gap-1.5">
                      <HelpCircle className="size-3.5" />
                      Primary Blocker
                    </span>
                    <p className="text-xs text-muted-foreground leading-relaxed italic">&ldquo;{activeData.challenge.blocker}&rdquo;</p>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>
            
            <div className="mt-8 pt-4 border-t border-border/40 text-xs text-muted-foreground font-semibold flex justify-between">
              <span>Status: Solved</span>
              <span>Timeline Start</span>
            </div>
          </div>

          {/* CARD 2: THE CONCIERGE STRATEGY BRIDGE (Center) */}
          <div className="bg-white border-2 border-[#d4af37] rounded-2xl p-6 sm:p-8 flex flex-col justify-between shadow-md relative transition-all duration-300">
            {/* Transition highlight tag */}
            <div className="absolute -top-3 left-6">
              <span className="bg-[#d4af37] text-secondary font-extrabold text-[9px] uppercase tracking-wider px-3 py-1 rounded-full shadow-xs border border-white/20">
                Key Staging Execution
              </span>
            </div>

            <div>
              <span className="text-xs font-bold text-[#d4af37] tracking-widest uppercase block mb-3 mt-1">
                02 / The Transition Execution
              </span>
              <h3 className="text-xl font-bold text-secondary font-serif mb-6 border-b border-border pb-4">
                Concierge Strategy Bridge
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
                    <p className="text-sm text-muted-foreground leading-relaxed">{activeData.transition.speed}</p>
                  </div>

                  <div className="space-y-1 pt-4 border-t border-border/60">
                    <span className="text-[10px] uppercase tracking-wider text-[#d4af37] block font-black flex items-center gap-1.5">
                      <ShieldCheck className="size-3.5" />
                      Timing Security
                    </span>
                    <p className="text-xs text-muted-foreground leading-relaxed font-semibold">{activeData.transition.security}</p>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>
            
            <div className="mt-8 pt-4 border-t border-border/40 text-xs text-[#d4af37] font-extrabold flex justify-between">
              <span>Status: Active Control</span>
              <span>Concierge Phase</span>
            </div>
          </div>

          {/* CARD 3: THE UNLOCKED RESULTS (Right) */}
          <div className="bg-[#0f2e1e] border border-[#0f2e1e] text-white rounded-2xl p-6 sm:p-8 flex flex-col justify-between shadow-lg transition-all duration-300">
            <div>
              <span className="text-xs font-bold text-primary tracking-widest uppercase block mb-3">
                03 / Final Financial Outcome
              </span>
              <h3 className="text-xl font-bold text-white font-serif mb-6 border-b border-white/10 pb-4">
                The Unlocked Results
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
                    <span className="text-[10px] uppercase tracking-wider text-primary block font-bold flex items-center gap-1">
                      <TrendingUp className="size-3 text-primary" />
                      Final Sale Premium
                    </span>
                    <p className="text-sm font-semibold text-white">{activeData.outcome.premium}</p>
                  </div>
                  
                  <div className="space-y-1">
                    <span className="text-[10px] uppercase tracking-wider text-primary block font-bold flex items-center gap-1 flex-wrap">
                      <DollarSign className="size-3 text-primary" />
                      Capital Transferred
                    </span>
                    <p className="text-sm text-neutral-200 leading-relaxed font-semibold">{activeData.outcome.capital}</p>
                  </div>

                  <div className="space-y-1 pt-4 border-t border-white/10">
                    <span className="text-[10px] uppercase tracking-wider text-primary block font-black flex items-center gap-1.5">
                      <CheckCircle2 className="size-3.5" />
                      Current Asset
                    </span>
                    <p className="text-xs text-neutral-300 leading-relaxed font-semibold">{activeData.outcome.asset}</p>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>
            
            <div className="mt-8 pt-4 border-t border-white/10 text-xs text-primary font-bold flex justify-between">
              <span>Status: Goal Achieved</span>
              <span>100% Client Success</span>
            </div>
          </div>

        </div>

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
