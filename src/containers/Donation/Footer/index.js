import React from 'react';
import Text from 'common/components/Text';
import Input from 'common/components/Input';
import Image from 'common/components/Image';
import Button from 'common/components/Button';
import Heading from 'common/components/Heading';
import Container from 'common/components/UI/Container';

import {
  FooterWrapper,
  Subscription,
  SubscriptionForm,
  FooterBottom,
  FooterLeft,
  FooterNav,
  ReferenceContainer,
} from './footer.style';

import { data } from 'common/data/Donation';
import logoDark from 'common/assets/image/donation/logo.svg';

const Footer = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('submitted.');
  };

  return (
    <FooterWrapper>
      <Container>
        {/* Il modulo subscription abilita una sezione dove sarebbe possibile iscriversi alla newsletter. Per ora è disabilitato. */}

        <Subscription>
          <Heading content="Iscriviti alla newsletter per ricevere tutti i nostri aggiornamenti!" />
          
            <SubscriptionForm 
              name="contact" 
              method="POST" 
              onSubmit={handleSubmit}
              action="contact/?success=true"
              data-netlify="true" 
              data-netlify-honeypot="bot-field"
            >
                <Input
                  id="email"
                  name="email"
                  type="email"
                  placeholder="Inserisci il tuo indirizzo email"
                  className="input-field"
                  required
                />
                <Button title="Iscriviti" type="submit" />
            </SubscriptionForm>
          
        </Subscription>
        <FooterBottom>
          <FooterLeft>
            <ReferenceContainer>
              <div className="flex flex-col">
                <Image src={logoDark} alt="logo" className="py-2" />
                <a href="https://simonebellavia.com" target="_blank"><p>Realized with <span role="img" aria-label="heart">❤️</span> by Simone</p></a>
              </div>
            </ReferenceContainer>
          </FooterLeft>
          <FooterNav>
            {data?.footerNav?.map((nav) => (
              <li key={nav.id}>
                <a href={nav.url}>{nav.title}</a>
              </li>
            ))}
          </FooterNav>
        </FooterBottom>
      </Container>
    </FooterWrapper>
  );
};

export default Footer;
