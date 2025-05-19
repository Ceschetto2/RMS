import { useEffect, useState } from "react";
import "./Gallery.css";
import { PageTitle } from "../../components/PageTitle/PageTitle";
import { ImgSlideShow } from "../../components/ImgSlideShow/ImgSlideShow";
import { ImgGallery } from "../../components/ImgGallery/ImgGallery";
import axios from "axios";

/* 
Il componente Gallery gestisce e visualizza un elenco di immagini recuperate da un'API.
- Utilizza useState per gestire lo stato locale:
  - SearchValue memorizza il valore della barra di ricerca.
  - img_show determina la modalità di visualizzazione (galleria o slideshow).
  - img_array contiene l'elenco delle immagini recuperate dall'API.
- useEffect viene utilizzato per eseguire una chiamata API ogni volta che SearchValue cambia.
- La funzione fetchImages recupera i dati dall'endpoint "http://localhost:8080/GalleryImages" tramite axios,
  passando il valore di SearchValue come parametro di ricerca.
- Se non ci sono immagini disponibili, viene mostrato un messaggio di errore "There are no elements".
- L'utente può alternare tra la visualizzazione in galleria (ImgGallery) e slideshow (ImgSlideShow) tramite pulsanti.
- Lo stile del componente è gestito tramite il file CSS "Gallery.css".
*/

/*rendere i bottone evidenziato in base alla scelta selezionata, bisogna far 
variare il css in base allo stato della variabile img_show
Da aggiungere un paging system per la vista a gallery o un caricamento dinamico delle immagini
per lo slideshow
*/

export function Gallery() {
  const [searchData, setSearchData] = useState({text: "", date: "", isOrdGrow: true});


  const [img_show, setImgShow] = useState(0);
  let [img_array, setImgArray] = useState([]);
  useEffect(() => {
    const fetchImages = async () => {
      const response = await axios.get("http://localhost:8080/GalleryImages", {
        params: { data: searchData.text },
      });
      
      setImgArray(response.data);
    };

    

    fetchImages();
  }, [searchData]); //la funzione di quary si richiama ogni qualvolta SearchValue viene modificato

  return (
    <section id="sezione_gallery">
    <div className="page-background">
      <PageTitle
        title="Gallery"
        searchLabel="Search:"
        searchData={searchData}
        setSearchData={setSearchData}
      />
      {img_array.length === 0 ? (
        <div className="Error">There are no elements</div>
      ) : (
        <>
          <div className="chng-visualization-button">
            <button onClick={() => setImgShow(0)}> Gallery</button>
            <button onClick={() => setImgShow(1)}> SlideShow</button>
          </div>
          {img_show === 1 ? (
            <ImgSlideShow img_array={img_array} />
          ) : (
            <ImgGallery img_array={img_array} />
          )}
        </>
      )}
      
    </div>
   </section>
  );
}
