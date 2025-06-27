import Link from 'next/link';
import Image from 'next/image';
import '../styles/globals.css';

export default function Navbar() {
  return (
    <nav className="bg-gray-900 text-white p-4 flex justify-between items-center">
      
      {/* Sol: Logo + Başlık */}
      <Link href="/" className="flex items-center space-x-2">
        <Image src="/logo.png" alt="logo" width={96} height={96} />
        <span className="text-2xl font-bold">Oyun Kutusu</span>
      </Link>

      {/* Sağ: Menü */}
      <div className="space-x-4 hidden md:flex">
        <Link href="/" className="hover:text-yellow-400 transition">
          Ana Sayfa
        </Link>
        <Link href="/about" className="hover:text-yellow-400 transition">
          Hakkımızda
        </Link>
        <Link href="/contact" className="hover:text-yellow-400 transition">
          İletişim
        </Link>
      </div>

      {/* Hamburger Menü (mobil için) */}
      <button className="md:hidden focus:outline-none">
        <svg
          className="w-6 h-6"
          fill="none"
          stroke="currentColor"
          strokeWidth={2}
          strokeLinecap="round"
          strokeLinejoin="round"
          viewBox="0 0 24 24"
        >
          <path d="M4 6h16M4 12h16M4 18h16" />
        </svg>
      </button>
    </nav>
  );
}
