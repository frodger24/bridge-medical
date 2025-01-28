import React from "react";
import { Link } from "react-router-dom";
import "./Home.css";
import Layout from "./Styling/Layout";

const Home = () => {
  return (
    <Layout>
      <div className="video-section">
        <video
          controls
          className="home-vid"
          src="src\assets\videos\landing-page-vid.MOV"
          type="video/mp4"
        />
      </div>
      <img
        className="home-pic"
        src="src\assets\images\homepage-image.jpg"
        alt="Psychologist talking to patient"
      ></img>
      <div className="about-section">
        <p className="about-paragraph">
          BRIDGE MEDICAL is proud to offer it’s suite of mental health services
          for those patients with concussion, traumatic head injury, Alzheimer’s
          and other neurologic deficits. Our services include Neuro
          psychological evaluations Cognitive therapy Psycho therapy both
          individual and group Psychiatry Lifecoaching Pain management (coming
          soon) All our services are offered via state of the art tele-health
          services as well as in person visits as required. Our clinical staff
          are all PhD level psychologists and neuropsychologists as well as
          board certified psychiatry. We accept Worker’s Compensation, No Fault
          Insurance, Medicare, BCBS, Private Pay and various other commercial
          insurances.
        </p>
      </div>
    </Layout>
  );
};

export default Home;
