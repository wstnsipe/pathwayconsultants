import type { Metadata } from 'next'
import { Plus_Jakarta_Sans, Inter } from 'next/font/google'
import './globals.css'

const plusJakarta = Plus_Jakarta_Sans({
  subsets: ['latin'],
  variable: '--font-jakarta',
  weight: ['400', '500', '600', '700', '800'],
  display: 'swap',
})

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  weight: ['400', '500', '600'],
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Pathway Business Consultants — Small Business Strategy & Consulting',
  description:
    'Helping Alabama entrepreneurs build smarter, stronger businesses. 18+ years of hands-on consulting experience. Book your free 15-minute call today.',
  keywords: 'small business consulting, business strategy, Alabama consultant, startup consulting, operations optimization',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${plusJakarta.variable} ${inter.variable} antialiased`}>
        {children}
      </body>
    </html>
  )
}
