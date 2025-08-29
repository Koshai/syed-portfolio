
import React, { useState } from 'react'
import { motion, useInView } from 'framer-motion'
import { ExternalLink, Github, Star } from 'lucide-react'

const projects = [
  {
    id: 1,
    title: "Gunshot Detection Software",
    category: "AI/ML • Security",
    desc: "Advanced TensorFlow audio model with real-time processing for school safety. Achieved 95% accuracy in controlled environments.",
    tech: ["Python", "TensorFlow", "Audio Processing", "Flask"],
    url: "https://github.com/Koshai/GSD",
    github: "https://github.com/Koshai/GSD",
    featured: true,
    color: "from-red-500/20 to-orange-500/20",
    borderColor: "border-red-500/30",
    status: "Open Source"
  },
  {
    id: 2,
    title: "Jaquizy AI Platform",
    category: "SaaS • Education",
    desc: "Smart Q&A generator that transforms study materials into interactive practice sessions. Supports both text and image input.",
    tech: ["React", "Node.js", "OpenAI", "MongoDB"],
    url: "https://www.jaquizy.com",
    github: null,
    featured: true,
    color: "from-blue-500/20 to-purple-500/20",
    borderColor: "border-blue-500/30",
    status: "Live Product"
  },
  {
    id: 3,
    title: "TACMAN VR Sculpting",
    category: "VR/AR • Creative Tools",
    desc: "Revolutionary VR sculpting experience with haptic feedback integration. Winner of Best Hardware Hack category.",
    tech: ["Unity", "C#", "Meta XR SDK", "Hardware Integration"],
    url: "https://devpost.com/software/tac-man",
    github: null,
    featured: false,
    color: "from-purple-500/20 to-pink-500/20",
    borderColor: "border-purple-500/30",
    status: "Award Winner"
  },
  {
    id: 4,
    title: "Property Manager Pro",
    category: "Enterprise • Real Estate",
    desc: "Comprehensive property management platform with tenant tracking, financial reporting, and automated workflows.",
    tech: ["Blazor", "C#", ".NET", "SQL Server"],
    url: "#",
    github: null,
    featured: false,
    color: "from-green-500/20 to-emerald-500/20",
    borderColor: "border-green-500/30",
    status: "Enterprise"
  },
  {
    id: 5,
    title: "Government Inventory System",
    category: "Enterprise • Government",
    desc: "Large-scale inventory and timekeeping solution serving multiple government departments with advanced reporting capabilities.",
    tech: ["Blazor", "MSSQL", "Azure", "PowerBI"],
    url: "#",
    github: null,
    featured: false,
    color: "from-gray-500/20 to-slate-500/20",
    borderColor: "border-gray-500/30",
    status: "Confidential"
  },
  {
    id: 6,
    title: "Smart Portfolio Site",
    category: "Web Development",
    desc: "This very portfolio site built with modern React, Framer Motion, and Tailwind CSS. Features smooth animations and responsive design.",
    tech: ["React", "Framer Motion", "Tailwind CSS", "Vite"],
    url: "#",
    github: "https://github.com/Koshai/syed-portfolio",
    featured: false,
    color: "from-indigo-500/20 to-cyan-500/20",
    borderColor: "border-indigo-500/30",
    status: "Open Source"
  }
]

