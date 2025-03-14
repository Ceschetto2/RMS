import { Footer} from "./components/Footer/Footer";
import { Navbar } from "./components/Navbar/Navbar";
import { Outlet } from "react-router-dom";
import "./Layout.css"

export function Layout() {
  return (
    <div className="container-pages">
      <Navbar />

     
      <Outlet />
   

      <Footer/>
    </div>
  );
}
