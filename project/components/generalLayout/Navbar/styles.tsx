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

  @media (max-width: 768px) {
    flex-direction: ${(props) =>
      props.flexDirection ? props.flexDirection : 'column'};
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

  @media (max-width: 490px) {
    min-width: 180px;
  }
`;

export const NavbarContainer = styled.div`
  width: 65vw;
  display: flex;
  flex-flow: row nowrap;
  justify-content: space-evenly;
  align-items: center;
  margin: 0;
  padding: 0;

  @media (max-width: 490px) {
    flex-flow: row wrap;
  }
`;

export const MenuContainer = styled.div`
  width: 65vw;
  display: flex;
  flex-flow: row nowrap;
  justify-content: space-between;
  align-items: flex-end;
  margin: 0;
  padding: 0;
`;

export const NavbarMenuWrapper = styled.div`
  display: flex;
  flex-flow: column nowrap;
`;
