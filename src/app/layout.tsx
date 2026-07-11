import type { Metadata } from 'next'
import { Manrope } from 'next/font/google'
import './globals.css'
import { site } from '@/lib/site'
import { localBusinessLd } from '@/lib/schema'
import { Header } from '@/components/layout/Header'
import { Footer } from '@/components/layout/Footer'
import { FloatingWhatsApp } from '@/components/layout/FloatingWhatsApp'
import { JsonLd } from '@/components/seo/JsonLd'

// Manrope: a clean, modern, humanist-geometric sans — a licensed-free stand-in
// for Aaux Next (project-overview §1 typographic feel).
const manrope = Manrope({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-manrope',
})

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: `Maxis Home Fibre | Plans from RM89/mth | ${site.brandName}`,
    template: `%s | ${site.brandName}`,
  },
  description: site.description,
  applicationName: site.brandName,
  keywords: [
    'Maxis Home Fibre',
    'Maxis fibre plan',
    'Maxis Home Fibre 300Mbps',
    'Maxis fibre RM99',
    'home broadband Malaysia',
    'unlimited fibre internet',
    'switch to Maxis fibre',
  ],
  robots: { index: true, follow: true },
  alternates: { canonical: '/' },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en-MY" className={manrope.variable}>
      <body className="flex min-h-screen flex-col bg-surface">
        <JsonLd data={localBusinessLd()} />
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:absolute focus:left-md focus:top-md focus:z-[100] focus:rounded-pill focus:bg-primary focus:px-lg focus:py-sm focus:text-on-primary"
        >
          Skip to content
        </a>
        <Header />
        <main id="main" className="flex-1">
          {children}
        </main>
        <FloatingWhatsApp />
        <Footer />
      </body>
    </html>
  )
}
