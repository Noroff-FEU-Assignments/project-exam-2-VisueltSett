import { HeaderContainer } from '../../helpers/HeaderContainer';
import { NavbarContainer, NavStyle, NavWrapper, LogoStyles } from './styles';
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

const Navbar: React.FC = () => {
  return (
    <>
      <HeaderContainer>
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
        <NavbarContainer>
          <NavStyle>
            <Link href="/levering">
              <a>
                <NavWrapper flexDirection="row" alignItems="flex-start">
                  <NavWrapper alignItems="baseline">
                    <IconContainer>
                      <LocalShipping />
                    </IconContainer>

                    <h5>Levering</h5>
                  </NavWrapper>
                </NavWrapper>
              </a>
            </Link>
          </NavStyle>
          <NavStyle>
            <Link href="/kontakt-oss">
              <a>
                <NavWrapper flexDirection="row" alignItems="flex-start">
                  <NavWrapper alignItems="baseline">
                    <IconContainer>
                      <ContactSupport />
                    </IconContainer>

                    <h5>Kontakt</h5>
                  </NavWrapper>
                </NavWrapper>
              </a>
            </Link>
          </NavStyle>
          <NavStyle>
            <Link href="/kunde-login">
              <a>
                <NavWrapper flexDirection="row" alignItems="flex-start">
                  <NavWrapper alignItems="baseline">
                    <IconContainer>
                      <PersonOutline />
                    </IconContainer>

                    <h5>Logg inn</h5>
                  </NavWrapper>
                </NavWrapper>
              </a>
            </Link>
          </NavStyle>
          <NavStyle>
            <Link href="/handlekurv">
              <a>
                <NavWrapper flexDirection="row" alignItems="flex-start">
                  <NavWrapper alignItems="baseline">
                    <IconContainer>
                      <ShoppingBasket />
                    </IconContainer>

                    <h5>Handlekurv</h5>
                  </NavWrapper>
                </NavWrapper>
              </a>
            </Link>
          </NavStyle>
        </NavbarContainer>
      </HeaderContainer>
    </>
  );
};

export default Navbar;
