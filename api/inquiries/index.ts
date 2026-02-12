export default async function handler(req: any, res: any) {
  try {
    if (req.method === 'POST') {
      let body = req.body;
      if (typeof body === 'string') {
        try {
          body = JSON.parse(body);
        } catch (_) {
          return res.status(400).json({ message: 'Invalid JSON body' });
        }
      }
      return res.status(201).json({ success: true });
    }
    res.setHeader('Allow', 'POST');
    return res.status(405).end('Method Not Allowed');
  } catch (err: any) {
    return res.status(500).json({ message: 'Internal server error' });
  }
}
