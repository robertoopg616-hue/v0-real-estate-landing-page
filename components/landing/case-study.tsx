'use client'

import { useState, useRef, useEffect } from 'react'
import { motion } from 'framer-motion'
import { ArrowRight, Home, Users, TrendingUp, CheckCircle, HelpCircle } from 'lucide-react'
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

  const handleTouchMove = (e: TouchEvent) => {
    if (!isDraggingRef.current) return
    handleMove(e.touches[0].clientX)
  }

  const handleMouseMove = (e: MouseEvent) => {
    if (!isDraggingRef.current) return
    handleMove(e.clientX)
  }

  const handleMouseUp = () => {
    isDraggingRef.current = false
    document.removeEventListener('mousemove', handleMouseMove)
    document.removeEventListener('mouseup', handleMouseUp)
  }

  const handleTouchEnd = () => {
    isDraggingRef.current = false
    document.removeEventListener('touchmove', handleTouchMove)
    document.removeEventListener('touchend', handleTouchEnd)
  }

  const handleMouseDown = (e: React.MouseEvent) => {
    e.preventDefault()
    isDraggingRef.current = true
    document.addEventListener('mousemove', handleMouseMove)
    document.addEventListener('mouseup', handleMouseUp)
  }

  const handleTouchStart = () => {
    isDraggingRef.current = true
    document.addEventListener('touchmove', handleTouchMove)
    document.addEventListener('touchend', handleTouchEnd)
  }

  useEffect(() => {
    return () => {
      document.removeEventListener('mousemove', handleMouseMove)
      document.removeEventListener('mouseup', handleMouseUp)
      document.removeEventListener('touchmove', handleTouchMove)
      document.removeEventListener('touchend', handleTouchEnd)
    }
  }, [])

  return (
    <div 
      ref={containerRef}
      className="relative w-full aspect-[16/10] sm:aspect-[16/9] rounded-2xl overflow-hidden shadow-2xl border border-white/10"
      onMouseMove={(e) => {
        if (!isDraggingRef.current) {
          const rect = containerRef.current?.getBoundingClientRect()
          if (rect) {
            const x = e.clientX - rect.left
            const percentage = (x / rect.width) * 100
            setSliderPos(percentage)
          }
        }
      }}
    >
      {/* Before Layer (Underneath) */}
      <div 
        className="absolute inset-0 bg-gradient-to-br from-slate-900 to-zinc-950 flex flex-col justify-between p-6 sm:p-10 select-none"
        style={{ backgroundColor: '#090f1e' }}
      >
        <div className="flex justify-between items-start">
          <span className="inline-flex items-center rounded-full bg-red-500/10 border border-red-500/20 px-3 py-1 text-xs font-semibold text-red-400">
            Before: Outdated condo
          </span>
          <span className="text-sm font-medium text-slate-500">Valued at: $380,000</span>
        </div>
        <div className="max-w-md my-auto space-y-3">
          <h4 className="text-2xl sm:text-3xl font-bold text-slate-300">Cramped & Cluttered Condo</h4>
          <p className="text-slate-400 text-sm sm:text-base leading-relaxed">
            850 sq ft condo. Unstaged, cluttered, outdated rooms hid the condo's true potential, making prospective buyers hesitate and submit lowball offers.
          </p>
        </div>
        <div className="flex gap-6 text-sm text-slate-500 border-t border-slate-800 pt-4">
          <div><strong className="text-slate-400">Days on Market:</strong> 45+ Days</div>
          <div><strong className="text-slate-400">Offers:</strong> 0 serious bids</div>
        </div>
      </div>

      {/* After Layer (Overlay with Clip-Path) */}
      <div 
        className="absolute inset-0 bg-gradient-to-br from-slate-950 to-slate-900 flex flex-col justify-between p-6 sm:p-10 select-none border-r border-primary/20"
        style={{ 
          backgroundColor: '#0f172a',
          clipPath: `inset(0 ${100 - sliderPos}% 0 0)` 
        }}
      >
        <div className="flex justify-between items-start w-full">
          <span className="inline-flex items-center rounded-full bg-primary/20 border border-primary/40 px-3 py-1 text-xs font-semibold text-primary">
            After: Concierge Staging
          </span>
          <span className="text-sm font-semibold text-primary">SOLD: $425,000 (+12%)</span>
        </div>
        <div className="max-w-md my-auto space-y-3">
          <h4 className="text-2xl sm:text-3xl font-bold text-foreground">Premium, Lit & Beautiful Vibe</h4>
          <p className="text-muted-foreground text-sm sm:text-base leading-relaxed">
            Bespoke staging, professional styling, and beautiful high-end lighting completely unlocked the true spatial value, triggering a premium bidding war.
          </p>
        </div>
        <div className="flex gap-6 text-sm text-muted-foreground border-t border-white/5 pt-4">
          <div><strong className="text-foreground">Days on Market:</strong> 12 Days</div>
          <div><strong className="text-foreground">Offers:</strong> 4 competitive bids</div>
        </div>
      </div>

      {/* Slider Bar */}
      <div 
        className="absolute top-0 bottom-0 w-[3px] bg-primary cursor-ew-resize z-30"
        style={{ left: `${sliderPos}%` }}
        onMouseDown={handleMouseDown}
        onTouchStart={handleTouchStart}
      >
        {/* Slider Handle */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-primary border-4 border-background shadow-2xl flex items-center justify-center cursor-ew-resize select-none">
          <svg className="w-5 h-5 text-background" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M8 9l4-4 4 4m0 6l-4 4-4-4" />
          </svg>
        </div>
      </div>
    </div>
  )
}

