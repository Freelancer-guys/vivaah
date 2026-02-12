type Service = any;

// Module-scoped singleton storage for services within /api/services
const servicesData: Service[] = [];

export function getServices() {
  return servicesData;
}

export async function ensureSeeded() {
  if (servicesData.length > 0) return;

  servicesData.push({
    id: 1,
    title: 'Full Service Planning',
    description: 'Comprehensive management from concept to execution. We handle every detail so you can enjoy your journey.',
    priceRange: 'From $8,000',
    image: 'https://images.unsplash.com/photo-1511795409834-ef04bbd61622?auto=format&fit=crop&q=80',
  });

  servicesData.push({
    id: 2,
    title: 'Partial Planning & Design',
    description: 'For couples who have the logistics down but need a design eye to bring their vision to life.',
    priceRange: 'From $4,500',
    image: 'https://images.unsplash.com/photo-1465495976277-4387d4b0b4c6?auto=format&fit=crop&q=80',
  });

  servicesData.push({
    id: 3,
    title: 'Day-of Coordination',
    description: 'Ensure your special day runs flawlessly. We take over the reins 30 days prior.',
    priceRange: 'From $2,500',
    image: 'https://images.unsplash.com/photo-1505932794465-14a56c20cc5d?auto=format&fit=crop&q=80',
  });
}
