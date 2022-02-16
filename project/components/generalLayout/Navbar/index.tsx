import { HeaderContainer } from '../../helpers/HeaderContainer';
import {
  NavbarMenuWrapper,
  MenuContainer,
  NavbarContainer,
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
      <HeaderContainer>
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
        <NavbarMenuWrapper>
          <NavbarContainer>
            <NavStyle>
              <NavLink href="/levering" activeClassName="activeLink">
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
              </NavLink>
            </NavStyle>
            <NavStyle>
              <NavLink href="/kontakt-oss">
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
              </NavLink>
            </NavStyle>
            <NavStyle>
              <NavLink href="/kunde-login">
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
              </NavLink>
            </NavStyle>
            <NavStyle>
              <NavLink href="/handlekurv">
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
              </NavLink>
            </NavStyle>
          </NavbarContainer>
          <MenuContainer>
            <NavStyle>
              <NavLink href="/">
                <a>
                  <h5>HJEM</h5>
                </a>
              </NavLink>

              <NavLink href="/bokkatalog">
                <a>
                  <h5>BOKKATALOG</h5>
                </a>
              </NavLink>

              <NavLink href="/favoritter">
                <a>
                  <h5>FAVORITTER</h5>
                </a>
              </NavLink>
            </NavStyle>
          </MenuContainer>
        </NavbarMenuWrapper>
      </HeaderContainer>
    </>
  );
};

export default Navbar;
