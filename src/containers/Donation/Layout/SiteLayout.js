import React, { Fragment } from 'react';
import Head from 'next/head';
import Sticky from 'react-stickynode';
import { ThemeProvider } from 'styled-components';
import { theme } from 'common/theme/donation';
import { ResetCSS } from 'common/assets/css/style';
import {
    GlobalStyle,
    ContentWrapper,
} from 'containers/Donation/donation.style';
import { DrawerProvider } from 'common/contexts/DrawerContext';
import Navbar from 'containers/Donation/Navbar';

const SiteLayout = ({ children }) => (
  <div className="bg-white antialiased">
    {/* <div>
      <div>
        <div className="max-w-xl mx-auto px-8">
          <nav>
            <div className="py-4 flex-shrink-0 flex items-center">
              <img className="h-8 w-8" src="/logo.svg" alt="" />
              <Link href="/">
                <a className="ml-8 font-medium text-gray-900">Home</a>
              </Link>
              <Link href="/account-settings/basic-information">
                <a className="ml-8 font-medium text-gray-900">
                  Account Settings
                </a>
              </Link>
            </div>
            <div className="mt-2">
              <input
                className="block w-full border border-gray-300 rounded-lg bg-gray-100 px-3 py-2 leading-tight focus:outline-none focus:border-gray-600 focus:bg-white"
                placeholder="Search..."
              />
            </div>
          </nav>
        </div>
      </div>
    </div> */}

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

      </Fragment>
    </ThemeProvider>

  </div>
);

export default SiteLayout;
