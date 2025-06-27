import { GetServerSideProps } from 'next';
import Head from 'next/head';
import Image from 'next/image';
import clientPromise from '@/lib/mongodb';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import '../../styles/globals.css';

interface ProductProps {
  product: {
    _id: string;
    title: string;
    price: number;
    platform: string;
    category: string;
    language: string;
    image: string;
  };
}

export default function ProductDetail({ product }: ProductProps) {
  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-100">
        <p className="text-xl font-semibold">Ürün bulunamadı.</p>
      </div>
    );
  }

  return (
    <>
      <Head>
        <title>{product.title} | Oyun Kutusu</title>
      </Head>

      <Navbar />

      <main className="text-black min-h-screen bg-gradient-to-br from-purple-100 to-indigo-100 py-12 px-4">
        <div className="max-w-5xl mx-auto bg-white rounded-xl shadow-lg p-6 flex flex-col lg:flex-row gap-8">
          <div className="w-full lg:w-1/2 relative aspect-[4/3]">
            <Image
              src={product.image}
              alt={product.title}
              fill
              className="rounded-lg object-contain"
            />
          </div>

          <div className="w-full lg:w-1/2">
            <h1 className="text-3xl font-bold mb-4">{product.title}</h1>
            <ul className="space-y-2 text-gray-700">
              <li><span className="font-semibold">Kategori:</span> {product.category}</li>
              <li><span className="font-semibold">Platform:</span> {product.platform}</li>
              <li><span className="font-semibold">Dil:</span> {product.language}</li>
            </ul>

            <p className="text-2xl font-bold text-purple-600 mt-6">{product.price} ₺</p>

            <button className="mt-6 bg-purple-600 hover:bg-purple-700 text-white px-5 py-2 rounded-lg transition">
              Satın Al
            </button>
          </div>
        </div>
      </main>

      <Footer />
    </>
  );
}

export const getServerSideProps: GetServerSideProps = async (context) => {
  const id = context.params?.id;

  try {
    const client = await clientPromise;
    const db = client.db('oyunkutusu');
    const product = await db
      .collection('products')
      .findOne({ _id: new (require('mongodb').ObjectId)(id) });

    if (!product) {
      return { notFound: true };
    }

    return {
      props: {
        product: JSON.parse(JSON.stringify(product)),
      },
    };
  } catch (error) {
    console.error('Hata:', error);
    return { notFound: true };
  }
};
