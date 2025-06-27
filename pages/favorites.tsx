import { useEffect, useState } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import ProductCard from '../components/ProductCard';
import { useUser } from '@clerk/nextjs';
import '../styles/globals.css';

export default function FavoritesPage() {
  const { isSignedIn } = useUser();
  const [favoriteIds, setFavoriteIds] = useState<string[]>([]);
  const [favoriteProducts, setFavoriteProducts] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  // Sabit veya state'de tutulabilir, şimdilik sabit:
  const selectedCurrency = "TRY";

  // Favori id’lerini çek
  useEffect(() => {
    if (!isSignedIn) {
      setFavoriteIds([]);
      setFavoriteProducts([]);
      setLoading(false);
      return;
    }

    async function fetchFavorites() {
      setLoading(true);
      const res = await fetch('/api/favorites');
      if (res.ok) {
        const favIds: string[] = await res.json();
        setFavoriteIds(favIds);
      } else {
        setFavoriteIds([]);
      }
      setLoading(false);
    }
    fetchFavorites();
  }, [isSignedIn]);

  // Favori ürün detaylarını çek
  useEffect(() => {
    if (favoriteIds.length === 0) {
      setFavoriteProducts([]);
      return;
    }

    async function fetchProducts() {
      const res = await fetch('/api/productsByIds', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ ids: favoriteIds }),
      });
      if (res.ok) {
        const products = await res.json();
        setFavoriteProducts(products);
      } else {
        setFavoriteProducts([]);
      }
    }
    fetchProducts();
  }, [favoriteIds]);

  // Favori ekle/çıkar toggle fonksiyonu
  const handleToggleFavorite = async (productId: string) => {
    const isFav = favoriteIds.includes(productId);

    if (isFav) {
      // Favorilerden çıkar
      const res = await fetch('/api/favorites', {
        method: 'DELETE',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ productId }),
      });
      if (res.ok) {
        setFavoriteIds((ids) => ids.filter((id) => id !== productId));
      }
    } else {
      // Favorilere ekle
      const res = await fetch('/api/favorites', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ productId }),
      });
      if (res.ok) {
        setFavoriteIds((ids) => [...ids, productId]);
      }
    }
  };

  if (!isSignedIn) {
    return (
      <>
        <Navbar />
        <div className="min-h-screen flex items-center justify-center">
          <p>Lütfen favorileri görüntülemek için giriş yapınız.</p>
        </div>
        <Footer />
      </>
    );
  }

  return (
    <>
      <Navbar />
      <div className="min-h-screen p-6 bg-gray-100 text-black max-w-6xl mx-auto">
        <h1 className="text-3xl font-bold mb-6">Favori Ürünlerim</h1>
        {loading ? (
          <p>Yükleniyor...</p>
        ) : favoriteProducts.length === 0 ? (
          <p>Henüz favori ürün eklemediniz.</p>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {favoriteProducts.map((product) => (
              <ProductCard
  key={product._id}
  product={product}
  selectedCurrency={selectedCurrency}
  isFavorite={favoriteIds.includes(product._id)}
  onToggleFavorite={handleToggleFavorite}
/>

            ))}
          </div>
        )}
      </div>
      <Footer />
    </>
  );
}
