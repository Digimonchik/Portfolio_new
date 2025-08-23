import React from "react";
import Project from "./Project";
import hangman from "../Styles/images/hangman.jpg";
import project_todo from "../Styles/images/todo.png";
import wordsApp from "../Styles/images/wordapp.jpg";
import gifsApp from "../Styles/images/gifs.png";

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
    "todos",
    "/todoApp",
    project_todo,
    "Todo-lists: React/Redux-toolkit/MERN"
  ),
  new MyProject("hangmanGame", "/hangman", hangman, "Hangman game: React/MobX"),
  new MyProject("wordsApp", "/wordsApp", wordsApp, "Dictionary: React/MobX"),
  new MyProject(
    "GifsApp",
    "/gifsApp",
    gifsApp,
    "Gifs search: React/Redux-toolkit"
  ),
];

const Projects = () => {
  return <div></div>;
};

export default Projects;
