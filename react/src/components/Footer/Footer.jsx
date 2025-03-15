import { Link } from "react-router-dom";
import "./Footer.css";

export function Footer() {
  let lista_footer = [
    {
      contatti: "Riccardo Boccuto",

      telefono: "xxx-xxxxxx",
    },
  ];

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
        {listaDev.map((dev, index) => (
          <DevContact key={index} props={dev} />
        ))}
      </div>
    </div>
  );
}

let listaDev = [
  {
    devName: "Claudia A. Cappelluti",
    devImgLink:
      "https://i.postimg.cc/C5tWBVYv/Screenshot-2025-03-14-114412.png",
    devSocialLink:
      "https://www.linkedin.com/in/claudia-antonia-cappelluti-39885824b/",
  },

  {
    devName: "Gabriele DeCarolis",
    devImgLink:
      "https://i.postimg.cc/q7RXY623/744-A5626-2-A71-46-D7-A2-D3-97-C1-F866-ADA0.png",
    devSocialLink: "https://www.linkedin.com/in/claudia-cappelluti-125bb2215/",
  },
  {
    devName: "Francesco Bocci",
    devImgLink:
      "https://i.postimg.cc/8PNv9rSz/CCE0752-D-7-AB7-4-E16-A60-F-1-D623-D933-A6-C.png",
    devSocialLink: "https://www.linkedin.com/in/francesco-bocci-37741925b/",
  },
];

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
