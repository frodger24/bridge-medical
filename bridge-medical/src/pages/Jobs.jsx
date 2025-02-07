import React from "react";
import { Link } from "react-router-dom";
import "./Home.css";
import Layout from "./Styling/Layout";
import "./Jobs.css";

const Jobs = () => {
  return (
    <Layout>
      <div className="jobs-section">
        <h1 className="jobs-title">Available Jobs</h1>
        <div className="jobs-float">
          <h1 className="career-title">Looking for career opportunities?</h1>
          <p className="jobs-para">
            If you're interested in exploring open positions with us, we’d love
            to hear from you! Please email our team at info@bridge-medical.net
            for inquiries about current job openings and application details. We
            look forward to connecting with you!
          </p>
          <h1 className="open-title">Open Positions:</h1>
        </div>
      </div>
    </Layout>
  );
};

export default Jobs;
