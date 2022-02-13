import styled from 'styled-components';
export const PageWrapper = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  height: 100vh;
  width: 100%;
  background-color: ${({ theme }) => theme.colors.primary.primary1};
  color: ${({ theme }) => theme.colors.secondary.secondary2};
`;
