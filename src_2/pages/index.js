import React from "react";
import SiteLayout from "../src_2/containers/Donation/Layout/SiteLayout";
import Banner from "../src_2/containers/Donation/Banner";
import Service from "../src_2/containers/Donation/Service";
import {
  CurareSection,
} from '../src_2/containers/Donation/donation.style';
import ClinicheMap from "../src_2/containers/Donation/ClinicheMap";
import DoctorsSuggestions from "../src_2/containers/Donation/DoctorsSuggestions";
import InfoCancro from "../src_2/containers/Donation/InfoCancro";
import ThankYou from "../src_2/containers/Donation/ThankYou";

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