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
        "Dr. Lindsay Chatmon",
        "Dr. David Levy",
        'Dr. Abdul "Shakoor" Ahmed',
        "Dr. Chiyoko Frank",
        "Dr. Shanna Domond",
        "Dr. Jamel Burroughs",
      ],
    },
    {
      title: "Psychiatry Department",
      members: [
        "Dr. Evan Donin PMHNP-BC",
        "Laura Bernal PMNHP",
        "Dr. Gabriel Katz",
      ],
    },
    {
      title: "Psychology Department",
      members: [
        "Jacob Miner LCSW",
        "Lena Melendez LCSW",
        "Alison Marion Hunt LCSW",
        "Eric Guy LCSW",
        "Denise Garcia LCSW",
        "Maureen Bock LCSW",
        "Fabiola Cuenca LCSW",
        "Madison Greenfield LCSW",
        "Jim Oher LCSW",
        "Carina Sacks LMSW",
        "Areliez Estevez LMSW",
        "Wessner Petitfrer LMSW",
        "Dayadriz Brito LMSW",
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
                name: "Dr. Anna Spigelman",
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
              alt="Dr. Anna Spigelman"
            />
            <h2 className="name-title">Dr. Anna Spigelman</h2>
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
                }assets/images/Sophie-Sassoon-placeholder.webp`,
                description:
                  "Sophie, a true “force of nature”, honed her business development skills as a major fundraiser and events organizer for Charities in support of Israel. Amongst the beneficiaries of Sophie’s efforts were Israel’s soldiers and citizens including the Israeli Defense Force, The Hebrew University; various AIPAC related organizations as well as high tech medical and scientific entities.\n\nThis experience became the proving ground for Sophie’s ability to forge life long relationships with business leaders, dignitaries and politicians. Sophie has established investor relationships at the highest level, including her instrumental role in the development of a major airport in the Middle East.\n\nSophie, a fashion icon and entrepreneur in her own right, has developed a skill set in recognizing opportunity that many others fail to see. Her reach has become global.\n\nIt is these skills and relationships that Sophie now brings to Bridge Medical, the leading provider of cognitive and mental health services to patients with concussion, head injury and other neurologic deficits. Often one or two degrees from any person, Sophie is tireless in her work ethic and embraces challenges as opportunities for success, facilitating successful outcomes for her clients.",
              })
            }
          >
            <img
              src={`${
                import.meta.env.BASE_URL
              }assets/images/Sophie-Sassoon-placeholder.webp`}
              className="team-pic"
              alt="Sophie Sassoon"
            />
            <h2 className="name-title">Sophie Sassoon</h2>
            <h1 className="job-title">Director of Business development</h1>
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
      <div className="provider-section">
        <h2 className="prov-title">Departments & Therapists</h2>
        <div className="provider-container">
          <button className="arrow-btn prev-arrow" onClick={scrollLeft}>
            <FaArrowLeft />
          </button>
          <div className="provider-sec" ref={scrollRef}>
            {departments.map((dept, index) => (
              <div className="table-container" key={index}>
                <h3>{dept.title}</h3>
                <ul>
                  {dept.members.map((member, idx) => (
                    <li key={idx}>{member}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          <button className="arrow-btn next-arrow" onClick={scrollRight}>
            <FaArrowRight />
          </button>
        </div>
      </div>
    </Layout>
  );
};

export default Team;
