import { useEffect, useState } from "react";
import "./Gallery.css";
import { PageTitle } from "../../components/PageTitle/PageTitle";
import { ImgSlideShow } from "../../components/ImgSlideShow/ImgSlideShow";
import { ImgGallery } from "../../components/ImgGallery/ImgGallery";
import axios from "axios"


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

    const[img_show, setImgShow] = useState(0)
    let[img_array, setImgArray] = useState([])
    useEffect(()=>{
        const fetchImages = async () => {
            const response = await axios.get("http://localhost:8080/GalleryImages",
                {
                    params: { data: "" }
                }
            );
            console.log(response.data);
            setImgArray(response.data)
        }

     
        fetchImages();
        console.log(img_array.img_array)

    },[])
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