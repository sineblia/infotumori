import React from 'react';
import styled from 'styled-components';
import Image from '../src_2/common/components/Image';
import Container from '../src_2/common/components/UI/Container';
import SectionHeading from '../SectionHeading';

import { data } from '../src_2/common/data/Donation';
import Zoom from 'react-reveal/Zoom';

import Curare from '../src_2/containers/Donation/Curare';

const DoctorsSuggestions = () => {
  return (
    <Section id="trattamento">
      <Container>
        <Zoom>
          <SectionHeading
            title="Come posso curare?"
            desc="Grazie alla ricerca, oggi abbiamo a disposizione molti strumenti per poter combattere il cancro. Questi variano in base alla tipologia del tumore e alla sua fase."
          />
        </Zoom>
        <Curare />
      </Container>
    </Section>
  );
};

export default DoctorsSuggestions;

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
  grid-template-columns: repeat(3, 1fr);
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