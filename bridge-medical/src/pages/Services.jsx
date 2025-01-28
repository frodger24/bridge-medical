import React from "react";
import { Link } from "react-router-dom";
import "./Services.css";
import Layout from "./Styling/Layout";

const Services = () => {
  return (
    <Layout>
      <div className="services-section">
        <h1 className="services-title">Services</h1>
        <ul className="Services-list">
          <li>Neuro-Psychology</li>
          <li>Cognitive Therapy</li>
          <li>Psychology</li>
          <li>Psychiatry</li>
        </ul>
      </div>
    </Layout>
  );
};

export default Services;
