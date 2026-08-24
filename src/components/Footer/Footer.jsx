import { Link } from "react-router";
import "./Footer.css";

export function Footer() {
  return (
    <footer>
      <p>&copy; 2026 Group GK. All rights reserved.</p>

    <div className="social-icons">
      <Link to="https://github.com/esterkabuka89-source" target="_blank">
        <img src="https://cdn-icons-png.flaticon.com/512/25/25231.png" alt="GitHub" />
      </Link>
      <Link to="https://www.linkedin.com/in/ester-kabuka-0805b536b?utm_source=share_via&utm_content=profile&utm_medium=member_android" target="_blank">
        <img src="https://cdn-icons-png.flaticon.com/512/174/174857.png" alt="LinkedIn" />
      </Link >
      <Link to="https://www.instagram.com/fynsmiling?igsh=cGxnNnZmMWFuZ3B1" target="_blank">
        <img src="https://cdn-icons-png.flaticon.com/512/2111/2111463.png" alt="Instagram" />
      </Link>
    </div>
      <button className="back-to-top" onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}>
        Back to Top
      </button>
    </footer>
  );
}