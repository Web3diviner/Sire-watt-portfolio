import "./globals.css";
import Link from "next/link";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-black text-white min-h-screen flex flex-col">

        {/* Navbar */}
        <nav className="fixed top-0 left-0 w-full z-50 bg-black border-b border-white/10">
          <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
            <h1 className="text-xl font-bold">
              Sire Watt D_<span className="text-orange-500">Web3Diviner</span>
            </h1>

            <div className="space-x-6 text-lg">
              <Link href="/">Home</Link>
              <Link href="/work">Work</Link>
              <Link href="/book">Book Me</Link>
            </div>
          </div>
        </nav>

        {/* Page content */}
        <main className="flex-1 pt-24">
          {children}
        </main>

        {/* Footer */}
        <footer className="border-t border-white/10 py-6 text-center text-sm text-white/50">
          © {new Date().getFullYear()} Sire Watt D_Web3Diviner
          <footer className="border-t border-white/15 py-8 text-center text-sm text-white/60">
  <div className="flex flex-col items-center gap-4">

    {/* Social Links */}
    <div className="flex gap-6 text-lg">
      <a
        href="https://twitter.com/"
        target="_blank"
        className="hover:text-orange-500 transition"
      >
        X (Twitter)
      </a>

      <a
        href="https://instagram.com/"
        target="_blank"
        className="hover:text-orange-500 transition"
      >
        Instagram
      </a>

      <a
        href="https://t.me/"
        target="_blank"
        className="hover:text-orange-500 transition"
      >
        Telegram
      </a>

      <a
        href="https://linkedin.com/"
        target="_blank"
        className="hover:text-orange-500 transition"
      >
        LinkedIn
      </a>
    </div>

  

  </div>
</footer>

        </footer>

      </body>
    </html>
  );
}
