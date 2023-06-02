import React, {useState, useContext} from 'react';
import { todoContext, authContext } from '../../../../../index';
import {observer} from 'mobx-react'

const CreateTodo = () => {

const [inputValue, setValue] = useState('')

const {authStore} = useContext(authContext)
const {todoStore} = useContext(todoContext)

 const userId  = authStore.user.id



    return (
        <div className='todo-page__create'>
            <input  className = 'todo-page__create_input' type ='text' value = {inputValue} onChange={event => setValue(event.target.value)} ></input>
            <button disabled ={!authStore.isAuth} className = {authStore.isAuth ? 'todo-page__create_button' : 'todo-page__create_button disabled'} onClick ={() => todoStore.createTodo(userId, inputValue)}>Create task</button>
        </div>
    );
};

export default observer(CreateTodo);