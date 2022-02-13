import { FooterContainer } from './styles';
import Image from 'next/image';
import footerLogo from '../../../../public/images/osebro-antikvariat-logo-oval-white.svg';

export default function Footer() {
  return (
    <FooterContainer>
      <Image
        src={footerLogo}
        alt="osebro oval logo white"
        width="120"
        height="100"
      />
      <p>Osebro Antikvariat DA, Copyright &copy;2022</p>
    </FooterContainer>
  );
}
