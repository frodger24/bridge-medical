import React, { useState, useRef, useEffect } from "react";
import { FaLongArrowAltRight, FaArrowLeft, FaArrowRight } from "react-icons/fa";
import Layout from "./Styling/Layout";
import "./Providers.css";
import "./Team.css";

const Providers = () => {
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
      title: "Neuropsychologists",
      members: [
        "Dr. Anna Spigelman",
        "Dr. Linsay Chatmon",
        "Dr. Shanna Domond",
        'Dr. Abdul "Shakoor" Ahmed',
        "Dr. David Levy",
        "Dr. Michelle Cohen",
        "Dr. Jamel Burroughs",
      ],
    },
    {
      title: "Psychiatrists",
      members: [
        "Evan Donin – PMHNP-BC",
        "Laura Bernal PMNHP",
        "Vielka Centeno PMNHP",
        "Dr. Gabriel Katz",
      ],
    },
    {
      title: "Psychology",
      members: [
        "Jacob Miner LCSW",
        "Lena Melendez LCSW",
        "Alison Marion Hunt LSCSW",
        "Eric Guy LCSW",
        "Denise Garcia LCSW",
        "Maureen Bock LSCW",
        "Fabiola Cueca LCSW",
        "Ester Cox LCSW",
        "Jim Oher LCSW",
        "Carina Sacks LMSW",
        "Areliez Estevez LMSW",
        "Dayadriz Brito LMSW",
      ],
    },
    {
      title: "Cognitive Therapist/Cognitions",
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
        // removed Yuga Kothari
        "Andrea Balbuena",
      ],
    },
  ];

  return (
    <Layout>
      <div className="team-section">
        <h1 className="team-title">Our Providers</h1>
        <div className="provider-section">
          <div className="provider-container">
            <button className="arrow-btn prev-arrow" onClick={scrollLeft}>
              <FaArrowLeft />
            </button>
            <div className="provider-sec" ref={scrollRef}>
              {departments.map((dept, dIndex) => (
                <div className="table-container" key={dIndex}>
                  <h3>{dept.title}</h3>
                  <ul className="provider-table">
                    {dept.members.map((member, mIndex) => (
                      <li key={mIndex}>{member}</li>
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
      </div>
      <img
        className="home-pic"
        src={`${import.meta.env.BASE_URL}assets/images/homepage-image.jpg`}
        alt="Psychologist talking to patient"
      />
    </Layout>
  );
};

export default Providers;
