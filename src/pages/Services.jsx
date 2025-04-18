import React, { useState, useEffect } from "react";
import "./Services.css";
import Layout from "./Styling/Layout";
import services from "./services.json";

const Services = () => {
  const defaultIndex = services.findIndex(
    (service) => service.name === "Neuro-Psychology"
  );
  const [selectedContent, setSelectedContent] = useState("");
  const [selectedIndex, setSelectedIndex] = useState(defaultIndex);
  const [isMorphing, setIsMorphing] = useState(false);

  const displayText = (index) => {
    setSelectedContent(services[index]?.description || "Invalid selection.");
    setSelectedIndex(index);
    setIsMorphing(true);
    setTimeout(() => setIsMorphing(false), 500);
  };

  useEffect(() => {
    if (defaultIndex !== -1) {
      displayText(defaultIndex);
    }
  }, []);

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

          <div className={`services-textbox ${isMorphing ? "morph" : ""}`}>
            {renderContent()}
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Services;
