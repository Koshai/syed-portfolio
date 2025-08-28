
import React from 'react'

export default function About(){
  return (
    <section id="about" className="py-16">
      <h2 className="text-2xl font-bold mb-4">About</h2>
      <div className="grid md:grid-cols-2 gap-6">
        <div className="rounded-xl border p-6 bg-white/70">
          <h3 className="font-semibold">Summary</h3>
          <p className="mt-3 text-sm text-slate-700">A developer with experience building real-time audio models, Blazor business apps, Unity VR experiences, and full-stack AI tools. Focuses on maintainable code, accessibility, and performance.</p>
        </div>
        <div className="rounded-xl border p-6 bg-white/70">
          <h3 className="font-semibold">Skills & Toolkit</h3>
          <ul className="mt-3 list-disc pl-5 text-sm text-slate-700 space-y-2">
            <li>React, Tailwind CSS, Vite</li>
            <li>Blazor (C#), .NET, MSSQL</li>
            <li>Unity, Meta XR SDK, VR/MR</li>
            <li>Python, TensorFlow, audio ML</li>
            <li>Node.js, Express, Flask</li>
          </ul>
        </div>
      </div>
    </section>
  )
}
