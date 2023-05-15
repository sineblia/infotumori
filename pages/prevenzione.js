import Link from "next/link";
import React from "react";
import Navbar from "./components/Navbar";
import Head from "next/head";
    
const Prevenzione = () => {

    const fattori = [
        { id: 1, title: "🚭 Fumo", description: "Il fumo è uno dei fattori di rischio più significativi per molti tipi di cancro. Smettere di fumare può ridurre significativamente il rischio."},
        { id: 2, title: "🍷 Alcol", description: "L'abuso di alcol può aumentare il rischio di vari tipi di cancro. È consigliato limitare il consumo di alcol."},
        { id: 3, title: "🍎 Alimentazione", description: "Una dieta equilibrata ricca di frutta e verdura può aiutare a prevenire certi tipi di cancro."},
        { id: 4, title: "🏃‍♀️ Attività fisica", description: "L'attività fisica regolare può aiutare a prevenire il cancro mantenendo un peso sano."},
        { id: 5, title: "🥵 Esposizione al sole", description: "Proteggersi dal sole può prevenire il cancro della pelle."},
        { id: 6, title: "🩺 Esami di screening", description: "Gli screening oncologici sono fondamentale per individuare precocemente i tumori o loro precursori."},
    ];

    const risorse = [
        { id: 1, title: "ISS - Istituto Superiore di Sanità", url: "https://www.iss.it/" },
        { id: 2, title: "AIRC – Associazione Italiana per la Ricerca sul Cancro", url: "https://www.airc.it/" },
        { id: 3, title: "Fondazione Umberto Veronesi", url: "https://www.fondazioneveronesi.it/" },
        { id: 4, title: "AIOM – Associazione Italiana Oncologia Medica", url: "https://www.aiom.it/" },
    ];


  return (
    <div className="bg-white">
      <Head>
        <title>Infotumori.it – Prevenzione</title>
        <meta
          name="description"
          content="Informati su come prevenire il cancro."
        />
        <meta property="og:title" content="Infotumori.it – Prevenzione" />
        <meta
          property="og:description"
          content="Informati su come prevenire il cancro."
        />
        <meta property="og:image" content="https://i.imgur.com/inXa95S.png" />
        <meta property="og:url" content="https://infotumori.it/" />
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
          <div className="text-center">
            <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
              Prevenzione
            </h1>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              La prevenzione del cancro si basa su comportamenti che ci aiutano
              a diminuire il rischio di sviluppare tumori. Anche se non esiste
              un metodo infallibile per prevenire il cancro, alcune abitudini di
              vita possono ridurre significativamente le probabilità di
              ammalarsi.
            </p>

            <h2 className="mt-12 text-xl font-bold tracking-tight text-gray-900 sm:text-2xl">
              Fattori di rischio modificabili
            </h2>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              Ci sono molti fattori di rischio per il cancro che possiamo
              modificare:
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-12">
              {fattori.map((fattore) => (
                <div
                  key={fattore.id}
                  className="border border-gray-200 rounded-lg p-6"
                >
                  <h2 className="text-2xl font-semibold text-gray-700">
                    {fattore.title}
                  </h2>
                  <p className="mt-4 text-gray-600">{fattore.description}</p>
                </div>
              ))}
            </div>

            <h2 className="mt-12 text-xl font-bold tracking-tight text-gray-900 sm:text-2xl">
              Screening e controllo regolare
            </h2>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              La diagnosi precoce è fondamentale nella lotta contro il cancro.
              Alcuni tipi di cancro, come il cancro al seno e il cancro al
              colon, possono essere rilevati precocemente attraverso controlli
              regolari. Parla con il tuo medico per determinare quale screening
              potrebbe essere appropriato per te.
            </p>

            <h2 className="mt-12 text-xl font-bold tracking-tight text-gray-900 sm:text-2xl">
              Prevenzione specifica del cancro
            </h2>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              Ogni tipo di cancro ha specifiche misure preventive. Ad esempio,
              per prevenire il cancro della pelle, è importante proteggersi dal
              sole e dai raggi UV. Per prevenire il cancro al polmone, è
              fondamentale smettere di fumare. Visita le singole pagine dei vari
              tipi di cancro sul nostro sito per ottenere informazioni più
              dettagliate.
            </p>

            <h2 className="mt-12 text-xl font-bold tracking-tight text-gray-900 sm:text-2xl">
              Risorse aggiuntive
            </h2>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              Per ulteriori informazioni sulla prevenzione del cancro, consulta
              le seguenti risorse:
            </p>

            <ul className="mt-6 text-lg leading-8 underline text-blue-600 list-disc pl-5">
              {risorse.map((risorsa) => (
                <li key={risorsa.id}>
                  <Link
                    href={risorsa.url}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {risorsa.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Prevenzione;
