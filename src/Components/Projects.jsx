import React from 'react';
import Project from './Project';
import project_calendar from '../Styles/images/calendar_project.JPG'
import hangman from '../Styles/images/hangman.jpg'
import project_todo from '../Styles/images/todo.jpg'
import wordsApp from '../Styles/images/wordapp.jpg'



class MyProject {
name;
link;
image;
description;

    constructor(name, link, image, description) {
        this.name = name;
        this.link = link;
        this.image = image;
        this.description = description
    }

}

 const projects = [
    // new MyProject('calendar','https://digimonchik.github.io/Calendar-react-http/', project_calendar, 'myFirst ever js project' ),
    new MyProject('todos', '/todoApp', project_todo, 'Todo list on MERN' ),
    new MyProject('hangmanGame', '/hangman', hangman, 'Hangman game on React'),
    new MyProject('wordsApp', '/wordsApp', wordsApp, 'Simple app using open API' )

]

const Projects = () => {
    
    return (
        <div className='portfolio'>
            <h1 className='portfolio__header'>Projects</h1>
            <div className=' portfolio__container'>

        {projects.map(element => <Project 
        pages_link={element.link} 
        linkText = 'project' 
        image ={element.image} 
        description={element.description}
        />)}
            </div>
        </div>
    );
};

export default Projects;