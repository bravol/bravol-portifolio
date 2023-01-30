import React from "react";
import "./Experience.scss";
import { BsShieldFillCheck } from "react-icons/bs";
const Experience = () => {
  return (
    <section id="experience">
      <h5>What Skills I Have</h5>
      <h2>My Experience</h2>
      <div className=" container experience__container">
        <div className="experience__frontend">
          <h3>Frontend Development</h3>
          <div className="experience__content">
            <article className="experience__details">
              <BsShieldFillCheck className="experience__details__icon " />
              <div>
                <h4>CSS</h4>
                <small className="text-light">Expert</small>
              </div>
            </article>
            <article className="experience__details">
              <BsShieldFillCheck className="experience__details__icon " />
              <div>
                <h4>HTML</h4>
                <small className="text-light">Expert</small>
              </div>
            </article>
            <article className="experience__details">
              <BsShieldFillCheck className="experience__details__icon " />
              <div>
                <h4>JAVA</h4>
                <small className="text-light">Intermediate</small>
              </div>
            </article>
            <article className="experience__details">
              <BsShieldFillCheck className="experience__details__icon " />
              <div>
                <h4>React JS</h4>
                <small className="text-light">Experienced</small>
              </div>
            </article>
            <article className="experience__details">
              <BsShieldFillCheck className="experience__details__icon " />
              <div>
                <h4>Angular JS</h4>
                <small className="text-light">intermediate</small>
              </div>
            </article>
          </div>
        </div>
        <div className="experience__backend">
          <h3>Back-End Development</h3>
          <div className="experience__content">
            <article className="experience__details">
              <BsShieldFillCheck className="experience__details__icon " />
              <div>
                <h4>Node JS</h4>
                <small className="text-light">Expert</small>
              </div>
            </article>
            <article className="experience__details">
              <BsShieldFillCheck className="experience__details__icon " />
              <div>
                <h4>Mongo DB</h4>
                <small className="text-light">Expert</small>
              </div>
            </article>
            <article className="experience__details">
              <BsShieldFillCheck className="experience__details__icon " />
              <div>
                <h4>PHP</h4>
                <small className="text-light">Intermediate</small>
              </div>
            </article>
            <article className="experience__details">
              <BsShieldFillCheck className="experience__details__icon " />
              <div>
                <h4>Python</h4>
                <small className="text-light">Experienced</small>
              </div>
            </article>
            <article className="experience__details">
              <BsShieldFillCheck className="experience__details__icon " />
              <div>
                <h4>MysQL</h4>
                <small className="text-light">intermediate</small>
              </div>
            </article>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
