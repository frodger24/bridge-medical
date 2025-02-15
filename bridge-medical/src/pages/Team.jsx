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
        <div className="provider-sec">
          <div class="container">
            <div class="table-container">
              <h3>NS</h3>
              <table>
                <tr>
                  <th>Name</th>
                  <th>Eclipse Provider #</th>
                  <th>Specialty</th>
                </tr>
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
                <tr>
                  <td>Dr. Shanna Domond</td>
                  <td></td>
                  <td></td>
                </tr>
                <tr>
                  <td>Dr. Abdul Ahmed (Shakoor)</td>
                  <td></td>
                  <td></td>
                </tr>
              </table>
            </div>

            <div class="table-container">
              <h3>PMD</h3>
              <table>
                <tr>
                  <th>Name</th>
                  <th>Eclipse Provider #</th>
                  <th>Specialty</th>
                </tr>
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
              </table>
            </div>

            <div class="table-container">
              <h3>PSY</h3>
              <table>
                <tr>
                  <th>Name</th>
                  <th>Eclipse Provider #</th>
                  <th>Specialty</th>
                </tr>
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
                <tr>
                  <td>Denise Garcia</td>
                  <td>103/116</td>
                  <td>LCSW</td>
                </tr>
                <tr>
                  <td>Madison Greenfield</td>
                  <td>132/133</td>
                  <td>LCSW</td>
                </tr>
                <tr>
                  <td>Maureen Bock</td>
                  <td>106/112</td>
                  <td>LCSW</td>
                </tr>
                <tr>
                  <td>Fabiola Cuenca</td>
                  <td>128/129</td>
                  <td>LCSW</td>
                </tr>
                <tr>
                  <td>Allison Hunt</td>
                  <td>99/118</td>
                  <td>LCSW</td>
                </tr>
                <tr>
                  <td>Jim Oher</td>
                  <td>72/123</td>
                  <td>LCSW</td>
                </tr>
                <tr>
                  <td>Areliez Estevez</td>
                  <td>94/115</td>
                  <td>LMSW</td>
                </tr>
                <tr>
                  <td>Wesner Petit-Frere</td>
                  <td>76</td>
                  <td>LMSW</td>
                </tr>
                <tr>
                  <td>Carina Sacks</td>
                  <td>100/124</td>
                  <td>LMSW</td>
                </tr>
              </table>
            </div>

            <div class="table-container">
              <h3>Cognitive Therapy Department</h3>
              <table>
                <tr>
                  <th>Name</th>
                </tr>
                <tr>
                  <td>Rashelle Hernandez</td>
                </tr>
                <tr>
                  <td>Leslie Colon</td>
                </tr>
                <tr>
                  <td>Eliza Bautista</td>
                </tr>
                <tr>
                  <td>Alisa Feygis</td>
                </tr>
                <tr>
                  <td>Angel Rivera</td>
                </tr>
                <tr>
                  <td>Joseph Herkowitz</td>
                </tr>
                <tr>
                  <td>Aditya Bhise</td>
                </tr>
                <tr>
                  <td>Natalie Pujols</td>
                </tr>
                <tr>
                  <td>Anna La Franchesca</td>
                </tr>
                <tr>
                  <td>Antonia Perino</td>
                </tr>
                <tr>
                  <td>Kelly Lopez</td>
                </tr>
                <tr>
                  <td>Yuga Kothari</td>
                </tr>
                <tr>
                  <td>Julydia Ortiz</td>
                </tr>
                <tr>
                  <td>Melissa Guerrero</td>
                </tr>
                <tr>
                  <td>Nicole De Los Santos</td>
                </tr>
              </table>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Team;
