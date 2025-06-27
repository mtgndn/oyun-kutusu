import Link from 'next/link';
import Image from 'next/image';

interface ProductCardProps {
  product: {
    _id: string;
    title: string;
    price: number;
    platform: string;
    category: string;
    language: string;
    image: string;
  };
  selectedCurrency: string;
}

const exchangeRates = {
  TRY: 1,
  USD: 0.032,
  EUR: 0.029,
};

const currencySymbols = {
  TRY: "₺",
  USD: "$",
  EUR: "€",
};

export default function ProductCard({ product, selectedCurrency }: ProductCardProps) {
  const convertedPrice = Math.round(product.price * exchangeRates[selectedCurrency]);
  const symbol = currencySymbols[selectedCurrency];

  return (
    <Link href={`/product/${product._id}`}>
      <div className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-lg hover:scale-[1.02] transition-all duration-300 group cursor-pointer">
        <div className="aspect-[3/4] relative">
          <Image
            src={product.image}
            alt={product.title}
            layout="fill"
            objectFit="cover"
            unoptimized
            className="group-hover:brightness-90 transition"
          />
        </div>
        <div className="p-4">
          <h2 className="text-lg font-semibold mb-1 truncate">{product.title}</h2>
          <p className="text-sm text-gray-600 mb-2">
            {product.platform} | {product.language}
          </p>
          <div className="flex justify-between items-center">
            <span className="text-xl font-bold text-yellow-600">
              {convertedPrice} {symbol}
            </span>
            <button
              className="bg-yellow-500 text-white px-3 py-1 rounded hover:bg-yellow-600 transition text-sm"
              onClick={(e) => e.preventDefault()} // Link tıklanmasını engelle
            >
              Satın Al
            </button>
          </div>
        </div>
      </div>
    </Link>
  );
}
