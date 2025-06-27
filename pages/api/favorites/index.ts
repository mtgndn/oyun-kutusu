import type { NextApiRequest, NextApiResponse } from 'next';
import { getAuth } from '@clerk/nextjs/server';
import clientPromise from '@/lib/mongodb';
import { ObjectId } from 'mongodb';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const { userId } = getAuth(req);

  if (!userId) {
    return res.status(401).json({ message: 'Giriş yapılmamış' });
  }

  const client = await clientPromise;
  const db = client.db('oyunkutusu');
  const favoritesCollection = db.collection('favorites');

  if (req.method === 'GET') {
    // Kullanıcının favori ürünlerinin productId listesi
    const fav = await favoritesCollection.findOne({ userId });
    return res.status(200).json(fav?.productIds || []);
  }

  if (req.method === 'POST') {
    const { productId } = req.body;
    if (!productId) {
      return res.status(400).json({ message: 'ProductId eksik' });
    }

    // Favorilere ekle (aynı ürünü iki kere eklememek için $addToSet kullan)
    await favoritesCollection.updateOne(
      { userId },
      { $addToSet: { productIds: productId } },
      { upsert: true }
    );

    return res.status(200).json({ message: 'Favorilere eklendi' });
  }

  res.setHeader('Allow', ['GET', 'POST']);
  res.status(405).end(`Method ${req.method} Not Allowed`);
}
