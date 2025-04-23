import { useState } from "react";
import "./ImgGallery.css";

/* 
Il componente ImgGallery rappresenta una galleria di immagini con funzionalità di visualizzazione a schermo intero.
- Accetta una prop:
  - img_array: un array di oggetti contenenti i link delle immagini da visualizzare.
- Utilizza useState per gestire lo stato locale:
  - fullScreenImage: memorizza il link dell'immagine attualmente visualizzata a schermo intero.
- Ogni immagine nella galleria è cliccabile e, se selezionata, viene mostrata a schermo intero.
- La modalità a schermo intero può essere chiusa cliccando sull'immagine visualizzata.
- Lo stile del componente è gestito tramite il file CSS "ImgGallery.css".
*/

export function ImgGallery({ img_array }) {
    const[fullScreenImage, setFullScreenImage] = useState(null);
  return (
    <div className="gallery-container">
      {img_array.map((img_source, index) => (
        <button className="button-img" onClick={() => setFullScreenImage(img_source.img_link)}>
          <img key={index}  className="img-gallery" src={img_source.img_link} />
        </button>
        ))}

        {fullScreenImage === null? null: renderFullScreenImage(fullScreenImage)}
    </div>
  );

  function renderFullScreenImage() {

    return (
      <div className="test" onClick={()=>setFullScreenImage(null)}>
        <img className="full-img" src={fullScreenImage} />
      </div>
    );
  }
}
0