import React from 'react';

const HomePage = () => {
  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center">
      <div className="bg-white p-8 rounded shadow-md">
        <h1 className="text-2xl font-bold mb-4 text-gray-800">
          Benvenuto su InfoTumori
        </h1>
        <p className="text-gray-600">
          Questa è la homepage del sito web InfoTumori, configurata con Tailwind CSS.
        </p>
      </div>
    </div>
  );
};

export default HomePage;
