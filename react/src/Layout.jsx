import { Footer} from "./components/Footer/Footer";
import { Navbar } from "./components/Navbar/Navbar";
import { Outlet } from "react-router-dom";
import listaDev from "./Data/lista_sviluppatri.json"
import "./Layout.css"

export function Layout() {

  


  return (
    <div className="container-pages">
      <Navbar />
      <div className="navbar-spacing">
        
      </div>
     
      <Outlet />
   

      <Footer props = {listaDev}/>
    </div>
  );
}
