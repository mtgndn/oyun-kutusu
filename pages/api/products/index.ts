import type { NextApiRequest, NextApiResponse } from 'next';
import clientPromise from '@/lib/mongodb';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const client = await clientPromise;
  const db = client.db('oyunkutusu');

  if (req.method === 'GET') {
    const { category, platform } = req.query;

    // Filtre objesi oluştur
    const query: any = {};
    if (category) query.category = category;
    if (platform) query.platform = platform;

    const products = await db.collection('products').find(query).toArray();
    res.status(200).json(products);

  } else if (req.method === 'POST') {
    const product = req.body;
    await db.collection('products').insertOne(product);
    res.status(201).json({ message: 'Product added' });
  } else {
    res.status(405).json({ message: 'Method not allowed' });
  }
}
