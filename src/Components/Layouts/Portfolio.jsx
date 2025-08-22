import React from "react";
import { Link } from "react-router-dom";
import landing_first from "./template1.JPG";
import landing_second from "./template2.JPG";
import landing_third from "./template3.JPG";
import landing_fifth from "./template5.JPG";
const pages = {
  template_1: "https://digimonchik.github.io/site_template_1/",
  template_2: "https://digimonchik.github.io/site_template_2/",
  template_3: "https://digimonchik.github.io/layout-cards/",
  template_4: "https://digimonchik.github.io/Slider/",
  template_5: "https://digimonchik.github.io/template_4/",
};

const Portfolio = () => {
  return (
    <div className="portfolio">
      <h1 className="portfolio__header">Layouts</h1>
      <div className=" portfolio__container">
        <Link to={pages.template_1} style={{ textDecoration: "none" }}>
          <div className="project">
            <div
              style={{ backgroundImage: `url(${landing_first})` }}
              className="project__image"
            ></div>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default Portfolio;
