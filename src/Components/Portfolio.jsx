import React from 'react';
import Project from './Project';
import landing_first from '../Styles/images/template1.JPG'
import landing_second from '../Styles/images/template2.JPG'
import landing_third from '../Styles/images/template3.JPG'
import project_calendar from '../Styles/images/calendar_project.JPG'
import project_list from '../Styles/images/todo_project.JPG'

const pages = {
    template_1: 'https://digimonchik.github.io/site_template_1/',
    template_2: 'https://digimonchik.github.io/site_template_2/',
    template_3: 'https://digimonchik.github.io/layout-cards/',
    calendar: 'https://digimonchik.github.io/Calendar-react-http/',
    todo: "https://digimonchik.github.io/todo_deploy/"
}
const repos = {
    template_1: 'https://github.com/Digimonchik/site_template_1',
    template_2: 'https://github.com/Digimonchik/site_template_2',
    template_3: 'https://github.com/Digimonchik/layout-cards/',
    calendar: 'https://github.com/Digimonchik/Calendar-react-http/',
    todo: "https://github.com/Digimonchik/ToDoList-React"

}
const Portfolio = () => {
    
    return (
        <div className='portfolio'>
            <h1 className='portfolio__header'>Portfolio</h1>
            <div className=' portfolio__container'>
                <Project  pages_link = {pages.template_1} repo_link = {repos.template_1} image = {landing_first} description ='First template page html/sass '> </Project>
                <Project  pages_link = {pages.template_2} repo_link = {repos.template_2} image= {landing_second} description = 'Responsive template html/sass'></Project>
                <Project  pages_link = {pages.template_3} repo_link = {repos.template_3} image = {landing_third} description = 'Single-page responsive template'></Project>
                <Project  pages_link = {pages.calendar} repo_link = {repos.calendar} linkText='js project' description='Simple calendar js project. REST API' image = {project_calendar} ></Project>
                <Project  pages_link = {pages.todo} repo_link = {repos.todo} clinkText='js project' image ={project_list} description= 'Tasks list react project. REST API'></Project>
            </div>
        </div>
    );
};

export default Portfolio;