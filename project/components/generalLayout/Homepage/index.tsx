import { SearchBoxWrapper } from './styles';
import BookSearch from '../SearchBox';

export default function HomeContent() {
  return (
    <>
      <h1>Antikvariske og brukte bøker i alle kategorier</h1>
      <SearchBoxWrapper>
        <BookSearch />
      </SearchBoxWrapper>
    </>
  );
}
