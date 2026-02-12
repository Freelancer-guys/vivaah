import ensureSeeded from '../_seed';
import { storage } from '../_storage';

export default async function handler(req: any, res: any) {
  try {
    await ensureSeeded();

    if (req.method !== 'GET') {
      res.setHeader('Allow', 'GET');
      return res.status(405).end('Method Not Allowed');
    }

    const services = await storage.getServices();
    return res.status(200).json(services);
  } catch (err: any) {
    console.error('API /services error:', err);
    const stack = err?.stack || String(err);
    return res.status(500).json({ message: 'Internal server error', error: String(err?.message || err), stack });
  }
}
