import React from "react";
import "./Services.scss";
import { BiCheck } from "react-icons/bi";
const Services = () => {
  return (
    <section id="services">
      <h5>What I offer</h5>
      <h2>Services</h2>
      <div className="container services__container">
        {/* UI/design */}
        <article className="service">
          <div className="service__head">
            <h3>Mobile Application Development</h3>
          </div>
          <ul className="service__list">
            <li>
              <BiCheck className="service__list__icon" />
              <p>Efficient Work Approach</p>
            </li>
            <li>
              <BiCheck className="service__list__icon" />
              <p>Strong Foresight</p>
            </li>

            <li>
              <BiCheck className="service__list__icon" />
              <p>High-Level Technical Proficiency</p>
            </li>
            <li>
              <BiCheck className="service__list__icon" />
              <p>Expert in Cross-Platform Development</p>
            </li>
            <li>
              <BiCheck className="service__list__icon" />
              <p>
                Teamwork. A skilled app developer works great on their own and
                within a team setting
              </p>
            </li>
          </ul>
        </article>

        {/* Web development */}
        <article className="service">
          <div className="service__head">
            <h3>Web Development</h3>
          </div>
          <ul className="service__list">
            <li>
              <BiCheck className="service__list__icon" />
              <p>
                A passion for learning and the desire to keep up with the latest
                trends
              </p>
            </li>
            <li>
              <BiCheck className="service__list__icon" />
              <p>
                A web developer rarely works alone, I work with a great team of
                Web developers
              </p>
            </li>
            <li>
              <BiCheck className="service__list__icon" />
              <p>
                Creative problem solver. A great developer thrives on finding
                ways to make things work
              </p>
            </li>
            <li>
              <BiCheck className="service__list__icon" />
              <p>
                Great debugging skills. I help fix bad code written by their
                in-house developers that they couldn’t solve themselves
              </p>
            </li>
          </ul>
        </article>

        {/* Content Creation */}
        <article className="service">
          <div className="service__head">
            <h3>Network Administration</h3>
          </div>
          <ul className="service__list">
            <li>
              <BiCheck className="service__list__icon" />
              <p>A commitment to keep learning.</p>
            </li>
            <li>
              <BiCheck className="service__list__icon" />
              <p>
                Specialized technical skills and willing to learn more with time
              </p>
            </li>
            <li>
              <BiCheck className="service__list__icon" />
              <p>
                Being self-motivated. I am self-motivated and get work done
                without being shadowed.
              </p>
            </li>
            <li>
              <BiCheck className="service__list__icon" />
              <p>
                Problem-solving skills. I set up and maintain networks with the
                goal of avoiding problems, but I also have to troubleshoot
              </p>
            </li>
          </ul>
        </article>
      </div>
    </section>
  );
};

export default Services;
