import { Link } from "react-router";
import "./Header.css";

export function Header() {
  return (
    <nav className="navbar">
      <Link to="/" className="nav-link">
        Home
      </Link>
      <button id="dark-mode-toggle" className="btn-toggle">
        Dark Mode
      </button>
      <span id="nav-time" className="nav-time"></span>
    </nav>
  );
}
