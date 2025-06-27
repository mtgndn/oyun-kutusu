// components/Footer.tsx
export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 py-8 px-6 mt-12">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4">
        <p>© {new Date().getFullYear()} Oyun Kutusu. Tüm hakları saklıdır.</p>

        <div className="flex space-x-6">
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="hover:text-yellow-400 transition">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 fill-current" viewBox="0 0 24 24">
              <path d="M22 12.07C22 6.48 17.52 2 12 2S2 6.48 2 12.07c0 4.99 3.66 9.13 8.44 9.93v-7.02H7.9v-2.9h2.54V9.41c0-2.51 1.5-3.9 3.79-3.9 1.1 0 2.24.2 2.24.2v2.47h-1.26c-1.24 0-1.63.77-1.63 1.56v1.88h2.77l-.44 2.9h-2.33v7.02C18.34 21.2 22 17.07 22 12.07z" />
            </svg>
          </a>

          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" aria-label="Twitter" className="hover:text-yellow-400 transition">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 fill-current" viewBox="0 0 24 24">
              <path d="M23 3a10.9 10.9 0 01-3.14.86 5.48 5.48 0 002.4-3.02 10.93 10.93 0 01-3.47 1.32A5.44 5.44 0 0016.5 2c-3 0-5.5 2.42-5.5 5.4 0 .42.04.83.13 1.22C7.69 7.36 4.07 5.44 1.64 2.46a5.36 5.36 0 00-.75 2.7c0 1.87.98 3.52 2.46 4.5a5.37 5.37 0 01-2.49-.69v.07c0 2.61 1.87 4.78 4.35 5.26a5.49 5.49 0 01-2.48.09c.7 2.22 2.72 3.83 5.12 3.88a10.94 10.94 0 01-6.77 2.3c-.44 0-.87-.03-1.29-.07a15.39 15.39 0 008.29 2.41c9.95 0 15.4-8.33 15.4-15.54 0-.24 0-.47-.02-.7A11.12 11.12 0 0023 3z" />
            </svg>
          </a>

          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="hover:text-yellow-400 transition">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 fill-current" viewBox="0 0 24 24">
              <path d="M7.75 2h8.5A5.75 5.75 0 0122 7.75v8.5A5.75 5.75 0 0116.25 22h-8.5A5.75 5.75 0 012 16.25v-8.5A5.75 5.75 0 017.75 2zm0 2A3.75 3.75 0 004 7.75v8.5A3.75 3.75 0 007.75 20h8.5A3.75 3.75 0 0020 16.25v-8.5A3.75 3.75 0 0016.25 4h-8.5zM12 7a5 5 0 110 10 5 5 0 010-10zm0 2.75a2.25 2.25 0 100 4.5 2.25 2.25 0 000-4.5zm3.75-3.62a1.12 1.12 0 11-2.24 0 1.12 1.12 0 012.24 0z" />
            </svg>
          </a>
        </div>
      </div>
    </footer>
  );
}
