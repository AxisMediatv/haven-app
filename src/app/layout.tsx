import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Haven - Emotional Intelligence Platform',
  description: 'Your personal emotional intelligence companion for emotional wellness and personal growth.',
  keywords: ['emotional intelligence', 'emotional wellness', 'personal growth', 'AI', 'wellness'],
  authors: [{ name: 'Haven Team' }],
  viewport: 'width=device-width, initial-scale=1',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.className} antialiased bg-gray-50 text-gray-900`}>
        {children}
      </body>
    </html>
  )
} 