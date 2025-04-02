import "./SearchBar.css";

/* 
Il componente SearchBar rappresenta una barra di ricerca con un'etichetta, un campo di input e un pulsante.
- Accetta tre prop:
  - label: il testo dell'etichetta visualizzata accanto alla barra di ricerca.
  - searchValue: il valore corrente del campo di input.
  - setSearchValue: la funzione per aggiornare il valore del campo di input.
- L'input è controllato, quindi il valore è sincronizzato con lo stato passato tramite searchValue.
- Il pulsante include un'icona di ricerca, ma non sembra avere un'azione associata nel codice mostrato.
- Lo stile del componente è gestito tramite il file CSS "SearchBar.css".
*/

export function SearchBar({label, searchValue, setSearchValue}) {

  return (
    <div className="search-container">
      <label className="label">{label}</label>
      <input className="search-bar" name="search-query" value={searchValue}
      onChange={(e) =>setSearchValue(e.target.value)}
      />
      
      <button className="search-button">
        <img
          className="search-icon"
          src="https://i.postimg.cc/DZmHVpK3/search.png"
        ></img>
      </button>
    </div>
  );
}
