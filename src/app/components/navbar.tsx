import Link from 'next/link';

export default function Navbar() {
  return (
    <nav className="fixed top-0 w-full z-[100] border-b border-white/5 bg-black/60 backdrop-blur-xl">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        <Link href="/" className="text-xl font-black tracking-tighter uppercase">
          Sire <span className="text-orange-500 text-2xl">Watt.</span>
        </Link>

        <div className="flex items-center gap-8">
          <Link href="/work" className="text-sm font-bold uppercase tracking-widest text-gray-400 hover:text-white transition-colors">Work</Link>
          <Link 
            href="/book" 
            className="px-6 py-2.5 bg-orange-500 text-black text-xs font-black uppercase tracking-widest rounded-lg hover:bg-white transition-all"
          >
            Start a Project
          </Link>
        </div>
      </div>
    </nav>
  );
}