// pages/index.tsx
import mockProducts from "../data/mockProducts";
import ProductCard from "../components/ProductCard";
import FilterSidebar from "../components/FilterSidebar"; // filtre paneli eklendi
import '../styles/globals.css'; // doğru CSS importu

export default function HomePage() {
  return (
    <div className="min-h-screen bg-gray-100 p-4">
      <h1 className="text-black text-3xl font-bold mb-6">🎮 Oyun Kutusu</h1>
      
      <div className="flex flex-col md:flex-row gap-6">
        {/* Sol filtre paneli */}
        <div className="w-full md:w-1/4">
          <FilterSidebar />
        </div>

        {/* Sağ ürün listesi */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 w-full">
          {mockProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </div>
  );
}
