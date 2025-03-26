import "./ContainerInfo.css"

export function ContainerInfo({notizia})
{
    if (!notizia) return null;
    return(
        <div className="container-info">
            <img className="immagine-info" src={notizia.img_link}  alt ="Immagine mancante"></img>
            <div className="text-box">
                <div className="header-info-box">
                    <text className="titolo-info" alt = "titolo"> {notizia.titolo} </text>
                    <text className="data-pubblicazione-info" alt = "nan "> data pubblicazione: {transformDate(notizia.createdAt)}  </text>

                </div>
                <text className="oggetto-info" alt = "oggetto"> {notizia.oggetto}  </text>    
                <text className="descrizione-info" alt = "descrizione "> {notizia.descrizione}  </text>
            </div>
        </div>
    );
}

function transformDate(dataString){
    return new Date("2025-03-26T11:56:07.000Z").toLocaleDateString();
   

}