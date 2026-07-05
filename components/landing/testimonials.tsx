'use client'

import * as React from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Quote, Star } from 'lucide-react'
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  type CarouselApi,
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
    image: '/hero-house.jpg',
  },
  {
    name: 'Sarah & James Chen',
    location: 'Sold in Downtown, Bought in Suburbs',
    quote:
      "The concierge prep service was incredible. They handled everything—staging, repairs, photography—and we didn't pay a dime until closing. Our condo sold in just 8 days!",
    rating: 5,
    highlight: 'Sold in 8 days',
    initials: 'SC',
    image: '/staged-interior.png',
  },
  {
    name: 'The Rodriguez Family',
    location: 'Sold in Midtown, Bought in Lakeside',
    quote:
      "As first-time upsizers, we had no idea where to start. The equity assessment showed us we had way more buying power than we thought. Now our kids finally have a backyard!",
    rating: 5,
    highlight: '40% more buying power',
    initials: 'RF',
    image: '/condo-after.png',
  },
]

const metrics = [
  {
    before: {
      label: 'Before: Starter Home (Un-Staged)',
      val: '$520,000',
      days: '38 Days on Market',
      width: '60%',
    },
    after: {
      label: 'After: Modernized & Staged',
      val: '$602,000 (+15.8% Staged)',
      days: '9 Days on Market',
      width: '100%',
    },
    gains: '$82,000 extra equity unlocked to fund their Oak Hills transition.',
  },
  {
    before: {
      label: 'Before: Dated Condo (Vacant)',
      val: '$410,000',
      days: '45+ Days on Market',
      width: '60%',
    },
    after: {
      label: 'After: Concierge Staged',
      val: '$550,000 (+34.1% Staged)',
      days: '9 Days on Market',
      width: '100%',
    },
    gains: 'Gained +$140,000 extra net cash proceeds delivered via proactive staging concierge.',
  },
  {
    before: {
      label: 'Before: Traditional Suburban (Occupied)',
      val: '$450,000',
      days: '52 Days on Market',
      width: '50%',
    },
    after: {
      label: 'After: Designer Staging',
      val: '$530,000 (+17.8% Staged)',
      days: '14 Days on Market',
      width: '100%',
    },
    gains: 'Gained 40% more buying power, unlocking $80,000 in equity.',
  },
]

interface TestimonialsProps {
  onContactClick: () => void
  activeStoryIndex: number
  setActiveStoryIndex: (index: number) => void
}

