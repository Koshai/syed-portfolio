
import React, { useRef, useState } from 'react'
import emailjs from 'emailjs-com'

// Dummy EmailJS keys included as placeholders (replace with your real keys in README)
const SERVICE_ID = process.env.VITE_EMAILJS_SERVICE_ID || 'service_dummy123'
const TEMPLATE_ID = process.env.VITE_EMAILJS_TEMPLATE_ID || 'template_dummy123'
const USER_ID = process.env.VITE_EMAILJS_USER_ID || 'user_dummy123'

export default function Contact(){
  const formRef = useRef(null)
  const [status, setStatus] = useState('')

  const sendEmail = (e) => {
    e.preventDefault()
    if(!formRef.current) return
    emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, formRef.current, USER_ID)
      .then((result)=>{
        setStatus('Message sent — thank you!')
        formRef.current.reset()
      }, (error)=>{
        setStatus('Failed to send message. Please try later.')
      })
  }

  return (
    <section id="contact" className="py-16">
      <h2 className="text-2xl font-bold mb-4">Contact</h2>
      <div className="rounded-xl border p-6 bg-white/70 max-w-xl">
        <form ref={formRef} onSubmit={sendEmail} className="grid gap-4">
          <input name="from_name" required placeholder="Your name" className="w-full p-2 rounded border"/>
          <input name="reply_to" type="email" required placeholder="Your email" className="w-full p-2 rounded border"/>
          <textarea name="message" rows="5" required placeholder="Your message" className="w-full p-2 rounded border"/>
          <div className="flex items-center justify-between">
            <div className="text-sm text-slate-600">Or email directly: <a href="mailto:syed.r.akbar@gmail.com" className="text-sky-600">syed.r.akbar@gmail.com</a></div>
            <button type="submit" className="px-4 py-2 rounded bg-gradient-to-r from-sky-500 to-emerald-500 text-white">Send Message</button>
          </div>
          {status && <p className="text-sm text-emerald-600 mt-2">{status}</p>}
        </form>
        <p className="mt-4 text-xs text-slate-500">Hidden note: the EmailJS dummy keys are in the repo; replace them with real keys in Railway environment variables.</p>
      </div>
    </section>
  )
}
