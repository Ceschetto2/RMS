import "./ContainerInfo.css"

export function ContainerInfo({props})
{
    return(
        <div className="container-info">
            <img className="immagine-info" src="https://st2.depositphotos.com/6789684/12262/v/450/depositphotos_122620866-stock-illustration-illustration-of-flat-icon.jpg"  alt ="Immagine mancante"></img>
            <div className="text-box">
                <text className="titolo-info" alt = "titolo"> {props.titolo} </text>
                <text className="data-pubblicazione-info" alt = "nan "> data pubblicazione: {props.dataPubblicazione}  </text>
                <text className="oggetto-info" alt = "oggetto"> {props.oggetto}  </text>
                <text className="descrizione-info" alt = "descrizione "> {props.descrizione}  </text>
            </div>
        </div>
    );
}