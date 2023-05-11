const dotenv = require("dotenv");

dotenv.config();

const client = require("./lib/elasticsearch");
const { connectToDatabase } = require("./lib/mongodb");

async function createIndex() {
  // Connetti a MongoDB e recupera i dati dei tumori
  const { db } = await connectToDatabase();
  const tumors = await db.collection('tumors').find().toArray();

  // Crea l'indice Elasticsearch
  const indexName = 'tumors';

  // Verifica se l'indice esiste già
  const indexExists = await client.indices.existsAlias({ name: indexName });

  // Se l'indice esiste, eliminalo
  if (indexExists.body) {
    await client.indices.delete({ index: indexName });
  }

  // Crea un nuovo indice
  await client.indices.create({ index: indexName });

  // Inserisci i dati dei tumori nell'indice
  const body = tumors.flatMap((tumor) => [
    { index: { _index: indexName, _id: tumor._id.toString() } },
    tumor,
  ]);

  await client.bulk({ refresh: true, body });
}

createIndex()
  .then(() => console.log("Indice creato con successo"))
  .catch((error) =>
    console.error("Errore nella creazione dell'indice:", error)
  );
