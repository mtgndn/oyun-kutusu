import Image from 'next/image';

export default function ProductCard({ product }: { product: any }) {
  return (
    <div className="bg-white rounded-xl shadow p-4 w-full h-full flex flex-col items-center">
      <div className="relative w-full h-48 mb-2">
        <Image
          src={product.image}
          alt={product.title}
          layout="fill"
          objectFit="cover"
          className="rounded-lg"
          priority={true}
        />
      </div>
      <h3 className="text-lg font-semibold text-center">{product.title}</h3>
      <p className="text-gray-500 text-center">{product.platform} • {product.language}</p>
      <p className="text-blue-600 font-bold mt-2 text-center">{product.price}₺</p>
    </div>
  );
}
