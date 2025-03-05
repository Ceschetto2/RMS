import { ContainerNotizie } from "../../components/ContainerNotizie/ContainerNotizie";
import "./Notizie.css";
export function Notizie() {

let lista_notizie =[
    {titolo: "titolo 1", descrizione: "descrizione 1"},
    {titolo: "titolo 2", descrizione: "descrizione 2"},
    {titolo: "titolo 3", descrizione: "descrizione 3"},
 

];

  return (
    <div className="notizie">
      <h1 className="titolo">Notizie</h1>
      {lista_notizie.map((notizia, index) => (<ContainerNotizie key={index} props ={notizia}/>))}

    </div>
  );



}