// components/Search.js
import Link from "next/link";
import React, { useEffect, useState, useCallback } from "react";
import useSWR from "swr";
import { debounce } from "lodash";
import Navbar from "../components/Navbar";

const fetcher = (url) => fetch(url).then((res) => res.json());

const Search = () => {
  const [term, setTerm] = useState("");
  const [debouncedTerm, setDebouncedTerm] = useState("");

  // Creazione di una funzione debounce
  const debouncedSave = useCallback(
    debounce((nextValue) => setDebouncedTerm(nextValue), 500),
    [] // verrà ricreato solo se le dipendenze cambiano
  );

  useEffect(() => {
    debouncedSave(term);
  }, [term, debouncedSave]);

  const { data, error } = useSWR(`/api/search?term=${debouncedTerm}`, fetcher);

  const handleSearch = (event) => {
    setTerm(event.target.value);
  };

  if (error) return <div>Failed to load</div>;
  if (!data) return <div>Loading...</div>;

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
              Informati sul cancro
            </h1>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              Cerca il tipo di tumore per il quale vorresti avere maggiori
              informazioni. È sufficiente inserire una parola chiave, come
              &quot;rene&quot;.
            </p>

            <div>
              <div className="relative mt-2 rounded-md shadow-sm">
                <input
                  type="text"
                  className="block w-full rounded-md border-0 py-1.5 pl-7 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  placeholder="Cerca un tumore..."
                  onChange={(e) => setTerm(e.target.value)}
                />
                {data &&
                  data.map((tumors) => (
                    <div key={tumors._id} className="relative mt-10 p-5 rounded shadow">
                      <Link href={`/${tumors._id}`}>
                        <h2 className="text-gray-600">{tumors.name}</h2>
                      </Link>
                    </div>
                  ))}
                {error && <div>Failed to load</div>}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Search;
