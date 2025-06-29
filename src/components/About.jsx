import React from "react";
import profile from "../assets/profile.jpg"; // Make sure you have your profile.jpg here

const About = () => (
  <section id="about" className="about">
    <div className="about-content">
      <div className="profile-img">
        <img
          src={profile}
          alt="Kondepu Teja Venkatesh"
        />
      </div>
      <div className="about-text">
        <h2 className="section-title">About Me</h2>
        <p>
          To contribute to a dynamic organization that fosters continuous learning and innovation in emerging technologies, leveraging my skills in software development, DevOps, problem-solving, and AI/ML, while collaborating with dynamic teams to build scalable and impactful solutions.
        </p>
        
      </div>
    </div>
  </section>
);

export default About;