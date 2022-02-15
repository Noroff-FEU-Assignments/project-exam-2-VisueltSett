import styled from 'styled-components';
export const PageWrapper = styled.main`
  ${({ theme }) => theme.typography};
  display: flex;
  flex-direction: column;
  text-align: center;
  justify-content: space-evenly;
  align-items: center;
  min-height: 100vh;
  width: 100%;
  background-color: ${({ theme }) => theme.colors.primary.primaryColor};
  color: ${({ theme }) => theme.colors.secondary.secondaryCOlor};
  margin: 0;
  padding: 0;
`;
