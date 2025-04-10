import { useEffect, useState } from "react";
import { ContainerInfo } from "../../components/ContainerInfo/ContainerInfo";
import { PageTitle } from "../../components/PageTitle/PageTitle";
import "./Regolamento.css";

/* Il componente Regolamento gestisce e visualizza un elenco di regole recuperate da un'API.
- Utilizza useState per gestire lo stato locale: 
  - listaRegole contiene le regole recuperate dall'API.
  - searchValue memorizza il valore della barra di ricerca.
- La funzione fetchRegole recupera i dati dall'endpoint "http://localhost:8080/Regolamento" tramite axios e li salva in listaRegole.
- Il componente PageTitle visualizza il titolo della pagina e include una barra di ricerca che aggiorna searchValue.
- Ogni regola recuperata viene visualizzata tramite il componente ContainerInfo, che riceve i dati della regola come prop.
*/

export function Regolamento() {
  const[listaRegole, setListaRegole] = useState([])
  const[searchValue, setSearchValue] = useState("")

  useEffect(()=>{
    const fetchRegole = async() =>{
      const regole = await axios.get("http://localhost:8080/Regolamento")
      setListaRegole(regole.data);
    } 
    fetchRegole()
  },[searchValue])


  return (
    <div className="regolamento">
      <PageTitle title={"Regolamento"} searchLabel={"Search:"} searchValue={searchValue} setSearchValue={setSearchValue} />

      {listaRegole.map((regolamento, index) => (
        <ContainerInfo key={index} props={regolamento} />
      ))}
 
    </div>

  );
}
