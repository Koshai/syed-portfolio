
import React, { useRef, useState } from 'react'
import { motion, useInView } from 'framer-motion'
import { Mail, MessageSquare, Send, Github, Linkedin, Twitter, ExternalLink, CheckCircle, AlertCircle } from 'lucide-react'
import emailjs from 'emailjs-com'

// Dummy EmailJS keys included as placeholders (replace with your real keys in README)
const SERVICE_ID = process.env.VITE_EMAILJS_SERVICE_ID || 'service_dummy123'
const TEMPLATE_ID = process.env.VITE_EMAILJS_TEMPLATE_ID || 'template_dummy123'
const USER_ID = process.env.VITE_EMAILJS_USER_ID || 'user_dummy123'

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
    href: 'https://linkedin.com/in/syed-akbar',
    color: 'from-blue-600 to-blue-800',
    description: 'Connect professionally'
  },
  {
    name: 'Twitter',
    icon: <Twitter className="w-5 h-5" />,
    href: 'https://twitter.com/syedakbar',
    color: 'from-sky-400 to-blue-500',
    description: 'Follow for updates'
  }
]

export default function Contact(){
  const formRef = useRef(null)
  const [status, setStatus] = useState('')
  const [isLoading, setIsLoading] = useState(false)
  const [formData, setFormData] = useState({
    from_name: '',
    reply_to: '',
    message: ''
  })
  
  const ref = React.useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const sendEmail = async (e) => {
    e.preventDefault()
    if(!formRef.current) return
    
    setIsLoading(true)
    setStatus('')
    
    try {
      await emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, formRef.current, USER_ID)
      setStatus('success')
      setFormData({ from_name: '', reply_to: '', message: '' })
      formRef.current.reset()
    } catch (error) {
      setStatus('error')
    } finally {
      setIsLoading(false)
    }
  }

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

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-purple-500/20 to-blue-500/20 rounded-2xl blur-xl" />
            <div className="relative bg-gray-900/50 backdrop-blur-xl border border-gray-800/50 rounded-2xl p-8">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-r from-purple-500 to-blue-500 flex items-center justify-center">
                  <MessageSquare className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-white">Send Message</h3>
                  <p className="text-gray-400">I'll get back to you within 24 hours</p>
                </div>
              </div>

              <form ref={formRef} onSubmit={sendEmail} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                    transition={{ duration: 0.5, delay: 0.3 }}
                  >
                    <label className="block text-sm font-medium text-gray-300 mb-2">
                      Name *
                    </label>
                    <input
                      name="from_name"
                      type="text"
                      required
                      value={formData.from_name}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 bg-gray-800/50 border border-gray-700 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all"
                      placeholder="Your full name"
                    />
                  </motion.div>
                  
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                    transition={{ duration: 0.5, delay: 0.4 }}
                  >
                    <label className="block text-sm font-medium text-gray-300 mb-2">
                      Email *
                    </label>
                    <input
                      name="reply_to"
                      type="email"
                      required
                      value={formData.reply_to}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 bg-gray-800/50 border border-gray-700 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all"
                      placeholder="your@email.com"
                    />
                  </motion.div>
                </div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                  transition={{ duration: 0.5, delay: 0.5 }}
                >
                  <label className="block text-sm font-medium text-gray-300 mb-2">
                    Message *
                  </label>
                  <textarea
                    name="message"
                    rows={6}
                    required
                    value={formData.message}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 bg-gray-800/50 border border-gray-700 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all resize-none"
                    placeholder="Tell me about your project..."
                  />
                </motion.div>

                <motion.button
                  type="submit"
                  disabled={isLoading}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                  transition={{ duration: 0.5, delay: 0.6 }}
                  className="group relative w-full px-8 py-4 bg-gradient-to-r from-purple-600 to-blue-600 rounded-xl font-semibold text-white transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-purple-500/25 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100"
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-blue-600 rounded-xl blur opacity-0 group-hover:opacity-75 transition-opacity" />
                  <span className="relative flex items-center justify-center gap-2">
                    {isLoading ? (
                      <>
                        <div className="animate-spin w-5 h-5 border-2 border-white border-t-transparent rounded-full" />
                        Sending...
                      </>
                    ) : (
                      <>
                        <Send className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                        Send Message
                      </>
                    )}
                  </span>
                </motion.button>

                {/* Status Messages */}
                {status && (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className={`flex items-center gap-3 p-4 rounded-xl ${
                      status === 'success' 
                        ? 'bg-green-500/20 border border-green-500/30 text-green-400' 
                        : 'bg-red-500/20 border border-red-500/30 text-red-400'
                    }`}
                  >
                    {status === 'success' ? (
                      <><CheckCircle className="w-5 h-5" /> Message sent successfully! I'll get back to you soon.</>
                    ) : (
                      <><AlertCircle className="w-5 h-5" /> Failed to send message. Please try again or email me directly.</>
                    )}
                  </motion.div>
                )}
              </form>
            </div>
          </motion.div>

          {/* Contact Info & Social Links */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
            transition={{ duration: 0.6, delay: 0.3 }}
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
            <div className="grid sm:grid-cols-2 gap-4">
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
