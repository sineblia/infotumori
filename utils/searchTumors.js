
export async function searchTumors(query) {
    try {
      const response = await fetch('/api/tumors', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ query }),
      });
  
      if (!response.ok) {
        throw new Error('Errore nella richiesta di ricerca dei tumori');
      }
  
      const results = await response.json();
      return results;
    } catch (error) {
      console.error('Errore durante la ricerca:', error);
      throw error;
    }
  }
  