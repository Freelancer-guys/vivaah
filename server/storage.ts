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

export const storage = new DatabaseStorage();
