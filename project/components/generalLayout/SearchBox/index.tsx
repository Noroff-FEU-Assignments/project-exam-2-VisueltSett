import {
  SearchBoxBackgroundDesktop,
  SearchBoxBackgroundMobile,
  SearchBoxInput,
  SearchHeaderWrapper,
} from './styles';

import { IconContainer } from '../../helpers/IconContainer';

import { Search } from '@styled-icons/material-outlined';

export function BookSearchDesktop() {
  return (
    <>
      <SearchBoxBackgroundDesktop>
        <SearchHeaderWrapper>
          <IconContainer>
            <Search />
          </IconContainer>
          <h3>Hurtigsøk</h3>
        </SearchHeaderWrapper>
        <SearchBoxInput placeholder="Søk på boktittel, forfatter eller kategori... "></SearchBoxInput>
      </SearchBoxBackgroundDesktop>
    </>
  );
}

export function BookSearchMobile() {
  return (
    <>
      <SearchBoxBackgroundMobile>
        <SearchHeaderWrapper>
          <IconContainer>
            <Search />
          </IconContainer>
          <h3>Hurtigsøk</h3>
        </SearchHeaderWrapper>
        <SearchBoxInput placeholder="Søk på boktittel, forfatter eller kategori... "></SearchBoxInput>
      </SearchBoxBackgroundMobile>
    </>
  );
}
