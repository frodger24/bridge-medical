import { Link, NavLink } from "react-router-dom";
import "./header.css";
import { useState } from "react";

const logo = "/bridge-medical/assets/images/bridge-medical-logo.png";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const toggleMenu = () => setMenuOpen(!menuOpen);

  return (
    <header className="top-nav-bar" aria-label="Main Navigation">
      <div className="logo-container">
        <Link to="/home">
          <img className="img-logo" src={logo} alt="Bridge Medical logo" />
        </Link>
      </div>
      <button className="menu-button" onClick={toggleMenu}>
        ☰
      </button>
      <ul className={`top-nav-bar-items ${menuOpen ? "show-menu" : ""}`}>
        <li>
          <NavLink
<<<<<<< HEAD
            to="/services"
            className="full-clickable-link"
            onClick={() => setMenuOpen(false)}
          >
            Services
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/providers"
            className="full-clickable-link"
            onClick={() => setMenuOpen(false)}
          >
            Our Providers
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/referral"
            className="full-clickable-link"
            onClick={() => setMenuOpen(false)}
          >
            Referral
          </NavLink>
        </li>
        <li>
          <NavLink
=======
>>>>>>> ad452a84984a3bf40b16c882f1f4743693cbdfb2
            to="/team"
            className="full-clickable-link"
            onClick={() => setMenuOpen(false)}
          >
            Team
          </NavLink>
        </li>
        <li>
          <NavLink
<<<<<<< HEAD
=======
            to="/services"
            className="full-clickable-link"
            onClick={() => setMenuOpen(false)}
          >
            Services
          </NavLink>
        </li>
        <li>
          <NavLink
>>>>>>> ad452a84984a3bf40b16c882f1f4743693cbdfb2
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
