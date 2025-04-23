import { SearchBar } from "../SearchBar/SearchBar";
import "./PageTitle.css";
export function PageTitle({ title,searchLabel, searchValue, setSearchValue }) {

/* 
Il componente PageTitle rappresenta un'intestazione di pagina con un titolo e una barra di ricerca.
- Accetta quattro prop:
  - title: il testo del titolo visualizzato nella pagina.
  - searchLabel: l'etichetta visualizzata accanto alla barra di ricerca.
  - searchValue: il valore corrente del campo di input della barra di ricerca.
  - setSearchValue: la funzione per aggiornare il valore del campo di input.
- Include il componente SearchBar per gestire la funzionalità di ricerca.
- Lo stile del componente è gestito tramite il file CSS "PageTitle.css".
*/

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
