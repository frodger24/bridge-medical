import React from "react";
import "./Footer.css";

const Footer = () => {
  const currentDate = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer-content">
        <p>&copy; {currentDate} Bridge Medical. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
