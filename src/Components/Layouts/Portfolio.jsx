import React from "react";
import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

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

const layouts = [
  { img: landing_first, link: pages.template_1 },
  { img: landing_second, link: pages.template_2 },
  { img: landing_third, link: pages.template_3 },
  { img: landing_fifth, link: pages.template_5 },
];

const Portfolio = () => {
  return (
    <div className="portfolio">
      <h1 className="portfolio__header">Layouts</h1>

      {/* Десктопная сетка */}
      <div className="portfolio__container portfolio__container--desktop">
        {layouts.map((layout, idx) => (
          <Link to={layout.link} key={idx}>
            <div className="layout">
              <div
                style={{ backgroundImage: `url(${layout.img})` }}
                className="layout__image"
              ></div>
            </div>
          </Link>
        ))}
      </div>

      {/* Мобильная/планшетная карусель */}
      <div className="portfolio__container portfolio__container--mobile">
        <Swiper
          modules={[Pagination]}
          pagination={{ clickable: true }}
          spaceBetween={20}
          loop={true}
          breakpoints={{
            0: { slidesPerView: 2 }, // до 600px
            600: { slidesPerView: 3 }, // от 600px
            1366: { slidesPerView: 4 }, // от 1024px
          }}
        >
          {layouts.map((layout, idx) => (
            <SwiperSlide key={idx}>
              <Link to={layout.link}>
                <div className="layout">
                  <div
                    style={{ backgroundImage: `url(${layout.img})` }}
                    className="layout__image"
                  ></div>
                </div>
              </Link>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default Portfolio;
