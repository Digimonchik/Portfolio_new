import React from "react";
import "./about.scss";

const About = () => {
  return (
    <div className="about">
      <div className="circle-decoration white"></div>
      <div className="circle-decoration yellow"></div>{" "}
      <h1 className="about__container_block_header">About me</h1>
      <div className="about__container">
        <div className="about__container_block cv"></div>
        <div className="about__container_block linkdin"></div>
        <div className="about__container_block text">
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
        </div>
      </div>
    </div>
  );
};

export default About;
