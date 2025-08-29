
import React from 'react'
import { motion, useInView } from 'framer-motion'
import { Mail, Github, Linkedin, Twitter, ExternalLink } from 'lucide-react'

const socialLinks = [
  {
    name: 'Email',
    icon: <Mail className="w-5 h-5" />,
    href: 'mailto:syed.r.akbar@gmail.com',
    color: 'from-red-500 to-orange-500',
    description: 'syed.r.akbar@gmail.com'
  },
  {
    name: 'GitHub',
    icon: <Github className="w-5 h-5" />,
    href: 'https://github.com/Koshai',
    color: 'from-gray-700 to-gray-900',
    description: '@Koshai'
  },
  {
    name: 'LinkedIn',
    icon: <Linkedin className="w-5 h-5" />,
    href: 'https://www.linkedin.com/in/koshai/',
    color: 'from-blue-600 to-blue-800',
    description: 'Connect professionally'
  },
  {
    name: 'X',
    icon: <Twitter className="w-5 h-5" />,
    href: 'https://x.com/neloyakakoshai',
    color: 'from-sky-400 to-blue-500',
    description: 'Follow for updates'
  }
]

export default function Contact(){
  const ref = React.useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section id="contact" className="py-20 px-6 lg:px-8" ref={ref}>
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
              Let's Work Together
            </span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Have a project in mind? Let's discuss how we can bring your ideas to life.
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          {/* Contact Info & Social Links */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-8"
          >
            {/* Quick Contact */}
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-2xl blur-xl" />
              <div className="relative bg-gray-900/50 backdrop-blur-xl border border-gray-800/50 rounded-2xl p-8">
                <h3 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
                  <span className="text-2xl">🚀</span>
                  Let's Connect
                </h3>
                
                <div className="space-y-4">
                  <p className="text-gray-300 leading-relaxed">
                    I'm always interested in new opportunities, whether that's a freelance project, 
                    full-time position, or just a chat about technology.
                  </p>
                  
                  <div className="space-y-3">
                    <div className="flex items-center gap-3 text-gray-300">
                      <div className="w-8 h-8 bg-green-500/20 rounded-lg flex items-center justify-center">
                        <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
                      </div>
                      <span>Available for new projects</span>
                    </div>
                    
                    <div className="flex items-center gap-3 text-gray-300">
                      <div className="w-8 h-8 bg-blue-500/20 rounded-lg flex items-center justify-center">
                        <span className="text-sm">🌍</span>
                      </div>
                      <span>Remote-friendly worldwide</span>
                    </div>
                    
                    <div className="flex items-center gap-3 text-gray-300">
                      <div className="w-8 h-8 bg-purple-500/20 rounded-lg flex items-center justify-center">
                        <span className="text-sm">⚡</span>
                      </div>
                      <span>Quick turnaround times</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Social Links */}
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {socialLinks.map((social, index) => (
                <motion.a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                  transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
                  className="group relative"
                >
                  <div className={`absolute inset-0 bg-gradient-to-r ${social.color} opacity-0 group-hover:opacity-20 rounded-xl blur transition-opacity`} />
                  <div className="relative bg-gray-900/30 border border-gray-800/50 rounded-xl p-4 hover:bg-gray-900/50 transition-all group-hover:scale-105">
                    <div className="flex items-center gap-3">
                      <div className={`w-10 h-10 rounded-lg bg-gradient-to-r ${social.color} flex items-center justify-center text-white`}>
                        {social.icon}
                      </div>
                      <div className="flex-1">
                        <div className="font-semibold text-white group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-gray-300 group-hover:bg-clip-text transition-all">
                          {social.name}
                        </div>
                        <div className="text-sm text-gray-400">{social.description}</div>
                      </div>
                      <ExternalLink className="w-4 h-4 text-gray-500 group-hover:text-white transition-colors" />
                    </div>
                  </div>
                </motion.a>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
