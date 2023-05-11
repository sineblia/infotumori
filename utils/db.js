import { MongoClient } from 'mongodb';

const uri = process.env.MONGODB_URI;
const dbName = 'Cluster0';

let cachedClient = null;

export async function connectToDatabase() {
  if (cachedClient && cachedClient.isConnected()) {
    return cachedClient;
  }

  const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });

  try {
    await client.connect();
    cachedClient = client;
    return client;
  } catch (error) {
    console.error('Error connecting to the database:', error);
    throw error;
  }
}

export function getTumorsCollection(client) {
  const db = client.db(dbName);
  return db.collection('Cluster0');
}
