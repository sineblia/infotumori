import React from "react";
import Search from "./components/Search";

const HomePage = () => {
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center px-4">
      <h1 className="text-2xl font-bold mb-4 text-gray-800">
        Benvenuto su InfoTumori
      </h1>
      <p className="text-gray-600 mb-4">
        Questa è la homepage del sito web InfoTumori, configurata con Tailwind CSS.
      </p>
      <Search />
    </div>
  );
};

export default HomePage;
