'use client'

import { motion } from 'framer-motion'
import { Quote, Star } from 'lucide-react'
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel'

const testimonials = [
  {
    name: 'The Miller Family',
    location: 'Sold in Riverside, Bought in Oak Hills',
    quote:
      "We were terrified of selling our home and not finding something bigger in time. The Stay-Put Guarantee changed everything. We sold for $82K over asking and moved directly into our dream 4-bedroom without ever having to rent or stay with family.",
    rating: 5,
    highlight: 'Sold $82K over asking',
    initials: 'MF',
  },
  {
    name: 'Sarah & James Chen',
    location: 'Sold in Downtown, Bought in Suburbs',
    quote:
      "The concierge prep service was incredible. They handled everything—staging, repairs, photography—and we didn't pay a dime until closing. Our condo sold in just 8 days!",
    rating: 5,
    highlight: 'Sold in 8 days',
    initials: 'SC',
  },
  {
    name: 'The Rodriguez Family',
    location: 'Sold in Midtown, Bought in Lakeside',
    quote:
      "As first-time upsizers, we had no idea where to start. The equity assessment showed us we had way more buying power than we thought. Now our kids finally have a backyard!",
    rating: 5,
    highlight: '40% more buying power',
    initials: 'RF',
  },
]

interface TestimonialsProps {
  onContactClick: () => void
}

export function Testimonials({ onContactClick }: TestimonialsProps) {
  return (
    <section id="testimonials" className="py-24 md:py-32 relative overflow-hidden bg-background">
      {/* Background gradients */}
      <div className="absolute bottom-0 right-0 w-[300px] h-[300px] rounded-full bg-primary/5 blur-[100px] pointer-events-none" />

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
            Success Stories
          </span>
          <h2 className="mt-3 text-3xl md:text-4xl lg:text-5xl font-bold text-secondary text-balance font-serif">
            Families who found their perfect home
          </h2>
          <p className="mt-4 text-lg text-muted-foreground text-pretty">
            Real stories from real families who made the leap to their dream homes without the stress.
          </p>
        </motion.div>

        {/* Asymmetrical Testimonials Grid */}
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: 5-Star Testimonial Carousel */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-7 space-y-6 p-4 sm:p-6 lg:p-0"
          >
            <Quote className="size-16 text-primary/30" />
            
            <Carousel className="w-full">
              <CarouselContent>
                {testimonials.map((item, index) => (
                  <CarouselItem key={index} className="space-y-6">
                    <div className="flex gap-1">
                      {Array.from({ length: item.rating }).map((_, i) => (
                        <Star key={i} className="size-5 fill-primary text-primary" />
                      ))}
                    </div>

                    <blockquote className="text-lg sm:text-2xl font-semibold text-secondary leading-relaxed text-pretty font-serif italic">
                      &ldquo;{item.quote}&rdquo;
                    </blockquote>

                    <div className="flex items-center gap-3 pt-6 border-t border-border">
                      <div className="flex items-center justify-center w-12 h-12 rounded-full bg-primary/15 text-secondary font-bold text-base border border-primary/30">
                        {item.initials}
                      </div>
                      <div>
                        <p className="font-extrabold text-secondary text-sm">{item.name}</p>
                        <p className="text-xs text-muted-foreground font-semibold">{item.location}</p>
                      </div>
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <div className="flex justify-end gap-2 mt-4 pt-4 border-t border-border/10">
                <CarouselPrevious className="static translate-y-0 text-secondary border-primary/20 hover:bg-primary/10" />
                <CarouselNext className="static translate-y-0 text-secondary border-primary/20 hover:bg-primary/10" />
              </div>
            </Carousel>
          </motion.div>

          {/* Right Column: Staging Before vs After Conversion Highlight */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="lg:col-span-5 space-y-6"
          >
            <div className="glass-card p-6 sm:p-8 rounded-2xl border border-primary/20 shadow-figma-card space-y-6 bg-white">
              <h3 className="text-lg font-bold text-secondary border-b border-border pb-3 uppercase tracking-wider">
                Visual Transition Metric
              </h3>
              
              <div className="space-y-4">
                {/* Before Row */}
                <div className="space-y-1.5">
                  <span className="inline-flex items-center rounded-full bg-red-500/10 border border-red-500/20 px-2.5 py-0.5 text-[10px] font-bold text-red-500">
                    Before: Starter Condo
                  </span>
                  <div className="flex justify-between items-center text-xs font-semibold text-muted-foreground pt-1">
                    <span>Valued at: $380,000</span>
                    <span>Days on Market: 45+</span>
                  </div>
                  <div className="w-full bg-red-100 rounded-full h-2 overflow-hidden border border-red-200">
                    <div className="bg-red-500 h-full w-[40%]" />
                  </div>
                </div>

                {/* After Row */}
                <div className="space-y-1.5 pt-2">
                  <span className="inline-flex items-center rounded-full bg-emerald-500/10 border border-emerald-500/20 px-2.5 py-0.5 text-[10px] font-bold text-emerald-600">
                    After: 4BR Family Home
                  </span>
                  <div className="flex justify-between items-center text-xs font-bold text-secondary pt-1">
                    <span>Sold: $425,000 (+12% Staged)</span>
                    <span className="text-emerald-600">Days on Market: 12</span>
                  </div>
                  <div className="w-full bg-emerald-100 rounded-full h-2 overflow-hidden border border-emerald-200">
                    <div className="bg-emerald-500 h-full w-[100%]" />
                  </div>
                </div>
              </div>

              <div className="pt-4 border-t border-border/10 text-center">
                <p className="text-xs text-muted-foreground leading-relaxed font-semibold">
                  Sarah unlocked $45,000 extra equity to afford her dream home upgrade.
                </p>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  )
}
