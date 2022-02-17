import { SearchBoxWrapperDesktop, SearchBoxWrapperMobile } from './styles';
import { BookSearchDesktop, BookSearchMobile } from '../SearchBox';

export default function HomeContent() {
  return (
    <>
      <h1>Antikvariske og brukte bøker i alle kategorier</h1>
      <SearchBoxWrapperDesktop>
        <BookSearchDesktop />
      </SearchBoxWrapperDesktop>
      <SearchBoxWrapperMobile>
        <BookSearchMobile />
      </SearchBoxWrapperMobile>
    </>
  );
}
