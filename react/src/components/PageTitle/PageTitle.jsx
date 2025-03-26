import { SearchBar } from "../SearchBar/SearchBar";
import "./PageTitle.css";
export function PageTitle({ title,searchLabel, searchValue, setSearchValue }) {
  /*
Search Bar da aggiungere il passaggio dei default sia per la searchbar in se
sia per il bottone di ricerca.
*/

  return (
    <div className="container-page-title">
      <text className="titolo">{title}</text>
      <SearchBar searchLabel= {searchLabel} searchValue = {searchValue} setSearchValue={setSearchValue} />
    </div>
  );
}
