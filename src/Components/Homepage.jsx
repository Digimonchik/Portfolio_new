import React from "react";
import About from "./About/About";
import Header from "./Header/Header";
import Skills from "./Skills/Skills";
import Portfolio from "./Portfolio";
import Contacts from "./Contacts";
import Curiculum from "./Curiculum";
import TopBar from "./TopBar/TopBar";
import Footer from "./Footer";
import Projects from "./Projects";
import FullStackApp from "./FullStackApp";

const Homepage = () => {
  return (
    <div className="homepage">
      <TopBar></TopBar>
      <Header></Header>
      <Skills></Skills>
      <About></About>
      <Portfolio></Portfolio>
      <Projects></Projects>
      <FullStackApp></FullStackApp>
      <Contacts></Contacts>
      <Curiculum></Curiculum>
      <Footer></Footer>
    </div>
  );
};

export default Homepage;
