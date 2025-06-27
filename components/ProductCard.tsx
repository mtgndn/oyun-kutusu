import Image from 'next/image';
import '../styles/globals.css';

export default function ProductCard({ product }) {
  return (
    <div className="bg-white rounded-xl shadow-md overflow-hidden transform transition hover:scale-105 hover:shadow-lg">
      <img
        src={product.image}
        alt={product.title}
        className="w-full h-48 object-cover"
      />
      <div className="p-4">
        <h2 className="text-lg font-semibold">{product.title}</h2>
        <p className="text-sm text-gray-600">{product.platform} • {product.language}</p>
        <p className="mt-2 font-bold text-blue-600">{product.price}₺</p>
      </div>
    </div>
  );
}

