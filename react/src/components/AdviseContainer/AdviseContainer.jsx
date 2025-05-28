import "./AdviseContainer.css"
import {UseState} from "react";
import StandardNewsImage from "../../Assets/StandardNewsImage.jpg";


export function AdviseShow({img_url,title,object,description}){
    if (!(title || object || description)) return null;
    return(
    
        <div className="adv-show">
             <img className="immagine-adv" src={img_url||StandardNewsImage }  alt ="Immagine mancante"></img>
            
        
                 <text className="titolo-adv" alt = "titolo"> {title} </text>
              {/*<div className="text-box"> </div>
                <div className="text-box"></div>*/}
                 <text className="oggetto-adv" alt = "oggetto"> {object}  </text>    
             <text className="descrizione-adv" alt = "descrizione "> {description}  </text>
           
    </div>
        
    )



}