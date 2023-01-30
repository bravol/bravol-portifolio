import React from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { BsDribbble } from "react-icons/bs";
const HeaderSocials = () => {
  return (
    <div className="header__socials">
      <a href="https://github.com/bravol" target="_blank">
        <FaGithub />
      </a>
      <a href="https://linkedin.com" target="_blank">
        {" "}
        <FaLinkedin />{" "}
      </a>
      <a href="https://dribble.com" target="_blank">
        {" "}
        <BsDribbble />{" "}
      </a>
    </div>
  );
};

export default HeaderSocials;
