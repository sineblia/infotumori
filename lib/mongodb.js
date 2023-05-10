import { MongoClient } from 'mongodb';


const MONGODB_URI = process.env.MONGODB_URI;
const MONGODB_DB = process.env.MONGODB_DB;

const client = new MongoClient(MONGODB_URI);

export async function connectToDatabase() {
  if (!client.isConnected()) await client.connect();

  const db = client.db(MONGODB_DB);
  return { client, db };
}
