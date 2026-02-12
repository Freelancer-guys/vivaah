type Wedding = any;
type Service = any;
type Inquiry = any;

class MemoryStorageLite {
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
    return this.weddingsData.find((w) => w.id === id);
  }

  async createWedding(wedding: any): Promise<Wedding> {
    const newWedding = { ...wedding, id: this.weddingId++ } as Wedding;
    this.weddingsData.push(newWedding);
    return newWedding;
  }

  async getServices(): Promise<Service[]> {
    return this.servicesData;
  }

  async createService(service: any): Promise<Service> {
    const newService = { ...service, id: this.serviceId++ } as Service;
    this.servicesData.push(newService);
    return newService;
  }

  async createInquiry(inquiry: any): Promise<Inquiry> {
    const newInquiry = { ...inquiry, id: this.inquiryId++ } as Inquiry;
    this.inquiriesData.push(newInquiry);
    return newInquiry;
  }
}

export const storage = new MemoryStorageLite();
