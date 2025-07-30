import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Arunthagam - Authentic South Indian Restaurant',
  description: 'Experience authentic South Indian cuisine in an elegant atmosphere. Book your table today for an unforgettable dining experience.',
  keywords: 'restaurant, South Indian food, fine dining, reservations, dosa, biryani, curry',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {children}
      </body>
    </html>
  )
} 