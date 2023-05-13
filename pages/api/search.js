// pages/api/search.js
import { connectToDatabase } from "../../utils/mongodb";

export default async (req, res) => {
  const { db } = await connectToDatabase();
  const { term } = req.query;

  const tumori = await db
    .collection("tumori")
    .find({ $text: { $search: term } })
    .toArray();

  res.json(tumori);
};
