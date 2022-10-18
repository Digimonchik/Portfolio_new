import React from 'react';

const Project = ({repo_link, pages_link, image, description}) => {
    return (
        <div className='project'>
            <div style={{ backgroundImage:`url(${image})` }} className='project__image'></div>
            <a className ='project__link' href={repo_link} >GitHub repository</a>
            <a className ='project__link' href={pages_link}>GitHub pages</a>
            <span className = 'project__description'>{description}</span>
        </div>
    );
};

export default Project;