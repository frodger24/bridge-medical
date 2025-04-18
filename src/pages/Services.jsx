import React, { useState, useEffect } from "react";
import "./Services.css";
import Layout from "./Styling/Layout";
import services from "./services.json";

const Services = () => {
  const defaultIndex = services.findIndex(
    (service) => service.name === "Neuro-Psychology"
  );
<<<<<<< HEAD
  const [selectedContent, setSelectedContent] = useState("");
=======
  const [selectedText, setSelectedText] = useState("");
>>>>>>> ad452a84984a3bf40b16c882f1f4743693cbdfb2
  const [selectedIndex, setSelectedIndex] = useState(defaultIndex);
  const [isMorphing, setIsMorphing] = useState(false);

  const displayText = (index) => {
<<<<<<< HEAD
    setSelectedContent(services[index]?.description || "Invalid selection.");
=======
    setSelectedText(services[index]?.description || "Invalid selection.");
>>>>>>> ad452a84984a3bf40b16c882f1f4743693cbdfb2
    setSelectedIndex(index);
    setIsMorphing(true);
    setTimeout(() => setIsMorphing(false), 500);
  };

  useEffect(() => {
    if (defaultIndex !== -1) {
      displayText(defaultIndex);
    }
  }, []);

<<<<<<< HEAD
  const renderContent = () => {
    if (Array.isArray(selectedContent)) {
      return (
        <ul className="services-description-list">
          {selectedContent.map((line, idx) => (
            <li key={idx}>{line}</li>
          ))}
        </ul>
      );
    }

    // Handle string content with potential paragraph breaks
    return selectedContent
      .split("\n\n")
      .map((para, idx) => <p key={idx}>{para}</p>);
  };

=======
>>>>>>> ad452a84984a3bf40b16c882f1f4743693cbdfb2
  return (
    <Layout>
      <div className="services-section">
        <h1 className="services-title">Services</h1>
        <div className="list-wrapper">
          <ul className="services-list">
            {services.map((service, index) => (
              <li
                key={index}
                className={index === selectedIndex ? "active" : ""}
                onClick={() => displayText(index)}
              >
                {service.name}
              </li>
            ))}
          </ul>
<<<<<<< HEAD

          <div className={`services-textbox ${isMorphing ? "morph" : ""}`}>
            {renderContent()}
=======
          <div className={`services-textbox ${isMorphing ? "morph" : ""}`}>
            {selectedText || "Select a service to see the details."}
>>>>>>> ad452a84984a3bf40b16c882f1f4743693cbdfb2
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Services;
