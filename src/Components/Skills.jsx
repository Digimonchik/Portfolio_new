import React from 'react';
import Skill from './Skill';


const  Skills = () => {
    return (
        <div className='skills'>
            <h1 className = 'skills__header'>Skills</h1>
            <div className='skills__container'>
            <Skill text = 'Java Script' icon = 'https://cdn-icons-png.flaticon.com/512/5968/5968292.png'></Skill>
            <Skill text = 'HTML' icon = 'https://cdn-icons-png.flaticon.com/512/732/732212.png'></Skill>
            <Skill  text ='CSS' icon = 'https://cdn-icons-png.flaticon.com/512/732/732190.png'></Skill>
            <Skill text = 'React' icon = 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/640px-React-icon.svg.png'></Skill>
            <Skill text = 'Sass' icon = 'https://cdn.iconscout.com/icon/free/png-256/sass-226054.png'></Skill>
            <Skill text = 'Express JS'icon = 'https://creazilla-store.fra1.digitaloceanspaces.com/icons/3498663/status-iucn-ex-icon-blank-icon-md.png'></Skill>
            <Skill text = 'Node JS'icon = 'https://static-00.iconduck.com/assets.00/node-js-icon-227x256-913nazt0.png'></Skill>
            <Skill text = 'Mongo DB'icon = 'https://www.svgrepo.com/show/331488/mongodb.svg'></Skill>
            </div>
        </div>
    );
};

export default  Skills;