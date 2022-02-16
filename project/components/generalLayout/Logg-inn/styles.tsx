import styled from 'styled-components';

export const LoggInnBox = styled.div`
  ${({ theme }) => theme.typography};
  display: flex;
  flex-flow: column nowrap;
  justify-content: center;
  align-items: center;
  flex: 1;
  height: 30vh;
  max-width: 400px;
  min-width: 200px;
  border: 1px solid ${({ theme }) => theme.colors.secondary.secondaryColor};
  box-shadow: ${({ theme }) => theme.colors.primary.boxShadowColor};
  border-radius: 0.25rem;
  background-color: ${({ theme }) => theme.colors.primary.primaryColorWhite};
  margin: 3rem auto;

  input {
    padding: 8px;
    margin: 0 auto 1rem;
    border-radius: 0.25rem;
    width: 90%;
    max-width: 350px;
  }
`;
