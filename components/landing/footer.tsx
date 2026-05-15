'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { Home, ArrowUp, Mail, Phone, MapPin } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { ContactModal } from '@/components/modals/contact-modal'

const footerLinks = {
  services: [
    { label: 'Equity Assessment', href: '#features' },
    { label: 'Stay-Put Guarantee', href: '#features' },
    { label: 'Concierge Prep', href: '#features' },
    { label: 'Pricing', href: '#pricing' },
  ],
  company: [
    { label: 'About Us', href: '#' },
    { label: 'Success Stories', href: '#testimonials' },
    { label: 'FAQ', href: '#faq' },
    { label: 'Contact', href: '#contact' },
  ],
  legal: [
    { label: 'Privacy Policy', href: '#' },
    { label: 'Terms of Service', href: '#' },
    { label: 'Licensing', href: '#' },
  ],
}

const realtorBoards = [
  'National Association of Realtors',
  'Local MLS Board',
  'State Real Estate Commission',
]

export function Footer() {
  const [isContactModalOpen, setIsContactModalOpen] = useState(false)

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  const handleLinkClick = (href: string, label: string) => {
    if (label === 'Contact') {
      setIsContactModalOpen(true)
      return
    }
    if (label === 'Success Stories') {
      const element = document.querySelector('#testimonials')
      if (element) {
        element.scrollIntoView({ behavior: 'smooth', block: 'start' })
      }
      return
    }
    if (href.startsWith('#') && href !== '#') {
      const element = document.querySelector(href)
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' })
      }
    }
  }

  return (
    <footer className="bg-secondary/50 border-t border-border">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Main Footer Content */}
        <div className="py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12">
            {/* Brand Column */}
            <div className="lg:col-span-2">
              <a
                href="#"
                className="flex items-center gap-2 text-foreground mb-4"
              >
                <Home className="size-6" />
                <span className="text-lg font-semibold tracking-tight">
                  Premium Realty
                </span>
              </a>
              <p className="text-muted-foreground text-sm leading-relaxed mb-6 max-w-sm">
                Helping growing families find their perfect homes since 2010.
                Expert guidance for seamless upsizing transitions.
              </p>

              {/* Contact Info */}
              <div className="space-y-3">
                <div className="flex items-center gap-3 text-sm text-muted-foreground">
                  <Mail className="size-4 text-primary" />
                  <span>hello@premiumrealty.com</span>
                </div>
                <div className="flex items-center gap-3 text-sm text-muted-foreground">
                  <Phone className="size-4 text-primary" />
                  <span>(555) 123-4567</span>
                </div>
                <div className="flex items-center gap-3 text-sm text-muted-foreground">
                  <MapPin className="size-4 text-primary" />
                  <span>123 Main Street, Suite 100</span>
                </div>
              </div>
            </div>

            {/* Services Links */}
            <div>
              <h3 className="text-sm font-semibold text-foreground uppercase tracking-wider mb-4">
                Services
              </h3>
              <ul className="space-y-3">
                {footerLinks.services.map((link) => (
                  <li key={link.label}>
                    <button
                      onClick={() => handleLinkClick(link.href, link.label)}
                      className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                    >
                      {link.label}
                    </button>
                  </li>
                ))}
              </ul>
            </div>

            {/* Company Links */}
            <div>
              <h3 className="text-sm font-semibold text-foreground uppercase tracking-wider mb-4">
                Company
              </h3>
              <ul className="space-y-3">
                {footerLinks.company.map((link) => (
                  <li key={link.label}>
                    <button
                      onClick={() => handleLinkClick(link.href, link.label)}
                      className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                    >
                      {link.label}
                    </button>
                  </li>
                ))}
              </ul>
            </div>

            {/* Legal Links */}
            <div>
              <h3 className="text-sm font-semibold text-foreground uppercase tracking-wider mb-4">
                Legal
              </h3>
              <ul className="space-y-3">
                {footerLinks.legal.map((link) => (
                  <li key={link.label}>
                    <button
                      onClick={() => handleLinkClick(link.href, link.label)}
                      className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                    >
                      {link.label}
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Realtor Board Logos Placeholder */}
        <div className="py-8 border-t border-border">
          <div className="flex flex-wrap items-center justify-center gap-8">
            {realtorBoards.map((board) => (
              <div
                key={board}
                className="flex items-center justify-center px-4 py-2 rounded-lg bg-muted/50"
              >
                <span className="text-xs text-muted-foreground font-medium">
                  {board}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="py-6 border-t border-border">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-sm text-muted-foreground text-center md:text-left">
              &copy; {new Date().getFullYear()} Premium Realty. All rights
              reserved.
            </p>

            {/* Back to Top */}
            <Button
              variant="ghost"
              size="sm"
              onClick={scrollToTop}
              className="text-muted-foreground hover:text-foreground"
            >
              Back to top
              <ArrowUp className="ml-2 size-4" />
            </Button>
          </div>
        </div>
      </div>

      {/* Contact Modal */}
      <ContactModal
        isOpen={isContactModalOpen}
        onClose={() => setIsContactModalOpen(false)}
      />
    </footer>
  )
}
