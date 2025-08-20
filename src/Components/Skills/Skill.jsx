import React from "react";
import "./skill.scss";

const Skill = ({ icon, text }) => {
  console.log(icon);
  return (
    <div className="skill">
      <img className="skill__image" src={icon} alt="icon"></img>
      <div className="skill__description">{text}</div>
    </div>
  );
};

export default Skill;
