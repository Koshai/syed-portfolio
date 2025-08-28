
import React from 'react'

const projects = [
  {
    title: "Gunshot Detection Software for Schools",
    desc: "Custom TensorFlow audio model and Python app to detect gunshot sounds. Prototype designed for school safety.",
    url: "https://github.com/Koshai/GSD",
  },
  {
    title: "Jaquizy — AI Q&A Generator",
    desc: "AI tool that converts class notes (text or image) into practice Q&A. Online and offline capable.",
    url: "https://www.jaquizy.com",
  },
  {
    title: "TACMAN — VR Sculpting Tool (Devpost)",
    desc: "VR sculpting tool integrated with custom hardware for realistic sculpting in Unity.",
    url: "https://devpost.com/software/tac-man",
  },
  {
    title: "Real Estate Property Management (Blazor)",
    desc: "Property management platform built with Blazor C#, tracks rent, expenses, tenants, and P&L reports.",
    url: "#",
  },
  {
    title: "Inventory & Timekeeping System (Government)",
    desc: "Enterprise inventory, work order, and timekeeping system built with Blazor and MSSQL.",
    url: "#",
  },
]

export default function Projects(){
  return (
    <section id="projects" className="py-16">
      <h2 className="text-2xl font-bold mb-6">Selected Projects</h2>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((p, i) => (
          <article key={i} className="rounded-xl border border-slate-200 p-4 bg-white/70">
            <a href={p.url} target="_blank" rel="noreferrer" className="block rounded-md overflow-hidden">
              <img
                alt={p.title}
                src={`https://api.microlink.io/?url=${encodeURIComponent(p.url)}&screenshot=true&meta=false&embed=screenshot`}
                className="w-full h-40 object-cover bg-slate-100"
                onError={(e)=>{ e.target.onerror=null; e.target.src='/src/assets/placeholder.png' }}
              />
            </a>
            <h3 className="mt-3 font-semibold">{p.title}</h3>
            <p className="mt-1 text-sm text-slate-600">{p.desc}</p>
            <a className="mt-3 inline-block text-sm text-sky-600" href={p.url} target="_blank" rel="noreferrer">View →</a>
          </article>
        ))}
      </div>
    </section>
  )
}
