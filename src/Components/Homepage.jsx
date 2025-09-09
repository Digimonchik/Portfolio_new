import React, { useRef } from "react";
import About from "./About/About";
import Header from "./Header/Header";
import Skills from "./Skills/Skills";
import Portfolio from "./Layouts/Portfolio";
import TopBar from "./TopBar/TopBar";
import Footer from "./Footer/Footer";
import Projects from "./Projects/Projects_carousel";

const Homepage = () => {
  const aboutRef = useRef(null);

  const scrollToAbout = () => {
    aboutRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="homepage">
      <TopBar />
      <Header onAboutClick={scrollToAbout} />
      <Skills />
      <About ref={aboutRef} />
      <Portfolio />
      <Projects />
      <Footer />
    </div>
  );
};

export default Homepage;
