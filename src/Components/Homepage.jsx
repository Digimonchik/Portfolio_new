import React from 'react';
import About from './About';
import Header from './Header';
import Skills from './Skills';
import Portfolio from './Portfolio';
import Contacts from './Contacts';
import Curiculum from './Curiculum';
import TopBar from './TopBar';
import Footer from './Footer';
import Projects from './Projects';


const Homepage = () => {

  return (

  <div className='page'>
      <TopBar></TopBar>
      <Header></Header>
      <About></About>
      <Skills></Skills>
      <Portfolio></Portfolio>
      <Projects></Projects>
      <Contacts></Contacts>
        <Curiculum></Curiculum>
      <Footer></Footer>
    </div>
    

  );
};

export default Homepage;