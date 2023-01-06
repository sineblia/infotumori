import React from "react";
import Text from "common/components/Text";
import Input from "common/components/Input";
import Image from "common/components/Image";
import Button from "common/components/Button";
import Heading from "common/components/Heading";
import Container from "common/components/UI/Container";

import {
  FooterWrapper,
  Subscription,
  SubscriptionForm,
  FooterBottom,
  FooterLeft,
  FooterNav,
  ReferenceContainer,
} from "./footer.style";

import { data } from "common/data/Donation";
import logoDark from "common/assets/image/donation/logo.svg";

const Footer = () => {
  const handleSubmit = (e) => {

    console.log("submitted");
    e.preventDefault();
  };

  return (
    <FooterWrapper>
      <Container>

        <Subscription>
          <Heading content="Iscriviti alla newsletter per ricevere tutti i nostri aggiornamenti!" />

          <form name="contact2" method="POST" netlify data-netlify="true">
            <input type="hidden" name="form-name" value="contact" />
            <p>
              <input type="text" name="name" id="yourname" placeholder="Il tuo nome" style={{borderRadius: "4px", minHeight: "60px", minWidth: "360px", padding: "0 24px", fontSize: "16px", color: "#484848"}}/>
            </p>
            <p>
              <input type="email" name="email" id="youremail" placeholder="La tua email" style={{borderRadius: "4px", minHeight: "60px", minWidth: "360px", padding: "0 24px", fontSize: "16px", color: "#484848"}}/>
            </p>
            <p>
              <Button title="Iscriviti :)" type="submit" />
            </p>
          </form>
        </Subscription>
        <FooterBottom>
          <FooterLeft>
            <ReferenceContainer>
              <div className="flex flex-col">
                <Image src={logoDark} alt="logo" className="py-2" />
                <a
                  href="https://simonebellavia.com"
                  target="_blank"
                  className="no-underline"
                >
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
                <a href={nav.url} className="no-underline">
                  {nav.title}
                </a>
              </li>
            ))}
          </FooterNav>
        </FooterBottom>
      </Container>
    </FooterWrapper>
  );
};

export default Footer;
