import "./SearchBar.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowUpShortWide, faArrowUpWideShort, faFilter, faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { useState, useRef, useEffect } from "react";
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

export function SearchBar({ label, searchValue, setSearchValue }) {
  const [showFilterPopup, setShowFilterPopup] = useState(false);
  const handleFilterClick = () => {
    setShowFilterPopup(!showFilterPopup);
  }
  const [searchDate, setSearchDate] = useState("");
  const outsideClickRef = useRef(null);

  const handleClickOutside = (event) => {
    if (outsideClickRef.current && !outsideClickRef.current.contains(event.target)) {
      setShowFilterPopup(false);
    }
  };

  // Aggiunta e rimozione del listener
  useEffect(() => {
    // Aggiunge l'evento al montaggio
    document.addEventListener('mousedown', handleClickOutside);

    // Rimuove l'evento allo smontaggio
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (

    <div className="search-container">
      <label className="label">{label}</label>
      <input className="search-bar" name="search-query" value={searchValue}
        onChange={(e) => setSearchValue(e.target.value)}
      />

      <button className="search-button">
        <FontAwesomeIcon icon={faMagnifyingGlass} className="icon" />
      </button>
      <div ref={outsideClickRef}>
        <button className="filter-button" onClick={handleFilterClick} >
          <FontAwesomeIcon icon={faFilter} className="icon" />
        </button>
        {showFilterPopup && (
          filteredSearchPopup(searchDate, setSearchDate)
        )}
      </div>
    </div>

  );
}

function filteredSearchPopup(searchDate, setSearchDate) {
  return (
    <div className="filter-popup">
      Ordine:
      <div className="order-buttons">
        <button className="order-button"><FontAwesomeIcon icon={faArrowUpShortWide} /></button>
        <button className="order-button"><FontAwesomeIcon icon={faArrowUpWideShort} /></button>
      </div>Data di Caricamento:
      <input value={searchDate} type="date" onChange={(e) => setSearchDate(e.target.value)} />
      Regione:
      <select>
        <option value="toscana">Toscana</option>
        <option value="lazio">Lazio</option>
        <option value="liguria">Liguria</option>
        <option value="emilia-romagna">Emilia Romagna</option>
      </select>
    </div>
  )
}