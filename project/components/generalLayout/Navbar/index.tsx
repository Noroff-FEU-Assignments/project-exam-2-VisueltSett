import { HeaderContainer } from '../../helpers/HeaderContainer';
import { NavWrapper } from './styles';
import {
  ShoppingBasket,
  LocalShipping,
  PersonOutline,
  ContactSupport,
} from '@styled-icons/material-outlined';
import Image from 'next/image';
import OsebroLogo from '../../../../public/images/osebro-antikvariat-logo-black.svg';

const Navbar: React.FC = () => {
  return (
    <>
      <HeaderContainer>
        <NavWrapper>
          <Image
            src={OsebroLogo}
            alt="osebro header logo black"
            width="300"
            height="180"
          />
        </NavWrapper>
        <NavWrapper flexDirection="row" alignItems="center">
          <NavWrapper alignItems="center">
            <LocalShipping />
            <h3>Levering</h3>
          </NavWrapper>
        </NavWrapper>
        <NavWrapper flexDirection="row" alignItems="center">
          <NavWrapper alignItems="center">
            <ContactSupport />
            <h3>Kontakt</h3>
          </NavWrapper>
        </NavWrapper>
        <NavWrapper flexDirection="row" alignItems="center">
          <NavWrapper alignItems="center">
            <PersonOutline />
            <h3>Logg inn</h3>
          </NavWrapper>
        </NavWrapper>

        <NavWrapper flexDirection="row" alignItems="center">
          <NavWrapper alignItems="center">
            <p color="rgba(130, 255, 151, 1)">0</p>
            <ShoppingBasket />
          </NavWrapper>
          <p color="rgba(242, 242,242,1)">Handlekurv</p>
        </NavWrapper>
      </HeaderContainer>
    </>
  );
};

export default Navbar;
