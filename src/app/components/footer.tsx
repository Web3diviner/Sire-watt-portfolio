export default function Footer() {
  return (
    <footer className="bg-black border-t border-gray-700 py-8 mt-20 text-center">
      <p className="text-gray-400 mb-2">
        © {new Date().getFullYear()} Sire Watt D_ Web3Diviner. All rights reserved.
      </p>
      <div className="flex justify-center space-x-6">
        <a href="https://twitter.com/" target="_blank" className="text-purple-500 hover:text-purple-400 transition">Twitter</a>
        <a href="https://linkedin.com/" target="_blank" className="text-purple-500 hover:text-purple-400 transition">LinkedIn</a>
        <a href="https://github.com/" target="_blank" className="text-purple-500 hover:text-purple-400 transition">GitHub</a>
      </div>
    </footer>
  );
}
