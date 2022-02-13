import styled from 'styled-components';

export const HeaderContainer = styled.header`
  ${({ theme }) => theme.typography};
  display: flex;
  background-color: #2a3370;
  background-image: linear-gradient(
    135deg,
    #2a3370 8%,
    #55669c 18%,
    #637ab0 18.25%,
    #abedfd 18.5%,
    #637ab0 18.75%,
    #55669c 20%,
    #2a3370 96.5%
  );
  height: 120px;
  align-items: center;
  justify-content: space-evenly;
  color: ${({ theme }) => theme.colors.primary.primaryColor};
`;
