import { Link } from "react-router-dom";

import "./Navbar.css";
export function Navbar() {
  return (
    <div className="navbar">
      <div className="nav-link-list">
        <Link className="nav-link" to="/">
          <button className="nav-button">Home</button>
        </Link>

        <Link className="nav-link" to="/notizie">
          <button className="nav-button">Notizie</button>
        </Link>
      </div>
    </div>
  );
}
