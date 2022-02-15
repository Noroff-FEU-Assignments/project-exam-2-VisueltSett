import styled from 'styled-components';
import { ItemWrapper as NavItemWrapper } from '../../helpers/ItemWrapper';

export const NavStyle = styled.nav`
  a h5 {
    font-weight: ${({ theme }) => theme.text.weight.regular};
    font-size: 0.9rem;
    color: ${({ theme }) => theme.colors.primary.primaryColor};
    text-shadow: ${({ theme }) => theme.colors.primary.primaryColorTextShadow};
    margin-top: 0;

    &:hover {
      color: ${({ theme }) => theme.colors.primary.hoverColor};
    }
    &:active {
      color: ${({ theme }) => theme.colors.primary.activeIconColor};
    }
  }
  h5 {
    margin-top: 0;
  }
`;

export const NavWrapper = styled(NavItemWrapper)`
  display: flex;
  flex-direction: ${(props) =>
    props.flexDirection ? props.flexDirection : 'row'};
  align-items: ${(props) =>
    props.alignItems ? props.alignItems : 'flex-start'};
  padding: 0;
  cursor: pointer;

  @media (max-width: 850px) {
    display: none;
  }
`;

export const LogoStyles = styled.image`
  width: 25vw;
  padding: 0rem 0.25rem;
  cursor: pointer;

  &:hover {
    border: 1px solid ${({ theme }) => theme.colors.primary.primaryColor};
    background-color: ${({ theme }) => theme.colors.primary.backgroundColor};
    border-radius: 0.25rem;
  }

  &:active {
    border: 4px solid ${({ theme }) => theme.colors.primary.activeLinkColor};
  }
`;

export const NavbarContainer = styled.div`
  width: 75vw;
  display: flex;
  flex-flow: row nowrap;
  justify-content: space-evenly;
  align-items: center;
  margin: 0;
  padding: 0;
`;
