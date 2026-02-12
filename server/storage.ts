import { db } from "./db";
import {
  weddings,
  services,
  inquiries,
  type InsertWedding,
  type InsertService,
  type InsertInquiry,
  type Wedding,
  type Service,
  type Inquiry
} from "@shared/schema";
import { eq } from "drizzle-orm";

export interface IStorage {
  getWeddings(): Promise<Wedding[]>;
  getWedding(id: number): Promise<Wedding | undefined>;
  createWedding(wedding: InsertWedding): Promise<Wedding>;
  
  getServices(): Promise<Service[]>;
  createService(service: InsertService): Promise<Service>;
  
  createInquiry(inquiry: InsertInquiry): Promise<Inquiry>;
}

class MemoryStorage implements IStorage {
  private weddingId = 1;
  private serviceId = 1;
  private inquiryId = 1;
  private weddingsData: Wedding[] = [];
  private servicesData: Service[] = [];
  private inquiriesData: Inquiry[] = [];

  async getWeddings(): Promise<Wedding[]> {
    return this.weddingsData;
  }

  async getWedding(id: number): Promise<Wedding | undefined> {
    return this.weddingsData.find(w => w.id === id);
  }

  async createWedding(wedding: InsertWedding): Promise<Wedding> {
    const newWedding: Wedding = { ...wedding, id: this.weddingId++ } as Wedding;
    this.weddingsData.push(newWedding);
    return newWedding;
  }

  async getServices(): Promise<Service[]> {
    return this.servicesData;
  }

  async createService(service: InsertService): Promise<Service> {
    const newService: Service = { ...service, id: this.serviceId++ } as Service;
    this.servicesData.push(newService);
    return newService;
  }

  async createInquiry(inquiry: InsertInquiry): Promise<Inquiry> {
    const newInquiry: Inquiry = { ...inquiry, id: this.inquiryId++ } as Inquiry;
    this.inquiriesData.push(newInquiry);
    console.log("Inquiry received:", newInquiry);
    return newInquiry;
  }
}

export class DatabaseStorage implements IStorage {
  async getWeddings(): Promise<Wedding[]> {
    return await db.select().from(weddings);
  }

  async getWedding(id: number): Promise<Wedding | undefined> {
    const [wedding] = await db.select().from(weddings).where(eq(weddings.id, id));
    return wedding;
  }

  async createWedding(wedding: InsertWedding): Promise<Wedding> {
    const [newWedding] = await db.insert(weddings).values(wedding).returning();
    return newWedding;
  }

  async getServices(): Promise<Service[]> {
    return await db.select().from(services);
  }

  async createService(service: InsertService): Promise<Service> {
    const [newService] = await db.insert(services).values(service).returning();
    return newService;
  }

  async createInquiry(inquiry: InsertInquiry): Promise<Inquiry> {
    const [newInquiry] = await db.insert(inquiries).values(inquiry).returning();
    return newInquiry;
  }
}

// Use MemoryStorage - database disabled for now
export const storage = new MemoryStorage();
