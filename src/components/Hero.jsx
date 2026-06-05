
import React, { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { ArrowDown, Sparkles } from 'lucide-react'

const ROLES = [
  'digital experiences',
  'open-source frameworks',
  'AI-powered products',
  'immersive VR worlds',
]

const TECH_STACK = [
  { name: 'React', color: 'text-blue-400' },
  { name: 'Blazor', color: 'text-violet-400' },
  { name: 'Unity', color: 'text-slate-300' },
  { name: 'C#/.NET', color: 'text-emerald-400' },
  { name: 'VR/AR', color: 'text-orange-400' },
  { name: 'TypeScript', color: 'text-cyan-400' },
]

function Typewriter({ words }) {
  const [index, setIndex] = useState(0)
  const [text, setText] = useState('')
  const [deleting, setDeleting] = useState(false)

  useEffect(() => {
    const word = words[index]
    const timeout = setTimeout(() => {
      if (!deleting) {
        setText(word.slice(0, text.length + 1))
        if (text.length + 1 === word.length) {
          setTimeout(() => setDeleting(true), 2000)
        }
      } else {
        setText(word.slice(0, text.length - 1))
        if (text.length === 0) {
          setDeleting(false)
          setIndex((i) => (i + 1) % words.length)
        }
      }
    }, deleting ? 40 : 80)

    return () => clearTimeout(timeout)
  }, [text, deleting, index, words])

  return (
    <span className="text-shimmer font-display font-bold">
      {text}
      <span className="animate-pulse text-violet-400">|</span>
    </span>
  )
}

export default function Hero() {
  const [mouse, setMouse] = useState({ x: 0, y: 0 })

  useEffect(() => {
    const onMove = (e) => setMouse({ x: e.clientX, y: e.clientY })
    window.addEventListener('mousemove', onMove)
    return () => window.removeEventListener('mousemove', onMove)
  }, [])

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20">
      <div
        className="fixed w-80 h-80 rounded-full pointer-events-none z-0 mix-blend-screen"
        style={{
          left: mouse.x - 160,
          top: mouse.y - 160,
          background: 'radial-gradient(circle, rgba(167,139,250,0.12) 0%, transparent 70%)',
          transition: 'left 0.15s ease-out, top 0.15s ease-out',
        }}
      />

      <div className="max-w-7xl mx-auto px-6 lg:px-8 text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-card text-emerald-400 text-sm font-medium mb-10"
        >
          <span className="relative flex h-2.5 w-2.5">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
            <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-400" />
          </span>
          <Sparkles className="w-4 h-4" />
          Available for new opportunities
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-violet-300/80 text-lg lg:text-xl font-medium mb-4 tracking-wide"
        >
          Hi, I'm
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="font-display text-6xl sm:text-7xl lg:text-8xl font-extrabold mb-8 leading-[1.05] tracking-tight"
        >
          <span className="text-shimmer">Syed Akbar</span>
        </motion.h1>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-2xl sm:text-3xl lg:text-4xl font-medium mb-8 min-h-[3rem]"
        >
          <span className="text-slate-400">I build </span>
          <Typewriter words={ROLES} />
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-lg lg:text-xl text-slate-400 max-w-3xl mx-auto mb-12 leading-relaxed"
        >
          Full-stack developer & creator of{' '}
          <a
            href="https://www.buzzblazor.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-violet-400 hover:text-violet-300 font-semibold underline decoration-violet-500/40 underline-offset-4 transition-colors"
          >
            BuzzBlazor
          </a>
          . Expert in{' '}
          <span className="text-violet-400 font-medium">React</span> and the{' '}
          <span className="text-cyan-400 font-medium">Blazor .NET ecosystem</span>, plus{' '}
          <span className="text-emerald-400 font-medium">Unity</span> for{' '}
          <span className="text-orange-400 font-medium">VR and AR experiences</span>.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center"
        >
          <a href="#projects" className="btn-glow relative px-8 py-4 rounded-2xl font-semibold text-white">
            <span className="relative z-10">View My Work</span>
          </a>
          <a
            href="#contact"
            className="px-8 py-4 rounded-2xl font-semibold glass-card text-slate-200 hover:text-white hover:border-violet-500/30 transition-all duration-300 hover:-translate-y-0.5"
          >
            Get In Touch
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1 }}
          className="mt-20"
        >
          <p className="text-slate-500 text-xs uppercase tracking-widest mb-6">Stack</p>
          <div className="flex flex-wrap justify-center gap-3">
            {TECH_STACK.map((tech, i) => (
              <motion.span
                key={tech.name}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4, delay: 1.1 + i * 0.06 }}
                className={`px-4 py-2 rounded-xl glass-card text-sm ${tech.color} hover:text-white hover:-translate-y-0.5 transition-all duration-200 cursor-default`}
              >
                {tech.name}
              </motion.span>
            ))}
          </div>
        </motion.div>

        <motion.a
          href="#projects"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.5 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-slate-500 hover:text-violet-400 transition-colors"
          aria-label="Scroll to projects"
        >
          <span className="text-xs tracking-widest uppercase">Explore</span>
          <ArrowDown className="w-5 h-5 animate-bounce" />
        </motion.a>
      </div>
    </section>
  )
}
