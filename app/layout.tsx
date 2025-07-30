import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'La Bella Tavola - Fine Dining Restaurant',
  description: 'Experience authentic Italian cuisine in an elegant atmosphere. Book your table today for an unforgettable dining experience.',
  keywords: 'restaurant, Italian food, fine dining, reservations, pasta, pizza, wine',
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