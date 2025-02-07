import React from "react";
import "./Footer.css";

const Footer = () => {
  const currentDate = new Date().getFullYear();

  return (
    <footer className="footer" id="footer">
      <div className="footer-content">
        <div className="contact-sec">
          <p>Phone: 917-675-7441</p>
          <p>Fax: 917-675-7449</p>
          <p>Email: info@bridge-medical.net</p>
        </div>
        <div className="hours-sec">
          <p>Hours:</p>
          <p>8:00AM - 6:00PM</p>
        </div>
      </div>
      <p className="legal-words">
        &copy; {currentDate} Bridge Medical. All rights reserved.
      </p>
    </footer>
  );
};

export default Footer;
