import React from 'react';
import cv from '../Documents/CV.pdf'

const Footer = () => {
    return (
        <div className = 'footer'>
            <div className ='footer__info'>For more information click here:</div>
            <a href = {cv} className ='footer__button'> Get CV</a>
        </div>
    );
};

export default Footer;