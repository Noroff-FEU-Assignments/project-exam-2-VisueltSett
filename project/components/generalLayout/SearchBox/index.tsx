import {
  SearchBoxBackgroundDesktop,
  SearchBoxBackgroundMobile,
  SearchBoxInput,
} from './styles';

import { IconContainer } from '../../helpers/IconContainer';

import { Search } from '@styled-icons/material-outlined';

export default function BookSearch() {
  return (
    <>
      <SearchBoxBackgroundMobile>
        <IconContainer>
          <Search />
        </IconContainer>
      </SearchBoxBackgroundMobile>
      <SearchBoxBackgroundDesktop>
        <IconContainer>
          <Search />
        </IconContainer>
      </SearchBoxBackgroundDesktop>
    </>
  );
}
