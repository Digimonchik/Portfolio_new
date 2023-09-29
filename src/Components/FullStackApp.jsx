import React from 'react';
import Project from './Project';
import wts from '../Styles/images/wts.JPG'


const pages = {
    template_1: 'https://w-ts.com.ua',

}

const FullStackApp = () => {
    
    return (
        <div className='portfolio'>
            <h1 className='portfolio__header'>Web Apps</h1>
            <div className=' portfolio__container'>
                <Project  pages_link = {pages.template_1}  image = {wts} description ='Fullstack web app for online training center'> </Project>
            </div>
        </div>
    );
};

export default FullStackApp