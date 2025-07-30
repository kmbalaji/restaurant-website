'use client'

import { useState } from 'react'
import Header from '@/components/Header'
import Hero from '@/components/Hero'
import About from '@/components/About'
import Menu from '@/components/Menu'
import Gallery from '@/components/Gallery'
import Contact from '@/components/Contact'
import Footer from '@/components/Footer'
import ReservationModal from '@/components/ReservationModal'

export default function Home() {
  const [isReservationOpen, setIsReservationOpen] = useState(false)

  return (
    <main className="min-h-screen">
      <Header onReservationClick={() => setIsReservationOpen(true)} />
      <Hero onReservationClick={() => setIsReservationOpen(true)} />
      <About />
      <Menu />
      <Gallery />
      <Contact />
      <Footer />
      <ReservationModal 
        isOpen={isReservationOpen} 
        onClose={() => setIsReservationOpen(false)} 
      />
    </main>
  )
} 