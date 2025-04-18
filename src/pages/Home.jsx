import React from "react";
import { Link } from "react-router-dom";
import "./Home.css";
import Layout from "./Styling/Layout";

const Home = () => {
  return (
    <Layout>
      <div className="video-section">
        <video controls className="home-vid">
          <source
            src="/bridge-medical/assets/videos/landing-page-vid.MOV"
            type="video/mp4"
          />
          Your browser does not support the video tag.
        </video>
      </div>
      <img
        className="home-pic"
        src="/bridge-medical/assets/images/homepage-image.jpg"
        alt="Psychologist talking to patient"
      />
      <div className="about-section">
        <div className="about-paragraph">
          <p>
            BRIDGE MEDICAL is proud to offer its suite of mental health services
            for those patients with:
          </p>
          <ul>
            <li>Concussion</li>
            <li>Traumatic head injury</li>
            <li>Assault</li>
            <li>Slip and Fall</li>
            <li>Alzheimer’s</li>
            <li>Other neurologic deficits.</li>
          </ul>

          <p>
            Bridge Medical is the leading provider of a suite of mental health
            services to patients injured in car accidents, work related
            injuries, and personal injury claims. Servicing NY, NJ, and CT
            nationally via state of the art telehealth. Physical Locations in
            Manhattan, Bronx and Queens.
          </p>
          <ul>
            <li>Comprehensive Neuropsychological Evaluations</li>
            <li>Cognitive Remediation Therapy</li>
            <li>Psychology</li>
            <li>Psychiatry</li>
            <li>
              Pre-Surgical Psychological Clearance for a Spinal Cord Stimulator
              (SCS) Trial
            </li>
            <li>Expert Testimony</li>
            <li>Narrative Reports</li>
          </ul>

          <p>
            Our clinical staff are all PhD level psychologists and
            neuropsychologists as well as board certified psychiatry.
          </p>

          <p>Insurances we accept:</p>
          <ul>
            <li>No Fault</li>
            <li>Workers Compensation</li>
            <li>Personal Injury</li>
          </ul>
        </div>
      </div>
    </Layout>
  );
};

export default Home;
