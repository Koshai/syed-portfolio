
import React from 'react'

export default function Hero(){
  return (
    <section className="py-16">
      <div className="grid md:grid-cols-2 gap-8 items-center">
        <div>
          <p className="inline-flex items-center gap-2 text-sm text-slate-600">Frontend Developer · Web Designer</p>
          <h1 className="mt-4 text-4xl font-extrabold">Syed Akbar — <span className="bg-clip-text text-transparent bg-gradient-to-r from-sky-500 to-emerald-500">Portfolio</span></h1>
          <p className="mt-4 text-slate-700">Crafting performant, accessible, and beautiful web experiences using React and Tailwind CSS.</p>
          <div className="mt-6 flex gap-3">
            <a href="#projects" className="inline-flex items-center px-4 py-2 rounded-lg bg-gradient-to-r from-sky-500 to-emerald-500 text-white font-semibold">View Projects</a>
            <a href="#contact" className="inline-flex items-center px-4 py-2 rounded-lg border border-slate-200">Contact</a>
          </div>
        </div>
        <div>
          <div className="rounded-xl p-4 border border-slate-100 bg-gradient-to-br from-sky-200 to-emerald-200/30">
            <div className="h-40 rounded-lg bg-white/60 flex items-center justify-center text-slate-700">Portfolio Preview</div>
            <div className="mt-4 grid grid-cols-3 gap-2">
              <div className="h-16 rounded-lg bg-white/60" />
              <div className="h-16 rounded-lg bg-white/60" />
              <div className="h-16 rounded-lg bg-white/60" />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
