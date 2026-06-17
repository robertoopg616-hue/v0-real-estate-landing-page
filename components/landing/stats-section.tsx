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

const fadeInUp = {
  initial: { opacity: 0, y: 30 },
  animate: { opacity: 1, y: 0 },
}

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
      ease: 'easeOut',
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
    <section className="py-16 md:py-20 border-y border-white/5 bg-secondary/10 relative overflow-hidden">
      {/* Background gradients */}
      <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-[250px] h-[250px] rounded-full bg-primary/5 blur-[80px] pointer-events-none" />
      <div className="absolute top-1/2 right-1/4 -translate-y-1/2 w-[250px] h-[250px] rounded-full bg-orange-500/3 blur-[80px] pointer-events-none" />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12 divide-y md:divide-y-0 md:divide-x divide-white/5">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="flex flex-col items-center text-center pt-6 md:pt-0 first:pt-0"
            >
              <div className="flex items-center justify-center w-12 h-12 rounded-full bg-primary/10 mb-4 border border-primary/20">
                <stat.icon className="size-5 text-primary" />
              </div>
              <span className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground font-serif tracking-tight">
                <AnimatedCounter value={stat.value} />
              </span>
              <span className="text-sm font-semibold text-muted-foreground uppercase tracking-widest mt-2">
                {stat.label}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
