import React, { Fragment } from "react";
import Head from "next/head";
import Sticky from "react-stickynode";
import { ThemeProvider } from "styled-components";
import { theme } from "common/theme/donation";
import { ResetCSS } from "common/assets/css/style";
import {
  GlobalStyle,
  ContentWrapper,
} from "containers/Donation/donation.style";
import { DrawerProvider } from "common/contexts/DrawerContext";
import Navbar from "containers/Donation/Navbar";
import Footer from "containers/Donation/Footer";

const SiteLayout = ({ children }) => (
  <div className="bg-white antialiased">
    <ThemeProvider theme={theme}>
      <Fragment>
        <Head>
          <title>infotumori.it – Portale d'informazione</title>
          <meta name="theme-color" content="#FF825C" />
          <meta
            name="Description"
            content="Il portale d'informazione sui tumori e sul cancro."
          />

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
        </ContentWrapper>

        <div>{children}</div>

        <Footer />
      </Fragment>
    </ThemeProvider>
  </div>
);

export default SiteLayout;
