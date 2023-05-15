import Head from 'next/head'
import React from "react";
import Hero from "./components/Hero";
import Footer from "./components/Footer"

const HomePage = () => {
  return (
    <div>
      <Head>
        <title>Infotumori.it – Portale informativo sul Cancro</title>
        <meta name="description" content="Portale dedicato al cancro. Informati sulla malattia, su come prevenirla e come trattarla." />
        <meta property="og:title" content="Infotumori.it – Portale d'informazione sul Cancro" />
        <meta property="og:description" content="Portale dedicato al cancro. Informati sulla malattia, su come prevenirla e come trattarla." />
        <meta property="og:image" content="https://i.imgur.com/inXa95S.png" />
        <meta property="og:url" content="https://infotumori.it/" />
        <meta name="twitter:card" content="https://i.imgur.com/inXa95S.png" />
      </Head>

      <Hero />
      <Footer />
    </div>
  );
};

export default HomePage;
