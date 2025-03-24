import "./ImgSlideShow.css";
import { useState } from "react";

export function ImgSlideShow({ img_array }) {
  const [currentImgIndex, setImageIndex] = useState(0);
  const [fullScreenStatus, setFullScreenStatus] = useState(false);

  function getPrvIndex() {
    if (img_array.length !== 0)
      return currentImgIndex === 0 ? img_array.length - 1 : currentImgIndex - 1;
  }
  function getNextIndex() {
    if (img_array.length !== 0)
      return currentImgIndex === img_array.length - 1 ? 0 : currentImgIndex + 1;
  }

  return (
    <div className="img-slide-show">
      <button className="prv-img" onClick={() => setImageIndex(getPrvIndex())}>
        prv
      </button>
      <img className="l-img" src={img_array[getPrvIndex()].img_link}></img>

      <button onClick={() => setFullScreenStatus(!fullScreenStatus)}>
        {fullScreenStatus ? (
          renderFullScreenImage()
        ) : (
          <img className="img" src={img_array[currentImgIndex].img_link} alt="errore" />
        )}
      </button>

      <img className="r-img" src={img_array[getNextIndex()].img_link}></img>

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
        <img className="full-img" src={img_array[currentImgIndex]}/>
      </div>
    );
  }
}
