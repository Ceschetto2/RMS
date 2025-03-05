import { ContainerNotizie } from "../../components/ContainerNotizie/ContainerNotizie";
import "./Notizie.css"
export function Notizie(){
    return(
        <div className="Notizie">
        <h1 className="Title">Notizie</h1>
        <ContainerNotizie/>
        </div>
    );
}