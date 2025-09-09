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
  template_6: "https://w-ts.com.ua/",
};

const layouts = [
  { img: landing_first, link: pages.template_1 },
  { img: landing_second, link: pages.template_2 },
  { img: landing_third, link: pages.template_5 },
  { img: landing_fifth, link: pages.template_6 },
];

const Portfolio = () => {
  return (
    <div className="portfolio">
      <h1 className="portfolio__header">Layouts</h1>

      <Swiper
        modules={[Pagination]}
        pagination={{ clickable: true }}
        spaceBetween={20}
        loop={true}
        breakpoints={{
          0: { slidesPerView: 2 }, // телефоны
          600: { slidesPerView: 3 }, // планшеты
          1024: { slidesPerView: 3 }, // ноуты
          1366: { slidesPerView: 4 }, // десктопы
        }}
      >
        {layouts.map((layout, idx) => (
          <SwiperSlide key={idx}>
            <div className="layout">
              <Link to={layout.link}>
                <div
                  style={{ backgroundImage: `url(${layout.img})` }}
                  className="layout__image"
                ></div>
              </Link>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Portfolio;