export function Testimonials({ 
  onContactClick, 
  activeStoryIndex, 
  setActiveStoryIndex 
}: TestimonialsProps) {
  const [api, setApi] = React.useState<CarouselApi>()

  React.useEffect(() => {
    if (!api) return

    api.on('select', () => {
      setActiveStoryIndex(api.selectedScrollSnap())
    })
  }, [api, setActiveStoryIndex])

  React.useEffect(() => {
    if (!api) return
    if (api.selectedScrollSnap() !== activeStoryIndex) {
      api.scrollTo(activeStoryIndex)
    }
  }, [api, activeStoryIndex])

  const currentMetric = metrics[activeStoryIndex] || metrics[0]

  return (
    <section id="testimonials" className="py-20 md:py-32 relative overflow-hidden bg-background border-t border-neutral-200/60">
      {/* Background gradients */}
      <div className="absolute bottom-0 right-0 w-[300px] h-[300px] rounded-full bg-primary/5 blur-[100px] pointer-events-none" />

      <div className="mx-auto max-w-7xl px-4 sm:px-8 md:px-16 relative z-10">
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
            className="lg:col-span-7 space-y-6 w-full max-w-full overflow-hidden p-4 sm:p-6 lg:p-0"
          >
            <Carousel setApi={setApi} className="w-full max-w-full overflow-hidden">
              <CarouselContent>
                {testimonials.map((item, index) => (
                  <CarouselItem key={index} className="w-full max-w-full overflow-hidden px-6 sm:px-12">
                    <div className="space-y-6 flex flex-col justify-between h-full w-full">
                      <div className="space-y-4">
                        {/* Quotation Marks */}
                        <Quote className="size-16 text-primary/30" />

                        {/* Star Rating Alignment Shield */}
                        <div className="flex gap-1 pl-0">
                          {Array.from({ length: item.rating }).map((_, i) => (
                            <Star key={i} className="size-5 fill-primary text-primary" />
                          ))}
                        </div>

                        {/* Quote Block */}
                        <blockquote className="text-base sm:text-xl md:text-2xl font-semibold text-secondary leading-relaxed text-pretty font-serif italic w-full max-w-full block whitespace-normal break-words normal-case">
                          &ldquo;{item.quote}&rdquo;
                        </blockquote>
                      </div>

                      {/* Divider and Author profile + Thumbnail inline row */}
                      <div className="pt-6 border-t border-border/60 flex items-center justify-between gap-4">
                        {/* Left Alignment: Avatar and Details */}
                        <div className="flex items-center gap-3">
                          <div className="flex items-center justify-center w-12 h-12 rounded-full bg-primary/15 text-secondary font-bold text-base border border-primary/30 shrink-0">
                            {item.initials}
                          </div>
                          <div>
                            <p className="font-extrabold text-secondary text-sm">{item.name}</p>
                            <p className="text-xs text-muted-foreground font-semibold">{item.location}</p>
                          </div>
                        </div>

                        {/* Right Alignment: Property Thumbnail */}
                        <div className="rounded-xl overflow-hidden border border-border/60 shrink-0 w-12 h-12">
                          <img 
                            src={item.image} 
                            alt={`Staged property for ${item.name}`} 
                            className="w-full h-full object-cover" 
                          />
                        </div>
                      </div>
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
              
              {/* Clean Navigation Arrows aligned in the bottom-right corner */}
              <div className="flex justify-end gap-2 mt-6 px-6 sm:px-12">
                <CarouselPrevious className="static translate-y-0 text-secondary border-primary/20 hover:bg-primary/10 w-10 h-10 flex items-center justify-center rounded-full" />
                <CarouselNext className="static translate-y-0 text-secondary border-primary/20 hover:bg-primary/10 w-10 h-10 flex items-center justify-center rounded-full" />
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
            <div className="glass-card p-6 sm:p-8 rounded-2xl border border-primary/20 shadow-figma-card space-y-6 bg-white min-h-[350px] flex flex-col justify-between">
              <div>
                <h3 className="text-lg font-bold text-secondary border-b border-border pb-3 uppercase tracking-wider">
                  Visual Transition Metric
                </h3>
                
                <AnimatePresence mode="wait">
                  <motion.div
                    key={activeStoryIndex}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.3 }}
                    className="space-y-4 pt-4"
                  >
                    {/* Before Row */}
                    <div className="space-y-1.5 w-full max-w-full overflow-hidden">
                      <span className="inline-flex items-center rounded-full bg-red-500/10 border border-red-500/20 px-2.5 py-0.5 text-[10px] font-bold text-red-500 whitespace-normal break-words text-left">
                        {currentMetric.before.label}
                      </span>
                      <div className="flex flex-col sm:flex-row justify-between sm:items-center gap-1 text-xs font-semibold text-muted-foreground pt-1">
                        <span>Valued at: {currentMetric.before.val}</span>
                        <span>{currentMetric.before.days}</span>
                      </div>
                      <div className="w-full bg-red-100 rounded-full h-2 overflow-hidden border border-red-200">
                        <motion.div
                          className="bg-red-500 h-full"
                          initial={{ width: 0 }}
                          animate={{ width: currentMetric.before.width }}
                          transition={{ duration: 0.5, ease: 'easeOut' }}
                        />
                      </div>
                    </div>

                    {/* After Row */}
                    <div className="space-y-1.5 pt-2 w-full max-w-full overflow-hidden">
                      <span className="inline-flex items-center rounded-full bg-emerald-500/10 border border-emerald-500/20 px-2.5 py-0.5 text-[10px] font-bold text-emerald-600 whitespace-normal break-words text-left">
                        {currentMetric.after.label}
                      </span>
                      <div className="flex flex-col sm:flex-row justify-between sm:items-center gap-1 text-xs font-bold text-secondary pt-1">
                        <span>Sold: {currentMetric.after.val}</span>
                        <span className="text-emerald-600">{currentMetric.after.days}</span>
                      </div>
                      <div className="w-full bg-emerald-100 rounded-full h-2 overflow-hidden border border-emerald-200">
                        <motion.div
                          className="bg-emerald-500 h-full"
                          initial={{ width: 0 }}
                          animate={{ width: currentMetric.after.width }}
                          transition={{ duration: 0.5, ease: 'easeOut' }}
                        />
                      </div>
                    </div>
                  </motion.div>
                </AnimatePresence>
              </div>

              <div className="pt-4 border-t border-border/10 text-center">
                <AnimatePresence mode="wait">
                  <motion.p
                    key={activeStoryIndex}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.2 }}
                    className="text-xs text-muted-foreground leading-relaxed font-semibold"
                  >
                    {currentMetric.gains}
                  </motion.p>
                </AnimatePresence>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  )
}
