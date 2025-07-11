'use client'

import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"
import { Calendar, Clock, Video, MessageCircle, Phone, Globe } from "lucide-react"

const consultationTypes = [
  {
    icon: Video,
    title: "Video Consultation",
    duration: "45 minutes",
    price: "₹1,999",
    description: "Face-to-face consultation via video call for personalized guidance",
    features: ["HD Video Quality", "Screen Sharing", "Recording Available", "Follow-up Notes"],
    popular: true
  },
  {
    icon: Phone,
    title: "Voice Consultation",
    duration: "30 minutes",
    price: "₹1,499",
    description: "Voice-only consultation for focused astrological insights",
    features: ["Crystal Clear Audio", "Call Recording", "Quick Follow-up", "Cost Effective"],
    popular: false
  },
  {
    icon: MessageCircle,
    title: "Chat Consultation",
    duration: "60 minutes",
    price: "₹999",
    description: "Text-based consultation for detailed written guidance",
    features: ["Written Records", "Image Sharing", "Extended Duration", "Flexible Timing"],
    popular: false
  }
]

export function ConsultationSection() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  return (
    <section id="consultations" ref={ref} className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-6">
            Book Your <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">Consultation</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Choose your preferred consultation method and connect with our expert astrologers
          </p>
        </motion.div>

        {/* Consultation Types */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 mb-12 lg:mb-16">
          {consultationTypes.map((type, index) => (
            <motion.div
              key={type.title}
              initial={{ opacity: 0, y: 50 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className={`relative bg-white/5 backdrop-blur-sm border rounded-2xl p-6 lg:p-8 transition-all duration-300 hover:transform hover:scale-105 ${
                type.popular 
                  ? 'border-purple-400/50 ring-2 ring-purple-400/20' 
                  : 'border-white/10 hover:border-white/20'
              }`}
            >
              {/* Popular Badge */}
              {type.popular && (
                <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                  <div className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-3 sm:px-4 py-1 rounded-full text-xs sm:text-sm font-medium">
                    Most Popular
                  </div>
                </div>
              )}

              {/* Icon */}
              <div className="flex justify-center mb-4 sm:mb-6">
                <div className={`w-12 h-12 sm:w-16 sm:h-16 rounded-full flex items-center justify-center ${
                  type.popular 
                    ? 'bg-gradient-to-r from-purple-600 to-pink-600' 
                    : 'bg-white/10'
                }`}>
                  <type.icon className="w-6 h-6 sm:w-8 sm:h-8 text-white" />
                </div>
              </div>

              {/* Content */}
              <div className="text-center mb-4 sm:mb-6">
                <h3 className="text-xl sm:text-2xl font-bold text-white mb-2">{type.title}</h3>
                <p className="text-gray-300 mb-4 text-sm sm:text-base">{type.description}</p>
                
                <div className="flex items-center justify-center space-x-3 sm:space-x-4 mb-4">
                  <div className="flex items-center text-purple-300">
                    <Clock className="w-4 h-4 mr-1" />
                    <span className="text-sm">{type.duration}</span>
                  </div>
                  <div className="text-xl sm:text-2xl font-bold text-white">{type.price}</div>
                </div>
              </div>

              {/* Features */}
              <div className="space-y-2 sm:space-y-3 mb-6 sm:mb-8">
                {type.features.map((feature, featureIndex) => (
                  <div key={featureIndex} className="flex items-center text-gray-300">
                    <div className="w-2 h-2 bg-purple-400 rounded-full mr-3 flex-shrink-0" />
                    <span className="text-xs sm:text-sm">{feature}</span>
                  </div>
                ))}
              </div>

              {/* Button */}
              <button className={`w-full py-2 sm:py-3 px-4 sm:px-6 rounded-lg font-semibold text-sm sm:text-base transition-all duration-300 ${
                type.popular
                  ? 'bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white'
                  : 'border border-purple-400/50 text-purple-300 hover:bg-purple-500/10'
              }`}>
                Book Now
              </button>
            </motion.div>
          ))}
        </div>

        {/* Booking Process */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 sm:p-8"
        >
          <h3 className="text-xl sm:text-2xl font-bold text-white text-center mb-6 sm:mb-8">How It Works</h3>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            <div className="text-center">
              <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full flex items-center justify-center mx-auto mb-3 sm:mb-4">
                <span className="text-white font-bold text-sm sm:text-base">1</span>
              </div>
              <h4 className="text-white font-semibold mb-2 text-sm sm:text-base">Choose Service</h4>
              <p className="text-gray-400 text-xs sm:text-sm">Select your preferred consultation type and astrologer</p>
            </div>
            
            <div className="text-center">
              <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full flex items-center justify-center mx-auto mb-3 sm:mb-4">
                <Calendar className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
              </div>
              <h4 className="text-white font-semibold mb-2 text-sm sm:text-base">Pick Date & Time</h4>
              <p className="text-gray-400 text-xs sm:text-sm">Choose a convenient slot from available schedules</p>
            </div>
            
            <div className="text-center">
              <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full flex items-center justify-center mx-auto mb-3 sm:mb-4">
                <span className="text-white font-bold text-sm sm:text-base">₹</span>
              </div>
              <h4 className="text-white font-semibold mb-2 text-sm sm:text-base">Secure Payment</h4>
              <p className="text-gray-400 text-xs sm:text-sm">Make secure payment through multiple payment options</p>
            </div>
            
            <div className="text-center">
              <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full flex items-center justify-center mx-auto mb-3 sm:mb-4">
                <Globe className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
              </div>
              <h4 className="text-white font-semibold mb-2 text-sm sm:text-base">Get Guidance</h4>
              <p className="text-gray-400 text-xs sm:text-sm">Connect with your astrologer and receive cosmic insights</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
