import { ContainerNotizie } from "../../components/ContainerNotizie/ContainerNotizie";
import "./Notizie.css"
export function Notizie(){
    
    return(
        <div className="notizie">
        <h1 className="titolo">Notizie</h1>
        <ContainerNotizie className = "Container" titolo = "titolo" descrizione = "descrizione"/>
        </div>
    );
}