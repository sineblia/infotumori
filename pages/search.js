import { useState } from "react";
import SearchBar from "../pages/components/SearchBar";
import { searchTumors } from "../utils/searchTumors";

export default function SearchPage() {
  const [results, setResults] = useState([]);

  const handleSearch = async (query) => {
    try {
      const searchResults = await searchTumors(query);
      setResults(searchResults);
    } catch (error) {
      console.error("Error during search:", error);
    }
  };

  return (
    <div>
      <h1>Pagina di ricerca</h1>
      <SearchBar onSearch={handleSearch} />
      {/* Mostra i risultati della ricerca */}
      {results.map((tumor) => (
        <div key={tumor._id}>
          <h2>{tumor.name}</h2>
          <p>{tumor.description}</p>
        </div>
      ))}
    </div>
  );
}
