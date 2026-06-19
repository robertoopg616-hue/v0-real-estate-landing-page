'use client'

import { useState, useRef, useEffect } from 'react'
import { motion } from 'framer-motion'
import { ArrowRight, CheckCircle, HelpCircle } from 'lucide-react'
import { Button } from '@/components/ui/button'

function BeforeAfterComparison() {
  const [sliderPos, setSliderPos] = useState(50)
  const containerRef = useRef<HTMLDivElement>(null)
  const isDraggingRef = useRef(false)
 
  const handleMove = (clientX: number) => {
    if (!containerRef.current) return
    const rect = containerRef.current.getBoundingClientRect()
    const x = clientX - rect.left
    let percentage = (x / rect.width) * 100
    if (percentage < 0) percentage = 0
    if (percentage > 100) percentage = 100
    setSliderPos(percentage)
  }
 
  const handlePointerDown = (e: React.PointerEvent<HTMLDivElement>) => {
    e.preventDefault()
    handleMove(e.clientX)
    isDraggingRef.current = true
 
    const onPointerMove = (moveEvent: PointerEvent) => {
      handleMove(moveEvent.clientX)
    }
 
    const onPointerUp = () => {
      isDraggingRef.current = false
      window.removeEventListener('pointermove', onPointerMove)
      window.removeEventListener('pointerup', onPointerUp)
    }
 
    window.addEventListener('pointermove', onPointerMove)
    window.addEventListener('pointerup', onPointerUp)
  }
 
  return (
    <div 
      ref={containerRef}
      className="relative w-full aspect-[16/10] sm:aspect-[16/9] rounded-2xl overflow-hidden shadow-2xl border border-primary/20 cursor-ew-resize select-none"
      onPointerDown={handlePointerDown}
    >
      {/* Before Layer (Underneath) */}
      <div 
        className="absolute inset-0 bg-gradient-to-br from-slate-100 to-zinc-200 flex flex-col justify-between p-6 sm:p-10 select-none overflow-hidden z-10"
        style={{ backgroundColor: '#f1f5f9' }}
      >
        {/* Huge background watermark outline */}
        <div className="absolute right-0 bottom-4 text-[10rem] sm:text-[14rem] font-bold text-red-500/[0.02] pointer-events-none select-none font-serif leading-none tracking-tighter">
          BEFORE
        </div>
        {/* Architectural grid motif */}
        <div className="absolute inset-0 opacity-[0.02] pointer-events-none select-none bg-[radial-gradient(#000000_1px,transparent_1px)] [background-size:24px_24px]" />
 
        <div className="flex justify-between items-start z-10">
          <span className="inline-flex items-center rounded-full bg-red-500/10 border border-red-500/20 px-3 py-1 text-xs font-semibold text-red-600">
            Before: Outdated condo
          </span>
          <span className="text-sm font-semibold text-slate-500 font-sans">Valued at: $380,000</span>
        </div>
 
        <div className="max-w-md my-auto space-y-3 z-10 glass-card p-6 rounded-xl border border-primary/10 bg-white/60">
          <h4 className="text-2xl sm:text-3xl font-bold text-secondary font-serif leading-tight">Cramped & Cluttered Condo</h4>
          <p className="text-muted-foreground text-sm sm:text-base leading-relaxed">
            850 sq ft condo. Unstaged, cluttered, outdated rooms hid the condo's true potential, making prospective buyers hesitate and submit lowball offers.
          </p>
        </div>
 
        <div className="flex gap-6 text-sm text-slate-500 border-t border-slate-300 pt-4 z-10 font-sans">
          <div><strong className="text-slate-600">Days on Market:</strong> 45+ Days</div>
          <div><strong className="text-slate-600">Offers:</strong> 0 serious bids</div>
        </div>
      </div>
 
      {/* After Layer (Overlay with Clip-Path) */}
      <div 
        className="absolute inset-0 bg-gradient-to-br from-white via-slate-50 to-primary/5 flex flex-col justify-between p-6 sm:p-10 select-none border-r border-primary/20 overflow-hidden z-20"
        style={{ 
          backgroundColor: '#ffffff',
          clipPath: `inset(0 ${100 - sliderPos}% 0 0)` 
        }}
      >
        {/* Huge background watermark outline */}
        <div className="absolute right-0 bottom-4 text-[10rem] sm:text-[14rem] font-bold text-primary/[0.04] pointer-events-none select-none font-serif leading-none tracking-tighter">
          AFTER
        </div>
        {/* Architectural grid motif */}
        <div className="absolute inset-0 opacity-[0.02] pointer-events-none select-none bg-[radial-gradient(#000000_1px,transparent_1px)] [background-size:24px_24px]" />
        
        {/* Ambient glow */}
        <div className="absolute -left-20 -top-20 w-60 h-60 bg-primary/10 rounded-full blur-[100px] pointer-events-none select-none animate-pulse" />
 
        <div className="flex justify-between items-start w-full z-10">
          <span className="inline-flex items-center rounded-full bg-primary/10 border border-primary/30 px-3 py-1 text-xs font-semibold text-primary">
            After: Concierge Staging
          </span>
          <span className="text-sm font-bold text-emerald-600 font-sans">SOLD: $425,000 (+12%)</span>
        </div>
 
        <div className="max-w-md my-auto space-y-3 z-10 glass-card p-6 rounded-xl border border-primary/20 bg-white/70 shadow-lg">
          <h4 className="text-2xl sm:text-3xl font-bold text-secondary font-serif leading-tight">Premium, Lit & Beautiful Vibe</h4>
          <p className="text-muted-foreground text-sm sm:text-base leading-relaxed">
            Bespoke staging, professional styling, and beautiful high-end lighting completely unlocked the true spatial value, triggering a premium bidding war.
          </p>
        </div>
 
        <div className="flex gap-6 text-sm text-muted-foreground border-t border-primary/20 pt-4 z-10 font-sans">
          <div><strong className="text-secondary font-bold">Days on Market:</strong> 12 Days</div>
          <div><strong className="text-emerald-600 font-bold">Offers:</strong> 4 competitive bids</div>
        </div>
      </div>
 
      {/* Slider Bar */}
      <div 
        className="absolute top-0 bottom-0 w-[3px] bg-primary z-30 pointer-events-none"
        style={{ left: `${sliderPos}%` }}
      >
        {/* Slider Handle */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-primary border-4 border-background shadow-2xl flex items-center justify-center select-none group">
          <div className="absolute -inset-2 rounded-full bg-primary/30 blur-sm animate-pulse pointer-events-none" />
          <svg className="w-5 h-5 text-primary-foreground transform group-hover:scale-110 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M8 9l4-4 4 4m0 6l-4 4-4-4" />
          </svg>
        </div>
      </div>
    </div>
  )
}

interface CaseStudyProps {
  onContactClick: () => void
}

export function CaseStudy({ onContactClick }: CaseStudyProps) {
  return (
    <section className="py-24 md:py-32 bg-muted/30 relative overflow-hidden">
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
            Featured Case Study
          </span>
          <h2 className="mt-3 text-3xl md:text-4xl lg:text-5xl font-bold text-secondary text-balance font-serif">
            Real-Life Equity Success Story
          </h2>
          <p className="mt-4 text-muted-foreground text-base sm:text-lg">
            Slide the interactive divider below to see how our premium staging transformed a cramped condo, yielding $45,000 more for a growing family.
          </p>
        </motion.div>

        {/* Before/After comparison and challenge details */}
        <div className="grid lg:grid-cols-12 gap-12 items-center">
          {/* Draggable Slider Column */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-7 w-full"
          >
            <BeforeAfterComparison />
          </motion.div>

          {/* Details Column */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-5 space-y-8"
          >
            {/* Challenge Block */}
            <div className="pl-6 border-l-2 border-red-500/30 space-y-3">
              <div className="flex items-center gap-2 text-red-500 font-bold text-xs uppercase tracking-wider">
                <HelpCircle className="size-4 shrink-0" />
                The Challenge
              </div>
              <h3 className="text-xl font-bold text-secondary font-serif">Sarah & David&apos;s Upsizing Anxiety</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Expecting their second child in an 850 sq ft condo, Sarah was terrified of moving twice or being stuck with a double mortgage. They had no cash flow for upfront renovation or temporary rent.
              </p>
            </div>

            {/* Results Block */}
            <div className="pl-6 border-l-2 border-primary/45 space-y-3">
              <div className="flex items-center gap-2 text-primary font-bold text-xs uppercase tracking-wider">
                <CheckCircle className="size-4 shrink-0" />
                The Solution & Result
              </div>
              <h3 className="text-xl font-bold text-secondary font-serif">Synchronized Move & $45,000 Gain</h3>
              <p className="text-sm text-muted-foreground leading-relaxed font-normal">
                Our <strong className="text-foreground">Concierge Prep</strong> staged their condo with <strong className="text-foreground">$0 upfront cost</strong>. We coordinated a single-day closing, letting them move directly into their new 2,400 sq ft home without paying double rent or temporary storage.
              </p>
            </div>

            {/* CTA Button */}
            <div className="pt-2">
              <Button
                size="lg"
                onClick={onContactClick}
                className="w-full sm:w-auto bg-primary hover:bg-primary/95 text-primary-foreground font-bold px-8 py-6 rounded-lg shadow-lg border border-primary/30"
              >
                Plan Your Synchronized Move
                <ArrowRight className="ml-2 size-5" />
              </Button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
