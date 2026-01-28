"use client";
import React from 'react';
import Link from 'next/link';

export default function HomePage() {
  return (
    <div className="relative bg-[#050505] text-white min-h-screen overflow-hidden">
      {/* Mesh Gradients - Scale down for mobile */}
      <div className="absolute top-[-5%] left-[-10%] w-[300px] h-[300px] lg:w-[500px] lg:h-[500px] bg-orange-600/20 rounded-full blur-[80px] lg:blur-[120px] pointer-events-none" />

      <section className="relative pt-24 lg:pt-32 pb-20 px-6 z-10">
        <div className="max-w-7xl mx-auto">
          {/* Change grid-cols-2 to grid-cols-1 for mobile */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            
            <div className="text-center lg:text-left"> {/* Center text on mobile */}
              <div className="inline-flex items-center gap-2 mb-6 px-4 py-1.5 border border-white/10 bg-white/5 backdrop-blur-md rounded-half">
                <span className="w-2 h-4 rounded-half bg-orange-500" />
                <span className="text-gray-300 text-[10px] font-bold uppercase tracking-[0.2em]">Open for collaboration</span>
              </div>
              
              {/* Responsive font sizes: text-5xl for mobile, text-8xl for large screens */}
              <h1 className="text-5xl md:text-7xl lg:text-8xl font-black tracking-tighter leading-[0.9] mb-8 uppercase">
                Digital <br />
                <span className="bg-gradient-to-r from-orange-400 via-orange-600 to-orange-800 bg-clip-text text-transparent">
                  Excellence.
                </span>
              </h1>
              
              <p className="text-gray-400 text-base md:text-xl max-w-xl mx-auto lg:mx-0 mb-12 leading-relaxed border-l-2 border-orange-500/30 pl-6 text-left">
                Engineering high-performance web applications and strategic digital solutions.
              </p>

              <div className="flex flex-col sm:flex-row gap-5 justify-center lg:justify-start">
                <Link href="/book" className="px-10 py-4 bg-orange-500 text-black font-black rounded-xl text-center">
                  Get in Touch
                </Link>
                <Link href="/work" className="px-10 py-4 border border-white/10 bg-white/5 text-white font-bold rounded-xl text-center">
                  View Projects
                </Link>
              </div>
            </div>

            <div className="flex justify-center lg:justify-end">
               {/* Hero image remains centered on mobile */}
               <div className="relative w-full max-w-[350px] lg:max-w-[450px]">
                  <img src="/watt.jpg" alt="Sire Watt" className="rounded-2xl w-full object-cover aspect-[4/5]" />
               </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}