import React from 'react';
import {Link} from 'react-router-dom';

const Project = ({pages_link, image, description}) => {
    return (
        <Link to={pages_link} style={{textDecoration: 'none'}}>
        <div className='project'>
            <div style={{ backgroundImage:`url(${image})` }} className='project__image'></div>
            <span className = 'project__description'>{description}</span>
        </div>
        </Link>
    );
};

export default Project;