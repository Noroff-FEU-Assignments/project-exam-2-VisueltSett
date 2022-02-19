import styled from 'styled-components';

export const SearchBoxWrapperDesktop = styled.div`
  width: 100%;
  max-height: 350px;
  min-height: 25vh;
  margin: 0;
  padding: 10vh 0;
  background-image: url('../../../images/osebro-bookshelf-search-background_1366x350.jpg');

  @media (max-width: 590px) {
    display: none;
  }
`;

export const SearchBoxWrapperMobile = styled.div`
  width: 100%;
  height: 25vh;
  margin: 0;
  padding-top: 5vh;
  background-color: ${({ theme }) => theme.colors.primary.primaryColorWhite};

  @media (min-width: 589px) {
    display: none;
  }
`;
