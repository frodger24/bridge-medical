import React, { useState, useRef, useEffect } from "react";
import { FaLongArrowAltRight } from "react-icons/fa";
import Layout from "./Styling/Layout";
import "./Home.css";
import "./Team.css";

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
                image: `${
                  import.meta.env.BASE_URL
                }assets/images/malcolm-profile.jpg`,
                description:
                  "As CEO, Malcolm is the driver of Bridge Medical’s recent growth and transition. A physician by background, graduating medical school in South Africa, he trained in neurosurgery and completed his fellowship in TBI at Baylor College of Medicine in Houston, TX. Following his fellowship, Malcolm honed his business skills while working at New Medico, a privately held Neuro-rehabilitation company treating acute and post-acute TBI patients.",
              })
            }
          >
            <img
              src={`${
                import.meta.env.BASE_URL
              }assets/images/malcolm-profile.jpg`}
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
                image: `${
                  import.meta.env.BASE_URL
                }assets/images/anthony-profile.jpg`,
                description:
                  "As a seasoned Chief Operating Officer with over 20 years of experience in the healthcare industry, I am dedicated to driving operational excellence and fostering a culture of patient-centered care. My expertise lies in strategic planning, process optimization, and team leadership, ensuring that healthcare organizations deliver high-quality services efficiently and effectively.",
              })
            }
          >
            <img
              src={`${
                import.meta.env.BASE_URL
              }assets/images/anthony-profile.jpg`}
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
                image: `${
                  import.meta.env.BASE_URL
                }assets/images/jacob-profile.jpg`,
                description:
                  "Meet Jacob our Director of Behavioral Health! With over a dozen years of experience in human services, Jacob has spent the last decade of his professional career dedicating himself to providing care to underserved and underrepresented communities.",
              })
            }
          >
            <img
              src={`${import.meta.env.BASE_URL}assets/images/jacob-profile.jpg`}
              className="team-pic"
              alt="Jacob"
            />
            <h2 className="name-title">Jacob</h2>
            <h1 className="job-title">Director of Behavioral Health</h1>
            <FaLongArrowAltRight className="arrow-link" />
          </div>
          <div
            className="job-tile"
            onClick={() =>
              handleTileClick({
                name: "Dr. Spigelman",
                role: "Clinical Psychologist / Neuro Psychologist",
                image: `${
                  import.meta.env.BASE_URL
                }assets/images/spiegelman-profile.jpg`,
                description:
                  "Dr. Spigelman is a clinical psychologist and neuropsychologist licensed in both New York and New Jersey.",
              })
            }
          >
            <img
              src={`${
                import.meta.env.BASE_URL
              }assets/images/spiegelman-profile.jpg`}
              className="team-pic"
              alt="Dr. Spigelman"
            />
            <h2 className="name-title">Dr. Spigelman</h2>
            <h1 className="job-title">
              Clinical Psychologist / Neuro Psychologist
            </h1>
            <FaLongArrowAltRight className="arrow-link" />
          </div>
        </div>
      </div>

      <img
        className="home-pic"
        src={`${import.meta.env.BASE_URL}assets/images/homepage-image.jpg`}
        alt="Psychologist talking to patient"
      />

      {popupData && (
        <div className="modal-overlay" onClick={() => setPopupData(null)}>
          <div
            className="modal-content"
            onClick={(e) => {
              if (window.innerWidth <= 480) {
                setPopupData(null);
              } else {
                e.stopPropagation();
              }
            }}
          >
            <img
              src={popupData.image}
              alt={popupData.name}
              className="popup-img"
            />
            <h2>{popupData.name}</h2>
            <h3>{popupData.role}</h3>
            <p>{popupData.description}</p>
          </div>
        </div>
      )}
    </Layout>
  );
};

export default Team;
