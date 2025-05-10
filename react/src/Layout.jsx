import { Footer} from "./components/Footer/Footer";
import { Navbar } from "./components/Navbar/Navbar";
import { Outlet } from "react-router-dom";
import listaDev from "./Data/lista_sviluppatri.json"
import "./Layout.css"
import { LoginPopup } from "./components/LoginPopup/LoginPopup";
import { useContext, useState } from "react";
import { authContext } from "./Hooks/Token/tokenState";

/* Il file Layout.jsx rappresenta il layout principale dell'applicazione. All'interno del codice troviamo:
- Navbar: il componente che rappresenta la barra di navigazione dell'applicazione.
- Footer: il componente che rappresenta il footer dell'applicazione.
- Outlet: il componente che rappresenta il punto in cui verranno renderizzati i componenti figlio all'interno del layout.
- LoginPopup: il componente che rappresenta il popup di login dell'applicazione.
- listaDev: il file JSON che contiene la lista degli sviluppatori dell'applicazione.
- useState: il hook di React che permette di gestire lo stato del componente.
- useState: il hook di React che permette di gestire lo stato del componente.
- handlePopupClick: la funzione che gestisce il click sul popup di login dell'applicazione.
- popupState: lo stato del popup di login dell'applicazione.
- setPopupState: la funzione che permette di modificare lo stato del popup di login dell'applicazione.
- handlePopupClick: la funzione che gestisce il click sul popup di login dell'applicazione.
*/

export function Layout() {
  const {authStatus, setAuthStatus, popupState, handlePopupClick} = useContext(authContext)


  return (

    <div className="container-pages">

      <Navbar/>
      <div className="navbar-spacing"/>

      {popupState? <LoginPopup/>: null}
      <Outlet />


      <Footer props = {listaDev}/>
    </div>
  );
}
