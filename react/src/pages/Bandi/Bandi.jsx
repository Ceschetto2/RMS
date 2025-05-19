import { useEffect, useState } from "react";
import { ContainerInfo } from "../../components/ContainerInfo/ContainerInfo";
import { PageTitle } from "../../components/PageTitle/PageTitle";
import "./Bandi.css";
import axios from "axios";
/* 
Il componente Bandi gestisce e visualizza un elenco di bandi recuperati da un'API.
- Utilizza useState per gestire lo stato locale:
  - noticesList contiene l'elenco dei bandi recuperati dall'API.
  - searchValue memorizza il valore della barra di ricerca.
- useEffect viene utilizzato per eseguire una chiamata API ogni volta che searchValue cambia.
- La funzione fetchBandi recupera i dati dall'endpoint "http://localhost:8080/Bandi" tramite axios.
- Ogni bando recuperato viene visualizzato tramite il componente ContainerInfo, che riceve i dati del bando come prop.
- Lo stile del componente è gestito tramite il file CSS "Bandi.css".
*/

export function Bandi() {
  const [noticesList, setnoticesList] = useState([]);
  const [searchData, setSearchData] = useState({text: "", date: "", isOrdGrow: true});

  useEffect(() => {
    const fetchBandi = async () => {
      const bandi = await axios.get("http://localhost:8080/Bandi");
      setnoticesList(bandi.data);
    };
    fetchBandi();
  }, [searchData.text]);

  return (
    <section id="sezione_bandi">
    <div className="bandi">
      <PageTitle
        title={"Bandi"}
        searchLabel={"Search:"}
        searchData={searchData}
        setSearchData={setSearchData}
      />

      {noticesList.map((bando, index) => (
        <ContainerInfo
          key={index}
          title={bando.title}
          object={bando.object}
          description={bando.body}
          createdAt={bando.createdAt}
        />
      ))}
      </div>
      </section>
    
  );
}
