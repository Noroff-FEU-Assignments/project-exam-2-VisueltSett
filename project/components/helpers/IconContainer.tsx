import styled from 'styled-components';

export const IconContainer = styled.div`
  padding: 0 10px;
  cursor: pointer;

  & svg {
    height: 30px;
    fill: ${({ theme }) => theme.colors.primary.iconColor};

    &:hover {
      fill: ${({ theme }) => theme.colors.primary.hoverColor};
    }
    &:active {
      fill: ${({ theme }) => theme.colors.primary.activeIconColor};
    }
  }
`;
