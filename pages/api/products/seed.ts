// pages/api/products/seed.ts
import type { NextApiRequest, NextApiResponse } from 'next';
import clientPromise from '@/lib/mongodb';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const client = await clientPromise;
  const db = client.db('oyunkutusu');

  // Önce var olan ürünleri temizle (opsiyonel, tekrarlanan eklemeyi önlemek için)
  await db.collection('products').deleteMany({});

  const products = [
    {
      title: "God of War: Ragnarok",
      price: 799,
      platform: "PS5",
      category: "Aksiyon",
      language: "Türkçe",
      image: "/images/godofwar.png"  // Yerel görsel yolu
    },
    {
      title: "Elden Ring",
      price: 699,
      platform: "PC",
      category: "RPG",
      language: "İngilizce",
      image: "/images/eldenring.jpg"  // Yerel görsel yolu
    },
    {
      title: "FIFA 23",
      price: 649,
      platform: "PS5",
      category: "Spor",
      language: "Türkçe",
      image: "/images/fifa23.png"
    },
    {
      title: "The Last of Us Part II",
      price: 749,
      platform: "PS5",
      category: "Aksiyon",
      language: "İngilizce",
      image: "/images/thelastofus2.jpg"
    },
    {
      title: "Cyberpunk 2077",
      price: 599,
      platform: "PC",
      category: "RPG",
      language: "İngilizce",
      image: "/images/cyberpunk2077.png"
    },
    {
      title: "Gran Turismo 7",
      price: 699,
      platform: "PS5",
      category: "Yarış",
      language: "Türkçe",
      image: "/images/granturismo7.jpg"
    },
    {
      title: "Hogwarts Legacy",
      price: 789,
      platform: "PC",
      category: "Macera",
      language: "İngilizce",
      image: "/images/hogwartslegacy.jpg"
    },
    {
      title: "Assassin's Creed Valhalla",
      price: 679,
      platform: "PC",
      category: "Aksiyon",
      language: "Türkçe",
      image: "/images/assassinscreedvalhalla.jpg"
    },
    {
      title: "Need for Speed Heat",
      price: 549,
      platform: "PC",
      category: "Yarış",
      language: "İngilizce",
      image: "/images/needforspeedheat.jpg"
    },
    {
      title: "Red Dead Redemption 2",
      price: 799,
      platform: "PS5",
      category: "Macera",
      language: "İngilizce",
      image: "/images/redeadredemption2.jpg"
    }
  ];

  await db.collection('products').insertMany(products);

  res.status(200).json({ message: '10 ürün başarıyla eklendi.' });
}
