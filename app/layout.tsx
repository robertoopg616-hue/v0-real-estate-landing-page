import { SpeedInsights } from "@vercel/speed-insights/next"

import type { Metadata, Viewport } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const geistSans = Geist({
  subsets: ['latin'],
  variable: '--font-geist-sans',
})

const geistMono = Geist_Mono({
  subsets: ['latin'],
  variable: '--font-geist-mono',
})

export const metadata: Metadata = {
  title: 'Premium Real Estate | Expert Guidance for Upsizing Families',
  description:
    'Outgrow your home, not your peace of mind. Expert guidance to sell your property for top dollar and transition into your dream home seamlessly. We handle the timing so you never move twice.',
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
  themeColor: '#0f172a',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${geistSans.variable} ${geistMono.variable} bg-background`}>
      <body className="font-sans antialiased min-h-screen">
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
        <SpeedInsights />
      </body>
    </html>
  )
}