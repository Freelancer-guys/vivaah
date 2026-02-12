import { getWeddings, ensureSeeded } from './data';

export default async function handler(req: any, res: any) {
  try {
    await ensureSeeded();

    if (req.method !== 'GET') {
      res.setHeader('Allow', 'GET');
      return res.status(405).end('Method Not Allowed');
    }

    const weddings = getWeddings();
    return res.status(200).json(weddings);
  } catch (err: any) {
    console.error('API /weddings error:', err);
    const stack = err?.stack || String(err);
    return res.status(500).json({ message: 'Internal server error', error: String(err?.message || err), stack });
  }
}
