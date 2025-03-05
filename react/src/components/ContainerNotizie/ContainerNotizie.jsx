import "./ContainerNotizie.css"

export function ContainerNotizie(props)
{
    return(
        <div className="container-notizia">
            <img className="immagine-notizia" src="https://st2.depositphotos.com/6789684/12262/v/450/depositphotos_122620866-stock-illustration-illustration-of-flat-icon.jpg"  alt ="Immagine mancante"></img>
            <div className="text-box">
                <text className="titolo-notizia" alt = "titolo"> {props.titolo} </text>
                <text className="descrizione-notizia" alt = "descrizione "> {props.descrizione}  </text>
            </div>
        </div>
    );
}