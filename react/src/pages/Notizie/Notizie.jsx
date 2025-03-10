import { ContainerInfo} from "../../components/ContainerInfo/ContainerInfo";
import "./Notizie.css";
export function Notizie() {

let lista_notizie =[
    {titolo: "titolo 1", descrizione: "descrizione 1", dataPubblicazione : "1/1/1/1", oggetto : "Oggetto 1" },
    {titolo: "titolo 2", descrizione: "descrizione 2"},
    {titolo: "titolo 3", descrizione: "descrizione 3"},
 

];

  return (
    <div className="notizie">
      <h1 className="titolo">Notizie</h1>
      {lista_notizie.map((notizia, index) => (<ContainerInfo key={index} props ={notizia}/>))}

    </div>
  );



}