import { FooterContainer } from './styles';
import Image from 'next/image';
import footerLogo from '../../../../public/images/osebro-antikvariat-logo-oval-white.svg';
import Link from 'next/link';

export default function Footer() {
  return (
    <FooterContainer>
      <Link href="/">
        <a>
          <Image
            src={footerLogo}
            alt="osebro oval logo white"
            width="120"
            height="100"
          />
        </a>
      </Link>
      <p>Osebro Antikvariat DA, Copyright &copy;2022</p>
    </FooterContainer>
  );
}
