'use client'

import { motion } from 'framer-motion'
import { ChevronDown } from 'lucide-react'

interface HeroProps {
  onReservationClick: () => void
}

export default function Hero({ onReservationClick }: HeroProps) {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 bg-gradient-to-br from-black/60 to-black/40">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: "url('https://images.unsplash.com/photo-1414235077428-338989a2e8c0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80')"
          }}
        />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center text-white px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto"
        >
          <h1 className="text-4xl sm:text-5xl lg:text-7xl font-serif font-bold mb-6">
            Arunthagam
          </h1>
          <p className="text-xl sm:text-2xl lg:text-3xl font-light mb-8 text-gray-200">
            Experience the authentic taste of South India
          </p>
          <p className="text-lg sm:text-xl mb-12 text-gray-300 max-w-2xl mx-auto">
            From traditional dosas to aromatic biryanis, every dish is crafted with authentic spices and time-honored recipes.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={onReservationClick}
              className="btn-primary text-lg px-8 py-4"
            >
              Book Your Table
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="btn-secondary text-lg px-8 py-4"
            >
              View Our Menu
            </motion.button>
          </div>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 0.8 }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="flex flex-col items-center text-white/70"
          >
            <span className="text-sm mb-2">Scroll to explore</span>
            <ChevronDown size={20} />
          </motion.div>
        </motion.div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute top-20 left-10 w-20 h-20 border-2 border-white/20 rounded-full hidden lg:block" />
      <div className="absolute bottom-20 right-10 w-32 h-32 border-2 border-white/20 rounded-full hidden lg:block" />
      <div className="absolute top-1/2 left-5 w-16 h-16 border border-white/10 rounded-full hidden xl:block" />
      <div className="absolute top-1/3 right-8 w-12 h-12 border border-white/10 rounded-full hidden xl:block" />
    </section>
  )
} 