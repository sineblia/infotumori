import Navbar from "./components/Navbar";

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
    <div className="bg-white">
      <Head>
        <title>Infotumori.it – {tumors.name}</title>
        <meta name="description" content={tumors.description.substring(0, 155)} />
        <meta property="og:title" content={tumors.name} />
        <meta property="og:description" content={tumors.description.substring(0, 155)} />
        <meta property="og:image" content="https://i.imgur.com/inXa95S.png" />
        <meta property="og:url" content={`https://infotumori.it/${tumors._id}`} />
        <meta name="twitter:card" content="https://i.imgur.com/inXa95S.png" />
      </Head>

      <Navbar />
      <div className="relative isolate px-6 pt-14 lg:px-8">
        <div
          className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
          aria-hidden="true"
        >
          <div
            className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
            style={{
              clipPath:
                "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
            }}
          />
        </div>

        <div className="mx-auto max-w-2xl py-32 sm:py-48 lg:py-56">
          <div className="">
            {/* <h1 className="text-xl font-bold tracking-tight text-gray-900 sm:text-6xl">
              {tumors.name}
            </h1> */}
            <div className="prose mt-10">
              <ReactMarkdown>{tumors.description}</ReactMarkdown>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