export default function Projects(){
  const [filter, setFilter] = useState('all')
  const [hoveredProject, setHoveredProject] = useState(null)
  
  const categories = ['all', 'AI/ML', 'SaaS', 'VR/AR', 'Enterprise', 'Web Development']
  
  const filteredProjects = filter === 'all' 
    ? projects 
    : projects.filter(p => p.category.toLowerCase().includes(filter.toLowerCase()))

  const ProjectCard = ({ project, index }) => {
    const ref = React.useRef(null)
    const isInView = useInView(ref, { once: true, margin: "-100px" })

    return (
      <motion.article
        ref={ref}
        initial={{ opacity: 0, y: 50 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
        transition={{ duration: 0.6, delay: index * 0.1 }}
        className={`group relative overflow-hidden rounded-2xl bg-gradient-to-br ${project.color} p-1 hover:scale-[1.02] transition-all duration-500`}
        onMouseEnter={() => setHoveredProject(project.id)}
        onMouseLeave={() => setHoveredProject(null)}
      >
        <div className="relative h-full rounded-xl bg-gray-900/50 backdrop-blur-xl border border-gray-800/50 p-6 hover:bg-gray-900/70 transition-all duration-300">
          {/* Status Badge */}
          <div className="flex items-center justify-between mb-4">
            <span className={`px-3 py-1 rounded-full text-xs font-medium bg-gradient-to-r ${project.color} border ${project.borderColor}`}>
              {project.status}
            </span>
            {project.featured && (
              <div className="flex items-center gap-1 text-yellow-400">
                <Star className="w-4 h-4 fill-current" />
                <span className="text-xs font-medium">Featured</span>
              </div>
            )}
          </div>


          {/* Content */}
          <div className="space-y-3">
            <div>
              <h3 className="text-xl font-bold text-white mb-1 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-gray-300 group-hover:bg-clip-text transition-all">
                {project.title}
              </h3>
              <p className="text-sm text-gray-400 font-medium">{project.category}</p>
            </div>
            
            <p className="text-gray-300 text-sm leading-relaxed">
              {project.desc}
            </p>

            {/* Tech Stack */}
            <div className="flex flex-wrap gap-2">
              {project.tech.map((tech) => (
                <span
                  key={tech}
                  className="px-2 py-1 text-xs bg-gray-800/70 border border-gray-700 rounded-md text-gray-300 hover:text-white hover:border-gray-600 transition-colors"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex items-center gap-3 mt-6">
            {project.url !== '#' && (
              <motion.a
                href={project.url}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-4 py-2 bg-white/10 hover:bg-white/20 rounded-lg text-sm font-medium text-white transition-all group-hover:scale-105"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <ExternalLink className="w-4 h-4" />
                View Live
              </motion.a>
            )}
            {project.github && (
              <motion.a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-4 py-2 border border-gray-700 hover:border-gray-600 hover:bg-gray-800/50 rounded-lg text-sm font-medium text-gray-300 hover:text-white transition-all"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Github className="w-4 h-4" />
                Code
              </motion.a>
            )}
          </div>
        </div>
      </motion.article>
    )
  }

  return (
    <section id="projects" className="py-20 px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <motion.h2 
            className="text-4xl lg:text-5xl font-bold mb-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <span className="bg-gradient-to-r from-white via-gray-100 to-gray-400 bg-clip-text text-transparent">
              Featured Projects
            </span>
          </motion.h2>
          <motion.p 
            className="text-xl text-gray-400 max-w-3xl mx-auto mb-8"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            A showcase of my technical expertise and creative problem-solving across various domains
          </motion.p>
        </motion.div>

        {/* Filter Tabs */}
        <motion.div 
          className="flex flex-wrap justify-center gap-2 mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setFilter(category)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                filter === category
                  ? 'bg-gradient-to-r from-purple-600 to-blue-600 text-white shadow-lg shadow-purple-500/25'
                  : 'bg-gray-800/50 border border-gray-700 text-gray-400 hover:text-white hover:border-gray-600'
              }`}
            >
              {category === 'all' ? 'All Projects' : category}
            </button>
          ))}
        </motion.div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>

        {/* View More */}
        <motion.div
          className="text-center mt-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <motion.a
            href="https://github.com/Koshai"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-8 py-3 border border-gray-700 hover:border-gray-600 rounded-xl text-gray-300 hover:text-white hover:bg-gray-800/50 transition-all duration-300 font-medium group"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Github className="w-5 h-5 group-hover:rotate-12 transition-transform" />
            View More on GitHub
          </motion.a>
        </motion.div>
      </div>
    </section>
  )
}
