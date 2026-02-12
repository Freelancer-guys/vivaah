const services = [
  {
    id: 1,
    title: 'Full Service Planning',
    description: 'Comprehensive management from concept to execution.',
    priceRange: 'From $8,000',
    image: 'https://images.unsplash.com/photo-1511795409834-ef04bbd61622?auto=format&fit=crop&q=80',
  },
  {
    id: 2,
    title: 'Partial Planning & Design',
    description: 'For couples who have the logistics down but need a design eye.',
    priceRange: 'From $4,500',
    image: 'https://images.unsplash.com/photo-1465495976277-4387d4b0b4c6?auto=format&fit=crop&q=80',
  },
  {
    id: 3,
    title: 'Day-of Coordination',
    description: 'Ensure your special day runs flawlessly.',
    priceRange: 'From $2,500',
    image: 'https://images.unsplash.com/photo-1505932794465-14a56c20cc5d?auto=format&fit=crop&q=80',
  },
];

export default async function handler(req: any, res: any) {
  try {
    if (req.method !== 'GET') {
      res.setHeader('Allow', 'GET');
      return res.status(405).end('Method Not Allowed');
    }
    return res.status(200).json(services);
  } catch (err: any) {
    return res.status(500).json({ message: 'Internal server error' });
  }
}
