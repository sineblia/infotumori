import { connectToDatabase } from "../../utils/mongodb";

export default async (req, res) => {
  const { db } = await connectToDatabase();
  const { term } = req.query;

  if (!term) {
    res.status(200).json([]); // Restituisce un array vuoto se non c'è un termine di ricerca
    return;
  }

  const tumors = await db
    .collection("tumors") // Utilizza il nome corretto della collection
    .find({ name: { $regex: term, $options: "i" } })
    .toArray();

  console.log(tumors);

  res.json(tumors);
};