export function CaseStudy() {
  const scrollToContact = () => {
    const element = document.querySelector('#contact')
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <section className="py-24 md:py-32 bg-secondary/30 relative overflow-hidden">
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
          <span className="text-primary font-semibold text-sm uppercase tracking-wider">
            Featured Case Study
          </span>
          <h2 className="mt-3 text-3xl md:text-4xl lg:text-5xl font-bold text-foreground text-balance">
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
            className="lg:col-span-5 space-y-6"
          >
            {/* Challenge Card */}
            <div className="glass-card p-6 rounded-2xl border border-white/5 space-y-3">
              <div className="flex items-center gap-2 text-red-400 font-bold text-sm">
                <HelpCircle className="size-5 shrink-0" />
                The Challenge
              </div>
              <h3 className="text-xl font-semibold text-foreground">Sarah & David's Upsizing Anxiety</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Expecting their second child in an 850 sq ft condo, Sarah was terrified of moving twice or being stuck with a double mortgage. They had no cash flow for upfront renovation or temporary rent.
              </p>
            </div>

            {/* Results Card */}
            <div className="glass-card p-6 rounded-2xl border border-primary/20 shadow-lg shadow-primary/5 space-y-3">
              <div className="flex items-center gap-2 text-primary font-bold text-sm">
                <CheckCircle className="size-5 shrink-0" />
                The Solution & Result
              </div>
              <h3 className="text-xl font-semibold text-foreground">Synchronized Move & $45,000 Gain</h3>
              <p className="text-sm text-muted-foreground leading-relaxed font-normal">
                Our **Concierge Prep** staged their condo with **$0 upfront cost**. We coordinated a single-day closing, letting them move directly into their new 2,400 sq ft home without paying double rent or temporary storage.
              </p>
            </div>

            {/* CTA Button */}
            <div className="pt-2">
              <Button
                size="lg"
                onClick={scrollToContact}
                className="w-full sm:w-auto bg-primary hover:bg-primary/90 text-primary-foreground font-semibold px-8 py-6 rounded-lg shadow-lg shadow-primary/20 transition-all hover:shadow-xl hover:shadow-primary/30"
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

