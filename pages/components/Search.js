// components/Search.js
import React, { useEffect, useState, useCallback } from 'react';
import useSWR from 'swr';
import { debounce } from 'lodash';

const fetcher = (url) => fetch(url).then((res) => res.json());

const Search = () => {
  const [term, setTerm] = useState('');
  const [debouncedTerm, setDebouncedTerm] = useState('');

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
  }

  if (error) return <div>Failed to load</div>;
  if (!data) return <div>Loading...</div>;

  return (
    <div>
      <input 
        type="text"
        placeholder="Inserisci il nome del tumore..."
        onChange={handleSearch}
      />
      {data.map((tumore) => (
        <div key={tumore._id}>
          <h2>{tumore.nome}</h2>
          <p>{tumore.descrizione}</p>
        </div>
      ))}
    </div>
  );
};

export default Search;
