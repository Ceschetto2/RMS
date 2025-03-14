import { Link } from "react-router-dom";
import "./Footer.css";

export function Footer() {

  let lista_footer = [
    {
      contatti : "Riccardo Boccuto",
      
      telefono: "xxx-xxxxxx",
    },
  ]

  
  return (
  <div className="footer">
    <div>
      <h2 className="contatti">Contatti  </h2> 
          <p className="mail "> Email: info@esempio.com  </p> 
          <p Telefono className="tel">Tel: +39 123 456 789 </p>
          </div> 
          <div>
          <h2 className="link">Link utili</h2>
          
            <a href="/privacy" className="link-left ">Privacy Policy</a>
           <p> <a href="/terms" className="link-left ">Termini e condizioni</a></p>
        
        </div>
        <div>
          <h2 className="seguici">Seguici</h2>
          <a href="https://facebook.com" className="link-left ">Facebook</a>
         <p> <a href="https://twitter.com" className="link-left ">Twitter</a></p>
          <a href="https://instagram.com" className="link-left ">Instagram</a>
        </div>
      
        <p style={{ textAlign: "right",marginRight: "20px",font:"small-caption" }}> Sito creato da:</p>
        <a style={{ textAlign: "right",marginRight: "20px",font:"small-caption" }} href="https://www.linkedin.com/in/francesco-bocci-37741925b/" className="link-left ">Francesco Bocci </a>
     <a style={{ textAlign: "right",marginRight: "20px",font:"small-caption" }} href="https://www.linkedin.com/in/claudia-cappelluti-125bb2215/" className="link-left ">Gabriele De Carolis</a>
     <a style={{ textAlign: "right",marginRight: "20px",font:"small-caption" }} href="https://www.linkedin.com/in/claudia-cappelluti-125bb2215/" className="link-left ">Claudia A.Cappelluti</a>
    
        <div className="developers">
 <img src="https://i.postimg.cc/C5tWBVYv/Screenshot-2025-03-14-114412.png" alt="Developer 1" />
       <img src="https://i.postimg.cc/q7RXY623/744-A5626-2-A71-46-D7-A2-D3-97-C1-F866-ADA0.png" alt="Developer 2" />
       <img src="https://i.postimg.cc/8PNv9rSz/CCE0752-D-7-AB7-4-E16-A60-F-1-D623-D933-A6-C.png" alt="Developer 3" />
</div>

      
  </div>)
  
  ;
}
