import React from "react";
import { Link } from "react-router-dom";
import "./Home.css";
import Layout from "./Styling/Layout";
import "./Team.css";
import { FaLongArrowAltRight, FaExpandAlt } from "react-icons/fa";

const Team = () => {
  return (
    <Layout>
      <div className="team-section">
        <h1 className="team-title">Our Team</h1>
        <div className="team-float">
          <div className="job-tile">
            <img
              src="src\assets\images\malcolm-profile.jpg"
              className="team-pic"
            ></img>
            <h2 className="name-title">Malcolm Kanter, MD</h2>
            <h1 className="job-title">CEO/Founder</h1>
            <FaLongArrowAltRight className="arrow-link" />
          </div>
          <div className="job-tile">
            <img
              src="src\assets\images\anthony-profile.jpg"
              className="team-pic"
            ></img>
            <h2 className="name-title">Anthony Trasmundi</h2>
            <h1 className="job-title">Chief Operating Officer</h1>
            <FaLongArrowAltRight className="arrow-link" />
          </div>
          <div className="job-tile">
            <img
              src="src\assets\images\jacob-profile.jpg"
              className="team-pic"
            ></img>
            <h2 className="name-title">Jacob</h2>
            <h1 className="job-title">Director of Behavioral Health</h1>
            <FaLongArrowAltRight className="arrow-link" />
          </div>
          <div className="job-tile">
            <img
              src="src\assets\images\spiegelman-profile.jpg"
              className="team-pic"
            ></img>
            <h2 className="name-title">Dr. Spigelman</h2>
            <h1 className="job-title">
              Clinical Psychologist / Neuro Psychologist
            </h1>
            <FaLongArrowAltRight className="arrow-link" />
          </div>
        </div>
      </div>
      <div className="provider-section">
        <h1 className="team-title">Our Providers</h1>
      </div>
    </Layout>
  );
};

export default Team;
