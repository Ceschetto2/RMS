import { SearchBar } from "../SearchBar/SearchBar";
import "./PageTitle.css";
export function PageTitle({ title, searchValue, setSearchValue }) {
  /*
Search Bar da aggiungere il passaggio dei default sia per la searchbar in se
sia per il bottone di ricerca.
*/
console.log(searchValue)

  return (
    <div className="container-page-title">
      <text className="titolo">{title}</text>
      <SearchBar searchValue = {searchValue} setSearchValue={setSearchValue} />
    </div>
  );
}
