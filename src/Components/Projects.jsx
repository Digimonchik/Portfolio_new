import React from 'react';
import Project from './Project';
import project_calendar from '../Styles/images/calendar_project.JPG'
import project_list from '../Styles/images/todo_project.JPG'
import hangman from '../Styles/images/hangman.jpg'

const pages = {
    // template_1: 'https://digimonchik.github.io/site_template_1/',
    // template_2: 'https://digimonchik.github.io/site_template_2/',
    // template_3: 'https://digimonchik.github.io/layout-cards/',
    calendar: 'https://digimonchik.github.io/Calendar-react-http/',
    todo: "https://digimonchik.github.io/todo_deploy/",
    hangman: "/hangman"
}
const repos = {
    // template_1: 'https://github.com/Digimonchik/site_template_1',
    // template_2: 'https://github.com/Digimonchik/site_template_2',
    // template_3: 'https://github.com/Digimonchik/layout-cards/',
    calendar: 'https://github.com/Digimonchik/Calendar-react-http/',
    todo: "https://github.com/Digimonchik/ToDoList-React",
    repos: '#',

}
const Projects = () => {
    
    return (
        <div className='portfolio'>
            <h1 className='portfolio__header'>Projects</h1>
            <div className=' portfolio__container'>
                {/* <Project  pages_link = {pages.template_1} repo_link = {repos.template_1} image = {landing_first} description ='First template page html/sass '> </Project>
                <Project  pages_link = {pages.template_2} repo_link = {repos.template_2} image= {landing_second} description = 'Responsive template html/sass'></Project>
                <Project  pages_link = {pages.template_3} repo_link = {repos.template_3} image = {landing_third} description = 'Single-page responsive template'></Project> */}
                <Project  pages_link = {pages.calendar} repo_link = {repos.calendar} linkText='js project' description='My first ever project. Pure js and free REST API' image = {project_calendar} ></Project>
                <Project  pages_link = {pages.todo} repo_link = {repos.todo} linkText='js project' image ={project_list} description= 'Tasks list react project. REST API'></Project>
                <Project  pages_link = {pages.hangman} repo_link = {repos.hangman} linkText='js project' image ={hangman} description= 'Hangman game. React'></Project>
                <Project  pages_link = {pages.hangman} repo_link = {repos.hangman} linkText='js project' image = {''} description= 'Hangman game. React'></Project>
                <Project  pages_link = {pages.hangman} repo_link = {repos.hangman} linkText='js project' image ={''} description= 'Hangman game. React'></Project>
            </div>
        </div>
    );
};

export default Projects;