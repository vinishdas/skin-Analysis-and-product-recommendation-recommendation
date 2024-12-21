import React from "react";
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
    email: "tapan.cs22@sahaydri.edu.in",
  },
  {
    name: "Ahad Asif Hussain",
    github: "https://github.com/ahadhuss3in",
    email: "janesmith@example.com",
  },
  {
    name: "A Vinish Das",
    github: "https://github.com/vinishdas",
    email: "vinish.cs22@sahyadri.edu.in",
  },
  // Add more team members here
];

const About = () => {
  return (
    <div className="page">
      <h1>About Our SkinCare App</h1>
    <div className="about">
      
      
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
      </div>

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
    
  );
};

export default About;
