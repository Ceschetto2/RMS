import { Link } from "react-router-dom";
import { useState } from "react";


import "./Navbar.css";
import { LoginPopup } from "../LoginPopup/LoginPopup";

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
