import "./ImgSlideShow.css";
import { useState } from "react";

/* 
Il componente ImgSlideShow rappresenta uno slideshow di immagini con funzionalità di navigazione e visualizzazione a schermo intero.
- Accetta una prop:
  - img_array: un array di oggetti contenenti i link delle immagini da visualizzare.
- Utilizza useState per gestire lo stato locale:
  - currentImgIndex: l'indice dell'immagine attualmente visualizzata.
  - fullScreenStatus: uno stato booleano per determinare se l'immagine è visualizzata a schermo intero.
- Include pulsanti per navigare tra le immagini precedenti e successive.
- Consente di attivare/disattivare la modalità a schermo intero per l'immagine corrente.
- Lo stile del componente è gestito tramite il file CSS "ImgSlideShow.css".
*/

export function ImgSlideShow({ img_array }) {
  const [currentImgIndex, setImageIndex] = useState(0);
  const [fullScreenStatus, setFullScreenStatus] = useState(false);

  function getPrvIndex() {
    return currentImgIndex === img_array.length - 1 ? 0 : currentImgIndex + 1;
  }
  function getNextIndex() {
    return currentImgIndex === img_array.length - 1 ? 0 : currentImgIndex + 1;
  }

  return (
    <div className="img-slide-show">
      <button className="prv-img" onClick={() => setImageIndex(getPrvIndex())}>
        prv
      </button>
      <img
        className="l-img"
        src={img_array[getPrvIndex()].img_link}
        alt="errore"
      ></img>

      <button onClick={() => setFullScreenStatus(!fullScreenStatus)}>
        {fullScreenStatus ? (
          renderFullScreenImage()
        ) : (
          <img
            className="img"
            src={img_array[currentImgIndex].img_link}
            alt="errore"
          />
        )}
      </button>

      <img
        className="r-img"
        src={img_array[getNextIndex()].img_link}
        alt="errore"
      ></img>

      <button
        className="next-img"
        onClick={() => setImageIndex(getNextIndex())}
      >
        next
      </button>
    </div>
  );
  function renderFullScreenImage() {
    return (
      <div className="test">
        <img className="full-img" src={img_array[currentImgIndex].img_link} />
      </div>
    );
  }
}
