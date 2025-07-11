'use client'

import { motion } from "framer-motion"
import { useState, useEffect } from "react"
import { Star, Moon, Sun, Sparkles } from "lucide-react"

export function AnimatedBackground() {
  const [stars, setStars] = useState<Array<{ id: number; x: number; y: number; size: number }>>([])

  useEffect(() => {
    const generateStars = () => {
      const newStars = Array.from({ length: 50 }, (_, i) => ({
        id: i,
        x: Math.random() * 100,
        y: Math.random() * 100,
        size: Math.random() * 3 + 1,
      }))
      setStars(newStars)
    }

    generateStars()
  }, [])

  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none">
      {/* Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-indigo-950 via-purple-900 to-slate-900" />
      
      {/* Animated Stars */}
      {stars.map((star) => (
        <motion.div
          key={star.id}
          className="absolute bg-white rounded-full opacity-60"
          style={{
            left: `${star.x}%`,
            top: `${star.y}%`,
            width: `${star.size}px`,
            height: `${star.size}px`,
          }}
          animate={{
            opacity: [0.3, 1, 0.3],
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: Math.random() * 3 + 2,
            repeat: Infinity,
            delay: Math.random() * 2,
          }}
        />
      ))}

      {/* Floating Elements */}
      <motion.div
        className="absolute top-20 left-10 text-yellow-300"
        animate={{
          y: [-10, 10, -10],
          rotate: [0, 10, -10, 0],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
        }}
      >
        <Sun size={32} />
      </motion.div>

      <motion.div
        className="absolute top-40 right-20 text-blue-300"
        animate={{
          y: [10, -10, 10],
          rotate: [0, -10, 10, 0],
        }}
        transition={{
          duration: 5,
          repeat: Infinity,
          delay: 1,
        }}
      >
        <Moon size={28} />
      </motion.div>

      <motion.div
        className="absolute bottom-32 left-20 text-purple-300"
        animate={{
          x: [-5, 5, -5],
          y: [-5, 5, -5],
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
          delay: 2,
        }}
      >
        <Sparkles size={24} />
      </motion.div>
    </div>
  )
}
