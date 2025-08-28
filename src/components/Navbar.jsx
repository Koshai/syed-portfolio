
import React from 'react'

export default function Navbar(){
  return (
    <header className="sticky top-0 z-40 bg-white/80 dark:bg-slate-900/60 backdrop-blur border-b border-slate-200 dark:border-slate-800">
      <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
        <a href="#" className="flex items-center gap-3">
          <div className="h-8 w-8 rounded-lg bg-gradient-to-br from-sky-500 to-emerald-500" />
          <span className="font-semibold">Syed Akbar</span>
        </a>
        <nav className="hidden sm:flex gap-4 text-sm">
          <a href="#projects" className="hover:text-sky-600">Projects</a>
          <a href="#about" className="hover:text-sky-600">About</a>
          <a href="#contact" className="hover:text-sky-600">Contact</a>
        </nav>
      </div>
    </header>
  )
}
