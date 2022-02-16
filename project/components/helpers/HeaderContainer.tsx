import styled from 'styled-components';

export const HeaderContainer = styled.header`
  ${({ theme }) => theme.typography};
  display: flex;
  background-color: #2a3370;
  background-image: linear-gradient(
    135deg,
    #2a3370 5%,
    #55669c 17%,
    #55669c 18%,
    #2a3370 40%
  );
  height: 15vh;
  width: 100%;
  padding: 0.25rem 1.25rem;
  align-items: flex-start;
  justify-content: space-evenly;
  color: ${({ theme }) => theme.colors.primary.primaryColor};
`;
