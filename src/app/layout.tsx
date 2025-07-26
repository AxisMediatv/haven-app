import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Haven - Emotional Intelligence Platform',
<<<<<<< HEAD
  description: 'Your personal emotional intelligence companion for emotional wellness and personal growth.',
  keywords: ['emotional intelligence', 'emotional wellness', 'personal growth', 'AI', 'wellness'],
=======
  description: 'Your personal emotional intelligence companion for better mental health and well-being.',
  keywords: 'emotional intelligence, mental health, therapy, AI, wellness',
>>>>>>> fe3bc02c87b27ff52437d2d312cc779a164adc8b
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