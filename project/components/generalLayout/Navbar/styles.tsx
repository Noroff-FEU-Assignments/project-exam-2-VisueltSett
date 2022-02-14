import styled from 'styled-components';
import { ItemWrapper as NavItemWrapper } from '../../helpers/ItemWrapper';

export const NavStyle = styled.nav`
  color: ${({ theme }) => theme.colors.primary.primaryColor};
  font-size: ${({ theme }) => theme.typography.h3};
`;

export const NavWrapper = styled(NavItemWrapper)`
  display: flex;
  flex-direction: ${(props) =>
    props.flexDirection ? props.flexDirection : 'column'};
  align-items: ${(props) =>
    props.alignItems ? props.alignItems : 'flex-start'};
  padding: 0.5rem;
  cursor: pointer;
  border: 1px solid ${({ theme }) => theme.colors.secondary.secondaryColor};

  &:hover {
    border: 1px solid ${({ theme }) => theme.colors.primary.primaryColor};
    border-radius: 0.25rem;
  }
  @media (max-width: 850px) {
    display: none;
  }
`;

export const LogoStyles = styled.img`
  width: 40vw;
  border: 1px solid ${({ theme }) => theme.colors.secondary.secondary2};
  padding: 0rem 0.25rem;
  cursor: pointer;

  &:hover {
    border: 1px solid ${({ theme }) => theme.colors.primary.primary1};
    border-radius: 0.25rem;
  }

  &:active {
    border: 2px solid ${({ theme }) => theme.colors.primary.primary1};
  }
`;
