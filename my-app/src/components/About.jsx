import React from "react";
import Navbar from "./Navebar";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faGoogle } from "@fortawesome/free-brands-svg-icons"; // Import GitHub and Gmail icons
import "./style/About.css";

// Sample data for team members
const teamMembers = [
  {
    name: " Nahil Nasir",
    github: "https://github.com/nahilnasir",
    email: "nahil.ai22@sahyadri.edu.in",
  },
  {
    name: "Tapan KR",
    github: "https://github.com/Tapan003",
    email: "tapan.cs22@sahayadri.edu.in",
  },
  {
    name: "Ahad  Hussain",
    github: "https://github.com/ahadhuss3in",
    email: "janesmith@example.com",
  },
  {
    name: "A Vinish Das",
    github: "https://github.com/vinishdas",
    email: "vinish.cs22@sahyadri.edu.in",
  },
];

const About = () => {
  return (
    
    <div className="about-page">
      <Navbar></Navbar>
      <header className="about-header">
      <h1> <span style={{ color:'#71677C' }}>Our </span><span style={{ color:'black' }}>goal is to Make a </span><span style={{ color:'#945D5E' }}>Skin care</span> <span style={{ color:'black' }}>app for </span><span style={{ color: '#DDA77B' }}>All</span> .</h1>

      </header>
      <section className="about-content">
        <h2 className="fade-in">Introduction</h2>
        <p className="fade-in">
          This project, developed by us at Sahyadri College of Engineering and Management,
          utilizes Convolutional Neural Networks (CNNs) for skin care analysis.
          The system aims to analyze skin conditions, identify various skin types,
          and detect potential issues such as acne, wrinkles, or other dermatological concerns.
          By leveraging deep learning techniques, the project automates the process of analyzing skin health,
          offering our wide range selection of best dermatologist recommended products.
          We vow to create a user-friendly interface that allows users to upload images of their skin and give a 87% accuracy of the skin condition.
          The model is trained on a dataset of skin images and is designed to provide accurate predictions,
          enabling users to monitor and improve their skin health with the help of advanced technology.
        </p>

        <h2 className="slide-up">Meet The Team</h2>
        <div className="team">
          {teamMembers.map((member, index) => (
            <div key={index} className="team-member slide-up">
              <h3>{member.name}</h3>
              <div className="socials">
                {/* GitHub Logo using Font Awesome */}
                <a href={member.github} target="_blank" rel="noopener noreferrer" className="github">
                  <FontAwesomeIcon icon={faGithub} size="2x" />
                </a>
                {/* Gmail Logo using Font Awesome */}
                <a href={`mailto:${member.email}`} className="gmail">
                  <FontAwesomeIcon icon={faGoogle} size="2x" />
                </a>
              </div>
            </div>
          ))}
        </div>

        <h2 className="fade-in">Future Plans</h2>
        <p className="fade-in">
          In the future: 
          We plan to expand our model to include a broader range of skin conditions,
          integrate it with mobile applications, and provide real-time recommendations
          for users worldwide. We also plan to include a feature that allows users to track their skin health over time.
          Have a personal skin care assistant that will help you to take care of your skin.
        </p>
      </section>
    </div>
  );
};

export default About;
