import React from "react";
import { motion } from "framer-motion";
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

const skills = [js, ts, sass, react, ps, figma, node, mongo];

const Skills = () => {
  return (
    <div className="skills">
      <div className="skills__container">
        {skills.map((icon, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: i * 0.1, ease: "easeOut" }}
            viewport={{ once: true, amount: 0.2 }}
          >
            <Skill text="" icon={icon} />
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Skills;
