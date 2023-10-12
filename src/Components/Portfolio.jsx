import React from 'react';
import Project from './Project';
import landing_first from '../Styles/images/template1.JPG'
import landing_second from '../Styles/images/template2.JPG'
import landing_third from '../Styles/images/template3.JPG'
import slider from '../Styles/images/slider.JPG'
const pages = {
    template_1: 'https://digimonchik.github.io/site_template_1/',
    template_2: 'https://digimonchik.github.io/site_template_2/',
    template_3: 'https://digimonchik.github.io/layout-cards/',
    template_4: "https://digimonchik.github.io/Slider/",
}

const Portfolio = () => {
    
    return (
        <div className='portfolio'>
            <h1 className='portfolio__header'>Layouts</h1>
            <div className=' portfolio__container'>
                <Project  pages_link = {pages.template_1}  image = {landing_first} description ='My first layout made with HTML/SASS'> </Project>
                <Project  pages_link = {pages.template_2}  image= {landing_second} description = 'Responsive layout HTML/SASS'></Project>
                <Project  pages_link = {pages.template_3}  image = {landing_third} description = 'Responsive cards HTML/SASS'></Project>
                <Project  pages_link = {pages.template_4}  image = {slider} description = 'Flexible slider HTML/CSS'></Project>
            </div>
        </div>
    );
};

export default Portfolio;