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
                image: "src/assets/images/malcolm-profile.jpg",
                description:
                  "As CEO, Malcolm is the driver of Bridge Medical’s recent growth and transition. A physician by background, graduating medical school in South Africa, he trained in neurosurgery and completed his fellowship in TBI at Baylor College of Medicine in Houston, TX. Following his fellowship, Malcolm honed his business skills while working at New Medico, a privately held Neuro-rehabilitation company treating acute and post-acute TBI patients.",
              })
            }
          >
            <img
              src="src/assets/images/malcolm-profile.jpg"
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
                image: "src/assets/images/anthony-profile.jpg",
                description:
                  "As a seasoned Chief Operating Officer with over 20 years of experience in the healthcare industry, I am dedicated to driving operational excellence and fostering a culture of patient-centered care. My expertise lies in strategic planning, process optimization, and team leadership, ensuring that healthcare organizations deliver high-quality services efficiently and effectively.",
              })
            }
          >
            <img
              src="src/assets/images/anthony-profile.jpg"
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
                image: "src/assets/images/jacob-profile.jpg",
                description:
                  "Meet Jacob our Director of Behavioral Health!\n\nWith over a dozen years of experience in human services, Jacob has spent the last decade of his professional career dedicating himself to providing care to underserved and underrepresented communities.\n\nAs a direct care provider, Jacob is a seasoned mental health therapist who specializes in treating clients with a history of trauma and/or severe mental health issues. His first introduction to leadership came when he led a program designed to help individuals who experienced traumatic brain injuries, and spinal cord injuries, following accidents or other health crises. Jacob has been a key contributor in various roles, and prides himself in his ability to have a wide knowledge base when it comes to the world of social welfare.\n\nJacob’s rich experience has allowed him to focus on a well-rounded and individualized approach when working directly with Bridge Medical’s patients or staff members.",
              })
            }
          >
            <img
              src="src/assets/images/jacob-profile.jpg"
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
                image: "src/assets/images/spiegelman-profile.jpg",
                description:
                  "Dr. Spigelman is a clinical psychologist and neuropsychologist licensed in both New York and New Jersey. She completed her undergraduate degree at the University of Michigan and went on to earn her doctorate in psychology from the Ferkauf Graduate School of Psychology at Yeshiva University. Prior to completing her doctoral degree, Dr. Spigelman trained at the Seaver Autism Center at the Icahn School of Medicine at Mount Sinai and the Division of Developmental and Behavioral Pediatrics at Cohen Children’s Medical Center at Northwell Health. Dr. Spigelman completed her APA-accredited pre-doctoral internship in neuropsychology and rehabilitation at Rusk Rehabilitation at NYU Langone Medical Center. She continued her post-doctoral training in neuropsychology at Columbia University Irving Medical Center/New York-Presbyterian Hospital’s Promise Program. Prior to joining Bridge Medical, Dr. Spigelman was working in a private practice providing neuropsychological evaluations to children, adolescents, and young adults assessing primarily neurodevelopmental disorders (e.g., ADHD, learning disorders, Autism Spectrum Disorder) and psychiatric conditions. Dr. Spigelman is trained to provide neuropsychological evaluations for neurodevelopmental disorders, psychiatric conditions, concussion/traumatic brain injury, genetic disorders, and complex medical conditions. Dr. Spigelman is devoted to providing culturally competent and evidence-based assessments to patients at Bridge.",
              })
            }
          >
            <img
              src="src/assets/images/spiegelman-profile.jpg"
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
        src="src/assets/images/homepage-image.jpg"
        alt="Psychologist talking to patient"
      />

      <div className="provider-section">
        <h1 className="prov-title">Our Providers</h1>
        <div className="provider-container">
          <button className="arrow-btn prev-arrow" onClick={scrollLeft}>
            &#9664;
          </button>
          <div className="provider-sec" ref={scrollRef}>
            <div className="table-container">
              <h3>NS</h3>
              <table>
                <thead>
                  <tr>
                    <th>Name</th>
                    <th>Eclipse Provider #</th>
                    <th>Specialty</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Lindsay Chatmon</td>
                    <td>93/113</td>
                    <td>PHD</td>
                  </tr>
                  <tr>
                    <td>Chiyoko Kobayas Frank</td>
                    <td>36/127</td>
                    <td>PHD</td>
                  </tr>
                  <tr>
                    <td>David Levy</td>
                    <td>51/120</td>
                    <td>PSYD</td>
                  </tr>
                  <tr>
                    <td>Anna Spigelman</td>
                    <td>97/126</td>
                    <td>PSYD</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div className="table-container">
              <h3>PMD</h3>
              <table>
                <thead>
                  <tr>
                    <th>Name</th>
                    <th>Eclipse Provider #</th>
                    <th>Specialty</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Laura Bernal</td>
                    <td>90/111</td>
                    <td>PNP</td>
                  </tr>
                  <tr>
                    <td>Evan Donan</td>
                    <td>65/114</td>
                    <td>PNP</td>
                  </tr>
                  <tr>
                    <td>Gabriel Katz</td>
                    <td>11/119</td>
                    <td>MD</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div className="table-container">
              <h3>PSY</h3>
              <table>
                <thead>
                  <tr>
                    <th>Name</th>
                    <th>Eclipse Provider #</th>
                    <th>Specialty</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Jacob Miner</td>
                    <td>70/122</td>
                    <td>LCSW</td>
                  </tr>
                  <tr>
                    <td>Lena Melendez</td>
                    <td>59/121</td>
                    <td>LCSW</td>
                  </tr>
                  <tr>
                    <td>Eric Guy</td>
                    <td>109/117</td>
                    <td>LCSW</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div className="table-container">
              <h3>Cognitive Therapy Department</h3>
              <table>
                <thead>
                  <tr>
                    <th>Name</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Rashelle Hernandez</td>
                  </tr>
                  <tr>
                    <td>Leslie Colon</td>
                  </tr>
                  <tr>
                    <td>Eliza Bautista</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
          <button className="arrow-btn next-arrow" onClick={scrollRight}>
            &#9654;
          </button>
        </div>
      </div>

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
