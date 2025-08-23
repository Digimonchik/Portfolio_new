import React from "react";
import { Link } from "react-router-dom";
import "./portfolio.scss";
import landing_first from "./1.PNG";
import landing_second from "./2.PNG";
import landing_third from "./3.PNG";
import landing_fifth from "./4.PNG";
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
        <Link to={pages.template_1}>
          <div className="project">
            <div
              style={{ backgroundImage: `url(${landing_first})` }}
              className="layout__image"
            ></div>
          </div>
        </Link>
        <Link to={pages.template_2}>
          <div className="project">
            <div
              style={{ backgroundImage: `url(${landing_second})` }}
              className="layout__image"
            ></div>
          </div>
        </Link>
        <Link to={pages.template_3}>
          <div className="project">
            <div
              style={{ backgroundImage: `url(${landing_third})` }}
              className="layout__image"
            ></div>
          </div>
        </Link>
        <Link to={pages.template_5}>
          <div className="project">
            <div
              style={{ backgroundImage: `url(${landing_fifth})` }}
              className="layout__image"
            ></div>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default Portfolio;
