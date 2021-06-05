import React from "react";
import styled from "styled-components";
import Image from "common/components/Image";
import Button from 'common/components/Button';
import Container from "common/components/UI/Container";
import SectionHeading from "../SectionHeading";

import { data } from "common/data/Donation";
import Zoom from 'react-reveal/Zoom';

import Link from 'next/link';


const InfoCancro = () => {
  return (
    <Section id="docs-suggestions">
      <Container>
        <Zoom>
          <SectionHeading
            title="Cos'è il tumore?"
            desc="Il tumore, noto anche come cancro nel caso di tumori maligni o neoplasia, è una massa di tessuto che cresce in eccesso ed in modo scoordinato rispetto ai tessuti normali, e che persiste in questo stato dopo la cessazione degli stimoli che hanno indotto il processo (cit. in Robbins Basic Pathology, 8ª edizione, Saunders/Elsevier 2007, cap. 6)."
          />
        </Zoom>
        <div style={{ textAlign: "center" }}>
          <Link href="posts/infocancro">
            <Button title="Informati sul cancro" />
          </Link>
        </div>
      </Container>
    </Section>
  );
};

export default InfoCancro;

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
