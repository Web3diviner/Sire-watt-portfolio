import "./globals.css";
import Link from "next/link";


export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="bg-black text-white min-h-screen flex flex-col">
        <nav className="fixed top-0 left-0 w-full z-50 bg-black/80 backdrop-blur-md border-b border-white/10">
          <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
            {/* Shorten logo for very small screens */}
            <h1 className="text-lg md:text-xl font-bold">
              Sire Watt <span className="hidden sm:inline">D_Web3Diviner</span>
            </h1>

            {/* Hidden on mobile (hidden), shown on small screens and up (flex) */}
            <div className="hidden sm:flex space-x-6 text-sm md:text-base">
              <Link href="/">Home</Link>
              <Link href="/work">Work</Link>
              <Link href="/book">Book Me</Link>
            </div>

            {/* Simple Mobile Call to Action (visible only on mobile) */}
            <Link href="/book" className="sm:hidden text-xs bg-orange-500 text-black px-3 py-1 rounded-full font-bold">
              Book
            </Link>
          </div>
        </nav>

        <main className="flex-1 pt-20 lg:pt-24">
          {children}
        </main>

        <footer className="border-t border-white/10 py-10 px-6 text-center">
          <div className="flex flex-wrap justify-center gap-4 md:gap-8 text-sm md:text-lg mb-6">
            <a href="https://twitter.com/" className="hover:text-orange-500">X</a>
            <a href="https://linkedin.com/" className="hover:text-orange-500">LinkedIn</a>
            <a href="https://t.me/" className="hover:text-orange-500">Telegram</a>
          </div>
          <p className="text-white/50 text-xs">© {new Date().getFullYear()} Sire Watt</p>
        </footer>
      </body>
    </html>
  );
}