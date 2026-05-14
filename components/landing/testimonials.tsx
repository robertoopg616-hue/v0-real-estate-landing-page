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
  return (
    <section id="testimonials" className="py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
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

        {/* Testimonials Carousel */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <Carousel
            opts={{
              align: 'start',
              loop: true,
            }}
            className="w-full"
          >
            <CarouselContent className="-ml-4">
              {testimonials.map((testimonial, index) => (
                <CarouselItem
                  key={index}
                  className="pl-4 md:basis-1/2 lg:basis-1/3"
                >
                  <div className="glass-card rounded-2xl p-8 h-full flex flex-col">
                    {/* Quote Icon */}
                    <Quote className="size-8 text-primary/40 mb-4" />

                    {/* Rating */}
                    <div className="flex gap-1 mb-4">
                      {Array.from({ length: testimonial.rating }).map((_, i) => (
                        <Star
                          key={i}
                          className="size-4 fill-primary text-primary"
                        />
                      ))}
                    </div>

                    {/* Quote */}
                    <blockquote className="text-foreground leading-relaxed flex-grow mb-6">
                      &ldquo;{testimonial.quote}&rdquo;
                    </blockquote>

                    {/* Highlight Badge */}
                    <div className="mb-4">
                      <span className="inline-flex items-center rounded-full bg-primary/10 px-3 py-1 text-xs font-semibold text-primary">
                        {testimonial.highlight}
                      </span>
                    </div>

                    {/* Author */}
                    <div className="flex items-center gap-3 pt-4 border-t border-border">
                      <div className="flex items-center justify-center w-10 h-10 rounded-full bg-primary/20 text-primary font-semibold text-sm">
                        {testimonial.initials}
                      </div>
                      <div>
                        <p className="font-semibold text-foreground text-sm">
                          {testimonial.name}
                        </p>
                        <p className="text-xs text-muted-foreground">
                          {testimonial.location}
                        </p>
                      </div>
                    </div>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <div className="flex justify-center gap-2 mt-8">
              <CarouselPrevious className="static translate-y-0 bg-secondary hover:bg-secondary/80 border-border" />
              <CarouselNext className="static translate-y-0 bg-secondary hover:bg-secondary/80 border-border" />
            </div>
          </Carousel>
        </motion.div>
      </div>
    </section>
  )
}
