'use client'

import { motion } from 'framer-motion'
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion'

const faqs = [
  {
    question: 'What if the market timing is bad when I need to sell?',
    answer:
      "That's exactly why we created our Stay-Put Guarantee. We analyze market conditions and coordinate your sale with your purchase so you're never caught in a bad position. If the market shifts unexpectedly, you have the flexibility to wait without being displaced from your current home. Our team monitors local trends daily to ensure we list at the optimal time for maximum return.",
  },
  {
    question: 'How does the $0 upfront staging and prep work?',
    answer:
      "Our Concierge Prep program covers professional staging, minor repairs, deep cleaning, and premium photography—all at no upfront cost to you. We front these expenses because we're confident in the results. You only pay when your home sells, and the cost is simply deducted from your proceeds at closing. Most clients see a 3-5x return on these prep investments through higher sale prices.",
  },
  {
    question: 'Can I cancel if I change my mind?',
    answer:
      "Absolutely. We offer a Cancel-Anytime contract because we believe in earning your business every day. If at any point before accepting an offer you decide not to move forward, you can cancel with no penalties or fees. We're confident in our service, which is why we don't need to lock you in with restrictive contracts.",
  },
  {
    question: 'How long does the typical upsizing process take?',
    answer:
      'The timeline varies based on your local market and specific needs, but most families complete their upsize in 60-90 days from listing to moving into their new home. Our average time on market is just 12 days, and we coordinate closing dates to minimize any gap between homes. During your free consultation, we can provide a customized timeline based on your situation.',
  },
  {
    question: 'What happens if my home sells before I find a new one?',
    answer:
      "This is where our Stay-Put Guarantee really shines. If we receive an offer before you've found your new home, we can negotiate extended closing terms, rent-back agreements, or use our bridge financing partners to ensure you never have to move twice or find temporary housing. We've helped hundreds of families navigate this exact scenario smoothly.",
  },
  {
    question: 'Do I need to have a down payment saved for my new home?',
    answer:
      "Not necessarily. Many of our clients use the equity from their current home as the down payment for their new one. Our Equity Unlock Assessment shows you exactly how much buying power you have. In many cases, families are surprised to learn they qualify for homes they thought were out of reach. We also work with preferred lenders who specialize in bridge loans and concurrent closings.",
  },
]

export function FAQ() {
  return (
    <section id="faq" className="py-24 md:py-32">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-primary font-semibold text-sm uppercase tracking-wider">
            Common Questions
          </span>
          <h2 className="mt-3 text-3xl md:text-4xl lg:text-5xl font-bold text-foreground text-balance">
            Everything you need to know
          </h2>
          <p className="mt-4 text-lg text-muted-foreground text-pretty">
            Have questions? We have answers. If you don&apos;t see what you&apos;re
            looking for, reach out directly.
          </p>
        </motion.div>

        {/* FAQ Accordion */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="glass-card rounded-[10px] shadow-figma-card mb-4 px-6 border border-white/5 data-[state=open]:border-primary/30"
              >
                <AccordionTrigger className="text-left text-foreground hover:text-primary hover:no-underline py-6 text-base font-semibold">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground leading-relaxed pb-6">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </motion.div>
      </div>
    </section>
  )
}
