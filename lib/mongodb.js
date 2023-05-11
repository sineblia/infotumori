const { MongoClient, ServerApiVersion } = require('mongodb');
const dotenv = require('dotenv');

dotenv.config();

const uri = "mongodb+srv://infotumoriweb:aY3QM1FLE9t8FptW@cluster0.cfen8zp.mongodb.net/?retryWrites=true&w=majority";
const dbName = "Cluster0";

let cachedClient = null;
let cachedDb = null;

module.exports.connectToDatabase = async function() {
  if (cachedClient && cachedDb) {
    return { client: cachedClient, db: cachedDb };
  }

  const client = new MongoClient(uri, {
    serverApi: {
      version: ServerApiVersion.v1,
      strict: true,
      deprecationErrors: true,
    },
  });

  const db = client.db(dbName);

  cachedClient = client;
  cachedDb = db;

  return { client, db };
}
