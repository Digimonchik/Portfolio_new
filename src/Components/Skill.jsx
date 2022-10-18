import React from 'react';

const Skill = ({icon, text}) => {
    console.log(icon)
    return (
        <div className='skill'>
            <img className='skill__image' src={icon} alt='icon'></img>
            <div className='skill__description'>{text}</div>
        </div>
    );
};

export default Skill;