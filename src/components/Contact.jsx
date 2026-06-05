
import React, { useRef, useState } from 'react'
import { motion, useInView } from 'framer-motion'
import { Mail, MessageSquare, Send, Github, Linkedin, Twitter, ExternalLink, CheckCircle, AlertCircle } from 'lucide-react'
import emailjs from '@emailjs/browser'

const SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID || 'service_dummy123'
const TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID || 'template_dummy123'
const PUBLIC_KEY = import.meta.env.VITE_EMAILJS_USER_ID || 'user_dummy123'

const socialLinks = [
  {
    name: 'Email',
    icon: <Mail className="w-5 h-5" />,
    href: 'mailto:syed.r.akbar@gmail.com',
    color: 'from-rose-500 to-orange-500',
    description: 'syed.r.akbar@gmail.com',
  },
  {
    name: 'GitHub',
    icon: <Github className="w-5 h-5" />,
    href: 'https://github.com/Koshai',
    color: 'from-slate-600 to-slate-800',
    description: '@Koshai',
  },
  {
    name: 'LinkedIn',
    icon: <Linkedin className="w-5 h-5" />,
    href: 'https://linkedin.com/in/syed-akbar',
    color: 'from-blue-600 to-blue-800',
    description: 'Connect professionally',
  },
  {
    name: 'Twitter',
    icon: <Twitter className="w-5 h-5" />,
    href: 'https://twitter.com/syedakbar',
    color: 'from-sky-400 to-blue-500',
    description: '@syedakbar',
  },
]

export default function Contact() {
  const formRef = useRef(null)
  const [status, setStatus] = useState('')
  const [isLoading, setIsLoading] = useState(false)
  const [formData, setFormData] = useState({ from_name: '', reply_to: '', message: '' })

  const sectionRef = React.useRef(null)
  const isInView = useInView(sectionRef, { once: true, margin: '-80px' })

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const sendEmail = async (e) => {
    e.preventDefault()
    if (!formRef.current) return

    setIsLoading(true)
    setStatus('')

    try {
      await emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, formRef.current, { publicKey: PUBLIC_KEY })
      setStatus('success')
      setFormData({ from_name: '', reply_to: '', message: '' })
      formRef.current.reset()
    } catch {
      setStatus('error')
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <section id="contact" className="py-24 lg:py-32 px-6 lg:px-8" ref={sectionRef}>
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="section-label mb-6">Contact</span>
          <h2 className="font-display text-4xl lg:text-6xl font-extrabold mt-6 mb-5">
            <span className="text-shimmer">Let's Work Together</span>
          </h2>
          <p className="text-lg text-slate-400 max-w-2xl mx-auto">
            Have a project in mind? I'd love to hear about it.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8 items-start">
          {/* Form */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.15 }}
          >
            <div className="glass-card rounded-2xl p-8">
              <div className="flex items-center gap-4 mb-8">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-violet-500 to-cyan-400 flex items-center justify-center">
                  <MessageSquare className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="font-display text-2xl font-bold">Send a Message</h3>
                  <p className="text-slate-500 text-sm">I'll respond within 24 hours</p>
                </div>
              </div>

              <form ref={formRef} onSubmit={sendEmail} className="space-y-5" noValidate>
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="from_name" className="block text-sm font-medium text-slate-300 mb-2">
                      Name <span className="text-violet-400">*</span>
                    </label>
                    <input
                      id="from_name"
                      name="from_name"
                      type="text"
                      required
                      autoComplete="name"
                      value={formData.from_name}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-slate-500 focus:border-violet-500/50 focus:ring-2 focus:ring-violet-500/20 transition-all"
                      placeholder="Your name"
                    />
                  </div>
                  <div>
                    <label htmlFor="reply_to" className="block text-sm font-medium text-slate-300 mb-2">
                      Email <span className="text-violet-400">*</span>
                    </label>
                    <input
                      id="reply_to"
                      name="reply_to"
                      type="email"
                      required
                      autoComplete="email"
                      value={formData.reply_to}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-slate-500 focus:border-violet-500/50 focus:ring-2 focus:ring-violet-500/20 transition-all"
                      placeholder="you@email.com"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-slate-300 mb-2">
                    Message <span className="text-violet-400">*</span>
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={5}
                    required
                    value={formData.message}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-slate-500 focus:border-violet-500/50 focus:ring-2 focus:ring-violet-500/20 transition-all resize-none"
                    placeholder="Tell me about your project..."
                  />
                </div>

                <button
                  type="submit"
                  disabled={isLoading}
                  className="btn-glow w-full py-4 rounded-xl font-semibold text-white disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
                >
                  <span className="relative z-10 flex items-center justify-center gap-2">
                    {isLoading ? (
                      <>
                        <span className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                        Sending...
                      </>
                    ) : (
                      <>
                        <Send className="w-5 h-5" />
                        Send Message
                      </>
                    )}
                  </span>
                </button>

                {status && (
                  <motion.div
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    role="alert"
                    className={`flex items-center gap-3 p-4 rounded-xl text-sm ${
                      status === 'success'
                        ? 'bg-emerald-500/15 border border-emerald-500/30 text-emerald-400'
                        : 'bg-rose-500/15 border border-rose-500/30 text-rose-400'
                    }`}
                  >
                    {status === 'success' ? (
                      <><CheckCircle className="w-5 h-5 shrink-0" /> Message sent! I'll be in touch soon.</>
                    ) : (
                      <><AlertCircle className="w-5 h-5 shrink-0" /> Couldn't send — try emailing me directly.</>
                    )}
                  </motion.div>
                )}
              </form>
            </div>
          </motion.div>

          {/* Info */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-6"
          >
            <div className="glass-card rounded-2xl p-8">
              <h3 className="font-display text-2xl font-bold mb-5">Let's Connect</h3>
              <p className="text-slate-400 leading-relaxed mb-6">
                Open to freelance, full-time roles, and collaborations — especially on Blazor, React, and AI products.
              </p>
              <ul className="space-y-4">
                {[
                  { emoji: '🟢', text: 'Available for new projects' },
                  { emoji: '🌍', text: 'Remote-friendly worldwide' },
                  { emoji: '⚡', text: 'Fast turnaround' },
                ].map((item) => (
                  <li key={item.text} className="flex items-center gap-3 text-slate-300 text-sm">
                    <span className="w-8 h-8 rounded-lg bg-white/5 flex items-center justify-center text-base">{item.emoji}</span>
                    {item.text}
                  </li>
                ))}
              </ul>
            </div>

            <div className="grid sm:grid-cols-2 gap-4">
              {socialLinks.map((social, index) => (
                <motion.a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  initial={{ opacity: 0, y: 16 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.4, delay: 0.3 + index * 0.08 }}
                  className="glass-card rounded-xl p-4 hover:-translate-y-0.5 transition-all group"
                >
                  <div className="flex items-center gap-3">
                    <div className={`w-10 h-10 rounded-lg bg-gradient-to-r ${social.color} flex items-center justify-center text-white shrink-0`}>
                      {social.icon}
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="font-semibold text-white text-sm">{social.name}</div>
                      <div className="text-xs text-slate-500 truncate">{social.description}</div>
                    </div>
                    <ExternalLink className="w-4 h-4 text-slate-600 group-hover:text-violet-400 transition-colors shrink-0" />
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
