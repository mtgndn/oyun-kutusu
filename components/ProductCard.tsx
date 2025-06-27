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
  isFavorite: boolean;
  onToggleFavorite: (productId: string) => void;
}

const exchangeRates = {
  TRY: 1,
  USD: 0.032,
  EUR: 0.029,
};

const currencySymbols = {
  TRY: '₺',
  USD: '$',
  EUR: '€',
};

export default function ProductCard({
  product,
  selectedCurrency,
  isFavorite,
  onToggleFavorite,
}: ProductCardProps) {
  const convertedPrice = Math.round(product.price * exchangeRates[selectedCurrency]);
  const symbol = currencySymbols[selectedCurrency];

  const handleFavoriteClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    e.stopPropagation();
    onToggleFavorite(product._id);
  };

  return (
    <div className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-lg hover:scale-[1.02] transition-all duration-300 group cursor-pointer">
      <Link href={`/product/${product._id}`} legacyBehavior>
        <a className="block relative aspect-[3/4]">
          <Image
            src={product.image}
            alt={product.title}
            layout="fill"
            objectFit="cover"
            unoptimized
            className="group-hover:brightness-90 transition"
          />
        </a>
      </Link>
      <div className="p-4">
        <h2 className="text-lg font-semibold mb-1 truncate">{product.title}</h2>
        <p className="text-sm text-gray-600 mb-2">
          {product.platform} | {product.language}
        </p>
        <div className="flex justify-between items-center">
          <span className="text-xl font-bold text-yellow-600">
            {convertedPrice} {symbol}
          </span>
          <div className="flex items-center space-x-2">
            <button
              className="bg-yellow-500 text-white px-3 py-1 rounded hover:bg-yellow-600 transition text-sm"
              onClick={(e) => e.preventDefault()}
              aria-label="Satın Al"
              title="Satın Al"
            >
              Satın Al
            </button>
            <button
              onClick={handleFavoriteClick}
              aria-label={isFavorite ? 'Favorilerden çıkar' : 'Favorilere ekle'}
              className={`text-2xl transition-colors ${
                isFavorite ? 'text-red-500' : 'text-gray-400 hover:text-red-500'
              }`}
              title={isFavorite ? 'Favorilerden çıkar' : 'Favorilere ekle'}
            >
              ♥
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
