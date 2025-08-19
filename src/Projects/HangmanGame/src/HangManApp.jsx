import React from "react";
import HangmanGame from "./HangmanGame";
import Footer from "../../../Components/Footer";
import TopBar from "../../../Components/TopBar/TopBar";

const HangManApp = () => {
  return (
    <div className="hangman__app">
      <TopBar></TopBar>
      <HangmanGame />
      <Footer></Footer>
    </div>
  );
};

export default HangManApp;
