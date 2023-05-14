// components/Search.js
import Link from "next/link";
import React, { useEffect, useState, useCallback } from "react";
import useSWR from "swr";
import { debounce } from "lodash";

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
    <div>
      <input
        type="text"
        onChange={(e) => setTerm(e.target.value)}
        placeholder="Cerca un tumore..."
      />
      {data &&
        data.map((tumors) => (
          <Link key={tumors._id} href={`/${tumors._id}`}>
            <h2>{tumors.name}</h2>
          </Link>
        ))}
      {error && <div>Failed to load</div>}
    </div>
  );
};

export default Search;
