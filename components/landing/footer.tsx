'use client'

import { Home, ArrowUp, Shield } from 'lucide-react'
import { Button } from '@/components/ui/button'

const footerLinks = {
  program: [
    { href: '#features', label: 'How It Works' },
    { href: '#pricing', label: 'Staging Pricing' },
    { href: '#testimonials', label: 'Client Success' },
  ],
  resources: [
    { href: '#faq', label: 'FAQ Accordion' },
    { href: '/privacy', label: 'Privacy Policy' },
    { href: '/terms', label: 'Terms of Service' },
  ],
}

interface FooterProps {
  onContactClick: () => void
}

export function Footer({ onContactClick }: FooterProps) {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  const handleContactLinkClick = (e: React.MouseEvent) => {
    e.preventDefault()
    // Open modal at the top focused state
    window.scrollTo({ top: 0, behavior: 'smooth' })
    onContactClick()
  }

  return (
    <footer className="bg-secondary text-secondary-foreground border-t border-primary/20 pt-16 pb-8 relative z-10 font-sans">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12 pb-12 border-b border-white/10">
          
          {/* Logo & Info column */}
          <div className="md:col-span-5 space-y-4">
            <a href="#" className="flex items-center gap-2 text-white hover:text-primary transition-colors">
              <img src="/logo.png" alt="Premium Logo" className="w-8 h-8 object-contain" />
              <span className="text-xl font-extrabold tracking-tight font-sans">Premium Realty</span>
            </a>
            <p className="text-xs text-secondary-foreground/75 leading-relaxed max-w-sm">
              Helping upsizing families transition into spacious luxury homes seamlessly. We coordinate the timeline, prep your home for $0 upfront, and protect your move with the Stay-Put Guarantee.
            </p>
          </div>

          {/* Program Links Column */}
          <div className="grid grid-cols-2 gap-8 md:col-span-4">
            <div className="space-y-3">
              <h4 className="text-xs font-bold text-white uppercase tracking-wider">The Program</h4>
              <ul className="space-y-2">
                {footerLinks.program.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="text-xs text-secondary-foreground/85 hover:text-white transition-colors font-semibold"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            <div className="space-y-3">
              <h4 className="text-xs font-bold text-white uppercase tracking-wider">Resources</h4>
              <ul className="space-y-2">
                {footerLinks.resources.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="text-xs text-secondary-foreground/85 hover:text-white transition-colors font-semibold"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Contact Column */}
          <div className="md:col-span-3 space-y-3">
            <h4 className="text-xs font-bold text-white uppercase tracking-wider">Get in Touch</h4>
            <ul className="space-y-2">
              <li>
                <button
                  onClick={handleContactLinkClick}
                  className="text-xs text-secondary-foreground/85 hover:text-white transition-colors font-bold text-left"
                >
                  Contact Form Modal
                </button>
              </li>
              <li className="text-xs text-secondary-foreground/75 font-semibold">
                Tel: (555) 123-4567
              </li>
              <li className="text-xs text-secondary-foreground/75 font-semibold">
                Email: hello@premiumrealty.com
              </li>
            </ul>
          </div>
        </div>

        {/* Local Board Placeholders & Legal */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-6 pt-8 text-center sm:text-left">
          <div className="flex items-center gap-4 text-xs font-bold text-secondary-foreground/70 flex-wrap justify-center">
            <span className="flex items-center gap-1.5">
              <Shield className="size-3.5 text-primary" />
              Equal Housing Opportunity
            </span>
            <span>|</span>
            <span>NAR Registered Broker #18429</span>
            <span>|</span>
            <span>MLS Partner Broker</span>
          </div>
          
          <div className="flex items-center gap-4">
            <span className="text-[10px] text-secondary-foreground/60 font-semibold">
              &copy; {new Date().getFullYear()} Premium Realty. All rights reserved.
            </span>
            <Button
              variant="outline"
              size="icon"
              onClick={scrollToTop}
              className="border-white/10 hover:bg-white/10 text-white w-8 h-8 rounded-full"
            >
              <ArrowUp className="size-4" />
              <span className="sr-only">Back to top</span>
            </Button>
          </div>
        </div>
      </div>
    </footer>
  )
}
