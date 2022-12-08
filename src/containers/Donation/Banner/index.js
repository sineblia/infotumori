import React from 'react';
import Zoom from 'react-reveal/Zoom';
import Link from 'next/link';
import Text from 'common/components/Text';
import Image from 'common/components/Image';
import Button from 'common/components/Button';
import Heading from 'common/components/Heading';
import Container from 'common/components/UI/Container';
import Section, {
  ContentWrapper,
  BannerContent,
  Illustration,
  ButtonGroup,
  TrustedBy,
  ImageGroup,
} from './banner.style';

import paypal from 'common/assets/image/donation/banner/paypal.png';
import google from 'common/assets/image/donation/banner/google.png';
import dropbox from 'common/assets/image/donation/banner/dropbox.png';

const Banner = () => {
  return (
    <Section id="home">
      <ContentWrapper>
        <Container>
          <BannerContent>
            <Heading
              as="h1"
              content="Informati per prevenire e per curare"
            />
            <Text
              className="banner-caption"
              content="Infotumori è un portale d'informazione gratuito e accessibile a chiunque, che intende fornire 
                      le informazioni essenziali e le principali risorse per una corretta conoscenza del cancro.
                      È rivolta alle persone che vogliono informarsi, prevenire e curare."
            />
            <ButtonGroup>
              <Link href="posts/cos'è-il-tumore">
                <Button title="Cos'è il Cancro" />
              </Link>
            </ButtonGroup>
          </BannerContent>
        </Container>
        <Illustration />
      </ContentWrapper>
    </Section>
  );
};

export default Banner;
