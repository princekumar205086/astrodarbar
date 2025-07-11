'use client'

import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"
import { Star, Award, Clock, Users } from "lucide-react"
import Image from "next/image"

const astrologers = [
  {
    name: "Dr. Priya Sharma",
    specialty: "Vedic Astrology & Palmistry",
    experience: "15+ Years",
    rating: 4.9,
    clients: "2000+",
    image: "https://images.unsplash.com/photo-1511367461989-f85a21fda167?auto=format&fit=crop&w=300&q=80",
    description: "Expert in ancient Vedic traditions with deep knowledge of planetary influences and karmic patterns."
  },
  {
    name: "Astro. Rajesh Kumar",
    specialty: "Numerology & Tarot Reading",
    experience: "12+ Years",
    rating: 4.8,
    clients: "1500+",
    image: "https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?auto=format&fit=crop&w=300&q=80",
    description: "Combines numerological insights with intuitive tarot readings for comprehensive life guidance."
  },
  {
    name: "Dr. Meera Patel",
    specialty: "Western Astrology & Psychology",
    experience: "18+ Years",
    rating: 4.9,
    clients: "3000+",
    image: "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?auto=format&fit=crop&w=300&q=80",
    description: "Integrates psychological insights with astrological wisdom for modern life solutions."
  },
  {
    name: "Guru Anand Tiwari",
    specialty: "Spiritual Healing & Remedies",
    experience: "20+ Years",
    rating: 5.0,
    clients: "2500+",
    image: "https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=300&q=80",
    description: "Master of spiritual remedies and energy healing techniques from ancient scriptures."
  }
]

export function AstrologersSection() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  return (
    <section id="astrologers" ref={ref} className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-6">
            Meet Our <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">Expert Astrologers</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Connect with certified and experienced astrologers who will guide you through your cosmic journey
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {astrologers.map((astrologer, index) => (
            <motion.div
              key={astrologer.name}
              initial={{ opacity: 0, y: 50 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group relative bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-4 sm:p-6 hover:border-white/20 transition-all duration-300 hover:transform hover:scale-105"
            >
              {/* Profile Image */}
              <div className="relative mb-4 sm:mb-6">
                <div className="w-20 h-20 sm:w-24 sm:h-24 mx-auto rounded-full overflow-hidden border-4 border-gradient-to-r from-purple-400 to-pink-400 p-1">
                  <Image
                    src={astrologer.image}
                    alt={astrologer.name}
                    width={96}
                    height={96}
                    className="w-full h-full rounded-full object-cover"
                  />
                </div>
                
                {/* Status Indicator */}
                <div className="absolute -top-1 -right-1 w-5 h-5 sm:w-6 sm:h-6 bg-green-500 rounded-full border-2 border-white flex items-center justify-center">
                  <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-white rounded-full animate-pulse" />
                </div>
              </div>

              {/* Astrologer Info */}
              <div className="text-center mb-4">
                <h3 className="text-lg sm:text-xl font-semibold text-white mb-1">{astrologer.name}</h3>
                <p className="text-purple-300 text-xs sm:text-sm font-medium mb-2">{astrologer.specialty}</p>
                <p className="text-gray-400 text-xs sm:text-sm leading-relaxed line-clamp-3">{astrologer.description}</p>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-3 gap-2 sm:gap-4 mb-4 sm:mb-6">
                <div className="text-center">
                  <div className="flex items-center justify-center mb-1">
                    <Clock className="w-3 h-3 sm:w-4 sm:h-4 text-blue-400 mr-1" />
                  </div>
                  <div className="text-xs text-gray-400">{astrologer.experience}</div>
                </div>
                <div className="text-center">
                  <div className="flex items-center justify-center mb-1">
                    <Star className="w-3 h-3 sm:w-4 sm:h-4 text-yellow-400 mr-1" />
                    <span className="text-xs sm:text-sm font-semibold text-white">{astrologer.rating}</span>
                  </div>
                  <div className="text-xs text-gray-400">Rating</div>
                </div>
                <div className="text-center">
                  <div className="flex items-center justify-center mb-1">
                    <Users className="w-3 h-3 sm:w-4 sm:h-4 text-green-400 mr-1" />
                  </div>
                  <div className="text-xs text-gray-400">{astrologer.clients}</div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="space-y-2 sm:space-y-3">
                <button className="w-full bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white py-2 px-3 sm:px-4 rounded-lg text-xs sm:text-sm font-medium transition-all duration-300">
                  Book Consultation
                </button>
                <button className="w-full border border-purple-400/50 text-purple-300 hover:bg-purple-500/10 py-2 px-3 sm:px-4 rounded-lg text-xs sm:text-sm font-medium transition-all duration-300">
                  View Profile
                </button>
              </div>

              {/* Hover Glow */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
                <div className="absolute inset-0 bg-gradient-to-r from-purple-600/10 to-pink-600/10 rounded-2xl blur-xl" />
              </div>
            </motion.div>
          ))}
        </div>

        {/* View All Button */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-center mt-12"
        >
          <button className="border-2 border-purple-400/50 text-purple-200 hover:bg-purple-500/10 px-8 py-3 rounded-full text-lg font-semibold backdrop-blur-sm transition-all duration-300">
            View All Astrologers
          </button>
        </motion.div>
      </div>
    </section>
  )
}
