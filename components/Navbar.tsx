import Link from 'next/link';

export default function Navbar() {
  return (
    <nav className="bg-gray-900 text-white p-4 flex justify-between items-center">
      <Link href="/" className="text-2xl font-bold">
        🎮 Oyun Kutusu
      </Link>
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
      <button className="md:hidden focus:outline-none">
        {/* Mobil menü için hamburger ikon */}
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
