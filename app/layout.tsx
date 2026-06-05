import type { Metadata } from 'next'
import './globals.css'
import SiteChrome from '@/components/SiteChrome'

export const metadata: Metadata = {
  title: 'DALAN Builders',
  description: 'DALAN Builders — Residential & Commercial properties. Building dreams, delivering excellence.',
  keywords: 'DALAN Builders, residential, commercial, property, India',
  icons: {
    icon: '/logo/favicon.ico',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <SiteChrome>{children}</SiteChrome>
      </body>
    </html>
  )
}
