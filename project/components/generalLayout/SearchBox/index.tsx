import React from 'react';
//import ReactDOM from 'react-dom';
import {
  SearchBoxBackgroundDesktop,
  SearchBoxBackgroundMobile,
  SearchBoxInput,
  SearchHeaderWrapper,
} from './styles';

import { IconContainer } from '../../helpers/IconContainer';

import { Search } from '@styled-icons/material-outlined';

export function BookSearchDesktop() {
  const [searchTerm, setSearchTerm] = React.useState('');
  const [searchResults, setSearchResults] = React.useState([]);
  const handleChange = (event: {
    target: { value: React.SetStateAction<string> };
  }) => {
    setSearchTerm(event.target.value);
  };

  return (
    <>
      <SearchBoxBackgroundDesktop>
        <SearchHeaderWrapper>
          <IconContainer>
            <Search />
          </IconContainer>
          <h3>Hurtigsøk</h3>
        </SearchHeaderWrapper>
        <SearchBoxInput
          type="text"
          placeholder="Søk på boktittel, forfatter eller kategori... "
          value={searchTerm}
          onChange={handleChange}
        ></SearchBoxInput>
      </SearchBoxBackgroundDesktop>
    </>
  );
}

export function BookSearchMobile() {
  const [searchTerm, setSearchTerm] = React.useState('');
  const [searchResults, setSearchResults] = React.useState([]);

  const handleChange = (event: {
    target: { value: React.SetStateAction<string> };
  }) => {
    setSearchTerm(event.target.value);
  };
  return (
    <>
      <SearchBoxBackgroundMobile>
        <SearchHeaderWrapper>
          <IconContainer>
            <Search />
          </IconContainer>
          <h3>Hurtigsøk</h3>
        </SearchHeaderWrapper>
        <SearchBoxInput
          type="text"
          placeholder="Boktittel / forfatter / kategori"
          value={searchTerm}
          onChange={handleChange}
        ></SearchBoxInput>
      </SearchBoxBackgroundMobile>
    </>
  );
}
