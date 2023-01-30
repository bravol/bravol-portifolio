import React from "react";
import "./Portfolio.scss";
import PROJECT1 from "../../images/portfolio1.webp";
import PROJECT2 from "../../images/portfolio2.webp";
import PROJECT3 from "../../images/portfolio3.webp";
import PROJECT4 from "../../images/portfolio4.webp";
import PROJECT5 from "../../images/portfolio5.webp";
import PROJECT6 from "../../images/portfolio6.webp";

const Portfolio = () => {
  // map the data
  const data = [
    {
      id: 1,
      image: PROJECT1,
      title: "Crypto Currency Dashboard and Financial Visualization",
      github: "https://github.com",
      demo: "",
    },
    {
      id: 2,
      image: PROJECT2,
      title: "Crypto Currency Dashboard and Financial Visualization",
      github: "https://github.com",
      demo: "",
    },
    {
      id: 3,
      image: PROJECT3,
      title: "Crypto Currency Dashboard and Financial Visualization",
      github: "https://github.com",
      demo: "",
    },
    {
      id: 4,
      image: PROJECT4,
      title: "Crypto Currency Dashboard and Financial Visualization",
      github: "https://github.com",
      demo: "",
    },
    {
      id: 5,
      image: PROJECT5,
      title: "Crypto Currency Dashboard and Financial Visualization",
      github: "https://github.com",
      demo: "",
    },
    {
      id: 6,
      image: PROJECT6,
      title: "Crypto Currency Dashboard and Financial Visualization",
      github: "https://github.com",
      demo: "",
    },
  ];
  return (
    <section id="portfolio">
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio__container ">
        {data.map(({ id, image, title, github, demo }) => {
          return (
            <article key={id} className="portfolio__item">
              <div className="portfolio__item__image">
                <img src={image} alt={title} />
                <h3>{title}</h3>
                <div className="portfolio__item__cta">
                  <a href={github} className="btn" target="_blank">
                    Github
                  </a>
                  <a href={demo} className="btn btn-primary" target="_blank">
                    Live Demo
                  </a>
                </div>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
};

export default Portfolio;
