import { useEffect, useState } from 'react';
import Head from 'next/head';
import ProductCard from '../components/ProductCard';
import FilterSidebar from '../components/FilterSidebar';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import CurrencySelector from '../components/CurrencySelector';
import { useUser } from '@clerk/nextjs';
import '../styles/globals.css';

export default function HomePage() {
  const { isSignedIn } = useUser();
  const [products, setProducts] = useState<any[]>([]);
  const [filters, setFilters] = useState({
    category: '',
    platform: '',
    language: '',
    minPrice: '',
    maxPrice: ''
  });
  const [selectedCurrency, setSelectedCurrency] = useState('TRY');
  const [favoriteIds, setFavoriteIds] = useState<string[]>([]);

  // Ürünleri filtreye göre getir
  useEffect(() => {
    async function fetchProducts() {
      let query = '';
      if (filters.category) query += `category=${filters.category}&`;
      if (filters.platform) query += `platform=${filters.platform}&`;
      if (filters.language) query += `language=${filters.language}&`;
      if (filters.minPrice) query += `minPrice=${filters.minPrice}&`;
      if (filters.maxPrice) query += `maxPrice=${filters.maxPrice}&`;

      const res = await fetch(`/api/products?${query}`);
      const data = await res.json();
      setProducts(data);
    }
    fetchProducts();
  }, [filters]);

  // Giriş yapıldıysa favori ürün ID'lerini çek
  useEffect(() => {
    if (!isSignedIn) {
      setFavoriteIds([]);
      return;
    }

    async function fetchFavorites() {
      const res = await fetch('/api/favorites');
      if (res.ok) {
        const favIds: string[] = await res.json();
        setFavoriteIds(favIds);
      }
    }

    fetchFavorites();
  }, [isSignedIn]);

  // Favori ekle/çıkar işlemi
  const handleToggleFavorite = async (productId: string) => {
    const isFav = favoriteIds.includes(productId);

    if (isFav) {
      const res = await fetch('/api/favorites', {
        method: 'DELETE',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ productId }),
      });
      if (res.ok) {
        setFavoriteIds((prev) => prev.filter((id) => id !== productId));
      }
    } else {
      const res = await fetch('/api/favorites', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ productId }),
      });
      if (res.ok) {
        setFavoriteIds((prev) => [...prev, productId]);
      }
    }
  };

  return (
    <>
      <Head>
        <title>Oyun Kutusu</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Navbar />

      <div className="relative min-h-screen bg-gradient-to-br from-purple-600 via-indigo-700 to-blue-700 overflow-hidden">
        <img
          src="/wave.svg"
          alt="Dalga efekti"
          className="pointer-events-none absolute bottom-0 left-0 w-full opacity-40"
          style={{ height: '200px', objectFit: 'cover' }}
        />

        <div className="relative text-black p-4">
          <div className="flex justify-between items-center mb-4">
            <h1 className="text-3xl font-bold text-white drop-shadow-lg">Oyun Filtreleme</h1>
            <CurrencySelector
              selectedCurrency={selectedCurrency}
              onChange={setSelectedCurrency}
            />
          </div>

          <div className="flex flex-col lg:flex-row gap-6">
            {/* Filtre Paneli */}
            <div className="text-black lg:w-1/4 w-full bg-white rounded-lg p-4 shadow-lg">
              <FilterSidebar filters={filters} setFilters={setFilters} />
            </div>

            {/* Ürün Listesi */}
            <div className="lg:w-3/4 w-full">
              <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6">
                {products.map(product => (
                  <ProductCard
                    key={product._id}
                    product={product}
                    selectedCurrency={selectedCurrency}
                    isFavorite={favoriteIds.includes(product._id)}
                    onToggleFavorite={handleToggleFavorite}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
}
