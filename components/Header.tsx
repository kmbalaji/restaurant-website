'use client'

import { useState, useEffect } from 'react'
import { Menu, X, Phone } from 'lucide-react'

interface HeaderProps {
  onReservationClick: () => void
}

export default function Header({ onReservationClick }: HeaderProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navItems = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Menu', href: '#menu' },
    { name: 'Gallery', href: '#gallery' },
    { name: 'Contact', href: '#contact' },
  ]

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled ? 'bg-white/95 backdrop-blur-md shadow-lg' : 'bg-transparent'
    }`}>
      <div className="container-custom">
        <div className="flex items-center justify-between py-4">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <div className="w-10 h-10 bg-primary-600 rounded-full flex items-center justify-center">
              <span className="text-white font-serif font-bold text-lg">A</span>
            </div>
            <div>
              <h1 className="text-xl font-serif font-bold text-gray-900">Arunthagam</h1>
              <p className="text-xs text-gray-600">Authentic South Indian Cuisine</p>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="text-gray-700 hover:text-primary-600 font-medium transition-colors duration-200"
              >
                {item.name}
              </a>
            ))}
          </nav>

          {/* Contact and Reservation */}
          <div className="hidden md:flex items-center space-x-4">
            <a
              href="tel:+15551234567"
              className="flex items-center space-x-2 text-gray-700 hover:text-primary-600 transition-colors duration-200"
            >
              <Phone size={16} />
              <span className="font-medium">(555) 123-4567</span>
            </a>
            <button
              onClick={onReservationClick}
              className="btn-primary"
            >
              Book a Table
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 text-gray-700 hover:text-primary-600 transition-colors duration-200"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden bg-white border-t border-gray-200 py-4">
            <nav className="flex flex-col space-y-4">
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="text-gray-700 hover:text-primary-600 font-medium transition-colors duration-200"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </a>
              ))}
              <div className="pt-4 border-t border-gray-200">
                <a
                  href="tel:+15551234567"
                  className="flex items-center space-x-2 text-gray-700 hover:text-primary-600 transition-colors duration-200 mb-4"
                >
                  <Phone size={16} />
                  <span className="font-medium">(555) 123-4567</span>
                </a>
                <button
                  onClick={() => {
                    onReservationClick()
                    setIsMenuOpen(false)
                  }}
                  className="btn-primary w-full"
                >
                  Book a Table
                </button>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  )
} 