import React, { useState, useRef, useEffect } from "react";
import { FaLongArrowAltRight, FaArrowLeft, FaArrowRight } from "react-icons/fa";
import Layout from "./Styling/Layout";
import "./Home.css";
import "./Team.css";

const Team = () => {
  const scrollRef = useRef(null);
  const [popupData, setPopupData] = useState(null);

  const scrollLeft = () => {
    if (scrollRef.current && scrollRef.current.firstElementChild) {
      const slideWidth =
        scrollRef.current.firstElementChild.getBoundingClientRect().width;
      const currentIndex = Math.round(
        scrollRef.current.scrollLeft / slideWidth
      );
      const prevIndex = currentIndex - 1;
      scrollRef.current.scrollTo({
        left: prevIndex * slideWidth,
        behavior: "smooth",
      });
    }
  };

  const scrollRight = () => {
    if (scrollRef.current && scrollRef.current.firstElementChild) {
      const slideWidth =
        scrollRef.current.firstElementChild.getBoundingClientRect().width;
      const currentIndex = Math.round(
        scrollRef.current.scrollLeft / slideWidth
      );
      const nextIndex = currentIndex + 1;
      scrollRef.current.scrollTo({
        left: nextIndex * slideWidth,
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

  const departments = [
    {
      title: "Neuropsychology Department",
      members: [
        { name: "Dr. Lindsay Chatmon", eclipse: "93/113", specialty: "PHD" },
        { name: "Dr. David Levy", eclipse: "97/129", specialty: "PSYD" },
        {
          name: 'Dr. Abdul "Shakoor" Ahmed',
          eclipse: "54/121",
          specialty: "PSYD",
        },
        { name: "Dr. Chiyoko Frank", eclipse: "36/127", specialty: "PHD" },
        { name: "Dr. Shanna Domond", eclipse: "65/119", specialty: "PSYD" },
        { name: "Dr. Jamel Burroughs", eclipse: "112/130", specialty: "PSYD" },
      ],
    },
    {
      title: "Psychiatry Department",
      members: [
        {
          name: "Dr. Evan Donin PMHNP-BC",
          eclipse: "65/119",
          specialty: "PNP",
        },
        { name: "Laura Bernal PMNHP", eclipse: "90/114", specialty: "PNP" },
        { name: "Dr. Gabriel Katz", eclipse: "11/111", specialty: "PNP" },
      ],
    },
    {
      title: "Psychology Department",
      members: [
        { name: "Jacob Miner LCSW", eclipse: "70/122", specialty: "LCSW" },
        { name: "Lena Melendez LCSW", eclipse: "52/124", specialty: "LCSW" },
        {
          name: "Alison Marion Hunt LCSW",
          eclipse: "56/113",
          specialty: "LCSW",
        },
        { name: "Eric Guy LCSW", eclipse: "109/117", specialty: "LCSW" },
        { name: "Denise Garcia LCSW", eclipse: "113/125", specialty: "LCSW" },
        { name: "Maureen Bock LCSW", eclipse: "128/129", specialty: "LCSW" },
        { name: "Fabiola Cuenca LCSW", eclipse: "76/132", specialty: "LCSW" },
        {
          name: "Madison Greenfield LCSW",
          eclipse: "123/135",
          specialty: "LCSW",
        },
        { name: "Jim Oher LCSW", eclipse: "140/148", specialty: "LCSW" },
        { name: "Carina Sacks LMSW", eclipse: "100/124", specialty: "LMSW" },
        { name: "Areliez Estevez LMSW", eclipse: "101/125", specialty: "LMSW" },
        {
          name: "Wessner Petitfrer LMSW",
          eclipse: "75/128",
          specialty: "LMSW",
        },
        { name: "Dayadriz Brito LMSW", eclipse: "88/119", specialty: "LMSW" },
      ],
    },
    {
      title: "Cognitive Therapists",
      members: [
        "Nicole De Los Santos",
        "Anna La Franceschina",
        "Eliza Bautista",
        "Aditya Bhise",
        "Leslie Colon",
        "Alisa Feygis",
        "Melissa Guerrero",
        "Rashelle Hernandez",
        "Joseph Herkowitz",
        "Kelly Lopez",
        "Marla Noumair",
        "Julydia Ortiz",
        "Antonia Perino",
        "Natalie Pujols",
        "Angel Rivera",
      ],
    },
  ];

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
                role: "Founder",
                image: `${
                  import.meta.env.BASE_URL
                }assets/images/malcolm-pic.jpg`,
                description:
<<<<<<< HEAD
                  "As the President/Owner of Bridge medical, Malcolm is the driver of Bridge Medical’s recent growth and transition. A physician by background, graduating medical school in South Africa, he trained in neurosurgery and completed his fellowship in TBI at Baylor College of Medicine in Houston, TX. Following his fellowship, Malcolm honed his business skills while working at New Medico, a privately held Neuro-rehabilitation company treating acute and post-acute TBI patients. Malcolm is the former CEO of HealthTrac, a company he built into the second largest mobile diagnostic services provider in the country, servicing the long-term care industry in six northeast states with over 170 employees and over 300 clients. During his 11-year tenure with HealthTrac, his leadership saw the Company experience significant growth while maintaining strong profit margins. Dr. Kanter was recognized in 2005 by the Nursing Homes of the New York Archdiocese for his efforts and accomplishments. Malcolm has extensive experience in healthcare consulting. As a founding partner at Allexian and CEO of Bridge Medical Group, he has been instrumental in strategic planning, operational evaluation and improvement, organizational turnaround as well as transaction and investment advice, generally focused toward growth-oriented middle market healthcare companies. His primary focus is on growth strategy through new markets and new product development, turnaround and acquisition and integration strategies. Malcolm has performed interim management roles at the C-suite level and is a senior consultant for the Gerson Lehrman Group. Malcolm has held prior positions as Managing Director at Match Point Partners and Project Partner at Promontory Growth and Innovation, serving as senior consultant on various healthcare projects. The most recent project completed in this capacity was a highly successful business process optimization project for a large three-hospital system in Northern FL. Malcolm’s deep and significant knowledge base extends to Physician Services, Medicare and Medicaid reimbursement and regulatory requirements, wound care, diagnostic testing, ambulatory surgical centers, medical devices and technology, clinical trials, staffing models, medical transcription, healthcare analytics, health and wellness, hospital profitability improvement, RCM, long term care and brain injury rehabilitation.",
=======
                  "As CEO, Malcolm is the driver of Bridge Medical’s recent growth and transition. A physician by background, graduating medical school in South Africa, he trained in neurosurgery and completed his fellowship in TBI at Baylor College of Medicine in Houston, TX. Following his fellowship, Malcolm honed his business skills while working at New Medico, a privately held Neuro-rehabilitation company treating acute and post-acute TBI patients.",
>>>>>>> ad452a84984a3bf40b16c882f1f4743693cbdfb2
              })
            }
          >
            <img
              src={`${import.meta.env.BASE_URL}assets/images/malcolm-pic.jpg`}
              className="team-pic"
              alt="Malcolm Kanter"
            />
            <h2 className="name-title">Malcolm Kanter, MD</h2>
            <h1 className="job-title">Founder</h1>
            <FaLongArrowAltRight className="arrow-link" />
          </div>
          <div
            className="job-tile"
            onClick={() =>
              handleTileClick({
                name: "Anthony Trasmundi",
                role: "Chief Executive Officer",
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
            <h1 className="job-title">Chief Executive Officer</h1>
            <FaLongArrowAltRight className="arrow-link" />
          </div>
          <div
            className="job-tile"
            onClick={() =>
              handleTileClick({
<<<<<<< HEAD
                name: "Sophie Sassoon",
                role: "Director of Business development",
                image: `${
                  import.meta.env.BASE_URL
                }assets/images/sophie-pic.jpg`,
                description:
                  "Sophie, a true “force of nature”, honed her business development skills as a major fundraiser and events organizer for Charities in support of Israel. Amongst the beneficiaries of Sophie’s efforts were Israel’s soldiers and citizens including the Israeli Defense Force, The Hebrew University; various AIPAC related organizations as well as high tech medical and scientific entities.\n\nThis experience became the proving ground for Sophie’s ability to forge life long relationships with business leaders, dignitaries and politicians. Sophie has established investor relationships at the highest level, including her instrumental role in the development of a major airport in the Middle East.\n\nSophie, a fashion icon and entrepreneur in her own right, has developed a skill set in recognizing opportunity that many others fail to see. Her reach has become global.\n\nIt is these skills and relationships that Sophie now brings to Bridge Medical, the leading provider of cognitive and mental health services to patients with concussion, head injury and other neurologic deficits. Often one or two degrees from any person, Sophie is tireless in her work ethic and embraces challenges as opportunities for success, facilitating successful outcomes for her clients.",
              })
            }
          >
            <img
              src={`${import.meta.env.BASE_URL}assets/images/sophie-pic.jpg`}
              className="team-pic"
              alt="Sophie Sassoon"
            />
            <h2 className="name-title">Sophie Sassoon</h2>
            <h1 className="job-title">Director of Business development</h1>
            <FaLongArrowAltRight className="arrow-link" />
          </div>
          <div
            className="job-tile"
            onClick={() =>
              handleTileClick({
=======
>>>>>>> ad452a84984a3bf40b16c882f1f4743693cbdfb2
                name: "Jacob Miner",
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
            <h2 className="name-title">Jacob Miner</h2>
            <h1 className="job-title">Director of Behavioral Health</h1>
            <FaLongArrowAltRight className="arrow-link" />
          </div>
          <div
            className="job-tile"
            onClick={() =>
              handleTileClick({
                name: "Dr. Anna Spieglman",
<<<<<<< HEAD
                role: "Director of Neuropsychology ",
=======
                role: "Clinical Psychologist / Neuro Psychologist",
>>>>>>> ad452a84984a3bf40b16c882f1f4743693cbdfb2
                image: `${
                  import.meta.env.BASE_URL
                }assets/images/spiegelman-profile.jpg`,
                description:
                  "Dr. Spieglman is a clinical psychologist and neuropsychologist licensed in both New York and New Jersey.",
              })
            }
          >
            <img
              src={`${
                import.meta.env.BASE_URL
              }assets/images/spiegelman-profile.jpg`}
              className="team-pic"
              alt="Dr. Anna Spieglman"
            />
            <h2 className="name-title">Dr. Anna Spieglman</h2>
<<<<<<< HEAD
            <h1 className="job-title">Director of Neuropsychology </h1>
=======
            <h1 className="job-title">
              Clinical Psychologist / Neuro Psychologist
            </h1>
            <FaLongArrowAltRight className="arrow-link" />
          </div>
          <div
            className="job-tile"
            onClick={() =>
              handleTileClick({
                name: "Sophie Sassoon",
                role: "Director of Business development",
                image: `${
                  import.meta.env.BASE_URL
                }assets/images/sophie-pic.jpg`,
                description:
                  "Sophie, a true “force of nature”, honed her business development skills as a major fundraiser and events organizer for Charities in support of Israel. Amongst the beneficiaries of Sophie’s efforts were Israel’s soldiers and citizens including the Israeli Defense Force, The Hebrew University; various AIPAC related organizations as well as high tech medical and scientific entities.\n\nThis experience became the proving ground for Sophie’s ability to forge life long relationships with business leaders, dignitaries and politicians. Sophie has established investor relationships at the highest level, including her instrumental role in the development of a major airport in the Middle East.\n\nSophie, a fashion icon and entrepreneur in her own right, has developed a skill set in recognizing opportunity that many others fail to see. Her reach has become global.\n\nIt is these skills and relationships that Sophie now brings to Bridge Medical, the leading provider of cognitive and mental health services to patients with concussion, head injury and other neurologic deficits. Often one or two degrees from any person, Sophie is tireless in her work ethic and embraces challenges as opportunities for success, facilitating successful outcomes for her clients.",
              })
            }
          >
            <img
              src={`${import.meta.env.BASE_URL}assets/images/sophie-pic.jpg`}
              className="team-pic"
              alt="Sophie Sassoon"
            />
            <h2 className="name-title">Sophie Sassoon</h2>
            <h1 className="job-title">Director of Business development</h1>
>>>>>>> ad452a84984a3bf40b16c882f1f4743693cbdfb2
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
<<<<<<< HEAD
=======

      <div className="provider-section">
        <h2 className="prov-title">Our Providers</h2>
        <div className="provider-container">
          <button className="arrow-btn prev-arrow" onClick={scrollLeft}>
            <FaArrowLeft />
          </button>
          <div className="provider-sec" ref={scrollRef}>
            {departments.map((dept, dIndex) => (
              <div className="table-container" key={dIndex}>
                <h3>{dept.title}</h3>
                {dept.title === "Cognitive Therapists" ? (
                  <table className="provider-table">
                    <thead>
                      <tr>
                        <th>Name</th>
                      </tr>
                    </thead>
                    <tbody>
                      {dept.members.map((member, mIndex) => (
                        <tr key={mIndex}>
                          <td>{member}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                ) : (
                  <table className="provider-table">
                    <thead>
                      <tr>
                        <th>Name</th>
                        <th>Eclipse Provider #</th>
                        <th>Specialty</th>
                      </tr>
                    </thead>
                    <tbody>
                      {dept.members.map((member, mIndex) => (
                        <tr key={mIndex}>
                          <td>{member.name}</td>
                          <td>{member.eclipse}</td>
                          <td>{member.specialty}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                )}
              </div>
            ))}
          </div>
          <button className="arrow-btn next-arrow" onClick={scrollRight}>
            <FaArrowRight />
          </button>
        </div>
      </div>
>>>>>>> ad452a84984a3bf40b16c882f1f4743693cbdfb2
    </Layout>
  );
};

export default Team;
