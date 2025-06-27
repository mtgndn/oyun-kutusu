import type { NextApiRequest, NextApiResponse } from 'next';
import clientPromise from '@/lib/mongodb';
import { ObjectId } from 'mongodb';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') {
    res.setHeader('Allow', 'POST');
    return res.status(405).end('Method Not Allowed');
  }

  const { ids } = req.body;
  if (!Array.isArray(ids)) {
    return res.status(400).json({ message: 'ids must be an array' });
  }

  const client = await clientPromise;
  const db = client.db('oyunkutusu');
  const products = await db
    .collection('products')
    .find({ _id: { $in: ids.map((id: string) => new ObjectId(id)) } })
    .toArray();

  return res.status(200).json(products);
}
