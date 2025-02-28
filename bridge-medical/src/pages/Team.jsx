import React, { useRef } from "react";
import { FaLongArrowAltRight } from "react-icons/fa";
import Layout from "./Styling/Layout";
import "./Home.css";
import "./Team.css";

const Team = () => {
  const scrollRef = useRef(null);

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

  return (
    <Layout>
      <div className="team-section">
        <h1 className="team-title">Our Team</h1>
        <div className="team-float">
          <div className="job-tile">
            <img
              src="src/assets/images/malcolm-profile.jpg"
              className="team-pic"
              alt="Malcolm Kanter"
            />
            <h2 className="name-title">Malcolm Kanter, MD</h2>
            <h1 className="job-title">CEO/Founder</h1>
            <FaLongArrowAltRight className="arrow-link" />
          </div>
          <div className="job-tile">
            <img
              src="src/assets/images/anthony-profile.jpg"
              className="team-pic"
              alt="Anthony Trasmundi"
            />
            <h2 className="name-title">Anthony Trasmundi</h2>
            <h1 className="job-title">Chief Operating Officer</h1>
            <FaLongArrowAltRight className="arrow-link" />
          </div>
          <div className="job-tile">
            <img
              src="src/assets/images/jacob-profile.jpg"
              className="team-pic"
              alt="Jacob"
            />
            <h2 className="name-title">Jacob</h2>
            <h1 className="job-title">Director of Behavioral Health</h1>
            <FaLongArrowAltRight className="arrow-link" />
          </div>
          <div className="job-tile">
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
    </Layout>
  );
};

export default Team;
