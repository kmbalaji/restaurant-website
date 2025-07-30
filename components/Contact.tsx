'use client'

import { motion } from 'framer-motion'
import { MapPin, Phone, Mail, Clock, Facebook, Instagram, Twitter } from 'lucide-react'

export default function Contact() {
  const contactInfo = [
    {
      icon: MapPin,
      title: 'Address',
      content: '456 South Indian Street, Downtown, City, State 12345',
      link: 'https://maps.google.com'
    },
    {
      icon: Phone,
      title: 'Phone',
      content: '(555) 123-4567',
      link: 'tel:+15551234567'
    },
    {
      icon: Mail,
      title: 'Email',
      content: 'info@arunthagam.com',
      link: 'mailto:info@arunthagam.com'
    },
    {
      icon: Clock,
      title: 'Hours',
      content: 'Mon-Sat: 11:00 AM - 10:00 PM\nSunday: 12:00 PM - 9:00 PM'
    }
  ]

  const socialLinks = [
    { icon: Facebook, href: '#', label: 'Facebook' },
    { icon: Instagram, href: '#', label: 'Instagram' },
    { icon: Twitter, href: '#', label: 'Twitter' }
  ]

  return (
    <section id="contact" className="section-padding bg-white">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl sm:text-4xl font-serif font-bold text-gray-900 mb-4">
            Contact Us
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            We'd love to hear from you. Visit us, call us, or send us a message.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-serif font-bold text-gray-900 mb-8">
              Get in Touch
            </h3>
            
            <div className="space-y-6">
              {contactInfo.map((info, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="flex items-start space-x-4"
                >
                  <div className="w-12 h-12 bg-primary-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <info.icon className="w-6 h-6 text-primary-600" />
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-gray-900 mb-1">
                      {info.title}
                    </h4>
                    {info.link ? (
                      <a
                        href={info.link}
                        className="text-gray-600 hover:text-primary-600 transition-colors duration-200"
                      >
                        {info.content}
                      </a>
                    ) : (
                      <p className="text-gray-600 whitespace-pre-line">
                        {info.content}
                      </p>
                    )}
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Social Links */}
            <div className="mt-8">
              <h4 className="text-lg font-semibold text-gray-900 mb-4">
                Follow Us
              </h4>
              <div className="flex space-x-4">
                {socialLinks.map((social, index) => (
                  <motion.a
                    key={index}
                    href={social.href}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.3, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="w-12 h-12 bg-primary-100 rounded-full flex items-center justify-center hover:bg-primary-200 transition-colors duration-200"
                    aria-label={social.label}
                  >
                    <social.icon className="w-6 h-6 text-primary-600" />
                  </motion.a>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Map */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="bg-gray-200 rounded-xl overflow-hidden shadow-lg h-96">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3024.2219901290355!2d-74.00369368400567!3d40.71312937933185!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c25a23e28c1191%3A0x49f75d3281df052a!2s150%20Park%20Row%2C%20New%20York%2C%20NY%2010007!5e0!3m2!1sen!2sus!4v1645000000000!5m2!1sen!2sus"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Restaurant Location"
              />
            </div>
            
            {/* Map Overlay Info */}
            <div className="absolute bottom-4 left-4 right-4">
              <div className="bg-white/95 backdrop-blur-sm rounded-lg p-4 shadow-lg">
                <h4 className="font-semibold text-gray-900 mb-1">
                  Arunthagam
                </h4>
                <p className="text-sm text-gray-600">
                  456 South Indian Street, Downtown<br />
                  City, State 12345
                </p>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Additional Info */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="mt-16 grid md:grid-cols-3 gap-8 text-center"
        >
          <div className="bg-gray-50 rounded-xl p-6">
            <h4 className="text-lg font-semibold text-gray-900 mb-2">
              Reservations
            </h4>
            <p className="text-gray-600">
              We recommend making reservations, especially for weekend dining.
            </p>
          </div>
          <div className="bg-gray-50 rounded-xl p-6">
            <h4 className="text-lg font-semibold text-gray-900 mb-2">
              Private Events
            </h4>
            <p className="text-gray-600">
              Host your special occasions in our private dining room.
            </p>
          </div>
          <div className="bg-gray-50 rounded-xl p-6">
            <h4 className="text-lg font-semibold text-gray-900 mb-2">
              Catering
            </h4>
            <p className="text-gray-600">
              Let us cater your next event with our authentic Italian cuisine.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  )
} 