const weddings = [
  {
    id: 1,
    title: 'The Royal Rajvansh Wedding',
    couple: 'Anish & Shweta',
    date: 'March 15, 2024',
    location: 'Umaid Bhawan Palace, Jodhpur',
    description: 'A grand royal celebration at the iconic Umaid Bhawan Palace.',
    coverImage: 'https://eventsweb.in/wp-content/uploads/2024/12/pexels-fotographiya-wedding-photography-823737813-29492598-1024x683.jpg',
    galleryImages: [],
    featured: true,
  },
  {
    id: 2,
    title: 'Midnight at the Backwaters',
    couple: 'Rohan & Meera',
    date: 'November 8, 2023',
    location: 'Kumarakom, Kerala',
    description: 'An intimate celebration on the serene backwaters of Kerala.',
    coverImage: 'https://images.unsplash.com/photo-1502933691298-84fc14542831?auto=format&fit=crop&w=600&q=80',
    galleryImages: [],
    featured: true,
  },
  {
    id: 3,
    title: 'The Great Gatsby Sangeet',
    couple: 'Kabir & Rhea',
    date: 'December 2, 2024',
    location: 'The Taj Mahal Palace, Mumbai',
    description: 'A Roaring Twenties-inspired Sangeet at Mumbai\'s iconic Taj Mahal Palace.',
    coverImage: 'https://images.unsplash.com/photo-1511619917486-a01980e01a18?auto=format&fit=crop&w=600&q=80',
    galleryImages: [],
    featured: true,
  },
];

export default async function handler(req: any, res: any) {
  try {
    if (req.method !== 'GET') {
      res.setHeader('Allow', 'GET');
      return res.status(405).end('Method Not Allowed');
    }

    const id = Array.isArray(req.query?.id) ? req.query.id[0] : req.query?.id;
    const num = Number(id);
    if (Number.isNaN(num)) {
      return res.status(400).json({ message: 'Invalid id' });
    }

    const wedding = weddings.find((w) => w.id === num);
    if (!wedding) return res.status(404).json({ message: 'Wedding not found' });
    return res.status(200).json(wedding);
  } catch (err: any) {
    return res.status(500).json({ message: 'Internal server error' });
  }
}
