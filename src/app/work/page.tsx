import React from 'react';
import Link from 'next/link';

// Define the structure for your projects
interface Project {
  id: number;
  title: string;
  category: string;
  description: string;
  link: string;
}

const projects: Project[] = [
  {
    id: 1,
    title: "Web Development",
    category: "Full Stack Development",
    description: "High-performance website and decentralized sites with API integrations.",
    link: "#"
  },
  {
    id: 2,
    title: "On Chain Development",
    category: "Smart contract Development",
    description: "Smart ontracts for NFT minting and token lauchpads.",
    link: "#"
  },
  {
    id: 3,
    title: "Brand Strategy and Community Building",
    category: "Project Lead",
    description: "Lead project teams and build an active community for your startup.",
    link: "#"
  }
];

export default function WorkPage() {
  return (
    <div className="relative bg-[#050505] text-white min-h-screen overflow-hidden">
      
      {/* BACKGROUND GLOWS */}
      <div className="absolute top-[-10%] right-[-10%] w-[500px] h-[500px] bg-orange-600/10 rounded-full blur-[120px]" />

      <section className="relative pt-32 pb-20 px-6 z-10">
        <div className="max-w-7xl mx-auto">
          
          {/* PAGE HEADER */}
          <div className="mb-20">
            <h1 className="text-5xl md:text-7xl font-black tracking-tighter mb-6 uppercase">
              Selected <span className="bg-gradient-to-r from-orange-400 to-orange-700 bg-clip-text text-transparent">Works.</span>
            </h1>
            <p className="text-gray-400 text-lg max-w-2xl border-l border-orange-500/50 pl-6">
              A collection of projects where technical precision meets creative strategy.
            </p>
          </div>

          {/* BENTO GRID */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project) => (
              <div 
                key={project.id} 
                className="group relative bg-white/5 border border-white/10 p-8 rounded-3xl backdrop-blur-sm transition-all duration-500 hover:bg-white/10"
              >
                {/* ID Number Gradient */}
                <span className="text-orange-500/20 font-black text-6xl absolute top-4 right-8 group-hover:text-orange-500/40 transition-colors">
                  0{project.id}
                </span>

                <div className="relative z-10">
                  <span className="text-orange-500 font-mono text-xs uppercase tracking-widest font-bold">
                    {project.category}
                  </span>
                  <h3 className="text-2xl font-bold mt-4 mb-4 uppercase tracking-tight">
                    {project.title}
                  </h3>
                  <p className="text-gray-400 text-sm leading-relaxed mb-8">
                    {project.description}
                  </p>
                  
                  <Link 
                    href={project.link} 
                    className="inline-flex items-center gap-2 text-sm font-bold uppercase tracking-wider text-white hover:text-orange-500 transition-colors"
                  >
                    View Project 
                    <span className="text-orange-500">→</span>
                  </Link>
                </div>
                
                {/* Subtle bottom gradient line */}
                <div className="absolute bottom-0 left-8 right-8 h-[2px] bg-gradient-to-r from-transparent via-orange-500/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* FOOTER CALL TO ACTION */}
      <section className="py-20 px-6 text-center">
        <div className="max-w-4xl mx-auto p-12 bg-white/5 border border-white/10 rounded-[3rem] backdrop-blur-xl">
          <h2 className="text-3xl md:text-4xl font-black mb-6">READY TO START SOMETHING?</h2>
          <Link href="/book" className="inline-block px-10 py-4 bg-orange-500 text-black font-black rounded-xl hover:bg-white transition-all">
            BOOK A CONSULTATION
          </Link>
        </div>
      </section>

    </div>
  );
}