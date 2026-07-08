import { SpeedInsights } from "@vercel/speed-insights/next"

import type { Metadata, Viewport } from 'next'
import { Crimson_Pro, Dancing_Script } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const crimsonPro = Crimson_Pro({
  subsets: ['latin'],
  variable: '--font-crimson-pro',
  display: 'swap',
})

const dancingScript = Dancing_Script({
  subsets: ['latin'],
  variable: '--font-dancing-script',
  display: 'swap',
})

export const metadata: Metadata = {
  metadataBase: new URL('https://v0-real-estate-landing-page-0-robertoopg616-4887-52eebc56.vercel.app'),
  title: 'Premium Real Estate | Expert Guidance for Upsizing Families',
  description:
    'Outgrow your home, not your peace of mind. Expert guidance to sell your property for top dollar and transition into your dream home seamlessly. We handle the timing so you never move twice.',
  icons: {
    icon: '/favicon.png',
    apple: '/apple-icon.png',
  },
  keywords: [
    'real estate',
    'upsizing',
    'family homes',
    'property consultation',
    'home selling',
    'equity unlock',
    'real estate agent',
    'premium staging',
    'timeline guarantee',
  ],
  authors: [{ name: 'Premium Real Estate' }],
  openGraph: {
    title: 'Premium Real Estate | Expert Guidance for Upsizing Families',
    description:
      'Outgrow your home, not your peace of mind. Expert guidance to sell your property for top dollar and transition into your dream home seamlessly.',
    type: 'website',
    locale: 'en_US',
    url: 'https://v0-real-estate-landing-page-0-robertoopg616-4887-52eebc56.vercel.app',
    siteName: 'Premium Realty',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Premium Realty - Your Next Home. Perfectly Timed.',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Premium Real Estate | Expert Guidance for Upsizing Families',
    description:
      'Outgrow your home, not your peace of mind. Expert guidance to sell your property for top dollar and transition into your dream home seamlessly.',
    creator: '@PremiumRealty',
    images: ['/og-image.png'],
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
    <html lang="en" className={`${crimsonPro.variable} ${dancingScript.variable} bg-background`}>
      <body className="font-sans antialiased min-h-screen">
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
        <SpeedInsights />
      </body>
    </html>
  )
}