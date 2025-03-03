import React, { useState, useRef, useEffect } from "react";
import { FaLongArrowAltRight } from "react-icons/fa";
import Layout from "./Styling/Layout";
import "./Home.css";
import "./Team.css";
import malcolmProfile from "../assets/images/malcolm-profile.jpg";
import anthonyProfile from "../assets/images/anthony-profile.jpg";
import jacobProfile from "../assets/images/jacob-profile.jpg";
import spiegelmanProfile from "../assets/images/spiegelman-profile.jpg";
import homepageImage from "../assets/images/homepage-image.jpg";

const Team = () => {
  const scrollRef = useRef(null);
  const [popupData, setPopupData] = useState(null);

  const scrollLeft = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({
        left: -window.innerWidth * 0.9,
        behavior: "smooth",
      });
    }
  };

  const scrollRight = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({
        left: window.innerWidth * 0.9,
        behavior: "smooth",
      });
    }
  };

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape") {
        setPopupData(null);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  const handleTileClick = (data) => {
    setPopupData(data);
  };

  return (
    <Layout>
      <div className="team-section">
        <h1 className="team-title">Our Team</h1>
        <div className="team-float">
          <div
            className="job-tile"
            onClick={() =>
              handleTileClick({
                name: "Malcolm Kanter, MD",
                role: "CEO/Founder",
                image: malcolmProfile,
              })
            }
          >
            <img
              src={malcolmProfile}
              className="team-pic"
              alt="Malcolm Kanter"
            />
            <h2 className="name-title">Malcolm Kanter, MD</h2>
            <h1 className="job-title">CEO/Founder</h1>
            <FaLongArrowAltRight className="arrow-link" />
          </div>
          <div
            className="job-tile"
            onClick={() =>
              handleTileClick({
                name: "Anthony Trasmundi",
                role: "Chief Operating Officer",
                image: anthonyProfile,
              })
            }
          >
            <img
              src={anthonyProfile}
              className="team-pic"
              alt="Anthony Trasmundi"
            />
            <h2 className="name-title">Anthony Trasmundi</h2>
            <h1 className="job-title">Chief Operating Officer</h1>
            <FaLongArrowAltRight className="arrow-link" />
          </div>
          <div
            className="job-tile"
            onClick={() =>
              handleTileClick({
                name: "Jacob",
                role: "Director of Behavioral Health",
                image: jacobProfile,
              })
            }
          >
            <img src={jacobProfile} className="team-pic" alt="Jacob" />
            <h2 className="name-title">Jacob</h2>
            <h1 className="job-title">Director of Behavioral Health</h1>
            <FaLongArrowAltRight className="arrow-link" />
          </div>
        </div>
      </div>
      <img
        className="home-pic"
        src={homepageImage}
        alt="Psychologist talking to patient"
      />
    </Layout>
  );
};

export default Team;
