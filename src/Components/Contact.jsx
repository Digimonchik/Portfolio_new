import React from 'react';

const Contact = ({icon, text}) => {
    return (
        <div className='contact'>
            <img className='contact__image' src={icon} alt='icon'></img>
            <div className='contact__description'>{text}</div>
        </div>
    );
};

export default Contact;