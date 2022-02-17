import {
  LogoNavbarWrapper,
  MenuContainer,
  NavbarContainer,
  MainNavContainer,
  NavStyle,
  NavWrapper,
  LogoStyles,
} from './styles';
import { IconContainer } from '../../helpers/IconContainer';
import {
  ShoppingBasket,
  LocalShipping,
  PersonOutline,
  ContactSupport,
} from '@styled-icons/material-outlined';
import Image from 'next/image';
import OsebroLogo from '../../../../public/images/osebro-antikvariat-logo-black-shadow-white.svg';
import Link from 'next/link';
import NavLink from './NavLink';

const Navbar: React.FC = () => {
  return (
    <>
      <MainNavContainer>
        <LogoNavbarWrapper>
          <Link href="/">
            <a>
              <NavWrapper>
                <LogoStyles>
                  <Image
                    src={OsebroLogo}
                    alt="osebro header logo black"
                    width="240"
                    height="114"
                  />
                </LogoStyles>
              </NavWrapper>
            </a>
          </Link>
          <NavbarContainer>
            <NavStyle>
              <NavLink href="/levering" activeClassName="activeLink">
                <a>
                  <NavWrapper
                    flexDirection="row"
                    flexWrap="wrap"
                    alignItems="baseline"
                  >
                    <IconContainer>
                      <LocalShipping />
                    </IconContainer>

                    <h5>Levering</h5>
                  </NavWrapper>
                </a>
              </NavLink>
            </NavStyle>
            <NavStyle>
              <NavLink href="/kontakt-oss" activeClassName="activeLink">
                <a>
                  <NavWrapper
                    flexDirection="row"
                    flexWrap="wrap"
                    alignItems="baseline"
                  >
                    <IconContainer>
                      <ContactSupport />
                    </IconContainer>

                    <h5>Kontakt</h5>
                  </NavWrapper>
                </a>
              </NavLink>
            </NavStyle>
            <NavStyle>
              <NavLink href="/kunde-login" activeClassName="activeLink">
                <a>
                  <NavWrapper
                    flexDirection="row"
                    flexWrap="wrap"
                    alignItems="baseline"
                  >
                    <IconContainer>
                      <PersonOutline />
                    </IconContainer>

                    <h5>Logg inn</h5>
                  </NavWrapper>
                </a>
              </NavLink>
            </NavStyle>
          </NavbarContainer>
        </LogoNavbarWrapper>
        <MenuContainer>
          <NavWrapper>
            <NavLink href="/" activeClassName="activeLink">
              <a>
                <h5>HJEM</h5>
              </a>
            </NavLink>

            <NavLink href="/bokkatalog" activeClassName="activeLink">
              <a>
                <h5>BOKKATALOG</h5>
              </a>
            </NavLink>

            <NavLink href="/favoritter" activeClassName="activeLink">
              <a>
                <h5>FAVORITTER</h5>
              </a>
            </NavLink>
          </NavWrapper>
          <NavStyle id="handlekurv">
            <NavLink href="/handlekurv" activeClassName="activeLink">
              <a>
                <NavWrapper
                  flexDirection="column"
                  flexWrap="wrap"
                  alignItems="center"
                >
                  <IconContainer>
                    <ShoppingBasket />
                  </IconContainer>

                  <h5>Handlekurv</h5>
                </NavWrapper>
              </a>
            </NavLink>
          </NavStyle>
        </MenuContainer>
      </MainNavContainer>
    </>
  );
};

export default Navbar;
