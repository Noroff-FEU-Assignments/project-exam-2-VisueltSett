import styled from 'styled-components';

export const SearchBoxInput = styled.input`
  background-color: ${({ theme }) => theme.colors.primary.backgroundColor};
  padding: 0.75rem 1rem;
  width: 90%;
  border-radius: 0.25rem;
  border: 1px solid ${({ theme }) => theme.colors.secondary.secondaryColor};
  box-shadow: ${({ theme }) => theme.colors.primary.boxShadowColor};
`;

export const SearchHeaderWrapper = styled.div`
  display: flex;
  flex-flow: row nowrap;
  justify-content: flex-start;
  align-items: baseline;
  padding-left: 2rem;

  @media (max-width: 590px) {
    padding-left: 1rem;
  }
`;

export const SearchBoxBackgroundDesktop = styled.div`
  width: 85vw;
  max-width: 800px;
  height: 15vh;
  margin: 0 auto;
  background-color: ${({ theme }) =>
    theme.colors.primary.searchBoxBackgroundColor};
  background-image: linear-gradient(
    135deg,
    rgba(42, 51, 112, 0.6) 5%,
    rgba(85, 102, 156, 0.6) 17%,
    rgba(85, 102, 156, 0.6) 18%,
    rgba(42, 51, 112, 0.6) 40%
  );
  color: ${({ theme }) => theme.colors.primary.primaryColor};
  text-shadow: ${({ theme }) => theme.colors.primary.primaryColorTextShadow};
  box-shadow: ${({ theme }) => theme.colors.primary.boxShadowColor};
  border-radius: 0.25rem;

  @media (min-width: 1000px) {
    height: 18vh;
  }
`;

export const SearchBoxBackgroundMobile = styled.div`
  width: 90vw;
  height: 15vh;
  margin: 0 auto;
  background-color: ${({ theme }) =>
    theme.colors.primary.searchBoxBackgroundColor};
  background-image: linear-gradient(
    135deg,
    rgba(42, 51, 112, 0.6) 5%,
    rgba(85, 102, 156, 0.6) 17%,
    rgba(85, 102, 156, 0.6) 18%,
    rgba(42, 51, 112, 0.6) 40%
  );
  color: ${({ theme }) => theme.colors.primary.primaryColor};
  text-shadow: ${({ theme }) => theme.colors.primary.primaryColorTextShadow};
  box-shadow: ${({ theme }) => theme.colors.primary.boxShadowColor};
  border-radius: 0.25rem;
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
