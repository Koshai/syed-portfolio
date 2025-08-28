import React from 'react'
import { motion } from 'framer-motion'
import { Heart, Code, Coffee } from 'lucide-react'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="relative py-12 px-6 lg:px-8 border-t border-gray-800/50">
      {/* Background Effect */}
      <div className="absolute inset-0 bg-gradient-to-t from-gray-900/50 to-transparent pointer-events-none" />
      
      <div className="relative max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center"
        >
          {/* Logo */}
          <div className="mb-8">
            <motion.div 
              className="inline-flex items-center gap-3 group cursor-pointer"
              whileHover={{ scale: 1.05 }}
            >
              <div className="relative">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-purple-500 to-blue-500 flex items-center justify-center group-hover:scale-110 transition-transform">
                  <span className="text-white font-bold text-xl">SA</span>
                </div>
                <div className="absolute inset-0 w-12 h-12 rounded-xl bg-gradient-to-br from-purple-500 to-blue-500 blur opacity-0 group-hover:opacity-50 transition-opacity" />
              </div>
              <span className="text-2xl font-bold bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
                Syed Akbar
              </span>
            </motion.div>
          </div>

          {/* Made with love */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex items-center justify-center gap-2 text-gray-400 mb-6"
          >
            <span>Crafted with</span>
            <motion.div
              animate={{ 
                scale: [1, 1.2, 1],
              }}
              transition={{ 
                duration: 1,
                repeat: Infinity,
                repeatType: "reverse"
              }}
            >
              <Heart className="w-4 h-4 text-red-400 fill-current" />
            </motion.div>
            <span>using</span>
            <Code className="w-4 h-4 text-purple-400" />
            <span>&</span>
            <Coffee className="w-4 h-4 text-orange-400" />
          </motion.div>

          {/* Tech Stack */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-wrap justify-center gap-4 mb-8"
          >
            {['React', 'Framer Motion', 'Tailwind CSS', 'Vite'].map((tech, index) => (
              <motion.span
                key={tech}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4, delay: 0.4 + index * 0.1 }}
                className="px-3 py-1 bg-gray-800/50 border border-gray-700 rounded-lg text-sm text-gray-400 hover:text-white hover:border-gray-600 transition-all cursor-default"
              >
                {tech}
              </motion.span>
            ))}
          </motion.div>

          {/* Copyright */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="space-y-2"
          >
            <p className="text-gray-400 text-sm">
              © {currentYear} Syed Akbar. All rights reserved.
            </p>
            <p className="text-gray-500 text-xs">
              Designed & developed with passion for creating amazing digital experiences.
            </p>
          </motion.div>

          {/* Scroll to top hint */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="mt-8"
          >
            <motion.button
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              className="group flex items-center justify-center gap-2 mx-auto px-4 py-2 text-gray-500 hover:text-white transition-colors"
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              <div className="w-0.5 h-6 bg-gradient-to-t from-gray-500 to-transparent group-hover:from-white group-hover:to-transparent transition-colors" />
              <span className="text-xs">Back to top</span>
            </motion.button>
          </motion.div>
        </motion.div>
      </div>
    </footer>
  )
}