import React from "react";
import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import "./projects.scss";

import hangman from "./1.png";
import project_todo from "./2.png";
import wordsApp from "./3.png";
import gifsApp from "./4.png";
import movies from "./5.png";

class MyProject {
  name;
  link;
  image;
  description;

  constructor(name, link, image, description) {
    this.name = name;
    this.link = link;
    this.image = image;
    this.description = description;
  }
}

const projects = [
  new MyProject("Movies to watch", "/movies", movies, "React/Redux-toolkit"),
  new MyProject("Gif's search", "/gifsApp", gifsApp, "React/Redux-toolkit"),
  new MyProject("Todo-list", "/todoApp", project_todo, "React/Redux-toolkit"),
  new MyProject("Hangman Game", "/hangman", hangman, "React"),
  new MyProject("Definitions", "/wordsApp", wordsApp, "React/MobX"),
];

const Projects = () => {
  return (
    <div className="carousel">
      <h1 className="carousel__header">Projects</h1>

      <Swiper
        modules={[Navigation, Pagination]}
        navigation
        pagination={{ clickable: true }}
        spaceBetween={50}
        slidesPerView={1}
        loop={true}
        className="carousel__swiper"
        autoplay={{
          delay: 300, // задержка между слайдами (в мс)
          disableOnInteraction: true, // не останавливать после ручного свайпа
        }}
      >
        {projects.map((project, idx) => (
          <SwiperSlide key={idx}>
            <div className="carousel__item">
              <Link to={project.link} className="carousel__link">
                <h3 className="carousel__title">{project.name}</h3>
                <div className="carousel__info">
                  <img
                    src={project.image}
                    alt={project.name}
                    className="carousel__image"
                  />
                  <p className="carousel__description">{project.description}</p>
                </div>
                {/* <button className="carousel__button-demo">See more</button> */}
              </Link>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Projects;
