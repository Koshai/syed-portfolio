import React from 'react'
import { motion } from 'framer-motion'
import { Heart, ArrowUp, Github } from 'lucide-react'

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="relative py-16 px-6 lg:px-8 border-t border-white/5">
      <div className="absolute inset-0 bg-gradient-to-t from-violet-950/20 to-transparent pointer-events-none" />

      <div className="relative max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="flex flex-col items-center text-center"
        >
          <a href="#home" className="inline-flex items-center gap-3 mb-8 group">
            <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-violet-500 via-fuchsia-500 to-cyan-400 flex items-center justify-center font-display font-bold shadow-lg shadow-violet-500/25 group-hover:shadow-violet-500/40 transition-shadow">
              SA
            </div>
            <span className="font-display text-2xl font-bold text-shimmer">Syed Akbar</span>
          </a>

          <p className="flex items-center gap-2 text-slate-500 text-sm mb-8">
            Crafted with
            <Heart className="w-4 h-4 text-rose-400 fill-rose-400 animate-pulse" />
            using React, Tailwind & Framer Motion
          </p>

          <div className="flex flex-wrap justify-center gap-3 mb-10">
            {['BuzzBlazor', 'React', 'Blazor', 'Tailwind', 'Vite'].map((tech) => (
              <span
                key={tech}
                className="px-3 py-1.5 rounded-lg glass-card text-xs text-slate-400 font-medium"
              >
                {tech}
              </span>
            ))}
          </div>

          <div className="flex items-center gap-6 mb-8">
            <a
              href="https://github.com/Koshai"
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-500 hover:text-violet-400 transition-colors"
              aria-label="GitHub"
            >
              <Github className="w-5 h-5" />
            </a>
            <a
              href="https://www.buzzblazor.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-slate-500 hover:text-violet-400 transition-colors font-medium"
            >
              buzzblazor.com
            </a>
          </div>

          <p className="text-slate-500 text-sm">© {year} Syed Akbar. All rights reserved.</p>

          <motion.button
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="mt-10 flex items-center gap-2 px-4 py-2 rounded-xl glass-card text-slate-500 hover:text-white text-xs font-semibold uppercase tracking-widest transition-colors"
            whileHover={{ y: -3 }}
            whileTap={{ scale: 0.95 }}
            aria-label="Back to top"
          >
            <ArrowUp className="w-4 h-4" />
            Top
          </motion.button>
        </motion.div>
      </div>
    </footer>
  )
}
