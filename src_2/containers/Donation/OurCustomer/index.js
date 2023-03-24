import React from 'react';
import { Icon } from 'react-icons-kit';
import { chevronRight } from 'react-icons-kit/feather/chevronRight';

import Container from '../src_2/common/components/UI/Container';
import Heading from '../src_2/common/components/Heading';
import Text from '../src_2/common/components/Text';
import Image from '../src_2/common/components/Image';
import Link from '../src_2/common/components/Link';
import ourCustomer from 'common/assets/image/agencyDigital/ourCustomer.png';
import Section, { SectionHeading, ContentWrapper } from './ourCustomer.style';

const OurCustomer = () => {
  return (
    <Section id="our-customer">
      <Container>
        <ContentWrapper>
          <SectionHeading>
            <Heading content="Company who also worked us" />
            <Text content="Every email, web page, and social media post makes an impression on your customers. With our software you can be confident it's impression." />
            <Link href="#">
              Explore Details <Icon icon={chevronRight} />
            </Link>
          </SectionHeading>
          <Image
            src={ourCustomer}
            className="illustration"
            alt="Company who also worked us"
          />
        </ContentWrapper>
      </Container>
    </Section>
  );
};

export default OurCustomer;
