import React from "react";
import { SiJavascript, SiNodedotjs, SiMysql, SiReact } from "react-icons/si";

const skills = [
  {
    icon: <SiJavascript />,
    title: "JavaScript",
    desc: "Expert in modern JavaScript, including ES6+ features"
  },
  {
    icon: <SiNodedotjs />,
    title: "Node.js",
    desc: "Server-side development with Node.js and Express"
  },
  {
    icon: <SiMysql />,
    title: "Database",
    desc: "Experience with SQL and NoSQL databases"
  },
  {
    icon: <SiReact />,
    title: "React",
    desc: "Expert in React and frontend technologies"
  }
];

const Skills = () => (
  <section className="skills" id="skills">
    <div className="skills-content">
      <h2 className="section-title">My Skills</h2>
      <div className="skills-slider">
        <div className="skills-grid">
          {skills.map((s, idx) => (
            <div className="skills-card" key={idx}>
              <span>{s.icon}</span>
              <h3>{s.title}</h3>
              <p>{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  </section>
);

export default Skills;