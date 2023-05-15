import React from "react";
import Search from "./components/Search";
import Head from "next/head";

const SearchTumors = () => {
  return (
    <div>
      <Head>
        <title>Infotumori.it – Cerca</title>
        <meta
          name="description"
          content="Informati sul cancro. Ricerca maggiori informazioni nel nostro database."
        />
        <meta
          property="og:title"
          content="Infotumori.it – Cerca"
        />
        <meta
          property="og:description"
          content="Informati sul cancro. Ricerca maggiori informazioni nel nostro database."
        />
        <meta property="og:image" content="https://i.imgur.com/inXa95S.png" />
        <meta property="og:url" content="https://infotumori.it/" />
        <meta name="twitter:card" content="https://i.imgur.com/inXa95S.png" />
      </Head>

      <Search />
    </div>
  );
};

export default SearchTumors;
