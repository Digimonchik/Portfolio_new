import React from 'react';
import TopBar from '../../Components/TopBar';
import Footer from '../../Components/Footer';
import GifsApp from '../GifsApp/GifsApp'


const GifsPage = () => {
    return (
        <div className = 'gifs-page'>
         <TopBar></TopBar>
         <GifsApp></GifsApp>
        <Footer></Footer>
        </div>
    );
};

export default GifsPage;