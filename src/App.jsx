
import React from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Projects from './components/Projects'
import About from './components/About'
import Contact from './components/Contact'

export default function App(){
  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-900 text-slate-900 dark:text-slate-100">
      <Navbar />
      <main className="max-w-6xl mx-auto px-4">
        <Hero />
        <Projects />
        <About />
        <Contact />
      </main>
    </div>
  )
}
