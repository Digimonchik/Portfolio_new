import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./projects.scss";
import hangman from "./1.png";
import project_todo from "./2.png";
import wordsApp from "./3.png";
import gifsApp from "./4.png";

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
  new MyProject(
    "Todo-lists",
    "/todoApp",
    project_todo,
    "React/Redux-toolkit/MERN"
  ),
  new MyProject("Hangman Game", "/hangman", hangman, "React"),
  new MyProject("Definitions", "/wordsApp", wordsApp, "React/MobX"),
  new MyProject("Gif's search", "/gifsApp", gifsApp, "React/Redux-toolkit"),
];

const Projects = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev === 0 ? projects.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev === projects.length - 1 ? 0 : prev + 1));
  };

  const currentProject = projects[currentIndex];

  return (
    <div className="carousel">
      <div className="carousel__item">
        <Link to={currentProject.link} className="carousel__link">
          <h3 className="carousel__title">{currentProject.name}</h3>

          <div className="carousel__info">
            <img
              src={currentProject.image}
              alt={currentProject.name}
              className="carousel__image"
            />
            <p className="carousel__description">
              {currentProject.description}
            </p>
          </div>
          <button className="carousel__button-demo">See more</button>
        </Link>
      </div>

      <button
        onClick={prevSlide}
        className="carousel__button carousel__button--prev"
      >
        ←
      </button>
      <button
        onClick={nextSlide}
        className="carousel__button carousel__button--next"
      >
        →
      </button>

      <div className="carousel__indicators">
        {projects.map((_, idx) => (
          <div
            key={idx}
            className={`carousel__dot ${
              idx === currentIndex ? "carousel__dot--active" : ""
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default Projects;
