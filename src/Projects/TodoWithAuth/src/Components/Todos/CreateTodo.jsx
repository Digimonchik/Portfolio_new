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
            <div className = 'todo-page__create_button' onClick ={() => todoStore.createTodo(userId, inputValue)}>Create task</div>
        </div>
    );
};

export default observer(CreateTodo);