import Link from 'next/link';
import { useState } from 'react';
import { SignedIn, SignedOut, UserButton } from '@clerk/nextjs';

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="bg-gray-900 text-white px-6 py-4 flex items-center justify-between relative">
      <Link href="/" className="flex items-center space-x-2 text-2xl font-bold hover:text-yellow-400 transition">
        <img src="/logo.png" alt="Logo" className="w-8 h-8" />
        <span>Oyun Kutusu</span>
      </Link>

      {/* Masaüstü menü */}
      <div className="hidden md:flex items-center space-x-8">
        <Link href="/" className="hover:text-yellow-400 transition">Ana Sayfa</Link>
        <Link href="/about" className="hover:text-yellow-400 transition">Hakkımızda</Link>
        <Link href="/contact" className="hover:text-yellow-400 transition">İletişim</Link>

        {/* Favoriler linki sadece giriş yapmış kullanıcıya */}
        <SignedIn>
          <Link href="/favorites" className="hover:text-yellow-400 transition">Favoriler</Link>
          <UserButton afterSignOutUrl="/" />
        </SignedIn>

        <SignedOut>
          <Link href="/sign-in" className="hover:text-yellow-400 transition">Giriş Yap</Link>
        </SignedOut>
      </div>

      {/* Mobil menü butonu */}
      <button
        onClick={() => setMenuOpen(!menuOpen)}
        className="md:hidden focus:outline-none"
        aria-label="Mobil menüyü aç/kapat"
      >
        {menuOpen ? (
          <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
            <path d="M6 18L18 6M6 6l12 12" />
          </svg>
        ) : (
          <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
            <path d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        )}
      </button>

      {/* Mobil menü içerik */}
      {menuOpen && (
        <div className="absolute top-full left-0 w-full bg-gray-900 text-white flex flex-col items-center space-y-4 py-4 md:hidden z-50">
          <Link href="/" className="hover:text-yellow-400 transition" onClick={() => setMenuOpen(false)}>Ana Sayfa</Link>
          <Link href="/about" className="hover:text-yellow-400 transition" onClick={() => setMenuOpen(false)}>Hakkımızda</Link>
          <Link href="/contact" className="hover:text-yellow-400 transition" onClick={() => setMenuOpen(false)}>İletişim</Link>

          {/* Favoriler linki mobilde */}
          <SignedIn>
            <Link href="/favorites" className="hover:text-yellow-400 transition" onClick={() => setMenuOpen(false)}>Favoriler</Link>
            <UserButton afterSignOutUrl="/" />
          </SignedIn>

          <SignedOut>
            <Link href="/sign-in" className="hover:text-yellow-400 transition" onClick={() => setMenuOpen(false)}>Giriş Yap</Link>
          </SignedOut>
        </div>
      )}
    </nav>
  );
}
