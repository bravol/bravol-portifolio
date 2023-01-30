import React from "react";
import "./Footer.scss";
import { BsFacebook, BsInstagram, BsTwitter } from "react-icons/bs";
const Footer = () => {
  return (
    <section id="footer">
      <footer>
        <a href="#" className="footer__logo">
          BRAVOL
        </a>

        <ul className="permalinks">
          <li>
            <a href="#">Home</a>
          </li>
          <li>
            <a href="#about">About</a>
          </li>
          <li>
            <a href="#experience">Experience</a>
          </li>
          <li>
            <a href="#services">Services</a>
          </li>
          <li>
            <a href="#portfolio">Portfolio</a>
          </li>
          <li>
            <a href="#testimonial">Testimonials</a>
          </li>
          <li>
            <a href="#contact">Contact</a>
          </li>
        </ul>

        <div className="footer__socials">
          <a href="https://facebook.com">
            <BsFacebook />
          </a>
          <a href="https://instagram.com">
            <BsInstagram />
          </a>
          <a href=" https://twitter.com ">
            <BsTwitter />
          </a>
        </div>
        <div className="footer__copyright">
          <small>&copy; BRIAN React Tutorials. All rights reserved</small>
        </div>
      </footer>
    </section>
  );
};

export default Footer;
