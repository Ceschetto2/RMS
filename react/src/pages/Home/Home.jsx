import { ImgGallery } from "../../components/ImgGallery/ImgGallery";
import { ImgSlideShow } from "../../components/ImgSlideShow/ImgSlideShow";
import "./Home.css";
export function Home() {
  let img_array = [
    "https://placehold.co/400?text=ciao",
    "https://placehold.co/400?text=bellezze",
    "https://placehold.co/400?text= trapani in fiamme",

  
  ];
  return (
    <>
      <ImgSlideShow img_array={img_array} />
      <ImgGallery img_array={img_array} />
    </>
  );
}
