import { useState } from "react";
import "./Header.css";

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [darkMode, setDarkMode] = useState(true);

  const toggleTheme = () => {
    setDarkMode(!darkMode);
    document.body.classList.toggle("light-mode");
  };

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <header className="header">
      <div className="container nav">
        <a href="#home" className="logo">
          <span>🦷</span>
          <div>
            <strong>
              Smile<span>Care</span>
            </strong>
            <small>Dental Clinic</small>
          </div>
        </a>

        <nav className={menuOpen ? "nav-links active" : "nav-links"}>
          <a href="#home" onClick={closeMenu}>
            Home
          </a>
          <a href="#about" onClick={closeMenu}>
            About
          </a>
          <a href="#services" onClick={closeMenu}>
            Services
          </a>
          <a href="#doctors" onClick={closeMenu}>
            Doctors
          </a>
          <a href="#contact" onClick={closeMenu}>
            Contact
          </a>
        </nav>

        <div className="nav-actions">
          <button
            className="theme-btn"
            onClick={toggleTheme}
            aria-label="Toggle dark and light mode"
          >
            {darkMode ? "☀️" : "🌙"}
          </button>

          <a href="#appointment" className="book-btn">
            Book Appointment
          </a>

          <button className="menu-btn" onClick={() => setMenuOpen(!menuOpen)}>
            ☰
          </button>
        </div>
      </div>
    </header>
  );
}

export default Header;
