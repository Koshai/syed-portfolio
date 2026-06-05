
import React from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Projects from './components/Projects'
import About from './components/About'
import Contact from './components/Contact'
import Footer from './components/Footer'

export default function App(){
  return (
    <div className="min-h-screen bg-[#030712] text-white overflow-x-hidden">
      <a href="#main-content" className="skip-link">Skip to content</a>

      {/* Layered background */}
      <div className="fixed inset-0 mesh-bg pointer-events-none" />
      <div className="fixed inset-0 bg-grid-pattern bg-grid opacity-40 pointer-events-none" />
      <div className="fixed inset-0 noise-overlay pointer-events-none" />

      {/* Ambient orbs */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-32 -left-32 w-[500px] h-[500px] rounded-full bg-violet-600/20 blur-[120px] animate-pulse-glow" />
        <div className="absolute top-1/3 -right-48 w-[600px] h-[600px] rounded-full bg-cyan-500/15 blur-[140px] animate-float-slow" />
        <div className="absolute -bottom-32 left-1/3 w-[450px] h-[450px] rounded-full bg-emerald-500/10 blur-[100px] animate-pulse-glow" style={{ animationDelay: '2s' }} />
      </div>

      {/* Content */}
      <div className="relative z-10">
        <Navbar />
        <main id="main-content">
          <Hero />
          <Projects />
          <About />
          <Contact />
        </main>
        <Footer />
      </div>
    </div>
  )
}
