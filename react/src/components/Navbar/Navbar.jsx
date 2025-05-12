import { Link } from "react-router-dom";
import { useState } from "react";


import "./Navbar.css";
import { LoginPopup } from "../LoginPopup/LoginPopup";

/* 
Il componente Navbar rappresenta la barra di navigazione dell'applicazione.
- Include collegamenti (Link) a diverse sezioni dell'applicazione, come Home, Gallery, Notizie, Bandi, Regolamento e FAQ.
- Ogni collegamento è rappresentato da un pulsante con uno stile personalizzato.
- Contiene un'immagine cliccabile che funge da collegamento alla homepage.
- Include un pulsante "Login" che attiva una funzione passata come prop (handlePopupClick), probabilmente per aprire un popup di login.
- Lo stile del componente è gestito tramite il file CSS "Navbar.css".
*/

export function Navbar({handlePopupClick}) {

  return (
    <div className="navbar">
        <Link className="nav-link-image" to="/"> 
        <img className="nav-image"  src="https://iili.io/3fDhbyb.png" alt="home">

        </img>
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

      <button className="nav-button" onClick={handlePopupClick}>Login</button>
 
    </div>
  );
}
