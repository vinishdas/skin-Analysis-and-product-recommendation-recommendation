import React from "react";
import "./style/About.css";

// Sample data for team members
const teamMembers = [
  {
    name: "Mohammed Nahil Nasir",
    github: "https://github.com/johndoe",
    email: "johndoe@example.com",
  },
  {
    name: "Tapan KR",
    github: "https://github.com/janesmith",
    email: "janesmith@example.com",
  },
  // Add more team members here
];

const About = () => {
  return (
    <div className="page">
    <div className="about">
      <h1>About This App</h1>
      <p>
        This project, developed by a third-year student at Sahyadri College,
        utilizes Convolutional Neural Networks (CNNs) for skin care analysis.
        The system aims to analyze skin conditions, identify various skin types,
        and detect potential issues such as acne, wrinkles, or other dermatological concerns.
        By leveraging deep learning techniques, the project automates the process of analyzing skin health,
        offering potential applications in personalized skin care recommendations.
        The model is trained on a dataset of skin images and is designed to provide accurate predictions,
        enabling users to monitor and improve their skin health with the help of advanced technology.
      </p>

      <h2>Meet The Team</h2>
      <div className="team">
        {teamMembers.map((member, index) => (
          <div key={index} className="team-member">
            <h3>{member.name}</h3>
            <div className="socials">
              <a href={member.github} target="_blank" rel="noopener noreferrer" className="github">
                GitHub
              </a>
              <a href={`mailto:${member.email}`} className="email">
                Email
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
    </div>
  );
};

export default About;
