<header className="top-nav-bar" aria-label="Main Navigation">
  <div className="logo-container">
    <Link to="/home">
      <img className="img-logo" src={logo} alt="Bridge Medical logo" />
    </Link>
  </div>

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
</header>;
