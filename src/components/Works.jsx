import React from "react";

const works = [
  {
    title: "Tourism Website",
    desc: "This website shows the beautiful places in India and to travel the India.",
    img: "https://images-platform.99static.com//xxg46Jrq7STcZJ2fen44LSvZslg=/0x0:1280x1280/fit-in/500x500/99designs-contests-attachments/118/118968/attachment_118968439",
    link: "https://komalis.ccbp.tech/"
  },
  {
    title: "Smart Loan Calculator",
    desc: "This project calculates the loan with values of interest and time.",
    img: "https://www.wikihow.com/images/thumb/0/0a/Calculate-an-Installment-Loan-Payment-Step-13-Version-2.jpg/v4-460px-Calculate-an-Installment-Loan-Payment-Step-13-Version-2.jpg.webp",
    link: "https://smart-loan-calculator.vercel.app/"
  },
  {
    title: "Food Much",
    desc: "It is a restaurant theme website showing all the items.",
    img: "https://d1tgh8fmlzexmh.cloudfront.net/ccbp-responsive-website/em-ginger-fried-img.png",
    link: "https://komalifmwebpage.ccbp.tech/"
  },
  {
    title: "Tic Tac Toe",
    desc: "It is a tic tac toe game website we can play with two persons.",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTE8nuz5LrPrW9BC_FLaW2Hy2QuXdY5P08aJrvjtBVYKK1oHW6w4T4n6NvEonsw37xbRXY&usqp=CAU",
    link: "https://tictactoegamejs.ccbp.tech/"
  },
  {
    title: "Weather Website",
    desc: "A project that shows the real weather condition using weather API.",
    img: "https://cdn.sketchbubble.com/pub/media/catalog/product/optimized1/f/9/f9bb853e8a43213ea46d2bd50297f9f67f5e20fa47bf414b04aa738d846c86ca/weather-forecast-slide1.png",
    link: "#"
  },
  {
    title: "Task Pro Manager",
    desc: "This project shows the schedules for User.",
    img: "https://cdn.dribbble.com/userupload/14567647/file/original-7f88cbe1f51ff62baf4d496898fde442.png?format=webp&resize=400x300&vertical=center",
    link: "https://task-pro-manager.vercel.app/"
  }
];

const Works = () => (
  <section id="works" className="works">
    <div className="works-content">
      <h2 className="section-title">Recent Works</h2>
      <div className="works-grid">
        {works.map((work, idx) => (
          <div className="work-card" key={idx}>
            <img src={work.img} alt={work.title} />
            <div className="work-info">
              <div>
                <h3>{work.title}</h3>
                <p>{work.desc}</p>
              </div>
              <div className="work-links">
                <a href={work.link} target="_blank" rel="noopener noreferrer">
                  <i className="fas fa-external-link-alt"></i>
                  Live
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default Works;