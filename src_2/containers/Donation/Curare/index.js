import React from 'react';
import styled from 'styled-components';
import 'tailwindcss/tailwind.css';

const Curare = () => {
  return (
    <section className="text-gray-600 body-font">
      <div className="container px-5 py-24 mx-auto">
        <div className="flex flex-wrap -m-4">
          <div className="p-4 md:w-1/2">
            <div className="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
              <img
                className="lg:h-48 md:h-36 w-full object-cover object-center"
                src="https://images.unsplash.com/photo-1571772996211-2f02c9727629?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80"
                alt="blog"
              />
              <div className="p-6">
                <h1 className="title-font text-lg font-medium text-gray-900 mb-3">
                  Chirurgia oncologica
                </h1>
                <p className="leading-relaxed mb-3">
                  Consiste nella rimozione del cancro dal corpo del paziente, a opera di un chirurgo specializzato.
                  La chirurgia può anche essere utilizzata per prevenire o diagnosticare il cancro o per determinarne lo stadio.
                </p>
                <div className="flex items-center flex-wrap ">
                  <a className="text-blue-500 inline-flex items-center md:mb-2 lg:mb-0" href="../../../posts/chirurgia">
                    Scopri di più
                    <svg
                      className="w-4 h-4 ml-2"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={2}
                      fill="none"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M5 12h14" />
                      <path d="M12 5l7 7-7 7" />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className="p-4 md:w-1/2">
            <div className="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
              <img
                className="lg:h-48 md:h-36 w-full object-cover object-center"
                src="https://images.pexels.com/photos/4047008/pexels-photo-4047008.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
                alt="blog"
              />
              <div className="p-6">
                <h1 className="title-font text-lg font-medium text-gray-900 mb-3">
                  Terapia oncologica
                </h1>
                <p className="leading-relaxed mb-3">
                Gli scopi primari della terapia oncologica sono la cura della malattia o la palliazione dei sintomi, 
                cioè il miglioramento della sintomatologia e l'ottimizzazione della qualità di vita il più lungo tempo possibile.
                </p>
                <div className="flex items-center flex-wrap ">
                  <a className="text-blue-500 inline-flex items-center md:mb-2 lg:mb-0" href="../../../posts/terapia">
                    Scopri di più
                    <svg
                      className="w-4 h-4 ml-2"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={2}
                      fill="none"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M5 12h14" />
                      <path d="M12 5l7 7-7 7" />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Curare;

const Section = styled.section`
  padding-top: 70px;
  padding-bottom: 70px;
  @media only screen and (max-width: 768px) {
    padding-top: 50px;
    padding-bottom: 50px;
  }
`;
