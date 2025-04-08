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
      <div className="address-section">
        <div className="address-block">
          <p className="location-title">Manhattan</p>
          <p>389 5th Avenue (at 36th St), Suite 402</p>
          <p>New York, NY 10016</p>
        </div>
        <div className="address-block">
          <p className="location-title">Bronx</p>
          <p>2932 Wilkinson Avenue, 6th Floor</p>
          <p>Bronx, NY 10461</p>
        </div>
        <div className="address-block">
          <p className="location-title">Queens</p>
          <p>95-27 Jamaica Ave</p>
          <p>Queens, NY 11223</p>
        </div>
      </div>
      <div className="map-section">
        <div className="map-block">
          <h4>Manhattan</h4>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3021.9375363641957!2d-73.98156868459382!3d40.75272627932748!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c259ae367f8a99%3A0x648bb5e987d9646a!2s389%205th%20Ave%2C%20New%20York%2C%20NY%2010016!5e0!3m2!1sen!2sus!4v1582801940720!5m2!1sen!2sus"
            width="100%"
            height="300"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            title="Manhattan Location"
          ></iframe>
        </div>
        <div className="map-block">
          <h4>Bronx</h4>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3022.0054603218514!2d-73.88812268459388!3d40.844782279324315!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c2f8f2b5a94a39%3A0x2f4e65fd921e8e4!2s2932%20Wilkinson%20Ave%2C%20Bronx%2C%20NY%2010461!5e0!3m2!1sen!2sus!4v1582802059876!5m2!1sen!2sus"
            width="100%"
            height="300"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            title="Bronx Location"
          ></iframe>
        </div>
        <div className="map-block">
          <h4>Queens</h4>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3021.979467324224!2d-73.84413168459384!3d40.735980279327654!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c259a158e4ab1d%3A0x3e8a42c63f3047b1!2s95-27%20Jamaica%20Ave%2C%20Queens%2C%20NY%2011223!5e0!3m2!1sen!2sus!4v1582802123456!5m2!1sen!2sus"
            width="100%"
            height="300"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            title="Queens Location"
          ></iframe>
        </div>
      </div>
      <p className="legal-words">
        &copy; {currentDate} Bridge Medical. All rights reserved.
      </p>
    </footer>
  );
};

export default Footer;
