import styled from 'styled-components';

export const SearchBoxWrapperDesktop = styled.div`
  width: 100%;
  height: 350px;
  margin: 0;
  padding-top: 20vh;
  background-image: url('../../../images/osebro-bookshelf-search-background_1366x350.jpg');

  @media (max-width: 768px) {
    display: none;
  }
`;

export const SearchBoxWrapperMobile = styled.div`
  width: 100%;
  height: 25vh;
  margin: 0;
  padding-top: 5vh;
  background-color: ${({ theme }) => theme.colors.primary.primaryColorWhite};

  @media (min-width: 767px) {
    display: none;
  }
`;
