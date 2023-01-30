import React from "react";
import "./About.scss";
import ME from "../../images/me.jpg";
import { FiAward, FiUsers, FiFolderPlus } from "react-icons/fi";
import { FaAngular, FaHtml5, FaCss3, FaReact, FaPython } from "react-icons/fa";
import { DiJavascript } from "react-icons/di";

const About = () => {
  return (
    <section id="about">
      <h5>Get to Know</h5>
      <h2>About Me</h2>
      <div className="container about__container">
        <div className="stage-cube-cont">
          <div className="cubespinner">
            <div className="face1">
              <FaAngular color="#DD0031" />
            </div>
            <div className="face2">
              <FaHtml5 color="#F06529" />
            </div>
            <div className="face3">
              <FaCss3 color="#28A4D9" />
            </div>
            <div className="face4">
              <FaReact color="#5ED4F4" />
            </div>
            <div className="face5">
              <DiJavascript color="#EFD81D" />
            </div>
            <div className="face6">
              <FaPython color="#EC4D28" />
            </div>
          </div>
        </div>
        <div className="about__me">
          <div className="about__me__image">
            <img src={ME} alt="About Image" />
          </div>
        </div>
        <div className="about__content">
          <div className="about__cards">
            <article className="about__card">
              <FiAward className="about__card__icon" />
              <h5>Experience</h5>
              <small>3+ Years Working</small>
            </article>
            <article className="about__card">
              <FiUsers className="about__card__icon" />
              <h5>Clients</h5>
              <small>50+ Worldwide</small>
            </article>
            <article className="about__card">
              <FiFolderPlus className="about__card__icon" />
              <h5>Projects</h5>
              <small>20+ Completed</small>
            </article>
          </div>
          <p>
            I am a Ugandan and a well experienced software developer, (A full
            stack developer). I got a first class degree in Bachelors in
            computer Science and Information Technology and I was the best male
            student of year 2022 at Kampala University in Uganda.
          </p>
          <a href="#contact" className="btn btn-primary">
            Lets Talk
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;
