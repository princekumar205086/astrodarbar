'use client'

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { ArrowRight, Star, Sparkles } from "lucide-react"
import Image from "next/image"

export function HeroSection() {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 pt-16">
      <div className="max-w-7xl mx-auto text-center w-full">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-6 sm:space-y-8"
        >
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2 }}
            className="inline-flex items-center px-3 sm:px-4 py-2 rounded-full bg-gradient-to-r from-purple-500/20 to-pink-500/20 border border-purple-500/30 backdrop-blur-sm"
          >
            <Sparkles className="w-4 h-4 text-purple-300 mr-2" />
            <span className="text-xs sm:text-sm text-purple-200">Welcome to the Cosmic Journey</span>
          </motion.div>

          {/* Main Heading */}
          <div className="space-y-3 sm:space-y-4">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-white leading-tight px-2"
            >
              <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-yellow-400 bg-clip-text text-transparent">
                ASTRO
              </span>
              <span className="text-white">DARBAR</span>
            </motion.h1>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="text-base sm:text-lg md:text-xl lg:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed px-4"
            >
              Discover the cosmic connections that shape your destiny. Connect with expert astrologers, 
              explore celestial insights, and unlock the mysteries of the universe.
            </motion.p>
          </div>

          {/* Action Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center px-4"
          >
            <Button 
              size="lg" 
              className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white px-6 sm:px-8 py-3 rounded-full text-base sm:text-lg font-semibold shadow-lg shadow-purple-500/25 transition-all duration-300 hover:shadow-xl hover:shadow-purple-500/40 w-full sm:w-auto"
            >
              Start Your Journey
              <ArrowRight className="w-4 sm:w-5 h-4 sm:h-5 ml-2" />
            </Button>
            
            <Button 
              variant="outline" 
              size="lg"
              className="border-2 border-purple-400/50 text-purple-200 hover:bg-purple-500/10 px-6 sm:px-8 py-3 rounded-full text-base sm:text-lg font-semibold backdrop-blur-sm w-full sm:w-auto"
            >
              Explore Services
            </Button>
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="grid grid-cols-3 gap-4 sm:gap-8 max-w-md sm:max-w-lg mx-auto mt-12 sm:mt-16 px-4"
          >
            <div className="text-center">
              <div className="text-xl sm:text-2xl lg:text-3xl font-bold text-white">1000+</div>
              <div className="text-xs sm:text-sm text-gray-400">Happy Clients</div>
            </div>
            <div className="text-center">
              <div className="text-xl sm:text-2xl lg:text-3xl font-bold text-white">50+</div>
              <div className="text-xs sm:text-sm text-gray-400">Expert Astrologers</div>
            </div>
            <div className="text-center">
              <div className="text-xl sm:text-2xl lg:text-3xl font-bold text-white">10+</div>
              <div className="text-xs sm:text-sm text-gray-400">Years Experience</div>
            </div>
          </motion.div>
        </motion.div>

        {/* Floating Astrology Symbol */}
        <motion.div
          className="absolute top-1/4 right-4 sm:right-10 hidden md:block"
          animate={{
            y: [-10, 10, -10],
            rotate: [0, 5, -5, 0],
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
          }}
        >
          <div className="w-16 sm:w-20 lg:w-24 h-16 sm:h-20 lg:h-24 bg-gradient-to-br from-purple-400/20 to-pink-400/20 rounded-full flex items-center justify-center backdrop-blur-sm border border-purple-400/30">
            <Star className="w-8 sm:w-10 lg:w-12 h-8 sm:h-10 lg:h-12 text-purple-300" />
          </div>
        </motion.div>
      </div>
    </section>
  )
}
