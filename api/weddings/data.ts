type Wedding = any;

// Module-scoped singleton storage for weddings within /api/weddings
const weddingsData: Wedding[] = [];

export function getWeddings() {
  return weddingsData;
}

export function getWedding(id: number) {
  return weddingsData.find((w) => w.id === id);
}

export async function ensureSeeded() {
  if (weddingsData.length > 0) return;

  weddingsData.push({
    id: 1,
    title: 'The Royal Rajvansh Wedding',
    couple: 'Anish & Shweta',
    date: 'March 15, 2024',
    location: 'Umaid Bhawan Palace, Jodhpur',
    description:
      'A grand royal celebration at the iconic Umaid Bhawan Palace. This wedding featured a magnificent 500+ guest Baraat with gilded elephant processions, hand-painted mehendi designs, and a reception in the marble hall.',
    coverImage:
      'https://images.unsplash.com/photo-1583939003579-730e3918a45a?auto=format&fit=crop&q=80&w=1200',
    galleryImages: [
      'https://images.unsplash.com/photo-1610030469983-98e550d6193c?auto=format&fit=crop&q=80&w=1000',
      'https://images.unsplash.com/photo-1583939003579-730e3918a45a?auto=format&fit=crop&q=80&w=1000',
      'https://images.unsplash.com/photo-1544078751-58fee2d8a03b?auto=format&fit=crop&q=80&w=1000',
      'https://images.unsplash.com/photo-1519167758481-83f550bb49b3?auto=format&fit=crop&q=80&w=1000'
    ],
    featured: true,
  });

  weddingsData.push({
    id: 2,
    title: 'Midnight at the Backwaters',
    couple: 'Rohan & Meera',
    date: 'November 8, 2023',
    location: 'Kumarakom, Kerala',
    description: 'An intimate celebration on the serene backwaters of Kerala with tropical elegance and traditional rituals.',
    coverImage: 'https://images.unsplash.com/photo-1520854221256-17451cc331bf?auto=format&fit=crop&q=80&w=1200',
    galleryImages: [
      'https://images.unsplash.com/photo-1520854221256-17451cc331bf?auto=format&fit=crop&q=80&w=1000',
      'https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&q=80&w=1000',
      'https://images.unsplash.com/photo-1511795409834-ef04bbd61622?auto=format&fit=crop&q=80&w=1000',
      'https://images.unsplash.com/photo-1583939003579-730e3918a45a?auto=format&fit=crop&q=80&w=1000'
    ],
    featured: true,
  });

  weddingsData.push({
    id: 3,
    title: 'The Great Gatsby Sangeet',
    couple: 'Kabir & Rhea',
    date: 'December 2, 2024',
    location: 'The Taj Mahal Palace, Mumbai',
    description: 'A Roaring Twenties-inspired Sangeet at Mumbai\'s iconic Taj Mahal Palace with Sufi-jazz performances.',
    coverImage: 'https://images.unsplash.com/photo-1519225421980-715cb0215aed?auto=format&fit=crop&q=80&w=1200',
    galleryImages: [
      'https://images.unsplash.com/photo-1610030469983-98e550d6193c?auto=format&fit=crop&q=80&w=1000',
      'https://images.unsplash.com/photo-1519167758481-83f550bb49b3?auto=format&fit=crop&q=80&w=1000',
      'https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&q=80&w=1000',
      'https://images.unsplash.com/photo-1583939003579-730e3918a45a?auto=format&fit=crop&q=80&w=1000'
    ],
    featured: true,
  });
}
