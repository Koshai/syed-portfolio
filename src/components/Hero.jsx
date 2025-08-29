
import React, { useEffect, useState } from 'react'
import { motion } from 'framer-motion'

export default function Hero(){
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  
  useEffect(() => {
    const updateMousePosition = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY })
    }
    window.addEventListener('mousemove', updateMousePosition)
    return () => window.removeEventListener('mousemove', updateMousePosition)
  }, [])

  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Interactive cursor effect */}
      <div 
        className="fixed w-6 h-6 bg-purple-500/20 rounded-full blur-xl pointer-events-none z-50 mix-blend-screen"
        style={{
          left: mousePosition.x - 12,
          top: mousePosition.y - 12,
          transition: 'all 0.1s ease-out'
        }}
      />
      
      <div className="max-w-7xl mx-auto px-6 lg:px-8 text-center">
        {/* Status Badge */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-green-500/10 border border-green-500/20 text-green-400 text-sm font-medium mb-8"
        >
          <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
          Available for new opportunities
        </motion.div>

        {/* Main Heading */}
        <motion.h1 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-5xl lg:text-7xl font-bold mb-6 leading-tight"
        >
          <span className="block text-gray-400 text-2xl lg:text-3xl font-normal mb-2">Hi, I'm</span>
          <span className="bg-gradient-to-r from-white via-gray-100 to-gray-400 bg-clip-text text-transparent">
            Syed Akbar
          </span>
        </motion.h1>

        {/* Subtitle with Typewriter Effect */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-2xl lg:text-4xl font-medium mb-6"
        >
          <span className="text-gray-300">I build </span>
          <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 bg-clip-text text-transparent animate-pulse">
            digital experiences
          </span>
        </motion.div>

        {/* Description */}
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-lg lg:text-xl text-gray-400 max-w-3xl mx-auto mb-12 leading-relaxed"
        >
          Expert in{' '}
          <span className="text-purple-400 font-medium">React</span> and{' '}
          <span className="text-blue-400 font-medium">Blazor .NET ecosystem</span> on the web,{' '}
          <span className="text-green-400 font-medium">Unity developer</span> specializing in{' '}
          <span className="text-orange-400 font-medium">VR and AR experiences</span>.
          I create immersive applications that push the boundaries of digital interaction.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center"
        >
          <a 
            href="#projects" 
            className="group relative px-8 py-4 bg-gradient-to-r from-purple-600 to-blue-600 rounded-xl font-semibold transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-purple-500/25 active:scale-95"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-blue-600 rounded-xl blur opacity-75 group-hover:opacity-100 transition-opacity" />
            <span className="relative">View My Work</span>
          </a>
          
          <a 
            href="#contact" 
            className="px-8 py-4 border border-gray-700 hover:border-gray-600 rounded-xl font-semibold transition-all duration-300 hover:bg-gray-800/50 hover:scale-105 active:scale-95"
          >
            Get In Touch
          </a>
        </motion.div>

        {/* Tech Stack Icons */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1 }}
          className="mt-16"
        >
          <p className="text-gray-500 text-sm mb-6">Technologies I work with</p>
          <div className="flex flex-wrap justify-center gap-6">
            {[
              { name: 'React', color: 'text-blue-400' },
              { name: 'Blazor', color: 'text-purple-500' },
              { name: 'Unity', color: 'text-gray-300' },
              { name: 'C#/.NET', color: 'text-green-500' },
              { name: 'VR/AR', color: 'text-orange-400' },
              { name: 'TypeScript', color: 'text-blue-500' }
            ].map((tech, index) => (
              <motion.span
                key={tech.name}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 1.2 + index * 0.1 }}
                className={`px-4 py-2 rounded-lg bg-gray-800/50 border border-gray-700 ${tech.color} font-medium text-sm hover:scale-110 transition-transform cursor-default`}
              >
                {tech.name}
              </motion.span>
            ))}
          </div>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.5 }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        >
          <div className="flex flex-col items-center gap-2 text-gray-500">
            <span className="text-sm">Scroll to explore</span>
            <div className="w-0.5 h-8 bg-gradient-to-b from-gray-500 to-transparent animate-pulse" />
          </div>
        </motion.div>
      </div>
    </section>
  )
}
