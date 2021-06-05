import React from 'react'
import App from 'next/app'
import SiteLayout from '../containers/Donation/Layout/SiteLayout'
import { Modal } from '@redq/reuse-modal';
import '@redq/reuse-modal/es/index.css';
import 'common/assets/css/flaticon.css';
import 'swiper/swiper-bundle.css';
import 'common/assets/css/icon-example-page.css';
import 'tailwindcss/tailwind.css';
class MyApp extends App {
  render() {
    const { Component, pageProps, router } = this.props

    const getLayout =
      Component.getLayout || (page => <SiteLayout children={page} />)

    return getLayout(<Component {...pageProps} />)
  }
}

export default MyApp
