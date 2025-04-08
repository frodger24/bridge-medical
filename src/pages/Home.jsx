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
        <p className="about-paragraph">
          BRIDGE MEDICAL is proud to offer its suite of mental health services
          for those patients with concussion, traumatic head injury, Alzheimer’s
          and other neurologic deficits. Our services include Neuropsychological
          evaluations, Cognitive therapy, Psychotherapy both individual and
          group, Psychiatry, Lifecoaching, and Pain management (coming soon).
          All our services are offered via state-of-the-art telehealth services
          as well as in-person visits as required. Our clinical staff are all
          PhD-level psychologists and neuropsychologists as well as
          board-certified psychiatry. We accept Worker’s Compensation, No Fault
          Insurance, Liens.
        </p>
      </div>
    </Layout>
  );
};

export default Home;
