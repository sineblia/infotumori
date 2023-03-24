import React from "react";
import styled from "styled-components";
import Image from "../src_2/common/components/Image";
import Button from '../src_2/common/components/Button';
import Container from "../src_2/common/components/UI/Container";
import SectionHeading from "../SectionHeading";

import { data } from "../src_2/common/data/Donation";
import Zoom from 'react-reveal/Zoom';


const Prevenzione = () => {
  return (
    <Section id="docs-suggestions">
      <Container>
        <SectionHeading
          title="Come posso prevenire?"
          desc="La prevenzione è una delle armi migliori che ci permette di combattere il cancro. Leggi di più per capire le regole principali per condurre uno stile di vita sano."
        />

        <div style={{ textAlign: "center" }}>
          <Button title="Scopri di più" />
        </div>
      </Container>
    </Section>
  );
};

export default Prevenzione;

const Section = styled.section`
  padding-top: 70px;
  padding-bottom: 70px;
  @media only screen and (max-width: 768px) {
    padding-top: 50px;
    padding-bottom: 50px;
  }
`;

const ContentWrapper = styled.div`
  gap: 50px;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  @media only screen and (max-width: 768px) {
    gap: 50px 30px;
    grid-template-columns: repeat(2, 1fr);
  }
  @media only screen and (max-width: 480px) {
    gap: 50px 30px;
    grid-template-columns: repeat(1, 1fr);
  }
`;

const Figure = styled.figure`
  margin: 0;
  text-align: center;
  img {
    margin: 0 auto;
  }
  figcaption {
    font-weight: 500;
    font-size: 15px;
    line-height: 1.5;
    text-align: center;
    color: #0f2137;
    max-width: 190px;
    margin: 30px auto 0;
  }
`;
