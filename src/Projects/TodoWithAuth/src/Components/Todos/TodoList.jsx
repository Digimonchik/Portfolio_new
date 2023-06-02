import React, {useEffect, useState, useContext} from 'react';
import { todoContext, authContext } from '../../../../../index';
import {observer} from 'mobx-react'


const TodoList = () => {

    const [todos, setTodos] = useState([])


    const {authStore} = useContext(authContext)
   
    const {todoStore} = useContext(todoContext)
    
     const userId  = authStore.user.id



    useEffect(() => {
        if(authStore.isAuth) {
            todoStore.getTodos(userId)
        }
    }, [authStore.isAuth])
    

    useEffect(() => setTodos(todoStore.todo), [todoStore.todo])
 
    const handledelete = (id) => {
        todoStore.deleteTodo(id)
        todoStore.getTodos(userId)
    }



    return (
        authStore.isAuth? 
        <div className='todo-page__list'>
            {todos.length > 0 ? todos.map( element => 

<div className='todo-page__todo' key = {element._id}>
    <div className='todo-page__todo_text'>{element.text}</div>
    {/* <div className ='todo-page__todo_isdone'>✓</div> */}
    <div className ='todo-page__todo_delete'onClick={() => handledelete(element._id)}>✖</div>
</div>) : <div> You have no active tasks</div> }
        </div> :
        <div>Please login to test this App</div>
    );
};

export default observer(TodoList);