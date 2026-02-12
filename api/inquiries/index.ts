import ensureSeeded from '../_seed';
import { storage } from '../_storage';

export default async function handler(req: any, res: any) {
  try {
    await ensureSeeded();

    if (req.method === 'POST') {
      let body = req.body;
      if (typeof body === 'string') {
        try {
          body = JSON.parse(body);
        } catch (_) {
          return res.status(400).json({ message: 'Invalid JSON body' });
        }
      }

      const inquiry = await storage.createInquiry(body);
      return res.status(201).json({ success: true, inquiry });
    }

    res.setHeader('Allow', 'POST');
    return res.status(405).end('Method Not Allowed');
  } catch (err: any) {
    console.error('API /inquiries error:', err);
    const stack = err?.stack || String(err);
    return res.status(500).json({ message: 'Internal server error', error: String(err?.message || err), stack });
  }
}
