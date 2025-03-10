import { SearchBar } from "../SearchBar/SearchBar";
import "./PageTitle.css";
export function PageTitle({ props }) {
  /*
Search Bar da aggiungere il passaggio dei default sia per la searchbar in se
sia per il bottone di ricerca.
*/
  return (
    <div className="container-page-title">
      <text className="titolo">{props.titolo}</text>
      <SearchBar />
    </div>
  );
}
