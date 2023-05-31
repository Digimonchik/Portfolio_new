import React from 'react';
import cv from '../Documents/CV.pdf'

const Curiculum = () => {
    return (
        <div className = 'cv'>
            <div className ='cv__info'>For more information click here:</div>
            <a href = {cv} className ='cv__button'> Get CV</a>
        </div>
    );
};

export default Curiculum;