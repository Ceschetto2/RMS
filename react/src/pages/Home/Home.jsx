import { useEffect, useState } from "react";
import { ContainerInfo } from "../../components/ContainerInfo/ContainerInfo";
import { PageTitle } from "../../components/PageTitle/PageTitle";
import { ImgGallery } from "../../components/ImgGallery/ImgGallery";
import { ImgSlideShow } from "../../components/ImgSlideShow/ImgSlideShow";
import { AdviseShow } from "../../components/AdviseContainer/AdviseContainer";

import Intro from "../../Assets/Intro.webm";
import "./Home.css";
import axios from "axios";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";

/* 
Il componente Home rappresenta la pagina principale dell'applicazione.
- Importa i componenti ImgGallery e ImgSlideShow, che gestiscono rispettivamente una galleria di immagini e una presentazione di immagini.
- Include un elemento <div> con attributi personalizzati (data-rel, data-href, ecc.), che sembra essere configurato per integrare un visualizzatore di contenuti esterni (ad esempio, un lightbox o un embed di FlipHTML5).
- Lo stile del componente è gestito tramite il file CSS "Home.css".
*/

export function Home() {
  let [img_array, setImgArray] = useState([]);
  const[newsList, setnewsList] = useState([]);
  const [noticesList, setnoticesList] = useState([]);

  useEffect(() => {
    const fetchImages = async () => {
      const response = await axios.get(
        "http://localhost:8080/GalleryImages/latest"
      );

      setImgArray(response.data);
      console.log(response.data);
    };


    fetchImages();
  }, []); //la funzione di quary si richiama ogni qualvolta SearchValue viene modificato

  useEffect(()=>{
    const fetchNotizie = async() =>{
      const results = await axios.get("http://localhost:8080/Notizie")
      
      setnewsList(results.data)
    }
    fetchNotizie();
    console.log(newsList)
  }, [])

  useEffect(() => {
    const fetchBandi = async () => {
      const bandi = await axios.get("http://localhost:8080/Bandi");
      setnoticesList(bandi.data);
    };
    fetchBandi();
    console.log(noticesList)
  }, []);
  /*React Router non gestisce gli anchor link come HTML puro.
  Soluzioni: Scroll manuale con useLocation + useEffect
 Cos'è useLocation()?È un hook di React Router
 che ti permette di accedere all'oggetto location, che contiene informazioni sull'URL corrente, 
 come:
-> pathname: la route attuale ("/"),
->search: query string (?nome=ciao)
-> hash: parte dopo # nell'URL (#sez2)
location.hash   :   restituisce la parte dell’URL dopo il #, ad esempio #sez2 è usata come riferimento ad un id HTML nella pagina.
Perché useEffect([location])?   :  L'effetto viene eseguito ogni volta che cambia la route (cioè quando cambia location)
quindi: 
Quando arrivi su /#sez2, location.hash sarà #sez2.
querySelector(hash) diventa querySelector("#sez2"), cioè cerca un elemento con id="sez2".
Se lo trova, chiama .scrollIntoView({ behavior: "smooth" }), che fa uno scroll automatico e fluido fino a quella sezione.*/

  const location = useLocation();

  useEffect(() => {
    const hash = location.hash;
    if (hash) {
      const element = document.querySelector(hash);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
  }, [location]);
  return (
    <div>
      <section id="sez2">
        <video className="video" src={Intro} autoPlay loop muted />
        <h2 className="element_title">Gallery</h2>
      </section>
      <div className="home_gallery">
        {img_array.length !== 0 ? (
          <ImgSlideShow className="home_gallery" img_array={img_array} />
        ) : (
          <>no images found</>
        )}
      </div>

      <Link className="nav-link-image" to="/#sez2">
        <img
          className="nav-image"
          src="https://i.postimg.cc/cCtQNy3H/Scroll.png"
          alt="scroll"
        ></img>
      </Link>

      <h2 className="element_title">Notizie</h2>
      <div className="news_show">
      {newsList.length ===0 ?<div>No new found</div> : newsList.map((notizia, index) => (
        <AdviseShow key={index} img_url={notizia.img_url} description={notizia.description} title={notizia.title} object={notizia.object} createdAt = {notizia.createdAt}/>
      )) }
      </div>

      <h2 className="element_title">Bandi</h2>
      <div className="bandi_show">
      {newsList.length ===0 ?<div>No Applications found</div> : noticesList.map((bando, index) => (
        <AdviseShow key={index} img_url={bando.img_url} description={bando.description} title={bando.title} object={bando.object} createdAt = {bando.createdAt}/>
      )) }
      </div>
      
    </div>
  );
}
