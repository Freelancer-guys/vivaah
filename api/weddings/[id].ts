import ensureSeeded from '../_seed';
import { storage } from '../_storage';

export default async function handler(req: any, res: any) {
  try {
    await ensureSeeded();

    if (req.method !== 'GET') {
      res.setHeader('Allow', 'GET');
      return res.status(405).end('Method Not Allowed');
    }

    const id = Array.isArray(req.query?.id) ? req.query.id[0] : req.query?.id;
    const num = Number(id);
    if (Number.isNaN(num)) {
      return res.status(400).json({ message: 'Invalid id' });
    }

    const wedding = await storage.getWedding(num);
    if (!wedding) return res.status(404).json({ message: 'Wedding not found' });
    return res.status(200).json(wedding);
  } catch (err: any) {
    console.error('API /weddings/[id] error:', err);
    return res.status(500).json({ message: 'Internal server error' });
  }
}
