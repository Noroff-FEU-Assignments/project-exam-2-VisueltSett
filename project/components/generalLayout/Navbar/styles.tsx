import styled from 'styled-components';
import { ItemWrapper as NavItemWrapper } from '../../helpers/ItemWrapper';
import { HeaderContainer as NavHeaderContainer } from '../../helpers/HeaderContainer';

export const NavStyle = styled.nav`
  a h5 {
    font-weight: ${({ theme }) => theme.text.weight.regular};
    font-size: 0.9rem;
    color: ${({ theme }) => theme.colors.primary.primaryColor};
    text-shadow: ${({ theme }) => theme.colors.primary.primaryColorTextShadow};
    margin-top: 0;
    text-decoration: none;

    &:hover {
      color: ${({ theme }) => theme.colors.primary.hoverColor};
    }
    &:active {
      color: ${({ theme }) => theme.colors.primary.activeLinkColor};
    }
  }
  a.activeLink h5 {
    color: ${({ theme }) => theme.colors.primary.activeLinkColor};
  }
  h5 {
    margin-top: 0;
  }
`;

export const NavWrapper = styled(NavItemWrapper)`
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-end;
  flex-direction: ${(props) =>
    props.flexDirection ? props.flexDirection : 'row'};
  align-items: ${(props) => (props.alignItems ? props.alignItems : 'baseline')};
  padding: 0.15rem 0.15rem 0;
  cursor: pointer;
  a.activeLink h5 {
    color: ${({ theme }) => theme.colors.primary.activeLinkColor};
  }
`;

export const LogoStyles = styled.image`
  min-width: 25vw;
  margin: 0;
  cursor: pointer;

  &:hover {
    border: 1px solid ${({ theme }) => theme.colors.primary.primaryColor};
    background-color: ${({ theme }) => theme.colors.primary.backgroundColor};
    border-radius: 0.25rem;
  }

  &:active {
    border: 4px solid ${({ theme }) => theme.colors.primary.activeLinkColor};
  }

  @media (max-width: 768px) {
    min-width: 80px;
  }
`;

export const NavbarContainer = styled.div`
  height: 80%;
  width: 70vw;
  display: flex;
  flex-flow: row nowrap;
  justify-content: flex-end;
  align-items: flex-start;
  margin: 0;
  padding: 0;

  a.activeLink {
    color: ${({ theme }) => theme.colors.primary.activeLinkColor};
  }

  @media (max-width: 490px) {
    a h5 {
      display: none;
    }
    padding: 0 0.5rem 0 0;
  }
`;

export const MenuContainer = styled.div`
  width: 100vw;
  height: 15%;
  display: flex;
  flex-flow: row nowrap;
  justify-content: center;
  align-items: flex-end;
  margin: 0 auto;
  padding: 0;
  position: relative;

  #handlekurv {
    position: absolute;
    right: 2rem;
  }

  a.activeLink {
    color: ${({ theme }) => theme.colors.primary.activeLinkColor};
  }

  a h5 {
    font-weight: ${({ theme }) => theme.text.weight.regular};
    font-size: 0.9rem;
    color: ${({ theme }) => theme.colors.primary.primaryColor};
    text-shadow: ${({ theme }) => theme.colors.primary.primaryColorTextShadow};
    margin: 0;
    padding: 0 1rem 0.5rem 1rem;
    text-decoration: none;

    &:hover {
      color: ${({ theme }) => theme.colors.primary.hoverColor};
    }
    &:active {
      color: ${({ theme }) => theme.colors.primary.activeLinkColor};
    }
  }
  @media (max-width: 590px) {
    a h5 {
      display: none;
    }
  }
`;

export const LogoNavbarWrapper = styled.div`
  display: flex;
  flex-flow: row nowrap;
  height: 80%;
`;

export const MainNavContainer = styled(NavHeaderContainer)`
  flex-flow: column nowrap;
  height: 16vh;
`;
