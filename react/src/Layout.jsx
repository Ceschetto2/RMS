import { Downbar } from "./components/DownBar/Downbar";
import { Navbar } from "./components/Navbar/Navbar";
import { Outlet } from "react-router-dom";
import "./Layout.css"

export function Layout() {
  return (
    <div className="background-pages">
      <Navbar />

      <main>
        <Outlet />
      </main>

      <Downbar/>
    </div>
  );
}
