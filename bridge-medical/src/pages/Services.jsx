import React, { useState } from "react";
import "./Services.css";
import Layout from "./Styling/Layout";
import services from "./services.json"; // Import services data from JSON file

const Services = () => {
  const [selectedText, setSelectedText] = useState(""); // State to hold the selected description
  const [isMorphing, setIsMorphing] = useState(false); // State to control morph animation

  // Display description based on the clicked service
  const displayText = (index) => {
    setSelectedText(services[index]?.description || "Invalid selection.");
    setIsMorphing(true); // Trigger morph animation

    // Remove morph effect after animation duration (e.g., 500ms)
    setTimeout(() => setIsMorphing(false), 500);
  };

  return (
    <Layout>
      <div className="services-section">
        <h1 className="services-title">Services</h1>
        <div className="list-wrapper">
          {/* Dynamically render list items from JSON */}
          <ul className="services-list">
            {services.map((service, index) => (
              <li key={index} onClick={() => displayText(index)}>
                {service.name}
              </li>
            ))}
          </ul>

          {/* Display the selected description */}
          <div className={`services-textbox ${isMorphing ? "morph" : ""}`}>
            {selectedText || "Select a service to see the details."}
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Services;
