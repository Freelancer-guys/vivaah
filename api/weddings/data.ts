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
      'https://eventsweb.in/wp-content/uploads/2024/12/pexels-fotographiya-wedding-photography-823737813-29492598-1024x683.jpg',
    galleryImages: [],
    featured: true,
  });

  weddingsData.push({
    id: 2,
    title: 'Midnight at the Backwaters',
    couple: 'Rohan & Meera',
    date: 'November 8, 2023',
    location: 'Kumarakom, Kerala',
    description: 'An intimate celebration on the serene backwaters of Kerala.',
    coverImage: 'https://i.ytimg.com/vi/DUnfSGCIbS8/hq720.jpg',
    galleryImages: [],
    featured: true,
  });

  weddingsData.push({
    id: 3,
    title: 'The Great Gatsby Sangeet',
    couple: 'Kabir & Rhea',
    date: 'December 2, 2024',
    location: 'The Taj Mahal Palace, Mumbai',
    description: 'A Roaring Twenties-inspired Sangeet at Mumbai\'s iconic Taj Mahal Palace.',
    coverImage: 'https://i.pinimg.com/236x/7c/b3/d3/7cb3d310c2ac1be68bc25b5ebdf8ad47.jpg',
    galleryImages: [],
    featured: true,
  });
}
