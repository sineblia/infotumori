import React from "react";
import SiteLayout from "containers/Donation/Layout/SiteLayout";
import Banner from "containers/Donation/Banner";
import Service from "containers/Donation/Service";
import {
  CurareSection,
} from 'containers/Donation/donation.style';
import ClinicheMap from "containers/Donation/ClinicheMap";
import DoctorsSuggestions from "containers/Donation/DoctorsSuggestions";
import InfoCancro from "containers/Donation/InfoCancro";
import ThankYou from "containers/Donation/ThankYou";

const Index = () => (
  <div>
    <Banner />
    <InfoCancro />
    <Service />
    <CurareSection>
      <DoctorsSuggestions />
      <ClinicheMap />
    </CurareSection>
    {/* <ThankYou /> */}
  </div>
);

Index.getLayout = page => <SiteLayout>{page}</SiteLayout>

export default Index