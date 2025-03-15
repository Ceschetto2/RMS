import { Link } from "react-router-dom";
import "./Footer.css";

export function Footer( {props}) {


  return (
    <div className="footer">
      <div className="firs-row">
        <div className="contatti-box">
          <h2 className="h2">Contatti </h2>
          <ul>
            <li className="text "> Email: info@esempio.com </li>
            <li Telefono className="text">
              Tel: +39 123 456 789
            </li>
          </ul>
        </div>
        <div className="contatti-box">
          <h2 className="h2">Link utili</h2>
          <ul>
            <li textAlign="left">
              <a href="/privacy" className="text ">
                Privacy Policy
              </a>
            </li>
            <li>
              <a href="/terms" className="text ">
                Termini e condizioni
              </a>
            </li>
          </ul>
        </div>
        <div className="contatti-box">
          <h2 className="h2">Seguici</h2>
          <ul>
            <li>
              <a href="https://facebook.com" className="text">
                Facebook
              </a>
            </li>
            <li>
              <a href="https://twitter.com" className="text">
                Twitter
              </a>
            </li>
            <li>
              <a href="https://instagram.com" className="text">
                Instagram
              </a>
            </li>
          </ul>
        </div>
      </div>
      Contatti Sviluppatori:
      <div className="devs-box">
        {props.map((dev, index) => (
          <DevContact key={index} props={dev} />
        ))}
      </div>
    </div>
  );
}


function DevContact({ props }) {
  return (
    <div className="dev-signature">
      <a href={props.devSocialLink} className="link-left ">
        {props.devName}
      </a>
      <img className="developersimg" src={props.devImgLink} alt="Developer 1" />
    </div>
  );
}
