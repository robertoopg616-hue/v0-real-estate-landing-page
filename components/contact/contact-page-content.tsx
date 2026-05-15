'use client'

import { useRef } from 'react'
import { motion } from 'framer-motion'
import { Home, Mail, Phone, MapPin, Clock } from 'lucide-react'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { ContactForm } from '@/components/landing/contact-form'
import { CTASection } from '@/components/landing/cta-section'
import { Footer } from '@/components/landing/footer'

const contactInfo = [
  {
    icon: Phone,
    label: 'Phone',
    value: '(555) 123-4567',
    href: 'tel:+15551234567',
  },
  {
    icon: Mail,
    label: 'Email',
    value: 'hello@premiumrealty.com',
    href: 'mailto:hello@premiumrealty.com',
  },
  {
    icon: MapPin,
    label: 'Office',
    value: '123 Main Street, Suite 100',
    href: '#',
  },
  {
    icon: Clock,
    label: 'Hours',
    value: 'Mon-Fri 9am-6pm, Sat 10am-4pm',
    href: null,
  },
]

export function ContactPageContent() {
  const formRef = useRef<HTMLDivElement>(null)

  const scrollToForm = () => {
    formRef.current?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <main className="relative min-h-screen">
      {/* Simple Header for Contact Page */}
      <motion.header
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        className="fixed top-0 left-0 right-0 z-50 glass"
      >
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex h-16 items-center justify-between">
            <Link
              href="/"
              className="flex items-center gap-2 text-foreground hover:text-primary transition-colors"
            >
              <Home className="size-6" />
              <span className="text-lg font-semibold tracking-tight">
                Premium Realty
              </span>
            </Link>

            <div className="flex items-center gap-4">
              <Link
                href="/"
                className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors hidden sm:block"
              >
                Back to Home
              </Link>
              <Button
                onClick={scrollToForm}
                className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold"
              >
                Get Started
              </Button>
            </div>
          </div>
        </div>
      </motion.header>

      {/* Hero Section */}
      <section className="pt-32 pb-16 md:pt-40 md:pb-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-3xl mx-auto"
          >
            <span className="text-primary font-semibold text-sm uppercase tracking-wider">
              Contact Us
            </span>
            <h1 className="mt-3 text-4xl md:text-5xl lg:text-6xl font-bold text-foreground text-balance">
              Let&apos;s start your journey home
            </h1>
            <p className="mt-6 text-lg md:text-xl text-muted-foreground text-pretty">
              Have questions about upsizing? Our team is here to help you every
              step of the way. Reach out today for a no-obligation consultation.
            </p>
          </motion.div>

          {/* Contact Info Cards */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4"
          >
            {contactInfo.map((item, index) => (
              <motion.div
                key={item.label}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.3 + index * 0.1 }}
              >
                {item.href ? (
                  <a
                    href={item.href}
                    className="glass-card rounded-xl p-6 flex items-start gap-4 hover:bg-secondary/60 transition-colors block h-full"
                  >
                    <div className="flex items-center justify-center w-10 h-10 rounded-lg bg-primary/10 shrink-0">
                      <item.icon className="size-5 text-primary" />
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">
                        {item.label}
                      </p>
                      <p className="font-medium text-foreground">{item.value}</p>
                    </div>
                  </a>
                ) : (
                  <div className="glass-card rounded-xl p-6 flex items-start gap-4 h-full">
                    <div className="flex items-center justify-center w-10 h-10 rounded-lg bg-primary/10 shrink-0">
                      <item.icon className="size-5 text-primary" />
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">
                        {item.label}
                      </p>
                      <p className="font-medium text-foreground">{item.value}</p>
                    </div>
                  </div>
                )}
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Contact Form Section */}
      <div ref={formRef}>
        <ContactForm />
      </div>

      {/* CTA Section */}
      <CTASection onContactClick={scrollToForm} />

      {/* Footer */}
      <Footer />
    </main>
  )
}
