import { useEffect, useState } from "react";
import { ContainerInfo } from "../../components/ContainerInfo/ContainerInfo";
import { PageTitle } from "../../components/PageTitle/PageTitle";
import "./Regolamento.css";
import axios from "axios";
/* Il componente Regolamento gestisce e visualizza un elenco di regole recuperate da un'API.
- Utilizza useState per gestire lo stato locale: 
  - ruleList contiene le regole recuperate dall'API.
  - searchValue memorizza il valore della barra di ricerca.
- La funzione fetchRegole recupera i dati dall'endpoint "http://localhost:8080/Regolamento" tramite axios e li salva in ruleList.
- Il componente PageTitle visualizza il titolo della pagina e include una barra di ricerca che aggiorna searchValue.
- Ogni regola recuperata viene visualizzata tramite il componente ContainerInfo, che riceve i dati della regola come prop.
*/

export function Regolamento() {
  const[ruleList, setruleList] = useState([])
    const [searchData, setSearchData] = useState({text: "", date: "", isOrdGrow: true});


  useEffect(()=>{
    const fetchRegole = async() =>{
      const regole = await axios.get("http://localhost:8080/Regolamento")
      setruleList(regole.data);
    } 
    fetchRegole()
  },[searchData.text])


  return (
    <div className="regolamento">
      <PageTitle title={"Regolamento"} searchLabel={"Search:"} searchData={searchData} setSearchData={setSearchData} />

      {ruleList.map((rule, index) => (
        <ContainerInfo key={index} title={rule.title} object={rule.object} description={rule.body} createdAt={rule.createdAt} />
      ))}
 
    </div>

  );
}
