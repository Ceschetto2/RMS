import { Link } from "react-router-dom";
import { useContext } from "react";
import { authContext, deleteToken, getToken } from "../../Hooks/Token/tokenState";

import "./Navbar.css";
import { useEffect } from "react";

/* 
Il componente Navbar rappresenta la barra di navigazione dell'applicazione.
- Include collegamenti (Link) a diverse sezioni dell'applicazione, come Home, Gallery, Notizie, Bandi, Regolamento e FAQ.
- Ogni collegamento è rappresentato da un pulsante con uno stile personalizzato.
- Contiene un'immagine cliccabile che funge da collegamento alla homepage.
- Include un pulsante "Login" che attiva una funzione passata come prop (handlePopupClick), probabilmente per aprire un popup di login.
- Lo stile del componente è gestito tramite il file CSS "Navbar.css".
*/

export function Navbar() {
  const { authStatus, setAuthStatus, loginPopupState, handleLoginPopupButtonClick, logoutPopupState, handleLogoutPopupButtonClick } =
    useContext(authContext);

    //Hook per aggiornare il valore dell'autsStatus in base alla presenza del token
    //quando viene aggiornata la pagina.
    useEffect(() => {
      const token = getToken();
      if (token) {
        setAuthStatus(true);
      } else {
        setAuthStatus(false);
      }
    }, []);

  return (
    <div className="navbar">
      <Link className="nav-link-image" to="/">
        <img
          className="nav-image"
          src="https://iili.io/3fDhbyb.png"
          alt="home"
        ></img>
      </Link>

      <div className="nav-link-list">
        <Link className="nav-link" to="/gallery">
          <button className="nav-button">Gallery</button>
        </Link>

        <Link className="nav-link" to="/notizie">
          <button className="nav-button">Notizie</button>
        </Link>

        <Link className="nav-link" to="/bandi">
          <button className="nav-button">Bandi</button>
        </Link>

        <Link className="nav-link" to="/regolamento">
          <button className="nav-button">Regolamento</button>
        </Link>
        <Link className="nav-link" to="/FAQ">
          <button className="nav-button">FAQ</button>
        </Link>
      </div>

      {authStatus ? (
        <button className="nav-button" onClick={handleLogoutPopupButtonClick}>
          Logout
        </button>
      ) : (
        <button className="nav-button" onClick={handleLoginPopupButtonClick}>
          Login
        </button>
      )}

    </div>
  );
}
