import Link from "next/link";
import React from "react";
import Navbar from "./components/Navbar";

const About = () => {
  return (
    <div className="bg-white">
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
              Su Infotumori: da chi è stato realizzato e perché
            </h1>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              Infotumori è un progetto che nasce dall'impegno e sforzo
              individuale del sottoscritto,{" "}
              <Link
                href="https://www.simonebellavia.com"
                target="_blank"
                className="underline text-blue-600"
                rel="noopener noreferrer"
              >
                Simone Bellavia
              </Link>
              . Senza alcuna finalità di lucro, intende essere un supporto
              valido, intuitivo, facile da utilizzare, per chi vuole informarsi
              sul cancro, per chi vuole prevenirlo e, in futuro, per chi vuole
              trattarlo. Il mio veicolo è la passione e un'ardente motivazione
              ad aiutare il prossimo.
            </p>

            <h2 className="mt-12 text-xl font-bold tracking-tight text-gray-900 sm:text-2xl">
              Lo stato attuale
            </h2>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              Attualmente, Infotumori prevede un database con una raccolta
              informativa sul cancro e le sue tipologie. Essendoci solo una
              persona in team, verrà costantemente aggiornato e alimentato col
              tempo. Infotumori non vuole mai sostituirsi ad una figura clinica
              specializzata. Qualsiasi contenuto presente sarà sempre corredato
              da riferimenti bibliografici con un certo rigore scientifico, per
              quanto possibile. Sebbene qualsiasi informazione presente sia
              tratta dalla letteratura scientifica, mi riservo di poter dire che
              potrebbero essere presenti degli elementi inesatti. Per questo,
              invito sempre ad ulteriori approfondimenti con le proprie figure
              cliniche di riferimento.
            </p>

            <h2 className="mt-12 text-xl font-bold tracking-tight text-gray-900 sm:text-2xl">
              Sono presenti link di tracciamento nascosti o delle pubblicità?
            </h2>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              Il guadagno è nullo: non sono presenti pubblicità, non c'è la
              possibilità di effettuare donazioni, il traffico web non è
              tracciato. Il codice di sviluppo è open-source e disponibile su
              Github. Ciò non è inteso a cambiare in futuro.
            </p>

            <h2 className="mt-12 text-xl font-bold tracking-tight text-gray-900 sm:text-2xl">
              In serbo per il futuro
            </h2>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              La roadmap di sviluppo è lunga e verrà esposta gradualmente. Le
              idee sono molteplici: un mapping dei vari tipi di tumore rispetto
              alle cliniche specializzate sul suolo nazionale italiano; il
              miglioramento e l'integrazione continuativa del database
              informativo già presente; se possibile, un middleware di
              comunicazione fra paziente e figura clinica. E via discorrendo.
            </p>

            <h2 className="mt-12 text-xl font-bold tracking-tight text-gray-900 sm:text-2xl">
              Permettetemi di sbagliare
            </h2>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              Essendo solo io a sviluppare il codice, mantenere il progetto e
              arricchire le informazioni di Infotumori, potrebbero essere
              presenti dei bug. Il progetto è in continua evoluzione. Chiedo un
              po' di pazienza qualora alcune parti del sito non fossero
              esaustive o fruibili per come si vorrebbe.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
