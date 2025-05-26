import "./AdviseContainer.css"
import { UseState } from "react";
import StandardNewsImage from "../../Assets/StandardNewsImage.jpg";


export function AdviseShow({ img_url, title, object, description }) {
    if (!(title || object || description)) return null;
    return (

        <div className="adv-show">
            <img className="adv-immagine-info" src={img_url || StandardNewsImage} alt="Immagine mancante"></img>


            <text className="adv-titolo-info" alt="titolo"> {title} </text>

            <text className="adv-oggetto-info" alt="oggetto"> {object}  </text>
            <text className="adv-descrizione-info" alt="descrizione "> {description}  </text>

        </div>

    )



}