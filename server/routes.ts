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
      title: "The Royal Rajvansh Wedding",
      couple: "Anish & Shweta",
      date: "March 15, 2024",
      location: "Umaid Bhawan Palace, Jodhpur",
      description: "A grand royal celebration at the iconic Umaid Bhawan Palace. This wedding featured a magnificent 500+ guest Baraat with gilded elephant processions, hand-painted mehendi designs, a Sangeet showcasing 12 classical dancers, and a reception dinner in the marble hall with custom-designed rangoli installations. The couple exchanged vows under a floral mandap adorned with marigolds and jasmine, with the setting sun painting the desert gold.",
      coverImage: "https://eventsweb.in/wp-content/uploads/2024/12/pexels-fotographiya-wedding-photography-823737813-29492598-1024x683.jpg",
      galleryImages: [
        "https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&q=80",
        "https://images.unsplash.com/photo-1537633552985-f06dc221d429?auto=format&fit=crop&q=80",
        "https://images.unsplash.com/photo-1519224537171-0ac100be4e67?auto=format&fit=crop&q=80",
        "https://images.unsplash.com/photo-1505826346881-53103b34b206?auto=format&fit=crop&q=80"
      ],
      featured: true
    });

    await storage.createWedding({
      title: "Midnight at the Backwaters",
      couple: "Rohan & Meera",
      date: "November 8, 2023",
      location: "Kumarakom, Kerala",
      description: "An intimate celebration on the serene backwaters of Kerala. This 150-guest wedding blended Kerala's tropical elegance with modern minimalism. The mehendi was held on a houseboat with live Kathakali performers, the Sangeet featured sunset views over the lagoon, and the main ceremony took place in a custom pavilion with water reflections. The reception dinner was a curated Kerala feast with fresh seafood and spices, set against the gentle lap of water and the glow of lanterns.",
      coverImage: "https://i.ytimg.com/vi/DUnfSGCIbS8/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLDfqCCS6lZR1628w8azPyED-fbF7A",
      galleryImages: [
        "https://images.unsplash.com/photo-1502933691298-84fc14542831?auto=format&fit=crop&q=80",
        "https://images.unsplash.com/photo-1519046904884-53103b34b206?auto=format&fit=crop&q=80",
        "https://images.unsplash.com/photo-1516634581007-f3e2b5b837ab?auto=format&fit=crop&q=80",
        "https://images.unsplash.com/photo-1474926069028-56623f02e42e?auto=format&fit=crop&q=80"
      ],
      featured: true
    });

    await storage.createWedding({
      title: "The Great Gatsby Sangeet",
      couple: "Kabir & Rhea",
      date: "December 2, 2024",
      location: "The Taj Mahal Palace, Mumbai",
      description: "A Roaring Twenties-inspired Sangeet at Mumbai's iconic Taj Mahal Palace. This 400-guest extravaganza featured Art Deco elements blended with Indian motifs, a live jazz band performing Sufi-jazz fusion, 15 choreographed performances by Bollywood dancers, and a champagne-gold color palette. The mandap was designed as a vintage cinema stage with golden accents, the dance floor was backlit with amber lighting, and the evening culminated in a grand fireworks display overlooking the Arabian Sea.",
      coverImage: "https://i.pinimg.com/236x/7c/b3/d3/7cb3d310c2ac1be68bc25b5ebdf8ad47.jpg",
      galleryImages: [
        "https://images.unsplash.com/photo-1511619917486-a01980e01a18?auto=format&fit=crop&q=80",
        "https://images.unsplash.com/photo-1519671482749-fd09be7ccebf?auto=format&fit=crop&q=80",
        "https://images.unsplash.com/photo-1506126613408-eca07ce68773?auto=format&fit=crop&q=80",
        "https://images.unsplash.com/photo-1519671482749-fd09be7ccebf?auto=format&fit=crop&q=80"
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
