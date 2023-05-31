import React, {useEffect, useState, useContext} from 'react';
import { todoContext, authContext } from '../../../../../index';
import {observer} from 'mobx-react'


const TodoList = () => {

    const [todos, setTodos] = useState([])


    const {authStore} = useContext(authContext)
   
    const {todoStore} = useContext(todoContext)
    
     const userId  = authStore.user.id

    
    useEffect(() => setTodos(todoStore.todo), [todoStore.todo])
    useEffect(() => setTodos(todoStore.todo), [])
    const handledelete = (id) => {
        todoStore.deleteTodo(id)
        todoStore.getTodos(userId)
    }


const show = () => todos.map( element => 

<div className='todo-page__todo' key = {element._id}>
    <div className='todo-page__todo_text'>{element.text}</div>
    <div className ='todo-page__todo_isdone'>✓</div>
    <div className ='todo-page__todo_delete'onClick={() => handledelete(element._id)}>✖</div>
</div>
    
            ) 

    return (
        authStore.isAuth? 
        <div className='todo-page__list'>
            {todos.length > 0 ? show() : <div> You have no active tasks</div> }
        </div> :
        <div>Please Login to see the tasks</div>
    );
};

export default observer(TodoList);