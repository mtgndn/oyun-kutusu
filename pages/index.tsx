import { useEffect, useState } from 'react';
import ProductCard from '../components/ProductCard';
import FilterSidebar from '../components/FilterSidebar';
import '../styles/globals.css';


export default function HomePage() {
  const [products, setProducts] = useState([]);
  const [filters, setFilters] = useState({ category: '', platform: '' });

  useEffect(() => {
    async function fetchProducts() {
      let query = '';
      if (filters.category) query += `category=${filters.category}&`;
      if (filters.platform) query += `platform=${filters.platform}&`;

      const res = await fetch(`/api/products?${query}`);
      const data = await res.json();
      setProducts(data);
    }
    fetchProducts();
  }, [filters]);

  return (
    <div className="text-black min-h-screen bg-gray-100 p-4">
      <h1 className="text-black text-3xl font-bold mb-6">🎮 Oyun Kutusu</h1>

      {/* FLEX düzen: solda filtre, sağda ürünler */}
      <div className="flex flex-col lg:flex-row gap-6">
        
        {/* Sol: Filtre Paneli */}
        <div className="text-black lg:w-1/4 w-full">
          <FilterSidebar filters={filters} setFilters={setFilters} />
        </div>

        {/* Sağ: Ürün Listesi */}
        <div className="lg:w-3/4 w-full">
          <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6">
            {products.map(product => (
              <ProductCard key={product._id} product={product} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
