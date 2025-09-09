import React, { forwardRef } from "react";
import { motion } from "framer-motion";
import "./about.scss";
import cv from "../../Documents/CV.pdf";

const About = forwardRef((props, ref) => {
  return (
    <div className="about" ref={ref}>
      <div className="circle-decoration white"></div>
      <div className="circle-decoration yellow"></div>
      <h1 className="about__container_block_header">About me</h1>
      <div className="about__container">
        <motion.a
          href={cv}
          className="about__container_block cv"
          initial={{ opacity: 0, x: -100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true, amount: 0.2 }}
        ></motion.a>

        <div className="about__container_block linkdin"></div>

        <motion.div
          className="about__container_block text"
          initial={{ opacity: 0, x: 100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true, amount: 0.2 }}
        >
          <div className="about__container_block_description">
            <p>
              Hello, my name is Dima. I am a junior front-end developer from
              Kyiv.
            </p>
            <p>
              I have a solid foundation in HTML, CSS, and JavaScript, and I
              enjoy applying modern frameworks and tools to create responsive,
              accessible, and visually appealing interfaces.
            </p>
            <p>
              Currently, I am maintaining a website that I fully designed and
              developed, including both the front-end interface and the back-end
              functionality. This hands-on experience allows me to continuously
              refine my skills in design and development, while also managing
              real-world tasks such as content updates, performance
              optimization, and feature enhancements.
            </p>
            <p>
              Although I may not yet have extensive experience working on large
              team projects, I am passionate about learning new technologies and
              improving my coding practices. I am eager to collaborate on
              innovative projects, work alongside skilled professionals, and
              contribute to a positive and productive development environment.
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  );
});

export default About;
