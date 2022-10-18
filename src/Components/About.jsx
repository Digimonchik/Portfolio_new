import React from 'react';

const About = () => {
    return (
        <div className='about'>
           <h1 className='about__header'>About me</h1>
           <div className='about__container'>
           <span className='about__info'>Hey! My name is Dima. I am trainee web developer from Kyiv.</span> 
           <span className='about__info'> Currently exploring Typescript and Node.js</span>
           <span className='about__info'>Ready to implement excellent projects with wonderful people.</span>
        </div>
        </div>
    );
};

export default About;