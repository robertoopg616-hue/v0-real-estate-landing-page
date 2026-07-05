'use client'

import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
import { Button } from '@/components/ui/button'

interface HeroProps {
  onContactClick: () => void
}

// DESKTOP: Premium 3D perspective transitions
const desktopContainerVariants = {
  initial: {
    opacity: 0,
    scale: 0.96,
    z: -80,
    rotateX: 8,
    rotateY: -6,
  },
  animate: {
    opacity: 1,
    scale: 1,
    z: 0,
    rotateX: 0,
    rotateY: 0,
    transition: {
      duration: 1.4,
      ease: [0.16, 1, 0.3, 1], // cubic-bezier easeOutExpo
    }
  }
};

const desktopBgVariants = {
  initial: {
    scale: 1.15,
    opacity: 0,
  },
  animate: {
    scale: 1,
    opacity: 1,
    transition: {
      duration: 2.2,
      ease: [0.16, 1, 0.3, 1],
    }
  }
};

const desktopHeadlineVariants = {
  initial: {
    y: '115%',
    opacity: 0.3,
  },
  animate: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 1.0,
      ease: [0.16, 1, 0.3, 1],
      delay: 0.15,
    }
  }
};

const desktopSubheadlineVariants = {
  initial: {
    y: '115%',
    opacity: 0.3,
  },
  animate: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 1.0,
      ease: [0.16, 1, 0.3, 1],
      delay: 0.3,
    }
  }
};

const desktopButtonsVariants = {
  initial: {
    opacity: 0,
    y: 25,
  },
  animate: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 1.0,
      ease: [0.16, 1, 0.3, 1],
      delay: 0.45,
    }
  }
};

// MOBILE: Flat, lightweight transitions (No 3D/parallax scale to prevent rendering lag)
const mobileContainerVariants = {
  initial: {
    opacity: 0,
    y: 12,
  },
  animate: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: 'easeOut',
    }
  }
};

const mobileBgVariants = {
  initial: {
    opacity: 0,
  },
  animate: {
    opacity: 1,
    transition: {
      duration: 0.6,
      ease: 'easeOut',
    }
  }
};

const mobileHeadlineVariants = {
  initial: {
    opacity: 0,
  },
  animate: {
    opacity: 1,
    transition: {
      duration: 0.6,
      delay: 0.1,
    }
  }
};

const mobileSubheadlineVariants = {
  initial: {
    opacity: 0,
  },
  animate: {
    opacity: 1,
    transition: {
      duration: 0.6,
      delay: 0.2,
    }
  }
};

const mobileButtonsVariants = {
  initial: {
    opacity: 0,
    y: 8,
  },
  animate: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      delay: 0.3,
    }
  }
};

