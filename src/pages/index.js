import Link from "next/link";
import Sticky from 'react-stickynode';
import { DrawerProvider } from 'common/contexts/DrawerContext';
import Navbar from 'containers/Donation/Navbar';
import SiteLayout from "containers/Donation/Layout/SiteLayout";
import Banner from "containers/Donation/Banner";
import Service from "containers/Donation/Service";
import {
  CovidMap,
} from 'containers/Donation/donation.style';
import Covid19Map from "containers/Donation/Covid19Map";
import DoctorsSuggestions from "containers/Donation/DoctorsSuggestions";
import InfoCancro from "containers/Donation/InfoCancro";
import ThankYou from "containers/Donation/ThankYou";
import Footer from "containers/Donation/Footer";

const Index = () => (
  <div>
    <Banner />
    <InfoCancro />
    <Service />
    <CovidMap>
      <DoctorsSuggestions />
      <Covid19Map />
    </CovidMap>
    <ThankYou />
    <Footer />
  </div>
);

Index.getLayout = page => <SiteLayout>{page}</SiteLayout>

export default Index