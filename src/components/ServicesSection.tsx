'use client'

import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"
import { Star, Moon, Sun, Heart, Briefcase, Users, Zap, Shield } from "lucide-react"
import Image from "next/image"

const services = [
  {
    icon: Star,
    title: "Birth Chart Analysis",
    description: "Get detailed insights into your personality, strengths, and life path through comprehensive natal chart readings.",
    image: "https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=400&q=80",
    color: "from-purple-500 to-pink-500"
  },
  {
    icon: Heart,
    title: "Love & Relationships",
    description: "Discover compatibility, understand relationship dynamics, and find guidance for your romantic journey.",
    image: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=400&q=80",
    color: "from-pink-500 to-rose-500"
  },
  {
    icon: Briefcase,
    title: "Career Guidance",
    description: "Navigate your professional path with astrological insights tailored to your unique cosmic blueprint.",
    image: "https://images.unsplash.com/photo-1464983953574-0892a716854b?auto=format&fit=crop&w=400&q=80",
    color: "from-blue-500 to-purple-500"
  },
  {
    icon: Zap,
    title: "Daily Predictions",
    description: "Stay aligned with cosmic energies through personalized daily horoscopes and planetary guidance.",
    image: "https://images.unsplash.com/photo-1462331940025-496dfbfc7564?auto=format&fit=crop&w=400&q=80",
    color: "from-yellow-500 to-orange-500"
  },
  {
    icon: Shield,
    title: "Spiritual Healing",
    description: "Find balance and protection through ancient astrological remedies and spiritual practices.",
    image: "https://images.unsplash.com/photo-1469122312224-c5846569feb1?auto=format&fit=crop&w=400&q=80",
    color: "from-green-500 to-teal-500"
  },
  {
    icon: Users,
    title: "Group Consultations",
    description: "Join cosmic discussions and learn from shared astrological experiences in our community sessions.",
    image: "https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=400&q=80",
    color: "from-indigo-500 to-purple-500"
  }
]

export function ServicesSection() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  return (
    <section id="services" ref={ref} className="py-20 px-4 sm:px-6 lg:px-8 relative">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-6">
            Our <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">Cosmic Services</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Explore the universe within and around you with our comprehensive astrological services
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 50 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group relative overflow-hidden rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 hover:border-white/20 transition-all duration-300 hover:transform hover:scale-105"
            >
              {/* Service Image */}
              <div className="relative h-40 sm:h-48 overflow-hidden">
                <Image
                  src={service.image}
                  alt={service.title}
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div className={`absolute inset-0 bg-gradient-to-t ${service.color} opacity-60`} />
                <div className="absolute top-4 left-4">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center">
                    <service.icon className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
                  </div>
                </div>
              </div>

              {/* Service Content */}
              <div className="p-4 sm:p-6">
                <h3 className="text-lg sm:text-xl font-semibold text-white mb-2 sm:mb-3 group-hover:text-purple-300 transition-colors">
                  {service.title}
                </h3>
                <p className="text-gray-300 text-sm leading-relaxed mb-3 sm:mb-4">
                  {service.description}
                </p>
                
                <motion.div
                  className="flex items-center text-purple-400 text-sm font-medium"
                  whileHover={{ x: 5 }}
                >
                  Learn More →
                </motion.div>
              </div>

              {/* Hover Glow Effect */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className={`absolute inset-0 bg-gradient-to-r ${service.color} opacity-10 blur-xl`} />
              </div>
            </motion.div>
          ))}
        </div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-center mt-16"
        >
          <button className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white px-8 py-4 rounded-full text-lg font-semibold shadow-lg shadow-purple-500/25 transition-all duration-300 hover:shadow-xl hover:shadow-purple-500/40">
            Book Your Consultation
          </button>
        </motion.div>
      </div>
    </section>
  )
}
