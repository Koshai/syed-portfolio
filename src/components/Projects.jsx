
import React, { useState } from 'react'
import { motion, useInView } from 'framer-motion'
import { ExternalLink, Github, Star, Zap } from 'lucide-react'

const projects = [
  {
    id: 1,
    title: 'BuzzBlazor',
    category: 'Open Source • Blazor Framework',
    desc: 'AI-ready Blazor component framework — 50+ accessible components, 5 production themes, and practical AI-assisted UX patterns. My latest open-source release.',
    tech: ['Blazor', 'C#', '.NET', 'OpenAI', 'Accessibility'],
    url: 'https://www.buzzblazor.com/',
    github: 'https://github.com/Koshai/BuzzFramework',
    featured: true,
    color: 'from-violet-500/30 to-cyan-500/30',
    borderColor: 'border-violet-400/40',
    status: 'Open Source',
    filterTag: 'Open Source',
  },
  {
    id: 2,
    title: 'Jaquizy AI Platform',
    category: 'SaaS • Education',
    desc: 'Smart Q&A generator that transforms study materials into interactive practice sessions. Supports both text and image input.',
    tech: ['React', 'Node.js', 'OpenAI', 'MongoDB'],
    url: 'https://www.jaquizy.com',
    github: null,
    featured: true,
    color: 'from-blue-500/20 to-purple-500/20',
    borderColor: 'border-blue-500/30',
    status: 'Live Product',
    filterTag: 'SaaS',
  },
  {
    id: 3,
    title: 'Gunshot Detection Software',
    category: 'AI/ML • Security',
    desc: 'TensorFlow audio model with real-time processing for school safety. Achieved 95% accuracy in controlled environments.',
    tech: ['Python', 'TensorFlow', 'Audio Processing', 'Flask'],
    url: 'https://github.com/Koshai/GSD',
    github: 'https://github.com/Koshai/GSD',
    featured: false,
    color: 'from-red-500/20 to-orange-500/20',
    borderColor: 'border-red-500/30',
    status: 'Open Source',
    filterTag: 'AI/ML',
  },
  {
    id: 4,
    title: 'TACMAN VR Sculpting',
    category: 'VR/AR • Creative Tools',
    desc: 'VR sculpting experience with haptic feedback integration. Award-winning project combining Unity with custom hardware.',
    tech: ['Unity', 'C#', 'Meta XR SDK', 'Hardware Integration'],
    url: 'https://devpost.com/software/tac-man',
    github: null,
    featured: false,
    color: 'from-purple-500/20 to-pink-500/20',
    borderColor: 'border-purple-500/30',
    status: 'Award Winner',
    filterTag: 'VR/AR',
  },
  {
    id: 5,
    title: 'Property Manager Pro',
    category: 'Enterprise • Real Estate',
    desc: 'Comprehensive property management platform with tenant tracking, financial reporting, and automated workflows.',
    tech: ['Blazor', 'C#', '.NET', 'SQL Server'],
    url: null,
    github: null,
    featured: false,
    color: 'from-green-500/20 to-emerald-500/20',
    borderColor: 'border-green-500/30',
    status: 'Enterprise',
    filterTag: 'Enterprise',
  },
  {
    id: 6,
    title: 'Government Inventory System',
    category: 'Enterprise • Government',
    desc: 'Large-scale inventory and timekeeping solution serving multiple government departments with advanced reporting.',
    tech: ['Blazor', 'MSSQL', 'Azure', 'PowerBI'],
    url: null,
    github: null,
    featured: false,
    color: 'from-slate-500/20 to-zinc-500/20',
    borderColor: 'border-slate-500/30',
    status: 'Confidential',
    filterTag: 'Enterprise',
  },
]

function getPreviewUrl(url) {
  if (!url) return null
  return `https://api.microlink.io/?url=${encodeURIComponent(url)}&screenshot=true&meta=false&embed=screenshot.url`
}

function ProjectPreview({ url, title, featured }) {
  const [loaded, setLoaded] = useState(false)
  const [error, setError] = useState(false)
  const previewUrl = getPreviewUrl(url)

  if (!previewUrl || error) {
    return (
      <div className={`relative h-40 flex items-center justify-center overflow-hidden rounded-xl bg-gradient-to-br ${featured ? 'from-violet-900/40 to-cyan-900/30' : 'from-slate-800/60 to-slate-900/60'}`}>
        <div className="absolute inset-0 bg-grid-pattern bg-grid opacity-30" />
        <div className="relative flex flex-col items-center gap-2 text-slate-400">
          {featured ? <Zap className="w-8 h-8 text-violet-400" /> : null}
          <span className="text-sm font-medium">{title}</span>
        </div>
      </div>
    )
  }

  return (
    <div className="relative h-40 rounded-xl overflow-hidden bg-slate-900/50 group/preview">
      {!loaded && (
        <div className="absolute inset-0 animate-pulse bg-gradient-to-br from-slate-800 to-slate-900" />
      )}
      <img
        src={previewUrl}
        alt={`${title} preview`}
        className={`w-full h-full object-cover object-top transition-all duration-500 group-hover/preview:scale-105 ${loaded ? 'opacity-100' : 'opacity-0'}`}
        onLoad={() => setLoaded(true)}
        onError={() => setError(true)}
        loading="lazy"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent opacity-60" />
    </div>
  )
}

