'use client'

import { motion } from "framer-motion"
import { Star, Mail, Phone, MapPin, Facebook, Twitter, Instagram, Youtube } from "lucide-react"

export function Footer() {
  const quickLinks = [
    { name: "Home", href: "#home" },
    { name: "Services", href: "#services" },
    { name: "Astrologers", href: "#astrologers" },
    { name: "Consultations", href: "#consultations" },
    { name: "About Us", href: "#about" },
    { name: "Contact", href: "#contact" }
  ]

  const services = [
    "Birth Chart Analysis",
    "Love & Relationships",
    "Career Guidance",
    "Daily Predictions",
    "Spiritual Healing",
    "Numerology"
  ]

  const socialLinks = [
    { icon: Facebook, href: "#", color: "hover:text-blue-400" },
    { icon: Twitter, href: "#", color: "hover:text-sky-400" },
    { icon: Instagram, href: "#", color: "hover:text-pink-400" },
    { icon: Youtube, href: "#", color: "hover:text-red-400" }
  ]

  return (
    <footer className="relative bg-black/40 backdrop-blur-sm border-t border-white/10 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-1"
          >
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-8 h-8 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full flex items-center justify-center">
                <Star className="w-5 h-5 text-white" />
              </div>
              <span className="text-lg sm:text-xl font-bold text-white">ASTRODARBAR</span>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed mb-6">
              Your trusted companion in exploring the cosmic connections that shape your destiny. 
              Connect with expert astrologers and unlock the mysteries of the universe.
            </p>
            
            {/* Contact Info */}
            <div className="space-y-3">
              <div className="flex items-center text-gray-400">
                <Mail className="w-4 h-4 mr-3" />
                <span className="text-sm">info@astrodarbar.com</span>
              </div>
              <div className="flex items-center text-gray-400">
                <Phone className="w-4 h-4 mr-3" />
                <span className="text-sm">+91 98765 43210</span>
              </div>
              <div className="flex items-start text-gray-400">
                <MapPin className="w-4 h-4 mr-3 mt-0.5 flex-shrink-0" />
                <span className="text-sm">
                  123 Cosmic Plaza, Star Avenue,<br />
                  Astrology District, Mumbai - 400001,<br />
                  Maharashtra, India
                </span>
              </div>
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="lg:col-span-1"
          >
            <h3 className="text-lg font-semibold text-white mb-4">Quick Links</h3>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-gray-400 hover:text-purple-300 text-sm transition-colors duration-200"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Services */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-1"
          >
            <h3 className="text-lg font-semibold text-white mb-4">Our Services</h3>
            <ul className="space-y-3">
              {services.map((service) => (
                <li key={service}>
                  <span className="text-gray-400 text-sm">{service}</span>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Newsletter & Social */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="lg:col-span-1"
          >
            <h3 className="text-lg font-semibold text-white mb-4">Stay Connected</h3>
            <p className="text-gray-400 text-sm mb-4">
              Subscribe to our newsletter for daily horoscopes and cosmic updates.
            </p>
            
            {/* Newsletter Signup */}
            <div className="flex flex-col sm:flex-row lg:flex-col xl:flex-row mb-6">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 bg-white/10 border border-white/20 rounded-l-lg lg:rounded-t-lg xl:rounded-t-none xl:rounded-l-lg lg:rounded-l-none px-4 py-2 text-white text-sm placeholder-gray-400 focus:outline-none focus:border-purple-400 mb-2 sm:mb-0 lg:mb-2 xl:mb-0"
              />
              <button className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 px-4 py-2 rounded-r-lg lg:rounded-b-lg xl:rounded-b-none xl:rounded-r-lg lg:rounded-r-none text-white text-sm font-medium transition-all duration-300">
                Subscribe
              </button>
            </div>

            {/* Social Links */}
            <div>
              <p className="text-white text-sm mb-3">Follow us on:</p>
              <div className="flex space-x-4">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.href}
                    className={`text-gray-400 ${social.color} transition-colors duration-200`}
                  >
                    <social.icon className="w-5 h-5" />
                  </a>
                ))}
              </div>
            </div>
          </motion.div>
        </div>

        {/* Bottom Bar */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="border-t border-white/10 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center"
        >
          <p className="text-gray-400 text-sm mb-4 md:mb-0">
            © 2025 ASTRODARBAR. All rights reserved.
          </p>
          
          <div className="flex space-x-6 text-sm">
            <a href="#" className="text-gray-400 hover:text-purple-300 transition-colors duration-200">
              Privacy Policy
            </a>
            <a href="#" className="text-gray-400 hover:text-purple-300 transition-colors duration-200">
              Terms of Service
            </a>
            <a href="#" className="text-gray-400 hover:text-purple-300 transition-colors duration-200">
              Cookie Policy
            </a>
          </div>
        </motion.div>
      </div>

      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-purple-600/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-0 w-64 h-64 bg-pink-600/5 rounded-full blur-3xl" />
      </div>
    </footer>
  )
}
