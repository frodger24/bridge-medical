import React from "react";
import { NavLink, Link } from "react-router-dom";
import "./Header.css";
import logo from "../../assets/images/bridge-medical-logo.png";

const Header = () => {
  return (
    <header className="top-nav-bar" aria-label="Main Navigation">
      <Link to="/home">
        <img className="img-logo" src={logo} alt="Bridge Medical logo" />
      </Link>
      <ul className="top-nav-bar-items">
        <li>
          <NavLink to="/team" className="active-link">
            Team
          </NavLink>
        </li>
        <li>
          <NavLink to="/services" className="active-link">
            Services
          </NavLink>
        </li>
        <li>
          <NavLink to="/jobs" className="active-link">
            Available Jobs
          </NavLink>
        </li>
        <li>
          <a href="#contact" className="active-link">
            Contact
          </a>
        </li>
      </ul>
    </header>
  );
};

export default Header;