function ProjectCard({ project, index }) {
  const ref = React.useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <motion.article
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.55, delay: index * 0.08 }}
      className={`group relative ${project.featured ? 'md:col-span-2 lg:col-span-1' : ''}`}
    >
      <div className={`absolute -inset-px rounded-2xl bg-gradient-to-br ${project.color} opacity-0 group-hover:opacity-100 blur-sm transition-opacity duration-500`} />
      <div className="relative h-full glass-card rounded-2xl p-5 flex flex-col hover:-translate-y-1 transition-transform duration-300">
        {/* Header */}
        <div className="flex items-center justify-between mb-4">
          <span className={`px-3 py-1 rounded-full text-xs font-semibold bg-gradient-to-r ${project.color} border ${project.borderColor} text-slate-200`}>
            {project.status}
          </span>
          {project.featured && (
            <div className="flex items-center gap-1.5 text-amber-400">
              <Star className="w-4 h-4 fill-current" />
              <span className="text-xs font-bold uppercase tracking-wider">Featured</span>
            </div>
          )}
        </div>

        <ProjectPreview url={project.url} title={project.title} featured={project.featured} />

        <div className="flex-1 mt-5 space-y-3">
          <div>
            <h3 className="font-display text-xl font-bold text-white group-hover:text-shimmer transition-all">
              {project.title}
            </h3>
            <p className="text-sm text-violet-300/70 font-medium mt-0.5">{project.category}</p>
          </div>
          <p className="text-slate-400 text-sm leading-relaxed">{project.desc}</p>
          <div className="flex flex-wrap gap-2">
            {project.tech.map((t) => (
              <span key={t} className="px-2.5 py-1 text-xs rounded-lg bg-white/5 border border-white/10 text-slate-400">
                {t}
              </span>
            ))}
          </div>
        </div>

        <div className="flex items-center gap-3 mt-6 pt-4 border-t border-white/5">
          {project.url && (
            <a
              href={project.url}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-4 py-2 rounded-xl bg-violet-500/20 hover:bg-violet-500/30 border border-violet-500/30 text-sm font-semibold text-white transition-all"
            >
              <ExternalLink className="w-4 h-4" />
              View Live
            </a>
          )}
          {project.github && (
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-4 py-2 rounded-xl glass-card text-sm font-medium text-slate-300 hover:text-white transition-all"
            >
              <Github className="w-4 h-4" />
              Source
            </a>
          )}
        </div>
      </div>
    </motion.article>
  )
}

export default function Projects() {
  const [filter, setFilter] = useState('all')
  const categories = ['all', 'Open Source', 'SaaS', 'AI/ML', 'VR/AR', 'Enterprise']

  const filteredProjects =
    filter === 'all'
      ? projects
      : projects.filter((p) => p.filterTag === filter || p.category.includes(filter))

  return (
    <section id="projects" className="py-24 lg:py-32 px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="section-label mb-6">Portfolio</span>
          <h2 className="font-display text-4xl lg:text-6xl font-extrabold mt-6 mb-5">
            <span className="text-shimmer">Featured Projects</span>
          </h2>
          <p className="text-lg text-slate-400 max-w-2xl mx-auto">
            From open-source frameworks to enterprise systems — real work across AI, SaaS, VR, and the web.
          </p>
        </motion.div>

        <motion.div
          className="flex flex-wrap justify-center gap-2 mb-14"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          viewport={{ once: true }}
        >
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={`px-5 py-2 rounded-full text-sm font-semibold transition-all duration-300 ${
                filter === cat
                  ? 'btn-glow text-white shadow-lg shadow-violet-500/25'
                  : 'glass-card text-slate-400 hover:text-white'
              }`}
            >
              <span className={filter === cat ? 'relative z-10' : ''}>
                {cat === 'all' ? 'All' : cat}
              </span>
            </button>
          ))}
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>

        <motion.div
          className="text-center mt-16"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          <a
            href="https://github.com/Koshai"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-8 py-3.5 rounded-2xl glass-card text-slate-300 hover:text-white font-semibold transition-all hover:-translate-y-0.5"
          >
            <Github className="w-5 h-5" />
            More on GitHub
          </a>
        </motion.div>
      </div>
    </section>
  )
}
