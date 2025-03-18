import { Footer} from "./components/Footer/Footer";
import { Navbar } from "./components/Navbar/Navbar";
import { Outlet } from "react-router-dom";
import listaDev from "./Data/lista_sviluppatri.json"
import "./Layout.css"
import { LoginPopup } from "./components/LoginPopup/LoginPopup";
import { useState } from "react";



export function Layout() {
  const [popupState, setPopupState] = useState(false)
  function handlePopupClick(){
    setPopupState(!popupState)
    {console.log(popupState)}
  }
  


  return (
    <div className="container-pages">
      <Navbar handlePopupClick ={handlePopupClick}/>
      <div className="navbar-spacing">
        
      </div>

      {popupState? <LoginPopup/>: null}
      <Outlet />
   

      <Footer props = {listaDev}/>
    </div>
  );
}
