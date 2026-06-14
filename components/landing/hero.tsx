'use client'

import { useState, useEffect, useRef } from 'react'
import { motion, useInView, animate } from 'framer-motion'
import { ArrowRight, TrendingUp, Clock, CheckCircle2, DollarSign } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { ContactModal } from '@/components/modals/contact-modal'

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

    // Extract numbers from value (e.g. "104%" -> 104, "$42M+" -> 42, "12 Days" -> 12)
    const numbers = value.match(/\d+/g)
    if (!numbers) {
      ref.current.textContent = value
      return
    }
    
    const target = parseInt(numbers[0], 10)
    const node = ref.current
    
    const controls = animate(0, target, {
      duration: 1.8,
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

export function Hero() {
  const [isContactModalOpen, setIsContactModalOpen] = useState(false)

  const scrollToContact = () => {
    const element = document.querySelector('#contact')
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <section className="relative min-h-screen flex flex-col justify-center pt-16">
      {/* Background gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-secondary/20 pointer-events-none" />
      
      {/* Subtle grid pattern */}
      <div 
        className="absolute inset-0 opacity-[0.02] pointer-events-none"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}
      />

      {/* Animated Ambient Glow Blobs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none z-0 opacity-40">
        <div className="absolute top-[10%] left-[20%] w-[350px] h-[350px] rounded-full bg-primary/10 blur-[80px] animate-float-1" />
        <div className="absolute top-[40%] right-[15%] w-[400px] h-[400px] rounded-full bg-orange-500/5 blur-[100px] animate-float-2" />
        <div className="absolute bottom-[10%] left-[30%] w-[380px] h-[380px] rounded-full bg-blue-500/5 blur-[90px] animate-float-3" />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20 md:py-32">
        <div className="text-center max-w-4xl mx-auto">
          {/* Badge */}
          <motion.div
            {...fadeInUp}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-4 py-1.5 text-sm text-primary mb-6"
          >
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-primary" />
            </span>
            Trusted by 500+ Growing Families
          </motion.div>

          {/* Headline */}
          <motion.h1
            {...fadeInUp}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-4xl sm:text-5xl md:text-5xl lg:text-5xl font-semibold tracking-tight text-foreground text-balance leading-[1.2] lg:leading-[56px]"
          >
            Outgrow your home,{' '}
            <span className="text-primary">not your peace of mind.</span>
          </motion.h1>

          {/* Subheadline */}
          <motion.p
            {...fadeInUp}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mt-6 text-lg font-semibold text-muted-foreground max-w-2xl mx-auto text-pretty leading-[27px]"
          >
            Expert guidance to sell your property for top dollar and transition into
            your dream home seamlessly. We handle the timing so you never move twice.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            {...fadeInUp}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <Button
              size="lg"
              onClick={() => setIsContactModalOpen(true)}
              className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold text-base px-8 py-6 rounded-[9.28px] border-figma-thin border-white/20 shadow-lg shadow-primary/25 transition-all hover:shadow-xl hover:shadow-primary/30"
            >
              Get a Free Property Consultation
              <ArrowRight className="ml-2 size-5" />
            </Button>
            <Button
              variant="outline"
              size="lg"
              onClick={() => {
                const el = document.querySelector('#features')
                el?.scrollIntoView({ behavior: 'smooth' })
              }}
              className="text-foreground border-border hover:bg-secondary hover:text-foreground font-medium text-base px-8 py-6 rounded-[9.28px] border-figma-thin border-white/10"
            >
              See How It Works
            </Button>
          </motion.div>
        </div>

        {/* Trust Ribbon - Stats */}
        <motion.div
          {...fadeInUp}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mt-20 md:mt-28 relative z-10"
        >
          <div className="glass-card rounded-[10px] p-6 md:p-8 shadow-figma-card">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
              {stats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.6 + index * 0.1 }}
                  className="flex flex-col items-center text-center"
                >
                  <div className="flex items-center justify-center w-12 h-12 rounded-full bg-primary/10 mb-3">
                    <stat.icon className="size-6 text-primary" />
                  </div>
                  <span className="text-2xl md:text-3xl font-bold text-foreground">
                    <AnimatedCounter value={stat.value} />
                  </span>
                  <span className="text-sm text-muted-foreground mt-1">
                    {stat.label}
                  </span>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>

      {/* Contact Modal */}
      <ContactModal
        isOpen={isContactModalOpen}
        onClose={() => setIsContactModalOpen(false)}
      />
    </section>
  )
}

