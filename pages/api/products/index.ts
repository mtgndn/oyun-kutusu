import type { NextApiRequest, NextApiResponse } from 'next';
import clientPromise from '@/lib/mongodb';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const client = await clientPromise;
  const db = client.db('oyunkutusu');

  const { category, platform, language, minPrice, maxPrice } = req.query;

  const query: any = {};

  if (category) query.category = category;
  if (platform) query.platform = platform;
  if (language) query.language = language;

  // Fiyat aralığı filtreleme
  if (minPrice || maxPrice) {
    query.price = {};
    if (minPrice) query.price.$gte = parseFloat(minPrice as string);
    if (maxPrice) query.price.$lte = parseFloat(maxPrice as string);
  }

  const products = await db.collection('products')
    .find(query)
    .sort({ title: 1 }) // İstersen alfabetik sırala
    .toArray();

  res.status(200).json(products);
}
