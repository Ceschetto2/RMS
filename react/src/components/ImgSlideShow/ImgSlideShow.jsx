import "./ImgSlideShow.css"
import { useState } from "react";

export function ImgSlideShow({ img_array }) {
  const [currentImgIndex, setImageIndex] = useState(0);


  function getPrvIndex(){
    if (img_array.length !== 0)
       return currentImgIndex === 0 ? img_array.length - 1 : currentImgIndex - 1
  
  }
  function getNextIndex(){
    if (img_array.length !== 0)
        return currentImgIndex === img_array.length - 1 ? 0 : currentImgIndex + 1

    }



  

  return (
    <div className="img-slide-show">
      <button className="prv-img" onClick={() => setImageIndex(getPrvIndex())}>
        prv
      </button>
      <img className="l-img" src={img_array[getPrvIndex()]}></img>
      <img className="img" src={img_array[currentImgIndex]} alt="errore"></img>
      <img className="r-img" src={img_array[getNextIndex()]}></img>
      <button className="next-img" onClick={()=>(setImageIndex(getNextIndex()))}>
        next
      </button>
    </div>
  );
}
