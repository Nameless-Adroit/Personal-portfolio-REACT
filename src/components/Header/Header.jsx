import { Link } from "react-router";
import "./Header.css";

export function Header() {
  return (
    <nav className="navbar">
        <Link to="#members" className="nav-link">Members</Link>
        <Link to="#contact" className="nav-link">Contact</Link>
        <Link to="#form" className="nav-link">Form</Link>
        <span id = "nav-time" className = "nav-time"></span>
    </nav>
  );
}