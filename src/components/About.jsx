
import React from 'react'
import { motion, useInView } from 'framer-motion'
import { Code, Lightbulb, Users, Trophy, Coffee, Zap } from 'lucide-react'

const skills = {
  Frontend: {
    icon: '🎨',
    color: 'from-blue-400 to-violet-500',
    items: ['React', 'Blazor', 'TypeScript', 'Tailwind CSS', 'Framer Motion', 'Next.js'],
  },
  Backend: {
    icon: '⚡',
    color: 'from-emerald-400 to-cyan-500',
    items: ['Node.js', 'Python', 'C#/.NET', 'Express', 'Flask', 'ASP.NET'],
  },
  'AI/ML': {
    icon: '🧠',
    color: 'from-violet-400 to-fuchsia-500',
    items: ['TensorFlow', 'OpenAI API', 'Audio Processing', 'Computer Vision', 'NLP'],
  },
  Database: {
    icon: '📊',
    color: 'from-orange-400 to-rose-500',
    items: ['MongoDB', 'SQL Server', 'PostgreSQL', 'Redis', 'Azure Cosmos'],
  },
  Tools: {
    icon: '🛠️',
    color: 'from-cyan-400 to-blue-500',
    items: ['Git', 'Docker', 'Azure', 'Unity', 'Vite', 'PowerBI'],
  },
  Other: {
    icon: '🚀',
    color: 'from-indigo-400 to-violet-500',
    items: ['Unity VR/AR', 'Meta XR SDK', 'Hardware Integration', 'Real-time Systems'],
  },
}

const highlights = [
  {
    icon: <Trophy className="w-5 h-5" />,
    title: 'Open Source',
    desc: 'Creator of BuzzBlazor — AI-ready Blazor components for modern apps',
    color: 'from-amber-400 to-orange-500',
  },
  {
    icon: <Users className="w-5 h-5" />,
    title: 'Enterprise Solutions',
    desc: 'Scalable systems for government and business clients',
    color: 'from-blue-400 to-violet-500',
  },
  {
    icon: <Zap className="w-5 h-5" />,
    title: 'Full-Stack Expertise',
    desc: 'End-to-end development from concept to deployment',
    color: 'from-emerald-400 to-cyan-500',
  },
  {
    icon: <Lightbulb className="w-5 h-5" />,
    title: 'Innovation Focus',
    desc: 'AI, VR, and cutting-edge web technologies',
    color: 'from-violet-400 to-fuchsia-500',
  },
]

export default function About() {
  const ref = React.useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section id="about" className="py-24 lg:py-32 px-6 lg:px-8" ref={ref}>
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="section-label mb-6">About</span>
          <h2 className="font-display text-4xl lg:text-6xl font-extrabold mt-6 mb-5">
            <span className="text-shimmer">About Me</span>
          </h2>
          <p className="text-lg text-slate-400 max-w-2xl mx-auto">
            Building impactful software — from frameworks to enterprise platforms.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8 items-start">
          {/* Story */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="space-y-6"
          >
            <div className="glass-card rounded-2xl p-8">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-violet-500 to-cyan-400 flex items-center justify-center shadow-lg shadow-violet-500/20">
                  <Code className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="font-display text-2xl font-bold">My Journey</h3>
                  <p className="text-slate-500 text-sm">From curiosity to shipping products</p>
                </div>
              </div>

              <div className="space-y-4 text-slate-300 leading-relaxed">
                <p>
                  I'm a full-stack developer who loves solving complex problems through elegant code — from{' '}
                  <span className="text-violet-400 font-medium">AI-powered safety systems</span> to{' '}
                  <span className="text-cyan-400 font-medium">immersive VR experiences</span>.
                </p>
                <p>
                  I recently released{' '}
                  <a
                    href="https://www.buzzblazor.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-violet-400 hover:text-violet-300 font-semibold underline decoration-violet-500/30 underline-offset-2"
                  >
                    BuzzBlazor
                  </a>
                  , an open-source Blazor framework with accessible components, theming, and AI-ready patterns.
                </p>
                <p>
                  Enterprise apps, ML models, open-source libraries — I write code that's maintainable, accessible, and fast.
                </p>
              </div>

              <div className="flex flex-wrap items-center gap-4 mt-8 pt-6 border-t border-white/5 text-sm text-slate-500">
                <span className="flex items-center gap-2">
                  <Coffee className="w-4 h-4" /> Powered by coffee
                </span>
                <span>📍 Remote worldwide</span>
              </div>
            </div>

            <div className="grid sm:grid-cols-2 gap-4">
              {highlights.map((h, i) => (
                <motion.div
                  key={h.title}
                  initial={{ opacity: 0, y: 16 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.3 + i * 0.08 }}
                  className="glass-card rounded-xl p-5 hover:-translate-y-0.5 transition-transform"
                >
                  <div className={`inline-flex w-10 h-10 rounded-lg bg-gradient-to-r ${h.color} items-center justify-center text-white mb-3`}>
                    {h.icon}
                  </div>
                  <h4 className="font-display font-bold text-white mb-1">{h.title}</h4>
                  <p className="text-sm text-slate-400">{h.desc}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Skills */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="glass-card rounded-2xl p-8">
              <h3 className="font-display text-2xl font-bold mb-8 flex items-center gap-3">
                <span>🛠️</span> Technical Skills
              </h3>
              <div className="space-y-6">
                {Object.entries(skills).map(([category, data], index) => (
                  <motion.div
                    key={category}
                    initial={{ opacity: 0, y: 12 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.4, delay: 0.35 + index * 0.06 }}
                  >
                    <div className="flex items-center gap-2 mb-3">
                      <span>{data.icon}</span>
                      <h4 className={`font-semibold bg-gradient-to-r ${data.color} bg-clip-text text-transparent`}>
                        {category}
                      </h4>
                    </div>
                    <div className="flex flex-wrap gap-2 ml-1">
                      {data.items.map((skill) => (
                        <span
                          key={skill}
                          className="px-3 py-1.5 rounded-lg bg-white/5 border border-white/10 text-sm text-slate-400 hover:text-white hover:border-violet-500/30 transition-colors cursor-default"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-4"
        >
          {[
            { number: '5+', label: 'Years Experience' },
            { number: '20+', label: 'Projects Shipped' },
            { number: '50+', label: 'BuzzBlazor Components' },
            { number: '∞', label: 'Problems Solved' },
          ].map((stat) => (
            <div key={stat.label} className="glass-card rounded-2xl p-6 text-center hover:-translate-y-0.5 transition-transform">
              <div className="font-display text-3xl lg:text-4xl font-extrabold text-shimmer mb-1">
                {stat.number}
              </div>
              <div className="text-slate-500 text-sm font-medium">{stat.label}</div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
