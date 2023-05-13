import { connectToDatabase } from "../../utils/mongodb";

export default async (req, res) => {
  const { db } = await connectToDatabase();
  const { term } = req.query;

  if (!term) {
    res.status(200).json([]); // Restituisce un array vuoto se non c'è un termine di ricerca
    return;
  }

  const tumori = await db
    .collection("Tumori") // Corretto il nome della collezione
    .aggregate([
      {
        $search: {
          index: 'default',
          text: {
            query: term,
            path: ['nome', 'descrizione'],  // i campi su cui eseguire la ricerca
          },
        },
      },
    ])
    .toArray();

  res.json(tumori);
};
