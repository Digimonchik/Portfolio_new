import React from "react";
import Skill from "./Skill";
import "./skills.scss";
import js from "./icons/js.png";
import ts from "./icons/ts.png";
import sass from "./icons/sass.png";
import react from "./icons/react.png";
import ps from "./icons/ps.png";
import figma from "./icons/figma.png";
import node from "./icons/node.png";
import mongo from "./icons/mongo.png";

const Skills = () => {
  return (
    <div className="skills">
      <div className="skills__container">
        <Skill text="" icon={js}></Skill>
        <Skill text="" icon={ts}></Skill>
        <Skill text="" icon={sass}></Skill>
        <Skill text="" icon={react}></Skill>
        <Skill text="" icon={ps}></Skill>
        <Skill text="" icon={figma}></Skill>
        <Skill text="" icon={node}></Skill>
        <Skill text="" icon={mongo}></Skill>
      </div>
    </div>
  );
};

export default Skills;
