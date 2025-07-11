'use client'

import { motion } from "framer-motion"
import { useState } from "react"
import { Menu, X, Star, Users, BookOpen, Calendar, MessageCircle } from "lucide-react"
import { cn } from "@/lib/utils"

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false)

  const navItems = [
    { name: "Home", href: "#home", icon: Star },
    { name: "Services", href: "#services", icon: BookOpen },
    { name: "Astrologers", href: "#astrologers", icon: Users },
    { name: "Consultations", href: "#consultations", icon: Calendar },
    { name: "Contact", href: "#contact", icon: MessageCircle },
  ]

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-black/20 backdrop-blur-md border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="flex items-center space-x-2 flex-shrink-0"
          >
            <div className="w-8 h-8 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full flex items-center justify-center">
              <Star className="w-5 h-5 text-white" />
            </div>
            <span className="text-lg sm:text-xl font-bold text-white whitespace-nowrap">ASTRODARBAR</span>
          </motion.div>

          {/* Desktop Navigation */}
          <div className="hidden lg:block">
            <div className="flex items-center space-x-1 xl:space-x-4">
              {navItems.map((item, index) => (
                <motion.a
                  key={item.name}
                  href={item.href}
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="text-gray-300 hover:text-white px-2 xl:px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200 flex items-center space-x-1 whitespace-nowrap"
                >
                  <item.icon className="w-4 h-4" />
                  <span className="hidden xl:inline">{item.name}</span>
                </motion.a>
              ))}
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="lg:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-300 hover:text-white focus:outline-none focus:text-white p-2 rounded-md transition-colors duration-200"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        <motion.div
          initial={false}
          animate={{
            height: isOpen ? "auto" : 0,
            opacity: isOpen ? 1 : 0
          }}
          transition={{ duration: 0.3, ease: "easeInOut" }}
          className="lg:hidden overflow-hidden"
        >
          <div className="px-2 pt-2 pb-3 space-y-1 bg-black/40 rounded-lg mt-2 mb-4">
            {navItems.map((item, index) => (
              <motion.a
                key={item.name}
                href={item.href}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: isOpen ? 1 : 0, x: isOpen ? 0 : -20 }}
                transition={{ delay: index * 0.1 }}
                className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-base font-medium flex items-center space-x-2 transition-colors duration-200"
                onClick={() => setIsOpen(false)}
              >
                <item.icon className="w-4 h-4" />
                <span>{item.name}</span>
              </motion.a>
            ))}
          </div>
        </motion.div>
      </div>
    </nav>
  )
}
