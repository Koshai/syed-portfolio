
import React from 'react'
import { motion, useInView } from 'framer-motion'
import { Code, Coffee } from 'lucide-react'

const skills = {
  'Frontend': {
    icon: '🎨',
    color: 'from-blue-500 to-purple-500',
    items: ['React', 'TypeScript', 'Tailwind CSS', 'Framer Motion', 'Next.js', 'Vue.js']
  },
  'Backend': {
    icon: '⚡',
    color: 'from-green-500 to-teal-500',
    items: ['Node.js', 'Python', 'C#/.NET', 'Express', 'Flask', 'Blazor']
  },
  'AI/ML': {
    icon: '🧠',
    color: 'from-purple-500 to-pink-500',
    items: ['TensorFlow', 'OpenAI API', 'Audio Processing', 'Computer Vision', 'NLP']
  },
  'Database': {
    icon: '📊',
    color: 'from-orange-500 to-red-500',
    items: ['MongoDB', 'SQL Server', 'PostgreSQL', 'Redis', 'Azure Cosmos']
  },
  'Tools': {
    icon: '🛠️',
    color: 'from-cyan-500 to-blue-500',
    items: ['Git', 'Docker', 'Azure', 'Unity', 'Vite', 'PowerBI']
  },
  'Other': {
    icon: '🚀',
    color: 'from-indigo-500 to-purple-500',
    items: ['Unity VR/AR', 'Meta XR SDK', 'Hardware Integration', 'Real-time Systems']
  }
}


export default function About(){
  const ref = React.useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section id="about" className="py-20 px-6 lg:px-8" ref={ref}>
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            <span className="bg-gradient-to-r from-white via-gray-100 to-gray-400 bg-clip-text text-transparent">
              About Me
            </span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Passionate developer with a love for creating impactful solutions
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Personal Story */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-6"
          >
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-purple-500/20 to-blue-500/20 rounded-2xl blur-xl" />
              <div className="relative bg-gray-900/50 backdrop-blur-xl border border-gray-800/50 rounded-2xl p-8">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-r from-purple-500 to-blue-500 flex items-center justify-center">
                    <Code className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-white">My Journey</h3>
                    <p className="text-gray-400">From curiosity to expertise</p>
                  </div>
                </div>
                
                <div className="space-y-4 text-gray-300 leading-relaxed">
                  <p>
                    I'm a full-stack developer who loves solving complex problems through elegant code. 
                    My journey spans from building <span className="text-purple-400 font-medium">AI-powered safety systems</span> to creating 
                    <span className="text-blue-400 font-medium"> immersive VR experiences</span>.
                  </p>
                  
                  <p>
                    With experience in everything from <span className="text-green-400 font-medium">enterprise applications</span> to 
                    <span className="text-orange-400 font-medium">machine learning models</span>, I bring a unique perspective to every project. 
                    I believe in writing code that's not just functional, but maintainable, accessible, and performant.
                  </p>
                  
                  <p>
                    When I'm not coding, you'll find me exploring the latest in AI/ML, contributing to open source, involving myself in hackathons,
                    or mentoring other developers. I'm always excited to take on new challenges and collaborate on innovative projects.
                  </p>
                </div>

                <div className="flex items-center gap-4 mt-6 pt-6 border-t border-gray-800">
                  <div className="flex items-center gap-2 text-sm text-gray-400">
                    <Coffee className="w-4 h-4" />
                    <span>Powered by coffee</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-gray-400">
                    <span>📍</span>
                    <span>Available worldwide</span>
                  </div>
                </div>
              </div>
            </div>

          </motion.div>

          {/* Skills */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="space-y-6"
          >
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-2xl blur-xl" />
              <div className="relative bg-gray-900/50 backdrop-blur-xl border border-gray-800/50 rounded-2xl p-8">
                <h3 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
                  <span className="text-2xl">🛠️</span>
                  Technical Skills
                </h3>
                
                <div className="space-y-6">
                  {Object.entries(skills).map(([category, data], index) => (
                    <motion.div
                      key={category}
                      initial={{ opacity: 0, y: 20 }}
                      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                      transition={{ duration: 0.5, delay: 0.5 + index * 0.1 }}
                      className="group"
                    >
                      <div className="flex items-center gap-3 mb-3">
                        <span className="text-lg">{data.icon}</span>
                        <h4 className={`font-semibold bg-gradient-to-r ${data.color} bg-clip-text text-transparent`}>
                          {category}
                        </h4>
                      </div>
                      
                      <div className="flex flex-wrap gap-2 ml-6">
                        {data.items.map((skill, skillIndex) => (
                          <motion.span
                            key={skill}
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
                            transition={{ duration: 0.3, delay: 0.6 + index * 0.1 + skillIndex * 0.05 }}
                            className="px-3 py-1 bg-gray-800/50 border border-gray-700 rounded-lg text-sm text-gray-300 hover:text-white hover:border-gray-600 hover:scale-105 transition-all cursor-default"
                          >
                            {skill}
                          </motion.span>
                        ))}
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Fun Stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6"
        >
          {[
            { number: '5+', label: 'Years Experience' },
            { number: '20+', label: 'Projects Completed' },
            { number: '10+', label: 'Technologies Mastered' },
            { number: '∞', label: 'Problems Solved' }
          ].map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
              transition={{ duration: 0.5, delay: 0.9 + index * 0.1 }}
              className="text-center p-6 bg-gray-900/30 border border-gray-800/50 rounded-xl hover:bg-gray-900/50 transition-all"
            >
              <div className="text-3xl lg:text-4xl font-bold bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent mb-2">
                {stat.number}
              </div>
              <div className="text-gray-400 text-sm font-medium">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
