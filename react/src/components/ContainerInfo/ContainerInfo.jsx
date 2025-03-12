import "./ContainerInfo.css"

export function ContainerInfo({props})
{
    return(
        <div className="container-info">
            <img className="immagine-info" src={props.img_url}  alt ="Immagine mancante"></img>
            <div className="text-box">
                <div className="header-info-box">
                    <text className="titolo-info" alt = "titolo"> {props.titolo} </text>
                    <text className="data-pubblicazione-info" alt = "nan "> data pubblicazione: {props.dataPubblicazione}  </text>

                </div>
                <text className="oggetto-info" alt = "oggetto"> {props.oggetto}  </text>    
                <text className="descrizione-info" alt = "descrizione "> {props.descrizione}  </text>
            </div>
        </div>
    );
}