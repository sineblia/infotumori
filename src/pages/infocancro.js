import React, { Fragment } from 'react';
import Head from 'next/head';
import Sticky from 'react-stickynode';
import { ThemeProvider } from 'styled-components';
import { theme } from 'common/theme/donation';
import { ResetCSS } from 'common/assets/css/style';
import {
  GlobalStyle,
  ContentWrapper,
  CovidMap,
} from 'containers/Donation/donation.style';
import { DrawerProvider } from 'common/contexts/DrawerContext';
import Navbar from 'containers/Donation/Navbar';
import Banner from 'containers/Donation/Banner';
import Service from 'containers/Donation/Service';
import DonationFormSection from 'containers/Donation/DonationForm';
import Covid19Map from 'containers/Donation/Covid19Map';
import DonationGoal from 'containers/Donation/DonationGoal';
import DoctorsSuggestions from 'containers/Donation/DoctorsSuggestions';
import ThankYou from 'containers/Donation/ThankYou';
import Footer from 'containers/Donation/Footer';

import styled from 'styled-components';

const Donation = () => {
  return (
    <ThemeProvider theme={theme}>
      <Fragment>
        <Head>
          <title>Donation | A react next landing page</title>
          <meta name="theme-color" content="#FF825C" />
          <meta name="Description" content="React next landing page" />

          {/* Load google fonts */}
          <link
            rel="stylesheet"
            href="https://fonts.googleapis.com/css?family=DM+Sans:400,400i,500,500i,700,700i&display=swap"
          />
        </Head>
        <ResetCSS />
        <GlobalStyle />
        <ContentWrapper>
          <Sticky top={0} innerZ={99} activeClass="is-sticky">
            <DrawerProvider>
              <Navbar />
            </DrawerProvider>
          </Sticky>
          <Section>
            <section className="bg-gray-100 dark:bg-gray-900 lg:py-12 lg:flex lg:justify-center">
              <div className="bg-white dark:bg-gray-800 lg:mx-8 lg:flex lg:max-w-5xl lg:shadow-lg lg:rounded-lg">
                <div className="lg:w-1/2">
                  <div
                    className="h-64 bg-cover lg:rounded-lg lg:h-full"
                    style={{
                      backgroundImage:
                        'url("https://images.unsplash.com/photo-1593642532400-2682810df593?ixlib=rb-1.2.1&ixid=MXwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=750&q=80")',
                    }}
                  />
                </div>
                <div className="max-w-xl px-6 py-12 lg:max-w-5xl lg:w-1/2">
                  <h2 className="text-2xl font-bold text-gray-800 dark:text-white md:text-3xl">
                    Cos'è il{" "}
                    <span className="text-indigo-600 dark:text-indigo-400">
                      tumore?
                    </span>
                  </h2>
                  <p className="mt-4 text-gray-600 dark:text-gray-400">
                    Il tumore, noto anche come cancro nel caso di tumori maligni o neoplasia, è una massa 
                    di tessuto che cresce in eccesso ed in modo scoordinato rispetto ai tessuti normali, e 
                    che persiste in questo stato dopo la cessazione degli stimoli che hanno indotto il processo 
                    (cit. in Robbins Basic Pathology, 8ª edizione, Saunders/Elsevier 2007, cap. 6).
                  </p>
                </div>
              </div>
            </section>
          </Section>

          <Footer />
        </ContentWrapper>
      </Fragment>
    </ThemeProvider>
  );
};

export default Donation;

const Section = styled.section`
  padding-top: 100px;
  padding-bottom: 100px;
`;