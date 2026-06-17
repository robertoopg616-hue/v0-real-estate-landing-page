'use client'

import { useEffect, useRef } from 'react'
import { motion, useInView, animate } from 'framer-motion'
import { TrendingUp, Clock, CheckCircle2, DollarSign } from 'lucide-react'

const stats = [
  { icon: TrendingUp, value: '104%', label: 'Avg Sale Price' },
  { icon: Clock, value: '12 Days', label: 'On Market' },
  { icon: CheckCircle2, value: '100%', label: 'Upsize Success' },
  { icon: DollarSign, value: '$42M+', label: 'Equity Unlocked' },
]

function AnimatedCounter({ value }: { value: string }) {
  const ref = useRef<HTMLSpanElement>(null)
  const inView = useInView(ref, { once: true, margin: '-50px' })

  useEffect(() => {
    if (!inView || !ref.current) return

    const numbers = value.match(/\d+/g)
    if (!numbers) {
      ref.current.textContent = value
      return
    }
    
    const target = parseInt(numbers[0], 10)
    const node = ref.current
    
    const controls = animate(0, target, {
      duration: 2,
      onUpdate(latest) {
        const rounded = Math.round(latest)
        node.textContent = value.replace(/\d+/, String(rounded))
      }
    })

    return () => controls.stop()
  }, [value, inView])

  return <span ref={ref}>{value}</span>
}

export function StatsSection() {
  return (
    <section className="py-12 md:py-16 relative overflow-hidden bg-background">
      {/* Soft ambient background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[250px] rounded-full bg-primary/5 blur-[100px] pointer-events-none" />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.7, ease: 'easeOut' }}
          className="glass-card rounded-2xl md:rounded-[24px] p-8 md:p-12 border border-primary/25 shadow-figma-card bg-white"
        >
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-0 lg:divide-x lg:divide-primary/20">
            {stats.map((stat) => (
              <div
                key={stat.label}
                className="flex flex-col items-center text-center px-4 lg:first:pl-0 lg:last:pr-0"
              >
                <div className="flex items-center justify-center w-12 h-12 rounded-full bg-primary/10 mb-4 border border-primary/20 shadow-sm">
                  <stat.icon className="size-5 text-primary" />
                </div>
                <span className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-secondary font-sans tracking-tight">
                  <AnimatedCounter value={stat.value} />
                </span>
                <span className="text-xs font-bold text-muted-foreground uppercase tracking-widest mt-2">
                  {stat.label}
                </span>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
