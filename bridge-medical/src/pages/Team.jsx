import React from "react";
import { Link } from "react-router-dom";
import "./Home.css";
import Layout from "./Styling/Layout";
import "./Team.css";

const Team = () => {
  return (
    <Layout>
      <div className="team-section">
        <h1 className="team-title">Our Team</h1>
        <div className="team-float">
          <div className="job-tile">
            <img
              src="src\assets\images\jacob-profile.jpg"
              className="team-pic"
            ></img>
            <h1 className="job-title">CEO/Founder</h1>
            <h2 className="name-title">Malcolm J. Kanter, MD</h2>
          </div>
          <div className="job-tile">
            <img className="team-pic"></img>
            <h1 className="job-title">CEO/Founder</h1>
            <h2 className="name-title">Malcolm J. Kanter, MD</h2>
          </div>
          <div className="job-tile">
            <img className="team-pic"></img>
            <h1 className="job-title">CEO/Founder</h1>
            <h2 className="name-title">Malcolm J. Kanter, MD</h2>
          </div>
          <div className="job-tile">
            <img className="team-pic"></img>
            <h1 className="job-title">CEO/Founder</h1>
            <h2 className="name-title">Malcolm J. Kanter, MD</h2>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Team;
