import type { Express } from "express";
import type { Server } from "http";
import { storage } from "./storage";
import { api } from "@shared/routes";
import { z } from "zod";

export async function registerRoutes(
  httpServer: Server,
  app: Express
): Promise<Server> {
  
  app.get(api.weddings.list.path, async (req, res) => {
    const weddings = await storage.getWeddings();
    res.json(weddings);
  });

  app.get(api.weddings.get.path, async (req, res) => {
    const wedding = await storage.getWedding(Number(req.params.id));
    if (!wedding) {
      return res.status(404).json({ message: 'Wedding not found' });
    }
    res.json(wedding);
  });

  app.get(api.services.list.path, async (req, res) => {
    const services = await storage.getServices();
    res.json(services);
  });

  app.post(api.inquiries.create.path, async (req, res) => {
    try {
      const input = api.inquiries.create.input.parse(req.body);
      await storage.createInquiry(input);
      res.status(201).json({ success: true, message: "Inquiry received" });
    } catch (err) {
      if (err instanceof z.ZodError) {
        res.status(400).json({
          message: err.errors[0].message,
          field: err.errors[0].path.join('.'),
        });
      } else {
        res.status(500).json({ message: "Internal server error" });
      }
    }
  });

  // Seed data if empty
  seedDatabase();

  return httpServer;
}

async function seedDatabase() {
  const existingWeddings = await storage.getWeddings();
  if (existingWeddings.length === 0) {
    await storage.createWedding({
      title: "Coastal Elegance",
      couple: "Elena & Marcus",
      date: "August 12, 2023",
      location: "Amalfi Coast, Italy",
      description: "A breathtaking celebration overlooking the Tyrrhenian Sea, featuring white roses, gold accents, and a sunset reception.",
      coverImage: "https://images.unsplash.com/photo-1519225421980-715cb0202128?auto=format&fit=crop&q=80",
      galleryImages: [
        "https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&q=80",
        "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?auto=format&fit=crop&q=80",
        "https://images.unsplash.com/photo-1520854221256-17451cc330e7?auto=format&fit=crop&q=80"
      ],
      featured: true
    });

    await storage.createWedding({
      title: "Urban Chic",
      couple: "Sarah & David",
      date: "October 5, 2023",
      location: "New York City, NY",
      description: "Modern minimalist wedding in a loft space with industrial details and candlelight.",
      coverImage: "https://images.unsplash.com/photo-1511285560982-1351cdeb9821?auto=format&fit=crop&q=80",
      galleryImages: [
        "https://images.unsplash.com/photo-1522673607200-1645062cd958?auto=format&fit=crop&q=80",
        "https://images.unsplash.com/photo-1515934751635-c81c6bc9a2d8?auto=format&fit=crop&q=80"
      ],
      featured: true
    });

    await storage.createWedding({
      title: "Garden Romance",
      couple: "James & Olivia",
      date: "June 20, 2023",
      location: "Provence, France",
      description: "An intimate gathering amidst lavender fields and ancient olive trees.",
      coverImage: "https://images.unsplash.com/photo-1469334031218-e382a71b716b?auto=format&fit=crop&q=80",
      galleryImages: [
        "https://images.unsplash.com/photo-1524824267900-2fa9a06e9048?auto=format&fit=crop&q=80",
        "https://images.unsplash.com/photo-1532712938310-34cb3982ef74?auto=format&fit=crop&q=80"
      ],
      featured: true
    });
  }

  const existingServices = await storage.getServices();
  if (existingServices.length === 0) {
    await storage.createService({
      title: "Full Service Planning",
      description: "Comprehensive management from concept to execution. We handle every detail so you can enjoy your journey.",
      priceRange: "From $8,000",
      image: "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?auto=format&fit=crop&q=80"
    });
    await storage.createService({
      title: "Partial Planning & Design",
      description: "For couples who have the logistics down but need a design eye to bring their vision to life.",
      priceRange: "From $4,500",
      image: "https://images.unsplash.com/photo-1465495976277-4387d4b0b4c6?auto=format&fit=crop&q=80"
    });
    await storage.createService({
      title: "Day-of Coordination",
      description: "Ensure your special day runs flawlessly. We take over the reins 30 days prior.",
      priceRange: "From $2,500",
      image: "https://images.unsplash.com/photo-1505932794465-14a56c20cc5d?auto=format&fit=crop&q=80"
    });
  }
}
