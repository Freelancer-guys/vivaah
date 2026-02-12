export default async function handler(req: any, res: any) {
  try {
    const { default: ensureSeeded } = await import('../_seed');
    const { storage } = await import('../_storage');

    await ensureSeeded();

    if (req.method !== 'GET') {
      res.setHeader('Allow', 'GET');
      return res.status(405).end('Method Not Allowed');
    }

    const weddings = await storage.getWeddings();
    return res.status(200).json(weddings);
  } catch (err: any) {
    console.error('API /weddings error:', err);
    const stack = err?.stack || String(err);
    return res.status(500).json({ message: 'Internal server error', error: String(err?.message || err), stack });
  }
}
