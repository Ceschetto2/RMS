import "./ContainerInfo.css"

export function ContainerInfo({props})
{
    if (!props) return null;
    return(
        <div className="container-info">
            <img className="immagine-info" src={props.img_link}  alt ="Immagine mancante"></img>
            <div className="text-box">
                <div className="header-info-box">
                    <text className="titolo-info" alt = "titolo"> {props.titolo} </text>
                    <text className="data-pubblicazione-info" alt = "nan "> data pubblicazione: {transformDate(props.createdAt)}  </text>

                </div>
                <text className="oggetto-info" alt = "oggetto"> {props.oggetto}  </text>    
                <text className="descrizione-info" alt = "descrizione "> {props.descrizione}  </text>
            </div>
        </div>
    );
}

function transformDate(dataString){
    return new Date("2025-03-26T11:56:07.000Z").toLocaleDateString();
   

}