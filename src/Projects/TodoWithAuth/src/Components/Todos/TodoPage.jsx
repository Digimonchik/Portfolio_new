import React from 'react';
import CreateTodo from './CreateTodo';
import TodoList from './TodoList';
import TopBar from '../../../../../Components/TopBar';
import Footer from '../../../../../Components/Footer';


const TodoPage = () => {
    return (
        <div className = 'todo-page'>
         <TopBar></TopBar>
        <div className='todo-page__container'>
        <CreateTodo></CreateTodo>
        <TodoList></TodoList>
            </div>
        <Footer></Footer>
        </div>
    );
};

export default TodoPage;