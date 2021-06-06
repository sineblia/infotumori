import React, { useState } from 'react';
import Fade from 'react-reveal/Fade';
import ScrollSpyMenu from 'common/components/ScrollSpyMenu';
import Scrollspy from 'react-scrollspy';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import Link from 'next/link'
import { Icon } from 'react-icons-kit';
import { androidMenu } from 'react-icons-kit/ionicons/androidMenu';
import { androidClose } from 'react-icons-kit/ionicons/androidClose';
import Button from 'common/components/Button';
import Logo from 'common/components/UIElements/Logo';
import Container from 'common/components/UI/Container';
import NavbarWrapper, {
  LogoContainer,
  MenuArea,
  MobileMenu,
} from './navbar.style';
// import logoDark from 'common/assets/image/donation/logo-dark.png';
import logoDark from 'common/assets/image/donation/logo.svg';

import { data } from 'common/data/Donation';

const Navbar =    () => {
  const [mobileMenu, setMobileMenu] = useState(false);

  const scrollItems = [];

  data.navItems.forEach((item) => {
    scrollItems.push(item.path.slice(1));
  });

  const handleMobileMenu = () => {
    setMobileMenu(!mobileMenu);
  };

  const handleMenuClose = () => {
    setMobileMenu(!mobileMenu);
  };

  return (
    <NavbarWrapper className="navbar">
      <Container>
        <LogoContainer>
          <Logo
            href="/"
            logoSrc={logoDark}
            title="infotumori"
            className="logo-dark"
          />
        </LogoContainer>
        {/* end of logo */}

        <MenuArea>
          <ScrollSpyMenu
            className="menu-items"
            menuItems={data.navItems}
            offset={-84}
          />

          <Button
            className="menubar"
            icon={
              mobileMenu ? (
                <Icon className="bar" size={32} icon={androidClose} />
              ) : (
                <Fade>
                  <Icon className="close" size={32} icon={androidMenu} />
                </Fade>
              )
            }
            color="#0F2137"
            variant="textButton"
            onClick={handleMobileMenu}
          />
        </MenuArea>
      </Container>

      {/* start mobile menu */}
      <MobileMenu className={`mobile-menu ${mobileMenu ? 'active' : ''}`}>
        <Container>
          <Scrollspy
            className="menu"
            items={scrollItems}
            offset={-84}
            currentClassName="active"
          >
            {data.navItems.map((menu, index) => (
              <li 
                key={`menu_key${index}`}
                onClick={handleMenuClose}>
                <Link
                  href={menu.path}
                  offset={menu.offset}
                >
                  {menu.label}
                </Link>
              </li>
            ))}
          </Scrollspy>
        </Container>
      </MobileMenu>
      {/* end of mobile menu */}
    </NavbarWrapper>
  );
};

export default Navbar;
