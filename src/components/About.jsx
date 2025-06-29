import React from "react";
import profile from "../assets/profile.jpg"; // Make sure you have your profile.jpg here

const About = () => (
  <section id="about" className="about">
    <div className="about-content">
      <div className="profile-img">
        <img
          src={profile}
          alt="Teja Kondepu"
        />
      </div>
      <div className="about-text">
        <h2 className="section-title">About Me</h2>
        <p>
          I'm a Full Stack Developer with 3 years of experience in building
          scalable web applications. I specialize in JavaScript technologies
          across the entire stack and have a passion for creating elegant
          solutions to complex problems.
        </p>
        <p>
          Currently I'm pursuing my BTech at RGUKT Srikakulam in CSE and I am interested in website creation.
        </p>
      </div>
    </div>
  </section>
);

export default About;