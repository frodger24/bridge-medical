import React, { useState } from "react";
import { NavLink, Link } from "react-router-dom";
import "./Header.css";
import logo from "../../assets/images/bridge-medical-logo.png";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <header className="top-nav-bar" aria-label="Main Navigation">
      <Link to="/home">
        <img className="img-logo" src={logo} alt="Bridge Medical logo" />
      </Link>

      {/* Hamburger Button - Only for Mobile */}
      <button className="menu-button" onClick={toggleMenu}>
        ☰
      </button>

      <ul className={`top-nav-bar-items ${menuOpen ? "show-menu" : ""}`}>
        <li>
          <NavLink
            to="/team"
            className="full-clickable-link"
            onClick={() => setMenuOpen(false)}
          >
            Team
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/services"
            className="full-clickable-link"
            onClick={() => setMenuOpen(false)}
          >
            Services
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/jobs"
            className="full-clickable-link"
            onClick={() => setMenuOpen(false)}
          >
            Available Jobs
          </NavLink>
        </li>
        <li>
          <a
            href="#footer"
            className="full-clickable-link"
            onClick={() => setMenuOpen(false)}
          >
            Contact
          </a>
        </li>
      </ul>
    </header>
  );
};

export default Header;
