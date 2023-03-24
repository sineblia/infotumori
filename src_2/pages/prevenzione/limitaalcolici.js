import React, { Fragment } from 'react';
import Head from 'next/head';
import Sticky from 'react-stickynode';
import { ThemeProvider } from 'styled-components';
import { theme } from '../src_2/common/theme/donation';
import { ResetCSS } from '../src_2/common/assets/css/style';
import {
  GlobalStyle,
  ContentWrapper,
  CovidMap,
} from '../src_2/containers/Donation/donation.style';
import { DrawerProvider } from '../src_2/common/contexts/DrawerContext';
import Navbar from '../src_2/containers/Donation/Navbar';
import Banner from '../src_2/containers/Donation/Banner';
import Service from '../src_2/containers/Donation/Service';
import DonationFormSection from '../src_2/containers/Donation/DonationForm';
import Covid19Map from '../src_2/containers/Donation/ClinicheMap';
import DonationGoal from '../src_2/containers/Donation/DonationGoal';
import DoctorsSuggestions from '../src_2/containers/Donation/DoctorsSuggestions';
import ThankYou from '../src_2/containers/Donation/ThankYou';
import Footer from '../src_2/containers/Donation/Footer';

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

          <ThankYou />
          <Footer />
        </ContentWrapper>
      </Fragment>
    </ThemeProvider>
  );
};
export default Donation;
