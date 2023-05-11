import { searchTumors } from '../../utils/searchTumors';

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    res.status(405).json({ message: 'Metodo non consentito' });
    return;
  }

  const { query } = req.body;

  try {
    const results = await searchTumors(query);
    res.status(200).json(results);
  } catch (error) {
    console.error('Errore durante la ricerca dei tumori:', error);
    res.status(500).json({ message: 'Errore durante la ricerca dei tumori' });
  }
}
