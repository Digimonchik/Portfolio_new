import React from "react";
import About from "./About/About";
import Header from "./Header/Header";
import Skills from "./Skills/Skills";
import Portfolio from "./Layouts/Portfolio";
import TopBar from "./TopBar/TopBar";
import Footer from "./Footer/Footer";
import Projects from "./Projects/Projects_carousel";

const Homepage = () => {
  return (
    <div className="homepage">
      <TopBar></TopBar>
      <Header></Header>
      <Skills></Skills>
      <About></About>
      <Portfolio></Portfolio>
      <Projects></Projects>
      <Footer></Footer>
    </div>
  );
};

export default Homepage;
