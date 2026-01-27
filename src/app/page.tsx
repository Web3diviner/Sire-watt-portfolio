"use client";
import React from 'react';
import Link from 'next/link';

export default function HomePage() {
  return (
    <div className="relative bg-[#050505] text-white min-h-screen overflow-hidden">
      
      {/* 1. MESH GRADIENTS (The Background Glows) */}
      <div className="absolute top-[-10%] left-[-10%] w-[500px] h-[500px] bg-orange-600/20 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-[10%] right-[-5%] w-[400px] h-[400px] bg-orange-900/10 rounded-full blur-[100px] pointer-events-none" />

      {/* 2. HERO SECTION */}
      <section className="relative pt-32 pb-20 px-6 z-10">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            
            {/* LEFT SIDE: THE TEXT */}
            <div>
              <div className="inline-flex items-center gap-2 mb-6 px-4 py-1.5 border border-white/10 bg-white/5 backdrop-blur-md rounded-full">
                <span className="w-2 h-2 rounded-full bg-orange-500" />
                <span className="text-gray-300 text-[10px] font-bold uppercase tracking-[0.2em]">Open for collaboration</span>
              </div>
              
              <h1 className="text-6xl md:text-8xl font-black tracking-tighter leading-[0.9] mb-8 uppercase">
                Digital <br />
                <span className="bg-gradient-to-r from-orange-400 via-orange-600 to-orange-800 bg-clip-text text-transparent">
                  Excellence.
                </span>
              </h1>
              
              <p className="text-gray-400 text-lg md:text-xl max-w-xl mb-12 leading-relaxed border-l-2 border-orange-500/30 pl-6">
                Engineering high-performance web applications and strategic digital solutions where speed meets scalability.
              </p>

              <div className="flex flex-col sm:flex-row gap-5">
                <Link href="/book" className="px-10 py-4 bg-orange-500 text-black font-black rounded-xl transition-all shadow-[0_0_20px_rgba(255,106,0,0.3)] hover:bg-white text-center">
                  Get in Touch
                </Link>
                <Link href="/work" className="px-10 py-4 border border-white/10 bg-white/5 backdrop-blur-sm text-white font-bold rounded-xl hover:bg-white/10 transition-all text-center">
                  View Projects
                </Link>
              </div>
            </div>

            {/* RIGHT SIDE: THE PICTURE */}
            <div className="flex justify-center lg:justify-end">
              <div className="relative">
                <div className="absolute -inset-[2px] bg-gradient-to-tr from-orange-600 via-orange-400 to-transparent rounded-2xl opacity-40" />
                <div className="relative bg-[#0a0a0a] rounded-2xl overflow-hidden shadow-2xl">
                  <img 
                    src="/watt.jpg" 
                    alt="Sire Watt" 
                    className="w-full max-w-[450px] aspect-[4/5] object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 3. SECTION DIVIDER */}
      <div className="max-w-7xl mx-auto px-6">
        <div className="h-[1px] w-full bg-gradient-to-r from-transparent via-white/10 to-transparent" />
      </div>

    </div>
  );
}