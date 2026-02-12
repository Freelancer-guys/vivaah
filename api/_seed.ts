import { storage } from '../server/storage';

export async function ensureSeeded() {
  const existing = await storage.getWeddings();
  if (existing.length > 0) return;

  await storage.createWedding({
    title: "The Royal Rajvansh Wedding",
    couple: "Anish & Shweta",
    date: "March 15, 2024",
    location: "Umaid Bhawan Palace, Jodhpur",
    description:
      "A grand royal celebration at the iconic Umaid Bhawan Palace. This wedding featured a magnificent 500+ guest Baraat with gilded elephant processions, hand-painted mehendi designs, a Sangeet showcasing 12 classical dancers, and a reception dinner in the marble hall with custom-designed rangoli installations.",
    coverImage:
      "https://eventsweb.in/wp-content/uploads/2024/12/pexels-fotographiya-wedding-photography-823737813-29492598-1024x683.jpg",
    galleryImages: [
      "https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1537633552985-f06dc221d429?auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1519224537171-0ac100be4e67?auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1505826346881-53103b34b206?auto=format&fit=crop&q=80",
    ],
    featured: true,
  });

  await storage.createWedding({
    title: "Midnight at the Backwaters",
    couple: "Rohan & Meera",
    date: "November 8, 2023",
    location: "Kumarakom, Kerala",
    description:
      "An intimate celebration on the serene backwaters of Kerala. This 150-guest wedding blended Kerala's tropical elegance with modern minimalism.",
    coverImage: "https://i.ytimg.com/vi/DUnfSGCIbS8/hq720.jpg",
    galleryImages: [
      "https://images.unsplash.com/photo-1502933691298-84fc14542831?auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1519046904884-53103b34b206?auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1516634581007-f3e2b5b837ab?auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1474926069028-56623f02e42e?auto=format&fit=crop&q=80",
    ],
    featured: true,
  });

  await storage.createWedding({
    title: "The Great Gatsby Sangeet",
    couple: "Kabir & Rhea",
    date: "December 2, 2024",
    location: "The Taj Mahal Palace, Mumbai",
    description:
      "A Roaring Twenties-inspired Sangeet at Mumbai's iconic Taj Mahal Palace. This 400-guest extravaganza featured Art Deco elements blended with Indian motifs.",
    coverImage: "https://i.pinimg.com/236x/7c/b3/d3/7cb3d310c2ac1be68bc25b5ebdf8ad47.jpg",
    galleryImages: [
      "https://images.unsplash.com/photo-1511619917486-a01980e01a18?auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1519671482749-fd09be7ccebf?auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1506126613408-eca07ce68773?auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1519671482749-fd09be7ccebf?auto=format&fit=crop&q=80",
    ],
    featured: true,
  });
}

export default ensureSeeded;
