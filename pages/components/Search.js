// components/Search.js
import { useState, useEffect } from "react";
import useSWR from "swr";
import _ from "lodash";

const fetcher = (url) => fetch(url).then((res) => res.json());

export default function Search() {
  const [term, setTerm] = useState("");
  const [debouncedTerm, setDebouncedTerm] = useState("");

  useEffect(() => {
    const timerId = setTimeout(() => {
      setDebouncedTerm(term);
    }, 500);

    return () => {
      clearTimeout(timerId);
    };
  }, [term]);

  const { data, error } = useSWR(`/api/search?term=${debouncedTerm}`, fetcher);

  if (error) return <div>Failed to load</div>;
  if (!data) return <div>Loading...</div>;

  return (
    <div>
      <input
        type="text"
        value={term}
        onChange={(e) => setTerm(e.target.value)}
        placeholder="Inserisci il nome del tumore..."
      />
      {data.map((tumore) => (
        <div key={tumore._id}>
          <h2>{tumore.nome}</h2>
          <p>{tumore.descrizione}</p>
        </div>
      ))}
    </div>
  );
}
