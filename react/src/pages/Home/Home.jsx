import { ImgGallery } from "../../components/ImgGallery/ImgGallery";
import { ImgSlideShow } from "../../components/ImgSlideShow/ImgSlideShow";
import "./Home.css";

/* 
Il componente Home rappresenta la pagina principale dell'applicazione.
- Importa i componenti ImgGallery e ImgSlideShow, che gestiscono rispettivamente una galleria di immagini e una presentazione di immagini.
- Include un elemento <div> con attributi personalizzati (data-rel, data-href, ecc.), che sembra essere configurato per integrare un visualizzatore di contenuti esterni (ad esempio, un lightbox o un embed di FlipHTML5).
- Lo stile del componente è gestito tramite il file CSS "Home.css".
*/

export function Home() {

  return (
    <>
    <div data-rel="fh5-light-box-demo" data-href="https://online.fliphtml5.com/ablbg/csmw/" data-width="400" data-height="250" data-title="prova">v</div>
    </>
  );
}
