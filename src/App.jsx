import React from 'react';
import About from './Components/About';
import Header from './Components/Header';
import Skills from './Components/Skills';
import Portfolio from './Components/Portfolio';
import Contacts from './Components/Contacts';
import Footer from './Components/Footer';

const App = () => {

  return (
  <div className='page'>
      <Header></Header>
      <About></About>
      <Skills></Skills>
      <Portfolio></Portfolio>
      <Contacts></Contacts>
      <Footer></Footer>
    </div>
    

  );
};

export default App;