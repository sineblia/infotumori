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
    // fetch("/", {
    //   method: "POST",
    //   headers: { "Content-Type": "application/x-www-form-urlencoded" },
    //   body: encode({ "form-name": "contact", ...this.state })
    // })
    //   .then(() => alert("Success!"))
    //   .catch(error => alert(error));

    console.log("submitted");
    e.preventDefault();
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
            // onSubmit={handleSubmit}
            netlify
            data-netlify="true"
          >
            <Input
              name="contact"
              type="text"
              placeholder="Inserisci il tuo indirizzo email"
              className="input-field"
              required
            />
            <input type="hidden" name="form-name" value="contact" />
            <Button title="Iscriviti" type="submit" />
          </SubscriptionForm>
        </Subscription>
        <FooterBottom>
          <FooterLeft>
            <ReferenceContainer>
              <div className="flex flex-col">
                <Image src={logoDark} alt="logo" className="py-2" />
                <a href="https://simonebellavia.com" target="_blank" className="no-underline">
                  <p>
                    Realized with{" "}
                    <span role="img" aria-label="heart">
                      ❤️
                    </span>{" "}
                    by Simone
                  </p>
                </a>
              </div>
            </ReferenceContainer>
          </FooterLeft>
          <FooterNav>
            {data?.footerNav?.map((nav) => (
              <li key={nav.id} className="list-none">
                <a href={nav.url} className="no-underline">{nav.title}</a>
              </li>
            ))}
          </FooterNav>
        </FooterBottom>
      </Container>
    </FooterWrapper>
  );
};

export default Footer;
