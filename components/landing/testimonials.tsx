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
  {
    name: 'Amanda & Michael Torres',
    location: 'Sold in Eastside, Bought in Westwood',
    quote:
      "The whole process was seamless. From listing to closing on both homes, everything was coordinated perfectly. We never felt stressed or rushed.",
    rating: 5,
    highlight: 'Seamless transition',
    initials: 'AT',
  },
]

export function Testimonials() {
  const featured = testimonials[0]
  const listItems = testimonials.slice(1)

  return (
    <section id="testimonials" className="py-24 md:py-32 relative overflow-hidden bg-secondary/10">
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
          <span className="text-primary font-semibold text-sm uppercase tracking-wider">
            Success Stories
          </span>
          <h2 className="mt-3 text-3xl md:text-4xl lg:text-5xl font-bold text-foreground text-balance">
            Families who found their perfect home
          </h2>
          <p className="mt-4 text-lg text-muted-foreground text-pretty">
            Real stories from real families who made the leap to their dream homes.
          </p>
        </motion.div>

        {/* Asymmetrical Testimonials Grid */}
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left Column: Large Featured Testimonial with Image */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-6 space-y-8"
          >
            <div className="space-y-6">
              <Quote className="size-12 text-primary/30" />
              
              <div className="flex gap-1">
                {Array.from({ length: featured.rating }).map((_, i) => (
                  <Star key={i} className="size-5 fill-primary text-primary" />
                ))}
              </div>

              <blockquote className="text-xl sm:text-2xl font-bold text-foreground leading-relaxed text-pretty">
                &ldquo;{featured.quote}&rdquo;
              </blockquote>

              <div className="flex items-center gap-3 pt-4 border-t border-white/10">
                <div className="flex items-center justify-center w-12 h-12 rounded-full bg-primary/20 text-primary font-semibold text-base">
                  {featured.initials}
                </div>
                <div>
                  <p className="font-bold text-foreground text-base">{featured.name}</p>
                  <p className="text-xs text-muted-foreground">{featured.location}</p>
                </div>
              </div>
            </div>

            {/* Premium Staged Interior Image */}
            <div className="relative rounded-[20px] overflow-hidden border border-white/10 shadow-figma-card aspect-video max-w-lg">
              <img 
                src="/staged-interior.png" 
                alt="Beautiful staged home interior" 
                className="w-full h-full object-cover object-center transform hover:scale-105 transition-transform duration-700 select-none"
                loading="lazy"
              />
            </div>
          </motion.div>

          {/* Right Column: Other Testimonials List */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="lg:col-span-6 space-y-10 divide-y divide-white/10 lg:pt-6"
          >
            {listItems.map((item, index) => (
              <div 
                key={index} 
                className={`space-y-4 ${index > 0 ? 'pt-8' : ''}`}
              >
                <div className="flex justify-between items-center">
                  <div className="flex gap-1">
                    {Array.from({ length: item.rating }).map((_, i) => (
                      <Star key={i} className="size-4 fill-primary text-primary" />
                    ))}
                  </div>
                  <span className="inline-flex items-center rounded-full bg-primary/10 px-2.5 py-0.5 text-xs font-semibold text-primary border border-primary/20">
                    {item.highlight}
                  </span>
                </div>

                <blockquote className="text-base text-muted-foreground leading-relaxed text-pretty">
                  &ldquo;{item.quote}&rdquo;
                </blockquote>

                <div className="flex items-center gap-3">
                  <div className="flex items-center justify-center w-10 h-10 rounded-full bg-primary/10 text-primary font-semibold text-sm">
                    {item.initials}
                  </div>
                  <div>
                    <p className="font-semibold text-foreground text-sm">{item.name}</p>
                    <p className="text-xs text-muted-foreground">{item.location}</p>
                  </div>
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}
