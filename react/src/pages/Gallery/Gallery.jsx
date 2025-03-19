import { useState } from "react";
import "./Gallery.css";
import { PageTitle } from "../../components/PageTitle/PageTitle";
import { ImgSlideShow } from "../../components/ImgSlideShow/ImgSlideShow";
import { ImgGallery } from "../../components/ImgGallery/ImgGallery";



/*rendere i bottone evidenziato in base alla scelta selezionata, bisogna far 
variare il css in base allo stato della variabile img_show
Da aggiungere un paging system per la vista a gallery o un caricamento dinamico delle immagini
per lo slideshow
*/

export function Gallery()
{
    let titolo_info = {
        titolo: "Gallery",
        search_bar_default_text: "test",
        search_buttond_default: "test",
      };
    let img_array = [
        "https://placehold.co/400?text=ciao",
        "https://placehold.co/400?text=bellezze",
        "https://placehold.co/400?text= trapani in fiamme",
      ];
      const[img_show, setImgShow] = useState(0)

    return(
        <div className="page-background">
            <PageTitle props = {titolo_info}/>
            <div className="chng-visualization-button">
                <button onClick={()=>(setImgShow(0))}> Gallery</button>
                <button onClick={()=>(setImgShow(1))}> SlideShow</button>
            </div>
            {img_show === 1? <ImgSlideShow img_array={img_array}/> : <ImgGallery img_array={img_array}/>}



        </div>


    );
}