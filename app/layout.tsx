import { SpeedInsights } from "@vercel/speed-insights/next"

import type { Metadata, Viewport } from 'next'
import { Playfair_Display, Plus_Jakarta_Sans } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const playfair = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-playfair',
  display: 'swap',
})

const jakarta = Plus_Jakarta_Sans({
  subsets: ['latin'],
  variable: '--font-jakarta',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Premium Real Estate | Expert Guidance for Upsizing Families',
  description:
    'Outgrow your home, not your peace of mind. Expert guidance to sell your property for top dollar and transition into your dream home seamlessly. We handle the timing so you never move twice.',
  icons: {
    icon: '/favicon.png',
  },
  keywords: [
    'real estate',
    'upsizing',
    'family homes',
    'property consultation',
    'home selling',
    'equity unlock',
    'real estate agent',
  ],
  authors: [{ name: 'Premium Real Estate' }],
  openGraph: {
    title: 'Premium Real Estate | Expert Guidance for Upsizing Families',
    description:
      'Expert guidance to sell your property for top dollar and transition into your dream home seamlessly.',
    type: 'website',
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Premium Real Estate | Expert Guidance for Upsizing Families',
    description:
      'Expert guidance to sell your property for top dollar and transition into your dream home seamlessly.',
  },
  robots: {
    index: true,
    follow: true,
  },
}

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  themeColor: '#f8f9fa',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${playfair.variable} ${jakarta.variable} bg-background`}>
      <body className="font-sans antialiased min-h-screen">
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
        <SpeedInsights />
      </body>
    </html>
  )
}