'use client'

import { useState, useEffect } from 'react'
import { motion, useScroll } from 'framer-motion'
import { Menu, Home } from 'lucide-react'
import { Button } from '@/components/ui/button'
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from '@/components/ui/sheet'

const navLinks = [
  { href: '#features', label: 'How It Works' },
  { href: '#listings', label: 'Exclusive Portfolio' },
  { href: '#pricing', label: 'Pricing' },
  { href: '#testimonials', label: 'Success Stories' },
  { href: '#faq', label: 'FAQ' },
]

interface HeaderProps {
  onContactClick: () => void
}

export function Header({ onContactClick }: HeaderProps) {
  const [isOpen, setIsOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const { scrollYProgress } = useScroll()

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true)
      } else {
        setIsScrolled(false)
      }
    }
    window.addEventListener('scroll', handleScroll)
    handleScroll() // run on mount
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToSection = (href: string) => {
    setIsOpen(false)
    const element = document.querySelector(href)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <motion.header
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-white/70 backdrop-blur-lg border-b border-primary/20 shadow-sm text-secondary'
          : 'bg-transparent text-white border-transparent'
      } max-md:bg-white/90 max-md:backdrop-blur-xl max-md:border-b max-md:border-primary/20 max-md:shadow-sm max-md:text-secondary`}
    >
      {/* Scroll Progress Bar */}
      <motion.div className="scroll-progress-bar" style={{ scaleX: scrollYProgress }} />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          {/* Logo brand typographic signature */}
          <a
            href="#"
            className="flex items-center gap-2.5 hover:text-primary transition-colors text-current"
          >
            <img 
              src="/logo.png" 
              alt="Premium Realty Logo" 
              className="w-7 h-7 object-contain" 
            />
            <span className="text-base font-serif font-bold tracking-[0.2em] uppercase text-current">
              Premium Realty
            </span>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <button
                key={link.href}
                onClick={() => scrollToSection(link.href)}
                className={`text-sm font-bold transition-colors ${
                  isScrolled 
                    ? 'text-muted-foreground hover:text-secondary' 
                    : 'text-slate-200 hover:text-white'
                }`}
              >
                {link.label}
              </button>
            ))}
          </nav>

          {/* Desktop CTA */}
          <div className="hidden md:block">
            <Button
              onClick={onContactClick}
              className="bg-primary hover:bg-primary/90 text-primary-foreground font-bold text-sm rounded-lg px-5 py-2 border border-primary/30 shadow-md transition-all"
            >
              Join Program
            </Button>
          </div>

          {/* Mobile Menu */}
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild className="md:hidden">
              <Button variant="ghost" size="icon" className="text-current">
                <Menu className="size-5" />
                <span className="sr-only">Toggle menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[300px] bg-background border-l border-primary/20">
              <SheetHeader>
                <SheetTitle className="text-secondary font-serif font-semibold tracking-[0.2em] uppercase text-sm">
                  Premium Realty
                </SheetTitle>
              </SheetHeader>
              <nav className="mt-8 flex flex-col gap-4">
                {navLinks.map((link) => (
                  <button
                    key={link.href}
                    onClick={() => scrollToSection(link.href)}
                    className="text-left text-sm font-bold text-muted-foreground hover:text-secondary transition-colors py-2 border-b border-border/10"
                  >
                    {link.label}
                  </button>
                ))}
                <Button
                  onClick={() => {
                    setIsOpen(false)
                    onContactClick()
                  }}
                  className="mt-4 bg-primary hover:bg-primary/90 text-primary-foreground font-bold text-sm w-full rounded-lg py-3 shadow-md"
                >
                  Join Program
                </Button>
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </motion.header>
  )
}
