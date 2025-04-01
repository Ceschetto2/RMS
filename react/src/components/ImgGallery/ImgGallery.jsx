import { useState } from "react";
import "./ImgGallery.css";
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