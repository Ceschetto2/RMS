import { useEffect, useState } from "react";
import { ContainerInfo } from "../../components/ContainerInfo/ContainerInfo";
import { PageTitle } from "../../components/PageTitle/PageTitle";
import "./Notizie.css";
import axios from "axios"

/* 
Il componente Notizie gestisce e visualizza un elenco di notizie recuperate da un'API.
- Utilizza useState per gestire lo stato locale:
  - searchValue memorizza il valore della barra di ricerca.
  - newsList contiene le notizie recuperate dall'API.
- useEffect viene utilizzato per eseguire una chiamata API ogni volta che searchValue cambia.
- La funzione fetchNotizie recupera i dati dall'endpoint "http://localhost:8080/Notizie" tramite axios,
  passando il valore di searchValue come parametro di ricerca.
- Se non ci sono risultati, viene mostrato un messaggio "Nessun risultato trovato".
- Ogni notizia recuperata viene visualizzata tramite il componente ContainerInfo, che riceve i dati della notizia come prop.
*/

export function Notizie() {

  const [searchData, setSearchData] = useState({text: "", date: "", isOrdGrow: true});

  const[newsList, setnewsList] = useState([])
 
  useEffect(()=>{
    const fetchNotizie = async() =>{
      const results = await axios.get("http://localhost:8080/Notizie",
        {
          params:{data: searchData.text},
        }
      )

      setnewsList(results.data)
    }
    fetchNotizie();
    //console.log(newsList)
  }, [searchData.text])
  

  return (
    <section id="sezione_notizie">
    <div className="notizie">
      <PageTitle title={"Notizie"} searchLabel={"Search:"} searchData={searchData} setSearchData={setSearchData} />

      {newsList.length===0 ? <div>Nessun risultato trovato</div>:
      newsList.map((notizia, index) => (
        <ContainerInfo key={index} img_url={notizia.img_url} description={notizia.description} title={notizia.title} object={notizia.object} createdAt = {notizia.createdAt}/>
      ))}

    
    </div>
    </section>

  );
}
