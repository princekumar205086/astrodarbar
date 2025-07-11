'use client'

import { motion } from "framer-motion"
import { Star } from "lucide-react"

export function LoadingSpinner() {
  return (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50">
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        className="bg-white/10 backdrop-blur-md rounded-2xl p-8 flex flex-col items-center space-y-4"
      >
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
          className="w-12 h-12 border-4 border-purple-400/30 border-t-purple-400 rounded-full"
        />
        <div className="flex items-center space-x-2">
          <Star className="w-5 h-5 text-purple-400" />
          <span className="text-white font-medium">Loading cosmic insights...</span>
        </div>
      </motion.div>
    </div>
  )
}
