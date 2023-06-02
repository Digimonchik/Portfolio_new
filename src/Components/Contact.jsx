import React from 'react';
import { useLocation } from 'react-router-dom';


const styles = {
    background: 'inear-gradient(120deg, #fdfbfb 0%, #ebedee 100%)',
    boxShadow: 'rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 1px 3px 1px;',   
    margin: '10px'
}

const Contact = ({icon, text}) => {

    const location = useLocation();

    const currentPath = location.pathname;

    


    
    return (
    
        <div style={currentPath === '/contacts' ? styles : {}} className='contact '>
            <img className='contact__image' src={icon} alt='icon'></img>
            <div className='contact__description'>{text}</div>
        </div>
    );
};

export default Contact;