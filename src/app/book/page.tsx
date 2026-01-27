"use client";

import React, { useState } from 'react';
import { sendEmail } from "../../lib/action";

export default function BookPage() {
  const [status, setStatus] = useState<{ type: 'success' | 'error', message: string } | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  async function handleFormSubmit(formData: FormData) {
    setIsSubmitting(true);
    setStatus(null);

    const result = await sendEmail(formData);

    if (result?.success) {
      setStatus({ type: 'success', message: "Message sent! I'll get back to you shortly." });
    } else {
      setStatus({ type: 'error', message: result?.error || "Something went wrong." });
    }
    setIsSubmitting(false);
  }

  return (
    <div className="relative bg-[#050505] text-white min-h-screen overflow-hidden">
      
      {/* BACKGROUND GRADIENT GLOW */}
      <div className="absolute top-[-10%] left-[-10%] w-[600px] h-[600px] bg-orange-600/10 rounded-full blur-[120px]" />

      <section className="relative pt-32 pb-20 px-6 z-10">
        <div className="max-w-7xl mx-auto">
          
          <div className="grid lg:grid-cols-2 gap-20">
            
            {/* 1. LEFT SIDE: INFO */}
            <div>
              <h1 className="text-5xl md:text-7xl font-black tracking-tighter mb-8 uppercase leading-[0.9]">
                Let's <br />
                <span className="bg-gradient-to-r from-orange-400 to-orange-700 bg-clip-text text-transparent">
                  Connect.
                </span>
              </h1>
              <p className="text-gray-400 text-lg mb-12 max-w-md">
                Have a project in mind? Fill out the form or reach out directly via email.
              </p>

              <div className="space-y-8">
                <div>
                  <h3 className="text-orange-500 font-mono text-xs uppercase tracking-[0.2em] mb-2">Email</h3>
                  <p className="text-xl font-bold">webdiviner25@gmail.com</p>
                </div>
                <div>
                  <h3 className="text-orange-500 font-mono text-xs uppercase tracking-[0.2em] mb-2">Availability</h3>
                  <p className="text-xl font-bold italic">Accepting new projects</p>
                </div>
              </div>
            </div>

            {/* 2. RIGHT SIDE: FORM */}
            <div className="relative">
              <div className="absolute -inset-[1px] bg-gradient-to-b from-white/20 to-transparent rounded-3xl" />
              
              <div className="relative bg-white/5 backdrop-blur-xl p-8 md:p-12 rounded-3xl border border-white/10 shadow-2xl">
                
                {status && (
                  <div className={`mb-6 p-4 rounded-xl border ${
                    status.type === 'success' ? 'bg-green-500/10 border-green-500 text-green-500' : 'bg-orange-500/10 border-orange-500 text-orange-500'
                  }`}>
                    {status.message}
                  </div>
                )}

                <form action={handleFormSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="text-xs font-bold uppercase tracking-widest text-gray-500 ml-1">Name</label>
                      <input name="name" type="text" required placeholder="Sire Watt" className="w-full bg-white/5 border border-white/10 p-4 rounded-xl focus:border-orange-500 outline-none text-white transition-all" />
                    </div>
                    <div className="space-y-2">
                      <label className="text-xs font-bold uppercase tracking-widest text-gray-500 ml-1">Email</label>
                      <input name="email" type="email" required placeholder="watt@gmail.com" className="w-full bg-white/5 border border-white/10 p-4 rounded-xl focus:border-orange-500 outline-none text-white transition-all" />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label className="text-xs font-bold uppercase tracking-widest text-gray-500 ml-1">Project Type</label>
                    <select name="projectType" className="w-full bg-black border border-white/10 p-4 rounded-xl focus:border-orange-500 outline-none text-gray-400">
                      <option value="Full-Stack">Full-Stack Development</option>
                      <option value="Smart-Contracts">Smart Contracts</option>
                      <option value="Consultation">Consultation</option>
                    </select>
                  </div>

                  <div className="space-y-2">
                    <label className="text-xs font-bold uppercase tracking-widest text-gray-500 ml-1">Message</label>
                    <textarea name="message" rows={5} required placeholder="Tell me about your vision..." className="w-full bg-white/5 border border-white/10 p-4 rounded-xl focus:border-orange-500 outline-none text-white resize-none" />
                  </div>

                  <button 
                    disabled={isSubmitting}
                    className="w-full py-5 bg-orange-500 text-black font-black uppercase tracking-widest rounded-xl hover:bg-white transition-all disabled:opacity-50"
                  >
                    {isSubmitting ? "Sending..." : "Send Message"}
                  </button>
                </form>
              </div>
            </div>

          </div>
        </div>
      </section>
    </div>
  );
}