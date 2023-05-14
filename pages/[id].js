import { connectToDatabase } from "../utils/mongodb";
import { ObjectId } from "mongodb";
import ReactMarkdown from "react-markdown";

export async function getServerSideProps(context) {
  const { db } = await connectToDatabase();
  const { id } = context.params;

  const tumors = await db
    .collection("tumors")
    .findOne({ _id: new ObjectId(id) });

  if (!tumors) {
    return {
      notFound: true,
    };
  }

  return {
    props: { tumors: JSON.parse(JSON.stringify(tumors)) }, // Si utilizza JSON.parse(JSON.stringify()) per convertire il documento MongoDB in un oggetto JavaScript puro
  };
}

export default function tumorsPage({ tumors }) {
  return (
    <div>
      <h1>{tumors.name}</h1>
      <ReactMarkdown>{tumors.description}</ReactMarkdown>
    </div>
  );
}