export function Hero({ onContactClick }: HeroProps) {
  const [mounted, setMounted] = useState(false)
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    setMounted(true)
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768)
    }
    handleResize()
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  // Static skeleton during SSR & Initial client hydration to prevent layouts shift
  if (!mounted) {
    return (
      <section className="relative min-h-screen flex items-center pt-16 overflow-hidden bg-secondary">
        <div className="absolute inset-0 z-0 overflow-hidden">
          <img 
            src="/webaliser-_TPTXZd9mOo-unsplash.jpg" 
            alt="Modern luxury real estate villa background" 
            className="w-full h-full object-cover object-center"
          />
          <div className="absolute inset-0 bg-white/85 backdrop-blur-[1px] md:hidden z-1" />
          <div className="hidden md:block absolute inset-0 bg-gradient-to-r from-black/90 via-black/60 to-black/30 lg:to-transparent z-1" />
          <div className="hidden md:block absolute inset-0 bg-black/40 lg:bg-transparent z-1" />
        </div>
        <div className="relative mx-auto max-w-7xl px-4 sm:px-8 md:px-16 py-20 md:py-24 z-10 w-full">
          <div className="max-w-4xl text-left space-y-6 opacity-0">
            <h1 className="font-medium tracking-wide text-[36px] sm:text-[48px] md:text-[72px] lg:text-[96px] leading-[1.1] text-neutral-900 md:text-white font-headline max-w-3xl normal-case">
              Your Next Home. Perfectly Timed.
            </h1>
          </div>
        </div>
      </section>
    )
  }

  // Once mounted on the client, variants are resolved statically matching the window width
  const containerVariants = isMobile ? mobileContainerVariants : desktopContainerVariants;
  const bgVariants = isMobile ? mobileBgVariants : desktopBgVariants;
  const headlineVariants = isMobile ? mobileHeadlineVariants : desktopHeadlineVariants;
  const subheadlineVariants = isMobile ? mobileSubheadlineVariants : desktopSubheadlineVariants;
  const buttonsVariants = isMobile ? mobileButtonsVariants : desktopButtonsVariants;

  return (
    <section 
      className="relative min-h-screen flex items-center pt-16 overflow-hidden bg-secondary"
      style={{ perspective: isMobile ? 'none' : '1000px' }}
    >
      {/* Absolute Full-Bleed Background Image & Dark/Fog Overlay Mask */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <motion.img 
          src="/webaliser-_TPTXZd9mOo-unsplash.jpg" 
          alt="Modern luxury real estate villa background" 
          variants={bgVariants}
          initial="initial"
          animate="animate"
          className="w-full h-full object-cover object-center"
          loading="eager"
        />
        {/* Mobile: light fog overlay mask */}
        <div className="absolute inset-0 bg-white/85 backdrop-blur-[1px] md:hidden z-1" />
        {/* Desktop: subtle linear-gradient overlay mask (darkening for contrast) */}
        <div className="hidden md:block absolute inset-0 bg-gradient-to-r from-black/90 via-black/60 to-black/30 lg:to-transparent z-1" />
        <div className="hidden md:block absolute inset-0 bg-black/40 lg:bg-transparent z-1" />

        {/* Ambient floating blobs for depth (Only render on desktop for performance) */}
        {!isMobile && (
          <>
            <div className="absolute top-1/4 left-1/4 w-[300px] h-[300px] rounded-full bg-primary/10 blur-[80px] pointer-events-none animate-float-1 z-2" />
            <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] rounded-full bg-[#d4af37]/5 blur-[100px] pointer-events-none animate-float-2 z-2" />
          </>
        )}
      </div>

      <motion.div
        variants={containerVariants}
        initial="initial"
        animate="animate"
        style={{ transformStyle: isMobile ? 'flat' : 'preserve-3d' }}
        className="relative mx-auto max-w-7xl px-4 sm:px-8 md:px-16 py-20 md:py-24 z-10 w-full"
      >
        <div className="max-w-4xl text-left space-y-6">
          
          {/* Headline Mask Reveal */}
          <div className="overflow-hidden py-1">
            <motion.h1
              variants={headlineVariants}
              initial="initial"
              animate="animate"
              className="font-medium tracking-wide text-[36px] sm:text-[48px] md:text-[72px] lg:text-[96px] leading-[1.1] text-neutral-900 md:text-white font-headline max-w-3xl normal-case"
            >
              Your Next Home. Perfectly Timed.
            </motion.h1>
          </div>

          {/* Subheadline Mask Reveal */}
          <div className="overflow-hidden py-1">
            <motion.p
              variants={subheadlineVariants}
              initial="initial"
              animate="animate"
              className="font-light text-base sm:text-lg text-neutral-500 md:text-slate-200/90 max-w-2xl leading-relaxed font-sans"
            >
              We handle the logistics, fund your property's cosmetic staging upfront, and coordinate timelines so you never have to move twice.
            </motion.p>
          </div>

          {/* CTA Buttons Fade-In */}
          <motion.div
            variants={buttonsVariants}
            initial="initial"
            animate="animate"
            className="flex flex-col md:flex-row items-stretch md:items-center gap-3 md:gap-4 pt-4 w-full md:w-auto"
          >
            <Button
              size="lg"
              onClick={onContactClick}
              className="bg-primary hover:bg-primary/95 text-primary-foreground font-bold text-base px-8 py-6 rounded-lg shadow-lg shadow-primary/20 transition-all border border-primary/40 w-full md:w-auto justify-center"
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
              className="text-white border-white/30 hover:bg-white hover:text-secondary font-bold text-base px-8 py-6 rounded-lg transition-colors bg-white/5 backdrop-blur-sm w-full md:w-auto max-md:text-neutral-900 max-md:border-neutral-900/30 max-md:bg-transparent max-md:hover:bg-neutral-900 max-md:hover:text-white justify-center"
            >
              See How It Works
            </Button>
          </motion.div>
        </div>
      </motion.div>
    </section>
  )
}
