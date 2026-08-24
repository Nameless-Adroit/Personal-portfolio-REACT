import "./Footer.css";

export function Footer() {
  return (
    <footer>
      <p>&copy; 2024 Student Portfolio Website. All rights reserved.</p>
      <button className="back-to-top" onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}>
        Back to Top
      </button>
    </footer>
  );
}