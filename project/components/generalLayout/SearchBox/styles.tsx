import styled from 'styled-components';

export const SearchBoxInput = styled.input`
  background-color: ${({ theme }) => theme.colors.primary.backgroundColor};
  padding: 0.5rem;
  width: 47%;
  border-radius: 0.25rem;
  border: 1px solid ${({ theme }) => theme.colors.secondary.secondaryColor};
  box-shadow: ${({ theme }) => theme.colors.primary.boxShadowColor};
`;

export const SearchBoxBackgroundDesktop = styled.div`
  width: 60vw;
  height: 20vh;
  margin: 0 auto;
  background-color: ${({ theme }) =>
    theme.colors.primary.searchBoxBackgroundColor};
  color: ${({ theme }) => theme.colors.primary.primaryColor};
  text-shadow: ${({ theme }) => theme.colors.primary.primaryColorTextShadow};
  box-shadow: ${({ theme }) => theme.colors.primary.boxShadowColor};
  border-radius: 0.25rem;

  @media (max-width: 850px) {
    display: visible;
  }
`;

export const SearchBoxBackgroundMobile = styled.div`
  width: 60vw;
  height: 20vh;
  margin: 0 auto;
  background-color: ${({ theme }) =>
    theme.colors.primary.searchBoxBackgroundColor};
  color: ${({ theme }) => theme.colors.primary.primaryColor};
  text-shadow: ${({ theme }) => theme.colors.primary.primaryColorTextShadow};
  box-shadow: ${({ theme }) => theme.colors.primary.boxShadowColor};
  border-radius: 0.25rem;

  @media (max-width: 849px) {
    display: none;
  }
`;

/*export const Select = styled.select`
  background-color: #ddd;
  margin-right: -1.2em;
  padding: 0.72em 0.5em;
  border-radius: 0.2em 0em 0em 0.2em;
  border: none;
  cursor: pointer;

  @media (max-width: 850px) {
    display: none;
  }
`;*/
