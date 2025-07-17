'use client'

import { motion, AnimatePresence } from "framer-motion"
import { useState, useEffect } from "react"
import { X, Star, Sparkles, Rocket } from "lucide-react"
import Link from "next/link"

export function ComingSoonModal() {
  const [isOpen, setIsOpen] = useState(false)

  useEffect(() => {
    // Show modal after 2 seconds when page loads
    const timer = setTimeout(() => {
      setIsOpen(true)
    }, 2000)

    return () => clearTimeout(timer)
  }, [])

  if (!isOpen) return null

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm p-4"
        onClick={() => setIsOpen(false)}
      >
        <motion.div
          initial={{ opacity: 0, scale: 0.8, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.8, y: 20 }}
          transition={{ type: "spring", damping: 20, stiffness: 300 }}
          className="relative bg-gradient-to-br from-purple-900/90 to-pink-900/90 backdrop-blur-xl border border-purple-400/30 rounded-3xl p-6 sm:p-8 max-w-md w-full mx-4 shadow-2xl"
          onClick={(e) => e.stopPropagation()}
        >
          {/* Close Button */}
          <button
            onClick={() => setIsOpen(false)}
            className="absolute top-4 right-4 text-gray-300 hover:text-white transition-colors"
          >
            <X className="w-6 h-6" />
          </button>

          {/* Content */}
          <div className="text-center space-y-6">
            {/* Icon */}
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.2, type: "spring" }}
              className="flex justify-center"
            >
              <div className="relative">
                <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center">
                  <Rocket className="w-8 h-8 text-white" />
                </div>
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                  className="absolute -top-2 -right-2"
                >
                  <Sparkles className="w-6 h-6 text-yellow-400" />
                </motion.div>
              </div>
            </motion.div>

            {/* Title */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
            >
              <h2 className="text-2xl sm:text-3xl font-bold text-white mb-2">
                Coming Soon!
              </h2>
              <div className="flex items-center justify-center space-x-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <motion.div
                    key={i}
                    animate={{ scale: [1, 1.2, 1] }}
                    transition={{ delay: i * 0.1, duration: 1.5, repeat: Infinity }}
                  >
                    <Star className="w-4 h-4 text-yellow-400 fill-current" />
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Message */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="space-y-4"
            >
              <p className="text-gray-200 text-base sm:text-lg leading-relaxed">
                The best and most complete version of this web application is launching soon!
              </p>
              <p className="text-purple-200 text-sm">
                Get ready for an enhanced cosmic experience with advanced features, 
                personalized dashboards, and much more!
              </p>
            </motion.div>
            {/* contact info */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="space-y-4"
            >
              <p className="text-gray-200 text-base sm:text-lg leading-relaxed">
                For inquiries, please call us:
              </p>
              <p className="text-purple-200 text-sm">
                Astrologer: Pandit Shree Suraj Bhardwaj
              </p>
              <p className="text-purple-200 text-sm">
                Phone: <Link href="tel:+919471661636">+91 9471661636</Link>
              </p>
            </motion.div>

            {/* Action Button */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
            >
              <button
                onClick={() => setIsOpen(false)}
                className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white px-6 py-3 rounded-full font-semibold text-sm sm:text-base transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105"
              >
                Explore Current Version
              </button>
            </motion.div>
          </div>

          {/* Background Elements */}
          <div className="absolute inset-0 overflow-hidden rounded-3xl pointer-events-none">
            {[...Array(6)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute w-1 h-1 bg-white rounded-full"
                style={{
                  left: `${Math.random() * 100}%`,
                  top: `${Math.random() * 100}%`,
                }}
                animate={{
                  opacity: [0.3, 1, 0.3],
                  scale: [1, 1.5, 1],
                }}
                transition={{
                  duration: Math.random() * 3 + 2,
                  repeat: Infinity,
                  delay: Math.random() * 2,
                }}
              />
            ))}
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  )
}
