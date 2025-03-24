
import "./ImgGallery.css"
export function ImgGallery({img_array})
{
    return(
    <div className="gallery-container">
        {img_array.map((img_source, index)=>(<img className="img-gallery" src ={img_source.img_link}/>))}
        
    </div>
    );
}